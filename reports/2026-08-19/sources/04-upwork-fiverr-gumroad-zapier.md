# 04 — Upwork + Fiverr + Gumroad + Zapier/Make 2026-08-19

> 组内信号：9 条 | 二手转述：7 条（78%）
> 最强证据线：Fiverr 官方 Business Trends Index 显示 Claude Code 专家需求 6 个月暴涨 938%、n8n 自动化 +125%，与 Upwork 官方报告 AI 技能需求 +109%（AI 视频 +329%）互相印证——「帮企业把 AI 落地」的服务需求远超供给。渠道故障：Upwork/Fiverr 主站全部 403 反爬；Gumroad 遭 DNS 污染（解析到 Meta/Twitter IP 段），完全不可达；Yahoo Finance 403、GlobeNewswire/investors.upwork.com 超时。Zapier 与 Make 直接抓取成功（一手）。搜索渠道本次正常（结果与查询高度相关，无污染迹象）。

---

## 1. Upwork 官方：AI 应用类技能需求同比 +109%，AI 视频生成/剪辑 +329% 居首
- **type**: product_market | **platform**: Upwork | **secondhand**: true
- **source_url**: https://www.upwork.com/press/releases/upworks-in-demand-skills-2026-demand-for-top-ai-skills-more-than-doubles-as-ai-is-embedded-into-everyday-work
- **source_date**: 2026-02-04 | **fetched_at**: 2026-08-19
- **metrics**: AI 应用类技能收入同比 +109%（其他热门技能仅 +23%）；AI 视频生成与剪辑 +329%；AI 集成 +178%；AI 数据标注 +154%；AI 图像生成/编辑 +95%；AI 聊天机器人开发 +71%；77% 企业领导者称 AI 增加了对专业化零工人才的需求
- **description**: Upwork 第六年度 In-Demand Skills 报告（基于 2025 全年美国需求侧的自由职业者实际成交收入，每技能门槛 $100K）。AI 视频是增长最快的技能；同时全栈开发、虚拟助理、数据分析、平面设计等「最易被 AI 取代」的类目需求依然坚挺。注意：官方页面 403 无法直接抓取，内容经 GlobeNewswire/Nasdaq/Quartz 多路转载交叉验证，故标二手。方法论偏差：客户在给旧岗位模板补打 AI 标签，增长部分反映搜索行为变化而非纯新增工作量。
- **user_quote**: "Demand for the top skills explicitly tied to applying AI within existing roles grew 109% year over year."
- **top_comments**:
  - [报告方法论] "Only completed jobs were analyzed, and each skill needed a minimum of $100,000 aggregate freelancer earnings in its category during the period."
  - [配套调查] "77% of business leaders say AI is increasing their need for specialized, fractional talent rather than traditional full-time roles."
- **ai_opportunity**: AI 视频生成/剪辑是收入增速第一的技能且工具链碎片化——面向自由职业者的「AI 视频交付工作台」（脚本→生成→剪辑→客户审片一条龙）可直接卖给这批供给端。

## 2. Upwatcher 爬虫：Upwork AI 类月发单 4,089 条，n8n/Zapier/Make/Claude 成高频技能标签
- **type**: product_market | **platform**: Upwork | **secondhand**: true
- **source_url**: https://www.upwatcher.io/guides/upwork-ai-jobs-2026/
- **source_date**: 2026-05-16 | **fetched_at**: 2026-08-19
- **metrics**: 滚动 30 天 AI 类发单 4,089 条（占全库 35%）；时薪中位 $30，P75 $40，P90 $60（平台整体中位约 $25）；技能标签频次：AI Agent Development 621、N8N 357、Zapier 274、Claude 246、Make.com 230、AI App Development 214
- **description**: 第三方爬虫 Upwatcher 对 Upwork 发单的抓取分析（非 Upwork 官方数据，标二手）。AI Agent Development 标签量（621）已超过 Machine Learning（579）；n8n+Zapier+Make 三个自动化工具标签合计 861 次，说明「用现成自动化平台帮企业搭工作流」已是独立雇佣品类。低端提示词/标注工作「brutally competitive」，而能上生产的集成/agent 端持续供不应求。
- **user_quote**: "the commodity end (prompt writing, data labeling) is described as 'brutally competitive,' while integration/agents/vertical AI remains demand-heavy"
- **top_comments**:
  - [页面建议] "you need to have shipped one production AI feature end-to-end."
  - [页面告诫] "the premium has a quiet expiry date"（AI 溢价随供给涌入将消退）
- **ai_opportunity**: 面向 n8n/Make/Zapier 交付型自由职业者的工具（模板库、客户交付/监控面板、workflow 售后托管 SaaS）——861 次/月的技能标签就是付费客群规模的下限。

## 3. Fiverr 官方：Claude Code 专家搜索需求 6 个月暴涨 938%
- **type**: product_market | **platform**: Fiverr | **secondhand**: true
- **source_url**: https://www.stocktitan.net/news/FVRR/businesses-race-to-hire-claude-code-specialists-as-demand-surges-6x7lep85s2n8.html
- **source_date**: 2026-06-09 | **fetched_at**: 2026-08-19
- **metrics**: Claude Code +938%；n8n AI automation +125%；vibe coding +61%；AI voice agents +49%；数据窗口 2025-11 至 2026-04 vs 前 6 个月，样本为「millions of searches」
- **description**: Fiverr 官方 Business Trends Index（GLOBE NEWSWIRE 发布，本文为 StockTitan 全文转载；fiverr.com 官方页 403 不可达，故标二手）。企业急于采用 AI 但内部无人会用新工具，直接转化为对 Claude Code/n8n 专家的采购。文章论点：Claude Code「学习曲线陡到雇专家比培训员工划算」。
- **user_quote**: "Businesses are facing an urgency to adopt AI, and our data shows that urgency is translating directly into demand for specialized talent." — Jinjin Qian, Fiverr 首席商务官
- **top_comments**:
  - [Jinjin Qian, Fiverr CBO] "Tools like Claude Code have raised the ceiling on what any business can build"
  - [Elliott Johnson, EKB Labs 创始人/平台 AI 顾问] "Freelancers are bridging the gap between businesses that experiment with AI and those that are meaningfully adopting it"
  - [Elliott Johnson] "Anyone can spin up a prototype now, but there's a massive gap between that and something that actually holds up."
- **ai_opportunity**: 「原型→生产」的鸿沟本身就是产品：Claude Code 项目加固/审计服务包、企业级 agent 部署模板、或面向卖家的 Claude Code 交付脚手架，都踩在 938% 的需求斜率上。

## 4. Fiverr 官方：AI UGC 视频广告 +265%，AI 类目增长冷热极分化（视频 +278% vs 数据 +3%）
- **type**: trend | **platform**: Fiverr | **secondhand**: true
- **source_url**: https://www.stocktitan.net/news/FVRR/businesses-race-to-hire-claude-code-specialists-as-demand-surges-6x7lep85s2n8.html
- **source_date**: 2026-06-09 | **fetched_at**: 2026-08-19
- **metrics**: AI UGC video ads +265%；AI video ads +63%；AI 相关服务分类目增长：Video & Animation +278%、Programming & Tech +94%、Digital Marketing +62%、Data +3%；人工剪辑同涨（video editing +36%、short-form +27%）
- **description**: 同一期 Business Trends Index 的类目切面：AI 采用首先发生在面向客户的内容生产（视频/营销），而非后台数据基础设施——Data 类 AI 服务几乎零增长（+3%）对比视频类 +278%。且 AI 视频需求与人工剪辑需求同步上涨，说明 AI 产出仍需人工精修，不是替代关系。
- **user_quote**: "AI uptake is happening first in customer-facing content work rather than backend infrastructure"
- **top_comments**:
  - [同报告社媒切面] "YouTube automation faceless channels: +239% (Digital Marketing), +230% (Video & Animation)"
- **ai_opportunity**: AI UGC 广告工厂（品牌投喂产品图→批量生成 UGC 风格短视频→A/B 投放数据回流）是增速最陡的可产品化场景；Data+3% 也提示别把创业方向押在「AI 数据服务外包」。

## 5. Fiverr 官方：YouTube 无脸频道自动化需求 +239%
- **type**: product_market | **platform**: Fiverr | **secondhand**: true
- **source_url**: https://www.stocktitan.net/news/FVRR/businesses-race-to-hire-claude-code-specialists-as-demand-surges-6x7lep85s2n8.html
- **source_date**: 2026-06-09 | **fetched_at**: 2026-08-19
- **metrics**: YouTube automation faceless channels：Digital Marketing 类 +239%、Video & Animation 类 +230%；配套需求：thumbnails +52%、video promotion +31%
- **description**: 「无脸频道」（faceless channel：AI 脚本+AI 配音+素材拼剪，运营者不出镜）在 Fiverr 两个大类里同时排进增长前列，买家是想做被动收入频道的个人/小团队，把整条内容流水线外包。缩略图和推广需求同涨说明买的是全托管而非单点。
- **user_quote**: 无（官方释出为数据表，无买家评论）
- **ai_opportunity**: 端到端无脸频道 SaaS（选题→脚本→TTS→剪辑→缩略图→定时发布）直接对标这批外包买家的预算；或做「频道健康度审计」切高端。

## 6. Gumroad 数据集：软件开发类 $65.8M 居首，最赚钱单品是 AI Photoshop 脚本（$586K）
- **type**: product_market | **platform**: Gumroad | **secondhand**: true
- **source_url**: https://insightraider.com/en/answers/what-digital-products-sell-best-on-gumroad
- **source_date**: 2026-06-29 | **fetched_at**: 2026-08-19
- **metrics**: 追踪 146,271 个公开商品、$206M 估算终身收入；Software Development 类 $65.8M（1,083 个商品，均价 $39.95，$60,814/商品）；榜首单品 Nano Banana & Flux AI Script (Photoshop)：$50 × 11,725 销量 ≈ $586K
- **description**: 第三方爬虫数据集（销量×标价估算，与 30+ 创作者实数核对，±15-20% 误差；2024-01 至 2026-06，月更）。Gumroad 主站遭 DNS 污染无法直接验证，标二手。核心发现：最赚钱的不是提示词包/电子书，而是「嵌进用户已付费软件里的 AI 工具」——榜首是把 Nano Banana/Flux 图像模型接进 Photoshop 的脚本，定价 $50「priced like products, not impulse buys」。
- **user_quote**: "rank a niche by revenue per product and competition, not by headline revenue"
- **top_comments**:
  - [数据集方法论] "sales count × listed price, checked against 30+ creators who shared actual numbers (±15–20% margin of error)"
  - [费率注脚] Gumroad 10% 平台抽成是 "the highest of any major digital product platform since 2023"
- **ai_opportunity**: 复制 Nano Banana 脚本模式：把最新 AI 模型能力封装成 Photoshop/Blender/Premiere/Excel 等存量专业软件的插件，$30-50 定价，卖给已证明愿付费的专业用户。

## 7. Gumroad 数据集：Writing & Publishing 是竞争最小的高单产洼地（$15,750/商品，仅 226 个商品）
- **type**: product_market | **platform**: Gumroad | **secondhand**: true
- **source_url**: https://insightraider.com/en/answers/what-digital-products-sell-best-on-gumroad
- **source_date**: 2026-06-29 | **fetched_at**: 2026-08-19
- **metrics**: Writing & Publishing：$15,750 收入/商品，仅 226 个在售商品，销量中位数 41，平均评分 3.18；对比 3D Assets 2,082 个商品仅 $6,675/商品
- **description**: 同一数据集的洼地分析：常规类目里单商品收入最高、供给最少的是写作出版类，且 3.18 的平均分说明现有商品质量差——需求在、供给烂。Fitness & Health（$11,046/商品，379 个）与 Business & Money（$10,130/商品）同为低竞争高单产。
- **user_quote**: "$15,750 revenue per product across only 226 products — the highest revenue per product of any conventional category, with the least competition and a median of 41 sales"
- **ai_opportunity**: 面向作者/出版的 AI 工具包（书稿结构化、投稿信生成、KDP 排版自动化）进入一个 226 个竞品、平均分 3.18 的类目，是数据上最便宜的验证场。

## 8. Zapier 一手：AI 类目 708 个应用，官方力推 Human-in-the-Loop 与 MCP 组件
- **type**: product_market | **platform**: Zapier | **secondhand**: false
- **source_url**: https://zapier.com/apps
- **source_date**: 空（目录快照，无单一内容日期） | **fetched_at**: 2026-08-19
- **metrics**: 平台连接 9,967+ 应用；类目应用数：Sales & CRM 1,952 > Marketing 1,176 > Commerce 857 > Communication 768 > Artificial Intelligence 708 > Productivity 640；Popular apps 榜中唯一显性 AI 产品是 ChatGPT
- **description**: 直接抓取 zapier.com/apps 与 /apps/ai-tools（一手）。AI 已是第 5 大类目（708 个应用），但热门榜仍被 Google Sheets/Gmail/Slack 占据——AI 是被「接进」既有 SaaS 工作流，而非独立入口。Zapier 第一方 AI 套件六件套里专设 "Human in the Loop by Zapier"（暂停工作流等人审批）和两个 MCP 组件（MCP Client + MCP Servers），说明「人工兜底」和「让 Claude 等模型直连工作流」是官方判断的最大痛点。
- **user_quote**: "Pause any workflow and let a human review, approve, or edit before it continues"（Human in the Loop by Zapier 官方文案）
- **top_comments**:
  - [zapier.com/apps/ai-tools] "Connect Claude and other AI models directly to your Zapier workflows with a no-code setup"（MCP Client by Zapier）
  - [zapier.com/apps/ai-tools] "Build autonomous AI agents that work 24/7 across your apps"（Zapier Agents）
- **ai_opportunity**: 独立开发者版 human-in-the-loop 审批层（跨 n8n/Make/自建 agent 的统一人审收件箱）——巨头已用产品投票确认这是 agent 落地的卡点。

## 9. Make 一手：最热门集成榜 Top 21 中 AI 应用占 6 席，AI 类目细分出 21 个子类
- **type**: trend | **platform**: Make | **secondhand**: false
- **source_url**: https://www.make.com/en/integrations
- **source_date**: 空（目录快照） | **fetched_at**: 2026-08-19
- **metrics**: 全库 3,551 个应用；Most Popular 排序前 21 中 AI 占 6：OpenAI (ChatGPT, Sora, Whisper) #3、Google Gemini AI #6、Anthropic Claude #15、Make AI Toolkit #18、Make AI Agent #20，另 Featured 行含 Perplexity、Vapi（语音 agent）；AI 类目下设约 21 个子类（Agentic AI、Voice Agents、Knowledge Retrieval、Meeting Notes、Data Extraction 等）
- **description**: 直接抓取（一手）。OpenAI 集成热度已排全平台第 3，仅次于 Google Sheets 和 Gmail；Claude 排 #15 超过 Shopify/Stripe/WordPress。语音 agent 平台 Vapi 进入官方 Featured 行、"Voice Agents" 独立成子类，是本次快照里最新的品类信号。热门使用场景官方列为 Social Media Posting、Lead Management、Email Marketing、Content Creation。
- **user_quote**: "designed to autonomously perform tasks based on goals, making decisions and solving problems in real-time"（Make 对 agentic 应用的官方描述）
- **top_comments**:
  - [make.com/en/integrations] "Connect your AI to real business actions securely and visually"（Make MCP Server 文案）
  - [make.com/en/integrations] "Explore ready-made AI agents you can deploy and adapt instantly"（Library of Agents）
- **ai_opportunity**: 「LLM×表格×邮件」是被验证的最高频组合（榜单前三即 Sheets/Gmail/OpenAI）——围绕这条链做垂直模板包或托管服务是最短路径；语音 agent（Vapi 上榜）是尚未拥挤的下一格。

---

### 渠道故障记录（供 orchestrator 复核）
- upwork.com（/freelance-jobs/、/hire/、/resources/、/press/）：全部 HTTP 403 反爬
- fiverr.com（/categories/trending、/categories/programming-tech/ai-coding、/news/）：全部 HTTP 403
- gumroad.com / www.gumroad.com / app.gumroad.com：DNS 污染，解析到 Meta（157.240.x）与 Twitter（104.244.x）IP 段，证书为 aidemos.meta.com——非站方封锁，是网络层劫持
- finance.yahoo.com 403；investors.upwork.com 与 globenewswire.com 连接超时
- zapier.com、make.com：直接抓取成功
- WebSearch 本次正常（结果与查询强相关，未见 2026-07-28 式污染）
