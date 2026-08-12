# 18 — 热点深挖: OpenAI Astra 做出原创数学/基础科学研究 2026-08-12

> 组内信号：9 条 | 二手转述：3 条（33%）
> 最强证据线：openai/ten-proofs GitHub 仓库（一手，Lean 4.32.0 证书 + Apache-2.0，48 stars）+ HN 630 分/942 评论主线程一手评论 + LessWrong/Zvi 汇编的「对照组缺失」争议（Fable 在通用 prompt 下一天复现 10 题中的 5 题）。渠道故障：openai.com 官方公告页 403 拦截、news.ycombinator.com 与 thezvi.substack.com 直连 ECONNREFUSED，均已用 HN Algolia API / LessWrong 镜像绕行；WebSearch 本场正常无污染。

---

## 1. OpenAI 发布 Astra「十大数学/理论计算机进展」：~$2000 token 成本 + Lean 机器可验证证明
- **type**: trend | **platform**: openai.com / 综合媒体 | **secondhand**: true
- **source_url**: https://www.implicator.ai/openai-astra-10-math-problems-lean-proofs/ （官方页 https://openai.com/index/ten-advances-in-mathematics/ 403 无法直取）
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-12
- **metrics**: 10 个开放问题（均搁置 ≥10 年）；token 成本约 $2,000（按 Sol API 费率折算，仅计成功解、不含失败尝试）；249 页手稿；Lean 证书 sorry 数为 0；配套「10 万科学家/数学家免费用顶配 ChatGPT」计划
- **description**: 8/1 OpenAI 宣布内部版 Astra 解决 10 个数学/TCS 开放问题：非 sofic 群构造（1999 年 Gromov 提出后 27 年未决）、Connes 刚性猜想反证、50 年来首次改进一般球堆积指数（Kabatiansky–Levenshtein 1978 → Cohn–Elkies 阈值）、permanent 的 n^4/log n 算术公式下界、格密码 CVP 近似难度 n^(1/400)、量子博弈并行重复定理、Ehrhart 体积猜想、Erdős 问题 146/180/183。流程为「人用模型起草手稿→模型 Lean 形式化→发布证书」。这是「宣称 ≠ 实测」叙事的反面样板：用形式化验证器把宣称变成可一键复核的工件。
- **user_quote**: "no Millennium Prize Problems (yet)" — Noam Brown (OpenAI), X
- **top_comments**:
  - [The Decoder 转述 Thomas Bloom（erdosproblems.com 维护者）on X] 称结果是 "big news"，作为构造性成果比 5 月的单位距离反例更重大
  - [Noam Brown on X（Zvi 转述）] 承认 "did try other major problems without success"、"didn't spend a lot on each problem"
- **ai_opportunity**: 「formalize-after-drafting」流水线可移植到任何有验证器的领域：先让模型起草、再强制形式化产出可离线复核的工件，让宣称在无模型访问权的情况下也能存活。独立开发者可做「Lean 证书打包/复核即服务」「研究产出可信度标签」。

## 2. openai/ten-proofs 仓库：Lean 4 证书开源，`lake build All` 两条命令即可独立复核
- **type**: product_market | **platform**: GitHub | **secondhand**: false
- **source_url**: https://github.com/openai/ten-proofs
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-12
- **metrics**: 48 stars / 3 forks / 1 commit（截至 2026-08-12）；Lean 4.32.0 + mathlib + Lake；Apache-2.0；10 个 .lean 文件一题一档；另含 ComparatorChallenges 目录（独立于 Lean 编译器的外部复核器配置）
- **description**: 一手证据锚点。README 索引 10 个形式化文件（SpherePacking.lean、NonSoficGroup.lean、ConnesRigidity.lean、Permanent.lean、GapCVP.lean、QuantumParallelRepetition.lean、EhrhartVolumeInequality.lean、MulticolorTriangleRamsey.lean、CompactnessAndDegeneracy.lean、MetricCodes.lean），任何人 `lake exe cache get && lake build All` 即可本地验证。注意信号：史诗级新闻但仓库仅 48 stars——形式化证书的「可复核性」与大众关注度严重脱节，复核工具链门槛仍高。
- **user_quote**: "Lean certificates accompanying ten proofs in mathematics and theoretical computer science."（仓库描述）
- **top_comments**:
  - [HN id=49143688, Turskarama] "this would be impossible to bullshit as long as the proofs are released. They can be verified independently, and the alternative is that they solved 10 major open mathematical questions without the AI, which seems less likely."
- **ai_opportunity**: 「一键复核」仍需装 elan/Lean 工具链——可做 Lean 证书云端复核服务（上传 repo URL 返回验证徽章）、CI 集成的 proof-check GitHub Action、以及「formal statement ≠ 名义猜想」的语义对齐审计工具（Lean 只保证形式命题成立，不保证它就是大家关心的那个猜想）。

## 3. HN 942 评论主线程：数学界「存在性焦虑」与开源基线缺位之争
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49157930
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-12
- **metrics**: 630 points / 942 comments（HN Algolia API 实测；另一提交 49132058 464 分被合并）
- **description**: OpenAI 官方公告的 HN 主线程。争论主轴：(1) 数学家职业前景 vs 数学学科前景的分离；(2) 与国际象棋引擎的类比是否成立——关键分歧在 Stockfish 是 GPL 开源基线而数学突破全被闭源模型垄断；(3) 「模型是暴力搜索还是真的有直觉」。开源基线缺位被多人点名，是独立开发者的明确机会信号。
- **user_quote**: "Are any open models touting mathematical breakthroughs?" — ratmice
- **top_comments**:
  - [HN, energy123] "The distinction is mathematician vs mathematics. Mathematics is going to reach new heights beyond the wildest dreams of contemporary mathematicians. But perhaps without the participation of many paid mathematicians."
  - [HN, baq] "there are two groups of people: the disappointed and the enthusiastic. The disappointed are sad that they lost their advantage and that the craft they honed for years or decades has rapidly lost its value; the enthusiastic are excited about the future..."
  - [HN, traes] "There is money in this, so of course the closed models are far ahead. The open models will likely catch up a bit at some point, just as Stockfish caught up to AlphaZero."（并提及 Deepseek 宣称证明 Ziegler 交叉多面体猜想）
- **ai_opportunity**: 「数学界的 Stockfish」空缺：开源定理证明 agent（基于 DeepSeek-Prover/开源模型 + Lean）作为可自托管基线。另有「AI 数学成果解读层」需求——人类数学家对结果的消化/解释本身成为内容产品。

## 4. 选择效应/无对照组争议：Fable 用通用 prompt 一天复现 10 题中的 5 题
- **type**: pain_point | **platform**: LessWrong / X | **secondhand**: true
- **source_url**: https://www.lesswrong.com/posts/pQYEPitFqztcRvBsS/openai-s-unreleased-model-astra-solves-ten-major-open
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-12
- **metrics**: 数学家 Levent Alpoge 用 Fable（"totally autonomous, generic prompt, no internet"）一天内解出问题 4、5、6、7、8（10 题中约一半）
- **description**: 对 Astra 声明最实质的削弱：既有模型在知道「哪些题可解」后能低成本复现一半，说明 (a) OpenAI 未跑对照组，能力增量存疑（Elliot Glazer："aligns with my suspicion that Astra isn't a step change beyond Sol"）；(b) 更重要的推论——存在「数学证明悬垂」（mathematical proofs overhang）：现有公开模型的研究能力被系统性低估，只是缺少题目筛选和引导。这直接把「用现有 API 做原创研究」从想象变成已验证的套利空间。
- **user_quote**: "would have been more responsible" to have run Sol as a control at comparable budget — Zvi
- **top_comments**:
  - [X, Gary Marcus（Zvi 转述）] OpenAI "didn't even have a control group"，其 PR "suckered you AGAIN"
  - [LW, ulyssessword] 复现表明 "other models are more capable, not because Astra is less."
  - [LW, Vladimir_Nesov] 提出标记重捕框架：Fable 解出 Astra 十题的一半，与「另有十题 Fable 能解而 Astra 只能解一半」相容
- **ai_opportunity**: 「proofs overhang」即产品：用公开 API（Fable/Sol 级）+ 开放问题清单（erdosproblems.com 1200+ 题、Formal Conjectures 1029 开放形式化命题）+ 自动筛题器，做批量开放问题攻坚服务；同时「AI 声明对照组复测」本身可产品化（与本 repo 既有「宣称 ≠ 实测」主题共振）。

## 5. Lean 编译通过 ≠ 独立评审：仓库自标「agent-reviewed」，专家消化缺口成为明确痛点
- **type**: pain_point | **platform**: 综合评述 | **secondhand**: true
- **source_url**: https://kingy.ai/news/openai-astra-ten-math-results-evidence/
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-12
- **metrics**: 截至 8/1 无任何独立专家评审或同行评审发表；仓库标注 "agent-reviewed" 而非人工评审；专家消化预计需数月；Astra 本体不开放导致外部无法复现过程
- **description**: 多家评述汇聚到同一缺口：Lean 消除局部逻辑错误，但不把「定义选取、命题翻译、与文献的对应」变成机械事实——一个合法的形式定理可能弱于大家以为它解决的那个著名猜想。叠加 Scientific American 报道球堆积证明疑似复用 Steven Miller 2016 年论文的论证却未署名，「provenance / 归属审计」成为第二重痛点。Henry Yuen（量子并行重复原作者）："Lean doesn't give me any understanding"，且写作把技术关键埋没。
- **user_quote**: "Lean doesn't give me any understanding" — Henry Yuen（Zvi/LW 转述）
- **top_comments**:
  - [LW, Elliot Glazer] 指 Astra 与 Sol 的共同弱点是 "failing to signal which proof steps are actually hard"
  - [HN id=49143688, aabhay（搜索摘要转述）] 不披露完整实验设置 "similar to P-value hacking"——投入多少题才换来 10 个成功？
- **ai_opportunity**: 三个可做的工具：(1) formal-statement 对齐审计（形式命题 vs 自然语言猜想的语义 diff）；(2) 文献 provenance 检测（AI 证明与既有论文论证的相似度审计）；(3) 「证明难点标注器」——自动标出证明中真正非平凡的步骤供专家优先审阅。

## 6. 08-07 Astra 因「Critical」网络安全能力暂缓：首个触顶 Preparedness Framework 的前沿模型
- **type**: trend | **platform**: Axios / TechCrunch | **secondhand**: true
- **source_url**: https://www.axios.com/2026/08/07/openai-astra-model-delay-cybersecurity-risks
- **source_date**: 2026-08-07 | **fetched_at**: 2026-08-12
- **metrics**: OpenAI 首次「无法排除」模型达到 Critical 网安等级（Preparedness Framework 最高档：自主发现并利用 0-day、从高层目标自主设计新攻击）；措辞暗示延迟数月而非数周；已主动通报白宫；工程师转入隔离测试系统 + 权重加密 + 沙箱执行
- **description**: 数学突破披露 6 天后，OpenAI 宣布暂停不满足更严安全要求的内部活动、延迟 Astra 发布——可能是前沿实验室首次因网安风险主动放慢自家模型。对建设者的直接含义：Astra 级研究能力短期内不会以 API 形式到达市场，「研究级 agent」窗口期内只能基于 Sol/Fable 级模型构建（而信号 4 表明这已够用一半）；同时模型隔离/权重保护/沙箱执行的安全工装需求被官方背书。
- **user_quote**: OpenAI 称 "cannot rule out" Astra 具备 Critical 级网络能力（Axios 独家）
- **top_comments**:
  - [HN id=49143688, watwut（对同期 AI 黑客叙事）] "We hacked a company and blame the tool! Somehow it is not negligence, but cool!... See, us accidentally pointing a hacking tool on others proove we are the only ones that can be trusted with the tool!"
  - [HN id=49143688, sunandsurf] "Does anyone else have trouble telling how much of this news (along with the 'AI escaping and hacking' stories) is genuine, vs how much is just AI firms overstating their capabilities due to strong commercial incentives?"
- **ai_opportunity**: 与本 repo 8/6「Agent EDR」、8/10「控制有效性验证器」主题直接续接：官方确认 agentic cyber 能力逼近 Critical，第三方「模型能力独立评估」「agent 沙箱/出口控制」「权重保护合规工具」的采购理由被写实。

## 7. Leiden Declaration：IMU 背书、3000+ 签名（含 Tao、Scholze），AI 数学研究的治理框架成型
- **type**: trend | **platform**: 学界联署 / 媒体 | **secondhand**: true
- **source_url**: https://xenospectrum.com/en/openai-astra-ten-math-advances/
- **source_date**: 2026-06-02（宣言发布）/ 2026-08-01（本文） | **fetched_at**: 2026-08-12
- **metrics**: 16 位研究者跨 15 所大学起草；IMU 背书；3000+ 签名者含 Terence Tao、Peter Scholze；提出 5 项风险（不可靠结果、依赖闭源商业系统等）
- **description**: 6/2 发布的 Leiden Declaration 要求：披露工具与算力、尽可能提供形式化证明、人类对正确性负责。OpenAI 在 8/1 公告中主动引用该宣言并声明「归属应诚实反映研究产出方式」（想法来自 Astra，人类只做手稿撰写和 Lean 形式化）。这意味着「AI 辅助研究的披露规范」正在从倡议变成事实标准——合规工具有了明确 spec。
- **user_quote**: OpenAI: "attribution should honestly reflect how the research results were produced"（XenoSpectrum 转述）
- **top_comments**:
  - [Leiden Declaration 核心三问（XenoSpectrum 归纳）] 谁用什么方法验证 AI 证明；研究议程依赖商业 AI 后由谁掌控；如何判定黑盒输出是否为对既有人类工作的未署名重建
- **ai_opportunity**: 「Leiden 合规」工具链：论文投稿前自动生成工具/算力/人类分工披露清单；期刊侧的 AI 辅助声明核验插件。宣言明确的第 3 风险（依赖闭源系统）再次指向开源证明基线的空缺。

## 8. 商业化竞品已在跑：FrenzyMath Aletheia 解出 FirstProof 6/10，Archon 做「非形式证明 → Lean 4 工程」
- **type**: product_market | **platform**: FrenzyMath 官网博客 | **secondhand**: true（厂商自述，利益相关）
- **source_url**: https://frenzymath.com/blog/conjecture/
- **source_date**: 2026 年（具体日期未取到，FirstProof 为 2026-02 发起） | **fetched_at**: 2026-08-12
- **metrics**: Aletheia 解出 FirstProof 10 题中 6 题（11 位数学家出题、答案加密、一周时限的防污染基准）；Archon agent：输入非形式证明 → 输出含全部定义/引理、基于 Mathlib 的完整 Lean 4 工程；Seed-Prover 1.5 解 Putnam 2025 11/12；AxiomProver 宣称 Putnam 满分；DeepMind 系 agent 批量跑 353 个 Erdős Lean 命题 + 492 个 OEIS 猜想
- **description**: Astra 光环之外，「自动猜想解决 + 形式验证」已是拥挤赛道：初创（FrenzyMath）、大厂（DeepMind、字节 Seed）、基准方（Epoch AI FrontierMath: Open Problems，评测即服务）、政府（DARPA expMath、NSF ICARM 研究所）四路进场。厂商自述数据未经独立核验。
- **user_quote**: （厂商博客，无用户语录）
- **top_comments**:
  - [phys.org 2026-03] 研究者论文显示 ChatGPT-5.2 (Thinking) 独立生成原创证明解决一个 2024 年猜想——公开商用模型即可产出可发表结果的又一佐证
- **ai_opportunity**: 独立开发者别做通用 prover（大厂赛道），做周边：Lean 形式化外包工作流（Archon 的开源平替）、防污染私题评测服务、给数学系/期刊的 AI 证明审计 SaaS。DARPA expMath 与 NSF ICARM 意味着有政府预算可投标。

## 9. 「结果真实但营销溢价」——从业者对能力外推的清醒剂（Gary Marcus 线程）
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49148959
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-12
- **metrics**: 25 points / 9 comments（Gary Marcus substack 文的 HN 线程）；另 49143688（49 分/51 评论）同主题
- **description**: 对「数学能力 → 通用能力」外推的集中质疑。核心论点（SpicyLemonZest 概括 Marcus）：观测到的提升可归因于验证工具而非底层智能，因此不会泛化到无验证器的问题空间。这恰好圈定了产品边界：AI 研究能力的护城河在「有验证器的领域」——数学/Lean、代码/测试、密码学归约——独立开发者应在这个边界内选题。
- **user_quote**: "He thinks that the observed improvement is actually attributable to verification tools, so it won't generalize to problem spaces which aren't verifiable enough to build such tools." — SpicyLemonZest（HN，转述 Marcus 论点）
- **top_comments**:
  - [HN 49143688, HarHarVeryFunny] "these math results appear genuine, and impressive... Of course there is still a massive marketing aspect to this, with the AI companies wanting to you assume that because their product is world-class at math... it will be equally useful in areas that you actually care about, such as managing your vending machine, perhaps :-)"
  - [HN 49143688, HarHarVeryFunny] "How about... releasing these results individually as they were made/verified, as well as the failures (equally valuable to assess the current capabilities of LLMs)"
  - [HN 49148959, semiquaver（反方）] "The cope is tangible... I cannot see the goal posts, they have been moved so much."
- **ai_opportunity**: 选题准则本身即信号：verifier-rich 领域（形式数学、可测试代码、可复核安全声明）是 AI 研究 agent 短期唯一可靠落点；为无验证器领域「构造验证器」（合成测试、性质检查、形式化 spec）是更上游的产品机会。
