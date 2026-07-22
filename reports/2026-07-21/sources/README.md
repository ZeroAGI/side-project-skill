# 2026-07-21 信号源逐组原始数据（供溯源审查）

> 每个文件对应一个扫描 agent 的结构化输出，未经交叉分析加工。重点审查：域名是否可信、URL 是否真实存在、数据是否可能为二手转述。

## 文件索引

| 组 | 信号源 | 文件 | 信号数 |
|---|---|---|---|
| 02 | Product Hunt + AppSumo + ClawHub | [02-Product-Hunt-AppSumo-ClawHub.md](02-Product-Hunt-AppSumo-ClawHub.md) | 15 |
| 03 | Upwork + Fiverr + Gumroad + Zapier/Make | [03-Upwork-Fiverr-Gumroad-Zapier-Make.md](03-Upwork-Fiverr-Gumroad-Zapier-Make.md) | 10 |
| 04 | Kickstarter + Shopify + Chrome Store + Udemy | [04-Kickstarter-Shopify-Chrome-Store-Udemy.md](04-Kickstarter-Shopify-Chrome-Store-Udemy.md) | 12 |
| 05 | Reddit Pain Points | [05-Reddit-Pain-Points.md](05-Reddit-Pain-Points.md) | 15 |
| 06 | Hacker News + Stack Overflow | [06-Hacker-News-Stack-Overflow.md](06-Hacker-News-Stack-Overflow.md) | 15 |
| 07 | Indie Hackers + Substack | [07-Indie-Hackers-Substack.md](07-Indie-Hackers-Substack.md) | 13 |
| 08 | Twitter/X + Reviews + YouTube + Discord | [08-Twitter-X-Reviews-YouTube-Discord.md](08-Twitter-X-Reviews-YouTube-Discord.md) | 13 |
| 09 | GitHub Trending + HuggingFace + 智源社区 | [09-GitHub-Trending-HuggingFace-智源社区.md](09-GitHub-Trending-HuggingFace-智源社区.md) | 13 |
| 10 | Funding + VC + YC + Blogs + Podcasts | [10-Funding-VC-YC-Blogs-Podcasts.md](10-Funding-VC-YC-Blogs-Podcasts.md) | 13 |
| 11 | arXiv + Regulations + Breakthroughs + Google Trends + Luma | [11-arXiv-Regulations-Breakthroughs-Google-Trends-Luma.md](11-arXiv-Regulations-Breakthroughs-Google-Trends-Luma.md) | 10 |
| 12 | 知乎 + 即刻 + V2EX + 少数派 + 小红书 | [12-知乎-即刻-V2EX-少数派-小红书.md](12-知乎-即刻-V2EX-少数派-小红书.md) | 10 |
| 13 | 36Kr + 机器之心 + 奇绩创坛 + 淘宝闲鱼 | [13-36Kr-机器之心-奇绩创坛-淘宝闲鱼.md](13-36Kr-机器之心-奇绩创坛-淘宝闲鱼.md) | 10 |
| 14 | 行业大会 + 重大发布会 (WAIC/IO/WWDC/云栖/智源) | [14-行业大会-重大发布会-WAIC-IO-WWDC-云栖-智源.md](14-行业大会-重大发布会-WAIC-IO-WWDC-云栖-智源.md) | 12 |
| 15 | 热点深挖: WAIC 2026 世界人工智能大会 | [15-热点深挖-WAIC-2026-世界人工智能大会.md](15-热点深挖-WAIC-2026-世界人工智能大会.md) | 8 |
| 16 | 热点深挖: Kimi K3 开源震荡：中美AI差距重估 | [16-热点深挖-Kimi-K3-开源震荡-中美AI差距重估.md](16-热点深挖-Kimi-K3-开源震荡-中美AI差距重估.md) | 10 |
| 17 | 热点深挖: Apple Intelligence 正式获批进入中国（阿里Qwen + 百度） | [17-热点深挖-Apple-Intelligence-正式获批进入中国-阿里Qwen-百度.md](17-热点深挖-Apple-Intelligence-正式获批进入中国-阿里Qwen-百度.md) | 8 |
| 18 | 热点深挖: 欧盟AI法案透明度义务8月2日生效 + EDPB爬虫GDPR指南 | [18-热点深挖-欧盟AI法案透明度义务8月2日生效-EDPB爬虫GDPR指南.md](18-热点深挖-欧盟AI法案透明度义务8月2日生效-EDPB爬虫GDPR指南.md) | 10 |

## 域名引用频次（跨组去重审查用）

| 域名 | 引用次数 | 出现的组 |
|---|---|---|
| `indiehackers.com` | 14 | 5,7,8 |
| `news.ycombinator.com` | 10 | 6 |
| `hub.baai.ac.cn` | 8 | 9,14 |
| `producthunt.com` | 7 | 2 |
| `36kr.com` | 6 | 13,17 |
| `techcrunch.com` | 5 | 10 |
| `clawoneclick.com` | 4 | 2 |
| `talking-tech-with-j.medium.com` | 4 | 5 |
| `geekfence.com` | 4 | 9 |
| `aiapps.com` | 4 | 11,14 |
| `zhuanlan.zhihu.com` | 4 | 12 |
| `backerrock.com` | 3 | 4 |
| `apps.shopify.com` | 3 | 4 |
| `udemy.com` | 3 | 4 |
| `medium.com` | 3 | 5,8 |
| `arxiv.org` | 3 | 8,11 |
| `thevccorner.com` | 3 | 10 |
| `huxiu.com` | 3 | 15 |
| `masteryblogging.com` | 2 | 2 |
| `composio.dev` | 2 | 2 |
| `use-apify.com` | 2 | 3 |
| `appsumo.com` | 2 | 3 |
| `origami.chat` | 2 | 5 |
| `newsletter.agentbuild.ai` | 2 | 5 |
| `bestofshowhn.com` | 2 | 6 |
| `af.net` | 2 | 9,10 |
| `techstartups.com` | 2 | 10 |
| `pandaily.com` | 2 | 14 |
| `news.cn` | 2 | 14,15 |
| `mindstudio.ai` | 2 | 16 |
| `kimi.com` | 2 | 16 |
| `agidaily.cc` | 2 | 17 |
| `presenc.ai` | 2 | 18 |
| `ewsolutions.com` | 2 | 18 |
| `globenewswire.com` | 1 | 3 |
| `freelanceautomationai.com` | 1 | 3 |
| `unil.ink` | 1 | 3 |
| `profitable.app` | 1 | 3 |
| `insightraider.com` | 1 | 3 |
| `zapier.com` | 1 | 3 |
| `kickstarter.com` | 1 | 4 |
| `unite.ai` | 1 | 4 |
| `travis.media` | 1 | 4 |
| `ivconsulting.in` | 1 | 5 |
| `painonsocial.com` | 1 | 5 |
| `beginnersinai.org` | 1 | 5 |
| `dev.to` | 1 | 5 |
| `byteiota.com` | 1 | 6 |
| `echosift.io` | 1 | 6 |
| `developersdigest.tech` | 1 | 6 |
| `theinnovationattorney.substack.com` | 1 | 7 |
| `blog.laozhang.ai` | 1 | 8 |
| `discuss.ai.google.dev` | 1 | 8 |
| `forbes.com` | 1 | 8 |
| `aiacceleratorinstitute.com` | 1 | 8 |
| `daplab.cs.columbia.edu` | 1 | 8 |
| `roborhythms.com` | 1 | 8 |
| `thinkdifferent.blog` | 1 | 8 |
| `pasqualepillitteri.it` | 1 | 8 |
| `leaddev.com` | 1 | 8 |
| `g2.com` | 1 | 8 |
| `huggingface.co` | 1 | 9 |
| `a16z.com` | 1 | 10 |
| `news.crunchbase.com` | 1 | 10 |
| `rimonlaw.com` | 1 | 11 |
| `skycrumbs.com` | 1 | 11 |
| `imfounder.com` | 1 | 11 |
| `quickseo.ai` | 1 | 11 |
| `dentro.de` | 1 | 11 |
| `releasebot.io` | 1 | 11 |
| `lu.ma` | 1 | 11 |
| `downly.cn` | 1 | 12 |
| `blog.linggantext.com` | 1 | 12 |
| `openxueshu.com` | 1 | 12 |
| `sspai.com` | 1 | 12 |
| `sohu.com` | 1 | 12 |
| `quaily.com` | 1 | 12 |
| `finance.sina.com.cn` | 1 | 13 |
| `mplus-gallery.nimbus-nimo.com` | 1 | 13 |
| `tixiaolu.com` | 1 | 13 |
| `aitoollab.cn` | 1 | 13 |
| `news.qq.com` | 1 | 13 |
| `waica2026.worldaic.com.cn` | 1 | 14 |
| `georgechen.substack.com` | 1 | 14 |
| `amd.com` | 1 | 14 |
| `news.microsoft.com` | 1 | 14 |
| `phonearena.com` | 1 | 14 |
| `163.com` | 1 | 15 |
| `chinanews.com.cn` | 1 | 15 |
| `m.21jingji.com` | 1 | 15 |
| `cnblogs.com` | 1 | 15 |
| `thenewstack.io` | 1 | 16 |
| `the-decoder.com` | 1 | 16 |
| `80aj.com` | 1 | 16 |
| `zhihu.com` | 1 | 16 |
| `makerstack.co` | 1 | 16 |
| `platform.kimi.com` | 1 | 16 |
| `chinaz.com` | 1 | 17 |
| `totalum.app` | 1 | 17 |
| `fourweekmba.com` | 1 | 17 |
| `tmtpost.com` | 1 | 17 |
| `alibabacloud.com` | 1 | 17 |
| `datamatters.sidley.com` | 1 | 18 |
| `edpb.europa.eu` | 1 | 18 |
| `digitalapplied.com` | 1 | 18 |
| `gamingtechlaw.com` | 1 | 18 |
| `digital-strategy.ec.europa.eu` | 1 | 18 |
| `reedsmith.com` | 1 | 18 |

## ⚠️ 初步风险分级（自动 triage，供人工复核）

总信号 197 条，其中 **74 条（38%）来源为二手聚合/SEO 博客/个人站**，未直接引用一手平台。

### 各组二手来源占比

| 组 | 二手/总数 | 风险点 |
|---|---|---|
| 05 Reddit Pain Points | **13/15** | 🔴 最严重——几乎所有"Reddit 痛点"实际引用的是 SEO 博客对 Reddit 的转述（ivconsulting.in、origami.chat、painonsocial.com、medium 个人号），无一条直接链接 reddit.com 帖子 |
| 03 Upwork/Fiverr/Gumroad | 6/10 | freelanceautomationai.com、unil.ink、insightraider.com、profitable.app 等聚合站转述平台数据 |
| 02 PH/AppSumo/ClawHub | 6/15 | ClawHub 下载量全部来自 clawoneclick.com（非 clawhub.ai 官方）；masteryblogging.com 转述 AppSumo |
| 08 Twitter/评价/YouTube | 6/13 | talking-tech-with-j.medium.com 个人号被引 4 次 |
| 10 融资/VC/YC | 6/13 | thevccorner.com、techstartups.com 转述，但融资类可与 TechCrunch 交叉验证 |
| 11 arXiv/法规/趋势 | 5/10 | skycrumbs.com、imfounder.com、dentro.de、quickseo.ai 转述前沿动态 |
| 15 WAIC 深挖 | 0/8 | ✅ 全部一手（虎嗅/新华网/中新网/21财经） |

### 高频二手域名（重点核查对象）

| 域名 | 引用次数 | 承载的关键数据 | 建议 |
|---|---|---|---|
| `clawoneclick.com` | 4 | ClawHub 技能榜全部下载量（Self-Improving 41.9万、Skill Vetter 22.8万、Ontology 17.5万）——本期机会 2/4 的核心证据 | 🔴 与 clawhub.ai 官方对照 |
| `geekfence.com` | 4 | GitHub 趋势星数（OmniRoute 17.9k、codebase-memory-mcp 32k、strix 42k） | 🔴 与 github.com 对照 |
| `byteiota.com` | 1 | SO 2026 调查核心数字（84%/3%/66%）——机会 5 的支柱 | 🟠 与 survey.stackoverflow.co 官方对照 |
| `talking-tech-with-j.medium.com` | 4 | Loom 流失等生产力工具退潮叙事 | 🟠 个人号，孤证不采信 |
| `aiapps.com` | 4 | 7/9 三大模型同日发布、GPT-Live 150M 周活 | 🟠 重大发布可与官方公告对照 |
| `ivconsulting.in` | 1 | £220 过夜账单 + 268 赞帖——Cost Guardian 榜首证据之一 | 🔴 找到原始 Reddit 帖再采信 |
| `presenc.ai` | 2 | HF 中国模型 Top10 五席、C2PA 存活率 30-50% | 🟠 与 huggingface.co 对照 |
| `blog.laozhang.ai` | 1 | Opus 4.6 长对话退化 73%→33%——记忆层新切角的量化来源 | 🔴 该站为 API 中转商营销博客，利益相关 |
| `80aj.com` | 1 | OpenAI Dean Ball 表态 | 🟠 有 Zhihu/HN 平行来源可对照 |
| `echosift.io` / `painonsocial.com` | 各1 | "24,485 条痛点聚类"/"1M+ 投诉分析" | 🟠 产品自营内容营销，数字无法独立验证 |

### 结构性问题

1. **搜索引擎中间层污染**：WebSearch 返回的往往是 SEO 聚合页而非一手页面，agent 未强制回溯原始链接——「Reddit 组 15 条信号 0 条 reddit.com 链接」是该缺陷的极端体现。
2. **利益相关方叙事**：blog.laozhang.ai（API 中转商）、echosift/painonsocial/origami（自家产品内容营销）提供的"痛点数据"天然有夸大动机。
3. **不可证伪的精确数字**：下载量/星数/百分比经二手转述后无法区分真实、过时还是编造——凡进入 Top 机会评分的关键数字应要求一手来源。
