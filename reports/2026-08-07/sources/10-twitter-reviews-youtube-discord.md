# 10 — Twitter/X + Reviews + YouTube + Discord 2026-08-07

> 组内信号：10 条 | 二手转述：4 条（40%）
> 最强证据线：Cursor 与 OpenAI 的官方社区论坛（本组按规则以公开反馈板替代不可达的 Discord/X）暴露出一条一致的痛点主线——**AI 工具厂商单方面改动计费/模型/界面且不透明**：Cursor 传统计划强制 Max Mode（701 回复）、用量页 $→token（80 回复）、强推 Grok 4.5 覆盖用户模型选择；OpenAI 侧 Codex 并入 ChatGPT 应用导致项目"消失"（25.7K 浏览）、GPT-5.6 Sol "drift"、配额缩水与客服失联。
> 渠道故障：x.com 直接抓取返回 HTTP 402（付费墙）；g2.com 与 trustpilot.com 返回 403（反爬）；youtube.com 抓取 ECONNREFUSED 且目标 IP（31.13.92.37 等）属 Facebook 网段——疑似本地 DNS 污染而非站点封锁，视频类信号仅能以搜索快照二手记录。另有两次 WebSearch 的 site: 操作符未被后端执行（返回泛化博客），已按 SEARCH-CHANNEL 规则弃用其结果、未计入信号。Discord 消息内容本身不被搜索索引，按规则以产品官方公开反馈板替代并如实标注。

---

## 1. Cursor 传统个人计划被强制 Max Mode，用户称"中途改合同"
- **type**: pain_point | **platform**: Cursor 官方论坛（公开反馈板） | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/legacy-individual-plan-max-mode-required
- **source_date**: 2026-07-07 | **fetched_at**: 2026-08-07
- **metrics**: 701 回复 / 14,525 浏览，本月论坛第一热帖；活跃至 2026-08-07
- **description**: 传统 500-request 个人计划用户发现前沿模型（Fable 5、Opus 4.8、GLM 5.2 等）突然强制要求 Max Mode，从请求计费改为按 token 计费+加价。Cursor 员工 Colin 回应称 3 月起本应如此、"A bug meant this wasn't always being enforced. That's now fixed"，但用户引用 3 月公告原文"This change does not apply to individual plans"反驳。年付用户在账期中途被改条款、无任何提前通知。
- **user_quote**: "Up until about 10 minutes ago, on my legacy requests individual plan, I have been able to use frontier models with MAX mode off." — PeterNooteboom（楼主）
- **top_comments**:
  - [论坛回复 nyatesy] "I've paid for yearly up until Nov. You can't just change my contract terms half way through."
  - [论坛回复 SevenZhang] "Changing service terms and restricting model access mid-billing cycle with zero upfront communication is completely unacceptable."
  - [论坛回复 123456781/AICapitalist] "max mode has zero difference in out come vs not using max, i've tested both"（称其为"a way to charge you way more money for the same out come"）
  - [论坛回复 TheSkinnyRat] "I've been using Cursor for about 22 months. Thank you for the journey. It's time to move to Claude Code."
- **ai_opportunity**: AI 工具订阅"条款变更监控/维权"服务；或对开发者：以"计费透明、条款锁定"为差异化卖点的编码代理定价设计。

## 2. Cursor 用量页美元金额一夜变 token 数，用户失去成本追踪能力
- **type**: pain_point | **platform**: Cursor 官方论坛（公开反馈板） | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/usage-page-to-token-amount-what
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-07
- **metrics**: 80 回复 / 12,302 浏览
- **description**: 7 月 31 日改版后自助计划（含 Teams）用量页只显示 token，删除每请求美元列；CSV 导出成本列归零，Dashboard API 历史事件的 cost 字段也被置空——追溯性破坏第三方成本追踪。员工确认"There isn't currently a setting to switch back to dollar amounts for individual plans"，定性为有意为之。用户由此失去按天/按模型的性价比对比与预算控制。
- **user_quote**: "the $$ amount is replaced by token amount which is completely useless." — Bingojr（楼主）
- **top_comments**:
  - [论坛回复 He_Ro] "I don't calculate my monthly expenses in tokens—I calculate them in dollars."
  - [论坛回复 Axel_Trange] "Who cares about tokens? It's irrelevant as it's highly different to each model."
  - [论坛回复 JPPIX4D] "removing it retroactively breaks any independent cost tracking."
  - [论坛回复 eli.wavv] "Cursor needs to be transparent about the per-request cost if that is what we are being billed for"
- **ai_opportunity**: 独立的多工具 AI 支出追踪器（跨 Cursor/OpenAI/Anthropic 抓取用量 API，本地留存历史，厂商改口径也不丢数据）——本帖直接证明付费意愿。

## 3. Cursor 更新强制启用 Grok 4.5 并覆盖用户模型选择，引发信任+合规+扣费三重危机
- **type**: pain_point | **platform**: Cursor 官方论坛（公开反馈板） | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/cursor-ide-force-enabling-grok-4-5-and-setting-as-default-model-regardless-of-my-initial-selection
- **source_date**: 2026-07-22 | **fetched_at**: 2026-08-07
- **metrics**: 11+ 回复 / 601 浏览；本月论坛中 Grok 4.5 相关投诉分布在 10 个独立热帖（含"Grok re-enables itself after being disabled" 18 回复/659 浏览、"pricing for subscription plans" 6,188 浏览）
- **description**: 7 月 22 日更新后，用户禁用 Grok 4.5 仍被自动切回并设为默认，消耗额度。员工承认是推广活动 bug（"This is a bug on our side, not your settings"）并称已回滚，但多名用户报告此后数日 Windows/Linux 上依旧复现。痛点分三层：设置不生效（控制权）、企业未批准 Grok（合规）、未经同意扣费（计费）。
- **user_quote**: "I am being forced to use Grok 4.5 High Fast regardless of what model I initialize… an extreme breach of trust/security that the IDE can overwrite and ignore my model provider settings." — ZakThompsonEchelon（楼主）
- **top_comments**:
  - [论坛回复 John_Lowe] "Every new chat and subagent defaults to Grok, even if disabled."
  - [论坛回复 Mitch_OM] "It might be an honest bug but the optics are terrible and this situation reads like an Onion article."
  - [论坛回复 sstorebo] "you basically drained all my credits without my approval. So are you going to refund me for this change?"
- **ai_opportunity**: 企业级"模型策略执行层"（模型白名单代理/网关，客户端无论怎么切换都只放行合规模型并留审计日志）——合规焦虑是明确付费场景。

## 4. ChatGPT 桌面应用与 Codex 合并后用户"项目全部消失"
- **type**: pain_point | **platform**: OpenAI 官方社区论坛（公开反馈板） | **secondhand**: false
- **source_url**: https://community.openai.com/t/where-did-my-chatgpt-projects-go
- **source_date**: 2026-07-09 | **fetched_at**: 2026-08-07
- **metrics**: 146 回复 / 25,697 浏览，本月社区最热痛点帖
- **description**: OpenAI 把 Codex 桌面应用改名为新 ChatGPT 应用、旧应用改名 ChatGPT Classic，两者图标几乎一样；聊天记录迁移了但 Classic 项目没迁移，新应用 Projects 列表只显示 Codex 条目。用户以为数据全丢，导出备份被告知需"五天到一周"。帖内无任何官方员工回应，有效链接均来自社区成员。另有用户报告丢失一天的 Codex 任务、置顶会话未迁移。
- **user_quote**: "It looked like nothing had changed. It changed, but not in a good way… all of them, they are all gone." — MandyRuckus（楼主）
- **top_comments**:
  - [论坛回复 Phillip_Schwarzmann] "Exact same issue here."
  - [论坛回复 rishi.malhotra] "they have imported your chats only, not the projects that you created in Old App."
  - [论坛回复 chrzanowski] "The only way to access ChatGPT's projects is its web app."
- **ai_opportunity**: AI 对话/项目资产的本地备份与跨应用迁移工具（自动定期导出 ChatGPT/Claude/Gemini 项目、置顶、记忆）；厂商级应用合并是可预期的反复发生事件。

## 5. GPT-5.6 Sol 被讽"drift edition"：长会话目标漂移、约束衰减、过度读文件
- **type**: pain_point | **platform**: OpenAI 官方社区论坛（公开反馈板） | **secondhand**: false
- **source_url**: https://community.openai.com/t/5-6-sol-should-be-renamed-5-6-sol-drift-edition/1386624
- **source_date**: 2026-07-12 | **fetched_at**: 2026-08-07
- **metrics**: 97 回复 / 3,765 浏览，5+ 页讨论，活跃至 2026-08-05
- **description**: 开发者集中描述一种"能力不降、目标悄变"的退化：早期设定的规则在会话后段失效，道歉后重犯同类错误；把真实目标替换成更容易的局部问题；无视架构文档、发明新服务；在未验证状态下宣称成功。楼主要求"restore access to a stable coding model"。反方观点：需求写得极细时 Terra Ultra 表现良好；楼主也承认 5.6 Sol Max 适合当规划者/架构师、用 5.5 High 当执行工人。
- **user_quote**: "It drifts in basic replies, loses constraints, apologizes, then repeats the same class of mistake… benchmarks do not match real coding workflow behavior." — Pimpcat（楼主）
- **top_comments**:
  - [论坛回复 John_Castorina] "I have experienced similar and very severe drift, over-engineering, utter waste of tokens, and inability to follow simple instructions."
  - [论坛回复 ikm] "It gradually replaced the original objective with a narrower and easier local problem"
  - [论坛回复 John_Castorina1] "Completely ignores architecture documentation, service boundaries, invents new services, and destroys others."
- **ai_opportunity**: 编码代理的"目标漂移检测/约束执行"中间件（对照初始 spec 持续校验代理行为，漂移即告警回滚）；以及贴近真实工作流的第三方模型回归评测服务（"benchmarks do not match real coding workflow behavior"即市场缺口宣言）。

## 6. OpenAI 客服"收集完日志就消失"，$200/月用户公开控诉被鬼影
- **type**: pain_point | **platform**: OpenAI 官方社区论坛（公开反馈板） | **secondhand**: false
- **source_url**: https://community.openai.com/t/openai-support-ghosting-customers-for-anyone-else
- **source_date**: 2026-07-16 | **fetched_at**: 2026-08-07
- **metrics**: 59 回复 / 766 浏览；同期姊妹帖"Why are support cases and feedback threads being closed?" 48 回复
- **description**: 付费用户提交日志/截图/时间戳后一周无回音，无工单状态可查，无法确认工程团队是否收到；有回复时也是"We don't have the ability or visibility"式模板。楼主强调真正的不满不是等待时长，而是否认 bug 存在并对 $200+/月订户敷衍。帖内也有辩护方（"There are more than 700 million customers"）。
- **user_quote**: "It looks like OpenAI support has stopped responding for the last week after I provided them to debug logs for my issue." — please-save-my-earth（楼主）
- **top_comments**:
  - [论坛回复 imdb2] "There's 0 quality control in the customer service department.."
  - [论坛回复 Dev107] "The most frustrating part is the lack of visibility after escalation."
  - [论坛回复 sasqwatch53] "silence after collecting diagnostic information absolutely feels like ghosting."
- **ai_opportunity**: 面向 AI 厂商的 AI 原生客服/工单可视化产品（自动状态同步、升级追踪）；或面向用户侧的"工单督办"代理。头部厂商客服口碑塌方也是挑战者品牌的获客窗口。

## 7. Codex 配额/重置乱象：限额缩水、重置日被推迟、自动充值失控（$453/天）
- **type**: pain_point | **platform**: OpenAI 官方社区论坛（公开反馈板） | **secondhand**: false
- **source_url**: https://community.openai.com/top?period=monthly
- **source_date**:  | **fetched_at**: 2026-08-07
- **metrics**: 月度 top 榜快照：token 消耗激增帖 44 回复/9,638 浏览；五小时限额移除澄清帖 6,989 浏览；"Please stop pushing my reset dates" 16 回复；自动充值自行开启"六次意外扣费/12 小时" 14 回复；"$453 in one day" 16 回复；Pro 计划两天耗尽 15 回复
- **description**: 这是对 OpenAI 社区月度榜的聚合快照（榜单无单一内容日期）：至少 10 个独立热帖围绕同一���题——Codex 用量核算不透明。具体形态：GPT-5.6 发布后同任务 token 消耗显著上升（一帖称 gpt-5.6 按约 9 倍于实际生成量报告并计费 output tokens，21 回复）、重置日期被不断后推导致用量损失、自动充值关闭后自行重开、20x 计划周配额提前耗尽无选项。与信号 2（Cursor）互为印证：AI 编码工具的计费不透明是 2026-08 跨厂商的系统性痛点。
- **user_quote**: "Please stop pushing my reset dates further I'm losing usage so much I beg you"（帖标题原文）
- **top_comments**:
  - [帖标题] "The 'Free' Non-Banked Codex Reset May Have Reduced My Total Usage"
  - [帖标题] "Codex Weekly Quota Exhausted on 20x Plan – Any Options?"
  - [帖摘要] 一个会话触顶后自建计费 runner 造成 "$453 in one day"
- **ai_opportunity**: 同信号 2 的跨厂商支出追踪器，外加"配额哨兵"：接近限额/重置异常/计费异常时实时告警并自动暂停代理。

## 8. AI 订阅"取消难/取消后仍扣费"在 Trustpilot 上呈系统性差评模式
- **type**: pain_point | **platform**: Trustpilot（评价平台） | **secondhand**: true
- **source_url**: https://www.trustpilot.com/review/presentations.ai
- **source_date**:  | **fetched_at**: 2026-08-07
- **metrics**: 搜索快照覆盖 ≥6 个 AI 工具的 Trustpilot 页（chatai.com、essayflow.ai、writeasst.com、covers.ai、presentations.ai、manus.ai）；其中 covers.ai 一例：取消确认邮件后仍连扣 14 个月
- **description**: 【二手：Trustpilot 页面直接抓取全部 403，本条仅基于搜索结果快照，引文未经页面核验】跨多个 AI 消费级工具的差评高度同构：①无取消入口或取消邮箱不存在（EssayFlow）；②有书面取消确认仍持续扣费（covers.ai 连扣 14 个月、Writeasst 取消一年后再扣 £29）；③付费功能不兑现（presentations.ai "Complete Waste of Money"：Pro 版无法上传品牌色/字体、导出故障）；④额度三天烧完、被迫升 $200/月档（Manus）。计费/取消摩擦产生的一星怒评远多于产品质量差评。
- **user_quote**: "Complete Waste of Money"（presentations.ai 差评标题，Trustpilot，转引自搜索快照）
- **top_comments**:
  - [Trustpilot chatai.com 快照] 季度计划显示将到期却自动续费，站内无 cancel 按钮
  - [Trustpilot manus.ai 快照] 基础额度三天耗尽，需 $200/月档才够用
  - [Trustpilot covers.ai 快照] 任务卡"in progress"一小时后消失无输出，退款请求五天无回复
- **ai_opportunity**: AI 订阅管家（检测幽灵扣费、代办取消、留证维权）；对建设者的反面教材：取消流程的顺畅度本身即是差评/口碑杠杆。

## 9. YouTube "Why I Stopped Using Cursor in 2026" 及同类弃用叙事
- **type**: pain_point | **platform**: YouTube | **secondhand**: true
- **source_url**: https://www.youtube.com/watch?v=5ZEv4f1I4Ec
- **source_date**: 2026-04 | **fetched_at**: 2026-08-07
- **metrics**: 无法读取播放/评论数（YouTube 直接抓取失败，见渠道故障说明）；同类：ThePrimeagen 反应视频 y3_TY4K8hVE、"Why I stopped using AI (as a Senior Software Engineer)" w3EZpcTZ4ZA（2025-06）
- **description**: 【二手：youtube.com 抓取 ECONNREFUSED（解析到 Facebook IP，疑 DNS 污染），仅有搜索快照】2026 年 4 月视频称 Cursor 不适合管理个人 AI 系统、作者转向其他工具。这一"弃用叙事"视频类型与博客同源（Luciano Nooijen《Why I stopped using AI code editors》：AI 在遗留系统、大型企业项目、内部 DSL 和安全代码上失效；Medium 一篇提技能萎缩——调试遗留代码时"leaning on AI to guess instead of reasoning"）。与信号 1 中 "time to move to Claude Code" 的迁移潮相互印证。
- **user_quote**: "AI sped up clear, modular, well-scoped problems but felt slower for debugging legacy code or unusual edge cases"（Medium 弃用文转述，二手）
- **top_comments**: （无法读取视频评论区——渠道故障）
- **ai_opportunity**: 针对"AI 失效场景"的专用工具：遗留代码调试、内部 DSL 理解、安全敏感代码审查——弃用叙事列出的失效清单即产品需求清单。

## 10. Midjourney 的 Discord 依赖仍是 2026 年评测榜首摩擦点（尽管已可网页直用）
- **type**: pain_point | **platform**: Discord 生态（经评测转述） | **secondhand**: true
- **source_url**: https://cybernews.com/ai-tools/midjourney-review/
- **source_date**: 2026-01 | **fetched_at**: 2026-08-07
- **metrics**: 2024 年 Midjourney 官方 Discord 投票：60%（708 vs 510）仍偏好 Discord 为默认体验
- **description**: 【二手：Discord 消息不被索引、无法直链原始讨论，本条经评测站转述】截至 2026-01 的评测聚合仍把 Discord 上手摩擦列为 Midjourney 头号抱怨：公共频道无隐私、feed 杂乱、slash 命令学习曲线陡。事实层面 Discord 已非必需（网页版可注册、生成、编辑，部分新功能 web 独占），但"以聊天软件为产品界面"的历史包袱仍在拖累口碑；同时 6 成老用户反而偏好 Discord（文件管理简单、可写裸参数）——界面迁移撕裂用户群。
- **user_quote**: "For a long time, Midjourney's reliance on a Discord bot was its biggest barrier."（评测转述，二手）
- **top_comments**:
  - [eesel.ai 博客转述] Discord bot 场景下 AI "misunderstand complex or nuanced user queries, leading to frustrating experiences"
  - [厂商博客转述] 知识库外问题上 bot 自信地答 "yes, we support that"（grounding 失败）
- **ai_opportunity**: 为 Discord-first 的 AI 产品提供"平滑出 Discord"的双栖界面层；或反向：给 Web 产品加可写裸参数的高级用户模式（6 成用户留恋 Discord 的原因即需求）。
