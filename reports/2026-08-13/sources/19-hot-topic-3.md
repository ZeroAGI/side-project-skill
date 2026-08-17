# 19 — 热点深挖: 国产大模型换挡：Qwen3.8 发布并开源 Max 旗舰 + DeepSeek 涨价 2026-08-13

> 组内信号：9 条 | 二手转述：6 条（67%）
> 最强证据线：Hugging Face 一手确认 Qwen3.8-Max 权重（Qwen3.8-2.4T-A95B）已于 08-12 落地、但带自定义 license 且自托管版功能缩水（无多模态、262K 上下文、思考不可关）；叠加 DeepSeek 08-06「涨幅较大」公告与 V2EX/微博/掘金一手开发者原话，自托管 vs API 成本决策被同一周内两头改写。渠道故障：news.ycombinator.com 直连 ECONNREFUSED（两次），已用 hn.algolia.com API 成功替代抓取；WebSearch 本组无污染迹象，结果均与查询强相关。

---

## 1. Qwen3.8-Max 开源权重落地 HF：名为 Qwen3.8-2.4T-A95B，自定义 license，自托管版功能显著缩水
- **type**: trend | **platform**: huggingface | **secondhand**: false
- **source_url**: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
- **source_date**: 2026-08-12 | **fetched_at**: 2026-08-13
- **metrics**: 2.4T 总参 / 95B 激活（512 专家，10 路由+1 共享，92 层）；原生上下文 262,144 token，「可扩展至 1,010,000」；BF16 + FP8 两个仓库，更新于约 22 小时前；978 次下载/月、633 likes、2 个微调、10 个量化版、1 个 Space
- **description**: Alibaba 兑现了 08-03 承诺（迟约 2 天），首次开源 Max 级旗舰权重，但差异表格值得所有想自托管的团队细读：开源版是纯文本（「Multimodal inputs are not supported」）、默认 262K 而非 API 版的 1M 上下文、思考模式强制开启（「thinking cannot be disabled」）、无内置工具。License 字段是自定义的 `qwen3.8-max` 而非 Qwen 3.5/3.6 的 Apache 2.0——商用/再分发/微调归属均需读原文确认。模型卡未给任何 GPU 数量/硬件规格，只推荐 vLLM/SGLang/TokenSpeed。承诺同步开源的 Qwen3.8-27B 截至抓取时仍未出现在 Qwen org。
- **user_quote**: "Multimodal inputs are not supported... thinking cannot be disabled"（模型卡原文）
- **top_comments**: （模型卡无评论区；社区反应见信号 2/6）
- **ai_opportunity**: ①「开源版 vs API 版能力差异审计器」：自动 diff 模型卡与 API 文档，输出迁移前 checklist（多模态缺失、上下文缩水、license 变更均是踩坑点）；②自定义 LLM license 合规解读工具（qwen3.8-max、Kimi K3 custom、GLM MIT 各不相同，法务盲区明显）

## 2. Qwen3.8-Max 发布日全景：$2/$6 定价对齐 Opus 4.7 分数但便宜 2.3 倍，「开源 Max」被解读为 DeepSeek/Kimi 侵蚀 API 独占溢价的结果
- **type**: trend | **platform**: newsletter (Latent Space, 聚合 X) | **secondhand**: true
- **source_url**: https://www.latent.space/p/ainews-qwen-38-max24t-and-27b-new
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-13
- **metrics**: 发布推文 4.96M 浏览、1.04K 回复、20.1K 赞；定价 $2.00/M 输入、$6.00/M 输出、$0.25/M 缓存（较 3.7 Max 的 $2.50/$7.50 降 20%）；Vals Index 66.1 = 开源第 2、总榜第 10/43，与 Claude Opus 4.7 打平但单测成本 $2.68 vs $6.17；SWE-bench 87.3%（Opus 4.8 为 89.2%）；激活比仅 ~4%（235B-A22B 为 ~10%）
- **description**: 08-03 发布，1M 上下文、128K 输出、low/medium/xhigh 三档推理、同时兼容 OpenAI 和 Anthropic 协议（迁移摩擦刻意做低）。关键行业判断来自 @ZhihuFrontier：DeepSeek 和 Kimi 已把「顶级模型只走 API」的溢价打掉，逼阿里改打生态覆盖而非独占。注意 license 疑云：@ostrisai 读条款认为美/欧/英/韩可能禁用甚至禁下载，无官方澄清。
- **user_quote**: "The open weights frontier has been consistently dominated by labs from China for the last two years"（@_micah_h, X）
- **top_comments**:
  - [X @jaminball] token-price comparisons ignore token efficiency（转述：K3 类 ~104B 激活模型仅权重就超 1TB 内存、至少 8 张 H100/B200，Moonshot 建议 64+ 加速卡超节点）
  - [X @nrehiew_] 质疑增益来自 post-training recipe 而非规模
  - [X @scaling01] 开源在顶级 agentic coding 上 close but not there
- **ai_opportunity**: 双协议兼容（OpenAI+Anthropic）意味着「一键换后端」实测工具有需求：跑同一 eval 套件对比 Max vs Claude vs GPT 的真实 token 效率成本（而非牌价），正面回应 @jaminball 的批评

## 3. DeepSeek 08-06 公告「整体上调、涨幅较大」：全球调用量第一（OpenRouter 周 6.6 万亿 Token、58% 份额）却主动加价
- **type**: trend | **platform**: 澎湃/雷科技（转述 DeepSeek 后台公告） | **secondhand**: true
- **source_url**: https://m.thepaper.cn/newsDetail_forward_33740591
- **source_date**: 2026-08-09 | **fetched_at**: 2026-08-13
- **metrics**: 现价 V4-Flash 输入 ¥1（缓存命中 ¥0.02）/输出 ¥2 每百万 Token；V4-Pro ¥3/¥6；Artificial Analysis 单任务均价 V4-Flash ~$0.03 vs Kimi K3 $0.86、GPT-5.6 Sol $1.86、Claude Fable 5 $3.15；OpenRouter 周处理 ~6.6 万亿 Token（环比 -10%）居第一、占 ~58% 份额，6/12–8/6 累计 ~97 万亿 Token；同测试 DeepSeek 消耗 2.1 亿 Token vs Gemini 3.6 Flash High 5900 万（3.5 倍）
- **description**: 08-06 DeepSeek 在用户后台发公告称「近期将整体上调 API 定价」「预计涨幅较大」，未给具体数字，覆盖全时段全模型（区别于 6 月峰谷计费方案，后者至今未实施）。归因：十万卡级算力与 Google/OpenAI 不在同一量级、低价扭曲需求（「几毛钱跑一轮 debug」挤占复杂任务算力）、Token 消耗比同行高 3.5 倍。作者判断价格战不是结束而是「才正式开始」，竞争转向稳定性、速度与 B 端。
- **user_quote**: 「计划近期整体上调DeepSeek API服务的定价，预计涨幅较大，请合理安排您的使用。具体方案以正式通知为准。」（DeepSeek 官方公告原文，转引自掘金/澎湃）
- **top_comments**:
  - [V2EX] 「DeepSeek V4 Flash官方API上午几乎不可用，和Kimi K3刚发布时情况差不多」（08-04 故障）
- **ai_opportunity**: 「涨幅较大」但无具体数字 = 预算不确定性窗口：按不同涨幅情景（+50%/+100%/+200%）自动重算月账单并给出路由建议的模拟器，正中中小开发者当下焦虑

## 4. 开发者一手反应：微博话题 474 万热度，V2EX「且蹬且珍惜」，本地部署求配置帖出现
- **type**: pain_point | **platform**: V2EX/微博/掘金 | **secondhand**: true
- **source_url**: https://juejin.cn/post/7670727899905736745
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-13
- **metrics**: 微博话题 #DeepSeek计划大幅涨价# 热度 474 万；涨幅情景推演：+50% → 单任务 ~$0.045，+100% → ~$0.06，+200% → ~$0.09（现 ~$0.03）
- **description**: 涨价公告当天开发者社区的即时反应与应对策略。迁移意向已从情绪走向动作：V2EX 出现本地部署求配置帖；多模型路由被视为标配（简单任务 V4-Flash、复杂推理 V4-Pro/Kimi K3、特定场景 GPT-5.6/Claude）；其余应对是提升缓存命中率、接 2-3 家 API 备份、非紧急任务错峰。界面新闻引分析人士称调价对中小开发者 AI 创新项目「带来直接压力」。注意所有引语经掘金文章转述，未逐条回源。
- **user_quote**: 「深刻的感受到了deepseek对穷人的友好」（V2EX）
- **top_comments**:
  - [V2EX] 「且蹬且珍惜」
  - [V2EX] 「请教本地部署deepseek V4 flash大概需要什么样的配置需求」
  - [掘金评论区] 「智谱也涨了三轮了，现在DeepSeek也涨——接下来Qwen、字节、腾讯会跟吗？」
- **ai_opportunity**: 掘金评论「接下来谁跟涨」直接点出需求：国产大模型价格变更监控+推送（LiteLLM cost map 思路的中国区版），叠加「一键估算迁移到 Qwen3.8/GLM/Kimi 的月成本变化」

## 5. 国内集体涨价潮：智谱年内三涨（Q1 +83%）调用量反增 400%，Kimi K3 输入价较 K2.6 涨 3-4 倍
- **type**: trend | **platform**: 掘金（汇总） | **secondhand**: true
- **source_url**: https://juejin.cn/post/7670727899905736745
- **source_date**: 2026-08-06 | **fetched_at**: 2026-08-13
- **metrics**: 智谱 AI 年内三次上调、Q1 提价 83%、调用量仍增 400%；月之暗面 Kimi K3 输入 ¥20/百万、输出 ¥100/百万，较 K2.6 涨 3-4 倍；腾讯云连续两次涨价；豆包专业版订阅 ¥68/200/500 每月；MiniMax、阶跃星辰部分 API 上调；DeepSeek API 云服务 ARR 约 $4-5 亿、毛利率超 50%（该文测算）；高盛将 2026 年末中国大模型合计 ARR 预期由 $100 亿上调至 $130 亿
- **description**: DeepSeek 不是孤例——中国模型厂集体从「抢份额」切到「要毛利」。智谱提价 83% 后调用量仍增 400%，证明需求价格弹性远低于预期，这是「Token 价格战结束」论的最硬证据。对独立开发者的含义：API 成本从「可忽略」变成「需管理」的预算项。
- **user_quote**: 「调价也会对中小开发者的AI创新项目带来直接压力」（界面新闻引分析人士，转引自掘金）
- **top_comments**: （见信号 4）
- **ai_opportunity**: 「FinOps for AI」下沉到 indie 层：现有工具（Langfuse/LiteLLM/Portkey）面向团队，缺一个面向个人开发者的轻量成本仪表盘 + 涨价告警 + 自动降级路由

## 6. HN 一手用户声音：自托管经济账正被 DeepSeek 低价 API 反杀，「$5/月直连」vs 电费
- **type**: pain_point | **platform**: hackernews | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49150470
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-13
- **metrics**: 评论中实测数据：Strix Halo 跑 27B 级约 700 TPS prefill / 30 TPS 生成；32GB 内存机器夜间批量跑 3.6-27B/35B；OpenRouter+deepseek-v4-flash 轻度使用花约 $18；直连 DeepSeek API 全天用约 $5/月
- **description**: Qwen3.8-Max 发布日 HN 讨论（经 hn.algolia.com API 抓取，HN 直连被拒）。两条对立线索并存：一边是隐私驱动的自托管派（nozzlegear 因 Qwen3.6-35B 在 4 月退订 Claude；Aurornis 夜间本地批量跑任务「without data having left my house, all for the price of electricity」但认为代码输出基本不可用）；另一边 apexalpha 算账认为按其电价、自托管 Qwen 36B 比 DeepSeek 缓存价 API 更贵。DeepSeek 一涨价，这笔账全要重算——正是本热点的核心张力。simonw 还点出发布混乱：「So what are they releasing today?」（8/3 公告与 7/19 预览内容雷同）。
- **user_quote**: "what convinced me to cancel my Claude subscription back in April"（nozzlegear，谈 Qwen3.6-35B 日常使用）
- **top_comments**:
  - [HN apexalpha] 怀疑按其电价自托管 Qwen 36B 成本高于 DeepSeek 缓存 API 价
  - [HN Bayart] 直连 DeepSeek API 全天用约 "$5/month"
  - [HN badsectoracula] Kimi K3 "more like 'weights available'" 自定义条款，"GLM 5.2 on the other hand is plain old MIT"
- **ai_opportunity**: 「自托管 vs API 盈亏平衡计算器」：输入电价/硬件/日 token 量/隐私要求，输出各模型（含涨价情景）的真实月成本对比；HN 评论区里用户已在手算这笔账

## 7. LLM 成本监控工具层现空档：Helicone 被 Mintlify 收购后进入维护模式，LiteLLM cost map 成事实标准依赖
- **type**: product_market | **platform**: 多来源（vendor 博客汇总） | **secondhand**: true
- **source_url**: https://www.helicone.ai/blog/monitor-and-optimize-llm-costs
- **source_date**: | **fetched_at**: 2026-08-13
- **metrics**: 模型间价差跨度超 300 倍；同一 1 万工单量按模型选择成本 ~$10 到 $1,300+；Portkey 从 $49/mo 起；Helicone 2026-03 被 Mintlify 收购后仅安全/bug 修复
- **description**: 涨价潮把成本监控从 nice-to-have 变成刚需，但工具层正好出现空档：头部开源项目 Helicone 进入维护模式（多数推荐文尚未更新此事实，注意信息陈旧）；LiteLLM 的开源 model cost map 是全生态价格数据的事实标准依赖但更新靠社区。架构性缺口：网关只看得到请求路径、billing API 只暴露 account/project/key 粒度，per-feature 成本归因必须在请求路径内做。此组来源多为有利益关系的 vendor 博客（Maxim、SuperPenguin、Finout 等），已标 secondhand。
- **user_quote**: （无直接用户引语；本条为工具格局信号）
- **top_comments**: （无）
- **ai_opportunity**: ①接盘 Helicone 流失用户的迁移工具/托管替代；②「价格变更 diff 监控」独立服务：盯各家官方定价页+公告（DeepSeek 这种「预告但无数字」的模糊公告正是告警场景），比 LiteLLM cost map 的被动 PR 更新快一步
- 注：source_date 留空，Helicone 博文无明确日期且收购信息来自 2026-03；本条为多来源综合

## 8. 「Token 补贴终结」论：推理已占企业 AI 预算 85%，flat-fee 计划退场、surge pricing 被预言
- **type**: trend | **platform**: substack/独立博客 | **secondhand**: true
- **source_url**: https://ravoid.com/blog/token-surge-pricing/
- **source_date**: | **fetched_at**: 2026-08-13
- **metrics**: 推理占企业 AI 预算 85%（2023 年约 1/3）；token 价格同比降幅最高 80% 但总 GPU-hours 仍上升；2022 年末 $20/M 的能力现约 $0.40/M（~10x/年 性能等价降价）；Q1 2026 Anthropic/OpenAI 将企业客户转向按 token 计费、终止 flat-fee
- **description**: 与 DeepSeek 涨价互为印证的宏观论点：此前的价格通缩是资本补贴而非成本驱动（$200/月订阅用户消耗远超付费额），补贴退坡后下一阶段是「按需求/容量动态定价的 token surge pricing」。反方叙事同样在场：定制芯片（TPU/Trainium/Maia/MTIA）比 Nvidia 便宜 30-50%，价格战未完。注意多个来源是 GPU 市场 vendor 博客，有「推理需求爆炸」立场偏置。
- **user_quote**: （无直接引语）
- **top_comments**: （无）
- **ai_opportunity**: 若 surge pricing 成真，「错峰调度器」（把非紧急 LLM 批任务自动排到低价时段，类似电费谷时充电）从概念变刚需——DeepSeek 6 月已预告峰谷计费，中国市场先行验证
- 注：博文无明确发布日期，source_date 留空

## 9. 100 万上下文的应用面与国内定价断层：国内 API ¥12/¥36 vs 国际 $2/$6，Context Cache 成百万上下文成本命门
- **type**: trend | **platform**: 阿里云/千问平台（经媒体转述） | **secondhand**: true
- **source_url**: https://www.ithome.com/0/984/897.htm
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-13
- **metrics**: 国内定价每百万 Token 输入 ¥12、输出 ¥36、隐式缓存命中 ¥1.5（约 $1.67/$5，与国际价 $2/$6 接近但缓存价差大）；1M token ≈ 75 万英文词/50 万汉字；27B 稠密版 FP16 约 54GB 显存（2×A100 80G 或 4×RTX 4090）；官方称可独立完成约 16 天体量的完整项目开发
- **description**: 百万上下文的开发者落地方向：整仓库级编程 Agent、200 页财报跨页理解、100 小时长视频组织为可检索 Graph 记忆、长程自我纠错任务。配套能力里 Context Cache（缓存长上下文公共前缀）被点名为百万上下文场景的成本命门——不做缓存优化，1M 上下文单次调用输入成本即 ¥12。注意 08-12 开源的自托管版仅 262K 原生上下文且无多模态（见信号 1），「1M+多模态」实为 API 独占能力。
- **user_quote**: 「原生支持 128K 上下文并可无损扩展至 100 万 Token」（官方描述，经媒体转述）
- **top_comments**: （无）
- **ai_opportunity**: 长上下文成本优化器：自动识别 prompt 公共前缀并管理 Context Cache 命中率的中间件；以及「1M 上下文真实有效性」独立评测（大海捞针之外的整仓任务实测），发布方自证数据缺第三方验证
