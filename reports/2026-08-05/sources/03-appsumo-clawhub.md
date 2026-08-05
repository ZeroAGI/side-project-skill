# 03 — AppSumo + ClawHub 2026-08-05

> 组内信号：11 条 | 二手转述：0 条（0%）
> 最强证据线：AppSumo LTD 买家评论的真实付费意愿+缺口地图（Prompt Architects/Cleanlist/DM Champ/Letterly 四款深挖到 verbatim）；ClawHub 通过公开 API 拿到精确下载数（榜首 self-improving-agent 47.2 万下载）。渠道故障：WebFetch clawhub.ai 首页两次被模型安全策略误拦（非站点封锁），改用 curl 直连其公开 API `api/v1/skills?sort=downloads` 成功，数据为一手。

---

## 1. ClawHub 下载榜首：self-improving-agent（47.2 万下载）——Agent「自我改进/记忆」是生态第一刚需
- **type**: product_market | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/pskoett/skills/self-improving-agent
- **source_date**: 2026-01-05 | **fetched_at**: 2026-08-05
- **metrics**: 472,286 下载 / 18,343 安装 / 3,961 stars / 53 评论 / 38 个版本（v4.0.1）；页面另显 4k bookmarks、Security audit: Pass
- **description**: ClawHub 全站下载第一的技能，功能是「捕获学习、错误与纠正以实现 Agent 持续改进」：命令失败、用户纠错（"No, that's wrong…"）、API 失败、知识过时时自动记录学习。第 3 名 self-improving（206,276 下载）和第 8 名 proactive-agent（173,281 下载）与之同构——前 10 名里 3 个都在解决「Agent 不长记性」。
- **user_quote**: "Captures learnings, errors, and corrections to enable continuous improvement. Use when: (1) A command or operation fails unexpectedly, (2) User corrects Claude ('No, that's wrong...', 'Actually...')"
- **top_comments**:
  - [同类第3名 self-improving 简介] "Self-reflection + Self-criticism + Self-learning + Self-organizing memory. Agent evaluates its own work, catches mistakes, and improves permanently."
  - [同类第8名 proactive-agent 简介] "Transform AI agents from task-followers into proactive partners that anticipate needs and continuously improve. Now with WAL Protocol, Working Buffer, Autonomou[s]…"
  - [页面异常记录] 该 skill 文档给出的安装路径与侧栏不一致（`clawdhub install` vs `openclaw skills install`，GitHub handle `peterskoett` vs `pskoett`）——头部技能也存在供应链混乱信号
- **ai_opportunity**: Agent 记忆/自我改进层是生态验证过的最大缺口：可产品化为跨会话记忆中间件、错误学习数据库、或团队级「Agent 教训共享」服务；三个同类技能合计 85 万+下载说明现有方案仍未收敛。

## 2. ClawHub 第 2/7 名均为「技能安全审查」：skill-vetter 26.8 万 + skillscan 18 万下载——Agent 供应链安全焦虑变现
- **type**: product_market | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/api/v1/skills?sort=downloads&limit=15
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: skill-vetter: 268,032 下载 / 12,157 安装 / 1,281 stars（2026-01-31 创建）；skillscan: 180,429 下载 / 5,947 安装（2026-04-07 创建，4 个月冲进前 10）
- **description**: 下载榜前 10 有两席是「装技能前先安检」的技能：skill-vetter 做 "Security-first skill vetting…Checks for red flags, permission scope"；skillscan 定位为强制安全门（"Every new skill MUST pass SkillScan before use"）。用户在用技能审查技能——市场用真实安装量投票表达了对第三方 Agent 技能的不信任。
- **user_quote**: "Security-first skill vetting for AI agents. Use before installing any skill from ClawdHub, GitHub, or other sources. Checks for red flags, permission scope"
- **top_comments**:
  - [skillscan 简介] "Security gate for skills. Every new skill MUST pass SkillScan before use. Activate on any install, load, add, evaluate, or safety question about a skill."
- **ai_opportunity**: Agent 技能/MCP 供应链安全扫描是已被 44 万+下载验证的付费级焦虑：可做独立的技能注册表安全评级服务、企业级 Agent 技能白名单网关、或 CI 集成的技能审计工具。

## 3. ClawHub 前 15 名其余格局：GitHub/Google Workspace/浏览器自动化/多引擎搜索——Agent 的「手」比「脑」更早商品化
- **type**: product_market | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/api/v1/skills?sort=downloads&limit=15
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: #4 ontology 195,424（类型化知识图谱记忆）；#5 github 194,753；#6 gog(Google Workspace CLI) 190,319；#9 weather 165,978；#10 multi-search-engine 158,576（16 引擎，7 中文+9 全球）；#11 agent-browser-clawdbot 151,735（headless 浏览器，accessibility-tree 快照）；#12 admapix 132,798（广告/应用市场数据 API）；#13 humanizer 126,638（去 AI 味写作）；#14 nano-pdf 118,872（自然语言改 PDF）；#15 obsidian 106,828
- **description**: 榜单完整连续抓取（#1-#15）。除记忆/安全外，高下载集中在：外部系统连接器（GitHub、Google 全家桶、Obsidian）、感知类工具（多引擎搜索含中文引擎、浏览器自动化）、以及内容改写（humanizer 12.6 万下载——用户付出安装成本只为「去掉 AI 写作痕迹」）。
- **user_quote**: "Remove signs of AI-generated writing from text. Use when editing or reviewing text to make it sound more natural and human-written. Based on Wikipedia's compreh[ensive list]" (humanizer)
- **top_comments**:
  - [multi-search-engine 简介] "Multi search engine integration with 16 engines (7 CN + 9 Global). Supports advanced search operators, time filters, site search, privacy engines"
  - [agent-browser-clawdbot 简介] "Headless browser automation CLI optimized for AI agents with accessibility tree snapshots and ref-based element selection"
- **ai_opportunity**: 连接器长尾（国内 SaaS、垂直行业系统的 Agent 技能）仍空白；humanizer 的量级证明「AI 内容去痕」可独立成 SaaS；面向 Agent 优化的浏览器（a11y-tree 而非截图）是新品类。

## 4. AppSumo 趋势榜：Prompt Architects $39 LTD、129 评论 4.87★——「不会写 prompt」仍是大众付费痛点
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/prompt-architects/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: $39 LTD（原 $120，最高档 $439/2 万 prompts/月/20 人团队）；4.87★ / 129 评论（118 个五分）；trending-ai 榜第 8，deal 即将结束
- **description**: 面向 ChatGPT/Gemini/Claude 的 prompt 增强 + 模板库 Chrome 插件。评论揭示的缺口：无法从历史中收藏 prompt、"Improve Prompt" 会过度改写甚至直接回答问题、缺少对话式编辑和可开关的通用指令块（如「验证来源」「不用破折号」）。团队为孟加拉达卡 2025-12 成立的 bootstrapped 小团队。
- **user_quote**: "the 'Improve Prompt' feature sometimes overdoes it… This tool has so much more potential." (704c9f58…, 4 tacos, 2026-07-12)
- **top_comments**:
  - [AppSumo 评论 codezen, 5 tacos, 2026-07-01] 主要为图像/视频 prompt 买 Tier 2："I am not creative enough to craft these myself."（但提醒产出会与模板样例雷同，需自行加料）
  - [AppSumo 评论 erh417, 5 tacos, 2026-06-23] "not a tech expert… extremely easy, efficient, and streamlined… Highly recommend."
  - [AppSumo 评论 Umbrella, 5 tacos, 2026-06-22] 产出 "polished, clear, and ready to use"，无需专业知识
- **ai_opportunity**: prompt 工具的下一层缺口已被买家点名：可编辑后保存、可组合的指令块（风格约束开关）、对话式迭代改 prompt——做「prompt IDE」而非「prompt 美化器」。

## 5. Cleanlist AI：$79 LTD 做「15+ 数据商瀑布流」联系人查找，82 评论 4.77★——Apollo 平替需求旺盛
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/cleanlist-ai/reviews/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: $79 LTD（原 $104/年价基准）；4.77★ / 82 评论（74 个五分、3 个一分）；trending-ai 第 7，AppSumo Select，10 天后结束
- **description**: 通过 15+ 数据提供商瀑布流找验证邮箱+手机号。买家画像清晰：受够 $100+/月订阅的 Apollo/ZoomInfo 用户。抱怨集中在 people-search 额度太少（25 个）和「主流 CRM 之外集成有限」。一位 30 年好莱坞老兵用自己私存的号码测试竟全部命中。
- **user_quote**: "Many similar tools require monthly subscriptions costing $100 or more." (rusty30, 5 tacos, 2026-08-03)
- **top_comments**:
  - [AppSumo 评论 cb8cfaec…, 5 tacos, 2026-08-04] "Great alternative for Apollo[g]"，但 "25 seems too little"（people search 额度）
  - [AppSumo 评论 conleec, 5 tacos, 2026-08-02] 拿私存电话号实测："Yes. Yes it diid. Which blew me away… the data scraping alone is worth the price"；也坦言 "a bit miraculous and bit frightening"
  - [AppSumo AI 汇总] 好评 "exceptional enrichment quality, accurate verification"；差评 "minor glitches and limited integrations beyond the main CRMs"
- **ai_opportunity**: 销售数据工具的订阅疲劳是明确买单动机；缺口在长尾 CRM/出海市场集成，以及「数据准确得可怕」引发的合规化包装机会（隐私合规版 enrichment）。

## 6. DM Champ：AI 客服/销售 Agent $59 LTD（原 $804），138 评论 4.88★——白标转售是最强购买动机
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/dm-champ/reviews/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: $59-$999 六档 LTD（对标原价 $804）；4.88★ / 138 评论（130 个五分）；browse 页 AI Agents 类目置顶，10 天后结束
- **description**: 多渠道（WhatsApp/Instagram/Messenger/网站）AI 对话 Agent，自动养熟线索并预约会议。买家最看重白标（做成代理商的经常性服务）；巴塞罗那语言学校主证实其能遵守加泰罗尼亚语/西语双语细节规则。真实抱怨：配置绝非五分钟之事，需多轮真实对话调试；AppSumo 汇总另提「setup confusing、outbound 消息受限」。
- **user_quote**: "Within the first hour, it had booked three meetings" (OrangeRobot, 5 tacos, 2026-07-31, 喂入 15 个此前无响应的广告线索)
- **top_comments**:
  - [AppSumo 评论 castellsimmerscom, 5 tacos, 2026-07-12] "this isn't a five-minute setup if you want it to actually reflect how your business runs"；另赞配置可批量导入导出："editing six separate text boxes one at a time gets old fast"
  - [AppSumo 评论 ozturk, 5 tacos, 2026-07-10] 白标让代理商能提供 "a real recurring service for clients"
  - [AppSumo AI 汇总] 差评主题："the setup being confusing and occasional limitations in outbound messaging"
- **ai_opportunity**: 两个可产品化缺口：(1) AI Agent 的 onboarding 自动化——从企业网站/历史对话自动生成人格/规则/流程六件套；(2) 面向代理商的白标 Agent 平台仍是 LTD 买家最强付费理由。注意：榜首好评含创始人引导放大（要求转发到 Skool 群），证据权重略降。

## 7. Letterly：语音转写 $89 LTD、353 评论 4.69★——「自动语言检测不准」是多语用户核心痛点
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/letterly/reviews/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: $89 LTD（原 $200）；4.69★ / 353 评论（295 五分、16 个≤2 分）；browse 页推荐位，15 天后结束
- **description**: 任意 App 内听写 + 会议录音 + 想法转文字。353 条评论是本批 LTD 里最大样本。好评集中在转写准确度与「不用口述标点」；最有价值的差评来自双语用户：自动语言检测会把英语误判成俄语，且只能手选单一语言，无法限定「我只说英语+阿拉伯语」的候选集。AppSumo 汇总另提 device licensing 抱怨。
- **user_quote**: "While auto language detect is convenient, it definitely is not accurate 100%… sometimes it detects that I speak Russian [while speaking English]… why not select multiple languages?" (ahmed5_27, 5 tacos, 2026-07-30)
- **top_comments**:
  - [AppSumo 评论 info6414, 5 tacos, 2026-07-13] "I don't have to constantly speak the punctuation I want… it works flawlessly in both English and German."
  - [AppSumo 评论 Linxs7, 5 tacos, 2026-07-16] 把别的 iPhone 应用录的会议重新转写："provided an excellent transcript with very accurate speaker recognition"（用于基金申请前理清会议内容）
  - [AppSumo 评论 twsisney, 5 tacos, 2026-07-06] "I especially love that I own it for life."（LTD 所有权本身即卖点）
- **ai_opportunity**: 语音输入的下一战场是多语混说场景：用户要的是「限定我的 2-3 种语言候选集」而非全球自动检测；code-switching（一句话内换语言）转写仍普遍薄弱。

## 8. AppSumo trending-AI 榜整体：137 个 AI deal，$39-$79 LTD 是主流定价带
- **type**: trend | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/collections/trending-ai/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 集合共 137 个 AI 产品；前 10 名价格全部落在 $39-$79；类目分布：写作×2、语音、社媒、票据解析、翻译/GEO、开发工具、销售×2、视频剪辑
- **description**: 榜单前 10 完整抓取：#1 Scribeist（$49，长文写作工作区，保留全项目上下文）、#2 Vocallab AI（$49，配音+声音克隆）、#3 RobinReach（$69，12 平台社媒自动化）、#4 DigiParser（$69，发票/收据结构化，"no templates required"）、#5 MultiLipi（$79，120+ 语言站点翻译，主打 AI 引用/GEO）、#6 Vexp（$49，本地依赖图喂 AI coding agent）、#7 Cleanlist AI、#8 Prompt Architects、#9 Dale（$69 原 $1,188，销售 demo 自动化）、#10 Reelify AI（$59，长视频切短视频，"no credit limits"）。
- **user_quote**: "no credit limits, no monthly caps" (Reelify AI 卖点原文——直击 AI 工具积分制的普遍反感)
- **top_comments**:
  - [榜单观察] #5 MultiLipi 的类目名就叫 "GEO & AI Search Optimization"——「被 AI 引用」已成独立产品类目
  - [榜单观察] #6 Vexp（"Builds a local dependency graph to feed context to AI coding agents"）说明「给 coding agent 喂上下文」已下沉到 $49 消费级工具
- **ai_opportunity**: 三条线索：GEO（AI 搜索优化）类目化=内容方新预算；「无积分限制」是对抗大厂 credit 模式的差异化定价武器；AI coding agent 的上下文供给工具开始平民化。

## 9. AppSumo browse 全站：366 个 deal，「AI Agents」已是独立类目且 DM Champ 居推荐位前列
- **type**: trend | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/browse/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 全站 366 个产品；推荐排序前列：TidyCal（4.36★/915 评论/$29）、RobinReach、Vocallab AI、DM Champ（AI Agents 类目）、Cleanlist AI、HeySummit、Rafter（Dev Utilities $39）、Letterly、Livid、SendFox
- **description**: 六大类目（Marketing/Sales & Leads/Media & Design/Operations/Build & Code/Customer Engagement）之外，产品级类目已出现 "AI Agents"、"AI Voice"、"Voice & Dictation"、"GEO & AI Search Optimization" 等 AI 细分。评论量最高的仍是老牌工具 TidyCal（915 条）和 SendFox（334 条），但评分（4.36/4.03）显著低于新 AI deal（普遍 4.7+）——新 AI 工具在小样本期口碑更好。
- **user_quote**: 
- **top_comments**:
  - [页面结构观察] 无 best-seller/trending 轮播，仅 "Recommended" 排序 + AppSumo Select 徽章承担质量信号
- **ai_opportunity**: AppSumo 类目演化是 SMB 付费意愿的先行指标："AI Agents" 成类目意味着 SMB 已接受为 Agent 单独付费；对独立开发者，$29-$99 LTD 上架仍是快速验证 SMB 需求的低成本通路。

## 10. DigiParser：票据/发票→结构化数据 $69 LTD，4.93★——「免模板」文档解析是会计场景硬需求
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/collections/trending-ai/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: $69 LTD（原 $232）；4.93★ / 15 评论；trending-ai 第 4；类目：Accounting；AppSumo Select
- **description**: 将发票、采购单、收据转成结构化数据，卖点 "no templates required"（对比传统 OCR 需逐格式配置模板）。评分为前 10 中最高（4.93），虽然样本小（15 条），但在 Accounting 这种保守类目冲进趋势榜第 4，说明 SMB 财务文档自动化的付费转化极顺。
- **user_quote**: "no templates required" (产品页卖点原文)
- **top_comments**:
  - [榜单对照] 同属「非结构化→结构化」的 nano-pdf 在 ClawHub 也有 118,872 下载——文档处理需求在消费端(LTD)与 Agent 生态两侧同时验证
- **ai_opportunity**: LLM 原生文档解析对模板式 OCR 的替代窗口仍开着；垂直票据类型（物流单、报关单、医疗账单）+ 本地化字段仍是空位。

## 11. Dale：$69 LTD 对标 $1,188 年费——「即时个性化产品 demo」进入 LTD 市场
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/collections/trending-ai/
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: $69 LTD（原价 $1,188，折扣深度 94%，为前 10 之最）；5★ / 8 评论；trending-ai 第 9；类目：Sales Outreach
- **description**: 在销售通话前给潜客提供即时个性化 demo 并标记购买意向。94% 的折扣深度说明该品类获客极难（愿用近乎白送换 LTD 用户与评论）；但「demo 自动化 + 意向捕捉」切中 PLG 销售流程里人力最贵的一环。
- **user_quote**: 
- **top_comments**:
  - [定价观察] 前 10 中原价最高（$1,188）折后最深（$69），是 LTD 平台「高客单 SaaS 用深折扣买分销」策略的典型样本
- **ai_opportunity**: AI 生成个性化 demo（按潜客所在行业/官网自动组装演示脚本与假数据）是销售自动化中尚未拥挤的切口；意向信号（谁看了 demo 哪一段）可独立成数据产品。
