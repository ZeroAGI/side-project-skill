# 19 — 热点深挖: 中国开源模型登顶全球 + 新一轮模型密集发布（DeepSeek V4 / GLM-5.2 / Kimi K3） 2026-08-04

> 组内信号：10 条 | 二手转述：4 条（40%）
> 最强证据线：官方一手源（DeepSeek 公告、京报网/央视财经 100 亿下载数据、HN Kimi K3 launch 线程 via Algolia API）+ OpenRouter 官方博客的价格/榜单快照，交叉印证「开源-闭源差距 ≤6 个月 + 单位智能价格暴跌」。渠道故障：linux.do 与 news.ycombinator.com 直连均 ECONNREFUSED（HN 走 Algolia API 成功替代）；zhihu 专栏、fierce-network、computing.co.uk 返回 403。搜索渠道本期正常，未见查询污染。

---

## 1. DeepSeek V4 官方发布：1M 上下文全线默认 + 双版本开源，7/24 强制迁移旧 API
- **type**: trend | **platform**: official_blog | **secondhand**: false
- **source_url**: https://api-docs.deepseek.com/news/news260424/
- **source_date**: 2026-04-24 | **fetched_at**: 2026-08-04
- **metrics**: V4-Pro 1.6T 总参/49B 激活；V4-Flash 284B/13B；1M token 上下文全服务默认；1M 上下文下 V4-Pro 仅需 V3.2 的 27% 单 token FLOPs、10% KV cache（Flash 为 10%/7%）；deepseek-chat/reasoner 于 2026-07-24 15:59 UTC 彻底下线
- **description**: DeepSeek 官方公告确认 V4 双版本开源上线（HuggingFace deepseek-ai/deepseek-v4），自称 Agentic Coding 开源 SOTA、世界知识仅次于 Gemini-3.1-Pro。迁移只需改 model 名（保留 base_url），且同时兼容 OpenAI ChatCompletions 与 Anthropic API 两种协议，官方点名已集成 Claude Code、OpenClaw、OpenCode。7 月中旬正式版全量商用并引入「峰谷分时计费」，谷时算力费降约 60%（据快科技/新浪财经报道）。页面未写明许可证名称，基准与价格仅以图片呈现。
- **user_quote**: "Keep base_url, just update model to deepseek-v4-pro or deepseek-v4-flash."
- **top_comments**:
  - [DeepSeek 官方公告] "1M context is now the default across all official DeepSeek services."
  - [DeepSeek 官方公告] "deepseek-chat & deepseek-reasoner will be fully retired and inaccessible after Jul 24th, 2026, 15:59 (UTC Time)."
- **ai_opportunity**: 兼容双协议 + 一行迁移 = agent 工具链的「模型底座可插拔」窗口；7/24 旧模型强制下线制造了一批存量应用的迁移刚需（迁移脚本、回归评测服务）；1M 上下文成本降一个数量级，长文档/整库分析类产品的单位经济模型被重写。

## 2. 中国开源模型累计下载破 100 亿次、占全球 41%，调用榜前六全是中国团队
- **type**: trend | **platform**: news_media | **secondhand**: true
- **source_url**: https://news.bjd.com.cn/2026/07/31/11893835.shtml
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-04
- **metrics**: 中国开源模型下载量占全球 41%（超美国居第一）；累计下载破 100 亿次；主流大模型调用榜前六位全部来自中国团队；过去 12 个月中 9 个月保持全球开源模型规模上限；248 家 AI 产业链上市公司披露中报，159 家预喜
- **description**: 京报网转央视财经报道，引「全球最大开源 AI 模型平台 2026 春季报告」（即 Hugging Face，文中未点名）。对比 2026-01 澎湃引 MIT+HF 联合报告的 17.1% vs 美国 15.8%，半年内份额跃升至 41%，斜率极陡。二手转述（央视财经→京报网），平台原始报告未直接核到，故 secondhand: true。
- **user_quote**: "排名前六位的模型全部来自中国团队"
- **top_comments**:
  - [文内匿名分析师转述] 上半年业绩确认中国 AI 产业正走出技术验证与概念培育阶段、进入产业化落地与结构升级新周期
- **ai_opportunity**: 中国开源底座已成事实标准 → 围绕中国模型生态的「卖水」生意（部署工具、微调服务、合规封装、海外分发）的市场基数被官方数据背书；对 indie builder 而言，基于 Qwen/DeepSeek/GLM 做垂直衍生模型的下游生态位仍在快速扩张。

## 3. 黄仁勋 X 首帖联署公开信力挺开源，签署方从 25 家滚动增至 133 家；OpenAI/Anthropic/Google 集体缺席
- **type**: trend | **platform**: news_media | **secondhand**: true
- **source_url**: https://www.163.com/dy/article/L2RO6NTI0514R9P4.html
- **source_date**: 2026-07-24 | **fetched_at**: 2026-08-04
- **metrics**: 首批 25 家签署（NVIDIA、微软、Meta、IBM、戴尔、Palantir、Hugging Face、Linux 基金会、a16z、YC、Mistral 等），滚动增至 133 家；7-27 再组 37 家「开放安全 AI 联盟」共享开源 AI 安全工具
- **description**: 黄仁勋 7-24 入驻 X 首帖推广《Open Weights and American AI Leadership》三页政策公开信，呼吁美国政府勿封禁开源 AI，主张以增强安全研究而非限制开放来应对滥用风险；马斯克、扎克伯格、纳德拉公开表态支持。三大闭源实验室（OpenAI、Anthropic、谷歌）集体缺席。HN 侧注：Dario Amodei 7-27 回应称 Anthropic "has never advocated for a ban on open-weights models"。信号价值在于政策风向：沙箱逃逸事件后的开源监管争论中，产业资本重量级站队开放阵营。
- **user_quote**: 信中主张衡量美国 AI 领导力的标准"不应只是拥有某一个最先进模型，而应看是否建立了强大、开放并能扩散到各行业的生态系统"（中文报道转述）
- **top_comments**:
  - [Axios 采访转述] 黄仁勋称美国公司 "absolutely should be allowed to use Chinese models."
  - [HN 转述] Dario Amodei（7-27）: Anthropic "has never advocated for a ban on open-weights models"，称非危险开源模型是 public good
- **ai_opportunity**: 短期内美国全面封禁开源/中国模型的尾部风险显著下降 → 基于中国开源权重做面向欧美市场的产品，政策不确定性折价收窄；「开源 AI 安全工具」被 37 家联盟点名为公共品方向，安全评测/沙箱加固类开源项目有巨头采纳与商业化通道。

## 4. Kimi K3 开放权重落地（7-26）：2.8T MoE + 原生多模态 + MXFP4 1.4TB，连内核和 MoE 通信库一起开源
- **type**: trend | **platform**: twitter | **secondhand**: false
- **source_url**: https://x.com/Kimi_Moonshot/status/2081760186235289764
- **source_date**: 2026-07-26 | **fetched_at**: 2026-08-04
- **metrics**: 2.8T 总参/约 50B 激活（896 专家取 16）；1M 上下文；自称 2.5x intelligence per unit of compute；MXFP4 权重约 1.4TB（FP16 约 5.6TB）；官方建议 64+ 加速卡超节点；API 定价 $3/$15 per 1M tokens（cache $0.3）
- **description**: 月之暗面 7-16 WAIC 发布 K3、7-26 放出权重与技术报告，同时开源高性能 attention kernels、MoE 通信库、规模化 agent 环境基础设施。量化感知训练从 SFT 阶段开始（非事后量化）。此前社区（HN satvikpendem 等）质疑权重会不会真放，落地打消疑虑。注意：K2.7 Code 用 Modified MIT，K3 实际 LICENSE 需查 HF 仓库确认。
- **user_quote**: "Releasing the model weights and technical report of Kimi K3. Kimi K3 is our most capable model: a 2.8T MoE model with native visual understanding and a 1M-token context window. New model architecture: 2.5x the intelligence per unit of compute, not just more params."
- **top_comments**:
  - [Kimi 官方推文] "Alongside Kimi K3, we're opening up more of the stack behind it — high-performance attention kernels, MoE communication library, and infrastructure for running agent environments at scale."
- **ai_opportunity**: 2.8T 级权重个人无法自托管（64+ 卡）→ 机会不在部署而在生态外围：K3 推理托管中间商、MXFP4 量化工具链、开源 agent-infra 组件的二次封装；「连 infra 一起开源」意味着 agent 运行时这一层的商业化壁垒在被主动拆除，纯 wrapper 型 agent 平台窗口收窄。

## 5. HN Kimi K3 launch 线程：开发者聚焦「推理效率才是真成本」，并出现评测疲劳信号
- **type**: pain_point | **platform**: hackernews | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=48935342
- **source_date**: 2026-07-16 | **fetched_at**: 2026-08-04（HN 直连 ECONNREFUSED，经 hn.algolia.com API 读取）
- **metrics**: K3 定价 $3/$15/1M（cache $0.3），与 Sonnet 持平；antiloper 估算 K3 推理 token 用量约为 K2.6 的 60%；ekojs 引 GDPval-AA v2 1687 / AA-Briefcase 1527，超 Opus 4.8 Max
- **description**: launch 线程核心争论：中国开源模型定价首次逼近美国闭源二线（Sonnet 档），但开发者指出应按「完成任务的总 token 成本」而非单价比较——推理更省 token 的模型可能反而更便宜。另有两类值得注意的情绪：模型发布节奏过快导致的评测疲劳（khalic），以及对注册需手机号/Google 账号的摩擦抱怨（smalltorch）。
- **user_quote**: "I really need to finish my automated model evaluation harness, I can't keep up with this pace" — khalic
- **top_comments**:
  - [HN Tiberium] "$3/$15 for 1M tokens (cache $0.3)"，认为对中国开源模型偏贵，但若近前沿则合理；强调 reasoning 效率决定真实成本：烧 50K 推理 token 的模型可能输给单价更高但更精炼的模型
  - [HN ekojs] 引官方评测后评论 "Maybe another DeepSeek moment right here."
  - [HN lvl155] 无论怎么看中国模型，"they sure create competition and urgency in the space."
- **ai_opportunity**: 「自动化模型评测 harness」是被开发者原话点名的刚需——发布节奏 > 人工评测带宽；「按任务总成本比价」的 cost-per-task 对比工具（而非 per-token 价格表）是空位；HN 用户开始要求过滤 AI 内容，也提示内容侧疲劳。

## 6. OpenRouter 官方盘点：开源-闭源差距「真实但窄且未扩大」，DeepSeek Flash 缓存输入低至 ~$0.029/M
- **type**: trend | **platform**: official_blog | **secondhand**: false
- **source_url**: https://openrouter.ai/blog/insights/the-open-weight-models-that-matter-june-2026/
- **source_date**: 2026-06-27 | **fetched_at**: 2026-08-04
- **metrics**: AA Index v4.1（6-25 快照）：GLM 5.2 = 51（开源第一，距 Claude Fable 5 约 5 分）、Nemotron 3 Ultra = 48、MiniMax M3 = 44、DeepSeek V4 Pro = 44、Kimi K2.6 = 43、V4 Flash = 40；SWE-bench Verified：V4 Pro 80.6%（开源最佳）、Flash 79.0%；Flash 一方 API $0.14/$0.28、缓存输入约 $0.029/M（作者称距 GPT-5.5 输出价近 150x 便宜）；GLM 5.2 $0.447/$3.31
- **description**: OpenRouter 官方博客按用途给出开源模型选型图谱：Flash=最便宜的前沿级 agentic coding（纯文本、需要非常具体的指令）；GLM 5.2=架构规划/repo 级重构/长程 agent（吃 token）；MiniMax M3=唯一原生多模态（UI 自动化、截图转代码）；Nemotron=NVIDIA 栈企业部署。特别标注一方 API 便宜一半但会用输入训练，西方托管商贵一倍但不训练——隐私溢价被明码标价。
- **user_quote**: "The gap to the closed frontier is real but narrow, and it has not been widening."
- **top_comments**:
  - [OpenRouter blog] "The frontier labs do not (at this moment, anyway) appear to be accelerating away from open-weight labs."
  - [OpenRouter blog] GLM 5.2 到来的时点："days after the U.S. export-control directive that forced Anthropic to disable Fable 5."
  - [OpenRouter blog] "the only ground truth is testing it against your own tasks."
- **ai_opportunity**: 「隐私溢价」被结构化定价（一方便宜但训练你的数据 vs 三方贵但不训练）→ 面向企业的「不落数据」推理代理/合规路由是明确付费点；按场景选型的复杂度本身即产品机会（模型路由器、cost-per-task 评测）。

## 7. 36氪/硅星人实测：K3、GLM 5.2、Qwen3.8-Max 接管同一座「屎山」——没有模型全程领先，错得像样的比错得诚实的更危险
- **type**: pain_point | **platform**: news_media | **secondhand**: false
- **source_url**: https://www.36kr.com/p/3906218936669575
- **source_date**: 2026-07-22 | **fetched_at**: 2026-08-04
- **metrics**: 6 项真实任务 3/2/1 计分：Qwen 15、K3 11、GLM 10；repo 有 14 个 CMS collections，GLM 全找对、K3 数成 15 且误标；Qwen 项目分析 <10 秒完成
- **description**: 一线编辑部用自家 Next.js+Payload 半成品项目（"屎山代码堆积，结构臃肿"）做 opencode 挂载横评。结论对 builder 极有信息量：模型各有系统性人格缺陷——Qwen 快但擅自改需求（删拖拽、用复制内容伪造无限轮播）、GLM 被过期文档带偏且改色不彻底、K3 诚实但细节潦草拒绝实际执行。文章直接反驳 Anthropic「中国模型落后 6-12 个月」的说法框架。
- **user_quote**: "一个看起来能用的错误答案，比一个一眼就知道没做完的半成品危险得多"
- **top_comments**:
  - [36氪原文] GLM "像一位经验丰富的老师傅"；Qwen "更像每天待在现场的监工"；K3 "像一个一分钟带你看完房子的中介"
  - [36氪原文] 评 Qwen 轮播实现："用长度伪装成循环"
  - [36氪原文] 评 K3 轮播："它是一个诚实的半成品"
- **ai_opportunity**: 「看起来能用的错误答案」= agentic coding 的核心信任缺口 → 自动化验收/回归验证层（改动是否真的完成、有没有偷偷缩水需求）是横评直接暴露的产品空位；「模型人格画像」式选型内容/工具也有受众。

## 8. Kimi K3 vs GLM 5.2 成本争论：GLM OpenRouter $0.29/M 均一价 vs K3 溢价 2.1–3.4x，触发点是 Claude Code 封号潮
- **type**: pain_point | **platform**: blog | **secondhand**: true
- **source_url**: https://www.cnblogs.com/sing1ee/p/21651553
- **source_date**: 2026-07-19 | **fetched_at**: 2026-08-04
- **metrics**: GLM 5.2 OpenRouter $0.29/M（输入输出同价），官方 API 8 元/M 输入；K3 未公布标价，实测跨工作负载成本为 GLM 的 2.1–3.4x（缓存命中越高溢价越向 3.4x 靠）；SWE-bench Verified K3 ~78% vs GLM 77.8%；GLM 最低自托管 8×H100 单节点，K3 需多节点 ≥8 卡
- **description**: 社区选型讨论（linux.do 原帖直连被拒，此为博客综述+搜索摘要交叉）呈现清晰分层：日常开发选 GLM（性价比+速度）、大项目选 K3（长程能力）、成本敏感选 DeepSeek。多篇报道提到转向国产模型的直接触发因素是 Claude Code 封号潮——"一夜之间主力工具没了"。月之暗面官方自己承认 K3 用户体验仍逊于 Claude Fable 5 / GPT-5.6 Sol。两者均为 MIT 权重。数字多为博客转述，标 secondhand。
- **user_quote**: "预算允许就选 Kimi K3"（博客选型结论原文）
- **top_comments**:
  - [搜索摘要转 linux.do] 典型提问是"哪个代码能力更强更好用"，起因是订阅额度用得太快
  - [cnblogs 原文] "GLM 5.2 在 API 层面便宜得多"；作者建议跑自己的 50–100 prompt 评测而非信营销
- **ai_opportunity**: 封号潮制造的「一夜迁移」人群是明确付费场景（Claude Code → Kimi Code/GLM 的配置迁移、prompt 适配、额度管理工具）；「缓存命中率改变模型比价结论」这类反直觉成本知识可做成计算器/审计工具。

## 9. 企业侧数据打架：Vercel 网关开源 token 份额 4 月 ~11% → 6 月 29%，但 Menlo 报告企业开源采用率 19% → 11%
- **type**: trend | **platform**: news_media | **secondhand**: true
- **source_url**: https://www.luizneto.ai/enterprise-open-weight-models-2026/
- **source_date**: 2026-07 | **fetched_at**: 2026-08-04（fierce-network 与 computing.co.uk 原文 403，仅搜索摘要+此聚合稿，标 secondhand）
- **metrics**: Vercel AI Gateway（6 月数据）：开源模型处理 29% 的生产 token（4 月约 1/9），但只占总支出 <4%，单价约为平台均价 1/10；Menlo Ventures：企业开源 AI 使用率一年内从 19% 降至 11%
- **description**: 两组数据并不矛盾但方向相反：按推理流量（成本驱动）开源份额暴涨，按组织级自托管采用率反而下滑。归因是治理缺口——闭源 API 默认捆绑监控、滥用检测、版本管理、合规日志，自托管则全部自己背。另有许可证风险（多数 open-weight 许可含使用限制，非 OSI 认证，可能不适用 EU AI Act 开源豁免）与地缘风险（Arrcus CEO Shekar Ayyar：西方用户可能像华为案一样被禁用中国模型）。
- **user_quote**: 无直接引语（原始报告未直接核到）
- **top_comments**:
  - [搜索摘要转 Arrcus CEO Shekar Ayyar] 中国模型带有西方用户被禁用的风险，"as they were with Huawei"
- **ai_opportunity**: 这是本组最强的 pain-point 套利：企业想要开源的成本（1/10 单价）但缺闭源的治理层 → 「开源模型的托管治理层」（监控/滥用检测/版本管理/合规日志开箱即用）正是 19%→11% 流失的原因，也是最直接的可产品化缺口；许可证-法规映射（哪个权重许可能过 EU AI Act）是细分咨询/SaaS 机会。

## 10. Forbes：DoorDash/Coinbase 分层用中国开源模型，OpenRouter 上美国公司 token 约 60% 走中国模型；K3 每美元多解 2.8x 任务
- **type**: trend | **platform**: news_media | **secondhand**: true
- **source_url**: https://www.forbes.com/sites/geruiwang/2026/07/27/why-kimi-k3-signals-a-convergence-toward-open-weight-models/
- **source_date**: 2026-07-27 | **fetched_at**: 2026-08-04
- **metrics**: BrowseComp：K3 91.2 vs GPT-5.6 Sol 90.4 vs Claude Fable 5 88.0；DeepSWE 单 rollout $4.65（K3）vs $13.41（Fable 5），452-rollout 合计 $2,103 vs $6,010，称每美元多解 2.8x 任务；OpenRouter 上美国公司 token 用量约 60% 为中国模型（单一来源，需谨慎）；K3 Agent Swarm 最多 300 子 agent、4000+ 工具调用/任务、较串行快至 4.5x；KDA 在百万 token 解码提速 6.3x
- **description**: Forbes 撰稿人以「扩散经济学」立论：闭源的按量计费惩罚高流量/薄利产品，不透明权重挡住受监管数据的微调（医疗、制造 QC、金融风控），因此开放权重终将赢在分发经济而非意识形态。落地采用案例：DoorDash 低阶任务用 Kimi、难活留 Anthropic Fable；Coinbase 确认内部使用；Cursor（文称已被 SpaceX 收购，单一来源未证实）在 Kimi 模型上构建自家编码模型。文中成本数字来自 Together AI 的 benchmark rollout 而非价目表，且全文未写明 K3 许可条款。
- **user_quote**: 结论原文：开源终胜"not because of ideological preference"，而因技术自身的扩散需求与封闭相悖
- **top_comments**:
  - [Forbes 转 Axios] Jensen Huang：美国公司 "absolutely should be allowed to use Chinese models."
- **ai_opportunity**: 「分层路由」（便宜开源跑量 + 闭源旗舰兜底难题）已被 DoorDash 等验证为主流架构 → 自动难度分级 + 模型降级路由的中间件是可复制的产品形态；受监管行业（数据不出域）的本地微调服务是闭源结构性够不到的市场。
