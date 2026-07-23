# 11 — frontier-research-regulatory-quantitative-2026-07-23（arXiv / EU / CAC / 模型发布）

> 信号数：14 · 二手：5/14

## 1. EU AI Act Article 50 Transparency Obligations Take Effect August 2, 2026
- 类型：trend · 二手：否
- 来源：https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems · source_date: 2026-07-20 · fetched: 2026-07-23
- 描述：史上最大单一 AI 合规节点：chatbot 须告知用户在与 AI 交互；合成内容须嵌机器可读溯源标记；情绪识别/生物特征分类/深伪须披露。EC 7/20 发布正式指南；Digital Omnibus 仅将存量系统合成内容标记延至 12/2；截至 4 月 78% 组织未采取实质合规步骤；罚款上限全球营收 7%（超 GDPR）。

## 2. JANUS: Proactive Long-Horizon Agent Safety Framework Shows 15.9pp Improvement
- 类型：product_market · 二手：否
- 来源：https://arxiv.org/abs/2607.19913 · source_date: 2026-07-22 · fetched: 2026-07-23
- 描述：JANUS + 守卫模型 Vanguard：在有害动作执行前通过部分轨迹检测潜在安全风险（预判任务 + CoAA-RL 裁决任务耦合）；4 个 Agent 安全基准上平均防护 +15.9pp 且良性任务完成 +5.1pp——安全提升不阻塞正常工作。现有护栏逐条评判 prompt-response、漏掉多步复合风险。

## 3. FORCE-Bench: Agentic AI Benchmark for Enterprise Finance Exposes General-Purpose Agent Gaps
- 类型：pain_point · 二手：否
- 来源：https://arxiv.org/abs/2607.19409 · source_date: 2026-07-11 · fetched: 2026-07-23
- 描述：Microsoft 研究者：251 条专家标注运营财务查询、8 评估维度——真实部署条件下通用 Agent 系统性达不到运营财务质量要求；领域专用 Finance Agent 全维度跑赢；基准/rubric/评估工具开源。

## 4. Stateful Guardrails for Multi-Turn LLM Systems: CRA Framework
- 类型：product_market · 二手：否
- 来源：https://arxiv.org/abs/2607.19361 · source_date: 2026-06-03 · fetched: 2026-07-23
- 描述：现有护栏逐轮独立评估，漏掉渐进意图漂移、分片拼装违禁指令、敏感度累积三类复合失败。CRA 框架跨会话追踪语义漂移/敏感度加权信息累积图/顺从梯度；发布 CRA-Bench v0.1（1,200 个 8 轮会话）与 2,000 会话扩展集（含 persona priming/context stuffing 攻击族）。

## 5. EU DMA Binding Specs Require Google AI Interoperability on Android
- 类型：trend · 二手：否
- 来源：https://digital-strategy.ec.europa.eu/en/news/commission-provides-guidance-google-ai-interoperability-android-and-sharing-google-search-data · source_date: 2026-07-16 · fetched: 2026-07-23
- 描述：EC 7/16 对 Google 发出两项 DMA 约束性规范措施：Android AI 功能向第三方开放互操作 + 共享搜索排名信号——首次动用 DMA 规范权强制 AI 互操作；违规罚款上限全球营收 10%（累犯 20%）。

## 6. China CAC Launches Global AI Agent Interoperability Initiative at WAIC 2026
- 类型：trend · 二手：否
- 来源：https://www.cac.gov.cn/2026-07/17/c_1786032877362241.htm · source_date: 2026-07-17 · fetched: 2026-07-23
- 描述：CAC 于 WAIC 发布《AI 智能体互信互联互通全球合作倡议》：Agent 身份/标识、互联协议、语义层兼容、全生命周期安全治理开放国际标准；明确警告专有平台技术壁垒与生态碎片化。同日公布第 18 批深度合成算法备案；清朗 AI 一期 7/6 收官。

## 7. GPT-5.6 Family Launch: Multi-Agent Orchestration API and First ARC-AGI-3 Win
- 类型：trend · 二手：**是（二手转述，未经一手核实）**
- 来源：https://radicaldatascience.wordpress.com/2026/07/17/ai-news-briefs-bulletin-board-for-july-2026/ · source_date: 2026-07-17 · fetched: 2026-07-23
- 描述：GPT-5.6（Sol/Terra/Luna）7/9 全面开放：编程式工具调用、多 Agent 编排、prompt cache breakpoints、全档 1M 上下文；Luna ~$0.10/M、Sol $5.00/M；Sol 首个赢下 ARC-AGI-3 公开赛；Sol Ultra 用 64 并行子 Agent 1 小时内给出 Cycle Double Cover 猜想证明（Lean 形式化、未同行评审）。

## 8. Kimi K3: 2.8T Parameter Open-Weight Model with 76% Frontend Code Arena Win Rate
- 类型：trend · 二手：**是（二手转述，未经一手核实）**
- 来源：https://radicaldatascience.wordpress.com/2026/07/17/ai-news-briefs-bulletin-board-for-july-2026/ · source_date: 2026-07-17 · fetched: 2026-07-23
- 描述：Moonshot 7/17 公布 K3（权重 7/27）：2.8T 参数、896 专家取 16、1M 上下文、Kimi Delta Attention 解码快 6.3x；宣称编码/Agent 基准超 Claude Opus 4.8 与 GPT-5.5；Frontend Code Arena #1（胜率 76%）——最大开源权重模型，合规/IP 受限企业可自托管近前沿编码能力。

## 9. Gemini 3.6 Flash: 17% Token Reduction; Flash Cyber for Governments Only
- 类型：trend · 二手：**是（二手转述，未经一手核实）**
- 来源：https://radicaldatascience.wordpress.com/2026/07/17/ai-news-briefs-bulletin-board-for-july-2026/ · source_date: 2026-07-21 · fetched: 2026-07-23
- 描述：Google DeepMind 7/21 三连发：Gemini 3.6 Flash 同质量省至多 17% token；3.5 Flash-Lite 超低成本档；3.5 Flash Cyber 仅向政府/受信伙伴开放（大厂首个明确限政府用途的模型）；均 1M 上下文。

## 10. Bonsai 27B: 1-Bit Quantized Model at 3.9GB with 90% Performance Retention
- 类型：trend · 二手：否
- 来源：https://github.com/PrismML-Eng/Bonsai-demo · source_date: 2026-07-15 · fetched: 2026-07-23
- 描述：PrismML 7/15 发布：27B 压到 3.9GB（1-bit 保 90%）/5.9GB（三值保 95%），Apache 2.0，~7x 压缩——27B 级模型可在 8GB GPU 甚至 CPU 笔记本上跑，端侧/离线 AI 部署成本与 IP 两大障碍同时移除。

## 11. DebunkBot: AI Chatbot Cuts Conspiracy Theory Belief by ~20%
- 类型：product_market · 二手：**是（二手转述，未经一手核实）**
- 来源：https://www.science.org/content/article/ai-chatbot-shows-promise-talking-people-out-of-conspiracy-theories · source_date: 2026-07-14 · fetched: 2026-07-23
- 描述：MIT/Cornell/AU 发表于 Science：LLM 聊天单次对话使阴谋论信念置信度降 ~20%、~25% 用户完全放弃——机制是针对个体论证的个性化反驳而非通用事实核查；首批有同行评审效应量的 AI 信念改变实证。

## 12. Google Gemini Managed Agents API: Single-Call Agent Spawning with Persistent Sandboxes
- 类型：product_market · 二手：否
- 来源：https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/ · source_date: 2026-05-19 · fetched: 2026-07-23
- 描述：I/O 2026 发布、7 月陆续开放：单 API 调用启动完整 Agent（推理/工具/代码执行），隔离 Linux 环境持久状态可跨调用恢复；markdown 自定义 Agent；$100/月 AI Ultra 5x Antigravity 限额——Agent 基础设施托管化降低产品团队 DevOps 负担。

## 13. Claude Sonnet 5 Launch: 63.2% Agentic Coding Benchmark at 40% of Opus Price
- 类型：trend · 二手：**是（二手转述，未经一手核实）**
- 来源：https://radicaldatascience.wordpress.com/2026/07/17/ai-news-briefs-bulletin-board-for-july-2026/ · source_date: 2026-07-17 · fetched: 2026-07-23
- 描述：7/1 发布：agentic coding 63.2%（Opus 4.8 为 69.2%）、1M 上下文/128K 输出、$2/$10 每百万 token（约 Opus 4.8 四折）；另有 J-space 全局工作区研究、开源 J-lens、309,815 对话价值观研究。

## 14. CAC Qinglang AI Cleanup Campaign Phase 1 Completes; Labeling Enforcement Ramps Up
- 类型：trend · 二手：否
- 来源：https://www.cac.gov.cn/ · source_date: 2026-07-06 · fetched: 2026-07-23
- 描述：清朗 AI 专项一期 7/6 收官（上海 7/8 并行）：整治标注不当、误导性 AI 输出、不合规深度合成；7/10 处罚短视频标注违规平台与账号；7/17 公布第 18 批算法备案——AIGC 标注执法实质化，合规标注/备案管理工具窗口。
