# 13 — arXiv + Regulations + Breakthroughs + Google Trends + Luma 2026-08-03

> 组内信号：10 条 | 二手转述：3 条（30%）
> 最强证据线：EU AI Act 于 2026-08-02 正式开始执法（透明度义务 + AI Office 执法权生效），~190 家组织抢签 AI 生成内容透明度行为准则——合规工具窗口从「预期」变为「现在时」。渠道故障：Google Trends explore 端点两次 HTTP 429，本期无量化搜索需求验证；lu.ma/ai 仅返回类目落地页（2K events / 89K subscribers 聚合数），无单场活动明细；whitehouse.gov 首页近两周无 AI 相关行政令。

---

## 1. EU AI Act 执法于 8 月 2 日正式启动：聊天机器人须自报身份、深伪须标注、AI 内容须机器可读标记
- **type**: trend | **platform**: digital-strategy.ec.europa.eu | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-03
- **metrics**: 执法起始日 2026-08-02；配套复述/举报/下游投诉三条渠道同日上线
- **description**: 欧委会 AI Office 联合成员国监管机构自 2026-08-02 起开始执法 AI Act，同日透明度义务生效：交互式 AI 系统（聊天机器人）必须 "tell users they are dealing with AI, not a human"；AI 生成/修改的图像、视频、音频必须打标签；AI 生成内容必须 "carry machine-readable marks so it can be detected more easily"。官方定位是 "reduce deception and manipulation and help people make informed choices"。这是从立法到执法的分水岭——所有面向欧盟用户的 AI 产品即刻承担披露义务。时间跨度：immediate。
- **user_quote**: "images, video or audio edited or created with AI have to be labelled … carry machine-readable marks so it can be detected more easily"
- **top_comments**:
  - [同页链接] 官方同时上线 AI Act complaints tool、whistleblower tool、以及面向使用 GPAI 模型的下游提供者的投诉渠道
- **ai_opportunity**: 面向出海欧盟的中小 AI 产品的「透明度合规套件」：一个 SDK/中间件自动注入聊天机器人身份披露、C2PA/机器可读水印、深伪标签，按 AI Act Art.50 逐条出合规证明；下游 GPAI 投诉渠道的出现也意味着「合规证据留痕」成为刚需。

## 2. ~190 家组织签署 AI 生成内容透明度行为准则，约一半是新创小公司
- **type**: trend | **platform**: digital-strategy.ec.europa.eu | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/strong-backing-code-practice-transparency-ai-generated-content
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-03
- **metrics**: ~190 家签署方（Section 1: 83 家提供方；Section 2: 152 家部署方，可重叠）；约半数为小型新创公司；2026-09 将设两个 task force
- **description**: 在 8 月 2 日标记义务生效前，约 190 家组织抢签该行为准则。Section 1 签署方含 Anthropic、Google、Meta、Microsoft、Mistral、OpenAI、Cohere、Black Forest Labs、Synthesia、Aleph Alpha；Section 2 部署方含 Bulgari、Getty Images、Lenovo、Lufthansa、欧洲审计院、罗马尼亚央行。官方称签署提供 "streamlined, predictable and legally certain pathway to guarantee and demonstrate compliance"。约半数签署方是 IT/电信/教育/零售的小公司——说明中小企业也被拖入合规义务，但缺乏大厂的法务资源。时间跨度：immediate。
- **user_quote**: "About 190 organisations signed the Code of Practice on Transparency of AI-generated Content"
- **top_comments**:
  - [官方页] Section 1 也对 marking/detection 工具提供商开放签署——「标记/检测工具」被欧盟官方确立为一个供应商品类
  - [官方页] 签署名单滚动更新，2026 年 9 月成立两个任务组收集实施反馈
- **ai_opportunity**: 「半数签署方是小公司」= 大量没有合规团队的公司需要低成本落地方案：Code of Practice 条款到工程 checklist 的自动映射、水印/检测工具选型对比、签署与证据材料生成器。Section 1 对检测工具商开放意味着做 AI 内容检测/标记工具本身就能进入官方生态位。

## 3. AI Omnibus 生效 + 高风险义务或推迟到 2027-12：合规时间表进入「波动期」
- **type**: trend | **platform**: digital-strategy.ec.europa.eu | **secondhand**: true
- **source_url**: https://digital-strategy.ec.europa.eu/en/news (AI Omnibus enters into force, 2026-07-27)；分析背景：https://www.hklaw.com/en/insights/publications/2026/04/us-companies-face-eu-ai-acts-possible-august-2026-compliance-deadline
- **source_date**: 2026-07-27 | **fetched_at**: 2026-08-03
- **metrics**: AI Omnibus 于 2026-07-27 全欧生效；欧委会提议将高风险 AI 期限从 2026-08 延至 2027-12（尚未定案）；Art.57 要求每个成员国 2026-08-02 前设立至少一个 AI 监管沙盒
- **description**: 官方 news 页确认 AI Omnibus 2026-07-27 生效，"bringing extended timelines to administrative simplification"。律所与搜索综述（secondhand）称春季达成的 Digital Omnibus 临时协议推迟了部分高风险义务、且欧委会提议高风险期限延至 2027-12，但修正案仍在谈判中；透明度义务与执法权则如期 8 月 2 日生效。意大利等成员国还在叠加本国附加条款（如 14 岁以下未成年人保护）。结论：2026 年合规主题是 volatility 而非 deregulation。时间跨度：immediate 至 1-2yr 分层。
- **user_quote**: "AI Omnibus enters into force … bringing extended timelines to administrative simplification"（官方 teaser）
- **top_comments**:
  - [Wilson Sonsini / 综述] 分析师建议 "assume the strictest interpretation and build compliance programs accordingly"，不要赌谈判结果
- **ai_opportunity**: 「合规时间表追踪器」：逐条追踪 AI Act 各义务的实际生效日（含 Omnibus 修正、成员国附加条款），对产品画像输出「你现在必须做 / 可以等」的动态清单——时间表本身的波动性就是付费理由。

## 4. 网信办等发布《小型个人信息处理者个人信息保护简化措施规定》：中国给中小 AI 开发者减负但划定精准合规线
- **type**: trend | **platform**: cac.gov.cn | **secondhand**: false
- **source_url**: https://www.cac.gov.cn/
- **source_date**: 2026-07-24 | **fetched_at**: 2026-08-03
- **metrics**: 国家网信办+公安部联合公布，配套答记者问与专家解读；同日发布《数据出境安全管理政策法规问答（2026年7月）》
- **description**: 网信办 7 月下旬密集出台：小型个人信息处理者简化合规规定（官方解读题为「减负增效精准合规 护航中小微企业发展」）、数据出境政策问答更新、《反网络暴力法（征求意见稿）》公开征求意见（2026-07-29，进行中）。此外 7 月中下旬 WAIC 与 APEC AI 高级别论坛（成都，2026-07-24）发布促进亚太 AI 发展声明。对中国中小 AI 产品：合规门槛被官方明确区分档位，「小型处理者」身份认定与简化清单成为新的确定性依据。时间跨度：immediate。
- **user_quote**: "减负增效精准合规 护航中小微企业发展"（官方专家解读标题）
- **top_comments**:
  - [cac.gov.cn] 《反网络暴力法（征求意见稿）》2026-07-29 起公开征求意见，配套两篇专家解读——涉 UGC/AI 生成内容平台需关注
- **ai_opportunity**: 中文「小微处理者合规自测」工具：判定是否落入简化档、生成对应的最小合规清单与数据出境问答匹配；对做出海+国内双市场的开发者可与 EU AI Act 清单打包成双辖区合规产品。

## 5. ExtractBench：企业文档结构化抽取基准——VLM 长文档截断 vs coding agent 高成本的缺口被量化
- **type**: trend | **platform**: arxiv.org | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2607.29677
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-03
- **metrics**: 4,869 页 / 370 份企业文档 / 8 个业务域 / 67 种文档类型；首个同时测值准确率、记录完整性、grounding、成本的抽取基准
- **description**: LlamaIndex 系作者提出 schema-guided 抽取基准：agent 拿文档+用户 schema 返回结构化输出及证据。核心发现：商用 VLM 在短文档表现好但 "often truncate record lists on long ones"（长文档记录列表被静默截断），coding agent 更准但成本高得多。这把「企业文档抽取」的现实痛点（长表格静默丢行、无法审计 grounding）第一次做成可量化基准。数据与代码在 HuggingFace/GitHub 开源。时间跨度：immediate。
- **user_quote**: "commercial VLMs handle short documents well but often truncate record lists on long ones"
- **top_comments**:
  - [abs 页] 指标含 order-insensitive value F1 + 词级/页级 grounding F1——「可溯源性」被列为一等指标
- **ai_opportunity**: 长文档抽取的「完整性守卫」中间件：检测记录列表截断、逐条页级溯源、在 VLM（便宜）与 coding agent（准）之间按文档长度自动路由以压成本——基准已证明这个 quality-cost 前沿存在空档。

## 6. 论文实测 AI 陪伴产品长程「人设崩塌」：2008 场对话无一模型双达标，轨迹回忆仅 44.4%
- **type**: trend | **platform**: arxiv.org | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2607.28818
- **source_date**: 2026-07-30 | **fetched_at**: 2026-08-03
- **metrics**: 2,008 场对话 / 27 个人设 / 9 种交互日程 / 3 种记忆设置 / 4 个模型；轨迹准确率均值 ~44.4%；用户状态回忆接近四选一随机水平
- **description**: ANCHOR 审计框架分别测「人设扮演」与「轨迹回忆」。结论全面负面：没有任何模型或配置在两个维度上同时达标，记忆设置也救不回来；问卷保持度还 "disagrees with turn-level behavior" 且 "sensitive to evaluator choice"。对火热的 AI 陪伴赛道（长期关系是核心卖点）这是釜底抽薪的证据：当前技术栈撑不起「可靠的长期陪伴」。时间跨度：6-12mo。
- **user_quote**: "persona collapse — the loss of a deployed role, boundaries, values, or style"
- **top_comments**:
  - [abs 页] 作者主张审计应把 persona enactment、trajectory recall、evaluator provenance、deployment context 分开，而非合并成 "a single trust or stability score"
- **ai_opportunity**: 陪伴/角色类产品的「人设持久性监控」层：线上持续跑 identity probe + 轨迹反事实抽查，在人设漂移前告警并触发记忆修复——论文提供了现成的测量方法学，产品化空间在于把离线审计变成在线守卫。

## 7. Agent 安全基准效度审计：常被引用的安全分数排序互相矛盾，F1 被「全答正」的平凡策略击穿
- **type**: trend | **platform**: arxiv.org | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2607.28685
- **source_date**: 2026-07-30 | **fetched_at**: 2026-08-03
- **metrics**: 审计 R-Judge/InjecAgent/AgentHarm/AgentDojo 四大套件、最多 22 个模型；always-positive 平凡策略 R-Judge F1=0.690，胜过 21 个真实模型中的 5 个；「安全-能力权衡」在 n=7 时 ρ=−0.64、n=18 时坍缩为 +0.02
- **description**: 论文把 agent 安全基准当测量仪器做效度检验，发现：三大基准对同 18 个模型给出不同排序；广被引用的 safety-capability trade-off 是小样本伪象（约四分之一的随机 7 模型子集会产生 |ρ|≥0.5）。结论：任何安全声明至少应写明 "the benchmark, metric, target behavior, and model panel"。在 EU AI Act 执法开启、企业采购要求安全评估的当口，这直接质疑了现有评估报告的含金量。时间跨度：immediate。
- **user_quote**: "a trivial policy that always answers positive reaches 0.690 on R-Judge, beating five of the 21 models"
- **top_comments**:
  - [abs 页] 建议安全声明最低限度写明 "the benchmark, metric, target behavior, and model panel"
- **ai_opportunity**: 「agent 安全评估审计即服务」：为企业采购/合规出具多基准+效度检验的评估报告（控制能力混杂、报告置信区间），恰好接上 AI Act 执法后对 GPAI 模型评估文档的监管需求。

## 8. arXiv 单日 146 篇 cs.AI 中基准类论文爆发：电商/客服/文档抽取等「垂直 agent 可靠性」成为研究焦点
- **type**: trend | **platform**: arxiv.org | **secondhand**: false
- **source_url**: https://arxiv.org/list/cs.AI/recent
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 2026-08-03 当日 146 篇新提交（近一周窗口 1,214 篇）；首 50 篇中 12+ 篇为新基准（ExtractBench、MMShopBench、MerchantBench、AgentHPOBench、EarlyDx 等）
- **description**: 榜单快照显示研究热点从「造 agent」转向「测 agent」：多轮购物 agent 真实日志基准（MMShopBench）、电商运营长程一致性（MerchantBench）、企业文档抽取（ExtractBench）、agent 失败定位分类学（"Model or Harness?" 2607.28802）、agentic 系统整体验证（Beyond Component Testing, 2607.29405）、工具规格安全风险（2607.29254）。另有 "OpenClaw and Ollama in Agentic AI"（2607.28629）显示开源 agent stack 进入学术视野。学界密集为垂直场景的 agent 可靠性造标尺 = 工业界在这些场景的失败率仍是未解决痛点。时间跨度：6-12mo。
- **user_quote**: "Model or Harness? An Interaction-Centric Taxonomy for Localizing Agent Failures"（论文标题原文）
- **top_comments**:
  - [榜单] "MerchantBench: Benchmarking LLM Agents for Long-Term Coherence in E-Commerce Operations" — 长程经营一致性成为独立测量对象
  - [榜单] "Tool Specifications Matter: Uncovering and Mitigating Safety Risks in AI Agents" — 工具定义本身是攻击面
- **ai_opportunity**: 垂直 agent 的「上线前测评+失败定位」工具链：把这批学术基准封装成 CI 式回归测试（购物/电商运营/文档抽取各一套），并按 Model-or-Harness 分类学自动归因失败层——学界已把测量方法开源，缺的是工程化产品。

## 9. API 层竞争转向 agent 基建：Gemini Managed Agents 单调用开 Linux 沙箱、OpenAI 弃用 Agent Builder、缓存默认 24h
- **type**: trend | **platform**: WebSearch 综述（ai.google.dev / developers.openai.com / docs.x.ai）| **secondhand**: true
- **source_url**: https://ai.google.dev/gemini-api/docs/changelog
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: Gemini 3.6 Flash / 3.5 Flash-Lite GA；temperature/top_p/top_k 参数弃用；OpenAI prompt_cache_retention 默认改为 24h；OpenAI 弃用 reusable prompts、Evals 平台、Agent Builder；GPT-5.3-Codex 发布；xAI grok-voice-latest 2026-08-05 切换至 Voice Think Fast 2.0
- **description**: 搜索综述（各家 changelog 为一手，此处为聚合转述）：Google 在 Gemini API 推 Managed Agents——单次 API 调用即在远端 Linux 环境完成推理/规划/工具调用/代码执行；同时弃用采样参数，把控制权收进模型。OpenAI 弃用自家 Evals 与 Agent Builder（生态位让给第三方），缓存默认 24h 降低长 agent 会话成本；模型进驻 Amazon Bedrock。含义：平台方在收编 agent runtime、同时退出评测/编排工装层。时间跨度：immediate。
- **user_quote**: "a single API call to the Antigravity agent provisions a remote Linux environment for reasoning, planning, tool calling, and code execution"（Google I/O 综述转述）
- **top_comments**:
  - [OpenAI changelog 转述] reusable prompt objects、Evals 平台、Agent Builder 进入弃用时间表
  - [xAI 转述] `service_tier: "priority"` 按用付费的优先推理档上线
- **ai_opportunity**: 平台弃用潮 = 迁移与替代窗口：OpenAI Evals/Agent Builder 用户需要第三方评测与编排替代品；采样参数弃用与 Managed Agents 收编 runtime 则催生跨供应商抽象层（防锁定）。「弃用日历+自动迁移脚本」本身即产品。

## 10. Luma AI 类目达 2K 活动/89K 订阅者：线下 AI 社区以模型生态（Claude/OpenClaw）与 paper club 为组织轴
- **type**: trend | **platform**: luma.com | **secondhand**: false
- **source_url**: https://luma.com/ai
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: AI 类目 2K events / 89K subscribers；The AI Collective 自称 "200k+ pioneers across 100+ global forums"
- **description**: 类目落地页快照（无单场活动明细）：热门日历为 Air Street、Latent.Space（Paper Club / AI in Action）、OpenClaw Meetups、The AI Collective、Claude Community Events、Llama Lounge（SF）。组织轴是「围绕具体模型/工具的开发者社区」+「论文共读」+黑客松，而非泛 AI 讲座——线下需求已按技术栈分化。时间跨度：immediate。
- **user_quote**: "Join a hackathon, learn about LLMs and prompt engineering, or connect with other AI practitioners."
- **top_comments**:
  - [页面] The AI Collective: "The world's largest AI community … 200k+ pioneers across 100+ global forums"
- **ai_opportunity**: 按技术栈分化的社区意味着「特定生态的活动/招聘/项目撮合」有独立市场；对信号采集本身，OpenClaw Meetups 与 Claude Community Events 的全球化是模型生态渗透率的领先指标。

---

## 渠道故障记录
- **Google Trends explore**：`trends.google.com/trends/explore` 两次 HTTP 429（"EU AI Act compliance"、"AI agent"），trending 页仅返回 UI 框架无数据。本期无量化搜索需求验证信号。
- **lu.ma/ai**：301 到 luma.com/ai，仅类目聚合页，无单场活动名/日期/人数。
- **whitehouse.gov/presidential-actions**：首页（7/20–7/31）无 AI 相关行政令，仅导航链接 "Lead the World in AI" 与 AI.Gov。
- **WebSearch**：三次查询结果与查询词相关，未见 2026-07-28 式查询污染。
