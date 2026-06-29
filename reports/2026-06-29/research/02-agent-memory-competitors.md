# Agent Memory Competitors: Motorhead, Dedicated Startups, Cloud Providers & Vector DBs

---

## 1. Motorhead by Metal (getmetal/motorhead)

**URL:** [github.com/getmetal/motorhead](https://github.com/getmetal/motorhead)

**What it was:** A memory and information retrieval server for LLMs, written in Rust. It provided automatic incremental summarization, configurable context window sizes (default 12 messages), and optional long-term memory via Redisearch VSS. It was integrated into LangChain as `MotorheadMemory`.

**Current status: Effectively abandoned.**
- ~916 GitHub stars, 87 forks
- Multiple companion repos (motorhead-redis-example, chatbot) have been **archived** since March 2024
- Open issues and PRs from early 2024 remain unaddressed
- The LangChain integration was **deprecated** with LangChain v1.0 (October 2025)
- The parent company **Metal pivoted entirely away from developer tools** in 2024, relaunching as an AI platform for private equity deal intelligence (now at [metal.ai](https://www.metal.ai/))
- Metal raised $7.5M total ($2.5M seed from Swift Ventures/YC/Chapter One in 2023, $5M from Base10 Partners in 2024) -- but this funding went toward the PE product, not Motorhead

**Bottom line:** Motorhead is dead as a maintained project. The company that built it no longer operates in the AI developer tools space.

Sources: [GitHub - getmetal/motorhead](https://github.com/getmetal/motorhead), [LangChain Motorhead Memory docs](https://js.langchain.com/docs/integrations/memory/motorhead_memory/), [VentureBeat - Metal raises $5M](https://venturebeat.com/ai/a-i-startup-metal-raises-usd5-million-to-transform-private-equity-deal), [Metal on YC](https://www.ycombinator.com/companies/metal)

---

## 2. Dedicated AI Agent Memory Startups

### Mem0 (formerly EmbedChain) -- Market Leader

| Attribute | Details |
|---|---|
| **URL** | [mem0.ai](https://mem0.ai) |
| **What it does** | Framework-agnostic memory layer for AI agents. Auto-extracts facts, preferences, and relationships from conversations. "Memory passport" that travels across apps/agents. |
| **GitHub stars** | ~57,100+ |
| **Funding** | $24M total ($3.9M seed + $20M Series A, Oct 2025). Led by Basis Set Ventures. Investors: YC, Peak XV, Kindred Ventures, GitHub Fund. Angels: Dharmesh Shah, Scott Belsky, CEOs of Datadog/Supabase/PostHog/W&B |
| **Architecture** | Hybrid: vector search + knowledge graphs (Pro tier) + key-value storage. 20 vector store backends supported. |
| **Pricing** | Free: 10K memories, 1K retrievals/mo. Starter $19/mo: 50K memories. Growth $79/mo. Pro $249/mo: unlimited + graph memory. Enterprise: custom. |
| **Benchmarks** | LoCoMo 92.5, LongMemEval 93.4%. Token consumption down 90%. |
| **Compliance** | HIPAA, SOC 2 Type I (Type II in progress) |

Sources: [Mem0 Pricing](https://mem0.ai/pricing), [TechCrunch - Mem0 raises $24M](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/), [Mem0 State of Agent Memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026), [Mem0 Series A announcement](https://mem0.ai/series-a)

---

### Zep / Graphiti -- Temporal Knowledge Graph Leader

| Attribute | Details |
|---|---|
| **URL** | [getzep.com](https://www.getzep.com/) |
| **What it does** | Context engineering platform built on Graphiti, a temporal knowledge graph engine. Facts stored as nodes with start/end validity windows. Best for time-sensitive memory ("who owned the budget in Q1 vs Q2"). |
| **GitHub stars** | ~27,000 (Graphiti repo) |
| **Funding** | $500K seed (YC, March 2024). Significantly underfunded vs. competitors. |
| **Architecture** | Temporal knowledge graph (Neo4j, FalkorDB, or Kuzu backend). No LLM calls during retrieval (P95 300ms). |
| **Pricing** | Free: 1,000 credits/mo (1 credit = 1 episode up to 350 bytes). Paid starts at $125/mo. Enterprise with SOC 2/HIPAA. Community Edition deprecated April 2025 -- must use raw Graphiti for self-hosting. |
| **Benchmarks** | DMR benchmark 94.8%. LongMemEval 63.8%. 18.5% accuracy improvement over full-context baselines. |
| **Customers** | AWS, Samsung, Twin Health, Writer, HoneyBook, Praktika.ai |

Sources: [Zep AI](https://www.getzep.com/), [Zep Review 2026](https://theaiagentindex.com/agents/zep), [Zep on StartupIntros](https://startupintros.com/orgs/zep-ai)

---

### Letta (formerly MemGPT) -- OS-Inspired Memory Architecture

| Attribute | Details |
|---|---|
| **URL** | [letta.com](https://www.letta.com/) / [github.com/letta-ai/letta](https://github.com/letta-ai/letta) |
| **What it does** | Full agent runtime with OS-inspired memory hierarchy. Agents actively curate their own memory across three tiers (Core/Recall/Archival). Now focused on "Letta Code" -- a memory-first coding agent. |
| **GitHub stars** | ~13,000+ |
| **Funding** | $10M seed led by Felicis. Backed by Jeff Dean (Google DeepMind), Clem Delangue (Hugging Face), Cristobal Valenzuela (Runway). Also YC-backed. |
| **Architecture** | 3-tier memory: Core (in-context RAM), Recall (searchable disk cache), Archival (cold storage). Agent uses explicit function calls to move data between tiers. |
| **Pricing** | Free: up to 3 managed agents. Pro $20/mo: 20 agents + model quota. Team/Enterprise: custom. |
| **Status** | Converging entirely on Letta Code (coding agent). LettaBot archived May 2026. Terminal-Bench #1 model-agnostic open-source agent at 42.5%. |

Sources: [Letta](https://www.letta.com/), [GitHub - letta-ai/letta](https://github.com/letta-ai/letta), [Mem0 vs Letta comparison](https://vectorize.io/articles/mem0-vs-letta)

---

### Supermemory -- Coding Agent Focus

| Attribute | Details |
|---|---|
| **URL** | [supermemory.ai](https://supermemory.ai/) / [github.com/supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) |
| **What it does** | Full context stack via single API: memory extraction, RAG, user profiles, contradiction resolution, explicit forgetting, file processing. Claude Code and OpenCode plugins built-in. |
| **GitHub stars** | ~21,000-28,000 (varying reports) |
| **Funding** | Not publicly disclosed |
| **Architecture** | Memory Engine (extraction + contradiction resolution + auto-forget) + Hybrid Search (RAG + Memory) + Connectors (Google Drive, Gmail, Notion, GitHub). Sub-300ms latency. |
| **Pricing** | Free, Pro, Scale, Enterprise tiers. Billing based on "SM tokens" (unique ingested content). Self-hosted on Scale+. Startup/academic credits up to $2,000. |
| **Benchmarks** | Claims #1 on LongMemEval, LoCoMo, ConvoMem (self-reported, not independently verified) |

Sources: [Supermemory.ai](https://supermemory.ai/), [GitHub - supermemoryai/supermemory](https://github.com/supermemoryai/supermemory), [Vectorize - Best AI Agent Memory Systems](https://vectorize.io/articles/best-ai-agent-memory-systems)

---

### Theta (YC X25) -- Agent Self-Learning Memory

| Attribute | Details |
|---|---|
| **URL** | [thetasoftware.com](https://thetasoftware.com/) |
| **What it does** | Intelligent memory layer that learns from previous agent runs. Generates trajectory analysis at run end, produces optimized plans for next run. 4 lines of code to integrate. |
| **GitHub stars** | Not disclosed (appears to be closed-source) |
| **Funding** | YC X25 batch (Spring 2025). Estimated revenue ~$428K, ~$1.4M estimated valuation. 1-10 employees. |
| **Architecture** | Post-run trajectory analysis + embedding. Pre-run plan generation using relevant prior insights. |
| **Results** | Improved OpenAI Operator accuracy by 43%, 7x fewer steps. |

Sources: [YC - Theta](https://www.ycombinator.com/companies/theta-software), [LinkedIn - YC announcement](https://www.linkedin.com/posts/y-combinator_theta-yc-x25-allows-ai-agents-to-learn-activity-7326369224921100288-nJYc)

---

### Hindsight by Vectorize.io -- Research-Backed Memory

| Attribute | Details |
|---|---|
| **URL** | [github.com/vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) |
| **What it does** | Biomimetic memory with 3 operations (Retain, Recall, Reflect). Maintains 4 distinct memory networks: World, Experience, Opinion (with confidence scores), and Social. |
| **GitHub stars** | ~4,900 |
| **Funding** | Vectorize.io raised $3.5M (April 2024). Hindsight is MIT-licensed. |
| **Architecture** | 4 parallel retrieval strategies (semantic, BM25, graph traversal, temporal) + cross-encoder reranking. Opinion Network with evolving confidence scores. |
| **Benchmarks** | LongMemEval 91.4%. Multi-session questions: 21.1% -> 79.7%. Outperforms GPT-4o with a 20B open-source backbone. Independently reproduced by Virginia Tech. |
| **Status** | Early-stage but in production at Fortune 500 companies. Docker deployment. MCP server available. |

Sources: [GitHub - Hindsight](https://github.com/vectorize-io/hindsight), [Vectorize - Best AI Agent Memory Systems](https://vectorize.io/articles/best-ai-agent-memory-systems), [AI for Automation - Hindsight](https://aiforautomation.io/news/2026-03-19-hindsight-ai-agent-memory-learns-adapts-fortune-500)

---

## 3. Cloud Provider Memory Offerings

### Cloudflare Agent Memory
- **Status:** Private beta (April 2026). No pricing announced; free during beta.
- Managed memory with multi-stage ingestion pipeline, 4 memory types (facts, events, instructions, tasks), 5-channel parallel retrieval with RRF fusion.
- Shared memory profiles across teams/agents. Uses Llama 4 Scout for extraction, Nemotron 3 for synthesis.
- Source: [Cloudflare blog](https://blog.cloudflare.com/introducing-agent-memory/), [Cloudflare Agent Memory Pricing](https://developers.cloudflare.com/agent-memory/platform/pricing/)

### AWS Bedrock AgentCore Memory
- **Status:** GA as of mid-2026. Most operationally mature cloud offering.
- Managed and self-managed strategies. Episodic memory included. Per-second billing.
- Pricing: $0.0895/vCPU-hr, $0.00945/GB-hr. 12 independently billable components.
- Source: [AWS Bedrock AgentCore Pricing](https://aws.amazon.com/bedrock/agentcore/pricing/)

### Google Vertex AI Memory Bank
- **Status:** GA (billing since Feb 2026).
- Pricing: $0.25 per 1,000 events/memories. Less prominent than AWS; BigQuery-oriented for structured knowledge.
- Source: [Vertex AI pricing comparison](https://agentmarketcap.ai/blog/2026/04/09/aws-bedrock-agentcore-vs-azure-ai-agent-service-vs-google-vertex-ai-agents-q2-2026)

---

## 4. Vector Databases with Memory Features

### Pinecone
| Attribute | Details |
|---|---|
| **URL** | [pinecone.io](https://www.pinecone.io/) |
| **Funding** | $138M total ($100M Series B at $750M valuation, led by a16z) |
| **GitHub stars** | Closed-source (managed service) |
| **Memory features** | Pinecone Assistant (managed knowledge layer), MCP server, namespace-per-agent isolation. Not a memory framework per se -- more RAG/knowledge retrieval. |
| **Pricing** | Free: 2GB storage, 1 index. Standard: $50/mo min. Enterprise: $500/mo min. Serverless: ~$0.33/GB storage + per-read/write units. |
| **Customers** | ~4,000 customers |

Source: [Pinecone Pricing](https://www.pinecone.io/pricing/)

### Qdrant
| Attribute | Details |
|---|---|
| **URL** | [qdrant.tech](https://qdrant.tech/) |
| **Funding** | $87.8M total ($50M Series B March 2026, led by AVP; $28M Series A by Unusual Ventures) |
| **GitHub stars** | ~29,000+; 250M+ downloads |
| **Memory features** | Rust-built, pre-filter search, quantization (4-32x memory savings), Raft-based distributed mode. Best raw performance for agent memory retrieval at scale. |
| **Pricing** | Self-hosted: free (open-source). Cloud: $100-$300/mo typical. |
| **Customers** | Canva, HubSpot, Bosch, Tripadvisor, OpenTable |

Source: [Qdrant Series B announcement](https://qdrant.tech/blog/series-b-announcement/)

### Weaviate
| Attribute | Details |
|---|---|
| **URL** | [weaviate.io](https://weaviate.io/) |
| **Funding** | ~$50-68M (Series B led by Index Ventures, April 2023). Estimated valuation $500M+. |
| **GitHub stars** | ~14,000+ |
| **Memory features** | Built-in hybrid search (BM25 + vector), modular vectorizer architecture, GraphQL API. Best for multi-modal memory. |
| **Pricing** | Self-hosted: free. Cloud: $150-$400/mo typical. |
| **Customers** | Zapier, Morningstar, StackOverflow, Instabase |

Source: [Weaviate about](https://weaviate.io/company/about-us)

### ChromaDB
| Attribute | Details |
|---|---|
| **URL** | [trychroma.com](https://www.trychroma.com/) / [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) |
| **Funding** | ~$18-20M seed (led by Quiet Capital; angels include Naval Ravikant, Max & Jack Altman) |
| **GitHub stars** | ~28,500 |
| **Memory features** | Embedded-first (SQLite-like), best developer experience for prototyping. Chroma Cloud for serverless. |
| **Pricing** | Self-hosted: free. Cloud: $5 free credits to start. |
| **Limitations** | Post-filter search (degrades recall at scale), no native quantization, distributed mode underdeveloped, ~2-5M vector ceiling. |

Source: [GitHub - chroma-core/chroma](https://github.com/chroma-core/chroma), [Chroma funding](https://www.clay.com/dossier/chroma-funding)

---

## 5. Summary Competitive Landscape Table

| Company | Type | GitHub Stars | Funding | Free Tier | Paid From | Key Differentiator |
|---|---|---|---|---|---|---|
| **Mem0** | Dedicated memory | 57K | $24M (YC) | 10K memories | $19/mo | Market leader, broadest adoption |
| **Zep/Graphiti** | Temporal graph | 27K | $500K (YC) | 1K credits | $125/mo | Temporal knowledge graph |
| **Letta** | Agent runtime | 13K | $10M (Felicis/YC) | 3 agents | $20/mo | Agent self-manages memory |
| **Supermemory** | Context engine | 21-28K | Undisclosed | Yes | Pro tier | Coding agent plugins |
| **Hindsight** | Research-backed | 4.9K | $3.5M (Vectorize) | Open-source | N/A (MIT) | Multi-network + opinion tracking |
| **Theta** | Self-learning | N/A | YC X25 | Unknown | Unknown | Run-to-run agent learning |
| **Pinecone** | Vector DB + RAG | Closed | $138M | 2GB | $50/mo | Scale + managed infra |
| **Qdrant** | Vector DB | 29K | $87.8M | Open-source | Cloud usage | Best raw performance (Rust) |
| **Weaviate** | Vector DB | 14K | $50-68M | Open-source | Cloud usage | Hybrid search + multi-modal |
| **ChromaDB** | Vector DB | 28.5K | $18-20M | Open-source | Cloud usage | Best DX for prototyping |
| **Cloudflare** | Managed memory | N/A | N/A (Cloudflare) | Beta (free) | TBD | Edge distribution, multi-channel retrieval |
| **AWS AgentCore** | Managed memory | N/A | N/A (AWS) | N/A | Usage-based | Most mature cloud offering |
| **Google Vertex** | Managed memory | N/A | N/A (Google) | N/A | $0.25/1K events | BigQuery integration |

The dedicated agent memory space is clearly consolidating around **Mem0** as the market leader by community size and funding, with **Zep** (temporal graphs), **Letta** (self-managing agents), and **Hindsight** (research-backed multi-network) as differentiated alternatives. The vector databases (Pinecone, Qdrant, Weaviate, ChromaDB) are infrastructure-level and lack the higher-level memory extraction/management features. Cloud providers (AWS, Google, Cloudflare) are entering but still maturing.
