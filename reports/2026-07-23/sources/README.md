# 信号源存档索引 — 2026-07-23

> 每日需求发现报告的原始信号存档。总计 **164 条信号**，其中 **35 条二手转述（21.3%）**。

## 文件清单

| 文件 | 信号组 | 信号数 | 二手数 | 二手占比 |
|------|--------|--------|--------|---------|
| 01-hot-topic-radar.md | 热点雷达输出（动态组生成依据） | — | — | — |
| 02-product-market-signals.md | Product Hunt / ClawHub / AppSumo 产品市场信号 | 15 | 0 | 0% |
| 03-freelance-marketplaces-automation.md | Upwork / Fiverr / Gumroad / Zapier / Make | 10 | 3 | 30% |
| 04-crowdfunding-ecommerce-extensions-learning.md | Kickstarter / Shopify / Chrome / Udemy | 14 | 8 | **57%** ⚠️ |
| 05-reddit-pain-points.md | Reddit 痛点信号 | 10 | 7 | **70%** ⚠️ |
| 06-hackernews-stackoverflow.md | Hacker News + Stack Overflow | 15 | 0 | 0% |
| 07-indiehackers-substack.md | Indie Hackers + Substack | 10 | 0 | 0% |
| 08-twitter-reviews-youtube-discord.md | X / Trustpilot / G2 / 论坛评测 | 12 | 7 | **58%** ⚠️ |
| 09-github-huggingface-baai.md | GitHub / Hugging Face / BAAI 趋势 | 15 | 0 | 0% |
| 10-funding-investor-thought-leader.md | 融资 / 投资人 / 思想领袖 | 13 | 2 | 15% |
| 11-frontier-research-regulatory.md | 前沿研究 / 监管 / 模型发布 | 14 | 5 | 36% |
| 12-china-ai-tools-pain-points.md | 中国 AI 工具痛点（V2EX/知乎/少数派/即刻） | 11 | 0 | 0% |
| 13-china-ai-market.md | 中国 AI 市场（36kr/腾讯/BAAI/新浪） | 15 | 1 | 7% |
| 14-ai-conference-product-launch.md | 热点雷达动态组：AI 大会与产品发布 | 10 | 2 | 20% |
| **合计** | | **164** | **35** | **21.3%** |

⚠️ 二手占比 >50% 的组（04/05/08）：其定量数字在报告中均已按规则标注「（二手转述，未经一手核实）」，且不作为 Top 3 机会头条证据。

## 域名频次表（跨组引用 = 去重审查标记）

### 跨多组引用的域名（同一信源可能被多个 Agent 重复计入，交叉验证时只算一个源）

| 域名 | 出现的组 | 引用次数 | 去重提示 |
|------|---------|---------|---------|
| arxiv.org | 06（×4，同一论文 2505.04084）、11（×3） | 7 | ⚠️ 06 组四条信号出自**同一篇** SO 实证研究——交叉验证只算一个源 |
| hub.baai.ac.cn | 09（×3，均为 /papers 页）、13（×3，均为 /view/55384） | 6 | ⚠️ 组内同 URL 多信号；两组间为不同页面 |
| github.com | 09（×6）、11（×1 Bonsai） | 7 | 不同仓库，无重复 |
| clawhub.ai | 02（×3，同一 URL） | 3 | ⚠️ 同页不同插件数据，交叉验证按「ClawHub 下载数据」单源计 |
| radicaldatascience.wordpress.com | 11（×4，**同一 URL**） | 4 | ⚠️ 四条模型发布信号出自同一篇聚合博文且均为二手——只算一个二手源 |
| globenewswire.com | 14（×4，同一 WAIC 通稿） | 4 | ⚠️ 同一通稿多信号 |
| apps.shopify.com | 04（×4：tidio/yotpo/首页×2） | 4 | 首页两条（Avada/Smart Pricing）同 URL |
| appsumo.com | 02（×4：trending×3/browse×1） | 4 | 同站两页 |
| travis.media | 04（×3，同一篇 Udemy 榜单文，均二手） | 3 | ⚠️ 只算一个二手源 |
| zplatform.ai | 04（×3，同一目录页） | 3 | ⚠️ 同页快照 |
| finance.sina.com.cn | 13（×1）、14（×1） | 2 | 不同文章 |
| news.qq.com | 13（×5，同一篇 WAIC 报道） | 5 | ⚠️ 同一报道多信号 |
| 36kr.com | 13（×4，3 篇文章） | 4 | 其中 2 条同文 |
| v2ex.com | 12（×3：1186323×2、1188849×1） | 3 | ⚠️ 1186323 被两条信号引用 |
| m.okjike.com | 12（×3，**同一话题页**） | 3 | ⚠️ 同一即刻话题页拆出三条痛点——按单一社区源对待 |
| investors.upwork.com | 03（×2，同一新闻稿） | 2 | ⚠️ 同稿两信号 |
| news.ycombinator.com | 06（×8） | 8 | 不同帖子，无重复 |
| indiehackers.com | 07（×8） | 8 | 不同帖子 |
| a16z.com | 10（×3） | 3 | 不同文章 |
| techcrunch.com | 10（×4） | 4 | 不同文章 |
| digital-strategy.ec.europa.eu | 11（×2） | 2 | 不同公告 |
| cac.gov.cn | 11（×2） | 2 | 一为具体公告一为首页 |
| backerrock.com | 04（×4，**同一榜单文**，均二手） | 4 | ⚠️ 只算一个二手源 |
| zhuanlan.zhihu.com | 12（×3，不同文章） | 3 | 无重复 |
| sspai.com | 12（×2，不同文章） | 2 | 无重复 |
| x.com | 08（×2，不同帖） | 2 | 无重复 |

### 单组单次引用（无去重风险，略）

cybernaira.com、insightraider.com、zapier.com、make.com、gumroad-orchestrator.netlify.app、reddit.com（05 组内 5 个不同帖）、cbinsights.com、fortune.com、origami.chat、leadermenu.com、forum.cursor.com、infoq.com、computertech.co、future-stack-reviews.com、aitooldiscovery.com、virtualuncle.com、techcommunity.microsoft.com、dev.to、axios.com、sobot.io、huggingface.co（09 组内 4 个不同页）、hpcwire.com、allinchamathjason.libsyn.com、news.crunchbase.com、science.org、blog.google、tixiaolu.com、kimi.com、finance.eastmoney.com、basic-tutorials.com、news.cgtn.com、aiapps.com

## 去重审查结论

1. **同 URL 多信号**是本期最主要的重复形态：radicaldatascience（4 信号=1 二手源）、backerrock（4=1）、travis.media（3=1）、news.qq WAIC 报道（5=1）、即刻话题页（3=1）、arXiv 2505.04084（4=1）——报告交叉验证均已按「一个来源」处理。
2. ClawHub（3 信号）虽同 URL，但为**不同插件的独立下载数**，作为量化证据可分别引用，但渠道计数仍按 1 个渠道。
3. WAIC 2026 相关内容横跨 13/14 两组共 ~10 条信号（globenewswire 通稿 + news.qq + 36kr + eastmoney）——主题级重复，报告已在中文专题内合并叙述。
