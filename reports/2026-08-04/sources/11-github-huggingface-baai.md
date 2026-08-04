# 11 — GitHub Trending + HuggingFace + 智源社区 2026-08-04

> 组内信号：12 条 | 二手转述：0 条（0%）
> 最强证据线：GitHub 日/周榜 + HF trending 直接抓取成功，4 个头部 AI 仓库完成 issue 深潜（reaction 数未在渲染中暴露，但排序有效）；Kimi-K3 社区页 154 条讨论提供大量一手用户声音。智源社区首页为 Nuxt SPA 无法直取，改用 /papers 路径成功。本组无搜索渠道使用，无污染问题。

---

## 1. TencentDB-Agent-Memory：团队级 AI agent 记忆中枢冲上日榜第一梯队
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/TencentCloud/TencentDB-Agent-Memory
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 12,726 stars（日增 1,090，周增 2,463）；75 open issues
- **description**: 腾讯云开源的"团队级 AI agent 记忆中枢"，把对话、文档、代码转化为四类可复用记忆资产，跨 agent 跨框架共享。issue 区暴露的需求缺口非常具体：跨平台适配器（#235）、可复现的记忆评测基准（#106，"Suggestion: Add reproducible memory evaluation benchmarks"）、记忆注入透明化（#114 "feat: Add recall transparency option to show injected memories to users"）、以及一个精妙的工程矛盾——记忆注入破坏 prompt cache（#11）。
- **user_quote**: "before_message_write 剥离 <relevant-memories> 导致多轮对话 prompt cache 命中率下降"（issue #11，yunhao-tech）
- **top_comments**:
  - [issue #48] "[Bug] L1 指令提取缺少场景限定机制，用户的场景受限偏好被泛化为全局规则"
  - [issue #73] "[Question]未能复现Benchmark分数"
  - [issue #155] "Main thread CPU pinning at 100%: aggressive SQLite polling in memory-tdai pipeline"
- **ai_opportunity**: agent 记忆层正从个人玩具走向团队基础设施，但评测基准、记忆透明度/可审计性、记忆注入与 prompt cache 的兼容设计都是空白——做"记忆可观测性/评测工具"或托管记忆服务的窗口期。

## 2. reverse-skill：逆向工程 skill 路由包周榜第一（周增 6,154 星）
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/zhaoxuya520/reverse-skill
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 17,047 stars，日增 2,446、周增 6,154，GitHub 周榜第一
- **description**: 面向逆向工程与授权渗透测试的 skill 路由包：AI 路由、按需拉起工具链、自生长知识库，兼容 Claude Code、Kiro、Cursor、Cline。个人开发者作品登顶周榜，说明垂直领域 skill 包（而非通用 agent）是当前增长最快的品类之一；安全领域尤其饥渴。注意其双重用途属性带来的合规风险。
- **user_quote**: 空
- **top_comments**: 空
- **ai_opportunity**: "垂直职业技能包"是 skill 生态的白地：按行业（安全、法务、财务、医疗合规）打包工具链 + 知识库 + 路由，跨 agent 平台分发。商业版需解决授权验证与审计合规。

## 3. block/buzz："Agents are members, not bots" —— 人机同席的团队通讯平台
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/block/buzz
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 22,185 stars，周增 7,372（周榜第三）；2.4k forks，Apache-2.0
- **description**: Block（Square 母公司）开源的自托管团队工作区，人与 AI agent 共处同一频道。基于 Nostr relay，每条消息/工作流/代码评审都是签名事件，人与 agent 的身份模型、事件格式、审计轨迹完全一致。agent 拥有自己的密钥对与频道成员资格，可发补丁、评审代码、加入语音。buzz-cli 提供 JSON-in/JSON-out 供 LLM 工具调用，buzz-acp 对接 Goose/Codex/Claude Code。
- **user_quote**: "Agents are members, not bots."（README 核心命题）
- **top_comments**:
  - [README] "Not an AI replacement plan."（明确人在回路）
  - [README] git 集成让 "feature branch becomes a room"
- **ai_opportunity**: "agent 即同事"的组织协作层正在成为新品类（对照 Slack+bot 的旧范式）。机会：面向中小团队的托管版、agent 身份/权限治理、审计合规套件。

## 4. Claude Code skill 生态集群爆发：book-to-skill、i-have-adhd、superpowers 同榜
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/virgiliojr94/book-to-skill
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: book-to-skill 16,181 stars（周增 5,405）；ayghri/i-have-adhd 16,529 stars（周增 5,012）；obra/superpowers 266,052 stars（日增 617）；EveryInc/compound-engineering-plugin 23,759 stars
- **description**: 本周 GitHub 周榜前 10 中有 4 个是 Claude Code skill/插件生态项目。book-to-skill 把技术书 PDF 转成可边工作边查阅的 skill；i-have-adhd 是"防止 agent 把答案藏起来"的 ADHD 友好输出 skill——连神经多样性适配都成了 skill 品类。skill 已成为 AI 编码工具的"App Store 前夜"。
- **user_quote**: "Skill that keeps a coding agent from hiding the answer; ADHD-friendly output"（i-have-adhd 仓库描述）
- **top_comments**: 空
- **ai_opportunity**: skill 的打包、分发、评测、付费墙都还没有标准解。机会：skill 市场/registry、企业 skill 治理、"X-to-skill" 转换器（书籍/内部文档/SOP → skill）。

## 5. openwork：开源版 Claude Cowork，issue 区齐喊本地模型
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/different-ai/openwork
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 20,798 stars，周增 3,429；158 open issues，303 open PRs
- **description**: 基于 opencode 的 Claude Cowork 开源对标品。高赞 issue 的主题高度一致：本地/自托管推理（#2183 要 Ollama 接入、#1928 要"Private worker mode with local model workflows and reviewer models"、#1799 要在无企业云策略下本地禁用托管 provider）；其次是 Windows/Linux 打包粗糙（#2695 Windows 安装包链接根本没发布、#2084 Tauri→Electron 迁移后丢了 .deb/.rpm）。
- **user_quote**: "Private worker mode with local model workflows and reviewer models"（issue #1928，JJsilvera1）
- **top_comments**:
  - [issue #2183] "connect to Ollama for local models"
  - [issue #2695] "Windows installer needs a link that isn't published anywhere"
  - [issue #1799] "can't disable OpenCode Zen provider locally without enterprise cloud policy"
- **ai_opportunity**: 隐私敏感团队要"agent 办公但数据不出域"。做隐私优先/本地优先的 agent 工作台，或为 openwork 类项目补齐企业策略、打包与合规能力。

## 6. ego-lite：共享登录态的 agent 浏览器，"Spaces" 生命周期是最大痛点
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/citrolabs/ego-lite
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 8,210 stars，周增 2,625；41 open issues，12 条中 3 条为中文
- **description**: 零配置把用户已登录的浏览器状态共享给 Codex/Claude Code 的 agent 自动化浏览器。issue 集群指向三类痛点：Space（隔离的 agent 会话）生命周期管理（#168 删除确认死循环阻塞浏览器命令、#88 renderer 进程不回收、#176 求 per-Space profile 隔离多账号登录）；资源消耗（#69 启动后 GPU 占用 30%+）；以及 #169 求会话屏幕录制功能——用户想审计 agent 干了什么。
- **user_quote**: "High GPU Usage After Launching Ego Browser (~30%+ vs. ~10% Idle Baseline)"（issue #69，safejob）
- **top_comments**:
  - [issue #168] "space deletion confirmation loops and blocks browser commands"（v0.4.5.5）
  - [issue #176] 请求打开 Space 时加 `profile` 参数以隔离多个登录（中文 issue）
  - [issue #169] 请求会话屏幕录制功能（中文 issue，enhancement）
- **ai_opportunity**: agent 浏览器的"多账号隔离 + 会话审计录制 + 资源治理"是明确的未满足需求，也是企业采购的前置条件。

## 7. AirLLM 回榜：4GB GPU 跑 70B，本地推理焦虑的另一面
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/lyogavin/airllm
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 27,936 stars，日增 1,085、周增 2,410
- **description**: 单张 4GB GPU 上做 70B 参数推理的库重新冲上日/周榜。结合 openwork 的 Ollama 呼声与 Kimi-K3 社区的"CPU+RAM 跑 2.78T"讨论，本地/低成本推理是本周跨平台一致的需求主线。
- **user_quote**: 空
- **top_comments**: 空
- **ai_opportunity**: 前沿开源模型体积（2.78T）与消费级硬件的鸿沟持续拉大，"极限压缩/分层加载/众筹推理"工具与服务的需求水涨船高。

## 8. Kimi-K3：2.8T 开源权重引爆社区，"怎么跑起来"成头号问题
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/moonshotai/Kimi-K3
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: HF trending #1；1.13M downloads，9.95k likes，2.8T 参数，8-bit/compressed-tensors；154 条社区讨论；unsloth GGUF 版另有 170k downloads
- **description**: 月之暗面开源 2.78T 参数旗舰，社区反应狂热（数十条各省"发来贺电"帖）。技术讨论集中在"怎么跑"：#148 "Waste engine: Run the full 2.78T-parameter Kimi K3 on a laptop"（20 回复，页面最高互动）、#121 "RUN on CPU + RAM"（16 回复）、#115 众筹部署全量 K3（11 回复）、#146 有人直接把权重放上 BitTorrent 分流。另有 #157 报告模型自称 Claude——蒸馏来源疑云。
- **user_quote**: "给我一张5090 我要用它托起月之暗面 🚀 One RTX 5090. Run Kimi K3! Run!"（讨论 #129，Brrrr47）
- **top_comments**:
  - [discussion #115] "众筹部署全量K3 有想法的铁子聊起来"（tiantianaimax，11 回复）
  - [discussion #157] "Kimi K3 referring to itself as Claude when chatting in Inference Providers?"（yjh-jy）
  - [discussion #142] "你们才是真正的"OPEN"ai…"（Jackeylove8）
- **ai_opportunity**: 万亿级开源权重创造了三个生意：极限量化/异构推理引擎、社区众筹算力池、以及面向企业的"前沿开源模型托管推理"。中国开源模型的全球心智占领也是内容/工具生态的流量入口。

## 9. DeepSeek-V4-Flash-0731 三天 43 万下载 + 配套终端 agent 生态
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 433k downloads / 2.19k likes（更新于 3 天前）；老版 DeepSeek-V4-Flash 累计 2.74M downloads；GitHub 上 esengine/DeepSeek-Reasonix（为 DeepSeek 定制的终端编码 agent，"designed around prefix-cache stability"）30,461 stars，日增 883
- **description**: DeepSeek V4 Flash 月末更新版三天冲到 HF trending #2；同时 GitHub 上出现专为 DeepSeek 优化（围绕 prefix-cache 稳定性设计）的第三方终端编码 agent Reasonix 并冲上日榜。模型厂与第三方工具链的"配套生态"正在中国开源模型周边快速成型。
- **user_quote**: 空
- **top_comments**: 空
- **ai_opportunity**: 围绕特定开源模型的成本特性（如 prefix-cache 定价）做深度优化的工具是差异化切口；"模型专属 agent 外壳"可能成为新的分发形态。

## 10. HF 数据集榜被"前沿模型 trace/蒸馏数据"占领
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/datasets
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: Glint-Research/Fable-5-traces：46.7k downloads / 705 likes；Manusagents 蒸馏集（GPT-5.5/Gemini-3.1-Pro/Grok-4/Claude-Fable-5 等）：18.5M 行 / 11.6k downloads；greghavens/fable-5-coding-and-debugging-traces 12.5k 行；Crownelius/Complete-FABLE.5-traces-2M 229k 行 / 13.5k downloads；nvidia/Open-SWE-Traces 207k 行
- **description**: 数据集 trending 页前 30 中至少 7 个是前沿闭源模型的对话/编码 trace 蒸馏集，覆盖 GPT-5.5、Gemini 3.1 Pro、Claude Fable 5、Kimi K3、GLM-5.2。连 NVIDIA 都在发 Open-SWE-Traces。"蒸馏经济"已经公开化、规模化，与 Kimi-K3 自称 Claude 的现象互为印证。
- **user_quote**: 空
- **top_comments**: 空
- **ai_opportunity**: trace 数据的采集、清洗、去污染、合规审查工具链有真实需求；反向看，闭源厂商的"蒸馏检测/水印"也是待填补的市场。

## 11. 智源热榜聚合：agentic 推理的存储/网络瓶颈成论文热点
- **type**: trend | **platform**: baai_hub | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 2026-02-25（DualPath 论文，榜单快照本身无日期） | **fetched_at**: 2026-08-04
- **metrics**: DualPath 热度 97；ARGUS（万卡集群追踪）热度 75；GPU collectives 近光速延迟论文热度 122
- **description**: 智源今日热榜的系统方向论文集中在推理/训练基础设施瓶颈：DualPath 指出分离式推理中 KV-cache 加载打满 prefill 节点存储网卡而 decode 节点闲置，双路径 + 全局调度带来最高 1.87× 吞吐；ARGUS 以 <2% 开销对 10,000+ GPU 集群做常开细粒度追踪（内核事件压缩 ~3700×），已部署 6 个月做 fail-slow 检测；"Every Microsecond Matters" 把小消息 GPU 集合通信压到距硬件光速下界 7% 以内，直指长上下文 decode 密集的 LLM serving。
- **user_quote**: 空
- **top_comments**:
  - [BAAI 热榜 #7] DualPath: "Breaking the Storage Bandwidth Bottleneck in Agentic LLM Inference"——标题即把 agentic 推理列为一等公民场景
  - [BAAI 热榜 #8] ARGUS: "Production-Scale Tracing and Performance Diagnosis for over 10,000-GPU Clusters"
- **ai_opportunity**: agent 工作负载（长上下文、KV-cache 巨大、decode 密集）正在重塑推理基础设施的研究议程；面向 agent 场景的推理优化中间件/可观测性产品有学术弹药与真实客户。

## 12. baidu/Unlimited-OCR：270 万下载，文档解析仍是最大刚需赛道
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/baidu/Unlimited-OCR
- **source_date**: 空 | **fetched_at**: 2026-08-04
- **metrics**: 2.7M downloads / 3.86k likes（更新于 6 天前），HF trending #7；GitHub 侧 firecrawl/pdf-inspector（Rust PDF 检测/文本提取，区分扫描版与文本版）9,221 stars，日增 1,699
- **description**: 百度 OCR 模型以 270 万下载居 trending 第 7，同日 GitHub 日榜上 Firecrawl 的 pdf-inspector（为路由场景区分扫描 PDF 与文本 PDF）日增 1,699 星。文档理解管线的两端（OCR 模型 + 预检/路由工具）同时爆发，说明 RAG/agent 落地中文档摄入仍是最高频瓶颈。
- **user_quote**: 空
- **top_comments**: 空
- **ai_opportunity**: 文档摄入的"路由层"（判断 PDF 类型、选择 OCR/解析策略、质量评估）是比 OCR 模型本身更缺产品化的环节。

---

## 渠道备注
- 智源社区首页（hub.baai.ac.cn）为 Nuxt SPA，直接抓取只有骨架；改抓 /papers 路径成功获得今日热榜。
- GitHub issue 页排序参数生效，但渲染文本不含 reaction/comment 计数，排序位次即热度代理。
- browser-use/video-use（18,953 stars，日增 306）issue 区几乎全是垃圾帖（"Hi"、"fish"），仅 #64 一条实质请求（source-faithful 输出、剪辑边界 QA 帧），未单列信号但说明"coding agent 剪视频"概念热度高于产品成熟度。
- 本组未使用 WebSearch，无查询污染问题。
