export const meta = {
  name: 'demand-discovery',
  description: '每日需求发现：12 组信号源并行扫描 → 交叉分析 → 报告撰写',
  whenToUse: '每日或每周执行一次，系统性发现可产品化的用户痛点和市场机会',
  phases: [
    { title: 'Signal Collection', detail: '12 search groups pipelined for rate-limit safety' },
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
          metrics: { type: 'string' },
          ai_opportunity: { type: 'string' },
        },
        required: ['title', 'signal_type', 'description'],
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

const today = args && args.date ? args.date : '2026-06'
const year = today.slice(0, 4)
const month = today.slice(0, 7)

const SEARCH_GROUPS = [
  {
    key: 'producthunt-appsumo-clawhub',
    label: 'Product Hunt + AppSumo + ClawHub',
    type: 'product_market',
    prompt: `Search for PRODUCT MARKET SIGNALS from Product Hunt, AppSumo, and ClawHub.

Run these searches ONE AT A TIME (sequential, not parallel):
1. "Product Hunt" most upvoted AI tools ${month}
2. site:producthunt.com AI SaaS launched this week ${year}
3. AppSumo best selling AI tools ${month} ${year}
4. site:clawhub.ai most downloaded skills ${month} ${year}
5. ClawHub OpenClaw popular skills AI ${year}

For each product found, extract: name, problem solved, target user, business model, popularity metrics (votes/sales/reviews/downloads), and AI practitioner insights.
ClawHub: focus on what Agent skills are in high demand → AI Agent ecosystem real needs.
Focus on last 7 days. Include source URLs.`,
  },
  {
    key: 'upwork-fiverr-gumroad-zapier',
    label: 'Upwork + Fiverr + Gumroad + Zapier/Make',
    type: 'product_market',
    prompt: `Search for PRODUCT MARKET SIGNALS from freelance marketplaces, digital product stores, and automation platforms.

Run these searches ONE AT A TIME:
1. Upwork in-demand AI skills ${year} most hired
2. site:fiverr.com AI services trending ${year}
3. Gumroad trending AI digital products ${month} ${year}
4. site:zapier.com/apps popular integrations AI ${year}
5. Make.com most popular AI automation integrations ${year}

Extract: service/product type, price range, purchase frequency, what's being productized.
Zapier/Make: focus on what workflows are high-frequency connected → automation pain = productization opportunity.
Focus on last 7-30 days. Include source URLs.`,
  },
  {
    key: 'kickstarter-shopify-chrome-udemy',
    label: 'Kickstarter + Shopify + Chrome Store + Udemy',
    type: 'product_market',
    prompt: `Search for PRODUCT MARKET SIGNALS from crowdfunding, e-commerce, browser extensions, and learning platforms.

Run these searches ONE AT A TIME:
1. Kickstarter trending AI tech projects ${month} ${year}
2. site:apps.shopify.com AI best selling ${year}
3. Chrome Web Store AI productivity extensions ${year} most users
4. Udemy best selling AI course ${month} ${year}
5. site:udemy.com AI tool automation workflow highest rated ${year}

Extract: product name, funding amount/user count, problem solved, pricing model.
Udemy: what skills/tools people pay to learn → demand heat validation.
Focus on last 7-30 days. Include source URLs.`,
  },
  {
    key: 'reddit',
    label: 'Reddit Pain Points',
    type: 'pain_point',
    prompt: `Search for PAIN POINT SIGNALS from Reddit.

Run these searches ONE AT A TIME:
1. site:reddit.com "I wish there was" AI tool ${year}
2. site:reddit.com "frustrated with" SaaS ${year}
3. site:reddit.com/r/SaaS "idea" OR "built" ${month}
4. site:reddit.com "anyone know a tool" automation ${year}

If site: searches return nothing, try without site: prefix.
Extract: pain point description, user quotes (exact words), subreddit, upvotes, existing solutions status.
Focus on last 7 days. Include source URLs.`,
  },
  {
    key: 'hackernews-stackoverflow',
    label: 'Hacker News + Stack Overflow',
    type: 'pain_point',
    prompt: `Search for PAIN POINT and PRODUCT SIGNALS from Hacker News and Stack Overflow.

Run these searches ONE AT A TIME:
1. Hacker News "Show HN" AI most upvoted ${month} ${year}
2. Hacker News "Ask HN" AI tool ${month} ${year}
3. site:news.ycombinator.com AI agent ${month} ${year}
4. site:stackoverflow.com "is there a tool" OR "looking for a library" AI ${year}
5. site:stackoverflow.com AI automation "how to" frequently asked ${year}

Extract: post title, points, comments count, core pain point or product insight, user quotes.
Stack Overflow: high-frequency repeated questions = productizable developer tool opportunity.
Focus on last 7 days. Include item URLs.`,
  },
  {
    key: 'indiehackers-substack',
    label: 'Indie Hackers + Substack',
    type: 'pain_point',
    prompt: `Search for PAIN POINT and REVENUE signals from Indie Hackers and Substack.

Run these searches ONE AT A TIME:
1. site:indiehackers.com "building" OR "launched" AI ${month} ${year}
2. site:indiehackers.com "revenue" OR "MRR" AI ${year}
3. site:indiehackers.com "problem" OR "pain point" SaaS ${month}
4. site:substack.com AI startup opportunities ${month} ${year}

Extract: product name, MRR/revenue, pain point addressed, user quotes, lessons learned.
Focus on last 7-30 days. Include source URLs.`,
  },
  {
    key: 'twitter-reviews-youtube-discord',
    label: 'Twitter/X + Reviews + YouTube + Discord',
    type: 'pain_point',
    prompt: `Search for PAIN POINT SIGNALS from Twitter/X, review platforms, YouTube, and community forums.

Run these searches ONE AT A TIME:
1. "AI tool" "wish" OR "need" OR "looking for" ${year}
2. "switched from" OR "alternative to" AI tool ${month} ${year}
3. site:g2.com AI tool reviews "cons" ${year}
4. YouTube AI tool tutorial most viewed ${month} ${year}
5. discord AI tool community "feature request" OR "wish" ${year}

Extract: complaint description, user quotes, which tools they're leaving and why, audience size estimate.
YouTube: high-view tutorials = demand scale; comment complaints = real pain points.
Discord/Slack: feature requests and workarounds in AI tool communities = product improvement gaps.
Focus on last 7 days. Include source URLs.`,
  },
  {
    key: 'github-huggingface-baai',
    label: 'GitHub Trending + HuggingFace + 智源社区',
    type: 'trend',
    prompt: `Search for INDUSTRY TREND SIGNALS from GitHub, Hugging Face, and BAAI Hub (智源社区).

Run these searches ONE AT A TIME:
1. GitHub trending repositories AI ${month} ${year}
2. github.com/trending AI machine-learning ${month}
3. Hugging Face most downloaded model ${month} ${year}
4. Hugging Face new dataset trending ${month} ${year}
5. site:hub.baai.ac.cn AI 热门论文 OR 热门项目 ${month} ${year}

Extract: repo/model name, stars/downloads, what problem it solves, growth velocity, implications for product builders.
智源社区: Chinese AI academic frontier, new papers/projects → technology capability breakthrough signals.
Focus on last 7 days. Include source URLs.`,
  },
  {
    key: 'funding-vc-yc-blogs-podcasts',
    label: 'Funding + VC + YC + Blogs + Podcasts',
    type: 'trend',
    prompt: `Search for FUNDING, INVESTOR, and THOUGHT LEADER signals.

Run these searches ONE AT A TIME:
1. AI startup funding ${month} ${year} seed series-a
2. site:techcrunch.com AI startup raised funding ${month} ${year}
3. "Y Combinator" batch AI startup ${month} ${year}
4. a16z OR Sequoia AI investment ${month} ${year}
5. site:a16z.com/blog AI ${month} ${year}
6. "My First Million" OR "All-In Podcast" OR "Acquired" AI ${month} ${year}

Extract: company name, round size, investors, what they're building, implications for the market.
Blogs (a16z, Paul Graham, Lenny's Newsletter, Stratechery, Not Boring): top investor/founder deep thinking → trend judgment + framework insights.
Podcasts (Acquired, All-In, My First Million, 20VC, 硅谷101): founder/investor conversations → track insights, pain point discussions.
Focus on last 30 days. Include source URLs.`,
  },
  {
    key: 'arxiv-regulation-breakthrough-trends-luma',
    label: 'arXiv + Regulations + Breakthroughs + Google Trends + Luma',
    type: 'trend',
    prompt: `Search for FRONTIER RESEARCH, REGULATORY, and QUANTITATIVE DEMAND signals.

Run these searches ONE AT A TIME:
1. AI breakthrough new capability ${month} ${year}
2. new regulation AI ${year} ${month} compliance
3. site:arxiv.org AI agent framework ${month} ${year}
4. new AI API feature announcement ${month} ${year}
5. site:lu.ma AI event ${month} ${year}

Extract: breakthrough/regulation description, time horizon (immediate/6-12mo/1-2yr), product implications.
Google Trends: use WebFetch on trends.google.com to check search volume for top opportunity keywords — the only quantitative demand validation signal.
Luma: AI/Tech event themes and participant counts → industry hotspot indicator.
Focus on last 30 days. Include source URLs.`,
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
]

// ── Phase 1: Signal Collection ───────────────────────────────────────────────

phase('Signal Collection')
log(`Scanning ${SEARCH_GROUPS.length} signal source groups...`)

const signals = await parallel(
  SEARCH_GROUPS.map((g) => () =>
    agent(
      `You are a demand discovery researcher. Today is ${today}. Year: ${year}. Month: ${month}.

${g.prompt}

IMPORTANT RULES:
- Run searches ONE AT A TIME to avoid rate limits. Wait for each to complete before starting the next.
- Use WebSearch for searching, WebFetch for extracting content from promising pages.
- For each finding, extract structured data: title, source_url, source_date, signal_type ("${g.type}"), description, user_quote (exact words if available), metrics, ai_opportunity.
- Return at least 5 signals if available, up to 15.
- If a search returns no results, try alternative queries without site: prefix.`,
      {
        label: g.label,
        phase: 'Signal Collection',
        schema: SIGNAL_SCHEMA,
        model: 'sonnet',
        effort: 'medium',
      }
    )
  )
)

const validSignals = signals.filter(Boolean)
const totalSignalCount = validSignals.reduce((sum, s) => sum + (s.signals ? s.signals.length : 0), 0)
log(`Collected ${totalSignalCount} signals from ${validSignals.length}/${SEARCH_GROUPS.length} groups`)

// ── Phase 2: Cross-Analysis ──────────────────────────────────────────────────

phase('Cross-Analysis')
log('Analyzing cross-channel patterns and scoring opportunities...')

const signalSummary = validSignals
  .map((s) => {
    const lines = s.signals.map((sig) => {
      let line = '- [' + sig.signal_type + '] ' + sig.title + ': ' + sig.description
      if (sig.user_quote) line += ' — "' + sig.user_quote + '"'
      if (sig.source_url) line += ' (' + sig.source_url + ')'
      return line
    })
    return '## ' + s.group + '\n' + lines.join('\n')
  })
  .join('\n\n')

const analysis = await agent(
  `You are a startup opportunity analyst. Analyze these signals from today's demand discovery scan (${today}).

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
For each opportunity: name, one_liner, target_user, all 6 dimension scores, composite_score, cross_validation description, source URLs, is_new (true if not seen before).`,
  {
    label: 'Cross-Analysis',
    phase: 'Cross-Analysis',
    schema: ANALYSIS_SCHEMA,
    effort: 'high',
  }
)

log(`Identified ${analysis ? analysis.opportunities.length : 0} opportunities`)

// ── Phase 3: Report Writing ──────────────────────────────────────────────────

phase('Report Writing')
log('Writing daily report and updating opportunity tracker...')

const opportunitiesJSON = JSON.stringify(analysis, null, 2)
const signalsJSON = JSON.stringify(validSignals, null, 2)

const report = await agent(
  `You are a demand discovery report writer. Write today's (${today}) 每日需求发现报告.

## DATA TO USE

### Cross-Analysis Results (Top Opportunities)
${opportunitiesJSON}

### Raw Signal Data
${signalsJSON}

## YOUR TASKS

1. **Read the previous report** at reports/ directory — find the most recent demand-discovery-report.md to compare with yesterday
2. **Read the opportunity tracker** at reports/_opportunity-tracker/opportunities.md
3. **Write the daily report** to reports/${today.slice(0, 10) || month + '-27'}/demand-discovery-report.md

The report MUST follow this template structure:
- # 每日需求发现报告 — {date}
- 📊 今日概览 (channels scanned, valid signals, opportunities found, best opportunity)
- 🏆 Top 5 机会 (scored tables with dimensions, one-liner, target user, pain sources with links, user quotes, competitor analysis, AI advantage, MVP plan, business model, cross-validation)
- 📡 信号雷达 (product market signals / pain point signals / industry trends — with tables)
- 🔗 交叉验证的高价值信号 (patterns appearing across ≥2 channels)
- 🇨🇳 中文市场专题信号 (if Chinese signals exist)
- 📈 累积趋势 (themes appearing across multiple days, this week vs last week)
- ⚠️ 免责声明

4. **Update the opportunity tracker** at reports/_opportunity-tracker/opportunities.md:
- Same opportunity appearing again → increment appearance count, take max score
- New opportunity → add row
- Appearance count ≥3 → mark "⭐ 值得深入研究"
- Keep existing manually-marked statuses

Write both files. The report should be comprehensive (300+ lines), with specific data, links, and quotes from the signals.`,
  {
    label: 'Report Writer',
    phase: 'Report Writing',
    effort: 'high',
  }
)

log('Report complete!')

return {
  total_signals: totalSignalCount,
  groups_completed: validSignals.length,
  groups_total: SEARCH_GROUPS.length,
  opportunities: analysis ? analysis.opportunities.length : 0,
  top_opportunity: analysis && analysis.opportunities.length > 0 ? analysis.opportunities[0].name : 'none',
}
