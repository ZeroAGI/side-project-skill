---
name: demand-discovery
description: >-
  每日需求发现报告：从 Product Hunt、Reddit、Indie Hackers、AppSumo、Upwork、
  Twitter/X、知乎、即刻等渠道，系统性挖掘可产品化的用户痛点和市场机会。
  产出落盘于 reports/{date}/demand-discovery-report.md。
  所有产出仅供创业参考，不构成商业决策建议。
user_invocable: true
---

# 每日需求发现报告

> **目标**：系统性发现「谁在为什么痛苦付钱」，为 AI 从业者找到可用 AI 解决的产品化机会。

## 核心原则

1. **从痛点出发，不从技术出发** — 先发现问题，再想 AI 怎么解决
2. **可验证性** — 每个需求必须有来源链接、用户原话或数据支撑
3. **可执行性** — 每个机会要评估：市场大小、竞争格局、AI 可行性、MVP 难度
4. **落盘存档** — 所有产出写入 `reports/{YYYY-MM-DD}/demand-discovery-report.md`

## 信号源矩阵

### 第一层：看别人在为什么付钱（产品市场信号）

| 渠道 | 搜什么 | 要提取的信息 |
|------|--------|-------------|
| **Product Hunt** | 最近 7 天上线的 AI 产品 | 产品名、解决什么问题、投票数、评论热度 |
| **AppSumo** | 热卖的 SaaS deals | 品类、价格、销量、用户评价 |
| **Upwork / Fiverr** | 被重复购买的 AI 相关服务 | 服务类型、价格区间、购买频次 → 可产品化信号 |
| **Chrome Web Store** | 近期高增长扩展 | 功能、用户数增速、差评里的痛点 |
| **Kickstarter (Tech/Hardware)** | 科技/硬件类众筹项目 | 筹资金额、支持人数、产品品类、达成率 → 付费意愿最直接的证据 |
| **Gumroad / LemonSqueezy** | 独立开发者数字产品销售 | 什么模板/工具/插件卖得动 → 已验证的微产品付费意愿 |
| **Zapier / Make 集成市场** | 高频使用的自动化集成 | 什么 workflow 被高频连接 → 自动化痛点 = 产品化机会 |
| **Udemy / Skillshare** | AI/SaaS 类课程畅销榜 | 什么技能/工具人们花钱学 → 需求热度验证 |
| **Shopify App Store** | 电商商家付费插件 | 商家愿意为什么功能付钱 → B2B 电商刚需 |
| **淘宝 / 闲鱼数字服务** | AI 代做、模板、工具类 | 国内用户实际在花钱买什么数字服务 → 中文市场付费验证 |
| **ClawHub (clawhub.ai)** | OpenClaw AI Agent Skill 市场热门/高下载 | 什么 Agent 能力被高频下载 → AI Agent 生态的真实需求信号 |

### 第二层：看别人在抱怨什么（痛点信号）

| 渠道 | 搜什么 | 要提取的信息 |
|------|--------|-------------|
| **Reddit** | r/SaaS, r/startups, r/Entrepreneur, r/smallbusiness 的热帖 | 「I wish...」「frustrated with...」「anyone know a tool for...」 |
| **Twitter/X** | AI 工具吐槽、workflow 自动化需求 | 高互动的吐槽帖、求推荐帖 |
| **Hacker News** | Show HN + Ask HN 近期热帖 | 什么问题引发大量讨论 |
| **Indie Hackers** | Building in public、revenue milestones、idea validation 帖 | 独立开发者在做什么、验证了什么、踩了什么坑 |
| **Substack** | AI/SaaS/创业类热门 newsletter | 创业者深度分析、痛点讨论、市场观察 |
| **Stack Overflow** | 高频重复提问、高票问题 | 开发者反复遇到的问题 = 可产品化的开发工具机会 |
| **YouTube** | AI 工具教程、workflow 自动化视频 | 高观看量教程 = 需求规模；评论区吐槽 = 真实痛点 |
| **Discord / Slack 社区** | AI 工具用户社区（Midjourney、Cursor 等） | 功能请求、bug 吐槽、workaround 讨论 → 产品改进空间 |
| **知乎 / 即刻** | 「有没有工具可以…」「太烦了…」 | 中文市场的独特痛点 |
| **小红书** | 工具吐槽、效率 App 求推荐、workflow 分享 | 中国最大消费决策平台，种草/吐槽密度极高 |
| **V2EX** | 开发工具、效率工具、自动化讨论 | 中文开发者社区，技术工具类痛点高密度 |
| **少数派 (sspai.com)** | 效率工具深度测评、差评、对比文 | 工具深度用户的改进需求 |
| **竞品差评** | G2、Capterra、App Store、Google Play 差评 | 现有方案的核心缺陷（覆盖 iOS + Android 双生态） |

### 第三层：看行业趋势（结构性机会）

| 渠道 | 搜什么 | 要提取的信息 |
|------|--------|-------------|
| **Google Trends** | 关键词搜索趋势、地域分布 | 需求是涨是跌、季节性、哪些地区最强 → 唯一的定量需求验证信号 |
| **GitHub Trending** | 每日/每周热门仓库（AI/ML/Tools 相关） | 星标增速、项目品类、解决什么问题 → 开发者在造什么 = 技术方向信号 |
| **Hugging Face Models** | 近期热门/新发布模型 | 模型能力、下载量、应用场景 → 新模型 = 新能力 = 新产品可能 |
| **Hugging Face Datasets** | 近期热门/新上传数据集 | 数据领域、下载量、标注类型 → 什么数据被关注 = 什么问题值得解决 |
| **Luma 活动** | AI/Tech 领域线上线下活动 | 活动主题、参与人数、讨论热点 → 行业热点风向标 |
| **智源社区 (hub.baai.ac.cn)** | AI 前沿论文、热门项目、风云榜 | 中文 AI 学术前沿动态，新论文/新项目 → 技术能力突破信号 |
| **arXiv** | AI/ML 前沿论文（cs.AI, cs.CL, cs.CV, cs.LG） | 最前沿的技术突破 → 6-12 个月后可产品化的能力信号 |
| **行业新闻** | 新法规、新政策、行业变革 | 合规刚需 = 强付费意愿 |
| **AI 技术突破** | 新模型能力、新 API | 哪些之前做不了的现在能做了 |
| **中文 AI 媒体** | 机器之心、量子位、新智元 | 中文视角的 AI 行业解读、产品动态、技术应用案例 → 国内市场信号 |
| **融资动态** | Crunchbase、PitchBook、CB Insights、TechCrunch、36Kr、IT桔子 | 钱流向哪 = 市场验证；融资轮次 + 金额 + 赛道 → 资本共识信号 |
| **顶级孵化器** | Y Combinator、奇绩创坛（MiraclePlus） | 入选项目 = 顶级投资人验证过的方向；批次主题 → 赛道风向标 |
| **顶级 VC** | a16z、Sequoia、Benchmark、Greylock、红杉中国、高瓴 | VC 投资组合 + 研究报告 → 聪明钱的赛道判断 |
| **高质量博客** | a16z blog、Sequoia Arc、Paul Graham、Lenny's Newsletter、Stratechery、Not Boring | 顶级投资人/创业者的深度思考 → 趋势判断 + 框架洞察 |
| **高质量播客** | Acquired、All-In Podcast、Lex Fridman、My First Million、20VC、硅谷101、声动早咖啡、信号与噪声 | 创业者/投资人对话 → 赛道洞察、痛点讨论、行业内幕 |

## 执行方式

**使用 Workflow 自动编排**（推荐）：

调用 Workflow 工具执行信号扫描编排，自动控制并发避免 API 限流：

```
Workflow({ name: "demand-discovery" })
```

可传入日期参数（默认当月）：
```
Workflow({ name: "demand-discovery", args: { date: "2026-06-27" } })
```

Workflow 完成后会自动：
1. 在 12 个信号源组中并行扫描（受控并发，不超过 RPM 限制）
2. 交叉分析所有信号，识别多渠道验证的高价值模式
3. 撰写完整报告并更新累积机会库

**手动执行**（备用）：

如需更细粒度控制，可按以下步骤手动执行。

## 工作流（手动模式）

```
Task Progress:
- [ ] 1. 产品市场信号扫描（Product Hunt / AppSumo / Upwork / Kickstarter / Gumroad / Zapier·Make / Udemy / Shopify / 淘宝·闲鱼 / ClawHub）
- [ ] 2. 痛点信号扫描（Reddit / HN / Twitter / Indie Hackers / Substack / Stack Overflow / YouTube / Discord / 知乎 / 小红书 / V2EX / 少数派）
- [ ] 3. 行业趋势扫描（Google Trends / GitHub Trending / HF Models & Datasets / Luma / 智源社区 / arXiv / AI媒体 / 新政策 / AI技术突破 / 融资 / YC·奇绩创坛 / 顶级VC / 博客 / 播客）
- [ ] 4. 交叉分析：提取共性需求模式
- [ ] 5. 机会评估与排序
- [ ] 6. 撰写每日需求发现报告
- [ ] 7. 更新累积机会库
```

### Step 1：产品市场信号扫描

**搜索关键词组合**（每组取 Top 5-10 结果）：

```
Product Hunt:
- "Product Hunt" AI tools launched this week {year} {month}
- "Product Hunt" most upvoted AI {current_month}
- site:producthunt.com AI SaaS {year}

AppSumo:
- site:appsumo.com AI tools best selling {year}
- AppSumo lifetime deal AI {current_month}

Upwork/Fiverr:
- site:upwork.com AI automation most hired {year}
- site:fiverr.com AI services trending
- "looking for AI" OR "need AI tool" site:upwork.com

Chrome Web Store:
- site:chromewebstore.google.com AI productivity {year}

Kickstarter:
- site:kickstarter.com/projects technology AI {year}
- site:kickstarter.com "most funded" technology {current_month}
- Kickstarter trending AI tech hardware {current_month} {year}

Gumroad / LemonSqueezy:
- site:gumroad.com AI template OR tool best selling {year}
- site:gumroad.com "top products" AI {current_month} {year}
- site:lemonsqueezy.com AI tool OR plugin {year}
- Gumroad trending AI digital products {current_month} {year}

Zapier / Make 集成市场:
- site:zapier.com/apps popular integrations AI {year}
- site:make.com/en/integrations AI automation {year}
- Zapier most popular AI integrations {current_month} {year}

Udemy / Skillshare:
- site:udemy.com AI tool course best seller {year}
- site:udemy.com automation workflow highest rated {year}
- Udemy best selling AI course {current_month} {year}

Shopify App Store:
- site:apps.shopify.com AI {year}
- Shopify app store AI best selling {current_month} {year}
- Shopify AI app most reviews {year}

淘宝 / 闲鱼:
- 淘宝 AI 代做 OR AI 工具 热销 {year}
- 闲鱼 AI 服务 OR AI 代做 {current_month} {year}
- site:taobao.com AI 工具 模板 {year}

ClawHub:
- site:clawhub.ai most downloaded skills {current_month} {year}
- site:clawhub.ai AI agent skill trending {year}
- ClawHub OpenClaw popular skills AI {current_month} {year}
```

**提取模板**：

```markdown
### [产品名](链接)
- **解决的问题**：一句话
- **目标用户**：谁在用
- **商业模式**：订阅/一次性/免费增值
- **热度指标**：投票数/评论数/销量
- **AI 从业者启示**：能做更好的版本吗？能做垂直版吗？能做中国版吗？
```

### Step 2：痛点信号扫描

**搜索关键词组合**：

```
Reddit:
- site:reddit.com "I wish there was" AI tool {year}
- site:reddit.com "frustrated with" SaaS {year}
- site:reddit.com "anyone know a tool" automation {year}
- site:reddit.com/r/SaaS "idea" OR "built" {current_month}
- site:reddit.com/r/startups "looking for" OR "need help" {current_month}

Hacker News:
- site:news.ycombinator.com "Ask HN" AI tool {current_month}
- site:news.ycombinator.com "Show HN" AI {current_month}

Twitter/X:
- "AI tool" "wish" OR "need" OR "looking for" {year}
- "workflow" "automate" "pain" OR "tedious" {year}

Indie Hackers:
- site:indiehackers.com "building" OR "launched" AI {current_month}
- site:indiehackers.com "revenue" OR "MRR" AI tool {year}
- site:indiehackers.com "idea validation" OR "what to build" {year}
- site:indiehackers.com "problem" OR "pain point" SaaS {current_month}

Substack:
- site:substack.com AI startup opportunities {current_month} {year}
- site:substack.com "indie hacker" OR "solo founder" AI {year}
- site:substack.com SaaS "market gap" OR "underserved" {year}

知乎 / 即刻:
- site:zhihu.com "有没有AI工具" OR "太麻烦了" {year}
- site:okjike.com AI 效率工具 {year}

Stack Overflow:
- site:stackoverflow.com [ai] OR [automation] "how to" frequently asked {year}
- site:stackoverflow.com "is there a tool" OR "looking for a library" AI {year}
- site:stackoverflow.com AI workflow automation highest votes {year}

YouTube:
- YouTube AI tool tutorial most viewed {current_month} {year}
- YouTube "AI workflow" automation tutorial {year}
- site:youtube.com AI tool review {current_month} {year}

Discord / Slack 社区:
- discord AI tool community "feature request" OR "wish" {year}
- "discord.gg" AI tool users feedback {current_month} {year}
- Slack community AI tools "pain point" OR "workaround" {year}

小红书:
- site:xiaohongshu.com AI工具 推荐 OR 吐槽 {year}
- site:xiaohongshu.com 效率工具 "太难用" OR "有没有" {year}
- 小红书 AI 办公工具 推荐 {current_month} {year}

V2EX:
- site:v2ex.com AI 工具 推荐 OR 求推荐 {year}
- site:v2ex.com "有没有" 自动化 OR 效率 工具 {year}
- site:v2ex.com 开发工具 痛点 OR 吐槽 {year}

少数派:
- site:sspai.com AI 效率工具 测评 {year}
- site:sspai.com "不推荐" OR "缺点" OR "替代" 工具 {year}
- site:sspai.com 自动化 workflow 工具 {current_month} {year}

竞品差评:
- site:g2.com AI tool reviews "cons" OR "dislike" {year}
- site:capterra.com AI software reviews "cons" OR "missing" {year}
- AI tool "1 star" OR "2 stars" review site:apps.apple.com {year}
- AI tool "1 star" OR "2 stars" review site:play.google.com {year}
- "switched from" OR "alternative to" AI tool {current_month} {year}
```

**提取模板**：

```markdown
### 痛点 #N：[一句话描述]
- **来源**：[链接](url) · {date}
- **用户原话**：「...」
- **受众规模估计**：小众 / 中等 / 大众
- **现有解决方案**：有但不好 / 没有 / 太贵
- **AI 可解决程度**：高 / 中 / 低
```

### Step 3：行业趋势扫描

**搜索关键词组合**：

```
Google Trends:
- 使用 WebFetch 访问 trends.google.com 查询 Top 3 机会的关键词趋势
- 对比关键词：[机会关键词] vs [竞品关键词]，确认需求是上升还是下降
- 关注地域分布：哪些国家/地区搜索量最高 → 优先市场选择

GitHub Trending:
- github trending repositories today {current_month} {year}
- github.com/trending AI machine-learning {current_month}
- GitHub trending "most starred" AI tool {current_month} {year}

Hugging Face Models:
- site:huggingface.co/models trending {current_month} {year}
- Hugging Face new model release {current_month} {year}
- "hugging face" most downloaded model {current_month} {year}

Hugging Face Datasets:
- site:huggingface.co/datasets trending {current_month} {year}
- "hugging face" new dataset {current_month} {year}
- Hugging Face dataset most downloaded {year}

Luma 活动:
- site:lu.ma AI event {current_month} {year}
- site:lu.ma tech meetup AI {current_month} {year}
- lu.ma popular AI events upcoming {year}

智源社区:
- site:hub.baai.ac.cn AI 热门论文 OR 热门项目 {current_month} {year}
- site:hub.baai.ac.cn 大模型 新能力 OR 突破 {year}
- site:hub.baai.ac.cn 风云榜 AI {current_month} {year}

arXiv:
- site:arxiv.org AI agent framework {current_month} {year}
- site:arxiv.org "large language model" application new {current_month} {year}
- site:arxiv.org multimodal AI practical {current_month} {year}
- arxiv AI tool automation new paper {current_month} {year}

新政策/法规:
- new regulation AI {year} {current_month} compliance
- 新政策 AI 合规 {year}

AI 技术突破:
- AI breakthrough new capability {current_month} {year}
- new AI API feature {current_month} {year}

中文 AI 媒体（机器之心 / 量子位 / 新智元）:
- site:jiqizhixin.com AI 产品 OR 应用 {current_month} {year}
- site:qbitai.com AI 工具 OR 新产品 {current_month} {year}
- site:xinzhiyuan.com AI 技术突破 OR 新模型 {current_month} {year}
- 机器之心 OR 量子位 OR 新智元 AI 创业 产品 {current_month} {year}

融资动态:
- AI startup funding {current_month} {year} seed series-a
- site:crunchbase.com AI startup funding {year}
- site:techcrunch.com AI startup raised funding {current_month} {year}
- site:cbinsights.com AI funding report {year}
- AI 创业 融资 {current_month} {year} site:36kr.com
- site:itjuzi.com AI 融资 {current_month} {year}
- AI SaaS startup funding round {current_month} {year}
- "seed round" OR "series a" AI tool {current_month} {year}

顶级孵化器:
- site:ycombinator.com/companies AI {year}
- "Y Combinator" batch AI startup {current_month} {year}
- YC demo day AI {year}
- site:miracleplus.com AI 项目 {year}
- 奇绩创坛 AI 创业项目 {current_month} {year}
- 奇绩创坛 demo day {year}

顶级 VC:
- site:a16z.com AI portfolio {year}
- site:sequoiacap.com AI investment {year}
- a16z OR Sequoia OR Benchmark AI investment {current_month} {year}
- 红杉中国 OR 高瓴 AI 投资 {current_month} {year}
- top VC AI portfolio companies {year}

高质量博客:
- site:a16z.com/blog AI {current_month} {year}
- site:paulgraham.com {year}
- site:lennysnewsletter.com AI OR SaaS {current_month} {year}
- site:stratechery.com AI {current_month} {year}
- site:notboring.co AI {current_month} {year}

高质量播客:
- "Acquired" podcast AI {current_month} {year}
- "All-In Podcast" AI startup {current_month} {year}
- "My First Million" AI business idea {current_month} {year}
- "20VC" AI startup founder {current_month} {year}
- 硅谷101 AI 创业 {current_month} {year}
- 声动早咖啡 AI {current_month} {year}
- 信号与噪声 播客 AI {current_month} {year}
```

### Step 4：交叉分析

将三层信号交叉对比，提取共性模式：

1. **多渠道验证**：同一个需求在 ≥2 个渠道出现 → 高价值信号
2. **供需缺口**：有大量抱怨但没有好的解决方案 → 蓝海机会
3. **技术时机**：AI 新能力 + 长期存在的痛点 → 时机到了
4. **付费验证**：Upwork/Kickstarter/Gumroad/淘宝 等付费渠道已有人花钱买类似服务/产品 → 付费意愿确认
5. **定量验证**：Google Trends 显示关键词搜索量上升 → 需求正在增长
6. **中外对比**：海外有成功产品但中文市场空白（小红书/V2EX 无竞品讨论）→ 本地化机会
7. **开源信号**：GitHub Trending 出现相关工具但无商业化版本 → 产品化机会

### Step 5：机会评估与排序

对每个识别出的机会，用以下框架打分（1-5 分）：

| 维度 | 评估标准 |
|------|---------|
| **痛苦程度** | 用户有多痛？频率多高？ |
| **市场规模** | 潜在用户数 × 可能的客单价 |
| **竞争格局** | 现有方案多吗？好吗？护城河深吗？ |
| **AI 适配度** | AI 能比人做得更好/更快/更便宜多少？ |
| **MVP 难度** | 一个人 + AI 能在多久内做出可用版本？ |
| **可防御性** | 做出来后别人抄的难度 |

**综合得分 = 痛苦 × 市场 × AI适配 / (竞争 × 难度)**

### Step 6：撰写报告

报告落盘路径：`reports/{YYYY-MM-DD}/demand-discovery-report.md`

**报告模板**：

```markdown
# 每日需求发现报告 — {YYYY-MM-DD}

> 本报告由 AI 系统性扫描多渠道信号生成，仅供创业参考。

## 📊 今日概览

- 扫描渠道数：N
- 发现有效信号：N 条
- 识别潜在机会：N 个
- 今日最佳机会：[名称]

## 🏆 Top 3 机会（按综合得分排序）

### 机会 1：[名称]
- **一句话**：[用一句话说清楚这是什么产品]
- **目标用户**：[谁会用]
- **痛点来源**：[链接1] [链接2]
- **市场验证**：[已有付费行为 / 竞品差评 / 社区高互动]
- **竞品分析**：[现有方案及其不足]
- **AI 优势**：[为什么 AI 能做得更好]
- **MVP 方案**：[最小可行产品怎么做，需要多久]
- **商业模式**：[怎么收钱]
- **综合得分**：X.X / 5.0

### 机会 2：...
### 机会 3：...

## 📡 信号雷达

### 产品市场信号
（Step 1 的发现）

### 痛点信号
（Step 2 的发现）

### 行业趋势
（Step 3 的发现）

## 🔗 交叉验证的高价值信号
（Step 4 的发现）

## 📈 累积趋势
- 连续 N 天出现的需求主题：...
- 本周新增 vs 上周：...

## ⚠️ 免责声明
本报告由 AI 自动生成，信息来源于公开渠道，可能存在遗漏或偏差。
所有分析仅供参考，不构成商业决策建议。
```

### Step 7：更新累积机会库

维护 `reports/_opportunity-tracker/opportunities.md`：

```markdown
# 累积机会追踪

| 日期 | 机会名称 | 综合得分 | 出现次数 | 状态 |
|------|---------|---------|---------|------|
| ... | ... | ... | ... | 待验证/已验证/已放弃/正在做 |
```

**规则**：
- 同一机会在多日报告中出现 → 出现次数 +1，得分取最高
- 出现次数 ≥ 3 → 标记为「值得深入研究」
- 用户手动标记「正在做」的机会，后续报告重点追踪其竞品动态

## 搜索与抓取规范

1. **使用 WebSearch 进行搜索**，每组关键词取 Top 5-10 结果
2. **使用 WebFetch 抓取关键页面**，提取用户原话和数据
3. **时效过滤**：优先最近 7 天内容，最多不超过 30 天
4. **去重**：同一产品/痛点出现在多个渠道只记录一次，但标注多渠道验证
5. **引用格式**：`[标题](url) · YYYY-MM-DD`

## 执行频率

- 建议每日或每周执行一次
- 每次执行前先读取最近 3 天的历史报告，避免重复且追踪趋势
- 使用 `/loop` 可设置定时执行
