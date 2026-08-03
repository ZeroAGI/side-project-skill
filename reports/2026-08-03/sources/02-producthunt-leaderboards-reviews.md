# 02 — Product Hunt 四档榜单 + Review 深挖 2026-08-03

> 组内信号：12 条 | 二手转述：0 条（0%）
> 最强证据线：日榜前列（Zinley/Capptivo/Lumichats/NudgeForMe/Port22）的 launch 评论区极高密度——用户对 AI agent 的信任边界（身份验证、diff 可见性、误报率、回滚）提出可直接产品化的缺口清单。渠道故障：2026-08-03 当日榜与 2026/32 周榜均为空（"No launch data found"，周日+当周未开始），已按指示回退到 08-02 日榜与 2026/31 周榜；未使用 WebSearch，全部为直接抓取一手数据。

## 榜单跨时间尺度对比（趋势判断）

- **日榜 (08-02)**：Zinley(AI 个人代表, 336/91) > Capptivo(开源录屏, 278/41) > YourSitee(bio link, 197/26) > Lumichats(免终端 Claude Code, 179/31) > Zen Whisper(本地听写, 133/17)。前 10 中 6 个直接绑定 Claude Code/Codex 生态（Lumichats、Termexo、Zen Whisper、FreqWave 外）。
- **周榜 (2026/31)**：Prelint(AI 代码防漂移, 631/134) > Prefactor(agent 实时评估, 627/191) > SKI(语音编程, 621/320) > Adomate(AI 广告, 573/109) > Memmy(跨 AI 共享记忆, 562/211)。前 10 有 8 个 AI 工具，其中 4 个是"AI 的 AI 工具"（评估/记忆/防漂移/语音入口）。
- **月榜 (2026/8, 仅 2 天数据)**：NudgeForMe(邮件跟进 agent) > DeepSeek-V4-Flash > Port22(手机上控 Claude Code) > AgentMicro(菜单栏 Codex 状态) > Yamanote 3D。前 7 中 4 个是"coding agent 周边配件"。
- **年榜 (2026)**：PostSyncer(AI 社媒发布) > Mom Clock > Cowork(Claude 数字同事) > Livedocs > MiroMiro。年榜以横向 AI 应用为主。
- **持续 vs 新兴**：跨尺度存活的品类 = AI coding agent 生态（日/周/月/年四档都有：Lumichats/Termexo → SKI → Port22/AgentMicro → Cowork）与 AI 内容营销（Adomate → PostSyncer/SEORCE）。仅日/周出现的新兴品类 = **agent 评估与观测（Prefactor/Cekura/Prelint）**、**LLM 共享记忆（Memmy）**、**GEO 工具（AI Search Console/SEORCE，周榜+年榜两档出现，正从新兴转持久）**、**语音编程入口（SKI/Zen Whisper/Bolcho 同周三款语音产品）**。
- **Review 深挖普遍发现**：新品 review 区几乎全空（Zinley/Capptivo/SKI/Prefactor/Memmy/NudgeForMe/PostSyncer/SEORCE 均 0 review），真正的用户声音在 launch 评论区；本组据此把深挖重心放在评论区。

---

## 1. Zinley — "AI 个人代表"日榜第一，评论区集中拷问信任边界
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/zinley
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-03
- **metrics**: 日榜 #1，336 分，91 评论，524 followers，0 review；Free options；Built with Claude/Gemini/Twilio
- **description**: "Your Personal AI Representative for calls, email, and tasks"——有自己电话号码和邮箱的 AI 分身（"Not another chatbot. A second you that shows up."）。评论区不是欢呼而是一份安全审查清单：身份伪造、AI 披露合规、不可逆动作审计、"它替你说错话"的风险。说明个人 AI 代表品类需求已被验证，但信任基建是最大未解缺口。
- **user_quote**: "the risk sits in what it claims about you, not in what it does… the wrong answer never sounds wrong" — Jernej Jan Kočica
- **top_comments**:
  - [launch 评论 Gal Dayan] caller ID 与发件地址 "trivially spoofable"，追问是否有 "any out-of-band verification" 还是信任仍归结为存储联系人匹配；对 maker 回复再追击 "doesn't quite answer the identity question"
  - [launch 评论 Aidan Quinn] "the interruption tax is worse than the work itself"（愿先交出邮件分诊/排期）；"The phone number part is bolder and honestly where I'd wait."
  - [launch 评论 Raffay Sajjad] 提醒美国已有州要求 AI 电话代理主动披露身份，"cuts both ways"，建议 launch 前给出明确答案
- **ai_opportunity**: AI agent 的"身份与信任层"是独立产品机会：out-of-band 验证、AI 通话披露合规检查、agent 行为审计日志——每个做 AI 分身/语音 agent 的团队都被评论区问到同一组问题。

## 2. Capptivo — 开源免费打 Screen Studio 的 $29/月，launch 当天 bug 反馈即产品路线图
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/capptivo
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-03
- **metrics**: 日榜 #2，278 分，41 评论，384 followers；MIT 开源，本地录制无账号；对标 Screen Studio(4.9/178 reviews)、Loom(4.8/162)
- **description**: 免费开源跨平台录屏+demo 编辑器（Tauri+FFmpeg+React），maker 定位 "No more paying $29/month just to ship a clean product video"。评论区暴露开源桌面工具的经典缺口：代码签名（MDM 环境拦截）、Windows 导出编码错误、face-cam 黑框。可持续性问题（$99/年 Apple 开发者费）被当场讨论。
- **user_quote**: "No more paying $29/month just to ship a clean product video." — maker abdessamad
- **top_comments**:
  - [launch 评论 Alex Lombry] "having it signed is very important, especially for MDM-managed macOS computers."
  - [launch 评论 Alireza Moqadam] Windows 11 导出报 "EncodingError: Decoding error"，自选背景 "ends up rendering as a solid black background instead"
  - [launch 评论 Gal Dayan] "respect for open-sourcing this instead of just underpricing Screen Studio."（并追问 $99/年苹果费用的赞助模式）
- **ai_opportunity**: 录屏→demo 的差异化点已从"录"转向"编"：本地转写字幕（Berkay: "The on-device captions are the thing I'd actually use here"）与 9:16 裁切适配是被点名的价值点；围绕开源录屏做 AI 自动剪辑/字幕/多比例导出插件层是低摩擦切入。

## 3. SKI — 语音编程周榜第三、评论量全周最高（320），"语音 x coding agent"入口卡位
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/ski
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 周榜(2026/31) #3，621 分，320 评论（全周最高），1.3K followers，0 review；免费（"free for life"），全本地运行；Mac M 系列 + Windows，Linux "launching soon"
- **description**: "Free voice coding for Claude Code, Codex and more"——不是听写而是闭环（"It's not dictation; it closes the loop"，agent 会语音回答你）。同一周榜出现 SKI、Zen Whisper、Bolcho 三款语音产品，日榜另有 Zen Whisper——语音正在成为 coding agent 的第二输入入口。320 条评论对 621 分的超高评论/票比说明讨论热度远超投票。
- **user_quote**: "Everything runs on your machine (local speech in, local voice out)" — maker 页面
- **top_comments**:
  - [maker AMA] 预判的最高频问题："How does it stay fully local what actually runs on-device?"（本地性是该品类的首要用户关切）
  - [页面定位] "It's not dictation; it closes the loop"
- **ai_opportunity**: 语音 x agent 的交互层空白：现有对手（Wispr Flow 4.7/73、superwhisper 4.9/21）只做听写不做闭环。可攻方向：语音审批 agent 动作、语音查询 agent 状态、离线语音 agent 控制台——与信号 8（Port22 手机审批）合流成"离开键盘控制 agent"趋势。

## 4. Prefactor + Cekura + Prelint — agent 评估/观测占周榜前十 3 席，"AI 的质检层"成新品类
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/weekly/2026/31
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: Prelint 周榜 #1（631 分/134 评论）、Prefactor #2（627/191）、Cekura #10（413/81）；Prefactor 对标 Langfuse(5.0/47 reviews)
- **description**: 周榜前十中三款产品做同一件事的不同切面：Prelint 防 AI 写码时的"产品漂移"（对齐 ADR 架构决策）、Prefactor 实时评估已部署 agent（"quality regressions and drift as they happen"）、Cekura 做语音 agent 的自我改进循环。共同叙事：agent 上线后表现与评估时脱节，需要持续质检。这是本周最清晰的新兴品类信号。
- **user_quote**: "Evaluate your AI Agents in real-time… the evaluation layer that closes the gap" — Prefactor 页面定位
- **top_comments**:
  - [Prelint review, Michał Ochman] 擅长 "catching product decisions our coding agents were making and aligning them with ADRs"；缺口："The team promised us new interfaces that our product team could use to interact with the decision graph"——今天 "it mostly works with pull requests and CLI"
  - [Prelint review, Michał Ochman] 与竞品分工："Greptile flags technical errors and prelint provides more human-readable product feedback."
- **ai_opportunity**: 评估层的下一个缺口已被 review 点名：面向非开发者（产品经理）的 agent 决策图谱界面。做"产品团队能看懂的 agent 行为审计面板"，与 CLI 工具互补而非竞争。

## 5. Memmy Agent — 跨 AI 工具共享记忆，周榜 #5，开源+本地优先
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/memmy
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 周榜(2026/31) #5，562 分，211 评论；日榜曾 #2；993 followers，0 review；免费+开源（github.com/MemTensor/memmy-agent），送 2M ChatGPT tokens
- **description**: "Let every AI remember the same you."——个人记忆中枢+本地 agent，让 Claude Code、Codex、OpenClaw、Hermes 共享同一份用户记忆（决策、偏好、进度）。"Local-first by default"。多 agent 并用成为常态后，记忆碎片化是被明确定价的痛点；211 条评论热度佐证。类别页里 LLM Memory 已是正式品类。
- **user_quote**: "a personal memory hub and local AI agent… they all remember the same you" — 产品定位
- **top_comments**:
  - [产品页] "Local-first by default"，记忆 "stay under your control: manage them anytime"
- **ai_opportunity**: 记忆互操作层刚起步：跨工具记忆的导入导出格式、记忆审计（AI 记了我什么）、团队级共享记忆（个人版之后的自然延伸）都还没有赢家。

## 6. Lumichats — "给怕终端的人的 Claude Code"，评论区给出非技术用户 agent UX 完整需求书
- **type**: pain_point | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/lumichats-offline
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-03
- **metrics**: 日榜 #4，180 分，31 评论，362 followers；浏览器版已有 ~70,000 用户；按量计费（day pass 当日无限），"An afternoon of that costs under a dollar"；暂 Windows only、未签名
- **description**: 面向研究者/分析师/论文写作者（"the researcher with 200 PDFs, the Monday-spreadsheet analyst, the 2am thesis writer"）的免终端 coding agent。评论区质量极高：错误如何呈现给非技术用户、按量计费导致用户自我配给、审批提示沦为仪式、生成脚本绕过快照导致不可回滚——每条都是可产品化的缺口。
- **user_quote**: "Pay for what you run sounds obviously fairer than a subscription, and it has one nasty failure mode: people start rationing… Nobody complains, they just stop poking at it." — Asad M.（自述其产品每用户操作数 "fell about 40% by week two"）
- **top_comments**:
  - [launch 评论 Kyo Shinohara] 审批提示只对能评估的人有效，否则 "the ask has quietly become a ritual instead of a decision"
  - [launch 评论 Gal Dayan] 追问写盘后的 "versioning or rollback"；maker 承认真实缺口：生成脚本写的文件绕过快照无法回滚；Gal："that's exactly the kind of answer I was hoping for, thanks for not glossing over it."
  - [launch 评论 Hugo Rodrigo Baigorria] 建议每 15 秒心跳（掉线 "indistinguishable from a hang"）、把计划当契约对产出断言："The plan stops being narration and starts being a test."
  - [launch 评论 Tehreem Fatima] "Running local commands without code signing yet feels a bit risky for non tech users who won't know how to check SHA-256 hashes."
- **ai_opportunity**: 非技术用户 agent 的四件套缺口清晰可攻：(1) 通用文件快照/回滚层（含脚本产物）；(2) plan-as-contract 验证；(3) 面向小白的审批卡片生成（从 tool call 而非模型自述生成）；(4) 按量计费的心理学设计。每一件都可以做成独立中间件卖给所有 agent 应用。

## 7. NudgeForMe — 邮件跟进 agent 月榜第一，评论区精确定义"draft-first 信任模型"的成败指标
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/nudgeforme
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 月榜(2026/8) #1、日榜曾 #1，326 分，66 评论，847 followers，0 review；免费+launch 送 2 个月；Gmail/Outlook/IMAP；Snoooz 团队（自称已处理数百万邮件）
- **description**: 扫描已发邮件找未回复的机会线程并起草跟进，draft 模式起步、学习偏好后可 autopilot。评论区把"AI 建议流产品"的核心公式讲透了：精确率决定生死，用户不愿当过滤器；隐私问题被要求书面回答。
- **user_quote**: "The moment I have to be the filter, the good ones inherit the cost of the bad ones." — Rabnoor Singh
- **top_comments**:
  - [launch 评论 Asad M.] 若 15 份草稿只有 4 份值得发，"I stop opening the folder by week two"；"two right nudges a week beats fifteen maybes"；关键指标是草稿实际发送率，"If that sits under 30% people quietly stop opening the folder"；最难的误报不是 newsletter 而是你自己的 FYI 和收尾邮件，"since those look exactly like unanswered threads"
  - [launch 评论 Gal Dayan] 邮件内容是 "processed and then discarded, or retained/logged anywhere on your end"？要求 "in writing before connecting a real inbox"
  - [launch 评论 Irene Tomaini] "I really like the 'draft-first' approach. It feels much more trustworthy than automatically sending follow-ups."
- **ai_opportunity**: 通用规律输出：AI 建议类产品应硬性限量（"Show 2, keep the other 13 searchable"）并向用户展示 approve/dismiss 比率随时间的变化以证明在学习——这套"信任仪表盘"本身可产品化。

## 8. Port22 — 手机上审批 Claude Code/Codex，月榜 #3，"approval-on-the-go"新场景
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/port22
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 月榜(2026/8) #3，265 分，32 评论，329 followers；免费（"free for one mac and two sessions with every feature on. not a trial."），无账号；同类 AgentMicro（菜单栏 Codex 状态）同月榜 #4
- **description**: 把 coding agent 的实时审批选项镜像到手机（六个选项就渲染六个按钮，"no wrapper, no special terminal, no config"）。痛点被 Irene Tomaini 一句话验证：回到桌前发现 agent "waiting for an approval the whole time 😅"。月榜 #3+#4 都是 agent 远程状态/审批工具，说明"agent 无人值守时段"是真实高频痛点。
- **user_quote**: "Most remote-approval tools just fire an enter key and hope." — Arash Rahimi（称按到真实选项是 "the detail that sells this"）
- **top_comments**:
  - [launch 评论 Asad M.] 能看到在编辑哪个文件 "but not what's actually in the diff"；"one tap to expand is fine, two and I'll just approve blind"
  - [launch 评论 Martín Herrán] 手机审批会不会 "quicker and less careful than at your desk"？maker 坦承："i've caught myself approving things i would have read twice at my desk."
  - [launch 评论 Rhett] 请求按 agent/项目设默认动作，让手机 "only buzzes when something actually needs my judgment"
- **ai_opportunity**: 移动端 agent 审批的未解三件套：审批卡内嵌渲染 diff（<20 行默认展开）、从审批跳转实时终端、按项目粒度的自动审批策略。也可反向做"审批质量守门"——检测盲目秒批并要求确认。

## 9. GEO 工具从新兴转持久：AI Search Console（周榜#6）+ SEORCE（年榜#10）
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/posts/ai-search-console
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: AI Search Console：周榜 #6，531 分，279 评论，656 followers；SEORCE：年榜 #10，397 分，209 评论（年榜评论数最高），1.6K followers，3 次 launch（2026-01-09 日榜 #1）；PH 已设 "GEO Tools" 正式类目
- **description**: AI Search Console 跟踪品牌在 ChatGPT/Claude/Gemini/Perplexity 中的提及、引用源和 share of voice，出 "client-ready reports"（暗示 agency 场景）；SEORCE 做 SEO+GEO 一体+AutoFix。GEO 在周榜和年榜同时在榜、且 PH 已开正式类目，说明从 buzzword 已固化为持久品类；两款产品评论数都极高（279/209），关注度大于其票数。
- **user_quote**: "tracks brand mentions, rankings, share of voice, competitors, and cited sources across ChatGPT, Claude, Gemini, and Perplexity" — AI Search Console 定位
- **top_comments**:
  - [同品类基准] findable. 4.8(13 reviews)、Writesonic 4.4(53)、Gauge 5.0(2)——头部未固化，评分领先者 review 基数都很小
- **ai_opportunity**: GEO 工具竞争仍在早期（无一家 review 数过百）。垂直切入点：单一行业 GEO（本地服务/电商/SaaS）、GEO 审计一次性报告（低价高频）、或给 agency 的白标 GEO 报告生成。

## 10. Zen Whisper + 本地化浪潮 — "on-device"成为 PH 新品的默认卖点
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/daily/2026/8/2
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 日榜 #5 Zen Whisper（"On-device Mac dictation"，133 分）；同日 Capptivo（本地录制无账号）、Lumichats 有 offline 版本；周榜 SKI（全本地语音）、Memmy（local-first 记忆）
- **description**: 08-02 日榜+31 周榜的横切面：至少 5 款上榜产品把"本地/离线/无账号"写进一句话定位。用户评论也在主动验证本地性（SKI AMA 最高频问题、Lumichats 的 Valeria 追问模型进程是否沙箱隔离、Zinley 的隐私政策拷问）。"隐私即卖点"从营销话术变成用户主动审查项。
- **user_quote**: "Zero data collection and fully offline"（Valeria 自述在安全敏感项目上推荐工具前必查此项 — Lumichats 评论区）
- **top_comments**:
  - [Lumichats 评论 Valeria] 追问模型进程是否与文件系统沙箱隔离、本地模型是自带还是 BYO；maker 坦承在线版 "whatever a tool reads enters the conversation, which goes to the server"
- **ai_opportunity**: "本地性验证"本身可产品化：第三方离线认证/网络流量审计徽章，或给开发者的 local-first 合规检查清单。做工具的直接结论：新品把 on-device 做实并放进 tagline 已是可量化的转化因素。

## 11. Cowork（年榜 #3）— "Turn Claude into your digital coworker"，coding agent 生态跨全部四档榜单
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 年榜 #3 Cowork（1123 分，年榜最高现值分数，38 评论）；生态链条：日榜 Lumichats#4/Termexo#7 → 周榜 SKI#3/Claude Opus 5#9 → 月榜 Port22#3/AgentMicro#4 → 年榜 Cowork#3
- **description**: Claude/coding agent 生态是唯一在四个时间尺度全部在榜的品类——从年榜的 Cowork（把 Claude 变成数字同事）到本周的入口层（语音 SKI、手机 Port22、免终端 Lumichats、Windows 工作台 Termexo、菜单栏 AgentMicro）。趋势解读：平台层（Claude/Codex）已是持久需求，本周的爆发全部发生在"接入方式"层——谁离开键盘/终端还能用 agent。
- **user_quote**: "Turn Claude into your digital coworker" — Cowork tagline
- **top_comments**:
  - [横向观察] 08-02 日榜前 10 中至少 4 款（Lumichats、Termexo、Zen Whisper 语音入口、FreqWave 除外）围绕 Claude Code/Codex 生态构建
- **ai_opportunity**: coding agent 的"配件经济"已成型且大多免费获客——变现缺口在团队/企业层：多人共享 agent 会话、审批链、用量治理。个人配件免费卷，团队治理没人做。

## 12. TimeOS/SyncStaq/Basedash Audit Logs — 榜单腰部的"无聊但收钱"信号
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/8
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 日榜 #9 TimeOS 2.0（任务+客户计费，95 分）；月榜 #8 Basedash Audit Logs（BI 审计日志，113 分）、#9 SyncStaq（Stripe 数据同步 Google Sheets，108 分）
- **description**: AI 喧嚣之下，榜单腰部持续出现小而实的钱流工具：按任务给客户开票（TimeOS）、Stripe 账单数据实时进表格（SyncStaq）、BI 操作留痕（Basedash）。这类产品票数不高但目标用户付费意愿明确（freelancer 计费、财务对账、合规审计），是 indie builder 更现实的对标线。
- **user_quote**: "Work your tasks. Bill your clients with confidence." — TimeOS tagline
- **top_comments**:
  - [榜单观察] Basedash Audit Logs 上月榜说明 "AI 工具的合规留痕" 需求已强到能作为独立 launch——与信号 4（agent 评估）、信号 1（审计日志拷问）同构
- **ai_opportunity**: "audit logs for AI actions" 在三个独立信号中出现（Zinley 评论、Basedash launch、Prelint 决策图谱）——AI 操作审计是本期从多个方向被同时验证的机会点。
