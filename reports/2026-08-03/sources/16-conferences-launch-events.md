# 16 — 行业大会 + 重大发布会 (WAIC/IO/WWDC/云栖/智源) 2026-08-03

> 组内信号：8 条 | 二手转述：3 条（38%）
> 最强证据线：AMD Advancing AI（7/23）一手直播实录 + AWS 官方博客 + WAIC 界面新闻/新浪一手报道；本周正在进行的 Ai4 2026（8/3-6 拉斯维加斯）官网 ai4.io 返回 403，只能以搜索摘要转述。georgechen.substack.com 抓取遇证书错误（返回 Facebook 证书），疑似网络层劫持而非站点问题。搜索渠道本次未见污染（各查询返回内容与查询词相关）。

---

## 1. AMD Advancing AI 2026：Helios 机架 + ROCm.AI「agent 写 kernel」——AMD 把开发者生态押注在 coding agent 上
- **type**: trend | **platform**: ServeTheHome (会议直播实录) | **secondhand**: false
- **source_url**: https://www.servethehome.com/amd-advancing-ai-2026-keynote-live-coverage/
- **source_date**: 2026-07-23 | **fetched_at**: 2026-08-03
- **metrics**: AI 加速器 TAM 预测 2030 达 $1.4T；Helios 机架 = MI455X GPU（432GB HBM4, 2nm）+ Zen 6 Venice CPU（最高 256 核）+ Pensando Vulcano NIC，Q3 开始出货；Anthropic 承诺 2GW Helios 硬件，OpenAI 6GW 部署中；最新 ROCm 相比 ROCm 7 推理提升 3.3x、训练 2.4x；ROCm 发布节奏改为每 6 周一版；Hyperloom 优化演示 token 速率 +38%
- **description**: 7 月 23 日 Moscone West 举行，AMD 首次把 Advancing AI 从发布会办成对标 GTC 的完整 trade show。对独立开发者最重要的不是机架而是软件层：AMD 宣布 ROCm.AI——「基于 Codex、Claude 等 coding agent 的 agent 驱动 kernel 开发」，并官方编写 ROCm skills 喂给这些 agent；同时 Gorgon Halo 个人 AI 工作站（192GB LPDDR5X）随附一年 Hugging Face Pro。这标志着芯片大厂开始把「让 LLM agent 替人写底层代码」作为正式生态战略，而非社区 hack。
- **user_quote**: "Helios is simply the best AI rack in the world." — Lisa Su
- **top_comments**:
  - [keynote, Lisa Su 开场] "This is our biggest show ever because we have so much to tell you."
  - [keynote, AMD 消费端 SVP Jack Huynh 谈 Gorgon Halo] "Personal AI is not a concept. It is a category."
  - [keynote, Meta 基建负责人 Santosh Janardhan] "The earlier we co-design, the better we are."
- **ai_opportunity**: ROCm.AI 官方认可「skills + coding agent 写 kernel」路线 → 面向 CUDA→ROCm 迁移的 agent 工具链、ROCm kernel 性能回归测试服务、针对 MI455X/Halo 本地工作站的模型量化与部署脚手架，都有窗口期；AMD 自己只做到框架层，长尾适配是空白。

## 2. AWS「What's Next 2026」：GPT-5.5/Codex 进 Bedrock + Amazon Quick——云厂商把「AI 工作助手」平台化，挤压独立 wrapper
- **type**: trend | **platform**: AWS 官方博客 | **secondhand**: false
- **source_url**: https://aws.amazon.com/blogs/aws/top-announcements-of-the-whats-next-with-aws-2026/
- **source_date**: 2026-04-28（4/29 更新） | **fetched_at**: 2026-08-03
- **metrics**: Amazon Quick 提供 Free/Plus 双档、无需 AWS 账号即可注册；Amazon Connect 拆分为 4 个 agentic 方案（Decisions/Talent/Customer/Health），Decisions 背靠 Amazon 25+ 供应链工具；OpenAI 三项（GPT-5.5/5.4 on Bedrock、Codex on Bedrock、Bedrock Managed Agents powered by OpenAI）均 limited preview
- **description**: AWS 年中活动的官方公告汇总（re:Invent 2026 要到 11/30-12/4）。三条主线：① Amazon Quick——连接本地文件/日历/消息、能「代你行动」并用自然语言生成应用和仪表盘的桌面 AI 助手，直接对标独立开发者最爱做的「个人 AI 工作台」品类；② Connect 按行业拆成四个 agentic 垂直方案（供应链、招聘、客服、医疗）；③ OpenAI 模型与 Codex 全面入驻 Bedrock，「usage applies toward AWS commitments」——企业客户用 Codex 也算 AWS 消费额。
- **user_quote**: "the frontier intelligence they want on the infrastructure they trust" — AWS 对 OpenAI 合作的官方表述
- **top_comments**:
  - [AWS 博客, Quick 桌面应用] keeps you linked to local files, calendar, and messages "without opening a browser"
  - [AWS 博客, Connect Talent] "AI-led interviews, science-backed assessments, and consistent evaluation"
  - [AWS 博客, Connect Customer] 新部署工具让团队上线对话式 AI "in weeks, not months"
- **ai_opportunity**: 关门信号：通用「AI 个人助手/连接你所有应用」的 wrapper 被 Quick 正面碾压。开门信号：Connect 四个垂直只覆盖大企业流程，SMB 版的 agentic 招聘/供应链/患者预约仍空白；Codex-on-Bedrock 落地伴随企业合规审计、成本归因需求（Bedrock 账单里区分 agent 消费）尚无好工具。

## 3. WAIC 2026（7/17-20 上海）：10万㎡、1100 家企业、300+ 全球首发——「智能体」压倒大模型成为唯一主词
- **type**: trend | **platform**: 界面新闻（一手预览+现场报道） | **secondhand**: false
- **source_url**: https://www.jiemian.com/article/14750594.html
- **source_date**: 2026-07-13 | **fetched_at**: 2026-08-03
- **metrics**: 展览面积首破 10 万㎡；1100+ 企业、3000+ 展品、300+ 产品全球首发；9 位图灵/诺奖得主（萨顿主旨演讲、本吉奥推介联合国 AI 治理框架）；1400+ 嘉宾、140-158 场论坛；300+ 台机器人真机同场；创投侧从 1200+ 项目选出近 180 个初创项目（超七成成立不足三年、90 后创始人过半）；已促成 57 个场景落地、162 亿元意向合作；上海 AI 产业 2025 规模 6370 亿元（+39.5%）
- **description**: 中国最大 AI 会展、习近平出席开幕。硬件首发密集：华为 Atlas 950 超节点真机（灵衢 2.0 全光互联、最大 8192 张昇腾 950DT 直连）、东方算芯 DF1000（称全球首颗软件定义近存计算 3D 芯片）、荣耀 Robot Phone、「全球首款 AI 智能体手机」、MiniMax M3 多模态大模型、阶跃 Agent 操作系统、宇树 GD01 载人变形机甲。论坛议题集中在世界模型、开源智能体、AI Coding、Token 经济、OPC（原创/开源/个体）。国产 GPU 厂商在张江几乎全员到场、四种新兴架构同台竞争。
- **user_quote**: "我们把AI搬进了展馆、街道和夜场，让每个人都能亲手试、亲眼看、亲身玩。" — 东浩兰生集团副总裁周瑾
- **top_comments**:
  - [界面新闻, 大会主题] "智能伙伴，共创未来"
  - [界面新闻, OPC 挑战赛核心词] "原创、开源、个体"（Original, Open, One）——8 大赛区 600+ 项目选出 8 支决赛队
  - [新华网/央视口径] 超 300 款 AI 新品将在 2026 世界人工智能大会首发
- **ai_opportunity**: OPC 赛道（个体开发者）首次被官方顶格背书 + 近 180 个初创项目七成不到三年，说明中国「一人公司/超小团队 AI 产品」正获得会展级流量入口；Agent 手机、Agent OS 首发意味着「跨应用指令执行」将产生新的第三方 skill/插件分发生态，早期卡位窗口在未来 6-12 个月。

## 4. WAIC「AI 未来发展论坛」五大成果：垂直智能体（罕见病诊断/病理/材料/教育/端侧）批量落地，全部产学研共建
- **type**: trend | **platform**: 新浪财经（转载看看新闻现场报道） | **secondhand**: false
- **source_url**: https://finance.sina.com.cn/jjxw/2026-07-18/doc-iniifxru1513062.shtml
- **source_date**: 2026-07-18 | **fetched_at**: 2026-08-03
- **metrics**: RuiPath 瑞智病理大模型：训练数据百万张数字病理切片，"在12个公开数据集的14项任务中，7项达到业界领先水平"，已开源核心视觉模型 + 7 个病种测试数据集、下载量超 1.6 万次
- **description**: 上海交大 × 徐汇区主办论坛集中发布五项成果：DeepRare 2.0（基因-表型双链罕见病循证推理智能体，推理"可溯源至具体文献、段落和图表"）、深量智研轻合金多智能体研发平台、图灵学社智能教育引擎（"让每个人都拥有自己的大学"）、RuiPath（瑞金医院 × 华为昇腾）、ClawMate 智伴（称"首个主动式端侧智能体系统"，从被动应答转向主动感知）。共性：全部是「大模型 → 领域智能体」的垂直化，且强调可溯源/循证——与海外 agent 产品「可审计」痛点同构。
- **user_quote**: "让每个人都拥有自己的大学" — 图灵学社发布人、上海交大副教授钱忱
- **top_comments**:
  - [现场, DeepRare 2.0] 推理结果"可溯源至具体文献、段落和图表"
  - [现场, 深量智研] 推动研发"从经验驱动迈向物理知识与数据双轮驱动"
  - [现场, ClawMate] "首个主动式端侧智能体系统"
- **ai_opportunity**: 「循证可溯源」成为中国医疗/科研智能体的标配卖点 → 通用的 agent 引用溯源/证据链组件（citation graph、per-claim provenance）可作为中间件卖给垂直团队；端侧主动式 agent（ClawMate 模式）在海外消费端还没有对标产品。

## 5. Ai4 2026（8/3-6 拉斯维加斯）本周开幕：北美最大 AI 产业会，12000 人规模、AI agent 是核心 track
- **type**: trend | **platform**: WebSearch 摘要（官网 ai4.io 返回 403） | **secondhand**: true
- **source_url**: https://ai4.io/
- **source_date**: | **fetched_at**: 2026-08-03
- **metrics**: 12,000+ 参会者、1,000+ 讲者、400+ 参展商，The Venetian 近 100 万平方英尺展场，规模较往年近乎翻倍；早鸟票 $1,395 起
- **description**: 本周（今天 8/3 开幕）进行中的北美最大 AI 产业会议。8/3 为 Applied AI Research Conference（研究落地衔接）+ 培训日，8/4-6 主会。设 AI Policy Summit（治理/监管/国家战略）与 KPMG 邀请制 AI House。讲者含 Anthropic、Microsoft、IBM。多个专门 track 聚焦 AI agents——「autonomous systems capable of completing complex tasks and reasoning independently」。注意：官网直接抓取被 403 拒绝，以上数据来自搜索结果转述，具体公告需本周后续跟踪。
- **user_quote**: ""
- **top_comments**:
  - [搜索摘要] Ai4 自称 "America's Largest AI Conference"
- **ai_opportunity**: 观察窗口而非直接机会：Ai4 是企业买方浓度最高的会，本周流出的企业侧 agent 采购/合规议题（Policy Summit）值得 8/4-8/6 逐日跟踪，其中暴露的企业落地摩擦点（评估、审计、集成）是 indie 工具最好的需求清单。

## 6. EU AI Act 2026 年 8 月全面可执行：「高风险」AI 需认证评估——本月所有发布话术的合规底色
- **type**: trend | **platform**: WebSearch 摘要（多来源综述） | **secondhand**: true
- **source_url**: https://www.aicritique.org/us/2026/07/02/ai-developments-in-june-2026-major-releases-products-research-and-policy/
- **source_date**: 2026-07-02 | **fetched_at**: 2026-08-03
- **metrics**: 2026-08 起 EU AI Act 对高风险系统（生物识别、医疗等）全面可执行，需认证评估
- **description**: 搜索结果多处提到 EU AI Act 于 2026 年 8 月进入全面可执行阶段，企业需要为「高风险」AI（biometric ID、医疗系统等）取得认证评估。这解释了为何本月大会（Ai4 Policy Summit、WAIC 治理高级别会议）都把治理/合规放到主舞台。属于时间戳型机会：合规截止日制造刚性需求。
- **user_quote**: "companies need certified evaluations for 'high-risk' AI such as biometric ID and medical systems"
- **top_comments**: 
- **ai_opportunity**: 面向欧盟市场的 AI Act 合规自查工具、高风险分类判定器、模型卡/技术文档自动生成器——8 月起从 nice-to-have 变成 must-have，且大厂方案偏企业级，SMB/indie 开发者自己也是买家。

## 7. 智源大会 2026（6/12-13 北京）：FlagOS 2.1 跨 18 厂商 32 款芯片——国产算力碎片化催生「芯片抽象层」
- **type**: trend | **platform**: 量子位/腾讯新闻（会议报道） | **secondhand**: true
- **source_url**: https://www.qbitai.com/2026/06/435394.html
- **source_date**: 2026-06-12 | **fetched_at**: 2026-08-03
- **metrics**: 200+ 研究者、40+ AI 公司 CEO/联创；FlagOS 2.1 支持 18 家厂商 32 款芯片（NVIDIA/NPU/GPGPU/DSA/RISC-V AI/ARM），覆盖 90%+ 主流开源大模型（DeepSeek、Qwen、MiniCPM、GLM、MiniMax、混元）部署
- **description**: 第八届智源大会主线是 AI × 物理世界 × 生命科学「三体互动」：悟界·Brainμ 1.0（多模态神经科学基座模型，相关工作发 Science）、BrainToken 数据平台、OpenComplex 2.5（AI 制药）、Physis-v0.1（通用世界基座模型）。基础设施层 FlagOS 2.1 的跨芯片覆盖是最硬信号——国产芯片架构四分五裂（与 WAIC 张江「四种新兴架构同台」互证），系统软件抽象层成为必争之地。
- **user_quote**: ""
- **top_comments**:
  - [腾讯新闻标题] "一场技术硬核的AI年度盛会"
- **ai_opportunity**: 国产多芯片碎片化 → 模型-芯片兼容性矩阵/基准测试服务、FlagOS 生态上的部署脚手架；科学基座模型（脑科学/制药/世界模型）开放后，垂直科研 agent 的应用层几乎无人做。

## 8. 8 月发布节奏综述：Google Gemini 3.5 深入 coding/搜索、Meta 腕带 sEMG 输入——「thin wrapper 被平台吸收」警告再现
- **type**: trend | **platform**: 独立博客月度综述 | **secondhand**: true
- **source_url**: https://blog.mean.ceo/ai-product-launches-news-august-2026/
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-03
- **metrics**: 无一手量化数据（综述性质）
- **description**: 8/1 发布的月度综述：年内最强发布集中在 agentic coding（Google Gemini 3.5 深入 Search/coding/agent 工作流）、免手穿戴工作流（Meta Neural Band 腕部 sEMG 手写输入、眼镜端提词器/导航）、工业人形机器人（Gemini Robotics + Boston Dynamics Atlas）。OpenAI 侧提及 Health in ChatGPT 与 GPT-5.6 持续推出。作者对 indie builder 的核心告诫是平台吸收风险。二手综述，具体产品数据未经一手核实。
- **user_quote**: "If a platform can ship your feature in six months, that feature is not your business."
- **top_comments**:
  - [博客, agentic coding 局限] 现有 coding agent 仍不覆盖 "security, architecture, or scale"
  - [博客, 空白品类] 语音/提词赛道价值在 live performance assistance（面向 "creators, executives, educators, and multilingual teams"）而非转录
  - [博客, agent-ready 建议] 让你的信息 "structured, current, and machine-readable" 以便 search agent 解析
- **ai_opportunity**: 三个反平台吸收的缝隙被点名：coding agent 的安全/架构/规模审查层、实时表演辅助型语音（非转录）、面向 agent 检索的内容结构化服务（agent SEO）。

---

## 渠道故障备注
- ai4.io 官网 WebFetch 返回 403（反爬），信号 5 只能以搜索摘要转述，标记 secondhand。
- georgechen.substack.com 抓取报 TLS 证书错误（返回 *.facebook.com 证书），疑似本地网络层 DNS/SNI 劫持，非站点故障；未使用该来源。
- sohu.com 页面正文为视频预告，无实质数据，弃用，改用界面新闻一手报道。
- 本次 WebSearch 渠道工作正常，各查询返回内容与查询词相关，未见 2026-07-28 式查询污染。
- 未来 30 天旗舰会程：Ai4 8/3-6（进行中）、IJCAI-ECAI 8/15-21 布莱梅、Black Hat USA AI Summit 8 月拉斯维加斯；云栖大会通常 9 月、AWS re:Invent 11/30-12/4。
