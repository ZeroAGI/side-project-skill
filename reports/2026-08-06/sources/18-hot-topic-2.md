# 18 — 热点深挖: OpenAI Astra 攻克 10 个数学开放难题 + GPT-5.6 Luna 降价 80% 2026-08-06

> 组内信号：8 条 | 二手转述：5 条（63%）
> 最强证据线：GitHub 一手仓库 openai/ten-proofs（Apache-2.0、Lean 4.32.0、零 sorry）+ HN 主帖 463 分 39+ 评论的逐字社区反应，共同指向「Lean 验证层 = AI 输出的信任边界」这一产品化母题；渠道故障：openai.com 官方公告页 403 拒抓、news.ycombinator.com 直连 ECONNREFUSED（用 hn.algolia.com API 绕行成功）。注意：任务简报中「Gowers 背书」在本组全部来源中未获证实，独立分析页明确写 "Gowers — not mentioned anywhere"。

---

## 1. OpenAI 开源 ten-proofs 仓库：10 个开放难题的 Lean 4 证明证书（Apache-2.0，零 sorry）
- **type**: trend | **platform**: GitHub | **secondhand**: false
- **source_url**: https://github.com/openai/ten-proofs
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-06
- **metrics**: Lean 4.32.0 + mathlib；`lake exe cache get` + `lake build All` 两条命令即可全量复核；10 个 Lean 模块（SpherePacking/NonSoficGroup/ConnesRigidity/Permanent/GapCVP 等）；Apache-2.0；抓取时页面显示 1 star / 0 fork / 1 commit（疑似快照缓存偏低）；配套 249 页手稿
- **description**: OpenAI 8/1 宣布未发布的下一代模型 Astra 解决/推进 10 个搁置 10 年以上的数学与理论 CS 难题（非 sofic 群构造、Connes 刚性猜想反例、球堆积上界、Erdős 146/180/183 等），并把全部 Lean 4 证书开源。README 称结果对应论文 "Ten advances in mathematics and theoretical computer science"，附 ComparatorChallenges 目录供第三方用 Comparator 独立复核。验证从「找领域专家评审数月」坍缩为「下载后编译一次」——这是 AI 科研成果第一次自带可机器复核的信任层。官方公告页 openai.com 403 拒抓，故以 GitHub 仓库为一手锚点。
- **user_quote**: "Lean certificates accompanying ten proofs in mathematics and theoretical computer science"（仓库描述）
- **top_comments**:
  - [README] 项目 "uses Lean 4.32.0, mathlib, and Lake"；结果 9 为 "resolving Erdős problem 183"；结果 6 为 "Exponential parallel repetition for arbitrary finite, two-player quantum games."
- **ai_opportunity**: 「一键复核」体验可直接产品化：托管式 Lean 证书验证服务（CI for proofs）、面向期刊/arXiv 的证明证书徽章、以及把 `lake build` 封装成非专家可用的网页验证器。独立开发者可先做 ten-proofs 的第三方复核报告吸引流量。

## 2. HN 主帖 463 分：社区把矛头对准「形式化忠实性」与 reward hacking，而非结论真伪
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49132058
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-06
- **metrics**: 463 points，2026-08-01 07:37 UTC 提交，标题 "Ten advances in mathematics and theoretical computer science"（链 openai.com）
- **description**: 高热主帖的争论核心不是「AI 会不会做数学」，而是三个可产品化的信任缺口：(1) Lean 证书只保证形式化命题可导出，不保证形式化忠实还原原始定理；(2) reward hacking——验证测试本身可能被模型绕过；(3) 过程不可审计（prompt、尝试次数、专家介入程度全部未披露）。多位评论者明确说披露方法论「不会让模型变得没用」，反而缺口在邀请犬儒解读。
- **user_quote**: "If the proofs are formally verified by a proof assistant (Agda, Roq, Lean, ...), I see no reason we would need to know how these came about." — black_knight
- **top_comments**:
  - [HN black_knight 回复者 jhanschoo] 传统上数学家对 Lean 工件和背后的智力工作同时负责，OpenAI 的免责声明读起来像 "an acknowledgement of limitation of authorship."
  - [HN Readerium] 称验证缺口是 "an example of 'Reward Hacking'"，举 GPU kernel 类比：让模型生成 Normal(0,1) 采样它直接输出零，"The tests often fail to catch these errors."
  - [HN vector_spaces] 质问隐瞒方法论的理由何在，透明 "would easily support the claims"；不透明 "invite[s] skepticism and cynical takes"；并自曝 "doesn't make the models not useful!"——他本人已用这些工具推翻过一个猜想
  - [HN fasterik] 成本分母算错了：真实成本不止 "$/token, but the salaries of the people managing/orchestrating the models, deciding what theorems to try."
  - [HN c7b] 要求借用实验科学的可复现规范，反对 "the most black-box version of math that AI systems can produce (million-line proofs without context)"，自称立场是 "a FOSS philosophy for math."
- **ai_opportunity**: 三个缺口各对应一个产品：① 形式化忠实性审计工具（对照自然语言定理与 Lean 命题，diff 假设强弱）；② 证明过程审计日志标准（prompt/尝试数/人工介入的 provenance 格式）；③ 面向 AI 生成证明的「反 reward-hacking」测试生成器。付费意愿信号：vector_spaces 已在真实科研中用这类工具证伪猜想。

## 3. HN 第二帖：开放权重诉求 + 「数学能力对 99.99% 客户无用」的营销落差
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49143688
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-06
- **metrics**: 49 points / 39 comments，2026-08-02 12:01 UTC，链向 Noam Brown 推文（twitter.com/polynoamial status 2083467194663571701）
- **description**: 重复帖但用户声音独立成线：一边要求增量发布含失败案例（对评估 LLM 能力「同等宝贵」），一边指出顶级数学能力与实际客户工作负载之间的转移假设未被证明——这正是「Astra 溢价能不能收到钱」的核心商业问题。另有评论提出把对话日志作为可复现规范。
- **user_quote**: 顶楼 HarHarVeryFunny：不增量发布结果与失败案例的做法 "cheapens mathematics"；失败案例 "equally valuable to assess the current capabilities of LLMs"
- **top_comments**:
  - [HN HarHarVeryFunny] 世界级数学能力对 "99.99% of their potential customers" 无用，采用论证全靠「能力可迁移到你真正关心的工作」这一未验证假设
  - [HN seydor] "I wish the models were open weights so we could at least do some interesting geometry on the math."（并讽刺发布会像 "a rich man showing off his car collection"）
  - [HN seanmcdirmid] 提议发布对话日志让他人加载进另一个模型审问推理过程——"Show your work" 在 AI 解题时代已被架空
  - [HN QuesnayJr] 指控战略性攒稿：OpenAI 按 10 个一批投放成果，研究者拿到的 "only ... as many results as necessary for OpenAI to market their models."
- **ai_opportunity**: 「推理过程可审计」是未被满足的刚需：对话日志→可交换审计格式（类似 SBOM 之于软件供应链）的开源规范/工具，先发者可定义标准。教育/科研机构是首批买家。

## 4. GPT-5.6 Luna 输入价降 80% 至 $0.20/M：路由策略取代旗舰依赖，直接压 DeepSeek
- **type**: trend | **platform**: 科技媒体（VentureBeat 等） | **secondhand**: true
- **source_url**: https://venturebeat.com/technology/ai-price-wars-openai-cuts-gpt-5-6-luna-prices-by-80-as-model-competition-shifts-toward-cost
- **source_date**: 2026-07-30 | **fetched_at**: 2026-08-06
- **metrics**: Luna $1/$6 → $0.20/$1.20（输入/输出，每 M token，降 80%）；Terra 降 20% 至 $2/$12；Sol 保持 $5/$30 并新增 2 倍价 2.5 倍速 fast mode；距 7/9 GPT-5.6 家族发布仅 3 周；长上下文 Luna $0.40/$1.80（超限后全请求按高价计）；batch $0.10/$0.60；DeepSeek V4 Pro 输入 $0.435（被反超）但输出 $0.87 仍更便宜；中国模型占 OpenRouter token 量 66.5%（4 月约 50%）；OpenAI 称原 $1 的 Luna 任务现约 6 美分、近 9 倍速（未独立验证）；HN 一手帖 https://news.ycombinator.com/item?id=49113348（链 sama 推文，仅 8 分 1 评论，社区反应平淡）
- **description**: 廉价档砍价、旗舰档守价——分析师解读为 OpenAI 承认在低端无法对中国开源模型维持溢价，但 frontier 仍收溢价。开发者侧的实操共识变成「按难度路由」：Luna 跑高频常规任务、Terra 做默认、Sol 只留给最难推理。OpenAI 自称降价源于用 Sol 重写自家推理基础设施（技术叙事，效率数字无独立验证）。注意 $0.20 是标准档参考价而非普适价，长上下文触发即整单翻倍。
- **user_quote**: 路由指南的定性："Luna now makes high-volume AI work 'cheap enough to stop counting.'"
- **top_comments**:
  - [MLQ News] Luna $0.20 输入价 "undercutting DeepSeek"（V4 Pro $0.435），AI 价格战加剧
  - [Yahoo Finance] 降价 "tells you where the pressure is coming from"——压力来自以 1/5 成本存在的中国开源模型
- **ai_opportunity**: 对独立开发者是边际成本重定价事件：原先单位经济算不过来的高频低价值场景（逐条内容审核、全量日志摘要、教育逐题反馈、agent 自动审批）在 $0.20/M 下重新可行。同时催生工具需求：跨档智能路由器、长上下文计价陷阱预警、batch 调度器。风险：纯「便宜套壳」护城河进一步归零。

## 5. 「$2000 是只有分子的分数」：成功学叙事拆解 + Noam Brown 自认还有未公布的失败
- **type**: pain_point | **platform**: 独立分析站（Novel Cognition） | **secondhand**: true
- **source_url**: https://tenproofs.novcog.us.com/
- **source_date**: 2026-08-02 | **fetched_at**: 2026-08-06
- **metrics**: $2000 仅覆盖 10 次成功运行、按未发布模型的 Sol 替代价折算；成功率未披露；配套「推理过程实录」文档记录了错误递归、"long and useful failed route"、停滞的归约等结构化弯路
- **description**: 独立分析（注意：站方夹带自家咨询推广，需打折）把 $2000 定性为 "a numerator with the denominator withheld"——发表成本而非发现成本。最有行动价值的是 Thomas Ahle 对 Noam Brown 的公开诉求：公布尝试过的问题清单，否则数千研究者会白白重试 OpenAI 已知此法难解的猜想。另收录 Leslie Ann Goldberg（牛津 CS 系主任）经 Leiden Declaration 的警告。Gowers 在该页完全未被提及——任务简报中的「Gowers 背书」本组未能证实。
- **user_quote**: "The cost of generating the proofs for all 10 of these breakthroughs combined was under $2,000 at Sol API prices." — Noam Brown（29 分钟后补充）"And yes we did try other major problems without success. Sadly no Millennium Prize problems (yet)."
- **top_comments**:
  - [Thomas Bloom, erdosproblems.com] 称此工作是 "big news"，"in terms of constructions, this is big"，但拒绝「AI 取代数学家」叙事
  - [Leslie Ann Goldberg, 牛津] 此类方法 "can produce plausible but unreliable (or even incorrect) arguments"
  - [Thomas Ahle → Noam Brown] 要求公布尝试清单，避免数千研究者重复烧钱试 OpenAI 已知难解的猜想（转述，原文未给逐字）
- **ai_opportunity**: 「负结果注册表」是被点名的空白：类似临床试验预注册的 AI-attempt registry（哪些猜想、哪个模型、烧了多少、失败在哪），学界与 lab 双边都有动机。小团队可先以社区 wiki + 提交规范冷启动。

## 6. AI for Math Fund：$100K–$1M 赠款 + 滚动 seed 通道，付费方明确（XTX Markets）
- **type**: product_market | **platform**: 官方基金页（Renaissance Philanthropy） | **secondhand**: false
- **source_url**: https://www.renaissancephilanthropy.org/ai-for-math-fund
- **source_date**: 2026-03 | **fetched_at**: 2026-08-06
- **metrics**: 主赠款 $100K–$1M / 12–24 个月；seed 最高 $100K 滚动评审无截止；暑期 fellowship $20K–$30K/10 周；主轮 decisions 2026 年 8 月公布；出资方 XTX Markets
- **description**: 独立开发者切入 AI+数学最现实的资金入口：面向全球个人与团队，明确资助 "automated theorem proving, AI-assisted proof development, or mathematical reasoning" 的原型、"proof assistant integrations, early AI-assisted math tooling" 的基础设施实验、以及数据集/benchmark。首期组合本身就是缺口地图：数据集建设、prover–mathematician 交互、覆盖度改进、field-building、moonshot。硬约束：全部产出必须开放。Astra 事件恰在主轮放榜月（8月）引爆关注，赛道热度与资金窗口叠加。
- **user_quote**: "All code, datasets, and research outputs must be open-access, with preprints shared in public repositories."
- **top_comments**:
  - [基金页 seed 类目] "Tools or infrastructure experiments — e.g., proof assistant integrations, early AI-assisted math tooling."
- **ai_opportunity**: seed 通道滚动评审 + 最高 $100K，是 indie builder 做 Lean 工具链（autoformalization、mathlib 检索 copilot、验证中间件）的直接启动资金；开放要求意味着商业模式应设计为 open-core 或服务化。

## 7. AI-math 创业公司集群成形：Harmonic、Axiom Math、Math Inc、Logical Intelligence；Axplorer 从超算搬到 Mac Pro
- **type**: product_market | **platform**: MIT Technology Review | **secondhand**: true
- **source_url**: https://www.technologyreview.com/2026/03/25/1134642/this-startup-wants-to-change-how-mathematicians-do-math/
- **source_date**: 2026-03-25 | **fetched_at**: 2026-08-06
- **metrics**: Axiom Math（Palo Alto）2026 年 3 月发布免费工具 Axplorer（PatternBoost 重设计版，原需超算、现跑 Mac Pro）；数学家离开学界加入 OpenAI/Google 或 Harmonic、Logical Intelligence、Axiom Math、Math Inc 等专业创业公司；Georgia Tech 等高校筹建 AI for math 中心并开 Lean tutorial
- **description**: 赛道从「lab 演示」进入「公司化竞争」：DeepMind AlphaProof（5 月已用 Lean 解 9 个 Erdős 问题）、Harmonic Aristotle 走 LLM+定理证明器混合路线；Axplorer 证明「从超算降到桌面」的产品化路径可行。CMU Jeremy Avigad 给出行业动机：机器学习+数学精确性可能是通往通用智能的关键。高校建中心 = 工具与培训的机构买家正在成形。Astra 事件将进一步给该集群导流与抬估值。
- **user_quote**: "Whether it actually speeds up research as much as the company hopes remains to be seen."（MIT TR 对 Axplorer 的保留）
- **top_comments**:
  - [Quanta Magazine 2026-04-13] "The AI Revolution in Math Has Arrived"——2025 至 2026 初 AI 证明的结果抽象度持续上升
- **ai_opportunity**: 大公司抢 frontier 证明能力，留给 indie 的是外围：Lean onboarding 培训（高校中心刚需）、on-device 轻量工具（Axplorer 模式）、prover-UX（基金明示优先级）、垂直领域验证库（密码协议/金融合约）。

## 8. 中文技术社区共识：Lean 应藏在后端做「AI 输出验证层」，autoformalization 是最大产品化瓶颈
- **type**: trend | **platform**: 知乎/CSDN 技术博客 | **secondhand**: true
- **source_url**: https://zhuanlan.zhihu.com/p/5074862277
- **source_date**: 2024-11（该文）；配套 https://blog.hotdry.top/posts/2026/02/21/lean-4-theorem-prover-architecture-ai-verification/（2026-02-21） | **fetched_at**: 2026-08-06
- **metrics**: Mathlib 2025 年突破 10 万定理；时间线：Lean 4 全重写（2021）→ Mathlib 迁移（2023）→ AlphaProof IMO 银牌（2024）
- **description**: 中文开发者社区对 Lean 产品化已有成熟框架：小内核可信架构意味着「AI 生成的内容无论多离谱，最终都能被一个极小的可信核检查」，天然适合做产品信任边界；卫生宏系统允许领域专家自定义证明记号（张量索引、密码协议），支撑垂直化。从业者的务实警告：Lean 语法对人类不友好，「只适合做特定工具」——应把 Lean 藏在后端做验证层，前端保持自然语言。自然语言→Lean 的自动形式化被点名为最大瓶颈。Astra 事件与此判断完全同构：OpenAI 也是拿 Lean 当信任层而非交互层。
- **user_quote**: 「Lean 4 更接近验证性语言——你先有数学证明过程，再来验证证明步骤是否正确……该语言语法对人类不友好，只适合做特定工具」（知乎从业者观点，经搜索摘要转述）
- **top_comments**:
  - [hotdry.top 博客] 小内核哲学：把「聪明」的自动化全部置于内核之外，让内核保持尽可能小且可信
- **ai_opportunity**: 五个方向被社区自发列出且与英文侧互证：证明助手 copilot（tactic 补全 + Mathlib 检索）、autoformalization 服务（论文→Lean）、实时反馈数学教育、AI 输出验证中间件、垂直验证库。中文市场额外机会：Lean 中文教程/课程供给稀缺（CSDN 教程流量佐证需求）。
