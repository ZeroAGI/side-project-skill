# 19 — 热点深挖: EU DMA 强制 Google 开放 Android 给第三方 AI 助手 2026-07-31

> 组内信号：10 条 | 二手转述：2 条（20%）
> 最强证据线：欧盟委员会 DMA 开发者门户的两份一手规范页面（Article 6(7) 互操作 + Article 6(11) 搜索数据共享）给出了逐条可执行的 11 项功能清单、认证流程、资格门槛（5 万欧盟月活 / <2 年且融资 >5000 万欧元）和成本定价公式（增量成本 + 不超过 WACC 的回报），配合 Google 官方博客（Kent Walker）的正面反对立场、Hacker News 原声与法律/智库侧的批评，构成完整的"机会窗口 + 摩擦点"证据链。
> 渠道故障说明：无搜索渠道污染，所有 WebSearch 返回结果与查询高度相关且互异。个别站点不可达：theverge.com（WebFetch 被拒）、www.reddit.com（WebFetch 被拒，改用搜索 + 二手报道）、perplexity.ai help-center（HTTP 403）、Play Store 应用详情页（内容截断，未取到装机量/评论）、Bruegel WP 17/2026 PDF（字体子集化，本地解压后文本仍无法抽取）。HN 一手评论改用 hn.algolia.com API 成功取得。社区声量本身偏弱：HN 六个提交帖最高仅 8 分、合计约 5 条评论，Android Police / Android Authority 评论区为 0 条——这本身是一个信号（政策已定，开发者侧尚未动员）。

---

## 1. 欧盟委员会正式敲定 Android 11 项功能开放清单与三年时间表（一手规范页）
- **type**: trend | **platform**: European Commission DMA developer portal | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/interoperability/alphabet-specification-proceedings-interoperability-ai-services_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 11 项功能组；5 项属"受限功能"需认证；关键日期 2026-01-27 立案 / 2026-07-16 决定通过 / 2027-02-01 认证草案条款 / 2027-05-01 终版条款并开放申请（每份申请 4 周内评估）/ 2027-08-01 随 Android 18 落地 / 2028-08-01 随 Android 19 支持并发热词；后续约两年周期性向委员会报告
- **description**: 本次事件的一手规范文本（case DMA.100220）。11 项功能按"唤起 / 上下文 / 动作 / 资源"四层组织：①长按 Home 键或手势条唤起（Circle to Search 这类入口不得 Google 独占）②常亮热词检测（"Hey/OK Google" 不再为 Google 保留，息屏与省电模式下同样可用）③通过 AppSearch 那类通道集中读取应用本地数据 ④上下文智能（可主动建议，对标 Magic Cue）⑤环境数据（麦克风、摄像头、屏幕、扬声器实时流，同等同意条款）⑥通过 App Functions 在他方应用内执行任务，明确点名 Gmail、Calendar、Drive、Docs、Maps、YouTube、Messages、Phone ⑦屏幕自动化（虚拟窗口内模拟用户行为完成多步任务，即 Computer Control）⑧系统集成（亮度、媒体播放、免打扰、蓝牙）⑨等性能调用系统级端侧模型，含 Gemini Nano ⑩第三方自带端侧模型的安装、运行与集中共享 ⑪后台执行。决定明确互操作必须免费、覆盖其他厂商设备、与 Google 自家访问"同等有效"，且不得以"必须成为默认助手"或额外摩擦为条件；Google 须提供完整文档、含 beta 的测试访问与技术支持，新功能同步发布。对独立开发者最关键的一句：决定固定了结果，但"具体技术实现"留给 Google——这既是自由度也是风险点。语音唤起只适用于已有相应低功耗芯片的设备，不强制新硬件。
- **user_quote**: "the exact technical implementation"
- **top_comments**:
  - [规范页 · 功能 5 描述] real-time streams from "microphone, camera, screen, and speakers" on equal consent terms
  - [规范页 · 功能 11 描述] timely background action under "transparent, objective, precise and non-discriminatory rules"
- **ai_opportunity**: 这份清单实际上是一份"欧盟版 Android 助手能力路线图"，可直接当产品规划表。三个具体切口：(1) 2027-02-01 前是"认证就绪咨询/审计"服务的空窗期——为想进 Qualified AI Assistant 计划的团队做安全加固与文档准备；(2) 功能 ⑩ 允许第三方装载并集中共享自有端侧模型，等于给"欧盟专属小模型分发"开了口子，可做面向助手厂商的 ODM 适配层；(3) 功能 ⑥⑦ 的组合（App Functions + 屏幕自动化）意味着 2027-08 后在欧盟 Android 上可以合法做通用手机 agent，现在就该动手做 evaluation harness 与任务集，因为"同等有效"的举证需要第三方基准。

---

## 2. Google 官方正面反对：Kent Walker 称决定"威胁设备安全"
- **type**: trend | **platform**: blog.google（Google 官方）| **secondhand**: false
- **source_url**: https://blog.google/company-news/inside-google/around-the-globe/google-europe/the-dma-should-not-undercut-security-privacy-for-europeans/
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 决定通过当日发布；作者为 Google 与 Alphabet 全球事务总裁 Kent Walker
- **description**: Google 在决定公布当天以最高级别高管署名反击，属一手立场文件（同时也是利益相关方公关文本，观点需打折看待）。核心论点三条：一是这些决定"有可能破坏数百万欧洲人的关键隐私与安全护栏"，且裁决"无视了大量用户受损的证据"；二是在 Android 侧，AI 助手今天已能在设备厂商审核下安全触达设备能力，而该裁决"通过向外部应用授予敏感且强大的设备权限威胁设备安全"；三是在搜索数据侧，欧洲人的私密查询会流向缺乏适当匿名化与同意机制的陌生公司。Walker 还引用 ENISA"在 AI 时代安全基本功比以往更重要"为自己背书。结尾要求后续调整采用"灵活的、基于证据的流程"。战术意义：预告了 Google 在 2027 年实施期会围绕"安全例外"反复拉扯，这是第三方助手落地时间表的最大不确定性来源。
- **user_quote**: "risk undermining vital privacy and security guardrails for millions of Europeans"
- **top_comments**:
  - [blog.google · Android 段] the ruling "threatens device security by granting external apps sensitive and powerful device permissions"
  - [blog.google · 搜索数据段] sharing would "weaken citizens' privacy, risk business trade secrets, and endanger national security"
  - [blog.google · 引用 ENISA] "security fundamentals matter more than ever in the age of AI"
- **ai_opportunity**: Google 把战场定在"安全举证"上，等于把"可验证的 agent 安全性"变成进入欧盟 Android 分发通道的通行证。直接催生一类工具需求：面向 AI 助手/agent 的安全合规证据包生成器——提示注入抵御测试、敏感动作二次确认流程、供应链与模型完整性证明的自动化报告。谁能在 2027-05-01 申请窗口开启前把这套证据包做成标准品，就卡在所有想吃分发红利的助手团队的必经路上。

---

## 3. 认证机制细节：6 项功能对所有第三方无条件开放，5 项需认证但 Google 无权吊销助手资格
- **type**: trend | **platform**: The Hacker News | **secondhand**: false
- **source_url**: https://thehackernews.com/2026/07/eu-orders-google-to-open-android-mic.html
- **source_date**: 2026-07-17 | **fetched_at**: 2026-07-31
- **metrics**: 11 项功能 = 5 项受限 + 6 项无条件开放（决定第 119 段）；第 55 段列举认证助手可触达的一方服务；第 135 段允许用户按服务、按设备关闭认证要求；Google 变更 TCA 条款须提前 2 个月报委员会；完整性措施变更须提前 4 周通知；申诉 1 个月内答复；并发热词延至 2028-08-01
- **description**: 这篇报道逐段核对了决定原文，给出了别处没有的关键区分。**6 项无需认证、对所有第三方（含用户自行安装的应用）开放、不限应用类型与用途**：环境数据、常亮热词检测、长按唤起、系统级端侧模型、第三方模型装载、后台执行。其中"环境数据"是持续后台访问麦克风输入、系统音频、摄像头、屏幕内容、位置及加速度计等传感器，同意提示与 Google 自家 AI 服务同级；热词跑在低功耗 DSP 上，锁屏与省电模式下有效，且可持续录音直到用户结束请求。**5 项受限功能需认证**：集中读取应用本地数据（当前 AppSearch）、上下文智能（Magic Cue 背后的常驻层）、结构化端侧集成（App Actions / App Functions）、屏幕自动化（Computer Control）、系统集成（设置、媒体、截屏、通知、电源）。认证机制的关键设计：由第三方"可信认证机构（TCA）"免费认证，Google 写 TCA 项目条款并批准认证机构，但**Google 不能吊销某个助手的认证，只能吊销认证机构的资格**；暂停某助手需要"关于严重且即时伤害的一致证据体"，须同步委员会与认证机构。完整性措施必须"严格必要、有证据支撑、可外部验证、对 Google 自家服务同等适用"，且 Google 不得"对第三方施加高于自身的完整性水平"。文章还点出真实的攻击先例：SafeBreach 曾用通知内容通过间接提示注入劫持 Gemini 自家的 Android Utilities agent，无需安装恶意应用，Google 于 2025-11 服务端修复；如今"输入风险"成了认证测试项，而测试标准由 Google 撰写。另一处不对称：Google 一方服务当前以更简化的同意流程和隐私指示器触达传感器，第三方则面临每次使用的运行时同意。
- **user_quote**: "a higher level of integrity on third parties than it applies to itself"
- **top_comments**:
  - [The Hacker News · 认证测试项] hardening against agentic risks (input, supply chain, integration, model integrity, infrastructure)
  - [The Hacker News · 草案对比] 4 月草案没有受限功能、没有助手计划、没有认证机构；终版让 Google 可直接认证申请者，完整性条款还加了 "unless specified otherwise" 的豁免口子
  - [The Hacker News · ENISA 引用核查] 该 ENISA 论文讨论的是前沿模型缩短漏洞到利用的窗口，"never mentions Android, interoperability, or app permissions"
- **ai_opportunity**: "6 项无需认证"是本组最被低估的信息，也是 indie builder 唯一不需要过 Google 认证门就能吃到的部分。热词 + 环境数据 + 后台执行 + 端侧模型这四项组合起来，足以做出一个不碰任何一方数据的纯本地语音 agent：唤醒词自定义、屏幕/音频上下文感知、端侧模型推理、后台常驻——而且明确"不限应用类型与用途"。这意味着 2027-08 后欧盟市场会出现一个新品类：隐私优先的本地语音助手，卖点正好是 Google 用来反对该决定的那套安全叙事的反面（数据不出设备）。另一个直接机会：认证测试项已明确为五类 agentic 风险，可做成开源测试套件抢先定义事实标准，因为决定要求完整性措施"可外部验证"。

---

## 4. Article 6(11) 搜索数据共享：AI 聊天机器人明确合格，定价按增量成本 + WACC 上限
- **type**: trend | **platform**: European Commission DMA developer portal | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/data-access/alphabet-specification-proceedings-sharing-google-search-data_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 资格门槛：欧盟连续 2 年真实搜索业务，或成立不足 2 年且资本投入 >5000 万欧元；至少 5 万欧盟月均活跃用户；k-匿名分组下限 1000 用户，95% 用户落在 29000+ 的组里；数据延迟至少 7 天；每个受益人可访问最长 5 年；措施每 2 年复审；Google 里程碑 2026-08 底申请表 / 2026-09 模板许可与测试样本 / 2026-11 匿名数据集定稿 / 2027-01 定价方案定稿
- **description**: 这是搜索数据侧的一手规范。**共享什么**：匿名化的排名、查询、点击与浏览数据，涵盖免费与付费搜索——具体包括任意 Google 搜索入口输入的查询、查询元数据（语言、设备类型）、用户查看的 URL、对结果的交互行为、每条结果的排名位置。**剔除什么**：账号信息与搜索历史、精确时间戳、超长查询、含罕见词的查询、精确位置（泛化）、精确交互时长（分桶）、广告 URL。匿名化三步：剥离直接标识符形成"松散查询的干草堆"、抑制罕见词或异常长度记录、按位置/设备/语言做 k-匿名分组。**AI 聊天机器人明确合格**——规范原文覆盖"including AI chatbots offering search functionalities"，且明确把"grounding（为时效性与准确性做检索）"列为正当用例；一条明说的立法理由是防止 Google 搜索的数据优势平移到 Google 自家聊天机器人。**允许用途**限于优化自家搜索服务（查询理解、排名与检索、索引）；**禁止**训练通用 AI 模型、广告或消费者画像、系统性复制 Google 结果。**定价公式**：共享的增量成本 + 严格必需增量资本的合理回报，回报上限为 Alphabet 的 WACC；额外加成仅例外情况适用、上限为 Google 搜索业务的营业利润率，且**对微型、小型、中型企业永不适用**。付费分固定部分与可变部分，一次性共同成本按启动时受益人数量分摊，该人均份额对后来者同样适用。**先测试后签约**：三档样本（真实小样本、合成数据集、更大代表性数据集），前两档无需审计报告即可下载到自有安全环境。
- **user_quote**: "including AI chatbots offering search functionalities"
- **top_comments**:
  - [规范页 · 匿名化描述] stripping direct identifiers to create a "'haystack' of loose queries"
  - [规范页 · 用途限制] 禁止 systematically replicating Google's results，也禁止 training general-purpose AI models
  - [规范页 · 审计要求] 访问前独立审计，处理开始后 6 个月内再审，之后每年一次，并可临时审计
- **ai_opportunity**: 对独立开发者，这里有一个被门槛挡住又被门槛保护的双面结构。挡住的是：5 万欧盟月活或 5000 万欧元融资，个人开发者基本无缘直接拿数据。保护的是：MSME 永不适用加成定价，且前两档测试样本无需审计即可下载——这意味着**任何人都能先拿到合成数据集与小样本做原型验证**，这是 2026-09 就会到位的东西，比 2027-08 的 Android 侧早了近一年。可做的产品：(1) 面向达到门槛的欧洲搜索/聊天机器人团队的"数据接入与合规中间件"，把审计、用途隔离、留存策略打包；(2) 基于样本数据集的排名/查询理解 benchmark，卖给所有要证明"数据用得比 Google 好"的团队；(3) 注意禁止训练通用模型这条红线——反过来说，"仅用于检索与排名"的窄用途工具链本身就是一个可防守的细分。

---

## 5. Google 自家 AppFunctions 已 alpha 上线，官方定位"Android 版 MCP"——法规要开放的正是这条通道
- **type**: product_market | **platform**: Android Developers Blog（Google 官方）| **secondhand**: false
- **source_url**: https://android-developers.googleblog.com/2026/07/build-intelligent-android-apps-appfunctions.html
- **source_date**: 2026-07-21 | **fetched_at**: 2026-07-31
- **metrics**: 依赖版本 androidx.appfunctions:appfunctions:1.0.0-alpha10（含 KSP 编译器同版本）；服务类需 @RequiresApi(36)；ADB 测试路径需 Android 17+；系列共 5 篇，本篇为第 4 篇，第 5 篇待发
- **description**: 时间点耐人寻味：决定通过 5 天后，Google 发布了 App Functions 的开发者指南——而 App Functions 正是决定中"结构化端侧集成"这项受限功能所指的通道。官方框架说得很直白：你的应用扮演本地 MCP server，**Android 平台是"中央工具注册表"**，agent 应用位于 client 侧，需要系统特权权限才能访问该注册表。API 读取带注解的 Kotlin 函数，编译成类型安全、沙箱化的工具定义，供特权 agent 发现并在本地后台运行；开发者自选暴露哪些能力，其余数据保持私有。技术细节：自定义类型需 @AppFunctionSerializable，函数标注 @AppFunction(isDescribedByKDoc = true)，**KDoc 被当作编译期 API 资产——它就是 agent 用于参数解析与错误处理的工具 schema**；注册需继承 AppFunctionService 并标注 @AppFunctionServiceEntryPoint，KSP 生成具体实现；AppFunctions 默认跑在 UI 线程，需自行 withContext(Dispatchers.IO)。示例应用 JetPacker（旅行类）演示了 addExpense/getExpenses（agent 自行解析行程 ID，"把一笔五美元咖啡记到我的巴黎行程"直接跳过整串点击）、getItinerary/addItineraryEvent、addVoiceNote（转写后直存数据库）。测试可用 adb shell cmd app_function list-app-functions 枚举、execute-app-function 传原始 JSON 调用，或用 AppFunctions Testing Agent 做对话式验证。API 仍是 alpha，接口不稳定。
- **user_quote**: "the central tool registry"
- **top_comments**:
  - [Android Developers Blog · MCP 类比] 应用充当 local MCP server，agent 应用需 system-privileged permissions 才能触达注册表
  - [Android Developers Blog · 线程陷阱] AppFunctions "run on the UI thread by default"，需自行切到 Dispatchers.IO
  - [Android Developers Blog · KDoc 即 schema] KDoc 成为 agent 做参数解析与错误处理所依据的 tool schema
- **ai_opportunity**: 这是本组对 indie builder 最可立即动手的一条。法规锁定了"2027-08 起第三方 agent 也能读这个注册表"，而注册表的**供给侧（把自己的 App 暴露成工具）现在就完全开放、不需要任何认证**。两个方向：(1) 做 App Functions 的"暴露层"工具——把现有 Android 应用的功能半自动转成带 KDoc schema 的 AppFunction，卖给所有想被 agent 调用的应用开发者（这是 SEO 之后的"AEO/agent 可发现性"生意的移动端版本）；(2) 做跨端 MCP ↔ AppFunctions 桥接：同一份工具定义同时服务桌面 MCP client 与 Android 特权 agent，避免开发者写两套。注意 alpha10 与 @RequiresApi(36) 意味着现在做的是提前布局而非立即变现，但 2027-08 的窗口给了明确的 12 个月准备期。

---

## 6. HN 开发者原声：批评监管者"实际上在当 OS 设计师"，也有人问会不会顺带解锁 Tensor TPU
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=48999776
- **source_date**: 2026-07-21 | **fetched_at**: 2026-07-31
- **metrics**: 该帖 8 分 / 1 条评论；同题材共 6 个提交（objectID 48933564、48942784、49009436、48999776、49009400、49017682），分数区间 3–8，评论合计约 5 条——技术社区讨论热度极低
- **description**: 通过 hn.algolia.com API 取到的一手评论（HN 网页直连不可达）。得票最高帖下 danaris 的评论是本组唯一有分量的开发者侧原声：他表示理解 DMA 的目标、也支持"守门人不该不受约束"，但认为若干可见案例的执行"utterly boneheaded"。两条具体批评：一是监管者把"竞争"当成天然的善，忽视了把宽泛数据访问权交给任意开发者的隐私风险；二是监管者缺乏对被监管系统的技术理解，实际上在扮演"OS designers"却不具备相应技能。他还指出 DMA 的一个流程缺陷：现任或潜在守门人没有任何途径可以事先询问某个新功能是否合规、以及怎样才算合规，而互操作性从设计初期就纳入远比事后改造便宜。另一帖（48933564）下 qalter 提出了一个很实际的硬件层追问：这是否会迫使 Google 让 Tensor TPU 在没有 Google Play Services 的情况下也可用——这条正好落在决定的功能 ⑨⑩（系统级端侧模型 + 第三方模型装载）与"硬件资源"边界的模糊地带。
- **user_quote**: "I'm wondering if this will force Google to make their Tensor TPU usable without Google Play Services."
- **top_comments**:
  - [HN 48999776 · danaris] 称部分执行案例 "utterly boneheaded"，批评监管者事实上在充当 "OS designers" 而无相应技术能力
  - [HN 48999776 · danaris] DMA 未提供事前询问机制：新功能是否合规、怎样才合规都无法预先确认，而互操作性事后改造成本远高于设计期纳入
  - [HN 48933564 · commoner] 仅贴出欧盟委员会新闻稿链接（ec.europa.eu, ip_26_1634），无观点
- **ai_opportunity**: 讨论热度低本身是信号——政策已成定局，但开发者侧还没有把它翻译成产品动作，这就是先行者的时间差。danaris 指出的"无法事先确认合规"痛点直接对应一个可做的东西：DMA/Android 互操作合规自查工具或知识库，把决定原文的段落、认证条件、日期与技术要求映射成开发者能勾选的清单。qalter 的 TPU 问题提示另一条线：欧盟市场对"不依赖 GMS 的端侧 AI 栈"存在真实需求，功能 ⑩ 给了法理依据，值得做 de-Googled Android（GrapheneOS/LineageOS 用户群）上的端侧 AI 分发。

---

## 7. 法学分析：终版把 13 项砍到 12 项、5 项交给 Google 认证，与 Apple 案裁决自相矛盾
- **type**: pain_point | **platform**: Wolters Kluwer Competition Blog | **secondhand**: false
- **source_url**: https://legalblogs.wolterskluwer.com/competition-blog/keeping-the-gate-the-european-commission-issues-its-specification-decision-on-alphabets-operating-system-interoperability-with-ai-assistants/
- **source_date**: 2026-07-22 | **fetched_at**: 2026-07-31
- **metrics**: 4 月草案 13 项功能 → 终版 12 项存续（"主动建议"被删）；5 项转为需认证的受限功能；期限从 2027 年初推迟到 2027-08，常亮热词推到 2028-08；仅《最终功能实施报告》例行公开，其余材料"经委员会要求"才披露
- **description**: 阿姆斯特丹自由大学 Alba Ribera Martínez 的分析，是本组对**实施风险**挖得最深的一篇。核心指控是委员会自相矛盾：在 Apple 的规范决定中，委员会曾明言访问权"不能留给守门人自行决定哪些第三方可以受益"，并警告"缺乏可验证性时，守门人就保留了滥用权力的宽泛裁量空间"；而这次却把资格审查关口交给了 Alphabet，恰好重新引入了同一种裁量权。第二处矛盾在"完整性抗辩"：委员会曾把完整性与安全隐私分开处理，认定守门人"不得仅以第三方不是守门人本身为由证明完整性措施正当"，但终版的资格条件却依赖开发者信誉与监控政策，而这些正是信任代理指标。作者列出的实施隐患极具体：**认证标准不可测试**——"adequately hardened against key agentic risks"这类表述给不出任何可与 API 签名或权限范围相比的度量，监督因此退化为人工审查；Alphabet 控制认证机构的批准、撤销与申诉机构的任命，并可基于"一致的证据体"暂停某个合格助手，而证据标准没有明说（作者以 Play Protect 的误判记录作类比）；透明度收窄，用 McCubbins & Schwartz 的框架说，这是把便宜的"火警式"监督换成昂贵的"巡警式"监督；最后是**API 措辞被稀释**——唤起层与动作层的"API"字样被替换成"具备录入声音模型的能力"这类结果性表述，而 API 是可发现、可独立测试的，措辞放松让 Alphabet 可以用不稳定或无文档的路径合规，同时抬高了委员会的举证负担。文中还指出决定原文有一处笔误：引入受限功能的段落写成了"Apple may require the developer"，而上下文说的是 Alphabet。
- **user_quote**: "absent verifiability, the gatekeeper retains broad discretion to abuse its power"
- **top_comments**:
  - [Wolters Kluwer · 引 Apple 决定] 访问权 "cannot be left to the discretion of the gatekeeper to decide which third parties can benefit"
  - [Wolters Kluwer · 引 完整性原则] 守门人 "may not justify integrity measures by the mere fact that third parties are not the gatekeeper"
  - [Wolters Kluwer · 认证标准批评] "adequately hardened against key agentic risks" 给不出可测度量，监督退化为人工审查
- **ai_opportunity**: 这篇把"认证标准不可测试"点成了最大的落地风险，而风险的另一面就是标准制定的空位。可做的东西：把五类 agentic 风险（输入、供应链、集成、模型完整性、基础设施）做成一套开源、可复现、有具体度量的测试基准与合格线定义——决定既要求完整性措施"可外部验证"，又没给度量，第一个把度量做出来并被认证机构或委员会引用的团队，就实际参与了规则制定。次级机会：API 措辞被稀释意味着第三方助手将来可能面对不稳定、无文档的实现路径，"互操作性回归测试与降级监测"因此成为真实需求——持续检测第三方助手与 Gemini 在同一任务上的延迟、成功率、权限摩擦差异，产出可提交委员会的证据报告。

---

## 8. 智库批评：五点结构性质疑，含"匿名化三难"与"接入不等于进入"
- **type**: pain_point | **platform**: ECIPE | **secondhand**: false
- **source_url**: https://ecipe.org/insights/commissions-dma-specification-decisions-on-google/
- **source_date**: 2026-07 | **fetched_at**: 2026-07-31
- **metrics**: 委员会指出 Google 最初的数据方案剥离了 90–100% 的独特查询；资格门槛 5 万欧盟月活 / 不足 2 年公司需 >5000 万欧元资本投入；11 项功能中 5 项属特别敏感；Android 18 期限 2027-08-01、Android 19 并发热词 2028-08-01
- **description**: ECIPE（Fredrik Erixon、Dyuti Pandya）的批评文章，立场偏产业侧（需注意其倾向），但提出的几点对判断机会真伪很有用。**跨市场监管扩张**：AI 助手与聊天机器人本身并非被指定的核心平台服务，委员会却用附着于 Android 与搜索的义务去塑造它们之间的竞争。**规范程序变成系统设计**：关于"同等有效"、后台执行、系统级唤起的约束性要求，留给 Google 的只是实现选择而非真正的架构自由，作者质疑竞争主管机关是否具备设计 OS 与数据共享架构的技术视野。**监管特权升级**：为让竞争者与 Google 的一体化助手对等而授予其宽泛特权，与最小权限原则冲突，每新增一个特权接口或授权接收方都在扩大攻击面。**匿名化三难**：数据无法同时做到"细粒度到具备竞争价值"、"匿名到无法再识别"、"可获取到构成有效的 FRAND 接入"。**结构性反效果**：本意开放 Android 的决定可能反而促使 Google 更激进地标准化、削减设备厂商自主权，得到更少的开放与更弱的差异化，以及功能更薄的欧盟版产品。最后一条对独立开发者最需要警惕：**接入不等于进入**——大型 AI 公司最有能力利用被强制开放的接入，因此该救济可能"重新分配优势而非降低进入门槛"。文中也提到 Apple 已援引 DMA 互操作规则推迟在欧盟发布 iOS 27 / iPadOS 27 的 Siri AI。
- **user_quote**: "Access to an input does not supply a competitor with the models, computing infrastructure, technical expertise, capital"
- **top_comments**:
  - [ECIPE · 反效果论] "Mandatory functional equivalence could produce less architectural openness rather than more."
  - [ECIPE · 安全论] "A market made contestable through regulatory privilege escalation may become less secure without becoming genuinely competitive."
  - [ECIPE · 匿名化] "Contractual restrictions cannot, by themselves, substitute for technical anonymisation."
- **ai_opportunity**: "接入不等于进入"是对本组所有机会的必要折扣：11 项功能开放的最大受益者是 OpenAI、Perplexity 这类已有模型与资本的玩家，独立开发者若正面做"第三方 Siri"基本没有胜算。因此真正可做的是**为这些赢家供货**：认证准备、安全证据包、互操作回归测试、App Functions 暴露层、端侧模型适配——卖铲子而不是挖矿。另一条：ECIPE 担心的"欧盟版产品更薄"如果成真，会催生"欧盟功能缺口补齐"类工具（Apple 的 Siri AI 缺席就是现成案例），针对欧盟用户被砍掉的 AI 功能做第三方替代品，这是一个由监管副作用直接创造的细分市场。

---

## 9. 对照案例：Apple 因同一套 DMA 互操作要求，无限期撤下欧盟版 Siri AI
- **type**: trend | **platform**: Apple Newsroom（官方）| **secondhand**: false
- **source_url**: https://www.apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-for-ios-27-and-ipados-27/
- **source_date**: 2026-06-08 | **fetched_at**: 2026-07-31
- **metrics**: 欧盟 27 个成员国全部受影响；iOS 27 / iPadOS 27 / watchOS 27 不可用，macOS 27 与 visionOS 27 可用；Apple 提出的补救方案为 Trusted System Agent 中间层 + 18 个月分阶段推出；欧盟本地开发者无法在三个受阻平台上测试或发布 Siri AI 功能；无任何欧盟上线时间表
- **description**: 这是理解 Android 决定后果的最佳对照组，也是本组唯一已经"发生"而非"将要发生"的后果。Apple 官方声明称，监管方在此前数月拒绝了它提出的每一个方案；软件工程高级副总裁 Craig Federighi 表示对欧盟用户在发布时用不到 Siri AI"深感失望"，并称监管者"拒绝建设性沟通"使 Apple 无法给出时间表。Apple 的法律论点是：监管方对 DMA 的解读要求把近乎完全的设备访问权、以及无人监督的自主行动能力交给任何 AI 系统，它称之为"对 DMA 的极端解读"——一旦 Siri AI 在欧盟上线，就必须向任何助手开放私人数据与应用控制权；Apple 援引 AI 系统被劫持以窃取密码与照片的既有案例作为风险依据。它提出的折中是名为 Trusted System Agent 的中间层加 18 个月分阶段推出，"European Commission said no"。受影响功能包括对话历史应用、更广泛的 Visual Intelligence、写作工具与相机中的 Siri 模式。特别值得注意的一点：**欧盟本地开发者连测试都做不了**，这是监管副作用直接落到开发者身上的实例。
- **user_quote**: "deeply disappointed that our EU users won't have Siri AI on iPhone or iPad"
- **top_comments**:
  - [Apple Newsroom · Apple 法律论点] 称监管方的读法构成 "extreme interpretation of the DMA"，要求向任何助手开放私人数据与应用控制
  - [Apple Newsroom · 补救被拒] 对 Trusted System Agent 中间层与 18 个月分阶段方案，"The European Commission said no"
  - [Apple Newsroom · 开发者影响] 欧盟开发者无法在 iOS 27 / iPadOS 27 / watchOS 27 上测试或发布 Siri AI 功能
- **ai_opportunity**: 两个方向。**防御性**：Apple 的先例说明"平台方宁可撤功能也不开放"是真实选项，因此任何把商业模式押在 2027-08 Android 开放上的产品都要准备 Plan B——Google 完全可能在欧盟交付一个功能更薄的 Android 18。**进攻性**：欧盟 iPhone 用户在整个 iOS 27 周期内没有原生 AI 助手，这是一个现成的、由监管造成的、有明确地理边界的空白市场。iOS 侧虽然拿不到系统级权限，但快捷指令、分享菜单、键盘扩展、Live Activities 这些通道足以做出"够用"的替代品，而且用户此刻的替代意愿被 Apple 自己的公告推到了高点。这是本组中唯一今天就能开始做、不用等到 2027 年的机会。

---

## 10. 需求侧证据：Gemini 迁移引发用户反弹，"整场迁移就是一场垃圾场大火"
- **type**: pain_point | **platform**: TechRadar（转述 Reddit）| **secondhand**: true
- **source_url**: https://www.techradar.com/vehicle-tech/car-infotainment/the-whole-gemini-migration-has-been-a-dumpster-fire-gemini-calls-are-broken-on-android-auto-and-users-are-switching-back-to-google-assistant
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: 无可靠量化数据——页面正文被截断，仅取到标题引语；页面上出现的 5 / 24-7 / 44K+ 均为 TechRadar 会员推广数字，与本主题无关
- **description**: 这条是**二手且证据强度弱**，但它补上了本组最缺的一环：真实用户对现有默认助手的不满，也就是第三方助手的需求侧基础。标题引语来自 Reddit 用户对 Gemini 迁移的评价"The whole Gemini migration has been a dumpster fire"，报道称 Android Auto 上 Gemini 的通话功能损坏，用户正退回旧版 Google Assistant。相关报道线索还包括：Android Auto 存在把 Gemini 随机换回 Google Assistant 的 bug，部分用户无法切回；也有用户主动退回 Assistant，理由是 Gemini 太啰嗦；Gemini 在例程与提醒等功能上长期落后于 Assistant。**证据链缺陷必须明说**：TechRadar 正文与发布日期均未取到，Reddit 原帖未定位（www.reddit.com 的 WebFetch 被拒），所以引语的出处、时间与上下文都未经一手核验，数字与归因均不可依赖。报告引用时应仅将其作为"存在不满"的方向性提示，不可用作量化依据。
- **user_quote**: "The whole Gemini migration has been a dumpster fire"
- **top_comments**:
  - [TechRadar 标题 · 转述 Reddit] Gemini 通话在 Android Auto 上损坏，用户正切回 Google Assistant
  - [搜索结果转述 · Android Auto bug] Gemini 被随机换回 Google Assistant，部分用户无法切回（原帖未核验）
  - [搜索结果转述 · 功能落差] Gemini 在 routines 与 reminders 等 Assistant 老功能上仍有缺口（原帖未核验）
- **ai_opportunity**: 需求侧的信号是：用户对默认助手的不满已经存在，但今天在 Android 上**没有技术上真正可替换的选项**——这正是欧盟认定的市场失灵，也是 2027 年开放后第一批第三方助手的天然用户池。对 indie builder 更现实的读法是做"缺口补齐"而不是做完整助手：Gemini 明确落后的例程、提醒、Android Auto 场景，都是可以用一个小应用 + App Functions 吃掉的窄场景。同时这条也提醒一个采集缺口值得后续补：Play Store 的第三方助手装机量与评论、以及 r/Android / r/GooglePixel 的原帖，是验证付费意愿的关键证据，本次未取到。

---

## 附：本组未获取到的关键证据（供后续补采）
- Play Store 第三方助手（Perplexity 等）的装机量、评分、评论原文 — 页面内容截断
- Reddit 一手线程（r/Android、r/AndroidAuto、r/GooglePixel）关于默认助手替换的原声 — www.reddit.com WebFetch 被拒
- OpenAI / Perplexity 对该决定的官方表态 — 多次检索未出现一手声明
- Bruegel Working Paper 17/2026 全文论证与数据 — PDF 字体子集化，本地解压后仍无法抽取文本
- The Verge 原始报道（其把 Android 期限写为 2027-07，与官方 2027-08-01 有出入，此分歧未能在一手页面外核实）— theverge.com WebFetch 被拒




