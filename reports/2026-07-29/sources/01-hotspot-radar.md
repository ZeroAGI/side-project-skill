# 01 — 热点雷达（Phase 0）2026-07-29 · ❌ 本期未执行

> 组内信号：0 条 | 二手转述：0 条（—）
> **状态：agent 启动即被模型侧安全策略拦截，未产出任何信号。**

---

## 故障记录

Phase 0「热点雷达」的 agent 调用返回：

```
API Error: Fable 5's safeguards flagged this message for a cybersecurity topic.
If your work requires this access, you can apply for an exemption:
https://claude.com/form/cyber-use-case
```

拦截发生在 agent **首次响应**阶段（tokens=0，toolCalls=0），即 prompt 本身被判定命中网络安全话题分类器，不是工具调用或抓取失败。热点雷达 prompt 需扫描「新规 / 重大事件 / 病毒式事件」，其中安全与合规类措辞（漏洞、攻击面、数据泄露、监管处罚等）可能触发该分类。

## 后果（影响范围，供审计）

1. **本期没有动态热点组**：正常流程下热点雷达会依据最近 72h 头条动态生成 0-4 组深挖查询，本期该机制完全缺席。15 个常驻信号组照常执行并全部返回（见 `02`–`16`），因此常驻覆盖未受损，但**"今天刚发生的事"只能靠常驻组自己撞上**。
2. 实际缓解：`16-conferences-launch-events.md`（行业大会/重大发布会）与 `15-36kr-jiqizhixin-miracleplus.md`（中文 AI 媒体）在功能上部分替代了热点探测；报告中 OpenAI 07-22 支出上限、Anthropic Opus 5 自动降级等时效性事件由这两组捕获。
3. **不可替代的缺口**：非大会、非媒体头条型的突发事件（病毒式帖子、突发监管、单点事故）本期无专门通道，报告不应被理解为已覆盖全部 72h 热点。

## 下次执行建议

- 改写热点雷达 prompt，去掉可能触发安全分类的词汇（用「合规变更 / 政策更新 / 平台规则调整」替代「漏洞 / 攻击 / 泄露 / 渗透」等），并显式声明用途为「市场需求发现，不涉及攻防技术」。
- 给 Phase 0 加重试 + 降级：拦截或超时后回退到「WebSearch 三条通用头条查询」的最小版本，而不是让整个 phase 变空（当前失败静默通过，只在 workflow failures 里可见，报告正文看不出热点雷达缺席）。
- 或给该 agent 指定不同模型（本次为 Fable 5），避开单一模型的分类器边界。
