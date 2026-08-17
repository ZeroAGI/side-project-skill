# 10 — Twitter/X + Reviews + YouTube + Discord 2026-08-13

> 组内信号：10 条 | 二手转述：6 条（60%）
> 最强证据线：Cursor 官方论坛（Discord 社区替代渠道，可直接抓取）四条一手线程——计费透明度倒退、模型被强制切换、SSH 重连成批删文件、Agent 每轮反问；渠道故障：x.com 直接抓取 402、G2/Capterra/Trustpilot 403、youtube.com 本网络 DNS 污染（解析到 Facebook IP 段致 ECONNREFUSED，桌面/移动端均不可达）——这些平台信号只能以 secondhand 保留或降权。WebSearch 本身工作正常（结果与查询相关），但 site:x.com / site:youtube.com 运算符多数查询未被遵守。

---

## 1. Cursor 用量页把美元金额换成 token 数，用户集体抗议"计费透明度倒退"
- **type**: pain_point | **platform**: Cursor Forum（Discord 替代：产品公开反馈板） | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/usage-page-to-token-amount-what/167153
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-13
- **metrics**: 86 replies / 12,805 views（本月回复数第一）；一位 Teams 管理员报告每周期 ~$30K 支出失去 per-user/per-model 成本可见性
- **description**: Cursor 将个人版用量页的美元金额替换为 token 数且不可切回，历史记录导出成本字段被归零（chargedCents: 0），外部成本追踪全部失效。官方（kevinn）确认是有意为之非 bug："no setting to switch back"，理由是显示美元"led to some confusion"。用户核心诉求：token 跨模型不可比、无法折算预算；变更无预告、追溯生效。
- **user_quote**: "the dollar amount was replaced by token amount which is completely useless"（Bingojr, 2026-07-31）
- **top_comments**:
  - [reply, eli.wavv, 07-31] "Cursor needs to be transparent about the per-request cost if that is what we are being billed for"
  - [reply, Axel_Trange, 07-31] "Who cares about tokens? It's irrelevant as it's highly different to each model."
  - [reply, Mihai_Cracan, 08-01] "We are engineers and we like to track stuff"
- **ai_opportunity**: AI 编码工具第三方成本审计/折算层：拦截各家 usage API 与日志，把 token 统一折算回美元、按模型/成员/项目出报表——厂商越模糊，独立计费透明工具越有付费意愿（尤其 Teams 管理员）。

## 2. Cursor 促销强推 Grok 4.5 为默认模型，无视用户选择与企业合规
- **type**: pain_point | **platform**: Cursor Forum（Discord 替代） | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/cursor-ide-force-enabling-grok-4-5-and-setting-as-default-model-regardless-of-my-initial-selection/166389
- **source_date**: 2026-07-22 | **fetched_at**: 2026-08-13
- **metrics**: 14+ replies；姊妹线程 "Grok re-enables itself after being disabled"（20 replies, 08-12）、"Switching models against my wishes"（13 replies, 08-11）等至少 4 条并发线程；官方宣布修复后次日（08-11）仍有用户报告 3.15.6 复现
- **description**: Cursor 跑"为新对话推荐 Grok 4.5"促销时覆盖了用户的模型选择：禁用 Grok 后新线程仍被自动切回，OP 所在组织未合规批准 Grok，构成安全/合规事故。官方承认"This is a bug on our side"（促销逻辑覆盖选择），但修复宣布后仍有复现报告，并有用户提出被非预期模型消耗 credits 的计费争议。
- **user_quote**: "an extreme breach of trust/security that the IDE can overwrite and ignore my model provider settings"（ZakThompsonEchelon, 2026-07-22）
- **top_comments**:
  - [reply, NickFoden, 07-24] "How can we permanently block grok? It sucks for coding."
  - [reply, Mitch_OM, 07-24] "the optics are terrible and this situation reads like an Onion article."
  - [reply, ttscoff/Brett Terpstra, 08-11] 称强制切换模型是 "hostile"
- **ai_opportunity**: 企业级"模型策略执行层"：在 IDE/agent 之外强制白名单模型路由与审计（组织未批准的模型请求直接拦截并告警），把模型选择权从厂商促销逻辑手里拿回来。

## 3. Cursor Remote-SSH 重连触发 mass undo，磁盘文件被物理删除（含整个 home 目录案例）
- **type**: pain_point | **platform**: Cursor Forum（Discord 替代） | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/remote-ssh-reconnect-triggers-mass-undo-create-diff-files-physically-deleted-from-disk-cursor-3-13-10/166983
- **source_date**: 2026-07-29 | **fetched_at**: 2026-08-13
- **metrics**: 9 replies；至少 3 名独立用户复现（3.13.10 / 3.14.27 / Windows 客户端），一例 100–200 文件 7 秒内被重写；线程关联 4 条同类报告，含一例 `~` workspace 整个 home 目录被清
- **description**: SSH 断线自动重连后 ~2 秒内，cursor-server 以 "Undo Create Diff" 为源成批删除/回写文件，波及 git 已跟踪文件与同主机第二个仓库（"blast radius is workspace-wide Agent history, not 'just this chat'"）。未跟踪且无 Local History 快照的文件官方承认 "likely have no recovery path on our side"。staff 确认是已知缺陷、无修复时间表。
- **user_quote**: "Lose connection to remote SSH, reload connection, have files randomly deleted en masse Russian roulette-style"（pk22, 2026-07-29）
- **top_comments**:
  - [staff, mohitjain, 07-30] "Files shouldn't be touched or removed on a reconnect/reload."
  - [reply, Meganathan_Raja_Mani, 08-06] "There were no local history snapshots for many files"
  - [reply, Akesson, 08-07] 3.14.27 复现：session timeout → 重连 → Linux 服务器上文件消失，extension host 启动 ~2 秒内出现 "Undo Create Diff" burst
- **ai_opportunity**: Agent 工作区"黑匣子"守护进程：独立于 IDE 的文件系统 journaling + 删除熔断（重连窗口内的批量 unlink 需确认/可回滚），专门兜底 AI 编码工具的数据毁损事故——本组连续数月都能看到同类"agent/IDE 删我文件"信号，痛点持续且厂商自救不力。

## 4. Cursor Agent 每轮弹结构化反问，"1% 场景的功能开到了 100%"且无关闭开关
- **type**: pain_point | **platform**: Cursor Forum（Discord 替代） | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/total-non-starter-cursor-is-asking-me-questions-on-every-turn/167453
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-13
- **metrics**: 同主题并发线程："Stop asking me questions! Please!"（3 replies/135 views, 08-04）、"Constant noop AskQuestions dialogs interrupt workflow"（08-11）；OP 影响评级选了 "Yes - Cursor is unusable"
- **description**: 3.14.x 起 Auto 模式 Agent 每个新对话都弹 "Do you want me to do this? Yes or no" 式结构化提问，出现两个选项完全相同的退化案例（"Finishing verification. Continue?" 两个选项都是 "continue finishing"）。官方承认是 "known model behavior quality" 问题、暂无关闭设置，只能靠用户规则 "Never use the AskQuestion tool." 绕过。用户预期：仅真正歧义时反问，"Should be like 1% of the time."
- **user_quote**: "driving me crazy… Should be like 1% of the time."（Dan_B, 2026-08-05）
- **top_comments**:
  - [reply, Muhammad_Hassan1, 08-05] 要求"smarter detection of when clarification is needed or an opt-out"
  - [reply, cicurso, 08-05] 在 "Other" 栏要求 "analyze first" 仍会再弹一个 Questions 对话框
  - [reply, David_Rogers, 08-05] 贴出两选项一模一样的退化案例
- **ai_opportunity**: Agent 交互"打扰预算"（interruption budget）中间件：对澄清式提问做置信度门控与去重，量化每次打断的成本；也是 agent 产品评测的可量化维度（每任务打断次数）。

## 5. G2 评价：Relevance AI 拒绝按比例退款，用户被 10 个月不可用 credits 套牢
- **type**: pain_point | **platform**: G2 | **secondhand**: true
- **source_url**: https://www.g2.com/products/relevance-ai/reviews
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 无（G2 直接抓取 403，未能读到评论计数与日期）
- **description**: 搜索摘要显示 G2 上有评价者称工具不符合需求、按比例退款被拒、只能持有 10 个月不可用 credits。这是 AI SaaS "预付 credits + 不退款"商业摩擦的典型样本。G2 页面 403 无法直接核验，故 secondhand；且 G2 多个 AI 产品页 cons 区被 "Incentivized"（厂商邀请）评价稀释，负面信号系统性偏软。
- **user_quote**: （403 未能取到原文，转述自搜索结果摘要）
- **top_comments**: 无
- **ai_opportunity**: AI 订阅/credits 合同风险扫描器：购买前解析 ToS 的退款条款并聚合各平台退款纠纷投诉；亦可做"去 incentivized 评价"的 AI 工具真实口碑层。

## 6. G2 评价：语音 AI（Convin.ai）不够拟人、AI 洞察仍需人工复核；生成工具缺精细控制（Remaker）
- **type**: pain_point | **platform**: G2 | **secondhand**: true
- **source_url**: https://www.g2.com/products/convin-ai/reviews
- **source_date**: 空 | **fetched_at**: 2026-08-13
- **metrics**: 无（G2 403，未能读到计数）
- **description**: 搜索摘要中的 G2 cons 主题：Convin.ai 语音 agent 不够拟人、TTS 落后市场、AI insights 仍需人工验证方可信；Remaker.ai（https://www.g2.com/products/remaker-ai-best-ai-image-video-generators/reviews）用户要求对多变体生成有更多自定义控制。共同主线：2026 年 AI 产品的差评已从"能不能用"转向"输出可控性与可信度"。
- **user_quote**: （403 未能取到原文，转述自搜索结果摘要）
- **top_comments**: 无
- **ai_opportunity**: 面向 AI 输出的"人工复核工作台"（review-in-the-loop 队列 + 抽样质检），以及生成类产品的参数化变体控制层。

## 7. MindStudio 社区：自动化工作流没有 Discord 原生集成，社区运营被迫手动搬运
- **type**: pain_point | **platform**: MindStudio Community（产品公开反馈板；Discord 服务器内容需登录不可引用） | **secondhand**: false
- **source_url**: https://community.mindstudio.ai/t/discord-integration/1538
- **source_date**: 2025-08-16 | **fetched_at**: 2026-08-13
- **metrics**: 0 回复；未显示票数（平台仅提示可 upvote）
- **description**: Feature Requests 板块请求：MindStudio 工作流无法直接向 Discord 发送更新/通知/内容，运营者只能手动复制或绕路；并要求 Discord 事件（新消息/reaction/入群）触发工作流、AI agent 分析频道聊天。一年过去仍无回复——no-code AI 平台与社区平台之间的集成缺口长期存在。相关线程（WhatsApp/WeChat/Slack DM 集成）同样活跃，说明是一类共性需求。
- **user_quote**: "workflows and automations in MindStudios do not have a direct way to send updates, notifications, or content to Discord… must manually copy information or use workarounds. This creates extra steps and slows down communication"（Agweyre, 2025-08-16）
- **top_comments**: 无（零回复）
- **ai_opportunity**: 面向 no-code AI 平台的通用"社区渠道桥"（Discord/WhatsApp/微信事件 in、消息 out 的托管连接器），或直接做 Discord-native 的 AI 社区分析 bot。

## 8. YouTube 批评类视频集中出现："AI 编码的现状实在吓人 / 这是一种病"
- **type**: pain_point | **platform**: YouTube | **secondhand**: true
- **source_url**: https://www.youtube.com/watch?v=4xPQkatjsbg
- **source_date**: 空（约 2026-07，"~1 个月前"） | **fetched_at**: 2026-08-13
- **metrics**: 无法取得播放/评论数——本网络 youtube.com DNS 被污染（解析到 Facebook IP，ECONNREFUSED），页面不可达
- **description**: 2026 年中 YouTube 出现一批对 AI 编码的批评向长视频："The State of AI Coding Is Honestly Terrifying"（~2026-07）、"It's a disease..."（重度使用 6 个月后的检讨，2026-06，PostHog 赞助）、"I actually tried AI coding and it's worse than I thought..."（Codex CLI，2026-01）。注意利益冲突：前者视频描述在推广自家 "Agentic Jumpstart" 课程——批评内容同时是课程漏斗。因页面不可达，仅凭搜索摘要与标题登记，全部按 secondhand 处理。
- **user_quote**: （不可达，无法取评论）
- **top_comments**: 无
- **ai_opportunity**: "AI 编码后遗症"审计服务/工具（AI 生成代码的债务扫描、回归检测）；内容侧信号：批评向选题本身已成流量与获客渠道。

## 9. Claude Code 用量限制争议时间线：突袭式缩量、Discord 禁言指控、集体诉讼
- **type**: pain_point | **platform**: Anthropic Discord（登录不可达）→ 引媒体报道 | **secondhand**: true
- **source_url**: https://www.theregister.com/2026/01/05/claude_devs_usage_limits/
- **source_date**: 2026-01-05 | **fetched_at**: 2026-08-13
- **metrics**: 一用户基于 Claude Code 日志的 token 级分析声称限额缩水 ~60%；2026-06 出现针对 Max 套餐宣传倍数的 class-action（搜索摘要转述）；另有横评称同任务 Claude Code 耗 token 达 Codex 的 4 倍（morphllm 对比页，厂商利益相关）
- **description**: 2026 年贯穿性的痛点线：1 月开发者在 Anthropic Discord 抗议限额突变（有用户指控 mod 删帖禁言），官方归因于节日 bonus 到期；3 月/5 月以促销与扩容安抚；6 月演化为集体诉讼。原始现场在 Discord（登录墙内不可引用），此处引 The Register 报道为据，倍数与诉讼细节均为二手转述。与 #1 Cursor 计费不透明同构：AI 编码工具的"限额/计费黑箱"是 2026 年最稳定的跨厂商痛点。
- **user_quote**: （Discord 原文不可达；The Register 转述用户基于日志分析主张 ~60% 缩量）
- **top_comments**: 无
- **ai_opportunity**: 跨厂商的本地限额监测器：从 Claude Code/Codex/Cursor 日志无侵入统计实际可用量与历史对比，限额被暗改时告警——用户自己的日志就是证据链。

## 10. X 转述 TechCrunch：2025 年 agents 之所以困在 pilot，是接不上真实系统
- **type**: trend | **platform**: Twitter/X | **secondhand**: true
- **source_url**: https://x.com/OwenGregorian/status/2007797755939323959
- **source_date**: 空（推文日期未能核验；x.com 直接抓取 402） | **fetched_at**: 2026-08-13
- **metrics**: 无法取得转赞评数（x.com 402）
- **description**: 搜索摘要中该推转引 TechCrunch：2025 年 agents 未达预期的主因是连接真实系统（数据库/搜索/API）太难，多数困在 pilot 工作流；MCP 成为连接组织，OpenAI/Microsoft 跟进、Anthropic 将其捐给 Linux Foundation 的 Agentic AI Foundation。与本组 #7（集成缺口）互为宏观/微观印证。x.com 无法抓取核验，按 secondhand 登记。
- **user_quote**: "If 2025 was the year AI got a vibe check, 2026 will be the year the tech gets practical."（推文摘要转述 TechCrunch）
- **top_comments**: 无
- **ai_opportunity**: 垂直行业的 MCP 连接器包与"agent 落地最后一公里"集成服务——痛点不在模型而在管道。
