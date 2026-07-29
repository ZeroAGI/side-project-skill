# 原始信号归档索引 — 2026-07-29

> 本目录是 `../demand-discovery-report.md` 的证据层。**报告是摘要，归档才是证据。**
> 索引由脚本对归档文件实测生成（信号块 = `- **type**:` 行数；二手 = `secondhand: true` 出现次数），非模型估算。

## 权威计数与归档实测的差异（必读）

| 口径 | 信号数 | 二手 | 说明 |
|------|-------|------|------|
| **workflow 结构化返回（报告采用，权威）** | **147** | **27（18%）** | 由 workflow 对各组 JSON 输出程序求和 |
| 归档文件头部自报之和 | 145 | 29 | 各组 agent 手写的组内小结 |
| 归档文件实测信号块 | 146 | 26 | 脚本统计 `- **type**:` / `secondhand: true` |

三者相差 1-2 条：结构化 JSON 与 markdown 归档由同一 agent 分别产出，个别信号在落盘时被合并或拆分。**报告正文统一采用 147 / 27**；逐条核查时以本目录实测为准。差异不影响任何结论——无单条信号的存废跨越这个误差。

## 组文件索引

| # | 文件 | 覆盖渠道 | 信号 | 二手 | 二手占比 |
|---|------|---------|-----:|-----:|--------:|
| 01 | [01-hotspot-radar.md](01-hotspot-radar.md) | 热点雷达（Phase 0） | **0** | 0 | — |
| 02 | [02-producthunt-leaderboards-reviews.md](02-producthunt-leaderboards-reviews.md) | Product Hunt 四档榜单 + Review 深挖 | 11 | 0 | 0% |
| 03 | [03-appsumo-clawhub.md](03-appsumo-clawhub.md) | AppSumo + ClawHub | 10 | 0 | 0% |
| 04 | [04-upwork-fiverr-gumroad-zapier.md](04-upwork-fiverr-gumroad-zapier.md) | Upwork + Fiverr + Gumroad + Zapier/Make | 10 | 1 | 10% |
| 05 | [05-kickstarter-shopify-chrome-udemy.md](05-kickstarter-shopify-chrome-udemy.md) | Kickstarter + Shopify + Chrome Store + Udemy | 8 | 1 | 13% |
| 06 | [06-reddit-business.md](06-reddit-business.md) | Reddit 创业/商业（7 个 sub） | **0** | 0 | — |
| 07 | [07-reddit-ai-dev.md](07-reddit-ai-dev.md) | Reddit AI/开发者（6 个 sub） | 11 | 0 | 0% |
| 08 | [08-hackernews-stackoverflow.md](08-hackernews-stackoverflow.md) | Hacker News + Stack Overflow | 13 | 2 | 15% |
| 09 | [09-indiehackers-substack.md](09-indiehackers-substack.md) | Indie Hackers + Substack | 9 | 0 | 0% |
| 10 | [10-twitter-reviews-youtube-discord.md](10-twitter-reviews-youtube-discord.md) | X/Twitter + 应用商店差评 + YouTube + Discord | 12 | 4 | 33% |
| 11 | [11-github-huggingface-baai.md](11-github-huggingface-baai.md) | GitHub Trending/Issues + HuggingFace + 智源社区 | 12 | 0 | 0% |
| 12 | [12-funding-vc-yc-blogs-podcasts.md](12-funding-vc-yc-blogs-podcasts.md) | 融资 + VC + YC/奇绩 + 博客 + 播客 | 12 | 2 | 17% |
| 13 | [13-arxiv-regulation-breakthrough-trends-luma.md](13-arxiv-regulation-breakthrough-trends-luma.md) | arXiv + 法规 + 技术突破 + Google Trends + Luma | 11 | 1 | 9% |
| 14 | [14-zhihu-jike-v2ex-sspai-xiaohongshu.md](14-zhihu-jike-v2ex-sspai-xiaohongshu.md) | 知乎 + 即刻 + V2EX + 少数派 + 小红书 | 8 | 7 | **88%** |
| 15 | [15-36kr-jiqizhixin-miracleplus.md](15-36kr-jiqizhixin-miracleplus.md) | 36Kr + 机器之心 + 奇绩创坛 + 淘宝闲鱼 | 9 | 3 | 33% |
| 16 | [16-conferences-launch-events.md](16-conferences-launch-events.md) | 行业大会 + 重大发布会 | 10 | 5 | **50%** |

**二手集中在三组**：`14`（中文社区，88%）、`16`（大会发布，50%）、`10`（社交/评论，33%）。这三组的一手直采本期大面积失败（知乎/V2EX/小红书 403 或样板 feed、大会官网多为媒体转述、G2/Trustpilot/Capterra/YouTube 不可达），引用其数据前必须回抓一手页。**报告 Top 5 机会的头条证据全部取自 `02/03/07/08/11` 这几组零二手/低二手的文件。**

## 跨组域名频次（一手性与互证独立性）

只列命中 ≥3 次或跨 ≥2 组的域名。共 52 个独立域名、146 条 source_url。

| 域名 | 次数 | 出现组 | 一手性 |
|------|-----:|--------|--------|
| producthunt.com | 11 | 02 | ✅ 一手平台 |
| reddit.com | 11 | 07 | ✅ 一手 thread（经 arctic-shift 归档 API 取正文，URL 已逐条核对） |
| news.ycombinator.com | 11 | 08 | ✅ 一手 |
| github.com | 9 | 11 | ✅ 一手 |
| appsumo.com | 8 | 03 | ✅ 一手（含买家 review） |
| indiehackers.com | 7 | 09 | ✅ 一手 |
| arxiv.org | 6 | 08, 13 | ✅ 一手 |
| techcrunch.com | 6 | 10, 12 | ⚠️ 媒体，融资类多为转述 |
| x.com | 6 | 10 | ✅ 一手推文 |
| zapier.com | 5 | 04 | ✅ 一手 |
| apps.shopify.com | 5 | 05 | ✅ 一手 |
| hub.baai.ac.cn | 5 | 11, 15, 16 | ⚠️ 智源社区多为对论文/发布的转述 |
| v2ex.com | 4 | 14 | ✅ URL 为一手，但正文经搜索缓存获取 |
| 36kr.com | 4 | 15 | ⚠️ 媒体转述 |
| globenewswire.com | 3 | 04 | ⚠️ 厂商新闻稿，利益相关 |
| news.crunchbase.com | 3 | 12 | ⚠️ 媒体 |
| anthropic.com | 2 | 13, 16 | ✅ 官方公告（厂商立场需注意） |

**互证独立性提示**：`hub.baai.ac.cn` 跨 3 组、`techcrunch.com` 与 `arxiv.org` 各跨 2 组——涉及这些域名的「多渠道验证」需检查底层一手来源是否真的不同。三篇不同站点转述同一份发布 = 1 个来源。

## 本期缺失与降权（审计要点）

1. **`01` 热点雷达失败**（模型侧安全策略拦截）→ 本期无动态热点组，突发事件覆盖不完整。详见该文件。
2. **`06` Reddit 商业组 0 信号**（reddit.com 全域 403 + 5 个镜像全挂 + `site:reddit.com` 搜索限定失效）→ **本期所有依赖 SMB 老板 / 非技术创业者视角的结论缺一路互证**，不得把 `07`（AI/开发者 sub）的 Reddit 引用当作本组已互证。
3. **归档索引本身**由 workflow 内的 Archive Index agent 生成失败（`API Error: 400 No matching constant for [524]`），本文件为事后按实测数据补写；`14` 组也遭同一 API 错误，其内容为重试后产出。
4. 其余不可达渠道（Kickstarter 403、Gumroad ECONNREFUSED、知乎 403、小红书样板 feed、G2/Trustpilot/Capterra 403、YouTube DNS 污染、Stack Overflow 屏蔽、YC directory 动态加载、Udemy 403、Google Trends 连续 429）已在各组文件头部逐条记录。
5. **WebSearch 链路本期正常**：多组独立报告查询与结果语义相关，未出现 2026-07-28 那类查询串被顶替的故障。**因此本期所有「渠道不可达」均为目标站反爬或本地网络层问题，07-28 的诊断结论不要沿用。**
