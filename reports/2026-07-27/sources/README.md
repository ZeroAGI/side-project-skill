# 原始信号归档索引 — 2026-07-27

> 本目录归档当日各信号采集 Agent 的原始输出，按 Agent 顺序编号（01 = 热点雷达，02+ = 信号组）。

## 文件列表

| 文件 | 信号组 | 信号数 | 二手转述 | 二手占比 |
|------|--------|--------|---------|---------|
| [01-hot-topic-radar.md](01-hot-topic-radar.md) | 热点雷达（本期无独立落盘输出，要点自交叉分析整理） | 4 要点 | — | — |
| [02-appsumo-clawhub-product-market.md](02-appsumo-clawhub-product-market.md) | AppSumo + ClawHub Product Market Signals | 12 | 0 | 0% |
| [03-crowdfunding-ecommerce-extensions-learning.md](03-crowdfunding-ecommerce-extensions-learning.md) | Crowdfunding / Ecommerce / Extensions / Learning | 10 | 4 | 40% |
| [04-pain-points.md](04-pain-points.md) | Pain Points（痛点专线） | 11 | 1 | 9% |
| [05-funding-investor-thought-leader.md](05-funding-investor-thought-leader.md) | Funding / Investor / Thought Leader | 10 | 1 | 10% |

**合计：43 条信号，6 条二手转述（约 14%）**

> 注：本期采集组数少于常规（4 组 vs 常规 13-15 组），系当日执行的采集范围所致；热点雷达无独立落盘输出，01 号文件为交叉分析中引用的突发热点整理（MCP 协议重大更新 / Kimi K3 权重开放 / Opus 5 发布与 Anthropic 收购 PI 传言 / Sonnet 5 合规性回归）。

## 域名频次表（去重复核）

跨组出现的域名需注意信号是否为同源重复引用：

| 域名 | 出现组 | 次数 | 备注 |
|------|--------|------|------|
| **producthunt.com** | 03, 04 | 3 | ⚠️ 跨组：03 组 tl;dv（扩展品类页）与 04 组 Perplexity/OpenAI（评论页）为**不同页面不同信号**，非重复 |
| clawhub.ai | 02 | 6 | 组内多信号共用同一 API endpoint（/api/v1/skills），为同一次抓取的不同技能条目 |
| appsumo.com | 02 | 6 | 各为不同产品评论页 |
| apps.shopify.com | 03 | 3 | IndexGPT / Tidio / Flow 三个不同 App 页 |
| a16z.com | 05 | 4 | Atoms / Applied Intuition / Neo / inference 论文四篇不同文章；其中 inference 论文同时被 05 组 Etched 信号作为 top_comments 引用来源——**引用时按一个源计** |
| techcrunch.com | 05 | 3 | Prentis / Etched / Nous 三篇不同报道 |
| news.crunchbase.com | 05 | 2 | Meshy / EdVisorly 两篇不同报道 |
| backerrock.com | 03 | 2 | ⚠️ INMO 与 AEKE 两条信号同源自一篇榜单文（均已标二手）——互证时只算一个源 |
| github.com | 04 | 2 | Copilot 官方社区讨论 + claude-code issue，不同仓库不同性质 |
| vibecoding.app | 04 | 1 | Cursor 投诉汇总（一手博客汇总开发者 X 原帖）；同时被交叉分析多个机会引用——**多机会引用同一页面按一个源计** |
| towardsdatascience.com | 04 | 1 | 同时支撑机会 2（记忆）与机会 4（验证）——按一个源计 |
| infoworld.com | 04 | 1 | — |
| bbb.org | 04 | 1 | — |
| hamzaakhalid.medium.com | 04 | 1 | — |
| ahrefs.com | 04 | 1 | — |
| aiweekly.co | 04 | 1 | HN 帖二手汇总（已标二手） |
| prnewswire.com | 03 | 1 | 厂商 PR，众筹金额与 Kickstarter 数据互证 |
| chromewebstore.google.com | 03 | 1 | — |
| travis.media | 03 | 1 | Udemy 课程二手汇总（已标二手） |
| javarevisited.wordpress.com | 03 | 1 | n8n 课程二手汇总（已标二手） |
| techstartups.com | 05 | 1 | Feathery 融资二手汇总（已标二手） |

## 各组二手转述明细

- **02 组（0/12）**：全部一手（AppSumo 评论页 + ClawHub API 直采）
- **03 组（4/10）**：INMO GO3、AEKE S1 Pro（同源 backerrock 榜单文）、Udemy AI 工程课（travis.media）、n8n 课程（javarevisited）——众筹金额与学员数引用时均需标注
- **04 组（1/11）**：HN 五大失败模式（aiweekly.co 汇总，未回原帖核实）
- **05 组（1/10）**：Feathery $30M（techstartups.com 融资周报汇总）
