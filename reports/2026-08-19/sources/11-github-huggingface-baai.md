# 11 — GitHub Trending + HuggingFace + 智源社区 2026-08-19

> 组内信号：13 条 | 二手转述：0 条（0%）
> 最强证据线：Agent 记忆/上下文基础设施成为 GitHub 趋势主轴（ai-memory、OpenViking、macro、semantica 同周上榜），HF 侧 Qwen3.8-27B 社区高票诉求（35B MoE +76 reactions、「停不下来的思考」投诉集群）给出本周期最密集的一手用户声音。渠道故障：hub.baai.ac.cn 首页 JS 渲染抓不到内容，改抓 /papers 成功；GitHub 匿名 API 限流，issue 反应数部分不可见（以页面排序代替）。

---

## 1. diagram-design：agent 技能单周 +15.8k stars，「设计师不讨厌的图」登顶周榜
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/cathrynlavery/diagram-design
- **source_date**: 空（周榜快照；README 显示 v2.3 迭代中） | **fetched_at**: 2026-08-19
- **metrics**: 22,266 stars（周增 15,812，周榜 #1）；1.4k forks；28 种图类型 × 3 变体；MIT
- **description**: 面向 Claude Code/Codex/Cowork/Pi 的图表生成技能：纯 HTML+SVG 无构建依赖，能爬网站抽取品牌色/字体映射为语义 token 并做 WCAG AA 对比检查，支持 draw.io/Mermaid 导入重绘并输出「fidelity ledger」。周增 1.5 万星说明「agent skill 即产品」的分发通路已经成型。
- **user_quote**: "No shadows, no Mermaid-slop."
- **top_comments**:
  - [README] "No Figma. No generic rounded boxes. No 30-minute color-picking sessions."
  - [README] "The highest-quality move is usually deletion."
  - [README] "Every coord, width, and gap divisible by 4 — non-negotiable"
- **ai_opportunity**: 技能市场（skill marketplace）中「垂直审美/垂直合规」品类空白：把某一专业输出（法务文书、财务图表、医疗示意图）打磨到从业者标准，以 agent skill 形态分发；agency 多客户品牌 profile 管理（~/.diagram-design/profiles/）已验证 B 端付费场景。

## 2. ai-memory：跨厂商 coding-agent 记忆与交接层，日增 648 stars
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/akitaonrails/ai-memory
- **source_date**: 空（日榜快照） | **fetched_at**: 2026-08-19
- **metrics**: 2,920 stars（日增 648）；Rust；open issues 仅 4 个
- **description**: 为 coding-agent CLI 提供长期记忆，且支持在不同 agent 厂商之间交接（handoff）上下文——直击用户被单一 agent 供应商锁定的焦虑。当前 open issues 暴露真实痛点：#387「跨保留层的强会话删除」（隐私/合规）、#426「stale 阈值硬编码 30 天与调优的 decay lambda 矛盾」。
- **user_quote**: "[Epic] Strong per-session deletion across retained layers"（issue #387，enhancement）
- **top_comments**:
  - [issue #421] "install-hooks: Pi and OMP share PI_CODING_AGENT_DIR, and neither handles OMP profiles"
  - [issue #426] "Lint `stale` threshold is a hard-coded 30 days and contradicts a tuned `[decay] lambda`"
- **ai_opportunity**: 「agent 记忆可携带化」是新基础设施缝隙：跨厂商记忆同步、会话级可验证删除（合规卖点）、记忆衰减策略调优服务，都可做成独立中间件。

## 3. OpenViking：29.6k stars 的 agent 上下文数据库，issue 史暴露 token 成本是核心痛点
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/volcengine/OpenViking/issues
- **source_date**: 空（issue 列表跨 2026-02 至 2026-08） | **fetched_at**: 2026-08-19
- **metrics**: ~29.7k stars（日增 213）；142 open issues / 315 open PRs；官方置顶社区调研问卷（2026-08-14）
- **description**: 火山引擎「自进化 Agent 上下文数据库」统一记忆/RAG/技能。按 reactions 排序的 issue 史给出记忆基础设施的真实成本曲线：#744 是官方专开的「Token 消耗与成本优化问题汇总」追踪帖；#505 报告「记忆提取触发 O(n²) 语义重处理——token 成本随记忆数平方增长」（已修复）；#1172 要求 commitTokenThreshold 按模型上下文窗口百分比而非固定值。仍 open 的高票需求是 #988 ACL 与自定义角色（企业权限）。
- **user_quote**: "Memory extraction triggers O(n²) semantic reprocessing — token cost grows quadratically with memory count"（issue #505）
- **top_comments**:
  - [issue #744] "[Tracking]: Token 消耗与成本优化问题汇总 / Token Consumption & Cost Optimization Tracker"
  - [issue #1172] "[Feature]: commitTokenThreshold 应基于模型上下文窗口百分比，而非固定值"
  - [issue #988] "[Feature]: ACL and Custom Role Support"（唯一高票 open，企业需求）
- **ai_opportunity**: agent 记忆的「成本可观测性」工具（memory token 账单/预算器）与企业级 ACL 记忆层，是开源项目自己都在被用户追打的两个缺口。

## 4. 817 条结构化网络安全技能包：安全领域「技能库即数据集」爆发
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/mukul975/Anthropic-Cybersecurity-Skills
- **source_date**: 空（日榜快照） | **fetched_at**: 2026-08-19
- **metrics**: 29,387 stars（日增 730）；817 技能，映射 MITRE ATT&CK/NIST CSF 2.0 等 6 框架、29 个安全域；Apache 2.0
- **description**: 把网络安全操作知识封装成 817 条可被 AI agent 调用的结构化技能，且对齐主流合规框架。星数与增速说明「把行业 know-how 编译成 agent 技能库」正在从个人工具走向行业资产。
- **user_quote**: "817 structured cybersecurity skills for AI agents"
- **ai_opportunity**: 复制到其他强框架行业：审计（COSO/SOX）、医疗（HIPAA）、金融风控（Basel）。框架映射本身就是护城河——买家按合规条目验收。

## 5. Qwen3.8-27B 社区最高票诉求：35B MoE / 小参数变体（+76 reactions）
- **type**: pain_point | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/Qwen/Qwen3.8-27B/discussions
- **source_date**: 2026-08-17（thread #120 约 2 天前发布） | **fetched_at**: 2026-08-19
- **metrics**: 模型 11.2k likes、666k downloads（发布约 5 天）；thread #120 得 76 reactions/13 replies；#114「Small MoE models」38 reactions；#90「MOE MODEL 35B!」36；#89 25；#88 19；另有 12B（#91，7）与 4B（#94，10）请求
- **description**: Qwen3.8-27B 发布 5 天即成 HF 趋势第一，但讨论区票数最高的不是赞美而是「给我们 MoE / 小模型」——本地部署用户明确要求激活参数更小、吞吐更高的形态（35B-A3B 风格）。厂商每次只发 dense 大杯，社区就自发聚票请愿，这个模式在 88/89/90/114/116/119/120 七个帖子里重复出现。
- **user_quote**: "The community needs Qwen 3.8 35B-A3B models and others, help us get there"（thread #120，76 reactions）
- **top_comments**:
  - [discussion #114] "Small MoE models"（38 reactions）
  - [discussion #90] "MOE MODEL 35B!"（36 reactions）
  - [discussion #133] "The 27B and 35B-A3B are like the King and Queen"（14 reactions）
- **ai_opportunity**: 本地推理用户的「形态缺口」稳定存在：做第三方 MoE 蒸馏/剪枝服务、或聚合此类请愿数据做「开源模型需求晴雨表」卖给模型厂商。

## 6. 「停不下来的思考」：推理模型 overthinking 成 HF 讨论区最大投诉集群
- **type**: pain_point | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/Qwen/Qwen3.8-27B/discussions
- **source_date**: 2026-08-15（#92 约 4 天前）至 2026-08-18 | **fetched_at**: 2026-08-19
- **metrics**: 7 个独立投诉帖（#136/134/113/97/96/92/111）；#97 得 10 reactions/19 replies；#92 12 replies；#136 6 reactions/10 replies
- **description**: Qwen3.8-27B 用户密集报告模型思考循环、吃光上下文：有人等了 49 分 16 秒后放弃。同时衍生工程问题：#123 报 1M 上下文实际设不上；#106 追问原生 reasoning_effort 参数是否能救；#138 指向社区自制的 chat template 修复仓库（froggeric/Qwen-Fixed-Chat-Templates，独立获 1.27k likes 进入趋势榜——修复包本身成了热门「模型」）。
- **user_quote**: "After waiting 49 minutes and 16 seconds while the model was still thinking, I'm simply giving up..."（thread #92）
- **top_comments**:
  - [discussion #136] "Horrible model .... Overthink eats all context tokens"
  - [discussion #113] "This model cannot stop thinking"
  - [discussion #107] "代码能力可能变强了，但是写作能力明显变弱了"
- **ai_opportunity**: 推理预算控制中间件：token 预算守卫、思考早停策略、按任务类型自动调 reasoning_effort。社区修 chat template 的仓库能冲上趋势榜，证明「模型售后补丁」有独立流量。

## 7. Uncensored/abliterated 变体霸榜：HF 趋势前 30 里 6 个去审查 Qwen
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/models
- **source_date**: 空（趋势榜快照） | **fetched_at**: 2026-08-19
- **metrics**: 趋势前 30 中 6 个 uncensored/abliterated Qwen3.8 变体：orcarouter FP8（45.5k dl）、JonathanColetti GGUF（559k dl）、orcarouter MLX（发布 4 小时即上榜）、HauhauCS Aggressive-MTP、DavidAU Fable-Fusion（3.02M dl）、Blackfrost-AI ABLITERATED（134k dl）
- **description**: 新旗舰开源模型发布后 3 天内，去审查变体以多种量化格式（FP8/GGUF/MLX/NVFP4）同时冲上趋势榜，下载量最高达 302 万。这是一条稳定的灰色需求带：官方对齐越强，第三方去对齐生态越繁荣，且已形成 orcarouter、DavidAU 等专业化「改装厂」。
- **user_quote**: 空
- **ai_opportunity**: 合规敏感（不建议直接做去审查产品）；可产品化的是反向面：企业需要检测员工/供应链是否在用 abliterated 模型的审计工具，以及模型变体溯源/指纹服务。

## 8. needle：14MB 端侧基础模型，issue 全在问「怎么用自己的数据微调」
- **type**: product_market | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/cactus-compute/needle/issues
- **source_date**: 空（issue 跨 2026-05 至 2026-08） | **fetched_at**: 2026-08-19
- **metrics**: 7,609 stars（周增 3,772）；讨论量前 4 的 issue 中 4 个（#60/#53/#20/#19）全是自有数据微调问题
- **description**: 面向手机/穿戴/智能家居/机器人的 14MB 基础模型。用户不是拿它当 chat 模型，而是当可微调的端侧任务引擎——最热 issue 是微调指南、微调 NaN、缺数据生成集；open issue 是 Android 支持（#17）、开箱质量差（#25）、以及把它当 tool-call 路由器的 4 阶段实验（#61）。「小模型做路由/分类，大模型做生成」的分工形态正在社区自发成型。
- **user_quote**: "the model out of box seems not very good"（issue #25，open）
- **top_comments**:
  - [issue #60] "Fine-tuning guidance"（讨论量第一）
  - [issue #61] "[Evaluation, not a bug] Needle 2 as a tool-call router, 4-phase experiment"
  - [issue #17] "Needle available on Android possibility"（open，2026-05-13 至今未解决）
- **ai_opportunity**: 端侧微模型的「微调即服务」：上传数据→自动出量化后的任务专用 .cact/gguf；以及 tool-call 路由小模型的托管产品（省 90% 大模型路由 token）。

## 9. omlx：Apple Silicon 推理服务器周增热度，需求集中在投机解码与 SSD 专家流式
- **type**: product_market | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/jundot/omlx/issues
- **source_date**: 空（issue 快照） | **fetched_at**: 2026-08-19
- **metrics**: 19,538 stars（日增 370）；755 open issues；高票需求：MTP 投机解码（#1089/#1086）、1-bit 量化（#526，标 "needs time"）、Flash-MoE 式 SSD 专家流式（#986）
- **description**: macOS 菜单栏起一个带 continuous batching 和 SSD 缓存的本地 LLM 推理服务器。高票 issue 显示 Mac 用户在推着单人维护者做数据中心级特性：多 token 预测投机解码、1-bit 量化、SSD 背载 MoE 专家流式——全是「让 128GB 内存的 Mac 跑 2.4T MoE」的诉求。755 个 open issues 对单维护者项目是明确的供给缺口。
- **user_quote**: "Feature Request: Add MTPLX support for native MTP speculative decoding on Apple Silicon"（issue #1089，reactions 排序第一）
- **top_comments**:
  - [issue #986] "Add Flash-MoE-style SSD-backed expert streaming for large MoE models"
  - [issue #526] "Feature request: support 1-bit quantized MLX models"（维护者标注 "not a quick fix - requires time to dig into"）
- **ai_opportunity**: Mac 本地推理的商业版/托管支持（个人维护者积压 755 issues = 付费支持空间）；与 #5/#6 的 Qwen MoE 需求同源：Apple Silicon 大 MoE 运行时是明确的付费级痛点。

## 10. prime-agent 一天批量关闭 11 个 issue 为 "not planned"：官方弃单清单
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/PrimeIntellect-ai/prime-agent/issues?q=is%3Aissue+sort%3Acomments-desc
- **source_date**: 2026-08-15（批量关闭日） | **fetched_at**: 2026-08-19
- **metrics**: 17,257 stars（周增 3,475）；讨论量前 12 的 issue 中 11 个被关为 not planned，其中 9 个在 8 月 15 日同天关闭
- **description**: 自改进 RLM coding agent prime-agent 把最有讨论量的 issue 集体关为 not planned，弃单集中在：Windows 守护进程/内核问题（#917/#660/#1148/#1291）、打包与安装（#751/#741/#843 Homebrew）、provider/认证缺口（#678 xAI OAuth/#639）、以及 #1120「长时自治运行的安全/沙箱指南」。官方明示不做 = 第三方的公开领地，尤其 Windows 支持和安全沙箱文档。
- **user_quote**: "Add security/sandboxing guidance for long-running autonomous runs"（issue #1120，closed not planned）
- **top_comments**:
  - [issue #917] "Windows: daemon recovery does not terminate unassigned orphan process trees"（not planned）
  - [issue #741] "install fails on npm 12+ due to allow-remote=none"（not planned）
- **ai_opportunity**: 「热门 agent 的 Windows 发行版/企业打包层」是被官方明确放弃的需求；长时自治 agent 的沙箱与安全基线也无人认领——可做独立的 agent 运行时安全产品。

## 11. Intelligence per Watt：本地推理能效比 2 年提升 5.3×，88.7% 查询本地可答
- **type**: trend | **platform**: 智源社区 | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 2025-11-11（论文发布；智源今日热榜 heat 150） | **fetched_at**: 2026-08-19
- **metrics**: 20+ 本地模型 × 8 加速器 × 100 万真实查询：本地模型准确回答 88.7% 单轮查询；IPW 2023→2025 提升 5.3×（可处理查询 23.2%→71.3%）；本地加速器较云端 IPW 仍差 ≥1.4×
- **description**: 智源热榜论文给「本地推理吃掉云推理需求」提供了量化锚点，与本周期 GitHub 榜（omlx、llmfit「一条命令查你的硬件能跑什么」32.8k stars、unsloth 73.7k）和 HF 侧 GGUF/MLX/NVFP4 量化繁荣互为印证——本地推理已从爱好者行为变成有能效经济学支撑的趋势。
- **user_quote**: 空（论文摘要转述）
- **ai_opportunity**: 「模型-硬件匹配」咨询/工具层（llmfit 已验证 32.8k stars 的需求），企业版：给定业务查询分布，算出多少可下沉本地、省多少钱的 TCO 计算器。

## 12. macro：Rust 全家桶工作台（邮件+聊天+文档+CRM）以「共享 AI 记忆」为钩子
- **type**: product_market | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/macro-inc/macro
- **source_date**: 空（周榜快照） | **fetched_at**: 2026-08-19
- **metrics**: 3,703 stars（周增 2,627，增幅 244%）
- **description**: 把 email、chat、docs、tasks、agents、calls、CRM 装进一个 Rust 工作台，卖点是跨模块交叉链接的共享 AI 记忆。与同周上榜的 semantica（「图原生的上下文与可问责 AI 系统基础设施」，周增 4,304）呼应：应用层和基础设施层同时在押注「统一上下文」。
- **user_quote**: "A combined team workspace spanning email, chat, docs, tasks, agents, calls, and CRM, cross-linked with shared AI memory"
- **ai_opportunity**: 中小团队「上下文统一层」的垂直版：律所/诊所/工作室等既要全家桶又买不起企业套件的场景；或做现有工具（Gmail/Slack/Notion）之上的记忆桥接层而非替换。

## 13. 蒸馏数据集登顶 HF 数据集趋势：用旗舰模型互蒸成为公开产业链
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/datasets
- **source_date**: 空（趋势榜快照；榜首数据集更新于约 2026-08-02） | **fetched_at**: 2026-08-19
- **metrics**: 榜首 r0b0tlab/qwen3.8-max-glm5.2-kimi-k3-distillation：22.9M 行、4.44k downloads；同作者 50k 版 2.71k downloads；NVIDIA 同期挂出 Nemotron-RL-Agentic-Terminal-Pivot-v1（31.1k 行）与 Nemotron-SFT-SWE-v3.5 等 agent 训练集
- **description**: HF 数据集趋势第一名是把 Qwen3.8-Max、GLM5.2、Kimi-K3 三家旗舰互蒸的 2290 万行数据集；NVIDIA 则批量开源 agent 终端操作/SWE 的 RL 与 SFT 数据。「前沿模型输出→蒸馏数据集→社区小模型」的产业链已完全公开化，agent 行为数据（终端操作、代码修复轨迹）是新的稀缺品类。
- **user_quote**: 空
- **ai_opportunity**: 垂直领域 agent 轨迹数据集是空白：合规采集特定行业工作流轨迹（财务对账、报关、病历编码）卖给模型厂商；或做蒸馏数据集的许可证/污染审计工具（蒸馏数据的 ToS 合规是悬而未决的雷区）。
