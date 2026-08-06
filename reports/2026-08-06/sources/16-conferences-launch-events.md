# 16 — 行业大会 + 重大发布会 (WAIC/IO/WWDC/云栖/智源) 2026-08-06

> 组内信号：9 条 | 二手转述：4 条（44%）
> 最强证据线：AMD Advancing AI 2026（7/23，ServeTheHome 现场直播实录，Helios 机架级系统 + Anthropic 采购 2GW）与 WAIC 2026（7/17-20，钛媒体一手长文）构成"AI 基础设施从堆卡转向造系统"的双城印证；本周进行中的 Ai4 2026（拉斯维加斯 8/4-6）官网 ai4.io 返回 403 无法直取，相关数据仅经搜索摘要获得（标 secondhand）。搜索渠道本次运行正常，无污染迹象。

---

## 1. WAIC 2026 上海（7/17-20）：10万㎡、1100家企业、超300款全球首发，产业主线从模型竞赛转向算力系统与智能体落地
- **type**: trend | **platform**: 钛媒体（TMTPost，一手行业报道） | **secondhand**: false
- **source_url**: https://www.tmtpost.com/8067765.html
- **source_date**: 2026-07-17 | **fetched_at**: 2026-08-06
- **metrics**: 展览总面积首破10万平方米；1100余家企业参展；3000余项展品；超300款全球首发；机器人展厅超200家企业、300余台动态演示；WAIC Academic 征集10余国 284 篇论文；9位图灵奖/诺贝尔奖得主参会
- **description**: 第九届世界人工智能大会以"智能伙伴，共创未来"为主题，上海世博/张江/西岸"三地四馆"联动。重磅首发：华为 Atlas 950 SuperPoD 超节点真机（单柜64卡，最大支持8192张NPU互联，面向万亿参数训练）；MiniMax M3 多模态大模型；阶跃 Agent 操作系统；东方算芯 DF1000 近存计算3D芯片；全球首款 AI 智能体手机；中兴 OEX 超节点（互联成本降80%）；中科曙光"曙光8000（登峰）"十万卡全国产超集群；智元"远征A3 Ultra"（镇馆之宝，174cm、700TOPS）；宇树 GD01 载人变形机甲。国产 GPU/超节点厂商几乎全数到场（摩尔线程、昆仑芯、沐曦、天数智芯、清微智能等）。理查德·萨顿（强化学习之父）作主旨演讲，姚期智任 WAIC Academic 大会主席。
- **user_quote**: "AI基础设施正在从'堆卡'转向'造系统'"
- **top_comments**:
  - [钛媒体原文] "2026年的WAIC更可能展示AI的生产力"
  - [钛媒体原文] "2026年是具身智能量产的元年"
  - [钛媒体原文，谈 Token 经济] "它正在变成衡量AI生产力的单位"
- **ai_opportunity**: 国产算力超节点 + Agent OS + AI 智能体手机同台首发，意味着"系统级 AI 终端"生态位正在打开：面向国产芯片栈的推理优化工具、超节点利用率监控、Agent 手机上的第三方技能商店，均是 WAIC 展示但尚无成熟独立产品的空档。

## 2. AMD Advancing AI 2026（7/23 旧金山）：首个机架级系统 Helios 全面投产，Anthropic 宣布采购 2GW
- **type**: trend | **platform**: ServeTheHome（现场 keynote 直播实录） | **secondhand**: false
- **source_url**: https://www.servethehome.com/amd-advancing-ai-2026-keynote-live-coverage/
- **source_date**: 2026-07-23 | **fetched_at**: 2026-08-06
- **metrics**: Helios：内存容量+50%、FP4 性能+15%、每美元 token 数约+30%（对比竞品）；MI455X（2nm 计算芯粒、432GB HBM4）对比 MI355X token 吞吐最高34x；EPYC Venice（Zen 6, 2nm）单插槽最高256核；新 ROCm 对比 ROCm 7 推理+3.3x、训练+2.4x；AMD 预测2030年 AI 加速器 TAM 达 $1.4T；自称服务器 CPU 收入份额46%
- **description**: AMD 史上最大规模发布会。核心：首个 AI 计算机架 Helios（MI455X GPU + EPYC Venice CPU + Pensando Vulcano NIC）全面投产，Q3 开始出货。软件侧发布 ROCm.AI——构建在 Codex 与 Claude 等编码智能体之上的新软件层，附 AMD 自研 ROCm skills 与优化工具 Hyperloom（演示中 token 速率+38%），ROCm 转为六周发版节奏。客户站台：Anthropic（Tom Brown）宣布采购 2GW Helios 硬件；OpenAI 正部署去年宣布的 6GW AMD 硬件、已有预生产 Helios 机架；Meta 深度共建 OCP 机架标准；Cerebras 推出 Helios+晶圆级引擎的分解式超低延迟推理方案（声称5x）；AT&T 每月消耗约1万亿 token。路线图：Instinct 转年度节奏，MI500（2027）、MI600（2028）。
- **user_quote**: "This is our biggest show ever because we have so much to tell you." — Lisa Su
- **top_comments**:
  - [keynote，Lisa Su 对 OpenAI] "I don't think I've ever spoken to you where you haven't asked for more compute."
  - [keynote，AMD Jack Huynh] "Personal AI is not a concept. It is a category."
  - [keynote，Meta Santosh Janardhan] "The earlier we co-design, the better we are."
- **ai_opportunity**: ROCm.AI 把"编码智能体 + 厂商官方 skills"确立为芯片软件栈的分发方式——这验证了"为特定硬件/框架打包 agent skills"的产品形态。独立开发者可类推：为小众框架/硬件生态做 Claude/Codex skill 包、ROCm 与 CUDA 双栈迁移助手、多云 GPU 每 token 成本对比工具。

## 3. Ai4 2026 拉斯维加斯（8/4-6，本周进行中）：12,000 人、1,000+ 讲者的北美最大应用 AI 工业大会
- **type**: trend | **platform**: 官网 ai4.io（403 拒收，数据经搜索摘要转述） | **secondhand**: true
- **source_url**: https://ai4.io/
- **source_date**: | **fetched_at**: 2026-08-06
- **metrics**: 12,000 名参会者、1,000+ 讲者、90+ 国家；8/4-6 于威尼斯人酒店；票价 $1,395–$3,195；8/3 举办 Applied AI Research Conference（AAIRC）
- **description**: 本周（8/4-6）正在拉斯维加斯举行的 Ai4 2026 是当前 14 天窗口内最大的旗舰 AI 工业大会，讲者来自 Anthropic、Microsoft、IBM 等。设 AI Policy Summit（监管/伦理/国家战略）、KPMG 冠名的 AI House 高管闭门场、AAIRC 研究转化专场（聚焦"有明确商业含义的突破性论文"）。注意：官网 ai4.io 直接抓取返回 HTTP 403，以上数字来自搜索结果摘要与 Splunk/DataCamp 等大会日历页转述，未经官网一手核验；截至抓取时未见大会现场发布的重磅新品报道。
- **user_quote**: ""
- **top_comments**: 无（官网 403，未获取评论区）
- **ai_opportunity**: Ai4 的 AAIRC 专场（研究论文→商业化桥接）本身就是信号：论文-到-产品的转化扫描服务（自动追踪有商业含义的新论文并生成可行性简报）是独立开发者可做的常青产品。

## 4. 2026 世界机器人大会定档 8/19-23 北京亦庄：150余件首发新品、中央企业机器人创新联合体将成立（未来30天最大旗舰）
- **type**: trend | **platform**: 北京经济技术开发区管委会官网（政府一手发布） | **secondhand**: false
- **source_url**: https://kfqgw.beijing.gov.cn/ywdt/gzdt/202607/t20260708_4752119.html
- **source_date**: 2026-07-08 | **fetched_at**: 2026-08-06
- **metrics**: 8/19-23 北京亦庄；博览会参展企业300余家（同比+36%）；展品超2000件；首发新品150余件；同期活动60余场（同比翻倍）；机器人大赛超20国、6000余支队伍、1万余名赛手；主论坛国际嘉宾占比30%；亦庄机器人产业链规模超200亿元
- **description**: 主题"人机共生，产需共融"，中国电子学会与世界机器人合作组织主办。看点：首次设四大主题日、首次打造"机器人消费街"（机器人厨师/服务员零距离互动）；大会将集中发布技术图谱、产业链图谱、零部件图谱、企业图谱、标准图谱、应用图谱六大图谱；中央企业机器人创新联合体即将成立。与 WAIC "具身智能量产元年"判断形成接力——8 月下旬这场大会是检验人形机器人从展品到商品的下一个节点。
- **user_quote**: "（大会将）集中发布机器人领域新技术、新产品、新应用，并发布技术图谱、产业及产业链图谱、零部件图谱、企业图谱、标准图谱、应用图谱" — 中国电子学会理事长徐晓兰（据官网新闻稿转述）
- **top_comments**: 无（政府新闻稿无评论区）
- **ai_opportunity**: "机器人消费街"标志 To C 机器人体验经济开闸；六大图谱是官方免费数据资产——爬取结构化后做机器人供应链选型/对标工具，或面向出海买家的中国机器人产品数据库，8 月下旬是冷启动窗口。

## 5. IJCAI-ECAI 2026 定档 8/15-21 德国不来梅：五大特设专题，学术旗舰进入应用导向周期
- **type**: trend | **platform**: 大会官网（一手） | **secondhand**: false
- **source_url**: https://2026.ijcai.org/
- **source_date**: | **fetched_at**: 2026-08-06
- **metrics**: 8/15-21 不来梅；第35届；5个特设专题；周边共址活动7+场（KI2026、ICCBR-26、Robot Expo 等）
- **description**: 官网自述"the premier international gathering of researchers in AI"。五大特设专题全部应用导向：Human-Centered AI、AI for Social Good、AI4Tech（AI 赋能关键技术）、AI and Health、AI and Robotics——顶级学术会议的议程设置本身是研究资金与人才流向的先行指标。另设 Primary Paper Initiative 与同行评审激励计划（PPI Reviewer Benefits），回应 AI 顶会评审危机。
- **user_quote**: "the 35th International Joint Conference on Artificial Intelligence, the premier international gathering of researchers in AI!"
- **top_comments**: 无（官网无评论区）
- **ai_opportunity**: 顶会评审激励机制（PPI）被正式制度化，说明"评审负载"是学界确认痛点——面向会议组织方的评审匹配/激励管理 SaaS、或面向作者的 AI 预审工具有明确买单方。

## 6. AWS Summit NY 2026（6/17）：Bedrock AgentCore 全家桶 + WAF"AI 爬虫收费"——云厂商把 Agent 基建与内容付费同时平台化
- **type**: trend | **platform**: AWS 官方博客（一手） | **secondhand**: false
- **source_url**: https://aws.amazon.com/blogs/aws/top-announcements-of-the-aws-summit-in-new-york-2026/
- **source_date**: 2026-06-17 | **fetched_at**: 2026-08-06
- **metrics**: 一场 Summit 集中发布 15+ 项：AgentCore harness GA、Managed Knowledge Base、Web Search 工具、AWS Context、Security Agent、DevOps Agent、Kiro for iOS、EC2 G7（AI 推理最高4.6x vs G6）、ECS 扩容提速76%（363s→86s）
- **description**: Swami Sivasubramanian 以"AWS VP of Agentic AI"头衔（组织架构信号）发表主题演讲。两条主线值得独立开发者细读：(1) Agent 基建全面托管化——AgentCore harness GA 号称"配置即上线生产级 agent、无需编排循环代码"，Managed Knowledge Base 托管企业 RAG（含 Agentic Retriever 多步检索），Web Search 工具"零数据出境、带引用的实时联网"；(2) AWS WAF Bot Control 新增 AI 流量货币化——出版商可对访问其内容/API 的 AI bot 和 agent"定价、计量、收款"，把"内容方向 AI 收费"从 Cloudflare 的单点尝试升级为两大云共识。
- **user_quote**: "price, meter, and collect payment from AI bots and agents accessing their content and APIs"（AWS WAF AI traffic monetization 官方描述）
- **top_comments**:
  - [AWS 官方博客] AgentCore harness: ship production agents "in minutes, without coding orchestration loops"
  - [AWS 官方博客] Web Search on AgentCore: "ground responses in current, cited web knowledge with zero data egress"
  - [AWS 官方博客] AWS Continuum: "prioritizes by business impact, proves which are exploitable, and drives a fix through your own process"
- **ai_opportunity**: 云厂商吞掉 agent 编排层后，独立开发者的空间上移到垂直领域：行业专属 agent 模板/评测集、跨云 agent 成本与质量对比、以及帮中小出版商接入"AI 爬虫收费"的一键配置服务（WAF 规则太复杂，存在代配置生意）。

## 7. WAIC 2026 治理线：发布《AI 合作与发展行动计划》等三份全球文件，WAICO 拟永久落户上海
- **type**: trend | **platform**: 人民网英文版/新华 + GlobeNewswire 通稿（经搜索摘要，未逐一直取） | **secondhand**: true
- **source_url**: https://en.people.cn/n3/2026/0708/c90000-20475542.html
- **source_date**: 2026-07-08 | **fetched_at**: 2026-08-06
- **metrics**: 三份全球治理文件 + 1 部案例集；五大生态矩阵（WAIC Future Tech/CONNECT/UP!/YOUNG/AI GRAVITY）；首个生态开放平台"Hi WAIC" App；80余家投资机构入驻创投矩阵；西岸展区 57 项中国首发、64 款可上手体验的消费级 AI 产品；NDRC 官员：2026 年 AI 手机/PC 销量预计首次超过非 AI 设备
- **description**: WAIC 2026 的治理与生态侧产出：发布"AI 合作与发展行动计划"、《中国智·惠世界（2026）》案例集（10 个中国 AI 出海案例）；去年宣布的世界人工智能合作组织（WAICO）确认拟永久总部设于上海。配套数据：中国 AI 智能终端年出货量去年已破1亿台；国家数据局口径日均 token 调用量从 2024 年初 1000 亿升至 2026 年 3 月突破 140 万亿（1400x）。注意：本条数字来自人民网/新华及 GlobeNewswire 通稿的搜索摘要，未逐页直取核验，官方通稿存在宣传口径偏好。
- **user_quote**: ""
- **top_comments**: 无
- **ai_opportunity**: "AI GRAVITY 出海矩阵" + 案例集连续三年发布，说明中国 AI 产品出海进入官方助推期——面向出海团队的多语言合规审查（对照 EU AI Act 8 月全面执法）与本地化落地工具是政策顺风位。

## 8. 8月发布节奏盘点（聚合源）：GPT-5.6 Luna 降价80%、ChatGPT 约10亿 WAU、美商务部对前沿模型设国家安全审查门槛
- **type**: trend | **platform**: AIapps 博客（聚合盘点，二手） | **secondhand**: true
- **source_url**: https://www.aiapps.com/blog/ai-news-august-breakthroughs-launches-trends-cant-miss/
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-06
- **metrics**: GPT-5.6 Luna 降价80%至 $0.20/1M 输入 token（7/30 宣布）；ChatGPT 约10亿 WAU；Gemini 3.6 Flash 输出成本-17%、长程 agent 任务最高省65%；Claude Fable 5 SWE-Bench Pro 80.3%；AMD 向 Anthropic 承诺最高 $50 亿股权投资；FCC 将外国产人形/四足机器人列入国家安全"covered list"
- **description**: 8 月开局的发布密度由价格战与监管双主线定义：OpenAI 三档命名（Luna/Terra/Sol）中入门档大降价；美商务部对超过能力阈值的前沿模型设国家安全审查门槛，"GPT-5.6 与 Claude Fable 5 等发布现在需要政府审查后才能上线"；FCC 限制中国机器人进口——与国内世界机器人大会的扩张形成监管对冲。本条为聚合博客转述，各数字未经一手核验（GPT-5.6 定价可与 OpenAI 官网 pricing 页交叉验证），仅作月度节奏参考。
- **user_quote**: "AI releases are no longer just product calls made inside private companies."
- **top_comments**:
  - [AIapps 原文] OpenAI "cut GPT-5.6 Luna pricing by 80% to $0.20 per 1 million input tokens"
  - [AIapps 原文] The U.S. Commerce Department "set national security review gates for frontier models that pass certain capability thresholds"
- **ai_opportunity**: 入门档 token 价格降到 $0.20/1M 后，此前不经济的高频低价值场景（全量日志语义化、长尾内容翻译、批量测试生成）重新可行——"降价套利"型产品窗口再次打开；同时"前沿模型监管审查追踪器"对合规团队有真实需求。

## 9. AWS re:Invent 2026 定档 11/30-12/4，早鸟票 8/25 截止（本月行动项）
- **type**: trend | **platform**: zPlatform.ai 大会日历（二手转述） | **secondhand**: true
- **source_url**: https://zplatform.ai/ai-event/aws-reinvent-ai-track-2026/
- **source_date**: | **fetched_at**: 2026-08-06
- **metrics**: 11/30-12/4 拉斯维加斯六大场馆；2,200+ 场次；早鸟 $1,299（8/25 截止）→ 全价 $2,499
- **description**: 年末最大云 + AI 发布场定档。无独立"AI Track"，Bedrock/SageMaker/Amazon Q/Nova 发布贯穿全周。上届发布 Nova 2 Sonic（语音到语音）、Nova 2 Lite（百万 token 上下文快速推理）、Nova 2 Omni（多模态预览）。早鸟截止日在本月（8/25），是唯一有时效动作点的未来大事件。二手日历页信息，票价应以 AWS 官网注册页为准。
- **user_quote**: ""
- **top_comments**: 无
- **ai_opportunity**: re:Invent 前 3 个月是 AWS 生态位卡位期：围绕 AgentCore/Nova 生态做的工具若能赶在大会前上线并申请合作伙伴展示，可借大会流量冷启动。

---

## 渠道状态备注
- 搜索渠道本次运行正常（6 组查询均返回高相关结果，无污染迹象）。
- ai4.io 直接 WebFetch 返回 HTTP 403（信号 3 因此标 secondhand）。
- sohu.com 的 WAIC "9关键词"文章为空壳预告页（正文未含关键词列表），已弃用，改用钛媒体一手长文。
- Google I/O / WWDC / Build / 云栖大会在 8 月窗口内无新事件（均为 5-6 月已办或 9 月后待办）；智源大会为 6/12-13 已办，未单列信号。
