# 02 — Product Hunt 四档榜单 + Review 深挖 2026-08-05

> 组内信号：12 条 | 二手转述：0 条（0%）
> 最强证据线：8/4 日榜与周榜双料第一 Hey Noah + 月榜第二 Zinley 的评论区呈现同一结构——「AI 代表我行动」类产品的用户追问全部集中在信任/核验/纠错率而非功能（Asad M. 两处出现追问准确率）；四档榜单对比显示「AI 执行代理（EA/邮件/电话/云端 agent）」是当周最强新兴类目，而年榜由社媒发布工具与 Claude Cowork 等占据。8/5 当日日榜「No launch data found」（页面存在但无数据），已按指引回退抓 8/4 日榜。所有榜单页与评论页均为直接抓取，无搜索渠道故障。

## 四档榜单横向对比（趋势判读）

- **日榜 8/4**：Hey Noah(493)、Wondering(315)、Atlaso(211)、Dashi Metrics(199)、Driven(198)、Vibe Buddy(146)、Screen Awesome(126)、ZapDigits MCP(120)、VIDEO AI ME(112)、GrowthBook 5.0(111)
- **周榜 W32**：Hey Noah(492)、AgentSky(472)、Ctruh Studio(428)、Airtop Google Ads(317)、Wondering(315)、Qwen3.8-Max(303)、Appllama(228)、Plethora(214)、Atlaso(211)、Dashi Metrics(200)
- **月榜 2026-08**：AgentSky(472)、Zinley(418)、Ctruh Studio(428)、Capptivo(372)、DeepSeek-V4-Flash-0731(347)、NudgeForMe(336)、Airtop(317)、Qwen3.8-Max(303)、Port22(270)、YourSitee(247)
- **年榜 2026**：PostSyncer(812)、Mom Clock(765)、Cowork/Claude(1121 现分)、Livedocs(487)、MiroMiro(531)、Atlas.new(536)、2-b.ai(429)、Joodle(428)、ChatGPT Health(428)、SEORCE(397)
- **跨档持续**：Hey Noah、Wondering、Atlaso、Dashi Metrics（日+周）；AgentSky、Ctruh Studio、Airtop、Qwen3.8-Max（周+月）。周/月榜 7-8 成产品带 AI 标签；年榜幸存者更多是「内容发布/习惯/设计工具」而非本周爆发的「AI 代理执行」类——后者是新兴类目，尚未证明年度耐久性。
- **模型发布直接上榜**：Qwen3.8-Max（周6/月8）、DeepSeek-V4-Flash-0731（月5，「Frontier agent intelligence at Flash prices」）——大模型发布本身已成 PH 常驻信号。

---

## 1. Hey Noah — 「人人可用的 Fortune 500 EA」登顶日榜+周榜，评论区全在拷问信任与纠错率
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/hey-noah
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-05
- **metrics**: 493 votes / 90 comments（日榜#1 + 周榜#1）；5.0 星（2 评论）；1K followers；beta 期发送约 17,000 次会议邮件；定价 Free 30-day trial no credit card
- **description**: 主动式 AI 行政助理：追未回复者、确认订座、会前 Granola 简报、短信提醒。创始人 Ashish Toshniwal 称其为「a Chief of Staff in your pocket」，14 年 bootstrap 出 $100M 营收公司、8 人团队。评论区最高密度的不是功能问题而是信任问题：准确率、披露 AI 身份、cc 抄送是否把用户变成审核员。
- **user_quote**: "first AI platform I've used where I feel like I'm talking to a human. Most people whom I schedule with don't realize Noah is AI... Basically, it's like a Fortune 500 EA for everyone." — Eric Bahn（review，使用数月）
- **top_comments**:
  - [launch 评论 Asad M.] "17,000 is volume, not accuracy."（并指出 cc 抄送 "turns me into the reviewer" — 被委托的正是这份工作；maker 拒绝给出纠错率数字，称 "correct" 难以定义）
  - [launch 评论 CTO Ryan Brandt] beta 期每封外发邮件由 ops lead 人工把关，判定结果沉淀成 Braintrust eval set，直到她不再改动才撤掉人工闸门："A system that fails in old ways is broken."
  - [launch 评论 You Li] 客户事后发现是 AI 的后果比漏跟进更糟——把「别人以为 Noah 是真人」读作警讯而非胜利，建议加签名披露行
  - [review Eric Bahn 缺口] "I want it to write emails for me, from my account!"（外发邮件仍从 Noah 自有地址发出）；另一 reviewer 求 iOS app/widget
- **ai_opportunity**: 三个可攻缺口：(1) AI 代理「纠错率/行动审计」独立核验层——maker 答不出的 correction rate 正是买家要的（与近期多渠道「Agent 动作真实性核验」同构）；(2) AI 身份披露合规组件（签名行、通话开场白、审计留痕）做成嵌入式 SDK；(3) 从用户自己邮箱发信的授权+回滚机制。

## 2. Zinley — AI「第二个你」接电话回邮件，108 条评论三人独立追问身份核验，maker 承认无带外验证
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/zinley
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 418 votes / 108 comments（月榜#2，本组评论量最高）；673 followers；0 星级评论；免费层 10 credits
- **description**: 有自己电话号码和邮箱的 AI 个人代表："Not another chatbot. A second you that shows up."评论区被信任问题主导：Dayan、Kočica、Acheampong 三人独立追问身份验证而非功能，两处追问后 maker 回答仍不完全令人满意。未解决项：带外身份验证、关系图谱导出（"'take my graph and leave' isn't as clean as it should be yet"——maker 原话）。
- **user_quote**: "the risk sits in what it claims about you, not in what it does... the wrong answer never sounds wrong." — Jernej Jan Kočica
- **top_comments**:
  - [launch 评论 Gal Dayan] 来电显示与发件地址 "both are trivially spoofable"；追问后仍称回答 "covers content-level weirdness, but doesn't quite answer the identity question"
  - [launch 评论 Naved Naik] 计费颗粒度实测：开新话题 1.58 credits vs 复杂追问 0.56，"~2.8× a real question"，免费层 "~6 fresh conversations before the wall"；maker 承认 ~3x 是 "smell"
  - [launch 评论 Richard Acheampong] 求通话录音同意披露、邮箱单点失陷风险、"what guardrails/audit trail exist for irreversible actions?"
  - [launch 评论 Ansari Adin] "where does that data live, who can access it, and what happens to it if you cancel the subscription or the company shuts down?"
- **ai_opportunity**: (1) AI 代理带外身份验证协议/服务（无人解决、被三人独立追问）；(2) 个人 AI「记忆图谱可携带」标准与导出工具；(3) agent 计费透明化——按上下文冷启动收费的定价审计器。

## 3. AgentSky — 「任意 harness 任意 LLM」云托管 agent 登月榜第一，唯一 review 直指成本黑箱
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/agentsky/reviews
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 472 votes / 60 comments（周榜#2、月榜#1）；5.0 星（1 review）；~780 followers；按用量计费
- **description**: 云端按需托管编码/工作 agent，不锁定单一 runtime。Reviewer 弃自托管的理由是 "didn't want to manage the sandboxing and uptime"——托管便利+运行时自由是买点；可观测性是缺口。月榜登顶说明「agent 基础设施」已从开发者玩具变成正式类目（AI Infrastructure Tools）。
- **user_quote**: "a bit of a black box until the bill shows up." — Omri Ben-Shoham（唯一 review，主要不满）
- **top_comments**:
  - [review Omri Ben-Shoham] 赞 "solid pick-your-harness infra"、"not locked to one agent runtime"、"it plays nicely with existing workflows over chat"
  - [review Omri Ben-Shoham 诉求] "some kind of live status or running-cost indicator per agent"
- **ai_opportunity**: agent 运行成本实时观测/告警面板（跨 AgentSky/自托管/API 直连），或做成开源 sidecar——「账单到了才知道」是托管 agent 的普遍痛点。

## 4. NudgeForMe — AI 邮件跟进代理：draft-first 获赞，但「精准率就是整个产品」
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/nudgeforme
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 336 votes / 66 comments（月榜#6，日榜曾#1）；880 followers；launch 特惠 2 个月免费
- **description**: 扫描已发邮件找「对方该回没回」的线程并起草跟进。评论区共识：草稿优先模式建立信任，但如果用户要当过滤器，产品就失败——检出精准率、语气模仿、意图识别（有些沉默是故意的）是三大关卡。
- **user_quote**: "Draft mode is the right default, and it also makes precision the entire product... two right nudges a week beats fifteen maybes." — Asad M.
- **top_comments**:
  - [launch 评论 Rabnoor Singh] "The moment I have to be the filter, the good ones inherit the cost of the bad ones."
  - [launch 评论 Irene Tomaini] "I really like the 'draft-first' approach. It feels much more trustworthy than automatically sending follow-ups."（并问如何排除故意沉默的线程）
  - [launch 评论 swati paliwal] 问 "how much can it learn my voice over time like tone, phrasing, level of warmth/formality"
  - [launch 评论 Gal Dayan + maker 回复] 隐私追问；maker："We do not use customer emails to train our models"，不留全量 sent folder 副本
- **ai_opportunity**: 「跟进意图判别」垂直模型/评测集（区分 ghosting vs 有意收尾）；个人写作语气克隆微调服务；draft-sent 转化率作为北极星指标的 agent 精准度仪表盘。

## 5. Atlaso — 「所有 AI 共用一份记忆」日榜#3+周榜#9，LLM Memory 成正式类目
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/atlaso/reviews
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-05
- **metrics**: 211 votes / 25 comments（日榜#3、周榜#9）；319 followers；暂无 review；Free to start
- **description**: 一次接入让 Claude Code、Cursor、Codex、ChatGPT 共享用户上下文，卖点是免去 "re-explaining yourself at the start of every session"。PH 已设 LLM Memory 类目，同类在售：Second Brain for AI、Byterover、Mengram、Glia——跨工具记忆层赛道拥挤化，与 Zinley 的「图谱导出」缺口同一主题。
- **user_quote**: （无 review；产品定位语）"One memory for every AI you use"
- **top_comments**: （评论区未抓到可引用内容；review 页为空）
- **ai_opportunity**: 记忆层赛道差异化机会在「可携带/可审计」而非「又一个存储」：开放格式的个人上下文包（类似 vCard for AI memory），或记忆冲突/污染检测工具。

## 6. Ctruh Studio — 无代码 3D/XR 创作周榜#3，「上手易」是赢点、「生成后精修」是缺口
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/ctruh-studio/reviews
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 428 votes / 93 comments（周榜#3、月榜#3）；5.0 星（1 review）；~1.2K followers
- **description**: AI 生成互动 3D/XR 体验、免编程。唯一 review 清晰劈开一条轴线：低门槛生成是价值，生成后的控制深度是缺口——与所有 AI 创作工具的共同病灶一致（AI 出初稿容易、精修难）。竞品 Spline(4.6/31)、Meshy(4.9/21) review 量都更大。
- **user_quote**: "makes XR and 3D content creation feel much more approachable... [but creators] often need more flexibility to refine details, adjust elements. More advanced editing capabilities and workflow flexibility would make the platform even more powerful." — Laurent Wong（review）
- **top_comments**: （review 仅 1 条，已全文引用）
- **ai_opportunity**: 「AI 生成 → 专业工具精修」的桥接层：3D 场景导出为可编辑格式（Blender/USD）+ 局部重生成（inpainting for 3D）。

## 7. Capptivo — 免费开源录屏+demo 编辑器月榜#4：local-first、无账号、无订阅对垒 Screen Studio
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/capptivo/reviews
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 372 votes / 59 comments（月榜#4，日榜曾#2）；561 followers；GitHub: SECHAK-AG/capptivo；暂无 review
- **description**: macOS/Windows/Linux 三平台，follow-cursor zooms + 端上字幕，明确对标付费订阅制的 Screen Studio(4.9/179 reviews)/Loom(4.8/162)。与同日日榜 Screen Awesome（"the free screen recorder that CANNOT upload your video"，126 votes）呼应——「隐私/本地/免订阅」正成为录屏品类的新竞争轴。
- **user_quote**: （无 review；定位语）"Free open-source screen recorder & demo editor" — local-first, no-account, no-subscription
- **top_comments**: （review 页为空；同类信号见日榜 Screen Awesome 卖点原文 "The free screen recorder that cannot upload your video"）
- **ai_opportunity**: 开源录屏内核 + 付费 AI 层（自动 zoom 脚本、demo 旁白生成、多语字幕）是干净的 open-core 变现路径；订阅疲劳型买家已被验证。

## 8. Port22 — 手机远程操控 Mac 上的 Claude Code/Codex：agent 「等人批准」是被验证的痛点
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/port22/reviews
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 270 votes / 33 comments（月榜#9）；354 followers；免费层 1 Mac / 2 sessions；暂无 review
- **description**: 把 Mac 上所有 coding agent 会话映射到手机，显示哪个在跑、哪个卡住，手机震动后直接点按 agent 给出的真实选项。Maker 痛点自述：agent 长任务 "spent 20 minutes waiting on me to approve one file edit"。竞品已成小生态：Conductor(5.0/17)、Superset(5.0/6)、CodeMote、Remodex、MobileCLI——「agent 会话移动端监控」已是可数的品类。
- **user_quote**: （maker 自述痛点）"spent 20 minutes waiting on me to approve one file edit... [tap] the actual option it offered, not a guessed keystroke. No wrapper, no config, no new terminal."
- **top_comments**: （review 页为空）
- **ai_opportunity**: agent 审批移动化之外的下一步：审批策略引擎（按可逆性自动放行低风险操作，正是 Hey Noah 评论区 Chad Smith 提的「以可逆性而非模型置信度划权限」）。

## 9. Qwen3.8-Max 与 DeepSeek-V4-Flash-0731 — 中国模型发布双双挂上 PH 周/月榜
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/8
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: Qwen3.8-Max 303 votes / 3 comments（周榜#6、月榜#8）；DeepSeek-V4-Flash-0731 347 votes / 10 comments（月榜#5，tagline "Frontier agent intelligence at Flash prices"）
- **description**: 两个中国基础模型发布同时进入 PH 月榜前十，评论极少（3 条/10 条）但票数高——投票来自认知度而非讨论，模型发布已是 PH 常驻信号类型。DeepSeek 定位语强调「agent 智能 + Flash 价格」，延续低价 agent 推理的竞争线。
- **user_quote**: （tagline）"Frontier agent intelligence at Flash prices" — DeepSeek-V4-Flash-0731
- **top_comments**: （高票低评论，无可引用讨论）
- **ai_opportunity**: 模型快速更替期的常青工具：跨模型 agent 回归测试/性价比路由（新模型上线当天自动跑用户自己的 eval 集）。

## 10. Wondering — 「Duolingo for learning anything」日榜#2：AI 通识微学习获 YC 背书
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/wondering-2/reviews
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-05
- **metrics**: 315 votes / 35 comments（日榜#2、周榜#5）；436 followers；YC-backed；暂无 review
- **description**: 个性化短课+可视化+播客+互动练习，把任意主题游戏化。同类基准：Learn.xyz(4.9/15)、Mini Course Generator(4.7/15)、TutorAI(4.5/2)。「Duolingo for X」范式在 AI 生成内容加持下重启。
- **user_quote**: （listing 定位语）"the most delightful way to break down complex topics... a thoughtful tutor beside you"
- **top_comments**: （review 页为空）
- **ai_opportunity**: 垂直领域「Duolingo for X」仍有空位（合规培训、行业证照、企业内训）；AI 生成课程的留存/记忆曲线数据是差异化壁垒。

## 11. 年榜横切 — 2026 全年耐久需求：社媒发布、习惯问责、Claude Cowork、健康 AI
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 年榜前十：PostSyncer 812（1/5 发布，日/周双冠）、Mom Clock 765、Cowork(Claude) 现分 1121、Livedocs 487、MiroMiro 531、Atlas.new 536、2-b.ai 429、Joodle 428、ChatGPT Health 428、SEORCE 397 votes/209 comments
- **description**: 年榜与本周榜单对比揭示的耐久 vs 新兴分界：耐久=内容发布工具（PostSyncer）、情感化习惯问责（Mom Clock "You said you'd do it. So why didn't you?"）、平台级 AI（Cowork、ChatGPT Health）、GEO/AI 搜索优化（SEORCE，209 评论为年榜最高讨论量）；新兴（仅日/周/月）=AI 执行代理（EA/电话/邮件跟进）、agent 基础设施、LLM 记忆层。SEORCE 高评论量佐证「品牌在 AI 搜索中的可见性」是持续升温的付费焦虑。
- **user_quote**: （tagline）"You said you'd do it. So why didn't you?" — Mom Clock（765 votes，情感化问责定位）
- **top_comments**: （榜单快照页无评论区）
- **ai_opportunity**: GEO（AI 搜索引擎优化）工具年榜验证付费意愿；「新兴 agent 执行类」一年后是否登年榜是关键跟踪指标——现在入场做 agent 信任基础设施踩在类目爆发前沿。

## 12. 跨产品同构 — 「AI 代表我行动」类产品的评论区问题清单高度一致：信任基础设施缺位
- **type**: pain_point | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/hey-noah
- **source_date**: | **fetched_at**: 2026-08-05
- **metrics**: 三个产品（Hey Noah 90 评论、Zinley 108 评论、NudgeForMe 66 评论）共 264 条评论中，信任/核验/精准类追问占据高赞位；同一评论者 Asad M. 在两个产品下追问准确率、Gal Dayan 在两个产品下追问数据留存
- **description**: 8/4-8/5 PH 头部的三款「AI 替你外发沟通」产品，评论区问题清单几乎逐条重合：(1) 纠错率/精准率无人敢公布数字；(2) AI 身份披露（对方不知道在跟 AI 说话是风险不是卖点）；(3) 不可逆操作的审计留痕与按可逆性分级授权；(4) 数据留存/可携带（"take my graph and leave"）；(5) 用户被迫当过滤器则产品失败。这是一份现成的品类级需求规格书。
- **user_quote**: "Draft mode is the right default, and it also makes precision the entire product." — Asad M.（NudgeForMe 评论，同人亦在 Hey Noah 下追问 "17,000 is volume, not accuracy"）
- **top_comments**:
  - [Hey Noah 评论 Chad Smith] 建议权限边界按「可逆性」而非模型置信度划分——不可逆操作永远先问
  - [Zinley 评论 Jernej Jan Kočica] "the wrong answer never sounds wrong."
  - [Zinley maker 承认] "'take my graph and leave' isn't as clean as it should be yet."
- **ai_opportunity**: 独立的「agent 信任层」产品线：行动审计日志即服务、AI 披露合规组件、按可逆性分级的审批策略引擎、纠错率第三方评测/认证——每一条都被 264 条真实评论反复要价。
