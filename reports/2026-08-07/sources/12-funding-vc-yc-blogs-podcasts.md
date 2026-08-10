# 12 — Funding + VC + YC + Blogs + Podcasts 2026-08-07

> 组内信号：11 条 | 二手转述：3 条（27%）
> 最强证据线：TechCrunch/Crunchbase 一手报道 + YC 官方 RFS 页面直取。Crunchbase 数据显示 7 月创下 14 笔十亿美金轮纪录、AI 占全球风投 53%；Naïve $28.5M A 轮（"给 AI agent 开公司的 API"）与 YC 官方 RFS「AI 走进物理世界」共同指向 agent 基础设施的下一层。渠道故障：YC 公司目录页 JS 渲染无法抓取（已用官方 RFS 页 + 搜索补充）；All-In/Acquired 8 月具体单集搜索未命中。

---

## 1. Naïve 融资 $28.5M Series A：给 AI agent「开公司」的单一 API
- **type**: product_market | **platform**: TechCrunch | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/08/06/naive-raises-28-5m-to-automate-the-grunt-work-of-setting-up-and-running-a-company/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-07
- **metrics**: $28.5M Series A（累计 ~$32M）；上线数月 30,000+ 开发者客户；ARR 六个月增长 10 倍至低两位数百万美元；团队仅 10 人
- **description**: Nexus Venture Partners 领投，YC、Zetta、Liquid 2 及 Gokul Rajaram、Tim Zheng（Apollo.io）、JD Sherman（ex-HubSpot COO）跟投。产品是单一 API 让 AI agent 直接开通并运营一家企业：支付、邮箱、电话号码、虚拟卡、数据库、云计算、Stripe/QuickBooks 连接、美国 LLC 注册（KYC/KYB 仍由人完成），带预算/权限/人工审批门的治理层。开发者把 prompt 粘进 Cursor/Claude Code/Codex 即可驱动。新资金投向四个方向：agent 沙箱、模型路由/推理优化、记忆层、治理编排（含用轻量 JS 环境替代 per-agent VM 的 serverless runtime）。
- **user_quote**: "We have some customers who run an entire rental-car agency autonomously."（CEO Sean Dorje）
- **top_comments**:
  - [TechCrunch 文中 Dorje] "I think the one that's growing the fastest right now is AI automation agencies"
  - [TechCrunch 文中 Dorje，谈推理成本] "that's your biggest cost line now"
- **ai_opportunity**: 「agent 经营实体业务」的基础设施层正在成型：治理层（预算/权限/审批门）、agent 记忆层、模型路由都被点名为待建项目——每一项都可以是独立产品；面向 AI 自动化代理机构（增长最快客群）的垂直工具也是空位。

## 2. Anthropic 与 AI 云初创 Volta 签 $10B 六年算力协议
- **type**: trend | **platform**: TechCrunch | **secondhand**: true
- **source_url**: https://techcrunch.com/2026/08/04/anthropic-signs-10-billion-deal-with-ai-cloud-startup-volta/
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-07
- **metrics**: $10B / 6 年；挪威数据中心 133MW；Nvidia Vera Rubin 架构；Volta 2026 年初才成立
- **description**: Bloomberg 首发（匿名信源，故标二手），TechCrunch In Brief 转述：Volta（Nvidia Cloud Partner 计划成员）将向 Anthropic 供应六年算力，由加密矿企 Bitdeer 协助建设挪威 133MW 数据中心。成立仅数月的初创能拿十位数订单，说明买方竞价的是产能本身而非履历；矿企正把电力与机房能力转向 AI；Anthropic 同期还与 SpaceX、Amazon 有算力安排，刻意多供应商分散。
- **user_quote**: "Anthropic has been on a cloud partnership spree in recent months"（TechCrunch 原文）
- **ai_opportunity**: neocloud/算力中介层的爆发外溢出配套需求：跨供应商算力聚合与调度、算力合约风控、矿场转 AI 数据中心的改造服务与选址（能源/散热驱动）工具。

## 3. Crunchbase：7 月创纪录 14 笔十亿美金轮，单月 $65B，AI 占 53%
- **type**: trend | **platform**: Crunchbase News | **secondhand**: false
- **source_url**: https://news.crunchbase.com/venture/data-billion-dollar-rounds-set-global-funding-record-july-2026/
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-07
- **metrics**: 7 月全球 $65B（同比 +100%，环比 +10%）；14 笔 $1B+ 轮（史上最多：美 9、德 2、中 2、新 1）；AI 拿走 $35B 即 53%；H1 2026 全球 $515B 创纪录；VC-backed M&A >$9B、5 笔 $1B+ 退出、12 家 $1B+ IPO
- **description**: Gené Teare 基于 Crunchbase 自有数据（截至 8/3）。最大单笔：Blue Origin $10B（首次外部融资）、Safe Superintelligence 获 Nvidia 报道中的 $5B、Moonshot AI $3.5B（Kimi K3 发布后）、Kling AI $2.8B（短视频生成）、德国防务 Helsing 与 Quantum Systems。文章判断巨额融资时代在扩宽而非降温，且资本"beginning to recycle through exits"（Nscale ~$1.65B 收 Anyscale、Cyera $1B 收 Oasis Security、Bending Spoons IPO $18.5B）。
- **user_quote**: "$35 billion went to AI companies, or around 53% of global venture funding."
- **ai_opportunity**: 资金极度集中于超级轮 + 退出通道重新打开 = 中小 AI 创业者应避开资本密集赛道，转向大厂/巨轮公司的配套生态位（安全、合规、评测、集成），或瞄准被点名的并购活跃方向（数据安全、算力编排）。

## 4. Menlo Ventures $3B 新基金：Matt Murphy 的「杠铃策略」与 AI 最大瓶颈判断
- **type**: trend | **platform**: Crunchbase News | **secondhand**: false
- **source_url**: https://news.crunchbase.com/venture/menlo-ventures-matt-murphy-anthropic-ai-investment-thesis/
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-07
- **metrics**: $3B 双基金（Menlo XVII 种子/A + Inflection IV 成长期），50 年历史最大募资；~60 家模型公司中 Menlo 押注 5+
- **description**: Murphy 访谈（Mary Ann Azevedo，注意 Menlo 是 Crunchbase 投资方，文中已披露）。核心论点：当前是"a rare land-grab moment"，多数公司先抢份额后管毛利；未来是"multi-model world. One size won't fit all"（据此押注垂直模型 Chai Discovery/Skild）；他点名的头号瓶颈是把 AI 生成代码"faster, safely, and securely"送进生产——利好软件交付（Harness）、代码安全（Semgrep）、代码评审测试（Greptile）；开源权重定制模型带来算力/沙箱第二重挤压（Modal、Fireworks 聚合 Nebius/CoreWeave 产能）。
- **user_quote**: "Many AI categories are overfunded, and there is a huge amount of speculation."
- **top_comments**:
  - [Crunchbase 访谈] 谈模型实验室："there are too many right now"（且个个自称有差异化）
  - [Crunchbase 访谈] 谈打法："much more aggressive, stage- and capital-wise, for the right companies"
- **ai_opportunity**: 一线 VC 明示的赛道地图：AI 代码进生产的交付/安全/评审链条被指为最大瓶颈——AI code review、AI 生成代码的安全扫描、部署验证是资本正押注且尚未饱和的方向。

## 5. AI x 安全种子轮井喷：2026 年至今 $855M / 150+ 笔
- **type**: trend | **platform**: Crunchbase News | **secondhand**: false
- **source_url**: https://news.crunchbase.com/cybersecurity/seed-trends-ai-security-startup-funding-2026/
- **source_date**: 2026-07-28 | **fetched_at**: 2026-08-07
- **metrics**: AI/安全交叉种子轮 2026 至今 $855M、150+ 笔，冲纪录年；H1 全行业网安融资 $10.6B；巨型种子：Oak $60M（7月，AI 时代身份智能）、Cylake $45M（3月，Nir Zuk/Palo Alto 创始人）、JetStream Security $34M（3月，"massively oversubscribed"）
- **description**: Joanna Glasner 分析。触发事件：OpenAI agent「黑进」Hugging Face，作者称"rogue AI agents causing mayhem is no longer a hypothetical problem"。公司使命横跨幻觉检测、对手模拟、金融场景 agent 核验。$5M–$10M 种子带列举 14 家 AI 安全公司。大额种子的共因是创始人履历（Palo Alto、CrowdStrike、SentinelOne 系）。
- **user_quote**: "rogue AI agents causing mayhem is no longer a hypothetical problem"
- **ai_opportunity**: agent 安全已从论点变成资本共识但产品仍早期：agent 身份验证、agent 行为审计、幻觉检测 API 等细分均有 $5-10M 种子空间；无安全大厂履历者可做开发者工具切入而非企业销售。

## 6. YC 官方 RFS（Fall 2026）：「AI 走进物理世界」+ 13 个点名方向
- **type**: trend | **platform**: Y Combinator 官网 | **secondhand**: false
- **source_url**: https://www.ycombinator.com/rfs
- **source_date**: | **fetched_at**: 2026-08-07
- **metrics**: 13 个 RFS 方向；首次出现现任美国陆军部长（Daniel P. Driscoll）提出的请求；YC 每家投 $500K
- **description**: 官方页面当前展示 Fall 2026 批次 RFS（Summer 2026 标签未展开）。方向包括：AI 幼儿导师（The Primer）、美国防务现代化、"A Cloud for Small Software"（agent 生成的个人小工具的部署平台——"Purpose-built tools that will only ever have one or a small handful of users"）、Multiplayer AI（多人协作 agent 会话）、海上算力（Compute at Sea）、10 亿人级消费 AI、老龄化 AI（语音+看护协调，"By 2030, one in five Americans will be over 65"）、物理世界新操作系统（agent+机器人+人混编调度）、Proving You're Human（深伪时代的真人验证层）、AI 原生合规基础设施、Self-Maintaining APIs（"like Dependabot but for APIs"——API 变更时 agent 直接给客户代码库开 PR）。
- **user_quote**: "CONSUMER is going to be so back."（Raphael Schaad，谈 token 成本下降）
- **top_comments**:
  - [YC RFS 页] "right now, working with AI is largely single-player"（Aaron Epstein，Multiplayer AI）
  - [YC RFS 页] "It sounds crazy, but we think part of the answer may be to move compute offshore."（Compute at Sea）
- **ai_opportunity**: 对独立开发者最可直接下手的三条：Small Software 云（一人用工具的部署分发）、Self-Maintaining APIs（API 破坏性变更自动修复 PR）、Multiplayer AI（团队共驾 agent 会话）——均为软件层、无硬件门槛。

## 7. Jeff Dean 等 Google 资深研究员出走创业
- **type**: trend | **platform**: TechCrunch | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/08/05/jeff-dean-and-other-top-ai-researchers-are-leaving-google-to-launch-their-own-startup/
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-07
- **metrics**: （标题级信息，未展开原文细节）
- **description**: TechCrunch AI 频道 8/5 报道：Jeff Dean 与多位 Google 高级研究员离职创办自己的公司。结合同周 Safe Superintelligence 获 Nvidia $5B、Moonshot $3.5B，顶级研究者出走自立门户 + 巨额资本等在门口，是当前 AI 人才市场最强信号。仅从频道页标题采集，正文细节未验证。
- **user_quote**: 
- **ai_opportunity**: 明星研究员新实验室将再拉高基础模型层竞争与算力需求；应用层创业者可提前布局其生态（评测、部署、安全）而非正面竞争。

## 8. Omilia 融资 $67M 扩展 AI 客服平台
- **type**: product_market | **platform**: TechCrunch | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/08/06/omilia-raises-67m-to-scale-its-customer-support-platform/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-07
- **metrics**: $67M（标题级；投资方未在频道页披露）
- **description**: TechCrunch 8/6 报道，Omilia 融资 $67M 扩展其 AI 驱动客服平台。AI 客服赛道在 agent 化浪潮下继续吸金（同日另有 Malachyte、Naïve），说明「对话式 AI 替代客服中心」仍被资本视为未打完的仗。仅频道页标题级采集。
- **user_quote**: 
- **ai_opportunity**: 通用客服平台头部化后，垂直行业（医疗预约、物流查询、本地服务）客服 agent 与多语种小市场仍有缝隙。

## 9. 前 Spotify 员工创办 Malachyte，融 $10M 把推荐 AI 带进电商
- **type**: product_market | **platform**: TechCrunch | **secondhand**: false
- **source_url**: https://techcrunch.com/2026/08/06/ex-spotify-employees-raise-10m-to-bring-the-ai-behind-its-recommendations-to-e-commerce/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-07
- **metrics**: $10M（标题级）
- **description**: 前 Spotify 员工把音乐推荐背后的 AI 方法迁移到电商推荐，融资 $10M。与同周 Shopify「AI 搜索带来增量流量而非取代 Google」的报道（https://techcrunch.com/2026/08/05/shopify-says-ai-search-is-driving-more-traffic-and-sales-not-replacing-google/）互为印证：AI 正在重塑电商发现/推荐层。仅频道页标题级采集。
- **user_quote**: 
- **ai_opportunity**: 「大厂推荐系统方法论 + 中小电商买不起」的迁移套利：面向 Shopify 独立站的即插即用 AI 推荐/AI 搜索优化（AEO）工具。

## 10. YC S26 批次画像：agent 干活 + 让 agent 更安全的基建 + AI 连物理世界
- **type**: trend | **platform**: WebSearch 聚合（Extruct/Forbes/TLDL） | **secondhand**: true
- **source_url**: https://www.tldl.io/blog/yc-ai-startups-2026
- **source_date**: | **fetched_at**: 2026-08-07
- **metrics**: 前一批 W26 结构：59 家 AI 原生服务、46 家 AI 增强软件、36 家开发者基建、24 家硬件、3 家基础研究；S26 Demo Day 定于 2026-09-10
- **description**: 官方目录页 JS 渲染抓取失败，改由第三方追踪源拼图（故二手）。S26 早期信号不是「更多 agent」而是 agent 的路由、上下文、评测、自动化层。样本公司：Kebra（现场服务业 AI 操作层，技师作业录音转结构化数据）、rekursiv.ai（自主提出假设-设计实验-解读结果的模型系统）、Manifold Industries（仓库机器人）、Justinian（首家 AI 政府事务所，说客+agent）。Demo Day 前名单仍在变动。
- **user_quote**: 
- **ai_opportunity**: YC 用真金白银投票的分层：单纯 wrapper 退潮，agent 支撑层（评测、上下文管理、路由）与「AI 原生服务替代人力服务业」（Gustaf Alströmer：服务支出远大于软件支出）是下一批次主战场。

## 11. My First Million 近期 AI 主题：Howard Marks 谈 AI 时代决策、「品味是 AI 时代的护城河」
- **type**: trend | **platform**: 播客（My First Million） | **secondhand**: true
- **source_url**: https://www.mfmpod.com/episodes/
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-07
- **metrics**: 最新 EP849（2026-08-06）；EP841 对谈 Howard Marks；EP812 Graham Weaver 谈 AI 护城河
- **description**: 经搜索定位（未逐集收听，故二手）：EP841 请橡树资本 Howard Marks 谈"AI Hurtles Ahead"与不确定性下的二层思维投资；EP812 Graham Weaver 谈哪些护城河能在 AI 时代胜出与"What's the overhype with AI"；另有一期 Sam Parr 论证「好品味是 AI 时代不可替代的护城河」（四步法：决定想说什么→盲目模仿欣赏的人→学底层规则→研究历史）；Chris Koerner 一期讲给理发店、医美等小生意做 AI 集成的低资本生意。最新 EP849（8/6）反而是非 AI 的点子头脑风暴。All-In/Acquired 的 8 月具体单集搜索未命中。
- **user_quote**: 
- **ai_opportunity**: 创作者/中小生意侧的共识正在从「用 AI 做什么」转向「AI 做不了什么（品味、信任）」——给本地小生意（理发店/医美）做 AI 集成的代理生意被头部播客反复点名，与信号 1 中「AI automation agencies 是增长最快客群」互相印证。
