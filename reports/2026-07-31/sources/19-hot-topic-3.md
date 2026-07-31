# 19 — 热点深挖: EU DMA 强制 Google 开放 Android 给第三方 AI 助手 2026-07-31

> 组内信号：7 条 | 二手转述：3 条（43%）
> 最强证据线：欧盟委员会 2026-07-16 两项约束性规范决定（Art.6(7) 互操作 + Art.6(11) 搜索数据共享）均已从官方 developer-portal 一手页面逐条核对，含 11 项 Android 功能的四大分类、精确里程碑日期（2027-01 数据共享 / 2027-08 Android 18 交付）、第三方 AI 助手认证与搜索数据受益人资格门槛、FRAND 定价公式。
> 渠道故障：Hacker News（news.ycombinator.com）连续两次 ECONNREFUSED，theverge.com 与 scworld.com 分别 blocked/403，未能取得开发者社区一手原声。WebSearch 渠道本身正常（各查询返回相关且互异结果，未见污染）。

---

## 1. 欧盟委员会正式通过两项约束性 DMA 规范决定（一手官方）
- **type**: trend | **platform**: European Commission (regulator) | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/commission-provides-guidance-google-ai-interoperability-android-and-sharing-google-search-data-under-2026-07-16_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: Android 覆盖「60% of EU users」；两套 binding specification measures；不认定违规、无罚款
- **description**: 委员会依 Art.6(7)（AI 互操作）与 Art.6(11)（搜索数据共享）向 Google 下达约束性规范决定。用户可用语音（媲美「Hey Google」）唤醒首选助手，第三方助手可在 App 内执行任务（叫出租车、聊天回复建议、询问刚到访地点）。搜索数据部分明确 AI chatbot with search functionality 为合格受益方，并须提供「fair formula to calculate the price of the shared data」。
- **user_quote**: "a fair formula to calculate the price of the shared data, and a transparent process for accessing the data."
- **top_comments**:
  - [Commissioner Teresa Ribera, via ppc.land 转述] "smaller competitors, search engines, or AI assistants, to compete."
  - [Commissioner Henna Virkkunen, via ppc.land 转述] aim is "to support innovation and diversity in the European Union," naming "emerging alternatives to Google Search."
- **ai_opportunity**: 这是给独立 AI 助手的史上最大分发缺口官方背书——首次有明确时间表把「Android 上的第三方 Siri」从理论变成 2027 路线图。

## 2. 11 项 Android 功能 + 四大分类逐条清单（一手 developer-portal）
- **type**: trend | **platform**: European Commission developer-portal | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/interoperability/alphabet-specification-proceedings-interoperability-ai-services_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 11 features / 4 categories；case DMA.100220
- **description**: 四大类逐条——**Invocation**：①长按 home/导航手柄唤醒（不得仅限 Google，如 Circle to Search）②常亮热词检测（含息屏/省电/待机，须并发第三方访问）；**Context**：③集中式访问 App 端内数据（对标 AppSearch）④情境感知智能（可主动建议，对标 Magic Cue）⑤环境数据（麦克风/摄像头/屏幕/扬声器实时流）；**Actions**：⑥结构化端内集成（App Functions + Gmail/Calendar/Drive/Docs/Maps/YouTube/Messages/Phone）⑦屏幕自动化（虚拟窗口模仿用户操作，即 Computer Control）⑧系统集成（亮度/媒体/勿扰/蓝牙）；**Resources**：⑨系统级端侧模型（含 Gemini Nano，等性能保证）⑩第三方 ODM 安装运行⑪后台执行。横向要求：免费、覆盖全 Android 生态含其他 OEM 设备、不得附加 default-role 条件、须提供文档+测试+技术支持。
- **user_quote**: features must be "equally effective to those available to Google"
- **top_comments**:
  - [官方页面] 环境数据定义: "the continuous stream of real-time inputs/outputs from a device's core sensors (e.g., microphone, camera, screen, speakers)"
  - [官方页面] 后台执行须遵 "transparent, objective, precise and non-discriminatory rules"
- **ai_opportunity**: 这份清单等于一张「独立助手能力路线图」——⑦屏幕自动化+⑥结构化集成+②常亮热词是做「Android 版 Siri/agentic 助手」的三根支柱；⑨调用 Gemini Nano 让小团队免自建端侧模型。

## 3. 精确里程碑时间表（互操作侧）
- **type**: trend | **platform**: European Commission developer-portal | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/interoperability/alphabet-specification-proceedings-interoperability-ai-services_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 2026-01-27 立案 → 2026-07-16 终裁 → 2027-02-01 认证条款草案征询 → 2027-05-01 最终条款+开放申请（4 周审批）→ 2027-08-01 Android 18 交付 11 功能 → 2028-08-01 Android 19 交付并发热词检测
- **description**: 敏感功能可被 Google 设「objective and non-discriminatory eligibility conditions」，但「No further commercial requirements may be imposed」。可门控的 5 项：屏幕自动化、结构化端内集成、系统集成、集中式端内数据、情境感知智能。认证由 Google + 独立第三方执行，每份申请须 4 周内评估完。
- **user_quote**: "No further commercial requirements may be imposed."
- **top_comments**:
  - [官方页面] 每份认证申请须在 "four weeks" 内评估
- **ai_opportunity**: 建议独立开发者按此时间表倒排——2027-02 认证草案是第一个可行动信号，2027-05 开始受理申请。并发热词检测（真正的「换掉 Hey Google」）要等到 2028-08，短期内热词是差异化难点。

## 4. 搜索数据共享资格门槛 + FRAND 定价公式（一手 developer-portal）
- **type**: trend | **platform**: European Commission developer-portal | **secondhand**: false
- **source_url**: https://digital-markets-act.ec.europa.eu/developer-portal/data-access/alphabet-specification-proceedings-sharing-google-search-data_en
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 资格门槛：EU 连续运营 2 年，或成立不足 2 年但募资「more than €50 million in capital investments」；「50 000 monthly average users」；许可最长 5 年；latency 下限 7 天；k-anonymity ≥1000 用户/组，「95% of users will be in larger groups of at least 29,000 users」
- **description**: 合格受益方须运营搜索引擎（含 AI chatbot with search functions）。共享匿名化 ranking/query/click/view 数据。定价 = Alphabet 增量成本 + 严格必要资本的合理回报（封顶于 WACC）；额外 margin 仅例外允许，对中小微企业（MSME）完全豁免。数据仅限开发优化搜索服务用途——**明令禁止训练通用 AI 模型、做画像/广告、系统性复制 Google 结果**。
- **user_quote**: founded under two years ago must show "more than €50 million in capital investments"
- **top_comments**:
  - [官方页面] "50 000 monthly average users of its online search engine services in the EU in the past year"
  - [官方页面] 额外 margin "never applies to micro, small, or medium enterprises"
- **ai_opportunity**: 双刃剑——定价对 MSME 豁免额外 margin，成本友好；但 5 万月活 + 2 年运营/5000 万募资门槛把纯 solo/早期项目挡在门外，且数据禁训 LLM，只能用于搜索检索/排序/纠错/实时抓取事实性 grounding。适合已有搜索产品的团队，不适合从零起步。

## 5. 数据共享时间线：2027-01 正式开闸（多源交叉验证）
- **type**: trend | **platform**: ppc.land (secondhand 汇总) | **secondhand**: true
- **source_url**: https://ppc.land/eu-forces-90-dominant-google-to-share-its-search-data/
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: Google EU 搜索份额「exceeded 90% ... for decades」；University of Antwerp 早 7 月研究亦约 90%（DMA 已迁 600 万用户至 Firefox 后）；Google 自愿方案曾删除「between 90 and 100 percent of unique search queries」被指「no meaningful uptake」
- **description**: 时间线：2026-08 底提交资格申请表→2026-09 模板许可+测试样本+成本估算→2026-11 匿名数据集定稿→2027-01 定价定稿、数据共享开始。数据须先过独立审计才能获取。Kent Walker（Google Global Affairs President）同日反击。
- **user_quote**: Kent Walker: the decisions "risk undermining vital privacy and security guardrails for millions of Europeans."
- **top_comments**:
  - [Kent Walker, Google, 同日声明] rival assistants "already safely access Android's capabilities, with phone makers playing a key role in vetting them," and the new duty "threatens device security by granting external apps sensitive and powerful device permissions."
  - [Kent Walker, Google] on search data: "Europeans' private searches would be exposed to unfamiliar companies," which would "weaken citizens' privacy, risk business trade secrets, and endanger national security."
- **ai_opportunity**: 90% 份额 + 自愿方案「删掉 90-100% 独特查询」被判无效，说明委员会这次动真格给出可用数据集——对搜索类 AI 产品是罕见的护城河松动窗口。

## 6. 谁真正受益？分析指出可能利好 Bing/DuckDuckGo 而非欧洲挑战者（批判视角）
- **type**: trend | **platform**: ppc.land (secondhand 分析) | **secondhand**: true
- **source_url**: https://ppc.land/eu-forces-90-dominant-google-to-share-its-search-data/
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: 规范程序无罚款（不评估过往违规）；单独的 self-preferencing/Gemini in AI Overviews 罚款仍待决；委员会审查 2027 年及此后每两年一次
- **description**: 早 7 月分析认为 DMA 至今更利好 Bing 与 Firefox 而非欧洲本土挑战者，且同一模式可能重演——Bing、DuckDuckGo 能立即用上新数据权，而 Ecosia、Qwant 需先建能力。成败取决于审计清关速度与匿名数据集在实际产品中的可用度。
- **user_quote**: outcomes hinge on "audit clearance speed and how much of the anonymised dataset remains useful in real product work."
- **top_comments**:
  - [ppc.land 分析] Bing 和 DuckDuckGo "can exploit new data rights immediately while Ecosia and Qwant would need to build capacity first."
- **ai_opportunity**: 提醒独立开发者：合规能力（审计、匿名数据集成流水线）本身就是可产品化服务——「DMA 数据接入合规即服务」「匿名数据集 ETL/评估工具」可能是比做助手本身更稳的卖水机会。

## 7. OpenAI/Anthropic 被官方点名为潜在受益方；Gemini 已成 Android 默认助手
- **type**: trend | **platform**: cryptobriefing + 搜索汇总 | **secondhand**: true
- **source_url**: https://cryptobriefing.com/eu-orders-google-open-android-search-ai-rivals/
- **source_date**: 2026-07-16 | **fetched_at**: 2026-07-31
- **metrics**: ChatGPT、Claude 被点名；Gemini 2025-2026 已默认嵌入 Gmail/Chrome/Android/Workspace/Maps/Search 含电源键手势，classic Assistant 进入 sunset
- **description**: OpenAI（ChatGPT）与 Anthropic（Claude）被列为潜在受益方，可获系统级集成（含唤醒词唤起 ChatGPT「the same way they currently invoke Google Assistant」及 NPU 访问）。若 Google 共享搜索数据，「the information asymmetry that has underpinned its advertising dominance starts to erode」。背景：Gemini 已从可选升为 Android 默认助手，第三方助手此前只能受限访问。
- **user_quote**: rivals could "summon ChatGPT the same way they currently invoke Google Assistant"
- **top_comments**:
  - [搜索汇总 via androidpolice/laptops251] Gemini「full replacement of Assistant on Android was expected during 2026」，第三方助手在跨 App 智能家居与深度检索上仍逊于 Gemini
- **ai_opportunity**: 大厂（OpenAI/Anthropic）会吃下头部入口，但 11 项接口开放给「all qualifying rivals」——独立开发者的机会在垂直助手（银行/支付类被点名将被重塑、无障碍、本地生活、企业内部 agent），用开放接口做大厂不做的长尾场景。
