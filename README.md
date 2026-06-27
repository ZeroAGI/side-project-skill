# Side Project Skill

AI 驱动的副业/创业机会发现系统 — 系统性发现「谁在为什么痛苦付钱」，为 AI 从业者找到可用 AI 解决的产品化机会。

## 核心原则

1. **从痛点出发，不从技术出发** — 先发现问题，再想 AI 怎么解决
2. **可验证性** — 每个需求必须有来源链接、用户原话或数据支撑
3. **可执行性** — 每个机会要评估：市场大小、竞争格局、AI 可行性、MVP 难度
4. **落盘存档** — 所有产出写入 `reports/` 目录，累积追踪

## 使用方法

在 Claude Code 中进入此项目目录，然后运行：

```bash
# 执行一次需求发现（自动使用 Workflow 并行扫描）
/demand-discovery

# 设置每日自动执行
/loop 24h /demand-discovery
```

## 系统架构

```
/demand-discovery
    ↓
Workflow 编排（14 个 Agent 并行）
    ↓
┌─────────────────────────────────────────────┐
│  Phase 1: Signal Scan（12 组信号源并行扫描）    │
│  ├── Product Hunt & AppSumo                  │
│  ├── Upwork, Fiverr & Gumroad               │
│  ├── Kickstarter & Shopify App Store         │
│  ├── Zapier/Make, Udemy & Chrome Extensions  │
│  ├── Reddit Pain Points                      │
│  ├── Hacker News & Indie Hackers            │
│  ├── Stack Overflow & YouTube               │
│  ├── 中文市场（知乎/小红书/V2EX/少数派/淘宝）    │
│  ├── GitHub Trending & Hugging Face         │
│  ├── 融资动态 & 顶级 VC                       │
│  ├── arXiv & AI 技术突破                      │
│  └── 博客/播客/政策/竞品差评                    │
├─────────────────────────────────────────────┤
│  Phase 2: Cross Analysis（交叉分析 + 评分）     │
├─────────────────────────────────────────────┤
│  Phase 3: Report（报告撰写 + 机会库更新）        │
└─────────────────────────────────────────────┘
    ↓
reports/2026-06-27/demand-discovery-report.md
reports/_opportunity-tracker/opportunities.md
```

## 信号源矩阵（30+ 渠道）

### 第一层：看别人在为什么付钱（产品市场信号）

| 渠道 | 提取信息 |
|------|---------|
| Product Hunt | 近 7 天上线的 AI 产品、投票数、评论热度 |
| AppSumo | 热卖 SaaS deals、品类、销量 |
| Upwork / Fiverr | 被重复购买的 AI 服务 → 可产品化信号 |
| Kickstarter | 众筹达成率 → 付费意愿最直接的证据 |
| Gumroad / LemonSqueezy | 独立开发者数字产品销量 → 已验证的微产品付费意愿 |
| Zapier / Make | 高频自动化集成 → 自动化痛点 = 产品化机会 |
| Udemy / Skillshare | AI/SaaS 课程畅销榜 → 需求热度验证 |
| Shopify App Store | 商家付费插件 → B2B 电商刚需 |
| 淘宝 / 闲鱼 | AI 代做、模板、工具类 → 中文市场付费验证 |
| Chrome Web Store | 近期高增长扩展 → 浏览器生态机会 |

### 第二层：看别人在抱怨什么（痛点信号）

| 渠道 | 提取信息 |
|------|---------|
| Reddit | 「I wish...」「frustrated with...」高互动帖 |
| Hacker News | Show HN / Ask HN 热帖讨论 |
| Indie Hackers | 独立开发者验证了什么、踩了什么坑 |
| Stack Overflow | 高频重复提问 = 可产品化的开发工具机会 |
| YouTube | 高观看量教程 = 需求规模；评论区吐槽 = 真实痛点 |
| 知乎 / 即刻 / 小红书 / V2EX / 少数派 | 中文市场独特痛点 |
| G2 / Capterra / App Store 差评 | 现有方案的核心缺陷 |

### 第三层：看行业趋势（结构性机会）

| 渠道 | 提取信息 |
|------|---------|
| GitHub Trending | 星标增速 → 开发者在造什么 = 技术方向信号 |
| Hugging Face Models & Datasets | 新模型能力 = 新产品可能 |
| arXiv | 最前沿技术突破 → 6-12 个月后可产品化 |
| TechCrunch / Crunchbase | 钱流向哪 = 市场验证 |
| Y Combinator / 奇绩创坛 | 入选项目 = 顶级投资人验证过的方向 |
| a16z / Sequoia / 红杉中国 | VC 投资组合 + 研究报告 → 聪明钱的赛道判断 |
| 高质量博客 & 播客 | 顶级投资人/创业者的深度思考 |
| 新政策法规 | 合规刚需 = 强付费意愿 |
| 机器之心 / 量子位 / 新智元 | 中文视角 AI 行业解读 |

## 评估框架

每个机会按 6 个维度打分（1-5 分），交叉分析识别 7 类高价值模式：

| 维度 | 评估标准 |
|------|---------|
| 痛苦程度 | 用户有多痛？频率多高？ |
| 市场规模 | 潜在用户数 × 可能的客单价 |
| 竞争格局 | 现有方案多吗？好吗？护城河深吗？ |
| AI 适配度 | AI 能比人做得更好/更快/更便宜多少？ |
| MVP 难度 | 一个人 + AI 能在多久内做出可用版本？ |
| 可防御性 | 做出来后别人抄的难度 |

**交叉验证模式**：多渠道验证 · 供需缺口 · 技术时机 · 付费验证 · 定量验证 · 中外对比 · 开源信号

## 产出

```
reports/
├── 2026-06-26/
│   ├── demand-discovery-report.md      # 每日报告
│   ├── demand-discovery-10channels.md  # 扩展渠道报告
│   └── trend-research-report.md        # 趋势研究
├── 2026-06-27/
│   └── demand-discovery-report.md      # 每日报告（93信号, 97K字符）
└── _opportunity-tracker/
    └── opportunities.md                # 累积机会库（32个机会追踪中）
```

## 当前追踪的 Top 机会

| 机会 | 得分 | 出现次数 | 状态 |
|------|------|---------|------|
| AI 代码验证与安全层 | 4.7 | 2 | 7渠道验证 |
| AI 跨工具记忆层 | 4.7 | 3 | ⭐ 值得深入研究 |
| AI 多模型韧性代理 | 4.7 | 3 | ⭐ 值得深入研究 |
| AI 合规工具 EU AI Act | 4.6 | 3 | ⭐ 紧急 |
| AI Agent 基础设施平台 | 4.6 | 2 | 整合叙事 |
| AI Agent SEO / GEO | 4.5 | 4 | ⭐ 连续4次 |

> 完整列表见 [opportunities.md](reports/_opportunity-tracker/opportunities.md)

## 项目结构

```
.claude/
├── skills/demand-discovery/SKILL.md   # Skill 定义（信号源 + 搜索关键词 + 报告模板）
├── workflows/demand-discovery.js       # Workflow 编排脚本
└── settings.json                       # Claude Code 配置
```

## 免责声明

本系统由 AI 自动生成报告，信息来源于公开渠道，可能存在遗漏或偏差。所有分析仅供创业参考，不构成商业决策建议。
