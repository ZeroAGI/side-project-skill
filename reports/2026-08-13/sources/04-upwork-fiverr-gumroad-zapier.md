# 04 — Upwork + Fiverr + Gumroad + Zapier/Make 2026-08-13

> 组内信号：9 条 | 二手转述：6 条（67%）
> 最强证据线：Upwork 官方报告「AI 技能需求 +109% YoY、AI 视频生成 +329%」与 Fiverr 官方趋势指数「Claude Code 搜索 +938%、n8n AI automation +125%」互相印证——「AI 自动化搭建/集成」是三大市场共同的最热品类。渠道故障：Upwork 与 Fiverr 主站全部 Cloudflare 403（curl 亦被 challenge 页拦截）；Gumroad 域名 DNS 解析被污染到 Facebook IP（31.13.88.26，ECONNREFUSED），discover 页完全不可达；investors.upwork.com 超时、finance.yahoo.com 403。故 Upwork/Fiverr/Gumroad 数据依赖官方报告转述与第三方抓取站，均如实标 secondhand。搜索渠道本身工作正常（结果与查询高度相关，无污染迹象）。

---

## 1. Upwork 官方《In-Demand Skills 2026》：AI 技能需求 +109% YoY，AI 视频生成 +329%
- **type**: product_market | **platform**: Upwork | **secondhand**: true
- **source_url**: https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai
- **source_date**: 2026-02-04 | **fetched_at**: 2026-08-13
- **metrics**: AI 应用类技能需求 +109% YoY（其他 in-demand 技能仅 +23%）；AI 视频生成与剪辑 +329%；AI integration +178%；AI 数据标注 +154%；AI chatbot 开发 +71%；AI 项目时薪溢价约 40%。方法论：2025 全年 Upwork 市场成交数据（仅已完成工作、单技能类目 ≥$100K 累计收入）
- **description**: Upwork 第六年度官方技能需求报告（2026-02-04 发布）。AI 技能需求翻倍的同时，全栈开发、虚拟助理、数据分析、平面设计等传统技能依然坚挺——「AI 嵌入日常工作」而非取代人。注意两个折扣因素：客户在给旧工作模板重新打 AI 标签（tagging inflation）；AI 类自由职业者供给增速快于需求增速，佣金端（prompt 写作、标注）竞争惨烈，而集成/agents/垂直 AI 端仍供不应求。原始页面 investors.upwork.com 超时、Yahoo 转载 403，数据经搜索渠道转述，故标 secondhand。
- **user_quote**: "Skills explicitly tied to applying AI within existing roles grew 109% year over year, far outpacing the 23% growth of other in-demand skills."
- **top_comments**:
  - [搜索结果综述] "AI video generation and editing (+329%), AI integration (+178%), AI data annotation and labeling (+154%), and AI chatbot development (+71%)."
  - [搜索结果综述-警示] "Clients are actively re-tagging older job templates with AI-related skills — the underlying work may be the same, but the tag list reflects 2026 buyer search behavior."
  - [搜索结果综述-警示] "The commodity end (prompt writing, data labeling) is brutally competitive, while the integration/agents/vertical-AI end remains demand-heavy because few freelancers can actually ship production AI features."
- **ai_opportunity**: AI 视频生成 +329% 是全平台最快赛道但工具链割裂——面向自由职业者的「AI 视频交付工作台」（脚本→生成→剪辑→客户审阅一体化）可直接卖给这批新涌入的服务者；AI integration +178% 印证「帮中小企业把 AI 接进现有系统」是最抗商品化的服务形态。

## 2. Upwork AI/自动化职位 30 天实测：4,089 条职位、中位 $30/hr、n8n 标签 357 次
- **type**: product_market | **platform**: Upwork (via Upwatcher 抓取) | **secondhand**: true
- **source_url**: https://www.upwatcher.io/guides/upwork-ai-jobs-2026/
- **source_date**: 2026-05-16 | **fetched_at**: 2026-08-13
- **metrics**: AI 家族 30 天 4,089 条职位（占其追踪语料 11,541 条的 35%）；子关键词：ai 2,866 / ai automation 1,790 / machine learning 1,286 / automation 337；时薪分布 P25 $19 / P50 $30 / P75 $40 / P90 $60（平台整体中位约 $25）；固定预算中位 $150。技能标签榜：Python 1,022、Artificial Intelligence 941、Automation 656、AI Agent Development 621、API Integration 552、N8N 357、Zapier 274、Claude 246、Make.com 230。客户地理：美国 998 居首
- **description**: 第三方追踪站 Upwatcher 对 Upwork 在线职位的实时抓取（页面生成于 2026-05-16）。AI 是「Upwork 上最响亮的板块」，占 35%。关键结构信号：技能标签里 n8n(357)+Zapier(274)+Make.com(230) 合计 861 次，说明大量买家要的不是模型开发而是「把自动化工作流搭起来」；Claude 单独成标签（246 次）。ML 时薪最高但量最小，AI automation 量最大且价格尚可。
- **user_quote**: "The loudest segment on Upwork right now" — AI 家族占追踪语料 35%
- **top_comments**:
  - [Upwatcher guide] "around $30/hr vs ~$25/hr platform-wide."（AI 职位对平台整体的溢价）
  - [Upwatcher guide] 技能构成 "half foundational (Python, APIs, JavaScript) and half AI-specific."
  - [Upwatcher guide] 溢价 "has a quiet expiry date"——职位量涨得比语料快，但新入场自由职业者涨得更快
- **ai_opportunity**: n8n/Zapier/Make 三标签合计 861 次出现 = 「自动化搭建外包」已是标准化需求。可产品化：n8n/Make 工作流模板市场、自动化需求→工作流生成器（把 $150 中位固定预算的小单彻底产品化）、面向接单者的工作流交付质检工具。

## 3. Fiverr 官方《Business Trends Index》(2026-06)：Claude Code 搜索 +938%、n8n AI automation +125%
- **type**: trend | **platform**: Fiverr | **secondhand**: true
- **source_url**: https://www.fiverr.com/resources/guides/reports/business-trends-index-june-2026
- **source_date**: 2026-06 | **fetched_at**: 2026-08-13
- **metrics**: 全球搜索需求对比（2025-05~10 vs 2025-11~2026-04）：n8n AI automation +125%；Claude Code +938%；vibe coding +61%；Base44 +95%；data entry typing +10%；copy-paste work +20%。第三方另引：AI 相关服务 YoY 约 +200%，AI 订单 Q1 2026 +118% YoY
- **description**: Fiverr 官方半年度趋势指数（2026 年 6 月版），覆盖 Programming & Tech、Digital Marketing、Video & Animation 等六大类。「Claude Code +938%」说明买家已经在按具体 AI 编码工具名搜索服务——工具原生服务化。有趣的反向信号：数据录入(+10%)、复制粘贴(+20%)这类纯手工任务同步增长，AI 并未消灭而是伴生了脏活。Fiverr 主站 403，数据经搜索渠道转述官方报告，标 secondhand。
- **user_quote**: "Fastest-growing searches: n8n AI automation (+125%), Claude Code (+938%), vibe coding (+61%), and Base44 (+95%)."
- **top_comments**:
  - [搜索结果综述] "traditional manual tasks remain part of the workflow, with data entry typing up 10% and copy-paste work up 20%."
  - [搜索结果综述] "generic prompts and basic AI art are commoditizing fast."
- **ai_opportunity**: 「Claude Code 服务」已成 Fiverr 搜索品类——围绕 Claude Code 的脚手架/审计/CLAUDE.md 配置服务与配套工具有直接买家；vibe coding 售后（烂尾项目修复）是尚未标准化的蓝海。

## 4. Fiverr 官方 AI 自动化成本指南：chatbot 项目均价 $520、AI agents $295
- **type**: product_market | **platform**: Fiverr | **secondhand**: true
- **source_url**: https://www.fiverr.com/resources/guides/costs/ai-automation-experts
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: AI chatbot 开发 ~$520/项目；AI 网站/软件 ~$371；机器学习 ~$367；Custom GPT 应用 ~$341；AI 集成 ~$298；AI agents 开发 ~$295；GEO（生成引擎优化）设置 ~$250 固定 / $8–$100/hr；流程自动化 $40–$500+；AI 专家时薪 $10–$200（入门 $10–$30）；AI coding 类目引导买家预算 $250–$1,500/项目
- **description**: Fiverr 官方买家成本指南（页面 403，数据经搜索转述）。给出了 AI 服务外包的「市场公允价」锚点：单个 chatbot 五百美元、单个 agent 三百美元——这正是 SaaS 产品可以切入的价格带（做成 $49/mo 产品即可对服务降维打击）。「GEO 生成引擎优化」作为独立计价品类出现，是新职业化信号。
- **user_quote**: "AI expert services run ~$98 (basic consulting) to $520 (complex chatbots)"
- **top_comments**:
  - [Memvers 500+ gig 分析 (2026-03)] AI Agents (Autonomous Workflow Automation) 报价区间 "$500–$10,000"；AI Chatbot Development "$50–$5,000"；AI Workflow Automation (No-Code) "$100–$3,000"
  - [搜索结果综述-卖家端] "The $5 gig is dead — top sellers in 2026 lead with $75–$250 starter packages and build five-figure months on retainer add-ons rather than volume."
- **ai_opportunity**: 每个 $295–$520 的一次性交付项目都是一个可订阅化的 SaaS 缺口：模板化 chatbot/agent 生成器直接吃掉 Fiverr 低端单；GEO 审计工具可卖给刚出现的 GEO 服务者群体。

## 5. Fiverr AI gig 价格全景（Memvers 抓取 500+ gigs，2026-03）：AI Agents 最高 $10,000
- **type**: product_market | **platform**: Fiverr (via Memvers 分析) | **secondhand**: true
- **source_url**: https://memvers.com/blog/ai-services-fiverr-2026
- **source_date**: 2026-03 | **fetched_at**: 2026-08-13
- **metrics**: 10 大 AI 服务品类价格区间：AI Agents $500–$10,000；AI Chatbot $50–$5,000；AI Workflow Automation (No-Code) $100–$3,000；Custom GPT $50–$2,000；AI 数据分析 $50–$2,000；AI 视频生成 $25–$1,500；AI SEO 内容 $20–$1,000；语音克隆 $10–$600；AI 音乐 $15–$500；AI 插画 $10–$500。整体跨度 $10–$10,000，建议起步预算 $50–$200
- **description**: 第三方对 500+ Fiverr AI gig 的实测抓取（2026 年 3 月）。价格天花板排序清晰：自主工作流 agents（$10K 顶价）> chatbot（$5K）> 无代码自动化（$3K）>> 内容生成类（几百美元封顶）。「搭系统」比「产内容」贵一个数量级——内容生成已商品化，系统集成仍是稀缺能力。注意该页部分统计字段渲染为零值，仅采用其区间数据。
- **user_quote**: "AI Agents (Autonomous Workflow Automation) — $500–$10,000"
- **top_comments**:
  - [Memvers 页内] 图表源注 "Source: Memvers analysis of 500+ Fiverr AI gigs (March 2026)"
- **ai_opportunity**: 价格断层即产品机会：$500 以下没有像样的 agent 交付选项——「$99 起的模板化垂直 agent」（预约、客服、lead 跟进）可占领 Fiverr 买家里预算不足 $500 的长尾。

## 6. Gumroad/Etsy Notion 模板市场扫描（400+ listings，Q1 2026）：「买家写进标题」的细分模板碾压通用款
- **type**: product_market | **platform**: Gumroad + Etsy (via Kupkaike 扫描) | **secondhand**: true
- **source_url**: https://kupkaike.com/blog/best-selling-notion-templates-etsy-gumroad-2026
- **source_date**: 2026-04-06 | **fetched_at**: 2026-08-13
- **metrics**: 扫描 400+ listings（Q1 2026，以评论数为销量代理）；$9–$29 带视觉预览的模板胜出文字型 listing 3:1；新房主/新手父母类单 listing "40–120+ sales/month"；职业专属类开放细分约 20–80 单/月；饱和通用类头部 "1,000–3,500+ reviews"；Gumroad 复杂系统 $39–$99、独立款甜点价 $19–$39、最佳收入段 $25–$75；ADHD 系统 $29–$49
- **description**: 唯一给出方法论的 Gumroad 需求源（Gumroad 主站 DNS 污染完全不可达）。核心结论：通用生产力模板衰退，「生活行政」（搬家/新房/新生儿财务）、职业工作流（治疗师 $29–$49、房产经纪 $35–$79）、ADHD/神经多样性规划三大细分高速增长，ADHD 类靠 r/ADHD 口碑传播。Gumroad 买家更懂 Notion，复杂 PKM/solopreneur OS 和 bundle 卖得动。系卖家自家选品工具的营销博客，销量为评论数推断，需打折。
- **user_quote**: "The specificity is the product."
- **top_comments**:
  - [Kupkaike] "One good mention in r/ADHD or r/ADHDmemes can drive dozens of sales."
  - [Kupkaike] "The buyer is named in the title." / "The out-of-box experience is the product."
  - [Kupkaike] 饱和警告：超过 500+ reviews 的头部 "you can't outrank it in the near term."；作者自陈 "This isn't a perfect methodology"
- **ai_opportunity**: 「细分即产品」逻辑可被 AI 规模化：AI 生成职业专属工作流模板（喂入某职业的 SOP 语料→产出带示例数据的 Notion/表格系统），或做「细分缺口扫描器」本身；AI prompt 包 $10–$49 冲动价带与此同构。

## 7. Zapier 应用目录：AI 类目 704 个应用，居七大类目第五
- **type**: product_market | **platform**: Zapier | **secondhand**: false
- **source_url**: https://zapier.com/apps
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 平台 "connects 9949+ apps"；类目规模：Sales & CRM 1,947 / Marketing 1,173 / Commerce 857 / Communication 769 / **Artificial Intelligence 704** / Productivity 640 / IT Operations 583；最小类目 IoT 53。Popular apps 22 个中 Google 系占 6 席（Sheets/Gmail/Calendar/Drive/Forms/Docs），ChatGPT 是唯一上榜 AI 应用
- **description**: Zapier 官方目录直接抓取（快照，无单一内容日期）。AI 类目 704 个应用已超过 Productivity 和 IT Operations，成第五大类目——但 popular 榜上 AI 应用只有 ChatGPT 一个，说明 AI 应用「多而不聚」：长尾大量接入，头部心智仍被表格/邮件/IM 占据。真正高频连接的仍是 Google Sheets/Gmail/Slack——AI 自动化的落点是把结果写回这些老应用。
- **user_quote**: "connects 9949+ apps so you can automate work across your stack — no code required."
- **top_comments**:
  - [页面] ChatGPT (OpenAI) 描述为 "an AI tool built by OpenAI that enables conversational automation."
- **ai_opportunity**: 704 个 AI 应用 × 头部老应用 = 组合爆炸，用户选型瘫痪——「AI 自动化选型/编排顾问」工具，或专注做「AI 结果→Sheets/Gmail/Slack 回写」这条最高频链路的垂直深化。

## 8. Zapier 自营 AI 产品线成型：Agents、MCP、Human-in-the-Loop 全家桶
- **type**: trend | **platform**: Zapier | **secondhand**: false
- **source_url**: https://zapier.com/apps/ai-tools
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: "Integrations 9,000+"、"AI 477"（AI 工具专页计数）、"Over 10,000+ connections"；自营 AI 产品 6 件：AI By Zapier / Human in the Loop / MCP Client / MCP Servers / Agents / Chatbots
- **description**: Zapier 官方 AI 工具页直接抓取。平台从「管道」转向「AI 编排层」：MCP Client 明确点名 "Connect Claude and other AI models directly to your Zapier workflows with a no-code setup"；Agents 定位 "Build autonomous AI agents that work 24/7 across your apps"（lead research、ticket triage、data enrichment）；专门做了 Human in the Loop 产品（"Pause any workflow and let a human review, approve, or edit before it continues"）——平台方认定「人工审核卡点」是 agent 落地的刚需环节。另有 Zapier SDK (Beta)："Install Zapier to your AI coding agent"。
- **user_quote**: "Build autonomous AI agents that work 24/7 across your apps"
- **top_comments**:
  - [页面] Human in the Loop: "Pause any workflow and let a human review, approve, or edit before it continues."
  - [页面] MCP Client: "Connect Claude and other AI models directly to your Zapier workflows with a no-code setup."
  - [页面] Zapier SDK (Beta): "Install Zapier to your AI coding agent"
- **ai_opportunity**: 平台巨头亲自下场验证了三个赛道：agent 编排、MCP 桥接、人审卡点。独立开发者机会在 Zapier 覆盖不深的垂直行业 agent（Zapier 是水平平台），以及 MCP 生态配套（审计、权限、测试）。

## 9. Make.com 集成目录：3,000+ 应用，Featured 前十中 AI 应用占五席
- **type**: product_market | **platform**: Make.com | **secondhand**: false
- **source_url**: https://www.make.com/en/integrations
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: "3,000+ Integration Apps"；Featured Apps 前 10（陈列序非官方排名）：Google Gemini AI、Airtable、Facebook Lead Ads、Anthropic Claude、monday.com、HubSpot CRM、Perplexity AI、Make AI Agents、Vapi、NetSuite——AI 相关占 5 席（Gemini、Claude、Perplexity、Make AI Agents、语音 agent 平台 Vapi）；AI 子类目 21 个（Agentic AI、Voice Agents、Meeting Notes、Knowledge Retrieval 等）
- **description**: Make 官方集成目录直接抓取（快照）。Featured 位半数给了 AI 应用，Gemini 排第一、Claude 第四；语音 agent 平台 Vapi 进前十说明语音 agent 已成主流自动化组件。Agentic AI 单独成子类目并点名 "Make AI Agents, Relevance, GPT Maker, Mind Studio"——低代码平台的 agent 生态卡位战已开打。AI 子类目细到 Meeting Notes、Web Actors、Knowledge Retrieval，可当作自动化需求热区地图读。
- **user_quote**: "deep integrations with leading AI apps like OpenAI, ChatGPT, Google Gemini AI, Perplexity AI, Anthropic Claude, Deepseek, and Eleven Labs."
- **top_comments**:
  - [页面] Agentic AI 应用被描述为 "to autonomously perform tasks based on goals, making decisions and solving problems in real-time."
- **ai_opportunity**: Vapi 进 featured 前十 = 语音 agent × 工作流自动化是当下增量；21 个 AI 子类目中 Meeting Notes、Knowledge Retrieval、Web Actors 都是可独立产品化的高频场景。

---

## 渠道故障记录
- **Upwork**（www.upwork.com 全路径）：Cloudflare challenge，WebFetch 与本地 curl 均 403（challenge 页原文 "Enable JavaScript and cookies to continue"）
- **Fiverr**（含 /categories 与 /resources 路径）：403
- **Gumroad**：DNS 解析被污染（gumroad.com → 31.13.88.26 Facebook IP；app.gumroad.com → 199.59.149.237），ECONNREFUSED，本地 curl 超时——非 Gumroad 封锁，是解析链路问题
- **investors.upwork.com**：60s 超时；**finance.yahoo.com**：403
- **WebSearch**：工作正常，结果与查询高度相关，无 2026-07-28 式污染
