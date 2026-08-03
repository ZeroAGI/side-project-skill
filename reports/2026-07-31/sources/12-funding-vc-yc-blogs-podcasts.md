# 12 — Funding + VC + YC + Blogs + Podcasts 2026-07-31

> 组内信号：15 条 | 二手转述：2 条（13%）
> 最强证据线：TechCrunch/Crunchbase 一手融资报道 + a16z/YC 官方投资论述，主题高度收敛于「AI 进入物理世界与受监管工作流」「推理经济学」「人机信任层（bot/AI 内容检测 + proof-of-human）」「资本极端集中化」。本次补录 #12-#15（Runlayer v. Rippling 首例 MCP 诉讼、H1 2026 十亿美元轮集中度、a16z Top 100 Gen AI Apps 第六版、种子/A 轮巨型化），均为一手页面核验。
> 渠道故障：YC 公司目录（`/companies?batch=Summer 2026`）为 JS 渲染，WebFetch 两次仅返回页面标题，改用 YC 官方 blog + RFS 页 + WebSearch 回补。TechCrunch Dili 一文的 URL slug 为 `raises-15-million` 而标题为 $21.7M（A 轮 vs 累计口径差异，非数字冲突），首次按标题猜测 slug 触发 404，经搜索定位后核验。搜索渠道本次工作正常（返回结果与查询词相关，无 2026-07-28 那类污染）。
> 未收录：「My First Million / All-In / Acquired」仅通过搜索摘要获得剧集标题与日期，可达页面均为 podscripts/rova.nz 等转录聚合站，未能核验一手 show notes，故按「未见页面不引用」原则不作为信号收录（All-In 7 月确有多期 AI 主题：开源 AI 之争、AI 行业能否自律、AI 颠覆语音/法律与计费小时制）。

---

## 1. Dili 融资 $21.7M：AI 合规软件吃掉基建潮的专业服务
- **type**: trend | **platform**: techcrunch.com | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/07/30/dili-raises-15-million-to-bring-ai-compliance-to-the-infrastructure-boom/
- **source_date**: 2026-07-30 | **fetched_at**: 2026-07-31
- **metrics**: $15M Series A（Khosla Ventures 领投）+ 此前 $6.7M 种子 = 合计 $21.7M；约 700 个项目在用；YC Summer 2023 校友；投资方含 Allianz、Rebel Fund、Garry Tan、Darren Bechtel
- **description**: 面向美国建筑与基建（尤其联邦资助项目）的合规软件，覆盖 Davis-Bacon prevailing wage、IRA 学徒规则、OSHA/EPA。架构上把 AI 限制在数据层（非结构化文档→结构化数据），确定性引擎跑固定规则，规避模型不可靠。原本一天的活几分钟完成。AI 数据中心/电力基建浪潮带来监管暴露，是需求引擎。
- **user_quote**: "Software and AI are going to start eating a lot of those professional services workflows."
- **top_comments**:
  - [CEO Anand Chaturvedi] "Non-compliance can result in millions of dollars of fines for those projects."
  - [CEO Anand Chaturvedi] 产品可从公司文档、供应商文件、ERP、payroll 系统 "draw out the data that you need."
- **ai_opportunity**: 「AI 在数据层 + 确定性规则引擎」的混合架构是受监管领域可复制模板——把 LLM 关在抽取层、合规判断交确定性引擎。可横向复制到税务、医保、出口管制、劳动法等 professional-services 工作流。

## 2. Encore AI 融资 $30M：从客户通话中学习的销售/客服 AI agent
- **type**: trend | **platform**: techcrunch.com | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/07/29/encore-ai-raises-30m-to-build-ai-agents-that-learn-from-customer-calls/
- **source_date**: 2026-07-29 | **fetched_at**: 2026-07-31
- **metrics**: $30M Series A（Team8 领投，Planven/Lukatz/Garage + 多家银行保险跟投）；40+ 企业客户（多为金融机构）；ARR 自 18 个月前种子轮以来涨 5x+；2022 年成立（原名 Insait IO）
- **description**: "interaction mining"——把通话录音、邮件、短信接入并关联 CRM，把交互拆成阶段判断哪些话术推进/拖延成交，赢的战术沉淀成 playbook 供 agent 使用。Agent 可语音/文字直接对客，或实时提示员工。部分投资方投前先试用。
- **user_quote**: "The agent we build is a package of many different playbooks that have worked throughout the process."
- **top_comments**:
  - [CEO Dvir Ginzburg] "Sometimes our agents even tell the jokes that the relationship managers are telling."
  - [CEO Dvir Ginzburg，论 Salesforce/HubSpot 为何难复制] "they don't see [conversational] history as a data point that they are utilizing." 采用它 "will require changing their entire implementation stack and technological stack."
- **ai_opportunity**: 对话历史作为「未被利用的数据点」是护城河叙事。可产品化：把非结构化交互（通话/邮件）转成可复用 playbook 的中间层，避开 CRM 巨头的结构化数据惯性。

## 3. Pangram 融资 $9M：AI 内容泛滥催生检测层
- **type**: trend | **platform**: techcrunch.com | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/07/29/as-ai-content-floods-the-internet-pangram-raises-9m-to-detect-it/
- **source_date**: 2026-07-29 | **fetched_at**: 2026-07-31
- **metrics**: $9M（Menlo Ventures 领投，Haystack/ScOp/Script Capital/Cadenza 跟投）；文本检测号称 >99% 准确、误报约 1/10000；$20/月订阅 + Chrome 插件（X/LinkedIn/Substack/Reddit/Medium 实时标注 + feed health score）；Substack/Quora 已接 API；竞品 Winston AI/Originality.ai/Copyleaks/GPTZero
- **description**: Stanford AI/ML 毕业生创办。方法是用数千万真人文档配「合成镜像」（LLM 同题同长同调）训练大模型，而非 watermark/metadata；同时推图像检测（像素级统计差异，可识别真图中嵌入的 AI 图）。
- **user_quote**: "I think it's just incredibly valuable to know whether what you're looking at is something that's AI-generated or not."
- **top_comments**:
  - [创始人 Max Spero] "Our model is learning the stylistic differences and the choices that AI makes consistently."
  - [创始人 Max Spero] "We're getting new GPUs faster than new people are being born."
  - [创始人 Max Spero] 不主动扶持人类内容的话，AI 会 "drown out any human signal that we have."
- **ai_opportunity**: 「feed health score」把检测从单点判定升级为信息流健康度仪表盘。可切入：为发布平台/招聘/教育提供嵌入式 AI 内容占比 API，以及浏览器端实时标注（消费级订阅）。

## 4. Spur 融资 $200M：bot 流量首次超越人类，人机信任成刚需
- **type**: trend | **platform**: techcrunch.com | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/07/28/bot-detection-startup-spur-nabs-200m-from-insight/
- **source_date**: 2026-07-28 | **fetched_at**: 2026-07-31
- **metrics**: $200M（Insight Partners 领投）；2017 年由两名前国防部工程师创办（早于 ChatGPT）；Cloudflare 报告 2026 年中 bot 流量首次超过人类
- **description**: 区分真人用户与隐藏 bot 流量、标记假账号与威胁。投资人指出犯罪级 VPN、住宅代理、匿名工具让企业「看得到活动、看不到背后基础设施」。
- **user_quote**: "see the activity, but not the infrastructure behind it." (Insight 的 Thomas Krane)
- **top_comments**:
  - [Cloudflare CEO Matthew Prince on X] "agentic traffic growing so fast that bots have now passed human traffic online for the first time"（原预计 2027 才交叉）
- **ai_opportunity**: agentic 流量爆发把 bot 检测从反欺诈小众变成基础设施级刚需。与信号 #3、#9 同构（人机信任层）。可产品化：面向中小平台的「流量真人占比」SaaS，及 agent 白名单/授权协议。

## 5. a16z：推理（inference）是 AI 最大的市场，投资芯片公司 Etched
- **type**: trend | **platform**: a16z.com | **secondhand**: false
- **source_url**: https://a16z.com/how-to-win-the-largest-market-in-ai/
- **source_date**: 2026-07-23 | **fetched_at**: 2026-07-31
- **metrics**: Google 2026 年 5 月月处理 3.2 quadrillion tokens（两年前的约 300x）；Etched 2022 年 Harvard 辍学者创办，400+ 工程师（来自 Nvidia/Google TPU/Broadcom/Apple/SK Hynix/TSMC）；TSMC N4P 首版即可用硅，bring-up <2 个月（业界 6-9 个月）；今夏首批机架出货
- **description**: 论点：训练是 capex（拍一次电影），推理是 opex，是「the COGS of intelligence」。token 生成受内存带宽约束、非算力约束，GPU 是「为一切而造」的错配；数据中心受瓦特约束，"Tokens per watt is the real currency of inference"。超大厂自研芯片仅内部用，留下 AI 实验室/推理云/主权程序/企业的空白。
- **user_quote**: "Tokens per watt is the real currency of inference."
- **top_comments**:
  - [a16z Raghu Raghuram & Sarah Wang] inference is "the COGS of intelligence."
  - [a16z] "GPUs are built for everything"（因此推理需专用硅）
  - [a16z] "the machine is the moat"——光有架构不够，必须规模化出货
- **ai_opportunity**: 「推理经济学」是本期最强宏观叙事，与 TechCrunch「Investors love AI as long as you're a cloud host」、Crunchbase「资本从训练轮到推理服务」（Baseten $1.5B / Fireworks $1.5B）三源互证。软件侧机会：tokens-per-watt 优化、推理成本归因、跨芯片推理路由。

## 6. YC S26 主题：AI 从 feature 变 foundation，进入物理世界、替代服务
- **type**: trend | **platform**: ycombinator.com | **secondhand**: true
- **source_url**: https://www.thevccorner.com/p/yc-summer-2026-requests-for-startups-ideas
- **source_date**: 2026-05（RFS 发布） | **fetched_at**: 2026-07-31
- **metrics**: S26 批次 7-9 月，Demo Day 9/10；每家投 $500K；YC 现每年 4 批。样本公司：Osseus（R&D 研究大脑）、Axelrod（酒店运营）、Kebra（现场服务 AI operating layer）、rekursiv.ai（自主科研模型）
- **description**: RFS 开篇 "AI has stopped being a feature and started being the foundation."。主张「替代而非辅助」服务——Gustaf Alströmer 论点：全球服务支出远超软件支出且多已外包，结构上易被替代。早期信号是 agent 基础设施（routing/context/eval/自动化）而非更多 agent。W26 对比：1/8 公司造实体物、$1M ARR 公司数是 W25 的 3x。
- **user_quote**: "AI has stopped being a feature and started being the foundation."
- **top_comments**:
  - [YC RFS 框架] 建 agent 依赖的 routing、context、evaluation、automation 层，而非只做 agent
- **ai_opportunity**: 「卖服务、干活、造 agent 依赖的底层」是 YC 明确导向。二手（聚合站+搜索），公司级数据待 Demo Day，但方向与官方 RFS 页（信号 #7）一致。

## 7. YC 官方 RFS（Fall 2026）：13 个方向，从人机信任到自维护 API
- **type**: trend | **platform**: ycombinator.com | **secondhand**: false
- **source_url**: https://www.ycombinator.com/rfs
- **source_date**: 空（RFS 滚动页，无单一内容日期） | **fetched_at**: 2026-07-31
- **metrics**: 13 个 request；首次有在任内阁官员（陆军部长 Daniel Driscoll）贡献 request；引用：一员工在视频会议后误汇 $25M（除本人外全是合成人）；AWS「30%+ 服务停机源于外部 api/package 变更未被察觉」
- **description**: 方向含 The Primer（幼教 AI 导师）、American Defense、A Cloud for Small Software（一人/一队 app 托管）、Multiplayer AI（可多人加入的 agent 会话）、Compute at Sea、Proving You're Human（隐私保护的真人验证层）、AI-Native Compliance Infrastructure、Self-Maintaining APIs（provider 端 agent 扫客户代码、API 变更时开 PR）。
- **user_quote**: "Every trust signal we have was built for a world where faking a human was expensive."
- **top_comments**:
  - [YC RFS] "Small software should be as easy to share with your colleagues as a Google Doc."
  - [YC RFS] "But AI hasn't had its multiplayer moment yet."
  - [YC RFS Self-Maintaining APIs] 引 AWS "over 30% of our service downtime was due to external api/package changes going unnoticed."
- **ai_opportunity**: 「Self-Maintaining APIs」「A Cloud for Small Software」「Multiplayer AI」是三个具体、低竞争的可产品化缺口。Proving You're Human 与信号 #3/#4/#9 同构（人机信任层）。

## 8. Crunchbase：十亿美元种子轮的现实检验——资本密集反噬回报
- **type**: trend | **platform**: news.crunchbase.com | **secondhand**: false
- **source_url**: https://news.crunchbase.com/venture/billion-dollar-seed-ai-biotech-mcdonald-bison/
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 15 年间约 200 个 $100M+ 首轮，仅 20% 有退出、约 1% 对首笔投资人达 10x MOIC+；今日 AI 赢家起步都小：Cursor <$10M、ElevenLabs $2M、Legora $11M、Sierra $25M、Cohere $5M（现均 >$5B）；头部巨型种子：LeCun $1B、Project Prometheus $6.2B、Unconventional AI $475M
- **description**: Bison Ventures 的 Ellie McDonald 撰文反驳巨型首轮神话：高入场价压缩上行空间，资本密集不构成护城河。反复奏效的是以有复利空间的价格在资本高效公司买到真实 ownership。
- **user_quote**: "Capital intensity, as it turns out, actually worked against venture outcomes."
- **top_comments**:
  - [作者 Ellie McDonald] "We disagree. And so does the data."
  - [作者] "Cursor at less than $10 million is the more representative data point."
- **ai_opportunity**: 投资者视角的信号：资本高效、早期营收验证 > 巨型融资。呼应「Show Me era」，对独立开发者/小团队是利好叙事。

## 9. Crunchbase：AI 内容与 bot 检测/人机信任成投资主线（Cyera $1B 收 Oasis 护 AI agent）
- **type**: trend | **platform**: techcrunch.com | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/07/28/cyera-agrees-to-acquire-oasis-security-for-1b-to-safeguard-proliferating-ai-agents/
- **source_date**: 2026-07-28 | **fetched_at**: 2026-07-31
- **metrics**: Cyera $1B 收购 Oasis Security；同期 Okta 约 $200M 收 Permiso（AI security）；主题为「保护激增的 AI agents」
- **description**: 一周内多起并购聚焦「AI agent 身份与安全」——agent 数量激增带来新的身份、权限、审计需求。与 Spur（#4）、Pangram（#3）、YC Proving You're Human（#7）共同勾勒「人机/agent 信任层」这条最强横向主题线。
- **user_quote**: （并购公告，无第一人称原声）
- **top_comments**:
  - [TechCrunch 标题框架] 收购目的是 "safeguard proliferating AI agents"
- **ai_opportunity**: agent 身份/权限/审计（NHI, non-human identity）是并购热点。可产品化：面向企业的 agent 权限最小化、行为审计、机密访问日志层。

## 10. TechCrunch：Nscale 收购 Anyscale——推理/计算栈整合加速
- **type**: trend | **platform**: techcrunch.com | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/07/30/nscale-buys-anyscale-as-it-seeks-to-own-more-of-the-ai-compute-stack/
- **source_date**: 2026-07-30 | **fetched_at**: 2026-07-31
- **metrics**: Nscale 收购 Anyscale（Ray 背后公司）；同日 TechCrunch「Investors love AI, as long as you're a cloud host」
- **description**: 计算/推理层玩家纵向整合以掌控更多栈。与 a16z 推理论述（#5）、Crunchbase「资本从训练轮到推理服务」互证：市场共识正从模型训练转向推理服务与计算宿主经济。
- **user_quote**: （并购报道）
- **top_comments**:
  - [TechCrunch 标题] "Investors love AI, as long as you're a cloud host"
- **ai_opportunity**: 计算宿主/推理服务是资本最认可的变现层。软件侧：多云推理编排、成本优化、Ray 之上的应用层。

## 11. Even Realities $150M Pre-Series B：AI 硬件/可穿戴与「physical AI」资本潮
- **type**: trend | **platform**: aifundingtracker.com（聚合） | **secondhand**: true
- **source_url**: https://aifundingtracker.com/ai-startup-funding-news-today/
- **source_date**: 2026-07-06 | **fetched_at**: 2026-07-31
- **metrics**: Even Realities $150M Pre-Series B（美团领投，腾讯及中国基金跟投）；同期 Walden Robotics 带 $300M 出隐身、Bespoke Labs $40M A、EdVisorly $13.3M A；后期推理轮 Baseten $1.5B、Fireworks AI $1.5B；中国 2026 已融 $33B+（超 2025 全年）
- **description**: 无摄像头智能眼镜（自研 waveguide 光学，主打隐私），被视为 AI 可穿戴有力挑战者。资本正集中在 AI 与物理世界交汇处（physical AI：机器人、感知、可穿戴）及受监管的 agentic 系统。二手：数字来自聚合追踪站，未能定位一手公告，故 secondhand: true。
- **user_quote**: （聚合站，无一手原声）
- **top_comments**:
  - [aifundingtracker 综述] 资本集中于 physical AI（机器人/感知/可穿戴）+ 受监管场景的 agentic AI
- **ai_opportunity**: physical AI 与 AI 可穿戴是硬件资本重仓方向；中国战略资本（美团/腾讯）在硬件分发上有优势。软件侧机会有限，但为「AI+实体」应用层提供硬件底座信号。

## 12. 首例 MCP 诉讼：Runlayer 诉 Rippling 克隆其 MCP gateway
- **type**: pain_point | **platform**: techcrunch.com | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/07/28/mcp-startup-runlayer-accuses-rippling-of-stealing-its-product-idea/
- **source_date**: 2026-07-28 | **fetched_at**: 2026-07-31
- **metrics**: Runlayer 累计融资 $42M（Khosla Ventures、Felicis 支持），产品 2024 年中商用上线；Rippling 估值 $13.5B；诉由为商业秘密侵占、不正当竞争、违约，2026-07-28 递交 SDNY 并申请初步禁令，代理律所 Sullivan & Cromwell；双方签有互相 NDA 与禁止复制/衍生作品的试用协议
- **description**: MCP（Anthropic 2024 年 11 月开源）网关赛道的第一起诉讼。Runlayer 称 Rippling 以潜在买方身份评估近一年、期间获得其路线图与源代码，价格谈崩、试用终止后，一名 Rippling 内部人士给 CEO Andrew Berman 发短信称公司在内部造 Runlayer 的克隆。Rippling 承认在发自己的 MCP gateway，但否认 IP 指控。对独立开发者的意义：把源代码/路线图交给体量大 300 倍的潜在收购方做 POC，是 agent 基础设施层的结构性风险。
- **user_quote**: "a project internally to build essentially a clone o[f] Runlayer"（Runlayer 诉状引述的 Rippling 内部人士短信）
- **top_comments**:
  - [Runlayer 诉状] 双方关系历时 "nearly a year of intensive engineering collaboration."
  - [Rippling 回应] 称自己在 "launching a superior product for connecting AI tools to business data using only our proprietary information."
  - [Rippling 回应] 称诉讼是 "panicked effort to avoid competition by fabricating claims."
- **ai_opportunity**: 反向机会：面向小团队的「POC 期 IP 留痕/代码水印/访问审计」工具（谁在何时看了哪段代码与路线图），以及标准化的 agent 基础设施试用协议模板。同时印证 MCP gateway 本身已是有人愿意打官司争夺的赛道。

## 13. Crunchbase：H1 2026 六成融资流入十亿美元级单轮，两笔占美国过半
- **type**: trend | **platform**: news.crunchbase.com | **secondhand**: false
- **source_url**: https://news.crunchbase.com/venture/billion-dollar-plus-round-counts-rising-ai-fintech-healthcare-h1-2026/
- **source_date**: 2026-07-23 | **fetched_at**: 2026-07-31
- **metrics**: 全球年初至今 60%（约 $320B）融资进入 $1B+ 单轮；美国比例 73%（$290B），其中 OpenAI 与 Anthropic 两笔就占美国该口径一半以上；美国 2026 已知 $1B+ 轮 23 笔，剩余约 5 个月已追平创纪录的 2025；23 笔中仅 2 笔属种子/早期（Prometheus、World Labs）；全球 H1 2026 创投总额创纪录 $510B；2025 全年 AI 融资 $212B（同比 +85%）
- **description**: 作者 Joanna Glasner。历史参照：美国首个十亿级轮是 2014 年 Uber $1.2B D 轮，其后三年 SpaceX/Airbnb/Lyft/Snap/Grail/WeWork/Argo AI 等跟进，结果分化明显（Argo AI 与 WeWork 失败，Grail 混合）。OpenAI 与 Anthropic 均已保密递交 IPO 申请。含义：总量创纪录但极端集中，中位数公司的融资环境并不等于头条数字。
- **user_quote**: 早期巨型轮的教训是，押注强势独角兽可以奏效，但 "far from a sure bet."
- **top_comments**:
  - [Crunchbase] 当前周期已延伸到 "tens of billions or even over $100 billion" 的单轮
  - [Crunchbase] 2026 年前，十亿级轮占融资比例一直是少数，唯一例外是 OpenAI 融 $40B 的 2025 Q1
- **ai_opportunity**: 对小团队的实际读法：头部资本被两三家实验室吸走，应用层与工具层反而竞争者更少、更依赖真实营收。适合做「资本集中度 vs 细分赛道空白」的选题雷达。

## 14. a16z Top 100 Gen AI Apps 第六版：ChatGPT 一家独大，但连接器生态成新锁定点
- **type**: product_market | **platform**: a16z.com | **secondhand**: false
- **source_url**: https://a16z.com/100-gen-ai-apps-6/
- **source_date**: 2026-03-09 | **fetched_at**: 2026-07-31
- **metrics**: 方法论：Web 按 SimilarWeb 月独访、Mobile 按 Sensor Tower MAU，数据截至 2026 年 1 月。Web：#1 ChatGPT（流量为 Gemini 的 2.7x）、#2 Gemini、#15 Suno、#25 Google Labs（前值 #36）、#46 Midjourney（曾首发进前十）。Mobile：#1 ChatGPT（MAU 为第二名 2.5x）；Yandex Browser（内置 Alice）7100 万 MAU，列全球移动 AI 前十。ChatGPT 9 亿周活（同比 +5 亿）、美国付费订阅为 Claude 的 8x、Gemini 的 4x；Claude 付费订阅同比 +200%+、Gemini +258%；ChatGPT 连接器 220 个（13 类），Claude 约 160 个精选连接器 + 约 50 个社区 MCP server，仅 41 个重叠。Claude Code 6 个月达 $1B 年化；Codex 200 万周活、周增 25%
- **description**: 作者 Olivia Moore。本版把入选范围从 AI-native 扩到「生成式 AI 为核心体验」的消费应用（纳入 CapCut/Canva/Notion/Picsart/Freepik/Grammarly）。三个结构性发现：一是默认助手之争未定，连接器生态而非模型能力成为锁定点，且 ChatGPT 偏消费交易（旅行/购物/餐饮）、Claude 偏专业场景（金融终端/开发基础设施/科学）；二是地理三极化，DeepSeek 是唯一跨越中俄美的产品，人均使用新加坡第一、美国仅第 20；三是创意工具从图像轮动到视频/音乐/语音（2023 年 9 个创意类 Web 入选中 7 个是图像生成，现仅 3 个），因为图像被 ChatGPT/Gemini 打包成勾选项，而 ElevenLabs 式语音能力 "haven't been replicated as a checkbox feature"。榜单本身低估了 AI 使用量——增长正转移到浏览器、桌面开发工具与嵌入式功能。注意：榜单以字母序发布 Top 50，除文中点名的名次外无法还原完整 #1-#50 排序。
- **user_quote**: "As AI moves from a destination to a feature, our methodology will need to shift."
- **top_comments**:
  - [a16z] 预期终局更接近移动 OS 双寡头，而非搜索大战的单一赢家
  - [a16z] 约 20% 的 ChatGPT 周活 Web 用户同时也在用 Gemini
  - [a16z] OpenClaw（Peter Steinberger 的本地运行 agent）数周内 68,000 GitHub stars、3 月初成最高星项目、2026 年 2 月被 OpenAI 收购，但 Terminal 安装门槛使其难入主流
- **ai_opportunity**: 最可操作的一条是「被打包成勾选项 vs 无法被打包」的判据：图像生成已被巨头内建吞掉，语音/音乐/视频尚未。选品应挑不能变成 checkbox 的能力。其次，Claude 连接器与 ChatGPT 仅 41 个重叠，说明 MCP/连接器生态存在大量单侧空白；移动端 agent 走 WhatsApp/Telegram/SMS 而非独立 app，是被低估的分发通道。

## 15. Crunchbase：超四成种子/A 轮资金进入 $100M+ 巨型早期轮
- **type**: trend | **platform**: news.crunchbase.com | **secondhand**: false
- **source_url**: https://news.crunchbase.com/venture/seed-seriesa-startup-megadeals-ai-2026/
- **source_date**: 2026-01-28 | **fetched_at**: 2026-07-31
- **metrics**: 全球 2026 年种子与 A 轮资金中 40%+ 进入 $100M+ 单轮；美国口径超过一半。样本：Humans&（$480M 种子，年内最大，由 Google/Anthropic/xAI/OpenAI/Meta 研究者 9 月创立）、Ricursive Intelligence（$300M A 轮，$4B 估值）、Merge Labs（据报 $252M 种子，Sam Altman 创办的脑机接口，OpenAI 为主要出资方）、Mal（阿布扎比，$230M 首轮，BlueFive Capital 领投，AI 伊斯兰数字银行）、Upscale AI（$200M A 轮，AI 网络基础设施）
- **description**: 作者 Joanna Glasner。趋势线：巨型早期轮在 2021 峰值附近增多、其后两年回落、2024 起回升、2026 急剧反弹。与本组 #8（Bison Ventures 的反驳：约 200 个 $100M+ 首轮中仅 20% 有退出、约 1% 达 10x MOIC）构成同一议题的正反两面证据。
- **user_quote**: 种子轮的经典刻板印象是 "a small, risky bet on an unproven founder."
- **top_comments**:
  - [Crunchbase] "it's certainly gotten costlier for those writing the checks."
  - [Crunchbase 脚注] 以 $100M+ 为「巨型」阈值，"although the pattern could be seen with some slightly different parameters."
- **ai_opportunity**: 种子轮已分裂为两个市场：明星研究者的九位数轮，和其余所有人。对独立开发者意味着「先有营收再融资」的路径不是次优选择而是唯一现实路径，与 #8 的资本效率数据一致。
