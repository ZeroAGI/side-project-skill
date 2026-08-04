# 02 — Product Hunt 四档榜单 + Review 深挖 2026-08-04

> 组内信号：8 条 | 二手转述：0 条（0%）
> 最强证据线：四档榜单全部直抓成功（daily 8/4 为空页，回退 8/3 有完整数据）。Review 深挖受限——AgentSky/Ctruh/Zinley 的 /reviews 页均为 "No reviews yet"（产品刚上线），但 Zinley 产品页的 launch 讨论区提供了极高密度的用户质询（信任边界、身份冒充、数据留存、定价异常），是本组最强用户声音。无渠道故障；未动用 WebSearch。

## 跨时间尺度对比（daily 8/3 → weekly W32 → monthly 8月 → yearly 2026）
- **持续存在（耐久需求）**：Claude Code / coding-agent 卫星生态贯穿全部四档——daily/weekly 有 claudemon(#7)，monthly 有 Port22(#5)、Lumichats(#7)、AgentMicro(#8)，yearly 有 Cowork/Claude(#3, 1123分)。「围绕 coding agent 的周边工具」是 2026 年最耐久的品类。
- **本周新兴（daily/weekly only）**：云托管 agent 基础设施（AgentSky #1）、no-code 3D/XR（Ctruh #2）、垂直广告 agent（Airtop Google Ads #3）。
- **月度层**：AI 个人代表/分身（Zinley #1）、本地优先语音（Zen Whisper #10 + daily 的 yapyap #8——local-first 语音在两档同时出现）。
- **年度层（全年验证的耐久需求）**：AI 社媒内容发布（PostSyncer #1）、问责/习惯（Mom Clock #2）、数据 agent（Livedocs）、GEO/AI 搜索可见性（SEORCE #10, 209 评论为全榜最高评论数）。

---

## 1. AgentSky — 云托管 agent 基础设施登顶 daily+weekly 双榜
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/agentsky
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-04
- **metrics**: Daily 8/3 #1（426分/53评论）；Weekly W32 #1（427分）；711 followers；/reviews 页 0 条正式评论
- **description**: Tagline: "Any harness, any LLM — cloud-hosted agents on demand."。一键在云端启动长时程 agent，支持 Claude Code、Codex、Hermes、OpenClaw 等多种 harness，经 IM/网页/API/CLI 访问。「harness 不可知 + 托管运行」登顶说明用户痛点已从「哪个 agent 好」转向「怎么把 agent 跑起来且不用管基础设施」。
- **user_quote**: "Any harness, any LLM — cloud-hosted agents on demand."（官方 tagline；/reviews 页显示 "No reviews yet"，暂无用户评论）
- **top_comments**: （上线首日无 review，53 条 launch 评论未能抓到正文）
- **ai_opportunity**: agent 托管层正在平台化。独立开发者机会在其缝隙：跨 harness 的成本/用量统一账单、托管 agent 的审计与回放、harness 间任务迁移工具。

## 2. Zinley — AI「个人代表」月榜 #1，launch 讨论区暴露信任层缺口
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/zinley
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: Monthly 2026-08 #1（411分/108评论）；#1 Day Rank；662 followers；0 正式 review（Launched this week）
- **description**: "Your Personal AI Representative for calls, email, and tasks"——替你接电话、回邮件、订会议的 AI 分身。108 条评论几乎全是围绕信任/安全/数据的质询而非叫好，说明品类需求成立但信任基础设施是最大未解问题。
- **user_quote**: "Most AI waits in a chat box. We built the opposite." — Khoi Nguyen（maker）
- **top_comments**:
  - [launch 评论·自主边界] Artem Fedorovich: "Where do you draw the line on what it does autonomously versus flags for you?"
  - [launch 评论·身份冒充] Gal Dayan: "does trust level still ultimately trace back to caller ID/email address matching a stored contact?"（maker 承认 caller ID 仍是主要信号）
  - [launch 评论·真实性风险] Jernej Jan Kočica: "the risk sits in what it claims about you, not in what it does." / "a notification you can swipe away and a real open item look identical to the caller"
  - [launch 评论·定价异常] Naved Naik: "starting a new conversation looks ~3x pricier than continuing one, which on the free plan is ~6 handoffs a day"（1.58 credits 开新线程 vs 0.56 跟进；maker 承认是真问题）
  - [launch 评论·好评] Anna Ludwinowski: "The \"CC Zinley and the meeting gets booked\" example sold me faster than any of the phone number stuff."
  - [launch 评论·数据留存] Ansari Adin: "where does that data live, who can access it, and what happens to it if you cancel the subscription"（maker 承认 full graph export 尚未做）
- **ai_opportunity**: AI 分身赛道的信任层是空白：AI 代表的行为审计日志/不可抵赖记录、防冒充验证（超越 caller ID）、AI 代理数据可携带/导出工具。另：Anna 的评论提示「嵌入既有工作流（CC 一个邮箱）」比「给 AI 配电话号码」更易转化。

## 3. Ctruh Studio — AI no-code 3D/XR 创作，daily/weekly #2
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/ctruh-studio
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-04
- **metrics**: Daily #2（397分/92评论）；Weekly #2；1.1K followers；0 正式 review
- **description**: "Create interactive 3D and XR experiences without coding"。92 条评论为 daily 榜最高，3D/XR 无代码创作需求热度高。竞品评分参考（同页侧栏）：Spline 4.6(31)、Meshy 4.9(21)、Tripo AI 4.8(11)——品类已有多个高分玩家仍容得下新入场者。
- **user_quote**: （/reviews 页 "No reviews yet"）
- **ai_opportunity**: AI 生成 3D 资产→可交互网页体验的管线仍在早期；细分机会：电商产品 3D 展示自动生成、3D 资产版本管理。

## 4. Claude Code 卫星生态贯穿四档榜单 —— 2026 最耐久品类
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/monthly/2026/8
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: Yearly #3 Cowork/Claude（1123分，全榜最高分）；Monthly: Port22 #5（270分，"Claude Code, Codex & more on your phone"）、Lumichats #7（211分/42评论，"A Claude Code alternative for people who avoid the terminal"）、AgentMicro #8（179分，"Live Codex task status in your macOS menu bar"）；Daily/Weekly: claudemon #7（147分/15评论，"Wild Pokémon appear while you wait for Claude Code"）
- **description**: 同一个月内 4+ 个围绕 Claude Code/Codex 的第三方周边产品上榜，覆盖手机端接入、非终端 GUI、菜单栏状态监控、等待时间娱乐化。coding agent 已成平台，周边生态是被反复验证的独立开发者切入点——从「能不能用」（Port22/Lumichats）到「用得爽不爽」（AgentMicro/claudemon）全价位段都有需求。
- **user_quote**: "A Claude Code alternative for people who avoid the terminal" — Lumichats tagline（非终端用户群是明确空缺）
- **ai_opportunity**: 尚未见到的空位：多设备/多 agent 会话统一收件箱、Claude Code 团队级用量看板、非技术角色（PM/设计）参与 agent 会话的协作界面。

## 5. Local-first 语音工具双榜同现 —— 隐私回流信号
- **type**: trend | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/yapyap-3
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-04
- **metrics**: yapyap（daily #8，143分，"Own your voice again. Local-first voice & meeting recorder."）；Zen Whisper（monthly #10，150分/18评论，"On-device Mac dictation that types into any app"）
- **description**: 一周内两款「本地优先/端上」语音产品分别登上 daily 与 monthly 榜。在云端 AI 会议记录（Otter/Granola 类）泛滥两年后，「录音数据不出设备」成为新的差异化卖点——隐私敏感用户（法律、医疗、企业合规）是明确买单人群。
- **user_quote**: "Own your voice again."（yapyap tagline，直接把「所有权」当卖点）
- **ai_opportunity**: 端上 whisper 类模型已足够好，机会在垂直合规包装：律师/医生场景的本地转写+结构化模板、本地会议纪要+行动项抽取（数据零上传认证）。

## 6. Airtop for Google Ads —— 垂直广告运营 agent，daily/weekly #3
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/airtop
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-04
- **metrics**: Daily #3（293分/23评论）；Weekly #3
- **description**: "Build campaigns, optimize spend, and create reports."——把浏览器自动化 agent（Airtop 原是 browser automation 基建）垂直包装成 Google Ads 运营 agent。基建公司自己做垂直应用示范，说明「通用 agent 平台 → 垂直角色化产品」是当前的变现路径。
- **user_quote**: "Build campaigns, optimize spend, and create reports."（tagline）
- **ai_opportunity**: 同一模式可复制到其它高客单价运营岗位：Meta Ads、Amazon 广告、SEO 站群运维。独立开发者可用现成 browser-agent 基建拼装垂直运营 agent。

## 7. SEORCE + PostSyncer —— 年度榜验证「AI 时代可见性」是全年耐久需求
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/leaderboard/yearly/2026
- **source_date**: | **fetched_at**: 2026-08-04
- **metrics**: PostSyncer yearly #1（812分/101评论，"AI Content Maker, for Social Media Publishing"）；SEORCE yearly #10（397分/209评论——全年度榜最高评论数，"See where your brand is discovered and fix what blocks it"，类目含 GEO Tools）
- **description**: 年度榜首尾两端都是「让品牌被看见」：内容生产分发（PostSyncer）与 AI 搜索/GEO 可见性诊断（SEORCE）。SEORCE 209 条评论说明 GEO（Generative Engine Optimization）已从概念变成付费焦虑——品牌方迫切想知道自己在 AI 答案里出不出现。
- **user_quote**: "See where your brand is discovered and fix what blocks it" — SEORCE tagline
- **ai_opportunity**: GEO 工具链仍早期：按行业垂直的 AI 引用监测（如「我的 SaaS 在 Claude/ChatGPT 推荐里排第几」）、llms.txt/结构化数据自动修复器。

## 8. Appllama —— 卖「成功产品的设计情报」，daily #5
- **type**: product_market | **platform**: producthunt | **secondhand**: false
- **source_url**: https://www.producthunt.com/products/appllama
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-04
- **metrics**: Daily #5（207分/14评论）；Weekly #5（209分）
- **description**: "Study 25,000+ screens from top-earning iOS apps"——按「高收入 app」筛选的 UI 截图库。与 yearly #5 MiroMiro（"Copy any website's design & assets in one click"，529分）呼应：「借鉴已验证设计」是从周到年都成立的需求，买单者是独立开发者/设计师。
- **user_quote**: "Study 25,000+ screens from top-earning iOS apps"（tagline）
- **ai_opportunity**: 情报库+AI 的组合：截图库→按你的 app 品类自动生成 onboarding/paywall 流程建议；MiroMiro 式抓取→自动转成设计系统 token。

---

### 渠道备注
- daily 2026/8/4 页面为空（"No launch data found for this period"，当日榜未生成），按指示回退到 8/3，数据完整。
- daily 8/3 与 weekly W32 前 10 名完全同构（本周刚开始，weekly=daily 累计），故跨尺度对比以 daily/weekly vs monthly vs yearly 为主。
- Review 深挖局限：榜首产品均为当周新上线，/reviews 页一律 "No reviews yet"（AgentSky、Ctruh Studio、Zinley 均确认 0 review）。改抓 Zinley 产品页 launch 讨论区获得 6 段高质量 verbatim（见信号 2）。
- 未使用 WebSearch；全部信号为一手直抓，secondhand 0 条。
