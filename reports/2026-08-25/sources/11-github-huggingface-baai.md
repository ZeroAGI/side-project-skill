# 11 — GitHub Trending + HuggingFace + 智源社区 2026-08-25

> 组内信号：12 条 | 二手转述：0 条（0%）
> 最强证据线：GitHub 日/周榜被「AI 编码 agent 生态层」霸榜（免费中转、agent 记忆、agent 技能库、agent 审计工作区），叠加 openai/codex issue 区高票诉求（LSP 集成 466 赞、/undo 回滚 406 赞）——「agent 可靠性/可回滚/生态互通」是当前最密集需求带。渠道故障：hub.baai.ac.cn 首页为 JS 渲染抓不到内容，改抓 /papers 子页成功；GitHub issue 列表页不含 reaction 数，改用 GitHub API 补齐。

---

## 1. free-claude-code：免费 LLM 中转跑编码 agent，日增 891 星
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/Alishahryar1/free-claude-code
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: 49,122 stars（+891 today，日榜 #1）；top issue "Provider API request failed" +1:8 / 32 comments
- **description**: 通过免费额度供应商（NVIDIA NIM 等）让用户零成本跑 Claude Code 类编码 agent，宣称"1.3B+ free tokens"。issue 区最热主题全部是供应商 API 失效/限流（"Provider API request failed"、"Error: 422"、"Current Working/Not Working NVIDIA NIM Models"），以及 "Support for custom OpenAI-compatible endpoints"（+1:6）——免费中转的可靠性是最大痛点。
- **user_quote**: "Support for custom OpenAI-compatible endpoints"（issue #1230 标题）
- **top_comments**:
  - [GitHub issue #342 标题] "Provider API request failed"（+1:8，32 条评论——最热讨论）
  - [GitHub issue #102 标题] "Current Working/Not Working NVIDIA NIM Models"（+1:7，社区自发维护可用模型清单）
- **ai_opportunity**: 免费/低价 LLM 网关的可靠性层（自动 failover、供应商健康监测、可用性仪表盘）是明确付费点；同榜 freellmapi（19,852 stars，聚合 34 家免费供应商 635 个端点）验证同一需求。

## 2. openai/codex 高票 issues：LSP 集成与 /undo 回滚是编码 agent 最大缺口
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/openai/codex/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc
- **source_date**: 2026-01-05（榜首 issue 创建日） | **fetched_at**: 2026-08-25
- **metrics**: repo 117,274 stars（+1,994 today）；开放 issue 13,539 条。Top 赞 issues：LSP 集成 +1:466/63c；/undo 回来 +1:406/71c；macOS syspolicyd CPU 失控 +1:394/85c；IDE 内 diff 审批 +1:227；语音输入 +1:212；/rewind 检查点回滚 +1:205；关闭 60 秒自动确认 +1:199/83c；Windows 独立安装包 +1:186；PDF 支持 +1:186
- **description**: codex 的高票需求形成清晰画像：(1) 代码智能整合（LSP 自动检测安装）；(2) 安全网/可回滚（/undo、/rewind 同时回滚对话上下文和代码修改）；(3) 人机协作控制权（IDE 内 diff 审批、禁止 60 秒自动替用户回答问题）。这些是所有编码 agent 的共性缺口。
- **user_quote**: "codex unintenally deletes some files which is not tracked by git… It bites me several times in recent days and I miss the /undo feature each time."（issue #9203 正文）
- **top_comments**:
  - [GitHub issue #8745 标题] "LSP integration (auto-detect + auto-install) for Codex CLI"（+1:466，全库最高票）
  - [GitHub issue #11626 标题] "CLI: Add /rewind checkpoint restore that reverts both chat context and Codex-applied code edits"（+1:205）
  - [GitHub issue #28969 正文] "Codex will automatically accept the recommended answer to [questions after 60 seconds]"——用户要求关闭自动确认（+1:199，83 条评论）
- **ai_opportunity**: 编码 agent 的「事务性回滚/检查点」中间件（同时快照对话与文件系统）、LSP 桥接层，可做成 agent 无关的第三方工具或被收购的补件。

## 3. agent 记忆与上下文层成为独立品类：ai-memory、OpenViking、openhuman
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/volcengine/OpenViking
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: OpenViking（"Self-evolving Context Database for AI Agents"）33,032 stars，周增 4,048；akitaonrails/ai-memory（跨 agent CLI 长期记忆/换厂商交接）4,429 stars，周增 2,520；tinyhumansai/openhuman（local-first life memory）37,331 stars，日增 515
- **description**: 周榜同时出现三个「agent 记忆/上下文」项目：火山引擎 OpenViking 把 agent memory + RAG + skills 合成自进化上下文数据库；ai-memory 主打不同 agent 厂商之间的记忆可携带（vendor 交接）；openhuman 做个人生活记忆。记忆正从 agent 内置功能演化成独立基础设施层，且「跨厂商可携带」是新卖点。
- **user_quote**: "Long-term memory for coding agent CLIs, easing handoff between different agent vendors"（ai-memory 仓库描述）
- **top_comments**:
  - [OpenViking issue #2357 标题] "Refactor VectorDB storage abstraction to support self-hosted external backends"（企业用户要自托管后端）
  - [OpenViking issue #988 标题] "ACL and Custom Role Support"（权限管控诉求，指向企业化）
- **ai_opportunity**: agent 记忆的「可携带标准 + 托管服务」：跨 Claude Code/Codex/Gemini CLI 的记忆同步、企业级 ACL 与自托管版本是 OpenViking issue 区已浮现的付费诉求。

## 4. agent 技能/插件市场爆发：claude-plugins-community、awesome-agent-skills、cursor/plugins
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/VoltAgent/awesome-agent-skills
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: awesome-agent-skills 31,959 stars（+602 today，聚合 1000+ 技能，兼容 Claude Code/Codex/Gemini CLI/Cursor）；anthropics/claude-plugins-community 1,409 stars 但周增 877（62% 周增速，官方社区插件市场镜像）；cursor/plugins 5,003 stars 周增 1,832（官方插件规范）；HF 数据集 mvaccargiu/gitskills 11.3M 行
- **description**: 日/周榜同时出现三个 agent 技能/插件生态项目，且 Anthropic 与 Cursor 均官方下场定义插件规范。技能层（可复用 prompt+工具包）正在标准化，跨 agent 兼容是主打卖点。HF 上出现 1130 万行的 gitskills 数据集，说明技能本身已成训练语料。
- **user_quote**: "Curated set of 1000+ agent skills from official teams and the community, working with Claude Code, Codex, Gemini CLI, Cursor, and others"（awesome-agent-skills 仓库描述）
- **ai_opportunity**: 垂直行业技能包（财税、法务、电商运营）+ 技能质量评测/安全扫描服务；技能分发的「npm 时刻」尚无赢家。

## 5. apache/maka：agent 审计日志工作区进入 Apache 孵化器
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/apache/maka
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: 2,981 stars，日增 411 / 周增 1,313；roadmap issue #544 "durable agent platform" +1:4/7c
- **description**: local-first AI agent 工作区，把消息、工具调用/结果、权限决策、终止事件全部写入 append-only 日志。Apache 孵化器背书 + 高增速，说明「agent 行为可审计/可回放」正在成为企业采纳 agent 的前置条件。issue 区提案聚焦 durable execution 与后台委派任务（"let a delegated task run without taking the session hostage"）。
- **user_quote**: "records messages, tool calls/results, permission decisions, and termination events in an append-only log"（仓库描述）
- **top_comments**:
  - [GitHub issue #544 标题] "roadmap: durable agent platform"
  - [GitHub issue #3540 标题] "proposal(runtime): let a delegated task run without taking the session hostage — background delegation"
- **ai_opportunity**: agent 合规审计 SaaS（不可篡改行为日志 + 回放 + 权限策略），对金融/医疗等受监管行业卖。

## 6. Tencent AI-Infra-Guard：AI 红队/安全扫描平台周增 1,212 星
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/Tencent/AI-Infra-Guard
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: 5,787 stars，周增 1,212（约 26% 周增速）
- **description**: 腾讯开源的全栈 AI 红队平台，覆盖 agent、skills、MCP、基础设施扫描与 LLM 越狱评估。agent/MCP/技能生态爆发的同时，其攻击面扫描工具同步上榜——安全是生态成熟的滞后确认信号。
- **user_quote**: "Full-stack AI red teaming platform covering agent, skills, MCP, and infra scanning plus LLM jailbreak evaluation"（仓库描述）
- **ai_opportunity**: MCP server / agent skill 的安全评级与持续扫描服务（类 Snyk for agents）；企业采购 agent 前的合规检查清单产品。

## 7. Qwen3.8-27B 霸榜 HF：社区最大呼声是 MoE 小参数版
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/Qwen/Qwen3.8-27B
- **source_date**: 2026-08-14（页面显示 11 days ago 更新） | **fetched_at**: 2026-08-25
- **metrics**: 官方版 2.65M 下载/12.5k 赞；unsloth GGUF 版 7.01M 下载；trending 前 30 名中 17 个是 Qwen3.8-27B 衍生版（uncensored/abliterated/量化）。社区 #120 请愿帖 142 表情/18 回复
- **description**: Qwen3.8-27B 发布约 11 天即形成完整衍生生态。社区两大呼声：(1) MoE 小激活版（35B-A3B）与 3-5B 小模型——低显存用户被抛下；(2) 部署痛点密集（chat template 出 bug 致「静默截断每个 prompt」、vLLM 多模态注册缺失、过度思考吃光上下文）。另有大量 uncensored/abliterated 版本冲榜（单版本最高 1.46M 下载），去审查需求体量巨大。
- **user_quote**: "🙏 The community needs Qwen 3.8 35B-A3B models and others, help us get there 🚀"（讨论区 #120，142 表情，18 回复）
- **top_comments**:
  - [HF discussion #162] "we miss smaller models like 3b - 4b - 5b models that run on tight vram"
  - [HF discussion #136 标题] "Horrible model .... Overthink eats all context tokens"（22 回复，最热吐槽帖）
  - [HF discussion #144 标题] "Le Cirque du Raisonnement: 27B Parameters, 262K Tokens of Hot Air, and a Packaging Bug That Silently Truncates Every Prompt"（17 回复）
- **ai_opportunity**: 开源旗舰模型的「部署即服务」窗口期生意：发布后 72 小时内提供验证过的 chat template、量化矩阵、vLLM/SGLang 配置模板；低显存优化版本分发。

## 8. MoneyPrinterTurbo 周增 10,647 星：AI 短视频量产需求持续爆炸
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/harry0703/MoneyPrinterTurbo
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: 116,032 stars，周增 10,647（周榜第一增量）；issue 区诉求：批量生成（#1155）、多视频不同脚本（#1157）、阿拉伯语字体（#1205）
- **description**: 关键词一键生成 HD 短视频的开源工具，本周涨星量全站第一。issue 区的增量诉求指向规模化运营（批量处理、脚本差异化避免重复、多语言字幕）——用户不是做一条视频，是做矩阵号。
- **user_quote**: "Uses AI models and an automated workflow to produce HD short videos from a topic or keyword"（仓库描述）
- **top_comments**:
  - [GitHub issue #1155 标题] "[Feature]: Batch processing of videos"
  - [GitHub issue #1157 标题] "[Feature]: Different Scripts when creating more than one video"
- **ai_opportunity**: 短视频矩阵号的托管量产平台（批量+去重+多语言+定时发布），开源版是获客漏斗，付费点在规模化与发布集成。

## 9. hermes-agent 高票诉求：订阅制 OAuth 接入与远程 agent + 本地工具执行
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc
- **source_date**: 2026-05-13（榜首 issue 创建日） | **fetched_at**: 2026-08-25
- **metrics**: repo 235,901 stars（+896 today）；top issues：Claude Agent SDK 订阅 OAuth 接入 +1:53；Searxng 默认搜索 +1:30；远程 agent + 本地工具执行 +1:26；agent 数据自动备份/版本控制 +1:24；ACP 多 agent CLI 编排 +1:24/24c
- **description**: 高票需求揭示通用 agent 的架构缺口：用户想用已付费的 Claude 订阅（而非再买 API key）驱动第三方 agent；想要远程大脑+本地手脚的分离架构；想要 agent 数据（~/.hermes/）自动备份版本控制。ACP（Agent Client Protocol）编排 issue 讨论 24 条，多 agent 互操作协议热度高。
- **user_quote**: "[Feature]: Claude Agent SDK model provider with subscription OAuth (Codex-style)"（issue #25267 标题，+1:53）
- **top_comments**:
  - [GitHub issue #18715 标题] "Support remote Hermes agent with local tool execution"（+1:26）
  - [GitHub issue #12238 标题] "Built-in Automatic Backup & Version Control for Agent Data (~/.hermes/)"（+1:24）
- **ai_opportunity**: 「订阅额度桥」（合法复用已购 LLM 订阅到多 agent）与 agent 状态备份/迁移工具；ACP 协议生态早期卡位。

## 10. 本地推理基础设施细分：omlx（Apple Silicon 推理服务器）与 FreeToken（边缘 MoE 推理）
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/jundot/omlx
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: omlx 20,562 stars 周增 1,689（Apple Silicon LLM 推理服务器，continuous batching + SSD 缓存，菜单栏常驻）；BAAI Hub 今日热度第一论文 FreeToken（热度 4934，2026-08-17 发表）：单工作站 GPU 跑 753B GLM-5.2，支持 20+ MoE 模型
- **description**: 消费级/边缘设备跑大模型的两条路线同时走热：产品侧 omlx 把 Mac 变成带批处理的推理服务器；研究侧 FreeToken 提出带宽自适应的边缘 MoE serving（CPU-GPU 协同 + 专家驻留管理），把个人电脑当弹性推理平台。旗舰级模型的本地化门槛在快速下降。
- **user_quote**: "LLM inference server for Apple Silicon with continuous batching and SSD caching, run from the macOS menu bar"（omlx 仓库描述）
- **top_comments**:
  - [BAAI Hub 论文摘要] FreeToken "supports 20+ MoE models, from 35B on a laptop up to a 753B GLM-5.2 on one workstation GPU; open-sourced at flashml.ai"
- **ai_opportunity**: Mac mini/Studio 集群的私有推理一体机方案（隐私敏感行业）；边缘 MoE serving 技术商业化窗口。

## 11. HF 数据集风向：具身/机器人数据与 agent 训练语料上位
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/datasets
- **source_date**: 空 | **fetched_at**: 2026-08-25
- **metrics**: trending 前 30：LightwheelAI 三连（EgoStandard/EgoPro/EgoDemo，第一人称具身数据）；noitomrobotics/HiPHI；nvidia/Cosmos3-DROID 37.2k 下载；markov-ai/cad-1000-hours 25.9k 下载；蒸馏语料 r0b0tlab/qwen3.8-max-glm5.2-kimi-k3-distillation 22.9M 行/207 赞；nvidia/Nemotron-SFT-SWE-v3.5（软件工程 SFT）；BytedTsinghua-SIA/CUDA-Agent-Ops-6K
- **description**: 数据集榜显示两条资本密集赛道：(1) 具身智能/机器人第一人称与 CAD 操作数据（LightwheelAI 一家三个数据集同时在榜，1000 小时 CAD 操作录屏）；(2) 旗舰模型蒸馏语料与 agent 操作轨迹（CUDA 优化 agent 轨迹、SWE SFT），开源社区在系统性地把闭源旗舰能力蒸馏进开源模型。另注意 Anthropic/claude-protein-binder-design（36.1 万行蛋白结合物设计数据）进入 trending #2，AI for Science 数据开始官方开源。
- **user_quote**: 空（榜单快照，无单条用户发言）
- **ai_opportunity**: 垂直操作轨迹数据（CAD/EDA/专业软件操作录制）是新的卖水生意；具身数据采集与标注管线服务。

## 12. BAAI 热榜研究信号：推理成本工程成为论文主旋律
- **type**: trend | **platform**: baai_hub | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 空（榜单快照；榜首论文发表于 2026-08-17） | **fetched_at**: 2026-08-25
- **metrics**: 今日热榜前 10 中 5 篇为推理效率/成本方向：FreeToken（热度 4934）、The Embedder's Dilemma（95）、Sleep-time Compute（71）、FlashAttention-V（45）、Sarathi-Serve（38）
- **description**: 热榜结构显示研究重心从能力转向单位成本：Embedder's Dilemma 量化了「LLM 当嵌入模型用最高贵 1431 倍」（$154 vs $0.11 跑完整个 benchmark）；Sleep-time Compute 提出查询到达前离线预计算、等准确率省 5 倍推理算力；EnvHarness 做 agent 训练环境改造。对产品团队的直接含义：嵌入/分类任务别用 LLM，推理成本还有数量级优化空间。
- **user_quote**: "Best scores nearly tie (77.6 vs 77.2), but a full benchmark run costs up to 1431× more with an LLM ($154 vs $0.11)"（The Embedder's Dilemma 摘要，BAAI Hub 转载）
- **ai_opportunity**: LLM 应用成本审计与「降级路由」服务（哪些调用可换嵌入模型/小模型）；sleep-time 预计算作为 agent 平台的差异化特性。
