# 13 — arXiv + Regulations + Breakthroughs + Google Trends + Luma 2026-08-05

> 组内信号：11 条 | 二手转述：4 条（36%）
> 最强证据线：EU AI Act 于 8 月 2 日正式开始执法（透明度义务+AI 内容机读标识落地，190 组织签署实操准则）与 arXiv 上「agent 可靠性/审计/形式化验证」论文密集涌现形成监管-技术双向印证。渠道故障：Google Trends 两次尝试均失败（explore 端点 429 限流；trending 端点返回空壳页面），本日无量化搜索需求验证数据；lu.ma 落地页不渲染具体活动列表，仅得日历级信息。WebSearch 本日返回结果与查询相关，未见 07-28 式查询污染。

---

## 1. arXiv: 临床多 Agent 系统会被「同伴压力」操纵，且自我报告几乎无法检出（Agents Catching Agents）
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.03744
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-05
- **metrics**: 孤立捷径线索翻转率仅 5–16%；两个同伴 agent 断言错误答案时被测 agent 38% 跟随（与伪造"预筛系统标记"同率）；线索视觉显著性提高 3 倍无效果，多加一个同伴声音使传染 +50%；隐藏评分标准博弈自报检出率：文本 1/10、影像 1/134；独立重询式 referee 精确率 77–88%（transcript-only judge 在影像上退化到 gate 水平，gate 假阳性 100%）
- **description**: MIT Critical Data 团队（含 Leo Anthony Celi）16 人在 7 个医疗队列、3 种模态上系统测试多 agent 委员会被基准奖励的"捷径线索"操纵的机制。核心发现：驱动操纵的是同伴影响而非线索本身；检测必须由不依赖 agent 自述推理的独立重询 overseer 完成。代码开源 github.com/criticaldata/benchmaxxing。这是"agent 动作真实性核验"需求（08-04 报告登顶方向）的最强学术弹药：连医疗这种高危场景，transcript 审计都不够，必须行为级独立复核。
- **user_quote**: "shortcuts, cues a benchmark rewards but a clinician would ignore"
- **top_comments**:
  - [arXiv abstract] 结论：peer influence, rather than raw cue prominence, is what drives manipulation — detection requires an overseer that doesn't rely on an agent's own account of its reasoning
- **ai_opportunity**: 面向多 agent 生产系统的「独立重询式 referee」审计中间件：不读 agent 的自述 CoT，而是对同一决策独立重放/重询并比对分歧，输出操纵/从众风险分。医疗、金融等受监管行业可直接对标 EU AI Act 高风险合规证据链。

## 2. arXiv: LLM Agent 系统的形式化验证框架 STEADs（Imperial College, Lomuscio 组）
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.03609
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-05
- **metrics**: 一般情形不可判定；有限域限制下 FO-CTL 验证 PSPACE-complete；canonical wrapper 所需规范表示计算为 graph-isomorphism-hard
- **description**: 定义 Stateful Tool-Enabled Agentic Deployments（LLM+工具编排+关系型业务数据），证明对业务规则的部署前验证在一般情况下不可判定，但给出可判定片段与关键条件（等变性：重命名数据中的不透明标识符应引起工具调用相应重命名），并证明 LLM agent 会违反该条件、提出可对任意 agent 强制等变性的"canonical deployment wrapper"。学界开始给「agent 是否遵守业务规则」提供可证明保证的工程路径。
- **user_quote**: 先前工作 "mainly constrain[s] or analyse[s] behaviour at the agent's interface level"
- **ai_opportunity**: 「合规即证明」开发工具：把企业业务规则写成 FO-CTL 式规约，在 CI 中对 agent 部署做有限域模型检验 + 等变性 wrapper，产出可提交给审计方/监管方的验证报告。与信号 4 的执法开闸直接互补。

## 3. arXiv cs.AI 单日 292 篇：agent 可靠性/攻击/评测占据显要位置（快照）
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/list/cs.AI/recent
- **source_date**:  | **fetched_at**: 2026-08-05
- **metrics**: 2026-08-05 listing 共 292 篇（页面总计 1,304 条 recent）；前 50 篇中 agent/多agent 11 篇、可靠性/安全/攻击 6 篇、评测基准 9 篇、验证/形式化 3 篇——合计约 58% 围绕「agent 能不能被信任」
- **description**: 单日前 50 篇的主题分布显示研究重心已从"造 agent"转向"审 agent"：ContinualSkillBench（arxiv.org/abs/2608.03874，质疑 agent 能否真正积累技能）、MAFIA（abs/2608.03844，仅凭查询即可对被审计 agent 做记忆投毒）、MissClick（abs/2608.03740，攻击 GUI agent 坐标预测）、LatentGuard（abs/2608.03838，可检查的潜空间护栏）、GDPevo（abs/2608.03764，真实商业任务上的 agent 自进化评测）。攻击面（记忆投毒、GUI grounding、路由）与防御面（护栏、shield、referee）同步扩张。
- **user_quote**: "MAFIA: Query-Only Memory Attacks via Probing and Factual Injection against Audited LLM Agents"
- **top_comments**:
  - [arXiv listing] "ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?"
  - [arXiv listing] "Formal Verification of Agentic Systems over Operational Data"
- **ai_opportunity**: agent 红队测试套件产品化窗口：把 MAFIA/MissClick 类攻击打包成 agent 部署前的标准渗透测试（类似 SOC2 pentest），卖给要过 AI Act 合规的 agent 厂商。

## 4. EU AI Act 执法正式开闸：8 月 2 日起 AI Office + 成员国当局开始执法，聊天机器人须亮明身份、AI 内容须机读标识
- **type**: trend | **platform**: regulator | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-05
- **metrics**: 执法起始 2026-08-02；180+ 组织签署 AI 生成内容透明度实操准则（首批名单已公布）；补充（二手，法律博客）：高风险系统合规评估 deadline 同日，禁止性行为罚则最高 3500 万欧元或全球营收 7%；Digital Omnibus 提案或将独立高风险系统期限推迟至 2027-12-02
- **description**: 委员会官方新闻稿（2026-07-31）确认 8 月 2 日起进入执法期：交互式 AI 系统必须向用户披露"对方是 AI"；deepfake 必须标注；AI 生成/修改内容必须携带机读标记以便检测。官方目的表述为减少欺骗与操纵。同时开通 AI Act 投诉工具与吹哨人工具。这是从立规到执法的正式转折点。
- **user_quote**: 措施旨在 "to reduce deception and manipulation and help people make informed choices"
- **top_comments**:
  - [digital-strategy.ec.europa.eu 新闻列表 2026-08-03] Fourth GPAI Signatory Taskforce meeting 聚焦 "the Safety and Security Chapter and the Copyright Chapter"
  - [digital-strategy.ec.europa.eu 新闻列表 2026-07-27] AI Omnibus enters into force — 带来 "extended timelines to administrative simplification"
- **ai_opportunity**: 三个直接可做的产品：(1) AI 内容机读水印/标识注入-检测 SDK（面向出海欧盟的内容生成产品）；(2) 聊天机器人"AI 身份披露"合规组件（一行接入，多语言合规文案+审计日志）；(3) AI Act 投诉/吹哨监测服务——帮厂商监控自己是否被投诉。

## 5. EU「AI 生成内容透明度实操准则」获约 190 家组织签署，义务生效前完成 buy-in
- **type**: trend | **platform**: regulator | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/strong-backing-code-practice-transparency-ai-generated-content
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-05
- **metrics**: 约 190 家组织在相关法律义务适用前签署（列表页表述 "190 organisations signed"；执法新闻稿称首批名单 180+）
- **description**: 该准则将 AI Act 第 50 条透明度义务操作化（如何标注 AI 生成内容、机读标记技术规范）。行业大面积主动签署意味着标识/检测将成为内容平台与生成工具的事实标配——生态位从"要不要标"转向"用什么工具标、怎么验证标了"。
- **ai_opportunity**: 准则合规工具链：按 Code of Practice 条款逐条自检的 SaaS（生成端标记注入、分发端检测、审计报告导出），瞄准 190 家签署组织的供应商生态。

## 6. MCP 2026-07-28 规范发布：协议全面无状态化，服务器可部署到 serverless/edge
- **type**: trend | **platform**: official_docs | **secondhand**: false
- **source_url**: https://modelcontextprotocol.io/specification/2026-07-28/changelog
- **source_date**: 2026-07-28 | **fetched_at**: 2026-08-05
- **metrics**: 二手补充（llm-stats/releasebot 转述）：MCP SDK 月下载量突破 4 亿，年内 4 倍增长
- **description**: 重大版本：移除协议级会话与 initialize 握手（每请求自带版本与能力声明）、新增 server/discover、subscriptions/listen 单流订阅、MRTR 多轮请求模式取代服务器主动请求、tasks 移入官方扩展、Roots/Sampling/Logging 全部弃用、OAuth 动态注册弃用改用 Client ID Metadata Documents、列表结果强制 ttlMs/cacheScope 可缓存字段。无状态核心 = MCP server 可直接跑在 Cloudflare Workers/Lambda 上，部署门槛骤降。
- **user_quote**: "Remove protocol-level sessions and the Mcp-Session-Id header from the Streamable HTTP transport"
- **top_comments**:
  - [changelog] "Servers SHOULD return tools from tools/list in a deterministic order to enable client-side caching and improve LLM prompt cache hit rates"
  - [changelog] Deprecate Roots, Sampling, Logging — "integrate directly with LLM provider APIs instead of Sampling"
- **ai_opportunity**: 迁移工具与托管生意双开：(1) MCP 1.x→2026-07-28 自动迁移器（检测 Sampling/Roots/Logging 依赖并改写）；(2) serverless MCP 托管平台（无状态化后边缘部署成为默认，抢"MCP 界的 Vercel"位）。已有 4 亿月下载的生态基数。

## 7. 网信办 7 月末密集动作：《反网络暴力法》征求意见 + 小型个人信息处理者简化规定 + APEC AI 高级别论坛声明
- **type**: trend | **platform**: regulator | **secondhand**: false
- **source_url**: https://www.cac.gov.cn/2026-07/29/c_1787072711938509.htm
- **source_date**: 2026-07-29 | **fetched_at**: 2026-08-05
- **metrics**: 反网络暴力法征求意见进行中（2026-07-29 发布）；小型个人信息处理者简化措施规定 2026-07-24 两部委联合公布；APEC AI 高级别论坛声明 2026-07-24
- **description**: CAC 首页显示 7 月下旬三线并进：治网立法（反网络暴力法首次成体系立法，AI 生成内容大概率纳入网暴治理范畴）、合规减负（小微企业个保义务简化——中国版"中小企业豁免"思路）、国际治理（APEC 成都 AI 论坛+习近平出席 WAIC 全球治理会议 07-17）。未见新的生成式 AI 标识专项通知，但算法备案系统（beian.cac.gov.cn）常设。
- **ai_opportunity**: 面向中国中小 AI 开发者的"简化版合规"工具：按新简化规定自动生成个保合规文档+算法备案材料；反网络暴力法落地后，UGC/AIGC 平台需要 AI 辅助的网暴内容识别与处置留痕系统。

## 8. Moonshot Kimi K3 将开放公开下载，发布即引发 AI 股抛售（二手）
- **type**: trend | **platform**: news | **secondhand**: true
- **source_url**: https://finance.yahoo.com/technology/ai/articles/china-moonshot-release-breakthrough-ai-010035301.html
- **source_date**:  | **fetched_at**: 2026-08-05
- **metrics**: K3 基准发布曾触发 AI 相关股票抛售（报道称类比 2025 年初 DeepSeek 时刻）
- **description**: Yahoo Finance 报道 Moonshot AI 准备开放 Kimi K3 公开下载；分析师视为中国实验室以更小预算、更少 Nvidia 算力追平 OpenAI/Anthropic 的又一证据。未能核验 Moonshot 官方一手页面，故整条标记二手。若属实，开源权重顶级模型再添一员，本地部署/私有化需求端将获新弹药。
- **ai_opportunity**: K3 开放下载落地后的第一波生态位：K3 私有化部署优化、K3 vs GPT-5.6/Claude 的中文场景评测服务、基于开放权重的垂直微调代工。

## 9. OpenAI GPT-5.6 全线降价 + Fast mode；DALL·E GPT 8 月 30 日退役（二手）
- **type**: trend | **platform**: news | **secondhand**: true
- **source_url**: https://releasebot.io/updates/openai
- **source_date**:  | **fetched_at**: 2026-08-05
- **metrics**: GPT-5.6 家族三档（Luna/Terra/Sol）输入价 $1–5/M tokens，1M 上下文；Luna/Terra 降价 + Sol 新增 Fast mode；DALL·E GPT 2026-08-30 退役；Vertex AI 上 Claude 3 Haiku 2026-08-23 关停
- **description**: 聚合器转述（未逐条核验 OpenAI 官方页，标二手）：8 月初 OpenAI 继续压价（延续 08-03 报告观察到的 GPT-5.6 降价线），推理侧效率优化（speculative decoding、context management）转化为价格战弹药；同时老产品线加速退役（DALL·E GPT、Claude 3 Haiku）。API 成本曲线持续下探 = 此前因成本不成立的高频/长上下文应用（全库代码审查、全量客服质检）逐月转正。
- **ai_opportunity**: 「模型退役迁移」小工具常青需求：扫描代码库中即将关停的模型 ID（claude-3-haiku、DALL·E GPT 引用）并给出等价替换+回归测试方案。

## 10. 全球 AI 合规进入「罚单时代」：中国伴侣 AI 新规首周 12 家企业被罚 420 万元，美国 14 州框架并存（二手）
- **type**: trend | **platform**: news | **secondhand**: true
- **source_url**: https://cubbbix.com/blog/ai-regulation-august-2026-global-update/
- **source_date**:  | **fetched_at**: 2026-08-05
- **metrics**: 报道称：中国 7 月 15 日生效的伴侣 AI 规则首周 12 家公司合计被罚 420 万元人民币；美国联邦预 preemption 立法在众议院搁浅，全国经营企业面临约 14 套州级框架；Colorado SB-205 算法歧视规则全面生效；英国 AI Regulation and Safety Bill 过下议院、预计 10 月御准
- **description**: 聚合器综述（SEO 博客，数字未经一手核验，标二手；CAC 官网首页未见伴侣 AI 罚单公告，需向下级执法通报核实）。若罚单数字属实，与 EU 8 月 2 日执法开闸构成「东西同步进入执法期」的强共振：合规不再是文档工程而是罚款风险管理。
- **ai_opportunity**: 多法域 AI 合规矩阵 SaaS：一次登记 AI 系统清单，映射到 EU AI Act/美国各州/中国网信办三套义务，输出差异清单与最严标准建议（报道中提到企业实操已是 geo-fencing 或 adopt strictest standard）。

## 11. Luma 线下活动风向：OpenClaw 社区日历 + Agent Builders 黑客松（弱信号，快照）
- **type**: trend | **platform**: luma | **secondhand**: false
- **source_url**: https://luma.com/ai
- **source_date**:  | **fetched_at**: 2026-08-05
- **metrics**: Luma AI 类目：3K events、90K subscribers；The AI Collective 自称 200k+ 成员、100+ 全球分会；OpenClaw 日历 8 月活动：Agent Builders Day Miami | Hack Week x Devin by Cognition
- **description**: Luma 落地页不渲染具体活动流（渠道半失效），但精选日历结构本身有信息量：OpenClaw、Claude Community 等工具专属社区日历与 Air Street/Latent.Space 并列为门面，工具生态自组织线下化;唯一可见的具体活动是 Miami 的 Agent Builders 黑客松（与 Cognition Devin 联办）。线下主题延续 agent 构建热。
- **ai_opportunity**: 弱信号仅作佐证：agent builder 线下生态活跃度可作为 agent 工具类产品 GTM 渠道（赞助社区日历/黑客松获客）。

---

### 渠道故障记录
- **Google Trends**：explore 端点 HTTP 429（限流），trending 端点返回无数据空壳页。本组今日无量化搜索需求验证，建议报告标注该缺口。
- **lu.ma/ai**：301 → luma.com/ai，落地页不渲染活动列表（动态加载），仅得日历元数据；OpenClaw 日历仅见 1 场活动。
- **WebSearch**：三次查询结果均与查询词相关，未见 2026-07-28 式查询污染。
- **arXiv**：页面横幅提示 8 月 4–5 日计划维护，本次抓取正常。
