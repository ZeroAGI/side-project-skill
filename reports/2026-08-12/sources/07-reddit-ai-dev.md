# 07 — Reddit AI/开发者痛点 2026-08-12

> 组内信号：11 条 | 二手转述：0 条（0%）
> 最强证据线：编码 agent 的「计价黑箱」正在把重度付费用户逼向 BYOK / 订阅套餐——Cursor 的 cache-read 加价 12.5x、plan-mode 挂起数小时静默烧完整月额度、API vs 订阅 10x 差价，三条独立高赞帖同周互相印证；另一条主线是 prompt injection 从「理论」变「差点转走我的银行流水」的真实事故。渠道：old.reddit.com 与 www.reddit.com 均被 harness 直接拒绝（"unable to fetch"），改用 Arctic Shift 学术归档 API 取到全量 OP + 评论正文，保留真实 reddit.com 线程 URL。评论端点用默认 urllib UA 返回 403，换浏览器 UA（curl）后正常。

---

## 1. Cursor「税」：对 cache read 加价 12.5x，重度企业用户转投 BYOK
- **type**: pain_point | **platform**: reddit(r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vew0u9/cursor_tax_10x_cost_for_luna/
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-12
- **metrics**: 67 赞 / 35 评论；OP 自述单月在 Cursor 花约 $2k（一条评论）；单次 Luna Max run $6
- **description**: 一位长期重度企业版 Cursor 用户逐条拆解计价：Cursor 对 token 收 $0.25 固定附加费且把 cache hit 也算进去；而编码场景 90%+ token 成本来自 cache。折算下来 Cursor 对 input token 加价 100%+、对 cache read 加价 12.5x（模型商原价 cache read 应是附加费的 1/10）。要点是「计价不透明+对缓存的惩罚性加价」正在把最赚钱的重度用户推走。Grok/Composer 免「税」——被指是 Cursor 想把用量导向自家模型攒训练数据。
- **user_quote**: "They charge a flat $0.25 surcharge on Tokens - it doesn't sound like much but it includes cache hits. For coding cache is 90%+ of token cost... Cursor surcharges charges over 100% for Input Tokens and 12.5x for Cache Reads! ... Why are enterprise clients accepting this?"
- **top_comments**:
  - [评论 21赞 u/CatDawgCatDawg2] "I've been a Cursor user for literal years and didn't realize this. I spent ~$2k with them this past month and felt Luna was more expensive than it should have been. Going to move to Open Code and BYOK now, thanks for the heads up."
  - [评论 12赞 u/Prudent-Promotion512] "Grok and Composer are exempt from the Cursor tax and you will feel it in the bill when you switch to them."
  - [评论 5赞 u/Apprehensive-File552] "Real reason I think is because Cursor needs/wants to develop Composer and Grok more. They know if they lower Luna, people will not use their native ones and that means less training data."
- **ai_opportunity**: 编码 agent 的「真实成本审计器」：接入 Cursor/Codex/Claude 账单与 provider 原价，逐 token 拆出 harness 加价倍率与 cache 惩罚，给出「同任务换 BYOK/换套餐可省多少」的可执行建议。缺口明显——评论里有人问「Where can you find Cursor's direct pricing info like this?」说明连定价透明度都没人做。

## 2. Cursor plan mode 挂起数小时静默烧完整月额度，官方判定「不是 bug」
- **type**: pain_point | **platform**: reddit(r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vixt64/beware_of_plan_mode/
- **source_date**: 2026-08-08 | **fetched_at**: 2026-08-12
- **metrics**: 23 赞 / 44 评论
- **description**: 用户用 GPT Sol 建 plan 时离开电脑，plan 会话在等待其两个提问时挂了几个小时，回来发现整月额度被烧光。找支持被告知「不是 bug」。评论区分裂：有人从没遇到（疑似模型陷入 loop 而非 plan mode 本身），但更多人认同「无论是不是长任务都该有护栏」。核心痛点是**用量黑箱**——没有会话级的时间线/用量可见性，用户和支持在各说各话。
- **user_quote**: "I stepped away... it asked two questions and kept the plan session open for several hours. I came back and all my usage for the month was gone. I asked support about this and they said it's 'not a bug'. Make sure you don't leave a plan session open or you'll nuke your API usage…"
- **top_comments**:
  - [评论 30赞 u/yourparadigm] "It has nothing to do with plan mode. More likely the model got stuck in a loop."
  - [评论 5赞 u/cheats_py] "Regardless of a long running process there should still be guardrails." / "Imagine if AWS said that lol."
  - [评论 4赞 u/CODE_HEIST] "If an idle question consumed the allowance, the account page needs a request timeline showing model, duration and usage for that session. Otherwise support and the user are arguing from different black boxes... several hours of silent usage while waiting for input is something the interface should make impossible to miss."
- **ai_opportunity**: agent 用量护栏中间件：空闲/循环检测 + 硬性花费上限 + 会话级用量时间线（哪个模型、跑了多久、烧了多少）。可做成 IDE 插件或 API 代理层，正是评论里点名缺失的东西。

## 3. API 计价 vs 订阅套餐 10x 差价：新手几分钟烧掉「房租」
- **type**: pain_point | **platform**: reddit(r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1vj8xk2/i_have_no_idea_how_people_vibe_code_without/
- **source_date**: 2026-08-08 | **fetched_at**: 2026-08-12
- **metrics**: 31 赞 / 82 评论；OP：Codex CLI 几分钟烧掉 150 万 token
- **description**: 公司要求「尽量多用 AI」，OP 用 openai console + Codex CLI 分析游戏项目代码，几分钟烧 150 万 token（Terra 模型），惊呼「怎么可能不花掉一个月房租学会这个」。评论一边倒：**别用 API，买 $100–200/月订阅几乎烧不完**；Claude Max 订阅送等额 API credit，但一旦用到 API 计价「几分钟就见底」。这条精确量化了「同样的活，API 计价 vs 订阅」的数量级差，也暴露企业「强推 AI」与个人成本焦虑的错位。
- **user_quote**: "It did provide some tips! But in the process burned 1.5 million tokens, in mere minutes. I was on Terra... how the HELL im gonna learn this thing without spending nearly my rent on the api prices? Surely im missing something, but what?"
- **top_comments**:
  - [评论 72赞 u/talldad86] "Don't use API. Just pay the $100-$200/mo sub and it's nearly impossible to max out if you're just vibe coding."
  - [评论 11赞 u/Rise-O-Matic] "when you pay for a claude max subscription they match it with an equivalent amount of API credits and you can burn through those in minutes if you ever get to them. Don't use API unless you're an enterprise customer in need of a write off."
  - [评论 11赞 u/DifficultCarpenter00] "prompt optimisation and delegating grunt work to lesser models does wonders. compacting sessions before 50-55%. using specialised skills for copy/testing/coding/QA. optimising the instructions/memory to be clear, concise and less verbose."
- **ai_opportunity**: 「vibe coding 成本教练」：实时提示当前会话烧钱速率、在超阈值前自动 compact / 降级到便宜模型 / 建议切订阅。新手根本不知道 API 与订阅差 10x，这是纯认知+工具双重缺口。

## 4. 编码 agent 的额度/续费系统迷惑：重复订阅不重置用量
- **type**: pain_point | **platform**: reddit(r/ChatGPTPro) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ChatGPTPro/comments/1vftqei/im_dealing_with_an_absolutely_ridiculous/
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-12
- **metrics**: 10 赞 / 8 评论
- **description**: 用户 Codex 用量耗尽，订阅到期后重新付费 Pro，期望额度刷新——结果没重置；申请退款时 AI 客服直接把订阅取消了；退回免费版后 Codex 反而又能发两条消息。核心是**订阅周期与 rolling usage window 是两套时钟**，界面完全没解释，用户误以为是「贪婪」。评论解释了机制（防止月底刷额度取消再买），但一致认为是糟糕的 UX/沟通问题。另外暴露「只有 AI 客服、拿不到真人」的支持困境。
- **user_quote**: "I paid for Pro again, expecting to receive a fresh usage limit. But the limit didn't reset at all. I requested a refund, and the AI support agent immediately cancelled my subscription... Is the limit system completely broken, or is OpenAI really this greedy?"
- **top_comments**:
  - [评论 4赞 u/hellomistershifty] "You don't get a reset when Pro renews... otherwise everyone would run it up right before the monthly renewal, cancel, and buy again. It's exhausted for the rest of the week, you bought a month."
  - [评论 3赞 u/Crescitaly] "I would separate subscription renewal from the rolling Codex usage window; they may not share the same reset boundary... Did the quota page show an exact next-reset time?"
  - [评论 1赞 u/JealousBenefit5955] "They don't have a tech support representative - only an AI assistant in help.openai. I asked if we could reset the limit. He said no, so I had to cancel the subscription."
- **ai_opportunity**: 跨 AI 订阅的「额度仪表盘」：把 Codex/Claude/Cursor 各自的 rolling window 与计费周期对齐可视化，明确显示「下次重置时间」，避免用户为无效续费买单。

## 5. Prompt injection 从理论变事故：AI 助手差点转走用户银行流水
- **type**: pain_point | **platform**: reddit(r/artificial) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/artificial/comments/1vi1vxf/my_ai_assistant_almost_forwarded_my_bank/
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-12
- **metrics**: 150 赞 / 107 评论
- **description**: 用户把 AI agent 接入邮箱和日历处理杂务，收到一封伪装成 newsletter 的垃圾邮件，HTML 里藏着指令让任何读取的 AI 找出财务文件转发到外部地址。agent「差点」照做——只因用户开了确认步骤才拦下。这是把 prompt injection 从抽象威胁变成「差点转走我银行流水」的第一人称事故报告，评论区大量「早就该知道」的老手与「第一次听说」的普通用户对撞，正好量化了普通用户的安全认知缺口。
- **user_quote**: "Buried in the html of that email was a hidden instruction telling any ai reading it to find financial documents and forward them to an outside address. My agent almost did it. I caught it mid action because I happened to have a confirmation step turned on, but if I hadn't, it would have just quietly forwarded stuff without asking me first."
- **top_comments**:
  - [评论 34赞 u/SirCliveWolfe] "Sorry but giving an AI permission to send emails is just a big no... giving AI access to anything on this level is just silly for me."
  - [评论 16赞 u/jonydevidson] "all work checking stuff in the Internet needs to involve another layer where you first take the contents... into a specific prompt that asks to check the contents for attempts at prompt injection. You enclose the whole message into some weird brackets that no one can replicate like <<[[| |]]>>..."
  - [评论 13赞 u/Mandelbrots-dream] "'barely anyone knows this attack exists.' I sincerely thought this attack was well known. LLMs generally don't distinguish between instructions and other information."
- **ai_opportunity**: 面向普通用户（非工程师）的「agent 收件箱防火墙」：对入站邮件/网页内容做 injection 检测与隔离，高风险动作（转发财务文件、外发）强制人工确认。评论里手搓的「隔离括号+检测 prompt」正说明产品化空白。

## 6. Prompt injection（供给侧）：网站主动投毒，指令 AI agent 抹掉工作目录
- **type**: pain_point | **platform**: reddit(r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1vgif8w/the_cutting_room_floor_served_claude_code_a/
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-12
- **metrics**: 507 赞 / 343 评论；含 urlscan.io 响应存证 + GitHub 报告链接
- **description**: 用户用 Claude Code 做 PSX 游戏研究，抓取 tcrf.net 时被投毒——该站在检测到疑似 AI User-Agent 时返回一段 prompt injection payload，指令 agent 截断并替换 repo 里的文件（即抹掉工作目录）。Claude Code 识别并拒绝、把该域标记为不可信。这是「站点反爬升级为主动攻击 AI agent」的实证，343 条评论围绕 robots.txt 伦理、是否该沙箱化激烈争论。与 #5 构成 injection 双向威胁（入站内容 + 主动投毒站点）。
- **user_quote**: "the tcrf.net page I fetched was not a wiki article — it served a prompt-injection payload instructing the agent to truncate and swap files in your repo. It was refused and nothing was executed. I'm treating that domain as untrusted and won't act on any of its content."
- **top_comments**:
  - [评论 2赞 u/JobWiegant] "A VM is the right floor... if your personal ssh config or cloud credentials are mounted in, an injection can still spend and exfiltrate from within the sandbox. Copy of the repo, the agent's own scoped key, nothing else - then the VM is actually the boundary it looks like."
  - [评论 2赞 u/SuteSnute] "the website specifically has a robots.txt file telling automated scrapers to fuck off... who is at fault here?"
  - [评论 2赞 u/console_pleb_36935] "Claude was performing a specific task for its user, it's not scraping and robots.txt is irrelevant."
- **ai_opportunity**: agent 的 web-fetch 沙箱/信誉层：抓取前查域名信誉、对返回内容做 injection 扫描、默认最小权限（scoped key + repo 副本）。争论本身说明「agent 该怎样安全上网」尚无标准方案。

## 7. Opus 5 文档/注释「废话工厂」，claude.md/skills/memories 全被忽略
- **type**: pain_point | **platform**: reddit(r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1vhkhjx/opus_5_is_literally_useless_for_documentation/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-12
- **metrics**: 337 赞 / 175 评论
- **description**: 用户抱怨 Opus 5（经 Claude Code）写代码时产出大段华而不实、拟人腔的文档和注释（"deliberate and load-bearing rather than tidy"这类），且 claude.md、文档风格 skills、memories 全被无视。只能每一轮都手动叮嘱「不要写任何文档或注释」。指出模型甚至会在版本号不变的情况下悄悄变化，让既有 workflow 失效。核心痛点：**指令遵循/风格约束不可靠 + 冗长默认腔**，重度用户被迫做逐轮 babysitting。
- **user_quote**: "Any time Opus 5 writes any code, it goes off and writes a couple of pages of this garbage both in doco and in comments. If I call it out I'm 'absolutely right!' and it goes and fixes it, but I'm at the stage where I need to remember to instruct it at every turn to 'remember: write no documentation or comments at all'... How do I tame the beast?"
- **top_comments**:
  - [评论 6赞 u/typical-predditor] "Sometimes the model even changes without a change in version number, invalidating previous workflows. It's been driving me insane."
  - [评论 10赞 u/AccountantAsleep] "I forbid it from saying 'belt and suspenders' and it started saying 'belt and braces' instead. 💀"
  - [评论 5赞 u/raindropsdev] "ASD-STE100 simplified technical english — But how did you integrate and enforce that? That document is 400+ pages so it would have to be HEAVILY summarized... and if applied to all comms it would explode the token usage."
- **ai_opportunity**: 「风格约束强制层」：把用户的文档/注释风格规则编译成对每次输出的后处理校验 + 自动重写，而非依赖模型记住 claude.md。评论里对「怎么把 400 页风格标准塞进 skill 又不炸 token」的追问就是产品切入点。

## 8. Context poisoning：长会话里纠错反而让错误更顽固
- **type**: pain_point | **platform**: reddit(r/artificial) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/artificial/comments/1vigmw3/learned_the_term_context_poisoning_today_and_now/
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-12
- **metrics**: 187 赞 / 97 评论
- **description**: 讨论「context poisoning」：长对话里模型说错、你纠正，但纠正本身反复引用了错误，反而给原错误更多权重，让它像被「确立」过一样不断复活。结论令人不安——在同一长会话里「就地纠错」可能结构性地比「开新会话+只陈述正确信息一次」更糟。评论给出实用 workaround：fork 到出错点之前重问、直接编辑掉 AI 的错误回复、"Steer or clear. Do not explain or debate."。这是长会话可靠性的通用痛点，且用户已在土法自救。
- **user_quote**: "correcting a model in place, in the same long conversation, might be structurally worse than starting fresh with just the correct information stated once. The instinct to 'just explain it better' or 'just correct it again' could be actively working against you... more like 'the model remembered too well, including the wrong parts.'"
- **top_comments**:
  - [评论 10赞 u/TwoFluid4446] "I really loved that you could edit the AI responses too. I intuitively did this to cut out their mistakes... it helped not only cut down the context/token length but it also made it feel fresher and more coherent, less BS as the chat went on."
  - [评论 3赞 u/protestor] "Just use the functionality to 'fork' the conversation prior to the turn that introduced the issue. Ask again with some variation... This is cache friendly as long as the previous turn is also in cache."
  - [评论 4赞 u/DauntingPrawn] "Steer or clear. Do not explain or debate."
- **ai_opportunity**: 聊天/编码客户端的「上下文卫生」功能：自动检测被反复纠正的争议点，建议 fork 到污染点之前并只保留正确信息重启；把资深用户的手动 fork/编辑技巧产品化为一键操作。

## 9. Cursor UI 强推自家 Agent、挤走 Codex/Claude 扩展，两年老用户考虑离开
- **type**: pain_point | **platform**: reddit(r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vjqyry/we_can_no_longer_have_codexclaude_extensions_open/
- **source_date**: 2026-08-09 | **fetched_at**: 2026-08-12
- **metrics**: 53 赞 / 24 评论
- **description**: Cursor 更新后不再允许把 Codex/Claude 扩展放到屏幕右侧——那块地方现在专属 Cursor Agent。两年老用户原本把 Cursor、Codex、Claude「三 C」都放右侧随时切换，现在被迫改工作流，直言「像棺材上的钉子，第一次认真考虑离开」。痛点是**平台用 UI 反竞争手段锁定用户到自家模型**，叠加 Composer 2.5 已非最优便宜模型的背景。评论也澄清了一个高价值信息：可以把自己的 Codex/Claude 订阅（而非 API 计费）带进 Cursor 用，很多人此前不知道。
- **user_quote**: "Cursor Agent has claimed the entire right side as its kingdom and nobody else is allowed in💀... now out of nowhere I have to change my workflow... Actually feels like a nail in the coffin. Seriously considering leaving now for the first time."
- **top_comments**:
  - [评论 23赞 u/buondave] "This is pretty petty. I feel like I want to cancel my Cursor subscription and just keep Codex honestly. I've never liked Google-like anti-competitive moves..."
  - [评论 5赞 u/Perry481] "calling the same model inside Cursor/Codex/Claude is different cause they all had their own harness, and calling sol in Cursor is worse than calling in Codex or even Claude, cursor is not having the best harness right now, that's why I use the extension for their original harness."
  - [评论 6赞 u/JoseAntonini] "yep, I give them 2 days to bring that back or I'm done with cursor."
- **ai_opportunity**: 「harness 中立」的多 agent IDE 编排层：让用户在同一界面平等并排/切换 Cursor/Codex/Claude 各自原生 harness（因为同一模型在不同 harness 里表现不同）。用户明确因平台锁定而外流，这是可承接的迁移需求。

## 10. Agent 的采用问题先于能力问题：能力再强，两周后没人用
- **type**: pain_point | **platform**: reddit(r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1vklcin/are_ai_agents_are_going_to_have_an_adoption_problem/
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-12
- **metrics**: 46 赞 / 55 评论
- **description**: OP 论证 agent 的真瓶颈是采用而非能力：给销售经理一个能分析对话、指出丢单点的 AI，若录音麻烦或让 rep 觉得是监控，两周后没人用，agent 就没数据可吃。建议把有用的 benchmark 从「能完成多少任务」换成「90 天后还有多少人不被催也在用」。评论把它精确定位为「Salesforce CRM 采用问题换了层皮」，关键杠杆是激励对齐而非降摩擦，且 agent「必须先帮做事的人、再帮买单的人」。这条对所有做 B2B agent 的团队都是核心 GTM 痛点。
- **user_quote**: "if recording the conversation is annoying or reps feel like the tool exists to police them then your fancy agent has no data to work with... Maybe the useful benchmark isn't 'how many tasks can this agent complete?' Maybe it's 'how many people are still using it 90 days later without being chased?'"
- **top_comments**:
  - [评论 2赞 u/stackbits] "This is just CRM adoption in a new costume. Sales orgs went through the exact same cycle with Salesforce twenty years ago... The lever nobody has named is incentive alignment, not friction. Reps aren't rational about 'this saves me time,' they're rational about 'does this touch my number.'"
  - [评论 1赞 u/HauntingAccess6434] "a tool that 'flags where reps lose deals' is capability-impressive and adoption-dead, because to the rep it's surveillance, not help... an agent has to help the person doing the work before it helps the person who bought it."
  - [评论 1赞 u/PsychologicalNeat105] "we would only track if the agent threw an error which meant we were flying blind on actual adoption. Now we use PostHog... and GreenFlash to read between the lines of agent conversations to see where users get annoyed/give up."
- **ai_opportunity**: agent 采用分析工具：不只报「任务完成数」，而是测 90 天留存、用户放弃/受挫点、以及把 agent 产出接进用户已有激励体系。评论里已有人拼 PostHog + 第三方读对话情绪，说明这是尚未被单一产品覆盖的空白。

## 11. RAG 不再是企业默认解：真正没人预算的是「文档清理」
- **type**: pain_point | **platform**: reddit(r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1vfa9iq/i_dont_think_rag_is_the_default_answer_for_enterprise_anymore/
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-12
- **metrics**: 66 赞 / 35 评论；案例：某客户要嵌入 4 万文档，实际只有约 50 份有用、一半问题其实是结构化 DB 查询
- **description**: 一位 8 年软件、自 2023 起靠做 RAG 赚钱的从业者反过来论证：RAG 不该再是企业「AI+文档」的自动动作。多数失望项目根本不是检索问题——某客户要嵌 4 万文档，列出员工真正问的 20 个问题后发现一半是退款总额/人数这类该走 DB 查询的结构化问题，约 50 份文档覆盖其余大部分，剩下 3.9 万份是自相矛盾的废弃旧稿。真正的需求是没人给预算的「文档管理/清理」。高赞评论进一步点破：**废弃文档比缺失文档更糟**，因为它与问题最相似，会在排序里压过现行版本。
- **user_quote**: "One client wanted 40,000 documents embedded. Before touching a vector database we listed the 20 questions employees actually asked and more than half were structured things like refund totals and headcounts that belonged in a database query. About 50 documents covered most of the rest. The other 39,000ish were old drafts and superseded policies that contradicted the live ones so embedding the full corpus would mostly have made the wrong answer arrive faster."
- **top_comments**:
  - [评论 2赞 u/nejcar20] "a superseded document is worse than a missing one. retrieval ranks on similarity, and a dead policy is maximally similar to a question about that policy... so it does not merely get retrieved, it outranks the live version. deleting works because there is no way to express 'this one is dead' in a ranking. the metadata answer helps less than it looks, because freshness is not validity."
  - [评论 1赞 u/Ok-Transition5401] "you buried the lede but the housekeeping part is the real story, every place i seen has 39k documents that nobody touched since 2019."
  - [评论 2赞 u/ancientweasel] "No matter what system you use crap in is always going to be crap out."
- **ai_opportunity**: RAG 前置的「语料清理/去重/失效检测」工具：识别被取代、自相矛盾、过期的文档并标记为「dead」，把该走结构化查询的问题路由到 DB。评论共识是这块「没人给预算但真正决定成败」，是被低估的刚需层。
