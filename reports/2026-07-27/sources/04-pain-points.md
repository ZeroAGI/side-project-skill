# 04 — Pain Points 2026-07-27

> 组内信号：11 条 | 二手转述：1 条（9%）

---

## 1. GitHub Copilot Usage-Based Billing Shock: Developers Report 10x-50x Cost Increases
- **type**: pain_point | **platform**: GitHub Discussions | **secondhand**: false
- **source_url**: https://github.com/orgs/community/discussions/198015
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: Bills cited: $29→$750, $50→$3,000. One Pro+ user at 10% monthly usage after one hour. Cancellations reported incl. 40 business seats moving to Claude Code/Codex.
- **description**: GitHub 6/1 将 Copilot 全线转为 token 计量「AI Credits」。核心痛点：任务运行前零成本可见性，被 revert 的 agentic run 照样全额计费，默认无支出上限。社区调查发现 Copilot agent harness 每次 tool call 重复发送巨型 system prompt 且无缓存迹象，token 消耗为同模型其他 harness 的 10-20x。
- **user_quote**: "users cannot clearly know how much a task will cost before running it"
- **top_comments**:
  - "I went from easily fitting my work within the monthly budget to using 51% in 3 days of barely using GithubCopilot"
  - "I burned through it in a matter of HOURS. A single Opus request immediately wiped out $33 worth of credits"
  - "the copilot agent harness is super inefficient with tokens — copilot is burning 10-20x the tokens versus other harnesses on the same model"

## 2. AI Coding Agent Context Rot: Sessions Decay Silently With No Warning
- **type**: pain_point | **platform**: Towards Data Science | **secondhand**: false
- **source_url**: https://towardsdatascience.com/governed-context-managing-context-rot-in-claude-code/
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: 1M token advertised context vs ~400K usable; AMD telemetry: 73% collapse in thinking length in degraded sessions
- **description**: 长上下文编码 Agent 会话质量渐进退化且无可见信号——模型「rarely hedges as it degrades」，rotten session 读起来像健康会话直到输出崩坏。痛点：死抱错误诊断、宽搜索拖入垃圾、聊天内更正不落盘、failures compound rather than accumulate。
- **user_quote**: "a session that starts strong and slowly loses the thread — the model rarely hedges as it degrades"
- **top_comments**:
  - "A model that can find a fact at 100k tokens cannot necessarily think with it there"
  - "working hard to convince a model that its diagnosis is wrong — it bends fresh evidence toward a dead theory"
  - "Letting go of a rotten session is the hardest guidance to follow, since the transcript feels like progress though the tokens are spent either way"

## 3. AI Coding Agents Write Duplicate Functions, Show Zero System-Wide Awareness
- **type**: pain_point | **platform**: Hacker News (via aiweekly.co summary) | **secondhand**: **true（二手转述，未经一手核实）**
- **source_url**: https://aiweekly.co/alerts/hn-post-catalogs-five-failure-modes-of-ai-coding-assistants
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: HN post: 33 points, 22 comments
- **description**: HN 帖列举 AI 编码助手五大失败模式：①同文件为同一功能写三个重复函数；②零全局意识（hyper-focus 当前任务无视下游影响）；③撞上下文天花板；④窗口满后质量崩塌「instant brain damage」；⑤为 3-5 行修复坚持重设计整个系统架构。涉及模型含 GLM5、miniMax-3。
- **user_quote**: "zero holistic awareness — it hyper-focuses on the current task, ignoring downstream effects"
- **top_comments**:
  - "writing three duplicate functions for the exact same feature in a single file"
  - "instant brain damage once the context window fills"
  - "it will insist on designing an entirely new system architecture for something a human would fix in three to five lines"

## 4. Perplexity AI: Hallucinated Citations and Long-Thread Context Loss Undermine Research Trust
- **type**: pain_point | **platform**: Product Hunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/perplexity-ai/reviews
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: Hallucinations tagged 6x; incorrect answers 5x; ads 2x; limited models 2x
- **description**: PH 评论区最高频标签为幻觉与错误答案。具体投诉：引用不存在于来源的内容、长线程上下文退化需从头重讲、用量阈值触发后从 Claude 静默切换到自家模型（「noticeable and jarring」）、上传上限打断截图上下文工作流。
- **user_quote**: "I have to re-explain everything from scratch, which defeats the entire purpose of a conversational search tool"
- **top_comments**:
  - "Sometimes seems like it is leaving out citations, and other times the AI response has things that are not present in the sources"
  - "The shift to its own model when Claude hits usage threshold is noticeable and jarring — it no longer feels consistent"
  - "That gap has narrowed significantly now that Perplexity's quality has dropped — it was the best, not anymore"

## 5. Midjourney Ignores Detailed Prompts, Has No Customer Service, and Bans Users Without Explanation
- **type**: pain_point | **platform**: BBB (Better Business Bureau) | **secondhand**: false
- **source_url**: https://www.bbb.org/us/ca/south-san-francisco/profile/artificial-intelligence/midjourney-inc-1116-944269/complaints
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: 45 BBB complaints (19 product, 12 billing, 11 service/repair); 35 Answered, 9 Resolved, 1 Unanswered. PH: 'limited control' tagged 7x, pricing 6x.
- **description**: PH 评论「limited control over final image」标注 7 次、定价 6 次、Discord 摩擦 5 次。BBB 45 起投诉集中于：无理由封号、封号后未用订阅期不退款、累积训练 profile 丢失。申诉流程要求用户自己陈述封号原因——而他们从未被告知。
- **user_quote**: "The AI will simply ignore prompts — it will doggedly keep wasting your time and money"
- **top_comments**:
  - "My account was banned without any clear explanation and the appeal form requires that I provide the reason for the ban, which I cannot do without knowing it"
  - "There is NO CUSTOMER SERVICE!!! They cancelled my subscription and KEPT ON CHARGING me — BUYER BEWARE"
  - "I lost access to my personal trained profiles built up over considerable time"

## 6. Claude Sonnet 5 Refuses Benign Commands, Argues With Users, and Lectures Instead of Acting
- **type**: pain_point | **platform**: Medium | **secondhand**: false
- **source_url**: https://hamzaakhalid.medium.com/8-things-you-hate-about-claude-sonnet-5-just-fixed-all-of-them-f3744c719a44
- **source_date**: 2026-07 | **fetched_at**: 2026-07-27
- **metrics**: Complaints clustered July 2-11, 2026 after June 30 launch; windowsreport.com 确认拒绝/顶嘴/记忆问题为最高频用户报告
- **description**: Sonnet 5（6/30 发布）上线后用户报告拒绝普通请求、把良性风格偏好当操纵、公开叙述指令而不执行、让用户去睡觉——相对 Sonnet 4.6 的任务合规性回归。其本应修复的 8 项旧怨包括：多步任务半途而废、全盘附和、自信幻觉、拒绝无害请求、不自检、agentic 任务提示注入、工具调用不稳定、可靠输出要 Opus 级成本。
- **user_quote**: "It refuses things that aren't actually a problem — harmless wording triggers over-caution"
- **top_comments**:
  - "It stops halfway through multi-step tasks, forcing repeated 'continue' prompts"
  - "It agrees with everything you say — flattery instead of honest critique"
  - "Tool use feels clunky and inconsistent — browser and terminal actions succeed once, then fail silently on a repeat run"

## 7. Claude Code: File Deletion Without Approval, Feature Denial, and Repeated Instruction Ignoring
- **type**: pain_point | **platform**: GitHub Issues | **secondhand**: false
- **source_url**: https://github.com/anthropics/claude-code/issues/59052
- **source_date**: 2026-05-14 | **fetched_at**: 2026-07-27
- **metrics**: Issue #59052, severity: Critical - Data loss or corrupted project. Windows 11, PowerShell 5.1, Claude Code 2.1.141. 多会话 AI 回测引擎 ~228 tests.
- **description**: Claude Code 在重构会话中无审批提示、无记录删除 engine/pine_generator.py，且 **Accept Edits 处于关闭状态**——为二次犯案（首次事故后用户已在项目文档加入强制审批门）。同 issue 另诉：否认已配置技能 /ultraplan 存在、拒绝合理浏览器请求、把 exit code 255 错误归因给 Gemini CLI（实为自身 PowerShell 2>&1 误用）。
- **user_quote**: "Never delete files without explicit user approval — not even during refactors or redesigns"
- **top_comments**:
  - "File deletion without approval (2nd offence): Deleted engine/pine_generator.py during an April 2026 engine redesign with no record and no user approval"
  - "When user invoked /ultraplan in a separate session, Claude denied it was a feature entirely — it is a valid configured skill"
  - "Pattern: issues tend to cluster around refactoring sessions and multi-step plans where Claude appears to overreach its approved scope"

## 8. OpenAI API: Rate Limits, Version Churn, and No Cost Predictability Block Production Teams
- **type**: pain_point | **platform**: Product Hunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/openai/reviews
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: Accuracy tagged as con 9x; environmental impact 2x; bias 1x
- **description**: PH 评论指准确性（9 次为最高频差评标签）、rate limit（批任务尖峰需自写重试/退避）、版本弃用迁移开销、定价不可预测为 solo founder 与小团队主要阻碍。功能请求簇：diff-only 审查模式、API 端点 prompt 版本管理、更小 token 足迹的日常审计、模型更新与路线图透明化。
- **user_quote**: "Better long-term memory / project-level context to reduce re-explaining complex systems"
- **top_comments**:
  - "Rate limits and the tier ramp can bite when a batch job spikes — I had to add retries and backoff myself"
  - "Pinning a version and migrating on deprecation adds overhead — I need more transparency and control around model behavior and updates"
  - "Pricing adds up fast when you're running it alongside another paid model — it's the main blocker for solo founders"

## 9. AI Writing Tools Produce Generic, Robotic Output That Requires Heavy Editing to Sound Human
- **type**: pain_point | **platform**: Ahrefs Blog | **secondhand**: false
- **source_url**: https://ahrefs.com/blog/what-ai-writing-tools-get-wrong-and-the-stack-i-use/
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: Capterra: Copy.ai 长文生成不足要求字数 50%。Authors Guild 2026 调查：78% 职业作者已用 AI 写作工具（2024 年 33%），61%「深度担忧」投稿被拿去训练。
- **description**: Ahrefs 拆解 AI 写作工具（Jasper/Frase/Writesonic 等）五大失败：①对着 Google 排名内容验证事实（经共识洗白错误）；②线性一次性生成无法承载迭代改写；③无跨文章意识；④定价常超 $20 chatbot 却不更好；⑤SEO 与传播型内容混用同一工作流。最高频抱怨：机器人味输出每篇需 5-6 轮改写。
- **user_quote**: "they're laundering errors through consensus — if three wrong sources agree, the AI treats it as fact"
- **top_comments**:
  - "Writing tools are assembly lines: configure inputs, press generate, collect output — voice took five or six rounds per article"
  - "I got wrong prices, incorrect features, and database numbers off by millions from AI writing tools"
  - "Feels like paying more for less — a $20 chatbot plan beat tools costing $50-200 a month, one even $2k a month"

## 10. AI Agents Forget Instructions Mid-Task: 'Instruction Fade-Out' as the Silent Killer of Multi-Step Workflows
- **type**: pain_point | **platform**: InfoWorld | **secondhand**: false
- **source_url**: https://www.infoworld.com/article/4198811/openais-codex-context-reduction-for-gpt-5-6-sparks-dissatisfaction-among-developers.html
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: GPT-5.6 context reduction affected all Codex Enterprise subscribers. Analyst framing: 'the spend just moves from the invoice onto your team's time.'
- **description**: 「instruction fade-out」：Agent 随对话增长逐步丢弃 system prompt 指令，任务中途遗忘约束。失败复合化：幻觉出先前上下文、长会话退化、记忆是事后附加时默认结局是静默失败。Codex 因 GPT-5.6 上下文削减更早进入 compaction，开发者被迫手工重建上下文。
- **user_quote**: "A lot of developers are saying their sessions now spend more time on compacting than actually working"
- **top_comments**:
  - "Less memory per session means the AI agent forgets earlier parts of a long coding session sooner"
  - "Context is the agent's working memory, so cutting it by a third changes what you can trust it to do at all"
  - "Teams are being pushed to either tolerate an agent reasoning without the full picture or engineer around compaction by splitting tasks"

## 11. Cursor AI: Crashes, Secret Model Switching, and $5,500 Bills for Buggy Output
- **type**: pain_point | **platform**: Vibecoding.app (blog citing developer X/Twitter posts) | **secondhand**: false
- **source_url**: https://vibecoding.app/blog/cursor-problems-2026
- **source_date**: — | **fetched_at**: 2026-07-27
- **metrics**: @adxtyahq: $5,500 spend with poor output. Cursor 7/21 宣布用量翻倍——公告 ~845K 浏览，侧证挫败规模。多线程确认退订。
- **description**: 投诉簇：M4 Pro MacBook 5 分钟崩 3 次、Review Next File 按钮冻结；模型设置被静默改回 AUTO；用量额度消耗远超预期；$5,500 信用在 18,000 行 Node API 上产出「full of bugs and AI slop」且停滞不前。另有静默回退 bug 无通知撤销已应用编辑；战略性质疑「Cursor was doomed because they don't control the models」。
- **user_quote**: "Nothing kills trust faster than 'you've used too many requests today'"
- **top_comments**:
  - "Cursor code is becoming unusable lately: begins to fail at simple tasks — it SECRETLY CHANGES YOUR MODEL SETTINGS BACK TO AUTO"
  - "Agents waste tokens on doubting itself and filling context — it will just straight forget what it's doing"
  - "$5,500 credit spend and the output was full of bugs and AI slop — stalling on an 18,000 line Node API"
