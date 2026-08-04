# 10 — Twitter/X + Reviews + YouTube + Discord 2026-08-04

> 组内信号：8 条 | 二手转述：4 条（50%）
> 最强证据线：Cursor 论坛两条一手抱怨串（额度缩水 1.7x / $60 档几小时耗尽）+ ChatGPT App Store RSS 一手差评 11 条，共同指向「AI 订阅额度不透明 + 指令不服从」双痛点。渠道故障：X/Twitter 直连 402 付费墙、YouTube 页面 ECONNREFUSED（仅 oEmbed 可验证元数据）、G2/Trustpilot 403、Discord 内容不被索引——四个指定平台全部无法直接抓取正文，X 与 G2/Trustpilot 信号只能以 secondhand 保留或借助搜索摘要；另外多次 site: 操作符未被搜索后端遵守（非 2026-07-28 式查询污染，结果仍与查询相关，只是站点过滤失效）。

---

## 1. Cursor 用户实测额度缩水 1.7 倍，扬言转投 Claude Code
- **type**: pain_point | **platform**: Cursor Community Forum | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/now-we-have-much-stricter-usage-limits/152209
- **source_date**: 2026-02-18 | **fetched_at**: 2026-08-04
- **metrics**: 至少 6 楼回复；作者附 136.3 KB 用量 CSV 佐证；相关帖 "The cursor pricing model is completely deceiving subscription users" 8 回复/1519 浏览
- **description**: Pro+（$60/月）用户 Vag1ffm 实测：此前非 Auto 模型可用约 $125、Auto 约 $100，更新后同周期只剩 $70 额度，缩水 1.7 倍。回帖者 vibe-qa 给出行业解释：上游模型厂停止给 API 转售商补贴、转推自家 agent 客户端（Claude Code/Codex 内含 5-10 倍 API 权益），第三方套壳工具的补贴红利期结束。
- **user_quote**: "after the recent Cursor update we now have much stricter usage limits... only a $70 limit for the same period. This is insane. I'll probably cancel my subscription and switch to Claude Code."
- **top_comments**:
  - [论坛回复 vibe-qa, 2026-02-23] "That's because the moka offers in the upstream providers dried up... instead of 2X API benefits through third party Cursor, you get 5X API benefits in Claude Code or Codex Code. Some offers are actually 8X-10X of API benefits."
  - [论坛回复 vibe-qa, 2026-02-23] "we're going into the Cable TV era of agentic tools, just like streaming services matured and raised prices."
- **ai_opportunity**: 跨工具 AI 用量监控/额度审计器：实时追踪各订阅的真实 token 消耗与额度变动，在厂商静默降配时告警，并给出「同样工作量在哪家最便宜」的迁移建议。

## 2. Cursor $20/$60 套餐「几小时耗尽月度额度」，新订户首月即弃
- **type**: pain_point | **platform**: Cursor Community Forum | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/the-cursor-is-amazing-but-the-plans-make-it-unusable/149121
- **source_date**: 2026-01-16 | **fetched_at**: 2026-08-04
- **metrics**: 官方回复披露内部数据：日常 Agent 用户月消耗 $60-100，重度用户 $200+；相关帖 "Quota reached in only 6 days" 2 回复/629 浏览
- **description**: 老用户 Vinicios945 抱怨 $20/$60 档名义上按月、实际数小时到数天耗尽，兜底 Auto 模式只路由到 Composer、干不了复杂后端活；已转投竞品（限额数小时重置）。新订户 730alchemy 实测：约 20 个文件的小型 Python TUI 项目，Agent 模式两小时烧掉 $3.97，明确表示首月后不续费。官方回复承认烧钱速度「确实快」，只能建议换便宜模型。
- **user_quote**: "their billing model is terrible and ends up making the tool practically unusable."
- **top_comments**:
  - [论坛回复 730alchemy, 2026-01-19] 两小时 Agent 模式烧 "$3.97"，项目仅约 20 文件；对比结论是比开发者工资便宜但 "quite a bit more than Claude Code"，首月后不续费。
  - [官方回复 deanrie, 2026-01-17] "Daily Agent users usually spend $60 to $100 per month in total usage, and Power users $200+... I can't share any timeline for changes."
  - [官方回复 deanrie, 2026-01-23] 承认小代码库烧钱 "definitely fast"，归因于 Agent 模式携带更多上下文与推理。
- **ai_opportunity**: 面向个人开发者的「AI 编程成本优化层」：按任务复杂度自动路由到最便宜够用的模型/工具，预估每次会话成本，月度额度守护。

## 3. Cursor 定价不透明引发退订潮（2025-07 定价风波的存档样本）
- **type**: pain_point | **platform**: Cursor Community Forum | **secondhand**: false
- **source_url**: https://forum.cursor.com/t/pausing-my-subscription-till-we-get-some-clarity/113850
- **source_date**: 2025-07-05 | **fetched_at**: 2026-08-04
- **metrics**: 9 楼可见；同期相关帖 "New Pro/Team plan usage models" 11 回复/2688 浏览、"Honest opinion about Cursor & recent changes" 5 回复/1415 浏览
- **description**: 用户 hexdecimal16 因定价不透明退订并号召观望，称首帖被「shadow ban」；官方引用致歉声明承认「pricing changes were not communicated clearly」。核心诉求是用量可视化：用户要求恢复进度条式额度显示。此帖与信号 1、2 构成 12 个月的连续证据链：Cursor 的定价信任问题从 2025-07 持续到 2026-02 未解决。
- **user_quote**: "pause/cancel renewing until we have clarity" (作者自述局面 "frustrating right now")
- **top_comments**:
  - [论坛回复 JakobPCoder, 2025-07-10] "We need a simple laoding bar, showing the progress on our credits like before... we have no idea when or if we loose acces to models" [原文拼写]
  - [官方回复 condor, 2025-07-05] 引用官方声明："We want to acknowledge that our recent pricing changes for individual plans were not communicated clearly."
  - [论坛回复 kurtbaki] "Even their forum rules lack transparency"
- **ai_opportunity**: SaaS 订阅透明度即服务：为 AI 工具厂商提供标准化「额度余量条 + 变更通知」组件；或面向用户的第三方额度监控浏览器插件。

## 4. ChatGPT iOS 一手差评：指令不服从、图片编辑「越改越坏」、长期项目烂尾
- **type**: pain_point | **platform**: App Store (iOS) | **secondhand**: false
- **source_url**: https://itunes.apple.com/us/rss/customerreviews/page=1/id=6448311069/sortby=mostrecent/json
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: 总体 4.83 星 / 9,094,587 评分（iTunes lookup API 同日核验）；最近 50 条评论中 6 条 1 星、1 条 2 星、1 条 3 星；当前版本 1.2026.202（2026-07-27 发布）
- **description**: 最近 50 条评论的负面主题高度聚焦：(1) 指令不服从——要求只说西班牙语/别用 emoji 均被无视；(2) 图片编辑漂移——付费用户长文控诉每次修正引入新错误；(3) 免费额度限制；(4) 同问不同答的一致性问题（连 5 星用户都点名）；(5) 说教感——"想当你家长"的 App 被卸载。快照无单一内容日期，故 source_date 留空。
- **user_quote**: "this actually should no be called artificial intelligence, it should be called artificial brutality" (AlR24k7, 1 星，付费用户，图片编辑指令被反复无视)
- **top_comments**:
  - [App Store 1 星 Mother is Joel's mothers] "I want him to only speak Spanish and won't do it and to stop using emojis and he won't."
  - [App Store 1 星 PillowSaurusRex] "Nothing more annoying than an App that wants to 'parent you' and scold you. Biased App. Not thanks. Uninstalled."
  - [App Store 5 星（但含批评）Customer 124379] 同一问题问两次得到 "drastically different answers…"，在准确性要紧时令人不安。
  - [App Store 1 星 Fftujfdt] "Was great until it just started working like googling something."（并称长期项目从未按承诺完成）
- **ai_opportunity**: 「指令合规层」：包裹在 LLM 之上的硬约束执行器（语言锁定、禁 emoji、风格锁），以及图片编辑的局部锁定/diff 预览，解决「每次修正引入新错误」的编辑漂移。

## 5. Midjourney 计费/退订投诉集中：取消后仍扣费、退款门槛 20 GPU 分钟、余额清零
- **type**: pain_point | **platform**: Trustpilot | **secondhand**: true
- **source_url**: https://www.trustpilot.com/review/www.midjourney.com
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: 359 条评论（Trustpilot 聚合，页面 403 无法直接核验，数字来自搜索摘要）；一篇 2026 评测称其有 "1.5-star reputation"
- **description**: Trustpilot 页面直接抓取被 403 拦截，故标 secondhand（URL 为一手平台但内容经搜索摘要转述）。投诉主题：取消后仍被扣费/续费无提醒、退款仅限终身 GPU 用量 <20 分钟、取消即清零剩余 credits、审查过滤过严。官方文档侧的坑：若有升降级排队须先点 Cancel Change 再取消，很可能是「我明明取消了还被扣费」的成因。2026-04 有评论称退款被以内部政策为由拒绝、不按未用时长折算。
- **user_quote**: "Just cancelled subscription and they've sent me an invoice for a years subscription starting today!" (Trustpilot 评论，经搜索摘要转述)
- **top_comments**:
  - [Trustpilot 摘要] 取消订阅时剩余 credits 直接消失，评论者称之为 "shady business practice"。
  - [Midjourney 官方 Trustpilot 回复] "After reviewing your account usage, we have issued a refund for your most recent payment"——说明公开施压后可退款。
- **ai_opportunity**: AI 订阅「退订保镖」：自动检测排队变更、按正确顺序执行取消、留存证据、生成退款申诉信；或聚合各 AI 工具退款政策的比价器。

## 6. 本地模型替代订阅潮：M5 Max + Qwen 3.6 让用户一周内退订 ChatGPT/Cursor/Midjourney
- **type**: pain_point | **platform**: Medium | **secondhand**: false
- **source_url**: https://medium.com/@shreetejghodekar/i-cancelled-chatgpt-cursor-and-midjourney-this-week-my-macbook-pro-m5-max-quietly-replaced-all-91cbd7f3c78b
- **source_date**: 2026-05-25 | **fetched_at**: 2026-08-04
- **metrics**: 54 条回复；发布于 Mac O'Clock（111K 关注者）；作者自述本地推理 90-130 tok/s、Q4 量化约 20.9GB 驻留
- **description**: AI/ML 工程师详述退订三大 AI 订阅的完整替代栈：Qwen 3.6-35B-A3B（Apache 2.0）+ Open WebUI 替代 ChatGPT，同模型驱动 Cline/Aider 替代 Cursor，ComfyUI + Flux.1 替代 Midjourney。动机非质量不满而是「够用 + 隐私 + 零月费」，承认 Opus 4.7 仍更强（SWE-bench ~84%）但「一周没碰付费模型」。这是订阅疲劳的供给侧解法信号，与信号 1-3 的额度抱怨互为因果。性能数字为作者自报，未独立核验。
- **user_quote**: "Not because the models got worse — because my MacBook Pro 14\" with the M5 Max chip and 36GB of unified memory got good enough... No cloud. No API keys. No monthly bills."
- **top_comments**:
  - [Medium 原文] "For two years I paid Anthropic, OpenAI, and Midjourney every month and called it 'the cost of doing business.'"
  - [Medium 原文] 隐私动机：租 GPU 意味着 "your code, your prompts, and your data toured a data center every time you hit Cmd-K."
- **ai_opportunity**: 本地 AI 栈一键部署器（模型选型+量化+服务化+前端），或「订阅 vs 本地」TCO 计算器；面向 Apple Silicon 的 agent 工作流打包产品。

## 7. G2 上 AI 工具差评主题：积分制反噬、语音不像人、情感分析不准
- **type**: pain_point | **platform**: G2 | **secondhand**: true
- **source_url**: https://www.g2.com/products/observe-ai/reviews
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: G2 自动标签云（Observe.AI）：Accuracy Issues 16、Inaccuracy 15、Inaccurate Data Analysis 12、Missing Features 7（经搜索摘要转述，页面 403）
- **description**: G2 直接抓取被 403 拦截，标 secondhand。跨产品差评主题：Leonardo.Ai 日积分限制 + 退订即没收滚存积分；Convin.ai 语音 agent 不够像人、TTS 落后于市场、AI 洞察仍需人工校验；Observe.AI 情感准确率与部署复杂度。数据质量警示：大量 "dislike" 栏是无效答案（"There's none to dislike!"），且不少为厂商邀请的激励性评论，负面信号密度被稀释——这本身也是「评论平台信号失真」的痛点。
- **user_quote**: (无可靠一手引语——G2 页面不可达，拒绝伪造)
- **top_comments**:
  - [G2 标签云 via 搜索摘要] Observe.AI: Accuracy Issues (16), Inaccuracy (15), Inaccurate Data Analysis (12), Missing Features (7)
- **ai_opportunity**: 评论去噪引擎：过滤激励性/模板化评论，从 G2/Capterra 提取真实负面信号供采购决策；或竞品差评监控 SaaS。

## 8. X 上的 AI 工具链焦虑：架构三个月一报废、agent 困在试点
- **type**: pain_point | **platform**: X/Twitter | **secondhand**: true
- **source_url**: https://x.com/levie/status/2045680043607941548
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: 无法获取互动数（X 直连 402 付费墙；twitter.com 301 回 x.com）
- **description**: X 帖子正文无法直接核验，标 secondhand（URL 为一手平台但内容仅经搜索摘要确认）。Aaron Levie（Box CEO）发帖称模型进步速度之快，迫使 agent 开发者不断扔掉为补偿旧模型缺陷而搭的架构；关联讨论称 RAG/GraphRAG/多 agent 编排/prompt 版本管理/LLMOps/eval 工具「过去 3 个月全过时」。同一搜索还带出 TechCrunch 观点：2025 年 agent 低于预期主因是接入实际工作系统太难，多数 agent 困在试点。这是 B 端「AI 工具链贬值焦虑」的高层背书。
- **user_quote**: "It's remarkable how often you need to be dramatically upgrading your AI architecture given the pace of progress in AI models right now." (搜索结果标题所载帖文开头，未经页面核验)
- **top_comments**: (X 回复不可达)
- **ai_opportunity**: 「防过时」agent 架构审计：扫描现有 AI 工程中为旧模型缺陷打的补丁（复杂 RAG、手工编排），评估新模型下可删减多少；模型升级迁移服务。

---

### 渠道故障备忘（供报告撰写者核查）
- X/Twitter: 状态页直连 HTTP 402（付费墙），twitter.com 镜像 301 重定向回 x.com。所有 X 信号只能 secondhand。
- YouTube: youtube.com / m.youtube.com / youtu.be 全部 ECONNREFUSED（疑似网络层封锁）。仅能经 noembed.com oEmbed 核验视频存在性（如 Crema 频道 "Senior Developer Reviews My AI Built App"，watch?v=x1SkQpKd8a8，2026-04-07），但拿不到播放量/评论，未达信号标准故未单列。
- G2 / Trustpilot: HTTP 403。相关信号（#5、#7）标 secondhand。
- Discord: 消息内容不被搜索引擎索引，未找到可核验的 discord.com/channels 链接；Midjourney 无公开 feedback board（docs.midjourney.com 为帮助文档）。本组无一手 Discord 信号。
- Apple App Store 网页版重定向到中国区编辑页，但 iTunes RSS/lookup API 正常，信号 #4 为一手。
- WebSearch 的 site: 操作符多次未被后端遵守（返回相关但非目标站点的结果）。非 2026-07-28 式查询污染——结果仍与查询语义相关，仅站点过滤失效。
