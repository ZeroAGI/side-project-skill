# 10 — Twitter/X + Reviews + YouTube + Discord 2026-07-31

> 组内信号：8 条 | 二手转述：1 条（12.5%）
> 最强证据线：AI 编程工具（Cursor / GitHub Copilot）在 2026 年从固定订阅转向用量计费，引爆大规模用户流失——GitHub 社区多个讨论帖数百 upvote、上百评论，附逐字迁移意图（Claude Code / Codex / Kilo / 本地模型）。X 和 YouTube 渠道本身抓取受限（X 返回 JS 占位页/402、YouTube WebFetch 连接被拒 ECONNREFUSED），故本组主证据落在 GitHub Discussions、Cursor 官方论坛、OpenAI 社区、G2 与 gov.uk 等可验证一手页面。G2 评论页 WebFetch 返回 403，仅能从搜索摘要引用，已标 secondhand。

---

## 1. GitHub Copilot 学生方案：200 credits 第 1 天就烧光
- **type**: pain_point | **platform**: GitHub Discussions | **secondhand**: false
- **source_url**: https://github.com/orgs/community/discussions/197557
- **source_date**: 2026-06-01 | **fetched_at**: 2026-07-31
- **metrics**: 163 votes / 133 comments + 62 replies / 145 participants；OP 反应 103👍 34😕；koustavmajics 评论 128👍 27❤️
- **description**: 2026-06-01 Copilot 切换为按 token 用量计费（AI Credits）后，验证学生用户约 10–20 次 Agent Mode 请求就耗尽整月 200 credit（$2）额度，此前同等使用从未触顶。多人怀疑计量有 bug（一张截图模型明细加总仅 50.8，缺 149.2 credit）。这是「固定订阅心智 → 用量计费」的典型冲击，学生/免费层几乎失去价值。
- **user_quote**: "Is it normal for around 10 Agent Mode requests to consume the entire 200-credit monthly allowance? In previous months, I used Agent Mode much more extensively and did not exhaust my credits this quickly."
- **top_comments**:
  - [koustavmajics 评论 128👍] "I was NOT using Agent Mode" —— 普通 chat 里 4–5 条消息就烧光，称 $2/月「not enough for a verified student doing real development work」
  - [NiklasssZ 评论 34👍] "That's not 'student support' anymore. That's a demo."
  - [alexzxlee 评论 21👍] 建议退订，直接迁移「directly to Claude or Codex」；AvgZing 迁到 Kilo + Deepseek，称约 5 美分就能做完相当于整 200-credit 额度的活
- **ai_opportunity**: 面向 AI 编程用量的「实时成本护栏 + 跨模型路由」中间件：预估每次调用花费、超阈值告警、可设日/周硬顶，并在便宜模型间自动降级——直击「用后才知道贵」的核心痛。

## 2. GitHub Copilot Max：credit 消耗过猛且无预警
- **type**: pain_point | **platform**: GitHub Discussions | **secondhand**: false
- **source_url**: https://github.com/orgs/community/discussions/197637
- **source_date**: 2026-06-01 | **fetched_at**: 2026-07-31
- **metrics**: OP 12 upvotes / 2 comments / 2 participants；状态 Unanswered，标签 Bug
- **description**: 用户从 Pro+ 升到 Max，短暂使用 GPT-5.5 就烧掉约 $28 credit，认为比原 $39/月 Pro+ 明显「不耐用」，核心诉求是消耗速率在花完前不可见。提出 5 项改进：模型消耗率不透明、贵模型无预警、无花费上限/确认步骤、稳定日用体验反不如 Pro+、难预测方案能撑多久。
- **user_quote**: "around $28 worth of AI credits were consumed... users should not discover the real cost only after a large amount of credits has already been consumed."
- **top_comments**:
  - [Anselmoo 评论] 反向降级「from Pro+ to Pro」；称用 GPT5.3-Codex 或 Sonnet 4.6 做 planning 就吃掉 5-7% 额度、写代码推到 10-15%，主张月度用量计费「should be better replaced by a daily or weekly model」
- **ai_opportunity**: 「按日/周计量的用量预算 UI」——把不透明的月度池拆成可视化每日配额与预估条，SaaS 或 IDE 插件形态均可。

## 3. "Github Copilot is a complete scam" —— 年费中途单方面涨价 6x
- **type**: pain_point | **platform**: GitHub Discussions | **secondhand**: false
- **source_url**: https://github.com/orgs/community/discussions/197960
- **source_date**: 2026-06-04 | **fetched_at**: 2026-07-31
- **metrics**: 145 upvotes / 71 comments + 64 replies / 82 participants；状态 Unanswered
- **description**: 用户称上月用量撑满整月，新周期 3 天就到 98%，把计费变更定性为对年度合约的单方面修改。多名评论者附类似倍率变化，迁移成为主导话题。此帖的价值在于「合约信任崩塌」这一情绪维度，超出单纯定价。
- **user_quote**: "it's a unilateral change in the conditions of the contract... credit charges per model can't just change 6x like that... just deceitful marketing and scamming."
- **top_comments**:
  - [sgatade 评论] "The token/rate limit is burning x10 times."
  - [TheCyberLocal 评论] $100 层单条 prompt 吃掉 15% 月配额，称「25 times the price」
  - [guideX 评论] "I had no option but to move everything to Codex, and it's far better"；Musomoka「Am getting a Claude subscription and thats it」；brasastudio 转本地 Qwen
- **ai_opportunity**: 「订阅变更监测/迁移助手」——追踪各 AI 工具计费条款变动、估算个人用量下的实际月成本、一键对比迁移到 Claude Code/Codex/本地模型的性价比。

## 4. Copilot Pro+ 被「weekly rate limit」锁数小时
- **type**: pain_point | **platform**: GitHub Discussions | **secondhand**: false
- **source_url**: https://github.com/orgs/community/discussions/192485
- **source_date**: 2026-04-14 | **fetched_at**: 2026-07-31
- **metrics**: 190 upvotes / 97 comments + 153 replies；OP 反应 149👍 53❤️ 32😕；状态 Unanswered
- **description**: 付费 Pro+ 用户周一用 180 次 premium 请求后周二即触周限，报错 `user_weekly_rate_limited`，提示等 5h52m 或切 Auto；有人被锁「463 hours 23 minutes」（约 2.7 周）。GitHub 支持确认存在独立于 credit 的全局速率限制，归因于「部分模型不在主基础设施上」。付费仍被限流的体验是流失催化剂。
- **user_quote**: "wait 5 hours 52 minutes before trying again or consider switching to Auto"
- **top_comments**:
  - [GitHub Support via chriswhitingBCH] "there are still global rate limits that apply to all Copilot plans... Some of these models aren't running on our primary infrastructure"
  - [willWashington 评论] 剩 1491 premium 请求却已到周限 50%，"What in the blue hell is a premium request?"
  - [meftunca 评论] 迁到 RunPod Serverless + Qwen 3.6，估算专用 GPU 时间成本相当
- **ai_opportunity**: 「多提供商故障转移代理」——当一家（Copilot）触发速率限制时自动路由到备用 provider/本地模型，对付费用户屏蔽限流断点。

## 5. Cursor 成本无端翻倍：$200 → $400，Agent 每步单独计费
- **type**: pain_point | **platform**: Cursor Forum | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/cursor-costs-are-climbing-without-a-clear-reason/157233
- **source_date**: 2026-04-09 | **fetched_at**: 2026-07-31
- **metrics**: 页面未暴露 view/reply 数；线程含 Cursor 员工回复 + 多名用户接力（4月延伸至5月）
- **description**: 工作量基本不变，花费从 <$200 涨到 >$400。Cursor 员工解释 Agent 模式下每一步（读文件、工具调用、命令、写代码）都是单独计费的 API 调用，一条 prompt 可轻易产生 20–30 步，且每步都携带全部历史 context 导致 token 累积。用户反驳这是「行为改变」而非常态，并陆续开始装 Codex/Claude/Zed 对冲。
- **user_quote**: "We went from under $200 to over $400, and we're not seeing a clear reason behind that jump... We've started looking into other setups using similar models and tools."
- **top_comments**:
  - [deanrie / Cursor 员工] "in Agent mode each step... is a separate billed API call, one prompt can easily generate 20 to 30 of these steps"；"Long chats build up context"
  - [Akash_Srivastav 评论] 两个 Pro 座位以前从不超限，现约 10 天触顶，$10 top-up 只撑 5–6 小时
  - [kfkhalili 评论] 已完全迁走，转 Claude 20x + Codex 5x，称「by far a lot better at token use」，此前一天就烧掉 Ultra 月配额 35–40%
- **ai_opportunity**: 「Agent 步数与 context 成本可视化仪表盘」——把「一条 prompt = N 次计费调用」透明化，并在 context 膨胀时提示开新 chat，直接对应用户「付钱却没产出」的痛点。

## 6. Cursor 缺 $40 中间档 + pay-as-you-go 计费标准不清
- **type**: pain_point | **platform**: Cursor Forum | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/some-complaints-about-the-bill/162503
- **source_date**: 2026-06-05 | **fetched_at**: 2026-07-31
- **metrics**: 线程 1 条员工回复；分类 Billing / MacOS
- **description**: 非美元经济区用户认为 $20 Pro 与 $60 Pro 之间断档太大，希望有 $40 档；同时抱怨 pay-as-you-go 没有清晰计费标准。员工回复承认多次有人提中间档但「暂无法透露方案结构更新」。反映定价梯度与透明度的结构性缺口。
- **user_quote**: "I hope that besides the $20 Pro and $60 Pro plans, there could be an additional $40 plan... I haven't found a clear billing standard for the pay-as-you-go feature."
- **top_comments**:
  - [deanrie / Cursor 员工] 承认中间档诉求、链接两个旧帖，"I can't share any updates on plan structure right now"；解释超额「charged at API pricing with no markup」
- **ai_opportunity**: 面向多档订阅工具的「按真实用量推荐最优档位」小工具，尤其服务非美元区/价格敏感开发者。

## 7. Cursor 新定价「疯狂」——预警式流失帖，罗列大量替代品
- **type**: pain_point | **platform**: Cursor Forum | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/the-new-pricing-system-is-insane-a-main-reason-i-ll-switch-platforms/135489
- **source_date**: 2025-09-30 | **fetched_at**: 2026-07-31
- **metrics**: 多页长贴，含 Cursor 员工/多用户回复；延伸至 2025-10
- **description**: 用户按自身用量截图测算，新方案额度约为旧方案的 1/10，称支付系统「completely unreasonable」「deal-breaker」。虽较早（2025-09），但完整列出用户迁移目标图谱：Claude Code、Trae IDE、Kilo Code、VS Code+Copilot+Codex、Codex CLI、Roo Code、Claudia。作为「转用量计费」叙事的起点样本仍有价值。
- **user_quote**: "would have already run out of credits under the new system... Transparency and fair value are critical."
- **top_comments**:
  - [mackann 评论] 1.5 天 Sonnet 4.5 thinking 用光 Ultra 额度并产生约 $100 超额
  - [flashtea 评论] Team 方案开发者几天内触顶，提出 Claude 做引导式手工 + Codex CLI 跑长任务的拆分工作流
  - [SKiel 评论] 提出二阶成本：切模型会丢 context，下游损失可能超过省下的钱
- **ai_opportunity**: 「AI 编程工具比价与迁移评估」内容/工具产品——把散落论坛的替代品经验（性价比、稳定性、Linux 支持、tab 补全缺失）结构化为可查询决策库。

## 8. Microsoft 因 Copilot 订阅涨价手法被 CMA 立案调查
- **type**: pain_point | **platform**: gov.uk (CMA) | **secondhand**: false
- **source_url**: https://www.gov.uk/cma-cases/microsoft-consumer-protection-enforcement-case
- **source_date**: 2026-07-27 | **fetched_at**: 2026-07-31
- **metrics**: 消费者保护执法案，2026-07-27 立案（2026-07-29 公布），下次更新预计 2026 年底
- **description**: 英国 CMA 就 Microsoft Ireland 是否在向 M365 Personal/Family 订户告知加入 Copilot 等变更时违反消费者法立案，核查续订前信息是否具误导性、用户是否获知足够的选项与价差以做知情选择。订阅结束后用户若不主动选便宜档或取消，会被自动移到含新功能的更贵方案。监管层面证据，指向「强制捆绑 AI + 涨价」这一横跨消费级产品的痛点。
- **user_quote**: "whether Microsoft's communications with customers before renewal were misleading"
- **top_comments**:
  - [CMA 声明] "customers may not have been given clear information upfront about subscription options, including adding new features such as Copilot"
  - [CMA 声明] "it should not be assumed that Microsoft has infringed consumer protection law, and no finding has been made"
- **ai_opportunity**: 「AI 功能捆绑透明化/合规」工具：帮助 SaaS 在加价前生成清晰的选项对比与续订披露，规避监管风险；也可做消费者侧的「订阅变更看门狗」。

## 9. OpenAI 桌面端重构后核心 chat 退化，长期用户取消转投 Anthropic
- **type**: pain_point | **platform**: OpenAI Community Forum | **secondhand**: false
- **source_url**: https://community.openai.com/t/openai-is-cooked-broken-desktop-experience-cancelled-subscription/1386909
- **source_date**: 2026-07-15 | **fetched_at**: 2026-07-31
- **metrics**: 页面未暴露该帖 view/reply（关联帖有 24,552 views 作参照）
- **description**: macOS 更新把桌面 app 重构为以 work/Codex 为中心，普通 chat 沦为次等入口——挤进一个功能被剥光的浮窗，简单问题要 30–60 秒，旧 project 消失；承诺的「ChatGPT Classic」回退 app 因更新 bug 根本没装上、也无法重新下载。长期订户因此转投 Anthropic。产品「强推新范式、砍旧核心体验」导致流失的样本。
- **user_quote**: "Access to anything resembling the old-school chat interface is an afterthought... none the features or options previously found in chat."
- **top_comments**:
  - [OP 续述] Classic 回退失败归因于「a pretty serious bug in the Mac desktop app's built-in update feature」
  - [OP 续述] 取消时给了免费一个月却从没问离开原因，"a missed opportunity to understand how you failed your customer"
- **ai_opportunity**: 「经典 UI 保留层/降级模式」思路：主流工具改版时给重度用户可选的旧交互；或第三方轻量 chat 客户端，主打稳定、快速、不强推 agent 范式。

## 附：渠道故障与降级说明
- X/Twitter：WebFetch 分别返回 JS 占位页、402 Payment Required；WebSearch `site:x.com` 结果被 listicle「2026 你需要的 AI 工具」类帖淹没，未能定位到「I wish...」愿望型原帖。属抓取/索引受限，非搜索污染。
- YouTube：两次 WebFetch 均 `connect ECONNREFUSED 69.171.235.22:443`（连接被拒），无法读取视频页 view 数与评论区，故本组未纳入 YouTube 一手信号。
- G2：评论页 WebFetch 返回 403 Forbidden，仅有搜索摘要级信息（Convin.ai 定价/TTS、Gamma AI 图像生成弱、Reclaim.ai 无法在创建页指定时间、Abnormal AI 多租户设置不友好），证据强度不足以单列一手信号，故不计入 N。
- Discord：MindStudio 社区（Discourse）的 Discord 集成 feature request 可读但为 2025-08 旧帖且无回复/热度，未单列。
- 搜索渠道整体功能正常，未见「每条查询返回同一结果集」或「结果回显指令文本」的污染特征。
