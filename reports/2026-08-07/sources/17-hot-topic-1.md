# 17 — 热点深挖: Google 大脑级出走：Jeff Dean 创立 Discovery Loop + Hassabis 卸任 DeepMind CEO 2026-08-07

> 组内信号：10 条 | 二手转述：6 条（60%）
> 最强证据线：discoveryloop.com 官网一手陈述（自动化完整实验闭环、三阶段路线、NAE Grand Challenges）+ HN 827 分/887 评论主线程的原声争论。渠道故障：x.com（402）、semafor.com 与 axios.com（连接被拒）、geekwire.com（403）、blog.google 原文 404（经 9to5Google 与搜索摘要转述核实）；WebSearch 渠道本身正常，各查询返回内容与查询强相关。

---

## 1. Discovery Loop 官网上线：四位 Google 传奇要「自动化完整实验闭环」
- **type**: trend | **platform**: 官方网站 | **secondhand**: false
- **source_url**: https://discoveryloop.com
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-07
- **metrics**: 4 位创始人（Jeff Dean、Sanjay Ghemawat、Quoc Le、Oriol Vinyals）；自称含 3 位 AI 领域被引最多研究者 + 2 位分布式系统被引最多研究者；协作史 14-30 年；招聘走 Ashby（jobs.ashbyhq.com/Discovery-Loop），起步「无雇员、无办公室」的 lean in-person 团队
- **description**: 官网核心表述：构建能「automatically solve important problems」的 AI，用前沿模型 + 大规模算力自动化完整实验闭环（提出实验→实现运行→评估→迭代），同时并行运行数千个实验。三阶段路线：①先自动化 ML 研究与工程；②「Act as Our Own First Customer」自我改进（递归自提升）；③泛化到任何可度量的学习闭环，对准美国工程院 Grand Challenges（更好的药物、健康信息学、平价太阳能、清洁水、网络安全）。官网未提 PBC 结构与融资额（PBC 由 Pichai 备忘录与媒体确认）。
- **user_quote**: "automatically solve important problems"（官网使命表述）
- **top_comments**:
  - [TechCrunch 转引创始人联合声明] AI's "next great frontier" is moving past answering questions "to begin making discoveries."
  - [NYT 转引 Jeff Dean] there's room for AI to "more fully automate what has traditionally been a very human-intensive experimental loop"
- **ai_opportunity**: 「实验闭环编排」被顶级人才确认为下一个平台层。独立开发者可做小一号的同构件：面向单个实验室/ML 团队的实验编排器（假设队列→自动跑实验→结果评估→下一轮提案），或垂直领域的「可度量学习闭环」封装（如 prompt/超参搜索即服务）。

## 2. TechCrunch 证实融资阵容：Radical + Khosla 领投，Alphabet 跟投
- **type**: trend | **platform**: 科技媒体 | **secondhand**: true
- **source_url**: https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-07
- **metrics**: 领投：Radical Ventures + Khosla Ventures；参投：Kleiner Perkins、Lightspeed、Doerr Capital、Alphabet；金额与估值未披露；Radical 的 Jordan Jacobs 入董事会（Unite.AI 补充）
- **description**: TechCrunch（Lucas Ropek，8/5 12:30 PM PDT）证实 Discovery Loop 为 PBC，融资由 Radical 与 Khosla 共同领投，Alphabet 是投资方之一。新闻稿称传统进步被「slow, sequential human iterations」瓶颈限制，公司将用「massive computational scale」自动化「complete experimental loops」。同时明确追求递归自我改进——用 AI 造更强的 AI、把人移出迭代闭环。
- **user_quote**: 传统科研进步受制于 "slow, sequential human iterations"（新闻稿）
- **top_comments**:
  - [Wired 转引 Vinod Khosla] rather than people using AI for research, here the AI itself is the researcher（Unite.AI 转述）
- **ai_opportunity**: 顶级 VC 集体押注「AI 即研究员」范式，说明该赛道资本窗口已开。独立开发者难拼算力，但可做该范式的「卖水人」：实验结果追踪/可复现性工具、多实验并发的成本监控、面向科研 agent 的评估基准。

## 3. Google 反常操作：员工出走却当创始投资人 + 云伙伴 + 首年供算力
- **type**: trend | **platform**: 科技媒体 | **secondhand**: true
- **source_url**: https://www.unite.ai/jeff-dean-leaves-google-to-automate-the-scientific-method-with-discovery-loop/
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-07
- **metrics**: Google 身份三重：founding investor + Cloud partner + 首年算力（Wired 报道）；将合作制定「a research framework for ML systems and related infrastructure advances」；Steven Levy 称创业概念数周前才成形
- **description**: 与常见的对抗式出走不同，Google 采取「分而不离」策略：投资、供云、共研框架。HN 用户 compiler-guy 概括为 "a split, but not exactly a divorce"。扩展领域点名：芯片设计、生物、药物发现、材料科学。注意：Unite.AI 署名作者为 AI 生成分析师（Jonas Reeve），关键事实经 TechCrunch/9to5Google 交叉验证一致；Wired 原文未直接抓取，此处为二手转述。
- **user_quote**: Quoc Le: "I'm very excited about automating machine learning."（并称可能发现取代 transformer 的新架构）
- **top_comments**:
  - [Unite.AI 转引 Oriol Vinyals，谈模型短板] idea generation is "not something that currently they're super strong at."
  - [HN compiler-guy] "a split, but not exactly a divorce."
- **ai_opportunity**: 大厂愿意为「外部化的科研自动化」出钱出算力，暗示云厂商未来会补贴 AI4S 工作负载——建在 GCP/TPU 上的科研工具可谈资源支持。Vinyals 承认「想法生成」是模型弱项 → 假设生成/实验提案工具是当前空位。

## 4. Hassabis 卸任 CEO 转董事长，Kavukcuoglu 接管 Gemini 全线
- **type**: trend | **platform**: 科技媒体（转述 Pichai 官方备忘录） | **secondhand**: true
- **source_url**: https://9to5google.com/2026/08/05/demis-hassabis-deepmind/
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-07
- **metrics**: Kavukcuoglu 在 DeepMind 13 年（WaveNet、DQN），升 SVP 直接向 Pichai 汇报，管 Gemini 模型开发 + 前沿研究 + Gemini 应用与开发者平台；Hassabis 兼任 Alphabet Chief Scientist、留任 Isomorphic Labs CEO；Pichai 同期披露 Gemini 应用 950M 月活、Gemma 下载 900M+（Unite.AI 转述）
- **description**: Hassabis 交出 GDM 日常运营，称新角色给他「time and space to focus on the big picture」，全力压注 AGI（他预测 2030 年前可能实现）。Semafor 独家（未能直接抓取，连接被拒）：过去一年他已逐步把 Gemini 与消费级 AI 战略移交 Kavukcuoglu，动因是难以从偏商业的角色获得满足感。产品化节奏将更紧绑 Google 主体业务。
- **user_quote**: Hassabis: "We have arrived at a pivotal moment in human history."（并称毕生追求 AGI，如今感到它 "close at hand"）
- **top_comments**:
  - [9to5Google 转引 Hassabis] Google is "the only company that has the full stack" ... "We have all the ingredients to lead from here."
  - [搜索摘要转引 Kavukcuoglu] 必须 "以绝对的意图和速度运作"（原文 operate with absolute intent and speed 的中文转述）
- **ai_opportunity**: DeepMind 从「科学家治理」转向「交付治理」，意味着 Gemini 生态将加速产品化、开发者平台迭代更快——押注 Gemini API 的独立开发者短期利好；而 Google 内部「基础研究愿景」让位，AI4S 原创工具的空间反而外溢给创业者。

## 5. HN 主线程 827 分 / 887 评论：社区拆解出走动因与 AI4S 真需求
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49184755
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-07
- **metrics**: 827 points、887 comments（Algolia API 核实，2026-08-05 16:05 UTC 提交）；讨论中提及 Alphabet 股价跌约 5%（实际收跌 4%+）
- **description**: 全事件最大的一手用户声量池。三条主线：①出走归因——Gemini 表现不及预期与薪酬结构（"Turns out you can't pay em as much as VC will"）；②AI4S 数据瓶颈——文本语料已尽，模型需要物理/化学/生物实验数据，「AI 需要自己的眼睛耳朵鼻子」；③对 Google 的信心动摇与对「换个牌子就能赢」的嘲讽。还有人指出 PB 级科学数据锁死在归档格式里——这本身就是产品机会。
- **user_quote**: [jcfrei] 模型需要实验数据，"it basically needs it's own eyes, ears, nose and so on."
- **top_comments**:
  - [HN tomnicholas1] "There are PetaBytes of important scientific data locked in archival file formats."
  - [HN stefan_] "Turns out you can't pay em as much as VC will, haha"
  - [HN Analemma_] 过去看多 Google 的理由是有 Dean 和 Hassabis——"And now they don't. What reason is there to be bullish about Google now?"
  - [HN tcp_handshaker] 讽刺：在 Google 坐拥资源都丢了领先，"but *now* will be different?"
- **ai_opportunity**: 两个可直接动手的缺口：①科学归档数据解锁工具（老格式→AI-ready 数据集的转换管线，PB 级存量）；②实验数据采集/结构化层（连接仪器与模型的「感官」）。均不需要前沿模型，适合独立开发者。

## 6. 市场定价此事件：Alphabet 单日跌 4%+，Axios 称 2023 年 Altman 罢免以来最大 AI 高管重组
- **type**: trend | **platform**: 财经/科技媒体 | **secondhand**: true
- **source_url**: https://www.axios.com/2026/08/05/google-deepmind-demis-hassabis-ai
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-07
- **metrics**: Alphabet 股价当日跌约 4%（此前从财报后低点反弹 13%）；Gemini 3.5 Pro 已延期数月；多位顶级研究员（含 Gemini 联合负责人）此前已流向对手实验室
- **description**: Axios 定性：Google 在追赶 OpenAI/Anthropic 的关口经历最深的组织重构，量级仅次于 2023 年 Altman 事件。前 Google 员工 Peter J. Liu 在（已删除的）X 帖中写道「这件事的量级很难被低估」，并预计更多人才流失。注意：axios.com 直接抓取失败（连接被拒），本条依据搜索结果摘要与 HN 线程交叉印证，故标 secondhand。
- **user_quote**: Peter J. Liu（已删 X 帖）：「这件事的量级很难被低估」（转述）
- **top_comments**:
  - [HN WarmWash] 指出高层出走成串，叠加 "the numerous 3.5 pro delays (and strongly suspected underperformance when released)."
  - [HN xnx 反方] Google 剩余护城河："Data centers, TPUs, customers, data streams, more money than god, most mature crawler system"
- **ai_opportunity**: 人才迁移方向 = 资本与需求迁移方向。AI4S 将复制 2023-24 agent 赛道的爆发曲线；早半年布局科研工作流工具（文献→假设→实验→写作）可吃到生态红利。

## 7. 隐藏剧情：Gemini 两位共同技术负责人同日离职
- **type**: trend | **platform**: 科技媒体 | **secondhand**: true
- **source_url**: https://thenextweb.com/news/google-deepmind-shakeup-hassabis-jeff-dean-vinyals-discovery-loop
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-07
- **metrics**: Pichai 备忘录只点名 Dean 与 Ghemawat 两人；Discovery Loop 官网列 4 人——被略去的 Vinyals（X 简介 "Gemini co-lead"）与 Dean（LinkedIn "Gemini overall co-technical lead"）恰是 Gemini 两位共同技术负责人
- **description**: TNW 抓到官方叙事与事实的落差：Google 宣布 Gemini 4 新掌门（Kavukcuoglu）的同一天，Gemini 的两位 co-technical lead 全部离开。这解释了为何官方口径极力淡化（备忘录不提 Le 与 Vinyals），也强化了「Gemini 交付压力 → 科学家外流」的因果链。
- **user_quote**: 无直接引语（结构性事实对比）
- **top_comments**:
  - [HN mosura] 提出政治解读：是否 Demis 一直在阻止 Dean 团队想做的事、最终把他们挤了出去？
  - [HN throwaw12] "I am sure VCs are fighting to invest and they will get 4B investment immediately with this team"
- **ai_opportunity**: 频发的「模型实验室人才裂变」本身催生需求：追踪 AI 人才流动/实验室组织变化的情报产品（面向 VC、猎头、竞对分析）已有付费场景。

## 8. 中国 AI4S 同步爆发：智能体成「调度中枢」，读-算-做闭环成型
- **type**: trend | **platform**: 行业媒体/官方报告 | **secondhand**: true
- **source_url**: https://m.instrument.com.cn/news/d-930787.html
- **source_date**: 2026（《AI for Science创新图谱2026》3 月 27 日中关村论坛发布） | **fetched_at**: 2026-08-07
- **metrics**: Hyper-FIB 智能双束电镜：样品制备成功率从新手不足 30% → 90%+，单样品制备 ≤60 分钟；中科曙光 OneScience（2026-04）集成数十个 AI4S 模型与数据集、经国家超算互联网「开箱即用」；Semantic Scholar 覆盖 2 亿+论文；Elicit 1.38 亿论文 + 54.5 万临床试验
- **description**: 中国科学技术信息研究所《AI for Science创新图谱2026》判断：AI4S 从「工具型赋能」转向「驱动范式转型」——智能体为调度中枢、领域多模态模型为知识内核、具身自动化设备为物理执行载体，覆盖文献阅读→实验设计→实验操作→科学发现全流程。仪器行业（色谱/质谱/电镜）研发逻辑被「读文献-仿真计算-自动化仪器实验-数据迭代」闭环重塑。与 Discovery Loop 的「实验闭环自动化」完全同构，证明这是全球同频的范式迁移而非单一公司叙事。
- **user_quote**: 报告核心判断：AI for Science 正从「工具型赋能」向「驱动范式转型」深化拓展（转述）
- **top_comments**:
  - [知乎工具评测生态] 2026 年学术 AI 工具的核心价值已从「提升效率」升级为「合规赋能+坚守原创」，「拒绝代写、纯辅助创作」成为衡量标准（知乎专栏综合表述）
- **ai_opportunity**: 中文市场明确缺口：①科研智能体调度/编排框架（报告点名「Skill 技能体系」加速推广）；②合规可追溯的文献→引文管线（对接知网/WoS/PubMed）；③不懂编程的生物/材料学家的低门槛实验计算界面。合规（非代写、引文可追溯）是中国市场的硬约束也是差异化卖点。

## 9. Google.org 开出 3000 万美元 AI for Science 资助：非营利/学术/社会企业均可申请
- **type**: product_market | **platform**: 官方基金/媒体 | **secondhand**: true
- **source_url**: https://www.edtechinnovationhub.com/news/googleorg-opens-30m-ai-for-science-funding-call-with-extended-deadline
- **source_date**: 2026（申请截止 2026-05-01；前一轮 $20M 于 2026-01 公布 12 家获奖者） | **fetched_at**: 2026-08-07
- **metrics**: $30M 全球资助（健康/气候/环境科学）；前轮 $20M 资助 12 家（学术/非营利/初创，见 https://blog.google/company-news/outreach-and-initiatives/google-org/announcing-ai-for-science-awardees/）；欧盟 AI 科学卓越网络（截止 2026-04-21）；Merck 创新研究资助最高 €50 万/年 × 3 年（截止 2026-08-31）
- **description**: 资助端与 VC 端同时供血：Google.org、欧盟、Merck 等为 AI4S 项目提供非稀释资金。对独立开发者意味着「先拿 grant 验证、再谈商业化」的路径在此赛道真实可行。
- **user_quote**: 无
- **ai_opportunity**: 独立开发者可组队申请 grant 做垂直科研工具（气候数据管线、健康信息学）；也可做「科研 AI grant 雷达」——聚合全球 AI4S 资助窗口 + 申请辅助，付费用户为高校课题组与初创。

## 10. AI4S 创业估值狂飙：Miles Wang $2B、Chai Discovery $3.8B、Isomorphic $2.1B Series B
- **type**: trend | **platform**: 科技媒体 | **secondhand**: true
- **source_url**: https://techcrunch.com/2026/07/14/openai-researcher-miles-wang-in-talks-to-launch-ai-drug-discovery-startup-valued-at-2b/
- **source_date**: 2026-07-14 | **fetched_at**: 2026-08-07
- **metrics**: Miles Wang（OpenAI 研究员，2024 年从 Harvard 辍学加入）：洽谈约 $200M @ $2B 估值，Lightspeed 拟领投，多位 OpenAI 同事将随行；同周 Chai Discovery 宣布 $400M @ $3.8B；Isomorphic Labs 5 月完成 $2.1B Series B；2026 年 AI 初创吃掉约 33% VC 总投资，美国占 AI 融资约 88%（约 $3190 亿，大头归 OpenAI/Anthropic，Crunchbase 数据）
- **description**: Discovery Loop 不是孤例而是浪潮尾部确认：OpenAI 也在流失研究员创办 AI4S 公司（方向：老药新用/失败药物再利用，更快到收入）。人才从两大实验室同时流向 AI for Science，估值零收入即达 $2-4B。Wang 对报道的融资数字与公司描述提出异议但未给更正。另有 OpenEvidence $250M @ $12B（医疗证据检索）显示「科研/医学信息层」同样天价。
- **user_quote**: Wang "disputed the story's funding figures and description of the company"（TechCrunch）
- **ai_opportunity**: 巨头做「AI 即科学家」的重资产闭环，独立开发者做轻资产互补层胜率更高：实验数据管理、文献-假设溯源、湿实验室与模型间的接口件（LIMS 集成）、以及被 OpenEvidence 验证的「垂直证据检索」在其他学科（材料、农业、化学）的复刻。

---

### 渠道故障记录
- x.com（Jeff Dean 原帖 status/2085034604172603724）：HTTP 402，未能抓取原文
- geekwire.com：HTTP 403
- semafor.com、axios.com、news.ycombinator.com 直连：连接被拒（HN 经 Algolia API 成功替代）
- blog.google 官方备忘录猜测 URL 404，内容经 9to5Google 全文转述 + 搜索摘要交叉核实
- WebSearch 渠道本身正常（各查询结果与查询词强相关，无污染迹象）
