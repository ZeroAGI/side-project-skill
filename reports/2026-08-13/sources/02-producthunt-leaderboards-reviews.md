# 02 — Product Hunt 四档榜单 + Review 深挖 2026-08-13

> 组内信号：11 条 | 二手转述：1 条（9%）
> 最强证据线：日榜/周榜双榜同构——开源 + BYOK（自带 API key）+ 免佣金的「反 SaaS 定价」产品霸榜（Dograh、Lettertrace、BetterClaw、Paritok 四款均以"免费/自托管"对抗 $250/月级订阅），且用户评论区大量出现方法论级质疑（测量漂移、评测衰减、agent 是否按预期用产品），这些质疑本身就是产品缺口。渠道故障：2026-08-13 当日日榜为空（"No launch data found"），已按指引回退到 08-12 日榜；Grok Bot 产品页 404（PH slug 无法解析，仅榜单元数据）；Wispr Flow reviews 页两个候选 slug 均 404。搜索渠道正常（无污染迹象）。

## 榜单四档全景（先看趋势，再看信号）

**日榜 2026-08-12（Top 10，08-13 当日无数据）**：1. Dograh 519/148评论；2. Grok Bot 457/20；3. Lettertrace 376/58；4. Assembly Studio 246/14；5. Unsloth Desktop 225/2；6. BearDrive 169/24；7. Swipe 142/19;8. LaraCopilot 142/26；9. Click 131/5；10. RightCard 115/11。

**周榜 2026-W33（Top 10）**：1. Dograh 519；2. Grok Bot 457；3. Tines 3B 417/42；4. Lettertrace 376；5. oqoqo 363/39；6. BetterClaw 322/83；7. Portfolio Lab 318/32；8. Xirp（Spotify 出品 agentic dev env）281/6；9. Paritok（省 85% 成本、3× 更长 coding agent session）263/29；10. Equitybee Benchmark 250/37。

**月榜 2026-08（Top 10）**：1. AdAnt AI 611/88（AI 社交广告）；2. Hey Noah 607/100（AI 行政助理）；3. Wispr Flow Notetaker 586/72；4. Coldtea.ai 522/70（self-driving software）；5. Soloop 492/67（solo founder 的 approval-first Agent OS）；6. Cloudflare OS 473/3；7. NextDoor.Company 462/62；8. AgentSky 454/59（any harness, any LLM 云托管 agent）；9. Omniwork 435/38；10. The GTM Co-Founder 412/19。

**年榜 2026（Top 10）**：1. PostSyncer 806/101；2. Mom Clock 756/92；3. Cowork 1107/38（"Turn Claude into your digital coworker"）；4. Livedocs 486/52；5. MiroMiro 527/51；6. Atlas.new 534/35；7. 2-b.ai 428/90；8. Joodle 419/66；9. ChatGPT Health 428/20；10. SEORCE 397/209（GEO/SEO 诊断，209 条评论为年榜最高讨论量）。

**跨档对比**：日→周几乎完全重叠（Dograh/Grok Bot/Lettertrace 双榜），说明本周无更强竞争者；月榜主题=「AI 行政/Chief-of-Staff + Agent OS」（Hey Noah、Soloop、Omniwork、AgentSky 四席）；年榜主题=「内容分发 + Claude 外挂 + GEO」。**跨全部档存活的品类**：AI agent 基建/编排（每档都有 2 席以上）、GEO/AI 可见性（日榜 Lettertrace ↔ 年榜 SEORCE，说明是全年durable 需求而非本周热点）。**仅日/周档出现的新品类**：开源语音 agent 基建（Dograh）、coding-agent 成本优化（Paritok）、真实任务评测（oqoqo）——emerging，值得盯。

---

## 1. Dograh — 开源 VAPI 替代品，日榜+周榜双料 #1，「no company should own voice AI」
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/dograh
- **source_date**: 空（页面仅示 "Launched this week"，maker 首帖 6 天前）| **fetched_at**: 2026-08-13
- **metrics**: 519 分、148 评论（日榜最高讨论量）、1.1K followers、日榜 #1 + 周榜 #1；0 条正式 review（太新）
- **description**: 开源（BSD-2）语音 AI 呼叫 agent 平台：预约、线索筛选、催款；一条命令自托管、BYO 模型 key 或本地/air-gapped 模型、无按分钟计费；可视化流程编排、70+ 语言实时 speech-to-speech、电话+人工热转接、通话录音自动 QA、MCP 原生支持 Claude Code。maker 直接攻击闭源平台"rent your own agents on their cloud, at their price"。评论区全是深度技术拷问而非客套，问题密度极高。
- **user_quote**: "did the caller get what they called for."（maker Abhishek kumar 回答实时质检指标时——情绪分"easy to compute but hard to act on mid-call"，真正该盯的是重复、打断、静默等结构信号）
- **top_comments**:
  - [launch 评论 · kumar gautam] 追问通话中途 STT 失败怎么办："1. Fallback model 2. Retry with same model ?"（STT/LLM/TTS 全链路流式容错是买家первый关切）
  - [launch 评论 · Ankit Nayan (SigNoz)] "What do you lose when you move to speech to speech?" — maker 承认失去自定义克隆声音、部分工具调用可预测性，以及 "per-stage visibility"（端到端模型比 STT/LLM/TTS 分段更难 debug）
  - [launch 评论 · Nihal Dwivedi] 问代理商变现路径：是否 "they white-label the solution and charge their own customers?"（白标转售需求已在评论区自发出现）
- **ai_opportunity**: 三个从评论区直接读出的缺口：(1) 语音 agent 全链路可观测性/分段 debug 工具（speech-to-speech 模型的 "per-stage visibility" 是公认损失）；(2) 通话结构信号质检（重复/打断/静默→"caller got what they called for" 的自动判定），可做独立 QA 层卖给所有语音 agent 平台用户；(3) 面向代理商的白标+计费封装层。

## 2. Grok Bot（xAI）— "AI teammates that you can give real work to"，大厂进场 AI 同事赛道
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/daily/2026/8/12
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 457 分、20 评论，日榜 #2 + 周榜 #2；官方 X 账号 @bot 称处于 early beta
- **description**: xAI 推出的"AI teammates"——不是聊天助手而是可分派真实工作的 bot，标签为 Productivity/Task Management，归类 AI Chatbots + Foundation Models。产品页 slug 404（PH 上无法直接打开产品页，仅榜单可见），说明可能是外链型 launch。与年榜 #3 Cowork（"Turn Claude into your digital coworker"，1107 分）同一叙事：「AI 从 copilot 变 coworker」已从年度叙事下沉到基础模型厂商官方产品。
- **user_quote**: 空（产品页 404，无法获取评论）
- **ai_opportunity**: 基础模型厂商（xAI/Anthropic）先后进场"AI 同事"，对独立开发者的机会不在通用 agent 而在垂直薄层：给这些 AI teammate 做行业工作流模板、权限/审批中间件（参考 BetterClaw 的 "Intern mode"）、跨厂商 AI 同事的统一任务分派面板。

## 3. Lettertrace — 免费 BYOK 开源 GEO 追踪，直接掀 $250/月竞品的桌子
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/lettertrace
- **source_date**: 空（maker 首帖 4 天前）| **fetched_at**: 2026-08-13
- **metrics**: 376 分、58 评论、603 followers，日榜 #3 + 周榜 #4；0 正式 review；模型成本自付约 $3/次
- **description**: MIT 开源、npm 安装、交给 Claude Code/Codex 就能跑的 AI 可见性（GEO/AEO）遥测：生成话题和 prompt 变体，对 Claude/ChatGPT/Gemini 跑 visibility、share of voice、prominence、sentiment。maker Mathew Pregasen 明说竞品 "$250/month just to report visibility"，强调 "actually open source. Not open core."。评论区出现两条方法论级批评（漂移、诊断缺失），是比点赞更值钱的产品 roadmap。
- **user_quote**: "a rising line is mixing your own work with drift you cannot see."（Jernej Jan Kočica——重复查询+模型静默更新导致测量漂移，建议跑一组不动的竞品品牌做对照组扣除漂移）
- **top_comments**:
  - [launch 评论 · Anna Ludwinowski] 免费+开源是 "a real gift for founders"，但 BYOK 逼非技术用户自己开模型账号，是 "a real wall for the small business owners you mentioned"——要 managed-key 路径
  - [launch 评论 · Riya Jawandhiya] 首跑 0% 结果时用户不知道该修 prompt、竞品还是模型覆盖——建议加诊断步骤
  - [launch 评论 · Dhanush Reddy] "Anyway Thanks you for building it, love opensource" 并要一键 Docker——maker 当周补上 Dockerfile
- **ai_opportunity**: GEO 是全年 durable 需求（年榜 SEORCE 397 分/209 评论同赛道）。开源免费版捅破定价后，缺口转移到：(1) GEO 测量的「对照组去漂移」统计层（Kočica 方案没人做成产品）；(2) 非技术用户的 managed-key 托管版（在开源内核上收托管费）；(3) 0% 可见性之后的「诊断→行动」层——所有工具只报数字，不告诉你先修什么。

## 4. Tines 3B — 安全 agent 自动化环境，周榜 #3；用户拿它「过夜自动出修复 PR」
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/tines/reviews
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 417 分、42 评论，周榜 #3；产品 5.0 星但仅 1 条 review；2K followers；对照竞品 n8n 4.8/73 评、Zapier 4.7/66 评
- **description**: Tines（安全自动化老牌）推出的 "3B"：agents、apps、automations 的安全运行环境。唯一一条 review 给出了真实用法：把全部告警灌进 3B flow，睡醒时修复 PR 已备好——即「告警→自动修复 PR」的 lights-out 运维。
- **user_quote**: "We are funneling all the alarms through a few 3B flows … the PRs to fix problems are waiting for us in the morning"（Andras Gombosi，唯一 reviewer）
- **top_comments**:
  - [review · Andras Gombosi] "Such a versatile tool for data engineering and any operational excellence work too."
- **ai_opportunity**: 「告警→修复 PR」这条闭环用户已经自己搭出来了，但要靠企业级平台；给中小团队做开箱即用的 alert-to-PR agent（接 PagerDuty/Sentry/CloudWatch → 出带上下文的 PR + 审批门）是可独立产品化的薄层。

## 5. oqoqo — 真实任务评测/自建 benchmark 平台，评论区贡献了三个未被满足的评测指标
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/oqoqo
- **source_date**: 空（评论 18h–3d 前）| **fetched_at**: 2026-08-13
- **metrics**: 363 分、39 评论、768 followers，周榜 #5、曾日榜 #1；免费档 100 runs/月
- **description**: 定义任务 prompt + 测试面（SDK/API/CLI）+ 成功标准，平台起隔离沙箱跑各 agent，记录每步工具调用/重试/token/成本；可回归测试 MCP/CLI/SDK、对比模型与 harness。maker："Most benchmarks today exist in curated environments and do not translate well to the real world"；现有评测平台 "need a data scientist to operate"。与本站 08-11 报告登顶的「Repo-Level Agent Eval Harness」同一需求线——评测赛道连续第三周出现在高位。
- **user_quote**: "**Did the agent actually use the product as intended, or did it go off and do its own thing?**"（Kevin Brown，拿自家产品实测后发现 agent 绕开 MCP 自作主张——提出「合规使用率」指标）
- **top_comments**:
  - [launch 评论 · Jernej Jan Kočica] 评测衰减问题：一套不再失败的评测像是产品变好了，应追踪 "have ever failed" 的用例占比，从未失败过的用例是 "decoration"
  - [launch 评论 · Sabber Ahamed] agent 非确定性下 "how are you keeping the scoring stable run over run"——maker 答多次试跑取统计显著性
  - [launch 评论 · Natalia Iankovych] 首页 demo 可输入自己的任务却返回预录结果："But I was able to enter my own task in the input field and submit it, which makes the demo somewhat misleading"
- **ai_opportunity**: 评论区白送三个可独立成产品的评测维度：(1) agent「按预期用产品」合规度评分（MCP 工具使用审计）；(2) 评测套件衰减检测（ever-failed 覆盖率仪表盘）；(3) 非确定性下的评分稳定性统计层。任何一个都能作为 eval 平台的插件或独立 CLI。

## 6. BetterClaw — 无代码定时 AI agent，60 秒部署 $0 永久免费；被追问 5 次「怎么可能免费」
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/betterclaw
- **source_date**: 空（maker 帖 2d 前）| **fetched_at**: 2026-08-13
- **metrics**: 322 分、83 评论（周榜第二高讨论量）、5.0 星/12 reviews、891 followers，周榜 #6
- **description**: 无代码平台：连接 Gmail/Slack/Telegram，agent 按计划自动跑（收件箱分诊、晨报、话题监控）；「Intern mode」先请示后行动；BYO key 保持免费（免费档 100 任务/日更 cron/1 agent，每免费用户容器成本 "cents per month"）。同一天被用户问了 5 次 "How is BetterClaw Free?"——免费+BYOK 模式的信任成本本身成了运营话题。
- **user_quote**: "No trial countdown. No 'free for 90 days then surprise.' No card needed to start."（maker Shaya Katoch 回应「怎么可能免费」的质疑帖，10 赞）
- **ai_opportunity**: 「Intern mode / approval-first」正在成为 agent 产品的标配信任机制（月榜 #5 Soloop 也主打 approval-first）；可产品化：跨平台的 agent 审批收件箱（所有 agent 的待批动作汇成一个 feed，人批完自动执行）。

## 7. Hey Noah — AI 行政助理月榜 #2，5.0 星：「对方不知道在跟 AI 排期」
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/hey-noah/reviews
- **source_date**: 2026-08-04（#1 Product of the Day/Week of August 4th, 2026）| **fetched_at**: 2026-08-13
- **metrics**: 607 分、100 评论，月榜 #2；5.0 星/4 reviews（其一为 Founder Review）；1.3K followers
- **description**: 主动式 AI 行政助理：一条短信后自主完成外联、订会、日历占位、跟进；懂上下文（记得在哪认识的、对投资人/客户/伙伴换语气）、按自然语言规则保护整块专注时间。用户一致拿它对标 Calendly/Cal.com：「订会链接只管排期，Noah 管全周期」。抱怨集中在：边缘请求要重试、还不能从用户自己邮箱发信（maker 确认在做）、没有 iOS app。
- **user_quote**: "Basically, it's like a Fortune 500 EA for everyone. … Most people whom I schedule with don't realize Noah is AI."（Eric Bahn）
- **top_comments**:
  - [review · Saket Toshniwal] "This is not automation. It's judgment."
  - [review · Peter Kovacs] "With unusual requests and edge cases, it doesn't always get it right the first time."
  - [review · Mahamithra S R] "Would love a dedicated iOS app or a home screen widget"
- **ai_opportunity**: 「AI Chief of Staff」品类月榜占 2 席（Hey Noah、Soloop），付费锚点是人类 EA 工资。缺口=自有邮箱域发信（deliverability+授权层）与移动端捕获入口；也验证了「judgment as a service」叙事对高客单是有效的。

## 8. 月榜快照：Agent OS / AI 行政层吃掉月榜半壁
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/8
- **source_date**: 空（榜单快照）| **fetched_at**: 2026-08-13
- **metrics**: 月榜 Top 10 中 5 席为 agent 编排/行政层：Hey Noah 607、Soloop 492、AgentSky 454、Omniwork 435、Cloudflare OS 473；纯内容/广告 AI 仅 AdAnt AI 611 一席登顶
- **description**: 2026-08 月榜结构：#1 是 AI 广告生成（AdAnt AI，"Claude for viral, high-converting social ads"），但其余高位被「替你干活的 agent 层」占据——从 solo founder 的 approval-first OS（Soloop）到 any-harness 云托管 agent（AgentSky）到公司级 AI OS（Cloudflare OS）。Coldtea.ai（"make your software self-driving"，AI Coding Agents+QA）522 分说明「软件自运维」也进入月度主流。
- **ai_opportunity**: 品类关键词从「AI 工具」迁移到「Agent OS / Chief of Staff / harness」；独立开发者切入点是这些 OS 之间的互操作与审批/审计层，而非再造一个 OS。

## 9. 年榜快照：GEO、Claude 外挂、内容分发是 2026 年度 durable 需求
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: 空（榜单快照）| **fetched_at**: 2026-08-13
- **metrics**: Cowork 1107 分（绝对分最高）；PostSyncer 806/101；SEORCE 397 分但 209 评论（讨论密度年榜第一）；Mom Clock 756/92（非 AI 的自律 app 年榜 #2）
- **description**: 年榜验证三条长线：(1) 「把 Claude 变成数字同事」（Cowork）是年度最高分——与本周 Grok Bot 呼应，说明 AI-coworker 从年初火到 8 月；(2) GEO/AI 可见性从年榜（SEORCE）到本周日榜（Lettertrace）持续存活=durable；(3) 反直觉信号：Mom Clock（"You said you'd do it. So why didn't you?"，愧疚驱动的执行 app）以纯情绪钩子拿年榜 #2，提示非 AI 的行为改变产品仍有巨大票仓。
- **ai_opportunity**: durable 赛道（GEO、Claude 生态外挂、社媒内容分发）适合做「卖水」生意；SEORCE 209 条评论值得后续单独深挖其抱怨点。

## 10. Unsloth Desktop — 本地跑/训模型进日榜 #5，local-first AI 的桌面化
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/daily/2026/8/12
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 225 分、仅 2 评论，日榜 #5；开源
- **description**: Unsloth（知名开源微调库）推桌面端：本地运行+训练模型。与 Dograh 的 air-gapped 支持、Lettertrace/BetterClaw 的 BYOK 共同构成本周「数据不出门 + 成本自控」的一致叙事。评论极少（2 条）但分数不低——典型的「开发者默默点赞」型基建产品。
- **user_quote**: 空（评论区仅 2 条，未展开）
- **ai_opportunity**: 本地微调的桌面化降低门槛后，缺的是「微调数据集准备+质检」的傻瓜化工具（数据清洗→格式化→去重→eval 一条龙），对接 Unsloth Desktop 生态。

## 11. Paritok — coding agent 成本优化：省 85%、session 长 3×（二手，仅榜单元数据）
- **type**: product_market | **platform**: producthunt | **secondhand**: true
- **source_url**: https://www.producthunt.com/leaderboard/weekly/2026/33
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 263 分、29 评论，周榜 #9；开源
- **description**: 定位「Spend up to 85% less and run 3× longer coding agent sessions」，归类 AI Infrastructure Tools/LLM Developer Tools。未逐一核实产品页（本条仅基于周榜条目，故标 secondhand）。coding agent 的 token 成本痛点上周（Paritok）与上上周报告（context 压缩类工具）连续出现——成本优化正成为独立细分。
- **ai_opportunity**: coding-agent 成本可观测性+预算护栏（按 repo/按任务的 token 预算、超支熔断），比通用 LLM 网关更贴近 agent 工作流。
