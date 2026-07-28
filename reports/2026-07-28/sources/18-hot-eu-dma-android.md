# 18 — 热点深挖 B：欧盟 DMA 强制 Google 开放 Android 给第三方 AI 助手 2026-07-28

> 组内信号：8 条 | 二手转述：1 条（13%）
> 本期唯一由**一手监管文本**定义、时间表精确到月的结构性机会来源（机会 8）。

---

## 1. 欧委会正式对 Google 发布两项约束性 specification decision（IP/26/1634）
- **type**: trend | **platform**: ec.europa.eu（官方新闻稿，经 presscorner API 全文验证） | **secondhand**: false
- **source_url**: https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1634
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-28
- **metrics**: **60% EU 用户使用 Android 设备**；搜索数据共享 2027-01 生效；**Android 互操作 2027-07 生效**；2 项决定（Case DMA.100220 / DMA.100209）
- **description**: 2026-07-16 欧委会依 DMA Art.6(7) 与 Art.6(11) 对 Google 发出两套 legally binding specification measures。**第一套确保第三方 AI 助手在 Android 上与 Gemini 平权**：语音唤醒（类似 'Hey Google'）、代用户在 App 内执行操作（叫车、聊天建议回复、询问最近去过的地方）。**第二套规定 Google 必须向第三方搜索引擎（明确含带搜索功能的 AI chatbot）共享其用于优化自家搜索的同等数据（匿名化后）。** specification 程序不含罚款，但具法律约束力并受司法审查。程序 2026-01-27 启动，2026-04-16/27 公开征求意见。
- **user_quote**: "Today's decision will ensure that users can activate their preferred AI assistant via voice commands, similar to the \"Hey Google\" command. Users will be able to use third-party AI assistants to perform actions in apps on their behalf."
- **ai_opportunity**: **移动 AI 助手分发格局的历史性开口**：独立 AI 助手首次获得与 Gemini 平权的系统级入口，覆盖 EU 60% 移动用户。语音 Agent、跨 App 任务自动化产品可提前 12 个月布局，赶 2027-07 窗口期

## 2. Android 互操作决定技术细则：4 大组 11 项功能全部免费开放
- **type**: trend | **platform**: digital-markets-act.ec.europa.eu（欧委会 DMA 开发者门户 Q&A） | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/interoperability/alphabet-specification-proceedings-interoperability-ai-services_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-28
- **metrics**: **11 项功能 / 4 组**；时间表: 2027-02-01 资格条款草案征询, **2027-05-01 开放认证申请**, 2027-08-01 前落地 Android 18, 并发热词 2028-08-01 前落地 Android 19；**认证审核 4 周内完成**；访问免费
- **description**: 开放 11 项功能、分 4 组——**(1)唤醒**: 长按 Home 键入口、息屏常开热词检测（最终须支持多助手并发）；**(2)上下文**: 集中式设备端 App 数据访问（等同 AppSearch）、context-aware intelligence（对标 Magic Cue）、环境数据（麦克风/摄像头/屏幕/扬声器实时流）；**(3)操作**: App Functions 结构化集成 + 访问 Gmail/Calendar/Drive/Docs/Maps/YouTube/Messages/Phone、屏幕自动化（对标 Computer Control）、系统设置控制；**(4)资源**: 系统级端侧模型（含 Gemini Nano，性能平权保证）、第三方可安装自有端侧模型、后台执行权。互操作须全 Android 生态免费、与 Google 自家方案 equally effective、新功能须与 Google 自家服务同时到达第三方。**5 项敏感功能可设客观非歧视的隐私/安全资格条件。**
- **user_quote**: "Interoperability solutions must be \"equally effective to those available to Google\" and must not add friction or require a default role."
- **ai_opportunity**: 独立开发者可构建: (a)自定义唤醒词语音助手；(b)跨 App Agent（App Functions + 屏幕自动化 = 端到端订餐/叫车）；(c)读取 Gmail/Calendar 等 Google 应用数据的个人助理——**全部免 API 费**。另有「DMA 认证合规辅导」这一 B2B 细分机会

## 3. 搜索数据共享细则：AI chatbot 明确纳入受益方，可用于 grounding，但禁止训练通用大模型
- **type**: trend | **platform**: digital-markets-act.ec.europa.eu（欧委会 DMA 开发者门户 Q&A） | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/data-access/alphabet-specification-proceedings-sharing-google-search-data_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-28
- **metrics**: 此前方案剥离 **90-100% unique queries**；门槛: **5万 EU MAU** 或 €50M 投资+2年内成立；k-匿名 ≥1000 人/组；数据延迟 ≥7 天；使用期最长 5 年/受益方；**2027-01 开始共享**
- **description**: Google 此前的合规方案剥离了 90-100% 的独特搜索 query 且排除 AI chatbot，导致采用率为零，故欧委会强制细化。数据范围：query 全文、语言/设备元数据、用户浏览 URL、结果交互、排名位置。**允许用途：query 理解、排序/检索（明确含 AI chatbot 的 grounding）、索引优先级；禁止用途：训练通用 AI 模型、广告画像、系统性复制 Google 结果。** 定价 = 增量成本 + 资本回报（上限为 Google WACC），中小微企业免额外 margin。时间表：2026-08 底 Google 须发布申请页，2026-11 数据集就绪，2027-01 定价报价并开始共享。
- **user_quote**: "Alphabet's earlier compliance offer stripped \"between 90 and 100% of unique search queries from the dataset\" and excluded AI chatbots, so uptake was nil."
- **ai_opportunity**: 对 AI 搜索创业公司是核心燃料——首次能拿到 Google 级 query-click 数据做 grounding 与排序。**5 万 MAU 门槛把纯 indie 挡在外面，但催生周边机会**：帮申请方过独立审计的合规工具、ringfenced 数据环境托管、匿名化数据集分析管道。**注意禁令：不能拿来训基础模型。**

## 4. 欧委会同周对 Google 开出 €890M DMA 罚单，展示执法牙齿
- **type**: trend | **platform**: digital-markets-act.ec.europa.eu（罚款金额/日期为官网头条） | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/index_en
- **source_date**: 2026-07-23 | **fetched_at**: 2026-07-28
- **metrics**: **€890M 总罚款（€460M 搜索自我优待 + €430M Play 反引导）**；60 天整改期；Google 主张 DMA 致欧企损失 €114B（**利益相关方数字，未验证**）
- **description**: 2026-07-23 欧委会因 DMA 违规对 Google 罚款 €890M，限 60 天整改，否则按日计罚。Google 总裁 Kent Walker 反击称 DMA 执法'continues to harm everyday products'。**此罚单与 AI 互操作 specification 决定同一周落地，说明欧委会对 Google 采取「胡萝卜（指导）+大棒（罚款）」组合，增强了 2027 时间表被认真执行的可信度。** 案件细节引自 Il Sole 24 Ore 报道。
- **user_quote**: "Kent Walker: DMA enforcement \"continues to harm everyday products\"... \"a deterioration in the product driven by a small group of complainants with vested interests.\""
- **ai_opportunity**: **执法可信度信号：对赌「Google 会拖延到互操作规则名存实亡」的风险下降。** 为 2027-07 窗口做产品准备的期望值上升。同时 Play 反引导罚款重申开发者可引导用户站外付费——降低 AI 应用在 Android 的分发抽成成本

## 5. HN 社区对 €890M 罚单的 142 条讨论：罚款是'停车罚单'还是真威慑？
- **type**: trend | **platform**: news.ycombinator.com（经 Algolia API 读取原帖及评论） | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49019220
- **source_date**: 2026-07-23 | **fetched_at**: 2026-07-28
- **metrics**: 170 points, 142 comments（24h 内）；引用历史罚款 €2.42B(2017) / €4B(2018)；**DMA 罚款上限全球营收 10%，重犯 20%**
- **description**: 呈现开发者社区对 EU 执法有效性的分歧。热评认为罚款只是经营成本，但反方引用历史：2017 购物比价罚款与 2018 Android 罚款均引发了结构性产品改变；€890M 被解读为「警告射击」。有评论准确概括本次实质：'gatekeeper data sharing is incomplete, and rival AI services should get integrated app search'。**另一 HN 帖上用户 qalter 提出开发者关心的具体互操作诉求：希望借此摆脱 Google Play Services 才能用 Tensor TPU。**
- **user_quote**: "cmiles8: \"For Google this is just like parking tickets to UPS. A cost of doing business in town.\""
- **top_comments**:
  - HatchedLake721: 2017 年购物罚款（€2.42bn）和 2018 年 Android 罚款（€4bn）都带来了结构性改变 —— 反驳「罚款无用」论
  - qalter（HN item 48933564）: "I'm wondering if this will force Google to make their Tensor TPU usable without Google Play Services." —— 开发者对硬件级开放的具体诉求
  - saltysalt: "AI will kill Google's search monopoly, not fines."
- **ai_opportunity**: 开发者情绪读数：对监管开口普遍知晓但对落地半信半疑——**意味着先行者竞争密度低**。qalter 的 TPU/Play Services 解耦诉求指向一个具体缺口：de-Googled Android（GrapheneOS 等）上的端侧 AI 工具链

## 6. Gruber（Daring Fireball）深度拆解：互操作要求'范围惊人'，四种落地情景与 BrowserEngineKit 前车之鉴
- **type**: trend | **platform**: daringfireball.net（评论博客） | **secondhand**: **true**
- **source_url**: https://daringfireball.net/2026/07/ec_google_guidance_android_ai_and_search_sharing
- **source_date**: 2026-07-21 | **fetched_at**: 2026-07-28
- **metrics**: HN 三次转发合计 16 points；引用 Case DMA.100220 / DMA.100209
- **description**: 科技评论人 John Gruber 逐条解读两项决定，认为技术范围 'breathtaking in scope' 甚至低于 macOS/Windows 开放层级：硬件按键绑定、任意 App 截屏、DSP 上跑自有唤醒词模型、无限后台执行、访问 Google 全家桶数据且 Google 无权 opt-out、第三方 App 不能只白名单 Gemini。**他给出四种情景（按概率排序）：A) Google 建好但无人采用——引 Apple BrowserEngineKit 先例（'iOS 至今没有一个第三方浏览器内核'）；B) 有采用但带来数据外泄/Meta 广告定向/耗电；C) 干净落地；D) Google 在 EU 阉割 Gemini。** ⚠️ 此为知名评论者观点（secondhand 对决定本身，但为一手观点来源），代表「监管设计 OS」怀疑派。
- **user_quote**: "Gruber: \"The European Commission obviously thinks it is their place to design operating systems.\" ... 称结果若落地是 \"a recipe for disaster\""
- **top_comments**:
  - danaris（HN 唯一评论）: DMA 意图 "broadly, is a good one" 但实现 "utterly boneheaded"——宁愿只信 Google 一家拿数据，也不愿 Google+Meta+任意 Android 开发者都能拿
  - danaris: 批评监管者在 "without the expertise to actually design an OS" 的情况下扮演 OS 架构师
  - danaris: 指出缺少事前合规咨询机制——gatekeeper 无法提前询问新功能是否合规
- **ai_opportunity**: **风险提示信号：BrowserEngineKit 情景（建而不用）是真实下行风险**——EU-only API 会让全球性助手厂商犹豫。对 indie builder 反而有利：EU 本土/隐私定位的助手（只做 EU 市场）没有这个包袱。另一机会：Gruber 列出的隐私/耗电担忧 = 「第三方助手权限审计与监控」工具的需求预告

## 7. Google 官方回应缺位于主博客 RSS，但同周高调签署 EU AI Act 透明度准则
- **type**: trend | **platform**: blog.google（官方 RSS 验证） | **secondhand**: false
- **source_url**: https://blog.google/company-news/outreach-and-initiatives/public-policy/eu-ai-act-transparency-code-of-practice/
- **source_date**: 2026-07-24 | **fetched_at**: 2026-07-28
- **metrics**: RSS 快照覆盖 2026-07-16 至 07-28 共 20 篇，**无 DMA 回应文**
- **description**: 检索 Google 官方博客 RSS 未见针对两项 specification decision 的专门回应文章（HN 评论提及存在一篇 'DMA should not undercut security, privacy for Europeans' 的回应文，但原 URL 已 404，**无法一手验证其内容**）。同期 Google 于 2026-07-24 发文宣布签署 EU AI Act 生成内容透明度自愿准则。**结合 Kent Walker 对罚款的强硬表态，Google 策略呈现分化：AI Act 自愿合作示好、DMA 强制措施对抗申诉。**
- **user_quote**: "\"Signing the code reinforces our commitment to transparency and responsible AI development in Europe.\" — Karen Massin, Google"
- **top_comments**:
  - ChrisArchitect（HN item 49009436）: 提供了 EC 新闻稿链接和 Google 回应文链接（现 404）
- **ai_opportunity**: **博弈点识别：Google 将在「客观非歧视资格条件」上最大化摩擦（认证、隐私审查）。** 为第三方助手开发者提供「认证预检/资格材料准备」服务，类似当年 App Store 审核咨询，是低成本切入位

## 8. 机会窗口时间线全景：2026-08 起搜索数据申请页上线 → 2027-08 落地 Android 18
- **type**: trend | **platform**: digital-markets-act.ec.europa.eu（官方开发者门户） | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/interoperability/alphabet-specification-proceedings-interoperability-ai-services_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-28
- **metrics**: 关键节点: 2026-08 / 2026-09 / 2026-11 / 2027-01 / **2027-02-01** / 2027-05-01 / 2027-08-01 / 2028-08-01；认证 4 周 SLA；**beta 测试权利**
- **description**: 对 AI builder 的行动日历：2026-08 底 Google 须上线搜索数据资格申请网页；**2026-09 提供模板许可协议+测试数据样本（小型真实样本+合成数据集对申请者开放，无需审计）**；2026-11 匿名化数据集就绪；2027-01 定价报价、数据共享开始；**2027-02-01 Android 互操作资格条款草案公开征询（第三方可提意见塑造规则）**；2027-05-01 认证申请开放（4 周出结果）；2027-08-01 前功能落地 Android 18；2028-08-01 前并发热词落地 Android 19。**Google 须允许第三方提前 beta 测试互操作方案并提供技术支持。**
- **user_quote**: "Google must allow testing of the interoperability solutions, including beta testing, with reasonable technical support."
- **ai_opportunity**: 行动建议: (1)现在-2027-02 构建助手原型并**参与资格条款公众征询（塑造对 indie 有利的规则——最低成本杠杆点）**; (2)2026-09 起用免审计的合成/小样本搜索数据验证 grounding 管线; (3)2027-05 首批递交认证——4 周 SLA 意味着 2027-08 Android 18 上线即可分发。**先发者在 EU 60% Android 用户中抢默认心智的窗口约 12 个月**
