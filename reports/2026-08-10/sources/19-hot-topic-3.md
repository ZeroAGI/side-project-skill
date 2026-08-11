# 19 — 热点深挖: 推理价格战白热化：GPT-5.6 Luna 降价 80%、ChatGPT 免费无限、DeepSeek V4 Flash 便宜 99% 2026-08-10

> 组内信号：10 条 | 二手转述：7 条（70%）
> 最强证据线：07-30 OpenAI 降价 → 07-31 DeepSeek V4 Flash 0731 应招（$0.14/$0.28，AA 智能指数 #3）→ 08-06 ChatGPT 免费无限 → 08-07 Databricks 官方博客定义「AI Gateway」品类 + 08-08 路由器工具盘点，事件链完整、日期连贯。HN 784 分 470 评论线程提供大量一手用户声音。渠道故障：VentureBeat 与知乎专栏 403 拒抓（后者仅有搜索层摘录，已标注）；news.ycombinator.com 直连 ECONNREFUSED，改走 hn.algolia.com API 成功。搜索渠道本身工作正常（无污染迹象）。

---

## 1. OpenAI 一刀砍掉 GPT-5.6 Luna 80% 价格：$1→$0.20 输入 / $6→$1.20 输出，GA 后仅 21 天
- **type**: trend | **platform**: 36kr (媒体报道) | **secondhand**: true
- **source_url**: https://eu.36kr.com/en/p/3919319636290946
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-10
- **metrics**: Luna 输入 $1→$0.20/M（-80%）、输出 $6→$1.20/M；Terra $2.5→$2 / $15→$12（-20%）；Sol 价格不变但新增 Fast 模式（2.5 倍速、2 倍价）；缓存输入 $0.02/M（约 -90%）；官方归因：Sol 自主重写推理栈（Triton/Gluon GPU kernel）省 20% 端到端成本 + 投机解码提效 15%+；HN 原始提交（sama 推文）https://news.ycombinator.com/item?id=49113348（07-30）
- **description**: GA 仅 21 天即降价 80%，2026 年也属罕见速度。OpenAI 把它包装成技术故事（模型自己优化自己的推理基础设施），但 36kr 算账指出 20%+15% 与 80% 之间「仍有巨大缺口」，剩余部分是竞争压力：DeepSeek 同日发新版。定位上 Luna 不是阉割版分类模型——「能调工具、处理长上下文、执行多步工作流」，却卖到过去小模型的价位，直接冲击「便宜够用」生态位（DeepSeek V4 Flash 的主场）。订阅侧同步让利：ChatGPT/Codex 月费与总额度不变，但 Luna/Terra 调用扣减更少积分，$20 套餐实际变厚。
- **user_quote**: "It's your turn to make a move."（开发者社区喊话 Anthropic，36kr 转述）
- **top_comments**:
  - [36kr 转述 Sam Altman 立场] OpenAI 要在「every model tier」做到最佳价格-智能比——作者解读为「别跟我拼性价比」的警告
  - [36kr 转述开发者] 有人表示 API 配额「终于可以花得松一点」；审查/校验/监控等过去嫌贵的步骤可以常开
  - [36kr 引 Artificial Analysis] 计入智能后 Luna 综合性价比领先；Agents Last Exam 上以约 Fable 5 每任务 1% 的成本胜出（厂商口径，未独立验证）
- **ai_opportunity**: 所有基于 GPT-5.6 发布价做的成本测算已失真至多 80%——「API 成本重算器/降价监控告警」是即时刚需；更结构性的机会：审查-校验-监控类 agent 步骤从「奢侈品」变「常规件」，专做 always-on 验证层的产品单位经济第一次成立。

## 2. ChatGPT 08-06 向免费用户开放无限文本对话，Luna 成免费档默认模型（周活 10 亿）
- **type**: trend | **platform**: TechCrunch | **secondhand**: true
- **source_url**: https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-10
- **metrics**: 周活「recently crossed the 1 billion weekly user mark」；旧免费上限约 10 条/5 小时被废除；内部测试：相较 GPT-5.5-Instant，「factual errors were 62% less common for GPT-5.6 Luna and 68% less common for GPT-5.6 Sol」；无限文本 + Think 按钮于次周（08-10 当周）逐步铺开
- **description**: TechCrunch 原文：「OpenAI is removing limits on text-based chats for all users on ChatGPT」。Luna「will be the default model for Free and Go users, replacing GPT-5.5」；免费档还获得 Think 按钮（复杂问题更高推理力）。留了口子：「there will still be separate limits for files, images, voice, and image generation」——无限只限纯文本。付费侧 Plus/Pro 得到升级版 Sol + 思考深度滑杆。此前免费消息上限是 ChatGPT 对 Gemini/Copilot 最显眼的结构性劣势。反向信号：ChatGPT 负责人 Nick Turley 公开表示「unlimited」订阅未来可能消失（AOL 转载报道）。
- **user_quote**: "OpenAI is removing limits on text-based chats for all users on ChatGPT."（TechCrunch, Ivan Mehta）
- **top_comments**:
  - [X/@sama，经 MacRumors 等多家转述] "5.6 Sol much better in chat now, and unlimited text chat for free users!"
  - [AOL 转述 Nick Turley] OpenAI 预计将改变 AI 产品收费方式，「unlimited」订阅可能最终消失
- **ai_opportunity**: 面向 10 亿周活的免费无限文本，意味着「套壳 ChatGPT 做免费聊天」的独立产品彻底死亡；幸存空间收窄到文件/图像/语音/工作流等仍被限额的能力，以及 ChatGPT 不做的垂直数据与私域集成。对免费增值 SaaS 是正面信号：文本推理边际成本趋零，free tier 可以给得更慷慨。

## 3. DeepSeek V4 Flash 0731：$0.14/$0.28 定价、AA 智能指数 52 分排 #3/101，跑完全套评测仅 $72
- **type**: product_market | **platform**: Artificial Analysis | **secondhand**: false
- **source_url**: https://artificialanalysis.ai/models/deepseek-v4-flash
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-10
- **metrics**: 输入 $0.14/M、输出 $0.28/M、缓存命中 $0.003/M（-98%，101 个模型中排 #1）；7:2:1 缓存混合价 $0.06/M；AA Intelligence Index 52（#3/101，同类中位数 26）；全套 Intelligence Index 评测总成本 $72.03；速度 142.2 tok/s（#8/101）；TTFT 1.17s（中位 1.87s）；1M 上下文；284B 总参/13B 激活；MIT 许可；7 家 API 供应商；发布日期 2026-07-31（OpenAI 降价次日）
- **description**: AA 官方页原话：「amongst the leading models in intelligence and well priced when comparing to other open weight models of similar size」。要点有三：(1) 缓存命中 $0.003/M 全场第一，是 Luna 新缓存价 $0.02 的 1/6.7——高缓存复用场景（文档问答、长前缀 agent）成本差距远大于表价；(2) MIT 开源权重意味着第三方托管竞价（搜索层信息：StreamLake 低至 $0.069/M 输入）；(3) 警示项：极度话痨——评测输出 210M tokens vs 中位 100M，「very verbose」，实际账单会被输出量吃掉部分便宜。「便宜 99%」的说法对应输出 token 相对 GPT-5.5 约 89 倍差价（搜索层聚合口径）。
- **user_quote**: "amongst the leading models in intelligence and well priced when comparing to other open weight models of similar size"（Artificial Analysis 官方评语）
- **top_comments**: （排行榜页无评论区；用户声音见信号 4 HN 线程）
- **ai_opportunity**: $72 跑完全套智能评测——评测本身也在通缩，独立开发者第一次可以负担「自建私有 eval 流水线」（呼应信号 5 Databricks「公开榜单不可信，企业要跑自己的评测」）。verbose 特性是具体切口：做「输出长度约束/截断优化中间件」，按帮客户省下的输出 token 分成。
- **备注**: 编码分项（LiveCodeBench 91.6% / SWE-bench Verified 79.0% / Terminal-Bench 56.9%）来自搜索层聚合多家评测博客，AA 页面图表未渲染出数值，此三项按二手对待。

## 4. HN 784 分线程拆解 V4 Flash 0731：缓存才是「secret sauce」、价格战有 VC 补贴水分、质量口碑两极
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49214008
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-10
- **metrics**: 784 分、470 评论（2026-08-07，另有 07-31 首发线程 745 分 347 评论 id=49119559，08-09 Terminal-Bench 82.7% 公开 harness 线程 id=49229621）；引述价格记忆点：Kimi K3 同性能 1/20 价格、K3 在 OpenRouter 全供应商仍 $3/$15
- **description**: 事件窗内最大一手用户声音库（经 hn.algolia.com API 抓取，HN 直连 ECONNREFUSED）。四条主线：(1) 降价的真相在缓存价与开源权重竞价，不在表价；(2) 价格信号被 VC 补贴/规模经济/推理优化三重混淆，无法反推真实成本，且 DeepSeek 已预告未来「大幅上调」API 价；(3) 质量口碑显著两极——多位开发者实测称比 Luna 更慢、迭代次数更多；(4) 付费意愿分层清晰：重度专业用户对价格完全脱敏（「一天几百刀无所谓」），订阅党抱怨 $200/月 Sol 也会跑爆额度。
- **user_quote**: "Deepseeks secret sauce is the incredibly cheap caching (magnitude cheaper than other providers)."（LaurensBER）
- **top_comments**:
  - [HN muricula] "Price is confounded by VC subsidies, economies of scale, and inference optimizations."
  - [HN 542458] "Kimi K3 was an interesting model only a month ago, and now we're looking at the same performance for 1/20th of the price."
  - [HN debazel] （Rust/OpenGL 实测）DeepSeek 模型 "is significantly slower than GPT-5.6 Luna and it requires a lot more iterations."
  - [HN solenoid0937] "I spend a few hundred dollars per day on Fable and the costs are irrelevant compared to what we make."
  - [HN LaurensBER] "But DeepSeek now has a warning they're going to sharply increase their API pricing sometime in the future."
  - [HN re-thc] "Sol on XHigh or Max runs out even on the $200/mo plan."
  - [HN paxys] "Why use a much weaker model for the same price?"
- **ai_opportunity**: 三个具体痛点=三个产品：(1) 「真实成本对比器」——把缓存价、输出话痨度、迭代次数折进每任务成本而非每 token 表价；(2) 「涨价预警/迁移预案」服务——DeepSeek 已预告涨价，锁死单一低价供应商的团队需要退出路径；(3) 每任务级 A/B 实测 harness——榜单与实测口碑背离（LiveCodeBench 91.6% vs 「更慢、更多迭代」），说明买家需要在自己代码库上跑的裁判工具。

## 5. Databricks 官方定义「AI Gateway」品类：AI 编码成本失控是可解工程问题，路由省 30%+、token 调优省近 50%
- **type**: product_market | **platform**: Databricks 官方博客 | **secondhand**: false
- **source_url**: https://www.databricks.com/blog/managing-ai-coding-costs-scale
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-10
- **metrics**: Smart Router 平均任务成本降 30%+ 且质量约等于最优模型；harness+缓存调优 token 与成本降近 50% 无可见质量损失（作者自注均为「directional, based on an informal survey」）；配套内部预算体系（Unity AI Gateway Budgets 姊妹篇 https://www.databricks.com/blog/how-databricks-manages-its-own-coding-agent-spend-unity-ai-gateway-budgets）：粗粒度月度档位约 2x/5x/无限，需经理或隔级审批、绑定具体项目 1/3/6 个月，月底全员重置
- **description**: 作者含联创 Patrick Wendell，署名 08-07，正落在事件窗。核心论断：AI 编码开销指数增长「is not an inevitability, it's a solvable engineering and governance problem」。提出「efficiency frontier」概念——给定智能水平下的最优价格模型集合，其推进速度快于智能峰值（约每周有新发布）。四大杠杆：迁移到更便宜/开源模型（最大单项收益，内部已上线 GLM 系）、动态路由（点名 Cursor Router、OpenRouter AutoRouter、Ramp Router、Unity AI Gateway）、可视化+渐进预算（硬断供是各家共识的最后手段——重度花钱者常是最高产出者，先「降档到便宜模型」不停机）、削减 token 开销（用户 prompt 只占送入模型 token 的极小份额，大头是上下文收集/工具调用/系统注入）。负面证据同样有料：Stripe 判定 Opus 4.7 相对 4.6 无质量增益拒绝升级；Databricks 从 Opus 4.8 升 5.0 出现成本回归。鸣谢名单含 Uber、Stripe、Coinbase、Ramp、Thrive Capital——说明这套打法是数字原生大厂共识而非一家之言。
- **user_quote**: "not an inevitability, it's a solvable engineering and governance problem"（Databricks 博客原文）
- **top_comments**:
  - [博客原文] 定义 efficiency frontier：「the set of models that have the best price point」at a given intelligence level，且该前沿推进快于智能峰值
  - [博客原文] harness 锁定被列为战略风险：专有模型日益与特定 harness 协同设计，模型不可知性成为采购标准
- **ai_opportunity**: 大厂亲手圈出品类地图并把自家方案开源（Omnigent meta-harness + Unity AI Gateway），对独立开发者是双刃剑：正面清单=博客亲列的采购标准——低话痨 harness、每会话/每人成本归因、渐进降档、私有评测 harness、gateway 集成钩子，每一条都是可单卖的中间件；反面警告=通用 gateway 本体已被大厂免费开源占位，独立者应打「某一杠杆做深」而非全家桶。

## 6. LLM 路由器 2026 军备竞赛：9 款工具混战，厂商宣称省 20-60%，Ramp 月路由 2.75T tokens
- **type**: product_market | **platform**: Entelligence 博客（厂商盘点） | **secondhand**: true
- **source_url**: https://entelligence.ai/blogs/9-best-llm-routers-and-model-routing-tools-in-2026
- **source_date**: 2026-08-08 | **fetched_at**: 2026-08-10
- **metrics**: 总体宣称「20–60% cost reductions」；Ramp Router：月路由 2.75T+ tokens、约省 30%、加 30ms 延迟、99.9% 成功路由、100+ 项优化、上线期免费（前 500 邀请用户 $100 赠金）；Entelligence 自测 Terminal-Bench 2.1：79.8% 通过、$0.93/解决任务 vs Opus 5 的 $3.03（「65.5% less total spend」，厂商自跑单种子）；Factory：99% Opus 通过率下省 20%；Not Diamond：「30%+ cost savings」+「5%+ accuracy gains」；RouteLLM（LMSYS，Apache-2.0）：「85% cost reduction while retaining 95% of GPT-4 performance」，~5,300 stars vs LiteLLM 55,000+
- **description**: 08-08 发布，正好卡在降价潮后。九款：OpenRouter Auto Router、Entelligence、Cursor Router、Ramp Router、Factory Router、Merge Gateway、Not Diamond、LiteLLM、RouteLLM。利益冲突明确：Entelligence 自家产品在列且文末带 CTA，但文章自认「We did not run all nine products on one shared benchmark, so this list is unranked」，数字全为各厂商自报口径。值得注意的结构信号：Ramp（费用管理公司）从 100+ 内部 AI 用例长出路由器对外开放——「非 AI 厂商因自用而外溢成工具供应商」，与 Databricks 路径同构。搜索层补充：自托管性能位 Bifrost（Go，5000 RPS 下 ~11µs 开销）；路由自身延迟从规则式 <1ms 到语义分类器 50-100ms，相对 500-2000ms 推理均可忽略。
- **user_quote**: "We did not run all nine products on one shared benchmark, so this list is unranked."（Entelligence 博客自述）
- **top_comments**:
  - [博客对 Ramp 的保留] 30% 省钱数字背后的质量数据集「isn't detailed publicly」
  - [博客对 RouteLLM 的定位] 数字建立在「older model pairs and preference data」上，是研究基线而非生产基础设施
- **ai_opportunity**: 品类拥挤但全是自报数字、无共享基准——「路由器的路由器」缺位：独立的第三方路由基准/审计（在客户真实流量回放上核算实际省了多少），天然中立位恰好大厂和厂商都做不了。另一空位：路由器均按「省成本」叙事，尚无人按「守质量」叙事（回归检测：路由降档后错误率变化的持续监控）。

## 7. 反共识论点：「token 单价越来越便宜，AI 应用毛利却越来越差」——前沿需求迁移吃掉全部降价红利
- **type**: pain_point | **platform**: 知乎专栏 | **secondhand**: true
- **source_url**: https://zhuanlan.zhihu.com/p/1935794192564609333
- **source_date**: | **fetched_at**: 2026-08-10
- **metrics**: 论点引用的行业乐观假设：「LLM 推理成本每 6 个月下降 3 倍」；结果：18 个月后利润率「几乎和以往一样是负的」；案例：Windsurf 被拆分出售、Claude Code 取消最初 $200/月无限套餐
- **description**: 对本热点最重要的冷水：降价 ≠ 应用层利润改善。机制是「前沿需求迁移」——GPT-3.5 便宜了 10 倍但「像 iPhone 发布会上的翻盖手机一样不受欢迎」；新 SOTA 一发布，99% 需求立即迁移，用户只为最前沿能力付费，旧模型降价救不了毛利。结论：被重构的商业模式是从「按调用量转售 token 差价」转向「按结果/工作量计费 + 混合架构与缓存把成本做成可控变量」。渠道故障说明：知乎页面 403 拒抓，以上内容仅来自搜索结果层的详细摘录，未能核对原文全文与发布日期，全部按二手对待；该论点与 2025 年 Ethan Ding「tokens are getting more expensive」一文高度同构，疑为编译/转述。
- **user_quote**: "大模型经济学真相：Token 成本其实越来越贵了"（文章标题）
- **top_comments**: （无法访问评论区）
- **ai_opportunity**: 直接挑战「降价=独立开发者春天」的主流叙事：若你的产品价值锚定「最前沿模型能力」，降价红利会被需求迁移吞噬；只有价值锚定「旧前沿即够用」的场景（结构化抽取、分类、审校、监控——恰是 Luna/Flash 定位）才真正吃到红利。选品启示：做「够用型智能」的高频工作流，避开「必须最强模型」的对话型体验。

## 8. 2026 定价金字塔推演：低端推理走向「零毛利获客品」，利润上移到定制化 PaaS
- **type**: trend | **platform**: 腾讯云开发者社区 | **secondhand**: true
- **source_url**: https://developer.cloud.tencent.com/article/2698635
- **source_date**: 2026-03-16 | **fetched_at**: 2026-08-10
- **metrics**: 文中反例（算力通胀致回弹）：Tencent HY2.0 Instruct 输入价 0.0008→0.004505 元/千token，涨超 460%；TCO 测算（5000 万 token/日）：公有云 API $126,000 vs 开源托管 $36,000 vs 私有化 $108,347/月
- **description**: 3 月发布的推演文（部分型号/数字与公开产品线不符，按推演内容对待），但其框架被 7-8 月事实精确兑现：「中低端推理能力将彻底商品化，成为云厂商吸引流量的亏损先导产品，真正的盈利点将转向高度定制化的AI应用平台（PaaS）」——五个月后 ChatGPT 免费无限（信号 2）正是「亏损先导品」的教科书执行。厂商角色分工也与当下吻合：OpenAI/Anthropic「稳固了其在高净值逻辑推理市场的定价权」（Sol/Opus 皆未降价），DeepSeek「成功扮演了『成本粉碎机』的角色」。另一有用的反直觉数据点：不是所有价格都在跌，算力通胀（能耗、芯片折旧、Agent 高频调用）可导致个别模型回弹 460%。
- **user_quote**: "中低端推理能力将彻底商品化，成为云厂商吸引流量的亏损先导产品，真正的盈利点将转向高度定制化的AI应用平台（PaaS）。"
- **top_comments**: （开发者社区专栏，未见有效评论）
- **ai_opportunity**: 「塔基免费、塔尖保价」结构下，独立开发者两条活路被点名：贴着免费塔基做量大管饱的应用（成本≈0）、或卡进「定制化 PaaS」缝隙做行业模板/工作流封装；正面硬刚中端通用推理（被上下夹击）是死路。价格双向波动（-80% 与 +460% 并存）本身论证了成本监控/多供应商对冲工具的必要性。

## 9. 缓存价成为路由决策新变量：V4 Pro 缓存命中 $0.003625 vs Luna $0.02，同一工作负载胜者反转
- **type**: trend | **platform**: CodingFleet 博客 | **secondhand**: true
- **source_url**: https://codingfleet.com/blog/gpt-5-6-luna-vs-deepseek-v4-pro/
- **source_date**: 2026-07-12（页面自称，正文已含 07-30 降价内容，疑为更新未改日期） | **fetched_at**: 2026-08-10
- **metrics**: 每 1M tokens：新鲜输入 Luna $0.20 vs V4 Pro $0.435；缓存命中 Luna $0.02 vs V4 Pro $0.003625（5.5 倍差）；输出 $1.20 vs $0.87。场景账：10M 新鲜输入+1M 输出 → Luna $3.20 vs V4 Pro $5.22（Luna 胜）；10M 缓存输入+1M 输出 → Luna $1.40 vs V4 Pro $0.90625（V4 Pro 胜）。SWE-Bench Pro：Luna 62.7% vs V4 Pro Max 55.4%（作者自警 harness/版本不可直比）
- **description**: 把「谁更便宜」拆穿的一篇：同一对模型，工作负载从新鲜输入切到缓存复用，胜者直接反转。表价对比（输入/输出两维）已不足以做选型决策，必须引入第三维缓存命中率——文档问答、长前缀 agent 这类同前缀日读千次的场景，缓存价差 5.5 倍的影响远超表价差。文章结论与 Databricks 呼应：「The strongest architecture is often a router that uses both」「Measure cost per successful task, not just cost per token」。厂商博客（CodingFleet 卖编码工具），数字与 36kr/AA 交叉一致。
- **user_quote**: "Measure cost per successful task, not just cost per token."
- **top_comments**: （博客无评论区）
- **ai_opportunity**: 现有比价工具几乎都只比表价两维——做一个输入「你的 token 画像（新鲜/缓存/输出比例 + 缓存命中率）」输出真实月账单对比的计算器，是本周期内可一天上线、天然引流的小产品；进阶版接入网关按画像自动路由（即信号 6 品类的差异化切口）。

## 10. 结构性背景：中国模型连续 13 周霸榜 OpenRouter token 量，7 月下旬占平台 66.5%
- **type**: trend | **platform**: 36kr（引 OpenRouter/CNBC 数据） | **secondhand**: true
- **source_url**: https://eu.36kr.com/en/p/3919319636290946
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-10
- **metrics**: 自 2026 年 4 月底起中国模型 OpenRouter token 量连续 13 周超美国模型；07-20~26 当周约 38.6 万亿 tokens、占平台总量 66.5%；CNBC 调查：2 月 8 日以来美国公司经 OpenRouter 在中国模型上的周度花费占比持续超 30%，峰值 46%
- **description**: 解释 OpenAI 为何肯在 GA 21 天后自砍 80% 的关键背景数据：按 token 流量计，开放路由市场的多数份额已被中国低价模型拿走，且美国企业客户用脚投票（周度花费峰值 46% 流向中国模型）。这轮降价的本质不是技术红利分享，而是流量保卫战——也预示价格战短期不会停（Anthropic 是唯一未跟进降价的头部，策略是「同价更强」）。数据为 36kr 转引 OpenRouter 榜单与 CNBC 调查，未直接核对 OpenRouter 原始页，按二手对待。
- **user_quote**: "Chinese models exceeded US models in OpenRouter token volume for 13 straight weeks"（36kr 英文版转述）
- **top_comments**: （无）
- **ai_opportunity**: 多供应商路由不再是省钱技巧而是地缘/合规议题：美国企业 46% 花费流向中国模型，合规敏感客户需要「供应商来源策略引擎」（按数据敏感级别路由到指定辖区模型）——现有路由器都按成本/质量路由，按合规辖区路由的几乎空白。

---

## 渠道与方法说明
- 依次执行 5 组指定搜索 + 1 组补充验证（ChatGPT 免费无限官宣、HN 线程定位），搜索渠道正常，无污染迹象。
- 403 拒抓：venturebeat.com、zhuanlan.zhihu.com（后者信号 7 仅有搜索层摘录，已显式标注不确定性）。
- news.ycombinator.com 直连 ECONNREFUSED，经 hn.algolia.com API 成功取得线程与逐字评论。
- 未发现任何路径异常，未执行任何删除/移动操作。
