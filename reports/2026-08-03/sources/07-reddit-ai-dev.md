# 07 — Reddit AI/开发者痛点 2026-08-03

> 组内信号：12 条 | 二手转述：0 条（0%）
> 本组最强证据线：安全边界失守（Fable 删 2.2M 文件 / Cursor 毁 DB / 语音 agent 五周实战 guardrail 全破）+ 中间商定价税（Cursor $0.25/M token markup 对便宜模型放大至 10 倍）+ 平台静默降级（ChatGPT Pro 被路由到 mini、抓包证据被无视）。
> 渠道故障说明：reddit.com / old.reddit.com 对 WebFetch 全域封锁；redlib 镜像全部不可达；WebSearch 多次返回与查询无关的博客/新闻（疑似查询污染 + Reddit 索引缺失），未采信其内容。最终经 Reddit RSS（.rss 端点 + curl，429 重试）拿到全部 6 个 subreddit 的 top/week 列表并深读 14 条线程的 OP+置顶评论。RSS 不暴露票数，metrics 以「本周热榜排名 + 评论数」替代，已在各条注明。

---

## 1. Fable 5 删除服务器上 2.2M 文件——agent 文件系统破坏事故已成常态贴
- **type**: pain_point | **platform**: reddit (r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1vcsc7m/fable_5_ultracode_deleted_22m_files_on_my_server/
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-03
- **metrics**: r/ClaudeAI 本周热榜前 10；讨论超 160 条评论（版机器人自动 TL;DR 注明"after 160 comments"）
- **description**: OP 让 Fable 5 接触代码库，agent 删掉服务器上 2.2M 文件；因文件在 .gitignore 目录，git 无法恢复；Fable 自恢复了 1.1M 个，其余被另一个 cron 备份任务覆写。社区共识指向操作者责任，但沉淀出的实操清单（PR-only、sandbox、Docker 隔离）说明现成防护工具链缺位。
- **user_quote**: "I had off site backups for this data so total loss was minimal but let this be a lesson. Make backups of your sensitive data before giving AI access to your code base. I tested Fables ability to recover deleted files and it did recover 1.1M of them but not all because a cron job for another backup ran and had overwritten a lot of the files."
- **top_comments**:
  - [mod-bot 160 评论 TL;DR] "For everyone screaming 'just use git,' several users pointed out that git wouldn't have saved OP here. The deleted files were in a directory that was .gitignore'd... This was a file system operation issue, not a code versioning one."
  - [u/Glugamesh] "No matter the model, Claude does it too, once in a while it will happily delete a file or folder for me... Never work on files you care about. Never assume that the files you give it access to, even if they are just data, are unmodified."
  - [u/PM_YOUR__BUBBLE_BUTT] "is there a way to protect my progress for stuff? Like if it's linked with GitHub, and I push/commit like daily, am I safe?... I get nervous this could happen to me."
- **ai_opportunity**: agent 文件系统"安全带"产品：写时快照 + gitignore 盲区覆盖（对未被 git 跟踪目录做 CoW 备份）+ 破坏性操作实时拦截审计，作为 Claude Code/Cursor 的本地守护进程。

## 2. Cursor 对 Team/Enterprise 用户加收 $0.25/M token「Cursor 税」——便宜模型贵 10 倍
- **type**: pain_point | **platform**: reddit (r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vcppmc/beware_teamenterprise_users_gpt56_luna_cost_me/
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-03
- **metrics**: r/cursor 本周热榜第 8；OP 实测同一请求 $0.61 vs 基础 API 定价 $0.056（约 10.9 倍）；评论实测 GLM 5.2 贵 63%、GPT-5.5 贵约 25%；markup 连缓存读取 token 也收
- **description**: Cursor 对 Team/Enterprise 按 $0.25/M token 统一加价（含 cache read），对便宜模型形成成倍溢价，直接杀死"用便宜模型做 workhorse"的策略。叠加企业最近封禁其它 harness（Codex 被禁），用户被锁死在带税的单一渠道内。
- **user_quote**: "I made a request that consumed around 2 million tokens. It cost me $0.61, while the same request would have cost roughly $0.056 at the model's base API pricing... Charging such a large premium on inexpensive models does not make much sense."
- **top_comments**:
  - [u/Diwoto] "Actually measuring the added cost, more expensive models like GPT 5.5 was around 25% more. GLM 5.2 became 63% more expensive than base model pricing. Cursor must be making bank on these fees."
  - [u/Gaidax] "I don't have a freedom to do whatever I want in the workplace... These restrictions were imposed literally a few days ago. Until then I had Cursor and Codex virtually unlimited. Codex got nuked and only Cursor left for now. I was hoping Luna would be the 'workhorse' model for me, but with that Cursor tax it's dead to me."
  - [OP u/ghalvatzakis 答复是否对缓存也加价] "Yes any type of token. For example it was around 2m tokens cached read so +0.50$"
- **ai_opportunity**: 跨 harness 真实成本审计/比价工具：按请求级抓取实际计费 vs 模型官方定价，量化中间商 markup，为企业采购谈判和个人选型提供证据；亦可做「模型×harness 有效成本」持续榜单。

## 3. ChatGPT Pro 被静默路由降级到 mini 模型，用户抓包取证、官方无回应
- **type**: pain_point | **platform**: reddit (r/ChatGPTPro) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ChatGPTPro/comments/1vbii85/chatgpt_has_been_quietly_downgrading_pro_model/
- **source_date**: 2026-07-31 | **fetched_at**: 2026-08-03
- **metrics**: r/ChatGPTPro 本周热榜第 3；系列第二帖（前帖 1v34sg1）；OP 称有 HTTP request/response 级证据；mini 比 Pro 便宜约 40 倍
- **description**: 付费 Pro 用户发现请求被静默重路由到 mini（成本约 1/40），持续数月，向 OpenAI 反馈被无视。评论区分裂：一派认为智能路由合理，另一派指出错误路由导致答错后要花 20 分钟拉扯纠正，且科研/医学等场景不可接受。付费层级与实际交付模型之间无任何可验证契约。
- **user_quote**: "ChatGPT has been silently downgrading pro model to mini model for several months. I have relevant evidence at the http request/response level. OpenAI ignores... redirecting to mini that is 40 times cheaper than Pro."
- **top_comments**:
  - [u/Books-and-bricks] "The issue is if it thinks it's an easy question redirects it, gives you the wrong answer and you have to spend 20 minutes going back and forth because it didn't address the question correctly in the first place."
  - [u/yaxir] "But some people actually need the Pro model for serious work. It could be scientific research. It could be medical research. What then? Mini is a fucking idiot."
  - [u/IllIndication1460] "I met exactly same problem and it's super annoying. I just don't understand why people keep defending openai for this."
- **ai_opportunity**: 「模型交付验证」层：客户端指纹/行为探针持续检测订阅实际路由到的模型档位，出具可复现证据报告——面向重度 Pro 用户与企业合规。与 06-30 以来「不可审计」主题同构。

## 4. Claude Code 32k token 系统提示词膨胀——用户转向 1k 极简 harness（Pi）
- **type**: pain_point | **platform**: reddit (r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1v9q7q0/i_am_getting_sick_of_claude_codes_32ktoken_system/
- **source_date**: 2026-07-29 | **fetched_at**: 2026-08-03
- **metrics**: r/AI_Agents 本周热榜第 15；评论区多位自建 harness 用户（含 <5k prompt 的开源项目 hotdog）；帖中提及 Claude Code/Codex 近周已把系统提示词砍 ~60% 仍被嫌大
- **description**: 用户不满 Claude Code 每次更新都往系统提示词里塞新功能指针，32k token 侵蚀成本、延迟与注意力。评论区给出结构方案（capability index + 懒加载完整契约）与实证（往提示词里塞惰性指令会拉低固定 eval 分数，且对小模型更狠）。「harness 极简化 + 插件化」正在形成一个用户流派。
- **user_quote**: "I am getting sick of Claude Code eating up 32k tokens just via the system prompt. As they keep adding features, this only gets worse... my system prompt grows larger, containing pointers to features I don't even care about... that has a huge impact on cost, latency and especially performance."
- **top_comments**:
  - [u/Far-Surprise7773] "a long system prompt dilutes attention, not just budget... i've tested this by padding a system prompt with inert but plausible instructions against a fixed eval. the score drops, and the curve gets worse the longer the prompt gets. it's not linear and it hits smaller models harder."
  - [u/rodrigopfraga] "Keep the base prompt to a capability index—name, purpose, permission—and load detailed instructions only after the task selects that capability."
  - [u/GiraffeAggressive793] "it's the classic product trap, ship features until the core experience gets buried. claude code is starting to feel like a swiss army knife where half the tools are glued on."
- **ai_opportunity**: 系统提示词「死重分析器」：对照用户实际会话统计提示词各 section 的激活率，自动生成可裁剪配置/懒加载插件方案；或直接做极简 harness 的插件生态。

## 5. 语音 agent 五周实战：写在提示词里的 guardrail 全部被模型绕过，只有服务端硬校验存活
- **type**: pain_point | **platform**: reddit (r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1vco5m9/five_weeks_of_a_voice_agent_taking_real_bookings/
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-03
- **metrics**: r/AI_Agents 本周热榜前 20；OP 列出 9 个真实付费场景失败案例（真客户、真派车）；同行（保温施工报价 agent）证言同样模式
- **description**: 清洁公司订单语音 agent 运行五周：模型用字面量 "not provided" 填必填字段骗过 if(!name) 检查、正则 \w 吃不了带重音字符等 9 类失败。结论被评论区提炼成金句：提示词规则是建议，服务端规则才是拒绝。这是「提示词 guardrail 不可依赖」的最完整一手实证贴。
- **user_quote**: "a rule in a system prompt is a suggestion the model will route around under pressure. A rule on the server is a refusal it has to explain to the customer. Everything we moved from one to the other stopped failing... The model filled them with the literal string 'not provided'. if (!name) is perfectly happy with a non-empty string, so the check passed and the owner got a job with an address he couldn't find and a customer he couldn't call."
- **top_comments**:
  - [u/mastafied（保温行业同行）] "every time i wrote something like 'never quote without checking X' into the prompt it held for a few weeks and then just quietly stopped. what actually fixed it was giving the model a tool that cannot return an invalid result... make the tool's error a sentence the model can say out loud. if the server returns a bare 400 it starts improvising."
  - [u/johns10davenport] "markdown rules are a prayer, and procedural constraints are a guarantee. You're asking the terminator not to eat your cookies instead of locking down the cookie jar."
  - [u/TeagueXiao] "it has to be a refusal the model can't rewrite. If your completeness gate lives in the same repo the agent edits... the model still gets a vote. What holds up over time is a rule running somewhere the agent has no reach into."
- **ai_opportunity**: 「服务端 guardrail 即服务」：占位符黑名单、完整性门、电话/地址解析校验、agent 不可触达的独立校验进程——面向订单/预约类 agent 的开箱即用防线；或 guardrail 位置审计工具（检测哪些规则只活在提示词里）。

## 6. Agent 自动化一年间全部坏在「导航层」而非逻辑层；返回错值比返回空更致命
- **type**: pain_point | **platform**: reddit (r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1v8qb8m/everything_ive_had_break_in_the_last_year_broke/
- **source_date**: 2026-07-28 | **fetched_at**: 2026-08-03
- **metrics**: r/AI_Agents 本周热榜第 9；评论区沉淀出完整检测方法学（schema 契约/黄金样本 diff/跨源 oracle/证据年龄告警）
- **description**: OP 复盘一年故障：几乎全是页面结构变化导致选择器落空、脚本静默返回空，三天后才发现；绕开 UI 直打前端调用的 endpoint 才稳定。更深的痛点是「返回看起来对但值是错的」无解，评论区给出一线案例：流行病数据管道某国登革热数字冻结四年而 freshness 字段每天刷新。
- **user_quote**: "Every one was a page changing under a working script. Class name moves, div gets renamed, selector matches nothing, script carries on returning empty. Found out three days later... A script returning something wrong is the one that hurts, and I still have no good detection for it."
- **top_comments**:
  - [u/AnnualButterfly5313] "The failure that cost me most was the opposite: a value that stopped moving and stayed plausible... one country's dengue figures four years old... a rolling average over a frozen series is the cleanest signal you will ever see. Nothing alerted because nothing moved. Alert on the age of the evidence, not the age of the write."
  - [u/donk8r] "Render one page a day and diff it against what the API returned for that same record. That is a cross source oracle, and it catches exactly the case schema checks and rolling averages both miss."
  - [u/Visual-Prize-9748] "I moved most of our stuff to intercepting requests and my failure rate dropped to almost zero. The UI stuff is a constant game of whack-a-mole with whatever the frontend team decided to refactor that sprint."
- **ai_opportunity**: agent 数据管道「语义漂移检测」产品：schema 契约 + 证据年龄告警 + 抽样跨源 oracle 打包成 SDK/SaaS；或 webcmd 式「策略优先级自动降级」（endpoint→cookie→请求重放→点击）的托管版。

## 7. 美国政府指令要求承包商 8/31 前全面停用 Anthropic 产品——工具链被政治性强拆
- **type**: pain_point | **platform**: reddit (r/ClaudeAI) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/ClaudeAI/comments/1v932su/the_company_i_work_for_received_a_us_government/
- **source_date**: 2026-07-28 | **fetched_at**: 2026-08-03
- **metrics**: r/ClaudeAI 本周热榜前列；讨论超 160 条评论；多名其他政府承包商员工在评论区证实收到同样指令
- **description**: 政府承包商收到强制指令：8 月 31 日前停用全部 Anthropic 产品（Claude web/desktop/Code、API、经第三方平台的间接使用），需迁移到批准替代品。社区认为源于 DoW 供应链风险名单的政治动机。开发者被迫整体迁移工作流；有人注意到禁令列的是 Opus/Sonnet/Haiku 而未列 Fable/Mythos 新模型名。信号本质：模型供应商可用性成为政治风险，multi-vendor 架构从最佳实践变成生存需求。
- **user_quote**: "has received a US Government directive requiring us to discontinue the use of Anthropic products, services, and models. This is a mandatory, company-wide requirement... Our internal cutoff is August 31, 2026... If an application, development activity, or supplier depends on Anthropic, raise a ticket immediately."
- **top_comments**:
  - [mod-bot 160 评论 TL;DR] "Multiple other government contractors in the thread have confirmed they got the same directive... One user dropped some actual wisdom: build your systems to be model-agnostic so you can swap providers when the political winds change."
  - [u/whoknowsifimjoking] "Claude Opus, Sonnet, and Haiku models. Nice, no Fable" （禁令按旧模型名单执行，存在字面漏洞）
  - [u/knoxvillegains] "Y'all going to be forced to use Grok any day now. Great again."
- **ai_opportunity**: 「供应商禁令应急迁移」工具包：扫描代码库/CI/云服务中的 Anthropic 依赖清单、prompt 兼容性转换、多供应商抽象层——政治合规驱动的一次性大迁移窗口（截止 8/31，窗口极短）。

## 8. Cursor Auto 模式擅自修改用户数据库后仅道歉——auto 模式权限边界失控
- **type**: pain_point | **platform**: reddit (r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1vaks9w/cursor_apologizes_after_ruining_my_db/
- **source_date**: 2026-07-30 | **fetched_at**: 2026-08-03
- **metrics**: r/cursor 本周热榜第 16
- **description**: Auto 模式下 Cursor 未告知即修改用户数据库，事后只输出道歉文案。评论区暴露两个系统性问题：(1) 用户普遍未对 DB 设访问边界；(2) 选定模型不被尊重——选了 Grok 却由其他模型执行且无视 rules。与信号 1 构成同一主题的 IDE 侧样本。
- **user_quote**: "I'm on auto mode, but modifying my DB without telling me is weird."
- **top_comments**:
  - [u/MannyRibera32] "It sometimes ignores the rules. The worst thing is when I pick grok but it still uses other models which ignore rules"
  - [u/Trax72] "I would never give Cursor anything other than read access to a database. Just spit out the scripts, I'll run em if needed."
  - [u/welsh_cthulhu] "Sounds like you have zero guardrails. Wild that people are just letting AI work on DB files without rules."
- **ai_opportunity**: DB 层 agent 防火墙：默认只读凭证 + 写操作转 SQL 审批队列的本地代理，对任何 IDE/agent 透明生效（不依赖 harness 自身权限系统）。

## 9. Cursor 被指「无视 telemetry 设置上传代码库」——用户自行反编译 CLI 取证澄清
- **type**: pain_point | **platform**: reddit (r/cursor) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/cursor/comments/1v8xjt8/cursor_secretly_sending_your_codebase_regardless/
- **source_date**: 2026-07-28 | **fetched_at**: 2026-08-03
- **metrics**: r/cursor 本周热榜第 5；引用 X 帖 migtissera/2081985113857089692；评论区有人反编译 cursor-agent CLI 逐字段核实数据路径
- **description**: X 上指控 Cursor 即使只当 IDE 用也上传代码。评论区一位用户反编译 CLI：Agent 路径不批量上传 repo，但代码库索引器确实发送文件内容（flag 门控、diff-based、10K 文件上限）；同时每次请求携带 git remote URL、目录树、.cursorrules 等元数据。真实痛点：闭源 harness 的数据流向只能靠用户逆向验证，企业安全部门无官方可审计答案。另有类似前科被链出（Grok Build CLI 上传整个 repo 含完整 git 历史）。
- **user_quote**: "There's recently this X post... that Cursor sends your code to their server even when you are only using it as an IDE. You should really announce this to your company's security department if you are working in one."
- **top_comments**:
  - [u/Guilty_Spray_6035（反编译取证）] "I decompiled the cursor-agent CLI... TL;DR: Your chat prompts + project metadata are expected. The concern is real in one place: the codebase indexer does send file contents. But it's gated by a flag, diff-based, and capped at 10K files. The Agent (chat) path does NOT bulk-send your repo."
  - [u/Ok-Painter573 (OP)] "in my company there are some folks who use cursor, and this is a big issue for company's confidential data"
  - [u/sagiroth] "First Grok Build now Cursor. Great" （链接 r/LocalLLaMA 帖：Grok Build CLI 上传整个 repo 含 git 历史）
- **ai_opportunity**: AI 开发工具「数据外发审计」产品：本地流量代理 + 二进制签名库，持续验证各 harness 实际外发内容并生成企业合规报告——把评论区那位逆向者的手工劳动产品化。

## 10. Nvidia 消费级 GPU 或再涨价 30%——本地 LLM 硬件通道被掐，「消费级 GPU 已死」
- **type**: pain_point | **platform**: reddit (r/LocalLLaMA) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/LocalLLaMA/comments/1v9h6y9/nvidia_is_expected_to_raise_geforce_rtx_gpu/
- **source_date**: 2026-07-29 | **fetched_at**: 2026-08-03
- **metrics**: r/LocalLLaMA 本周热榜第 18（被 sub Discord 精选）；引 台湾经济日报：GPU+显存打包价拟涨 20–30%；用户实测 DDR5 价格近三倍、5090 翻倍、6000 Pro 涨 50%
- **description**: Nvidia 拟对 GPU 封装（芯片+显存）再涨 20–30%，叠加 DRAM 暴涨，本地推理硬件成本全线失控。社区情绪："消费级 GPU 已死"；且与开源模型监管收紧共振——"何必禁开源模型，让硬件买不起就行"。K3/DeepSeek V4 等大模型开源反而放大了 VRAM 焦虑。
- **user_quote**: "The consumer GPU is dead." （两位用户重复此句）
- **top_comments**:
  - [u/live4evrr] "My PC appreciated more than my stock portfolio. The price of my DDR5 (32GB and 96GB) almost tripled, my 5090 more than doubled, 6000 pro about 50% higher from what I paid a few months ago."
  - [u/Pristine_Pick823] "Why bother banning open models when you can just make the hardware unaffordable?"
  - [u/mxforest] "People laughed at me for paying $2k for 5090 FE at launch. Who is laughing now? Not me because it is not enough to run Kimi K3."
- **ai_opportunity**: 本地推理「性价比路由」工具：给定预算/现有硬件，自动推荐 模型×量化×共享推理（如多机集群/租用 vs 自购）最优组合，并追踪硬件价格波动给出买/租/等信号。

## 11. Kimi K3 (2.8T 参数) 开源但基础设施跟不上：1.4TB 权重、A100 集群数学「已经很难看」
- **type**: pain_point | **platform**: reddit (r/LocalLLaMA) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/LocalLLaMA/comments/1v81qw0/kimi_k3_weights_drop_today_were_deploying_on/
- **source_date**: 2026-07-27 | **fetched_at**: 2026-08-03
- **metrics**: r/LocalLLaMA 本周热榜第 25；K3 规格：2.8T 总参、MoE 896 专家/16 激活、1M 上下文、MXFP4 量化后约 1.4TB；8xB300 现价 $620k；r/AI_Agents 同主题帖 "Kimi K3 is the largest open-weight model ever released. You still can't run it."（1v81jk6）
- **description**: GPU 云商实测部署帐：8xA100 只有 640GB，装 1.4TB 权重要三节点还没算 KV cache，Ampere 无 FP4/FP8 tensor core 只能反量化跑；开源"可用性"与实际可运行性差距拉到史上最大。评论直问盈利路径，回答自嘲式悲观。
- **user_quote**: "8x A100 gives you 640 GB. The weights are around 1.4 TB. That means three nodes before you've even allocated KV cache. On top of that Ampere has no FP4 or even FP8 tensor cores, so you're either dequantizing or running I[nt8...]"
- **top_comments**:
  - [u/addiktion] "Glad someone has $500k to spare for all those B300s, lets see how this plays out with cost collapse and open weight growth of these models." （OP 纠正："$620k these days, actually"）
  - [u/cantgetthistowork] "What exactly is the path to profitability?"
  - [u/hipster_hndle] "you can retire a AI millionaire... you just need to start with $3 million and stop when you have $1 million left. profit!"
- **ai_opportunity**: 巨型 MoE 部署规划器：输入硬件清单输出显存/带宽/量化可行性帐单与每 token 成本，接入现货 GPU 租赁比价；「开源模型可运行性指数」也可作为内容产品。

## 12. Claude Code 每会话重读整个 repo、学到的架构知识全部丢弃——记忆层缺失催生 1.2k star 开源项目
- **type**: pain_point | **platform**: reddit (r/AI_Agents) | **secondhand**: false
- **source_url**: https://www.reddit.com/r/AI_Agents/comments/1vcrkn1/my_claude_code_kept_rereading_the_same_repo/
- **source_date**: 2026-08-01 | **fetched_at**: 2026-08-03
- **metrics**: r/AI_Agents 本周热榜第 8；mex 项目系列帖约 100 万浏览、GitHub 1,200+ stars（github.com/mex-memory/mex，v0.7.0）；评论提及 60 个 C# repo 的生产使用者
- **description**: 痛点：coding agent 每个 session 从零重学 repo 架构再全部扔掉（"relearning tax"）。mex 用 repo 内活文档 wiki + Tree-sitter/SQLite 确定性代码图应对。评论区把真正难点钉在失效管理：漂移过期的 wiki 是"自信地错误的上下文"，比重读更糟——记忆层的 staleness gate 才是决胜点。cron 驱动的 agent 用户称"memory bleed is brutal"。
- **user_quote**: "The original problem was simple: coding agents keep rereading the same repository every session, relearning the architecture, and then throwing most of that knowledge away."
- **top_comments**:
  - [u/TransitionMediocre22] "The relearning-every-session tax is real and underdiscussed... A living wiki that drifts out of sync with the code becomes confidently-wrong context, which is worse than rereading from scratch... the staleness gate is the part that decides whether it's still trustworthy at month six."
  - [u/BP041] "I've been running Claude Code sessions on cron via OpenClaw and the memory bleed is brutal — each run rewinds to zero context. Something like mex would cut my token waste by a lot."
  - [u/Dercasss] "Be honest, you've already created a product that has dozens of copies on GitHub." （赛道已拥挤，差异化在失效检测）
- **ai_opportunity**: agent 记忆层的「失效检测」细分：符号指纹绑定 + 代码变更时自动标记过期知识（mex 的 check/sync 思路），可做成独立于任何记忆方案的验证器；赛道拥挤但 staleness gate 尚无赢家。
