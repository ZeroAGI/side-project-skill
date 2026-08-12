export const meta = {
  name: 'demand-discovery',
  description: '每日需求发现：热点雷达 → 15 组信号源 + 动态热点组并行扫描 → 交叉分析 → 报告撰写',
  whenToUse: '每日或每周执行一次，系统性发现可产品化的用户痛点和市场机会（必须传 args.date）',
  phases: [
    { title: 'Hot Topic Radar', detail: 'Detect breaking events from last-72h media and derive dynamic search queries' },
    { title: 'Signal Collection', detail: '15 static groups + dynamic hot-topic groups, run 6 at a time with 3 attempts each (2026-07-27 timeout fix)' },
    { title: 'Cross-Analysis', detail: 'Identify cross-validated patterns and score opportunities' },
    { title: 'Report Writing', detail: 'Write daily report and update opportunity tracker' },
  ],
}

// ── Schemas ──────────────────────────────────────────────────────────────────

const SIGNAL_SCHEMA = {
  type: 'object',
  properties: {
    group: { type: 'string' },
    signals: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          source_url: { type: 'string' },
          source_date: { type: 'string' },
          signal_type: { type: 'string', enum: ['product_market', 'pain_point', 'trend'] },
          description: { type: 'string' },
          user_quote: { type: 'string' },
          // 评论区/review 区的补充原声（除 user_quote 外最多 3 条，注明出处位置如 "PH review"/"HN top comment"/"GitHub issue #123"）——
          // 用户评论是比标题和排名更高密度的需求信号，值得单独保留。
          top_comments: { type: 'array', items: { type: 'string' } },
          metrics: { type: 'string' },
          ai_opportunity: { type: 'string' },
          // 信源溯源：source_url 是否为一手平台（原帖/官方页/监管机构/主流媒体一手报道）。
          // SEO 聚合站、个人博客转述、厂商营销号 = secondhand: true。
          secondhand: { type: 'boolean' },
          // 数据原始出处平台（如 reddit.com, github.com, clawhub.ai, survey.stackoverflow.co）——
          // 与 source_url 域名不一致时即为二手转述。
          primary_platform: { type: 'string' },
          // 访问/抓取日期（即扫描当天）。source_date 必须是内容原始日期（发帖日/上线日/发布日），
          // 两者不可混同；榜单快照类信号 source_date 留空、以 fetched_at 表达时效。
          fetched_at: { type: 'string' },
        },
        required: ['title', 'signal_type', 'description', 'source_url', 'secondhand'],
      },
    },
  },
  required: ['group', 'signals'],
}

const ANALYSIS_SCHEMA = {
  type: 'object',
  properties: {
    opportunities: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          one_liner: { type: 'string' },
          target_user: { type: 'string' },
          pain_score: { type: 'number' },
          market_score: { type: 'number' },
          competition_score: { type: 'number' },
          ai_fit_score: { type: 'number' },
          mvp_difficulty: { type: 'number' },
          defensibility: { type: 'number' },
          composite_score: { type: 'number' },
          cross_validation: { type: 'string' },
          sources: { type: 'array', items: { type: 'string' } },
          is_new: { type: 'boolean' },
        },
        required: ['name', 'composite_score'],
      },
    },
    cross_signals: { type: 'array', items: { type: 'string' } },
    meta_insights: { type: 'array', items: { type: 'string' } },
  },
  required: ['opportunities'],
}

// ── Search Group Definitions ─────────────────────────────────────────────────

// 日期必须显式传入且合法 — 静默回退到旧日期会让整次扫描搜错时间窗（2026-07-20 曾因此漏掉 WAIC）
const rawDate = args && args.date ? String(args.date).replace(/[^0-9-]/g, '') : ''
if (!/^\d{4}-\d{2}(-\d{2})?$/.test(rawDate)) {
  throw new Error(
    `demand-discovery requires a valid date arg, got: ${JSON.stringify(args && args.date)}. ` +
      'Invoke as Workflow({ name: "demand-discovery", args: { date: "YYYY-MM-DD" } })'
  )
}
const REPO_ROOT = '/Users/book/Documents/project/ai_native_products/side-project-skill'

// 2026-07-30 事故：回填 agent 遇到写坏的嵌套路径（reports/reports、被当字面文件名的 Windows 路径）后，
// 用 `rm -rf <repo>/reports && mkdir -p ...` 去「重建干净目录」，删掉了 25 个历史日期的全部报告。
// 有一条是 `mv reports/.../20-hot-topic-4.md reports/.../ && rm -rf reports`——先搬文件再删掉装它的树。
// 已提交内容靠 `git restore reports` 救回，当天未提交的 10 个归档文件永久丢失。
// 根因：「create the directory if needed」被理解成「使该目录处于期望状态」，包含删掉重建；
// 而 agent 看不到那个目录里还有三个月的他人产出。
const WRITE_SAFETY = `FILE-WRITE SAFETY (hard rules — read before any shell command):
- The ONLY filesystem mutations you may perform are: \`mkdir -p\` and writing/editing YOUR OWN target file.
- NEVER run rm, rmdir, mv, or any destructive/"clean up" command against an existing path — not even to fix a mistake you just made, and not even when a path looks wrong, stale, or duplicated. \`reports/\` holds months of other runs' output.
- If a path looks malformed (a nested \`reports/reports\`, a literal Windows path, a stray directory), DO NOT clean it. Leave it in place and say so in your returned text; the orchestrator handles cleanup.
- Use the absolute POSIX path given to you verbatim. Do not construct paths from a guessed cwd, and never use backslashes or drive letters.`

const today = rawDate
const year = today.slice(0, 4)
const month = today.slice(0, 7)
// PH 榜单 URL 用非补零月/日：/leaderboard/monthly/2026/7、/leaderboard/daily/2026/7/21
const monthNum = String(parseInt(today.slice(5, 7), 10))
const dayNum = today.length >= 10 ? String(parseInt(today.slice(8, 10), 10)) : ''
// PH 周榜用 ISO 周数：/leaderboard/weekly/2026/30（页面 404 时让 agent ±1 调整）
const _d = new Date(Date.UTC(+today.slice(0, 4), +today.slice(5, 7) - 1, +(today.slice(8, 10) || 15)))
_d.setUTCDate(_d.getUTCDate() + 4 - (_d.getUTCDay() || 7))
const isoWeek = String(Math.ceil(((_d - Date.UTC(_d.getUTCFullYear(), 0, 1)) / 86400000 + 1) / 7))

// 每组通用的日期语义说明（2026-07-21 审计：PH 组全部信号 source_date 被错填为当月 1 日）
const DATE_RULES = `DATE SEMANTICS (hard rules):
- source_date = the content's ORIGINAL date (post date / product launch date / publish date). NEVER the date you visited the page, NEVER a placeholder like the 1st of the month.
- fetched_at = today (${today}), the date you accessed the page.
- Leaderboard/marketplace snapshots (a "top this month" page) have no single content date — leave source_date empty and rely on fetched_at. For an individual product on that leaderboard, source_date is its LAUNCH date if visible on its page.
- If you cannot determine the original date, leave source_date empty. An empty field is better than a wrong date.`

const SEARCH_GROUPS = [
  {
    key: 'producthunt-leaderboards-reviews',
    label: 'Product Hunt 四档榜单 + Review 深挖',
    type: 'product_market',
    prompt: `Collect PRODUCT MARKET SIGNALS from Product Hunt — leaderboards at FOUR time scales, plus product REVIEWS.

FETCH-FIRST: WebFetch the leaderboards DIRECTLY, ONE AT A TIME. Do NOT search for "what's trending on Product Hunt".
${dayNum ? `1. https://www.producthunt.com/leaderboard/daily/${year}/${monthNum}/${dayNum} — daily top 5 (if sparse, also try 1-2 recent days by decrementing the day)` : ''}
2. https://www.producthunt.com/leaderboard/weekly/${year}/${isoWeek} — weekly top 5 (if the page 404s, adjust the week number ±1)
3. https://www.producthunt.com/leaderboard/monthly/${year}/${monthNum} — monthly top 5
4. https://www.producthunt.com/leaderboard/yearly/${year} — yearly top 5

WHY FOUR TIME SCALES: comparing daily→weekly→monthly→yearly reveals trend shifts — what survives from daily spike to monthly/yearly = durable demand; what appears at daily/weekly only = emerging category worth watching. Note explicitly which categories/products persist across scales and which are new this week.

REVIEW DEEP-DIVE (mandatory): for the top products (at least the top 3 of daily and weekly, plus any product appearing on ≥2 leaderboards), fetch the product's reviews page: https://www.producthunt.com/products/{slug}/reviews
- Extract: what users PRAISE (= validated core value), what users COMPLAIN about (= improvement gap an indie builder can attack), and exact quotes → top_comments.
- Reviews and launch-day comments are higher-density demand signals than vote counts — a 4.2-star product with recurring complaints about the same missing feature is a productization opening.

EXTRACTION RULES:
- Capture each leaderboard CONTIGUOUSLY from rank #1 down (top 5 per scale minimum) — do not cherry-pick. Record rank, votes, comments, which leaderboard(s) it appears on.
- For notable products, fetch the product page for launch date and tagline; source_date = launch date.
- Only fall back to WebSearch if a direct fetch fails (blocked/empty), and then mark those results secondhand as appropriate.

For each product: name, problem solved, target user, business model, popularity metrics, review insights (praise vs complaints), and AI practitioner insights.

${DATE_RULES}`,
  },
  {
    key: 'appsumo-clawhub',
    label: 'AppSumo + ClawHub',
    type: 'product_market',
    prompt: `Collect PRODUCT MARKET SIGNALS from AppSumo and ClawHub.

FETCH-FIRST: WebFetch these public pages DIRECTLY, ONE AT A TIME:
1. https://appsumo.com/collections/trending-ai/ — trending AI deals
2. https://appsumo.com/browse/ — browse page (deal categories, prices, review counts)
3. https://clawhub.ai/ — read the "Featured" / "Top" / "Trending" sections for agent skill download counts

REVIEW DEEP-DIVE (mandatory): for the top 3-5 AppSumo deals, open the deal page and read user reviews — capture what buyers praise, what they complain about (refund reasons, missing features), and exact quotes → top_comments. Buyer reviews on lifetime deals are strong willingness-to-pay evidence AND a gap map.

EXTRACTION RULES:
- AppSumo: deal name, price (LTD price vs original), rating, review count, category, review quotes.
- ClawHub: skill name, download count, what capability gap it fills; if a skill page shows user feedback/issues, capture them.
- Only fall back to WebSearch if a direct fetch fails (blocked/empty), and then mark those results secondhand as appropriate.

ClawHub: focus on what Agent skills are in high demand → AI Agent ecosystem real needs.

${DATE_RULES}`,
  },
  {
    key: 'upwork-fiverr-gumroad-zapier',
    label: 'Upwork + Fiverr + Gumroad + Zapier/Make',
    type: 'product_market',
    prompt: `Collect PRODUCT MARKET SIGNALS from freelance marketplaces, digital product stores, and automation platforms.

FETCH-FIRST: WebFetch these public pages DIRECTLY, one at a time:
1. https://www.upwork.com/freelance-jobs/ — browse in-demand AI/automation job categories (follow into AI-related subcategories for rates and posting volume)
2. https://www.fiverr.com/categories/trending — trending gig categories (follow into AI service categories for price ranges and review counts)
3. https://gumroad.com/discover — discover page (AI/software categories, best sellers, prices, sales counts)
4. https://zapier.com/apps — popular apps/integrations (which AI apps are most-connected)
5. https://www.make.com/en/integrations — popular integrations

EXTRACTION RULES:
- Extract: service/product type, price range, purchase/review counts, what's being productized.
- Zapier/Make: which workflows are high-frequency connected → automation pain = productization opportunity.
- These marketplaces may block bots or require JS. If a fetch returns empty/blocked, retry once with the platform's sitemap or category URL; only then fall back to WebSearch, marking results secondhand when the URL is not the platform itself.

${DATE_RULES}`,
  },
  {
    key: 'kickstarter-shopify-chrome-udemy',
    label: 'Kickstarter + Shopify + Chrome Store + Udemy',
    type: 'product_market',
    prompt: `Collect PRODUCT MARKET SIGNALS from crowdfunding, e-commerce, browser extensions, and learning platforms.

FETCH-FIRST: WebFetch these public pages DIRECTLY, one at a time:
1. https://www.kickstarter.com/discover — discover page (Technology category; funding amounts, backer counts, days left)
2. https://apps.shopify.com/ — app store home + AI category (ratings, review counts, pricing)
3. https://chromewebstore.google.com/ — featured/popular AI & productivity extensions (user counts, ratings)
4. https://www.udemy.com/featured-topics/ — featured topics (AI/automation course enrollment counts, ratings)

EXTRACTION RULES:
- Kickstarter: source_date = campaign launch date if visible; funding amount and backer count are as-of fetched_at.
- Shopify apps: review count/rating are cumulative — do NOT assign them a fresh source_date; source_date = app listing launch date ONLY if shown, else empty.
- Udemy: what skills/tools people pay to learn → demand heat validation.
- Fall back to WebSearch only when a direct fetch fails; mark non-platform URLs secondhand.

${DATE_RULES}`,
  },
  {
    key: 'reddit-business',
    label: 'Reddit 创业/商业痛点',
    type: 'pain_point',
    prompt: `Collect PAIN POINT SIGNALS from BUSINESS/STARTUP subreddits — every signal MUST link an actual reddit.com thread.

FETCH-FIRST: WebFetch subreddit listings DIRECTLY (old.reddit.com renders more reliably), one at a time:
1. https://old.reddit.com/r/SaaS/top/?t=week
2. https://old.reddit.com/r/startups/top/?t=week
3. https://old.reddit.com/r/Entrepreneur/top/?t=week
4. https://old.reddit.com/r/smallbusiness/top/?t=week
5. https://old.reddit.com/r/sidehustle/top/?t=week
6. https://old.reddit.com/r/indiehackers/top/?t=week
7. https://old.reddit.com/r/B2BSaaS/top/?t=week

THREAD DEEP-DIVE (mandatory): from each listing, open the 3-5 HIGHEST-UPVOTED threads relevant to tools/pain/willingness-to-pay — read the OP text AND the top comments. The comment section usually contains the sharpest pain articulation, workarounds people currently pay for, and "I'd pay for this" replies; capture exact quotes → user_quote + top_comments.

Supplement (optional): WebSearch site:reddit.com "I wish there was" AI tool ${year} — but any result you keep MUST be fetched and cited as the reddit.com thread URL itself.

FALLBACK WHEN REDDIT IS BLOCKED (mandatory — do NOT return an empty group without trying this):
old.reddit.com/www.reddit.com are frequently unreachable from this environment (harness domain refusal, Reddit 403 anti-bot on direct curl, redlib mirrors DNS-poisoned, pullpush.io archive stale since 2025-05). When direct fetch fails, use the Arctic Shift academic archive API, which serves full post + comment text and lets you keep real reddit.com thread URLs:
  https://arctic-shift.photon-reddit.com/api/posts/search?subreddit={sub}&after={YYYY-MM-DD}&limit=100&sort=desc
  https://arctic-shift.photon-reddit.com/api/comments/search?link_id={post_id}&limit=100
Reconstruct source_url as https://www.reddit.com/r/{sub}/comments/{post_id}/{slug}/ — this satisfies the provenance rule because the text IS the verbatim thread content, not a third-party summary.
CAVEAT: archive "score" is a snapshot at crawl time; posts from the last 1-2 days are under-counted, so rank primarily on posts older than 2 days.
Only after BOTH direct fetch and Arctic Shift fail may you return 0 signals — and then record every attempted path in the channel-failure notes.


EXTRACTION RULES:
- source_url MUST be a reddit.com/r/... thread URL. A blog summarizing "what Reddit thinks" is NOT acceptable as a Reddit signal.
- Extract: pain point description, user quotes (exact words, OP + comments), subreddit, upvotes, existing solutions status.
- source_date = thread post date (visible on the thread page).

${DATE_RULES}`,
  },
  {
    key: 'reddit-ai-dev',
    label: 'Reddit AI/开发者痛点',
    type: 'pain_point',
    prompt: `Collect PAIN POINT SIGNALS from AI/DEVELOPER subreddits — every signal MUST link an actual reddit.com thread.

FETCH-FIRST: WebFetch subreddit listings DIRECTLY (old.reddit.com renders more reliably), one at a time:
1. https://old.reddit.com/r/AI_Agents/top/?t=week
2. https://old.reddit.com/r/ClaudeAI/top/?t=week
3. https://old.reddit.com/r/LocalLLaMA/top/?t=week
4. https://old.reddit.com/r/ChatGPTPro/top/?t=week
5. https://old.reddit.com/r/cursor/top/?t=week
6. https://old.reddit.com/r/artificial/top/?t=week

THREAD DEEP-DIVE (mandatory): from each listing, open the 3-5 HIGHEST-UPVOTED threads about tool frustrations, feature gaps, workflow pain, or cost complaints — read the OP text AND the top comments. Comment sections carry the workarounds, "+1 same problem" volume, and tool-switching stories that quantify a pain; capture exact quotes → user_quote + top_comments.

FALLBACK WHEN REDDIT IS BLOCKED (mandatory — do NOT return an empty group without trying this):
old.reddit.com/www.reddit.com are frequently unreachable from this environment (harness domain refusal, Reddit 403 anti-bot on direct curl, redlib mirrors DNS-poisoned, pullpush.io archive stale since 2025-05). When direct fetch fails, use the Arctic Shift academic archive API, which serves full post + comment text and lets you keep real reddit.com thread URLs:
  https://arctic-shift.photon-reddit.com/api/posts/search?subreddit={sub}&after={YYYY-MM-DD}&limit=100&sort=desc
  https://arctic-shift.photon-reddit.com/api/comments/search?link_id={post_id}&limit=100
Reconstruct source_url as https://www.reddit.com/r/{sub}/comments/{post_id}/{slug}/ — this satisfies the provenance rule because the text IS the verbatim thread content, not a third-party summary.
CAVEAT: archive "score" is a snapshot at crawl time; posts from the last 1-2 days are under-counted, so rank primarily on posts older than 2 days.
Only after BOTH direct fetch and Arctic Shift fail may you return 0 signals — and then record every attempted path in the channel-failure notes.


EXTRACTION RULES:
- source_url MUST be a reddit.com/r/... thread URL. A blog summarizing "what Reddit thinks" is NOT acceptable as a Reddit signal.
- Extract: pain point description, user quotes (exact words, OP + comments), subreddit, upvotes, which tools users are abandoning/adopting and why.
- source_date = thread post date (visible on the thread page).

${DATE_RULES}`,
  },
  {
    key: 'hackernews-stackoverflow',
    label: 'Hacker News + Stack Overflow',
    type: 'pain_point',
    prompt: `Collect PAIN POINT and PRODUCT SIGNALS from Hacker News and Stack Overflow.

FETCH-FIRST: WebFetch DIRECTLY, one at a time:
1. https://news.ycombinator.com/ — front page
2. https://news.ycombinator.com/show — Show HN
3. https://news.ycombinator.com/ask — Ask HN
4. https://hn.algolia.com/?dateRange=pastWeek&type=story&query=AI — past-week AI stories by points (also try queries "agent", "LLM")
5. https://stackoverflow.com/questions?tab=Frequent — frequent questions (also try tag pages like /questions/tagged/openai-api?tab=Frequent)
Then fetch promising item pages (news.ycombinator.com/item?id=...) for point counts and top comments.

EXTRACTION RULES:
- source_url = the news.ycombinator.com/item?id=... or stackoverflow.com/questions/... page itself.
- Extract: post title, points, comments count, core pain point or product insight, user quotes.
- Stack Overflow: high-frequency repeated questions = productizable developer tool opportunity.
- source_date = post date shown on the item page.

${DATE_RULES}`,
  },
  {
    key: 'indiehackers-substack',
    label: 'Indie Hackers + Substack',
    type: 'pain_point',
    prompt: `Collect PAIN POINT and REVENUE signals from Indie Hackers and Substack.

FETCH-FIRST: WebFetch DIRECTLY, one at a time:
1. https://www.indiehackers.com/ — front page trending posts
2. https://www.indiehackers.com/products — products with revenue numbers
3. https://substack.com/topics — topic index (follow into AI/tech/startup topics)
4. https://substack.com/explore — explore page for trending publications
Then fetch the most promising posts for full text and exact quotes.

Supplement (optional): WebSearch site:indiehackers.com "MRR" AI ${month} ${year} — keep only results you actually fetched, cited by their indiehackers.com URL.

EXTRACTION RULES:
- Extract: product name, MRR/revenue, pain point addressed, user quotes, lessons learned.
- source_date = post publish date.

${DATE_RULES}`,
  },
  {
    key: 'twitter-reviews-youtube-discord',
    label: 'Twitter/X + Reviews + YouTube + Discord',
    type: 'pain_point',
    prompt: `Collect PAIN POINT SIGNALS from Twitter/X, review platforms, YouTube, and Discord communities.

PLATFORM RULES — a signal attributed to a platform MUST cite that platform's own URL:
- Twitter/X signals MUST cite x.com (or twitter.com) status URLs.
- YouTube signals MUST cite youtube.com video URLs (views/comments read from the video page).
- Discord signals MUST cite discord.com channel/message links or the community's official server; if a community is only reachable via login, cite the product's public feedback board instead and say so.
- G2/Capterra/app-store reviews MUST cite the review page itself.

These platforms are search-unfriendly for direct fetch; use WebSearch to LOCATE, then WebFetch the platform URL to VERIFY before citing:
1. site:x.com "AI tool" wish OR need ${year}
2. site:youtube.com AI tool review OR tutorial ${month} ${year}
3. site:g2.com AI reviews cons ${year}
4. "discord.gg" OR site:discord.com AI tool "feature request" ${year}
5. "switched from" OR "alternative to" AI tool ${month} ${year}

If a platform URL cannot be verified by fetching, DROP the signal rather than citing a blog that talks about it (or keep it with secondhand: true and the blog URL, clearly labeled).

Extract: complaint description, user quotes, which tools they're leaving and why, view/upvote counts, audience size estimate.

${DATE_RULES}`,
  },
  {
    key: 'github-huggingface-baai',
    label: 'GitHub Trending + HuggingFace + 智源社区',
    type: 'trend',
    prompt: `Collect INDUSTRY TREND SIGNALS from GitHub, Hugging Face, and BAAI Hub (智源社区).

FETCH-FIRST: WebFetch DIRECTLY, one at a time:
1. https://github.com/trending — daily trending (all languages)
2. https://github.com/trending?since=weekly — weekly trending
3. https://huggingface.co/models — models sorted by trending (also https://huggingface.co/models?sort=downloads)
4. https://huggingface.co/datasets — trending datasets
5. https://hub.baai.ac.cn/ — 智源社区首页热门论文/项目
Then fetch notable repo/model pages for star/download counts and READMEs.

ISSUE DEEP-DIVE (mandatory): for the 3-5 most relevant trending repos (AI/agent/tool category), also fetch their issue tracker sorted by engagement:
- https://github.com/{owner}/{repo}/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc — most-upvoted open issues
- https://github.com/{owner}/{repo}/issues?q=is%3Aissue+sort%3Acomments-desc — most-discussed issues
High-reaction issues are feature-gap demand signals: what users beg the maintainers for = what a commercial/vertical version should ship with. Also note issues the maintainers closed as "not planned" — officially abandoned demand is open territory for third parties. Capture issue titles, reaction counts, and key quotes → top_comments.
For notable HF models, check the Community tab (https://huggingface.co/{org}/{model}/discussions) for recurring questions/complaints (deployment pain, quantization requests, license confusion).

EXTRACTION RULES:
- source_url = the github.com repo/issue / huggingface.co model page itself. Star/download counts are as-of fetched_at — never date them with a content date.
- Extract: repo/model name, stars/downloads, what problem it solves, growth velocity (stars this week if shown on trending), top issue themes, implications for product builders.
- 智源社区: Chinese AI academic frontier, new papers/projects → technology capability breakthrough signals.

${DATE_RULES}`,
  },
  {
    key: 'funding-vc-yc-blogs-podcasts',
    label: 'Funding + VC + YC + Blogs + Podcasts',
    type: 'trend',
    prompt: `Collect FUNDING, INVESTOR, and THOUGHT LEADER signals.

FETCH-FIRST where possible:
1. https://techcrunch.com/category/artificial-intelligence/ — AI funding news
2. https://news.crunchbase.com/sections/ai/ — Crunchbase AI section
3. https://www.ycombinator.com/companies?batch=Summer%202026 — current YC batch (adjust batch name to the most recent)
4. https://a16z.com/news-content/ — a16z posts
Supplement with WebSearch ONE AT A TIME:
5. AI startup funding ${month} ${year} seed series-a
6. "My First Million" OR "All-In Podcast" OR "Acquired" AI ${month} ${year}

EXTRACTION RULES:
- Funding numbers must cite the original news article (TechCrunch/Crunchbase/官方公告), not aggregator roundups — if only a roundup is available, secondhand: true.
- Extract: company name, round size, investors, what they're building, implications for the market.
- source_date = article publish date.

${DATE_RULES}`,
  },
  {
    key: 'arxiv-regulation-breakthrough-trends-luma',
    label: 'arXiv + Regulations + Breakthroughs + Google Trends + Luma',
    type: 'trend',
    prompt: `Collect FRONTIER RESEARCH, REGULATORY, and QUANTITATIVE DEMAND signals.

FETCH-FIRST where possible:
1. https://arxiv.org/list/cs.AI/recent — recent cs.AI listings (also cs.CL, cs.LG for agent/LLM application papers)
2. https://lu.ma/ai — Luma AI events (themes, attendance)
3. Regulator sites for anything new: digital-strategy.ec.europa.eu (EU), cac.gov.cn (网信办), whitehouse.gov
Supplement with WebSearch ONE AT A TIME:
4. AI breakthrough new capability ${month} ${year}
5. new regulation AI ${month} ${year} compliance
6. new AI API feature announcement ${month} ${year}

EXTRACTION RULES:
- arXiv papers: source_url = arxiv.org/abs/... page; source_date = submission date on that page.
- Regulations: cite the regulator's own page as primary; law-firm analyses are useful context but secondhand: true.
- Google Trends: use WebFetch on trends.google.com to check search volume for top opportunity keywords — the only quantitative demand validation signal.
- Extract: breakthrough/regulation description, time horizon (immediate/6-12mo/1-2yr), product implications.

${DATE_RULES}`,
  },
  {
    key: 'zhihu-jike-v2ex-sspai-xiaohongshu',
    label: '知乎 + 即刻 + V2EX + 少数派 + 小红书',
    type: 'pain_point',
    prompt: `Search for CHINESE MARKET pain point signals from tech communities.

Run these searches ONE AT A TIME:
1. 知乎 AI工具 推荐 OR 吐槽 ${year}
2. 即刻 AI 效率工具 ${year}
3. site:v2ex.com AI 工具 求推荐 ${year}
4. site:sspai.com AI 效率工具 测评 ${year}
5. 小红书 AI 办公工具 推荐 OR 吐槽 ${year}
6. site:xiaohongshu.com AI工具 "太难用" OR "有没有" ${year}

Extract: pain point description (Chinese is fine), user quotes, whether unique to Chinese market.
小红书: China's largest consumer decision platform, extremely high density of recommendations and complaints for tools.
Focus on last 7-30 days. Include source URLs.`,
  },
  {
    key: '36kr-jiqizhixin-miracleplus',
    label: '36Kr + 机器之心 + 奇绩创坛 + 淘宝闲鱼',
    type: 'trend',
    prompt: `Search for CHINESE AI MARKET trend and product signals.

Run these searches ONE AT A TIME:
1. site:36kr.com AI 创业 ${month}
2. site:jiqizhixin.com AI 产品 应用 ${month}
3. 奇绩创坛 MiraclePlus AI 项目 ${year}
4. 淘宝 闲鱼 AI 代做 热销 ${year}

Extract: startup/product name, funding, market opportunity, whether unique to China or global.
Focus on last 7-30 days. Include source URLs.`,
  },
  {
    key: 'conferences-launch-events',
    label: '行业大会 + 重大发布会 (WAIC/IO/WWDC/云栖/智源)',
    type: 'trend',
    prompt: `Search for MAJOR AI CONFERENCE and PRODUCT LAUNCH EVENT signals — flagship industry events, not meetups.

Run these searches ONE AT A TIME:
1. AI conference major announcements ${month} ${year}
2. 世界人工智能大会 WAIC ${year} 发布 OR 亮点 OR 重磅
3. WAIC ${year} highlights announcements
4. AI 大会 OR 发布会 新品 OR 重磅发布 ${month}
5. Google I/O OR WWDC OR Microsoft Build OR AWS re:Invent OR 云栖大会 OR 智源大会 AI ${month} ${year}
6. major AI product launch keynote ${month} ${year}

These events cluster vendor roadmaps, new model/API capabilities, and ecosystem bets into a few days — a single conference can reset the competitive landscape.
Extract: event name and dates, headline announcements (products/models/APIs/policies), vendor strategy shifts, scale metrics (attendance/exhibitors), and which announcements open or close product opportunities for indie builders.
Prioritize events within the last 14 days, especially anything from THIS WEEK; also note upcoming flagship events in the next 30 days. Include source URLs.`,
  },
]

// ── Phase 0: Hot Topic Radar ─────────────────────────────────────────────────
// 从最近 72h 的中英文媒体头条自动探测重大事件/热点，动态生成深挖查询——
// 避免每逢 WAIC/发布会这类事件都要手动往查询列表里加关键词。

const RADAR_SCHEMA = {
  type: 'object',
  properties: {
    hot_topics: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          topic: { type: 'string' },
          why_it_matters: { type: 'string' },
          event_window: { type: 'string' },
          queries: { type: 'array', items: { type: 'string' } },
        },
        required: ['topic', 'why_it_matters', 'queries'],
      },
    },
  },
  required: ['hot_topics'],
}

phase('Hot Topic Radar')
log('Detecting breaking AI events from last-72h media headlines...')

let radar = null
try {
  radar = await agent(
  `You are a news radar for an AI demand-discovery system. Today is ${today}.

Scan the LAST 72 HOURS of AI/tech media headlines to detect major events the daily static scan might miss — flagship conferences (e.g. WAIC, Google I/O, WWDC, 云栖大会), major model/product launches, regulation drops, viral incidents, big funding waves.

Run these searches ONE AT A TIME:
1. AI biggest news this week ${today}
2. AI 本周 重大新闻 OR 重磅发布 ${month}
3. 机器之心 OR 量子位 OR 36kr AI 头条 本周
4. site:techcrunch.com AI ${month} ${year}
5. Hacker News front page AI this week ${today}
6. AI 大会 OR 发布会 OR 新规 本周 ${month}

For each MAJOR topic detected (dominating multiple outlets, or a flagship event happening now / within the last week), return:
- topic: short name (e.g. "WAIC 2026 世界人工智能大会")
- why_it_matters: 1-2 sentences on why this could reshape product opportunities
- event_window: when it happened/happens
- queries: 3-5 specific search queries (mix Chinese/English as appropriate) a deep-dive researcher should run to extract product-opportunity signals from this topic

Return 0-4 topics. Quality over quantity — only events big enough that missing them would embarrass a daily AI industry report. If nothing major happened, return an empty list.

ARCHIVE (do this before returning): write your findings to \`${REPO_ROOT}/reports/${today}/sources/01-hot-topic-radar.md\` (use \`mkdir -p\` if the directory does not exist). Include for each topic: topic name, why_it_matters, event_window, the queries you derived, and the headline sources you saw. This file is archive slot 01; signal groups take 02+.

${WRITE_SAFETY}

SEARCH-CHANNEL SANITY CHECK: if a WebSearch returns results plainly unrelated to your query (e.g. every query returns the same result set, or results echo internal instruction text instead of the query), the search channel is malfunctioning — do NOT treat those results as findings. Note the malfunction in your archive file and rely on direct fetches instead. (2026-07-28: 48% of that run's searches were silently polluted this way and the failure was initially misdiagnosed as unreachable channels.)

RETURN CONTRACT (MANDATORY — read this last, obey it first):
You MUST deliver your result by calling the StructuredOutput tool. Your final assistant text is NOT the return value and will be DISCARDED.
- The top-level key is \`hot_topics\` (NOT \`topics\`). Do not rename it.
- Do NOT print the JSON as a fenced \`\`\`json block instead of calling the tool. A prior run did exactly that and aborted the entire 19-group scan after all research was already done.
- Call StructuredOutput even if the archive write failed, a search failed, or you found nothing (return an empty list and put the problem in your notes). Tool errors are NOT a reason to switch into narrating what happened.
- If you believe StructuredOutput is missing from your toolset, it is not — look again and call it.`,
  {
    label: '热点雷达',
    phase: 'Hot Topic Radar',
    schema: RADAR_SCHEMA,
    model: 'fable',
    effort: 'medium',
  }
  )
} catch (e) {
  // 雷达只是可选增强：它抛错不该让 15 个常设信号组陪葬。
  // agent({schema}) 在 subagent 不调用 StructuredOutput 时会抛错并中止整场扫描（2026-08-11 / 08-12 两次）。
  log(`⚠ 热点雷达失败（${e && e.message ? e.message : e}）— 跳过动态热点组，常设组继续`)
  radar = null
}

// key 容错：2026-08-12 该 agent 用了 `topics` 而非约定的 `hot_topics`
const _radarTopics = (radar && (radar.hot_topics || radar.topics)) || []
const hotTopics = _radarTopics.slice(0, 4)
log(
  hotTopics.length
    ? `Detected ${hotTopics.length} hot topics: ${hotTopics.map((t) => t.topic).join('; ')}`
    : 'No major breaking topics detected — static groups only'
)

const dynamicGroups = hotTopics.map((t, i) => ({
  key: `hot-topic-${i + 1}`,
  label: `热点深挖: ${t.topic}`,
  type: 'trend',
  prompt: `Deep-dive a HOT TOPIC auto-detected from the last 72h of media coverage.

Topic: ${t.topic}
Why it matters: ${t.why_it_matters}
Event window: ${t.event_window || 'recent'}

Run these searches ONE AT A TIME:
${t.queries.map((q, j) => `${j + 1}. ${q}`).join('\n')}

Extract signals relevant to PRODUCT OPPORTUNITIES for AI practitioners/indie builders: headline announcements (models/products/APIs/policies) with concrete numbers, vendor strategy shifts, which opportunities this opens or closes for independent builders, and any pain points or willingness-to-pay evidence surfacing in the coverage.
Focus on the event window itself. Include source URLs.`,
}))

// ── Phase 1: Signal Collection ───────────────────────────────────────────────

phase('Signal Collection')
const ALL_GROUPS = SEARCH_GROUPS.concat(dynamicGroups)
log(`Scanning ${ALL_GROUPS.length} signal source groups (${SEARCH_GROUPS.length} static + ${dynamicGroups.length} dynamic)...`)

// 2026-07-27 事故修复：19 组一次性并发时全组因 "passthrough stream idle timeout after 120s" 失败，
// 一次瞬时流抖动报废了 15 个渠道（43 条信号 vs 正常 160-180）。三处加固：
//   1) 每组最多 3 次尝试 — 瞬时超时只该损失一次重试，不该损失整个渠道
//   2) 分批执行（每批 6 组）— 降低同时在飞的 web 工具调用数，减少流空闲。
//      批次越小越稳但墙钟越长，而长运行更容易撞上 claude 进程重启（Workflow 是进程内运行，
//      进程一退出后台任务全死，靠 journal 缓存 resume 捡回）。6 是稳定性与总时长的折中。
//   3) 重试时收窄取样范围 — 拿到 5 条真信号胜过再超时一次拿 0 条
const GROUP_ATTEMPTS = 3
const BATCH_SIZE = 6

// 归档编号：01 固定给热点雷达，信号组从 02 起，由脚本按 ALL_GROUPS 下标确定性分配。
// 让每组 agent 自己写自己的归档文件（2026-07-28 改造）——此前由报告 agent 统一写 19 个文件，
// 这是它必须在 prompt 里内联全量 signalsJSON（24.8 万字符）的根本原因，也是写报告阶段反复卡死的根因。
const archiveName = (g, idx) => `${String(idx + 2).padStart(2, '0')}-${g.key}.md`

const collectPrompt = (g, attempt, idx) =>
  `You are a demand discovery researcher. Today is ${today}. Year: ${year}. Month: ${month}.

${g.prompt}

IMPORTANT RULES:
- FETCH-FIRST: when the group prompt lists direct URLs, WebFetch them before any WebSearch. Run fetches/searches ONE AT A TIME to avoid rate limits.
- Use WebSearch only to locate content the direct pages don't surface, then WebFetch the primary page to verify before citing.
- For each finding, extract structured data: title, source_url, source_date (original content date), fetched_at (today: ${today}), signal_type ("${g.type}"), description, user_quote (exact words if available), top_comments (up to 3 more verbatim quotes from comments/reviews/replies, each tagged with where it came from), metrics, ai_opportunity, secondhand, primary_platform.
- USER VOICE DEEP-DIVE: rankings and titles tell you WHAT is popular; comments, reviews, replies, and issues tell you WHY and what's still missing. Wherever the platform exposes a comment/review/discussion section (PH reviews, HN threads, Reddit comments, AppSumo reviews, GitHub issues, YouTube comments, tweet replies, app-store reviews), read it and quote it — a signal with verbatim user voice is worth more than three signals with only metadata.
- Return at least 5 signals if available, up to 15.
- If a fetch fails (blocked/empty), retry once with an alternative URL from the prompt, then fall back to search.

SEARCH-CHANNEL SANITY CHECK: if WebSearch returns results plainly unrelated to your query — every query yielding the same result set, or results echoing internal instruction text instead of your query terms — the search channel is malfunctioning. Do NOT mine those results for signals and do NOT record the failure as "channel unreachable"; say explicitly that the SEARCH CHANNEL malfunctioned, and fall back to direct fetches. (On 2026-07-28, 48% of searches were silently polluted this way; several groups misattributed it to site blocks and one group returned zero signals as a result.)

ARCHIVE YOUR OWN OUTPUT (mandatory, do this BEFORE returning your structured result):
Write your signals to \`${REPO_ROOT}/reports/${today}/sources/${archiveName(g, idx)}\` (use \`mkdir -p\` if the directory does not exist). Format:
\`\`\`
# ${String(idx + 2).padStart(2, '0')} — ${g.label} ${today}

> 组内信号：N 条 | 二手转述：M 条（X%）
> 一句话说明本组最强证据线，以及任何渠道故障/不可达情况

---

## 1. <signal title>
- **type**: <signal_type> | **platform**: <primary_platform> | **secondhand**: <true|false>
- **source_url**: <url>
- **source_date**: <date or 空> | **fetched_at**: ${today}
- **metrics**: <numbers>
- **description**: <what it is and why it matters>
- **user_quote**: "<verbatim>"
- **top_comments**:
  - [<where from>] <verbatim>
- **ai_opportunity**: <productization angle>
\`\`\`
This archive is the evidence trail the report cites — the report writer will Read it for verbatim depth, so do not abbreviate quotes here.

${WRITE_SAFETY}

SOURCE PROVENANCE RULES (hard requirements — 2026-07-21 audit found 38% of signals cited SEO aggregators instead of primary sources):
- KEY QUANTITATIVE DATA (download counts, GitHub stars, survey percentages, revenue/MRR, vote counts) MUST cite the PRIMARY platform URL: github.com, clawhub.ai, producthunt.com, reddit.com, news.ycombinator.com, survey.stackoverflow.co, official company blogs/press releases, regulator sites.
- When a search result is an SEO aggregator/roundup blog (e.g. "top 10 trending repos" listicles), WebFetch the primary page it references and cite THAT url. Only if the primary page cannot be located, keep the aggregator URL and set secondhand: true.
- Community pain points (Reddit/HN/V2EX/知乎) MUST link the actual thread. A blog post summarizing "what Reddit thinks" is secondhand: true — the numbers and quotes in it are unverified.
- Watch for conflict-of-interest sources: vendor marketing blogs, API resellers, "pain point database" products citing their own data. Always mark these secondhand: true and mention the bias in description.
- Never fabricate or "smooth over" a URL. If you did not see the page, do not cite it.
- secondhand: false is a claim that source_url IS the primary source (original thread / official page / first-party report). Set it honestly — downstream analysis discounts secondhand-only evidence.
- DATES: source_date is the content's original date (post/launch/publish), NEVER your visit date and NEVER a month-start placeholder; put your visit date in fetched_at. Leaderboard-ranking snapshots: source_date empty, fetched_at carries the timeliness.
- COMPLETENESS: when reading a ranked leaderboard, capture ranks contiguously from #1 (do not skip ranks you find boring — a skipped rank is a hole reviewers will find).${
    attempt > 1
      ? `

RETRY NOTE (attempt ${attempt}/${GROUP_ATTEMPTS}): a previous attempt of this group timed out. Work FASTER and NARROWER this time: cap yourself at ~6-8 web tool calls total, prioritize the group's single most important direct URL first, and return the 5-8 strongest signals early rather than exhausting every query. A partial result beats another timeout.`
      : ''
  }`

// 2026-07-28：安全类热点（模型逃逸/入侵/漏洞）会被模型安全策略直接拒绝，这是确定性拒绝而非瞬时故障——
// 盲目重试 3 次只是把同一次拒绝重放三遍。识别出来就立即放弃该组并说明原因，把重试预算留给真正的超时。
const isTerminalRefusal = (msg) =>
  /safeguards flagged|cyber_use_case|cyber-use-case|exemption/i.test(String(msg || ''))

const collectGroup = async (g, idx) => {
  for (let attempt = 1; attempt <= GROUP_ATTEMPTS; attempt++) {
    try {
      const result = await agent(collectPrompt(g, attempt, idx), {
        label: attempt > 1 ? `${g.label} (retry ${attempt})` : g.label,
        phase: 'Signal Collection',
        schema: SIGNAL_SCHEMA,
        model: 'fable',
        effort: 'medium',
      })
      if (result) return result
      log(`⚠ ${g.label}: attempt ${attempt}/${GROUP_ATTEMPTS} returned nothing${attempt < GROUP_ATTEMPTS ? ', retrying' : ' — group lost'}`)
    } catch (e) {
      const msg = String(e && e.message ? e.message : e)
      if (isTerminalRefusal(msg)) {
        log(`⛔ ${g.label}: blocked by model safety policy (security-topic refusal) — NOT retrying. This topic needs a reframed, defense-oriented query or a manual pass.`)
        return null
      }
      log(`⚠ ${g.label}: attempt ${attempt}/${GROUP_ATTEMPTS} failed (${msg.slice(0, 120)})${attempt < GROUP_ATTEMPTS ? ', retrying' : ' — group lost'}`)
    }
  }
  return null
}

// 分批执行：每批 BATCH_SIZE 组并发，批间为屏障。牺牲一些墙钟时间换取流稳定性——
// 全量并发时批内某组的重试也天然错峰，不会再形成 19 组同时打满 web 工具的尖峰。
const signals = []
for (let i = 0; i < ALL_GROUPS.length; i += BATCH_SIZE) {
  const batch = ALL_GROUPS.slice(i, i + BATCH_SIZE)
  log(`Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(ALL_GROUPS.length / BATCH_SIZE)}: ${batch.map((g) => g.label).join(' | ')}`)
  const batchResults = await parallel(batch.map((g, j) => () => collectGroup(g, i + j)))
  signals.push(...batchResults)
}

const validSignals = signals.filter(Boolean)
const totalSignalCount = validSignals.reduce((sum, s) => sum + (s.signals ? s.signals.length : 0), 0)
const lostGroups = ALL_GROUPS.filter((g, i) => !signals[i]).map((g) => g.label)
log(`Collected ${totalSignalCount} signals from ${validSignals.length}/${ALL_GROUPS.length} groups`)

// 无声降级是最危险的失败模式：43 条信号的报告和 170 条的报告长得一样。把缺口显式喊出来。
if (lostGroups.length) {
  log(`⚠ ${lostGroups.length} group(s) LOST after ${GROUP_ATTEMPTS} attempts — report coverage is incomplete: ${lostGroups.join('; ')}`)
}
if (validSignals.length < ALL_GROUPS.length * 0.6 || totalSignalCount < 60) {
  log(`🔴 COVERAGE ALERT: only ${validSignals.length}/${ALL_GROUPS.length} groups and ${totalSignalCount} signals (healthy runs land 150+). The report must state this shortfall in 今日概览 rather than read as a normal day.`)
}

// ── 归档索引：全部计数用 JS 算，不交给模型 ────────────────────────────────────
// 2026-07-28：报告 agent 把 19 行分组数字（各行都对）加成了 143，实际 162；二手数也从 46 算成 44，
// 于是概览、信号雷达、免责声明三处口径全错。加法不是模型该干的活，这里预渲染成 markdown 直接落盘。

const hostOf = (u) => {
  const m = /^https?:\/\/([^/]+)/i.exec(String(u || ''))
  return m ? m[1].replace(/^www\./, '') : ''
}

const groupStats = ALL_GROUPS.map((g, i) => {
  const res = signals[i]
  const sigs = res && res.signals ? res.signals : []
  const sh = sigs.filter((s) => s.secondhand).length
  return {
    file: archiveName(g, i),
    label: g.label,
    lost: !res,
    count: sigs.length,
    secondhand: sh,
    pct: sigs.length ? Math.round((sh * 100) / sigs.length) : 0,
    signals: sigs,
  }
})

const secondhandTotal = groupStats.reduce((n, s) => n + s.secondhand, 0)
const typeCounts = {}
groupStats.forEach((s) => s.signals.forEach((x) => { typeCounts[x.signal_type] = (typeCounts[x.signal_type] || 0) + 1 }))

// 跨组域名频次：同域出现在多组时提示去重审查（三篇转述同一份调查 ≠ 三个独立来源）
const domainMap = {}
groupStats.forEach((s) => s.signals.forEach((x) => {
  const h = hostOf(x.source_url)
  if (!h) return
  if (!domainMap[h]) domainMap[h] = { n: 0, groups: {} }
  domainMap[h].n += 1
  domainMap[h].groups[s.file.slice(0, 2)] = true
}))
const domainRows = Object.keys(domainMap)
  .map((h) => ({ host: h, n: domainMap[h].n, groups: Object.keys(domainMap[h].groups).sort() }))
  .filter((d) => d.n > 1)
  .sort((a, b) => b.n - a.n || a.host.localeCompare(b.host))

const archiveIndexMd = [
  `# 原始信号归档索引 — ${today}`,
  '',
  '> 本索引由 workflow 脚本按结构化输出直接计算生成（非模型口算）。',
  '',
  '## 采集概况',
  '',
  '| 项目 | 数值 |',
  '|------|------|',
  `| 信号组 | ${validSignals.length}/${ALL_GROUPS.length} 组成功 |`,
  `| 信号总数 | **${totalSignalCount}** 条 |`,
  `| 二手转述 | **${secondhandTotal}** 条（${totalSignalCount ? Math.round((secondhandTotal * 100) / totalSignalCount) : 0}%） |`,
  `| 类型分布 | ${Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).map((k) => `${k} ${typeCounts[k]}`).join(' / ') || '—'} |`,
  lostGroups.length ? `| ⚠️ 彻底失败 | ${lostGroups.length} 组，贡献 0 条信号：${lostGroups.join('；')} |` : '| 失败组 | 无 |',
  '',
  '## 文件列表',
  '',
  '| 文件 | 信号组 | 信号数 | 二手 | 二手占比 |',
  '|------|--------|--------|------|---------|',
  '| [01-hot-topic-radar.md](01-hot-topic-radar.md) | 热点雷达 | — | — | — |',
]
  .concat(
    groupStats.map((s) =>
      s.lost
        ? `| ⚠️ ${s.file}（未生成） | ${s.label} | **0（采集失败）** | — | — |`
        : `| [${s.file}](${s.file}) | ${s.label} | ${s.count} | ${s.secondhand} | ${s.pct}% |`
    )
  )
  .concat([
    '',
    `**合计：${totalSignalCount} 条信号，${secondhandTotal} 条二手转述（${totalSignalCount ? Math.round((secondhandTotal * 100) / totalSignalCount) : 0}%）**`,
    '',
    '## 跨组域名频次（去重审查）',
    '',
    '> 同一域名跨多组出现时，交叉验证不得按多个独立来源计。',
    '',
    '| 域名 | 次数 | 出现于组 |',
    '|------|------|---------|',
  ])
  .concat(domainRows.slice(0, 40).map((d) => `| ${d.host} | ${d.n} | ${d.groups.join(', ')} |`))
  .concat(['', `（仅列出出现 ≥2 次的域名，共 ${domainRows.length} 个）`])
  .join('\n')

// ── Phase 2: Cross-Analysis ──────────────────────────────────────────────────

phase('Cross-Analysis')
log('Analyzing cross-channel patterns and scoring opportunities...')

// 2026-07-31 事故：交叉分析 prompt 内联全部信号逐字文本（含 top_comments）达 10.6 万字符，
// agent 连续 6 次在输出中途停滞并交回空的 StructuredOutput{}，整场 2.7 小时扫描无法产出报告。
// 与 07-28 对报告 agent 的处理同构：分析阶段只吃截断摘要（丢掉 top_comments，description/原话截断），
// 需要逐字证据时按机会去 Read sources/ 归档文件。
const cut = (s, n) => {
  const v = String(s || '').replace(/\s+/g, ' ')
  return v.length > n ? v.slice(0, n) + '…' : v
}

const signalSummary = validSignals
  .map((s) => {
    const lines = s.signals.map((sig) => {
      let line = '- [' + sig.signal_type + (sig.secondhand ? '|二手转述' : '') + '] ' + cut(sig.title, 110) + ': ' + cut(sig.description, 200)
      if (sig.user_quote) line += ' — "' + cut(sig.user_quote, 140) + '"'
      if (sig.source_url) line += ' (' + sig.source_url + ')'
      return line
    })
    return '## ' + s.group + '\n' + lines.join('\n')
  })
  .join('\n\n')

// 单点失败同样会报废整场扫描（2026-07-31：分析 agent 6 次停滞 → 无报告），故加 3 次重试。
let analysis = null
for (let anaAttempt = 1; anaAttempt <= 3 && !analysis; anaAttempt++) {
analysis = await agent(
  `You are a startup opportunity analyst. Analyze these signals from today's demand discovery scan (${today}).
${hotTopics.length ? `\nBreaking events auto-detected this run (their deep-dive signals are included below — weigh them as fresh, high-salience context): ${hotTopics.map((t) => t.topic).join('; ')}\n` : ''}
## ALL SIGNALS COLLECTED TODAY

${signalSummary}

## YOUR TASK

1. **Cross-validate**: Find needs that appear in ≥2 channels → high-value signal
2. **Identify supply-demand gaps**: Lots of complaints but no good solution → blue ocean
3. **Check technology timing**: New AI capability + old pain point → timing is right
4. **Payment validation**: Already monetized on Upwork/Kickstarter/Gumroad → confirmed willingness to pay
5. **China arbitrage**: Product exists overseas but blank in China → localization opportunity
6. **Open-source signal**: GitHub trending tool without commercial version → productization opportunity

## SCORING FRAMEWORK (1-5 each)
- pain_score: How painful? How frequent?
- market_score: Potential users × likely customer value
- competition_score: 1=crowded 5=no competition
- ai_fit_score: How much better can AI make it?
- mvp_difficulty: 1=very hard 5=weekend project
- defensibility: How hard to copy?
- composite_score: Overall 1-5 weighted score

Return the TOP 10 opportunities sorted by composite_score, plus cross-validated signals and meta-insights.
For each opportunity: name, one_liner, target_user, all 6 dimension scores, composite_score, cross_validation description, source URLs, is_new (true if not seen before).

EVIDENCE WEIGHTING: Signals tagged [二手转述] are secondhand (SEO aggregators / blog paraphrases) — their numbers are unverified. An opportunity whose KEY evidence is entirely secondhand must be scored more conservatively (cap pain/market scores at 4) and its cross_validation must say so explicitly. Cross-validation only counts as independent when the underlying primary sources differ — three blogs paraphrasing the same survey is ONE source, not three.`,
  {
    label: anaAttempt > 1 ? `Cross-Analysis (retry ${anaAttempt})` : 'Cross-Analysis',
    phase: 'Cross-Analysis',
    schema: ANALYSIS_SCHEMA,
    effort: anaAttempt > 1 ? 'medium' : 'high',
  }
).catch((e) => {
  log(`⚠ Cross-Analysis attempt ${anaAttempt}/3 failed (${String((e && e.message) || e).slice(0, 140)})`)
  return null
})
  if (!analysis && anaAttempt < 3) log('↻ retrying Cross-Analysis at lower effort')
}
if (!analysis) {
  log('🔴 Cross-Analysis failed 3× — signals are archived in sources/, aborting before report')
  throw new Error('Cross-Analysis failed after 3 attempts; archives intact under reports/' + today + '/sources/')
}

log(`Identified ${analysis.opportunities.length} opportunities`)

// ── Phase 3: Report Writing ──────────────────────────────────────────────────

phase('Report Writing')
log('Writing daily report and updating opportunity tracker...')

const opportunitiesJSON = JSON.stringify(analysis, null, 2)

// 2026-07-28 精简：此前把 validSignals 的完整 JSON（24.8 万字符，其中 signalsJSON 占 91%）内联进
// 报告 agent 的 prompt，导致写报告阶段反复超时/停滞。现在归档文件由各采集组自己写好，报告 agent
// 只吃紧凑摘要（丢掉 ai_opportunity/metrics/top_comments/fetched_at/primary_platform，正文截断），
// 需要逐字原声时按机会去 Read 对应归档文件——把「全量常驻上下文」换成「按需检索」。
const trunc = (s, n) => {
  const v = String(s || '').replace(/\s+/g, ' ')
  return v.length > n ? v.slice(0, n) + '…' : v
}

const signalDigest = groupStats
  .filter((s) => !s.lost && s.count)
  .map((s) => {
    const lines = s.signals.map((sig, k) => {
      let line = `${k + 1}. [${sig.signal_type}${sig.secondhand ? '|二手' : ''}] ${trunc(sig.title, 110)}`
      line += `\n   ${trunc(sig.description, 220)}`
      if (sig.user_quote) line += `\n   原话: "${trunc(sig.user_quote, 160)}"`
      if (sig.source_url) line += `\n   ${sig.source_url}${sig.source_date ? ' · ' + sig.source_date : ''}`
      return line
    })
    return `## ${s.label}  →  归档: sources/${s.file}  (${s.count} 条, 二手 ${s.secondhand})\n${lines.join('\n')}`
  })
  .join('\n\n')

const coverageNote = lostGroups.length
  ? `\n## ⚠ SCAN COVERAGE (must be disclosed in 今日概览)\nThis run scanned ${validSignals.length}/${ALL_GROUPS.length} signal groups. ${lostGroups.length} group(s) failed after ${GROUP_ATTEMPTS} attempts and contributed NO signals: ${lostGroups.join('; ')}.\nState this explicitly in 今日概览 (which channels are missing), and do not present cross-channel validation counts as if those channels had been checked.\n`
  : ''

// 2026-07-30：报告 agent 单点失败会报废整场扫描（当天首次运行即因 connection closed 丢掉全部报告，
// 而扫描本身已花 2.7 小时）。加 3 次重试；后续尝试先读已落盘的部分接着补，而不是从头重写。
let report = null
for (let reportAttempt = 1; reportAttempt <= 3 && !report; reportAttempt++) {
  const reportRetryNote =
    reportAttempt > 1
      ? `

RETRY NOTE (attempt ${reportAttempt}/3): a previous attempt died mid-response (connection closed). A PARTIAL report may already exist at ${REPO_ROOT}/reports/${today}/demand-discovery-report.md. Read it FIRST: if it exists, do NOT start over — work out which sections already landed and append only what is missing. Use smaller writes than last time.`
      : ''
  report = await agent(
    `You are a demand discovery report writer. Write today's (${today}) 每日需求发现报告.${reportRetryNote}
${coverageNote}
## AUTHORITATIVE COUNTS (computed by the workflow — use these verbatim, do NOT recount)

- 信号组：${validSignals.length}/${ALL_GROUPS.length} 组成功${lostGroups.length ? `（失败 ${lostGroups.length} 组）` : ''}
- 信号总数：**${totalSignalCount}** 条
- 二手转述：**${secondhandTotal}** 条（${totalSignalCount ? Math.round((secondhandTotal * 100) / totalSignalCount) : 0}%）
- 类型分布：${Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).map((k) => `${k} ${typeCounts[k]}`).join(' / ') || '—'}

These numbers are already summed for you. On 2026-07-28 the writer re-added the per-group column by hand and reported 143 instead of 162 (and 44 instead of 46 secondhand), corrupting 今日概览, 信号雷达 and 免责声明 at once. Copy the figures above; never recompute a total.

## DATA TO USE

### Cross-Analysis Results (Top Opportunities)
${opportunitiesJSON}

### Signal Digest (condensed — full verbatim evidence lives in the archive files)
${signalDigest}

## YOUR TASKS

1. **Read the previous report** at ${REPO_ROOT}/reports/ — find the most recent demand-discovery-report.md to compare with yesterday
2. **Read the opportunity tracker** at ${REPO_ROOT}/reports/_opportunity-tracker/opportunities.md
3. **Write the daily report** to ${REPO_ROOT}/reports/${today}/demand-discovery-report.md

ARCHIVE FILES ARE ALREADY ON DISK — each signal group wrote its own \`${REPO_ROOT}/reports/${today}/sources/NN-*.md\` containing the FULL verbatim record (top_comments, metrics, ai_opportunity) that the digest above omits. **Read the archive files for the groups backing your Top 5 opportunities** to pull exact quotes. Do not re-derive or rewrite those archives; they are the evidence trail.

WRITE INCREMENTALLY — THIS IS THE #1 CAUSE OF FAILURE FOR THIS AGENT (mandatory procedure):
On 2026-07-30 this agent died twice with "Connection closed mid-response" while emitting the whole report in one call; the first time it lost the entire report after a 2.7-hour scan. Do NOT emit one enormous file.
1. FIRST call: Write ONLY the head — 标题 + 📊 今日概览 + the Top 5 机会 list as headers with scores (no bodies yet). Keep this call small.
2. THEN one Edit/Write call PER SECTION, appending as you go: 机会 1 body, 机会 2 body, ... then 信号雷达, 交叉验证, 中文市场, 累积趋势, 免责声明.
3. Never let a single tool call carry more than ~150 lines of content.
After each call the file on disk must be valid, self-consistent markdown — so that if you are cut off, what already landed is still a usable report.

${WRITE_SAFETY}

The report MUST follow this template structure:
- # 每日需求发现报告 — {date}
- 📊 今日概览 (channels scanned, valid signals, opportunities found, best opportunity)
- 🏆 Top 5 机会 (scored tables with dimensions, one-liner, target user, pain sources with links, user quotes, competitor analysis, AI advantage, MVP plan, business model, cross-validation)
- 📡 信号雷达 (product market signals / pain point signals / industry trends — with tables)
- 🔗 交叉验证的高价值信号 (patterns appearing across ≥2 channels)

USER VOICE RULE: every Top 5 opportunity MUST include a 用户原话 block, and the 信号雷达 sections should surface the sharpest review complaints / issue requests, not just metrics. The digest gives you one quote per signal; **Read the archive file when you need the comment-section depth (top_comments)**. Verbatim voice is the report's most defensible evidence.
- 🇨🇳 中文市场专题信号 (if Chinese signals exist)
- 📈 累积趋势 (themes appearing across multiple days, this week vs last week)
- ⚠️ 免责声明

The report should be comprehensive (300+ lines), with specific data, links, and quotes.

SOURCE ANNOTATION RULE: signals marked 二手 are unverified paraphrases — when citing their numbers in the report, append「（二手转述，未经一手核实）」after the figure, and never let a secondhand-only number be the headline evidence for a Top 3 opportunity. In 今日概览, report the count of secondhand signals alongside total signals (figures above).`,
    {
      label: reportAttempt > 1 ? `Report Writer (retry ${reportAttempt})` : 'Report Writer',
      phase: 'Report Writing',
      effort: 'high',
    }
  )
  if (!report) log(`⚠ Report Writer attempt ${reportAttempt}/3 failed — retrying`)
}
if (!report) log('🔴 Report Writer failed after 3 attempts — check reports/ for a partial file')

// 归档索引与 tracker 从报告 agent 剥离：索引内容已由脚本算好，这里只需一次写盘；
// tracker 只依赖机会列表，不需要任何信号数据。两者与报告解耦后互不拖累。
await parallel([
  () =>
    agent(
      `Write the following content EXACTLY as given to \`${REPO_ROOT}/reports/${today}/sources/README.md\` (use \`mkdir -p\` if the directory does not exist). Do not edit, summarize, reformat, or recompute any number in it — it was computed programmatically. After writing, list the files present in that directory and append a short "## 缺失文件" section ONLY if any file referenced in the table above is missing from disk.

${WRITE_SAFETY}

--- BEGIN CONTENT ---
${archiveIndexMd}
--- END CONTENT ---`,
      { label: 'Archive Index', phase: 'Report Writing', model: 'fable', effort: 'low' }
    ),
  () =>
    agent(
      `Update the cumulative opportunity tracker at \`${REPO_ROOT}/reports/_opportunity-tracker/opportunities.md\` for today (${today}).

Read the file first to learn its exact table format and existing rows, then apply today's opportunities:

${opportunitiesJSON}

RULES:
- IDEMPOTENCY: if rows dated ${today} already exist (a previous attempt of this run may have applied them), do NOT add them again and do NOT increment 出现次数 a second time — verify the existing rows against the data above, fix only genuine discrepancies, and otherwise leave the file unchanged. Double-counting corrupts the 出现次数 signal that drives the ⭐ threshold.
- Same opportunity appearing again → increment 出现次数, take the MAX score, and fold today's new evidence into its notes (keep the historical evidence trail, prepend today's).
- New opportunity → add a row with 首次发现 = ${today}.
- 出现次数 ≥3 → mark "⭐ 值得深入研究".
- PRESERVE any manually-set status (正在做 / 已验证 / 已放弃) — never overwrite those.
- Update the "最后更新" line to ${today}.
- Match the existing row format exactly; do not restructure the table.
- This file is append/edit only — never delete existing rows, and never rewrite the table from scratch. It is the only record of months of prior runs.

${WRITE_SAFETY}`,
      { label: 'Tracker Update', phase: 'Report Writing', effort: 'medium' }
    ),
])

log('Report complete!')

return {
  total_signals: totalSignalCount,
  secondhand_signals: secondhandTotal,
  groups_completed: validSignals.length,
  groups_total: ALL_GROUPS.length,
  lost_groups: lostGroups,
  opportunities: analysis ? analysis.opportunities.length : 0,
  top_opportunity: analysis && analysis.opportunities.length > 0 ? analysis.opportunities[0].name : 'none',
}
