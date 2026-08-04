# 02 — Product Hunt 四档榜单 + Review 深挖 2026-08-04

> 组内信号：11 条 | 二手转述：0 条（0%）
> 最强证据线：四档榜单直抓全部成功（8/4 当日榜为空——当天未收盘，改用 8/3 日榜；日榜与周榜 Top10 完全重合）。AI agent 基础设施/分身类占据月榜 Top10 的 7 席；最深的用户声音来自 AgentSky、Zinley、Port22、Ctruh 的发布日评论区（新品无正式 review，评论区即一手需求）。Airtop 是唯一有正式 review 的头部产品（4.6 星/8 条）。无渠道故障；未动用 WebSearch。

## 榜单四档对照（趋势判断）

- **日榜 2026-08-03**（8/4 当天未收盘为空页）: AgentSky(441 分/54 评) > Ctruh Studio(407/92) > Airtop Google Ads(295/24) > Qwen3.8-Max(273/3) > Appllama(212/14) > Plethora(198/9) > claudemon(147/15) > yapyap(146/6) > Snapdown(141/14) > Hand Wave(136/10)
- **周榜 2026/W32**: 与日榜 Top10 完全一致（本周刚开始，8/3 是唯一收盘日）
- **月榜 2026-08**: AgentSky(441) > Zinley(412/108 评) > Ctruh(407) > Capptivo(360，开源录屏) > DeepSeek-V4-Flash-0731(346) > NudgeForMe(333/66 评) > Airtop(295) > Qwen3.8-Max(273) > Port22(270/33 评) > YourSitee(243)
- **年榜 2026**: PostSyncer(AI 社媒发布)、Mom Clock、Cowork/Claude(第二数值 1,125 为全榜最高)、Livedocs、MiroMiro、Atlas.new、2-b.ai、Joodle、ChatGPT Health、Framer AI Agents、SEORCE、Wispr Flow…（注意：年榜每卡带 Promoted 徽标、两列数值无标签，为展示排序而非纯分数排序，参考价值打折）
- **跨档存活**: AgentSky / Ctruh / Airtop / Qwen3.8-Max 同时在日+周+月三档 → 8 月开局最强品类是「agent 云托管基础设施」「无代码 3D 电商」「广告自动化 agent」。月榜另有 Zinley(AI 分身)、Port22(手机管 coding agent)、NudgeForMe(邮件跟进 agent)——agent 品类占月榜 7/10。年榜耐久线是「AI agent + 个人生产力」(Cowork、2-b.ai、Wispr Flow、Livedocs)；本周涌现的新类别是「coding agent 等待/远程监管」(claudemon、Port22) 与「本地优先录音」(yapyap)。

---

## 1. AgentSky — agent 云托管「任意 harness × 任意 LLM」登顶日/周/月三榜
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/agentsky
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-04
- **metrics**: 日榜#1、周榜#1、月榜#1；441 分、54 评论、734 followers；自称经 tycoon.us 已跑 10K+ agent sessions；/reviews 页 0 条正式 review
- **description**: 一键在云沙箱托管长时程 agent（支持 Claude Code、Codex、Hermes、OpenClaw 等 harness），历史留存、快照恢复、WhatsApp/iMessage/Telegram/Slack/web/CLI/API 全渠道触达。按用量计费，「停放 agent 免费」。评论区高质量拷问集中在可观测性与幂等性——正是托管层的信任缺口；maker 承认状态恢复只是 "best effort based"，模型/harness 路由仅在路线图。
- **user_quote**: "a dead agent and a cheap month look identical on the invoice"（Dale Mooney，指免费停放抹掉了「agent 挂了」的信号）
- **top_comments**:
  - [发布日评论 Dale Mooney] "A health check tells you the process is alive. It does not tell you the work moved."
  - [发布日评论 Dale Mooney，谈快照恢复后的重复发送] "Redoing it and skipping it are both wrong, and only one of those is visible to the person on the other end"
  - [发布日评论 Daniel Harris / Hazy] "could an agent start on Slack and continue the same conversation on WhatsApp?" / "people switch channels constantly and that is usually where context breaks happen."
- **ai_opportunity**: 托管 agent 的「工作进度级健康检查」与幂等性层（idempotency key、外部副作用审计）是 maker 当场承认的空白；跨渠道会话连续性也被反复追问。独立开发者可做 agent-ops 可观测性中间件。

## 2. Zinley — 「AI 分身」有自己的电话号码和邮箱，月榜#2、108 条评论
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/zinley
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-04
- **metrics**: 月榜#2；412 分、108 评论（本组最高评论数）、664 followers；免费档每日 10 credits（约 6 段新对话）；技术栈 Claude+Gemini+Twilio
- **description**: "Most AI waits in a chat box. We built the opposite."——给 AI 配独立电话号码、邮箱和电脑，在你缺席时代表你接电话、回邮件、办事；定位 "Not another chatbot. A second you that shows up."。切入点是「不可触达」而非「太忙」。评论区暴露三大信任缺口：来电身份冒充、口头承诺无 undo、关系图谱数据无出口。
- **user_quote**: "the wrong answer never sounds wrong"（Jernej Jan Kočica，指电话场景风险在断言而非动作，"there is no undo"）
- **top_comments**:
  - [发布日评论 Gal Dayan] caller ID 和 from-address "both are trivially spoofable"——maker 承认 "smooth conversation ≠ proven identity" 且 caller ID 仍是主信任信号
  - [发布日评论 Naved Naik] 定价气味：新会话说 "hi" 收 1.58 credits，复杂追问只收 0.56，冷启动罚 ~2.8×——maker 承认 "~3x is a real smell if the product is lots of small handoffs."
  - [发布日评论 Aidan Quinn] 先交邮件分诊、缓交电话："the interruption tax is worse than the work itself."
  - [发布日评论 Ansari Adin] 追问取消/公司倒闭后关系图谱能否导出——maker 承认全量导出 "is still on the list."
- **ai_opportunity**: 「AI 分身」品类的信任基建全是空白：来电方身份验证（防冒充）、AI 口头承诺的状态追踪审计、用户数据可携带出口。任一项都可做成第三方层。

## 3. Ctruh Studio — 浏览器原生无代码 3D/AR 电商工作室，92 条评论
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/ctruh-studio
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-04
- **metrics**: 日榜#2、周榜#2、月榜#3；407 分、92 评论、1.1K followers；/reviews 页 0 条正式 review
- **description**: 面向电商品牌的一体化 3D/XR：文本/图像生成 3D（VersaAI）、虚拟试穿/AR、配置器、虚拟店面，自研 Verse Engine（非 Three.js 封装）。痛点框架：现状是 "hiring developers, stitching five vendors together, and waiting weeks"，而网购 "still stuck in 2D" 导致犹豫和退货。评论区最尖锐议题是移动端性能与转化率的关系。
- **user_quote**: "A configurator that takes 8 seconds on mobile 4G converts worse than the flat photo it replaced."（Asad M.，要求公布优化后 mesh weight/贴图体积而非生成前参数）
- **top_comments**:
  - [发布日评论 Puja Sharma（陶瓷店主）] 材质编辑器替代外部软件做釉面纹理，逼真到 "customers stopped asking for extra images."
  - [发布日评论 Michael Audu] 变体批量编辑一个个改太慢——maker 承认 "It's genuinely a gap today"，bulk editing 排到下版本
  - [发布日评论 Vinay Agastya（maker 答 Core Web Vitals）] "3D never touches the critical rendering path. Ever."——LCP 保持普通图片，引擎经 IntersectionObserver 懒加载，爬虫拿静态 HTML+JSON-LD
- **ai_opportunity**: 3D 电商的「性能预算审计」（mesh weight、CWV 影响、2D 降级）与变体批量编辑是当场承认的缺口；可做 3D 资产移动端优化/审计工具，或垂直行业 AI 材质库。

## 4. Airtop for Google Ads Automation — 云浏览器 agent 平台垂直化（唯一有正式 review 的头部产品）
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/airtop/reviews
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: 日榜#3、周榜#3、月榜#7；295 分、24 评论；产品整体 4.6 星 / 8 条 review、2.3K followers（review 含前身 Switchboard 时代的旧评）
- **description**: 云端浏览器 agent（Browserbase 对标）本次以「Google Ads 自动化」垂直场景发布：建 campaign、优化花费、出报告。review 揭示已验证价值（云端浏览器绕过反爬、profile 持久化免重登、Make 集成）与三个反复出现的抱怨：无代理地区选择、无 iframe Live View、并行 session 计价太贵。
- **user_quote**: "having the browser live in the cloud instead of on my own machine means the agent can keep working"（Omri Ben-Shoham，review，~1 个月前）
- **top_comments**:
  - [review Stuart Bowes，1 年前] "the auth is not working for a UK site that I need to connect to"——美国代理打英国站被弹回登录页，团队称地区可选代理在规划中；他表示解决就改 5 星
  - [review Omri Ben-Shoham] "pricing per session adds up fast once you're running several agents in parallel like I do"——想要短时 session 便宜档
  - [review Uladzislau Rasliak，1 年前] "I'm missing session Live View in Iframes in their dashboard" / "Good alternative to browserbase"
- **ai_opportunity**: 云浏览器 agent 的三个明确 review 缺口：按地区选代理、嵌入式实时观看、短时 session 计价。可做「按秒计费+地区代理」的轻量浏览器 session 服务，或垂直于特定国家站点的合规自动化。

## 5. Port22 — 手机监管 Mac 上所有 coding agent，「审批保真」为差异点
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/port22
- **source_date**: 2026-07-29 | **fetched_at**: 2026-08-04
- **metrics**: 月榜#9；270 分、33 评论、353 followers；免费（1 台 Mac、2 个 session，"not a trial"）
- **description**: 把 Mac 上运行的 Claude Code/Codex 等镜像到手机：显示哪些在干活哪些卡住，需授权时震动。差异点是读取真实会话选项而非盲发按键——"a six option prompt shows six buttons, not my guess at yes/no"；中继端到端加密 "cannot read your code"。痛点：长任务离开后回来发现 agent 为一个文件编辑审批白等 20 分钟。
- **user_quote**: "one tap to expand is fine, two and I'll just approve blind."（Asad M.，指看不到 diff 内容时通知只是把打断提前了——"just moved the interruption earlier"）
- **top_comments**:
  - [发布日评论 Rabnoor Singh] 盲发 Enter 到六选项 prompt 会静默选中第一项："You only find out an hour later when the run went somewhere you never asked for."
  - [发布日评论 Martín Herrán] 手机审批是否让你 "quicker and less careful than at your desk"——maker 承认自己在手机上批过在桌面 "would have read twice" 的东西
  - [发布日评论 Rhett] 想要按 agent/项目的默认放行规则，手机只在 "something actually needs my judgment" 时才响——maker 称这是 "something between auto mode and manual one"
- **ai_opportunity**: 远程审批的「diff 卡片渲染」「按项目审批策略引擎」是 maker 承认未做的空白。coding agent 监管层（approval policy + 移动端 diff 视图）是明确的独立开发切口。

## 6. claudemon — Claude Code 等待时间玩宝可梦：「等待经济」类目出现
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/claudemon
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-04
- **metrics**: 日榜#7；147 分、15 评论、206 followers；开源 MIT、免费、纯本地（GitHub: zamarrowski/claudemon）
- **description**: "Half of Claude Code is waiting. claudemon makes that time a game"——每 ~20 秒等待走一步草丛，第二个终端 tab 打宝可梦，151 只全含。信号价值在其验证的痛点：agent 等待 "Not long enough to switch tasks, too long to just sit there"，且用户判断这痛点几年内不消失。
- **user_quote**: "You're paying people in Pokémon for waiting, so a run that spins for 20 minutes and produces nothing still feels great."（Asad M.，主张 "I'd tie the encounter to exit code rather than elapsed time"）
- **top_comments**:
  - [发布日评论 Himanshu Garg] 等待 "is a real pain and I don't see it going away for the next few years."
  - [发布日评论 Ziang Yang] "You've somehow built the one dev tool that makes me want MORE waiting — nicely done."
  - [发布日评论 Sergio Zamarro（maker 反问）] "But how do you actually know if the generated code is good or bad?"
- **ai_opportunity**: 「agent 等待时间」成为可开发的注意力资产：等待期微学习/微任务/队列化 review 都是变体。Asad 的「奖励绑测试绿灯」思路直接指向更严肃的产品——把等待游戏化与产出质量挂钩。

## 7. yapyap — 本地优先语音/会议录音，一次性买断反订阅
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/yapyap-3
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-04
- **metrics**: 日榜#8；146 分、6 评论、203 followers；一次性买断、无账号；可选接 OpenAI/Anthropic/Groq
- **description**: 转写、说话人分离、AI 分析全部本地跑（"Transcription, diarization, and the AI analysis all run on your hardware"）；maker 明言动机是订阅疲劳——被一个按月收费还把对话传服务器的转写工具逼出来。"It's a memory, not a transcript dump."。对比 Granola(4.8 星/51 评) 等云端霸主，是「隐私+买断」的反向定位。
- **user_quote**: "A recording carries everyone else in the room, none of whom agreed to anything"（Rohan Manthani，论证会议音频比文本更需要本地优先——这是他唯一敢在客户通话中开启的版本）
- **top_comments**:
  - [发布日评论 maker Sander Boer] 拒绝 "encrypted in transit" 式说辞——音频 "never goes anywhere."；动机是 "sick and tired of paying subscriptions for everything in my life"
  - [发布日评论 Ankur Bolia] 手机端录了没转写/摘要，"its behaving just like a 'recorder'."——maker 确认手机 on-device 转写还在开发
  - [发布日评论 Petr Kovacik] local-first 是 "the right call"，云端录音一直让他发毛
- **ai_opportunity**: 本地 AI 会议工具的移动端 on-device 转写是当场暴露的缺口；「买断制 + 本地推理」在 AI 笔记类目的复制空间大（本地 CRM、本地日记分析等）。

## 8. Qwen3.8-Max 与 DeepSeek-V4-Flash-0731 同月登榜 — agent 性价比模型竞赛
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/8
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: Qwen3.8-Max 273 分（日/周#4、月#8，tagline "Qwen's most capable model for coding and cowork"），DeepSeek-V4-Flash-0731 346 分（月榜#5，tagline "Frontier agent intelligence at Flash prices"）；评论极少（3 条、10 条）
- **description**: 两家中国模型厂的新模型同时进入 8 月月榜 Top8，卖点都指向 agent 工作负载与性价比。高票低评论=知名度驱动而非社区讨论，但确认「agent 用途的性价比模型」是当前模型竞争主叙事。
- **user_quote**: ""
- **ai_opportunity**: 模型层价格战利好路由层：Zinley 评论区被点赞的「难题自动路由到便宜模型」（Naved Naik："Most tools just run everything on one expensive model."）就是用户可感知的卖点。

## 9. 月榜格局：agent 品类占 Top10 的 7 席（分层生态成形）
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/8
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: 月榜 Top10 中 7 个带 AI 标签，4 个直接是 agent 产品（AgentSky 托管、Zinley 分身、Airtop 广告 agent、Port22 监管），外加 NudgeForMe（邮件跟进 agent）、DeepSeek/Qwen（agent 模型）
- **description**: 8 月开局的 PH 版图：agent 不再是单一产品而是分层生态——基础设施（AgentSky）、模型（DeepSeek/Qwen）、垂直应用（Airtop/NudgeForMe）、人机接口（Zinley/Port22）、等待时间娱乐（claudemon）。与年榜对照（Cowork、Livedocs、Atlas.new、Flux、2-b.ai 均为 agent/AI 生产力），说明这是持续一年以上的耐久需求而非本周脉冲。
- **user_quote**: ""
- **ai_opportunity**: agent 生态的「层间缝隙」是独立开发者位置：监管/审批层、可观测层、信任/身份层、成本路由层——每层都在本周评论区被用户点名要过。

## 10. NudgeForMe — 错过邮件机会的 AI 跟进 agent，月榜#6
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/8
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: 月榜#6；333 分、66 评论（月榜第三高评论数）；类目 Email clients
- **description**: "AI follow-up agent for missed email opportunities"——自动识别没跟进的邮件线索并代发 nudge。与 Zinley（全能分身）相比是单点切入：只做「你忘了跟进」这一个动作，评论热度却排月榜第三。（本条未深挖评论页，指标来自月榜快照。）
- **user_quote**: ""
- **ai_opportunity**: 「单动作邮件 agent」跑赢全能助手的又一例证：跟进/催款/续约提醒等单点 agent 均可复制此模式。

## 11. 年榜快照：全年耐久需求 = AI 内容分发、语音输入、Claude 生态、「抄成功者」工具
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: 年榜前列：PostSyncer（AI 社媒发布）、Mom Clock（"You said you'd do it. So why didn't you?"）、Cowork（Claude 数字同事，第二数值 1,125 全榜最高）、Livedocs（通用数据 agent）、MiroMiro（一键复制网站设计）、Wispr Flow（"Stop typing. Start speaking. 4x faster."）、SEORCE（GEO/品牌可见性）
- **description**: 年榜显示全年耐久线：①AI 内容生产-分发一条龙（PostSyncer、Elser AI）②语音替代打字（Wispr Flow）③Claude/agent 生态件（Cowork、Flux iMessage agents、Community Figma MCP server）④「研究成功者」工具（MiroMiro 抄网站设计；日榜 Appllama「25,000+ 顶级 iOS 应用截图库」同属此类）。警示：该年榜页每卡带 Promoted 徽标且两列数值无标签，为展示序非纯分数序，方向参考。
- **user_quote**: ""
- **ai_opportunity**: 「研究成功者」品类（MiroMiro、Appllama）验证付费意愿：任何垂直领域的「成功案例结构化库 + AI 分析」都是可复制模板。
