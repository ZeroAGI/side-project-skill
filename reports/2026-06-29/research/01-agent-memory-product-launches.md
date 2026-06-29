# AI Agent Memory / Context Persistence Space: Comprehensive Landscape Report (2025-2026)

---

## 1. NEW PRODUCT LAUNCHES

### 1.1 Mem0 Platform Updates

| Date | Release | Details |
|------|---------|---------|
| Aug 2025 | Vercel AI SDK Integration | `@mem0/vercel-ai-provider` supporting SDK V5, multimodal file support |
| Sep 2025 | Valkey Support (v0.1.118) | High-throughput distributed storage backend |
| Sep 2025 | Neptune Analytics | AWS-native graph memory support as alternative to Neo4j/Kuzu |
| Oct 2025 | **$24M Series A** | Led by Basis Set Ventures; Seed led by Kindred Ventures; participation from Peak XV, GitHub Fund, YC |
| Nov 2025 | Apache Cassandra Support (v1.0.1) | Enterprise-grade distributed database backend |
| Nov 2025 | ECAI 2025 Research Paper | First broad benchmark of 10 memory approaches on LoCoMo (arXiv:2504.19413) |
| Jan 2026 | v1.0.3 | Inclusion/exclusion prompts, memory depth, use-case settings as project-level config |
| Feb 2026 | v1.0.4 | Metadata filtering, scoped config, timestamp parameter on `update()` for migrations |
| Apr 2026 | Token-Efficient Memory Algorithm | Single-pass hierarchical extraction, multi-signal retrieval. +29.6 pts on temporal queries, +23.1 pts on multi-hop reasoning |
| May 2026 | Benchmark Results | 92.5% LoCoMo, 94.4% LongMemEval, <7K tokens per retrieval call |

**Key metrics**: 48K+ GitHub stars, 14M+ downloads, API calls grew from 35M (Q1 2025) to 186M (Q3 2025), 80K+ cloud developers

**Sources**:
- [Mem0 Series A announcement (TechCrunch)](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/)
- [Mem0 PRNewswire](https://www.prnewswire.com/news-releases/mem0-raises-24m-series-a-to-build-memory-layer-for-ai-agents-302597157.html)
- [Mem0 Research Paper](https://mem0.ai/research)
- [State of AI Agent Memory 2026 (Mem0 blog)](https://mem0.ai/blog/state-of-ai-agent-memory-2026)
- [GitHub - mem0ai/mem0](https://github.com/mem0ai/mem0)

---

### 1.2 Zep Releases

| Date | Release | Details |
|------|---------|---------|
| Jan 2025 | Research Paper Published | arXiv:2501.13956 - Temporal Knowledge Graph Architecture for Agent Memory |
| Apr 2025 | Community Edition Deprecated | Self-hosting now requires Graphiti + Neo4j/FalkorDB/Kuzu |
| 2025 | v3 Rebrand | Rebranded to "Context Engineering Platform" |
| Feb 2026 | Additional Feature Retirements | Further deprecation of community features |
| 2026 | Custom Entity Models | Adaptable business-specific entity types and relationship models |

**Key metrics**: Graphiti open-source engine has 20K+ GitHub stars, 35+ contributors. 63.8% on LongMemEval, 94.8% on DMR. <200ms retrieval latency. SOC 2 / HIPAA compliant.

**Funding**: ~$500K pre-seed (limited public data). Founded 2023 by Daniel Chalef.

**Sources**:
- [Zep official site](https://www.getzep.com/)
- [Zep Temporal KG paper (arXiv:2501.13956)](https://arxiv.org/abs/2501.13956)
- [Graphiti on GitHub](https://github.com/getzep/graphiti)
- [Neo4j blog - Graphiti](https://neo4j.com/blog/developer/graphiti-knowledge-graph-memory/)
- [Zep AI Review 2026](https://baeseokjae.github.io/posts/zep-ai-agent-memory-review-2026/)

---

### 1.3 Letta (MemGPT) Releases

| Date | Release | Details |
|------|---------|---------|
| Sep 2024 | **$10M Seed** | Led by Felicis Ventures; angels include Jeff Dean (Google DeepMind), Clem Delangue (HuggingFace) |
| Feb 2025 | Stateful Agents | Introduced persistent memory agents that learn during deployment |
| Apr 2025 | Sleep-time Compute | Agents reason about context during idle time |
| Oct 2025 | Letta Evals | Open-source evaluation framework for stateful agents |
| Oct 2025 | Rearchitected Agent Loop (V1) | New architecture for GPT-5 / Claude 4.5 Sonnet class models |
| Dec 2025 | Programmatic Tool Calling | Agents generate their own workflows via API |
| Dec 2025 | **Letta Code Launch** | Memory-first coding agent, #1 on Terminal-Bench |
| Dec 2025 | Continual Learning in Token Space | Key to agents improving over time |
| Jan 2026 | Conversations API | Shared memory across parallel user experiences |
| Feb 2026 | **Context Repositories** | Git-based memory ("MemFS") with programmatic context management |
| Mar 2026 | Next Phase Announcement | Memory moves from DB to git-backed files |
| Apr 2026 | Letta Code Desktop App | Locally-running deeply personalized agents |
| May 2026 | Channels | LettaBot archived, folded into Letta Code |

**Key metrics**: 16 employees (Apr 2026). Free tier (3 agents), Pro ($20/mo, 20 agents), Enterprise custom.

**Sources**:
- [Letta official site](https://www.letta.com/)
- [Letta Blog - Next Phase](https://www.letta.com/blog/our-next-phase/)
- [Letta Blog - V1 Agent](https://www.letta.com/blog/letta-v1-agent)
- [Letta Blog - Stateful Agents](https://www.letta.com/blog/stateful-agents)
- [Letta $10M Seed (PRNewswire)](https://www.prnewswire.com/news-releases/berkeley-ai-research-lab-spinout-letta-raises-10m-seed-financing-led-by-felicis-to-build-ai-with-memory-302257004.html)
- [GitHub - letta-ai/letta](https://github.com/letta-ai/letta)
- [GitHub - letta-ai/letta-code](https://github.com/letta-ai/letta-code)

---

### 1.4 Cognee Releases

| Date | Release | Details |
|------|---------|---------|
| Sep 2025 | Launch Month | Daily product drops: memify pipeline, auto-optimization, Cognee UI, Graph Explorer |
| Sep 2025 | Retrieval Upgrades | Lexical-chunk retriever, temporal fixes, feedback loops |
| Sep 2025 | Graph Intelligence | Ontology resolver, matching strategies, time-graph options |
| Sep 2025 | New Adapters | DuckDB, Pinecone, FalkorDB, Chroma |
| Sep 2025 | Graph-aware Embeddings | Fused semantic vectors with graph signals |
| 2025 | **$7.5M Seed** | Led by Pebblebed; participation from 42CAP, Vermilion Cliffs, angels from Google DeepMind, n8n, Snowplow |
| Jun 2026 | **Cognee 1.0** | First open-source memory platform with memory-native API (remember/recall/improve/forget) |

**Key metrics**: Pipeline volume grew from ~2K to 1M+ runs (500x in one year). 70+ companies in production. Notable deployments: Bayer (scientific research), University of Wyoming (evidence graphs).

**Sources**:
- [Cognee official site](https://www.cognee.ai/)
- [Cognee $7.5M Seed announcement](https://www.cognee.ai/blog/cognee-news/cognee-raises-seven-million-five-hundred-thousand-dollars-seed)
- [Cognee September Updates](https://www.cognee.ai/blog/cognee-news/cognee-september-updates)
- [GitHub - topoteretes/cognee](https://github.com/topoteretes/cognee)
- [Cognee AI Memory Architecture](https://www.cognee.ai/blog/fundamentals/how-cognee-builds-ai-memory)
- [Memgraph - From RAG to Graphs: How Cognee is Building Self-Improving AI Memory](https://memgraph.com/blog/from-rag-to-graphs-cognee-ai-memory)

---

### 1.5 New Startups Entering the Space

#### SuperMemory
- **Positioning**: "Memory layer for AI agents" -- context engineering platform
- **Architecture**: Vector-first approach with similarity-based retrieval
- **Claims**: #1 on LongMemEval, LoCoMo, and ConvoMem benchmarks
- **Status**: Closed source; self-hosting requires enterprise agreement
- **Free tier**: 1M tokens and 10K queries
- **Plugins**: Claude Code, OpenCode, OpenClaw, Hermes
- **Source**: [supermemory.ai](https://supermemory.ai/), [GitHub - supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)

#### Hindsight (by Vectorize)
- **Architecture**: Most architecturally ambitious -- 4 distinct memory networks: World Network (facts), Experience Network (action history), Opinion Network (beliefs with confidence), Entity/Observation Network
- **Retrieval**: 4 parallel strategies (semantic, BM25, graph traversal, temporal) with cross-encoder reranking
- **Benchmarks**: 91.4% on LongMemEval (with Gemini-3 Pro). Multi-session accuracy: 21.1% to 79.7%
- **Status**: Fully open-source (Apache 2.0), MCP-first, Docker deployment
- **SDKs**: Python, TypeScript, Go
- **Verification**: Independently reproduced by Virginia Tech Sanghani Center and Washington Post
- **Source**: [GitHub - vectorize-io/hindsight](https://github.com/vectorize-io/hindsight), [vectorize.io](https://vectorize.io/articles/best-ai-agent-memory-systems)

#### Hermes Agent (by Nous Research)
- **Launch**: February 2026
- **Architecture**: Multi-layer memory (long-term semantic, working memory, episodic logs), self-improving skills system
- **Scope**: Not just memory -- full autonomous agent framework designed cloud-native
- **GitHub**: 10K+ stars, v0.17.0 (Jun 2026), ~1,475 commits, 245 contributors
- **Features**: Persistent cross-session memory, 40+ tools, multi-platform messaging, SQLite persistence
- **License**: MIT
- **Source**: [hermes-agent.org](https://hermes-agent.org/), [GitHub - NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

#### AgentMemory (MCP toolkit)
- **Purpose**: Persistent memory for Claude Code, GitHub Copilot, Cursor, Gemini CLI, Codex CLI, Hermes, OpenClaw
- **Scope**: 53 tools, 6 resources, 3 prompts, 15 skills
- **Source**: [GitHub - rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)

---

## 2. MAJOR FEATURE RELEASES

### 2.1 New Memory Architectures

| Architecture | Company/Project | Date | Source |
|-------------|----------------|------|--------|
| Token-Efficient Memory Algorithm (single-pass hierarchical extraction + multi-signal retrieval) | Mem0 | Apr 2026 | [Mem0 Research](https://mem0.ai/research) |
| Context Repositories / MemFS (git-based memory) | Letta | Feb 2026 | [Letta Blog](https://www.letta.com/blog/our-next-phase/) |
| Dreaming V3 (temporal self-revision) | OpenAI/ChatGPT | Jun 2026 | [OpenAI Blog](https://openai.com/index/chatgpt-memory-dreaming/) |
| 4-Network Memory Architecture (World/Experience/Opinion/Entity) | Hindsight | 2025-2026 | [GitHub](https://github.com/vectorize-io/hindsight) |
| Sleep-time Compute (idle-time reasoning) | Letta | Apr 2025 | [Letta Blog](https://www.letta.com/blog) |
| Governed Shared Memory for Multi-Agent Systems | Academic (arXiv) | Jun 2026 | [arXiv:2606.24535](https://arxiv.org/pdf/2606.24535) |
| CraniMem: Cranial Inspired Gated Memory | Academic (arXiv) | Mar 2026 | [arXiv:2603.15642](https://arxiv.org/pdf/2603.15642) |

### 2.2 Graph-Based Memory Systems

| System | Details | Source |
|--------|---------|--------|
| **Graphiti (Zep)** | Bi-temporal knowledge graph, conflict resolution, hybrid search (semantic + BM25 + graph traversal), Neo4j/FalkorDB/Kuzu backends. 20K+ GitHub stars. Apache 2.0. | [GitHub](https://github.com/getzep/graphiti), [Neo4j Blog](https://neo4j.com/blog/developer/graphiti-knowledge-graph-memory/) |
| **Cognee Graph Engine** | Entity extraction pipeline, 14 retrieval modes, self-improving memify step, ontology resolver | [cognee.ai](https://www.cognee.ai/) |
| **Mem0 Built-in Entity Linking** | Replaced external graph store with built-in entity linking in 2026 algorithm | [Mem0 blog](https://mem0.ai/blog/state-of-ai-agent-memory-2026) |
| **Neptune Analytics (AWS)** | AWS-native graph memory for Mem0 | [AWS Blog](https://aws.amazon.com/blogs/database/build-persistent-memory-for-agentic-ai-applications-with-mem0-open-source-amazon-elasticache-for-valkey-and-amazon-neptune-analytics/) |

### 2.3 Multi-Agent Memory Sharing

- **Zep**: Multiple agents read/write same instance keyed by user_id/session_id
- **Mem0**: Multi-scope memory with identity scopes (user_id, agent_id, run_id, app_id/org_id) composed at retrieval
- **Letta Conversations API** (Jan 2026): Shared memory across parallel experiences
- **Google A2A Protocol** and **Anthropic MCP**: Emerging standards for inter-agent communication including shared context
- **Academic**: "Multi-Agent Memory from a Computer Architecture Perspective" (arXiv, Mar 2026), "Governed Shared Memory for Multi-Agent LLM Systems" (arXiv, Jun 2026)
- **Sources**: [arXiv:2603.10062](https://arxiv.org/html/2603.10062v1), [arXiv:2606.24535](https://arxiv.org/pdf/2606.24535)

### 2.4 Enterprise Memory Management

- **Zep Context Lake**: Authorization, retention, and audit built into the substrate; policy across every graph/query/layer
- **Mem0 SOC 2 & HIPAA**: BYOK support for regulated industries
- **Cognee Air-gapped Deployment**: Fully local deployment on embedded SQLite/LanceDB with zero cloud dependency

---

## 3. PARTNERSHIP ANNOUNCEMENTS

### 3.1 Cloud Provider Partnerships

| Partnership | Date | Details | Source |
|-------------|------|---------|--------|
| **Mem0 + AWS (Strands Agent SDK)** | May 2025 | Mem0 selected as exclusive memory provider for AWS Agent SDK. Integration with Amazon Bedrock, ElastiCache for Valkey, Neptune Analytics. | [Mem0 Blog](https://mem0.ai/blog/aws-and-mem0-partner-to-bring-persistent-memory-to-next-gen-ai-agents-with-strands), [AWS Blog](https://aws.amazon.com/blogs/database/build-persistent-memory-for-agentic-ai-applications-with-mem0-open-source-amazon-elasticache-for-valkey-and-amazon-neptune-analytics/) |
| **Zep + Neo4j** | Ongoing | Graphiti built on Neo4j; published in Neo4j Developer Blog | [Neo4j Blog](https://neo4j.com/blog/developer/graphiti-knowledge-graph-memory/) |

### 3.2 Framework Integrations

| Memory Provider | Integrated Frameworks | Source |
|----------------|----------------------|--------|
| **Mem0** | LangChain, LangGraph, LlamaIndex, CrewAI, AutoGen, Agno, CAMEL AI, Dify, Flowise, Langflow, Google ADK, OpenAI Agents SDK, Claude Code, Codex, Cursor, Windsurf (21 total) | [Mem0 docs](https://docs.mem0.ai/platform/overview) |
| **Cognee** | Claude Agent SDK, OpenAI Agents SDK, LangGraph, Google ADK, n8n, Amazon Neptune, Neo4j, MCP | [cognee.ai](https://www.cognee.ai/) |
| **Zep** | LangChain, LangGraph, MCP-compatible clients (Claude, Cursor) | [getzep.com](https://www.getzep.com/) |
| **LangMem** | LangGraph native, any BaseStore-compatible system | [LangChain blog](https://www.langchain.com/blog/langmem-sdk-launch) |

### 3.3 LangChain/LangMem

- **LangMem SDK**: Released early 2025. Supports episodic, semantic, and procedural memory. Survived LangChain 1.0 transition.
- **Stats**: ~746K monthly PyPI downloads, 5M+ total. Latest release: v0.0.30 (Oct 2025). Repo active as of Jun 2026.
- **Unique feature**: Procedural memory -- agents that modify their own prompts based on experience.
- **Source**: [LangMem SDK launch](https://www.langchain.com/blog/langmem-sdk-launch), [GitHub - langchain-ai/langmem](https://github.com/langchain-ai/langmem)

---

## 4. ENTERPRISE DEALS & COMPLIANCE

### 4.1 Publicly Announced Enterprise Deployments

| Company | Customer/Partner | Details | Source |
|---------|-----------------|---------|--------|
| **Letta** | Kognitos (logistics) | One-day experiment to $500K contract. Enterprise analytics tool. | [Letta Case Studies](https://www.letta.com/case-studies/kognitos) |
| **Cognee** | Bayer | Scientific research workflows | [cognee.ai](https://www.cognee.ai/) |
| **Cognee** | University of Wyoming | Evidence graph from scattered policy documents with page-level provenance | [cognee.ai](https://www.cognee.ai/) |
| **Cognee** | Dilbloom, dltHub | Stack integration | [cognee.ai](https://www.cognee.ai/) |
| **Mem0** | Fortune 500 companies (unnamed) | "Thousands of teams from startups to Fortune 500" | [TechCrunch](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/) |
| **Zep** | S&P Market Intelligence | Validated by S&P | [getzep.com](https://www.getzep.com/) |

### 4.2 Compliance & Security

| Company | Certifications | Source |
|---------|---------------|--------|
| **Zep** | SOC 2, HIPAA compliant, VPC deployment available | [getzep.com](https://www.getzep.com/) |
| **Mem0** | SOC 2, HIPAA compliant, BYOK support | [Mem0 Series A PR](https://www.prnewswire.com/news-releases/mem0-raises-24m-series-a-to-build-memory-layer-for-ai-agents-302597157.html) |
| **Cognee** | Air-gapped deployment, self-hosted, full data ownership (no third-party compliance certs found) | [cognee.ai](https://www.cognee.ai/) |
| **Letta** | Self-hostable, open-source, full data ownership (no third-party compliance certs found) | [letta.com](https://www.letta.com/) |

---

## 5. FRONTIER LAB MEMORY FEATURES (Competitive Context)

| Provider | Feature | Date | Source |
|----------|---------|------|--------|
| **OpenAI** | ChatGPT Dreaming V3 -- temporal self-revision memory | Jun 2026 | [OpenAI Blog](https://openai.com/index/chatgpt-memory-dreaming/) |
| **Anthropic** | Claude automatic memory for all tiers (including free) | Mar 2026 | [Anthropic blog](https://www.macrumors.com/2025/10/23/anthropic-automatic-memory-claude/) |
| **Anthropic** | Claude API Memory Tool (Claude 4+ models, GA) | May 2025 | [Claude Platform Docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) |
| **Google** | Gemini "Memories" (renamed from past chats), chat import from competitors | 2026 | [Gemini Release Notes](https://gemini.google/release-notes/) |

---

## 6. FUNDING SUMMARY TABLE

| Company | Amount | Round | Lead Investor | Date | Source |
|---------|--------|-------|---------------|------|--------|
| **Mem0** | $24M total ($3.9M seed + $20M Series A) | Seed + Series A | Kindred Ventures (Seed), Basis Set Ventures (A) | Oct 2025 | [TechCrunch](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/) |
| **Letta** | $10M | Seed | Felicis Ventures | Sep 2024 | [PRNewswire](https://www.prnewswire.com/news-releases/berkeley-ai-research-lab-spinout-letta-raises-10m-seed-financing-led-by-felicis-to-build-ai-with-memory-302257004.html) |
| **Cognee** | $7.5M | Seed | Pebblebed | 2025 | [Cognee blog](https://www.cognee.ai/blog/cognee-news/cognee-raises-seven-million-five-hundred-thousand-dollars-seed) |
| **Zep** | ~$500K | Pre-seed | Undisclosed | 2023-2024 | [Tracxn](https://tracxn.com/d/companies/zep/__poSadJnSfLWHjz05Xi3U5KwnpCMWSU3aDrihLX_8FLs) |

---

## 7. MARKET CONTEXT

- **Gartner**: 40% of enterprise applications will feature task-specific AI agents by end of 2026 (up from <5% in 2025)
- **Agentic AI market**: $7.84B in 2025, projected $52.62B by 2030 (46.3% CAGR)
- **Agent Memory Systems** received 2 of 80+ agentic AI deals tracked, but remains a "control point" category attracting new entrants
- **2026 new entrant signal**: First financings rebounded to 45% of deals and 43% of capital in Jan-May 2026
- **Source**: [Agentic AI Funding Trends](https://newmarketpitch.com/blogs/news/agentic-ai-funding-trends), [Atlan Best Frameworks 2026](https://atlan.com/know/best-ai-agent-memory-frameworks-2026/)

---

## 8. ARCHITECTURAL TREND SUMMARY

The field has shifted decisively from "vector-only retrieval" (2024) to **hybrid architectures** combining:
1. **Vector similarity** for semantic recall
2. **Graph-based storage** for entity relationships and multi-hop reasoning
3. **Temporal awareness** for tracking when facts were true
4. **Multi-signal retrieval** (semantic + BM25 + graph traversal + temporal) fused at ranking time

The dominant pattern in production deployments is no longer choosing one approach but running multiple strategies in parallel with intelligent fusion.
