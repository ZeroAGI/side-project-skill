# 02 — Product Hunt 四档榜单 + Review 深挖 2026-07-31

> 组内信号：12 条 | 二手转述：0 条（0%）
> 最强证据线：SKI（语音编码 Claude Code 外壳，日榜#1）与 Prelint（AI 代码"产品漂移"防线，周榜#2）的launch评论区出现高质量安全性/工作流批评，直指可产品化缺口；AI agent 记忆层（Memmy/Unabyss）在日/月两个时间尺度同时上榜=持续需求。渠道故障：daily/2026/7/31 无数据（"No posts for this date"，当日榜未生成），改用 7/30；Adomate launch 页 fetch 超时一次，改用 reviews 页成功。所有主榜单产品 PH review 区几乎全部为空（0 reviews），用户原声主要来自 launch 评论区。

## 跨时间尺度对比（核心观察）

- **日榜 (7/30)**: SKI(485), AI Search Console(444), Memmy(442), LangWatch Claude Code cost tracking(317), NINA(305), Pally(245), Greplica(177), Expert Chase(153), Focus Room(153), Yap(144)
- **周榜 (W31, 7/27起)**: Prefactor(602), Prelint(588), Adomate(558), SKI(485), Artifacts by Databox(462), Claude Opus 5(442), SoundGate Guitar(441), AI Search Console(444), Memmy(442), Cekura(412)
- **月榜 (2026-07)**: Acti(936), OpenSEO(909), Pazi(931), Context.dev(875), AnySearch(767), Fuzzy AI(688), Glaze by Raycast(682), Sim(672), Fypro(663), Unabyss for Claude(664)
- **年榜 (2026)**: PostSyncer(811), Mom Clock(765), Cowork/Claude(1123), Livedocs(488), MiroMiro(529), Atlas.new(535), 2-b.ai(429), Joodle(428), ChatGPT Health(434), SEORCE(397)

**持续跨尺度的主题**（耐久需求）：
1. **AI 编码代理的周边层**：日榜 SKI/LangWatch/Greplica → 周榜 Prefactor/Prelint → 月榜 Pazi/Sim/Glaze → 年榜 Cowork。围绕 Claude Code/agent 的语音输入、成本追踪、评估、漂移检测、自更新文档全部涌现。
2. **共享记忆层**：Memmy（日#3+周#9）、Unabyss for Claude（月#10，5月曾日#1）——跨 LLM 记忆是月度级持续主题。
3. **AI 搜索可见性 (GEO)**：AI Search Console（日#2+周#8）、OpenSEO（月#2）、SEORCE（年#10）——从 SEO 转向 GEO 的工具带贯穿三个尺度。
4. **仅日/周出现的新兴类**：voice coding（SKI/Yap 同日两个语音产品）、AI agent 实时评估（Prefactor/Cekura 同周两个 eval 产品）——本周新集中出现。

---

## 1. SKI — 语音编码 Claude Code：安全性批评揭示的缺口（日榜#1）
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/ski
- **source_date**: 2026-07-30 | **fetched_at**: 2026-07-31
- **metrics**: 日榜#1，485 分，150 评论，904 followers；周榜#4；0 reviews
- **description**: 免费本地语音编码工具（Mac/Windows），按住 Fn 键说话，agent 执行并语音回答（"不是听写，agent 会像真队友一样出声回答你"），可代替你参加会议。评论区最有价值的是两条针对"语音直接触发行动"的安全性深挖，直指该品类未解决的核心问题。
- **user_quote**: "A misheard word in dictation sits on the screen and you fix it. A misheard word here goes to something that acts. 'Delete the test file' and 'delete the rest of the file' are both fluent" — Jernej Jan Kočica
- **top_comments**:
  - [launch 评论, Rabnoor Singh] "the failure isn't that ASR is wrong, it's that it's wrong fluently … Global review-before-send is dictation again, which is the thing this was built to escape. … people accept a gate that fires rarely and precisely" —— 建议按风险分级、在非语音通道设门
  - [launch 评论, Os Ishmael] "How well does SKI handle noisy rooms or shared offices?" —— 质疑真实办公环境可用性
  - [launch 评论, Martín Herrán] "What does the voice side do when the agent replies with a 200-line diff or a full test run? … I'm on Linux, so I'll be eagerly waiting for that build."
- **ai_opportunity**: 语音→行动的"风险分级确认层"是明确空白：对不可逆操作（删除/推送/付费）做意图解析+非语音模态确认的中间件，可作为独立 skill/MCP 服务卖给所有 voice-agent 产品；Linux 支持也是被点名的缺口。

## 2. AI Search Console — GEO 分析（日榜#2，SEO→GEO 迁移带持续验证）
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/ai-search-console
- **source_date**: 2026-07-30 | **fetched_at**: 2026-07-31
- **metrics**: 日榜#2，445 分，167 评论，516 followers；周榜#8；0 reviews
- **description**: 面向 SEO/GEO 团队的 prompt 级分析：跟踪品牌在 ChatGPT/Claude/Gemini/Perplexity 中的提及、排名、share of voice、竞品与引用来源，产出"client-ready reports without spreadsheets or screenshots"。与月榜 OpenSEO(#2)、年榜 SEORCE(#10) 构成 GEO 工具带跨三个时间尺度的持续信号。同类 findable.(4.8/13 reviews)、Writesonic(4.4/53) 已有评分，赛道拥挤但仍在日榜登顶。
- **user_quote**: "replace manual AI visibility checks with repeatable data"（maker 描述，评论区被截断无法获取用户原声）
- **top_comments**: []
- **ai_opportunity**: GEO 工具同质化加剧（同一周期至少 6 个同类产品），机会下沉到垂直：为特定行业（本地服务/电商/开发工具）做 AI 引用来源监测 + 引用缺口自动修复内容生成，而非再做一个通用 dashboard。

## 3. Memmy Agent — 跨 AI 共享记忆（日榜#3，与 Unabyss 构成月度级主题）
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/memmy
- **source_date**: 2026-07-30 | **fetched_at**: 2026-07-31
- **metrics**: 日榜#3，442 分，126 评论，708 followers；周榜#9；GitHub: MemTensor/memmy-agent；免费档含 2M ChatGPT tokens
- **description**: "Let every AI remember the same you." 本地优先的个人记忆中枢，跨 Claude Code/Codex/OpenClaw/Hermes 共享长期记忆。Maker 在评论区坦承跨 agent 长期记忆体验"still evolving"。与 Unabyss for Claude（月榜#10，2.4K followers，5/25 日榜#1 + 7/17 二次发布日榜#1）证明该主题两个月内持续产生榜首产品。
- **user_quote**: "Been waiting for something like this, honestly. [Does it work well with Claude Code specifically] or is that still early days?" — Abdul Rehman（launch 评论，12 赞）
- **top_comments**:
  - [launch 评论, maker ZongYue 回复] 承认核心场景是保住跨 session 丢失的 "project context, decisions, and task progress"，并坦承跨 agent 记忆体验 "still evolving"
- **ai_opportunity**: maker 自认"still evolving"= 品类未定型。切口：不做通用记忆而做垂直记忆（如仅面向 Claude Code 的项目决策记忆，带冲突消解与过期机制）；或做记忆质量评估/清洗工具（记忆层的 lint）。

## 4. LangWatch Claude Code 成本追踪 — 日榜#4，成本归因需求再证
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/daily/2026/7/30
- **source_date**: 2026-07-30 | **fetched_at**: 2026-07-31
- **metrics**: 日榜#4，317 分，79 评论
- **description**: "See what your Claude Code sessions actually cost" —— Claude Code 会话级成本可视化冲进日榜#4。与本报告系列此前连续 7 期的"成本归因层"主题直接呼应：agent 用量成本不透明的痛点已强到让一个纯观测工具登上综合日榜前 5。
- **user_quote**: （榜单快照，未获取产品页评论）
- **top_comments**: []
- **ai_opportunity**: 从"看到成本"到"控制成本"仍是空白：按任务/仓库/团队成员归因 + 预算熔断 + 廉价模型自动降级建议，做 Claude Code/Codex 通吃的成本治理层。

## 5. Prefactor — AI agent 生产环境实时评估（周榜#1）
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/prefactor
- **source_date**: | **fetched_at**: 2026-07-31（本周发布，曾获日榜#1）
- **metrics**: 周榜#1，602 分，181 评论，1.2K followers；免费档 25,000 spans/月；0 reviews
- **description**: "Most agents pass their evals and fail in production. Prefactor is the evaluation layer that closes the gap." 主打闭环：observe→evaluate→act，可在运行越线瞬间 hold/approve/block。引 Gartner"40%+ agentic AI 项目 2027 年前被砍"。已开源 Prefactor Evals（Apache 2.0）。同周 Cekura（voice agent 自改进循环，周榜#10）同类上榜=eval 赛道本周集中爆发。
- **user_quote**: "do you actually know what your agents are doing in production right now? … every real run vanishes into a black box" — 联创 Matt Doughty
- **top_comments**:
  - [maker 转述客户] 一个团队跑着 40 个生产 agent，"no honest way to say which ones were still doing their job"
  - [maker 论坛帖] agent 失败是行为性的："a silent loop, a step that failed, a run that never finished"
- **ai_opportunity**: 大厂做平台，indie 切口在"最后一公里"：特定框架（OpenClaw/LangChain）的开箱 eval 规则包、行业合规检查模板（金融/医疗 agent 行为红线），作为 Prefactor 类平台的插件生态卖。

## 6. Prelint — AI 代码"产品漂移"检测：评论区暴露 4 个可攻缺口（周榜#2）
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/prelint
- **source_date**: | **fetched_at**: 2026-07-31（本周发布，曾获日榜#1）
- **metrics**: 周榜#2，588 分，128 评论，1.1K followers，5.0 星（2 reviews）
- **description**: 风险不是坏代码，而是"good code that quietly builds the wrong product"。对照 spec/ticket/产品上下文审查每个变更，解释 agent 做了什么决定、后果、可逆性。自称在多 AI reviewer 团队中约 40% 被修复的 review 意见来自 Prelint。评论区是本期质量最高的一个：用户逐条指出决策账本（decision ledger）模式的结构性缺口。
- **user_quote**: "The decisions I never see in an ADR are the ones that were made to a customer." — Jernej Jan Kočica（指客服/support 渠道里对客户做出的承诺对 ledger 不可见；追问 "a sent support answer is already an obligation"）
- **top_comments**:
  - [launch 评论, Rick Wise] solo 开发者没有 Slack/会议/ticket、直接 push main —— 问 CLI 能否一等公民支持 no-PR 工作流、ledger 能否从聊天记录播种；maker 承认 "definitely not our standard use case"
  - [launch 评论, Chris Mongeon] 自己的品牌文档与已上线资产矛盾、把错误 logo 播进邮件模板："doc versus reality, not doc versus doc" —— maker 称之为 "a textbook example"
  - [launch 评论, Anuj] ledger 继承一切权威工件的失效模式（陈旧注释仍写着 gpt-4o）："The ledger records the deaths, not just the decisions." —— 追问条目降级/墓碑机制
- **ai_opportunity**: 三个被 maker 亲口承认的缺口即三个 indie 产品：(a) solo/no-PR 工作流的轻量决策账本（从 git+聊天记录自动播种）；(b) support 渠道承诺→工程约束的抽取器；(c) "doc vs reality" 漂移检测（文档对照实际产物而非文档对照文档）。

## 7. Adomate — 数据驱动广告创意（周榜#3），唯一有真实 review 的头部产品
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/adomate/reviews
- **source_date**: | **fetched_at**: 2026-07-31（本周发布，曾获日榜#1；review 发布于 fetch 前 3 天）
- **metrics**: 周榜#3，558 分，107 评论，1.1K followers；4.0 星（1 review）
- **description**: "Turn data into winning ads. At scale." 本期头部产品中唯一有正式 review 的。4.0 星评价点名了三个改进缺口：定价不清、onboarding 不清、小团队适用性存疑。
- **user_quote**: "it turns ad research and creative ideation into a more structured, data-driven workflow … The product could be clearer about pricing, onboarding, and how well it works for smaller teams. More examples of real workflows would also help." — Neuber (@good2know)
- **top_comments**:
  - [review, Neuber] 对比过 Canva、AdCreative.ai、Pencil 与纯手工，因"performance-marketing 和规模化创意测试聚焦"选择 Adomate
- **ai_opportunity**: "traceable insights 而非泛泛 AI 文案"是被用户点赞的差异化方向；小团队/solo 广告主的轻量版（透明按量计价+真实 workflow 模板库）是 review 中直接给出的空位。

## 8. 双语音产品同日上榜：Yap（开源本地听写）与 SKI 的品类信号
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/daily/2026/7/30
- **source_date**: 2026-07-30 | **fetched_at**: 2026-07-31
- **metrics**: Yap 日榜#10，144 分，19 评论；SKI 日榜#1，485 分
- **description**: 同一天两个"本地、隐私优先"的语音工具上榜（SKI=语音→agent 行动；Yap="Open-source voice dictation for Mac, fully on-device"）。加上 PH 侧栏显示 superwhisper(4.9/21)、Wispr Flow(4.7/73) 等已成熟，语音输入层从云端转本地/开源是清晰的品类演化，且价格锚点被 SKI 的"免费"打穿。
- **user_quote**: "Speech in and voice out both run on your machine. No cloud, works offline." — SKI maker Anand Balakrishnan
- **top_comments**: []
- **ai_opportunity**: 通用听写已卷成免费+开源；剩余可收费点在垂直词表（医疗/法律/代码符号名）、多语混说、与特定 agent 工作流的深度绑定（如语音驱动 code review 而非语音输入文本）。

## 9. Acti — 移动端 agentic 键盘（月榜#1）：输入法成为 agent 入口
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/acti-2/reviews
- **source_date**: 2026-07-01 | **fetched_at**: 2026-07-31
- **metrics**: 月榜#1，936 分，254 评论（全月最高评论数），2.9K followers；7/1 日榜+周榜双#1；0 reviews
- **description**: "Agentic keyboard for mobile commands and search" —— 把 agent 塞进手机输入法，在任何 app 内下命令/搜索。月榜登顶 + 全月最高评论量，但 30 天后 review 区仍为 0，热度尚未沉淀为使用证言。注意：PH 上同名旧产品（运动社区 Acti，2024）为不同产品，slug acti-2 为本品。
- **user_quote**: （launch 页评论未能获取——slug acti-2 的 posts 页返回了 2024 年同名旧产品，本条指标来自 reviews 页与月榜快照）
- **top_comments**: []
- **ai_opportunity**: 键盘作为 OS 级 agent 入口验证了"在用户已有工作流内注入 agent"路线；indie 可复制到桌面端（IME/剪贴板层 agent）或垂直场景（客服回复键盘、销售跟进键盘）。

## 10. 月榜数据基建带：Context.dev / AnySearch / Sim —— agent 的"喂料层"
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/7
- **source_date**: | **fetched_at**: 2026-07-31
- **metrics**: Context.dev 月#4（875 分/141 评论）"One API to scrape, enrich, and extract the internet"；AnySearch 月#5（767/120）"Real-time structured search trusted by agents and developers"；Sim 月#8（672/108）开源 agent workflow 工作台
- **description**: 月榜前 10 中 3 席是"给 agent 喂结构化数据/工作流"的基建：抓取 API、结构化实时搜索、开源 workflow 编排。与年榜 Livedocs（"The general data agent"，年#4）连线，说明 agent 数据接入层是 2026 年度级主题而非周度脉冲。
- **user_quote**: （榜单快照）
- **top_comments**: []
- **ai_opportunity**: 通用抓取/搜索 API 已被占位；缝隙在"最后一公里适配"：特定数据源（政府公开数据/行业价目/招投标）的 agent-ready 结构化订阅源，按垂直卖。

## 11. OpenSEO — 开源 Ahrefs 替代（月榜#2）：高价 SaaS 的开源化攻击
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/openseo/reviews
- **source_date**: 2026-07-19 | **fetched_at**: 2026-07-31
- **metrics**: 月榜#2，909 分，75 评论，1.3K followers；7/19 日榜#1；0 reviews（对照 Ahrefs 4.6/40 reviews）
- **description**: "The open source Ahrefs alternative" 一句话定位打进月榜#2。评论量(75)远低于同分产品（Acti 254），typical 的"赞开源理念、尚未深度使用"模式。验证了"开源替代 $99+/月 SaaS"叙事在 2026 仍是 PH 强流量密码（对照 2025 的 Cal.com/Plausible 路径）。
- **user_quote**: （榜单+reviews 页快照，无 review 原声）
- **top_comments**: []
- **ai_opportunity**: "open source X alternative" 公式仍有效且可枚举：挑年费 $1000+ 且数据可自采的 SaaS（如 SimilarWeb/Semrush 子功能）做开源核心+托管收费；GEO 时代 backlink 数据价值衰减，开源 SEO 工具+AI 引用监测混合体是空位。

## 12. 年榜纵览：Cowork（Claude 数字同事）居首 = agent 化办公为年度主线
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: | **fetched_at**: 2026-07-31
- **metrics**: Cowork "Turn Claude into your digital coworker" 现值 1123 分（年榜#3 位次但现值最高）；PostSyncer 年#1（811，AI 社媒发布）；Mom Clock 年#2（765，反拖延）；ChatGPT Health 年#9（434）
- **description**: 2026 年榜前 10 的构成：agent 办公（Cowork）、AI 内容分发（PostSyncer）、行为改变（Mom Clock "You said you'd do it. So why didn't you?"）、数据 agent（Livedocs）、设计逆向（MiroMiro "Copy any website's design & assets in one click"）、空间数据 agent（Atlas.new）、健康 AI（ChatGPT Health）。对照月/周榜：agent 工具从年榜的"通用同事"进化到周榜的"评估/漂移/记忆/成本"运维层——生态从造 agent 转向管 agent，这是本月最重要的尺度间迁移信号。
- **user_quote**: （榜单快照）
- **top_comments**: []
- **ai_opportunity**: 年→周的迁移方向即路线图：agent 运维层（eval、成本、记忆、审计、漂移）是当下资金与流量集中处，且每个子层都在评论区暴露了未被满足的 solo/垂直场景。
