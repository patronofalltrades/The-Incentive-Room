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
  formulaDescription: string
  isolatedFormulas?: {
    name: string
    tex: string
    legend: string
    explanation: string
  }[]
}

export const EXAM_PARTS: ExamPart[] = [
  {
    part: 1,
    title: 'Variance Analysis',
    icon: '',
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
    coreFormulaLegend: 'N_a = actual units sold, N_b = budgeted units sold, CM_b = budgeted contribution margin per unit, P_a = actual selling price, P_b = budgeted selling price, Q_a = actual input quantity per unit, Q_b = budgeted input quantity per unit, C_b = budgeted cost per unit of input',
    formulaDescription: 'These three formulas decompose the profit gap into its drivers.',
    isolatedFormulas: [
      {
        name: 'Volume Variance',
        tex: 'V_{vol} = (N_a - N_b) \\times CM_b',
        legend: 'N_a = actual units sold, N_b = budgeted units sold, CM_b = budgeted contribution margin per unit',
        explanation: 'Measures the profit impact of selling more or fewer units than planned. Uses budgeted per-unit margins so the volume effect is isolated from price and cost changes.',
      },
      {
        name: 'Selling Price Variance',
        tex: 'V_{price} = (P_a - P_b) \\times N_a',
        legend: 'P_a = actual selling price, P_b = budgeted selling price, N_a = actual units sold',
        explanation: 'Measures the revenue impact of charging a different price than budgeted. Multiplied by actual volume because the price difference only applies to units actually sold.',
      },
      {
        name: 'Efficiency Variance',
        tex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a',
        legend: 'Q_a = actual input per unit, Q_b = budgeted input per unit, C_b = budgeted cost per input unit, N_a = actual units',
        explanation: 'Measures whether more or fewer inputs were used per unit than planned. Valued at budgeted input prices to isolate the quantity effect from the price effect.',
      },
    ],
  },
  {
    part: 2,
    title: 'Pricing and Relevance',
    icon: '',
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
    coreFormulaLegend: 'CF = incremental cash flow (company perspective), DP = incremental divisional profit (manager perspective), N = number of units in the order, P = selling price per unit, VC = variable cost per unit, OH = allocated corporate overhead per unit',
    formulaDescription: 'Compare two perspectives on the same deal.',
    isolatedFormulas: [
      {
        name: 'Company Cash Flow (Incremental)',
        tex: '\\Delta CF = N \\times (P - VC)',
        legend: 'N = number of units, P = selling price per unit, VC = variable cost per unit',
        explanation: 'The company perspective ignores allocated overhead because it does not change in cash. Only truly incremental revenues and costs matter.',
      },
      {
        name: 'Manager Divisional Profit (Incremental)',
        tex: '\\Delta DP = N \\times (P - VC - OH)',
        legend: 'OH = allocated corporate overhead per unit (does not change in cash but appears on the division income statement)',
        explanation: 'The manager sees overhead as a real cost. When overhead is large enough to flip the sign from positive to negative, the manager rejects a deal that creates value for the company. This is goal incongruence.',
      },
    ],
  },
  {
    part: 3,
    title: 'Transfer Pricing',
    icon: '',
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
    coreFormulaLegend: 'TP_{min} = minimum transfer price the seller will accept, TP_{max} = maximum transfer price the buyer will pay, VC_S = seller variable cost of production, OC_S = seller opportunity cost (lost margin from displaced sales; zero if spare capacity), P_{ext} = buyer external selling price to end customers, VC_B = buyer other variable costs beyond the transfer price',
    formulaDescription: 'Find the range where both divisions benefit from trade.',
    isolatedFormulas: [
      {
        name: 'Seller Minimum (Floor)',
        tex: 'TP_{min} = VC_S + OC_S',
        legend: 'VC_S = seller variable cost of production, OC_S = seller opportunity cost (zero if spare capacity; otherwise the lost margin from displaced sales)',
        explanation: 'The lowest price the seller will accept. With spare capacity, the floor is just the variable cost. At full capacity, add the contribution margin lost from the order that must be displaced.',
      },
      {
        name: 'Buyer Maximum (Ceiling)',
        tex: 'TP_{max} = P_{ext} - VC_B',
        legend: 'P_{ext} = buyer external selling price to end customers, VC_B = buyer other variable costs beyond the transfer price',
        explanation: 'The highest price the buyer will pay. If the transfer price exceeds this, the buyer loses money on every unit and will refuse the deal.',
      },
    ],
  },
  {
    part: 4,
    title: 'Investment and Residual Income',
    icon: '',
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
    coreFormulaLegend: 'RI_t = residual income in year t (the value created above the cost of capital), DP_t = divisional profit in year t (cash flow minus depreciation), r = cost of capital rate (the minimum return investors require), BV_t = book value of assets at the beginning of year t (not the end), Depr = annual depreciation expense, \\Delta CF = incremental annual cash flow from the investment',
    formulaDescription: 'Build a year-by-year table from cash flows to bonus.',
    isolatedFormulas: [
      {
        name: 'Divisional Profit',
        tex: 'DP_t = \\Delta CF - Depr',
        legend: '\\Delta CF = incremental annual cash flow from the investment, Depr = annual depreciation expense (straight-line: cost divided by life)',
        explanation: 'Operating cash flow minus the non-cash depreciation charge. Different depreciation methods produce different DP in each year even though total cash flows are identical.',
      },
      {
        name: 'Residual Income',
        tex: 'RI_t = DP_t - r \\times BV_t',
        legend: 'r = cost of capital rate (the minimum return investors require), BV_t = book value of assets at the BEGINNING of year t (not the end)',
        explanation: 'Deducts a capital charge for the assets the division ties up. As the asset depreciates, book value drops, the charge shrinks, and RI improves mechanically. A positive RI means the division creates value above its cost of capital.',
      },
    ],
  },
  {
    part: 5,
    title: 'System Critique',
    icon: '',
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
    coreFormulaLegend: 'For each of the six dimensions: name the specific accounting or measurement issue, explain the behavioral distortion it creates for the manager, then propose a concrete alternative design',
    formulaDescription: 'The system critique is not a formula — it is a structured diagnostic framework. For each dimension of the control system (variance analysis, cost allocation, pricing, transfer pricing, performance measurement, and incentive design), you must identify the problem, explain its behavioral consequence, and propose a fix. Always connect back to specific numbers from earlier parts of the exam.',
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
