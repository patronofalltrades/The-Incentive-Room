export interface TopicProblem {
  id: string
  topic: string
  title: string
  difficulty: string
  difficultyColor: string
  difficultyBg: string
  scenario: string
  questions: {
    text: string
    formulaTex?: string
    formulaLegend?: string
    approach: string[]
    answer: string
    keyTakeaway: string
  }[]
}

export const TOPIC_PROBLEMS: TopicProblem[] = [
  // ═══════════════════════════════════════════
  // VARIANCE ANALYSIS (5 problems)
  // ═══════════════════════════════════════════
  {
    id: 'var-basic',
    topic: 'Variance Analysis',
    title: 'Quick Variance Drill',
    difficulty: 'Easy',
    difficultyColor: 'var(--green)',
    difficultyBg: 'var(--green-soft)',
    scenario: 'Budget: 1,000 units, price $50, variable cost $30, fixed costs $10,000. Actual: 1,100 units, price $48, variable cost $33, fixed costs $10,500.',
    questions: [
      {
        text: 'Compute the volume, price, and variable cost variances.',
        formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b = (1{,}100 - 1{,}000) \\times 20 = +2{,}000',
        formulaLegend: 'CM_b = P_b − VC_b = 50 − 30 = $20',
        approach: ['Volume: (1,100 − 1,000) × 20 = +$2,000 (Favorable)', 'Price: (48 − 50) × 1,100 = −$2,200 (Unfavorable)', 'Variable cost: −(33 − 30) × 1,100 = −$3,300 (Unfavorable)'],
        answer: 'Volume +$2,000 (Favorable), Price −$2,200 (Unfavorable), Variable cost −$3,300 (Unfavorable)',
        keyTakeaway: 'Price and variable cost variances use actual volume; volume variance uses budget contribution margin.',
      },
    ],
  },
  {
    id: 'var-bp',
    topic: 'Variance Analysis',
    title: 'Restaurant Variance Waterfall',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'A restaurant budgeted 1,000 customers at €190 per menu and €70 per drink (2 drinks per customer). Actual: 900 customers at €200 per menu and €75 per drink (1.5 drinks per customer). Menu cost budget €110, actual €115. Drink cost budget €35, actual €40. Fixed costs: €50,000 budget and actual.',
    questions: [
      {
        text: 'Compute the variance due to the change in the number of customers.',
        formulaTex: 'V_{cust} = (N_a - N_b) \\times CM_b^{total}',
        formulaLegend: 'CM_b per customer = (190 − 110) + 2 × (70 − 35) = 80 + 70 = €150',
        approach: ['Budgeted contribution margin per customer = menu margin + drink margin = (190 − 110) + 2 × (70 − 35) = 80 + 70 = €150.', 'Customer variance = (900 − 1,000) × 150 = −€15,000.'],
        answer: '−€15,000 (Unfavorable)',
        keyTakeaway: 'Each lost customer costs the full budgeted contribution margin including both menu and drinks.',
      },
      {
        text: 'Compute the variance due to the change in the average number of drinks per customer.',
        formulaTex: 'V_{drinks} = (D_a - D_b) \\times CM_{drink}^b \\times N_a = (1.5 - 2) \\times 35 \\times 900',
        formulaLegend: 'D = drinks per customer, CM_drink_b = budgeted margin per drink = 70 − 35 = €35',
        approach: ['Budgeted drink margin = 70 − 35 = €35 per drink.', 'Drinks variance = (1.5 − 2.0) × 35 × 900 = −0.5 × 35 × 900 = −€15,750.'],
        answer: '−€15,750 (Unfavorable)',
        keyTakeaway: 'Fewer drinks per customer represents a behavioral shift that reduces high-margin sales.',
      },
      {
        text: 'Compute the variance due to the change in the menu selling price.',
        formulaTex: 'V_{menu\\_price} = (P_a^{menu} - P_b^{menu}) \\times N_a = (200 - 190) \\times 900 = +9{,}000',
        formulaLegend: 'P_a = actual menu price, P_b = budgeted menu price, N_a = actual customers',
        approach: ['Menu price variance = (200 − 190) × 900 = +€9,000.'],
        answer: '+€9,000 (Favorable)',
        keyTakeaway: 'The price increase generated extra revenue per customer, partially offsetting the volume loss.',
      },
    ],
  },
  {
    id: 'var-inflation',
    topic: 'Variance Analysis',
    title: 'Inflation Adjustment Drill',
    difficulty: 'Hard',
    difficultyColor: 'var(--red)',
    difficultyBg: 'var(--red-soft)',
    scenario: 'A shoe manufacturer budgeted 200,000 pairs at €29 each, material cost €10 per pair (2 kilograms at €5 per kilogram). Budget assumed 0% inflation, but actual inflation was 5%. Actual: 180,000 pairs at €32 each, material cost €11.55 per pair (2.1 kilograms at €5.50 per kilogram).',
    questions: [
      {
        text: 'Compute the variance due to inflation.',
        formulaTex: 'V_{inf} = N_a \\times [(P_b \\times \\pi) - (Q_b \\times C_b \\times \\pi)] = 180{,}000 \\times [(29 \\times 0.05) - (2 \\times 5 \\times 0.05)]',
        formulaLegend: 'π = inflation rate (5%), P_b = budgeted price, Q_b = budgeted input per unit, C_b = budgeted input cost',
        approach: ['Revenue inflation = 180,000 × 29 × 0.05 = +€261,000.', 'Cost inflation = 180,000 × 10 × 0.05 = −€90,000.', 'Net inflation variance = 261,000 − 90,000 = +€171,000.'],
        answer: '+€171,000 (Favorable)',
        keyTakeaway: 'When selling prices inflate faster than input costs, inflation generates a favorable net variance. You must strip this out before evaluating the manager real performance.',
      },
      {
        text: 'Compute the selling price variance after removing the inflation effect.',
        formulaTex: 'V_{price}^{real} = (P_a - P_b \\times (1 + \\pi)) \\times N_a = (32 - 30.45) \\times 180{,}000',
        formulaLegend: 'Inflation-adjusted budget price = 29 × 1.05 = €30.45',
        approach: ['Inflation-adjusted budget price = 29 × 1.05 = €30.45.', 'Real price variance = (32.00 − 30.45) × 180,000 = 1.55 × 180,000 = +€279,000.'],
        answer: '+€279,000 (Favorable)',
        keyTakeaway: 'After stripping inflation, the manager still raised prices above the inflation-adjusted benchmark — a genuine pricing decision, not just inflation pass-through.',
      },
    ],
  },
  {
    id: 'var-limon',
    topic: 'Variance Analysis',
    title: 'Distillery Variance Analysis',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'A distillery budgeted 500,000 bottles at €9.00 each. Fruit: 0.40 kilograms per bottle at €5.00 per kilogram. Other variable costs: €2.50 per bottle. Fixed costs: €800,000. Actual: 400,000 bottles at €8.375, fruit 0.45 kilograms at €5.25, other variable costs €2.45, fixed costs €785,000.',
    questions: [
      {
        text: 'Compute the volume variance.',
        formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b = (400{,}000 - 500{,}000) \\times 4.50 = -450{,}000',
        formulaLegend: 'CM_b = 9.00 − (0.40 × 5.00) − 2.50 = €4.50',
        approach: ['Budgeted contribution margin per bottle = 9.00 − 2.00 − 2.50 = €4.50.', 'Volume variance = (400,000 − 500,000) × 4.50 = −€450,000.'],
        answer: '−€450,000 (Unfavorable)',
        keyTakeaway: 'Selling 100,000 fewer bottles than planned is the largest single driver of the profit decline.',
      },
      {
        text: 'Compute the fruit efficiency variance.',
        formulaTex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a = -(0.45 - 0.40) \\times 5.00 \\times 400{,}000 = -100{,}000',
        formulaLegend: 'Q_a = actual kilograms per bottle, Q_b = budgeted kilograms per bottle, C_b = budgeted cost per kilogram',
        approach: ['Extra fruit per bottle = 0.45 − 0.40 = 0.05 kilograms.', 'Efficiency variance = −0.05 × 5.00 × 400,000 = −€100,000.'],
        answer: '−€100,000 (Unfavorable)',
        keyTakeaway: 'Using 0.05 extra kilograms per bottle across 400,000 bottles wasted €100,000 at budget prices. Investigate whether quality requirements changed or production efficiency dropped.',
      },
    ],
  },
  {
    id: 'var-decompose',
    topic: 'Variance Analysis',
    title: 'Volume Decomposition into Market Size and Market Share',
    difficulty: 'Hard',
    difficultyColor: 'var(--red)',
    difficultyBg: 'var(--red-soft)',
    scenario: 'Budget assumed total market of 10,000 units with 20% market share (2,000 units). Budgeted contribution margin: $15 per unit. Actual market was 8,000 units and the company sold 1,800 units.',
    questions: [
      {
        text: 'Decompose the volume variance into a market size component and a market share component.',
        formulaTex: 'V_{size} = (M_a - M_b) \\times s_b \\times CM_b \\quad V_{share} = (s_a - s_b) \\times M_a \\times CM_b',
        formulaLegend: 'M = total market units, s = market share percentage, CM_b = budgeted contribution margin per unit',
        approach: ['Total volume variance = (1,800 − 2,000) × 15 = −$3,000.', 'Market size variance = (8,000 − 10,000) × 0.20 × 15 = −2,000 × 3 = −$6,000.', 'Actual market share = 1,800 / 8,000 = 22.5%.', 'Market share variance = (0.225 − 0.20) × 8,000 × 15 = 0.025 × 120,000 = +$3,000.', 'Check: −6,000 + 3,000 = −3,000 = total volume variance.'],
        answer: 'Market size: −$6,000 (Unfavorable) | Market share: +$3,000 (Favorable) | Total: −$3,000',
        keyTakeaway: 'The company actually gained market share (20% to 22.5%), but the overall market shrank by 2,000 units. Blaming the manager for the volume decline is unfair because the market size effect was uncontrollable.',
      },
    ],
  },

  // ═══════════════════════════════════════════
  // TRANSFER PRICING (5 problems)
  // ═══════════════════════════════════════════
  {
    id: 'tp-quick',
    topic: 'Transfer Pricing',
    title: 'Transfer Price Range Drill',
    difficulty: 'Easy',
    difficultyColor: 'var(--green)',
    difficultyBg: 'var(--green-soft)',
    scenario: 'Seller: variable cost = $12, spare capacity available. Buyer: external selling price $30, other variable costs $8. No corporate overhead.',
    questions: [
      {
        text: 'Find the goal congruence range for the transfer price.',
        formulaTex: 'TP_{min} = VC_S = 12 \\quad TP_{max} = P_{ext} - VC_B = 30 - 8 = 22',
        formulaLegend: 'VC_S = seller variable cost, P_ext = buyer external selling price, VC_B = buyer other variable costs',
        approach: ['Seller floor: variable cost = $12 (spare capacity, opportunity cost = 0).', 'Buyer ceiling: 30 − 8 = $22 (maximum price before buyer loses money).', 'Range: $12 ≤ TP ≤ $22.'],
        answer: '$12 ≤ TP ≤ $22',
        keyTakeaway: 'With spare capacity and no overhead allocation, the range is simply the seller variable cost to the buyer net margin.',
      },
    ],
  },
  {
    id: 'tp-agl',
    topic: 'Transfer Pricing',
    title: 'Full-Cost Transfer Pricing Failure',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'The SE division of a landscaping company can transfer 100 contracts to the NE division. SE variable cost = $840 per contract. SE fixed costs = $1,350,000 spread over 1,000 total contracts. Corporate overhead = $210,000. NE sells externally at $2,000 per contract. Pricing policy: full cost plus 10% markup.',
    questions: [
      {
        text: 'Compute the transfer price under the full-cost-plus pricing policy.',
        formulaTex: 'TP = (VC + \\frac{FC + OH}{N}) \\times 1.10 = (840 + \\frac{1{,}560{,}000}{1{,}000}) \\times 1.10 = 2{,}400 \\times 1.10 = 2{,}640',
        formulaLegend: 'FC + OH = 1,350,000 + 210,000 = $1,560,000 spread over 1,000 contracts',
        approach: ['Fixed cost per contract = (1,350,000 + 210,000) / 1,000 = $1,560.', 'Full cost = 840 + 1,560 = $2,400.', 'Transfer price = 2,400 × 1.10 = $2,640.'],
        answer: '$2,640 per contract',
        keyTakeaway: 'The full-cost transfer price ($2,640) exceeds the external selling price ($2,000), so the buyer will refuse the deal.',
      },
      {
        text: 'What is the goal congruence range, and does the current transfer price fall within it?',
        formulaTex: 'TP_{min} = VC_S = 840 \\quad TP_{max} = P_{ext} = 2{,}000',
        formulaLegend: 'SE has spare capacity (opportunity cost = 0), NE external price = $2,000',
        approach: ['Seller minimum: variable cost = $840 (spare capacity, no opportunity cost).', 'Buyer maximum: external price = $2,000 (the buyer cannot pay more than the client pays).', 'Range: $840 ≤ TP ≤ $2,000.', 'Current TP = $2,640 is above the range — goal congruence fails.'],
        answer: '$840 ≤ TP ≤ $2,000. Current transfer price of $2,640 is outside the range — no trade will occur.',
        keyTakeaway: 'Full-cost transfer pricing loads fixed costs and overhead onto each unit, destroying the goal congruence zone. The company loses $116,000 in potential cash flows because the divisions refuse to trade.',
      },
    ],
  },
  {
    id: 'tp-cl',
    topic: 'Transfer Pricing',
    title: 'Internal versus External Sourcing with Opportunity Cost',
    difficulty: 'Hard',
    difficultyColor: 'var(--red)',
    difficultyBg: 'var(--red-soft)',
    scenario: 'DIS division can sell 60,000 pairs to the CAVE customer at €40 per pair. MAN division can produce them at variable cost €15.50 per pair. However, MAN can only produce 50,000 additional pairs and would need to drop the NIKAO order (40,000 pairs at €35 each, variable cost €16.50). Internal pricing policy: variable cost plus 60% markup.',
    questions: [
      {
        text: 'Compute the transfer price using the internal pricing policy.',
        formulaTex: 'TP = VC \\times 1.60 = 15.50 \\times 1.60 = 24.80',
        formulaLegend: 'VC = variable manufacturing cost per pair',
        approach: ['Transfer price = 15.50 × 1.60 = €24.80 per pair.'],
        answer: '€24.80 per pair',
        keyTakeaway: 'The cost-plus markup is arbitrary and does not reflect the true opportunity cost of the displaced NIKAO order.',
      },
      {
        text: 'What is the goal congruence range considering MAN must drop the NIKAO order to produce for CAVE?',
        formulaTex: 'TP_{min} = VC + \\frac{OC}{N_{transfer}} = 15.50 + \\frac{40{,}000 \\times (35 - 16.50)}{60{,}000}',
        formulaLegend: 'OC = opportunity cost from losing NIKAO = 40,000 × (35 − 16.50) = €740,000',
        approach: ['MAN opportunity cost from dropping NIKAO = 40,000 × (35 − 16.50) = 40,000 × 18.50 = €740,000.', 'MAN minimum TP = 15.50 + 740,000 / 60,000 = 15.50 + 12.33 = €27.83.', 'DIS maximum TP = 40 − 0 = €40 (DIS has no other variable costs beyond the transfer price).', 'Range: €27.83 ≤ TP ≤ €40.00.', 'Current TP of €24.80 is below the range — MAN will refuse because it does not cover the opportunity cost.'],
        answer: '€27.83 ≤ TP ≤ €40.00. Current transfer price of €24.80 is below the range — MAN rejects.',
        keyTakeaway: 'When the seller operates at capacity, the opportunity cost of the displaced order must be included in the minimum transfer price. A simple cost-plus formula ignores this.',
      },
    ],
  },
  {
    id: 'tp-oh-squeeze',
    topic: 'Transfer Pricing',
    title: 'Corporate Overhead Double Squeeze',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'Seller variable cost = €10, corporate overhead charged at €3 per unit to the seller. Buyer external price = €25, buyer other variable costs = €5, corporate overhead also charged at €3 per unit to the buyer. Seller has spare capacity.',
    questions: [
      {
        text: 'Compute the goal congruence range with and without corporate overhead allocation.',
        formulaTex: '\\text{With OH: } TP_{min} = 10 + 3 = 13 \\quad TP_{max} = 25 - 5 - 3 = 17 \\quad \\text{Without OH: } TP_{min} = 10 \\quad TP_{max} = 25 - 5 = 20',
        formulaLegend: 'OH inflates seller floor by €3 and compresses buyer ceiling by €3',
        approach: ['Without corporate overhead: Range = €10 to €20 (width = €10).', 'With corporate overhead on seller: Floor rises to €13.', 'With corporate overhead on buyer: Ceiling drops to €17.', 'With both: Range = €13 to €17 (width = €4). The zone shrinks by €6.'],
        answer: 'Without overhead: €10 ≤ TP ≤ €20 | With overhead: €13 ≤ TP ≤ €17',
        keyTakeaway: 'Corporate overhead charged to both sides creates a double squeeze: the floor rises and the ceiling drops simultaneously. In many cases, this eliminates the congruence zone entirely.',
      },
    ],
  },
  {
    id: 'tp-hire-vs-transfer',
    topic: 'Transfer Pricing',
    title: 'Hire Externally versus Transfer Internally',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'The NE division needs 100 contracts fulfilled. Alternative 1: Transfer from SE at $2,640 per contract (SE variable cost = $840). Alternative 2: NE hires 4 workers at $25,000 each and fulfills internally at $840 variable cost per contract. NE sells to clients at $2,000 per contract.',
    questions: [
      {
        text: 'Compare the effect on the company cash flows under Alternative 1 versus Alternative 2.',
        formulaTex: '\\Delta CF_1 = 100 \\times (2{,}000 - 840) = +116{,}000 \\quad \\Delta CF_2 = 100 \\times (2{,}000 - 840) - 100{,}000 = +16{,}000',
        formulaLegend: 'Transfer payments cancel at the company level. Only external cash flows and hiring costs matter.',
        approach: ['Alternative 1 (transfer): Company CF = 100 × (2,000 − 840) = +$116,000 (internal TP cancels).', 'Alternative 2 (hire): Company CF = 100 × (2,000 − 840) − 4 × 25,000 = 116,000 − 100,000 = +$16,000.', 'Alternative 1 is better by $100,000 for the company.'],
        answer: 'Alternative 1 saves $100,000 versus Alternative 2. The company prefers internal transfer.',
        keyTakeaway: 'The inflated transfer price creates goal incongruence: NE prefers to hire externally ($16,000 DP gain) rather than transfer internally ($64,000 DP loss), even though the company saves $100,000 with the internal option.',
      },
    ],
  },

  // ═══════════════════════════════════════════
  // RESIDUAL INCOME (4 problems)
  // ═══════════════════════════════════════════
  {
    id: 'ri-quick',
    topic: 'Residual Income',
    title: 'Residual Income Calculation Drill',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'Investment: $300,000, 3-year life, straight-line depreciation. Annual operating profit before depreciation: $130,000. Cost of capital: 10%.',
    questions: [
      {
        text: 'Compute the Residual Income for Years 1, 2, and 3.',
        formulaTex: 'RI_t = (\\Pi - Depr) - r \\times BV_t',
        formulaLegend: 'Π = operating profit before depreciation, Depr = $100,000 per year, r = 10%, BV_t = book value at start of year t',
        approach: ['Depreciation = 300,000 / 3 = $100,000 per year. Divisional profit = 130,000 − 100,000 = $30,000.', 'Year 1: RI = 30,000 − 10% × 300,000 = 30,000 − 30,000 = $0.', 'Year 2: RI = 30,000 − 10% × 200,000 = 30,000 − 20,000 = +$10,000.', 'Year 3: RI = 30,000 − 10% × 100,000 = 30,000 − 10,000 = +$20,000.'],
        answer: 'Year 1: $0 | Year 2: +$10,000 | Year 3: +$20,000',
        keyTakeaway: 'Residual income increases each year as book value declines — same cash flows, different reported performance. This is a mechanical artifact of straight-line depreciation.',
      },
    ],
  },
  {
    id: 'ri-agl',
    topic: 'Residual Income',
    title: 'Investment That Looks Bad Under Residual Income',
    difficulty: 'Hard',
    difficultyColor: 'var(--red)',
    difficultyBg: 'var(--red-soft)',
    scenario: 'A landscaping division considers purchasing $420,000 of equipment with a 3-year life and zero salvage value. The equipment would generate 50 new contracts per year at $9,000 revenue and $5,000 variable cost each. Two additional workers are needed at $25,000 each. Cost of capital: 10%.',
    questions: [
      {
        text: 'Compute the cash flows for Years 0 through 3.',
        formulaTex: '\\Delta CF_0 = -420{,}000 \\quad \\Delta CF_{1-3} = 50 \\times (9{,}000 - 5{,}000) - 50{,}000 = +150{,}000',
        formulaLegend: 'Revenue per contract = $9,000, variable cost per contract = $5,000, hiring cost = 2 × $25,000',
        approach: ['Year 0: Cash outflow = −$420,000 (equipment purchase).', 'Years 1-3: Revenue = 50 × 9,000 = $450,000. Variable costs = 50 × 5,000 = $250,000. Hiring = $50,000. Annual cash flow = 450,000 − 250,000 − 50,000 = +$150,000.', 'Total cash flow = −420,000 + 3 × 150,000 = +$30,000.'],
        answer: 'Year 0: −$420,000 | Years 1-3: +$150,000 each | Total: +$30,000',
        keyTakeaway: 'The investment has a positive total cash flow of $30,000, so it creates company value. But the margin is thin.',
      },
      {
        text: 'Compute the Residual Income for Years 1, 2, and 3.',
        formulaTex: 'RI_t = (150{,}000 - 140{,}000) - 0.10 \\times BV_t',
        formulaLegend: 'Depreciation = 420,000 / 3 = $140,000, Divisional profit = $10,000, BV declines by $140,000 each year',
        approach: ['Divisional profit = 150,000 − 140,000 = $10,000 per year.', 'Year 1: RI = 10,000 − 0.10 × 420,000 = 10,000 − 42,000 = −$32,000.', 'Year 2: RI = 10,000 − 0.10 × 280,000 = 10,000 − 28,000 = −$18,000.', 'Year 3: RI = 10,000 − 0.10 × 140,000 = 10,000 − 14,000 = −$4,000.'],
        answer: 'Year 1: −$32,000 | Year 2: −$18,000 | Year 3: −$4,000',
        keyTakeaway: 'Residual income is negative every year despite a positive total cash flow. The capital charge exceeds the thin divisional profit. A manager evaluated on residual income would reject this value-creating investment.',
      },
    ],
  },
  {
    id: 'ri-bonus',
    topic: 'Residual Income',
    title: 'Bonus Timing Under Residual Income Evaluation',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'An investment of €2,400,000 generates annual operating cash flows of €1,000,000 for 3 years. Straight-line depreciation over 3 years with zero salvage value. Cost of capital: 25%. Bonus = 10% of the increase in Residual Income compared to the prior year (zero if Residual Income decreases).',
    questions: [
      {
        text: 'Compute the Residual Income and bonus for each year.',
        formulaTex: 'RI_t = (CF - Depr) - 0.25 \\times BV_t \\quad Bonus_t = 10\\% \\times \\max(RI_t - RI_{t-1}, 0)',
        formulaLegend: 'Depr = 2,400,000 / 3 = €800,000, BV declines by €800,000 per year',
        approach: ['Divisional profit = 1,000,000 − 800,000 = €200,000 per year.', 'Year 1: RI = 200,000 − 0.25 × 2,400,000 = 200,000 − 600,000 = −€400,000. Bonus = €0 (decline from 0).', 'Year 2: RI = 200,000 − 0.25 × 1,600,000 = 200,000 − 400,000 = −€200,000. ΔRI = +200,000 (improvement). Bonus = 10% × 200,000 = €20,000.', 'Year 3: RI = 200,000 − 0.25 × 800,000 = 200,000 − 200,000 = €0. ΔRI = +200,000. Bonus = €20,000.'],
        answer: 'Year 1: RI = −€400,000, Bonus = €0 | Year 2: RI = −€200,000, Bonus = €20,000 | Year 3: RI = €0, Bonus = €20,000',
        keyTakeaway: 'No bonus in Year 1 strongly discourages investment. The improving pattern in Years 2 and 3 rewards patience, but a short-tenure manager would avoid the investment entirely.',
      },
    ],
  },
  {
    id: 'ri-roi-comparison',
    topic: 'Residual Income',
    title: 'Return on Investment versus Residual Income Decision',
    difficulty: 'Easy',
    difficultyColor: 'var(--green)',
    difficultyBg: 'var(--green-soft)',
    scenario: 'A division currently earns $400,000 profit on $2,000,000 of assets (20% return on investment). A new project requires $500,000 investment and generates $75,000 annual profit (15% return on investment). The company cost of capital is 10%.',
    questions: [
      {
        text: 'Would the manager accept this project under a return on investment evaluation versus a Residual Income evaluation?',
        formulaTex: 'ROI_{new} = \\frac{75{,}000}{500{,}000} = 15\\% \\quad RI_{new} = 75{,}000 - 0.10 \\times 500{,}000 = +25{,}000',
        formulaLegend: 'ROI = return on investment, RI = residual income, r = 10% cost of capital',
        approach: ['Under return on investment: Current ROI = 400,000 / 2,000,000 = 20%. New project ROI = 15%. Blended ROI = 475,000 / 2,500,000 = 19%. ROI drops from 20% to 19%. Manager rejects.', 'Under Residual Income: New project RI = 75,000 − 10% × 500,000 = +$25,000. Total RI increases by $25,000. Manager accepts.', 'Company perspective: Project earns 15% > 10% cost of capital. Accept.'],
        answer: 'Return on investment evaluation: Manager rejects (ROI drops from 20% to 19%). Residual Income evaluation: Manager accepts (RI increases by $25,000). The company wants the project accepted.',
        keyTakeaway: 'Return on investment is a ratio that penalizes good projects when the division already earns above the cost of capital. Residual income correctly accepts any project earning above the hurdle rate.',
      },
    ],
  },

  // ═══════════════════════════════════════════
  // RELEVANCE ANALYSIS (4 problems)
  // ═══════════════════════════════════════════
  {
    id: 'relevance-quick',
    topic: 'Relevance Analysis',
    title: 'Accept or Reject Special Order',
    difficulty: 'Easy',
    difficultyColor: 'var(--green)',
    difficultyBg: 'var(--green-soft)',
    scenario: 'Special order: 500 units at $25 each. Variable cost = $18 per unit. Corporate overhead allocated at $5 per unit. Spare capacity available.',
    questions: [
      {
        text: 'Should the company accept? Should the manager accept?',
        formulaTex: '\\Delta CF = N(P - VC) = 500(25 - 18) = +3{,}500 \\quad \\Delta DP = N(P - VC - OH) = 500(25 - 18 - 5) = +1{,}000',
        formulaLegend: 'OH = corporate overhead per unit ($5). Irrelevant for cash but charged to divisional profit.',
        approach: ['Company: ΔCF = 500 × (25 − 18) = +$3,500. Accept.', 'Manager: ΔDP = 500 × (25 − 18 − 5) = +$1,000. Accept.', 'Both agree in this case. But if price were $22: company CF = +$2,000, manager DP = −$500 — goal incongruence.'],
        answer: 'Both accept. Company cash flow = +$3,500, Manager divisional profit = +$1,000.',
        keyTakeaway: 'Goal incongruence occurs when overhead is large enough to flip the manager decision from accept to reject while the company still gains in cash flow.',
      },
    ],
  },
  {
    id: 'relevance-bp-vegan',
    topic: 'Relevance Analysis',
    title: 'New Product Launch: Cash Flow versus Divisional Profit',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'A restaurant considers launching a vegan menu. Expected: 200 additional covers per month at €25 each. Incremental food cost: €10 per cover. No additional fixed costs. Corporate overhead is allocated at €3 per cover sold. The manager bonus is 10% of divisional profit.',
    questions: [
      {
        text: 'Compute the annual effect on the company cash flows and the manager divisional profit.',
        formulaTex: '\\Delta CF = 2{,}400 \\times (25 - 10) = +36{,}000 \\quad \\Delta DP = 2{,}400 \\times (25 - 10 - 3) = +28{,}800',
        formulaLegend: 'Annual covers = 200 × 12 = 2,400. OH = €3 per cover (does not change company cash).',
        approach: ['Annual additional covers = 200 × 12 = 2,400.', 'Company: ΔCF = 2,400 × (25 − 10) = 2,400 × 15 = +€36,000.', 'Manager: ΔDP = 2,400 × (25 − 10 − 3) = 2,400 × 12 = +€28,800.', 'Bonus increase = 10% × 28,800 = +€2,880.'],
        answer: 'Company cash flow: +€36,000 | Manager divisional profit: +€28,800 | Bonus increase: +€2,880',
        keyTakeaway: 'In this case both agree to launch. The overhead allocation reduces the manager benefit by €7,200 but does not flip the decision. Goal congruence is preserved.',
      },
    ],
  },
  {
    id: 'relevance-capacity',
    topic: 'Relevance Analysis',
    title: 'Special Order at Full Capacity',
    difficulty: 'Hard',
    difficultyColor: 'var(--red)',
    difficultyBg: 'var(--red-soft)',
    scenario: 'A factory operates at full capacity producing 10,000 units at $50 each with variable cost $30 each. A new customer offers 2,000 units at $45 each. To accept, the factory must displace 2,000 existing units. No corporate overhead.',
    questions: [
      {
        text: 'Should the company accept the special order?',
        formulaTex: '\\Delta CF = N \\times (P_{new} - VC) - N \\times (P_{existing} - VC) = 2{,}000 \\times (45 - 30) - 2{,}000 \\times (50 - 30)',
        formulaLegend: 'P_new = special order price, P_existing = current price, VC = variable cost per unit',
        approach: ['Revenue from special order = 2,000 × 45 = $90,000.', 'Variable cost = 2,000 × 30 = $60,000.', 'Contribution from special order = $30,000.', 'Lost contribution from displaced orders = 2,000 × (50 − 30) = $40,000.', 'Net effect = 30,000 − 40,000 = −$10,000.'],
        answer: 'Reject. Net cash flow effect = −$10,000. The opportunity cost of $40,000 exceeds the $30,000 contribution from the new order.',
        keyTakeaway: 'At full capacity, the opportunity cost of displaced sales must be included. The special order price ($45) exceeds variable cost ($30) but falls short of the current contribution margin ($20 per unit).',
      },
    ],
  },
  {
    id: 'relevance-capacity-adjusted',
    topic: 'Relevance Analysis',
    title: 'Capacity-Adjusted Performance Measure',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'A division has capacity for 1,500 contracts. Actual volume: 900 contracts. Revenue: $3,150,000. Total variable costs: $1,530,000. Divisional fixed costs: $1,350,000. Corporate overhead: $210,000. Consider adding 300 maintenance contracts at $2,500 each with variable cost $1,000 each.',
    questions: [
      {
        text: 'Compute the bonus effect of accepting the maintenance contracts using the capacity-adjusted performance measure, where fixed costs are allocated as: fixed costs × (actual contracts / capacity).',
        formulaTex: 'ADP = Rev - VC - FC \\times \\frac{N}{N_{cap}} - OH',
        formulaLegend: 'ADP = adjusted divisional profit, N = actual contracts, N_cap = capacity (1,500)',
        approach: ['Without maintenance: ADP = 3,150,000 − 1,530,000 − 1,350,000 × (900/1,500) − 210,000 = 3,150,000 − 1,530,000 − 810,000 − 210,000 = €600,000.', 'With maintenance (N = 1,200): Revenue = 3,150,000 + 750,000 = 3,900,000. Variable costs = 1,530,000 + 300,000 = 1,830,000. FC allocation = 1,350,000 × (1,200/1,500) = 1,080,000.', 'ADP = 3,900,000 − 1,830,000 − 1,080,000 − 210,000 = €780,000.', 'Δ Bonus = 10% × (780,000 − 600,000) = 10% × 180,000 = +$18,000.'],
        answer: '+$18,000 bonus increase under the capacity-adjusted measure',
        keyTakeaway: 'The capacity-adjusted measure reduces the bonus uplift compared to a fixed overhead approach (+$45,000) because adding contracts increases the fixed cost allocation share. This is more economically accurate but still preserves goal congruence.',
      },
    ],
  },

  // ═══════════════════════════════════════════
  // COST ALLOCATION (4 problems)
  // ═══════════════════════════════════════════
  {
    id: 'pricing-death-spiral',
    topic: 'Cost Allocation',
    title: 'Death Spiral Drill',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'Fixed costs = $100,000. Capacity = 10,000 units. Actual volume = 8,000 units. Variable cost = $5 per unit. Markup = 20%.',
    questions: [
      {
        text: 'Compute the cost-plus price under actual volume allocation versus capacity allocation.',
        formulaTex: 'P_{actual} = (5 + \\frac{100{,}000}{8{,}000}) \\times 1.2 = 17.50 \\times 1.2 = 21.00',
        formulaLegend: 'P_cap = (5 + 100,000/10,000) × 1.2 = 15.00 × 1.2 = $18.00',
        approach: ['Actual base: Fixed cost per unit = 100,000 / 8,000 = $12.50. Full cost = 5.00 + 12.50 = $17.50. Price = 17.50 × 1.2 = $21.00.', 'Capacity base: Fixed cost per unit = 100,000 / 10,000 = $10.00. Full cost = 5.00 + 10.00 = $15.00. Price = 15.00 × 1.2 = $18.00.', 'The actual-volume price is $3 higher — if volume drops further, price rises even more, driving away more customers.'],
        answer: 'Actual volume: $21.00 | Capacity: $18.00',
        keyTakeaway: 'Capacity-based allocation gives a stable price floor and prevents the death spiral. The $2,000 idle capacity cost is absorbed by the company rather than loaded onto customers.',
      },
    ],
  },
  {
    id: 'alloc-inflation',
    topic: 'Cost Allocation',
    title: 'Inflation Effect on Cost Allocation',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'A shoe manufacturer allocated fixed manufacturing costs of €3,500,000 over practical capacity of 350,000 pairs. Budget assumed 0% inflation. Actual inflation was 6%. Actual production: 300,000 pairs.',
    questions: [
      {
        text: 'Compute the fixed cost per unit under capacity allocation and under actual volume allocation, both with and without inflation adjustment.',
        formulaTex: 'FC_{cap} = \\frac{3{,}500{,}000}{350{,}000} = 10.00 \\quad FC_{actual} = \\frac{3{,}500{,}000}{300{,}000} = 11.67',
        formulaLegend: 'Inflation-adjusted FC = 3,500,000 × 1.06 = €3,710,000',
        approach: ['Capacity allocation (no inflation): 3,500,000 / 350,000 = €10.00 per pair.', 'Actual volume allocation (no inflation): 3,500,000 / 300,000 = €11.67 per pair.', 'Capacity allocation (with 6% inflation): 3,710,000 / 350,000 = €10.60 per pair.', 'Actual volume allocation (with inflation): 3,710,000 / 300,000 = €12.37 per pair.', 'The gap widens from €1.67 to €1.77 when inflation is included.'],
        answer: 'Capacity (no inflation): €10.00 | Actual (no inflation): €11.67 | Capacity (inflation): €10.60 | Actual (inflation): €12.37',
        keyTakeaway: 'Inflation amplifies the death spiral effect. When both volume drops and costs rise, actual-volume allocation produces an even more inflated cost per unit, accelerating the price spiral.',
      },
    ],
  },
  {
    id: 'alloc-export-pricing',
    topic: 'Cost Allocation',
    title: 'Export Pricing with Demand Drop',
    difficulty: 'Hard',
    difficultyColor: 'var(--red)',
    difficultyBg: 'var(--red-soft)',
    scenario: 'A distillery exports a specialty liqueur. Year 1: domestic volume 500,000 bottles, export 25,000 bottles. Fixed costs = €800,000. Variable cost = €4.50 per bottle. Pricing policy: full manufacturing cost plus 20% markup. Year 2: domestic demand drops to 450,000 bottles.',
    questions: [
      {
        text: 'Compute the export price in Year 1 and Year 2, and explain the death spiral risk.',
        formulaTex: 'P_1 = (4.50 + \\frac{800{,}000}{525{,}000}) \\times 1.20 \\quad P_2 = (4.50 + \\frac{800{,}000}{475{,}000}) \\times 1.20',
        formulaLegend: 'Year 1 total volume = 525,000, Year 2 total volume = 475,000',
        approach: ['Year 1: Fixed cost per bottle = 800,000 / 525,000 = €1.52. Full cost = 4.50 + 1.52 = €6.02. Price = 6.02 × 1.20 = €7.23.', 'Year 2: Fixed cost per bottle = 800,000 / 475,000 = €1.68. Full cost = 4.50 + 1.68 = €6.18. Price = 6.18 × 1.20 = €7.42.', 'Price rose by €0.19 because domestic demand dropped. If the higher export price causes export volume to fall, the price will rise further.'],
        answer: 'Year 1: €7.23 | Year 2: €7.42 | Price increase of €0.19 due to lower domestic volume',
        keyTakeaway: 'The domestic demand drop has nothing to do with the export product, yet the full-cost pricing policy passes the cost onto export customers. This is the death spiral in action — unrelated volume declines inflate unrelated prices.',
      },
    ],
  },
  {
    id: 'alloc-abc',
    topic: 'Cost Allocation',
    title: 'Activity-Based Costing Cross-Subsidization',
    difficulty: 'Medium',
    difficultyColor: 'var(--amber)',
    difficultyBg: 'var(--amber-soft)',
    scenario: 'A factory produces Product A (10,000 units, 1 setup per batch of 500) and Product B (500 units, 1 setup per batch of 50). Total overhead: $200,000. Product A uses 100,000 machine hours; Product B uses 5,000 machine hours. Each setup costs $500.',
    questions: [
      {
        text: 'Compare the overhead per unit under traditional volume-based allocation versus activity-based costing.',
        formulaTex: '\\text{Traditional: } OH_{unit} = \\frac{200{,}000}{10{,}500} \\quad \\text{ABC: } OH_{unit} = \\frac{setup\\_cost + machine\\_cost}{units}',
        formulaLegend: 'Traditional allocation uses total units; ABC traces costs to activities (setups and machine hours)',
        approach: ['Traditional: OH per unit = 200,000 / 10,500 = $19.05. Product A: $19.05 × 10,000 = $190,500. Product B: $19.05 × 500 = $9,525.', 'ABC approach: Product A setups = 10,000/500 = 20 setups × $500 = $10,000. Product B setups = 500/50 = 10 setups × $500 = $5,000.', 'Remaining overhead ($185,000) allocated by machine hours: Rate = 185,000 / 105,000 = $1.762 per hour.', 'Product A: 10,000 + 100,000 × 1.762 = $186,190. Per unit: $18.62.', 'Product B: 5,000 + 5,000 × 1.762 = $13,810. Per unit: $27.62.'],
        answer: 'Traditional: A = $19.05, B = $19.05 | ABC: A = $18.62, B = $27.62',
        keyTakeaway: 'Under traditional allocation, Product B appears to cost the same per unit as Product A. Activity-based costing reveals that Product B is 45% more expensive because it requires proportionally more setups. Product A was subsidizing Product B.',
      },
    ],
  },
]
