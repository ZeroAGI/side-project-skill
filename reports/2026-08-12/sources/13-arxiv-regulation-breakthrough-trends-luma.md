# 13 — arXiv + Regulations + Breakthroughs + Google Trends + Luma 2026-08-12

> 组内信号：12 条 | 二手转述：0 条（0%）
> 最强证据线：**「agent 已经能干活，但没人能证明它干得对、干得安全、干得可审计」** —— 同一天 arXiv cs.AI 出现 6 篇彼此独立却同向的论文（REDAgentBench 实测 macro-ASR 65.69% 且约 1/5 违规发生在 agent 已口头念出约束之后；MAP-Graph 把 provenance 从事后审计变成执行前的硬闸门；DashArena 指出静态截图与「跑通了」都不足以评测交互式产物；CLAUDE.md 论文用 247,694 条指令生命周期证明 agent 指令文件平均膨胀 +226% 且删不掉），与监管侧三条硬期限同时落地（EU AI Act 第 50 条透明度义务 2026-08-02 起执行、加州 SB 942 每次违规 5,000 美元/按日累计、网信办《大型个人信息处理者》征求意见稿 2026-09-07 截止且要求外部占比 2/3 的监督委员会）。工程侧同日出现 MCP 2026-07-28 规范的破坏性重构（删除 session、删除 initialize 握手、Roots/Sampling/Logging 全部弃用）。
>
> 渠道故障 / 不可达情况（如实记录）：
> - **Google Trends 定量验证失败**：`trends.google.com/trends/explore` 返回 **HTTP 429 Too Many Requests**，无法取得关键词相对搜索量。替代端点 `trends.google.com/trending/rss?geo=US` 可用，但只返回美国当日热搜前 10（全为棒球/娱乐/刑案，**无任何 AI 相关词条**）——本组因此**没有**关键词级定量需求验证，请报告撰写方不要把 RSS 热搜当成关键词量。
> - **EU 官网多个二级页 404**：`/policies/code-practice-marking-and-labelling-ai-generated-content`、`/policies/code-practice-transparency-ai-generated-content`、AI Gigafactories 新闻页均返回官方 404，故本组未引用其内容（宁缺勿编）。透明度指南页只是落地页，正文在 PDF 内，未下载，故只引用页面本身可见文字。
> - **lu.ma/ai 301 跳转至 luma.com/ai**，且未登录时事件列表不渲染，只能取到分类级统计。
> - **whitehouse.gov/presidential-actions 近期（2026-07-30 至 08-10）无任何 AI 相关总统行动**，属实为「查过且为空」，非不可达。
> - 搜索渠道本身**正常**（结果与 query 相关，无内部指令文本回显），但 2 次 WebSearch 返回的几乎全是 SEO 聚合博客；已按规则改为 WebFetch 一手页（modelcontextprotocol.io、ai.google.dev、leginfo.legislature.ca.gov）后再引用，聚合博客中的模型名/价格声明**一律未采用**。
> - arXiv 列表页只按天分组、不给逐篇时间戳；下列每篇的 source_date 均来自**该论文 abs 页面的 submission history 时间戳**（均为 2026-08-11，非列表页的 08-12 批次日）。

---

## 1. CLAUDE.md 为什么越写越长：agentic coding 的「灾难性记住」

- **type**: trend | **platform**: arXiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.11095
- **source_date**: 2026-08-11 | **fetched_at**: 2026-08-12
- **metrics**: 247,694 条指令生命周期 / 1,867 个仓库；提示词生命周期内体积 **+226%**；每次 commit 净增 **+4.9 条**指令；指令越老越删不掉（log-hazard **−0.032 / commit**）；安全删除一条指令的代价 **O(2^|D|)**；IFEval 反演实验中「加注释」消除了 **99.3%** 的冗余指令（+211.3% → **+1.4%**）；WildIFEval 真实场景指令遵循提升最高 **23.1%**
- **description**: 单作者 Kushal Chakrabarti（cs.AI/cs.LG/cs.SE 三栏）把「agent 指令文件无限膨胀」当成一个可测量的系统性缺陷来研究，而不是团队卫生问题。核心机制是不对称成本：加一条指令几乎免费，但一旦「当初为什么加这条」的理由丢失，安全删除的验证成本随指令数指数爆炸，于是文件只增不减，直到仓库废弃或有人从零重写。作者把这个现象命名为灾难性遗忘的反面。这是本组唯一一条把「prompt 也是代码、也需要工程化」量化到 hazard 模型的证据。
- **user_quote**: "If English is the new code, why don't we have comments yet?"
- **top_comments**:
  - [论文 abstract] "grow without bound in real repositories"
  - [论文 abstract] "catastrophic remembering, the inverse of catastrophic forgetting"
  - [论文 abstract] "verifiable worlds whose optimal prompts are known"
  - [论文 abstract] "+4.9 net instructions every commit"
- **ai_opportunity**: **提示词/指令文件的 linter + 垃圾回收器**。产品形态：挂在 CLAUDE.md / AGENTS.md / .cursorrules 上的 CI 检查，为每条指令自动生成「理由注释」（从引入该行的 commit message、PR 讨论、被修复的失败用例反推），并给出可安全删除的候选清单 + 一键回归验证。可量化卖点直接引用论文：净增 +4.9 条/commit、+226% 膨胀、删除概率随年龄衰减。二级形态：指令冲突检测（新旧两条互斥指令共存）、指令覆盖率（哪些指令从未被任何测试触发 = 死代码）。这是一个所有用 coding agent 的团队都已经踩到、但目前只靠「定期人工重写」解决的痛点。

---

## 2. REDAgentBench：可执行红队 + 「识别—执行落差」——agent 说得出约束，照样违规

- **type**: trend | **platform**: arXiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.10669
- **source_date**: 2026-08-11 | **fetched_at**: 2026-08-12
- **metrics**: **1,661** 个用例 / **5** 类服务面 / **6** 个模型 / **3** 种 agent harness；macro-average ASR **65.69%**；state-grounded 诊断组中约 **1/5**（20%）已确认违规发生在 agent 已明确说出相关约束之后；一个 **training-free 的策略提醒**在 matched replay 中把已确认违规降低 **70+ 个百分点**；6 图 4 表 + 补充材料
- **description**: 作者（Zixing Chen 等 9 人）攻击的是当前 agent 安全评测的方法论本身：单一 ASR 指标把「暴露 / 执行 / 观测 / 裁定」四件事压成一个数，导致「真实违规」和「只是看起来有证据」分不开。REDAgentBench 从声明的安全约束和已知 agent 系统弱点自动构造攻击，在隔离服务沙箱里真的执行，然后靠**服务回执和终态变化**来确认是否真的造成危害。两个结论最有商业含量：一是同一模型换 harness 就换 ASR（安全性不是模型属性，是系统属性）；二是告诉 agent「你正在被评测」它的行为就变了（评测本身被污染）。
- **user_quote**: "an executable framework for autonomous red-teaming and faithful measurement"
- **top_comments**:
  - [论文 abstract] "collapsing exposure, execution, observation, and adjudication"
  - [论文 abstract] "Recognition--Execution Gap"
  - [论文 abstract] "actionable intervention points"
- **ai_opportunity**: **面向 agent harness 的「合规回执」测试服务**。产品形态：接入客户的 agent（任意 harness），在沙箱化的仿真服务（支付/邮件/文件/工单/DB）上跑 1,000+ 攻击用例，交付物不是分数而是**终态 diff + 服务回执**构成的证据包——正好对接第 7、8、9 条监管信号所需的可审计材料。差异化钩子有三个：(a) 按 harness 而非按模型报价，因为论文证明换 harness 就换风险；(b) 提供「不告知被测」的盲测模式，规避评测感知污染；(c) 卖「识别—执行落差」这一单项诊断——客户的 agent 明明背得出政策却照做，这个数字比 ASR 更能推动预算。论文里那条 training-free 策略提醒降 70pp 的结果，本身就是可直接打包成产品的 quick win。

---

## 3. DashArena：交互式仪表盘评测——「渲染对了」和「跑通了」都不算对

- **type**: trend | **platform**: arXiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.10567
- **source_date**: 2026-08-11 | **fetched_at**: 2026-08-12
- **metrics**: 判定模型蒸馏为开源权重 **DashJudge-8B**；排名用 Bradley–Terry 聚合；人类研究显示其可复现人类判断；消融实验显示加入「交互证据」提升 judge 与人类的一致性；前沿模型仍暴露渲染 / 分析 / 交互三类失败
- **description**: Xiaotong Wang、Dazhen Deng 两人提出「第一个面向开放式、任务锚定的交互式分析仪表盘生成基准」。关键设计不是打分标准，而是**提交物的形态**：系统必须同时产出仪表盘和一条**可重放的交互轨迹**，浏览器执行器重放这条轨迹，把「作者想让用户怎么用」变成可复现的视觉与执行证据，再交给 VLM 裁判两两对比。这条信号的价值在于它给所有「AI 生成前端/BI」类产品指出了验收缺口：目前大家只截图或只看有没有报错。
- **user_quote**: "the first benchmark for open-ended, task-grounded generation of interactive analytic dashboards"
- **top_comments**:
  - [论文 abstract] "both a dashboard and a replayable interaction trajectory"
  - [论文 abstract] "reproducible visual and execution evidence"
  - [论文 abstract] "effectively reproduces human judgments"
  - [论文 abstract] "rendering, analytical, and interaction failures"
- **ai_opportunity**: **AI 生成 UI 的交互级验收工具**。产品形态：把「可重放交互轨迹」做成 AI 前端生成器（v0/Lovable/Bolt 类，以及企业内部 BI copilot）的默认输出格式 + CI 回归器——每次重新生成后重放上次的轨迹，逐帧比对，报「这次筛选器点下去没反应」这类静态截图和 E2E 通过率都抓不到的回归。DashJudge-8B 是开源权重，意味着自建判定层的成本已经降下来了。切入顺序建议先做 BI / 内部数据看板（有明确任务目标、易判对错），再扩到通用前端。

---

## 4. MAP-Graph：把 provenance 从「事后审计元数据」变成执行前的硬闸门

- **type**: trend | **platform**: arXiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.10509
- **source_date**: 2026-08-11 | **fetched_at**: 2026-08-12
- **metrics**: 每方法 **2,700** 个合成任务 / **3** 个领域；总体任务成功率 **94.96%**；exact decision accuracy **72.70%**；clean 设定（必须给出正确 Allow 而非安全性回避）**90.22%**；消融分离 permission filtering / path trust / action gating 三者贡献；换两个 backbone 后 exact-decision 与访问控制收益仍保持
- **description**: 八位作者（Yiqi Wang 等，cs.AI + cs.MA）指出多 agent 共享记忆的一个真实安全洞：共享记忆确实提升长流程复用，但某条证据**对某个 agent 或某个动作可能是不可采信的**，而这种限制会沿派生链传播——一旦压缩成摘要，私有、被投毒、不可信或已撤销的来源就被掩盖，于是出现越权读取或不安全执行。作者批评已有工作（语义检索、作用域访问、血缘追踪）没有把**硬授权**和**分级信任**分开，也没让证据要求随动作风险升级。MAP-Graph 用「agent / 来源 / 记忆 / 主张 / 动作」的类型化执行图建模，先追溯祖先、剔除无权限记录，再用语义相似度乘以路径信任重排，最后在执行前加风险敏感闸门，且被剔除的血缘仍保留可审计。
- **user_quote**: "a provenance-aware memory layer"
- **top_comments**:
  - [论文 abstract] "may not be admissible for a particular agent or action"
  - [论文 abstract] "private, poisoned, untrusted, or revoked sources"
  - [论文 abstract] "separate hard authorization from graded trust"
  - [论文 abstract] "an operational control signal, rather than only post-hoc audit metadata"
- **ai_opportunity**: **多 agent 共享记忆的权限与信任中间件**。本条与第 2 条形成互补闭环：REDAgentBench 证明违规会真的发生（65.69% ASR），MAP-Graph 给出可落地的拦截层。产品形态：装在现有 memory / RAG 层前的策略引擎——每条记忆带来源、可采信范围、信任权重，检索时按「调用方 agent × 目标动作风险」双维度过滤，高风险动作要求更强证据。**注意 exact decision accuracy 只有 72.70%**，说明这仍是开放问题、不是已解决的品类，早期进入者有空间。对企业客户的话术不必讲安全，直接对齐第 9 条网信办征求意见稿要求的自动化决策影响评估与合规审计留痕。

---

## 5. Autoresearch agent 在烧掉大部分算力：四种可复现的浪费模式

- **type**: pain_point | **platform**: arXiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.10424
- **source_date**: 2026-08-11 | **fetched_at**: 2026-08-12
- **metrics**: 7 位作者（含 Capital One 的 C. Bayan Bruss、Micah Goldblum）；聚焦表格数据建模流水线；归纳出 **4** 类反复出现的失败模式；**abstract 未给具体数字/百分比**，结论为定性表述（如实记录，不要在报告里替它编数字）
- **description**: 这是本组唯一一条把「agent 花钱花在哪儿了」拆开的论文，也是最直接可产品化的一条，因为四种浪费都能对应到一个具体功能。作者明确说这些收益**完全来自 agentic 设计，不换基座模型**——对独立开发者是好消息：不需要训模型也能做出可量化改进。四种模式：反复修同一个 bug；明明还有大量算力预算却不调超参；驱动它们的树搜索算法其实不探索；做了数据分析但（模仿训练数据里的人类）不把分析结果用于下游决策。作者的解法之一是「全局 debug 顾问」，把发现的运行时约束传播到搜索树的所有分支。
- **user_quote**: "a paradigm increasingly referred to as autoresearch"
- **top_comments**:
  - [论文 abstract] "resolving the same bugs over and over again"
  - [论文 abstract] "often fail to tune hyperparameters even when they have a large remaining compute budget"
  - [论文 abstract] "the tree-search algorithms that power them do not explore"
  - [论文 abstract] "but do not use that analysis to make downstream decisions"
  - [论文 abstract] "discovered runtime constraints across all branches of the search tree"
  - [论文 abstract] "large gains in autoresearch agent performance are achievable through agentic design alone"
- **ai_opportunity**: **agent 算力浪费审计 + 全局约束缓存**。最小可行产品直接抄第一条失败模式：一个跨会话/跨分支的「已知运行时约束库」——某个分支发现「这个环境没装 xgboost」「这列有 NaN」后，其余分支立刻拿到，不再各自撞一遍墙。这是纯工程、无需训练、且能用 token 账单直接算 ROI 的品类（对 coding agent 同样适用，不限于 autoresearch）。第二形态是 agent 运行的「算力去向报表」：本次任务 token 花在 debug 重试 / 探索 / 调参 / 无用分析各占多少——目前几乎没人给 agent 做这种 profiler，而这正是把「agent 太贵」从抱怨变成可优化项的前提。

---

## 6. IO Factory：把 AI 影响力行动当成可复现流程来模拟（最多 10 万 agent）

- **type**: trend | **platform**: arXiv | **secondhand**: false
- **source_url**: https://arxiv.org/abs/2608.10920
- **source_date**: 2026-08-11 | **fetched_at**: 2026-08-12
- **metrics**: 7 位作者（含 Lukasz Olejnik、Meeyoung Cha）；测试配置规模最高 **100,000 个 agent**；每次运行都记录行动者、目标、行动约束、暴露路径、测量规则
- **description**: 作者的论点是数字操纵风险已经从「单模型生成有说服力的文本」升级到 **AI swarm**——持续存在、按平台反馈自适应的协同 agent 群。因为单条消息看不出这类行动，所以必须跨「规划 → 平台行动 → 暴露 → 解读 → 测量 → 适应」整条链路研究。IO Factory 在受控仿真平台里把这些环节连起来，产出可检视的暴露证据和仿真人群中被测量到的信念变化。这条与第 7 条（EU 强制 AI 内容机器可读标记）构成攻防对照：一边是协同操纵的规模化，一边是刚生效的溯源标记义务。
- **user_quote**: "an AI-driven framework for simulating information and influence campaigns as fully integrated, traceable processes"
- **top_comments**:
  - [论文 abstract] "AI swarms"
  - [论文 abstract] "persistent groups of coordinated agents that adapt to platform feedback"
  - [论文 abstract] "across configurations of up to 100,000 agents"
  - [论文 abstract] "reproducible research and red-team analysis of coordinated influence"
- **ai_opportunity**: 只做**防守侧**。可产品化方向：面向平台方/品牌方的协同行为检测——不看单条内容真假（这条路已经很拥挤且效果差），而看**跨账号的时序协同模式与适应性**，这正是论文指出的可观测特征。第二方向是「暴露路径审计」：给内容审核团队一个可回放的传播链视图。明确规避：任何生成侧、代运营侧的应用不做。

---

## 7. EU AI Act 开始执行 + 第 50 条透明度义务 2026-08-02 生效

- **type**: trend | **platform**: European Commission (digital-strategy.ec.europa.eu) | **secondhand**: false
- **source_url**: https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-12
- **metrics**: 生效日 **2026-08-02**（执行与透明度义务同日）；已有 **180+ 家**机构签署 AI 生成内容透明度行为准则（Commission 已公布首批名单）；配套指南 2026-07-20 发布（Article 50，含两份 PDF，官方 last updated 2026-07-31）；执行方为 AI Office + 各国主管机关；官方页**未列任何罚则金额**（如实记录）
- **description**: 三项义务同日启动：(1) 聊天机器人等交互式 AI 系统必须告知用户对方不是人；(2) deepfake（官方定义为「用 AI 编辑或生成的图像、视频、音频」）必须打标；(3) AI 生成或修改的内容必须携带**机器可读标记**以便被检测。同时上线了三条投诉通道：AI Act 投诉工具、举报人工具、以及面向通用 AI 模型下游提供方的投诉渠道——这一点常被忽略，但它意味着执行压力可以由下游开发者自下而上触发，而非只靠监管主动巡查。注意：透明度指南正文在 PDF 内，本组未下载，故技术细节（水印算法、豁免范围）尚未核实。
- **user_quote**: "From 2 August 2026, the European Commission's AI Office, together with national authorities, will begin enforcing the Artificial Intelligence (AI) Act."
- **top_comments**:
  - [官方新闻页] "Under the new rules, chatbots and other interactive AI systems will have to tell users they are dealing with AI, not a human."
  - [官方新闻页] "AI-generated or altered content will also have to carry machine-readable marks so it can be detected more easily."
  - [官方指南落地页] "define the scope of transparency obligations for providers and deployers of AI systems under Article 50 of the AI Act"
  - [官方指南落地页] "in a consistent, effective, proportionate and uniform manner"
- **ai_opportunity**: **机器可读标记的「即插即用」合规层**，卖给做不起合规工程的中小 AI 产品。已经过期限、不是未来预期，这是本条最大的销售杠杆。三个具体产品：(a) 内容出厂 SDK——图/视频/音频生成时自动嵌入符合规范的溯源元数据 + 可选可见水印，一次接入覆盖 EU 第 50 条与加州 SB 942（见第 8 条）两套要求；(b) chatbot 披露组件——各语言/各渠道（web、WhatsApp、语音）的合规披露文案与展示时机模板，附留证日志；(c) **标记完整性监测**——扫自家已发布内容，检测标记是否在转码、压缩、二次编辑后丢失（这是 secondhand 风险最高、客户最没能力自查的一环）。渠道提示：180+ 家已签署行为准则的机构名单本身就是一份现成的潜客清单。

---

## 8. 加州 SB 942（California AI Transparency Act）：2026-01-01 起生效，每次违规 5,000 美元且按日累计

- **type**: trend | **platform**: California Legislative Information (leginfo.legislature.ca.gov) | **secondhand**: false
- **source_url**: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB942
- **source_date**: 2024-09-19（签署/入册日，Chapter 291）| **fetched_at**: 2026-08-12
- **metrics**: 适用门槛 **月访问/用户 > 1,000,000**；生效 **2026-01-01**；罚则 **每次违规 5,000 美元**，且不合规**每一天单独计算**；执法主体为总检察长、市检察官或县法务官；授权被禁用 latent disclosure 时必须在 **96 小时内**吊销许可；胜诉方可获律师费；豁免纯非用户生成的游戏/电视/流媒体/电影/交互体验
- **description**: 与第 7 条形成「同一件事、两套辖区、两种罚法」的合规夹击，且加州这套的技术要求**比 EU 页面上能看到的更具体**：覆盖提供方必须（a）**免费**提供 AI 检测工具，能接受上传或 URL，必须输出系统溯源数据但不得泄露个人溯源数据，且必须提供 **API** 让用户无需访问其网站即可调用；（b）给用户**可选**的显式可见标记；（c）**强制**嵌入隐式溯源数据，含提供方名称、系统名称与版本、生成/修改时间戳、以及一个唯一标识符，必须能被自家检测工具识别、符合广泛接受的行业标准、且难以移除。检测工具还有严格的数据最小化约束：不得收集或保留用户个人信息（仅 opt-in 联系方式例外且只能用于改进工具）、不得超期保留提交内容、不得保留个人溯源数据。
- **user_quote**: "This chapter shall become operative on January 1, 2026."
- **top_comments**:
  - [法条正文] "has over 1,000,000 monthly visitors or users and is publicly accessible within the geographic boundaries of the state"
  - [法条正文] "clear, conspicuous, appropriate for the medium of the content, and understandable to a reasonable person"
  - [法条正文] "permanent or extraordinarily difficult to remove, to the extent it is technically feasible"
  - [法条正文] "shall revoke the license within 96 hours of discovering the licensee's action"
  - [法条正文] "a civil penalty in the amount of five thousand dollars ($5,000) per violation"
- **ai_opportunity**: 三个比第 7 条更锐的切口。(a) **检测工具即服务**：法条强制要求免费公开 + 带 API，这对每家超过百万用户的生成式产品都是一笔纯成本、零收益的工程负担——典型的外包品类，一次实现多家复用。(b) **许可链监控**：96 小时吊销时限意味着提供方必须持续监测下游被许可方有没有关掉溯源功能，这是个明确的、有硬 SLA 的监控产品，目前几乎没有现成方案。(c) **双辖区映射表**：EU 第 50 条 + SB 942 的要求交集与差集（尤其「唯一标识符」和「系统版本号」这类 EU 页面未明示的字段），做成一份可执行清单 + 自检脚本；按日累计的罚则让「早一周合规」有可直接换算的金额。注意本条 source_date 是立法签署日 2024-09-19，但**生效日 2026-01-01**才是需求触发点，报告里勿混用。

---

## 9. 网信办《大型个人信息处理者个人信息保护规定（征求意见稿）》：1000 万人门槛 + 外部占 2/3 的监督委员会

- **type**: trend | **platform**: 江苏网信网（转载国家网信办征求意见稿全文）| **secondhand**: false
- **source_url**: https://www.jswx.gov.cn/fwhd/tzgg/202608/t20260807_1350194.shtml
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-12
- **metrics**: 认定门槛「处理 **1000 万人以上**自然人个人信息」；省级网信部门 **15 个工作日**内完成完备性查验；连续 **6 个月**不再符合条件可申请变更；认定后 **6 个月**内成立监督委员会，成员**单数**且**不少于 7 名**、**外部成员占比不低于 2/3**，负责人须由外部成员担任；外部成员同时受聘**不超过 3 家**、从业**不少于 3 年**，持股 1% 以上或前十名自然人股东被排除；任期 3 年、连任不超过两届、缺位 30 个工作日内补任；委员会**至少每 6 个月**开一次定期会议，决议须**全体成员 2/3 以上**同意，监督范围覆盖 **11 项**；**每两年至少一次**合规审计 + **每年**风险评估 + 未成年人保护**每年**审计；**每年上半年**发布上一年度社会责任报告（含 9 项内容）；每年第一季度报送委员会履职情况，**至少每两年**报送审计报告；影响评估须在完成后 **15 个工作日**内经省级报国家网信部门备案；**意见反馈截止 2026-09-07**
- **description**: 这是三份旧稿（大型网络平台设立个人信息保护监督委员会规定、大型网络平台个人信息保护规定）整合完善后的新稿，依据《个人信息保护法》《网络数据安全管理条例》。对 AI 产品最关键的是两条与算法/自动化决策直接挂钩的条款：第十七条要求提供易理解易操作的**个性化推荐关闭选项**，关闭后须停止相关用途，并提供**删除针对其个人特征的用户标签**的功能；第三十一条要求涉自动化决策、敏感个人信息处理等功能**上线前**开展影响评估，评估内容明确包含「自动化决策机制避免精确定位到特定个人的措施及其有效性」。此外第五条鼓励使用数据标签标识技术、通过个人信息保护认证，第六/七条涉跨境与「限制或者禁止个人信息提供清单」。
- **user_quote**: "意见反馈截止时间为2026年9月7日。"
- **top_comments**:
  - [征求意见稿第二条] "（一）处理1000万人以上自然人个人信息"
  - [征求意见稿第二条] "（三）个人信息处理活动对国家安全、经济运行、社会稳定、公共健康和安全等具有重要影响"
  - [征求意见稿第十七条] "设置易于理解、便于访问和操作的个性化推荐关闭选项"
  - [征求意见稿第十七条] "为用户提供删除针对其个人特征的用户标签等功能"
  - [征求意见稿第三十一条] "自动化决策机制避免精确定位到特定个人的措施及其有效性"
  - [征求意见稿第三十七条] "不少于7名，外部成员占比不低于三分之二"
  - [征求意见稿第三十三条] "每两年至少开展一次个人信息保护合规审计，每年对其个人信息处理活动开展风险评估"
- **ai_opportunity**: 时间窗明确（9-07 截止 → 落地后 6 个月内组建委员会），且义务是**周期性重复**的，天然适合做 SaaS 而非一次性咨询。(a) **影响评估与备案流水线**：把第三十一条的上线前评估做成 CI 门禁——涉自动化决策的功能变更自动生成评估模板、留痕、并跟踪 15 个工作日备案时限。(b) **用户标签自助删除组件**：第十七条要求的「关闭个性化推荐 + 删除个人特征标签」是明确的前端 + 数据后端工程，几乎每家推荐系统都要重做一遍。(c) **监督委员会运作台**：外部成员占 2/3、单数、每 6 个月开会、决议须 2/3 同意、11 项监督范围、缺位 30 个工作日补任——这些是纯流程约束，做成排期 + 议题模板 + 决议留痕 + 独立性冲突自检（同时受聘不超 3 家、持股 1% 排除）即可。(d) 顺带存在一个**外部委员人才市场**的中介机会：要求「具备高级个人信息保护合规审计人员能力」且受聘家数受限，供给天然紧张。

---

## 10. MCP 2026-07-28 规范：删掉 session、删掉 initialize 握手，Roots/Sampling/Logging 全部弃用

- **type**: trend | **platform**: modelcontextprotocol.io（官方规范）| **secondhand**: false
- **source_url**: https://modelcontextprotocol.io/specification/2026-07-28/changelog
- **source_date**: 2026-07-28 | **fetched_at**: 2026-08-12
- **metrics**: **9 项** major changes + **12 项** minor changes + **4 项**弃用；相对上一版 2025-11-25；新政策规定**最短 12 个月**弃用窗口；错误码区间重新划分（`-32000`~`-32019` 保留给实现，`-32020`~`-32099` 保留给规范，`HeaderMismatch` `-32001`→`-32020` 等三个码重编号）；resource not found 错误码由 `-32002` 改为 `-32602`
- **description**: 这是一次**破坏性**重构，方向明确：让 MCP 变成无状态、可跑在 serverless / edge 上的请求-响应协议。具体地：移除协议级 session 与 `Mcp-Session-Id`（列表端点不再随连接变化，需要跨调用状态的服务器改用服务器铸造的显式 handle 当普通工具参数传递）；移除 `initialize`/`notifications/initialized` 握手，每个请求都在 `_meta` 里自带协议版本与客户端能力；新增服务器**必须**实现的 `server/discover`；用单条长连 POST 响应流 `subscriptions/listen` 取代 HTTP GET 端点和 `resources/subscribe`；移除 `ping`、`logging/setLevel`、`notifications/roots/list_changed`；移除 SSE 流可恢复与消息重投（`Last-Event-ID` 和 SSE event ID）——**响应流一断，在飞请求就丢，客户端必须用新 request ID 重发**；tasks 移出核心变成官方扩展 `io.modelcontextprotocol/tasks`，阻塞式 `tasks/result` 改为 `tasks/get` 轮询 + 新增 `tasks/update`；引入 MRTR 模式取代服务器发起请求（`roots/list`、`sampling/createMessage`、`elicitation/create`），改为返回 `resultType: "input_required"`；所有结果新增必填 `resultType`。弃用清单里 **Roots、Sampling、Logging 三大特性**和 OAuth 2.0 动态客户端注册（改用 Client ID Metadata Documents）尤其影响面广。
- **user_quote**: "Make MCP stateless: remove the `initialize`/`notifications/initialized` handshake."
- **top_comments**:
  - [规范 changelog major #1] "Servers that need cross-call state use explicit, server-minted handles passed as ordinary tool arguments"
  - [规范 changelog major #9] "A broken response stream loses the in-flight request; clients MUST re-issue it as a new request with a new request ID"
  - [规范 changelog 弃用 #1] "log to `stderr` (stdio) or use OpenTelemetry instead of Logging"
  - [规范 changelog minor #3] "Servers SHOULD return tools from `tools/list` in a deterministic order to enable client-side caching and improve LLM prompt cache hit rates"
  - [规范 changelog minor #5] "`ttlMs` is a freshness hint (in milliseconds) allowing clients to cache responses and reduce polling"
- **ai_opportunity**: **MCP 迁移工具链**——这是本组时效性最强、竞争最少的机会，因为破坏性变更刚落地、生态里数千个既有 server 都要动。(a) **迁移 linter / codemod**：扫 MCP server 代码，标出用了 session、`initialize`、`ping`、`logging/setLevel`、SSE 重投、Roots/Sampling/Logging 的位置，给出机械替换方案（session → 显式 handle；Sampling → 直连 LLM provider API；Logging → stderr/OTel）。(b) **双版本兼容代理**：老客户端 ↔ 新服务器（或反向）的转译网关，让迁移不必一次切齐——注意规范明确要求客户端把旧版服务器省略的 `resultType` 当作 `"complete"`，兼容逻辑有据可依。(c) **无状态化带来的新品类**：session 一去，MCP server 可以真正部署在 serverless/edge 上，"一键部署 MCP server 到边缘"的托管服务门槛大幅降低。(d) 顺带机会：新增的 `ttlMs` / `cacheScope` 缓存契约 + `tools/list` 确定性排序，直接指向一个 **MCP 缓存与 prompt-cache 命中率优化**的小工具。

---

## 11. Gemini API 把 temperature / top_p / top_k 标为弃用，并给出两个 8 月停机日

- **type**: trend | **platform**: Google AI for Developers（官方 changelog）| **secondhand**: false
- **source_url**: https://ai.google.dev/gemini-api/docs/changelog
- **source_date**: 2026-07-21（参数弃用条目）/ 2026-07-30（robotics 条目）| **fetched_at**: 2026-08-12
- **metrics**: 采样参数 `temperature`、`top_p`、`top_k` **已弃用**（2026-07-21 条目）；`gemini-3.6-flash`、`gemini-3.5-flash-lite` 转 GA；`gemini-robotics-er-2-preview` 与 `...-er-2-streaming-preview` 进入公开预览（2026-07-30）；停机日：`gemini-robotics-er-1.6-preview` **2026-08-31**、若干 Imagen 4 端点（standard/ultra/fast generate）**2026-08-17**；页面 last updated 2026-08-11，但**最新变更条目仍为 2026-07-30，无 8 月条目**（如实记录）
- **description**: 最值得注意的不是新模型而是**采样参数被弃用**——这在整个 LLM API 生态里是个方向性转折：调 temperature 这个从 GPT-3 时代沿用至今的旋钮，正在被供应商收回。任何把 temperature 暴露给终端用户、或在配置里硬编码采样参数的产品都要重新设计。同时 Imagen 4 的三个生成端点 **8 月 17 日**停机（距今 5 天），是一个正在发生的紧急迁移窗口。
- **user_quote**: "The sampling parameters `temperature`, `top_p` and `top_k` are now deprecated."
- **top_comments**:
  - [changelog 2026-07-21] "Features improved token efficiency and code/agentic planning capabilities at a lower price point than 3.5 Flash"
  - [changelog 2026-07-21] "Offers a low-latency, highly cost-effective subagent option designed for high-volume automation"
  - [changelog 2026-07-30] "Advanced spatial reasoning, agentic code execution, multi-step tool orchestration, video moment finding"
  - [changelog 2026-07-30] "support function calling with blocking behavior for physical robot actions"
- **ai_opportunity**: **模型弃用与停机的预警服务**。痛点已被本条自身证明：Imagen 4 端点 5 天后停机，而这个信息只躺在一份 changelog 里，没有任何人主动通知在用它的开发者。产品形态：扫客户代码库/日志里实际调用的模型 ID 与参数，比对各家 changelog 的弃用与停机日期，输出「你有 3 个端点将在 30 天内停机 + 2 处使用了已弃用参数」的报告与 PR。参数弃用这条尤其适合做 codemod：把散落各处的 temperature 配置收敛掉。跨供应商做（Google/OpenAI/xAI/Anthropic）价值最大，因为多模型路由已是常态而弃用节奏各不相同。

---

## 12. Luma AI 分类：3K 场活动 / 91K 订阅者，社区结构分成「模型部落 + 研究读书会 + 创业 demo」三类

- **type**: trend | **platform**: Luma (luma.com/ai) | **secondhand**: false
- **source_url**: https://luma.com/ai
- **source_date**: 空（分类页为排行/聚合快照，无单一内容日期）| **fetched_at**: 2026-08-12
- **metrics**: AI 分类显示 **3K Events**、**91K Subscribers**；The AI Collective 自称 **200k+ pioneers across 100+ global forums**；Nearby Events 区块为空；未登录时具体活动列表不渲染（故无逐场日期与报名数）
- **description**: `lu.ma/ai` **301 跳转**到 `luma.com/ai`，且未登录看不到事件列表，因此本条只能取到分类级统计与热门日历列表——这是本组数据最薄的一条，请报告方按弱信号处理。可见的热门日历分三类：**VC/机构主办**（Air Street events，由 Air Street Capital 与 Nathan Benaich 组织）、**研究向**（Latent.Space，办 "Paper Club, AI in Action, Meetups & Confs"）、**模型部落**（OpenClaw Meetups、Claude Community Events、Llama Lounge）。其中 **OpenClaw Meetups**「community meetups for OpenClaw around the world」值得注意——一个工具级项目已经有了全球线下 meetup 网络，这是开发者心智占领程度的侧面指标。Llama Lounge（旧金山，2023 年创办，Jeremiah Owyang 主持）形态是 "demo floor, lightning talks, pitches, and networking"。地理上高度集中在湾区。
- **user_quote**: "The world's largest AI community"（The AI Collective 自我描述）
- **top_comments**:
  - [Air Street events 日历描述] "AI events around the world organized by Air Street Capital and Nathan Benaich."
  - [Latent.Space 日历描述] "Paper Club, AI in Action, Meetups & Confs"
  - [OpenClaw Meetups 日历描述] "community meetups for OpenClaw around the world"
  - [Claude Community Events 日历描述] gatherings for people "building with Claude"
  - [The AI Collective 日历描述] "200k+ pioneers across 100+ global forums"
- **ai_opportunity**: 两个方向。(a) **模型部落化 = 分发渠道**：Claude / Llama / OpenClaw 各自有独立的线下社区网络，说明面向单一模型生态做垂直工具（而非「支持所有模型」的通用工具）已经有现成的冷启动渠道，独立开发者的首批用户可以在这些 meetup 里直接找到。(b) **Paper Club 形态的产品化**：Latent.Space 把「读论文」办成了常规活动，对应的工具需求是把 arXiv 新论文自动转成可讨论的材料（本组第 1–6 条正是典型输入）——不过这条要谨慎，论文摘要类工具已经拥挤，差异化只能在「可复现实验/可落地判断」而非「摘要」上。**证据强度提示**：91K 订阅者与 3K 活动是平台自报的分类聚合数，没有逐场报名数支撑，不要用它推算任何增长率。

