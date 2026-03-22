# PRD: ManAcct Exam Prep App

## Product Name
**"The Control Room"** — Interactive Managerial Accounting Exam Prep

## One-liner
An interactive, visual web app that helps IESE MBA students master the 6 key exam concepts through guided practice, instant feedback, and pattern recognition — not walls of text.

---

## Problem
Students preparing for Prof. Kadach's Managerial Accounting final face:
- Dense case materials (20+ pages per exam) with interconnected numerical problems
- A consistent but non-obvious exam structure that rewards pattern recognition
- Concepts that seem simple in isolation but interact in tricky ways (e.g., corporate OH allocation breaking goal congruence)
- No interactive way to practice — only static PDFs of past exams

## Target User
IESE MBA students (1st year) preparing for the final exam. Time-poor, prefer visual/interactive learning, need to build intuition fast.

## Core Design Principles
1. **Visual over verbal** — show the math, don't describe it. Use interactive sliders, live-updating tables, animated waterfalls.
2. **Pattern first** — teach the exam structure before the details. Students should recognize "oh, this is the Part 3 transfer pricing question" instantly.
3. **Minimum viable text** — every explanation ≤ 3 sentences. Use tooltips for deeper dives.
4. **Learn by doing** — every concept has a mini-calculator or sandbox, not just theory.

---

## Information Architecture

### Tab 1: "Exam Map" (Home)
**Purpose:** Show the exam blueprint at a glance.

Visual: A horizontal flow/pipeline showing the 5 parts of every exam:
```
[Part 1: Variance Analysis] → [Part 2: Pricing & Relevance] → [Part 3: Transfer Pricing] → [Part 4: Investment & RI] → [Part 5: System Critique]
```

Each part is a clickable card showing:
- What it tests (1 sentence)
- The pattern (what data you get, what you compute)
- Difficulty & weight estimate
- A "Quick Practice" CTA

Below the flow: a "Concept Web" diagram showing how the 6 concepts interconnect (e.g., "Cost Allocation" feeds into both "Transfer Pricing" and "Pricing Policy").

### Tab 2: "Concept Cards"
**Purpose:** Bite-sized, interactive reference for each of the 6 key concepts.

Each concept gets a card with:
1. **Title + Emoji** (e.g., "📊 Variance Analysis")
2. **The Formula** — clean, large, with color-coded variables
3. **The Intuition** — 2-3 sentences max explaining the "why"
4. **Interactive Sandbox** — a mini-calculator where you plug in numbers and see results live
5. **Exam Pattern** — "In the exam, you'll get X and need to compute Y"
6. **Traps & Tips** — common mistakes (e.g., "Don't forget to adjust for inflation BEFORE computing the selling price variance")

#### The 6 Concept Cards:

**Card 1: Variance Analysis**
- Interactive "waterfall chart" builder
- Input: Budget and Actual values for Volume, Price, Efficiency Ratio, Input Price, Other VC, Fixed Costs
- Output: Live waterfall from Budget Profit → Actual Profit showing each variance as a colored bar
- Toggle: "With inflation adjustment" / "Without"
- Toggle: "With flexible budget (proportional FC)" / "Fixed FC"
- Key formula: Volume Variance = (Actual_N - Budget_N) × Budget_CM_per_unit

**Card 2: Relevance Analysis (Accept/Reject)**
- Two-column comparison: "Cash Flows to Company" vs "Divisional Profit Impact"
- Sliders for: additional revenue, additional variable costs, additional fixed costs, corporate OH rate
- Live computation showing when company wants to accept but division doesn't (goal incongruence highlighted in red)
- Key insight: "If the divisional profit computation includes allocated costs that don't change in cash, the manager may reject a good deal"

**Card 3: Cost Allocation & Pricing**
- Interactive cost buildup: Variable Cost → + Fixed Cost Allocation → Full Cost → + Markup = Price
- Toggle between allocation bases: capacity vs. actual volume vs. expected volume
- Show "death spiral" animation: as volume drops, fixed cost per unit rises, price rises, volume drops further
- ABC mini-demo: drag cost drivers to activities to see how profitability shifts across products/channels

**Card 4: Transfer Pricing**
- Visual: Upstream Division ←→ Downstream Division with a sliding TP bar
- Input: Seller's variable cost, seller's allocated fixed costs, buyer's selling price, buyer's other costs, corporate OH per unit
- Output: Live computation of TP range [min, max] for goal congruence
- Highlight zone in green (congruence) vs red (no congruence possible)
- Dropdown: Test different TP methods (Variable Cost, Full Cost, Cost+, Market, Negotiated)
- Show each division's incremental profit at the selected TP

**Card 5: Residual Income & Investment**
- Multi-year timeline (Year 0-3)
- Input: Investment amount, useful life, annual incremental profit, cost of capital rate
- Toggle depreciation: Straight-line vs. Accelerated vs. Delayed
- Live table: Year | Book Value | Divisional Profit Impact | RI Impact | Bonus
- Visual: bar chart of bonus by year under different depreciation methods
- Key insight: "Same investment, same cash flows, but different depreciation → different bonus timing"

**Card 6: System Critique Cheat Sheet**
- Not a calculator but a structured framework
- Checklist organized by dimension:
  - Variance Analysis: "Is the budget realistic? Does it capture the right drivers? Should we decompose further?"
  - Cost System: "Is the allocation base appropriate? Does it cause cross-subsidization? ABC needed?"
  - External Pricing: "Cost-based or market-based? Does the cost include idle capacity (death spiral risk)?"
  - Transfer Pricing: "Does it achieve goal congruence? Is corporate OH creating distortions? Should divisions negotiate?"
  - Performance Measure: "Profit center or investment center? Should we use RI/ROI? Is the measure controllable?"
  - Incentives: "Moving target problems? Short-termism? Non-financial measures needed? Equity comp?"
- Each item expandable with a 1-sentence explanation

### Tab 3: "Practice Mode"
**Purpose:** Exam-style problems with step-by-step guided solving.

Two modes:
1. **Guided Mode** — Problem shows, student fills in blanks step-by-step with hints available
2. **Timed Mode** — Full problem, timer, submit and check

Content: Simplified versions of real exam problems from the course materials:
- Le Bistrot Parisien (variance analysis + vegan menu decision)
- Cipriani & Lombardi (variance with inflation + transfer pricing with corporate OH)
- Artisan Gardeners (full cycle: variance → pricing → TP → RI → critique)
- FreshBread (variance → product profitability → TP → investment → critique)
- XtremeClimb (variance with inflation + new product + TP range + RI with depreciation)
- Compagnie du Froid (multi-region variance with market size/share/mix decomposition)

Each problem:
- Has a "Show Pattern" button revealing which exam part type it maps to
- Shows correct answer with step-by-step solution
- Highlights the "trap" in the problem (e.g., "the corporate OH allocation changes when volume changes")

### Tab 4: "Formula Sheet"
**Purpose:** One-page printable reference.

Clean, organized by concept:
- All variance formulas with variable definitions
- RI formula and components
- TP range formula
- Cost-plus pricing formula
- Contribution margin computation
- Key decision rules (accept if CM > 0 for company; but check divisional profit for manager)

Export as PDF button.

---

## Technical Spec

### Stack
- **Framework:** React (Next.js or Vite + React)
- **Styling:** Tailwind CSS
- **Charts:** Recharts for waterfall charts, bar charts
- **State:** React useState/useReducer (no backend needed)
- **Hosting:** Vercel (static/SSR)
- **Data:** All problems and solutions stored as JSON in the repo

### Key Interactive Components

1. **WaterfallChart** — Reusable variance analysis visualization
   - Props: budgetProfit, variances[] (label, amount, favorable/unfavorable)
   - Animated bars with color coding (green = favorable, red = unfavorable)

2. **TPRangeSlider** — Transfer pricing goal congruence visualizer
   - Shows min/max range with a slider
   - Updates both divisions' profit in real-time

3. **RITimeline** — Multi-year residual income calculator
   - Year-by-year table with editable depreciation schedule
   - Bonus computation with highlight on zero-bonus years

4. **RelevanceTable** — Side-by-side comparison builder
   - Company cash flows vs. Division profit
   - Auto-highlights goal incongruence

5. **CostBuildUp** — Animated cost waterfall
   - VC → FC allocation → Full Cost → Markup → Price
   - Toggle allocation methods

### Data Model (simplified)

```typescript
interface ExamProblem {
  id: string;
  title: string;
  partType: 'variance' | 'pricing' | 'transfer' | 'investment' | 'critique';
  difficulty: 1 | 2 | 3;
  scenario: string; // markdown, ≤ 200 words
  tables: TableData[];
  questions: Question[];
  solution: Solution;
  trap: string; // the common mistake
  patternNote: string; // how to recognize this type
}

interface Question {
  id: string;
  text: string;
  type: 'numeric' | 'multiple_choice' | 'range';
  answer: number | string;
  tolerance?: number; // for numeric answers
  hints: string[];
  solutionSteps: string[];
}
```

---

## Design Direction

### Aesthetic: "Control Dashboard"
- Dark mode default (easier on eyes during long study sessions)
- Clean, minimal UI — no decorative elements
- Monospace numbers in tables/calculators (easy to compare digits)
- Color coding: 🟢 Green = favorable/good, 🔴 Red = unfavorable/bad, 🔵 Blue = neutral/info
- Subtle animations on calculations (numbers rolling up/down)
- Card-based layout with generous whitespace

### Typography
- Display: A distinctive serif or geometric sans for headers
- Body: Clean sans-serif for readability
- Numbers: Monospace (JetBrains Mono or similar)

### Navigation
- Bottom tab bar (mobile-friendly): Exam Map | Concepts | Practice | Formulas
- Each concept card is a full-screen modal/page
- Smooth transitions between sections

---

## MVP Scope (v1)

### Must Have
- [ ] Exam Map with 5-part flow visualization
- [ ] All 6 Concept Cards with interactive sandboxes
- [ ] Variance Analysis waterfall calculator (the #1 exam skill)
- [ ] Transfer Pricing range calculator with goal congruence visual
- [ ] RI/Investment multi-year calculator with depreciation toggle
- [ ] Formula sheet (viewable + PDF export)
- [ ] 3 guided practice problems (one simple, one medium, one hard)

### Nice to Have (v2)
- [ ] Full practice mode with timer
- [ ] All 10+ practice problems from course materials
- [ ] Spaced repetition for formulas
- [ ] "Exam Simulator" — randomly generated problems
- [ ] Peer comparison / leaderboard
- [ ] Dark/light mode toggle

### Out of Scope
- User accounts / authentication
- AI-generated problems
- Video explanations
- Integration with LMS

---

## Success Metrics
- Students can identify exam part types within 30 seconds of reading a problem
- Students can complete a variance analysis waterfall in under 5 minutes
- Students can determine goal congruence (yes/no + TP range) in under 3 minutes
- 80%+ of practice problem attempts are correct on second try

---

## Content Sources (from course materials)
1. Final Exam Practice Problems (MBA) — primary source for practice problems
2. Final Exam Practice Solutions (MBA) — answer keys and step-by-step solutions
3. Variance Analysis technical note (CN-226-E) — theory reference for variance methodology
4. Compagnie du Froid case — real-world variance analysis with market size/share decomposition
5. Al Jakani slides — transfer pricing key takeaways
6. PriceClub case — divisional performance and variance analysis
7. Artisan Gardeners case — full exam-style problem (variance → pricing → TP → RI)
8. Salers slides — variance analysis methodology
9. ATH MBA slides — earn-out and incentive design

---

## Appendix: Exam Pattern Recognition Guide

| What you see in the problem | It's Part... | What to compute |
|---|---|---|
| Budget vs. Actual table with Volume, Price, Costs | Part 1 | Waterfall of variances |
| "New client offers to buy X units at $Y" | Part 2 | Incremental CF + Divisional Profit |
| "Division A buys from Division B" + TP policy | Part 3 | TP range for goal congruence |
| "Considering a $X investment over N years" | Part 4 | CF → Div Profit → RI → Bonus |
| "Analyze the following elements..." | Part 5 | Structured critique of 5-6 dimensions |

| Red flag in the problem | The trap |
|---|---|
| "Corporate OH allocated per unit sold" | Volume-based OH creates fake variable cost → breaks goal congruence |
| "Inflation of X%" | Must adjust budget for inflation BEFORE price/efficiency variances |
| "Standard fixed cost = Total FC / Capacity" | Idle capacity not allocated → avoids death spiral but may under-price |
| "Bonus based on increase vs. prior year" | Moving target → good year followed by good year = no bonus |
| "Book value of assets at beginning of year" | Depreciation schedule affects RI and bonus timing dramatically |
| "Transportation costs paid by buying division" | Extra cost not in TP formula but affects buyer's decision |
