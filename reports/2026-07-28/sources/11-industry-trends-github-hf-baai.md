# 11 — 行业趋势（GitHub Trending/Issues · HuggingFace · BAAI 智源） 2026-07-28

> 组内信号：11 条 | 二手转述：4 条（36%）

---

## 1. Agent "skills" repos dominate GitHub weekly trending
- **type**: trend | **platform**: github.com | **secondhand**: true
- **source_url**: https://github.com/trending?since=weekly
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: mattpocock/skills 191,617 stars **+12,682/wk**；bojieli/ai-agent-book 23,129 **+13,627/wk**；rohitg00/ai-engineering-from-scratch 44,313 +3,961/wk；Nutlope/hallmark 18,902 +4,758/wk；ayghri/i-have-adhd 11,533 +6,961/wk
- **description**: 周 trending 板被 agent「技能」collection 与 agent 工程教材淹没。可复用、可移植的「skills」以文件夹形式打包给 Claude Code / Cursor / Codex，是本周增长最快的 OSS 类别。（Nutlope/hallmark 是用于对抗千篇一律 AI UI 的设计技能；ayghri/i-have-adhd 强制 agent 先给答案。）
- **ai_opportunity**: 一个策展的、带版本的 agent 技能市场/注册表（含质量评分与跨 Claude Code/Cursor/Codex 的兼容标签）仍是空白领地。也可做垂直技能包（金融、法律、设计）作为付费捆绑

## 2. AI gateway / multi-provider router repos surging
- **type**: trend | **platform**: github.com | **secondhand**: false
- **source_url**: https://github.com/diegosouzapw/OmniRoute
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: **OmniRoute 32,278 stars +11,057/wk**；earendil-works/pi 79,122 +5,751/wk；kimi-code (MoonshotAI) 5,407 +1,263/wk
- **description**: 模型路由与统一 API 网关项目爆发。OmniRoute 是 MIT 许可的 AI 网关，前置 '290+ providers / 500+ models'，带配额感知回退与 token 压缩。**模式：开发者想要一个抽象了碎片化模型格局（GPT-5.x、Gemini 3.x、Grok 4.x、GLM-5.2、Kimi-K3、Qwen3.6）的单一端点，并带自动故障转移。这确认了供应商碎片化现在是主导性的基础设施痛点。**（机会 3）
- **ai_opportunity**: 在开源路由器之上叠加托管/带 SLA 的 AI 网关，配成本分析看板与按团队配额治理。**可观测性 + 支出控制的企业席位是货币化楔子**

## 3. OmniRoute issue #6364: users beg for MCP/A2A gateway to aggregate upstream MCP servers
- **type**: pain_point | **platform**: github.com | **secondhand**: false
- **source_url**: https://github.com/diegosouzapw/OmniRoute/issues/6364
- **source_date**: 2026-07-06 | **fetched_at**: 2026-07-28
- **metrics**: 2026-07-06 开启；labels backend/backlog/enhancement；页面显示 'Reactions are currently unavailable'
- **description**: 增长最快的 AI 网关仓库上互动最高的增强请求。用户无法注册 N 个外部 MCP server 并把它们的工具通过单一端点暴露出来；**唯一的出站 MCP 客户端是单一用途的（web-search）。当前变通是在 OmniRoute 旁边另跑一个聚合器（agentgateway）。** 维护者自己的 issue 集（Codex GPT-5.6 被拒为不支持 #6778、Qwen Cloud token 计划 #7854、可插拔 PostgreSQL/MySQL 持久状态后端 #8075）显示供应商集成变动与状态持久化是两个痛点簇。（机会 5 头条证据）
- **user_quote**: "the only outbound MCP client is single-purpose (the web-search provider in open-sse/handlers/search.ts); no registry of external MCP servers to fan out to"
- **top_comments**:
  - [issue #6364 body] Users currently run a separate aggregator such as agentgateway next to OmniRoute — 'None in-product for external MCP aggregation'
  - [related open issue #8075] Pluggable external durable-state DB backend, 'PostgreSQL + MySQL' (enhancement, backlog)
  - [related open issue #6778] Codex GPT-5.6 models rejected as unsupported (bug, providers, keep-open)
- **ai_opportunity**: 把 MCP 聚合/网关层做成独立产品（上游 MCP server 注册表，走 stdio/SSE/Streamable-HTTP，带命名空间、按 server 鉴权、健康检查、熔断）。**'One endpoint for all your MCP tools' 是清晰且反复出现的诉求。**

## 4. stablyai/orca (parallel coding-agent fleet): P1 asks are headless mode, WSL support, multi-repo workspaces
- **type**: pain_point | **platform**: github.com | **secondhand**: false
- **source_url**: https://github.com/stablyai/orca/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: orca 30,973 stars, +7,546/wk；12 个 top open issues 全是 enhancement；3 个标 P1；reaction 总数不可见
- **description**: Orca 是运行并行编码 agent 舰队的 agentic 开发环境。**其最高赞的开放 issue 全是功能请求，且三个是 P1**：#4280 一等的 headless/server 模式（'orca serve' 脱离桌面应用）、#5311 WSL 项目、#7568 PR-aware 多仓库工作区。反复出现的簇：多仓库工作区、语言服务器/代码智能（#961 TypeScript 'Go to References' 对具名导出返回空）、远程/无头执行。另有 #9335 'support custom OpenAI-compatible API providers' —— 与 OmniRoute 相同的供应商灵活性诉求。
- **user_quote**: "First-class headless / server mode for the Orca runtime — running the agent runtime detached from the desktop app"
- **top_comments**:
  - [issue #5311] WSL PROJECTS —— 标为 'High priority: bug or day-to-day user frustration'，Windows 用户日常撞到
  - [issue #961] LSP support —— TypeScript 'Go to References' 对具名导出返回空（具体的正确性缺口）
  - [issue #7568] Multi-repo project groups with PR-aware workspaces (P1, size/xl)
- **ai_opportunity**: 无头/CI 友好的 agent 运行时 + 多仓库编排服务不足。**能在服务端（VPS/CI）跑 agent 舰队、带 PR-aware 多仓库上下文与扎实 LSP 代码智能的产品，会捕获 Orca 用户表达的挫败**

## 5. Coding/debugging agent 'traces' datasets flood HF trending — a new training-data category
- **type**: trend | **platform**: huggingface.co | **secondhand**: false
- **source_url**: https://huggingface.co/datasets
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: Glint-Research/Fable-5-traces 57.1k dl / 672 likes（页面点赞第一）；nvidia/Open-SWE-Traces 11k dl；greghavens/fable-5-coding-and-debugging-traces **updated 12 min ago**；约 1/3 trending 页是 trace 数据集
- **description**: greghavens 发布按模型分的编码与调试 trace 数据集（kimi-k3、fable-5、glm-5.2、gpt-5.6-sol）。**信号：捕获真实 agent 执行/调试 trace 以蒸馏或微调更便宜的模型现在是标准做法，且按模型的 trace 数据集在模型发布后数小时内就刷新。**
- **ai_opportunity**: 把你自己 agent 舰队的执行 trace 捕获、清洗、许可澄清并打包成可蒸馏数据集的工具。也可做带溯源/许可保证的、经过验证与去重的 trace 语料市场

## 6. OCR-focused vision models trend hard
- **type**: trend | **platform**: huggingface.co | **secondhand**: true
- **source_url**: https://huggingface.co/baidu/Unlimited-OCR
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: baidu/Unlimited-OCR **2.65M downloads**, 3.34k likes, 3B params；ATH-MaaS/OvisOCR2 42.2k dl (0.9B)；microsoft/Fara1.5-27B 1.41k dl
- **description**: Image-Text-to-Text（VLM/OCR）是 HF trending 上两个主导类别之一。**文档理解/OCR 在边缘（sub-1B 模型）是与通用 LLM 竞赛截然不同的、清晰可货币化的能力波。**
- **ai_opportunity**: 基于小型开源 OCR VLM 的垂直文档处理 SaaS（发票、合同、表单、手写），可在设备/本地运行——吸引不能把文档发到云 API 的隐私敏感行业（医疗、法律、金融）

## 7. Uncensored/finetuned community model derivatives out-download official releases on HF
- **type**: trend | **platform**: huggingface.co | **secondhand**: true
- **source_url**: https://huggingface.co/models
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: HauhauCS Qwen3.6-35B Uncensored 1.89M dl；empero-ai Qwythos-9B 1.34M；prism-ml Bonsai-27B 2.26M；poolside Laguna-S-2.1 出现 4 个变体（base/GGUF/NVFP4/unsloth）
- **description**: 社区微调的 'uncensored' 衍生版下载量超过许多官方发布，外加密集的 GGUF/NVFP4 量化。**信号：量化 + 去审查 + 本地部署打包是一个自维持的生态，且 GGUF/NVFP4 转换在基础模型发布后一天内出现。**
- **ai_opportunity**: 「量化 + 打包 + 跑分」流水线即服务，把任何新基础模型变成开箱即用的 GGUF/NVFP4 工件并附质量回归报告。**面向想要本地无审查模型的团队的部署工具**（与机会 9 相邻）

## 8. Foundation models for finance and time-series break out: shiyu-coder/Kronos
- **type**: trend | **platform**: github.com | **secondhand**: false
- **source_url**: https://github.com/shiyu-coder/Kronos
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: Kronos 34,615 stars, +441 today, **+2,167 this week**
- **description**: 'A Foundation Model for the Language of Financial Markets' 同时进入日榜与周榜。与 BAAI 的趋势论文 'Time Series Augmented Generation for Financial Applications'（100 道金融题的基准，测试 LLM agent 的工具使用与幻觉）配对。**信号：面向金融/时序数据的领域专用基础模型正从研究走向被广泛加星的 OSS。**
- **ai_opportunity**: 基于开源金融基础模型的垂直量化/分析产品——但注意（据 BAAI 基准）幻觉与工具使用可靠性是把关问题。**面向金融 LLM agent 的严格 eval/护栏层本身就是产品**

## 9. BAAI 智源 today's hottest paper: RLVR 'learns off the principals'
- **type**: trend | **platform**: hub.baai.ac.cn | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 2025-11-11 | **fetched_at**: 2026-07-28
- **metrics**: 热度分从 428（榜首）到 52；每日午夜刷新。#3 AXIS: 207 tasks, 50k+ trajectories (2026-07-23)
- **description**: BAAI hub 今日热度最高的论文是 'The Path Not Taken: RLVR Provably Learns Off the Principals'（热度 428），从理论上解释为何 RLVR（带可验证奖励的 RL）参数更新看起来比 SFT 稀疏。#2 是面向 LLM 推理的 KL 正则化策略梯度设计（RPG）。**前沿注意力明确集中在推理模型的 RL 后训练机制。** 机器人数据引擎也在榜：AXIS（浏览器遥操作数据引擎）。
- **ai_opportunity**: 对构建者：RL 后训练工具（奖励验证、KL 正则调参、trace 收集）是学术前沿与 HF traces 数据集趋势的交汇点。面向推理任务的托管 RLVR 微调服务是可防御的细分

## 10. AI code-review tools trend on GitHub
- **type**: trend | **platform**: github.com | **secondhand**: false
- **source_url**: https://github.com/trending
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: alibaba/open-code-review 15,000 stars +979/day；**tirth8205/code-review-graph 27,038 +4,577/wk**；KnockOutEZ/wigolo local MCP search +1,478/wk
- **description**: AI 辅助代码审查是热门类别：alibaba/open-code-review（确定性流水线 + LLM agent，行级评论，针对 NPE、线程安全、XSS、SQL 注入的调优规则集，'OpenAI & Anthropic compatible'）；tirth8205/code-review-graph（本地优先代码库图，供 MCP/CLI 使用，削减 AI 工具必须读取的上下文量）。**上下文削减角度（给 agent 喂代码库图而非原始文件）作为降低 token 成本并提升准确性的手段反复出现。**
- **ai_opportunity**: 代码库图即上下文的基础设施是可复用原语：把它作为任何编码 agent 都能接入以削减上下文/token 用量的 MCP server 出售。带安全规则包（合规级）的垂直代码审查产品可货币化 alibaba 模式

## 11. Self-hosted 'open alternative to X' tools trend
- **type**: trend | **platform**: github.com | **secondhand**: true
- **source_url**: https://github.com/trending?since=weekly
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: open-seo 8,725 stars +3,015/wk；Instatic 6,264 +2,523/wk；openship 9,017 +4,911/wk
- **description**: 一簇商业 SaaS 的自托管开源克隆在周榜趋势：every-app/open-seo（开源 Semrush/Ahrefs）、CoreBunch/Instatic（agentic 可视化 CMS，输出干净静态页，对标 Webflow/WordPress）、oblien/openship（自托管部署平台）。**信号：'own your stack, self-host the SaaS you rent' 是一场活跃的运动，且越来越 AI 增强（agentic CMS）。**
- **ai_opportunity**: 在这些开源克隆之上做托管+支持档（经典 open-core 玩法）。或做把用户从 Webflow/Semrush 迁到自托管替代品的 AI 迁移工具——降低切换成本是楔子
