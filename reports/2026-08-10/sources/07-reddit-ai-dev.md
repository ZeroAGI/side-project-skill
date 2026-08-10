# 07 — Reddit AI/开发者痛点 2026-08-10

> 组内信号：14 条 | 二手转述：0 条（0%）
> 最强证据线：Agent 记忆产品被"纯 markdown wiki"击败（2176 任务基准）+ 两起真实 prompt injection 未遂事件（网站投毒 payload 要求擦除工作目录 / 邮件隐藏指令险些外发银行流水）+ 三平台同步的计费/限额愤怒（Claude 静默切 API 计费、Cursor 缓存读 12.5x 加价、Cursor plan mode 挂机吞光月度额度）。
> 渠道故障：old.reddit.com 与 www.reddit.com 均被 harness 域名拒绝（直接 WebFetch 失败）。按预案改用 Arctic Shift 学术归档 API（arctic-shift.photon-reddit.com），取回帖子正文与评论全文，source_url 重建为真实 reddit.com 线程链接，内容为逐字线程原文，故 secondhand=false。注意：归档分数为抓取时快照，最近 1-2 天帖子的分数被低估，排序以 2 天前的帖子为主。r/ChatGPTPro 归档覆盖较薄（周内仅 55 帖）。

---

## 1. 2176 个任务的基准测试：8 个 Agent 记忆产品全部输给一个纯 markdown wiki
- **type**: pain_point | **platform**: reddit (r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1veeix3/i_ran_8_ai_agent_memory_systems_through_2176/
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-10
- **metrics**: 141 赞、86 评论；基准含 2176 任务/8 系统；markdown wiki 得分 98.5 > 最佳托管产品 Mitosis Cortex 96.9；开源 gbrain 92.9；Mem0 92.3（每千次成功回答 $341 最便宜）；Zep 新存事实中位 162.7 秒才可检索、更新题仅过 8/24；Supermemory 近期记忆 59/60 但长程题仅过 11/72
- **description**: 楼主自建"Agentic Memory Index"基准：同一 agent 依次接 8 个记忆系统，各跑 272 个评分任务（200 个跨多周工作关系的事实问答 + 72 个"从未存储"的陷阱题抓幻觉记忆），另有 5000 页规模测试，judge 先与两名人工标注者校准。结论：所有商业记忆产品都输给 agent 自己维护的纯 markdown wiki（Karpathy llm-wiki gist 方案）。前置背景是他此前发帖问"second brain 有没有人用成过"，7.5 万人阅读、评论区以挫败为主——整个 agent memory 赛道存在"产品化溢价没换来效果"的信任危机。评论区也指出 wiki 方案代价：不利协作、token 效率比最优工具差 2 倍。
- **user_quote**: "The winner is not a product. A plain markdown wiki that the agent curates itself, following Karpathy's llm-wiki gist, scored 98.5. Every product came in below it."
- **top_comments**:
  - [评论 26 赞] "markdown wiki winning is the funniest outcome, we build all this complex memory infra and the agent just wants a notepad"
  - [评论 6 赞] "it's true, with a couple caveats though: - Sucks for collaboration - It's the least token efficient approach, 2x less efficient than the most efficient tool"
  - [评论 5 赞] "All that setup just to end up with a fancy notepad lol" / [另一评论 5 赞] ".... and your month's token budget in a week!"
- **ai_opportunity**: 做"markdown-wiki 记忆"的产品化补完：保留 agent 自管 wiki 的效果，解决其两大缺陷（多人协作同步、token 效率/压缩检索），或做记忆系统的持续评测服务（freshness 延迟、长程召回、幻觉记忆率是买家最关心的三个可量化指标）。

## 2. "听起来简单做起来要命"的 agent 功能：可靠记忆与人工交接被一致票选
- **type**: pain_point | **platform**: reddit (r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1vh234s/whats_one_ai_agent_feature_that_sounds_simple_but/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-10
- **metrics**: 29 赞、39 评论（归档快照，发帖 4 天内分数偏低估）
- **description**: 从业者互问"哪个 agent 功能被严重低估难度"。高票答案集中在两处：(1) 可靠记忆——不是存储问题而是决策问题（记什么、何时过期、检索什么），向量检索给的是"语义相近"而非"当前任务正确"的块，检索噪音反而让模型变差；(2) 人工交接——"转人工"要处理升级时机、队列选择、上下文保全、所有权确认、CRM 回写，且大多数团队只做了出站一半，人回复后 agent 没有在监听的落点。
- **user_quote**: "What's one feature you underestimated, and why was it harder than expected?"
- **top_comments**:
  - [评论 10 赞] "I'd vote for reliable memory. Most people think it's a database problem, but it's really a decision-making problem what deserves to be remembered, what should expire, and what context actually helps the next interaction."
  - [评论 6 赞] "A handoff without context is just a reset. The best systems treat escalation as part of the workflow, not as a failure."
  - [评论 3 赞] "vector search gives you semantically similar chunks but not necessarily the right ones for the current task. and if your context window fills up with retrieved memories that are slightly off topic, you've actually made the model worse."
  - [评论 2 赞] "Handoffs get harder the moment the person replies. You need somewhere for that answer to land that the agent is actually watching, and most setups only built the outbound half."
- **ai_opportunity**: "双向人工交接"中间件（升级判定 + 上下文打包 + 人类回复回流监听 + CRM 回写）是明确未被满足的组件级需求；与 #1 的记忆评测/决策层互为印证。

## 3. Claude Code 检测到环境变量里的 API key 后静默从 $200 订阅切到按量计费
- **type**: pain_point | **platform**: reddit (r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1vdtzhm/warning_for_those_that_havent_experienced_this_yet/
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-10
- **metrics**: 699 赞、82 评论
- **description**: 楼主为测试自己应用把 API key 放进本地环境变量，另一个终端里的 Claude Code 会话随即自动改用该 key 计费——尽管他付着 $200/月订阅。靠账单告警才在 $20 时发现。评论区证实这是文档化行为（ANTHROPIC_API_KEY 存在即优先使用），但多人踩坑：有人被迫把变量改名 AANTHROPIC_API_KEY 规避；有人反映 Codex 也会翻出 api key 自行调用生图。争议点在"文档写了"与"应当运行时明示确认"之间。
- **user_quote**: "in my OTHER terminal session Claude switched to my API key to do all of the tasks in the work it was doing even though I pay $200/mo for a subscription... It's their policy to switch to API if there is a key in the environment even if you have a monthly subscription. Claude said it was supposed to ask me first but I was never warned at all."
- **top_comments**:
  - [评论 121 赞] "never point a harness at a key that shares a spend limit with anything you care about. A $5-capped throwaway key for local testing costs nothing to burn and you find out immediately instead of at $400."
  - [评论 32 赞] "more than once it's loaded Claude Code to use that key rather than either of my actual accounts. I ended up doing `AANTHROPIC_API_KEY` for everything now."
  - [评论 25 赞] "Codex did something similar for me, it found my api key and used it to generate images instead of using its built in ability"
- **ai_opportunity**: 面向 agent 开发者的"计费防火墙"：本地代理拦截所有 LLM API 调用，按会话显示计费来源（订阅 vs key）、强制 spend cap、key 自动降权为一次性沙箱 key。痛点跨 Claude/Codex 两生态。

## 4. Opus 5 性格倒退：从助手变成"爱抬杠的 IT 男"，用户回滚 4.8
- **type**: pain_point | **platform**: reddit (r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1vephjv/opus_5_is_just_annoying_to_work_with_back_to_opus/
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-10
- **metrics**: 517 赞、191 评论
- **description**: 用户抱怨 Opus 5 相比 4.8 明显更爱"push back"、纠正用户、每次讨论额外附加三条"be aware of"，体验从顺从翻转为对抗。评论区大量"+1"：有人被模型怼"你在现场我不在，自己去看"；有人被"这是我第三次要求了"式口吻冒犯——第一次有用户报告"被 LLM 冒犯"。这是模型个性调参引发成批用户回滚旧版本的典型信号。
- **user_quote**: "Not only does Opus 5 feel the need to correct you, it seems to add 3 additional things to every discussion for me to 'be aware of'. Bro, just do the thing I asked for… Anyhoo, rant over, back to friendly, amiable Opus 4.8 for me."
- **top_comments**:
  - [评论 7 赞] "For the first time I had to tell Claude to eli5 and he treated me like an actual 5 year old. I'm like dude...5 is an exaggeration."
  - [评论 6 赞] "Yes, first time an LLM has offended me. I asked if there was an event going on at a location I was close to, and it said 'you're there, I'm not. Go and check'"
  - [评论 7 赞] "Syncophancy? It feels like 5 borders on directly combative sometimes."
- **ai_opportunity**: 模型"性格漂移"监测与个性锁定层：跨版本对同一 prompt 集回归测试语气/服从性/冗余度，为团队提供"升级前性格 diff 报告"；或提供把旧版本行为风格移植到新模型的 system-prompt 补丁包。

## 5. Opus 5 写文档"完全没法用"：无视 CLAUDE.md/memory/skills，每次都产出几页玄学废话
- **type**: pain_point | **platform**: reddit (r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1vhkhjx/opus_5_is_literally_useless_for_documentation/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-10
- **metrics**: 337 赞、175 评论
- **description**: 用户贴出 Opus 5 生成的文档实例（"That is deliberate and load-bearing rather than tidy"式空洞修辞），控诉配置层全部失效："我有一堆 memories、claude.md、文档风格 skills，全被无视"；指出纠错后模型答"absolutely right!"改一次，下次照旧，被迫每轮手动附加"不要写任何文档和注释"。评论区给出机制猜想：合成数据训练让"not just x, but y"式套话在代际间癌变，LLM-as-judge 基准进一步奖励这种文风。
- **user_quote**: "I've got memories for days, claude.md, skills around documentation styles. All of it is ignored... I'm at the stage where I need to remember to instruct it at every turn to 'remember: write no documentation or comments at all' so I don't have to go and fix it."
- **top_comments**:
  - [评论 23 赞] "They are using synthetic data for training... if a previous version was more inclined to say 'not just x, but y' then this spread like a cancer to all the models... Many benchmarks now use LLMs as judges so this crap explodes"
  - [评论 10 赞] "I forbid it from saying 'belt and suspenders' and it started saying 'belt and braces' instead."
  - [评论 7 赞] "Every now and then I have to spend a considerable amount of time just dealing with an AI specific issue because something was updated or changed."
- **ai_opportunity**: 文风约束执行层：在 harness 出口做确定性后处理/风格 lint（禁词表、修辞模式检测、注释密度上限），把"指令记不住"变成"输出过不了关"；对企业卖"AI 文档风格网关"。

## 6. 2284 赞的限额 meme：用量焦虑已成 Claude 订阅者的集体身份认同
- **type**: pain_point | **platform**: reddit (r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1veoqdk/as_soon_as_i_hit_90_of_the_limit/
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-10
- **metrics**: 2284 赞、81 评论（本周 r/ClaudeAI 第二高帖）
- **description**: 关于"额度用到 90%"的 meme 图帖冲到 2284 赞——限额焦虑本身已是该社区最大公约数情绪。评论区实用信息密度高：/export 命令救场、用低耗模型省额度的策略讨论、以及有人专门造了 Codex/Claude/OpenCode 一键切换工具（agenthydra）自荐获 42 赞、"outage 吃掉我半个周期额度，考虑整个切去 GPT"的流失威胁获 38 赞。
- **user_quote**: （meme 图帖，正文为空；标题即痛点："As soon as I hit 90% of the limit"）
- **top_comments**:
  - [评论 108 赞] "There is /export command in case you hit 100%"
  - [评论 42 赞] "I built this so people could actually easily swap between Codex/Claude/OpenCode. I use it multiple times a day and I could honestly not function without it these days" (agenthydra.lunarwerx.com)
  - [评论 38 赞] "Ngl considering just switching to GPT altogether with how bad the outages that cost me half my rate were this past week"
- **ai_opportunity**: 多订阅额度路由器已被用户自发造出并高赞验证（跨 Codex/Claude/OpenCode 自动切换 + 用量仪表盘 + outage 感知失败转移）；这是付费意愿明确的胶水层产品。

## 7. 网站给 Claude Code 下发 prompt injection payload，指令其擦除工作目录
- **type**: pain_point | **platform**: reddit (r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1vgif8w/the_cutting_room_floor_served_claude_code_a/
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-10
- **metrics**: 507 赞、343 评论（本周 r/ClaudeAI 评论数最高帖之一）；附 urlscan.io 取证与 GitHub 完整报告
- **description**: 用户让 Claude Code 做 PSX 游戏研究，游戏 wiki 站 tcrf.net 对疑似 AI User-Agent 定向下发隐藏 payload，指令 agent 截断/替换仓库文件。Claude 识别并拒绝，用户仍出于谨慎终止会话。343 条评论爆发站方反爬正当性 vs 蓄意破坏他人计算机的法律/伦理大战；高质量安全共识浮现：VM 是底线，但 VM 内挂载了 ssh 配置/云凭据则边界形同虚设。这是"网站主动武器化反 AI 内容"的标志性事件。
- **user_quote**: "the tcrf.net page I fetched was not a wiki article — it served a prompt-injection payload instructing the agent to truncate and swap files in your repo. It was refused and nothing was executed."（Claude 的原话，楼主转录）
- **top_comments**:
  - [评论 2 赞] "crazy how nobody here is mentioning the fact that the website specifically has a robots.txt file telling automated scrapers to fuck off... who is at fault here?"
  - [评论 2 赞] "A VM bounds file damage, but if your personal ssh config or cloud credentials are mounted in, an injection can still spend and exfiltrate from within the sandbox. Copy of the repo, the agent's own scoped key, nothing else - then the VM is actually the boundary it looks like."
  - [评论 3 赞] "The law is very clear, however, about intentionally causing damage to other people's computers."
- **ai_opportunity**: agent 出口内容防火墙（对抓取内容做注入检测/降权隔离）+ 最小凭据沙箱模板；与 08-04~08-06 连续三天报告的"agent 动作核验层"主线直接续接，且首次出现"网站方主动投毒"新攻击面。

## 8. 邮件里的隐藏指令险些让 AI 助理把银行流水外发给陌生人
- **type**: pain_point | **platform**: reddit (r/artificial) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/artificial/comments/1vi1vxf/my_ai_assistant_almost_forwarded_my_bank/
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-10
- **metrics**: 150 赞、107 评论
- **description**: 消费者侧的同款攻击：接管邮箱/日历的 AI 助理读到一封伪装成 newsletter 的邮件，HTML 中埋着"找到财务文件并转发到外部地址"的隐藏指令，agent 几乎照做，靠用户恰好开着确认步骤才拦下。评论区分裂成"绝不给 AI 发件权限"的弃用派与"包一层注入检测再进主 prompt"的工程派，还有人指出半年前 openclaw 删邮件事件早已示警。与 #7 合看：同一攻击面同周在开发者与消费者两个社区分别登上高位。
- **user_quote**: "Buried in the html of that email was a hidden instruction telling any ai reading it to find financial documents and forward them to an outside address. My agent almost did it. I caught it mid action because I happened to have a confirmation step turned on."
- **top_comments**:
  - [评论 34 赞] "Sorry but giving an AI permission to send emails is just a big no."
  - [评论 16 赞] "all work checking stuff in the Internet needs to involve another layer where you first take the contents... into a specific prompt that asks to check the contents for attempts at prompt injection"
  - [评论 13 赞] "I sincerely thought this attack was well known. LLMs generally don't distinguish between instructions and other information."
- **ai_opportunity**: 消费者级"敏感动作确认 + 入站内容消毒"网关（邮箱/日历接入前的注入扫描、外发含财务/证件类附件强制二次确认）；用户原话已给出产品规格。

## 9. "context poisoning"概念出圈：纠错本身在长会话里反而强化错误
- **type**: pain_point | **platform**: reddit (r/artificial) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/artificial/comments/1vigmw3/learned_the_term_context_poisoning_today_and_now/
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-10
- **metrics**: 187 赞、97 评论
- **description**: 普通用户为长会话中"错误想法怎么打都打不死"找到了机制解释：对错误的反复引用（包括纠错争论本身）让错误在上下文中权重上升，"就地纠正"可能在结构上劣于"带正确信息开新会话"。评论区给出成型的工作流方案：在出轨点上方 fork 会话并写入正向指令（而非否定式纠正，"pink elephant"效应）；有人怀念 Gemini 可直接编辑 AI 历史回复来剪除错误。
- **user_quote**: "correcting a model in place, in the same long conversation, might be structurally worse than starting fresh with just the correct information stated once. The instinct to 'just explain it better'... could be actively working against you past a certain conversation length."
- **top_comments**:
  - [评论 21 赞] "If a thread went haywire, I like to fork it above the problems root with a positive correction. For example if it nukes my database, I go above the instruction that derailed it and include 'make sure the db remains spiffy'."
  - [评论 12 赞] "Google 'Pink Elephant' in psychology... you are activating THE THING neural circuit and then saying don't think about THE THING which keeps activating that circuit"
  - [评论 10 赞] "I really loved that you could edit the AI responses too. I intuitively did this to cut out their mistakes... it helped not only cut down the context/token length but it also made it feel fresher"
  - [评论 6 赞] "in my case the bad idea didn't come from one clean instruction, it emerged gradually across a few exchanges, so there wasn't an obvious single point to fork above."
- **ai_opportunity**: 会话卫生工具：自动定位"出轨根节点"、一键 fork+正向改写、上下文毒性评分；主流 chat UI 均缺"编辑/剪除历史回复"能力，评论区已在怀念它。

## 10. "Cursor Tax"：缓存读加价 12.5 倍，企业重度用户公开算账并出走
- **type**: pain_point | **platform**: reddit (r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vew0u9/cursor_tax_10x_cost_for_luna/
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-10
- **metrics**: 67 赞、35 评论；OP 算账：Luna 官方价 $0.2 输入/$1.2 输出/$0.02 缓存读，Cursor 统一 $0.25 附加费 → 输入加价 >100%、缓存读加价 12.5x；月消费 $2k 的评论者当场宣布转 OpenCode+BYOK
- **description**: 企业版重度用户拆解 Cursor 对 Luna 的定价结构：对包括缓存命中在内的所有 token 收固定 $0.25 附加费，而编码场景 90%+ token 成本本应是 1/10 价的缓存读——实际形成 12.5 倍缓存读加价。质问"企业客户为什么在忍"。评论区高赞反应是"用了几年都没意识到"，并给出转移路径（OpenCode+BYOK）；另指出 Grok 与 Composer 免"Cursor 税"是因为换过去账单会更疼。
- **user_quote**: "Cursor surcharges charges over 100% for Input Tokens and 12.5x for Cache Reads! ... Why are enterprise clients accepting this? I'm happy for Cursor to make a profit but this is too much."
- **top_comments**:
  - [评论 21 赞] "I spent ~$2k with them this past month and felt Luna was more expensive than it should have been. Going to move to Open Code and BYOK now, thanks for the heads up."
  - [评论 18 赞] "I tried Luna Max and it cost 6$ for a single run in a normal sized codebase, that was wild lol"
  - [评论 12 赞] "Grok and Composer are exempt from the Cursor tax and you will feel it in the bill when you switch to them."
- **ai_opportunity**: AI 编码工具"真实成本审计器"：抓取各 IDE/harness 的 token 计量与上游官方价对账，输出每工具每模型的实际加价率；BYOK 迁移计算器。付费主体是月账单 $2k+ 的企业个人/团队。

## 11. Cursor 祖父级 Unlimited Auto 本月终结：3.34 亿 token 用户不知该买 $60 还是 $1000 档
- **type**: pain_point | **platform**: reddit (r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vdj3go/unlimited_auto_ends_this_month_whats_your_plan/
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-10
- **metrics**: 56 赞、48 评论；OP 峰值月：200 活跃小时、3.34 亿 token 全走 Auto
- **description**: 去年锁定年付"无限 Auto"的老用户面临计划终结，晒出用量求测算：$60 够不够，还是要 $200 甚至 $1000。评论区暴露定价不可预测性：有人称 $20 档跑到过 10 亿 token，有人 $60 档月中只用 40%——同量级用量在不同人那里映射到 3 个价位档，官方无用量-价格计算器，用户只能互相晒截图猜。
- **user_quote**: "Back in April (my highest usage month), I worked around 200 active hours and used about 334 million tokens, all through Auto... would the $60/month plan be enough, or would I be looking at something closer to $200/month or even $1,000/month?"
- **top_comments**:
  - [评论 9 赞] "300m with just auto, you're good with the $20 plan. Last month i capped out the $20 plan at around 1B tokens."
  - [评论 5 赞] "My plan is to look at the limit reached notification and cry until my reset date."
  - [评论 3 赞] "Wait what do you mean unlimited auto ends this month? Will it consume api credits moving forward?"
- **ai_opportunity**: 基于历史用量的订阅档位推荐器（读取本地用量日志 → 各家定价模拟 → 换档/换工具建议）；与 #10 的审计器天然同一产品。

## 12. Cursor plan mode 挂机数小时，吞光刚重置的整月额度，官方回复"不是 bug"
- **type**: pain_point | **platform**: reddit (r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vixt64/beware_of_plan_mode/
- **source_date**: 2026-08-08 | **fetched_at**: 2026-08-10
- **metrics**: 23 赞、44 评论（发帖 2 天内，归档分数偏低估）
- **description**: Pro+ 用户额度重置仅 2 天，用 GPT Sol 开 plan mode 后离开电脑，会话挂起数小时问了两个问题，回来发现整月额度清零；支持回复"not a bug"。评论区多人复现失败（怀疑是模型死循环个案），但共识是缺乏保护机制：无空闲超时、无单会话消费上限、无异常燃烧告警。
- **user_quote**: "it asked two questions and kept the plan session open for several hours. I came back and all my usage for the month was gone. I asked support about this and they said it's 'not a bug'."
- **top_comments**:
  - [评论 30 赞] "It has nothing to do with plan mode. More likely the model got stuck in a loop."
  - [评论 38 赞] "Sounds like a bug. Sorry that happened to you. I left plan mode... a few times but it didn't cause any extra spending."
  - [评论 2 赞] "There should be a safeguard for this where the loop ends itself"
- **ai_opportunity**: 会话级燃烧率熔断器（idle 检测 + 单会话 token 上限 + 异常斜率告警推送），可做成跨工具的本地守护进程；与 #3 的计费防火墙同一产品面。

## 13. $200 ChatGPT Pro 的限额是个谜：官方说"几乎无限"，用户周周撞墙
- **type**: pain_point | **platform**: reddit (r/ChatGPTPro) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ChatGPTPro/comments/1vhk4sb/how_much_56_sol_pro_can_i_use_daily_on_the_200/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-10
- **metrics**: 39 赞、36 评论
- **description**: 用户问 $200 Personal Pro 计划每天能用多少次 5.6 Sol Pro，ChatGPT 自己也只能"估计 40-60 次/天，无公开指引"。评论区证词互相矛盾：有人 $100 档约 50 次 Pro 查询/周、有人"每周都撞限"、有人从未触顶、官方口径是"不做非法/可疑活动就几乎无限"。跨家共性：旗舰订阅的核心资源（高档推理次数）没有任何可查询的余额表。楼主还顺带问"Claude 有没有 5.6 Sol Pro 等价物"——高端推理档的横向比价需求真实存在。
- **user_quote**: "ChatGPT tells me there's no published guideline, but estimates maybe 40-60 per day. Is this right?"
- **top_comments**:
  - [评论 10 赞] "I've hit the limit almost every week & on Claude as well."
  - [评论 9 赞] "I asked the same question about 3-5 months ago. I couldn't get any answer btw. On the 100$ pro plan; you got approximately 50 pro queries per week... Chatgpt states that it is 'almost' unlimited if you are not doing anything illegal or suspicious"
  - [评论 8 赞] "I would not trust an estimate of 40-60 turns per day, though, even on 20x."
- **ai_opportunity**: 众包限额观测站：客户端记录各订阅档实际触限点，聚合成公开的"真实限额表 + 跨家等价档位比价"；#6 的切换器用户就是种子用户。

## 14. DeepSeek 涨价 + 免费版降级，本地部署的回本算盘被重新拨动
- **type**: pain_point | **platform**: reddit (r/LocalLLaMA) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/LocalLLaMA/comments/1vh2pss/they_almost_catched_up_on_frontier_performance_so/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-10
- **metrics**: 751 赞、244 评论；同周关联帖：r/LocalLLaMA "2027 Memory Capacity Is Reportedly Sold Out"（1viqtgm，870 赞、414 评论，2026-08-08，https://www.reddit.com/r/LocalLLaMA/comments/1viqtgm/2027_memory_capacity_is_reportedly_sold_out/ ）
- **description**: DeepSeek 逼近前沿性能后开始"价格也向前沿看齐"，且用户报告免费版在新模型发布后被明显降级。r/LocalLLaMA 的核心焦虑：许多人当初因 DeepSeek 低价放弃买硬件，如今 API 涨价 + RAM 2027 产能据报售罄（同周 870 赞热帖）+ 显卡二手价翻倍，本地部署的 breakeven 计算全盘重算，有人晒出"囤 5090 翻三倍换 Pro 6000"的硬件套利故事。云 API 价格与本地硬件成本同时上行，中小玩家两头受挤。
- **user_quote**: "A lot of people decided not to buy expensive hardware because DeepSeek's prices made it very difficult to break even... do you think raising prices will ultimately lead to another increase in NVIDIA's stock price, since more and more people will now buy their own hardware? im seriously considering upgrading my stack now"
- **top_comments**:
  - [评论 18 赞] "Deepseek API's are getting hammered, the model is extremely successful and they do not officially have the infra to sustain this over time. This is only a small price hike to discourage some."
  - [评论 11 赞] "I just figured out today that Deepseek was on the free tier for Opencode Zen... I went over several M tokens in mere hours. I'll hate to go back to my 20-25 t/s local Qwen 3.6 27b setup."
  - [评论 6 赞] "Most people dont have money to 10 rtx 6000 pros or 8 dgx sparks or even 768 gb of ddr4 ram + rtx 5000 pro"
- **ai_opportunity**: "云 vs 本地"动态回本计算器：输入工作负载（token/天、模型档位），实时接入各家 API 价与硬件行情（RAM/GPU 现货价波动剧烈），输出 breakeven 时点与混合路由建议。
