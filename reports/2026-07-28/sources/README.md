# 原始信号归档索引 — 2026-07-28

> 本目录归档当日各信号采集 Agent 的原始输出，按 Agent 顺序编号（01 = 热点雷达，02+ = 信号组）。编号连续无缺口。

## ⚠️ 本期采集覆盖率告警

| 项目 | 状态 |
|------|------|
| 计划信号组 | 19 组（+ 01 热点雷达） |
| **成功返回信号** | **18 组** |
| **彻底失败（3 次重试后）** | **1 组 — 20 号「热点深挖 D：OpenAI 模型逃逸沙箱入侵 Hugging Face（GPT-5.6 Sol ExploitGym 事件）」，贡献 0 条信号** |
| 返回空数组 | 1 组 — 06 号 `business_startup_reddit_pain_points` |
| 渠道不可达 | 知乎（403）/ 即刻（登录墙）/ 小红书（未达），见 14 号文件第 10 条 |
| 搜索通道 | ⚠️ **全局故障**：63 次 WebSearch 中 30 次（48%）查询串被本地 harness 内部文本顶替，返回同一组无关结果（首条均为 rickhigh.substack.com）。**工具侧污染，非外部注入攻击**。受影响面覆盖 12 个 agent，含 Reddit 商业组（该组因此 0 信号）、会议组、WAIC 组、融资组、中文组 |

**读者须知**：本报告**完全没有覆盖**「AI 模型自主逃逸 / 沙箱安全事故」主题的任何渠道信号。报告在该主题上的沉默 = **未采集**，而非「不重要」或「未发现」。所有「N 渠道互证」计数仅统计实际成功返回信号的渠道。

---

## 文件列表

| 文件 | 信号组 | 信号数 | 二手转述 | 二手占比 |
|------|--------|--------|---------|---------|
| [01-hot-topic-radar.md](01-hot-topic-radar.md) | 热点雷达（Hot-Topic Radar） | 5 要点 | 1 | 20% |
| [02-producthunt.md](02-producthunt.md) | Product Hunt（日/周/月/年四榜 + review 深挖） | 11 | 0 | 0% |
| [03-appsumo-clawhub.md](03-appsumo-clawhub.md) | AppSumo + ClawHub 产品市场信号 | 10 | 0 | 0% |
| [04-marketplaces-freelance-automation.md](04-marketplaces-freelance-automation.md) | Marketplaces / Freelance / Automation | 7 | 2 | 29% |
| [05-crowdfunding-ecommerce-extensions-learning.md](05-crowdfunding-ecommerce-extensions-learning.md) | 众筹 / 电商 / 浏览器扩展 / 在线学习 | 11 | 6 | 55% |
| [06-business-startup-reddit-pain-points.md](06-business-startup-reddit-pain-points.md) | ⚠️ Business / Startup Reddit 痛点（**空数组**） | **0** | — | — |
| [07-reddit-ai-dev-pain.md](07-reddit-ai-dev-pain.md) | Reddit AI 开发者痛点（4 个子版块） | 13 | 0 | 0% |
| [08-hackernews-stackoverflow.md](08-hackernews-stackoverflow.md) | Hacker News / Stack Overflow | 10 | 0 | 0% |
| [09-indiehackers-substack.md](09-indiehackers-substack.md) | Indie Hackers / Substack | 6 | 0 | 0% |
| [10-pain-signals-social-review.md](10-pain-signals-social-review.md) | 痛点专线（社交与评论） | 5 | 2 | 40% |
| [11-industry-trends-github-hf-baai.md](11-industry-trends-github-hf-baai.md) | 行业趋势（GitHub · HuggingFace · BAAI） | 11 | 4 | 36% |
| [12-funding-investors-thought-leaders.md](12-funding-investors-thought-leaders.md) | ⚠️ 融资 / 投资人 / 思想领袖 | 11 | **8** | **73%** |
| [13-frontier-research-regulatory.md](13-frontier-research-regulatory.md) | ✅ 前沿研究与监管（arXiv · EU · CAC · WH） | 11 | 0 | **0%** |
| [14-china-community-pain.md](14-china-community-pain.md) | 中文社区痛点（V2EX · 少数派，知乎/即刻/小红书不可达） | 10 | 1 | 10% |
| [15-china-ai-market.md](15-china-ai-market.md) | ⚠️ 中国 AI 市场（36氪 · 机器之心 · 奇绩） | 8 | 6 | 75% |
| [16-conference-events.md](16-conference-events.md) | 会议与行业事件（WAIC · Google · Moonshot） | 8 | 5 | 63% |
| [17-hot-kimi-k3-opus5.md](17-hot-kimi-k3-opus5.md) | 热点深挖 A：Kimi K3 权重 + Claude Opus 5 | 10 | 1 | 10% |
| [18-hot-eu-dma-android.md](18-hot-eu-dma-android.md) | 热点深挖 B：EU DMA 强制 Google 开放 Android | 8 | 1 | 13% |
| [19-hot-waic-embodied-ai.md](19-hot-waic-embodied-ai.md) | ⚠️⚠️ 热点深挖 C：WAIC 会后 + 具身智能融资 | 12 | **10** | **83%** |
| [20-FAILED-openai-model-escape-exploitgym.md](20-FAILED-openai-model-escape-exploitgym.md) | ⚠️⚠️ 热点深挖 D：OpenAI 模型逃逸（**采集失败**） | **0** | — | — |

**合计：162 条信号（不含 01 号 5 条雷达要点），46 条二手转述（约 28%）**

> 上期对比：2026-07-27 为 43 条信号 / 6 条二手（14%）。**本期二手占比翻倍**，主因是新增的中国市场组（75%）、WAIC 组（83%）、融资组（73%）三组以媒体转述为主。**这三组的结论在报告中均已打折处理，且未支撑任何 Top 3 机会。**

---

## 信源质量分层（供加权参考）

| 层级 | 组 | 特征 |
|------|-----|------|
| **A 级（全一手，可直接支撑高分）** | 07 Reddit、08 HN、09 IndieHackers、13 监管研究、02 PH、03 AppSumo/ClawHub | 直采评论/issue/官方文本，含大量 verbatim 用户原话 |
| **B 级（多数一手，需逐条看标注）** | 17 K3 深挖、18 EU DMA、14 中文社区、11 GitHub/HF、10 痛点专线、04 Marketplaces | 一手为主但含个别二手；10 号组有 URL 去重问题 |
| **C 级（二手为主，结论须打折）** | 05 众筹/扩展/学习、16 会议、12 融资、15 中国市场、19 WAIC | 平台反爬（Kickstarter 403 / Chrome 空响应 / Udemy 403 / Fiverr 403）或索引页标题级转述 |
| **X（无数据）** | 06 空数组、20 采集失败 | 不参与任何互证计数 |

---

## 域名频次表（去重复核）

跨组出现的域名需注意信号是否为同源重复引用：

| 域名 | 出现组 | 次数 | 备注 |
|------|--------|------|------|
| **apps.shopify.com** | 05 | 5 | ⚠️ **跨机会引用**：Gorgias 差评页同时支撑机会 1（计费）与机会 2（AI agent 误上线），Chatty 差评页同时支撑机会 1（试用计费）与机会 6（AI 内容 SEO 冲突）——**互证时每页按一个源计** |
| **old.reddit.com** | 07 | 13 | 4 个不同子版块的 13 个不同帖，各自独立 |
| **news.ycombinator.com** | 08, 10, 17, 18 | 20+ | ⚠️ **10 号组内 3 条信号共用 item?id=47778035**（兄弟帖非独立帖页），**必须按一个源计**；其余为不同 item id |
| **huggingface.co** | 11, 16, 17 | 10 | ⚠️ 17 组内 5 条来自同一模型的不同讨论帖（#55/#59/#61/#65 + 模型卡）——**属同一发布事件下的不同一手证据，可分别计但需说明同源事件** |
| **appsumo.com** | 03 | 7 | 各为不同产品评论页；ZeroRank 同时被机会 1 与机会 6 引用（按一个源计） |
| **producthunt.com** | 02 | 8 | 日/周/月/年四个榜单页 + 4 个不同产品 review 页 |
| **v2ex.com** | 14 | 4 | 4 个不同帖（1230132 / 1230165 / 1230061 / 1230345）；1230132 与 1230345 同属计费主题但为不同帖 |
| **sspai.com** | 14 | 4 | 4 篇不同文章 |
| **github.com** | 11 | 6 | trending 页 ×2 + OmniRoute issue + orca issues + Kronos + open-code-review |
| **digital-markets-act.ec.europa.eu** | 18 | 3 | 互操作 Q&A / 数据共享 Q&A / 首页罚款头条——三个不同页面 |
| **digital-strategy.ec.europa.eu** | 13 | 4 | ⚠️ **同一页面（regulatory-framework-ai）承载 4 条信号**（Omnibus / 透明度指南 / 网安行动计划 / TDM 研究）——**互证时按一个源计** |
| **arxiv.org** | 13, 17 | 6 | 各为不同论文 ID，独立 |
| **techcrunch.com** | 12 | 5 | ⚠️ **全部来自同一分类索引页**（category/artificial-intelligence），未打开任一原文——**5 条信号实为一个页面的 5 个标题，互证时按一个源计** |
| **news.crunchbase.com** | 12 | 3 | ⚠️ 同上，均来自 sections/ai 索引页——**按一个源计** |
| **a16z.com** | 12 | 3 | ⚠️ 全部来自 news-content feed 页——**按一个源计** |
| **cac.gov.cn** | 13 | 2 | 首页两条不同通报 |
| **36kr.com** | 15 | 6 | ⚠️ 分别来自 AI 频道页与职场频道页两个索引页——**实为 2 个源** |
| **backerrock.com** | 05 | 2 | ⚠️ 两条信号同源自付费众筹营销商的榜单文（均已标二手）——**互证时只算一个源** |
| **kickstarter.com** | 05 | 3 | ⚠️ 全部为二手转述（Kickstarter 403 反爬） |
| **chromewebstore.google.com** | 05 | 2 | ⚠️ 全部为二手转述（Chrome 商店返回空响应） |
| **globenewswire.com** | 04 | 2 | Fiverr / Upwork 两篇不同官方新闻稿 |
| **artificialanalysis.ai** | 17 | 2 | K3 模型页 + Omniscience 评测页（后者用于核查 51% 幻觉说法） |
| **clawhub.ai** | 03 | 2 | 首页 trending + gog 技能页 |
| **163.com** | 19 | 2 | ⚠️ 两条均为网易号转载（上观新闻 / 时代财经），原始来源不同 |
| **huxiu.com** | 19 | 2 | 两篇不同文章（均二手） |
| **wikipedia.org** | 16, 19 | 2 | ⚠️ **跨组**：WAIC 条目与 WAICO 条目，主题相邻但为不同页面 |
| 其余单次出现 | — | — | zapier.com, make.com, insightraider.com, fiverr.com, aboutchromebooks.com, unite.ai, travis.media, indiehackers.com, openrouter.ai, fireworks.ai, daringfireball.net, blog.google, ec.europa.eu, whitehouse.gov, hub.baai.ac.cn, miracleplus.com, jiqizhixin.com, chinadaily.com.cn, sina.com.cn, buildfastwithai.com, developers.googleblog.com, stcn.com, sheitc.sh.gov.cn, agibot.com, sohu.com, thepaper.cn, sh.chinanews.com.cn, zhihu.com(403) |

---

## 各组二手转述明细

- **01 组（1/5）**：WAIC 会后落地期雷达要点（引 163.com 转载）
- **02 组（0/11）**：全部一手（PH 榜单页 + review 页直采）
- **03 组（0/10）**：全部一手（AppSumo 评论页 + ClawHub 页面直采）
- **04 组（2/7）**：Gumroad 品类分析（InsightRaider，厂商有 COI）、Fiverr 成本基准（原页 403）
- **05 组（6/11）**：Tiiny AI Pocket Lab、Kickstarter 6 月 AI 硬件榜、Q2 众筹趋势（三条 Kickstarter 系均 403 反爬）、Chrome 扩展生态、AI 扩展头部格局（Chrome 商店空响应）、Udemy 课程（403）
- **07 组（0/13）**：全部一手 Reddit 帖与评论
- **08 组（0/10）**：全部一手 HN 帖与评论
- **09 组（0/6）**：全部一手 IndieHackers 帖与评论
- **10 组（2/5）**：Max 订阅者可靠性帖、Finterm 数据接地帖——**两者 source_url 均指向兄弟帖而非独立帖页，故标二手**
- **11 组（4/11）**：GitHub skills trending、HF OCR 模型、HF uncensored 衍生版、self-hosted 开源替代品（均为榜单聚合读数）
- **12 组（8/11）**：Enigma、AegisAI、Prentis、Anduril、SSI-Nvidia、EdVisorly、Atoms、$510B 宏观——**全部来自索引页标题，未打开原文（部分猜测 URL 404）**
- **13 组（0/11）**：全部一手官方页/论文页
- **14 组（1/10）**：渠道覆盖告警条目本身（过程性信号）
- **15 组（6/8）**：K3 开源、Kimi 停订阅、大厂组织调整、郭列访谈、Ilya 融资、HBR 批判性思维——**均为 36kr 频道页 teaser**
- **16 组（5/8）**：WAIC 前瞻发布会（Sina 转载央视）、WAICO（Wikipedia）、7 月模型发布潮（SEO 聚合日报，多条自标 leak）、未来 30 天前瞻（多源日历综合）
- **17 组（1/10）**：Fireworks 路由研究（**K3 推理供应商本身发布，有直接利益相关**）
- **18 组（1/8）**：Gruber 深度拆解（知名评论者观点，对决定本身属二手但为一手观点来源）
- **19 组（10/12）**：除 AGIBOT 官方新闻稿与部分官方页外全部二手——**本组是全报告信源质量最低的一组**

---

## 利益相关披露（引用时须一并说明）

| 来源 | 利益相关 | 影响的信号 |
|------|---------|-----------|
| Fireworks AI | **K3 推理供应商本身**，成本倍数含营销成分 | 17 号第 6 条（K3 vs Fable 对标） |
| BackerRock | 付费众筹营销服务商 | 05 号第 2、11 条（AI 硬件榜） |
| InsightRaider | 售卖 $49/月订阅的厂商，±15-20% 估算误差 | 04 号第 6 条（Gumroad 分析） |
| 少数派潘先生 | 对话分支产品的开发者本人（自荐性质） | 14 号第 7 条 |
| Danila_K | 售卖 mailtester.ninja（邮箱验证） | 09 号第 2 条 |
| Alexander_K_Eliot | 做免费 AI 可见度修复以获客 | 09 号第 3 条 |
| PlanBridge / Finterm 作者 | Show HN 构建者本人 | 10 号第 4、5 条 |
| IT桔子 / 虎嗅每日天使 | 无具名投资人引语、基调偏乐观 | 19 号第 4、5 条 |

---

## 已识别并排除的不实数字

| 传播中的说法 | 核查结论 | 详见 |
|------------|---------|------|
| **「Kimi K3 被标 51% 幻觉警告」** | **四路一手核查全部无法证实**（HF 模型卡与 90 帖 / Moonshot 官方公告 / AA Omniscience 页 / Vectara HHEM 榜）；HN 全文搜索 0 条相关结果。**下游分析不应引用。** | 17 号第 9 条 |
| 「K3 采用 Modified MIT 许可证」 | **不实**——HF 模型卡实为自定义 'kimi-k3' 许可证 | 17 号第 1 条 |
| 「Claude Code 专家搜索 +938%」 | 数字属实但**来自极小基数**（六个月前该词几乎不存在），不应作为强证据 | 04 号第 1 条 |
| Gumroad 品类收入 $65.8M 等 | 售价×销量的估算（±15-20%），且出自有自利偏差的厂商 | 04 号第 6 条 |
| 少数派引用的 91.6% / 75.8% 调查数据 | 文章转引，**原始出处未在本次抓取中核验** | 14 号第 5 条 |
