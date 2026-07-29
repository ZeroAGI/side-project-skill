# 13 — arXiv + Regulations + Breakthroughs + Google Trends + Luma 2026-07-29

> 组内信号：11 条 | 二手转述：2 条（18%）
> 最强证据线：监管临界点（EU Article 50 透明义务 2026-08-02 生效 + AI Omnibus 高风险延期 16 个月，形成"透明合规立刻做、高风险合规缓做"的清晰产品窗口）与 arXiv 前沿共振（agent 遵循长政策文档能力极差：HANDBOOK.md 顶级模型仅 36.2% 通过率）。渠道故障：Google Trends explore 接口连续 3 次 429（无法取得定量搜索量验证）；lu.ma/ai 只暴露聚合统计无 event feed；whitehouse.gov/ai 404。

---

## 1. HANDBOOK.md 基准：前沿模型遵循企业手册通过率仅 36.2%
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2607.25398
- **source_date**: 2026-07-28 | **fetched_at**: 2026-07-29
- **metrics**: 65 个 agentic 任务，824 条程序化评分标准，手册 20–124 页，5 个行业域，30 个模型配置；严格全标准评分下最佳模型通过率 36.2%，多数前沿配置低于 25%
- **description**: Surge AI 团队（COLM 2026 WAB workshop 接收）构建的基准测试：把 agent 放进含 email/chat/calendar/工单/商务 MCP 服务的模拟公司环境，要求其在专家撰写的 SOP（公司手册）约束下完成日常工作。结论是当前所有前沿模型在"长政策文档约束下的长程工具使用"上大面积失败。失败模式包括：把环境内一条可信请求当作可覆盖既有政策、执行了必要检查却违背检查结果行事、长程中遗忘规则细节、声称合规但实际未达成。这正是企业部署 agent 的核心恐惧，且与 EU Article 50/合规窗口叠加。
- **user_quote**: "under strict all-criteria grading the top one passed 36.2% of trials, with most frontier configurations below 25%"
- **top_comments**:
  - [arXiv abstract/失败模式] "treating a believable in-environment request as overriding the standing policy, running a required check then acting contrary to its outcome, forgetting rule details over long horizons, and claiming compliance that wasn't actually achieved"
- **ai_opportunity**: 「政策合规运行时」产品：把公司手册/SOP 编译为确定性 rubric + 运行时校验层（deterministic policy guard），在 agent 每次行动前后校验是否违反手册条款；也可做"你的 agent 手册遵循度体检"评测服务，直接复用其开源 harness（github.com/surge-ai/handbook）。

## 2. SigLeak：agent 私有技能可从执行轨迹被黑盒重建（Skill Leakage）
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2607.25560
- **source_date**: 2026-07-28 | **fetched_at**: 2026-07-29
- **metrics**: 5 个场景 × 3 个模型家族 × 3 个 agent 框架；重建技能相对无技能基线平均提升成功率 6.88 个百分点；提出 SkillSim 相似度指标
- **description**: 论文指出 agent skills 正在商业化（技能市场、云端私有部署），但技能的行为后果在执行轨迹中可见，构成"behavioral side channel"。SigLeak 用良性查询生成决策密集的诊断任务，对比技能开/关的成对轨迹，迭代重建出私有技能。意味着"卖 skill"这门刚兴起的生意天然存在 IP 泄露风险。
- **user_quote**: "a black-box framework that exploits recurring skill signatures in agent behavior"
- **top_comments**:
  - [arXiv abstract] 隐藏技能工件本身并不能隐藏其行为后果——执行轨迹构成 "a behavioral side channel"，作者称之为 Skill Leakage
- **ai_opportunity**: 技能市场基础设施的对立面机会：(a) skill IP 保护层（轨迹混淆、行为水印、泄露检测审计）；(b) 面向 skill 卖家的"泄露风险体检"；佐证了 skill 经济正在成型这一底层趋势。

## 3. OrchBench：多 agent 编排计划可用确定性模拟以 1.3% token 成本评估
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2607.25656
- **source_date**: 2026-07-28 | **fetched_at**: 2026-07-29
- **metrics**: 模拟得分与真实 Claude Code 执行质量 Pearson r=0.816；仅需真实执行 1.3% 的 token、10.3% 的墙钟时间
- **description**: 端到端评估把编排质量与 worker 能力、工具可靠性、环境噪声混在一起且成本高。OrchBench 把任务编码为依赖 DAG，让 planner 分配子任务与信息传递，再用确定性模拟器打分。关键发现："保留任务关键信息比增加 agent 数量更重要"，并行收益随协调失败累积而递减——直接反驳"堆 agent 数"的流行做法。
- **user_quote**: "conflates orchestration-plan quality with worker capabilities, tool reliability, and environmental noise"
- **top_comments**:
  - [arXiv abstract] "preserving task-critical information is more important than simply increasing the number of agents"；并行收益 "as coordination failures accumulate" 而缩水
- **ai_opportunity**: 「编排计划预检/成本模拟器」：在真正烧 token 之前离线模拟多 agent 计划的质量-耗时-成本三角，作为 agent 平台的 CI 步骤；与既有 Cost Guardian 机会线（连续多期登顶）直接互证。

## 4. 运行时不确定性监控：用贝叶斯网络给多 agent 系统装"仪表盘"（WAISE 2026）
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2607.25877
- **source_date**: 2026-07-28 | **fetched_at**: 2026-07-29
- **metrics**: WAISE 2026（第九届 AI 安全工程 workshop）接收；精算风险建模场景，性能持平基线且额外获得工作流稳定性可见性
- **description**: 面向高风险决策支持（精算定价）的多 agent 系统，将 token 级 log-prob 做长度归一化并校准为任务级置信度，再输入贝叶斯网络做跨 agent 不确定性传播监控。强调 raw log-prob 不能直接当正确率。这是"agent 可观测性"从 trace 查看器走向定量置信度传播的信号。
- **user_quote**: "a novel approach to uncertainty propagation using token-level log-probabilities and a Bayesian Network"
- **ai_opportunity**: agent 可观测性的下一层：不只记录 trace，而是输出校准后的运行时置信度与"工作流哪一环最不稳"的归因，尤其面向金融/保险等受监管行业（与 EU Annex III 高风险合规延期后的准备期需求契合）。

## 5. arXiv cs.AI 单日快照：agent 评测/harness/信任类论文密集成簇
- **type**: trend | **platform**: arxiv | **secondhand**: false
- **source_url**: https://arxiv.org/list/cs.AI/recent
- **source_date**: | **fetched_at**: 2026-07-29
- **metrics**: 2026-07-29 单日列表 260 篇（recent 窗口共 1226 篇）；前 50 篇中至少 7 篇 agent 评测基准、7 篇 agent 安全/信任、5 篇工具调用成本效率、6 篇记忆/技能/上下文管理
- **description**: 当日列表主题分布显示研究热点已从"造 agent"转向"评测、约束、监控 agent"：Desktop-Delta Bench（GUI 状态转移理解）、Interactive Reward Agent（环境状态校验评分）、跨厂商工具信任标准（2607.25914）、把安全控制下沉到 harness 层（2607.25890, "Distributing Security Controls Through Harness Engineering"）、投机预测下一次工具调用降延迟（2607.25816）、冻结 LLM agent 的上下文控制论（2607.25415/25408 成对论文）。学界供给侧与市场痛点（可靠性、成本、安全）高度对齐。
- **user_quote**: 无（列表页仅元数据）
- **ai_opportunity**: 论文到产品的时间差窗口：harness 层安全控制、工具调用投机加速、跨厂商工具信任注册表，均是 6-12 个月内可产品化的方向。

## 6. EU AI Omnibus 生效（2026-07-27）：高风险义务延至 2027-12-02，新增 nudification 禁令
- **type**: trend | **platform**: regulator (EC digital-strategy) | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force
- **source_date**: 2026-07-27 | **fetched_at**: 2026-07-29
- **metrics**: Annex III 高风险规则延至 2027-12-02（推迟 16 个月）；Annex I 嵌入实体产品的高风险 AI 延至 2028-08-02；SME 简化义务扩展到 small mid-caps（法律博客补充口径：≤750 员工、€1.5 亿营收）；禁止生成非自愿性内容/CSAM 的 AI 系统
- **description**: Regulation (EU) 2026/1744 于 7 月 27 日生效，赶在原 8 月 2 日高风险大限前完成"紧急"改期。同时：AI Office 扩权监管 GPAI 及大平台内嵌系统；设 EU 级监管沙盒；放宽 AI 素养义务；允许处理特殊类别个人数据以检测和纠正偏见。时间地平线：立即（透明义务）+ 6-18 个月（高风险准备期拉长）。
- **user_quote**: "delivers a targeted simplification of the AI rulebook while preserving strong safeguards for people's safety and fundamental rights"
- **top_comments**:
  - [EC 页面] Annex III: "Rules apply starting 2 December 2027"；Annex I: "Rules apply starting 2 August 2028"
  - [EC 页面] "Prohibits AI systems that generate non-consensual sexually explicit and intimate content or child sexual abuse material"
- **ai_opportunity**: 高风险合规工具的销售窗口被拉长 16 个月——从"救火"变"规划"，利好卖给 mid-caps 的低价合规准备 SaaS（差距评估、文档模板、沙盒申请助手）；nudification 禁令（2026-12-02 生效）造出"产品能力剥离审计"的一次性咨询/扫描需求。

## 7. EU Article 50 透明义务 2026-08-02 生效：机器可读标记 + Transparency Code of Practice 发布
- **type**: trend | **platform**: regulator (EC digital-strategy) | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems
- **source_date**: 2026-07-20 | **fetched_at**: 2026-07-29
- **metrics**: 义务 2026-08-02 起适用（本周日！）；配套发布 Guidelines + Code of Practice on Transparency of AI-Generated Content + Q&A；已上市生成式 AI 有 4 个月宽限期实现可检测性（据法律分析，secondhand）
- **description**: 欧委会 7 月 20 日发布 Article 50 透明义务指南：provider 须让用户知道在与 AI 交互、对 AI 生成/篡改内容施加"machine-readable marks"；deployer 须披露 deepfake、无人工编辑的公共利益议题 AI 内容、情绪识别/生物特征分类系统。这是 Omnibus 延期潮中唯一没被推迟的近期硬截止日期。
- **user_quote**: "machine-readable marks to enable the detection of AI-generated or manipulated content"
- **top_comments**:
  - [EC 页面] 规则帮助人们 "recognise when they are interacting with AI or when content has been generated or altered by AI, reducing the risk of deception and manipulation"
  - [EC 页面] deployer 披露义务覆盖 "AI-generated content on matters of public interests without human review or editorial control" 与 "emotion recognition or biometric categorisation systems"
- **ai_opportunity**: 立即窗口：AI 内容水印/C2PA 标记中间件、聊天机器人"AI 身份披露"合规组件、面向出海欧盟的中小 AI 产品的 Article 50 合规检查器。截止日就在 4 天后，痛感处于峰值。

## 8. 网信办 7 月连续整治 AI/内容标注乱象：清朗专项 + 自媒体信息来源标注执法
- **type**: trend | **platform**: cac.gov.cn | **secondhand**: false
- **source_url**: https://www.cac.gov.cn/
- **source_date**: 2026-07-27 | **fetched_at**: 2026-07-29
- **metrics**: 7 月至少 3 项执法/专项：07-27 严管自媒体未规范标注信息来源；07-10 从严处置一批短视频内容标注不规范的账号和平台；07-08 上海"清朗·整治AI应用乱象"专项第一阶段
- **description**: 中国侧监管与 EU Article 50 形成同向共振：内容来源/AI 生成标注成为中欧两大市场同时收紧的执法点。另有 07-17 世界人工智能大会全球治理高级别会议、07-23 西安"智能体协同创新发展论坛"（官方话语体系首次高频出现"智能体"）、07-24 APEC 成都 AI 高级别论坛声明。首页未见新的算法/大模型备案专项通知。
- **user_quote**: "网信部门严管'自媒体'未规范标注信息来源行为"
- **top_comments**:
  - [cac.gov.cn 首页] "中央网信办从严处置一批短视频内容标注不规范的账号和平台"（2026-07-10）
  - [cac.gov.cn 首页] "上海深入开展'清朗·整治AI应用乱象'专项行动第一阶段工作"（2026-07-08）
- **ai_opportunity**: 面向中国 MCN/自媒体/短视频平台的 AIGC 标识与信息来源标注合规工具（自动打标、批量体检、平台侧审核 API）；中欧双市场标识合规可做成同一产品的两套规则包。

## 9. OpenAI 7 月 API 变更：GPT-5.6 三档 + 组织级硬支出上限（429 截断）+ 多 agent 编排 beta
- **type**: trend | **platform**: developers.openai.com (官方 changelog) | **secondhand**: false
- **source_url**: https://developers.openai.com/api/docs/changelog
- **source_date**: 2026-07-09 | **fetched_at**: 2026-07-29
- **metrics**: 07-09 GPT-5.6 家族（sol/terra/luna，$5/$30 per 1M sol 档，据搜索渠道）；07-22 硬支出上限；07-28 两个新语音转写模型；07-06 gpt-realtime-2.1
- **description**: 官方 changelog 三条关键：(1) GPT-5.6 带来 Programmatic Tool Calling、显式 prompt 缓存控制、persisted reasoning、Responses API 多 agent 编排 beta；(2) 07-22 上线组织/项目级月度硬支出上限——"tracked spend 达到上限后 API 请求返回 429"——OpenAI 官方承认并原生化了"AI 成本失控"痛点；(3) 语音转写双模型补齐实时低延迟场景。平台原生功能正在吞掉第三方 cost-guard 的最基础形态。
- **user_quote**: "Set a monthly cap that causes affected API requests to return a `429` error when tracked spend reaches the limit."
- **top_comments**:
  - [官方 changelog 07-09] 新能力包括 Programmatic Tool Calling、"explicit prompt caching controls"、"persisted reasoning, `max` reasoning effort, and Pro mode"、"Multi-agent orchestration in beta for the Responses API"
  - [官方 changelog 07-28] GPT Live Transcribe 面向 "low-latency streaming transcription"，支持 "free-form transcription context, keyword hints, and multiple expected input languages"
- **ai_opportunity**: Cost Guardian 类机会需上移一层：单纯"设上限"已被平台内置，差异化必须在跨供应商聚合、按任务/agent 归因、预算-质量权衡自动降档；多 agent 编排 beta 则打开"编排计划评估/迁移工具"（与 OrchBench 论文互证）。

## 10. Claude Opus 5 发布（07-24）：面向长时程 agent，Fable 5 半价，附 API 自动降级 beta
- **type**: trend | **platform**: anthropic.com (官方博客) | **secondhand**: false
- **source_url**: https://www.anthropic.com/news/claude-opus-5
- **source_date**: 2026-07-24 | **fetched_at**: 2026-07-29
- **metrics**: $5/$25 per 1M tokens（与 Opus 4.8 持平）；Fast mode 约 2.5 倍速、双倍计费；CursorBench 3.2 max effort 距 Fable 5 峰值 0.5% 但每任务成本减半；ARC-AGI 3 得分为次优模型 3 倍；OSWorld 2.0 以约 1/3 成本超 Fable 5 最佳
- **description**: 定位"a step change improvement for the Opus tier powering long-running agents"：更强的自我校验与迭代坚持（"much stronger at verifying its work and iterating carefully until it succeeds"）。随发布上线两个 beta：会话中途更换工具、API 自动降级回退（automatic API fallbacks）——供应商开始原生提供可靠性兜底。7 月同月：GPT-5.6（07-09）、Meta Muse Spark 1.1 首个付费 API，形成"成本压缩月"。
- **user_quote**: "a thoughtful and proactive model that comes close to the frontier intelligence of Claude Fable 5 at half the price"
- **top_comments**:
  - [Anthropic 博客] "Opus 5 is designed to be used every day: it works more efficiently than other models."
  - [Anthropic 博客] "our automated behavioral audit found Opus 5 to be our most aligned model to date"
- **ai_opportunity**: 长时程 agent 的单位经济学在 7 月被三家同时改写——依赖"模型太贵"假设的产品需重算；自动降级/工具热切换成为平台能力后，第三方价值转向跨供应商路由与质量回归监控。

## 11. 美国 EO 14409 进入实施月：08-01 前建立前沿模型自愿预发布审查框架（二手汇总）
- **type**: trend | **platform**: websearch (law-firm/新闻聚合) | **secondhand**: true
- **source_url**: https://www.governmentcontractslaw.com/2026/06/ai-heats-up-new-executive-order-on-promoting-advanced-artificial-intelligence-innovation-and-security/
- **source_date**: 2026-06-02 | **fetched_at**: 2026-07-29
- **metrics**: EO 14409（2026-06-02 签署）设 30/60 天期限：CISA 约束性运行指令 2026-07-02 前；covered frontier models 自愿预发布联邦审查框架 2026-08-01 前
- **description**: 7 月无新 AI 行政令（whitehouse.gov/ai 直接 404，无法核验一手页面），是 6 月 2 日 EO 的实施月：联邦系统 AI 防御加固、AI 网络安全信息交换中心（与开发者自愿共建）、对恶意 AI 网络活动的刑事执法优先级。EO 明确否认 "mandatory governmental licensing, preclearance, or permitting requirement"。另据搜索：英国 AI Regulation and Safety Bill 于 07-03 通过上议院二读（法定化转向，2026 年内不会执法）。法律博客转述，未核验行政令原文，标记二手。
- **user_quote**: 无一手原文（EO 全文页未核验）
- **ai_opportunity**: 美国路线=自愿框架+网络安全，与 EU 强制透明形成分叉；跨辖区合规矩阵工具（同一 AI 产品对 EU/US/CN 三套义务的映射）需求持续走强。

---

## 渠道故障记录
- **Google Trends（explore 接口）**：连续 3 次 HTTP 429，本期无法提供定量搜索量验证；trending 页可达但内容截断且无 AI 相关条目。定量需求验证缺口需在报告中声明。
- **lu.ma/ai**（301→luma.com/ai）：仅暴露聚合统计（3K events / 88K subscribers）与热门日历（Air Street、Latent.Space、OpenClaw Meetups、The AI Collective 200k+ 成员、Claude Community Events），无 event feed，无法提取具体活动主题/规模，不足以构成独立信号。
- **whitehouse.gov/ai**：404。
- **WebSearch 渠道本期未见 07-28 式查询污染**：返回结果与查询语义一致，已按规则将关键定量数据回溯至一手页面（OpenAI changelog、Anthropic 博客、EC 页面）核验。
