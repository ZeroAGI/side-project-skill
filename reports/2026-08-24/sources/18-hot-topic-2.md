# 18 — 热点深挖: 「Harness 才是主角」范式转移（Nvidia 研究 + OpenAI 开源 Codex Harness） 2026-08-24

> 组内信号：5 条 | 二手转述：4 条（80%）
> 最强证据线：OpenAI Codex 在 GitHub 以 Apache-2.0 开源（116k stars，17.7k forks），含 codex-cli/codex-rs/sdk 三层结构，直接印证「harness 可独立产品化」论点；Nvidia ARC-AGI-3 100% 研究因渠道故障未能一手核实（secondhand）。
> 渠道故障：WebSearch 全场污染（返回 billing-header GitHub issues，与查询完全无关）；arcprize.org 服务器错误；openai.com/index/codex 403；news.ycombinator.com 连接拒绝；reddit.com 被阻；arxiv.org 零结果。共 6 条渠道失效，仅 github.com/openai/codex 一手核实。

---

## 1. OpenAI Codex 以 Apache-2.0 开源，含 CLI/Rust/SDK 三层脚手架
- **type**: trend | **platform**: GitHub | **secondhand**: false
- **source_url**: https://github.com/openai/codex
- **source_date**: 空（持续更新仓库） | **fetched_at**: 2026-08-24
- **metrics**: 116,000 stars；17,700 forks；Apache-2.0 许可
- **description**: 仓库含 codex-cli（TypeScript 命令行层）、codex-rs（Rust 实现）、sdk 目录，明确拆分为多语言脚手架而非单体 CLI。README 定位为「在本地终端运行的 coding agent」，通过 ChatGPT Plus/Pro/Business/Edu/Enterprise 账号或 API key 认证。三层目录结构直接暴露 harness 可独立拆解的产品化路径：CLI 层、底层运行时（Rust）、SDK 各自可被第三方复用或替换。
- **user_quote**: "Lightweight coding agent that runs in your terminal."（README 首句）
- **top_comments**: 无（GitHub Issues/Discussions 未能访问）
- **ai_opportunity**: codex-rs 的 Rust 运行时层、sdk 目录均可被独立集成到第三方 harness 框架；内存管理和 supervisor 组件若不在 codex 主仓，则形成明确产品空白——可构建兼容 Codex SDK 的记忆层中间件。

---

## 2. Nvidia 研究：自研 harness 让 Claude Opus 5 在 ARC-AGI-3 拿到 100%
- **type**: trend | **platform**: 学术/研究媒体 | **secondhand**: true
- **source_url**: https://arcprize.org/blog
- **source_date**: 2026-08-21 前后 | **fetched_at**: 2026-08-24
- **metrics**: ARC-AGI-3 得分 100%（harness 加持下）；裸模型基准成绩远低于此
- **description**: 本条来自编排层提供的事件摘要，未能一手核实（arcprize.org 服务器错误）。据摘要：Nvidia 8/21 研究显示，自研包含记忆管理+supervisor 的 harness 框架，使 Claude Opus 5 在 ARC-AGI-3 满分；结论是长程任务表现取决于 harness 设计而非底层模型能力。这是本组最强信号的核心论点，但需一手核实。
- **user_quote**: 无（未能访问原始来源）
- **top_comments**: 无
- **ai_opportunity**: 若结论成立，「记忆管理+supervisor」作为独立中间层的市场价值得到学术背书，可针对已有强基础模型的团队构建即插即用的 harness SDK。

---

## 3. 「Harness > Model」范式转移：脚手架层的产品机会窗口
- **type**: trend | **platform**: 研究/科技媒体 | **secondhand**: true
- **source_url**: https://openai.com/blog
- **source_date**: 2026-08-21 前后 | **fetched_at**: 2026-08-24
- **metrics**: 无可核实数字（渠道故障）
- **description**: 来自编排层事件摘要。同周内两件事并发：Nvidia ARC-AGI-3 研究证明 harness 决定上限；OpenAI 将 Codex Harness 平台组件开源。两件事共同指向产品机会从「更好模型」转移到「更好脚手架」——记忆层、supervisor、评测/回放工具均是可独立产品化的层。信号强度因无法一手核实而打折。
- **user_quote**: 无
- **top_comments**: 无
- **ai_opportunity**: 三个可独立产品化层：(1) 记忆管理层（跨会话上下文持久化）；(2) supervisor 层（任务分解+错误恢复+重试逻辑）；(3) 评测/回放工具（harness 调试与性能基准）。Indie builder 进入成本最低的是第三层（无需生产环境部署）。

---

## 4. 记忆管理与 supervisor 层的产品空白
- **type**: pain_point | **platform**: GitHub | **secondhand**: true
- **source_url**: https://github.com/openai/codex
- **source_date**: 空 | **fetched_at**: 2026-08-24
- **metrics**: Codex README 未提及 memory management；sdk 目录存在但内容未能获取
- **description**: 从 Codex README（一手核实）和 codex-rs 目录结构推断：开源版本定位为「轻量级」，Memory management 和 supervisor 逻辑未在 README 中出现，暗示这是刻意留白或企业版功能。结合 Nvidia 研究（二手），「轻量 CLI + 无记忆管理」之间的 gap 正是可填补的产品层。
- **user_quote**: 无（GitHub Issues 未能访问）
- **top_comments**: 无
- **ai_opportunity**: 为 Codex CLI 或任意 agent harness 构建兼容的记忆中间层（持久化上下文、任务历史、跨会话记忆）；SaaS 定价可按「记忆存储量 + 检索调用次数」收费。

---

## 5. Agent 评测与回放工具缺口
- **type**: pain_point | **platform**: 开发者社区（推断） | **secondhand**: true
- **source_url**: https://github.com/openai/codex
- **source_date**: 空 | **fetched_at**: 2026-08-24
- **metrics**: 无可核实数字
- **description**: 从 Codex 开源结构（一手）和 Nvidia 研究（二手）推断：当 harness 设计成为性能决定因素，开发者需要工具来评测不同 harness 配置的效果、回放失败的 agent 轨迹、对比 supervisor 策略。Codex README 未提供此类工具，ARC-AGI-3 作为公开基准也仅测最终结果而非过程。「harness 调试器/回放器」是尚未被主流产品覆盖的层。
- **user_quote**: 无
- **top_comments**: 无
- **ai_opportunity**: 构建 agent trace 回放 + harness 性能对比平台：录制 agent 执行轨迹（tool calls、memory reads、supervisor 决策），支持步进回放和差异对比；可作为开源工具起步，Pro 层提供托管回放存储和团队协作。
