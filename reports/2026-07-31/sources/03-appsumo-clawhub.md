# 03 — AppSumo + ClawHub 2026-07-31

> 组内信号：12 条 | 二手转述：0 条（0%）
> 全部信号来自直接抓取：AppSumo trending-AI 榜（前 11 名连续采集）+ 5 个头部 deal 的评论深挖（含差评与创始人回复原文），ClawHub 首页/skills 页 JS 渲染为空、改用官方 `/api/v1/skills` API 拿到 49 个技能全量下载数。无渠道不可达；未使用 WebSearch。

---

## 1. AppSumo Trending AI 榜快照：语音、外联、Agent 基建三线并进（137 个 AI deal）
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/collections/trending-ai/
- **source_date**: 空（榜单快照） | **fetched_at**: 2026-07-31
- **metrics**: 集合共 137 个 AI deal。前 11 名（Recommended 排序，连续）：#1 Vocallab AI $49 (原$72) 4.65/26评；#2 RobinReach $69 (原$99) 4.75/63评；#3 DigiParser $69 (原$232) 5.0/4评；#4 Cleanlist AI $79 (原$104) 4.68/69评；#5 Dale $69 (原$1,188) 5.0/6评；#6 Poppy AI $279 (原$649) 4.89/150评；#7 Kortex $49 (原$99) 4.13/15评；#8 Letterly $89 (原$200) 4.69/353评；#9 Vexp $49 (原$100) 4.56/18评；#10 Inkfluence AI $49 (原$89) 3.84/19评；#11 VerifyYourCode 5.0
- **description**: 本期 trending AI 榜呈三条主线：(a) 语音层（AI 配音/克隆 Vocallab、口述转文字 Letterly 353 评为全榜评论数之王）；(b) 销售外联数据（Cleanlist 邮箱+手机号瀑布、Dale 自动化个性 demo）；(c) AI 编码 Agent 配套基建首次成规模上榜——Vexp（给 AI coding agent 喂本地依赖图上下文）、VerifyYourCode（给 AI 生成代码打安全/技术债分）、Kortex（捕获 AI 对话并自动化 NotebookLM 工作流）。RobinReach 在 tagline 里直接把「MCP integration」当卖点，MCP 已进入 LTD 大众市场的营销词汇。
- **user_quote**: ""
- **top_comments**: 无（榜单页无评论，见后续 deal 深挖条目）
- **ai_opportunity**: 「AI 编码 Agent 配套工具」已被 LTD 买家验证愿付费（上下文供给、代码验证、对话资产管理三个切口都各自成 deal）；MCP 作为营销词进入非开发者市场，说明「帮小企业把现有 SaaS 接上 agent」的集成层有大众化窗口。

## 2. Vexp：给 AI coding agent 喂精准上下文的本地依赖图，$49 LTD
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/vexp/
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: $49 lifetime（原 $100），4.56 星 / 18 评，trending-AI 榜 #9，类目 Dev Utilities
- **description**: 定位「Build a local dependency graph and serve precise context to AI coding agents across VS Code and CLI」。上下文管理是 AI 编码的头号痛点（上下文丢失/喂错文件），这个痛点已经下沉到 AppSumo 的 $49 LTD 买家层——意味着付费意愿已从专业开发者扩散到 vibe-coder 群体。
- **user_quote**: ""
- **ai_opportunity**: 面向 vibe-coder 的「上下文正确性」工具带（依赖图、repo 摘要、跨会话记忆）可打包成低价 LTD/订阅；与 keelwright（ClawHub，见 #11）指向同一人群的不同环节。

## 3. Poppy AI：$279 高价 LTD 卖爆（150 评 4.89），但「人肉 onboarding」撑起口碑、BYOK 是被逼出来的
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/poppy-ai/reviews/
- **source_date**: 空（评论 2026-07-16 至 07-21） | **fetched_at**: 2026-07-31
- **metrics**: Tier1 $279（原$649）至 Tier6 $4,459；4.8 星 / 150 评（145 个五星、3 个一星、0 个四星）；trending 榜 #6
- **description**: 视觉化 AI 内容工作台（拖入 YouTube/PDF/语音笔记 → 生成带个人风格的脚本/帖子/邮件，内置 Claude+ChatGPT）。评论深挖发现两个反直觉信号：(1) 页面首屏 5 条五星评论里 4 条夸的是「真人 onboarding 电话」而非产品本身——高客单 AI 工具的转化靠人肉激活；(2) 创始人 Rafeh Qazi 2026-06-15 更新承认重度用户「essentially paying twice」（Poppy credits + 自己的 API 费），被迫给 Tier4-6 上 BYOK。AppSumo AI 摘要指出「the visual generation and API access could be improved」。
- **user_quote**: "I almost gave it up before I understood it. I'm glad I didn't." — Theclinic（五星，Tier 4 买家，2026-07-16）
- **top_comments**:
  - [AppSumo review, Theclinic, 5 tacos, 2026-07-16] "The closest competitor would cost me more in three months than I paid for my Tier 4 lifetime deal."
  - [AppSumo review, skyltech.soft, 5 tacos, 2026-07-17] 对比 ChatGPT/Claude："the context gets lost when the conversation or project becomes longer."（Poppy 的可视化画布解决长上下文丢失）
  - [创始人更新, Rafeh Qazi, 2026-06-15] 用户 "asked for it. Loudly. Repeatedly."——重度用户在 Poppy credits 之外还要付自己的 API 成本，等于付两遍，BYOK 因此上线（仅 Tier 4-6）
- **ai_opportunity**: 两个缺口：(1)「credits + 自带 API key 双轨计费」是 AI 工具通病，BYOK 计费/成本归因中间层有横向机会；(2) 「AI 工具人肉激活即服务」——高客单 AI 产品的 onboarding call 被反复点名，可产品化为 onboarding 编排/白手套服务。

## 4. Letterly：353 评的口述转文字王者，差评集中在语言自动检测
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/letterly/reviews/
- **source_date**: 空（评论 2026-07-06 至 07-30） | **fetched_at**: 2026-07-31
- **metrics**: $89（原$200），4.69 星 / 353 评（295 五星 / 29 四星 / 13 三星 / 11 二星 / 5 一星），全 trending 榜评论数第一
- **description**: 任意 App 内口述→完美文本 + 会议录音。353 条评论是本期 AI 榜最强付费验证。最新差评方向一致：多语言用户的自动语言检测出错（英语被识别成俄语），且只能选单一语言。AppSumo AI 摘要另提「limited recording time」。
- **user_quote**: "While auto language detect is convenient, it definitely is not accurate 100%." — ahmed5_27（五星但附差评点，2026-07-30，追问 "why not select multiple languages?"）
- **top_comments**:
  - [AppSumo review, info6414, 5 tacos, 2026-07-13] "it works flawlessly in both English and German."（用于邮件和 LinkedIn 帖子）
  - [AppSumo review, Linxs7, 5 tacos, 2026-07-16] 另一款工具转录出错后，Letterly "provided an excellent transcript with very accurate speaker recognition."
  - [AppSumo review, twsisney, 5 tacos, 2026-07-06] "I especially love that I own it for life."（LTD 所有权本身是卖点）
- **ai_opportunity**: 多语言混说场景（双语家庭/跨国工作者的 code-switching 语音输入）是现有口述工具的一致盲区；「多语言并行识别」可作差异化切口。

## 5. Cleanlist AI：直连手机号是「作弊级」卖点，差评暴露数据类工具的信任脆弱性
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/cleanlist-ai/reviews/
- **source_date**: 空（评论 2026-07-22 至 07-30） | **fetched_at**: 2026-07-31
- **metrics**: $79（原$104），4.68 星 / 68-69 评（60 五星 / 4 一星）；15+ 数据商瀑布式查询
- **description**: 邮箱+直连手机号查找（15+ provider waterfall）。好评核心是「一站拿到手机直拨号」替代多工具跳转，有买家称电话接通率约为知名竞品 5 倍并一周内从 Tier2 加购到 Tier5。一星差评则完整展示数据类工具的失败模式：解锁联系人几乎全失败 + 升级 Tier7 后账单仍显示免费版 + 客服无回复——三连击。
- **user_quote**: "It feels like cheating, being able to get direct cell numbers of key people in big companies." — legediminas（五星，2026-07-24，一周内 Tier2→Tier5）
- **top_comments**:
  - [AppSumo review, buy58, 5 tacos, 2026-07-28] "it proved to be excellent value for our cold calling team"——对比测试中电话接通率约为知名竞品 5 倍
  - [AppSumo review, anantgupta, 1 taco, 2026-07-22] "almost all of the time I tried unlocking any contact, it said we could not find the contact" + "Update: No reply from support as well"（Tier7 付费后账单仍显示免费计划）
  - [AppSumo review, MisterPharmacist, 5 tacos, 2026-07-29] "The interface is simple, the results are fast, and the data quality has been strong."
- **ai_opportunity**: 销售数据瀑布聚合的付费意愿强但信任极脆（查不到=秒差评）；「查询前命中率预估/按命中付费」的定价与 SLA 设计是差异化点，也可做独立的 provider 命中率评测层。

## 6. Vocallab AI：语音克隆效果封神，但「调参也烧 credit、无预听」成集体差评
- **type**: pain_point | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/vocallab-ai/reviews/
- **source_date**: 空（评论 2026-07-29 至 07-30） | **fetched_at**: 2026-07-31
- **metrics**: $49（原$72），4.6 星 / 24 评（19 五星 / 4 三星），trending 榜 #1
- **description**: 浏览器内 AI 配音+声音克隆。克隆保真度获压倒好评（口音、含糊音都保留），但计费模型引发集中差评：每次调整声音参数都全额重新计费、无法生成前预听、改一个词也按整段重渲染收费。创始人回复承认「every settings change re-synthesizes the audio」「treats each regeneration as a new request」，仅称在「reviewing ways」改进。
- **user_quote**: "You cannot hear a sample before generating, and they charge you the full credit again." — nukultureagency（3 tacos，2026-07-30）
- **top_comments**:
  - [AppSumo review, ryan727, 4 tacos, 2026-07-29] "if a recording costs 200 credits… it costs another 200 credits to regenerate it."——同时夸克隆抓住了 "my mumbling and New York accent"，但吐槽有时 "the delivery can sound robotic"
  - [AppSumo review, asw, 5 tacos, 2026-07-30] "The results were amazing and really quite spooky. Easily the best voice cloning I've ever tried, and I've tried a few."
  - [AppSumo review, rikkiquay77, 5 tacos, 2026-07-29] "VocalLab got my voice to a T."——混合英澳口音在其他工具会被抹平，这是第一个不用重录的工具
- **ai_opportunity**: 生成式媒体的「按重渲染全额计费」是行业级摩擦：增量编辑（只重生成改动片段）、生成前低成本预览、参数调整免费额度——任一实现都是直接卖点；也印证 #3 Poppy 的 credit 双轨痛点，成本计费层机会连成线。

## 7. RobinReach：社媒管理工具把 MCP/Claude 集成当核心卖点并被买家实际用起来
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/robinreach/reviews/
- **source_date**: 空（评论 2026-07-27 至 07-30） | **fetched_at**: 2026-07-31
- **metrics**: Tier1 $69（原$99）至 Tier4 $719；4.75 星 / 62-63 评（55 五星）；tagline 宣称 12 平台自动化 + MCP integration
- **description**: 12 平台社媒自动化 + AI 内容生成 + MCP 集成 + 内容 repurposing。评论显示 MCP 不只是营销词：有买家在创始人 Shaher 手把手协助下配好了 Claude AI 集成做社媒自动化。买家画像是多账号 solo operator（一人管 3 个业务、一天排完 10+ 账号），从 Buffer/Plann 迁来。创始人 4/5 评论亲自回复。
- **user_quote**: "I've previously used Buffer and Plann, but RobinReach is on a completely different level." — eliza09（五星，2026-07-29，solo 运营 3 个业务）
- **top_comments**:
  - [AppSumo review, devildogmarketplace, 5 tacos, 2026-07-27] "The software is powerful, but what makes RobinReach different is the people behind it."——创始人手把手帮配 Claude AI 集成做社媒自动化
  - [AppSumo review, marion87, 5 tacos, 2026-07-29] "no learning curve, it just makes sense from the start" / "The biggest shift for me: finally have fun with social media."
  - [AppSumo review, theFeinheit, 5 tacos, 2026-07-27] "The interface is clean, intuitive, and easy to navigate"——点名 repurposing 功能最省时间
- **ai_opportunity**: 「SaaS 自带 MCP endpoint」正在成为 LTD 市场的差异化卖点，但买家需要创始人人肉协助才能接通 Claude——「小白友好的 MCP 接线向导/托管配置」是空白；SaaS 厂商侧「一键给产品加 MCP server」的开发者工具同样有需求。

## 8. Dale：$69 买断「给每个 prospect 自动生成个性化 demo」，原价锚 $1,188
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/dale/
- **source_date**: 空 | **fetched_at**: 2026-07-31
- **metrics**: $69 lifetime（原 $1,188，折扣 94%），5.0 星 / 6 评，trending 榜 #5
- **description**: 「Give every prospect an instant, personalized demo and know who is ready to buy before your sales call」——自动化 demo 生成 + 购买意向识别。原价 $1,188/年的销售工具下沉到 $69 LTD，说明厂商在用 AppSumo 换早期口碑；「demo 自动化 + intent 评分」组合此前是企业级 (Consensus/Demostack) 专属，现进入 SMB。
- **user_quote**: ""
- **ai_opportunity**: AI 生成式 demo（按 prospect 画像实时组装产品演示）在 SMB 价位带刚出现，评论数少=早期；可关注「demo 观看行为→意向评分→CRM 回写」的轻量化管线。

## 9. ClawHub 全量 API 快照：49 个技能、电话 Agent 运行时以 3,854 下载登顶
- **type**: product_market | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/api/v1/skills
- **source_date**: 空（注册表快照；各技能 createdAt 见 metrics） | **fetched_at**: 2026-07-31
- **metrics**: 注册表共 30 skills + 12 plugins（站内标语），API 返回 49 项。下载 Top10：amber-phone-agent 3,854dl/90 installs/14 comments（created 2026-02-13）；jinguyuan-dumpling-skill 2,741dl（2026-04-07）；volcengine-cli 1,372dl（2026-03-13）；opphub 1,324dl（2026-07-03）；dex-skill 1,053dl（2026-03-03）；smyx-flowering-fruit-set-rate 970dl；smyx-pet-carrier-respiratory 921dl；go-next-move 894dl；volcengine-sdk-generator 893dl；smyx-vomiting-detection 832dl
- **description**: ClawHub 首页/skills 页为 Convex 客户端渲染、抓取为空，改用官方 API（一手数据）。下载榜结构性发现：(1) 冠军 amber-phone-agent 是「真实电话助理运行时」（Twilio/OpenAI Realtime 打进/打出电话、来电筛查），90 installs + 14 comments 均为全站最高——Agent 打电话是被验证的最强需求；(2) 火山引擎官方矩阵 3 个技能合计 2,752dl（cli/sdk-generator/deploy），云厂商已把「让 agent 会用我的云」当渠道来经营；(3) smyx 系列 7 个「固定摄像头视频分析」技能（宠物呕吐/鱼呼吸/儿童噩梦翻身/通勤疲劳/牲畜异常）合计约 4,800dl，视频流→结构化告警是 agent 化的成规模场景；(4) 中文本地生活/内容技能（饺子馆排队 2,741dl、围棋支招 894dl、星座 API 341dl、速记板 311dl）显示中文 agent 生态活跃。
- **user_quote**: ""
- **top_comments**: 无（API 不含评论文本；amber-phone-agent 14 条评论为全站最高互动）
- **ai_opportunity**: (1) 电话語音 agent 运行时是 OpenClaw 生态下载与互动双冠，「agent 接打真实电话」的合规、录音、转接配套仍是空白；(2)「摄像头视频→领域告警」的垂直技能模板可批量复制到新场景；(3) 云厂商 agent 技能矩阵刚起步，第三方 SaaS 的「让 agent 会用我」技能代工是机会。

## 10. ClawHub 一周新增潮：安全/信任类技能扎堆上架（sqlguard、bunkerie、审计类）
- **type**: trend | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/api/v1/skills
- **source_date**: 空（各技能 created 日期 2026-07-25 至 07-31） | **fetched_at**: 2026-07-31
- **metrics**: 近 7 天（07-25 后）新上架含：sqlguard-authorize（07-30，38dl，生产 SQL 写操作强制先授权）；bunkerie（07-30，71dl，保存 agent 无法重建的身份/记忆/决策）；keelwright（07-28，261dl，见 #11）；work-productivity-skillscan-security-workflow-helper（07-27，253dl）；work-productivity-skill-vetter（07-29，171dl）；skill-systems-thinking（07-25，196dl）；平台自身在 ticker 强调 signed manifests / moderated releases / audit
- **description**: 一周内新上架技能里安全与信任主题密度显著：给 agent 的 SQL 写操作加强制授权闸、agent 身份与记忆的灾备保存、技能安全扫描（SkillScan）与技能审查（Skill Vetter）workflow helper。叠加平台自身把 signed manifests/audits 写进首页 ticker——agent 技能生态在重演 npm 供应链安全的早期轨迹，且这次「运行时权限闸」和「技能审计」同时出现。
- **user_quote**: ""
- **ai_opportunity**: agent 技能供应链安全（上架前扫描、运行时权限声明、危险操作 authorize-before-mutate 中间件）是刚萌芽且平台方自己都在补的层；对应 07-29 报告「不可审计」主题在 agent 技能市场的具象化。
- 备注：work-productivity-* 系列 9 个技能版本号相同（v0.20260730.234524）、描述均为「Agent users show strong demand for X-style...」截断句式，疑似同一发布者批量生成（甚至像需求发现流水线自动产物），其下载数（171-663dl）参考价值打折。

## 11. keelwright：专为「看不懂自己 AI 代码」的 vibe-coder 做的 28 项已知风险引擎
- **type**: product_market | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/skills/keelwright
- **source_date**: 2026-07-28（created） | **fetched_at**: 2026-07-31
- **metrics**: 261 下载 / 2 installs，上架 3 天（07-28 → 07-31），v1.5.5 已迭代多版
- **description**: 自述「Engine for vibe-coders and loop-coders who ship AI-generated code they can't read line by line. Covers 28 know[n risks]」。与 AppSumo 榜上的 VerifyYourCode（AI 代码安全/技术债打分，5.0 星）form 同一需求的双端验证：不读代码的发布者需要机器替他们兜底。3 天 261 下载在 ClawHub 新技能里属头部速度。
- **user_quote**: ""
- **ai_opportunity**: 「vibe-coder 安全网」在 LTD 市场（VerifyYourCode）和 agent 技能市场（keelwright）同周出现且都有付费/下载验证——AI 生成代码的自动审计、已知风险清单化检查可做成 CI 中间件或 agent 常驻技能。

## 12. amber-phone-agent：真实电话 AI 助理运行时，ClawHub 下载/安装/评论三冠
- **type**: product_market | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/skills/amber-phone-agent
- **source_date**: 2026-02-13（created；持续更新至 2026-07-30，v5.5.49） | **fetched_at**: 2026-07-31
- **metrics**: 3,854 下载、90 installs、5 stars、14 comments——三项均为全站第一；版本号 5.5.49 显示极高迭代频率
- **description**: 「Real phone assistant runtime with Twilio/OpenAI Realtime calling, inbound screening, confirmed outbound calls」——让 OpenClaw agent 拥有真实电话能力：来电筛查、确认后外呼。互动数据断层领先（第二名 installs 仅 46），且 5 个月内迭代到 5.5.49，说明有真实活跃用户在驱动需求。
- **user_quote**: ""
- **top_comments**: 无（API 未返回评论正文；14 条评论数为全站最高）
- **ai_opportunity**: 个人/小微的「AI 接电话」需求被生态数据坐实：来电筛查（防骚扰/预约确认）是黏性入口；配套空白包括通话合规（录音告知）、多号码管理、电话→日历/CRM 的动作回写。
