# 11 — GitHub Trending + HuggingFace + 智源社区 2026-08-13

> 组内信号：13 条 | 二手转述：0 条（0%）
> 最强证据线：Agent 基础设施三件套同日霸榜——「给 agent 一台电脑」(cloudflare/computer 周榜 #1, +6,020 星)、「给 agent 团队记忆」(TencentDB-Agent-Memory +5,720 星/周)、「给 agent 装技能包」(google/skills、addyosmani/agent-skills、book-to-skill 同周上榜)；HF 侧 MiniMax-H3 单一模型占据趋势榜 30 席中的 11 席。渠道故障：hub.baai.ac.cn 首页为 JS 渲染取不到内容，改用 /papers 路径成功取得热门论文榜。GitHub issue 列表页不渲染 reaction/评论数字，排序可信但具体计数缺失（页面限制，非渠道故障）。

---

## 1. diagram-design：Claude Code 图表技能日榜 #1，单日 +2,855 星
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/cathrynlavery/diagram-design
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 11,998 stars（日榜 #1, +2,855/天），748 forks，MIT，29 种图表类型
- **description**: 面向 Claude Code/Codex/Pi 的 agent skill，把「画图」做成 29 种编辑级图表类型，输出自包含 HTML+SVG。卖点是反 Mermaid 审美：「No shadows, no Mermaid-slop」。作者是 BestSelf.co 创始人 Cathryn Lavery，动机是 Claude 默认产出「generic rounded boxes」与品牌不符。内置品牌自动吸取（指向网站即抓取配色/字体，WCAG AA 校验，输出 fidelity receipt）、draw.io/Mermaid 导入重绘、渐进式上下文加载。个人痛点驱动的设计类 skill 一天近 3 千星，验证 skill 生态的分发力。
- **user_quote**: "29 editorial diagram types for Claude Code. Self-contained HTML + SVG. No shadows, no Mermaid-slop."
- **top_comments**:
  - [README 设计原则] "The highest-quality move is usually deletion."
  - [README 品牌门禁] A first-run gate stops it from shipping default-skinned output into a branded project.
- **ai_opportunity**: 「审美即护城河」的垂直 skill：为 PPT/海报/数据报告/白皮书等场景做同等品质的 opinionated 输出技能；或做 skill 的品牌一致性引擎（吸取任意网站设计语言并映射到语义角色）作为独立中间件。

## 2. cloudflare/computer：「给你的 agent 一台电脑」周榜 #1（+6,020 星/周）
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/cloudflare/computer
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 7,876 stars（周榜 #1, +6,020/周），434 forks，6 open issues，标注 PREVIEW ONLY
- **description**: 跑在 Cloudflare Durable Object 里的虚拟文件系统 + 可插拔执行面：SQLite 持有权威状态，三种后端（FUSE 挂载的容器全 Linux userland / isolate shell / isolate JavaScript），`workspace.runtime.exec` 为唯一入口。FUSE 挂载「在元数据密集型工作上跑赢真实磁盘」。大厂正在把「agent 的执行环境」平台化为云原语。Issue 已暴露真实生产诉求：pandoc PDF 流水线在部署容器上文件锁死（#52）、`edit` 工具 oldText 不精确匹配时整文件重写（#51）、垃圾回收不可达导致孤儿 blob 无法回收（#68）。
- **user_quote**: "Give your agent a computer 👾"
- **top_comments**:
  - [issue #52] "pandoc --pdf-engine fails with 'openFile: resource busy (file is locked)' on deployed Containers — the tutorial's PDF flow cannot work in production."
  - [issue #51] "`edit` tool rewrites the whole file when `oldText` doesn't match exactly"
  - [README] "PREVIEW ONLY — APIs are unstable… docs/ spec is forward-looking — read it for intent, not as description of the code today."
- **ai_opportunity**: agent 沙箱层成为新的云战场（对标 E2B/Modal/Daytona）；机会在上层：跨沙箱供应商的统一 workspace API、agent 文件系统的快照/审计/回滚工具、以及针对「edit 工具误写整文件」这类 agent-FS 交互安全层。

## 3. 技能（Skills）成为 agent 生态的分发格式：Google 官方入场 + 「书变技能」+ 逆向技能包同周霸榜
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/trending?since=weekly
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: google/skills 17,957 stars (+2,288/周)；addyosmani/agent-skills 86,704 stars (+4,817/周)；virgiliojr94/book-to-skill 20,983 stars (+3,983/周)；zhaoxuya520/reverse-skill 24,634 stars (+5,573/周)——周榜 15 席中 4 席是 skill 仓库
- **description**: 周榜同时出现：Google 官方「Agent Skills for Google products」、Addy Osmani 的生产级工程技能集、把技术书 PDF 转成 Claude Code skill 的 book-to-skill、逆向工程/渗透测试 skill 路由包。技能格式（SKILL.md）正在从 Anthropic 生态外溢为通用分发单元——大厂做官方技能、个人做内容转化管线（书→技能）、垂直领域做技能包。日榜 #5 msitarzewski/agency-agents（144,849 stars）同属「打包专家人格」谱系。
- **user_quote**: "Agent Skills for Google products and technologies" (google/skills)
- **top_comments**:
  - [book-to-skill 描述] "Converts a technical book PDF into a usable Claude Code skill"
  - [reverse-skill 描述] "Skill router pack for reverse engineering, authorized pentesting, and security research"
- **ai_opportunity**: 技能的「应用商店层」仍空白：技能质量评测/安全审计（技能是提示注入的天然载体）、付费技能市场、企业私有技能库管理、以及 book-to-skill 模式的版权合规化（与出版社合作官方技能版图书）。

## 4. Agent 记忆基础设施爆发：腾讯云团队级记忆中枢 +5,720 星/周，semantica 图原生上下文 +3,585 星/周
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/TencentCloud/TencentDB-Agent-Memory
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: TencentDB-Agent-Memory 20,868 stars (+5,720/周)，120 open issues，438 open PRs；semantica-agi/semantica 5,967 stars (+3,585/周，日榜 #3 +845/天)；同谱系 vitali87/code-graph-rag 4,135 stars (+1,511/周)
- **description**: 腾讯云把 agent 记忆做成团队级中枢：聊天/文档/代码转成四类可共享记忆资产，分层模型（L1 指令提取 / L3 persona），SQLite FTS5 检索，经 OpenClaw 装为插件。issue 暴露的需求缺口极具产品含金量：跨平台适配器（#235）、记忆资产的导出/导入备份迁移（#779）、opencode 支持（#455）、「用户的场景受限偏好被泛化为全局规则」（#48）、prompt cache 命中率回归（#120）。semantica 主打「Graph-Native Infrastructure for Context and Accountable AI Systems」，issue 中最高票是「wiki 式可编辑记忆视图」（#765）。
- **user_quote**: "[#48] 用户的场景受限偏好被泛化为全局规则"（L1 instruction extraction lacks scene-limiting mechanism）
- **top_comments**:
  - [TencentDB-Agent-Memory #779] "Documented export/import for backup and migration of memory assets"
  - [TencentDB-Agent-Memory #205, closed not planned] "agent 看不到 L3 persona" — Hermes system_prompt block returns static text（官方放弃的集成 = 第三方空间）
  - [semantica #765 最高票] "Feature request: wiki-style editable memory format/view alongside graph and RAG memory"
- **ai_opportunity**: 记忆层三大空白：(1) 记忆资产的可移植标准（导出/导入/跨 agent 迁移——用户不想被单一记忆库锁定）；(2) 人类可读可编辑的记忆界面（wiki 视图是两个仓库共同的最高票诉求）；(3) 记忆范围控制（场景偏好 vs 全局规则的边界管理）。

## 5. stablyai/orca：并行 coding agent 舰队桌面环境 44K 星，痛点集中在远程/终端会话稳定性
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/stablyai/orca
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 44,342 stars（日榜 #4, +1,235/天），3.1k forks，约 1.8k issues / 1.9k PRs
- **description**: 「在桌面、手机或 VPS 上运行并行 coding agent 舰队」的 agentic 开发环境。issue 按评论排序的主题分布是产品化路标：monorepo worktree 下看不到文件和 git 变更（#6357，最高讨论）、远程 Linux 服务器上跑 agent（#5899 feature）、SSH 终端失去响应（#5319）、远程终端窗口自行关闭（#9911）、renderer 崩溃留下孤儿 PTY 杀死 shell（#7742）、macOS 五笔输入法反斜杠键错误（#10896）、韩文双辅音换行错误（#11878）。bug 由 Discord 机器人桥接进 issue（orca-discord-issues 账号）。
- **user_quote**: "[Feature]: how to use agent of remote Linux server." (#5899)
- **top_comments**:
  - [issue #6357 最高讨论] "[Bug] Worktree in a monorepo, can not see files and git changes"
  - [issue #7742] renderer crash leaves terminal PTYs orphaned, killing shells
  - [issue #10896] "macOS Qingg Wubi Chinese input: backslash key inserts `\` instead of `、`"（CJK 输入法适配是全球化盲区）
- **ai_opportunity**: 并行 agent 编排的稳定性层是苦活但刚需：远程会话持久化/恢复、monorepo worktree 感知、CJK 输入法兼容。做「agent 舰队的 tmux」——会话状态与 agent 状态解耦的持久层。

## 6. MiniMax-H3 音视频生成模型占 HF 趋势榜 30 席中 11 席；社区痛点=许可证困惑 + 无官方训练器 + 部署碎片化
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/MiniMaxAI/MiniMax-H3
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 官方仓库 1.58M 下载 / 3.76k likes（趋势榜 #2）；Comfy-Org 重打包 6.8M 下载；衍生 LoRA/GGUF/ComfyUI 版共占趋势榜 11/30 席；社区 78 个讨论帖
- **description**: 33B Image-Text-to-Video 模型，生态爆发以社区重打包为主（Comfy-Org 版下载量是官方 4.3 倍）。社区讨论暴露三层缺口：(1) 许可证——置顶帖「Any License Question Ask here!」31 回复 15 👍，自定义 community license 造成持续困惑；(2) 训练——「No official trainer? We open-sourced a working fine-tuning pipeline」(#27)、训练配方是否公开 (#18)；(3) 部署——vLLM 路线图 (#49)、RunPod 可用性 (#56)、多 GPU ComfyUI (#24)。质量 bug 帖 24 小时内 4 连发（VAE 色偏、开头音频毛刺、动漫内容掉帧）。#46「The 'duct-tape' architecture review」26 回复是最热技术批评帖。
- **user_quote**: "Any License Question Ask here!" (置顶帖, 31 replies / 15 👍)
- **top_comments**:
  - [discussion #27] "No official trainer? We open-sourced a working fine-tuning pipeline for H3"
  - [discussion #65] "prompt adherence really varies depending on the resolution"
  - [discussion #47] "The actual correct system prompt for IT2V - (Took me a while)"（官方文档缺失，社区逆向出正确 system prompt）
- **ai_opportunity**: 开源视频模型的「最后一公里」服务：托管微调（官方无 trainer）、许可证合规判定工具（企业能不能商用一键回答）、system prompt/分辨率最佳实践的打包产品、以及面向 ComfyUI 生态的一键部署。

## 7. Kronos：金融市场「语言」基础模型 37K 星，垂直领域基础模型持续走强
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/shiyu-coder/Kronos
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 37,015 stars（日榜 #6, +266/天）
- **description**: 自称「A Foundation Model for the Language of Financial Markets」，K 线/市场数据的基础模型，长期霸榜。与同日趋势中的 cactus-compute/needle（设备端）、LTX-2（音视频）共同构成「基础模型垂直化/场景化」谱系——通用 LLM 之外，按数据模态和行业切分的基础模型各自积累社区。
- **user_quote**: "A Foundation Model for the Language of Financial Markets"
- **top_comments**: （列表页未抓取 issue 详情）
- **ai_opportunity**: 垂直基础模型的应用层：基于 Kronos 的策略回测 SaaS、信号订阅、与券商 API 的合规集成。注意金融预测类产品的监管与实盘有效性风险。

## 8. cactus-compute/needle：14MB 基础模型瞄准手机/穿戴/智能家居/机器人，单日 +315 星
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/cactus-compute/needle
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 4,494 stars（+315/天，日榜 #17）
- **description**: 14MB 的基础模型，目标设备是 phones、wearables、smart home devices、robots。与 HF 趋势榜上 LiquidAI LFM2.5-2.6B（93.7k 下载）、inclusionAI Ling-3.0-tiny (8B)、deepgrove maple-preview 呼应——「极小模型」赛道在 2T 参数巨模型（Qwen3.8-2.4T、Kimi-K3 2.8T）同榜的背景下反向增长。
- **user_quote**: "14MB foundation model targeting phones, wearables, smart home devices and robots"
- **top_comments**: （未深挖 issue）
- **ai_opportunity**: 设备端模型的工具链缺口：小模型能力评测标准、面向硬件厂商的模型定制服务、离线优先的 agent 框架。

## 9. 智源热榜：Stealing Reasoning Traces from Proprietary LLM APIs——加密思维链可跨会话回放解密，窃取 31.5 万文本块
- **type**: trend | **platform**: baai_hub | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-13
- **metrics**: 智源论文热榜今日 #4，热度 442
- **description**: 论文指出厂商把 CoT 加密成文本块交客户端回传的架构有洞：加密块在同厂商生态内可跨会话/用户/模型互换。攻击者把强模型的加密轨迹注入同厂商弱模型即可逐字解密输出。已在 Anthropic、OpenAI、Google 模型上验证绕过反蒸馏；从公开仓库解密 315,320 个文本块，恢复 367 条 PII 与 182 组凭证。对所有把加密 reasoning 块存进公开 repo 的 agent 产品是直接警报。
- **user_quote**: "从公开仓库解密 315,320 个文本块，恢复 367 条 PII 与 182 组凭证"
- **top_comments**: （论文榜无评论区）
- **ai_opportunity**: agent 交互日志的敏感块扫描器：检测公开仓库/日志里的加密 reasoning 块与凭证泄漏，作为 CI 检查或 SaaS 卖给用 agent 写代码的团队。

## 10. 智源热榜：Steerling-8B——可解释性作为训练期硬约束，与能力协同增强
- **type**: trend | **platform**: baai_hub | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-13
- **metrics**: 智源论文热榜今日 #8，热度 137；跨三个数量级算力验证
- **description**: Guide Labs 反对「可解释性=能力代价」，把可解释性作为训练目标硬约束。代表模型 Steerling-8B（带因果注意力掩码的扩散语言模型）可将输出归因到输入词元、人类概念与训练样本，支持无需重训的概念引导修正；性能与耗费 2–16 倍算力的公开模型相当。若成立，「可审计模型」从合规负担变成可交付产品特性。
- **user_quote**: "可解释性随能力协同增强，表征更解耦、更贴合人类概念"
- **top_comments**: （论文榜无评论区）
- **ai_opportunity**: 监管密集行业（金融/医疗/招聘）的可归因模型服务：「这个输出由哪些训练样本和概念驱动」作为审计报告自动生成。

## 11. 智源热榜：OEO 质疑预设优化流程——GPT-5.5 驱动的开放式优化 14 战 12 胜，token 用量仅 34%
- **type**: trend | **platform**: baai_hub | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-13
- **metrics**: 智源论文热榜今日 #5，热度 179；14 组对照 12 胜 1 平 1 负，目标交互 token 中位数为 SkillOpt 预算的 34.3%
- **description**: 《Rethinking Self-Evolving Agents: Do We Still Need Prescribed Optimization Pipelines?》提出开放式优化（OEO）：让优化器在线自主编排改进过程，对比 SkillOpt/GEPA。关键限定：优化器能力中等时 SkillOpt 反超，过弱则不可用——预设流程是「能力适配型脚手架」。对 agent 优化框架（GEPA/DSPy 谱系）创业者的信号：顶级模型可能吃掉框架价值，护城河要押在中等模型场景或评估基建上。
- **user_quote**: "结论视预设流程为「能力适配型脚手架」"
- **top_comments**: （论文榜无评论区）
- **ai_opportunity**: agent 自我改进的评估与预算控制层——无论流程预设与否，「花多少 token 换多少提升」的度量基建都是必需品。

## 12. huangruiteng/loopx：长时运行 agent 团队的「循环工程状态内核」，周 +2,509 星
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/huangruiteng/loopx
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 4,499 stars (+2,509/周，周榜 #4)
- **description**: 「Lightweight loop engineering state kernel for long-running AI agent teams」，跨 Codex、Claude Code 等工具工作。与 orca（并行舰队）、TencentDB-Agent-Memory（团队记忆）同周上榜，拼出完整叙事：agent 使用正从单次会话转向长时运行、多 agent 团队协作，状态管理成为独立组件层。
- **user_quote**: "Lightweight loop engineering state kernel for long-running AI agent teams — works across Codex, Claude Code, etc."
- **top_comments**: （未深挖 issue）
- **ai_opportunity**: 长时 agent 运行的可观测性/断点续跑/成本护栏——「agent 团队的 systemd」。

## 13. HF 数据集趋势：前沿模型蒸馏数据集公开化 + 「slop 分类」数据集出现
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/datasets
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: r0b0tlab/qwen3.8-max-glm5.2-kimi-k3-distillation 22.9M 行（趋势 #3）；Manusagents/GPT-5.5-Gemini-3.1-Pro-…-Distillation 18.5M 行、14.1k 下载；bench-labs/slop-classification（1 天前，趋势 #25）；nvidia/Nemotron-RL-Agentic-Terminal-Pivot-v1（agentic terminal RL 数据，1 天前）
- **description**: 数据集趋势榜三条线：(1) 多个前沿闭源/开源模型的蒸馏输出数据集公开传播（与信号 9 的反蒸馏攻防呼应，蒸馏灰色产业链已数据集化）；(2) 「slop-classification」数据集出现——AI 垃圾内容检测开始有标注数据；(3) NVIDIA 发布 agentic 终端操作 RL 数据集，agent 训练数据成为官方供给。
- **user_quote**: "qwen3.8-max-glm5.2-kimi-k3-distillation — 22.9M rows"
- **top_comments**: （数据集列表页无评论）
- **ai_opportunity**: slop 检测 API/浏览器插件（数据基建刚出现，应用层空白）；蒸馏数据合规审计工具（模型厂商需要知道自己的输出被谁数据集化了）。
