# 17 — 热点深挖: DeepSeek V4 Pro 正式版 + 开源 DeepSeek Harness 2026-08-19

> 组内信号：9 条 | 二手转述：2 条（22%）
> 最强证据线：HN 两大主线程（V4-Pro-0813 发布 + Harness developer preview）提供了大量一手开发者原声，覆盖成本经济学、缓存命中率对 harness 的依赖、迁移路由模式和企业采用阻力；DeepSeek 官方 news/pricing 页与 GitHub 仓库核实了关键数字。渠道情况：news.ycombinator.com 直接抓取遇证书劫持错误（Meta 证书），改用 hn.algolia.com API 成功；搜索渠道正常，无污染迹象。

---

## 1. DeepSeek-V4-Pro 正式版（0813）GA 发布，Agent 能力为主升级点
- **type**: trend | **platform**: DeepSeek 官方 | **secondhand**: false
- **source_url**: https://api-docs.deepseek.com/news/news260813
- **source_date**: 2026-08-13 | **fetched_at**: 2026-08-19
- **metrics**: 1.6T 总参数 / 49B 激活（MoE）；1M 上下文；384K 最大输出；reasoning effort 三档（low/high/max）；原生 OpenAI Responses API，"optimized for Codex with one-click setup"
- **description**: 官方 news 页确认 8/13 正式发布 V4-Pro（GA），API 模型名不变（`deepseek-v4-pro` 自动指向 0813），app/web 端通过 "Expert Mode" 使用。升级主打生产级 Agent 能力："Major Agent upgrades with strong production gains!" 官方还宣布 API 定价将于 8/16 引入峰谷时段制。预览版 4/24 发布至今约 3.5 个月完成 GA，V4-Flash 正式版（0731）先行两周。
- **user_quote**: "We're launching DeepSeek-V4-Pro today! 🚀 … Native OpenAI Responses API support, optimized for Codex with one-click setup."
- **top_comments**:
  - [官方 news 页] "V4 Pro is now available on app/web. Try it via 'Expert Mode'."
  - [官方 news 页] "New pricing takes effect at 16:00 UTC, Aug 16, 2026"
- **ai_opportunity**: GA + 模型名不变 + Responses API 兼容 = 迁移窗口极短、评测需求即时爆发。可做：V4-Pro-0813 vs 预览版回归评测套件、"我的 agent 任务该用哪档 reasoning effort" 的自动调档工具。

## 2. DeepSeek API 峰谷定价上线 + 官方预告"显著涨价"
- **type**: trend | **platform**: DeepSeek 官方 / Hacker News | **secondhand**: false
- **source_url**: https://api-docs.deepseek.com/quick_start/pricing
- **source_date**: 2026-08-16（生效） | **fetched_at**: 2026-08-19
- **metrics**: V4-Pro（每 1M token）：cache hit 输入 $0.022（谷）/$0.044（峰），cache miss 输入 $0.66/$1.32，输出 $1.98/$3.96；V4-Flash：cache hit $0.007/$0.014，miss $0.22/$0.44，输出 $0.66/$1.32。峰时段 01:00-04:00 与 06:00-10:00 UTC。并发上限 Pro 500 / Flash 2500
- **description**: 8/16 起实行峰谷双轨价（谷价为峰价一半），且官方横幅明示将全面涨价。HN 上开发者已在讨论涨价冲击与调度套利（把批量任务挪到谷时段）。这是"低价窗口正在关闭"的强信号。
- **user_quote**: [HN GrinningFool 引用官方横幅] "We plan to raise the overall pricing for DeepSeek API services in the near future, with a significant increase expected."
- **top_comments**:
  - [HN 49274600, anigbrowl] Pro "$2/1m output in off-peak periods, $4 in peak. Flash is $0.66/$1.32"（并抱怨要跟踪两个时间段）
  - [HN 49274600, HDBaseT] "That pricing is going away soon. It's about to get 5x more expensive."
  - [HN 49274600, Gecko4072] "Currently burning money quickly on official deepseek api. They are also increasing pricing starting today."
- **ai_opportunity**: 峰谷价 + 涨价预期直接催生：LLM 任务调度器（自动把非紧急 agent 任务排到 UTC 谷时段）、多供应商成本路由/对冲工具、按缓存命中率优化的成本监控面板。时区套利对独立开发者是立即可做的小工具。

## 3. DeepSeek Harness（dsh）开源：6 天冲到 163k star，"Everything is a Plugin"
- **type**: trend | **platform**: GitHub | **secondhand**: false
- **source_url**: https://github.com/deepseek-ai/deepseek-harness
- **source_date**: 2026-08-13（发布） | **fetched_at**: 2026-08-19
- **metrics**: 163.2k stars、17.2k forks、682 watchers、12,404 commits（2026-08-19 快照）；MIT 协议；TypeScript；`npx @deepseek-ai/dsh web` 一行启动（127.0.0.1:3080）；插件生态以 `dsh-plugin` topic 聚合
- **description**: DeepSeek 8/13 与 V4-Pro GA 同步开源首个 agent 产品 DeepSeek Harness，定位元框架而非封闭产品（对标 Claude Code 但可拆装）：模型适配、工具、沙箱、存储、agent 循环、UI 全部插件化，内核基于 Cordis（论文 "A Programming Paradigm for Spatiotemporal Composability"），支持热插拔（运行中换模型/加工具不丢会话）。README 明示 developer preview："THERE WILL BE COMPATIBILITY-BREAKING CHANGES." 6 天 163k star 是罕见的增长速度，agent harness 正式成为开源竞争层。
- **user_quote**: "DeepSeek Harness: Everything is a Plugin."（仓库描述）
- **top_comments**:
  - [README] "THERE WILL BE COMPATIBILITY-BREAKING CHANGES."
  - [HN 49285244, tianyicui（作者）] "Hi I'm one of the authors of DeepSeek Harness."（说明是 MIT 早期开发者预览，欢迎反馈）
- **ai_opportunity**: 插件生态刚起步（dsh-plugin 标签），是典型的"卖铲子"窗口：做高质量 dsh 插件（沙箱、企业存储、评测、可观测性）、插件模板脚手架、插件市场/质量榜、breaking-change 迁移工具。参照 VS Code / Obsidian 插件经济早期。

## 4. HN Harness 首日线程：开发者集体困惑"这到底是什么"+ 插件疲劳
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49285244
- **source_date**: 2026-08-13 | **fetched_at**: 2026-08-19
- **metrics**: 线程冲上 HN #1（评论者 rco8786 提及）；首条评论 2026-08-13T13:45Z
- **description**: Harness 发布线程里最响亮的不是赞美而是定位困惑与审美分歧：多人问"这是什么/有啥用"、质疑为何又是 Node/TypeScript、担心插件供应链安全、表示插件疲劳。说明官方文档存在解释鸿沟——这本身就是内容与工具机会。也有正面声音：Cordis 热插拔架构被认为有趣，有人用 Bun + llama.cpp 跑本地 Qwen 成功。
- **user_quote**: [invaliduser] "I have developped over the year a plugin fatigue."
- **top_comments**:
  - [HN, rco8786] "But like, what is it? Odd that this reached #1 on HN."
  - [HN, huqedato] "Please somebody explain what is this good for."
  - [HN, syntaxing] "Is there a reason why so many of these agent harness are written in node.js?"; [phront] "hmm.. what about supply chain security?"; [flaburgan] "Is there a comparison of harness somewhere?"
- **ai_opportunity**: 三个直接可做：1) "harness 对比矩阵"站点（flaburgan 直接问了，Claude Code vs dsh vs OpenCode vs goose vs pi 的功能/成本/缓存命中率对比）；2) dsh 插件安全审计/签名工具（供应链焦虑）；3) 面向非 TS 开发者的入门教程与托管版。

## 5. 成本经济学原声：官方 API 缓存命中下"约 60x 便宜"，$11 跑完 5 亿 token 重构
- **type**: trend | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49274600
- **source_date**: 2026-08-12 | **fetched_at**: 2026-08-19
- **metrics**: xynelius 实测 Opencode 单请求 token 分布 750 in / 290 out / 82k cached，成本 $0.000875 vs 对标 ~$0.052（~60x）；polski-g：5 亿 token 重构花 $11；RALaBarge：$10 用了一个周末加数天；saaga：多日会话不到 $1
- **description**: V4 Pro 0813 线程中最密集的证据线是成本：名义价 ~20x 便宜，算上 agentic coding 典型的缓存读占比后实际 ~60x。多位开发者晒出真实账单，"production grade coding 门槛已跨过"（saaga）。这解释了为何涨价预告引发焦虑——整个价值主张建立在缓存命中经济学上。
- **user_quote**: [xynelius] "it's actually ~60x cheaper if you take into account the typical cache-read/input/output split in agentic coding"
- **top_comments**:
  - [HN, aabdi] "Competitive with opus 4.8 but weaker than sol or fable. About 20x cheaper."
  - [HN, saaga] "It's crossed a threshold of production grade coding for sure"
  - [HN, wmedrano] "Seems a bit weaker than Opus 4.8 but at least 10x cheaper once you account for verbosity."
- **ai_opportunity**: 成本可观测性产品：按缓存命中率/verbosity 折算的"真实每任务成本"对比器；面向团队的 DeepSeek 账单分析与预算告警（涨价前后对比）。

## 6. 痛点：缓存命中率高度依赖 harness，第三方供应商缓存读贵 10-50x
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49122310
- **source_date**: 2026-08 | **fetched_at**: 2026-08-19
- **metrics**: 极简 harness "pi" 实测 ~99% 缓存命中、Flash 约 $1/天；OpenRouter 上同模型显示 ~79% 命中；HN 49274600 Eueudhsbsj32：第三方缓存读 "10-50x more expensive than with DeepSeek"
- **description**: 两条 HN 证据拼出同一结论：DeepSeek 的低成本只有在（a）官方 API 直连 +（b）缓存友好的 harness 下才成立。经 OpenRouter 等聚合层或换用会打乱前缀的 harness，多轮 agent 的成本优势大幅蒸发。缓存命中率成为 harness 的核心竞争指标——这正是 DeepSeek 自己下场做 Harness 的商业逻辑。
- **user_quote**: [HN, Eueudhsbsj32] 第三方缓存读 "10-50x more expensive than with DeepSeek"
- **top_comments**:
  - [HN 48653277] "Deepseek is practically free if you hit cache. Harnesses like reasonix help to a…"（线程标题片段）
  - [HN 49122310] pi harness 用户报 ~99% 缓存命中、约 $1/天，对比 OpenRouter 页面显示的 ~79%
- **ai_opportunity**: 明确的独立开发者机会：缓存命中率基准测试工具（跨 harness 测同一任务的实际命中与成本）、prompt 前缀稳定化 lint/中间件、"cache-aware" 代理层。数据本身可做成持续更新的公开榜单获客。

## 7. 迁移与路由模式成型："Pro 做规划、Flash 做执行"
- **type**: trend | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49274600
- **source_date**: 2026-08-12 | **fetched_at**: 2026-08-19
- **metrics**: Flash 与 Pro 基准差距约 5 个百分点（swiftcoder："87% instead of 82%"）；Flash 输出量常为 Pro 的 5x（pixelesque）；旧模型名 deepseek-chat/reasoner 已于 2026-07-24 15:59 UTC 退役
- **description**: 开发者自发形成分层路由实践：贵模型（Opus/Pro）写执行计划，Flash 廉价执行；也有人反向操作。同时暴露反对声音（jatora 反对把规划这个"最承重点"交给弱模型）。配合 7/24 旧别名退役，迁移的最佳实践共识是先收敛到配置/路由层再灰度。V4 无视觉输入是换用的硬阻断（krlx："If only it supported image input..."）。
- **user_quote**: [surgical_fire] "pro plans, flash implements. I am super happy with how flash behaves like that."
- **top_comments**:
  - [HN, coredog64] 不信任它写计划，但 "if I give it a detailed execution plan written by Opus, it's fast and cheap (if chatty)"
  - [HN, krlx] 正评估全公司迁离 Anthropic，"If only it supported image input ..."
  - [HN, swiftcoder] "I've definitely noticed one has to be quite precise to keep Flash on the straight-and-narrow."
- **ai_opportunity**: 模型路由器/编排产品的需求已被用户自己发明出来：plan-with-X-execute-with-Y 的开箱即用编排、按任务类型自动路由（含成本预算约束）、V4 缺视觉时自动 fallback 到多模态模型的混合管线。

## 8. 企业采用阻力：隐私政策（训练用户数据）+ 中国模型政治风险
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49274600
- **source_date**: 2026-08-12 | **fetched_at**: 2026-08-19
- **metrics**: —
- **description**: 尽管价格优势巨大，两类阻力反复出现：官方 API 隐私政策允许用 prompt/补全训练；企业因政治与嵌入风险直接禁用中国模型（有公司连本地部署都禁）。BlackRabbit1 指出 EU/US 托管的第三方供应商是出路——但结合信号 6，第三方托管又会毁掉缓存成本优势，形成"合规 vs 成本"的两难。
- **user_quote**: [eli] "But their privacy policy is unusually bad - they can train off your prompts and completions."
- **top_comments**:
  - [HN, spacebanana7] 企业因政治风险与 embedding 风险回避中国模型
  - [HN, hgoel] 有些地方连本地运行都禁止
  - [HN, trollbridge] "It's probably not open, or not open yet."（发布当时 V4-Pro-0813 权重未上 Hugging Face）
- **ai_opportunity**: 面向企业的"合规 + 缓存"两全方案是空白：EU/US 托管且实现 DeepSeek 级缓存定价的推理服务、开源权重自托管的缓存代理、合规审计清单/数据不出境网关。独立开发者可先做轻量版：自托管 V4 缓存代理部署脚本。

## 9. 大盘定位：官方自认落后前沿 3-6 个月的最强开源权重，"没有单一赢家、按任务路由"成共识
- **type**: trend | **platform**: 聚合评测（多来源） | **secondhand**: true
- **source_url**: https://www.verdent.ai/guides/deepseek-v4-vs-claude-opus-4-6-vs-gpt-5-5
- **source_date**: 2026-08 | **fetched_at**: 2026-08-19
- **metrics**: V4-Pro max effort：LiveCodeBench Pass@1 93.5（评测集内最高，vs Gemini 3.1 Pro 91.7 / Claude Opus 4.6 Max 88.8）；短板：HLE 37.7%（vs Gemini 44.4%）、SimpleQA-Verified 57.9%（vs 75.6%）；HN goldenarm 九基准几何平均：Sol 65.5 > Fable 5 64.5 > Opus 5 64.0 > DS-V4-Pro 62.5 > Kimi-K3 62.3 > Flash 55.8；输出价约便宜 6-15x（视峰谷）
- **description**: 第三方评测与 HN 讨论汇成的图景：V4-Pro 在编码类基准（LiveCodeBench/SWE 系）逼近或局部超越前沿，但事实检索与 HLE 类明显落后，且无视觉。官方技术报告罕见地自我定位为"落后 SOTA 约 3-6 个月的最强开源权重模型"。社区共识是没有全能赢家，正确姿势是 per-task 路由；同时多位 HN 用户提醒别迷信基准（svachalek："no one should pick a model by the benchmarks."）。注意：本条数字来自评测聚合站与 Reddit 转载表格，vendor 分数多未独立复现，标记 secondhand。
- **user_quote**: [HN, nthypes] "Still behind Kimi-K3 in almost half of the benchmarks."
- **top_comments**:
  - [HN, parsimo2010] "they could double or triple prices and it still would be a better value"
  - [HN, bel8] "So it's a Fable class LLM?"
  - [HN, svachalek] "no one should pick a model by the benchmarks."
- **ai_opportunity**: "按任务路由"的共识 + 基准不可信情绪 = 私有任务集评测工具的机会：让团队用自己的真实任务一键对比 V4-Pro/Flash/Claude/GPT 的质量-成本曲线，替代公共榜单做采购决策。

---

### 渠道备注
- news.ycombinator.com 直连 WebFetch 返回证书错误（证书为 *.aidemos.meta.com，疑似上游代理劫持/错配），改用 hn.algolia.com API 成功取得全部评论原文。
- WebSearch 渠道本次正常，五组查询结果均与查询高度相关，无污染迹象。
- 迁移指南类中文来源（CSDN/cnblogs/腾讯云）均为二手教程，关键事实（7/24 别名退役、定价）已用 DeepSeek 官方 api-docs 页交叉核实。
