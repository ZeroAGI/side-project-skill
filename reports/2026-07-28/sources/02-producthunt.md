# 02 — Product Hunt（日/周/月/年四榜 + review 深挖） 2026-07-28

> 组内信号：11 条 | 二手转述：0 条（0%）

---

## 1. PH日榜7/27 #1 Adomate:数据驱动广告生成,'可追溯性'成信任卖点
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/adomate
- **source_date**: 2026-07-27 | **fetched_at**: 2026-07-28
- **metrics**: 489分/94评论(daily #1); weekly W31榜#1; 920 followers; 0条review
- **description**: Adomate 从 Meta 广告账户、广告库、Trustpilot/Amazon 评论中抽取数据,批量生成品牌广告概念,每个概念可回溯到触发它的数据点('no blackbox')。评论区最热痛点是'把跑赢的静态广告转成视频brief'——maker 确认视频 brief 生成在 roadmap 上,尚未实现。
- **user_quote**: "the traceability is the part that gets me... the difference between a tool a strategist trusts and one they quietly stop opening (Haider, PH launch comment)"
- **top_comments**:
  - PH评论 Priya K: 最难的部分是 'turning winning static ads into video briefs'(功能请求)
  - PH maker Simon Logghe 回复: 'On our roadmap: Video briefing generation from all types of sources: statics, videos, reviews, etc.'
  - PH maker: 营销人不想把控制权交给LLM,更愿意逐步跑实验积累知识(解释为何做可追溯而非全自动)
- **ai_opportunity**: 1) 静态广告→视频brief的自动转化工具(用户明确点名、尚未做); 2) 'AI输出可追溯到源数据'作为通用设计模式——为营销AI工具做 evidence-linking 中间件。

## 2. PH日榜 #2 Artifacts by Databox:AI分析师出报告,但MCP只读是公开抱怨点
- **type**: pain_point | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/databox/reviews
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: daily #2 370分/81评论; 产品4.5/5星(4 reviews), 2K followers
- **description**: Databox 新 launch 'Artifacts':问 AI 分析师、直接返回可分享的报告。Review 深挖发现明确产品化缺口:用户盛赞其 MCP server 让 Claude 直接拉实时指标,但抱怨 MCP 是只读的——无法通过 agent 创建报告/仪表盘。官方回复承认报告创建 via MCP 是 'likely next step'。
- **user_quote**: "the MCP server has been a big unlock, it lets Claude pull live metrics directly instead of us screenshotting dashboards (Keith Gutierrez, PH review)"
- **top_comments**:
  - PH review Keith Gutierrez: 'there's no way to generate or build Databox reports and databoards directly from Claude through the MCP'(核心缺口)
  - PH review Ulykbek Asylbek: 'data refresh latency constraints on the entry level infrastructure tiers can slow down immediate real time verification'
  - PH review Clara Champion: 'Amazing dashboard tool, professional, sleek, so easy to setup compared to looker studio'
- **ai_opportunity**: 'MCP写能力'是普遍空白: 大量 SaaS 的 MCP server 只读。做 agent 可写的 BI/报表层(或为现有 BI 工具补写操作的 MCP 网关)——机会 5 头条证据。

## 3. Claude Opus 5 登PH日榜#3:'半价近Fable 5'引爆成本敏感讨论,1M上下文一致性被质疑
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/claude
- **source_date**: 2026-07-27 | **fetched_at**: 2026-07-28
- **metrics**: daily #3 355分/10评论; weekly W31 #3; yearly榜#3(Cowork, 活跃分1122); Anthropic第43次PH发布
- **description**: Claude Opus 5 主打 'Near-Fable 5 intelligence at half the price'。评论区主题高度一致:价格/token 效率是最大兴奋点,但多位用户质疑 1M 上下文窗口在长程任务中是否'悄悄退化',并关心低价是否覆盖全 1M 窗口、subagent spawning 控制权归属。
- **user_quote**: "Half the price for close to the same quality is the kind of update that actually shows up on the bill. (Dogan Akbulut, PH comment)"
- **top_comments**:
  - PH评论 Adam Kamaneh: 想验证 'the 1M context holding up consistently, since that is usually where things quietly degrade';更看重多文件重构完成率而非benchmark
  - PH评论 Artem Nek: 'Not sure yet if it's better or worse than Fable 5 for what I do, but the token efficiency alone is a big win.'
  - PH评论 Tehreem Fatima: 'Managing token costs while maintaining output quality has always been a tightrope.'
- **ai_opportunity**: 1) 长上下文退化检测/回归测试基准; 2) effort-level 自动调参器——按任务自动选模型档位与 effort 设置以压账单。与 Cost Guardian 互证。

## 4. PH日榜 #4 Webhound:'给agent用的研究引擎',agent配套基础设施持续走强
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/webhound/reviews
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: daily #4 342分/64评论; 5.0/5(1 review); 567 followers; YC-backed
- **description**: Webhound 定位'a research engine for your agent'——自动从网站抽取并结构化数据、导出可用数据集。与 monthly 榜#2 Context.dev、#5 AnySearch 构成同一趋势:为 agent 供数的抓取/搜索/结构化基础设施是 7 月 PH 最密集的品类之一。
- **user_quote**: "I love that it automatically extracts and organizes data from any website. Exporting ready-to-use datasets saves me so much time for analysis. (eric ng, PH review)"
- **ai_opportunity**: agent 数据供给层已现三家但都做通用抓取。垂直化空档: 面向特定行业(法律判例、电商价格、招投标)的 agent-ready 结构化数据源,或做多供应商之上的数据质量校验/去重层。

## 5. PH周榜W30 #1 Fuzzy AI:'先预热再触达'的LinkedIn销售AI,封号焦虑是头号采购疑虑
- **type**: pain_point | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/fuzzy-ai-2
- **source_date**: 2026-07-20 | **fetched_at**: 2026-07-28
- **metrics**: 711分/105评论; weekly W30 #1 + daily #1(7/20) + monthly #9; 1.7K followers; 0 reviews
- **description**: Fuzzy AI 主打 relationship-first 销售:先在目标客户活跃处发帖/评论建立熟悉度,再跑个性化 LinkedIn+邮件序列。评论区暴露的采购决策痛点极具体:账号安全、触达过频暴露机器痕迹、CRM 同步未答复、团队撞单。maker 答复用住宅代理+随机节奏,但承认无自动化零风险。
- **user_quote**: "account safety. Automated engagement and follow-ups are exactly what LinkedIn hunts for... Our reps' accounts are worth more than any tool, so this answer decides everything for me (Ridhwik Vinod, PH comment)"
- **top_comments**:
  - PH评论 Dipankar Sarkar: 'the tell was that the same person saw us three times in one week'——自建每线程一评论+每人冷却期规则
  - PH评论 Stephanie Mangos: 'is there a way to connect platforms so emails are synced to internal CRMs?'(Salesforce, 追问未获答复)
  - PH评论 Franz Brian Briones: 'how does Fuzzy prevent duplicate warming efforts?'(企业客户多AE撞单场景)
- **ai_opportunity**: 封号风险是整个 LinkedIn 自动化品类的信任瓶颈: 可做'外联安全审计层'——监控触达频率/模式,预测封号风险,跨工具去重(撞单检测)。

## 6. PH周榜W30:前十清一色AI GTM/销售/营销工具,B2B获客自动化白热化
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/weekly/2026/30
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: W30 top10分数区间441-711, 评论量94-137(远高于日榜均值), 6/10为GTM/销售营销类
- **description**: W30 前十中至少 6 个是获客/营销链条: Fuzzy AI、Lev8、Migma AI、CartAI、Teable 3.0、ditto.site。对比月榜(工具型: Acti 键盘、Context.dev API、OpenSEO)可见: 月度沉淀的是开发者/基础设施工具,而销售 GTM 类靠单周爆发上榜——竞争拥挤、分化快,单点工具窗口期短。
- **ai_opportunity**: GTM 工具供给过剩→洗牌期机会在'工具的工具': 帮买家评测/编排多个销售 AI(去重、归因、账号安全统一管控),而非再做第 N 个 outreach agent。

## 7. PH月榜7月 #1 Acti:agentic手机键盘——移动端agent入口成为新形态
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/acti-2
- **source_date**: 2026-07-01 | **fetched_at**: 2026-07-28
- **metrics**: 月榜#1: 1257分/263评论, 2.7K followers, #1 Product of the Day & Week; 0 reviews
- **description**: Acti 把 agent 塞进手机键盘: 在任何输入框内直接查体育赛程、附近餐厅、Notion 文档、LinkedIn 资料、发 Meet 链接、操作日历。0 条 review——高投票零评价的典型 launch-hype 型产品,用户留存未经验证。
- **ai_opportunity**: '键盘/输入法即 agent 入口'验证了移动端分发新路径。indie 机会: 垂直场景键盘 agent,或 Acti 类产品的隐私审计——键盘权限+agent 是敏感组合,评论区尚无人做隐私拆解。

## 8. PH月榜开源替代品双子星:OpenSEO(开源Ahrefs)与ExploreYC(开源YC数据API)
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/7
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: OpenSEO 896分/74评论(月#3); ExploreYC 798分/68评论(月#6); Rescript 122分(日#9); ditto.site 441分/94评论(周#10)
- **description**: '开源替代贵价 SaaS'在 7 月 PH 四个时间尺度上反复出现。共性: 盯准年费数百至数千美元的成熟 SaaS(Ahrefs/Descript/Crunchbase 类数据),用开源+免费获取分发,再以云托管变现。
- **ai_opportunity**: 公式可复制: 选一个 API 定价高/数据封闭的 SaaS(如 SimilarWeb、Gong、Clay),做 AI 增强的开源替代,PH+GitHub 双渠道冷启动。护城河转向数据管道与托管运维。

## 9. Teable 3.0 (AI Spreadsheet) 周榜#8:review暴露'AI数据库→可部署应用'最后一公里缺口
- **type**: pain_point | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/teable-4/reviews
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: W30 #8: 465分/136评论(周榜评论数第2高); 5.0/5(1 review); 1.5K followers
- **description**: Teable 3.0 定位 AI 业务电子表格。唯一详细 review 是重度用户写的功能缺口清单: 无 GitHub 集成、设计修改要写 prompt 而非点选、库/自动化/应用无法跨 base 搬迁、只支持子域名不支持子目录部署、图片无 CNAME 自定义域。maker 回复承认多数是待考虑项。
- **user_quote**: "Agents are everywhere. They ship almost daily. I dont know how that energy come up. (Shahadat Shemul, PH review)"
- **top_comments**:
  - PH review Shahadat Shemul: 'Github integrations so i can push/pull/commit there and host in Cloudflare.'(功能请求)
  - PH review Shahadat Shemul: 'Support subfolder like example.com/teable-app (subdomain is already there)'
  - Teable团队Bieber回复: 'making small design tweaks with just a few clicks is already supported directly inside the App Preview.'(部分反驳,其余承认为待办)
- **ai_opportunity**: no-code AI 数据库们普遍缺'导出到真实开发工作流'的桥: 做 AI-DB→Git repo→自有域名部署的导出管道。

## 10. 四时间尺度对比:agent基础设施跨尺度存活,GTM工具单周即逝,年榜由'个人生活AI'占位
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: — | **fetched_at**: 2026-07-28
- **metrics**: 年榜top10: PostSyncer 807/102, Mom Clock 766/92, Cowork活跃分1122, SEORCE 397分但209评论(讨论度全榜第一)
- **description**: 跨尺度对比: 持续存活——Claude(日#3/周#3/年#3)、Fuzzy AI(日→周#1→月#9)、agent 数据基础设施品类。年榜结构独特: 前十偏个人向与轻量工具,说明全年维度上'个人生活/健康/内容发布 AI'比 B2B agent 更能沉淀持续关注;而 B2B GTM 爆品(周榜主力)几乎无一进入年榜。
- **ai_opportunity**: 1) 做 B2B GTM 工具要按'8 周窗口期'规划; 2) 个人向 AI+agent 基础设施是穿越时间尺度的耐久需求。SEORCE(GEO)209 条评论提示'品牌在 AI 答案中的曝光'是高讨论度新品类。

## 11. PH日榜 #8 Estera:AI语音前台7×24接电话+WhatsApp,SMB语音agent持续冒头
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/daily/2026/7/27
- **source_date**: 2026-07-27 | **fetched_at**: 2026-07-28
- **metrics**: daily #8: 133分/29评论; 同类语音agent当日两款进前十
- **description**: Estera 是 AI 接待员,24/7 接听电话与 WhatsApp,面向漏接来电即丢单的 SMB。同日榜#10 Gstack、W30#3 Humalike x Hermes 共同显示语音 agent 从通用平台向垂直场景分化。
- **ai_opportunity**: 语音 agent 垂直化仍有大量本地化空档: 非英语市场(中文/西语 SMB 前台)、行业合规版本(医疗预约 HIPAA)、以及语音 agent 的通话质检/漏接分析层。
