# 18 — 热点深挖: OpenAI Astra：AI 从做任务跨入做原创研究 2026-08-05

> 组内信号：9 条 | 二手转述：5 条（56%）
> 最强证据线：GitHub openai/ten-proofs（一手，zero-sorry Lean 4 证书 + Apache-2.0）+ Gil Kalai 博客（5 月 Erdős 单位距离前传的一手数学家评论区）+ LessWrong Zvi 长文（数学家反应汇编，含「Fable 24 小时用通用 prompt 复现一半」的关键削弱证据）。渠道情况：WebSearch 正常；reddit.com / old.reddit.com 均不可达（真实网络阻断，非搜索污染）；openai.com 官方公告页 403。注意：官方 GitHub 仓库全文未出现 "Astra" 字样——「Astra」是媒体/Zvi 转述的内部代号，仓库只署名论文《Ten advances in mathematics and theoretical computer science》。

---

## 1. openai/ten-proofs：10 个开放问题的 Lean 4 证书全部开源，zero-sorry，Apache-2.0
- **type**: trend | **platform**: GitHub | **secondhand**: false
- **source_url**: https://github.com/openai/ten-proofs
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-05
- **metrics**: 474 stars / 45 forks / 6 watching（发布约 4 天）；1 commit；10 个 .lean 模块（SpherePacking / MetricCodes / NonSoficGroup / ConnesRigidity / Permanent / QuantumParallelRepetition / GapCVP / EhrhartVolumeInequality / MulticolorTriangleRamsey / CompactnessAndDegeneracy）；Lean 4.32.0 + mathlib + Lake；解决 Erdős problems 183/146/180；permanent 的 n^4/log n 公式下界
- **description**: OpenAI 8 月 1 日随 249 页论文开源 10 个 10 年以上未解问题的 Lean 4 形式化证书，`lake exe cache get && lake build All` 任何人可本地复验，附 ComparatorChallenges 目录供独立核验。这是「AI 原创研究成果 + 机器可查证书」第一次以标准开源工程形态交付。仓库本身不含成本数字、不提 Astra 之名。
- **user_quote**: "Lean certificates accompanying proofs in mathematics and theoretical computer science"（仓库描述）
- **top_comments**:
  - [媒体广泛引述, OpenAI 研究员 Sebastien Bubeck] 全批次求解 token 成本按 Sol API 价格计约 $2,000
- **ai_opportunity**: 「一键复验」工具链：给非 Lean 用户的证书验证 SaaS（托管 lake build + mathlib 缓存 + 可读化报告）；仓库连 Issues 都没开，围绕它的复验/讲解/教学内容全部空白。

## 2. Zvi/LessWrong 长文：数学家反应两极，「Lean 证书 ≠ 证明了你以为的命题」成核心争点
- **type**: pain_point | **platform**: LessWrong | **secondhand**: true
- **source_url**: https://www.lesswrong.com/posts/pQYEPitFqztcRvBsS/openai-s-unreleased-model-astra-solves-ten-major-open
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-05
- **metrics**: 49 karma / 5 评论 / 约 26 分钟阅读
- **description**: Zvi 汇编各方反应：Daniel Litt 认输 2025 年赌约（"It's a big deal… I was wrong about what capabilities were necessary"）；被扩展了成果的 Henry Yuen 直言 Lean 证书不提供理解；Gary Marcus 批无对照组；Noam Brown 承认其他大问题失败、无千禧年难题。Zvi 提出「mathematical proofs overhang」：强模型找到题、弱模型即可复现解。
- **user_quote**: "a complicated mix of feelings… [Lean] doesn't give me any understanding"（Henry Yuen，对其量子并行重复工作被扩展）
- **top_comments**:
  - [LessWrong 评论区, simulus] 惊讶于至今没有实验室 all-in 做验证模型（"all-in on building verification models"）
  - [文内引述, Jared Duker Lichtman] 该结果 "far from the 'most important day in the history of mathematics'"
  - [文内引述, Elliot Glazer] "Astra isn't a step change beyond Sol"，认为这是一次刻意的能力引出（elicitation）而非新模型跃迁
- **ai_opportunity**: 「证书↔命题对齐」核验层：自动比对 Lean 形式化命题与论文自然语言声称是否等强（Zvi 明说 Lean 通过不代表证明了所断言之事）；以及面向数学家的「证明可读化/讲解」产品，直击 Yuen 的"没有理解"痛点。

## 3. 削弱证据：Fable 24 小时内用通用 prompt 复现约一半问题——「解题层」正极速商品化
- **type**: trend | **platform**: LessWrong | **secondhand**: true
- **source_url**: https://www.lesswrong.com/posts/pQYEPitFqztcRvBsS/openai-s-unreleased-model-astra-solves-ten-major-open
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-05
- **metrics**: 问题 4–8（约 10 个中的一半）；<24 小时；无联网、全自主、generic prompt
- **description**: Levent Alpoge 报告 Anthropic 的 Fable 在公告后 24 小时内用通用提示复现了约一半结果。含义：一旦「哪些题可解」被公开，前沿解题能力不构成护城河；价值向上游（选题/猜想生成）和下游（验证/发表/工具链）转移。Dean W. Ball 预测这类能力将以快速下降的成本近乎普惠。
- **user_quote**: "with a generic prompt, no internet, fully autonomous"（Zvi 转述 Alpoge）
- **ai_opportunity**: 独立开发者不必自研证明模型：用现成 frontier API + Lean 验证做垂直工作流（如「给定领域自动扫描 Erdős 问题库→尝试→形式化」），窗口期在工具与流程而非模型。

## 4. 前传（5 月）：Erdős 单位距离猜想被 AI 推翻，9 位数学家出「人工核验伴随论文」——人肉验证不可扩展的实证
- **type**: trend | **platform**: 个人博客（Gil Kalai）| **secondhand**: false
- **source_url**: https://gilkalai.wordpress.com/2026/05/21/amazing-erdos-unit-distance-problem-was-disproved-it-was-achieved-by-ai/
- **source_date**: 2026-05-21 | **fetched_at**: 2026-08-05
- **metrics**: 主论文+伴随论文约 125 页；伴随论文 19 页、9 位署名数学家（Alon/Bloom/Gowers/Litt/Sawin/Shankar/Tsimerman/Wang/Wood）；Sawin 下界 n^1.014→n^1.0318，方法上限 1.2143；arXiv:2605.20695
- **description**: 1946 年 Erdős 单位距离猜想被 OpenAI 内部模型（Astra 前身/同族）构造反例推翻，构造用到代数数域、无限类域塔、Golod–Shafarevich 定理。当时未走 Lean 路线，靠 9 位顶尖数学家人工翻译+核验+背书——8 月转向 Lean 证书正是对这种社会化验证不可扩展的直接回应。Kalai 类比 1976 年四色定理机器证明，称可能是超越组合学乃至数学的科学地标。
- **user_quote**: "This is truly amazing. The construction relies on algebraic number theory."（Gil Kalai）；Gowers（经评论区 Yaroslav Shitov 转述）："This result is quite an important moment in the history of mathematics."
- **top_comments**:
  - [Kalai 博客评论区, Yaroslav Shitov, 5月24日] "Was this the official funeral for so-called research mathematics? I believe it was."
  - [Kalai 博客评论区, Gil Kalai 回复] "LLMs and related AI tools may or may not change matters dramatically."
  - [Kalai 博客评论区, Victor Wang 转引 Solymosi József] "several of us have tried to construct a counterexample, from this perspective [the new result] is not surprising."
  - [文内另引, Gowers] "We are unlikely to be able to show that there is something we can do that current AI models cannot in principle do at all."
- **ai_opportunity**: 「AI 成果核验」是明确的稀缺资源：5 月要 9 位 Fields 奖得主级人物人工背书，8 月改用 Lean——中间地带（自动形式化 + 专家抽查平台、给期刊/审稿人的核验工具）是独立开发者可切入的产品层。

## 5. Lean FRO 掌门 de Moura 定调：「形式命题是信任锚」，指出工具层三大缺口
- **type**: trend | **platform**: 个人博客（Leonardo de Moura）| **secondhand**: false
- **source_url**: http://leodemoura.github.io/blog/2026-2-18-proof-assistants-in-the-age-of-ai/
- **source_date**: 2026-02-18 | **fetched_at**: 2026-08-05
- **metrics**: 引用案例：AlphaProof（2024 IMO 银）、Harmonic Aristotle（2025 IMO 金）、ByteDance SEED Prover（2025 IMO 银）；Axiom Math / Math Inc / Logical Intelligence 同栈
- **description**: Lean 联合创始人系统阐述 AI 时代证明助手的产品逻辑：AI 放大底层设计（"AI Amplifies Your Foundation"），紧凑证明→更好训练数据→更好证明的飞轮。点名的缺口：(1) 透明可控的自动化（"Automation that is transparent and steerable is transformative"）；(2) 可读规约——形式化命题必须让人确认与意图一致（"This is the human contract that no amount of automation can eliminate"）；(3) 反对用 NL 摘要当信任层（"The formal statement is the trust anchor"）。
- **user_quote**: "The formal statement is the trust anchor."
- **top_comments**:
  - [同文] "structured, actionable diagnostics help AI correct its mistakes efficiently"
  - [同文] "Learning to read formal specifications is much easier than learning to write them."
- **ai_opportunity**: de Moura 亲自划出的三条产品线都偏工具而非模型：可导向的证明自动化 UI、形式命题可读化（hover/jump 式阅读器）、给 AI 的结构化诊断反馈——全部适合小团队做，不需要训练前沿模型。

## 6. 需求侧实证：de Moura「现在感觉每周都有创业者来找我们」；证明层已成资本密集区
- **type**: product_market | **platform**: Simons Foundation 官网 | **secondhand**: false
- **source_url**: https://www.simonsfoundation.org/2026/06/23/from-trust-to-verification-leans-impact-on-mathematics/
- **source_date**: 2026-06-23 | **fetched_at**: 2026-08-05
- **metrics**: Lean FRO 获 Simons Foundation International $5M；CMU Hoskinson 捐赠 $20M（2021）；2025 年 6 月 Simons 工作坊 57 名早期研究者用 blueprint 完成素数定理形式化；2026 年初一名 23 岁研究者用 ChatGPT+Lean 约 80 分钟算力攻克开放 60 年的 Erdős Problem 1196
- **description**: Simons 基金会年报文章给出 Lean 生态的商业热度与结构：解题/证明层已被 Harmonic（Nvidia 参投 $120M Series C、估值 $1.45B，据 IEEE Spectrum 等报道）和 Axiom（$1.6B）占据，但 de Moura 笑称创业者仍蜂拥而至。Kontorovich 类比 LaTeX 轨迹，预计几代人内普及；同时强调期刊评审「正确性+有趣性」中 Lean 只管前者——品味与价值判断仍是人类工作。
- **user_quote**: "it feels like every week now some startup founder contacts us."（Leonardo de Moura）
- **top_comments**:
  - [同文, Alex Kontorovich] 类比 LaTeX：1978 年问世时不受待见，后来人手一份
  - [同文, Sebastian Ullrich 谈 Lean 教学] "Just getting that feedback immediately about whether that proof makes sense or not, it's a complete game changer."
  - [同文, Kontorovich] 期刊同时评判正确性与有趣性，而 "Lean does not evaluate two at all"
- **ai_opportunity**: 教学市场被点名：Lean 即时反馈对课程作业是 "complete game changer"——Lean 教学/练习平台（数学系 & 自学者）是尚无独角兽的细分；另外 blueprint 协作形式化（57 人工作坊模式）可产品化为「形式化项目管理」工具。

## 7. Axiom Math：$200M A 轮、估值 $1.6B——但「AI 证明进期刊」宣传超前于事实
- **type**: product_market | **platform**: 科技媒体（Crypto Briefing）| **secondhand**: true
- **source_url**: https://cryptobriefing.com/axiom-math-ai-proofs-peer-reviewed/
- **source_date**: 2026-05-26 | **fetched_at**: 2026-08-05
- **metrics**: Series A $200M（Menlo Ventures 领投）、投后 $1.6B、种子 $64M、累计 $264M；AxiomProver 称解决至少 4 个未解问题；2026 年 2 月上 arXiv；截至 5 月底无经同行评审发表确认
- **description**: Palo Alto 公司 Axiom Math（创始人 Carina Hong，2025 年 3 月成立；Ken Ono 任 founding mathematician），产品 AxiomProver 输出经 Lean 逐步机器核验。注意利益相关与标题党：文章标题称「进入同行评审期刊」，正文自认 2 月预印本仍在专家审读、无发表确认——典型的 AI 数学赛道宣传/事实差。
- **user_quote**: "no peer-reviewed publications have been confirmed as of late May 2026"（文中自我修正）
- **ai_opportunity**: 估值锚点：证明层单笔 $200M 起步，独立开发者别碰；但「AI 证明的发表流水线」（期刊格式化、审稿人核验界面、arXiv→Lean 双向追踪）恰是这些高估值公司要采购的铲子。

## 8. 中文生态：AI 科研助手使用率 23%→67%，「书生·端砚」全流程平台发布，NSFC 立项形式化方向
- **type**: trend | **platform**: 新浪财经 / CSDN / NSFC | **secondhand**: true
- **source_url**: https://finance.sina.com.cn/jjxw/2026-07-18/doc-iniifhua1528073.shtml
- **source_date**: 2026-07-18 | **fetched_at**: 2026-08-05
- **metrics**: 国内高校师生 AI 科研工具使用率 2024 年 23% → 2026 年 67%（qinyanai 评测文，自家产品居榜首，倾向性存疑）；书生·端砚落地生命科学/关键材料/半导体/核聚变/量子/地球气象 6 领域；NSFC 2026 重大研究计划指南含「神经-符号融合的形式化规约自动生成」「程序定理自动证明」资助方向（https://www.nsfc.gov.cn/p1/3381/2824/100403.html）
- **description**: 中文侧「AI 科研助手」（论文工具、科学发现平台）与「形式化验证」（Lean/定理证明）仍是两条平行线，无成熟商业化融合产品；36氪 6 月报道标题引陶哲轩称 AI 已过数学形式化临界点（https://www.36kr.com/p/3864221936391430）。国家队（上海 AI Lab、NSFC）入场做平台与基础研究，留给个人开发者的是垂直单点。
- **user_quote**: "「大而全」全流程平台正逐步取代单点工具、「学术合规」成为竞争核心"（qinyanai 评测趋势观察，转述）
- **ai_opportunity**: 中文市场空档：Lean 中文教学内容、面向国内数学/CS 研究生的形式化入门课与工具汉化几乎空白；「学术合规」（AI 使用披露、可验证性）被列为竞争核心——合规核验工具有付费方（高校/出版方）。

## 9. 注意力信号：Astra 公告在 HN 意外遇冷（最高 12 分），远低于 7 月 GPT-5.6 数学帖的 601 分
- **type**: trend | **platform**: Hacker News (Algolia API) | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49160081
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-05
- **metrics**: 三次提交（objectID 49160081: 12 分 1 评论；49166877: 2 分；49178119: 1 分）；对照 2026-07-18 "GPT-5.6 closed a 30-year gap in convex optimization"（objectID 48957779）601 分 / 391 评论
- **description**: HN Algolia 检索显示 Astra 十题公告的三次提交合计仅 15 分，而一个月前 GPT-5.6 凸优化帖曾 601 分刷屏。解读：「AI 解开放数学题」在技术社区已从惊奇转入疲劳/怀疑周期（与 Glazer "not a step change"、Marcus 无对照组批评一致），公众注意力窗口在收窄——做「又一个 AI 数学新闻」内容产品价值下降，做「谁的声称真的成立」核验产品价值上升。
- **user_quote**: 无（低互动帖无实质评论可引）
- **ai_opportunity**: 信息层机会从「报道突破」转向「甄别突破」：AI 研究声称追踪器（声称→形式化状态→独立复现→专家背书四级打分），受众为投资人/记者/研究者。

---

## 渠道备注
- reddit.com 与 old.reddit.com 直接抓取均被阻断（工具级不可达，非搜索污染），r/math 一手讨论未能纳入。
- openai.com 官方公告页返回 403，官方叙述经由 GitHub 仓库（一手）与多家媒体交叉印证。
- WebSearch 本次运行返回结果与查询高度相关，未见 2026-07-28 式查询污染。
- 官方仓库中无 "Astra" 字样：模型代号来自媒体与 Zvi 转述，报告引用时应注意「Astra」为非官方口径。
