# 03 — AppSumo + ClawHub 2026-07-29

> 组内信号：10 条 | 二手转述：0 条（0%）
> 最强证据线：AppSumo LTD 买家评论构成"付费意愿 + 功能缺口"双向证据——Vexp（$49，17 评）买家用真金白银为"AI coding agent 上下文膨胀/token 成本"投票（"reduced API cost by 30% in a week"），WorkLLM 则因"credits burn way, way, way too quickly"被直接退款；Letterly/Amical 的抱怨集中在按设备授权与平台功能不对等。渠道故障：ClawHub 首页/skills 列表页与 skill 详情页均为客户端渲染，WebFetch 只拿到站点骨架，改用其 banner 中公开的 `/api/v1/skills` 端点取到结构化记录（第一页 21 条，有 nextCursor）；首页 Trending 榜单本身抓取成功。未使用 WebSearch，全部为直接抓取。

---

## 1. Vexp：为 AI coding agent 做依赖图上下文裁剪，买家为"省 token"付费
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/vexp/reviews/
- **source_date**: 空（deal 页无launch日期，评论集中 2026-07-15 至 07-26） | **fetched_at**: 2026-07-29
- **metrics**: $49 LTD（原价 $100，51% off）；四档到 $399（原价 $3,600）；4.53 分 / 17 条评论（14×5 taco、1×4、1×2、1×1）；10k node 索引上限
- **description**: 本地构建代码库依赖图，给 VS Code / CLI 里的 AI coding agent 喂精确上下文，卖点是"架构理解而非盲目文本搜索"从而降低 token 消耗。17 条评论里买家反复用具体金额和规模描述痛点，说明"agent 上下文膨胀"已经从工程抱怨变成可计价的商品；同时暴露缺口：安装非点即用、文档滞后、按机器激活。
- **user_quote**: "AI agents usually choke on codebases of this scale"（dhiraj_shetty, 5 taco, Jul 18, 2026）
- **top_comments**:
  - [AppSumo review, tuk-wpmanic, 5 taco, Jul 15 2026] "Reduced API cost by 30% in a week." —— 归因于只把最相关信息放进上下文，并称"nearly paid for itself in just a few days"
  - [AppSumo review, dhiraj_shetty, 5 taco, Jul 18 2026] 对比现状工具："standard text-search tools that just blindly guess"，而 Vexp "doesn't just read code; it navigates it"、"pinpoints the exact, correct location for a change"
  - [AppSumo review, Fourscene, 4 taco, Jul 26 2026] "don't assume this will help you token-optimize for anything but coding projects" —— 他把工具指向通用项目文件夹结果一次性突破 10k node 上限，扣分理由是文档而非产品，修好靠"reading, trial, and error"
  - [AppSumo review, nathanro, 5 taco, Jul 23 2026] 直接买最高档，只因 token 花费是首要矛盾；要求改进多设备授权，称按机器激活"cumbersome"
  - [AppSumo review, bocaj, 5 taco, Jul 21 2026] "The process is not too complicated, but isn't point and click either."
- **ai_opportunity**: "Agent 上下文经济学"是可独立收费的一层：把依赖图/调用图检索 + 实时 token 节省仪表盘做成开箱即用（自动识别索引边界、按 repo 规模自动定档），并补齐团队级多机授权与零配置文档——买家已证明愿意为 30% API 成本下降付 $49~$399。

## 2. WorkLLM：多模型工作助手上线两天即因"credits 烧太快"被退款
- **type**: pain_point | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/workllm/reviews/
- **source_date**: 2026-07-28（两条评论均为该日） | **fetched_at**: 2026-07-29
- **metrics**: $79 LTD（原价 $240）→ 四档 $589（原价 $10,000）；3.5 分 / 2 条评论（1×4 taco、1×3 taco，无 5 分）；买家实测"约 200 credits 不到一小时耗尽"，认为"even 8K credits won't last more than a week or so"
- **description**: 主打"200+ 模型 + 组织级记忆 + 团队协作"的 AI 工作助手。仅两条评论就把 LTD 时代最致命的两个结构性问题摊开：credit 计量与真实使用强度严重脱节，以及集成功能未完工就开卖。首位买家已退款。
- **user_quote**: "the credits burn way, way, way too quickly"（Brad_D, 3 taco, Jul 28, 2026，已退款）
- **top_comments**:
  - [AppSumo review, Brad_D, 3 taco, Jul 28 2026] "makes it feel like they jumped the gun a little on the promotion here"；结论"I'd only recommend this for people who have light use cases"；同时肯定"Interface is clean and fairly intuitive"、"Projects, folders, and sub-folders make it easy to organize tasks"
  - [Founder reply, Dhimant_WorkLLM, Jul 28 2026] 承认集成缺口："fair feedback, and we'd rather be upfront"
  - [AppSumo review, RickxTwice, 4 taco, Jul 28 2026] "Has had some signup errors (so worries me on bugs)"；列出覆盖 GPT-5.6 Sol Pro / Grok 4.5 / Sonnet 5 / Gemini / Whisper Large V3，但"Seems to lack GPT images"；"Only gave it 4/5 rn as still testing it"
- **ai_opportunity**: 面向 AI 工具方的"用量计量与预算透明层"：实时把 credit 折算成任务数与美元、超支前预警、按任务类型显示单价。反向看，任何卖 LTD 的 AI 产品都需要"credit 真实寿命"预估器——买家退款的直接触发点是不可预测性而非价格。

---

## 3. Letterly：352 条评论的语音口述类目冠军，最大摩擦是"按设备授权"
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/letterly/reviews/
- **source_date**: 空（deal 无 launch 日期；引用评论 2026-07-02 至 07-16） | **fetched_at**: 2026-07-29
- **metrics**: $89 LTD（原价 $200，55% off），最高 10 codes $890；4.69 分 / 352 条评论（5 taco 294、4 taco 29、3 taco 13、2 taco 11、1 taco 5）；AppSumo Select
- **description**: 任意应用内口述 + 会议录音 + 想法速记转干净文本。352 条评论是本次抓取到的 AI 类目里评论量最大的一个，说明"语音转规范文字"已是被验证的高需求品类。差评集中在授权模型：一码一设备、网页与桌面端算两台设备、录音时长窗口约 15 分钟。
- **user_quote**: "It works better at actually correctly hearing what I said and then rewriting what I said than other tools I tried."（Nolan59, 5 taco, Jul 16, 2026）
- **top_comments**:
  - [AppSumo review, farhan853, 2 taco, Jul 2 2026] "1 code should work for 1 user across all devices. This isn't fair."；"Web and Deskop app are considered different devices. Why?"；"Even while recording, I think it only provides a 15-minute window."
  - [Founder reply, Maria_Letterly, Jul 2 2026] "Our AppSumo deal is device-base, so one code activates one device"（并引导多设备用户升到 Tier 3）
  - [AppSumo review, info6414, 5 taco, Jul 13 2026] "I don't have to constantly speak the punctuation I want"、"it works flawlessly in both English and German"
  - [AppSumo review, Linxs7, 5 taco, Jul 16 2026] 用它重跑别的工具搞坏的会议音频："it provided an excellent transcript with very accurate speaker recognition"
- **ai_opportunity**: 口述类工具的差异化已从"识别准"转向"授权与跨端连续性"：做 per-user 而非 per-device 授权、网页/桌面/移动同一身份、长录音无窗口限制，并把"说出标点"变成可学习的个人风格模型。

---

## 4. Amical：$49 对标 Wispr Flow，买家点名"比 Claude / ChatGPT 内置麦克风更准"
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/amical/reviews/
- **source_date**: 空（引用评论 2026-07-23 至 07-27） | **fetched_at**: 2026-07-29
- **metrics**: $49 LTD（原价 $180，约 73% off）→ 五档 $649（原价 $4,500）；4.68 分 / 94 条评论（5 taco 80、4 taco 5、3 taco 4、2 taco 3、1 taco 2）；支持 100+ 语言，本地或云端 AI
- **description**: 任意应用内语音转规范文本。评论提供了罕见的直接竞品价格锚点（Wispr Flow）与"AI 聊天入口语音质量不足"的证据。缺口清晰：Android 功能落后 Windows、iOS 仍是 TestFlight 私测、缺少上一句预览、标点/大写个性化不足。
- **user_quote**: "This rivals my experience with Wispr Flow for a fraction of the price."（273f596805eb…, 5 taco, Jul 23, 2026）
- **top_comments**:
  - [AppSumo review, 273f596805eb…, 5 taco, Jul 23 2026] "captures my voice so much better than the mic on Claude or ChatGPT"
  - [AppSumo review, kawabe, 5 taco, Jul 26 2026] 三年重度口述用户、试过多数竞品后结论："音声入力アプリのベストはこの「amical」です"
  - [AppSumo review, DiMoon, 5 taco, Jul 27 2026] "Die Transkription ist beeindruckend schnell und präzise"，但"Die Android-Version bietet zwar noch nicht ganz den Funktionsumfang der Windows-Version"
  - [AppSumo review, admin6262 (PLUS), 5 taco, Jul 25 2026] "the shortcuts are practical, and the AI formatting helps make voice input more usable"；提醒"the iOS app is currently in private beta through Apple TestFlight, not the regular App Store"
  - [AppSumo review, 1131187522885…, 4 taco, Jul 24 2026] "Werk very efficiently but preview of the last sentence is missing"
- **ai_opportunity**: 给 AI 聊天入口专用的语音层（浏览器扩展/系统级）——买家已明说主流 AI 应用自带录音质量不行；再叠加跨平台功能对等承诺与"上一句可见/可改"的编辑体感。

---

## 5. RobinReach：LTD 爆量后支持崩塌，一条 4-taco 差评写出完整功能缺口清单
- **type**: pain_point | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/robinreach/reviews/
- **source_date**: 空（引用评论 2026-07-25 至 07-27） | **fetched_at**: 2026-07-29
- **metrics**: $69 LTD（原价 $99，30% off）→ 四档 $719（原价 $998）；4.76 分 / 59 条评论（5 taco 52、4 taco 4、3 taco 1、1 taco 2）；页面宣称 12 平台，AI 摘要写 9 个；API 排期窗口仅 14 天
- **description**: 跨平台社媒自动化 + AI 内容生成 + MCP 集成。这条信号价值不在榜位而在那条列出 7 项具体缺陷的评论：YouTube 显示已连接但实际未加入、日历里重开帖子语言重置为英文、Threads 500 字符上限且 AI 改写报错、无自定义标签列表、API 只能排 14 天导致无法整月规划。创始人承认发货量超预期、工单积压。
- **user_quote**: "The foundation is very good and the project is ambitious, but it still has too many loose ends."（juanmaaranda, 4 taco, Jul 26, 2026）
- **top_comments**:
  - [AppSumo review, juanmaaranda, 4 taco, Jul 26 2026] "The main problem is their support."——邮件无人回、chat 走 tawk.to 无翻译、会话未解决就被关闭导致反复重述
  - [AppSumo review, devildogmarketplace, 5 taco, Jul 27 2026] "Great product, excellent team, and outstanding customer service. Highly recommended!"（称创始人 Shaher 手把手帮他配置 Claude AI 自动化）
  - [AppSumo review, daniel722, 5 taco, Jul 26 2026] "The API Is great and better then mentioned tools. Its all in the details."
  - [Founder reply, Shaher] 承认 AppSumo 上线量"exceeded our expectations"，正在处理大量工单
- **ai_opportunity**: 两个方向。一是"社媒发布可靠性校验器"：发布前后核对各平台真实连接状态与字数/格式限制并给出适配后文案（买家抱怨的正是"显示已连"但没连、AI 改写报错）。二是给 LTD 上线的团队做 AI 一线支持代理——爆量后支持塌方是 AppSumo 上反复出现的同一故障模式。

---

## 6. TaskMagic：4.48 分 / 200 评的自动化 LTD，17 条 1-taco 与"支持难触达"并存
- **type**: product_market | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/products/taskmagicai/reviews/
- **source_date**: 空（引用评论 2025-10-22 至 2026-07-24） | **fetched_at**: 2026-07-29
- **metrics**: $89 LTD（原价 $588，85% off）→ 七档 $2,499（原价 $5,238）；4.48 分 / 200 条评论（5 taco 164、4 taco 4、3 taco 13、2 taco 2、1 taco 17）；deal 3 天内结束；已被 Napkin Labs 收购并在 6 月上线 V2 重写版，老档位免费继承
- **description**: 浏览器录制式工作流自动化。评分分布是本组最"两极"的一个：164 个五分对 17 个一分，说明可用性达标但落地成功率高度依赖用户能力。共识短板是进阶工作流的学习曲线，以及支持渠道要先加社区才能拿到真实邮箱。
- **user_quote**: "TaskMagic stands out because it actually makes automation feel approachable."（basantkumar405, 5 taco, Jul 24, 2026）
- **top_comments**:
  - [AppSumo review, basantkumar405, 5 taco, Jul 24 2026] "there is definitely a bit of a learning curve when you want to build more advanced workflows"
  - [AppSumo review, Craig_FoxieWebDesign, 5 taco, Feb 25 2026] "It took me awhile to get through to Support"——需先加入社区才拿到可用支持地址；厂商回复承认这是"genuine friction, and it shouldn't take that to reach us"
  - [AppSumo review, Alqchemy, 5 taco, Nov 4 2025] "What used to take me hours now happens almost magically in the background"
  - [AppSumo review, konradd, 5 taco, Oct 22 2025] "It succeeds where others falter. Simple to understand, yet powerful."
- **ai_opportunity**: 自动化工具的真实缺口是"从意图到可用工作流"的最后一公里：用 agent 读用户描述直接生成并自测浏览器流程、失败时自我修复，把学习曲线从用户侧转移到模型侧。

---

## 7. AppSumo Trending AI 榜（138 款）：语音输入与"喂给 AI 的上下文"是两条最密集赛道
- **type**: trend | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/collections/trending-ai/
- **source_date**: 空（榜单快照，无单一内容日期） | **fetched_at**: 2026-07-29
- **metrics**: 该 collection 共 138 款产品；抓取到的 Recommended 排序前 11 名（含评分/评论数）：#1 Vocallab AI $49（原 $72）4.68/19，AI Voice；#2 RobinReach $69（$99）4.76/59，社媒管理；#3 Poppy AI $279（$649）4.89/149，AI 写作；#4 Letterly $89（$200）4.69/352，语音口述；#5 Vexp $49（$100）4.53/17，开发工具；#6 Hyprcore $69（$239.88）5.0/7，AI 会议记录；#7 DigiParser $69（$232）5.0/1，财务单据；#8 Amical $49（$180）4.68/94，语音口述；#9 Kortex $49（$99）3.80/10，数据报表；#10 Cleanlist AI $79（$104）4.67/66，销售外拓；#11 Inkfluence AI 3.89（价格截断），Books，标注"Price increases in 3 days"。★Select 徽章：Vocallab、Poppy、Letterly、DigiParser、Amical、Cleanlist、Inkfluence
- **description**: 前 11 名里有 3 款是语音输入/语音生成（Vocallab、Letterly、Amical），2 款是"把非结构化素材变成 AI 可用上下文"（Poppy AI 吃 YouTube/PDF/语音备忘，Vexp 吃代码库），另有 Hyprcore（会议 → 可搜索 AI wiki）与 DigiParser（单据 → 结构化数据）。评论量的量级差（352 / 149 / 94 vs 1 / 7）说明真实需求集中在语音与素材摄取，而财务/数据类新品尚未被验证。
- **user_quote**: 空（榜单页无用户评论；用户原声见本组 #1、#3、#4、#5、#6）
- **top_comments**:
  - [AppSumo 榜单页描述, Poppy AI] "Feed it YouTube clips, PDFs and voice notes; get on-brand scripts, posts and emails"
  - [AppSumo 榜单页描述, Vexp] 本地依赖图"feeds precise context to AI coding agents in VS Code/CLI"
  - [AppSumo 榜单页描述, Hyprcore] macOS 原生会议捕获与口述，产出"searchable AI wiki"
- **ai_opportunity**: 一条统一主线："输入端"生意比"生成端"更好卖——把用户已有的散乱素材（语音、会议、PDF、代码、单据）变成模型能直接吃的结构化上下文。缺口是跨类型统一：目前每种素材各买一个 LTD，没人做"一个上下文层管全部来源"。

---

## 8. AppSumo Browse（374 款）：Build & Code 与 Workflow Automation 成为独立主类目
- **type**: trend | **platform**: AppSumo | **secondhand**: false
- **source_url**: https://appsumo.com/browse/
- **source_date**: 空（市场快照） | **fetched_at**: 2026-07-29
- **metrics**: 全站 374 款在售；六大类目导航：Marketing / Sales & Leads / Media & Design / Operations / Build & Code / Customer Engagement；集合入口 New arrivals、Ending soon、Radar。可见清单：TaskMagic $89（$588）4.48/200；Vocallab AI $49 4.68/19；RobinReach $69 4.76/59；TidyCal $29（$144）4.35/912；Yorby $59（$199）5/1；HeySummit $99（$390）4.56/97；Latitude $69（$420）无评论；Opticks（Plus 独享）$69（$720）5/14；DigiParser $69（$232）5/1；UseArticle $49（$360）无评论；Hyprcore $69 5/7；WorkLLM $79（$240）3.5/2
- **description**: 类目结构本身是需求地图：AppSumo 把 Build & Code 提到与 Marketing 同级，说明开发者工具已成独立买家群。同时三款新品（Latitude、UseArticle、Yorby）零到一条评论，配合 14 小时/1 天/3 天的倒计时标签，反映 LTD 市场的稀缺性驱动节奏；TidyCal 以 912 条评论、$29 价位说明"低价高频工具"仍是评论量天花板。
- **user_quote**: 空（browse 页无用户评论）
- **top_comments**:
  - [AppSumo browse 页 badge] "Deal ends in 3 days" — TaskMagic（AppSumo Select）
  - [AppSumo browse 页 badge] "Early access ends in 14 hours" — Yorby
  - [AppSumo browse 页 badge] "Plus access ends in a day" — Opticks（AppSumo Plus Exclusive）
- **ai_opportunity**: 对独立开发者是发行情报：AI 相关新品密集集中在 Social Media Management 与 Workflow Automation（同一批新品里三款社媒），意味着这两条赛道已拥挤；Build & Code + Accounting/单据解析评论数极低但定价能到 $69~$79，是验证不足但定价空间存在的窗口。

---

## 9. ClawHub Trending：Agent 技能需求是"把日常 CLI 工具接进 agent"，而非新模型能力
- **type**: trend | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/
- **source_date**: 空（Trending 榜单快照） | **fetched_at**: 2026-07-29
- **metrics**: Trending 榜（每卡两个数字，表头为 "Skill / 24h installs"，页面未逐项标注，按显示原样记为 24h/累计）：#1 Sonoscli @steipete 568/7.1k；#2 Gog（Google Workspace CLI）@steipete 946/190k；#3 Github（gh CLI）@steipete 660/194k；#4 Weather @steipete 427/165k；#5 OpenAI Whisper（本地语音转文字）@steipete 337/86.5k；#6 Skill Creator @chindden 334/97.5k；#7 Notion @steipete 269/98k；#8 Obsidian @steipete 449/106k；#9 Gemini @steipete 57/35.9k；#10 Mcporter（管理 MCP server/tool）@steipete 198/68.5k；#11 Nano Banana Pro（Gemini 3 Pro Image 生图）@steipete 418/106k；#12 Model Usage（按模型统计用量，走 CodexBar CLI）@steipete 113/38.7k；#13 Video Frames（ffmpeg 抽帧）@steipete 133/55.1k；#14 Blogwatcher（RSS/Atom 监控）@steipete 75/43.9k；#15 Nano Pdf（自然语言改 PDF）@steipete 269/118k；#16 Session-logs（用 jq 搜自己的历史会话）@guogang1024 31/44.4k；#17 Himalaya（IMAP/SMTP 邮件 CLI）@lamelas 70/49.1k；#18 Sag（ElevenLabs TTS）@steipete 29/28k；#19 Goplaces（Google Places API）@steipete 31/23.9k；#20 Slack @steipete 160/50.9k。站内 banner 另显示 "30 skills 12 plugins"；每条记录 stars/comments 均为 0
- **description**: 前 20 名里 17 个出自同一作者 @steipete，且几乎全部是"给 agent 装一个已有 CLI"：Google Workspace、GitHub、Notion、Obsidian、Slack、邮件、ffmpeg、PDF、RSS。累计量最大的两个是 Github（194k）与 Gog（190k），说明 agent 生态的真实刚需是"读写我每天用的工具与数据"，而不是新的推理能力。另外两个信号很值得注意：Model Usage（按模型统计花费）和 Session-logs（搜索自己的历史会话）——即 agent 用户开始需要成本可观测性与记忆检索。生态高度集中在单一作者，且所有技能 stars/comments 为 0，说明质量信号与反馈机制缺失。
- **user_quote**: 空（ClawHub 各技能 stars/comments 均为 0，平台目前不暴露用户评论）
- **top_comments**:
  - [ClawHub skill 描述, Mcporter] "list, configure, auth, and call MCP servers/tools" —— MCP 自身的配置/鉴权已经复杂到需要一个技能来管
  - [ClawHub skill 描述, Model Usage] "summarize per-model usage"（经 CodexBar CLI），面向 Codex 等
  - [ClawHub skill 描述, Session-logs @guogang1024] "Search and analyze your own session logs (older/parent conversations) using jq"
- **ai_opportunity**: 三个空位。一是"agent 技能质量层"：平台无评分无评论，装机量 190k 却没有可靠的可信度/兼容性信号，做审计与回归测试即价值。二是 agent 成本可观测性（Model Usage 这类需求已冒头但仍是脚本级）。三是 agent 长期记忆检索——用户在用 jq 手搓翻历史会话，说明"跨会话记忆"仍未被产品化。

---

## 10. ClawHub API 首页记录：垂直合规/行业类技能在无榜位情况下已积累真实下载
- **type**: product_market | **platform**: ClawHub | **secondhand**: false
- **source_url**: https://clawhub.ai/api/v1/skills
- **source_date**: 空（注册表快照；单条记录 created 日期见下） | **fetched_at**: 2026-07-29
- **metrics**: 第一页 21 条记录（含 nextCursor，仍有更多）。下载量前列：DCC-MCP Skills Creator 4,964 下载 / 53 安装（created 2026-05-25）；DCC-MCP Creator 4,216 / 52（2026-05-25）；eKYC Suite 1,746 / 17（2026-03-30）；DCC-MCP 925 / 0（2026-07-17）；search1api 725 / 21（2026-03-13）；eKYC Document OCR 503、Face Compare 501、Media Labeling 485、AI Guardian 476（均 created 2026-07-16）；agent-easy-http 211（2026-07-14）；flyelep-generate-kits 27（2026-07-21）。7 月 29 日新建的一批"专业版"技能（Token经济学家、集群编码器、Soul Decision Engine、Solo Workflow Engine、Smart Update Agent、Quick Context Saver、提示词架构师、Amazon 卖家指南针、sec-guidance、软考论文辅助）下载量全为 0。全部记录 stars/comments = 0
- **description**: 首页 Trending 只显示英文通用工具，但 API 暴露出另一层真实结构：下载量最高的是 DCC-MCP 系列（Maya/Blender/Houdini/Unreal 的 agent 适配器脚手架，近 5k 下载）与 eKYC 合规套件（人脸比对、活体/深伪检测、证件 OCR、影像风险标注，主套件 1.7k 下载）。即 agent 生态的付费级需求正在向"影视/3D 生产管线"和"身份合规"两个垂直行业沉降。同时大量 7-29 新发布的中文"专业版"技能零下载，显示供给端已在抢跑但需求未被验证。
- **user_quote**: 空（平台无评论字段，所有 comments/stars 为 0）
- **top_comments**:
  - [ClawHub API skill 描述, DCC-MCP Skills Creator] 脚手架化、校验并 review DCC-MCP 技能包（SKILL.md、tools.yaml、scripts、prompts）
  - [ClawHub API skill 描述, eKYC Suite AI Guardian] 图片与视频活体检测，覆盖回放攻击、伪造媒体与 deepfake 风险筛查
  - [ClawHub API skill 描述, agent-easy-http] 把 OpenClaw agent 能力以 REST API 暴露，带 API-key 鉴权与 deny-list 过滤
- **ai_opportunity**: 两个方向。一是"agent × 垂直生产管线"——DCC-MCP 近 5k 下载证明 3D/影视工具链接入 agent 有真实需求，同类空白还有 CAD、EDA、GIS、医学影像。二是"agent 能力对外服务化"：agent-easy-http 说明开发者想把 agent 技能当 API 卖，但鉴权、限流、计费、审计仍需自建——这正是一个可独立收费的中间层（与 #2 WorkLLM 的计量痛点同源）。

