# 13 — arXiv + Regulations + Breakthroughs + Google Trends + Luma 2026-08-11

> 组内信号：9 条 | 二手转述：2 条（22%）
> 最强证据线：EU AI Act 于 2026-08-02 正式进入执法期（欧盟委员会一手来源）+ MCP 2026-07-28 规范大改（无状态化、废弃 Sampling/Roots/Logging）——对 API 网关/代理层是直接的产品机会。渠道故障：Google Trends 连续两次 429 限流，本期无量化搜索需求验证；lu.ma/ai 页面为动态加载，只取到类目统计（3K 活动/91K 订阅者）无具体活动列表；whitehouse.gov 简报页 8 月上旬无 AI 条目。

---

## 1. EU AI Act 于 2026-08-02 进入执法期：透明度义务全面生效
- **type**: trend | **platform**: digital-strategy.ec.europa.eu | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-11
- **metrics**: 180+ 组织签署 AI 生成内容透明度 Code of Practice（另一条 07-31 新闻稿称约 190 家）；配套：投诉工具、吹哨人工具、下游提供商投诉渠道
- **description**: 欧盟委员会 AI Office 与成员国当局自 8 月 2 日起开始执法。新透明度义务：聊天机器人须披露"对方是机器"；深度伪造内容必须打标；合成/修改内容须带机器可读标记以便检测。时间横轴：immediate。注意：高风险系统义务的最终期限受"Digital Omnibus"（2026-07-27 生效）影响存在推迟争议（有提案延至 2027-12），但透明度与执法启动是确定的。
- **user_quote**: "Deepfakes (images, videos, or audio that have been edited or generated using AI) will have to be labelled."
- **top_comments**:
  - [同页新闻稿] "The measures are intended to reduce deception and manipulation and help people make informed choices."
  - [digital-strategy.ec.europa.eu 07-31 新闻] "Strong backing for the Code of Practice on Transparency of AI-generated Content"（约 190 组织在法定义务生效前签署）
  - [digital-strategy.ec.europa.eu 08-03 新闻] 第四次 GPAI Signatory Taskforce 会议聚焦 "Safety and Security Chapter and the Copyright Chapter"
- **ai_opportunity**: 合规工具刚需窗口：(1) AI 内容机器可读水印/标记 SDK 与检测 API；(2) 聊天机器人"AI 身份披露"合规组件；(3) 面向中小 AI 部署方的 AI Act 义务映射与审计 SaaS。执法启动 + 投诉渠道开通意味着违规成本从理论变为现实。

## 2. MCP 2026-07-28 规范大改：无状态核心 + 废弃 Sampling/Roots/Logging
- **type**: trend | **platform**: modelcontextprotocol.io | **secondhand**: false
- **source_url**: https://modelcontextprotocol.io/specification/2026-07-28/changelog
- **source_date**: 2026-07-28 | **fetched_at**: 2026-08-11
- **metrics**: 9 项 major changes；4 项 Deprecated（Roots/Sampling/Logging 特性、HTTP+SSE 传输、RFC7591 动态注册）；12 个月最短废弃窗口
- **description**: MCP 新版规范彻底无状态化：移除协议级 session 与 initialize 握手，每个请求自带协议版本与能力声明；新增 server/discover RPC；用 subscriptions/listen 单一长连接流替代 GET+resources/subscribe；引入 MRTR（多轮往返请求）模式替代服务端主动请求；tools/list 等结果强制带 ttlMs/cacheScope 缓存字段。Roots、Sampling、Logging 三大特性整体进入废弃。时间横轴：immediate 至 6-12mo（12 个月废弃窗口）。
- **user_quote**: "Make MCP stateless: remove the `initialize`/`notifications/initialized` handshake. Every request now carries its protocol version and client capabilities in `_meta`."
- **top_comments**:
  - [changelog Deprecated 节] "Deprecate the Roots, Sampling, and Logging features... new implementations should not add support for them. Suggested migrations: ...integrate directly with LLM provider APIs instead of Sampling; log to `stderr` (stdio) or use OpenTelemetry instead of Logging."
  - [changelog Minor #3] "Servers SHOULD return tools from `tools/list` in a deterministic order to enable client-side caching and improve LLM prompt cache hit rates."
  - [changelog Major #9] "A broken response stream loses the in-flight request; clients MUST re-issue it as a new request with a new request ID."
- **ai_opportunity**: 整个 MCP 服务器/客户端生态需迁移：(1) MCP 版本兼容代理/网关（在 2025-11-25 与 2026-07-28 间做协议翻译）；(2) 迁移 lint/codemod 工具；(3) 无状态化后共享中间层缓存（cacheScope: public）成为新基建位。对 API 网关项目是直接相关的协议层机会。

## 3. OpenAI 7-8 月 API 密集更新：Luna 降价 80%、Fast mode、硬性支出上限
- **type**: trend | **platform**: developers.openai.com | **secondhand**: false
- **source_url**: https://developers.openai.com/api/docs/changelog
- **source_date**: 2026-07-30 | **fetched_at**: 2026-08-11
- **metrics**: GPT-5.6 Luna 降价 80%、Terra 降价 20%（07-30）；Fast mode 2.5× 提速、2× 价格（Sol）；07-22 上线组织/项目级月度硬支出上限（超限返回 429）；08-04 Usage/Costs API 新增按 API key 维度
- **description**: 7 月 9 日 GPT-5.6 家族（Sol/Terra/Luna）发布后连续落地：程序化工具调用、显式 prompt 缓存控制、持久化推理、Responses 多 agent 编排 beta；7 月 30 日大幅降价并以 Fast mode 取代 Priority Processing；8 月 5 日 Fast mode 支持 272K+ 长上下文。成本管理工具（硬上限、按 key 计量）明显是面向 agent 大规模生产部署的配套。时间横轴：immediate。
- **user_quote**: "GPT-5.6 Luna costs 80% less, while GPT-5.6 Terra costs 20% less."
- **top_comments**:
  - [changelog 08-05] Fast mode 长上下文 "delivering speeds up to 2.5× faster than the Standard tier."
  - [changelog 07-22] 月度硬支出上限：超限请求返回 429，"Alerts fire before traffic breaks."
  - [changelog 08-07] Daybreak 防御方分级访问：Red 层 "separately approved access to purpose-trained models such as GPT-5.6 Cyber"
- **ai_opportunity**: 高量级 token 成本坍塌（Luna -80%）让原先不经济的批量场景（全库代码扫描、日志摘要、海量内容审核）变得可行；FinOps 层面：多供应商成本路由/预算护栏产品的对标功能已被平台原生化（硬上限、按 key 计量），第三方工具需上移到跨供应商层才有空间。

## 4. arXiv：LLM agent 安全护栏成为独立研究层（SHE：可进化 Safety Harness）
- **type**: trend | **platform**: arxiv.org | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.09885
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-11
- **metrics**: Agent-SafetyBench 上 ASR（攻击成功率）较静态 SafeHarness 降低 3.1×；泛化到 held-out AgentHarm；15 位作者（复旦/上海 AI Lab 系）
- **description**: 论文把 agent 安全从模型权重扩展到 harness 层（上下文、记忆、工具、权限、运行时控制），并把 harness 拆为 System Prompt、Rule Bank、Safety Memory、Tool Policy 四个可独立归因的组件，用轨迹失败驱动的进化循环持续细化安全边界。核心论点：harness 不该是"固定部署产物"。同日另有 SkillSentry（运行时技能执行保障，2608.09253）与 ElasticBack（agent 技能库后门攻击，2608.09577），显示 agent 安全攻防已形成子领域。时间横轴：6-12mo。
- **user_quote**: "current approaches often treat the harness as a fixed deployment artifact"
- **top_comments**:
  - [论文摘要] "learns evolving safe boundaries from rollout trajectories"
  - [论文摘要] "an attribution-guided evolution loop that converts trajectory failures into structured diagnoses"
  - [论文摘要] 报告 "a 3.1x ASR reduction compared with static SafeHarness"，且 harness 可跨 agent 模型迁移、无需重跑进化
- **ai_opportunity**: "Harness-as-a-product"：可进化的 agent 安全护栏中间件（从生产轨迹自动学习规则库/工具策略），卖给部署 agent 的企业；与 EU AI Act 执法期叠加，agent 安全审计与运行时防护是合规+安全双驱动的赛道。

## 5. arXiv：分析 agent 的可靠性门控——"Business Truth, not SQL Accuracy"
- **type**: trend | **platform**: arxiv.org | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.09254
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-11
- **metrics**: 规则门控 7B agent 对直接提示 32B 基线 +0.237 Business Truth Rate（CI [+0.112, +0.375]），单位正确答案成本 -71.0%；false success 从 0.754 降至 0.351；可答任务 0/24 返回错误数字；WarehouseReliabilityBench 400 个冻结任务、约半数正确响应应为澄清/弃答/拒绝
- **description**: 单作者论文指出 text-to-SQL 基准漏掉部署中真正的失败模式：业务定义歧义、不可答问题、schema 变更后的过期列、"跑通但数字错"的查询。QueryProof 用语义层+物理目录规则驱动 7B 模型，对每个答案做确定性执行后校验。作者诚实报告负面结果（路由层几乎无用、置信模型不如启发式）。附一键复现仓库 github.com/k-w-lee/query_proof。时间横轴：immediate。
- **user_quote**: "No execution-match metric can score them."
- **top_comments**:
  - [论文摘要] 评测设计预注册："a pre-registered paired bootstrap fixing each claim verb before the numbers existed"
  - [论文摘要] "gates every answer on deterministic post-execution checks"
  - [论文摘要] 局限自述："the effect's direction is better supported than its magnitude"
- **ai_opportunity**: 企业 BI agent 的信任层是产品空白：确定性后校验 + 主动弃答/澄清机制让小模型以 1/3 成本超大模型。可产品化为"数据问答置信门控"中间件，或将 WarehouseReliabilityBench 式评测卖给采购分析 agent 的企业。

## 6. 网信办动态：APEC AI 声明 + 个人信息处理者分级新规 + 对派拓网络安全审查
- **type**: trend | **platform**: cac.gov.cn | **secondhand**: false
- **source_url**: https://www.cac.gov.cn/
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: 《大型个人信息处理者个人信息保护规定（征求意见稿）》2026-08-07 征求意见；《小型个人信息处理者个人信息保护简化措施规定》2026-07-24 公布（网信办+公安部）；《反网络暴力法（征求意见稿）》2026-07-29；对派拓（Palo Alto Networks）在华产品网络安全审查 2026-08-06 公告
- **description**: 网信办首页快照（无单一内容日期，各条目日期如上）。AI 直接相关：APEC AI 高级别论坛声明（07-24）、2026 世界人工智能大会（07-17 开幕）。更实质的是个人信息保护进入"按处理者规模分级监管"阶段：大型处理者加码、小型处理者简化——中国版合规成本分层。算法备案系统（beian.cac.gov.cn）常设。时间横轴：6-12mo（征求意见稿）。
- **user_quote**: "国家互联网信息办公室关于《大型个人信息处理者个人信息保护规定（征求意见稿）》公开征求意见的通知"
- **top_comments**:
  - [cac.gov.cn 07-24] 「国家网信办、公安部联合公布《小型个人信息处理者个人信息保护简化措施规定》」
  - [cac.gov.cn 08-06] 「关于对派拓公司在华销售产品启动网络安全审查的公告」
- **ai_opportunity**: 面向在华 AI/数据产品的分级合规工具：判定"大型/小型处理者"身份、映射对应义务清单、生成备案材料。外资安全厂商受审查也意味着国产替代窗口。

## 7. arXiv 单日 486 篇 cs.AI：agent 评测基准垂直化（购物/CAD/电路/建筑/理论心智）
- **type**: trend | **platform**: arxiv.org | **secondhand**: false
- **source_url**: https://arxiv.org/list/cs.AI/recent
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: 2026-08-11 单日 486 篇 cs.AI 投稿；前 50 篇中 agent 相关超过 25 篇；评测基准类至少 7 个新基准（ComboShoppingBench、CADEngBench、CircuitReason-1k、MMArch、Avalon-ToM-Bench、KVDiagnosis、WarehouseReliabilityBench）
- **description**: 列表页快照（无单一内容日期）。研究热度明显从通用能力转向垂直场景可靠性评测：预算约束购物 agent（2608.09282）、参数化 CAD "看着像 CAD 但能不能用"（2608.09296）、GUI 无幻觉定位（2608.09654）、自进化 agent 反思（"Do We Still Need Prescribed Optimization Pipelines?" 2608.09629）。另有 Google 系大团队的实时视频医疗问诊（2608.09861）。时间横轴：6-12mo。
- **user_quote**: "CADEngBench: It Looks Like CAD, but Does It Work?"
- **top_comments**:
  - [arXiv 列表] "Rethinking Self-Evolving Agents: Do We Still Need Prescribed Optimization Pipelines?"（2608.09629）
  - [arXiv 列表] "Towards Expert-level Medical AI for Real-time Video Consultations"（2608.09861，Google 系作者群）
  - [arXiv 列表] "Hallucination-Free GUI Grounding via Regression-Free Layout-Aware Matching"（2608.09654）
- **ai_opportunity**: 垂直 agent 评测即产品：企业采购 agent 前需要领域化验收基准（购物、CAD、数据分析、GUI 自动化）。"评测即服务"或把学术基准工程化为采购验收工具链是明确空白。

## 8. Luma AI 类目：3K 活动、91K 订阅者；OpenClaw/Claude 社区线下化
- **type**: trend | **platform**: luma.com | **secondhand**: false
- **source_url**: https://luma.com/ai
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: AI 类目 3K 活动、91K 订阅者；热门日历：Air Street、Latent.Space（Paper Club/AI in Action）、OpenClaw Meetups（全球社区聚会）、The AI Collective（自称最大 AI 社区、100+ 论坛）、Claude Community Events、Llama Lounge（SF 路演系列）
- **description**: 类目页快照（动态加载，具体活动列表未取到——渠道部分受限）。可见结构性信号：开发者社区活动以"日历订阅"形态组织，OpenClaw（开源 agent 项目）与 Claude 社区均已形成全球线下 meetup 网络，说明 agent 开发者社区从线上讨论转入线下高频聚会。时间横轴：immediate。
- **user_quote**: "The world's largest AI community"（The AI Collective 自述）
- **top_comments**:
  - [luma.com/ai] Latent.Space 日历："Paper Club, AI in Action, meetups and conferences"
  - [luma.com/ai] Llama Lounge："San Francisco startup series with demos, lightning talks, and pitches"
- **ai_opportunity**: 开发者社区运营已成 AI 产品增长渠道标配；面向社区组织者的工具（活动内容沉淀、跨城市日历联合、会后线索转化）有需求。此信号偏弱，主要作生态温度计。

## 9. 二手综述：8 月监管与产品面——美国商务部前沿模型审查门槛、agent 垂直化融资
- **type**: trend | **platform**: websearch-aggregators | **secondhand**: true
- **source_url**: https://cubbbix.com/blog/ai-regulation-august-2026-global-update/
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: （均未经一手核实）7 月 AI agent 初创融资约 $1.8B/12 笔；Cyera 以 $1B 收购 Oasis Security（agent 身份管理）；EU AI Office 据称公布 8 个超 10^25 FLOPs 模型清单、月度系统性风险评估；中国陪伴类 AI 新规首周 12 家公司被罚共 420 万元；英国 AI Regulation and Safety Bill 已过下议院
- **description**: 来自 SEO 综述博客与厂商博客的多条聚合线索（Cubbbix、Collibra、Kiteworks、AIapps 等），一致方向：监管从立法期转入执法期；投资从通用聊天转向法律/医疗/金融垂直 agent；美国商务部据称对超能力阈值前沿模型设国家安全审查门槛。这些具体数字与一手来源（本组 #1、#6）方向一致但细节未验证，一律按二手处理，可能含厂商利益偏差。时间横轴：immediate 至 6-12mo。
- **user_quote**: "The Enforcement Era Begins"（Cubbbix 8 月全球监管综述标题）
- **top_comments**:
  - [WebSearch 摘要] "breakthroughs have shifted from model capabilities to system capabilities: handling long time series, maintaining consistency, executing complex tasks, and collaborating with other agents"（a16z 派生综述转述）
  - [WebSearch 摘要] 中国陪伴 AI 规则执法首周 "12 companies were reportedly fined a total of 4.2M RMB"
- **ai_opportunity**: 若商务部审查门槛属实，前沿模型发布节奏将受行政流程约束——多模型冗余路由与"审查期替代模型"预案对企业更重要；agent 身份/权限管理（Cyera-Oasis 交易所指方向）是安全领域被验证的收购级赛道。

---

## 渠道故障记录
- **Google Trends**: trends.google.com/trends/explore 连续两次 HTTP 429（限流），本组无法提供量化搜索需求验证。非搜索渠道污染，是目标站点限流。
- **lu.ma/ai**: 301 重定向到 luma.com/ai；页面动态加载，具体活动列表不可见，仅取到类目统计与热门日历。
- **whitehouse.gov/briefing-room**: 可达，但 8 月 6-10 日首页无 AI 相关条目（仅导航中的 "Lead the World in AI" 与 ai.gov 链接）。
- **digital-strategy.ec.europa.eu/en/latest**: 404，改用 /en/news 成功。
- **WebSearch**: 三次查询均返回与查询相关的结果，无 2026-07-28 式查询污染迹象。
