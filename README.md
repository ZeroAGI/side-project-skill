# Side Project Skill

AI 驱动的副业/创业机会发现系统。

## 使用方法

在 Claude Code 中进入此项目目录，然后运行：

```bash
# 执行一次需求发现
/demand-discovery

# 设置每日自动执行（每天早上 9 点）
/loop 24h /demand-discovery
```

## 产出

- `reports/{YYYY-MM-DD}/demand-discovery-report.md` — 每日需求发现报告
- `reports/_opportunity-tracker/opportunities.md` — 累积机会追踪表

## 信号源

1. **产品市场信号** — Product Hunt, AppSumo, Upwork/Fiverr, Chrome Web Store
2. **痛点信号** — Reddit, Hacker News, Twitter/X, 知乎, 即刻, 竞品差评
3. **行业趋势** — 新政策法规, AI 技术突破, 融资动态

## 评估框架

每个机会按 6 个维度打分：痛苦程度、市场规模、竞争格局、AI 适配度、MVP 难度、可防御性。
