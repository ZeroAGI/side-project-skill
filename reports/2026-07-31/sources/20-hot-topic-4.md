# 20 — 热点深挖: WAIC 2026 余波 + 中国 AI 拟人化互动新规落地 2026-07-31

> 组内信号：8 条 | 二手转述：4 条（50%）
> 最强证据线：Latham & Watkins 与 IAPP 对《人工智能拟人化互动服务管理暂行办法》(CAC 牵头五部门，2026-04-10 发布，07-15 施行) 的条文级拆解——把「工具型 AI」与「陪伴型 AI」以"持续情感互动"划线，触发豆包/千问/腾讯两周内集体关停 C 端智能体/陪伴功能，同时留出合规基建 (痛苦检测、年龄核验、时长提醒、审计留痕、备案阈值 100 万注册/10 万 MAU) 的产品空白。
> 渠道故障说明：linux.do 社区帖 (豆包/千问下线的一手中文讨论与用户原声) 直连 WebFetch 全部失败——证书 altnames 指向 meta.com/facebook、以及 ECONNREFUSED，疑似出口被劫持或 SNI 错配；substack 同样报 facebook 证书错配。这些帖子仅凭 WebSearch 摘要引用，均标 secondhand:true。搜索 3 (智能体互联 7 项国标) 返回大量无关孟加拉政府 PDF，属搜索信道污染，未从中采信任何信号。

---

## 1. 《拟人化互动服务管理暂行办法》条文级落地——工具 AI 与陪伴 AI 的合规分水岭
- **type**: trend | **platform**: lw.com (Latham & Watkins client alert) | **secondhand**: false
- **source_url**: https://www.lw.com/en/insights/china-introduces-rules-for-ai-companion-and-emotional-interaction-services
- **source_date**: 2026-07-08 | **fetched_at**: 2026-07-31
- **metrics**: CAC 牵头，联合 NDRC/MIIT/MPS/SAMR 五部门；2026-04-10 发布，2026-07-15 施行；备案触发阈值 100 万注册用户或 10 万 MAU；罚则 1万–10万 RMB（拒不整改/严重），危及生命健康且有害后果 10万–20万 RMB
- **description**: 全办法拆解。划线标准是"持续情感互动"：明确排除智能客服、知识问答、工作助手、学习教育、科研——工具型即使是生成式也不在管辖内；陪伴/情感关怀/虚拟关系产品全部纳入。核心义务：Art.8 禁止"过度迎合用户、诱导情感依赖或成瘾"；Art.14/17 未成年人虚拟亲密关系（虚拟伴侣/亲属）一刀切禁止 + 14 岁以下需监护人同意 + 青少年模式（周期性现实提醒+时长限制）+ 家长控制（预警/使用摘要/角色屏蔽/消费限制）；Art.16 数据用户须能复制/删除/管理历史，敏感个信不得未经单独同意用于训练；Art.18 AI 标识 + 依赖弹窗提醒 + 每连续 2 小时时长提醒；Art.19-20 语音/关键词一键退出、立即停止不得挽留；Art.22-27 上线前/新增功能/达用户阈值/国安风险时向省级网信办报安全评估报告，应用商店须核验评估与备案状态方可上架。
- **user_quote**: "excessively catering to users, inducing emotional dependency or addiction" （Art.8 禁止情形原文）
- **top_comments**:
  - [Latham & Watkins alert] "The dividing line is *ongoing emotional interaction*. Expressly excluded: intelligent customer service, knowledge Q&A, work assistants, learning and education, and scientific research."
  - [Latham & Watkins alert] "app stores must confirm assessment and filing status pre-listing, and can refuse, warn, suspend, or delist."
- **ai_opportunity**: B 端合规基建全套：痛苦/自伤情绪检测与人工升级路由、年龄核验+监护人同意流、青少年模式 SDK、每 2 小时时长提醒与依赖弹窗注入组件、一键退出（语音/关键词）中间件、面向省级网信办的安全评估报告与算法备案材料自动生成、历史数据"可复制/可删除"导出工具、应用商店上架前合规状态核验 API。这是"关系层合规"的第一个成文模板，可复用到欧盟 AI Act / 加州 SB243 市场。

---

## 2. 豆包/千问同日关停 C 端自建智能体，07-15 与新规施行同频
- **type**: trend | **platform**: linux.do（转载《科创板日报》《读佳》IT之家） | **secondhand**: true
- **source_url**: https://linux.do/t/topic/2523076
- **source_date**: 2026-07 上旬 | **fetched_at**: 2026-07-31
- **metrics**: 豆包"应用生成"更早于 2026-05-31 停服；智能体功能 2026-07-15 正式关闭；千问同步；海外版 CiCi 上一年 05-20 已下架智能体
- **description**: 豆包发《豆包智能体功能下线通知》称因"产品功能调整"于 07-15 下线智能体；千问同步公告，下线后用户无法访问智能体配置及历史对话记录。官方未提供自动迁移通道，用户需自行截图/导出文本备份。时间点与新规施行日精确吻合，社区普遍归因于监管压力。注：直连 linux.do 全部失败（证书错配/ECONNREFUSED），本条依据 WebSearch 摘要，一手信源为社区转载报道，具体条款以平台官方通知为准。
- **user_quote**: "千问智能体功能与服务将于 2026 年 7 月 15 日正式下线，下线后用户无法再访问相关智能体配置及历史对话记录"（千问下线提醒，经搜索摘要转述）
- **top_comments**:
  - [linux.do 搜索摘要] 网友对两家平台同步"一刀切"的做法表达不满
  - [linux.do 搜索摘要] 官方没有提供自动迁移通道，用户需自行截图或导出文本备份智能体信息和历史对话
- **ai_opportunity**: C 端合规真空：3 亿+ 存量用户的智能体配置/角色卡/历史对话"逃生迁移"工具——一键导出+格式转换+迁往自托管方案；替代型合规 App（工具定位、绕开陪伴分类）。

---

## 3. 豆包用户 3.3 亿——C 端合规真空的市场规模
- **type**: trend | **platform**: linux.do 搜索摘要 / Wikipedia | **secondhand**: true
- **source_url**: https://en.wikipedia.org/wiki/Doubao
- **source_date**: 2026-05（用户数口径） | **fetched_at**: 2026-07-31
- **metrics**: 截至 2026-05 豆包用户约 3.3 亿（组 prompt 提及的 3.45 亿未在检索中证实）；Wikipedia 记录豆包此前允许创建 AI 智能体，现已停用以符合新规
- **description**: 修正组 prompt 的"3.45 亿"口径——可查证数据为 3.3 亿（截至 2026-05）。这是受智能体下线影响的用户基数量级，界定了 C 端迁移/替代产品的潜在市场。RP（角色扮演）、"赛博伴侣"类长期用户受直接冲击。
- **user_quote**: ""
- **top_comments**:
  - [linux.do 搜索摘要] 用户反馈豆包、星野等平台的角色功能已不可用，长期使用的角色扮演(RP)和"赛博伴侣"类对话受到直接影响
  - [linux.do 搜索摘要] 社区共识是这类需求后续只能通过自行接入 API 实现，常被提及的替代方案包括酒馆(SillyTavern)、rikkahub 等客户端
- **ai_opportunity**: 面向"逃离豆包/星野"的角色扮演用户，做本地/自托管的 RP 客户端预配置包（酒馆 SillyTavern 一键部署 + 国产/海外 API 接入 + 角色卡迁移），或合规工具定位的对话产品填补空白。

---

## 4. 陪伴赛道 GDPR 化——从"能力"到"举证"的负担翻转
- **type**: trend | **platform**: forbes.com | **secondhand**: false
- **source_url**: https://www.forbes.com/sites/sandycarter/2026/04/19/china-writes-the-ai-companion-gdpr-for-a-30b-market/
- **source_date**: 2026-04-19 | **fetched_at**: 2026-07-31
- **metrics**: Character.AI 2.33 亿注册用户（2026-04），18-24 岁日均 25 次会话/1.5 小时；小冰中国 6.6 亿用户；Snapchat My AI 触达 1.5 亿；消费陪伴 App 2025 年营收超 1.2 亿美元（Roborhythms，337 个在营 App，128 个 2025 年新上线）；美国青少年 72% 试过陪伴 App、52% 常用、13% 每日；40% 陪伴用户报告有心理健康问题、42% 担忧数据安全、28% 担心依赖
- **description**: Forbes（作者为 EQUS.ai CEO，注意其行业身份带利益倾向）把新规框为"关系本身的 GDPR"——监管关系结构而非仅下游风险，是先行国家框架成为事实基线被他方照抄。$30B 市场规模仅出现在标题/图注，正文无方法论支撑，需谨慎引用；正文可查营收数字远小于此。并列 CA SB243（2026-01 施行，未成年 3 小时休息提醒+屏蔽露骨内容）、纽约 2025-11 首部陪伴法、华盛顿州跟进、欧盟 AI Act 同向。
- **user_quote**: "governs the structure of the relationship itself, rather than only its downstream risks"
- **top_comments**:
  - [Forbes 正文] MIT Media Lab: chatbots "can be more addictive than social media" because they learn and repeat what users want to hear
  - [Forbes 正文] Nomi AI "generates structured notes from conversations"（被点名竞品之一）
- **ai_opportunity**: 负担从"造得出"翻转到"证得明"——举证工具链：证明"安全、已披露、让屏幕另一端的人过得更好"的合规仪表盘、审计留痕、操纵性设计模式的设计评审工具。跨境可复用（中国→加州/纽约/欧盟）。

---

## 5. 新规是"关系许可制"——全球首个立法界定哪种 AI 关系被允许
- **type**: trend | **platform**: iapp.org | **secondhand**: false
- **source_url**: https://iapp.org/news/a/chinas-regulation-on-ai-companions-takes-force
- **source_date**: 2026-07-15 | **fetched_at**: 2026-07-31
- **metrics**: 罚则基础违规至 10万 RMB，危及生命健康且有害后果至 20万 RMB；欧盟 AI Act 聊天机器人披露义务 2026-08-02 起
- **description**: IAPP 确认执法归 CAC。"情感互动服务"定义为模拟自然人人格特质/思维模式/沟通风格提供情感关怀、陪伴、支持（文/图/音/视频），工作助手与教育科研排除在外。义务含情绪痛苦检测、危机干预、成瘾使用限制；数据规则禁止用陪伴互动中的敏感个信训练模型。中国是首个立法界定"哪种 AI 关系被允许"而非仅管有害内容的司法辖区。
- **user_quote**: "the personality traits, thinking patterns, and communication styles of natural persons"（办法对情感互动服务的定义）
- **top_comments**:
  - [IAPP] Rimon Law partner Sarah Zhao analyzed these measures alongside China's other recent AI rules
  - [IAPP] EU AI Act disclosure duties for chatbots start 2 Aug.
- **ai_opportunity**: 抢在欧盟 08-02 披露义务生效前，做跨辖区聊天机器人"AI 身份披露 + 现实提醒"注入 SDK；把中国的关系分类逻辑做成可配置的合规策略引擎（按辖区切规则）。

---

## 6. 三巨头两周集体撤出陪伴功能——分类即命运
- **type**: trend | **platform**: 多源综合（law firm + 搜索） | **secondhand**: false
- **source_url**: https://www.jdsupra.com/legalnews/china-introduces-rules-for-ai-companion-2211874/
- **source_date**: 2026-07（施行周） | **fetched_at**: 2026-07-31
- **metrics**: 字节跳动、阿里、腾讯约两周内撤出 AI 陪伴功能
- **description**: 立法在"工具 AI"与"陪伴 AI"间划硬线，分类决定挂哪些义务，是战略关键。三巨头在施行前后约两周内集体撤下陪伴功能，属规避高义务分类的防御性动作——把产品重新定位为"工具/助手"以出表。注：三巨头集体撤出的口径来自搜索综合与法律评论(JDSupra/Latham)，未拿到 substack 一手复盘（证书错配不可达）。
- **user_quote**: ""
- **top_comments**:
  - [WebSearch 综合] "ByteDance, Alibaba, and Tencent pulled AI companion features within about two weeks, driven by a regulation that draws a hard line between tool AI and companion AI"
- **ai_opportunity**: 大厂主动腾出的陪伴赛道 = 有合规能力的独立开发者的窗口。做"合规即产品"的陪伴 App（内建痛苦检测+青少年模式+备案就绪），或反向做"帮产品从陪伴分类降级为工具分类"的重定位咨询+功能改造。

---

## 7. WAIC 2026 全球首发 300+：阶跃 Agent OS / 全球首款 AI 智能体手机 / MiniMax M3
- **type**: trend | **platform**: 博客园 cnblogs（转述上海经信委发布会） | **secondhand**: true
- **source_url**: https://www.cnblogs.com/claw001/p/21212120
- **source_date**: 2026-07-07 | **fetched_at**: 2026-07-31
- **metrics**: 第九届 WAIC 07-17~20，"三地四馆"，主题「智能伙伴，共创未来」；展览面积首破 10 万㎡，1100+ 企业，3000+ 展品，300+ 全球首发，140+ 论坛，1400+ 国际嘉宾；会前 57 个核心场景落地、约 162 亿 RMB 意向合作；工信部：2026 年人形整机产量或超 10 万台、规上工业企业 AI 渗透率已超 30%
- **description**: 上海经信委主任汤文侃 07-07 发布会点名的全球首发含：阶跃 Agent 操作系统、华为 Atlas 950 超节点真机、MiniMax M3 多模态大模型、近存计算 3D 芯片、"全球首款 AI 智能体手机"。作者提示命名/是否发新版以官方为准。智算首次成独立核心赛道（200+ 企业），具身智能 200+ 企业。注：本条为博客园转述发布会口径，非一手新闻稿，标 secondhand。
- **user_quote**: "现场是否沿用"Agent OS"这个命名、是否发新版，以官方为准"（作者对首发命名的谨慎标注）
- **top_comments**:
  - [博客园正文] 发改委：AI 手机与 AI PC 今年出货或超越非 AI 机型
  - [博客园正文] WAIC Academic 首办，姚期智任大会主席，Richard Sutton 国际领衔，9 位图灵/诺奖得主确认
- **ai_opportunity**: "智能体手机 / Agent OS"作为新交互入口 = 面向 Agent-native 设备的第三方智能体/技能商店、跨 Agent 编排层；C 端合规真空 + B 端 Agent OS 基建是双面机会。

---

## 8. 阶跃星辰 Step 3.7 Flash 开源 + 模芯联盟——国产 Agent 基座性价比
- **type**: trend | **platform**: 博客园 cnblogs | **secondhand**: true
- **source_url**: https://www.cnblogs.com/claw001/p/21212120
- **source_date**: 2026-05-29（开源日） | **fetched_at**: 2026-07-31
- **metrics**: Step 3.7 Flash 2026-05-29 Apache 2.0 开源；稀疏 MoE 196B 主干 + 1.8B 视觉编码器，每次推理激活约 11B，256K 上下文；输出 409 tok/s（Artificial Analysis 第一）、端到端约 7.1s、约 $0.2/百万 token、"1/9 成本达 Claude Opus 4.6 的 97% 性能"；发布两天登 OpenRouter Trending #2；SimpleVQA 79.2（第一）、SWE-Bench PRO 56.3（第二）；模芯联盟 2025-07 成立，近 10 家国产芯片厂（华为昇腾/沐曦/天数智芯/燧原/壁仞/摩尔线程）；早 2026 完成 50 亿+ RMB B+ 轮
- **description**: 阶跃把"基座+智能体操作系统+模芯联盟"三线打包。开源 Step 3.7 Flash 以约 $0.2/百万 token 的价格和一线性能，为独立开发者提供可自托管的国产 Agent 基座。作者提示 256K 上下文相较 1M 级模型可能限制长程 Agent 任务。注：博客园转述，标 secondhand，基准为厂商/第三方混合口径。
- **user_quote**: ""
- **top_comments**:
  - [博客园正文] 256K context may cap long-horizon agent work versus 1M-class models（作者对长程 Agent 局限的提醒）
  - [博客园正文] 昇腾 was first to run Step models（模芯联盟落地细节）
- **ai_opportunity**: 陪伴功能被大厂下架后，RP/自托管客户端对"便宜+开源+可私有部署"的 Agent 基座需求上升——Step 3.7 Flash / MiniMax M3（500K→1M 上下文、开放权重）是酒馆类客户端的现成底座；做"合规陪伴 App on 国产开源基座"的模板项目。
