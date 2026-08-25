# 19 — 热点深挖: Nvidia 双线：拟 300 亿美元估值投资 Perplexity + 「harness 比模型更重要」研究 2026-08-25

> 组内信号：9 条 | 二手转述：3 条（33%）
> 最强证据线：Nvidia 官方博客（8/21）+ TechCrunch 具名采访 + HN 39 评论热帖三角互证「harness > 模型」论断；Perplexity $750M ARR 与 $30B 估值来自 The Information / Sacra 转述（未经审计，且存在与微软 $750M 采购承诺混同的争议）。渠道状况：本次 5 次 WebSearch 均返回高相关结果，搜索渠道正常；x.com 单推文（pbshgthm）402 拦截、arc-skill.vercel.app 连接被拒，该信号仅存 HN 元数据。

---

## 1. Nvidia AVO：同一个 Opus 5，裸模型 30% → 加 harness 100%（ARC-AGI-3 公开集）
- **type**: trend | **platform**: NVIDIA Developer Blog | **secondhand**: false
- **source_url**: https://developer.nvidia.com/blog/nvidia-avo-reaches-100-on-arc-agi-3-demonstrating-a-frontier-level-general-purpose-architecture-for-long-horizon-autonomous-agents/
- **source_date**: 2026-08-21 | **fetched_at**: 2026-08-25
- **metrics**: ARC-AGI-3 公开集 25 环境 183 关全解，100.00 RHAE，6,624 次环境动作（对比 VISTA 7,542 次，少约 12%）；裸 Opus 5 高推理档约 30%（ARC Prize 数据，且已是全模型最高）；GPU kernel 场景：DGX B200 连续自主运行 7 天，探索 500+ 优化方向，提交 40 个 kernel 版本，最高超 cuDNN 3.5%、超 FlashAttention-4 10.5%
- **description**: Nvidia 8/21 发布 AVO（Agentic Variation Operators，arXiv 2603.24517）结果：同一个 Claude Opus 5，裸调用 30%，套上 AVO harness 后公开集 100%。模型完全未动，变的只有 harness。两大关键组件：持久记忆（跨任务全程携带既往实现、测试结果、profiler 输出与累积推理）和 supervisor agent（监测轨迹停滞/死胡同并把主 agent 拨回正轨）。同一套核心 agent 循环从 GPU kernel 优化直接迁移到交互推理游戏，只换了工具与评估接口。Nvidia 自己也声明 VISTA 对比非受控消融、30% 基线不是 AVO 贡献的干净度量；100% 仅为公开集，半私有/私有集未解。
- **user_quote**: "The model matters, but the model is not the entire agent." / "The domain changes. The feedback channel changes. The core agent loop does not." / "evaluating a model is not the same as evaluating an agent"（博客原文表述）
- **top_comments**: （见信号 3 的 HN 讨论）
- **ai_opportunity**: 直接验证 harness 层是当前最大杠杆：持久记忆管理、supervisor/监工 agent、跨域可迁移的通用 agent 循环，都是独立开发者无需训练模型即可切入的组件级产品方向。

## 2. TechCrunch 具名报道：「harness 才是主角」+ Databricks「选错 harness 成本翻倍」
- **type**: trend | **platform**: TechCrunch | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/
- **source_date**: 2026-08-21 | **fetched_at**: 2026-08-25
- **metrics**: Opus 5 + Nvidia harness = 100%，裸模型 30%；OpenAI 模型在 ARC-AGI-3 上不足 10%，仅调两个 harness 设置即提升 3 倍；微软 4 月研究：19 个 LLM 做长程文档编辑全部输出错误；Databricks 7 月研究：选错 harness 可使 agent 成本翻倍
- **description**: Julie Bort 对 Nvidia AI 产品 VP Adel El Hallak 的具名采访，把学术结果翻译成产业结论：agent = 模型 + harness（工具、记忆管理、运行时、skills），harness 是主导变量。文章指出当前多数用户只跑单层 harness（Claude Code、Codex、Hermes），multi-layer supervisor 架构仍是空白。Nvidia 战略：AVO 是研究不是产品，以 Nemo 品牌出模块化开放组件——即 Nvidia 有意做开放 harness 生态而非闭环产品，给第三方留出空间。Databricks CEO Ali Ghodsi 提供付费意愿侧证据：harness 选择直接决定企业 agent 成本。
- **user_quote**: "It is the model. It is the scaffolding around the model, which we call the harness" — Adel El Hallak；supervisor "almost acts like a CEO to nudge the agent when it goes off direction"；"We believe, and we're demonstrating with the ecosystem, how open harnesses allow you to turn a lot more knobs"
- **top_comments**:
  - [Databricks CEO Ali Ghodsi，文中引述] "You can pick the same model but different harnesses, and you get significantly more cost if you use the wrong harness… That itself can 2x your cost."
- **ai_opportunity**: 「harness 成本优化」本身即产品：帮企业在同一模型下对比/调优 harness 配置、省下 2 倍成本，是可量化 ROI 的付费场景；supervisor-agent 中间件是尚无主流产品的空白层。

## 3. HN 热帖（70 分 / 39 评论）：社区争论「harness 算不算作弊」，暴露评测与命名混乱
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49387755
- **source_date**: 2026-08-21 | **fetched_at**: 2026-08-25
- **metrics**: 70 points，39 comments；另一 HN 帖（博客直链）13 分 2 评论（id 49388268）
- **description**: HN 社区对 AVO 结果的争论集中在三点：(1) ARC-AGI-3 本意是否为排除 harness 的裸模型评测——通用 harness 与针对性 harness 的边界该怎么划；(2) 结果只覆盖公开集，官方 leaderboard 已验证最高分仅 40%，存在过拟合公开集的风险；(3) Nvidia 未公布端到端耗时，只讲「少 12% 动作」，被质疑刻意回避成本维度。AVO 论文作者（前 Nvidia 员工）现身回帖，透露同类进化 harness 已自举生成整个推理栈、在多任务上超过 SGLang/vLLM。社区还自发讨论「哪些 harness 该被允许同台竞赛」——评测标准本身成了未被满足的需求。
- **user_quote**: "I thought ARC-AGI-3 was explicitly a test of raw model performance excluding the harness? Adding the harness back in doesn't tell us anything new." — woeirua
- **top_comments**:
  - [HN dist-epoch] "The intent in forbidding harnesses was to prevent an ARC-AGI specific harness… What NVIDIA has here is a generic 'evolution' harness, which can be used for any problem. I think it would be fair game to allow OpenClaw, Hermes, Codex, Grok Bot, this NVIDIA thing, to compete, as long as they don't have ARC-AGI specific skills, toolset."
  - [HN embedding-shape] "None of the tweets, nor the press release, seems to mention how long time it actually took E2E to complete the evaluation… Feels a bit suspicious they don't break down the timing involved"
  - [HN antinucleon（AVO 论文作者，前 Nvidia）] "This work was done half a year ago for GPU kernels, and the same approach has now been applied to ARC-AGI-3… recently we made a self-improving evolution harness that generated an entire inference stack and is better than SGLang/vLLM on various tasks"
  - [HN r0ze-at-hn] "These days calling to a server like openai or anthropic effectively results in a server side harness wrapping the weights."
- **ai_opportunity**: 「agent 评测」与「模型评测」分家是新需求：harness 感知的 benchmark、E2E 成本/耗时透明化工具、harness 对比评测服务，社区已在主动索要。

## 4. 独立开发者先声：Claude Code + Opus 5 + 一个 skill 也打出 100% RHAE（Nvidia 发布前两天）
- **type**: product_market | **platform**: Hacker News / X | **secondhand**: true
- **source_url**: https://news.ycombinator.com/item?id=49377443
- **source_date**: 2026-08-20 | **fetched_at**: 2026-08-25
- **metrics**: HN 帖 10 分（"Arc AGI-3 100% solved with a skill"，指向 x.com/pbshgthm）；另一帖 "100% RHAE on ARC-AGI-3 public with Claude Code, Opus 5, and one skill"（arc-skill.vercel.app，2026-08-19）
- **description**: 在 Nvidia 8/21 发布前两天，个人开发者（X 用户 pbshgthm）声称仅用现成 Claude Code harness + Opus 5 + 一个自定义 skill 就在 ARC-AGI-3 公开集打出 100% RHAE。若属实，说明达成同等结果不需要 Nvidia 级研究团队——一个 skill 文件就够。注意：原推文被 x.com 402 拦截、arc-skill.vercel.app 连接被拒，未能读取一手内容核实，故标 secondhand，仅存 HN 元数据。
- **user_quote**: （无法获取原文，来源页被拦截）
- **top_comments**: （HN 两帖均 0 评论）
- **ai_opportunity**: 对独立开发者是最强平权信号：现成 harness（Claude Code）+ skill 层薄创新即可对标大厂研究结果；「skill 市场/skill 工程」可能是比自建 harness 更轻的切入点。

## 5. Nvidia 拟以 $30B+ 估值入股 Perplexity，先谈 licensing 后转股权
- **type**: trend | **platform**: The Information（转述） | **secondhand**: true
- **source_url**: https://www.theinformation.com/articles/nvidia-discusses-perplexity-investment-30-billion-plus-valuation-considered-tech-licensing-deal
- **source_date**: 2026-08-23 | **fetched_at**: 2026-08-25
- **metrics**: 估值 $30B+（2025 年 9 月为 $20B，约 12 个月 +50%）；轮次规模数十亿美元；Nvidia 曾考虑数十亿美元 licensing 交易后转向股权；先例：Poolside——$6B licensing + $1B 投资（$12B pre-money，2026-08）、Groq（2025-12）
- **description**: The Information 8/23 报道（付费墙，经 Reuters/Yahoo/Benzinga 等多方转述核实要点一致）：Nvidia 在洽谈以 $30B+ 估值参与 Perplexity 新一轮融资。关键战略细节：Nvidia 原本考虑的是「licensing Perplexity 技术用于自研模型与软件」，后转向股权——与 Poolside、Groq 的 licensing+投资组合拳同一剧本，说明 Nvidia 正系统性收购/绑定应用层与 agent 层能力而非只卖芯片。Perplexity 7 月已承诺 agent 工作负载跑在 Nvidia Vera CPU 上。双方均拒绝置评，交易未完成。Perplexity 计划 2028 IPO（Srinivas 6 月 CNBC 访谈）。
- **user_quote**: （付费墙，无法引用原文）
- **top_comments**: 无
- **ai_opportunity**: 芯片巨头以数十亿美元定价「agent 应用层」的稀缺性，验证应用层估值逻辑；Nvidia 的 licensing+equity 模式意味着有独特 harness/agent 技术的小团队多了一类退出路径（技术授权给巨头）。

## 6. Perplexity ARR 从年初 <$250M 涨到 $750M：agent 产品 + 按量计费是增长引擎
- **type**: product_market | **platform**: Sacra | **secondhand**: true
- **source_url**: https://sacra.com/c/perplexity/
- **source_date**: 2026-08 | **fetched_at**: 2026-08-25
- **metrics**: ARR：2025 年底 $232M → 2026-03 破 $450M（单月 +50%，FT 数据）→ 2026-08 $750M（Sacra 估计）；100M+ MAU + 数万企业客户；定价阶梯 Free / Pro $20 / Max $200 / Enterprise $40 每席位；Perplexity Computer（2026-02 上线）：并行调用最多 19 个模型，Max 用户每月 10,000 credits + 一次性 20,000 launch bonus；2026-02 全面放弃广告，次月收入 +50%；累计融资约 $1.5B
- **description**: Perplexity 年内 ARR 三倍多，增长主引擎是 2026 年 2 月上线的 Perplexity Computer（云端 agent，自动化专业用户的电脑任务）叠加在订阅之上的按量计费 credits。商业模式路线清晰：放弃广告 → 纯订阅 + agent 用量计费 + 企业席位 + 场景化商务。注意两个 $750M 的混淆：另有 1 月与微软签的三年 $750M Azure Foundry 采购承诺（成本项），部分快讯把两者搞混；且全部数字为 Sacra/The Information/FT 估计，非审计披露——一份分析甚至认为 $750M ARR 本身就是与微软承诺的混同，应视为未确认。
- **user_quote**: 放弃广告的理由：担心广告 "would hurt user trust in AI"（Sacra 页转述）
- **top_comments**: 无
- **ai_opportunity**: 「订阅打底 + agent 用量 credits 溢价」被 $750M ARR 验证为 AI 产品最有效的变现结构；agent 自动化专业工作流（而非聊天）是付费意愿最高的场景，独立产品可直接复用该定价结构。

## 7. Addy Osmani《Agent Harness Engineering》：harness 工程成独立学科，开放问题清单即创业地图
- **type**: trend | **platform**: 个人技术博客（addyosmani.com） | **secondhand**: false
- **source_url**: https://addyosmani.com/blog/agent-harness-engineering/
- **source_date**: 2026-04-19 | **fetched_at**: 2026-08-25
- **metrics**: Terminal Bench 2.0 上同一模型跨 harness 分数差异显著；Viv Trivedy 团队只改 harness 就把编码 agent 从约 Top 30 提到 Top 5；HumanLayer 的 AGENTS.md 保持在 60 行以内；「10 个聚焦工具胜过 50 个重叠工具」
- **description**: 被 8 月 harness 热潮反复引用的奠基文（Viv Trivedy 造词 "harness engineering"）。核心论点：agent 失败多为配置失败而非模型权重失败，可在 harness 层诊断修复。三大开放问题＝创业地图：(1) 多 agent 并行操作同一代码库的编排；(2) agent 自析执行 trace、自动修复 harness 级故障；(3) 按任务即时组装工具与上下文的动态 harness（「更像编译器而非静态配置」）。可产品化组件清单：状态/记忆管理（compaction、会话持久化）、上下文注入、沙箱与权限门、可观测性与成本计量。同时给出两大风险：头部编码 agent 的 harness 模式正在趋同（generic harness 商品化）；模型与特定 harness 耦合后训练造成锁定。「HaaS（Harness-as-a-Service）」：从 completion API 转向 runtime API（Claude Agent SDK、Codex SDK）建产品。
- **user_quote**: "Agent = Model + Harness. If you're not the model, you're the harness." — Viv Trivedy（文中引述）
- **top_comments**:
  - [文中引述 HumanLayer] "it's not a model problem. It's a configuration problem."
  - [文中引述 Anthropic] "every component in a harness encodes an assumption about what the model can't do on its own."
- **ai_opportunity**: 三个开放问题（多 agent 共库编排、trace 自诊断、just-in-time 工具组装）是明确的未解产品空位；「ratchet 原则」（harness 无法下载、由自家失败史塑形）暗示垂直领域 harness 咨询/定制也有生意。

## 8. OpenAI《Harness engineering》：Codex 早期进展慢不是模型不行，是环境欠规约
- **type**: trend | **platform**: OpenAI 官方博客 | **secondhand**: false
- **source_url**: https://openai.com/index/harness-engineering/
- **source_date**: （页面未取到明确日期，2026 年内） | **fetched_at**: 2026-08-25
- **metrics**: 无具体数字（定性一手实践记录）
- **description**: OpenAI 官方复盘 agent-first 开发 Codex 的经验：早期进展低于预期的原因不是 Codex 能力不足，而是环境欠规约——agent 缺少所需的工具、抽象与内部结构，团队的主要工作变成「让 agent 能干活」。与 Nvidia AVO 结论同向的第二家一线厂商一手证词：瓶颈在 harness/环境层。注意厂商自述的立场偏差（为自家 SDK 生态背书）。
- **user_quote**: 早期进展慢 "not because Codex was incapable, but because the environment was underspecified"（搜索摘要转述原文表述）
- **top_comments**: 无
- **ai_opportunity**: 「环境规约」（environment specification）是被两大厂同时点名的瓶颈：为 agent 准备仓库/工具/文档结构的 lint 类产品（agent-readiness 审计）尚无标准品。

## 9. 中文生态共识：脚手架「上层不死、适配层必死」——试验率 62% vs 投产率 11% 的落差即机会窗
- **type**: pain_point | **platform**: 掘金/知乎（中文技术社区综述） | **secondhand**: true
- **source_url**: https://juejin.cn/post/7664869898594631718
- **source_date**: 2026（年内发布，具体日期未取到） | **fetched_at**: 2026-08-25
- **metrics**: 该文按 5 层架构梳理国内外 60+ 框架/产品；Gartner：2026 年底 40% 企业应用将内置任务型 agent（2025 年 <5%）；McKinsey State of AI 2025：62% 组织在试验 agent、23% 至少一环节规模化；Deloitte 2025：仅 11% 在生产环境实际使用 agentic 系统
- **description**: 中文社区对 agent 编排赛道的全景判断与英文侧互补：「造一个 Agent 已不是壁垒，大规模、可靠、省钱地跑起来才是」。典型生产链路是跨层组合（CrewAI L3 → Temporal L2 持久化 → e2b L1 沙箱）。关键反向观点：给模型短板打补丁的适配层脚手架（格式修复、提示词改写、JSON 容错）会被下一代模型内化吃掉，历史已多次验证；不会被内化的是可靠性/可观测性/持久化/崩溃重放层。低代码可视化编排（Dify/Coze/Langflow）公认痛点是可维护性弱——工作流调试需逐节点分析变量引用，比改代码更难定位。62% 试验 vs 11% 投产的落差被明确指为工程化工具的机会窗口。数字均为综述转引，标 secondhand。
- **user_quote**: "造一个 Agent 已经不是壁垒"（掘金文标题原文）
- **top_comments**:
  - [知乎/掘金综述观点] 工作流可维护性痛点："工作流不易维护，需深入分析节点引用的变量与属性，相较改代码更难定位问题"
- **ai_opportunity**: 避开会被模型内化的适配层，押注不可内化层：agent 持久化/崩溃重放、AgentOps 可观测性、可视化工作流的调试与可维护性工具（当前公认短板、尚无好解）。
