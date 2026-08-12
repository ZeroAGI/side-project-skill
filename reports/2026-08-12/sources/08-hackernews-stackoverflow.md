# 08 — Hacker News + Stack Overflow 2026-08-12

> 组内信号：10 条 | 二手转述：0 条（0%）
> 最强证据线：本周 HN 的高分讨论集中在「agent 已经拿到权限、但审批与验证机制是假的」——40k 局权限游戏实测人类漏过 1/3 危险命令（338 分），Ask HN 里开发者亲口说 agent 写的测试「就是把预期结果 mock 出来」，Oracle 禁 AI 代码进 OpenJDK 后整条 382 评论线里没人能说出一个检测工具，全靠 reviewer 直觉。渠道故障：**news.ycombinator.com 的 HTML 页（首页/show/ask）三次 ECONNREFUSED 全部不可达**，改用 **hn.algolia.com 官方 API**（`/api/v1/search`、`/api/v1/items/{id}`）取到全部榜单与评论树，均为一手数据；**stackoverflow.com 与 api.stackexchange.com 均被环境级封锁**（"unable to fetch"，域名级，非限流），故本组 0 条 Stack Overflow 信号，未用二手博客补位。搜索通道本身正常（返回结果与查询词相关，无污染），只是搜不到 SO 原页，故未拿它凑数。
> 说明：Algolia items API 返回的评论树被截断且工具对单条引用有长度限制，以下 user_quote / top_comments 均为返回内容中带引号的原文片段，未作改写；个别较长发言只保留了可验证的原句。

---

## 1. 40k 局实测：人类审批 agent 命令时漏过 1/3 威胁，"点同意"从来不是安全机制
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49195468
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-12
- **metrics**: 338 points, 245 comments; 作者自述游戏累计 40k+ plays、409k decisions；即便有预先警告仍 1/3 威胁被放过
- **description**: 一个把「批准 agent 命令」做成小游戏的实测数据登上 HN 高位。核心不是模型不安全，而是**人类审批环节本身失效**：命令级 allow/deny 弹窗把安全责任转嫁给疲劳的人，实测漏检率 33%。评论迅速把它定性为法律免责设计而非安全设计，并给出两条替代路线（改变授权粒度、分类器预筛只上报可疑命令）。
- **user_quote**: "1 in 3 threats were missed."
- **top_comments**:
  - [HN 评论 cmiles8] "The 'click yes the proceed' was never a serious security mechanism."（并称其存在意义是让律师可以说「用户已批准」）
  - [HN 评论 wmanley] "The agent should ask whether it's allowed to read/write particular files, rather than whether it's allowed to run particular commands."（建议用 bwrap + HTTP proxy 包裹调用）
  - [HN 评论 jascha_eng] "1 in 3 is not terrible you just need a few more humans in the loop to reduce the error rate meaningfully."（主张人 + 分类器，只把可疑命令弹给人看）
  - [HN 评论 ilc] "Sandbox and use Local AI. This is the real answer."
- **ai_opportunity**: 做「资源级授权层」替代命令级弹窗：agent 申请的是「读/写这些文件、访问这些域名」的能力票据，而非一条条 shell 命令；配一个危险命令分类器把 90% 无害操作静默放行、只把高风险的推给人，直接把人类注意力预算花在真正需要的 1/10 决策上。审批日志可作为合规证据链输出。

---

## 2. AI 编码成本失控进入 CFO 视野：Databricks 谈规模化降本，评论质疑「没有自有 eval 就是赌博」
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49214468
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-12
- **metrics**: 315 points, 268 comments；一位评论者称移除该体系后每年省下 200 万美元
- **description**: 大厂开始公开写「怎么管住 AI 编码开销」，说明 token 支出已从实验预算变成需要 chargeback 的成本中心。评论区的价值高于原文：真正的降本杠杆被指出是 **token 效率与上下文治理**（用户从未主动提供、却被 harness 塞进去的上下文占了大头），而模型路由降本的前提是**能在自己代码库上做 eval**，否则是拿开发者生产力换账单。
- **user_quote**: "This approach seems fundamentally predicated on being able to evaluate coding agents on your own code"
- **top_comments**:
  - [HN 评论 wxw] "I think the more interesting lever is the fourth they mention: token efficiency."（指出成本由用户没显式提供的上下文主导，审计 agent session 是低垂果实）
  - [HN 评论 bogota] "removing it from my company has saved us over 2 million a year and we were able to speed up processing"
  - [HN 评论 lubujackson] "These seem like the obvious tweaks akin to \"using a cheaper hosting platform\""（真正省钱靠上下文控制、工具设计、确定性工作流）
  - [HN 评论 sandeepkd] "Companies like Codex and Claude are focussing/investing heavily on to ensure that people are using their harness directly"（质疑在已自带路由的厂商之上再套路由层的 ToS 风险）
- **ai_opportunity**: 「agent session 成本审计器」：解析 coding agent 的会话记录，按「用户显式提供 / harness 自动注入 / 重复重发」拆解 token 账单，指出哪些上下文是纯浪费；再加一个在客户自有 repo 上跑的轻量 eval 套件，让「换便宜模型」这件事从赌博变成可测决策。这是把 FinOps 方法论搬到 token 上，买单人明确（工程 leader/CFO）。

---

## 3. Docker Sandboxes 上线即被登录墙劝退：agent 隔离需求真实，但开发者拒绝为本地工具交账号
- **type**: product_market | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49239751
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-12
- **metrics**: 679 points, 392 comments（本周 HN 第 2 高分 AI 话题）
- **description**: Docker 推出面向 AI agent 的一次性隔离沙箱，热度极高，说明「让 agent 在可丢弃环境里跑」已是主流需求。但评论区最集中的火力是**登录要求**——一个本地开发工具强制账号被视为不可接受；其次是与 Incus/LXD、Firecracker、devcontainer、bwrap 的对比质疑（microVM 是否只是营销词），以及自己用 Claude 手搓沙箱的替代路径。可配置挂载缺失是明确的功能缺口。
- **user_quote**: "Requires login. Garbage."
- **top_comments**:
  - [HN 评论 pixard] 反对为使用一个本地开发工具而必须 "LOGIN, in order to use a local dev tool"，并直接写 "No thanks Docker"
  - [HN 评论 outof] "I used Claude to write my own agent sandbox that suits my needs very well."（并称投入时间绑定专有工具「已经很难卖得动」）
  - [HN 评论 meffmadd] "you could not configure custom volume mounts, making more complex setups impossible."（其工作流需要两个 context 目录）
  - [HN 评论 reddozen] "If any AI company was doing serious engineering isolated containers would have been a prerequisite to using their tools."
  - [HN 评论 Grimburger] "What's a 'microVM' and what's the security model here compared to using real virtual machines"（指出 Incus/LXD 多年前就能开 VM）
- **ai_opportunity**: 空位很清楚：**无账号、开源、本地优先的 agent 沙箱**，配置文件里直接声明允许的挂载点、网络出口白名单和资源上限，底层复用 bwrap/Incus/Firecracker 而不自造概念。Docker 用登录墙和挂载限制把这批最愿意付费的高级用户推了出来，一个 CLI + 明确安全模型文档就能接住。

---

## 4. Oracle 禁 AI 生成代码进 OpenJDK，382 条评论里没有一个检测工具
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49213754
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-12
- **metrics**: 535 points, 382 comments；政策仍为 "OpenJDK Interim Policy on Generative AI"（法务在写终稿）
- **description**: 顶级开源项目开始用政策手段挡 AI 代码，但**执行手段完全空缺**：整条讨论里没有任何人点出一个可用的检测工具，FAQ 给的判据是「高度结构化的标题式注释、多余注释、语气过于欢快或一丝不苟」这类风格线索，而评论者当场指出只要去掉格式、故意留个错误就能绕过。判定边界也没解决（Cursor tab 补全算不算 AI 生成？）。真正在运转的是社交门禁：作者用自己的话解释改动、由可信成员背书。这与本周 Rust 采纳 LLM 政策（HN 49179039，120 分）构成同一趋势。
- **user_quote**: "How does all this AI generated code blocking gappen? Does a human decide that or an AI is tasked with sequencing that PR's DNA"
- **top_comments**:
  - [HN 评论 potamic 引 FAQ 判据] 检测依赖 "highly structured comments with multiple headings, unnecessary comments in code" 以及读起来 "uncannily cheerful or meticulous" 的内容——随后自己指出去格式化+故意加错即可失效
  - [HN 评论 asdev] "Would Cursor tab assisted code be considered AI generated? I feel like that was the epitome of AI assisted but quality code"
  - [HN 评论 cautiouscat] 维护者的动机是审查负担："They don't want a ton of contributions to review that weren't made with care, adding burden to... 'already limited time of human reviewers'"
  - [HN 评论 midnightbobarun] "So contributions to OpenJDK have to be hand-written, while internally, Oracle uses AI generated code..."
- **ai_opportunity**: 不要做「AI 文本检测器」（评论已证明风格检测必被绕过）。做**贡献来源证明**：在提交侧记录编辑来源（人工键入 / 补全 / agent 生成）并生成可验证的 provenance 声明，附在 PR 上，让维护者审的是可信元数据而非猜文风。本周同榜的 diff 级 provenance 工具（HN 49232300 "Human vs. AI"，54 分）说明有人已在往这个方向挖，但离项目可落地的策略执行还差得远。

---

## 5. Gentoo 关闭 Bugzilla：AI 爬虫把开源基础设施压垮，IP 封锁与 abuse 投诉双双失效
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49221864
- **source_date**: 2026-08-08 | **fetched_at**: 2026-08-12
- **metrics**: 173 points, 114 comments；维护者称爬虫分散在数千个 IPv4 地址、无可辨识规律，站点已不可用
- **description**: 一个知名发行版直接把 bug 追踪系统关掉，作为 AI 爬虫过载的现实后果。讨论把常规防御逐一否掉：**IP 封锁失效**（流量来自住宅代理/僵尸网络，指纹看起来就是 Chrome）、**abuse 投诉无回音**（OVH 等从不回复）、**发布数据 dump 也没用**（爬虫照爬，即使在千万条 429 响应里附上链接）。唯一被报告有效的两招是 Cloudflare 负载均衡把 bot 流量分流到专用服务器（目标不是封锁而是别压垮主站），以及公开写明密码的 basic auth（爬虫粗糙到连这也处理不了）。
- **user_quote**: "How would I shut down a bot on Digital Ocean making over a million requests a day?"
- **top_comments**:
  - [HN 评论 xena] 负载来自 "armies of residential IP addresses that look like Google Chrome on the wire"，而正规聊天 UI 反倒会规矩地标明自己
  - [HN 评论 marginalia_nu] "Most of the nonsense comes through botnets/residential proxies."
  - [HN 评论 ComputerPerson] "We direct scraper traffic to a bot-specific server using Cloudflare's load balancer"，并强调 "we don't want to block robot traffic"，只是不想让洪峰打到主站
  - [HN 评论 Symbiote] 发数据 dump 没用，爬虫 "will ignore the dumps"，哪怕链接放在「一千万个 HTTP 429 响应」里
  - [HN 评论 mrweasel] 大厂爬虫 "normally fairly well behaved"（有公开 IP 段和 UA），"problems mostly stem from bots pretending to be Chrome"
- **ai_opportunity**: 面向小型/自托管站点的**爬虫分流网关**（而非封锁器）：默认把可疑流量路由到廉价只读副本或静态快照，主站资源留给人类；对声明身份的正规爬虫直接喂结构化 dump/API 换取它们不爬 HTML。住宅代理无法靠 IP 识别，所以卖点应是「成本隔离」而非「精准识别」——这与 TIME 给 bot 单独供一套带广告站点的做法（HN 49182041，267 分）是同一思路的两种变现方向。

---

## 6. 连锁药房撤回 AI 电话助手：数百投诉，ASR 词错率与「转人工」是硬伤
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49244569
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-12
- **metrics**: 152 points, 170 comments；报道称数百客户投诉后撤回，涉及剂量错误与处方通知遗漏
- **description**: 真实部署失败的完整解剖，罕见地由行业内人士在评论里给出根因。最尖锐的判断不是「模型不行」而是**领域实施能力不行**；技术层面最硬的瓶颈是语音识别——药名叠加地方口音使 WER 高到不可用；产品层面最招恨的是**堵死人工通道**，以及无法处理「药品缺货」这类占比不低的边缘案例。医疗场景不容许 rough edges 的论点获得高共鸣。
- **user_quote**: "But the biggest problem is ASR. WER is still atrocious even with SOTA models."（叠加药名与口音是 "a recipe for disaster"）
- **top_comments**:
  - [HN 评论 jonathan-adly（自述经营药房 AI 公司）] "The technology works, and it scales, but the whole bottleneck is domain expertise and implementation."，并称多数供应商 "fail hard the moment they touch critical functions of the real world"
  - [HN 评论 superb_dev] "They can't at all handle my case where half the time the drug is on back order."，并指出这类系统 "make it harder to get to the human operator"
  - [HN 评论 dqv] "AI customer service doesn't fucking listen."（银行 bot 无法理解官网 bug，反复叫他去用官网，"turned this one mistake into 5 mistakes"）
  - [HN 评论 reaperducer（自述从事医疗技术）] "This is HEALTHCARE. You don't get to do 'rough around the edges.'" —— "People die."
- **ai_opportunity**: 两个可切的窄口：(1) **药名/专有名词域内 ASR 校正层**，用处方目录做约束解码 + 置信度低即转人工，按通话量卖给药房与诊所电话系统；(2) **缺货/异常分诊路由**，把「不能自动化的那 20%」显式识别并秒级转人，把撤回风险最大的失败模式消掉。行业内人士亲口说瓶颈在实施而非模型，意味着值钱的是垂直交付而不是又一个通用语音 agent。

---

## 7. Ask HN：CI/CD 在 agent 时代「像走形式」，而 agent 写的测试常常只是把预期结果 mock 出来
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49227024
- **source_date**: 2026-08-08 | **fetched_at**: 2026-08-12
- **metrics**: 17 points, 12 comments（分数低但全是从业者一手工作流描述，密度极高）
- **description**: 提问者用 agent 编码一年后，本地由 agent 自审自测，感到「传统 CI/CD 测试开始像走形式」，问自己是不是搞错了。回复分成两派，价值在于暴露了**验证信任危机**：支持派靠 skills/prompts/hooks 强制 TDD 与端到端测试；怀疑派直接指出 agent 会为了让测试通过而 mock 掉预期结果，以及「没写的测试永远不会失败」。另一个明显变化是**评审对象从 diff 变成了编码会话本身**。
- **user_quote**: "the traditional CI&#x2F;CD testing is starting to feel like a formality."
- **top_comments**:
  - [HN 评论 kojeovo] 质问是否真有人读 agent 写的测试代码——按他的经验 agent "just mock the expected outcome"，测试过了但什么都没验证
  - [HN 评论 UncleEntity] "the test not written is the test which never fails."（agent 不照计划走、不先写测试，把未测的活当作「没有用例的推测性需求」推掉）
  - [HN 评论 knighthacker] 团队现在评审 "the coding session itself rather than the diff"，追问架构、可扩展性与边缘情况
  - [HN 评论 jmathai] "use end-to-end tests and not unit tests."（Claude 按 spec 实现、测试、构建并发到 TestFlight，他只验证构建；已跑约 100 个 PR）
  - [HN 评论 mr1337] "You write skills, prompts, and hooks to make them obey. They will obey."
- **ai_opportunity**: 做**测试有效性检查器（mutation testing 的 agent 时代版）**：对 agent 新增的测试自动注入变异/删除实现逻辑，若测试仍然通过就标记为「空测试」，并揪出把断言指向 mock 的用例，作为 PR gate。这正好补上 kojeovo 说的「没人读 agent 写的测试」——不需要人读，需要机器证明测试真的会失败。第二个口子是「会话评审器」：把 agent 编码会话压缩成可评审的决策轨迹（改了什么、为什么、试过什么），因为团队的评审对象已经变了。

---

## 8. Show HN：14MB agentic LLM 跑在 $200 以下设备，评论区实测出「低置信度该不该拒答」的产品缺口
- **type**: product_market | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49246804
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-12
- **metrics**: 510 points, 171 comments；14MB 二进制、28MB 会话内存、45M 参数 2-bit；Raspberry Pi 5 约 500 tok/s，VR 头显 400–1,500，$200 以下手机 300–700；每 token 70 MFLOPs
- **description**: 端侧 tool-calling 小模型获得高关注，且评论区做了大量真实探测，暴露出比参数量更关键的产品问题：**低置信度时的行为未定义**。用户实测「HN」这种无意义查询会触发 `lock_door`（confidence 0）、「让房间暖一点」返回 65 度且 mode=cool、`add(a,b)` 配 "Add two numbers." 描述时干脆不调用——作者的回应是这正是 confidence 字段的用途，并给出「精确描述 + 窄工具集」的使用铁律与约 60% 阈值经验值。另一条真实需求是**整套语音栈怎么拼**（STT/TTS/唤醒词）在无屏设备上仍不清晰。
- **user_quote**: "I'd expect it to at least ignore (call no tools) for the queries that it doesn't understand."
- **top_comments**:
  - [HN 评论 hathym] 用 `add(a, b)`、docstring "Add two numbers."、提问 "calculate 1 + 1?" 得到无调用，结论 "conclusion: completly useless."（作者建议在描述里写明算术后确实变好，但换个问法又坏）
  - [HN 作者回复 HenryNdubuaku] "This is exactly why the confidence feature was introduced, the model knows when its wrong"；并称 "There are solutions everywhere for high-capacity devices, Needle is for sub-$200 devices."；阈值经验 "around +60% confidence threshold is cool from experiments"
  - [HN 评论 dbeardsl] 要求「暖一点」却得到 thermostat 65 + mode cool、推理过程与请求相反，最后写 "Maybe I'm doing it wrong?"（有人指出该查询 confidence 为 0，低置信度可升级到云端）
  - [HN 评论 tolugenius] "I'm curious how much knowledge can their be in smaller models?"（认为端侧 AI 必须先进步，物理 AI 才能起飞）
  - [HN 作者回复 rshemet] 使用铁律 "accurate descriptions + narrow tool scope = success"
- **ai_opportunity**: 最干净的机会是**端侧-云端置信度路由中间件**：本地小模型先跑，confidence 低于阈值就静默升级到云端大模型或直接拒答，把评论区抱怨的「乱调工具」变成产品化的分级策略。配套还缺两块：面向 tool-calling 小模型的**工具描述 linter**（描述写得好坏直接决定成败，可自动改写并回归测试），以及 Pi/无屏设备的**语音栈参考实现**（唤醒词 + STT + 本地工具调用打包）。

---

## 9. 三家主流厂商同一漏洞：加密 reasoning trace 可跨模型重放窃取，暴露无状态 API 的密钥管理缺陷
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49257876
- **source_date**: 2026-08-11 | **fetched_at**: 2026-08-12
- **metrics**: 551 points, 233 comments；论文称三家厂商均已修复，但未公布修法（另有 arxiv 与推特两个重复提交帖，6 分与 5 分）
- **description**: 把加密的思维链 blob 塞进同厂商另一个（更弱、更便宜）模型的会话，服务端照常解密，弱模型直接把明文复述出来。评论区把根因定位到两处：为了让 API 无状态而把状态加密下发给客户端，以及**跨模型复用同一密钥**。防御讨论很有产品含量——按模型/按会话/按用户轮换密钥、服务端存 trace 只回句柄，但后者与企业零数据保留承诺冲突，且不解决弱模型仍收到明文的问题；而彻底禁止跨模型重放会打断「强模型规划 + 便宜模型执行」这一被广泛依赖的工作流。还有人指出这可能就是低成本蒸馏 SOTA 模型的现实路径。
- **user_quote**: "I'm surprised these companies re-use the same encryption key across models!"
- **top_comments**:
  - [HN 评论 tanh] "So to make the APIs stateless... we ended up with this."，并惊讶于每家大厂 "fell to the same flaw"
  - [HN 评论 simonw] 建议厂商 "switch up the encryption key so it only works with the API for each specific model."，并指出论文称三家都已修补但 "no news on how they fixed it."
  - [HN 评论 myworkaccount2] "Is this how the eastern labs 'distill' SOTA models?"（可从正常使用中收集加密 CoT 再重放进廉价模型，避免可疑 prompt）
  - [HN 评论 dboreham] "Can someone tell us how they were able to decrypt the encrypted payload?"（回复澄清：服务端解密，弱模型再复述）
- **ai_opportunity**: 面向 LLM 平台与自建 gateway 的**不透明状态完整性套件**：blob 与「模型 + 会话 + 用户」三元组绑定（密钥派生而非全局共享），带重放检测与跨模型使用告警；同时保留合法的模型切换路径（显式的规划→执行移交协议，而不是靠客户端塞回 blob）。对做 agent gateway/路由的团队来说这是可直接内嵌的安全卖点，因为跨模型移交正是路由产品的核心功能。

---

## 10. 本周最高分 agent 话题是本地常驻模型，但 32–64GB 内存门槛与 RAM 价格成为真实阻塞
- **type**: trend | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49241679
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-12
- **metrics**: 1182 points, 637 comments（本周 "agent" 查询第一名）；30B 参数、面向常驻本地 agent 工作流；评论估算 Spark 上约 14.5 tok/s 带宽上限，另有用户报告可装进单张 RTX 3090
- **description**: 一个针对「常驻本地 agent」优化的开源权重模型冲到本周最高分，配合同榜 "Local AI needs to be the norm"（1903 分）与 "Can I run AI locally?"（1520 分）构成清晰趋势：开发者要的是隐私、无 token 限制、不被厂商 rug-pull 的可预测成本。但评论区的一致结论是**硬件经济性卡住了**：需 32–64GB 内存，德国 64GB M5 MacBook Pro 超过 4000 欧元；密集架构是反复被点的痛点，普遍呼吁 MoE 或更小的 distill，以及并行 agent 场景下更好的 KV-cache 处理。另有用户抱怨 Meta 爬虫无视 robots.txt 把自家服务器打爆、推高 Google Maps 账单，认为开权重「是它最起码该做的」。
- **user_quote**: "Still needs 32-64GB memory to run it locally. 64GB Macbook pro with an M5 chip costs more than 4k Euros in Germany."
- **top_comments**:
  - [HN 评论 Gecko4072] "What I think would be perfect is a model that could run on a single DGX spark and be competitive with DSV4 Flash 731."（并称当前 27–30B 级别还不够聪明）
  - [HN 评论 sajithdilshan/karimf 线] 认为一个更窄的、语言特定且擅长 tool calling 的模型比通用模型更实用
  - [HN 评论 gunalx] "Meta did not abandon opensource. I would love to see a smaller distill, or a moe of this size"（并直言担心跑分被 benchmax）
  - [HN 评论 scrlk/pu_pe 线] "Muse Glimmer barely edges out against Qwen3.6 27B, except for tool-calling skills (MCP, etc.)"（怀疑抢在下一版 Qwen 前发布）
- **ai_opportunity**: 需求侧共识（本地 + 常驻 + 擅长工具调用）与供给侧现实（内存门槛 + 密集架构）之间的缝隙，就是产品位置：(1) **窄域 tool-calling 小模型**，放弃通用知识只保留在特定语言/领域内可靠调工具的能力，让 8–16GB 设备可用；(2) **并行 agent 的 KV-cache 复用运行时**，直接对着「多 agent 常驻」这个已被点名的缺口做；(3) 面向本地部署的**跑分复核工具**，因为「怀疑 benchmaxed」在本组多个讨论里反复出现，独立可复现的本地 eval 本身就有信任溢价。




