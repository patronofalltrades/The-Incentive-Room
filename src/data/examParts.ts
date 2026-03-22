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
  softColor: string
  conceptCard: string
  redFlag: string
  trap: string
  coreFormulaTex: string
  coreFormulaLegend: string
}

export const EXAM_PARTS: ExamPart[] = [
  {
    part: 1,
    title: 'Variance Analysis',
    icon: '📊',
    tagline: 'Decompose the gap between budgeted and actual profit into its underlying drivers.',
    pattern: 'You receive a Budget versus Actual table showing units sold, selling price, variable costs, and fixed costs. Your job is to build a variance waterfall that traces each deviation.',
    dataIn: 'Budget and Actual figures for units sold, selling price per unit, variable cost per unit, and total fixed costs',
    compute: 'Volume Variance, Selling Price Variance, Variable Cost Efficiency Variance, Input Price Variance, and Fixed Cost Variance',
    difficulty: 2,
    weight: 'Approximately 30 percent',
    color: '#7c3aed',
    softColor: 'var(--accent-soft)',
    conceptCard: 'variance',
    redFlag: 'An inflation adjustment is required before computing price and efficiency variances',
    trap: 'Forgetting to adjust the budget for inflation before computing selling price and variable cost efficiency variances',
    coreFormulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b \\quad V_{price} = (P_a - P_b) \\times N_a \\quad V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a',
    coreFormulaLegend: 'N = units, CM_b = budgeted contribution margin, P = price, Q = input per unit, C_b = budgeted input cost',
  },
  {
    part: 2,
    title: 'Pricing and Relevance',
    icon: '⚖️',
    tagline: 'Determine whether the company and the division manager should accept a special order.',
    pattern: 'A new client offers to buy a specific quantity at a given price. You must compute the incremental cash flow for the company and the incremental divisional profit for the manager, then check for goal incongruence.',
    dataIn: 'Offer price, additional volume, variable cost per unit, and the corporate overhead allocation rate',
    compute: 'Incremental cash flow from the company perspective versus incremental divisional profit from the manager perspective',
    difficulty: 2,
    weight: 'Approximately 20 percent',
    color: '#2563eb',
    softColor: 'var(--blue-soft)',
    conceptCard: 'relevance',
    redFlag: 'Corporate overhead allocated on a per-unit basis creates a cost that behaves like a variable cost but does not change in cash',
    trap: 'Allocated overhead that does not change in cash leads the manager to reject a deal that the company would want to accept',
    coreFormulaTex: '\\Delta CF = N(P - VC) \\quad \\Delta DP = N(P - VC - OH)',
    coreFormulaLegend: 'CF = cash flow, DP = divisional profit, N = units, P = price, VC = variable cost, OH = allocated overhead per unit',
  },
  {
    part: 3,
    title: 'Transfer Pricing',
    icon: '🔄',
    tagline: 'Find the transfer price range where both divisions benefit from internal trade.',
    pattern: 'Division A buys from Division B. You must find the minimum and maximum transfer price that achieves goal congruence, then test whether standard transfer pricing methods fall within that range.',
    dataIn: 'Seller variable cost, seller allocated fixed costs, buyer external selling price, buyer other costs, and corporate overhead per unit',
    compute: 'Transfer price minimum equals the seller incremental cost; transfer price maximum equals the buyer contribution margin from external sale',
    difficulty: 3,
    weight: 'Approximately 20 percent',
    color: '#d97706',
    softColor: 'var(--amber-soft)',
    conceptCard: 'transfer',
    redFlag: 'Corporate overhead allocated per unit sold inflates the seller floor price and can destroy the congruence zone',
    trap: 'Full-cost transfer pricing often fails because the fixed cost allocation inflates the seller minimum above the buyer maximum',
    coreFormulaTex: 'TP_{min} = VC_S + OC_S \\quad TP_{max} = P_{ext} - VC_B',
    coreFormulaLegend: 'TP = transfer price, VC_S = seller variable cost, OC_S = seller opportunity cost, P_ext = buyer external price, VC_B = buyer other variable costs',
  },
  {
    part: 4,
    title: 'Investment and Residual Income',
    icon: '📈',
    tagline: 'Evaluate whether an investment improves residual income and how depreciation affects bonus timing.',
    pattern: 'The company is considering an investment of a given amount over a specified number of years. You must build a year-by-year table showing book value, divisional profit, residual income, and bonus under different depreciation methods.',
    dataIn: 'Investment amount, useful life, annual incremental operating profit, cost of capital rate, and depreciation method',
    compute: 'For each year: book value, divisional profit after depreciation, residual income (divisional profit minus cost of capital multiplied by book value), and bonus',
    difficulty: 3,
    weight: 'Approximately 20 percent',
    color: '#16a34a',
    softColor: 'var(--green-soft)',
    conceptCard: 'ri',
    redFlag: 'The book value at the beginning of the year is used for the residual income calculation, not the ending value',
    trap: 'Different depreciation schedules produce different bonus timing even though total cash flows remain identical across all methods',
    coreFormulaTex: 'RI_t = DP_t - r \\times BV_t \\quad DP_t = \\Delta CF - Depr',
    coreFormulaLegend: 'RI = residual income, DP = divisional profit, r = cost of capital, BV_t = book value at start of year t, Depr = depreciation',
  },
  {
    part: 5,
    title: 'System Critique',
    icon: '🔍',
    tagline: 'Identify what is broken in the control system and explain the behavioral distortion it creates.',
    pattern: 'The exam asks you to analyze several elements of the management control system. Structure your answer across five to six dimensions, naming the problem, the behavior it causes, and the recommended fix.',
    dataIn: 'The full case scenario and any numerical results from Parts 1 through 4',
    compute: 'A structured critique covering the variance system, cost allocation system, pricing policy, transfer pricing policy, performance measurement, and incentive design',
    difficulty: 2,
    weight: 'Approximately 10 percent',
    color: '#e11d48',
    softColor: 'var(--pink-soft)',
    conceptCard: 'critique',
    redFlag: 'Moving-target bonuses, book-value-based asset charges, and volume-based overhead allocation are common distortion sources',
    trap: 'Describing the accounting issue without naming the behavioral distortion it creates — you must always state the "so what" in terms of manager incentives',
    coreFormulaTex: '\\text{Problem} \\to \\text{Behavioral Distortion} \\to \\text{Recommended Fix}',
    coreFormulaLegend: 'For each dimension: name the accounting issue, explain how it distorts manager behavior, then propose an alternative',
  },
]

export const CONCEPT_WEB = [
  { from: 'Cost Allocation', to: 'Transfer Pricing', label: 'Overhead rate distorts the transfer price floor' },
  { from: 'Cost Allocation', to: 'Pricing Policy', label: 'Allocation base affects death spiral risk' },
  { from: 'Variance Analysis', to: 'System Critique', label: 'Budget quality determines whether variances are meaningful' },
  { from: 'Transfer Pricing', to: 'System Critique', label: 'Goal congruence is a direct measure of system health' },
  { from: 'Residual Income', to: 'System Critique', label: 'Depreciation method shapes manager investment behavior' },
  { from: 'Relevance Analysis', to: 'Pricing Policy', label: 'Short-run versus long-run pricing decisions' },
]
