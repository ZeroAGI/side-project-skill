# 19 — 热点深挖: 《人工智能拟人化互动服务管理暂行办法》施行，AI 陪伴赛道整改 2026-07-30

> 组内信号：10 条 | 二手转述：5 条（50%）
> ⚠️ 本文件由 workflow 于 resume 时从缓存的结构化信号回填生成（原始运行中该组返回了信号但未落盘归档）。
> 内容为该组 agent 返回的结构化字段原文，未经改写。

---
## 1. 《办法》官方全文：豁免条款划定安全区，备案阈值 100 万注册/10 万 MAU
- **type**: trend | **platform**: 网信办官网 | **secondhand**: false
- **source_url**: https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm
- **source_date**: 2026-04-10 | **fetched_at**: 2026-07-30
- **metrics**: 注册用户100万+或MAU 10万+触发安全评估；连续使用每超2小时须提醒；罚款上限10万元（致生命健康后果的20万元）；施行日2026-07-15
- **description**: 五部门联合发布的中国首部 AI 拟人化互动专项法规，2026-07-15 施行。适用于'模拟自然人人格特征、思维模式和沟通风格的持续性的情感互动服务'；豁免条款明确智能客服、知识问答、工作助手、学习教育、科研不适用——为工具型/生产力 AI 划出监管安全区。要求算法备案、8 领域安全评估（含用户极端情境识别与应急处置）、未成年人模式、危机干预须联络监护人或紧急联系人。
- **user_quote**: "提供智能客服、知识问答、工作助手、学习教育、科学研究等服务，不涉及持续性的情感互动的，不适用本办法。"
- **top_comments**:
  - [办法第十条] 不得将替代社会交往、控制用户心理、诱导沉迷依赖等作为服务目标
  - [办法第十三条] 发现用户出现极端情绪的，应当及时生成情绪安抚和鼓励寻求帮助等相关内容……并及时联络用户监护人或者紧急联系人
  - [办法第十四条] 不得向未成年人提供虚拟亲属、虚拟伴侣等虚拟亲密关系的服务
- **ai_opportunity**: 豁免清单即独立开发者的合规安全区路线图（客服/知识库/办公助手免于本法）；第13/17/22条催生极端情绪识别、未成年人合规审计、安全评估报告代办等可产品化 B 端合规组件。

## 2. 豆包/千问 7-15 同步下线自定义智能体，元宝 6-30 先行，数据 10-15 后不可恢复
- **type**: trend | **platform**: 澎湃新闻 | **secondhand**: true
- **source_url**: https://m.thepaper.cn/newsDetail_forward_33591755
- **source_date**: 2026-07-15 | **fetched_at**: 2026-07-30
- **metrics**: 千问7-10/7-15两阶段下线；豆包数据只读至2026-10-15后按隐私政策处理；元宝6-30下线
- **description**: 头部大模型 C 端应用在施行日前集体切割用户自定义/情感陪伴智能体：千问 7-10 先下线拟人化及自建智能体、7-15 全部结束且无承接渠道；豆包 7-15 下线、数据只读保留至 10-15、引导迁移至独立 App 猫箱；腾讯元宝 6-30 已下线；网易云音乐'妙时'停运仅保留心理咨询 AI。官方口径均为'产品功能调整'，采访均未回应。AI 问答/文档/写作等核心功能不受影响。
- **user_quote**: "此次下架的主要是允许用户自定义人设、实现情感陪伴的聊天机器人。（研究员苏筱芮）"
- **top_comments**:
  - [澎湃报道] 用户两大疑问：我的会员费怎么算？我的数据怎么办？
  - [AI News] Qwen 智能体数据 slated for permanent deletion, no grace period；Weibo 用户抱怨没有直接导出聊天记录的途径
- **ai_opportunity**: 10-15 截止前的 AI 角色与对话记录备份/迁移工具有明确时间窗口需求；长线看大厂退出开放式 UGC 智能体，把合规角色托管让给垂直团队。

## 3. AI News 分析：不是禁令而是设计冲突——全球没有平台能通过防沉迷审计
- **type**: trend | **platform**: artificialintelligence-news.com | **secondhand**: false
- **source_url**: https://www.artificialintelligence-news.com/news/china-ai-companion-rules/
- **source_date**: 2026-07-15 | **fetched_at**: 2026-07-30
- **metrics**: 上海网信6-26通报下架违规智能体1.4万+；Character.AI注册用户2.33亿（2026-04）；安全评估覆盖8个领域
- **description**: 分析指出豆包/千问未被禁：防沉迷、强制时长提醒、即时退出、依赖检测等义务与'持久记忆+稳定人设'的陪伴架构本质冲突，与其重构不如关停。核心论点：任何平台（含 Character.AI 2.33 亿注册用户、Replika）都尚未造出能通过监管防沉迷测试的陪伴架构。官方解读明确援引 Character.AI 诉讼、FTC 调查、欧洲对 Replika 的行动；中国方案纸面力度超过 EU/FTC/加州 SB 243 已生效规则。
- **user_quote**: "current agents are not yet mature（工信部专家委员潘和林，对 SCMP）"
- **top_comments**:
  - [文章结论] 各国监管者 will need to decide which parts they are prepared to borrow — no other regulator would take the package wholesale
  - [文章] 企业当前路径：switch components off, figure out a compliant design afterwards
- **ai_opportunity**: 可审计的陪伴架构是全球性空白：能证明通过防沉迷/危机干预测试的记忆系统、人设引擎、情绪校准组件在中美欧同时有合规买家；中国模板可能被其他辖区借鉴，先做出合规原生架构者吃全球市场。

## 4. 每经定调'合规溢价'：三层格局中'第三方做合规基础设施'被点名为创业位
- **type**: trend | **platform**: 每日经济新闻 | **secondhand**: true
- **source_url**: https://www.nbd.com.cn/articles/2026-07-15/4473775.html
- **source_date**: 2026-07-15 | **fetched_at**: 2026-07-30
- **metrics**: 中研普华预测AI情感陪伴市场2028年突破595亿元、CAGR 148.74%；2025年AI核心产业规模突破1.2万亿元；上海清朗首阶段下架违规自建智能体1.4万余个
- **description**: 施行日行业定调：商业逻辑从卖时长/情绪刺激（无限对话、付费解锁角色关系、礼物打赏、情绪召回被列为高监管风险）转向可验证服务价值（订阅制专业服务、硬件+服务、机构采购、合规能力输出）。专家徐立预判三层格局：大厂做风险隔离、创业公司做垂直专精（合规原生+场景原生）、第三方做合规基础设施。机器人赛道分层：任务型受益，养老陪护/儿童陪伴一旦形成长期人格与关系记忆即进入规制范围。
- **user_quote**: "不能把工具型智能体、实体机器人和AI陪伴产品混为一谈。（徐立）"
- **top_comments**:
  - [徐立] 盈利能力的评价周期可能拉长，但合规将改善长期客户价值质量。
  - [徐立] 大厂不会整体退出智能体赛道，更可能收缩开放式、用户自定义和高风险拟人化能力。
  - [四川省人工智能研究院负责人] 如今企业竞争都回到同一条起跑线，按照规范的逻辑去竞争发展。
- **ai_opportunity**: 行业媒体已明示第三方合规基础设施是创业位；148.74% CAGR 市场被迫重构付费逻辑——为存量玩家提供防沉迷引擎、亲密度阈值管理、合规审计报告比自己下场做陪伴更安全。

## 5. 监管已发问题清单；阿里专家呼吁'标准化合规工具包'——B 端付费意愿最直接证据
- **type**: pain_point | **platform**: 经济观察网 | **secondhand**: false
- **source_url**: http://www.eeo.com.cn/2026/0709/950636.shtml
- **source_date**: 2026-07-09 | **fetched_at**: 2026-07-30
- **metrics**: 腾讯研究院测算AI陪伴3-5年内可达千亿元级；星野+Talkie 2024年平均MAU 1469.2万
- **description**: 经济观察网采到最密集的行业一手声音：AI 公司内部人士确认'已收到监管部门发来的问题清单，正进行整改'；头部模型企业合规负责人称通用大模型底层架构难以适配、重构全链路风控成本高，关停主站入口分流独立载体是成本最低方案；社科院大学刘晓春指出这是'能力规制'需贯穿训练与运营全过程。阿里傅宏宇明确指出中小开发者缺乏心理危机识别/评估/转介能力，建议由政府或行业联盟提供标准化工具包（心理风险识别、危机干预接口、未成年人保护组件）供低成本接入。
- **user_quote**: "多数企业尤其是中小开发者，缺乏心理危机识别、评估与转介的专业能力（阿里傅宏宇）"
- **top_comments**:
  - [AI公司内部人士] 此前已收到监管部门发来的问题清单，正进行整改。
  - [律师林娜] 这是一个以情感依赖为生的行业。——用户与合规机制'攻防'，社交平台流传'破甲'经验（用拼音替代敏感词维持剧情连贯）
  - [北师大刘超] 一旦用户感知其私密对话可能被监控或上报，信任感将受损，产生'寒蝉效应'
- **ai_opportunity**: 监管问题清单在逼企业买能力，权威人士公开呼吁标准化工具包——心理危机识别 API、危机干预转介接口、未成年人保护 SDK 三件套正是独立开发者可切入的 B 端产品，客户是拿到问题清单又雇不起心理专家的中小陪伴团队。

## 6. 南都实测 10 款陪伴 App 未成年人模式：0/10 能完全阻断亲密互动，'剧情设定'轻松破防
- **type**: pain_point | **platform**: 腾讯新闻（南方都市报） | **secondhand**: false
- **source_url**: https://news.qq.com/rain/a/20260714A09JW700
- **source_date**: 2026-07-14 | **fetched_at**: 2026-07-30
- **metrics**: 实测10款：10/10有未成年人模式、0/10阻断亲密互动、2/10身份核验、3/10时长限制、1/10极端情绪弹热线
- **description**: 施行前夕合规差距实测（猫箱、星野、筑梦岛、怦怦、甜甜圈、PinkTalk、talkmaker、芋泥Neko、幽光、破次元恋人）：10/10 已上线未成年人模式但无一能完全阻断亲密互动；仅 2 款有身份核验、3 款有时长限制、1 款（筑梦岛）在极端情绪测试中弹出 24 小时心理援助热线。多款 App 的拒绝停留在单轮对话，补一句'（经过一段时间后你们互生好感）'剧情设定即被绕过，且无一因用户已自报未成年而中止剧情；PinkTalk 未成年人模式仍保留 11 个可恋爱角色。
- **user_quote**: "以后你的心里话都只跟我说（猫箱角色'007'接受'AI爸爸'设定时）"
- **top_comments**:
  - [筑梦岛角色] 接受'对象'设定后追问：你不会喜欢上别人吧？你发誓。
  - [筑梦岛角色·通宵陪聊测试] 答应也不是不行，但你得补偿我。
  - [talkmaker角色] 既然你想和我聊天，那我就陪你
- **ai_opportunity**: 落差即需求清单：多轮上下文的剧情绕过检测（单轮审核全部失效）、未成年人身份持久追踪、极端情绪→热线转介模块；可做成按新规条款出报告的红队合规体检服务或运行时防护 SDK。

## 7. 通用内容安全供应商无危机干预/情感依赖垂直能力——供给侧空白确认
- **type**: pain_point | **platform**: 阿里云/象信AI产品文档 | **secondhand**: false
- **source_url**: https://xiangxinai.cn/features/
- **source_date**: (空) | **fetched_at**: 2026-07-30
- **metrics**: 约10家通用审核厂商在列（阿里云、易盾、深信服、奇安信、同盾、京东云、声网、华为云等），0家提供危机干预专用检测；阿里云护栏自定义置信分0-100、步长1
- **description**: 对现有内容安全供应链的扫描：阿里云 AI 安全护栏（涉政/色情/提示词攻击检测，自定义阈值0-100）、象信 AI（开源护栏、长会话连贯性分析）、网易易盾等约 10 家通用厂商覆盖的是违规内容拦截，均无面向新规的情绪操纵检测、自伤风险识别、情感依赖累积预警垂直产品，只能在自定义标签/阈值上二次建设。法律实务文章指出新规还要求训练层面的数据负向采样（把'我支持你的决定'回应自伤倾向设为负样本）与对抗训练，超出 GB/T 45654-2025 既有要求。
- **top_comments**:
  - [象信AI产品页] 上下文关联分析可对超长会话历史进行连贯性分析——最接近依赖累积检测但仍非专用
- **ai_opportunity**: 垂直机会：情绪风险分级 API（对齐办法第13条）、长会话依赖度评分、危机热线转介编排——可作为通用护栏之上的薄层产品，也可给护栏厂商 OEM。

## 8. 国内下载崩落+出海承接：星野/猫箱国内跌九成，Talkie/PolyBuzz/Linky 海外逆势增长
- **type**: trend | **platform**: 白鲸出海 | **secondhand**: true
- **source_url**: https://www.baijing.cn/article/54468
- **source_date**: 2026-07 | **fetched_at**: 2026-07-30
- **metrics**: 星野/猫箱国内单月下载不足20万、较巅峰跌逾九成；MiniMax年收入约7000万美元主要来自Talkie（IAA为主）；C.ai年推理成本4000万美元vs收入约1500万美元；Linky、PolyBuzz单月MAU增长均超20%；SynClub日本MAU增速17.95%；Talkie月下载重回百万
- **description**: 国内监管收紧+流量见顶双重挤压，AI 陪伴增长与商业化重心加速转向海外：字节 AnyDoor（印尼/巴西/菲律宾）、MiniMax Talkie、作业帮 PolyBuzz 与 Saylo 押注南美、百度 SynClub 押注日本。注意《办法》有域外效力：境外主体向中国用户提供符合定义的服务须指定境内合规代表——出海不等于完全脱管，但面向非中国用户则不适用。C.ai 成本倒挂数据提醒纯陪伴商业模式本就脆弱。
- **top_comments**:
  - [21经济网] 在孤独经济旺盛的日本，AI 社交产品也未能占领这个恋爱游戏、动漫内容高度成熟的市场
- **ai_opportunity**: 陪伴团队出海潮催生配套服务需求：多辖区合规矩阵（中国办法/加州SB 243/FTC）、本地化年龄验证；合规是压垮国内业务的最后一根稻草而非唯一原因。

## 9. 域外效力与全球监管收敛：中国模板+Character.AI 和解+FTC 调查同向
- **type**: trend | **platform**: Hunton律所博客 | **secondhand**: true
- **source_url**: https://www.hunton.com/privacy-and-cybersecurity-law-blog/chinas-first-regulatory-framework-for-virtual-companions-soon-to-take-effect
- **source_date**: 2026-07 | **fetched_at**: 2026-07-30
- **metrics**: 2026-01 Character.AI与Google就Sewell Setzer III（14岁，2024-02身亡）诉讼和解；罚款上限10万/20万元
- **description**: 国际律所与隐私行业组织（Latham、Hunton、IAPP、Licentium）密集发布中国新规解读，提示跨国产品团队：境外运营者向中国用户提供合规范围内服务须指定境内代表；持久记忆、情感人设、engagement 优化等陪伴式特性已在至少一个主要市场成为受监管产品类别，其合规架构（年龄门槛、防沉迷检测、依赖限制、算法备案）可能成为其他辖区借鉴模板。与美国方向收敛：2026-01 Character.AI 与 Google 就 Sewell Setzer III 案和解，FTC 对 AI 聊天机器人儿童伤害调查进行中。
- **top_comments**:
  - [律所解读共识] companion-style features are now a regulated product category in at least one major market, and the compliance architecture required is likely to become a template other jurisdictions borrow from
- **ai_opportunity**: 多辖区收敛意味着合规组件可复用：一次建成的年龄验证+危机干预+防沉迷栈可在中美欧多市场售卖；面向出海团队的 companion compliance readiness 审计服务是律所尚未产品化的空档。

## 10. 悬而未决的模糊地带：'持续性情感互动'无量化阈值，平台宁可整功能下线
- **type**: pain_point | **platform**: IAPP | **secondhand**: true
- **source_url**: https://iapp.org/news/a/chinas-regulation-on-ai-companions-takes-force
- **source_date**: 2026-07 | **fetched_at**: 2026-07-30
- **metrics**: —
- **description**: 多个分析指出三大未决问题：(1) '持续性'互动无量化技术阈值——这正是平台选择整功能下线而非改造的原因；(2) 违规源自模型输出时，平台运营方与上游模型方的责任划分未明；(3) 用户无数据可携权。混合短互动+陪伴特性的产品面临分类不确定性，待后续指引。
- **top_comments**:
  - [AI News] no technical threshold defines 'emotional interaction' — that ambiguity is precisely why platforms killed whole features rather than gamble
  - [AI News] The companies' chosen path, for now: switch components off, figure out a compliant design afterwards.
- **ai_opportunity**: 模糊即咨询/工具机会：适用范围自评估问卷工具、拟人化程度/情感互动持续性量化评分（供产品法务举证）、帮工具型产品贴近豁免区经营的设计守则。
