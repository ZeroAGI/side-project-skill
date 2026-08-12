# 20 — 热点深挖: 2026 Google 开发者大会 AI 专场（8/12 正在进行） 2026-08-12

> 组内信号：10 条 | 二手转述：4 条（40%）
> 最强证据线：官方议程页确认今日 AI 专场三条主线（生产级 Agent 全栈底座+安全沙箱、Gemini Enterprise Agent Platform 协议栈、VLA/ODML 端侧物理 AI），叠加 Google Cloud 官方博客 + GitHub 一手社区反弹（Gemini CLI 关源迁移 296 👎）。渠道故障：zhihu.com 与 kenhuangus.substack.com 403/连接拒绝；news.ycombinator.com 直连 ECONNREFUSED（转用 GitHub 一手讨论帖补齐用户原声）；官方议程页 WebFetch 只返回标题（JS 渲染），议程内容经搜索索引摘要确认，标记 secondhand。

---

## 1. 今日议程：Google Cloud 生产级 Agent 全栈底座（Scale/Harness/Runtime + 安全沙箱 + 百度 Medo 实战）
- **type**: trend | **platform**: Google 官方议程页（经搜索索引转述） | **secondhand**: true
- **source_url**: https://ioconnectchina.googlecnapps.cn/sessions/
- **source_date**: 2026-08-12 | **fetched_at**: 2026-08-12
- **metrics**: 万级并发动态调度；8/12 AI 专场议程
- **description**: 今日上海 Google 开发者大会 AI 专场核心场次：从 Scale、Harness、Runtime 三维度拆解 Google Cloud 生产级 Agent 全栈底座，覆盖多智能体编排、合规护栏建设、支撑「万级并发的动态调度、多端场景适配」的 Runtime 架构，以及「防范新型威胁的安全沙箱」；并独家解析百度 Medo 如何让非技术用户通过对话快速生成应用与游戏。注意：议程页为 JS 渲染，WebFetch 仅返回标题，内容经搜索索引摘要确认，故标 secondhand。这印证「生产级 agent 编排+护栏+沙箱」已成为云厂商对客户售卖的一级叙事。
- **user_quote**: "从 Scale、Harness 与 Runtime 三大维度拆解 Google Cloud 生产级 Agent 全栈底座……如何实现支撑万级并发的动态调度、多端场景适配，并构建防范新型威胁的安全沙箱"（议程描述，经搜索索引转述）
- **top_comments**: 无（议程页无评论区）
- **ai_opportunity**: Google 把「安全沙箱+护栏」当卖点而非默认，说明中小团队在非 GCP 栈上的同等能力仍是空白：跨云的轻量 agent runtime 护栏层（策略即代码、并发调度、沙箱逃逸检测）可做独立产品；百度 Medo 式「对话生成应用」的垂直行业版也是明确模板。

## 2. Managed Agents API：一次 POST 拉起带临时沙箱的 agent-as-a-service（治理集成仍是 coming soon）
- **type**: product_market | **platform**: Google Cloud 官方博客 | **secondhand**: false
- **source_url**: https://cloud.google.com/blog/topics/developers-practitioners/io26-news-for-agent-developers-on-google-cloud
- **source_date**: 2026-05-20 | **fetched_at**: 2026-08-12
- **metrics**: 四层 rung 架构；ADK 语言覆盖 4 种（Python/Go/Java/Kotlin Beta）；Starter Tier 免绑卡 + 前 2 次应用部署免费；Skill Registry 公测
- **description**: 今日大会内容的上游底本。Google 官方定义的 agent 开发四层阶梯（Agent Studio → Managed Agents API → Antigravity → ADK 2.0），全部跑在 A2A 协议层上。Managed Agents 为「配置优先」的 agent 即服务：打包 instructions/skills/tools POST 上去，Gemini 负责构建运行，每个 agent 有独立临时沙箱（预置 skills、MCP server、服务端工具）。关键缺口：官方原文承认 Managed Agents 与 A2A 及 Agent Platform 治理/安全的完整集成「coming soon」，CodeMender 未发布。
- **user_quote**: "What makes this deployable is the Google Cloud sandbox, which is secure by design. The agent harness runs on our servers, and each agent has its own ephemeral sandbox... Full integration with A2A and Agent Platform governance and security are coming soon."
- **top_comments**:
  - [同文] "It allows you to define agentic behavior and let Google Cloud handle the heavy lifting, acting as an agent-as-a-service with nothing to manage."
  - [同文] "The graph model is worth the learning curve as soon as you have more than two branching paths."（何时从 Managed Agents 迁到 ADK 的官方判据）
  - [同文] "Pick the rung that fits the project... the data stays inside your Cloud project the whole time."
- **ai_opportunity**: 官方自曝的「coming soon」缝隙就是窗口期：Managed Agents 的治理/审计/跨沙箱策略一致性检查工具；AGENTS.md/SKILL.md 定义文件的 lint、测试与版本回归工具；跨 rung 迁移器（Studio 配置→ADK 代码生成）。

## 3. Managed Agents 7 月治理更新：hooks 默认放行（fail-open）、预算是软上限、出网默认全开——第三方护栏的市场地图
- **type**: pain_point | **platform**: 行业分析博客（转述 Google 官方文档） | **secondhand**: true
- **source_url**: https://www.theainavigator.com/blog/google-s-gemini-managed-agents-just-got-more-governable.amp
- **source_date**: 2026-07-29 | **fetched_at**: 2026-08-12
- **metrics**: 单次 interaction 100K–300 万 token（复杂任务 300–500 万）；沙箱默认 7 天过期；预览期环境算力不计费；MIT NANDA：~95% 组织未见可测 P&L 影响
- **description**: 7/28 Google 给 Managed Agents 加了 5 项治理控制（environment hooks、max_total_tokens 预算、定时触发、免费层、Environments API），默认模型换 Gemini 3.6 Flash。但文章逐条点出安全缺口：hooks 是「运维护栏而非完整安全边界」——无效 hook 响应默认放行（fail-open）；hooks 不覆盖外部 MCP 工具与自定义函数；预算非严格美元上限（缓存 token 不计、步间检查可超支）；沙箱默认「无限制出站网络」，白名单是可选项；无原生人工审批。等于 Google 亲手画出了第三方 agent 安全厂商的需求清单。
- **user_quote**: "Google's documentation says invalid hook responses default to allow"
- **top_comments**:
  - [同文] hooks 是 "operational guardrails, not a complete security boundary"
  - [同文] 沙箱预设 "unrestricted outbound network access"，allowlisting 为 opt-in
  - [同文] "Hooks do not create a built-in human approval system on their own"
- **ai_opportunity**: 直接可做的独立产品位：fail-closed 策略代理（挂在 hook 的外部 HTTP 端点上，Google 明留的集成点）；MCP/自定义函数覆盖的统一拦截层；严格花费熔断器（硬性美元上限）；默认拒绝的 agent 出网防火墙；agent 人工审批工作流 SaaS。与本周 agent 安全危机叙事完全同频。

## 4. GKE Agent Sandbox：gVisor 内核级隔离、300 沙箱/秒、三大云唯一原生 agent 沙箱（且开源）
- **type**: product_market | **platform**: InfoQ | **secondhand**: false
- **source_url**: https://www.infoq.com/news/2026/05/gke-agent-sandbox-hypercluster/
- **source_date**: 2026-05-07 | **fetched_at**: 2026-08-12
- **metrics**: 300 sandboxes/秒、亚秒级冷启动（warm pool）；Axion 上价格性能高 30%；Lovable 日均 20 万+ AI 生成项目跑在其上；Hypercluster 单控制面 100 万芯片/25.6 万节点（private GA）
- **description**: 今日大会「安全沙箱」议题的技术底座。GKE Agent Sandbox 用 gVisor（与 Gemini 同源）做内核级隔离，作为 Kubernetes SIG Apps 子项目开源——任何 K8s 集群可跑，非 GKE 独占。三个新原语：Sandbox / SandboxTemplate / SandboxClaim（可从 ADK 或 LangChain 调用）。Google Cloud Ambassador Alex Gkiouros 指出这是三大云中唯一原生 agent 沙箱，对手是 Cloudflare Sandboxes 与 E2B 的 Firecracker microVM。
- **user_quote**: "Google's sandboxing lets them reliably scale to hundreds of secure sandboxes per second."（Lovable 联合创始人 Fabian Hedin）
- **top_comments**:
  - [InfoQ 引述分析师 Alex Gkiouros] 百万芯片跨区控制面听起来诱人 "until you think through blast radius and change management"，"Private GA is the right place for it."
- **ai_opportunity**: 沙箱基建正在商品化（开源+三家竞争），独立开发者的机会上移一层：沙箱编排上的策略/取证/成本可观测产品；SandboxTemplate 安全蓝图市场（合规行业模板包）；E2B 式 API 层但聚焦 agent 专属场景（浏览器、支付、桌面）的差异化仍有缝。

## 5. 大公司「护栏化」转向的量化背景：71% 说在用 agent、仅 11% 进生产、35% 高管承认关不掉失控 agent
- **type**: pain_point | **platform**: InfoWorld（评论，引 Camunda/Gartner/Writer 报告） | **secondhand**: true
- **source_url**: https://www.infoworld.com/article/4163418/google-begins-putting-the-guardrails-on-agentic-ai.html
- **source_date**: 2026-04-27 | **fetched_at**: 2026-08-12
- **metrics**: Camunda 2026：71% 组织在用 AI agent、仅 11% 用例过去一年进入生产、73% 承认愿景与现实有差距；Gartner：2027 年底前 >40% agentic AI 项目将被砍；Writer 2026：67% 高管认为公司因未审批 AI 工具泄露过数据、36% 无 agent 监督正式计划、35% 无法立即关停失控 agent
- **description**: Matt Asay 对 Google 全面转向治理叙事的注解：Google Cloud Next/I/O 的头条不是新模型而是「承认 agent 需要看管」。他认为失败不是模型失败而是普通企业软件失败——「把概率系统的钥匙交给确定性工作流，却没人盯着交接」。这些数字是今日大会「合规护栏」议题存在的原因，也是付费意愿的最硬证据（企业为「能关掉 agent」付钱）。
- **user_quote**: "Less magic; more governance."
- **top_comments**:
  - [同文] "Agentic AI promises to be big, but only when it demonstrates it can be boring."
  - [同文] 没有可信上下文的 agent 是 "articulate tourists wandering through your systems."
  - [同文] "Pilots are easy; production is hard."
- **ai_opportunity**: 11% 生产率与 35%「关不掉」缺口 = pilot-to-production 工具市场：agent kill-switch/熔断审计面板、agent 影子 IT 发现（对应 67% 泄露焦虑）、面向 CIO 的 agent 清单与风险评分。卖「无聊」而非「魔法」。

## 6. Gemini CLI 关源换 Antigravity CLI：296 👎 的一手社区反弹——「开源引流→关源收割」信任危机
- **type**: pain_point | **platform**: GitHub Discussions | **secondhand**: false
- **source_url**: https://github.com/google-gemini/gemini-cli/discussions/27274
- **source_date**: 2026-05-19 | **fetched_at**: 2026-08-12
- **metrics**: 公告帖 296 👎 vs 14 upvote；Gemini CLI 曾合并 6000+ 外部 PR、10 万+ star；6/18 停服（免费/Pro/Ultra 层）；有用户称原本 5–8 小时的日用量现在「10–20 分钟」耗尽配额
- **description**: 今日大会主推的 Antigravity 全家桶背后最大的一手负面信号。Google 官方在 GitHub 宣布 Apache 2.0 的 Gemini CLI 6/18 对个人用户停服，迁往闭源 Go 二进制 `agy`。社区三重愤怒：开源贡献被「收割」进闭源产品、统一周配额池致重度用户瞬间见顶、订阅迁移无路径。已出现社区 fork（llxprt-code，支持本地/第三方模型）。
- **user_quote**: "open source Gemini CLI, get developers contribute to this, and then migrate the code to a close source project. Wonderful."（lingyaochu，57 votes）
- **top_comments**:
  - [GitHub, secretnarwhal, 30 votes] "So, basically, we're making the project closed source. That's it. That's the whole announcement."
  - [GitHub, applepig, 26 👍] "the open source version is too good to be true. we need to close it up"
  - [GitHub, ZandercraftGames] 原本 5–8 小时的日常工作量现在 "10-20 minutes" 就烧完配额（转述，配额跨全模型共享、无历史压缩）
- **ai_opportunity**: 平台信任真空即机会：开源/本地优先的 agent CLI（fork 生态如 llxprt-code 已验证需求）；跨供应商配额监控与用量预算工具；「防 rug-pull」多模型抽象层——愿付费动机是曾被烧过的重度用户。

## 7. Antigravity 2.0：编码助手 → 独立多 Agent 编排平台，93 个子 Agent、12 小时、不到 1000 美元
- **type**: product_market | **platform**: 钛媒体（中文科技媒体） | **secondhand**: true
- **source_url**: https://www.tmtpost.com/7995549.html
- **source_date**: 2026-05-20 | **fetched_at**: 2026-08-12
- **metrics**: 演示：约 12 小时搭出操作系统核心框架、启动 93 个子 Agent、成本 <$1000；Gemini 3.5 Flash 定价输入 $1.5/输出 $9 每百万 token（称较 Claude Sonnet 4.6 低 40–50%、速度 4 倍）；全平台月处理 3200 万亿 token（两年前 9.7 万亿）；Gemini App 月活 9 亿；新增 $100/月 Ultra 档
- **description**: 今日大会 Antigravity 场次的发布底本。Antigravity 2.0 从 IDE 助手升级为独立多 Agent 编排平台，直接对标 Claude Code 与 Codex：并行子 Agent、后台定时任务、语音指令。文章判断 Google 意在「以模型为入口撬动整个智能体经济生态」而非模型利润；UCP 支付协议已获 Amazon、Meta、Microsoft、Salesforce、Stripe 采纳。
- **user_quote**: "它要的不是模型本身的利润，而是以模型为入口，撬动整个智能体经济的生态。"
- **top_comments**:
  - [同文] "它的价值取决于用户的信任，而信任取决于可靠性"（论 Spark 高风险操作需确认、思考轨迹可见、可随时打断）
  - [同文] "谷歌这次没有拿出一个让行业惊叹的新模型，但它做的事情更实际，也更有野心。"
- **ai_opportunity**: 40–50% 的推理降价 + 93 子 Agent 演示把「大扇出 agent 工作流」的单位经济打进独立开发者可及区间；机会在编排的可靠性层：子 Agent 失败重试/成本归因/结果验收工具（本 repo 自身的 fanout 教训即是需求证明）。UCP 标准化则意味着 agent 电商中间件（选品、比价、履约验证）的窗口开启。

## 8. 今日议程：Gemini Enterprise Agent Platform 协议栈（A2A/AP2/UCP/A2UI）+ CapCut 对话式视频剪辑实战
- **type**: trend | **platform**: Google 官方议程页（经搜索索引转述） | **secondhand**: true
- **source_url**: https://ioconnectchina.googlecnapps.cn/sessions/
- **source_date**: 2026-08-12 | **fetched_at**: 2026-08-12
- **metrics**: A2A v1.0 稳定版、约 150 个组织生产采用；UCP 技术委员会含 Amazon/Meta/Microsoft/Salesforce/Stripe
- **description**: 今日另一 AI 场次：解析 Agent Platform 核心能力与 agent 生态协议（A2A 智能体互通、AP2 支付授权、UCP 商务、A2UI 界面），并独家解析 CapCut（剪映海外版）如何打造「零跨应用切换、云素材即时调用、复杂剪辑任务全自动化」的对话式视频编辑器。协议层全面标准化 = agent 互操作从私有 API 转向公共标准。
- **user_quote**: "介绍 A2A、AP2/UCP 及 A2UI 等协议如何共同塑造协同开发者生态的未来……独家解析 CapCut 如何打造对话式视频编辑器"（议程描述，经搜索索引转述）
- **top_comments**: 无（议程页无评论区）
- **ai_opportunity**: 协议先行、工具滞后：A2A/AP2/UCP 的一致性测试器、协议网关/适配器（老系统包装成 A2A agent）、AP2 支付策略审计工具都还没有成型产品。CapCut 案例给出「对话式改造存量专业软件」的可复制配方——任何有复杂 UI 的垂直工具（CAD、剪辑、报表）都可套用。

## 9. 今日议程：Physical AI 专场——Google Cloud 加速 VLA 开发 + ODML 端侧模型 + 涂鸦智能「云大脑+端小脑」闭环
- **type**: trend | **platform**: Google 官方议程页（经搜索索引转述） | **secondhand**: true
- **source_url**: https://ioconnectchina.googlecnapps.cn/sessions/
- **source_date**: 2026-08-12 | **fetched_at**: 2026-08-12
- **metrics**: VLA 领域热度：ICLR 相关论文 2024 年 1 篇 → 2025 年 9 篇 → 2026 年 164 篇（据哈工程 CCCF 综述）
- **description**: 今日 Physical AI 场次：依托 Google Cloud 加速 VLA（视觉-语言-动作）模型开发与验证、构建端侧模型能力（ODML）、规模化远程与仿真测试（DDP）；涂鸦智能独家实战，拆解「Google Cloud 大脑 + 端侧小脑 + 涂鸦物理执行」完整闭环。这是 Google 把 agent 叙事从软件延伸到具身/IoT 的中国区落点——用现成智能家居厂商做物理执行末端，而非等人形机器人。
- **user_quote**: "探讨如何依托 Google Cloud 平台加速 VLA（视觉-语言-动作）模型的开发与验证，构建端侧模型能力 (ODML)，并实现规模化远程与仿真测试 (DDP)"（议程描述，经搜索索引转述）
- **top_comments**:
  - [CCCF 综述 hrbeu.edu.cn] VLA 核心突破在于「把感知、理解、动作三件事放进同一个模型里端到端完成，视觉、语言、动作之间不再有『翻译』的断层」
- **ai_opportunity**: VLA 论文量一年 18 倍但工程工具链空白：VLA 数据三元组（视觉-指令-动作）标注与合成工具、仿真到实机的评测基准、面向智能家居长尾设备的「小脑」适配 SDK。独立开发者切入点是数据与评测而非模型本身。

## 10. 今日议程：端侧 AI 生产落地——Gemini Nano + ML Kit GenAI API + AICore 开发者预览
- **type**: trend | **platform**: Google 官方议程页 + Android 官方文档 | **secondhand**: true
- **source_url**: https://developers.google.com/ml-kit/genai
- **source_date**: 空（文档持续更新；议程 2026-08-12） | **fetched_at**: 2026-08-12
- **metrics**: 端侧摘要支持最长 3000 英文单词文档；覆盖 Pixel 9 系列、Galaxy S25、小米 15、Moto Razr 60 Ultra 等（联发科天玑/骁龙/Tensor 优化机型）
- **description**: 今日端侧场次：释放 Gemini Nano 能力的最新 API 细节，用 ML Kit GenAI API 把智能体验落地生产，覆盖 AICore 开发者预览版到 Prompt API 多模态（文本+图片输入）全流程。架构上 GenAI API = Gemini Nano 共享基础模型 + 按 API 叠加的小型 LoRA 适配器，推理全程不出设备、零云端成本。这是 Google 给端侧 agent「小脑」铺的开发者通道，与 ADK Kotlin（"ADK for Android"，端侧 agent 与后端 Python agent 协同）呼应。
- **user_quote**: "由于在本地运行，输入、推理和输出都不离开设备，也不产生云端成本"（官方文档转述）
- **top_comments**: 无（官方文档无评论区）
- **ai_opportunity**: 端侧推理零边际成本改写 AI 应用单位经济：隐私敏感垂直应用（健康记录摘要、儿童内容、企业内网）可用「纯端侧」做差异化卖点；LoRA 适配器模式暗示「端侧技能包」市场——为 Gemini Nano 训练垂直适配器并分发。
