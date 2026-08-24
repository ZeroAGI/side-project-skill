# 04 — Upwork + Fiverr + Gumroad + Zapier/Make 2026-08-24

> 组内信号：10 条 | 二手转述：4 条（40%）
> 最强证据线：Upwork 实时爬取数据（5月2026）显示 AI Agent Development 达 621 条帖子、N8N 357条，中位时薪仍仅 $30，说明「能跑起来的 agent」与「懂 prompt 的人」已形成价格断层；Zapier 推出 Human-in-the-Loop 原生产品印证人工审核节点正在被产品化。渠道故障：Upwork / Fiverr 直连均返回 403；Gumroad 连接拒绝；Fiverr WebSearch 查询被搜索渠道污染（返回 Claude Code billing header 相关结果，与查询完全无关），已标记渠道故障，未从污染结果中提取信号，转用 Gumroad 替代搜索。

---

## 1. AI Agent Development 成 Upwork 最热标签（621 帖）
- **type**: product_market | **platform**: Upwork | **secondhand**: true
- **source_url**: https://www.upwatcher.io/guides/upwork-ai-jobs-2026/
- **source_date**: 2026-05-16 | **fetched_at**: 2026-08-24
- **metrics**: AI Agent Development 标签 621 条帖子；全段 4,089 帖中位时薪 $30；P75 $40，P90 $60；Python 1,022 帖，API Integration 552 帖
- **description**: 实时爬取的 Upwork 30天窗口数据（2026年5月16日生成）显示，AI Agent Development 已跻身前5大标签，仅次于 Python 和 Artificial Intelligence。"能跑 agent"成为客户直接付费的技能，与 prompt 工程类工作形成明显价格断层。
- **user_quote**: "Sub-$25/hr AI jobs are usually clients re-listing data-labelling or basic prompt tasks."
- **top_comments**:
  - [upwatcher.io] "Pay follows shipping ability: clients want working applications with AI embedded, not prompt-crafting."
  - [upwatcher.io] "The fad is the word; the spending is real and growing."
- **ai_opportunity**: 面向非技术创业者的"一键部署 AI Agent"产品；或 agent 交付质量评估（evals-as-a-service）工具

---

## 2. N8N + Make.com + Zapier 自动化工具组合成 Upwork 高频标签
- **type**: product_market | **platform**: Upwork | **secondhand**: true
- **source_url**: https://www.upwatcher.io/guides/upwork-ai-jobs-2026/
- **source_date**: 2026-05-16 | **fetched_at**: 2026-08-24
- **metrics**: N8N 357 帖，Zapier 274 帖，Make.com 230 帖，Claude 246 帖（均在 AI segment 4,089 帖中）
- **description**: 三款自动化工具同时出现在 Upwork AI 工作标签前20，且 Claude 以 246 帖独立出现，说明"把 Claude/GPT 接进业务流"是当前最具体的外包需求。工具层碎片化是客户外包的根本原因。
- **user_quote**: "Clients hire freelancers who can build production systems and deliver measurable business outcomes."
- **top_comments**:
  - [upwatcher.io] "Treat low rates as a screening signal."
- **ai_opportunity**: 跨 N8N/Make/Zapier 的统一工作流模板市场；或针对特定垂直行业（电商/SaaS/HR）的预打包自动化套件

---

## 3. Upwork 官方报告：AI 视频生成技能需求暴涨 329%
- **type**: trend | **platform**: Upwork | **secondhand**: true
- **source_url**: https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai
- **source_date**: 2026-02-04 | **fetched_at**: 2026-08-24
- **metrics**: AI 视频生成与编辑 +329% YoY；AI 集成 +178%；AI 数据标注 +154%；AI 聊天机器人开发 +71%；AI 图像生成 +95%；顶级 AI 技能整体 +109%；最低基准：每项技能 $100K+ 年聚合收入
- **description**: Upwork 基于 2025 年全年已完成订单数据发布。AI 视频生成以 329% 增幅领跑，远超 AI 集成（178%）和数据标注（154%）。对比：会计和平面设计同期仅增 23%，说明 AI 正在从通用工作渗入专业创作生产。
- **user_quote**: "Demand for top AI-enabled skills more than doubled year-over-year, while hiring for human expertise remained strong."
- **top_comments**: []
- **ai_opportunity**: AI 视频生成的 SaaS 化工具（面向内容团队而非专业剪辑师）；或 AI 生成视频的质量审核/一致性检查工具

---

## 4. Zapier Human-in-the-Loop 作为原生产品推出
- **type**: product_market | **platform**: Zapier | **secondhand**: false
- **source_url**: https://zapier.com/apps/ai-tools
- **source_date**: | **fetched_at**: 2026-08-24
- **metrics**: Zapier AI 工具类共 477 款集成；Human in the Loop 列为 6 款 Zapier 自研 AI 产品之一
- **description**: Zapier 将"暂停工作流等待人工审核后继续"封装为独立产品，说明自动化流程的人工监督节点已成为足够普遍的需求以至于平台原生化。这与近期"人工审核层"信号高度共振。
- **user_quote**: "Human in the Loop by Zapier — pauses workflows for human review before continuing."
- **top_comments**: []
- **ai_opportunity**: 轻量级"审核收件箱"产品——把各平台 AI 动作的待审项汇聚到一个统一界面，按风险等级自动路由给人工；或 SLA 驱动的审核时效追踪

---

## 5. Zapier MCP Client + MCP Servers：AI 模型直接调度业务工作流
- **type**: product_market | **platform**: Zapier | **secondhand**: false
- **source_url**: https://zapier.com/apps/ai-tools
- **source_date**: | **fetched_at**: 2026-08-24
- **metrics**: Zapier 列出 MCP Client（连接 Claude 等模型到 Zapier 工作流）和 Zapier MCP Servers（给 AI 助手访问 Zapier 数据和工作流的权限）为独立产品；平台总计 9,994+ 应用
- **description**: Zapier 同时推出 MCP Client 和 MCP Servers，意味着 AI 模型（尤其是 Claude）现在可以直接作为 Zapier 工作流的触发方和执行方，而非只是流程中的一个步骤。这代表"AI 作为编排层"进入主流无代码平台。
- **user_quote**: "MCP Client by Zapier — connects Claude and other AI models to Zapier workflows."
- **top_comments**: []
- **ai_opportunity**: 面向企业的 MCP 服务器管理平台（权限管控、调用审计、用量计费）；或为非技术用户封装"我的 Claude 能做什么"的图形化权限配置工具

---

## 6. Make.com 上 OpenAI + Claude + Gemini 同列最热集成
- **type**: product_market | **platform**: Make.com | **secondhand**: false
- **source_url**: https://www.make.com/en/integrations
- **source_date**: | **fetched_at**: 2026-08-24
- **metrics**: 总计 3,553 款应用；OpenAI、Google Gemini AI、Anthropic Claude 均进入"最热"与"精选"双榜；Perplexity AI、Make AI Agents、Vapi 也进入精选
- **description**: Make.com 的"最热"排序（无具体数字，以位置推断）中，三大 LLM 提供商同时占据前列，且 Vapi（语音 AI）和 Perplexity（AI 搜索）也进入精选，说明多模态 AI 工作流集成需求正在快速多元化。
- **user_quote**: "Showing 1 - 48 of 3553 results in All Apps"
- **top_comments**: []
- **ai_opportunity**: 多 LLM 路由层（根据任务类型/成本/延迟自动选择最优模型）；或面向 Make.com 用户的 AI 工作流调试/可观测性工具

---

## 7. Gumroad 最高销售额单品：Flux AI 脚本工具达 $586K
- **type**: product_market | **platform**: Gumroad | **secondhand**: true
- **source_url**: https://insightraider.com/en/answers/what-digital-products-sell-best-on-gumroad
- **source_date**: | **fetched_at**: 2026-08-24
- **metrics**: 分析覆盖 146,271 款 Gumroad 公开产品，估算总生命周期收入 $206M；最高单品（Nano Banana & Flux AI script）$586K；写作与出版类均价 $15,750（最高 revenue per product，仅 226 款产品）
- **description**: 在 Gumroad 历史最高销售额产品中，AI 脚本/工具占据榜首。Flux AI 脚本（图像生成工作流自动化）以 $586K 领先，印证"卖工作流而非原始 prompt"策略有效。写作/出版类以极少产品数取得最高单产值，说明垂直深度胜过品类广度。
- **user_quote**: "AI-assisted products (scripts, automations, prompt systems, fine-tuned assets) are genuinely among the best sellers right now, with demand climbing fast. The important caveat: the winners are tools and workflows, not raw prompt dumps."
- **top_comments**:
  - [insightraider.com] "Sell the outcome and the workflow — the part a buyer can't reproduce with one prompt — and price it like the software it competes with, not like an impulse buy."
- **ai_opportunity**: 针对 Flux/ComfyUI/Midjourney 的付费工作流套件；或特定垂直（建筑可视化、电商产品图、社媒内容）的 AI 图像生产线打包产品

---

## 8. Gumroad 平台抽成结构倒逼创作者自建流量
- **type**: pain_point | **platform**: Gumroad | **secondhand**: true
- **source_url**: https://insightraider.com/en/answers/what-digital-products-sell-best-on-gumroad
- **source_date**: | **fetched_at**: 2026-08-24
- **metrics**: Discover 流量抽成 30%；自带流量抽成 10%；数字商品市场 2025 年估值 $124.32B，2026 年预计 $157.39B
- **description**: Gumroad 对平台内发现流量收取 30% 佣金，强迫创作者自建流量渠道。这一结构性摩擦使"帮助数字产品创作者建立独立流量"成为明确痛点，同时也是与 Gumroad 互补而非竞争的产品机会。
- **user_quote**: "If a buyer finds your product through Gumroad's Discover marketplace, the platform takes a flat 30% of that sale — one of the highest marketplace rates in the creator economy."
- **top_comments**: []
- **ai_opportunity**: 面向数字产品创作者的 AI 驱动内容营销工具（自动生成 SEO 文章、短视频脚本、邮件序列）；或帮助创作者在 Gumroad 外建立独立销售页的落地页生成器

---

## 9. Zapier Agents：Lead Research / Ticket Triage / Data Enrichment 三大用例
- **type**: product_market | **platform**: Zapier | **secondhand**: false
- **source_url**: https://zapier.com/apps/ai-tools
- **source_date**: | **fetched_at**: 2026-08-24
- **metrics**: Zapier Agents 被定位为处理 lead research、ticket triage、data enrichment 的自主 agent；Zapier Chatbots 定位为客户 Q&A 和 lead qualification
- **description**: Zapier 明确将 agent 用途锚定在三个商业场景，且两款 agent 产品（Agents + Chatbots）并列，说明"结构化业务任务的 agent 化"已有足够市场验证，不再是概念阶段。这三个场景本身也是可以垂直深化的产品机会。
- **user_quote**: "Zapier Agents — autonomous agents for lead research, ticket triage, and data enrichment."
- **top_comments**: []
- **ai_opportunity**: 专注单一场景（如 B2B lead enrichment 或客服 ticket 分类）的深度垂直 agent 产品，以 Zapier 的广度作为入口，以专业深度作为护城河

---

## 10. Upwork AI 数据标注需求 +154% — 生成层扩张驱动验证层用工
- **type**: trend | **platform**: Upwork | **secondhand**: true
- **source_url**: https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai
- **source_date**: 2026-02-04 | **fetched_at**: 2026-08-24
- **metrics**: AI 数据标注与标记 +154% YoY；AI 聊天机器人开发 +71%；整体 AI 技能 +109%；AI 相关项目时薪溢价约 40%（来自第三方分析，非 Upwork 官方数字）
- **description**: 数据标注增长 154% 表明模型训练/微调需求持续扩张，但这类工作价格竞争激烈。更有价值的信号是：聊天机器人开发 +71% 叠加 agent 开发需求，说明"交付可用 AI 产品"的工程侧需求远超"准备数据"的数据侧。两者增速差距是产品定价空间的指标。
- **user_quote**: "The commodity end (prompt writing, data labelling) is brutally competitive, while the integration/agents/vertical-AI end remains demand-heavy because few freelancers can actually ship production AI features."
- **top_comments**: []
- **ai_opportunity**: 面向微调场景的结构化数据标注工具（降低标注成本同时提升质量）；或帮助独立开发者把"能用的 chatbot"快速包装成可交付产品的脚手架工具

---

*渠道故障备注：Upwork、Fiverr、Gumroad 直连均被封锁（403 / ECONNREFUSED）。Fiverr WebSearch 查询返回与 Claude Code billing header 完全无关的 GitHub issue 列表，判定为搜索渠道污染（与 MEMORY.md 2026-07-28 记录的 48% 污染情况一致），未从污染结果提取任何信号。Upwork 官方报告直连超时，改用 upwatcher.io 实时爬取数据（secondhand: true）和 Yahoo Finance 镜像（403 后放弃）。所有被封锁渠道均已标注 secondhand: true。*
