# 19 — 热点深挖: 中国开源大模型全球登顶（Qwen3.8-Max / Kimi K3 / MiniMax H3） 2026-08-12

> 组内信号：8 条 | 二手转述：5 条（63%）
> 最强证据线：HN 49150470 与 Hugging Face MiniMax-H3 discussions/12 两条一手线程，把「开源登顶」叙事拆成两个可产品化的裂缝——「宣称开源 ≠ 权重落地」（Qwen3.8-Max 承诺一周、8/10 仍未上 HF）与「开源权重 ≠ 开放许可」（H3 许可证把美/欧/英/韩整体排除在授权地域外）。渠道正常，无搜索污染；仅 view.inews.qq.com 返回 400、news.ycombinator.com 直连被拒（经 hn.algolia.com API 兜底成功）。

---

## 1. 阿里 Qwen3.8-Max 发布：2.4 万亿参数、1M 上下文、OSWorld-Verified 86.1 登顶，Max 级首次承诺开源权重
- **type**: trend | **platform**: 科技媒体（AIHub/SegmentFault 等聚合） | **secondhand**: true
- **source_url**: https://www.aihub.cn/news/qwen3-8-max-release/
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-12
- **metrics**: 2.4T 总参数 / 95B 激活；1M token 上下文、128K 输出；OSWorld-Verified 86.1（主流模型首位）、GPQA Diamond 92.6、PaperBench 93.0；短板 Terminal Bench 2.1 86.6（低于 GPT-5.6 Sol 88.8）、SWE-bench Pro 67.7（低于 Claude Fable 5 80.0）；长时程演示：自主编程约 16 天留下 265 commits / 127 PRs，科研复现连续 125 小时、7600 行代码、33 轮 GPU 训练；QwenCloud API 定价 $2/M 输入、$6/M 输出、$0.25/M 缓存输入；北京/新加坡/美国弗吉尼亚三区端点，兼容 OpenAI 与 Anthropic 协议
- **description**: 8/3 正式发布（替代 7/19 预览版），历代 Max 级仅走 API，这次官方承诺"下周"在 HF/ModelScope 开源权重，同步开源小杯 Qwen3.8-27B。叙事重心从单轮对话质量转向把自主运行时长"从分钟级推向天级"。所有基准均为官方自测、评测框架不完全统一——报道自己也提醒"首次开源"在权重与许可证落地前只是承诺。（腾讯新闻 https://news.qq.com/rain/a/20260804A0ACRT00 、SegmentFault https://segmentfault.com/a/1190000048111231 同口径）
- **user_quote**: "在权重与许可证文件实际落地之前，'首次开源'仍是一项承诺。"（AIHub 报道原文）
- **top_comments**: （见信号 2 的 HN 一手评论）
- **ai_opportunity**: ① 「长时程 agent 验收」工具：16 天 265 commits 的宣传演示无人能独立复核，可做开源的 long-horizon agent 回放/审计 harness；② 官方自测分与第三方实测的差值本身就是内容与订阅产品（对齐本仓 08-11 报告「宣称 ≠ 实测」主线）；③ 1M 上下文 + Anthropic 协议兼容 = 现成的 Claude Code 廉价后端切换层生意

## 2. HN 一手评论：Qwen3.8-Max 发布贴的三大质疑——「今天到底发了什么」、本地跑不动、便宜推理是闭源估值的红旗
- **type**: pain_point | **platform**: Hacker News | **secondhand**: false
- **source_url**: https://news.ycombinator.com/item?id=49150470
- **source_date**: 2026-08-03 | **fetched_at**: 2026-08-12
- **metrics**: 7 月预览贴约 75 points / 29 评论；8 月发布贴另开（经 hn.algolia.com API 读取评论树）；关联 27B 讨论贴 https://news.ycombinator.com/item?id=49150809
- **description**: 发布贴共识：基准分自报存疑、生产使用前必须先有健壮 harness、开源权重与托管发布是两码事。硬件层痛点密集——2.4T 谁能跑、量化后本地代码质量不达标；商业层直指闭源实验室 margin 崩塌风险与游说监管预期。
- **user_quote**: "So what are they releasing today?"（simonw，指官方称"首次开源 Max 级权重"却当天无权重）
- **top_comments**:
  - [HN, Aurornis] "I've tried a dozen different quants and context lengths and the output is always bad enough that it has to be discarded"（本地模型写代码，非平凡任务全废）
  - [HN, qlte] 质疑廉价推理是否是 "a gigantic red flag for OpenAI/Anthropic at their current valuations"——race to the bottom 下 margin 可能崩塌
  - [HN, throwaw12] "Chinese labs are cooking very hard"，预测美国闭源实验室将游说华盛顿加监管；[HN, tommica] "I'm here struggling to even get 27b models to run in somewhat usable way"
- **ai_opportunity**: ① 本地量化质量回归测试服务（quant × context length 矩阵自动跑代码任务，出「可用性红绿灯」）——Aurornis 的十几次手工试错就是付费意愿证据；② 「发布真伪检查器」：追踪厂商 announce vs 权重实际落地/license 文本，做成 RSS/API；③ 面向 5090/Mac 用户的 27B 级部署选型器

## 3. 跳票中：Qwen3.8-Max 承诺"下周开源"，8/10 已过期——权重、许可证、新日期三无
- **type**: pain_point | **platform**: 独立技术博客 | **secondhand**: true
- **source_url**: https://blog.invidelabs.com/qwen3-8-max-open-weights-next-week/
- **source_date**: 2026-08-10 | **fetched_at**: 2026-08-12
- **metrics**: 承诺窗口 8/3 起"下周"；截至 8/10 更新：HF 上无 Max 也无 27B、未公布许可证名称、未给新日期；激活参数数未披露，"2.4T 总参数不能用来估算 VRAM、生成速度或本地部署成本"
- **description**: 博客逐条核对开源承诺兑现状态：开发者"仍无法检查最终许可证、下载承诺的权重、测试社区量化版本"。LocalLLaMA 的兴趣集中在 27B（llama.cpp/vLLM 支持、内存配置），作者提醒 Reddit 热度"证明的是需求，不是模型质量"，基于社区猜测买硬件为时过早。另 The New Stack 标题给出社区定性："An API business model wearing an open source jacket"（https://thenewstack.io/alibaba-qwen3-8-max-reactions/ ，正文抓取仅剩导航壳）。搜索摘要另提到 OstrisAI 解读许可证疑似禁止美/欧/英/韩下载——该条未能在一手页面核实，仅作待验线索。
- **user_quote**: "Developers still cannot inspect the final license, download the promised weights, or test community quantizations."
- **top_comments**:
  - [The New Stack 标题] "An API business model wearing an open source jacket"
  - [博客作者] "Reddit enthusiasm demonstrates demand, not model quality."
- **ai_opportunity**: 「开源承诺追踪器」：监控各大厂 announce→weights→license→推理框架支持四个落地节点，超期自动告警；对做私有部署选型的企业与自媒体都是刚需，且数据可完全自动化采集（HF API + 官方渠道）

## 4. Kimi K3 权重落地（2.8T，全球最大开源模型）引爆硅谷开源/闭源路线之争：35 家联署 vs Anthropic 缺席
- **type**: trend | **platform**: 财经媒体（每经/钛媒体等） | **secondhand**: true
- **source_url**: https://www.mrjjxw.com/articles/2026-07-25/4511944.html
- **source_date**: 2026-07-25 | **fetched_at**: 2026-08-12
- **metrics**: K3：2.8T 总参数 / 约 104B 激活，896 专家每 token 激活 16 个，1M 上下文；7/16 发布、7/27 权重落地（约 1.56TB 分片）；AA Intelligence Index 57 分全球第三（仅次于 Claude Fable 5、GPT-5.6 Sol）；Code Arena 盲测 1679 分登顶；平均任务成本仅为 Claude Fable 5 的 34%，BrowseComp 单任务成本为 GPT-5.6 Sol 一半；K3 发布次日英伟达跌 2.2%、费半一周跌超 10%；OpenAI 2026 全年现金消耗预计 250 亿美元、Anthropic 年投入约 110 亿美元；7/22 约 200 家硅谷初创联名致函特朗普政府反对限制中国开放权重模型；7/24 黄仁勋发起联名信，纳德拉/扎克伯格/马斯克跟进，签署方约 35 家，Anthropic 与谷歌缺席
- **description**: 路线之争的商业内核：闭源商业模式建立在「顶尖模型稀缺、可按 token 维持高定价」上，K3 开放权重 + 三分之一成本直接冲击该前提。蒸馏争议并行：Anthropic 2 月指控 DeepSeek/月之暗面经约 2.4 万账户 1600 万次交互蒸馏 Claude；成都 APEC 数字部长会上中方反驳「蒸馏是合法的模型开发技术」。（新华网发布口径 https://www.xinhuanet.com/tech/20260717/da893d3a5e1b429ea79d928e02847744/c.html ；权重许可细节见信号 8 之 HN 评论：K3 更接近 weights-available，超大规模商用需月之暗面另行授权）
- **user_quote**: "计算行业进行这场辩论已有 40 年。"（Seaport Research Partners 分析师 Jay Goldberg，认为开放/封闭将长期并存）
- **top_comments**:
  - [Interconnects, Nathan Lambert 观点转述] 强大开源模型会大幅降低闭源实验室潜在利润率，既减少可用于训练下一代模型的利润，也影响长期估值
  - [HN, badsectoracula] K3 更接近 "weights available"（自定义许可证），"GLM 5.2 on the other hand is plain old MIT"
  - [HN, user43928] 极少组织能自托管 3T 级模型，多数部署实际需要 "a separate license from Moonshot"
- **ai_opportunity**: ① 成本套利中间件：同一 agent 工作流按任务难度在 K3（34% 成本）与闭源旗舰间自动路由，省下的差价即订阅费空间；② 1.56TB 多机部署是硬门槛——「K3 推理即服务」与量化蒸馏小型化服务两头都有生意；③ 政策风险对冲：为使用中国开源模型的美国企业提供合规审查清单（联名信 vs 封杀呼声并存 = 合规不确定性本身是付费点）

## 5. Hugging Face：中国模型下载占比 41% 首超美国、累计破 100 亿次；OpenRouter 7 月调用榜前六全是中国开源模型
- **type**: trend | **platform**: 官方媒体转述 Hugging Face / OpenRouter 数据 | **secondhand**: true
- **source_url**: https://news.bjd.com.cn/2026/07/31/11893835.shtml
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-12
- **metrics**: HF 2026 春季报告：中国模型占平台下载 41%（2024 年不足 20% → 2025 年 32% → 2026 年 4 月 41%），HF 成立以来首次有国家超过美国；国产开源模型累计下载破 100 亿次全球第一；过去 12 个月中 9 个月国产模型保持全球开源模型规模上限；OpenRouter 2026 年 7 月调用量榜前六均为中国开源模型；Vercel 统计截至 6 月开源模型处理其近 1/3 AI 请求；Qwen 截至 2026 年初 HF 累计下载超 10 亿次，同期阿里云外部收入同比 +40%
- **description**: 数据两波传播：4 月底随 HF 春季报告首发（https://cn.wicinternet.org/2026-04/28/content_38737253.htm ），7 月底经央视财经/京报网再扩散并叠加 OpenRouter 7 月榜。商业逻辑被点破：开源是获客入口，钱在云计算、推理服务、企业部署与硬件上赚——Qwen 即阿里云获客漏斗。HF CEO Clem Delangue 引述该数据引发关注。原始 HF 报告与 OpenRouter 榜单页未直接抓取，故整条标 secondhand。
- **user_quote**: "开源大模型正将全球人工智能竞争从少数巨头垄断推向更广泛的产业竞争。"（中国电子信息产业发展研究院 钟新龙）
- **top_comments**: （无线程评论；数据类信号）
- **ai_opportunity**: 下载量 ≠ 生产可用。41% 份额 × HN「量化后代码全废」的落差，正是第三方实测/选型层的市场空间：按行业场景（合规、语言、部署预算）推荐开源底座的决策 SaaS，数据源全部公开（HF/OpenRouter/AA）

## 6. MiniMax H3 权重 8/3 开源：AA 视频编辑榜 Elo 1130 全球第一、HF 热度第一——但「多榜第一」口径有水分且通稿为厂商供稿
- **type**: product_market | **platform**: 量子位（MiniMax 供稿） | **secondhand**: true
- **source_url**: https://www.qbitai.com/2026/08/467270.html
- **source_date**: 2026-08-05 | **fetched_at**: 2026-08-12
- **metrics**: 7/31 发布 API、8/3 开源权重；AA 视频编辑榜 Elo 1130 全球第一（压过 Gemini Omni Flash、HappyHorse-1.0、Wan 2.7），文生视频/图生视频子榜前三；HF trending 第一（超 DeepSeek V4 Flash、Kimi K3）；发布 24 小时内 100+ 国内外伙伴完成适配；H3-Base 33.1B 稠密全模态 transformer，4-15 秒视频、24FPS、32kHz 立体声、最高 2K；INT8 量化 24GB 单卡可跑；实测价格约为 Seedance 2.5 的 1/3；MiniMax 股价 8/5 收盘涨超 10%，Jefferies 目标价 1118 港元
- **description**: 注意利益冲突：量子位页面明示「本文由 MiniMax 提供」。第三方口径（腾讯新闻实测稿）更谨慎：H3 是带音频视频编辑榜第一、带音频图生视频榜第三、开放权重模型中第一，「多个视频榜单均列全球第一」的说法不准确。HF trending 第一衡量的是热度不是质量。架构上 H3 是多模块系统，关键的 H3-Context-IR（多模态指令理解与编排）不随权重开源、仅提供 API——「开源」的含金量打折。Emad Mostaque、a16z Justine Moore 点赞系转述，通稿无原话。
- **user_quote**: （通稿无用户原话；社区一手声音见信号 7）
- **top_comments**:
  - [第三方报道对口径的纠偏] 截至撰写时 H3 在带音频视频编辑榜全球第一、带音频图生视频榜第三，是开放权重模型第一——"多个视频榜单均位列全球第一"并不准确
- **ai_opportunity**: ① 33B + 24GB 单卡 = 独立开发者第一次能自托管接近榜首的视频模型：本地视频生成工作流工具（ComfyUI 已原生支持）、垂直模板（电商/带货短视频）窗口期打开；② Context-IR 编排层不开源 = 开源替代编排器（把意图编译成 H3 结构化中间表示）是明确的空位；③ 1/3 价格 vs Seedance 2.5：视频生成 API 聚合比价层

## 7. H3 许可证一手风暴：Community License 把美/欧/英/韩排除在「适用地域」外，连输出物都不授权——「公开可下载的权重不等于有意义的开源」
- **type**: pain_point | **platform**: Hugging Face discussions | **secondhand**: false
- **source_url**: https://huggingface.co/MiniMaxAI/MiniMax-H3/discussions/12
- **source_date**: 2026-08-04 | **fetched_at**: 2026-08-12
- **metrics**: 许可证 2026-08-02 生效，发行方 Nanonoble Pte. Ltd.，香港法管辖；美/欧/英/韩不在 Applicable Territory；§V.4 禁止在地域外使用/复制/修改/分发作品及其输出（法兰克福 GPU 上跑一帧都不授权）；年收入 <$2000 万免费商用、以上需书面授权；§IV.2 要求商业产品展示 "MiniMax H3" 标识；§V.3 禁止用 H3 及输出训练其他模型；模型仓 71+ 讨论帖；技术栈中仅 Qwen3-VL-32B 文本编码器是真 Apache 2.0；社区 48 小时内在 $280 GPU 上跑通、antirez 出了 Apple Silicon C/Metal 移植 h3.c
- **description**: 全球最受关注的开源视频模型，许可证却把它宣传所面向的主要开发者群体整体排除。MiniMax DevRel 负责人 ryanlee-dev 在讨论区逐帖回应：美国限制源于与好莱坞片厂的生成视频版权诉讼；"not yet, not not ever"；受限地区可申请正式授权且"apply will auto get access"；个人开发者公司栏填 "Personal/None" 即可。申请表挂在第三方飞书链接也被点名（官方称"will use MiniMax domain very soon"）。付费意愿证据密集：广告代理商问客户交付授权范围（advertising/social/broadcast/streaming/DOOH）、日本创作者问 YouTube 变现是否需额外费用。
- **user_quote**: "Publicly accessible weights are not meaningfully open if many of the developers they were advertised to cannot legally use them."（Slyrox）
- **top_comments**:
  - [HF discussions, ryanlee-dev（MiniMax 官方）] "This regional carve-out stems from our ongoing generative video copyright litigation with major Hollywood studios." / "The current limitation means 'not yet', not 'not ever.'"
  - [HF discussions, dummy9996] "nothing actually stops users in the sanctioned countries from downloading it, only companies will comply not to risk it"
  - [HF discussions, E10H1M] "why is the application hosted on a thrid-party Feishu link instead of Hugging Face or a MiniMax domain?"（官方回复："will use MiniMax domain very soon"）
- **ai_opportunity**: ① 「模型许可证合规扫描器」：输入 HF repo，输出你所在司法辖区 + 用例（商用/训练/输出分发/署名义务）的红绿灯——H3/K3/Qwen 各自一套自定义许可证，企业法务人工读不过来，代理商和 MCN 已在讨论区排队问；② 授权申请代办/合规证明服务（"robust compliance controls" 是拿授权的条件，本身可产品化）；③ 输出物溯源标注工具（§IV.2 强制披露 = 内置水印/end-credit 生成器的刚需）

## 8. 企业侧落地数据：开源模型吃掉 Vercel 网关 29% token 但只占 <4% 花费；OpenRouter 精选四强中国占三席
- **type**: trend | **platform**: OpenRouter 官方博客 | **secondhand**: false
- **source_url**: https://openrouter.ai/blog/insights/the-open-weight-models-that-matter-june-2026/
- **source_date**: 2026-06-30 | **fetched_at**: 2026-08-12
- **metrics**: Vercel AI Gateway 生产指数（6 月数据）：开源权重模型处理 29% token（4 月约 1/9），花费占比 <4%，均价约为平台平均的 1/10；OpenRouter 四强：DeepSeek V4 Flash（AA 40，$0.054/$0.242 每 M，~84 tok/s）、GLM 5.2（AA 51 开源最高，$0.447/$3.31，~78 tok/s）、MiniMax M3（AA 44，$0.098/$1.21，唯一原生图像视频输入 + 1M 上下文）、Nemotron 3 Ultra（AA 48，美国最强开源）；DeepSeek 一方 API 缓存后输入约 $0.029/M，"约比 GPT-5.5 输出成本便宜 150 倍"；Stanford AI Index：美中头部模型差距缩至 2.7%（2026 年 3 月），最强闭源 vs 最强开源差 3.3%；CAISI 5 月评估：DeepSeek V4 综合仍落后美国前沿约 8 个月
- **description**: 一手编辑精选 + 网关数据，勾勒「便宜十倍、能力差 3-6 个月」的企业采购新均衡。关键提醒三条：低单价 ≠ 低总价（GLM 5.2 "can burn money on high thinking models"，推理输出吞 token）；DeepSeek 一方 API 走中国且条款允许用提交数据训练——不训数据的西方托管商价格约为其两倍（这个差价就是「隐私溢价」市场）；MiniMax M3 用 Community License，大型商业产品需 MiniMax 事先书面授权。
- **user_quote**: "The gap to the closed frontier is real but narrow, and it has not been widening."（OpenRouter 博客原文）
- **top_comments**:
  - [OpenRouter 博客] DeepSeek "proved an open model could just be your frontier agent — and do it for cents."
  - [OpenRouter 博客] "the only ground truth is testing it against your own tasks."
  - [OpenRouter 博客] GLM 5.2 "can burn money on high thinking models"（低单价被重推理输出吃掉）
- **ai_opportunity**: ① 「总拥有成本计算器」：按真实任务测 token 消耗（含 reasoning token），揭穿单价幻觉——OpenRouter 自己都说 ground truth 只能是你自己的任务；② 隐私溢价套利：基于开源权重的不训数据托管（西方托管商已按 2 倍 DeepSeek 一方价收费，且有人买单）；③ 29% token / 4% 花费的错位说明企业在低价值工作负载上先切开源——「工作负载分级路由」咨询与中间件正当时
