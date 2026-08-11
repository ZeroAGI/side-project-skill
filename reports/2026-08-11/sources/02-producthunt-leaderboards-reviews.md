# 02 — Product Hunt 四档榜单 + Review 深挖 2026-08-11

> 组内信号：10 条 | 二手转述：0 条（0%）
> 最强证据线：日榜前三（oqoqo / Portfolio Lab / Paritok）全部是「AI agent 基础设施」，且 launch 评论区的追问（eval 腐化、上下文压缩召回、审批疲劳）本身就是可产品化的痛点清单；周/月榜由 Hey Noah、AdAnt、Wispr Flow、Soloop 主导。所有页面直接抓取成功，无渠道故障。注意：2026-08-11 当日日榜尚未生成（"No launch data found"），日榜数据取 2026-08-10；week 33 只含一天数据与日榜重合，故周档取完整的 week 32。

## 榜单跨时间尺度对照（daily 08-10 → weekly W32 → monthly 2026-08 → yearly 2026）

- **持续存在（耐久需求）**：AI coding agent 基建（daily: oqoqo/Paritok/Prime Agent/Remix → weekly/monthly: Coldtea/AgentSky → yearly: Cowork "Turn Claude into your digital coworker" 1114 分）——四档全部有 coding-agent 相关产品，是最耐久的品类。
- **AI 执行助理/会议记录**：weekly+monthly 的 Hey Noah、Wispr Flow Notetaker，daily 的 SecondBrain Note——「替人执行日程/会议」在周月两档强势。
- **W32 与 8 月月榜完全重合**（8 月刚过一周半，月榜即 W32 快照），对照意义在 daily(08-10) vs W32：新出现 = eval 平台(oqoqo)、上下文压缩网关(Paritok)、AI 投资验证(Portfolio Lab)。
- **年榜独有**：社媒发布(PostSyncer 808)、自律强制器(Mom Clock 764)、ChatGPT Health、SEORCE(GEO/SEO, 209 评论)——消费级/营销类只有拉长到年才浮出。

### Daily 2026-08-10 完整名次
1. oqoqo（evals/benchmarks for agents）325 分/31 评论
2. Portfolio Lab（AI investing）282/31
3. Paritok（agent 上下文压缩，省 85% token）246/29
4. SecondBrain Note by GenSpark（MagSafe AI 录音硬件）209/11
5. AI Group Call（6 个 AI 语音群聊）184/8
6. Prime Agent（自我改进 harness 的 coding agent）164/2
7. Gutta（Mac 菜单栏离线任务清单）142/5
8. Remix（生产环境上的 Figma 式变体测试）128/6
9. Vidaya（穿戴设备+化验+DNA 健康分）112/5

### Weekly W32（= Monthly 2026-08 前十，分数为当前活跃分）
1. Hey Noah（AI 行政助理）604/99；2. AdAnt AI（AI 社媒广告）608/88；3. Wispr Flow Notetaker 578/72；4. Coldtea.ai（自动驾驶软件/agentic IDE）517/70；5. Soloop（solo founder 的审批制 Agent OS）496/67；6. Cloudflare OS 475/4；7. NextDoor.Company（地图找初创招聘）463/62；8. AgentSky（云托管 agent）461/59；9. Ctruh Studio（无代码 3D/XR）418/89；10. The GTM Co-Founder（开源 GTM skills）413/20

### Yearly 2026 前十
1. PostSyncer 808/101；2. Mom Clock 764/92；3. Cowork(Claude) 1114/38；4. Livedocs 487/52；5. MiroMiro（一键复制网站设计）529/51；6. Atlas.new（地图空间数据 agent）534/35；7. 2-b.ai 428/90；8. Joodle 425/66；9. ChatGPT Health 428/20；10. SEORCE 397/209

---

## 1. oqoqo：为 agent 真实任务建 eval/benchmark，评论区暴露三个未解决痛点
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/oqoqo
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-11
- **metrics**: 日榜 #1（325 分/31 评论/669 followers），0 条 review（刚上线）
- **description**: 把任务写成用户式 prompt，指定测试面（SDK/API/CLI），在沙箱里跑 Codex/Claude Code/Cursor/Copilot，记录每次工具调用、重试、token 成本。创始人 Haritha 定位："Most benchmarks today exist in curated environments and do not translate well to the real world."
- **user_quote**: "existing eval platforms seem like they need a data scientist to operate and yet don't reflect the real systems"（maker Haritha 回复评论）
- **top_comments**:
  - [launch 评论 Jernej Jan Kočica，eval 腐化] "a suite that stops failing looks exactly the same as a product that got good"……从未失败的用例 "arent tests, theyre decoration"
  - [launch 评论 Patrick Krekelberg] evals 漏掉 "recovery behavior: permission denial, stale credentials, partial side effects, and a rerun after failure"，happy-path 分数会奖励「看起来完成了」但留下烂摊子的 agent
  - [launch 评论 Sabber Ahamed] "the same task rarely takes the same path twice with an agent, different tool call order, different retries"——如何让 benchmark 不沦为噪音
- **ai_opportunity**: 评论区三问即三个细分产品：① 陈旧 eval 集检测（标记从未失败的用例）；② agent 失败恢复行为专项测试（权限拒绝/脏状态/重跑）；③ agent 轨迹的统计显著性评分工具。eval 赛道日榜 #1 验证付费意愿存在但工具尚粗糙。

## 2. Paritok：agent 上下文压缩网关——token 成本焦虑的直接证据
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/paritok
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-11
- **metrics**: 日榜 #3（246 分/29 评论/335 followers）；自报生产数据：两周 62,486 次压缩、省 447M 输入 token；本地 RTX 4060 延迟约 13s，托管 GPU 约 3s
- **description**: 4B 代码原生模型（训练于 45K agent 轨迹）做「非破坏性压缩网关」，坐在 coding agent 和 API 之间：工具 schema 29K→8K/turn、文件读取压到约 1/4、历史对话按预算摘要。宣称省 25%→85%+，session 轮次 3×。兼容 Claude Code/Codex/Cursor。maker 在追问下承认按缓存计价的真实美元节省约 60-70% 而非 85%。
- **user_quote**: "Everyone talks about model quality but nobody talks about how much of the context window is just wasted overhead."（Abdul Rehman，Triforce Todos）
- **top_comments**:
  - [launch 评论 Abdullah Javaid，未获回复的最尖锐问题] "is that byte range still recoverable, or does recall depend on the referencing turn staying intact in the live context window?"
  - [launch 评论 Divya Grace Benjamin，未获回复] "How are you justifying costing 85% less, and what's the benchmark?"
  - [launch 评论 Justin Jincaid（Mom Clock maker）] 他的 Claude Code 大代码库 session 常触发 compaction，「3× 轮次」是他最在意的点
- **ai_opportunity**: agent token 账单是被验证的付费痛点（配合日榜 #1 是 eval、#6 是 self-refining harness——整个日榜就是 agent 运维栈）。可切入点：跨 harness 的 token 账单分析/归因工具；或独立验证压缩网关质量损失的第三方 benchmark（评论区明确有人要）。13s 本地延迟也说明低延迟压缩仍是空白。

## 3. Hey Noah：AI 行政助理，周榜 #1——「人类 EA 平价化」被验证
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/hey-noah/reviews
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: 周榜(W32) #1、月榜 #2，604 分/99 评论；review 5.0/5（仅 4 条，均为首次评论者，其一与 maker 同姓，需打折）
- **description**: 通过 SMS/email/WhatsApp 使用的主动式 AI 行政助理：外联、订会、日历 hold、会前提醒+调研、会后跟进全闭环。用户对标 Calendly/Cal.com/人类 EA：booking link 只处理交易，处理不了谈判、上下文和跟进；人类 EA 又太贵。
- **user_quote**: "Most people whom I schedule with don't realize Noah is AI. … Basically, it's like a Fortune 500 EA for everyone."（Eric Bahn）
- **top_comments**:
  - [review Saket Toshniwal] "This is not automation. It's judgment."
  - [review Eric Bahn，最大缺口] "I want it to write emails for me, from my account!"（maker 回复 email drafts "coming very soon"）
  - [review Peter Kovacs] "With unusual requests and edge cases, it doesn't always get it right the first time."；另有用户要 iOS app/桌面小组件
- **ai_opportunity**: 缺口明确：①从用户自己账户发信的 email 起草（最高频请求）；②移动端入口。「AI 判断力而非自动化」是用户复述的价值语言，可直接用于同品类定位。

## 4. Soloop：审批制 Agent OS——「审批疲劳」成为 agent 产品的核心设计难题
- **type**: pain_point | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/soloop
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: 周榜 #5/月榜 #5，496 分/67 评论/1K followers；0 review
- **description**: solo founder 的 AI CEO/CTO/CMO 三 agent 系统，主打 approval-first。launch 评论区变成了一场关于「人类审批门如何不退化成橡皮图章」的高质量辩论，maker 承认这是他们最难的未解设计问题。
- **user_quote**: "How do you stop approval from becoming a habit? A founder who approves everything is reading nothing."（Peter Digitalis）
- **top_comments**:
  - [launch 评论 Tiffany Trboyevich，运营 25 个 AI 营销 agent] "At some volume, 'approve' stops being a decision and becomes a reflex"——橡皮图章比没有门更糟，因为审计日志谎称审查发生过；建议按「新颖度」而非仅按风险分级：新任务类型全审，连续两轮干净后降级。她还讲了 agent 虚构员工 "Teri" 并给其派工单的事故
  - [launch 评论 Hugo Rodrigo Baigorria，做过同类产品] 已放弃 approval-first，改为 "execute and report, stop only at what's irreversible"，因为审批队列本身成了瓶颈；"Visibility should stay high forever; I still want to read what my agents did yesterday."——门可以衰减，叙事不能
  - [maker LangDavidDai] 风险分级+diff-only 审批+默认批量，仍承认是最难未解问题
- **ai_opportunity**: 「agent 审批/信任分级」本身可独立成产品：跨 agent 系统的审批策略层（按风险×新颖度动态分级、审批质量审计——检测橡皮图章行为）。这是所有 agent OS 的共性缺件，评论区给出了完整设计规格。

## 5. Wispr Flow：4.7 星 73 评——语音输入已验证，Windows 稳定性/隐私是攻击面
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/wisprflow/reviews
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: 4.7/5、73 条 review（29 founder+44 其他）、8.6K followers；周榜 #3/月榜 #3（Notetaker 新品 578 分/72 评论）。praise 标签：提效 23、语音听写 20、高准确率 18、快 16；complaint 标签：隐私 6、安装复杂 4、系统集成 4、CPU 占用高 3
- **description**: 跨应用语音听写（2024 年上线，5 次 launch），本周以 Notetaker（会议记录）再上榜。评论反复出现：不用切换应用、多语言 code-switching、与 LLM prompting 天然配对。最尖锐的复发性抱怨：Windows 端稳定性、无离线/隐私模式、iOS 摩擦大。
- **user_quote**: "I speak three and a half times quicker than I can type."（Simon Moxon）
- **top_comments**:
  - [review Phil Alampi] "I'm slowly forgetting how to type, and I find typing annoying and cumbersome."
  - [review Shaunny，差评] "If you value your privacy and your PC's stability, look elsewhere."
  - [review Josephine Cheung] "the tool should disappear, the work should remain"
- **ai_opportunity**: 明确的独立开发者攻击面：①离线/本地优先的隐私听写（6 条隐私抱怨+本地 whisper 已成熟）；②Windows 原生的稳定轻量实现（现有品在 Win 上口碑差）。成熟品类+复发性同类抱怨=经典的 productization opening。

## 6. AdAnt AI：研究驱动的 AI 广告创意，月榜 #1——缺口在效果回流
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/adant-ai/reviews
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: 周榜并列 #2/月榜 #1，608 分/88 评论/1.3K followers；review 5.0（仅 1 条，权重极低）
- **description**: 喂入产品上下文，扫描实时社媒数据，找出该细分里正在转化的广告形式。唯一评论者用过 AdCreative.ai 嫌其太泛："anchored in niche-level data instead of platform-wide trends"。
- **user_quote**: "The research-first approach here genuinely clicked for me. … You feed it your product context and it scans real-time social data. That specificity matters more than people realize."（Darius Tran）
- **top_comments**:
  - [review Darius Tran，缺口] "The feedback loop is the obvious gap."——创意上线后追踪效果、把学习回流是纯手工
  - [review Darius Tran] "If you're expecting one-click polished video output, that's not what this is."
  - [review Darius Tran] "Tried AdCreative.ai before this and found it leaned too generic."
- **ai_opportunity**: ①广告效果数据→创意策略的自动回流闭环（用户点名的缺口）；②低量用户的按量计费模式（用户点名要 pay-as-you-go credits）。

## 7. Coldtea.ai：agentic IDE + 视觉回归 QA + 生产监控打包
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/coldtea/reviews
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: 周榜 #4/月榜 #4，517 分/70 评论/842 followers；review 5.0（仅 2 条，其一 founder 关联）
- **description**: 定位「让软件自动驾驶」：coding agent + 视觉 QA agent 抓回归 + AI 生产监控，卖给用 AI 快速出货又怕搞坏生产的小团队。
- **user_quote**: "We use it to catch regressions and monitor our agents so our small and mighty team can move fast. … 10/10!"（Philip Sørensen, Brew）
- **top_comments**:
  - [review Philip Sørensen] "It wouldn't be possible for us to move as fast as we do at Brew without coldtea."
- **ai_opportunity**: 「AI 写码速度 vs 生产稳定性」的张力是 2026-08 周月榜的主旋律（Coldtea、oqoqo、Remix 都在打）。单点切入：AI 生成代码的视觉回归专项工具，或 agent 改动的生产影响预检。

## 8. 日榜次级信号打包：硬件录音/AI 群聊/离线极简工具
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/daily/2026/8/10
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: SecondBrain Note(GenSpark) #4 209 分；AI Group Call #5 184 分；Gutta #7 142 分；Remix #8 128 分；Vidaya #9 112 分
- **description**: 日榜腰部三条线：①AI 硬件入口（MagSafe 录音器，"acts for you" 即录音→执行）；②多 AI 协同体验（一个目标拉 6 个 AI 开语音会）；③反 AI 潮流的离线极简工具（Gutta：Mac 菜单栏离线任务清单，无账号无云）。
- **user_quote**: 
- **top_comments**: 
- **ai_opportunity**: Gutta 上榜说明「离线、本地、无订阅」在 AI 疲劳期是差异化卖点；AI Group Call 的多角色协同 UX 可复用于决策支持类产品。

## 9. 年榜结构信号：营销发布/自律强制/健康 AI 是全年耐久品类
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: | **fetched_at**: 2026-08-11
- **metrics**: PostSyncer #1 808 分/101 评论（2026-01-05 上线，日/周双 #1）；Mom Clock #2 764/92（2026-01-01 上线）；Cowork(Claude) 1114 分；SEORCE #10 397 分/209 评论（评论数全榜最高）
- **description**: 2026 年榜前十里：社媒批量发布(PostSyncer)、强制执行的自律工具(Mom Clock "You said you'd do it. So why didn't you?"，不许 snooze)、AI 品牌可发现性(SEORCE——GEO/AI 搜索优化，209 评论说明讨论极热)、健康(ChatGPT Health、2026-08 日榜的 Vidaya 呼应)。PostSyncer 与 Mom Clock 至今 0 review——PH 高票≠review 沉淀，review 数据要到成熟产品（如 Wispr 73 条）才有密度。
- **user_quote**: 
- **top_comments**: 
- **ai_opportunity**: SEORCE 的 209 评论指向「品牌在 AI 搜索/LLM 答案中的可见性」是全年热议且工具稀缺的新 SEO；Mom Clock 验证「付费买强制力」的自律市场。

## 10. Portfolio Lab：AI 投资的「验证优先」定位获日榜 #2
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/portfolio-lab/reviews
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-11
- **metrics**: 日榜 #2（282 分/31 评论/590 followers）；review 5.0（仅 1 条）
- **description**: "AI investing, done responsibly"——策略先在未见数据上验证、再纸面交易，然后才动真金。唯一评论者对比过传统回测平台和 AI 交易工具，选它是因为验证权重更高。
- **user_quote**: "I especially like the focus on validating strategies on unseen data"（Lada Osipova）
- **top_comments**:
  - [review Lada Osipova，缺口] "It would be great to see even more transparency around how strategies are evaluated and compared"
  - [review Lada Osipova] "More guided explanations and real-world examples could make the platform easier to understand and trust."
- **ai_opportunity**: 非量化背景用户要「策略评分透明化+手把手解释」——AI 金融产品的信任层（可解释评估报告）是缺口。

---

### 渠道与数据质量备注
- 2026-08-11 当日日榜未生成（PH 日榜按天滚动，页面明示 "No launch data found for this period"），日榜取 08-10；week 33 仅含一天与日榜重合，周档取完整 week 32。
- PH 页面自述分数为「当前活跃分」而非期末快照，名次按期末冻结，故个别分数与名次不严格单调（如 AdAnt 608 分列周榜 #2）。
- GenSpark(#4) 与 Prime Agent(#6) 的 slug 指向母产品页，页面描述与 tagline 不匹配，已按 tagline 记录。
- 无搜索渠道使用（全部直接抓取成功），无 secondhand 信号。
