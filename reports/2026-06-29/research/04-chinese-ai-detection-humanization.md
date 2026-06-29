# Chinese AI Text Detection & Humanization/Bypass: Full Research Report

---

## 1. Major Chinese Detection Platforms

### 知网 (CNKI) AIGC Detection
- **Developer**: 同方知网 (Tongfang CNKI)
- **URL**: https://aigc.cnki.net (institutional access)
- **Technology**: "知识增强AIGC检测技术" (Knowledge-Enhanced AIGC Detection Technology)
- **Method**: Dual-path analysis via **language patterns** + **semantic logic**
- **Core Algorithm Features**:
  - Text classification model outputs a "first probability value" of AI generation
  - **Deviation degree** (偏离度): Calculated via a target loss function
  - **Diffusion degree** (扩散度): Calculated via prediction model + preset dictionary
  - **Sentence length distribution** analysis
  - **Character/word distribution** features
- **2025 Patent** (published Jan 24, 2025): "AI生成学术文本的判断方法" — uses an LLM to **rewrite** the suspect text, then compares pre/post rewrite similarity. If the text was already AI-generated, the rewrite will be very similar to the original.
- **Version**: Upgraded to v2.13 (Feb 2025), then 3.0 — shifted focus from "vocabulary repetition" to "logical coherence" and "cognitive feature absence"
- **Accuracy claimed**: ~99.8% (self-reported)
- **Pricing**: ~2 RMB/1000 characters
- **Standards**: Undergraduate papers <=10%, Master's <=5%, journal submissions <=8%

### 维普 (VIP/Weipu) AIGC Detection
- **URL**: http://weipu-svip.com/aigc/aigc.html
- **Method**: Multi-layer neural network + fingerprint library
- **Core Features Analyzed**:
  - **Paragraph structure**: Detects "too smooth" transitions between paragraphs (AI hallmark)
  - **Vocabulary diversity**: AI texts cluster in "safe vocabulary" zones; calculates lexical richness index
  - **Sentence pattern regularity**: Flags consecutive sentences with identical syntactic structures (e.g., 5 consecutive SVO+complement sentences)
  - **Semantic topology analysis**: Detects overly smooth semantic transitions
  - **Style consistency verification**: Compares against author's historical writing
- **Weight system**: Abstract has coefficient 1.8x (highest priority for rewriting)
- **Limitations**: Current version only supports Chinese; English/numbers ignored
- **Fingerprint updates**: Regularly adds new model signatures (DeepSeek, Kimi, etc.)

### 腾讯朱雀 (Tencent Zhuque)
- **URL**: Available through Tencent's platform
- **Method**: **Contrastive analysis** (对比分析法)
- **Training**: 1.4 million+ positive/negative samples (AI-generated vs human-written)
- **Capabilities**: Text + image detection
- **Image accuracy**: 95%+ (analyzes texture, semantic, and invisible features)
- **Text detection**: Covers news, official documents, novels, prose; expanding to poetry
- **Model updates**: Periodic algorithm iteration with public compliant datasets

### 万方 (Wanfang) AIGC Detection
- Less aggressive than CNKI/VIP; identifies approximately 25% of what CNKI catches

### PaperPass AIGC Detection
- **URL**: https://www.paperpass.com/aigc
- **Method**: Ensemble multi-discriminator network + PPL (perplexity) metric evaluation
- **Dimensions**: Semantic coherence, grammatical reasonableness, information density
- **False positive rate**: <0.3% for highly suspicious content
- Identifies about 50% of what CNKI catches

### Other Platforms
- **大雅 (Daya)** AIGC Detection
- **格子达** (Gezida) — upgraded to AIGC 3.0 (March 2025)
- **PaperYY** — free basic AIGC detection
- **aijiance.org** — free Chinese AI detection with heatmap visualization
- **checkaigc.net** — free 1000 chars/check, multi-platform compatible

---

## 2. Detection Methods: How Chinese Tools Work

### A. Statistical/Perplexity-Based Methods
- **Perplexity (困惑度)**: Measures text unpredictability; AI text is typically low-perplexity
- **Burstiness (爆发性)**: Human writing varies in sentence complexity; AI is uniform
- AI texts exhibit sentence lengths clustering in 25-32 characters, high-frequency connectors ("因此", "然而", "与此同时" appearing 18% more densely)

### B. Classifier-Based Methods
- Training binary classifiers on human vs AI text pairs
- N-gram methods: Same LLM tends to output similar sentence patterns
- Fine-tuned transformers: Chinese-BERT-large, RoBERTa-wwm-ext-large achieve F1 of 0.96+
- FastText baseline: Surprisingly robust at 83.5% test accuracy (surface lexical patterns)

### C. LLM-Based Detection
- **LLM-Detector** (arXiv:2402.01158): Instruction-tuned open-source LLMs for both document and sentence-level detection
  - GitHub: https://github.com/WangRongsheng/LLM-Detector
  - Strong generalization on out-of-domain datasets
- **DeTeCtive** (NeurIPS 2024): Multi-level contrastive learning framework
- **BiScope**: Checks preceding token memorability

### D. Watermark-Based Detection
- Embedding invisible watermarks in AI output by restricting word choices to predefined whitelists
- Bypass tools identify and replace watermark words

### E. CNKI's Unique "Rewrite-Compare" Method (Patent 2025)
- Uses an LLM to rewrite the suspect text
- If original was AI-generated, the rewrite will be highly similar (both come from similar probability distributions)
- Novel approach specific to the Chinese academic detection market

---

## 3. Chinese NLP Challenges for Detection/Bypass

### Tokenization Issues
- **No natural word boundaries**: Chinese has no spaces; segmentation is ambiguous
- **Example**: "中国科学技术大学" can be segmented multiple ways
- **BPE problems**: Naive BPE fails to capture true internal structure of Chinese words; frequency-driven merging doesn't align with linguistically meaningful units
- **Token-to-text ratio varies wildly**: Makes it hard to set target chunk sizes
- **Sub-character splitting**: BPE may split single Chinese characters into multiple byte-level tokens, destroying semantic integrity and degrading perplexity-based detection

### Granularity Problem
- Character-level: Too fine, loses meaning ("鼠" = mouse or cursor?)
- Word-level: More accurate meaning but lower recall
- Different detection scenarios need different granularity choices

### Perplexity Calibration
- English-trained perplexity metrics don't transfer to logographic writing systems
- Chinese packs more meaning per character, creating different statistical patterns
- Independent testing shows detection accuracy for Mandarin at **74%** vs 82% for Spanish/French and 93-98% for European languages on tools like Copyleaks

### Classical Chinese / Style Challenges
- AI detection systems show extreme false positives on classical texts (《滕王阁序》scored 100% AI!)
- Poetry and informal prose challenge models relying on Western structural assumptions
- Tonal ambiguity: Same character with different tones changes meaning

### Training Data Contamination
- Much available Chinese text online is already AI-generated, contaminating training sets
- Detection requires specialized per-language tokenizers rather than universal models

### Sentence-Level Detection Difficulty
- Existing methods (Fast-DetectGPT, MPU, GLTR) are **not effective** for sentence-level Chinese AI text detection
- Limited context makes this much harder than document-level detection

---

## 4. Bypass/Humanization Techniques (Chinese-Specific)

### A. Methods That NO LONGER Work (2026)
- **Translation loops** (Chinese -> English -> Chinese): Detection systems now immune; introduced noise is too regular
- **Special characters** (zero-width characters, special punctuation, inter-character spaces): Systems auto-filter these; risk being flagged as academic misconduct
- **Simple synonym replacement**: Can only reduce AI rate by 10-15%, cannot break below 40%

### B. Currently Effective Methods

#### Structural-Level Rewriting
- Sentence structure reconstruction (not just word swapping)
- "Semantic isotope analysis engine" — ensures meaning preserved while structure changes
- Style migration networks — convert AI writing patterns to human patterns
- Non-symmetric argumentation: Present counterargument first, add self-questioning

#### Perplexity Injection
- Increase atypical vocabulary combinations
- Avoid perfect parallel structures
- Allow slight sentence imbalance
- Inject low-frequency bigrams

#### Rhythm/Pattern Breaking
- "Three short, one long" rule: Three sentences under 10 characters, then one complex sentence
- Sentence-length randomization
- Remove all high-frequency connectors ("此外", "综上所述", "因此")

#### Cognitive Noise Injection
- Exploratory tone ("这或许意味着..." instead of declarative statements)
- Self-doubt insertions
- Logical "jumps" between paragraphs (humans are naturally less smooth)
- Personal anecdotes and specific data points

#### DeepSeek V4 Prompt Engineering (2026)
- **Light rewrite** (30-50% AI rate): Synonym + sentence restructure
- **Structure reconstruction** (50-75%): Change from deductive to inductive reasoning
- **Persona rewrite** (75%+): Rewrite as if speaking to advisor informally
- Limitation: Prompt alone typically reduces from 80%+ to ~30%; cannot go below 20% without tools
- Key insight: V4's rewritten text still falls within V4's training distribution; need a **different architecture LLM** for second-pass processing

### C. Open-Source Tool: humanize-chinese
- **GitHub**: https://github.com/voidborne-d/humanize-chinese
- **License**: MIT, zero dependencies, runs locally
- **Detection Engine** (20+ patterns):
  - Character-level trigram perplexity
  - DivEye surprise scores
  - GLTR rank bucketing
  - Sentence-length burstiness
  - Punctuation density analysis
- **Humanization Engine**:
  - Perplexity-guided word selection
  - Low-frequency bigram injection
  - Short sentence insertion
  - Sentence-length randomization
  - 40 paraphrase templates
  - 144 phrase replacements
  - 3 levels of adaptive intensity
- **7 Style Transforms**: 口语化/知乎/小红书/公众号/学术/文艺/微博/小说
- **Results**: Original score 79/100 -> Rewritten score 12/100
- **Commands**: `/detect`, `/humanize`, `/academic`, `/style [style]`

### D. Commercial Bypass Tools (Chinese Market)

| Tool | Price | Key Feature | Effectiveness |
|------|-------|-------------|---------------|
| **笔灵 (Biling)** | ~3-5 RMB/1000chars | Real-time algorithm updates for CNKI/VIP/Wanfang | Structure-level optimization |
| **篇来 (Pianlai)** | varies | Targeted fingerprint disruption; preserves academic tone | Multi-platform optimized |
| **写易过** | varies | Per-segment AI reduction; 500 chars from 74%->15% | Loses formatting |
| **嘎嘎降AI** | varies | Dual-engine; structure-level text reconstruction | Mimics human written style |
| **蝌蚪论文** | free (2x/day) | CNKI/VIP standard targeting | Good cost-performance |
| **降迹灵AI** | ~2.3 RMB/1000chars | "AI rate >25% refund" guarantee | Effect guarantee |
| **PaperRR** | ~8 RMB/1000chars | SCI/core journal targeting | High-end academic |
| **BunnyScholar** | varies | Multi-language support, overseas market | https://bunnyscholar.cn/humanizer |

---

## 5. Academic Papers on Chinese AI Text Detection

### Key Papers:
1. **"LLM-Detector: Improving AI-Generated Chinese Text Detection with Open-Source LLM Instruction Tuning"** (arXiv:2402.01158, Feb 2024)
   - Authors: Rongsheng Wang et al.
   - GitHub: https://github.com/WangRongsheng/LLM-Detector
   - Contribution: Instruction tuning for document + sentence-level detection; strong OOD generalization

2. **"LLM Encoder vs. Decoder: Robust Detection of Chinese AI-Generated Text with LoRA"** (arXiv:2509.00731)
   - Compares encoder-based Transformers vs decoder-only LLMs with LoRA fine-tuning
   - Qwen2.5-7B+LoRA achieves F1: 0.9609 (AI) / 0.9577 (human)
   - Uses NLPCC 2025 Chinese AI-Generated Text Detection Task dataset

3. **"Research on AI-generated Chinese text detection method based on deep learning"** (AIMS Press, 2025)
   - Dual-stream feature fusion: RoBERTa semantic encoding + statistical features
   - Cross-domain hybrid multi-source corpus

4. **NLPCC 2025 Shared Task 1: LLM-Generated Text Detection** (Springer Nature)
   - URL: https://link.springer.com/chapter/10.1007/978-981-95-3352-7_21
   - Systematic benchmark for Chinese AI text detection

5. **DeTeCtive** (NeurIPS 2024): Multi-level contrastive learning; discovers that different LLMs have distinct style fingerprints

6. **TH-Bench** (arXiv:2503.08708): Evaluates evasion attacks via humanizing AI text on machine-generated text detectors

7. **Sub-Character Tokenization for Chinese Pretrained Language Models** (TACL, MIT Press)
   - URL: https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00560
   - Addresses Chinese tokenization being sub-optimal with both sub-word and character approaches

---

## 6. Chinese Market Dynamics vs English Market

### Key Differences:

| Dimension | Chinese Market | English Market |
|-----------|---------------|----------------|
| **Primary driver** | Academic compliance (graduation requirement) | Academic integrity + content marketing |
| **Regulation** | Government mandated (学位法草案, 教育部 2026 regulation: undergrad <=35%, key universities <=25%, masters <=18%) | Institutional policies, no national law |
| **Detection standard** | Must match school's designated platform (usually CNKI or VIP) | Various (Turnitin dominant) |
| **Market structure** | Fragmented; CNKI+VIP duopoly for detection, dozens of bypass tools | GPTZero/Originality.ai/Turnitin + Undetectable.ai etc. |
| **Price sensitivity** | Very high; tools priced per-1000-chars (2-8 RMB) | Subscription-based ($10-50/mo) |
| **Industry chain** | Complete: detection -> bypass -> re-detection cycle is an explicit business | More distributed, less systematized |
| **"暴利" (profiteering)** | Students report: "AI detection earns money, then AI reduction earns more money. Cost 5 RMB, charge 100 RMB" | Similar dynamics but less explicitly discussed |
| **Detection accuracy** | CNKI/VIP reportedly consistent; other platforms vary wildly | GPTZero: 74% for Mandarin vs 82%+ for European languages |
| **False positive problem** | Severe: Pure hand-written papers hit 80% AI; classical literature scores 100% | Less severe for English but exists |
| **Update frequency** | Tied to graduation seasons (May-June); massive algorithm updates before graduation | Continuous |

### Market Size Indicators:
- China's AI market: ~6900 billion RMB by 2025 (30-35% of global)
- AIGC detection/bypass is a growing sub-segment
- Education Ministry's 2026 new regulations create massive demand spike every graduation season
- A typical 10,000-character paper costs 50-80 RMB for the full detection+bypass workflow

---

## 7. Technical Challenges Specific to Chinese Text

### Character System Complexity
- **No word boundaries**: Fundamental challenge for all token-probability-based methods
- **Polysemy at character level**: Single characters have multiple meanings depending on context
- **Granularity trade-off**: Character-level loses semantics; word-level loses coverage
- **Multiple valid segmentations**: Same sentence can be correctly segmented different ways

### Tokenizer Inconsistency Across Models
- Different LLMs use different tokenizers (BPE, WordPiece, Unigram)
- Makes cross-model detection difficult
- CNKI must cover "domestic and international mainstream models" — each with different tokenization

### Sub-word Splitting Destroys Semantics
- BPE may split one Chinese character into multiple byte-level tokens
- Breaks semantic integrity
- Perplexity-based detection loses effectiveness when token boundaries don't align with meaning boundaries

### Entropy and Information Density
- Chinese conveys more meaning per character than alphabetic languages
- Statistical patterns fundamentally differ from English
- Requires separate calibration of all detection thresholds

### Style/Register Variation
- Formal academic Chinese is inherently "AI-like" (structured, logical, using standard connectors)
- The more academic/professional the text, the more likely it triggers false positives
- Poetry, classical Chinese, and literary prose have extremely different patterns from modern prose

### Detection Explainability Gap
- Detection reports only show "confidence percentage"
- Cannot explain WHY a specific passage was flagged
- CNKI defines results as "疑似生成比" (suspected generation ratio) — probabilistic, not definitive

---

## Key URLs & Resources

**Detection Platforms:**
- CNKI AIGC: https://aigc.cnki.net (institutional)
- VIP/Weipu: http://weipu-svip.com/aigc/aigc.html
- Tencent Zhuque: https://zhuque.tencent.com
- aijiance.org: https://www.aijiance.org/
- checkaigc.net: https://checkaigc.net/
- PaperPass: https://www.paperpass.com/aigc
- PaperYY (free): https://www.paperyy.com/page/aigc/index

**Open Source / Research:**
- humanize-chinese: https://github.com/voidborne-d/humanize-chinese
- LLM-Detector: https://github.com/WangRongsheng/LLM-Detector
- LLM-Detector paper: https://arxiv.org/abs/2402.01158
- Chinese detection with LoRA: https://arxiv.org/abs/2509.00731
- NLPCC 2025 Shared Task: https://link.springer.com/chapter/10.1007/978-981-95-3352-7_21
- Emergent Mind topic: https://www.emergentmind.com/topics/chinese-ai-generated-text-detection-task

**Chinese Blog/Technical Resources:**
- 知乎 AIGC detection discussion: https://www.zhihu.com/question/598518953
- 知乎 AI detection & anti-detection: https://zhuanlan.zhihu.com/p/666620300
- CNKI algorithm breakdown (CSDN): https://blog.csdn.net/CikAiyyds/article/details/146932897
- Weipu detection mechanism (CSDN): https://blog.csdn.net/why_not_do_som/article/details/157911455
- AIGC detection principles (Alibaba Cloud): https://developer.aliyun.com/article/1484855
- 2026 detection methods still working: https://www.cnblogs.com/jiangai/p/19722138
- CNKI 2026 guide (Linggan): https://www.linggantext.com/public/blog/cnki-aigc-detection-guide-2026/
- AI detection non-English accuracy: https://hub.paper-checker.com/blog/ai-detection-non-english-languages-2026-2/

**Commercial Bypass Tools:**
- 笔灵: https://www.biling.com
- 篇来: https://pianlai.com
- BunnyScholar: https://bunnyscholar.cn/humanizer
- 零感AI: https://www.linggantext.com
