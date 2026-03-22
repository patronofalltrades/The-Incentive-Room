export interface ExamPart {
  part: number
  title: string
  icon: string
  tagline: string
  pattern: string
  dataIn: string
  compute: string
  difficulty: 1 | 2 | 3
  weight: string
  color: string
  conceptCard: string
  redFlag: string
  trap: string
}

export const EXAM_PARTS: ExamPart[] = [
  {
    part: 1,
    title: 'Variance Analysis',
    icon: '📊',
    tagline: 'Decompose budget vs. actual profit into drivers.',
    pattern: 'You get a Budget vs. Actual table with Volume, Price, and Costs. Build the variance waterfall.',
    dataIn: 'Budget & Actual: units, selling price, variable costs, fixed costs',
    compute: 'Volume Var → Price Var → Efficiency Var → Input Price Var → Fixed Cost Var',
    difficulty: 2,
    weight: '~30%',
    color: '#7c3aed',
    conceptCard: 'variance',
    redFlag: 'Inflation adjustment required before price/efficiency variances',
    trap: 'Forgetting to adjust budget for inflation before computing price and efficiency variances',
  },
  {
    part: 2,
    title: 'Pricing & Relevance',
    icon: '⚖️',
    tagline: 'Should the company (and the manager) accept the deal?',
    pattern: '"New client offers X units at $Y." Compute incremental CF for the company, then divisional profit for the manager.',
    dataIn: 'Offer price, extra volume, variable costs, corporate OH allocation rate',
    compute: 'Incremental CF (company) vs. Incremental Divisional Profit (manager)',
    difficulty: 2,
    weight: '~20%',
    color: '#0ea5e9',
    conceptCard: 'relevance',
    redFlag: 'Corporate OH allocated per unit — creates fake variable cost',
    trap: 'Allocated OH that doesn\'t change in cash → manager rejects a deal the company wants',
  },
  {
    part: 3,
    title: 'Transfer Pricing',
    icon: '🔄',
    tagline: 'Find the TP range where both divisions gain.',
    pattern: '"Division A buys from Division B." Find min/max TP for goal congruence. Test standard TP methods.',
    dataIn: 'Seller VC, seller allocated FC, buyer selling price, buyer other costs, corporate OH per unit',
    compute: 'TP_min = seller\'s incremental cost; TP_max = buyer\'s CM from external sale',
    difficulty: 3,
    weight: '~20%',
    color: '#f59e0b',
    conceptCard: 'transfer',
    redFlag: 'Corporate OH per unit sold — inflates seller\'s floor price',
    trap: 'Corporate OH allocation destroys the congruence zone — full-cost TP often fails',
  },
  {
    part: 4,
    title: 'Investment & RI',
    icon: '📈',
    tagline: 'Does this investment improve residual income — and when?',
    pattern: '"Considering a $X investment over N years." Build year-by-year RI table. Compute divisional profit and bonus under different depreciation methods.',
    dataIn: 'Investment, useful life, annual incremental profit, cost of capital, depreciation method',
    compute: 'Year | Book Value | Div Profit | RI = Div Profit − CoC × Book Value | Bonus',
    difficulty: 3,
    weight: '~20%',
    color: '#22c55e',
    conceptCard: 'ri',
    redFlag: 'Book value at beginning of year used for RI calculation',
    trap: 'Different depreciation → different bonus timing; same total cash flows, very different manager incentives',
  },
  {
    part: 5,
    title: 'System Critique',
    icon: '🔍',
    tagline: 'Identify what\'s broken and why it distorts behavior.',
    pattern: '"Analyze the following elements of the control system." Structure your answer across 5–6 dimensions.',
    dataIn: 'The case scenario + any numbers from Parts 1–4',
    compute: 'Variance System → Cost System → Pricing → Transfer Pricing → Perf. Measure → Incentives',
    difficulty: 2,
    weight: '~10%',
    color: '#f43f5e',
    conceptCard: 'critique',
    redFlag: 'Moving target bonus / book value assets / volume-based OH',
    trap: 'Skipping the "so what" — you must name the behavioral distortion, not just the accounting issue',
  },
]

export const CONCEPT_WEB = [
  { from: 'Cost Allocation', to: 'Transfer Pricing', label: 'OH rate distorts TP floor' },
  { from: 'Cost Allocation', to: 'Pricing Policy', label: 'Base affects death spiral risk' },
  { from: 'Variance Analysis', to: 'System Critique', label: 'Budget quality drives variance meaning' },
  { from: 'Transfer Pricing', to: 'System Critique', label: 'Goal congruence = system health' },
  { from: 'Residual Income', to: 'System Critique', label: 'Depreciation shapes manager behavior' },
  { from: 'Relevance Analysis', to: 'Pricing Policy', label: 'Short-run vs. long-run decision' },
]
