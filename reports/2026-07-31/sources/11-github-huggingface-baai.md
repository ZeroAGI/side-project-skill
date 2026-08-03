# 11 — GitHub Trending + HuggingFace + 智源社区 2026-07-31

> 组内信号：12 条 | 二手转述：0 条（0%）
> 最强证据线：GitHub 日榜+周榜被「agent skill / harness 工程化」品类整体占据（mattpocock/skills 周增 12,147、i-have-adhd +4,978、book-to-skill +4,135、adhd tree-of-thought +791、affaan-m/ECC 日增 804、last30days-skill 日增 378），而这些仓库的高票 issue 全部指向同一个缺口：skill 的编排、追踪与完成态管理没人做。第二条线是超大模型的可及性落差——Kimi-K3（2.8T）社区里真人自发算部署成本，从 $100k DGX 集群到 0.05 tok/s 的旧机器 SSD 流式推理。第三条线是 agent 原生基础设施（agent 专用浏览器、agent 参与的协作 relay、确定性+LLM 混合 code review）。
> 渠道故障：hub.baai.ac.cn 首页为客户端渲染，WebFetch 仅取回站点骨架（零论文标题）；改抓 /papers 子页成功。GitHub 未登录时 issue 列表不渲染 reaction/comment 数字，仅能取按票数排序后的相对顺序（已在 metrics 注明）。本组未使用 WebSearch。

---

## 1. Agent skill 仓库集体霸榜，缺口全在「skill 的工程化管理」
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/mattpocock/skills
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: 196,871 stars（本周 +12,147，weekly trending #6）；17.0k forks；250 open issues / 5 open PRs；316 commits；MIT
- **description**: Matt Pocock 把自己 `.agents` 目录开源，成为本周 star 增量第二高的仓库，定位明确反对「重流程」框架。skill 分成用户触发的编排器（/grill-me、/to-spec、/implement、/improve-codebase-architecture）与模型自主调用的（tdd、diagnosing-bugs、code-review、domain-modeling），用一次性 `/setup-matt-pocock-skills` 配置 issue tracker、triage 标签与文档位置。针对四类失败模式：与 agent 目标错位、输出冗长（用 `CONTEXT.md` 建共享项目语言）、代码跑不通（红绿重构反馈环）、架构腐化。
- **user_quote**: "My agent skills that I use every day to do real engineering - not vibe coding."
- **top_comments**:
  - [README] "small, easy to adapt, and composable" / "work with any model" —— 对标那些 "take away your control" 的重流程方案
  - [issue #508 标题] "/implement has no completion step, finished tickets are never marked done"
  - [issue #429 标题] "/implement should use git worktrees to isolate parallel sessions"
- **ai_opportunity**: skill 生态已有分发（plugin marketplace / npx skills），缺的是运行时治理层：票据完成态回写、并行 session 的 worktree 隔离、多票据自动排序执行、skill 命名空间冲突。做「skill orchestrator / registry」负责依赖解析、命名空间、执行追踪与完成回写，等于把这批高票 issue 一次性商品化。

## 2. /implement 缺完成态与隔离：skill 编排层的真实需求清单
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/mattpocock/skills/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc
- **source_date**: 空（列表页快照） | **fetched_at**: 2026-07-31
- **metrics**: 250 open issues；按 👍 排序首页 12 条；未登录 reaction 绝对数不渲染，顺序即票数排名
- **description**: 票数最高的开放 issue 依次：#21 `marketplace.json` 插件市场支持（Mar 22, 2026, enhancement + ready-for-human）、#483 /code-review 与 Claude Code 内建命令撞名（Jul 9, 2026）、#312 `.claude-plugin/marketplace.json` 外部安装（Jun 8, 2026）、#341 grill-with-docs 答案在 PRD→issue→实现链路不可追溯（Jun 13, 2026）、#188 新 skill 提案 /visualize-architecture（May 14, 2026, needs-info）、#47 to-issues 应挂原生 sub-issue（Apr 21, 2026）、#207 CONTEXT.md 是否该叫 GLOSSARY.md（May 15, 2026）、#618 /implement 用 subagent 自动排序多票据（Jul 19, 2026）、#362 to-prd 不适合实现导向的设计讨论（Jun 22, 2026）、#429 worktree 隔离并行 session（Jul 2, 2026）、#508 /implement 无完成步骤（Jul 10, 2026）、#147 重要变更走 GitHub releases（May 7, 2026）。主题集中在分发/安装、命名与语义、以及执行链路的可追溯性与完成态三类。
- **user_quote**: "grill-with-docs: resolved answers are not traceable through PRD, issues, and implementation"
- **top_comments**:
  - [issue #618 标题] "Feature Request: `/implement` support for auto-sequencing multiple tickets via subagents"
  - [issue #47 标题] "to-issues: attach children as native sub-issues, not just body references"
  - [issue #362 标题] "`to-prd` may not fit implementation-heavy design discussions"
- **ai_opportunity**: 「讨论→PRD→issue→PR」的决策溯源链被反复要求且没人做：把每个已解决问题的答案锚定到具体 issue 与 commit，让评审能反查「这个设计当初为什么这么定」。在受监管行业从 nice-to-have 变成合规必需，可做付费的 agent 决策审计产品。

## 3. 「让 agent 别把答案埋起来」成为一个可 star 14k 的独立品类
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/ayghri/i-have-adhd
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: 14,402 stars（本周 +4,978，weekly trending #4）；772 forks；40 watchers；MIT；SKILL.md 内 10 条规则
- **description**: 一个纯输出格式化 skill，支持 Claude Code / Codex / Cursor / Gemini：行动先行、步骤编号、砍掉客套。10 条规则包括每轮重述状态、以分钟给时间估计、列表最多 5 项、去掉开场铺垫与结尾寄语。README 的 before/after 对照非常具体——「before」在上下文里绕圈并以 "Hope this helps! Let me know if you want to dig deeper." 收尾，「after」开头直接给要跑的命令、结尾只留一个下一步。同类的 UditAkhourii/adhd（tree-of-thought 并行发散+打分剪枝，2,925 stars，本周 +791）说明「agent 输出纪律」已经细分出多个子流派。
- **user_quote**: "A skill to stop your coding agent from burying the answer. ADHD-friendly output."
- **top_comments**:
  - [README] "stops it from burying the answer. Action first. Steps numbered. No \"Hope this helps!\""
  - [README 结尾] star it "if it saved you one scroll past one \"Great question!\""
- **ai_opportunity**: 用户为「更短的输出」愿意装插件，说明模型厂商的默认冗长是一个被市场定价的缺陷。可产品化方向：面向团队的 agent 输出规范中心——把格式纪律、术语表、回复长度上限做成组织级策略，跨模型跨 CLI 统一下发，而非每个开发者各装一份 SKILL.md。

## 4. 阿里开源 code review：明确论证「纯 LLM 评审不可靠」，用确定性流水线兜底
- **type**: product_market | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/alibaba/open-code-review
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: 16,753 stars（本周 +5,322，weekly trending #5）；1.1k forks；438 commits；Apache-2.0；基准覆盖 50 repos / 200 PRs / 10 语言 / 1,505 条标注问题
- **description**: 阿里把内部工具开源为 CLI（`ocr`），README 称其「has served tens of thousands of developers and identified millions of code defects」。它解析 git diff，把变更文件路由给可配置的 LLM agent（可读文件、可搜仓库），产出行级评论；无有效 diff 时 `ocr scan` 走全文件评审。核心论点是纯语言驱动架构缺硬约束，故把必须精确的步骤交给工程代码：文件筛选、相关文件成组（示例把 `message_en.properties` 与 `message_zh.properties` 配对）分派给隔离上下文的 sub-agent、按文件模板匹配规则、独立的定位与反思模块纠正位置与内容准确性。基准结果称在同模型下精度与 F1 高于通用 agent，token 约为其九分之一，召回率下降是刻意取舍。
- **user_quote**: "a purely language-driven architecture lacks hard constraints on the review process"
- **top_comments**:
  - [README 失败模式一] "Incomplete coverage" —— agent "cut corners," 大改动下评审部分文件、跳过其他
  - [README 失败模式二] "Position drift" —— "reported issues frequently don't match the actual code location."
  - [README 失败模式三] "Unstable quality" —— 自然语言驱动的 Skill 难调试，小改 prompt 就会大幅波动
- **ai_opportunity**: 「确定性流水线 + LLM 判断」的混合架构是本期最可复用的方法论，可平移到任何需要完整覆盖与精确定位的 agent 任务（合规检查、迁移改造、测试生成）。同时 open-code-review 的高票 issue 暴露了它自己的空白：#91 要求把结论回帖到 GitHub PR、#59 要 PR 感知评审——即 CI/forge 集成层还空着，且没有 GitLab 相关请求，这是垂直市场的空位。

## 5. open-code-review 高票 issue：CI 回帖与「复用已有订阅登录」是最大呼声
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/alibaba/open-code-review/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc
- **source_date**: 空（列表页快照） | **fetched_at**: 2026-07-31
- **metrics**: 37 open issues，首页显示 12 条；未登录 reaction 绝对数不渲染，顺序即票数排名；页面部分加载失败故排名可能不完整
- **description**: 按票数顺序：#505 查看已存 session 评审意见的命令（Jul 25, 2026）、#56 支持 Google Vertex AI 上的 Claude（Jun 5, 2026, good first issue）、#331 复用 Claude Code 现有登录会话（Team/Pro 套餐）而非另配 API key（Jul 9, 2026）、#59 PR 感知评审（Jun 6, 2026）、#585 opencode 中的 OAuth / 预配置 provider（Jul 29, 2026）、#167 BUG 重复+文件名错误（Jun 17, 2026, bug/verified）、#207 更丰富的评审上下文——自动纳入 AGENTS.md 与 spec↔file 映射（Jun 24, 2026）、#229 按 provider 的 session affinity 以命中 prompt caching（Jun 26, 2026）、#91 可选地把发现回帖到 GitHub PR（Jun 10, 2026）、#313 大文件处理策略（Jul 7, 2026）、#369 稳定的发现指纹与语义聚类（Jul 14, 2026）、#368 provider 感知的部分重试并保留 lineage（Jul 14, 2026）。三条主线：forge/CI 集成、模型托管与鉴权、成本与稳定性（caching、重试、指纹去重）。
- **user_quote**: "Support using Claude Code's existing login session (Team/Pro plan) instead of requiring a separate Anthropic API key"
- **top_comments**:
  - [issue #91 标题] "OCR should optionally post its findings to the GitHub PR Issue"
  - [issue #207 标题] "Feature request: richer review context — auto-include AGENTS.md + spec↔file mapping"
  - [issue #369 标题] "Add stable finding fingerprints and semantic clustering"
- **ai_opportunity**: #331/#585 反复要求「别再让我配第二把 API key，用我已有的订阅」——订阅额度与 API 计费的割裂是全行业痛点，做统一凭据代理（把订阅会话安全地暴露给第三方工具，带审计与配额隔离）有明确需求。#369 的「发现指纹+语义聚类」则指向另一个产品：跨多次评审的问题去重与趋势统计，即代码质量的时间序列层。

## 6. Kimi-K3（2.8T 参数）社区自发算「穷人部署」成本：从 $100k 集群到 0.05 tok/s
- **type**: pain_point | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/moonshotai/Kimi-K3/discussions/121
- **source_date**: 空（讨论帖，页面未给出创建日期） | **fetched_at**: 2026-07-31
- **metrics**: 主帖 16 条回复；母模型 Kimi-K3 为 HF trending #1，2.8T 参数，388k 下载 / 9.1k likes，4 天前更新；仓库标签含 8-bit precision、compressed-tensors；license 字段为 "kimi-k3"；模型讨论区共 148 open / 11 closed
- **description**: 一条纯技术讨论帖，真实用户逐条核算把 2.8T 参数模型跑在非数据中心硬件上的可行性与代价，构成超大开源模型「可及性缺口」的一手证据。分歧点非常具体：CPU 缺原生 MXFP4 导致反量化开销、多路 EPYC + 32 内存通道能到约 5 tok/s、16 台 DGX Spark 用 100G/200G DAC 组网约 $100k 被称为「最低入场价」、以及 SSD 流式推理引擎（Colibri）声称几乎不用 RAM/GPU 就能达到 2-3 tok/s。同一讨论区里还有 #148「Waste engine: Run the full 2.78T-parameter Kimi K3 on a laptop」（10 回复）、#115「众筹部署全量K3 有想法的铁子聊起来」（11 回复）、#117「Solving Kimi's Computing Issues via External Inference Providers」（5 回复）、#146 有人把权重放上 BitTorrent（2 回复）、#129「给我一张5090 我要用它托起月之暗面」（2 回复）——五条独立线索都在解同一个问题。
- **user_quote**: "do we have any similar models optimized for cpus not gpus?"
- **top_comments**:
  - [HF 讨论 #121，ash-x-kingsley] "a cluster of 16 DGX Sparks networked using either 100G or 200G DAC cables" 花费 "costs about $100k currently"，并称这是 "the minimum entry price to run this model"；CPU 路线则是 "going to be too slow to even be worth the time to explore."
  - [HF 讨论 #121，krustik] Colibri 引擎 "just from SSD utilyzing its storage size (almost no Ram, no GPU)"，部分用户能到 "even 2-3 token/s"；量化质量上他认为 "normal quality is Q8 but they can run only maybe Q3-Q5 trash for thousands $."
  - [HF 讨论 #121，lianxu] "current off the shelf cpus do not have the capabilities to compute a causal model at this size at a satiable rate." 以及 "life is short and time is precious. please don't do it to yourself."
- **ai_opportunity**: 三个可落地方向。一是「部署成本计算器」：输入模型规模+目标 tok/s，输出硬件配置、采购成本与每百万 token 成本，直接把 #121 里手算的过程产品化。二是 SSD/存储流式推理引擎的工程化与基准化——krustik 与 ianncity 就「llama.cpp 是否已覆盖」明确对立，缺的是可复现的第三方评测。三是 #115 的「众筹部署」：为超大开源模型做算力团购与分时租用的撮合平台，需求是社区自己喊出来的。

## 7. 百度 Unlimited-OCR 月下载 260 万：长文档解析成为独立能力赛道
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/baidu/Unlimited-OCR
- **source_date**: 2026-06-22（模型卡给出的发布日期，论文 arXiv 2606.23050 次日） | **fetched_at**: 2026-07-31
- **metrics**: 3B 参数，BF16 / Safetensors；上月下载 2,598,659；3.6k likes；MIT；HF trending #3；ParseBench 均值 46.17，text content 86.81，text formatting 0.97
- **description**: 一个 3B 的多语言视觉-语言 OCR 模型，面向图片、多页输入与 PDF（先转图）。百度把它定位为 DeepSeek-OCR 路线的延伸，并致谢 DeepSeek-OCR、DeepSeek-OCR-2 与 PaddleOCR。约束写得很直白：单图推理有 gundam（base_size 1024、image_size 640、开 crop）与 base 两档预设，而多页/PDF 只能用 base；OmniDocBench 打分还需额外后处理剥掉 `<|det|>` 标记；需要 `trust_remote_code=True`，且目前没有任何 Inference Provider 托管，只能自建（Transformers / vLLM / SGLang）。MIT 许可 + 3B 体量 + 月下载 260 万，说明文档解析是当前最容易自托管落地的商业能力。
- **user_quote**: "Welcome the Era of One-shot Long-horizon Parsing."
- **top_comments**:
  - [模型卡] "aiming to push Deepseek-OCR one step further"
  - [模型卡限制] "Multi page / PDF only uses base (image_size=1024)."
- **ai_opportunity**: 「没有 Inference Provider 托管 + 需要 trust_remote_code + 多页有额外限制」正好是托管服务的空位：把这个 MIT 模型包成带页面级并发、版式还原与结构化输出（表格/公式/阅读顺序）的 API，垂直到发票、合同、病历、券商研报等场景。3B 的体量意味着单位成本足以支撑私有化部署报价。

## 8. Agent 专用浏览器：共享登录态是卖点，也是尚无人解决的权限边界问题
- **type**: product_market | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/citrolabs/ego-lite
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: 6,729 stars（本周 +5,037，weekly trending #2）；325 forks；16 watchers；239 commits；MIT；自报「complex workflows finish up to 2.5× faster」（4 个任务、对比 Vercel agent-browser）
- **description**: macOS 上的 agent 专用浏览器：每个 agent 一个隔离 Space，任意 agent CLI（Claude Code / Codex / Cursor）通过 `ego-browser` skill 驱动，暴露页内 JavaScript 工具（snapshot、fill、click、wait、navigate、capture），让 agent 写一段代码而不是串联多次 CLI 调用。目前仅 macOS，Windows/Linux 在路线图上；「经验沉淀」（把成功动作蒸馏成可复用工具，宣称再快 5x）标注为 coming soon。基准是厂商自测、单一对手、四个任务，对比表同样是自家撰写。安全面值得注意：安装时可迁移 Chrome 数据，agent 因此继承你的登录、cookie、扩展与书签——这既是核心便利也是核心风险，一个能用你已登录会话的 agent 可以在任何站点以你的身份行事；浏览器二进制托管在 `cdn.ego.app`，不在 MIT 仓库内，即发行版并不等于可审计的源码；其中一条安装路径是把 prompt 粘给 agent 让它自己去远端拉取并执行安装说明。
- **user_quote**: "need a separate browser to drive, logins never carry cleanly, and you and the agent end up fighting for the same tabs"
- **top_comments**:
  - [README] "one browser designed from the start for the two of you to share"，agent "can always reach your real logins and tabs."
- **ai_opportunity**: 共享登录态解决了可用性，却把「agent 能以我的身份做什么」完全敞开。缺的是**会话级权限与审计层**：按站点/账户授权、只读与可写分级、动作前确认、全量操作留痕与回放。这在企业采购里是硬门槛，可以做成独立的 agent 浏览器治理产品，而不必自己造浏览器。

## 9. block/buzz：把 agent 当同事而非 cron job，统一签名事件日志
- **type**: trend | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/block/buzz
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: 18,753 stars（本周 +12,444，weekly trending #1，本周增量榜首）；1.8k forks；89 watchers；Apache-2.0；Block, Inc. 出品
- **description**: 可自托管的协作空间，人与 agent 同处一室，底层是 Nostr relay。消息、反应、工作流步骤、评审批准、git 事件都作为签名事件落进同一份日志，作者是人还是进程不改变记录的形状。技术形态是 Rust workspace，核心 `buzz-relay`（Axum WS + REST）后接 Postgres、Redis、S3/MinIO；桌面端 Tauri + React，移动端 Flutter 仍在接线；`buzz-cli` 是 agent 优先的 JSON 进 JSON 出。Block 内部另有预连内部 relay 的构建版本。
- **user_quote**: "Agents are part of the room, not haunted cron jobs."
- **top_comments**:
  - [README] "one substrate instead of seven tabs pretending they know about each other"
  - [README] agent 获得 "the same affordances as a human teammate, the same audit trail, a different keypair."
- **ai_opportunity**: 「同一把私钥、同一条审计链」是本期最值得注意的架构主张：agent 行为的可审计性不靠事后日志拼接，而靠事件在产生时就被签名。可产品化的窄切口是「agent 行为审计中间件」——不重造协作平台，而是给现有 Slack/Jira/GitHub 工作流补一层不可篡改的 agent 动作账本，直接对接合规与保险场景。

## 10. OpenWork（Claude Cowork 开源替代）高票 issue：本地模型与私有化是最集中的诉求
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/different-ai/openwork/issues/2183
- **source_date**: 2026-06-11（issue 创建日） | **fetched_at**: 2026-07-31
- **metrics**: 仓库 18,980 stars（日增 915，daily trending #4）；1.9k forks；147 open issues / 267 open PRs；该 issue 状态 Open、无 assignee 无 label；页面提示 "Reactions are currently unavailable"，reaction 数不可见
- **description**: OpenWork 自我定位为「the open-source alternative to Claude Cowork (powered by opencode)」。#2183 直接要求接 Ollama 跑本机私有模型，提交者在「是否愿意自己实现」勾了 Yes。同一仓库按票数排序的开放 issue 里，私有化/自主权是反复出现的主线：#1412「Future licensing: is OpenWork going closed source? - Answer: No」（Apr 9, 2026，票数第一，说明社区最担心的是开源承诺）、#1799 无企业云策略就无法在本地关掉 OpenCode Zen provider（May 15, 2026）、#1928 带本地模型工作流与 reviewer 模型的私有 worker 模式（May 23, 2026）、#2084 要求恢复 Tauri→Electron 迁移中被砍掉的 .deb/.rpm 打包（Jun 3, 2026）。另一条线是被官方放弃的需求：按评论数排序的结果里 #503「[Bug]: task session list」与 #860「session 历史在 Windows 11 重启后无法保存恢复」都被标为 "Status: Not planned (skipped)"——即会话持久化在 Windows 上是官方明确不修的洞。
- **user_quote**: "Can't connect local private model which is running on the machine"
- **top_comments**:
  - [issue #2183 正文] "I saw we have only cloud option available right now"
  - [issue #1799 标题] "Impossible to disable OpenCode Zen provider locally without enterprise cloud policy"
  - [issue #860 标题，官方标记 not planned] "[Bug]: Session history cannot be saved and restored after app restart/exit on Windows 11 Desktop v0.11.142"
- **ai_opportunity**: 官方标 not planned 的需求是第三方的现成领地：Windows 上的 agent 会话持久化与恢复（#860）、以及跨重启的 session 列表（#503）可以做成独立插件。更大的一块是「私有 worker 模式」（#1928）：本地模型执行 + reviewer 模型复核的组合，正对准不能把代码发出内网的团队，是可直接收费的私有化部署方案。

## 11. OmniRoute 3.5 万星的多 provider 网关：故障转移与会话亲和性是真实运维痛点
- **type**: pain_point | **platform**: github | **secondhand**: false
- **source_url**: https://github.com/diegosouzapw/OmniRoute/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc
- **source_date**: 空（列表页快照，单条 issue 日期见下） | **fetched_at**: 2026-07-31
- **metrics**: 35,429 stars（本周 +8,464，weekly trending #7）；4.6k forks；271 open issues / 142 open PRs；MIT；宣称一个 endpoint 覆盖 290+ providers、500+ models、自动 fallback；未登录 reaction 绝对数不渲染，顺序即票数排名
- **description**: 按票数顺序的开放 issue：#6778 Codex GPT-5.6 模型被判为不支持（Jul 9, 2026, bug/keep-open/providers）、#7854 Qwen Cloud token 套餐该新建 provider 还是改 alibaba/bailian（Jul 20, 2026）、#9008 Anthropic API adapter 中工具名大小写导致 tool call 失败（Jul 30, 2026, bug）、#7132 Windows Electron 冷启动 sql.js OOM 后陷入 Database closed 循环（Jul 14, 2026, startup）、#6358 Electron 桌面版启动 Internal Server Error（3.8.45 回归，Jul 6, 2026）、#8576 从活跃发布分支发 `:next` Docker tag（Jul 25, 2026）、#6364 MCP/A2A 网关（Jul 6, 2026, backlog）、#8874 codex CLI 把 wire_api 重置为 legacy "chat" 而非 "responses"（Jul 28, 2026）、#8973 "your cookie must include an ecto1"（Jul 30, 2026）、#8928 STREAM_EARLY_EOF 不清除 session affinity 导致重试被钉在已故障账号（Jul 29, 2026）、#8075 可插拔的外部持久状态库支持 PostgreSQL/MySQL（Jul 22, 2026, backlog）、#8057 允许对无自定义处理的模型使用 "max" reasoning level（Jul 21, 2026）。
- **user_quote**: "STREAM_EARLY_EOF does not evict session affinity, pinning retries to a failed account"
- **top_comments**:
  - [issue #9008 标题] "Tool call failure due to tool name casing in Anthropic API adapter"
  - [issue #6778 标题] "Codex GPT-5.6 models rejected as unsupported"
  - [issue #6364 摘要] 提议的 MCP/A2A 网关要 "aggregate upstream MCP servers behind one endpoint"
- **ai_opportunity**: 高票 issue 全是「多 provider 抽象的漏水处」：适配器语义差异（工具名大小写、wire_api、reasoning level 透传）、新模型上线滞后、故障账号的亲和性未失效。这说明 LLM 网关的竞争点已经从「支持多少家」转向**故障域正确性**——可做的产品是网关一致性测试套件与合成监控：持续对每个 provider 跑工具调用、流式中断、reasoning 透传的契约测试，出差异即告警。#6364 把 MCP server 聚合到单一 endpoint 则是下一层同构需求（模型路由之后是工具路由）。

## 12. 智源社区今日热度榜：注意力/推理效率与「测试时计算」占据前列
- **type**: trend | **platform**: baai_hub | **secondhand**: false
- **source_url**: https://hub.baai.ac.cn/papers
- **source_date**: 空（今日热度榜快照；单篇论文日期见下） | **fetched_at**: 2026-07-31
- **metrics**: 今日榜 10 篇，热度分 845 至 161；页面注明数据每日零点刷新、热度由跨平台互动量计算
- **description**: 按热度：#1 Dream-Cubed（体素级 Minecraft 数据集 + 立方体扩散模型生成可交互 3D 世界，含 inpainting/outpainting 与改造的 FID，2026-04-22，热度 845）；#2 Coconut 连续潜空间推理（把最后隐藏态作为输入 embedding 回灌，以更少思考 token 实现类 BFS 探索，2024-12-09，504）；#3 并行解码蒸馏用于快速图像/视频生成（单次前向预测多个去噪步，4–8 NFE 达 SOTA 且避开 VSD/对抗蒸馏的模式崩塌，2026-07-28，380）；#4 打通算力最优与数据最优预训练（引入 token 有效性函数 η 刻画重复/改写 token，划出算力受限、数据受限、模型受限三区，2026-07-28，308）；#5 门控注意力（30 个变体 / 3.5T token，SDPA 后加 head-wise sigmoid 门，缓解 attention sink 并助长上下文外推，2025-05-10，237）；#6 Mamba 系语言模型实证（8B 规模对比，混合架构在 12 个任务全胜，纯 SSM 在复制与上下文检索上落后，2024-06-12，237）；#7 门控线性注意力 + 硬件高效训练（分块并行形式，4K 以上序列超过 FlashAttention-2，2023-12-11，237）；#8 代码优化的强化学习（DMC-Optim 基准 + 正确性/速度联合奖励 + 适配噪声计时的 GRPO，7B 与 32B 上 top-50% pass@1 显著提升，2026-07-28，183）；#9 语言模型是单射因而可逆（证明不同 token 序列映射到不同表示，数十亿次碰撞测试验证，并给出 SipIt 从隐藏态重建输入文本，2025-10-17，178）；#10 局部专家混合（用模型合并近似逐 prompt 的测试时训练，1B base 上推理快 100 倍以上，2025-05-20，161）。
- **user_quote**: 空（榜单页无用户评论区）
- **top_comments**: 空（该页仅有热度分与摘要，无评论）
- **ai_opportunity**: 两条工程可落地线。一是效率栈（#3 并行解码蒸馏、#5/#7 门控注意力、#10 测试时模型合并）都在压低单位推理成本，正好对应信号 6 里 2.8T 模型跑不动的现实缺口——把这些方法打包成「推理成本优化服务」比训新模型现实得多。二是 #9 的可逆性是安全红线：既然能从隐藏态用 SipIt 重建原始输入文本，任何「只传 embedding 不传原文」的隐私方案都失效，这直接推翻了一批 RAG/向量数据库厂商的隐私话术，可做成向量存储的泄露风险审计工具。#8 的代码优化 RL 则给「性能回归自动修复」提供了可复现基准。



