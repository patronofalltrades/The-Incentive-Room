export interface SimulationStep {
  id: string
  partLabel: string
  questionTitle: string
  question: string
  formulaTex?: string
  formulaLegend?: string
  approach: string[]
  answer: string
  keyTakeaway: string
}

export interface PartContext {
  partLabel: string
  context?: string
  tableData?: {
    title?: string
    headers: string[]
    rows: string[][]
    notes?: string[]
  }
}

export interface Simulation {
  id: string
  title: string
  caseScenario: string[]
  tableData?: {
    headers: string[]
    rows: string[][]
  }
  partContexts?: PartContext[]
  steps: SimulationStep[]
  summary: {
    conceptsCovered: string[]
    keyTheme: string
  }
}

export const ARTISAN_GARDENERS: Simulation = {
  id: 'artisan-gardeners',
  title: 'Artisan Gardeners & Landscapes (AGL)',
  caseScenario: [
    'Artisan Gardeners & Landscapes, Inc. (AGL) is a multidivisional landscaping company. Divisions are investment centers. Managers receive a fixed salary plus a bonus of 10% of Divisional Profit if positive.',
    'The South-East (SE) division is led by Mary Smith. Corporate overhead is fixed and equally distributed across divisions (does not depend on volume).',
    'Main materials (plants) and other variable costs increase proportionally with the number of contracts. Divisional fixed costs include salaries, equipment depreciation, and SG&A. Assume 0% tax rate, no trade credit.',
  ],
  tableData: {
    headers: ['', 'Budget', 'Actual'],
    rows: [
      ['Revenue ($000)', '4,320', '3,150'],
      ['  Number of contracts', '1,200', '900'],
      ['  Avg price per contract ($)', '3,600', '3,500'],
      ['Main materials ($000)', '2,100', '1,080'],
      ['  Avg plants per contract', '70', '60'],
      ['  Avg cost per plant ($)', '25', '20'],
      ['Other variable costs ($000)', '480', '450'],
      ['  Avg other VC per contract ($)', '400', '500'],
      ['Divisional fixed costs ($000)', '1,400', '1,350'],
      ['Corporate overhead ($000)', '210', '210'],
      ['Divisional Profit ($000)', '130', '60'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1.1 — Variance Analysis',
      context: 'Use the Budget versus Actual table above to decompose the total Divisional Profit change into individual variances. Each variance isolates one driver.',
    },
    {
      partLabel: 'Part 1.2 — Variable OH Allocation',
      context: 'Now assume Corporate Overhead is allocated at $175 per contract (instead of a fixed lump sum). Recompute the volume variance under this new allocation method.',
    },
    {
      partLabel: 'Part 2.1 — Relevance Analysis',
      context: 'The SE division can offer 300 maintenance contracts to existing clients. Each maintenance contract generates $2,500 in revenue and $1,000 in variable costs. No additional fixed costs or corporate overhead are incurred.',
      tableData: {
        title: 'Maintenance Contracts',
        headers: ['', 'Amount'],
        rows: [
          ['Number of contracts', '300'],
          ['Revenue per contract', '$2,500'],
          ['Variable cost per contract', '$1,000'],
          ['Additional fixed costs', '$0'],
          ['Additional corporate overhead', '$0'],
        ],
      },
    },
    {
      partLabel: 'Part 2.2 — Pricing Policy',
      context: 'AGL uses a full-cost-plus pricing policy with a 10% markup for the maintenance contracts. Full cost includes variable costs plus allocated fixed costs and corporate overhead.',
    },
    {
      partLabel: 'Part 2.3 — Idle Capacity Pricing',
      context: 'Now suppose fixed costs are allocated only over the capacity actually used, excluding idle capacity. AGL has practical capacity of 1,500 contracts per year.',
    },
    {
      partLabel: 'Part 2.4 — Adjusted Divisional Profit',
      context: 'The company introduces a capacity-adjusted performance measure where fixed costs are allocated based on actual contracts divided by practical capacity (1,500 contracts).',
    },
    {
      partLabel: 'Part 3.1 — Transfer Pricing',
      context: 'The NE division has excess demand for 100 contracts from new clients in the North-East region. NE would sell these externally at $2,000 per contract. SE can supply these contracts at a variable cost of $840 per contract. SE has spare capacity. AGL transfer pricing policy: full cost plus 10% markup.',
      tableData: {
        title: 'NE Division — Excess Demand',
        headers: ['', 'Amount'],
        rows: [
          ['Number of transfer contracts', '100'],
          ['NE external selling price', '$2,000/contract'],
          ['SE variable cost', '$840/contract'],
          ['SE spare capacity', 'Yes'],
          ['Transfer pricing policy', 'Full cost + 10% markup'],
        ],
      },
    },
    {
      partLabel: 'Part 3.2 — Hire vs Transfer',
      context: 'Alternative 2: Instead of transferring from SE, NE could hire 4 additional workers at $25,000 each and fulfill the 100 contracts internally at $840 variable cost per contract. Compare the two alternatives.',
    },
    {
      partLabel: 'Part 4.1 — Investment Analysis',
      context: 'Mary considers purchasing $420,000 of equipment to serve 50 large commercial contracts per year. Each contract generates $9,000 in revenue with $5,000 in variable costs. Two additional workers are needed at $25,000 each per year. Equipment has a 3-year life with zero salvage value, depreciated straight-line.',
      tableData: {
        title: 'Equipment Investment',
        headers: ['', 'Amount'],
        rows: [
          ['Equipment cost', '$420,000'],
          ['Useful life', '3 years'],
          ['Salvage value', '$0'],
          ['Depreciation method', 'Straight-line'],
          ['New contracts per year', '50'],
          ['Revenue per contract', '$9,000'],
          ['Variable cost per contract', '$5,000'],
          ['Additional workers', '2 × $25,000/year'],
        ],
      },
    },
    {
      partLabel: 'Part 4.2 — Residual Income',
      context: 'The bonus system is now based on Residual Income. RI = Divisional Profit minus 10% of book value of assets at the beginning of the year. Bonus = 10% of the increase in RI compared to the prior year (zero if RI decreases).',
    },
    {
      partLabel: 'Part 5 — System Critique',
      context: 'Analyze the following elements of AGL management control system and propose alternatives to improve them: (1) the variance analysis system, (2) the cost allocation and pricing policy, (3) the transfer pricing policy, (4) the performance measurement system, (5) the incentive design.',
    },
  ],
  steps: [
    // ===== PART 1.1 =====
    {
      id: 'q1',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q1: Volume Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Number of contracts.',
      formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b = (900 - 1{,}200) \\times 1{,}450 = -435{,}000',
      formulaLegend: 'N_a = actual contracts (900), N_b = budget contracts (1,200), CM_b = budgeted contribution margin per contract ($1,450)',
      approach: [
        'Step 1: The volume variance isolates the profit impact of selling fewer (or more) contracts than planned. We hold all per-unit economics at the budgeted level so the only thing changing is volume.',
        'Step 2: Compute the budgeted contribution margin per contract. Revenue per contract $3,600 minus materials (70 plants × $25 = $1,750) minus other variable costs $400 gives $1,450 per contract.',
        'Step 3: Volume Variance = (900 − 1,200) × $1,450 = −300 × $1,450 = −$435,000.',
        'Step 4: This means AGL lost $435,000 in profit purely because it completed 300 fewer contracts than planned. This is the single largest driver of the profit decline.',
      ],
      answer: '−$435,000 (Unfavorable)',
      keyTakeaway: '💡 The volume variance is always computed first because it uses budgeted per-unit economics. Every subsequent variance then explains what happened within the contracts that were actually completed.',
    },
    {
      id: 'q2',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q2: Price Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Average price per contract.',
      formulaTex: 'V_{price} = (P_a - P_b) \\times N_a = (3{,}500 - 3{,}600) \\times 900 = -90{,}000',
      formulaLegend: 'P_a = actual price per contract ($3,500), P_b = budgeted price per contract ($3,600), N_a = actual contracts sold (900)',
      approach: [
        'Step 1: The price variance captures the revenue impact of charging a different price than budgeted. We multiply the price difference by actual volume because the price gap only exists on contracts that were actually sold.',
        'Step 2: Price difference = $3,500 − $3,600 = −$100 per contract.',
        'Step 3: Price Variance = −$100 × 900 = −$90,000.',
        'Step 4: AGL charged $100 less per contract than planned. Possible reasons include competitive pressure or deliberate discounting to attract clients in a weak market.',
      ],
      answer: '−$90,000 (Unfavorable)',
      keyTakeaway: '💡 The price variance uses actual volume (not budgeted) because the price difference only applies to contracts that actually happened. This is a key exam distinction.',
    },
    {
      id: 'q3',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q3: Plant Efficiency Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Average number of plants per contract.',
      formulaTex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a = -(60 - 70) \\times 25 \\times 900 = +225{,}000',
      formulaLegend: 'Q_a = actual plants per contract (60), Q_b = budgeted plants per contract (70), C_b = budgeted cost per plant ($25), N_a = actual contracts (900)',
      approach: [
        'Step 1: The efficiency variance measures whether more or fewer inputs were used per unit of output than planned. It is valued at the budgeted input price to isolate the quantity effect from the price effect.',
        'Step 2: AGL used 60 plants per contract versus a budget of 70 — that is 10 fewer plants per contract.',
        'Step 3: Efficiency Variance = −(60 − 70) × $25 × 900 = 10 × $25 × 900 = +$225,000.',
        'Step 4: Using fewer plants saved $225,000. However, investigate whether fewer plants means simpler designs (lower quality) or genuine operational improvement.',
      ],
      answer: '+$225,000 (Favorable)',
      keyTakeaway: '💡 Efficiency is valued at the budgeted input price, not the actual price. This isolates how much was used from how much it cost. A favorable efficiency variance does not always mean good news — it could signal quality cuts.',
    },
    {
      id: 'q4',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q4: Input Price Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Average cost per plant.',
      formulaTex: 'V_{input} = -(C_a - C_b) \\times Q_a \\times N_a = -(20 - 25) \\times 60 \\times 900 = +270{,}000',
      formulaLegend: 'C_a = actual cost per plant ($20), C_b = budgeted cost per plant ($25), Q_a = actual plants per contract (60), N_a = actual contracts (900)',
      approach: [
        'Step 1: The input price variance captures the cost impact of paying a different price per unit of input than planned. It uses actual quantities because the price difference only exists on inputs that were actually purchased.',
        'Step 2: Each plant cost $20 versus a budget of $25 — that is $5 cheaper per plant.',
        'Step 3: Input Price Variance = −(20 − 25) × 60 × 900 = 5 × 54,000 = +$270,000.',
        'Step 4: AGL saved $270,000 by sourcing cheaper plants. Note: this could reflect better supplier negotiation or lower-quality plants (which links back to the efficiency question).',
      ],
      answer: '+$270,000 (Favorable)',
      keyTakeaway: '💡 Input price uses actual quantities (Q_a × N_a), not budgeted. Fewer plants at a lower price explains why total materials dropped from $2,100k to $1,080k — a combined efficiency and price effect.',
    },
    {
      id: 'q5',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q5: Other Variable Cost Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Other variable costs per contract.',
      formulaTex: 'V_{ovc} = -(OVC_a - OVC_b) \\times N_a = -(500 - 400) \\times 900 = -90{,}000',
      formulaLegend: 'OVC_a = actual other variable cost per contract ($500), OVC_b = budgeted other variable cost per contract ($400), N_a = actual contracts (900)',
      approach: [
        'Step 1: Other variable costs (transportation, ancillary materials, subcontracting) are treated as a single line item. The variance isolates whether these costs per contract differed from plan.',
        'Step 2: Actual other VC per contract was $500 versus a budget of $400 — that is $100 more per contract.',
        'Step 3: Other VC Variance = −(500 − 400) × 900 = −$90,000.',
        'Step 4: This partially offsets the plant savings. It is worth investigating whether reduced plant usage required more ancillary work.',
      ],
      answer: '−$90,000 (Unfavorable)',
      keyTakeaway: '💡 When you see favorable materials variances alongside unfavorable other VC variances, consider whether they are linked — simpler designs might require more transportation or subcontracting.',
    },
    {
      id: 'q6',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q6: Fixed Cost Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Divisional fixed costs.',
      formulaTex: 'V_{FC} = FC_b - FC_a = 1{,}400 - 1{,}350 = +50',
      formulaLegend: 'FC_b = budgeted fixed costs ($1,400k), FC_a = actual fixed costs ($1,350k). Both in thousands.',
      approach: [
        'Step 1: Fixed costs do not flex with volume — they are committed costs like salaries, equipment depreciation, and selling, general, and administrative expenses. The variance is simply the difference between budget and actual.',
        'Step 2: Fixed Cost Variance = $1,400k − $1,350k = +$50,000 (favorable).',
        'Step 3: This could reflect a hiring freeze, delayed equipment purchases, or SGA cost discipline during a low-volume year.',
      ],
      answer: '+$50,000 (Favorable)',
      keyTakeaway: '💡 Fixed cost variances are never flexed for volume. Budget versus actual is the only comparison. A favorable result in a down year might indicate cost-cutting rather than genuine efficiency.',
    },
    {
      id: 'q7',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q7: Corporate Overhead Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Corporate overhead.',
      formulaTex: 'V_{OH} = OH_b - OH_a = 210 - 210 = 0',
      formulaLegend: 'Corporate overhead is a fixed allocation equally distributed across divisions, unchanged between budget and actual.',
      approach: [
        'Step 1: In this scenario, corporate overhead is allocated as a fixed lump sum ($210,000) regardless of volume. Because both the budget and actual allocations are $210,000, the variance is zero.',
        'Step 2: Corporate OH Variance = $210k − $210k = $0.',
        'Step 3: This changes in Part 1.2 where OH is allocated per contract — then volume changes will affect the OH charge and create a new variance.',
      ],
      answer: '$0 (No variance)',
      keyTakeaway: '💡 A fixed lump-sum overhead allocation produces zero variance regardless of volume. But when overhead is allocated per unit, it behaves like a variable cost and creates volume-dependent distortions — this is the exam trap in Part 1.2.',
    },
    {
      id: 'q8',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q8: Bonus Computation',
      question: 'Compute Mary\'s bonus payment in 2022.',
      formulaTex: 'Bonus = 10\\% \\times DP = 10\\% \\times 60{,}000 = 6{,}000',
      formulaLegend: 'DP = actual Divisional Profit ($60,000). Bonus is paid only when DP is greater than zero.',
      approach: [
        'Step 1: The bonus rule is straightforward — 10% of Divisional Profit if positive, zero otherwise. This is a threshold-based bonus with no cap.',
        'Step 2: Actual Divisional Profit = $60,000 which is greater than zero, so the bonus triggers.',
        'Step 3: Bonus = 10% × $60,000 = $6,000.',
        'Step 4: Even though profit fell $70,000 from the $130,000 budget, Mary still earns a bonus. The system does not penalize underperformance against budget — only a loss would eliminate the bonus entirely.',
      ],
      answer: '$6,000',
      keyTakeaway: '💡 This bonus design rewards any positive result, no matter how far below budget. It creates no incentive to beat the budget and no penalty for missing it — a key weakness to discuss in the system critique.',
    },
    // ===== PART 1.2 =====
    {
      id: 'q9',
      partLabel: 'Part 1.2 — Variable OH Allocation',
      questionTitle: 'Q9: Volume Variance with Per-Contract OH',
      question: 'If corporate OH is allocated at $175 per contract instead of a fixed amount, recompute the Volume Variance.',
      formulaTex: 'V_{vol} = (N_a - N_b) \\times (CM_b - OH_{rate}) = (900 - 1{,}200) \\times (1{,}450 - 175) = -300 \\times 1{,}275 = -382{,}500',
      formulaLegend: 'OH_{rate} = corporate overhead per contract ($175). CM_b is reduced by this per-contract charge because OH now behaves like a variable cost.',
      approach: [
        'Step 1: When overhead is allocated per contract (instead of a fixed lump sum), it becomes part of the contribution margin calculation. Each additional contract now carries a $175 overhead charge.',
        'Step 2: Adjusted budgeted CM per contract = $1,450 − $175 = $1,275.',
        'Step 3: Volume Variance = (900 − 1,200) × $1,275 = −300 × $1,275 = −$382,500.',
        'Step 4: Compare to the original −$435,000 from Q1. The volume variance shrinks by $52,500 because part of the "volume effect" is now captured in a separate OH variance. The total profit gap does not change — only how it is decomposed changes.',
      ],
      answer: '−$382,500 (Unfavorable)',
      keyTakeaway: '💡 Switching from fixed to per-unit overhead allocation does not change total profit — it only redistributes the profit gap across different variance categories. Per-unit allocation makes overhead look variable, which can mask the true fixed nature of these costs.',
    },
    // ===== PART 2.1 =====
    {
      id: 'q10',
      partLabel: 'Part 2.1 — Relevance Analysis',
      questionTitle: 'Q10: Cash Flow Effect of Maintenance Contracts',
      question: 'Compute the effect of the new maintenance contracts on AGL\'s cash flow in 2023.',
      formulaTex: '\\Delta CF = N \\times (P - VC) = 300 \\times (2{,}500 - 1{,}000) = +450{,}000',
      formulaLegend: 'N = number of maintenance contracts (300), P = revenue per contract ($2,500), VC = variable cost per contract ($1,000). No additional fixed costs or corporate overhead.',
      approach: [
        'Step 1: From the company perspective, only cash flows that change with the decision are relevant. Fixed costs and corporate overhead are explicitly stated as unchanged — they are not relevant to this decision.',
        'Step 2: Incremental revenue = 300 × $2,500 = $750,000.',
        'Step 3: Incremental variable costs = 300 × $1,000 = $300,000.',
        'Step 4: Incremental cash flow = $750,000 − $300,000 = +$450,000. The company should accept because this is pure incremental contribution margin with no additional fixed costs.',
      ],
      answer: '+$450,000',
      keyTakeaway: '💡 In relevance analysis, include only costs and revenues that change with the decision. Fixed costs that remain unchanged regardless of the decision are irrelevant — even if the accounting system allocates them to the new contracts.',
    },
    {
      id: 'q11',
      partLabel: 'Part 2.1 — Relevance Analysis',
      questionTitle: 'Q11: Bonus Effect of Maintenance Contracts',
      question: 'Compute the effect of the new maintenance contracts on Mary\'s bonus in 2023.',
      formulaTex: '\\Delta DP = 300 \\times (2{,}500 - 1{,}000) = +450{,}000',
      formulaLegend: 'Since corporate overhead is a fixed allocation (not per contract), the change in divisional profit equals the change in cash flow.',
      approach: [
        'Step 1: Now look at the same decision from the manager\'s perspective. Mary sees Divisional Profit, not cash flow. The question is whether her accounting view matches the company\'s economic view.',
        'Step 2: Because OH is a fixed lump sum (not per-contract), no additional overhead is charged to the new contracts. Therefore, the change in Divisional Profit = change in cash flow = +$450,000.',
        'Step 3: New total Divisional Profit = $60,000 + $450,000 = $510,000.',
        'Step 4: Old bonus = 10% × $60,000 = $6,000. New bonus = 10% × $510,000 = $51,000. Bonus increase = +$45,000.',
        'Step 5: Both the company (+$450,000 cash flow) and the manager (+$45,000 bonus) benefit. Incentives are aligned — there is no goal incongruence under this OH allocation method.',
      ],
      answer: '+$45,000 increase in bonus',
      keyTakeaway: '💡 Goal congruence exists here because fixed overhead allocation does not create a wedge between cash flow and divisional profit. This is the baseline to compare against when the exam introduces per-unit overhead in later parts.',
    },
    // ===== PART 2.2 =====
    {
      id: 'q12',
      partLabel: 'Part 2.2 — Pricing Policy',
      questionTitle: 'Q12: Standard Full Cost Price',
      question: 'Compute the price of a maintenance contract using the standard full cost plus 10% pricing policy.',
      formulaTex: 'P = (VC + FC_{alloc}) \\times 1.10 = (1{,}000 + \\frac{1{,}350 + 210}{900}) \\times 1.10 = (1{,}000 + 1{,}733) \\times 1.10 = 3{,}007',
      formulaLegend: 'VC = variable cost per contract ($1,000), FC_{alloc} = total fixed costs divided by actual contracts from the prior year (2022 actuals: 900 contracts)',
      approach: [
        'Step 1: Full-cost pricing means the price must cover all costs — variable, fixed, and corporate overhead — plus a markup. The danger is that when volume is low, the fixed cost per unit inflates the price.',
        'Step 2: Fixed cost per contract = ($1,350k + $210k) / 900 = $1,733.33.',
        'Step 3: Standard full cost = $1,000 + $1,733.33 = $2,733.33.',
        'Step 4: Price with 10% markup = $2,733.33 × 1.10 = $3,006.67, rounded to $3,007.',
        'Step 5: This price ($3,007) exceeds the market price ($2,500) by $507. If AGL charges $3,007, clients will go to competitors. But the company would benefit from any price above $1,000 (the variable cost). This is the death spiral trap — pricing above market drives away clients, which raises the cost per unit further.',
      ],
      answer: '≈ $3,007 per contract',
      keyTakeaway: '💡 The death spiral: low volume raises cost per unit (because fixed costs are spread over fewer contracts), which raises the price, which drives away more clients, which raises cost per unit further. Full-cost pricing with low utilization is the classic trigger.',
    },
    // ===== PART 2.3 =====
    {
      id: 'q13',
      partLabel: 'Part 2.3 — Idle Capacity Pricing',
      questionTitle: 'Q13: Price Excluding Idle Capacity Cost',
      question: 'Compute the price using the modified policy where idle capacity cost is excluded. Max capacity = 1,500 contracts.',
      formulaTex: 'FC_{used} = FC_{div} \\times \\frac{N_a}{N_{cap}} = 1{,}350 \\times \\frac{900}{1{,}500} = 810',
      formulaLegend: 'N_a = actual contracts (900), N_{cap} = practical capacity (1,500). Only the portion of fixed costs attributable to used capacity is allocated to contracts.',
      approach: [
        'Step 1: The idle capacity exclusion method separates fixed costs into "used" and "idle" portions. Only the used portion is loaded onto products. The idle portion is treated as a period cost — visible on the income statement but not embedded in the price.',
        'Step 2: FC attributable to used capacity = $1,350k × (900 / 1,500) = $810,000.',
        'Step 3: FC per contract = ($810k + $210k OH) / 900 = $1,133.33.',
        'Step 4: Full cost = $1,000 + $1,133.33 = $2,133.33. Price = $2,133.33 × 1.10 = $2,346.67, rounded to $2,347.',
        'Step 5: This price ($2,347) is now below the market price ($2,500), so the contract looks profitable and the company would accept it. By excluding idle capacity cost, the pricing system no longer penalizes low-volume periods.',
      ],
      answer: '≈ $2,347 per contract',
      keyTakeaway: '💡 Idle capacity exclusion breaks the death spiral by ensuring that underutilization does not inflate the price. The cost of unused capacity is reported separately, giving management visibility into capacity waste without distorting pricing decisions.',
    },
    // ===== PART 2.4 =====
    {
      id: 'q14',
      partLabel: 'Part 2.4 — Adjusted Divisional Profit',
      questionTitle: 'Q14: Bonus with Capacity-Adjusted Performance Measure',
      question: 'Using Adjusted Divisional Profit (only capacity-used portion of FC), compute the bonus effect of maintenance contracts.',
      formulaTex: 'ADP = Rev - VC - FC \\times \\frac{N}{N_{cap}} - OH',
      formulaLegend: 'ADP = Adjusted Divisional Profit. Fixed costs are allocated in proportion to capacity utilization (N / N_{cap}), not as a lump sum.',
      approach: [
        'Step 1: Adjusted Divisional Profit allocates fixed costs based on how much of the practical capacity is actually used. This means adding contracts increases the FC charge — unlike the lump-sum method in Q11.',
        'Step 2 (without maintenance): 900 contracts. FC allocated = $1,350k × (900 / 1,500) = $810k. ADP = $3,150k − $1,530k (VC) − $810k − $210k (OH) = $600k.',
        'Step 3 (with maintenance): 1,200 contracts. FC allocated = $1,350k × (1,200 / 1,500) = $1,080k. ADP = $3,900k − $1,830k − $1,080k − $210k = $780k.',
        'Step 4: ADP increase = $780k − $600k = $180k. Bonus increase = 10% × $180k = $18,000.',
        'Step 5: Compare to Q11 where the bonus increase was $45,000. The capacity-adjusted measure gives a lower bonus because adding 300 contracts increases the capacity utilization from 60% to 80%, pulling $270k more of fixed costs into the profit calculation. Mary still benefits, but less enthusiastically.',
      ],
      answer: '+$18,000 increase in bonus',
      keyTakeaway: '💡 The capacity-adjusted measure is a better reflection of economic reality but dampens the manager\'s incentive to add volume. Compare: lump-sum OH gives +$45k bonus, capacity-adjusted gives +$18k. The exam tests whether you can explain this trade-off.',
    },
    // ===== PART 3.1 =====
    {
      id: 'q15',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q15: Compute Transfer Price',
      question: 'Compute the average transfer price for the 100 NE contracts using AGL\'s internal pricing policy (full cost + 10%).',
      formulaTex: 'TP = (VC + \\frac{FC + OH}{N_{total}}) \\times 1.10',
      formulaLegend: 'VC = variable cost of the transferred contract ($840), FC = SE divisional fixed costs ($1,350k), OH = corporate overhead ($210k), N_{total} = SE total contracts including transfers (1,000)',
      approach: [
        'Step 1: AGL uses a full-cost-plus transfer pricing policy. This means the selling division (SE) charges the buying division (NE) for the full cost of providing the service — including variable costs, a share of fixed costs, and corporate overhead — plus a 10% markup.',
        'Step 2: SE total contracts with the transfer = 900 existing + 100 transferred = 1,000. The fixed cost base is spread over all 1,000 contracts.',
        'Step 3: FC per contract = ($1,350k + $210k) / 1,000 = $1,560. VC per transferred contract = $840.',
        'Step 4: Full cost = $840 + $1,560 = $2,400. Transfer price = $2,400 × 1.10 = $2,640.',
        'Step 5: This TP of $2,640 is critical — it will determine whether NE wants to buy internally. Since NE sells to external clients at $2,000, the TP already exceeds the external selling price. This is a red flag for goal congruence.',
      ],
      answer: '$2,640 per contract',
      keyTakeaway: '💡 The full-cost TP ($2,640) loads SE fixed costs and corporate overhead onto each transfer. Since these costs do not change with the transfer decision, including them inflates the price and will likely destroy goal congruence.',
    },
    {
      id: 'q16',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q16: Cash Flow Effect on AGL',
      question: 'Compute the effect on AGL\'s cash flows of accepting the 100 NE contracts.',
      formulaTex: '\\Delta CF_{AGL} = N \\times (P_{ext} - VC) = 100 \\times (2{,}000 - 840) = +116{,}000',
      formulaLegend: 'P_{ext} = external selling price NE charges clients ($2,000), VC = variable cost to provide the service ($840). The transfer price cancels out because it is an internal transaction.',
      approach: [
        'Step 1: At the company level, the transfer price is irrelevant — it is money moving from one pocket (NE) to another pocket (SE) within the same company. Only cash flows with the outside world matter.',
        'Step 2: External revenue = 100 contracts × $2,000 = $200,000 (NE collects from clients).',
        'Step 3: Incremental variable cost = 100 × $840 = $84,000 (SE incurs the production cost). Fixed costs and corporate overhead do not change.',
        'Step 4: Company cash flow = $200,000 − $84,000 = +$116,000. This is clearly positive, so the company wants this trade to happen.',
      ],
      answer: '+$116,000',
      keyTakeaway: '💡 Always start transfer pricing analysis with the company view. If the company-level cash flow is positive, the trade creates value. Then check whether the transfer price motivates both divisions to participate — that is the goal congruence test.',
    },
    {
      id: 'q17',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q17: NE Divisional Profit Effect',
      question: 'Compute the effect on NE division\'s Divisional Profit.',
      formulaTex: '\\Delta DP_{NE} = N \\times (P_{ext} - TP) = 100 \\times (2{,}000 - 2{,}640) = -64{,}000',
      formulaLegend: 'NE earns the external price from clients ($2,000) but pays the transfer price to SE ($2,640). The difference is NE\'s margin per contract.',
      approach: [
        'Step 1: NE is the buying division. NE buys the service from SE at the transfer price and resells it to external clients. NE\'s profit on each transferred contract is the external price minus the transfer price.',
        'Step 2: NE revenue = 100 × $2,000 = $200,000.',
        'Step 3: NE cost (transfer price paid to SE) = 100 × $2,640 = $264,000.',
        'Step 4: NE divisional profit change = $200,000 − $264,000 = −$64,000.',
        'Step 5: NE loses $640 per contract. Since the NE manager\'s bonus depends on divisional profit, the manager will reject the transfer. This is goal incongruence — the company gains $116,000 in cash flow, but NE blocks the deal because its accounting profit suffers.',
      ],
      answer: '−$64,000 (NE rejects)',
      keyTakeaway: '💡 NE rejects because the TP ($2,640) exceeds the external selling price ($2,000). The NE manager cannot make money buying at $2,640 and selling at $2,000. This is the clearest sign of goal incongruence — a value-creating trade that gets blocked by the accounting system.',
    },
    {
      id: 'q18',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q18: SE Divisional Profit Effect',
      question: 'Compute the effect on SE division\'s Divisional Profit.',
      formulaTex: '\\Delta DP_{SE} = N \\times (TP - VC) = 100 \\times (2{,}640 - 840) = +180{,}000',
      formulaLegend: 'SE earns the transfer price ($2,640) and incurs only the variable cost ($840). Fixed costs are unchanged because SE has spare capacity.',
      approach: [
        'Step 1: SE is the selling division. SE receives the transfer price from NE and incurs the variable cost of providing the service. Since SE has spare capacity, there are no additional fixed costs.',
        'Step 2: Transfer revenue = 100 × $2,640 = $264,000.',
        'Step 3: Variable cost = 100 × $840 = $84,000.',
        'Step 4: SE divisional profit change = $264,000 − $84,000 = +$180,000.',
        'Step 5: SE loves this deal because the TP ($2,640) is far above the variable cost ($840). The $1,800 margin per contract includes $1,560 of fixed cost recovery that SE would not otherwise earn. But SE\'s enthusiasm does not matter — NE is the one blocking the deal.',
      ],
      answer: '+$180,000 (SE accepts)',
      keyTakeaway: '💡 The asymmetry is the exam point: SE gains $180,000 while NE loses $64,000. The company gains $116,000 net. But the deal fails because NE has the power to reject. The system rewards SE for overcharging and punishes NE for accepting an overpriced transfer.',
    },
    {
      id: 'q19',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q19: Goal Congruence TP Range',
      question: 'What transfer price range achieves goal congruence?',
      formulaTex: 'TP_{min} = VC_{SE} + \\text{opportunity cost} = 840 + 0 = 840 \\quad TP_{max} = P_{ext} = 2{,}000',
      formulaLegend: 'TP_{min} = seller floor (SE variable cost + opportunity cost of spare capacity, which is zero). TP_{max} = buyer ceiling (NE external selling price, above which NE loses money).',
      approach: [
        'Step 1: The goal-congruent TP range is where both divisions voluntarily agree to trade. It has two boundaries:',
        'Step 2 — Seller floor: SE will accept any TP above its incremental cost. With spare capacity, SE has no opportunity cost (no contracts are displaced). SE minimum = $840 (variable cost only).',
        'Step 3 — Buyer ceiling: NE will only buy internally if the TP is at or below what NE would pay for an equivalent external service. NE maximum = $2,000 (the external client price, which is NE\'s revenue per contract).',
        'Step 4: Goal-congruent range = $840 ≤ TP ≤ $2,000. Any TP in this range makes both divisions better off than not trading.',
        'Step 5: The current TP of $2,640 is $640 above the buyer ceiling. The deal fails. To fix this, AGL could set TP = variable cost + a negotiated split of the $1,160 per-contract surplus, or simply mandate a TP within the range.',
      ],
      answer: '$840 ≤ TP ≤ $2,000. Current TP ($2,640) is outside the range — goal incongruence.',
      keyTakeaway: '💡 The goal-congruent range formula: Seller floor = VC + opportunity cost. Buyer ceiling = external alternative price. If the policy TP falls outside this range, value-creating trades get blocked. Always check spare capacity — when the seller is at full capacity, the opportunity cost is positive and the floor rises.',
    },
    // ===== PART 3.2 =====
    {
      id: 'q20',
      partLabel: 'Part 3.2 — Hire vs Transfer',
      questionTitle: 'Q20: AGL Cash Flow — Alt 1 vs Alt 2',
      question: 'NE can hire 4 gardeners at $25,000 each instead of using SE. Compute the cash flow effect on AGL under each alternative and determine which is better for the company.',
      formulaTex: 'CF_{Alt1} = 100 \\times (2{,}000 - 840) = +116{,}000 \\quad CF_{Alt2} = 100 \\times (2{,}000 - 840) - 4 \\times 25{,}000 = +16{,}000',
      formulaLegend: 'Alt 1: SE transfers the contracts (VC = $840/contract, SE has spare capacity). Alt 2: NE hires 4 gardeners at $25,000 each and fulfills the contracts at the same VC of $840/contract.',
      approach: [
        'Step 1: Compute each alternative\'s cash flow for the company separately. The transfer price is irrelevant at the company level because it is an internal transaction — money moving between divisions.',
        'Step 2 — Alt 1 (SE transfers to NE): Revenue = 100 × $2,000 = $200,000. VC = 100 × $840 = $84,000. No additional fixed costs (SE has spare capacity). Company cash flow = $200,000 − $84,000 = +$116,000.',
        'Step 3 — Alt 2 (NE hires gardeners): Revenue = 100 × $2,000 = $200,000. VC = 100 × $840 = $84,000. Additional hiring = 4 × $25,000 = $100,000. Company cash flow = $200,000 − $84,000 − $100,000 = +$16,000.',
        'Step 4 — Comparison: Alt 1 generates $116,000 versus Alt 2 at $16,000. Alt 1 is better by $100,000. The $100,000 difference is entirely the hiring cost that Alt 2 incurs but Alt 1 avoids.',
      ],
      answer: 'Alt 1: +$116,000 | Alt 2: +$16,000 | Alt 1 saves AGL $100,000',
      keyTakeaway: '💡 The company clearly prefers Alt 1 because SE already has the spare capacity to do the work. Alt 2 wastes $100,000 on hiring gardeners that SE does not need. The question is whether the transfer pricing system motivates NE to choose the company-preferred option.',
    },
    {
      id: 'q21',
      partLabel: 'Part 3.2 — Hire vs Transfer',
      questionTitle: 'Q21: NE Divisional Profit — Alt 1 vs Alt 2',
      question: 'Compare NE\'s Divisional Profit under both alternatives.',
      formulaTex: 'Alt\\ 1: \\Delta DP_{NE} = -64{,}000 \\quad Alt\\ 2: \\Delta DP_{NE} = +16{,}000',
      formulaLegend: 'Alt 1: NE buys from SE at TP $2,640. Alt 2: NE hires gardeners for $100k and performs the work at VC $840.',
      approach: [
        'Step 1: Alt 1 (internal transfer): NE pays $2,640 per contract to SE. NE divisional profit change = 100 × ($2,000 − $2,640) = −$64,000. NE loses money.',
        'Step 2: Alt 2 (hire gardeners): NE incurs VC $840/contract plus $100,000 hiring cost. NE divisional profit change = 100 × ($2,000 − $840) − $100,000 = $116,000 − $100,000 = +$16,000. NE makes money.',
        'Step 3: NE prefers Alt 2 by $80,000 ($16,000 versus −$64,000).',
        'Step 4: This is goal incongruence: the company prefers Alt 1 (saves $100,000) but NE chooses Alt 2 (earns $16,000 versus losing $64,000). The inflated TP drives NE to duplicate resources that SE already has.',
      ],
      answer: 'NE prefers Alt 2 (hiring) by $80,000',
      keyTakeaway: '💡 This is the strongest proof of goal incongruence in the case. NE chooses to waste $100,000 of company resources (by hiring new gardeners) because the accounting system makes internal trade look unprofitable. The root cause is the full-cost TP that loads fixed costs onto the transfer.',
    },
    {
      id: 'q22',
      partLabel: 'Part 3.2 — Hire vs Transfer',
      questionTitle: 'Q22: SE Divisional Profit — Alt 1 vs Alt 2',
      question: 'Compare SE\'s Divisional Profit under both alternatives.',
      approach: [
        'Step 1: Alt 1 (internal transfer): SE earns $180,000 (from Q18) by selling 100 contracts at TP $2,640 with VC $840.',
        'Step 2: Alt 2 (NE hires): SE does nothing — no transfer revenue, no additional cost. SE divisional profit change = $0.',
        'Step 3: SE prefers Alt 1 by $180,000. But SE cannot force NE to buy.',
        'Step 4: Summary of the conflict — Company: Alt 1 by $100,000. SE: Alt 1 by $180,000. NE: Alt 2 by $80,000. Because NE has the decision power (NE is the buyer), the company-preferred outcome does not happen.',
      ],
      answer: 'SE prefers Alt 1 (transfer) by $180,000',
      keyTakeaway: '💡 The conflict map: Company and SE both want Alt 1, but NE blocks it. This three-way comparison (company, seller, buyer) is the standard exam structure for demonstrating transfer pricing dysfunction.',
    },
    // ===== PART 4.1 =====
    {
      id: 'q23',
      partLabel: 'Part 4.1 — Investment Analysis',
      questionTitle: 'Q23: Cash Flow Effect of Equipment Investment',
      question: 'Compute the CF effect of the $420,000 equipment investment for 2022-2025. Equipment lasts 3 years. 50 large contracts/year at $9,000 price and $5,000 VC. 2 new gardeners at $25,000 each.',
      formulaTex: '\\Delta CF_t = N \\times (P - VC) - Hire = 50 \\times (9{,}000 - 5{,}000) - 50{,}000 = 150{,}000',
      formulaLegend: 'N = new contracts per year (50), P = revenue per contract ($9,000), VC = variable cost per contract ($5,000), Hire = annual gardener cost (2 × $25,000 = $50,000)',
      approach: [
        'Step 1: Investment analysis always starts with cash flows, not accounting profit. Cash flows include only money that actually enters or leaves the company. Depreciation is not a cash flow — it is an accounting allocation.',
        'Step 2 (Year 0 — 2022): Equipment purchase = −$420,000. This is the only cash outflow in Year 0.',
        'Step 3 (Years 1-3 — 2023-2025): Incremental revenue = 50 × $9,000 = $450,000 per year.',
        'Step 4: Incremental variable costs = 50 × $5,000 = $250,000 per year.',
        'Step 5: Additional gardener salaries = 2 × $25,000 = $50,000 per year.',
        'Step 6: Annual cash flow = $450,000 − $250,000 − $50,000 = +$150,000 per year.',
        'Step 7: Total cash flow over 4 years = −$420,000 + (3 × $150,000) = +$30,000. The investment is cash-positive overall, but the margin is thin.',
      ],
      answer: '2022: −$420,000 | 2023-2025: +$150,000/year | Total: +$30,000',
      keyTakeaway: '💡 Cash flow analysis ignores depreciation because depreciation is not cash — it is an accounting estimate. The $150,000 annual cash flow is the true economic return. The investment pays back in 2.8 years and generates a thin $30,000 surplus.',
    },
    {
      id: 'q24',
      partLabel: 'Part 4.1 — Investment Analysis',
      questionTitle: 'Q24: Divisional Profit Effect',
      question: 'Compute the effect on SE Divisional Profit for 2023-2025.',
      formulaTex: '\\Delta DP = \\Delta CF_{annual} - Depr = 150{,}000 - 140{,}000 = 10{,}000',
      formulaLegend: 'Depr = straight-line depreciation ($420,000 / 3 years = $140,000 per year). Divisional profit subtracts depreciation from cash flow because accounting spreads the asset cost over its useful life.',
      approach: [
        'Step 1: Divisional profit differs from cash flow because it includes depreciation — an accounting charge that allocates the equipment cost over its useful life.',
        'Step 2: Annual depreciation = $420,000 / 3 = $140,000 per year.',
        'Step 3: Change in Divisional Profit = Cash flow − Depreciation = $150,000 − $140,000 = +$10,000 per year.',
        'Step 4: This is the same every year because both cash flow and depreciation are constant under straight-line. The investment adds only $10,000 to accounting profit despite generating $150,000 in cash.',
        'Step 5: Notice the gap: the company gains $150,000 in annual cash but the manager\'s performance report shows only $10,000. This matters for the bonus calculation in the next question.',
      ],
      answer: '+$10,000/year for 2023, 2024, and 2025',
      keyTakeaway: '💡 Depreciation absorbs $140,000 of the $150,000 cash flow, leaving only $10,000 on the income statement. This is why accounting profit can severely understate the economic return on capital-intensive investments.',
    },
    // ===== PART 4.2 =====
    {
      id: 'q25',
      partLabel: 'Part 4.2 — Residual Income',
      questionTitle: 'Q25: Residual Income Effect',
      question: 'Compute the effect on RI for 2023-2025. RI = Divisional Profit − 0.10 × Book Value (beginning of year).',
      formulaTex: 'RI_t = \\Delta DP - r \\times BV_t',
      formulaLegend: 'RI = Residual Income, \\Delta DP = annual change in divisional profit ($10,000), r = cost of capital (10%), BV_t = book value of the equipment at the beginning of year t',
      approach: [
        'Step 1: Residual Income goes beyond divisional profit by subtracting a capital charge — the minimum return that investors expect on the assets tied up in the division. If RI is positive, the division is creating value above the cost of capital.',
        'Step 2: The capital charge = cost of capital (10%) × book value at the beginning of the year. As the equipment depreciates, the book value falls, so the capital charge shrinks each year.',
        'Step 3 (2023): Book value = $420,000. Capital charge = 10% × $420,000 = $42,000. RI = $10,000 − $42,000 = −$32,000.',
        'Step 4 (2024): Book value = $420,000 − $140,000 = $280,000. Capital charge = 10% × $280,000 = $28,000. RI = $10,000 − $28,000 = −$18,000.',
        'Step 5 (2025): Book value = $280,000 − $140,000 = $140,000. Capital charge = 10% × $140,000 = $14,000. RI = $10,000 − $14,000 = −$4,000.',
        'Step 6: RI improves each year (−$32k → −$18k → −$4k) but remains negative throughout. The improvement is purely mechanical — the asset depreciates, so the charge shrinks, but the underlying economics ($10,000 profit) never change.',
      ],
      answer: '2023: −$32,000 | 2024: −$18,000 | 2025: −$4,000',
      keyTakeaway: '💡 The mechanical improvement in RI (getting less negative each year) is a key exam trap. It does not reflect better performance — it reflects lower book value. A manager who understands this can game the system by delaying investments to minimize the early-year capital charge.',
    },
    {
      id: 'q26',
      partLabel: 'Part 4.2 — Residual Income',
      questionTitle: 'Q26: Bonus Under RI-Based Compensation',
      question: 'Compute the bonus effect for 2023-2025. Bonus = 10% of RI increase vs prior year (zero if RI decreases).',
      formulaTex: 'Bonus_t = \\max(0,\\ 10\\% \\times (RI_t - RI_{t-1}))',
      formulaLegend: 'The bonus rewards improvements in RI, not the level of RI. If RI worsens year-over-year, the bonus is zero.',
      approach: [
        'Step 1: The baseline RI before the investment is $0 (no equipment, no capital charge). The bonus triggers only when RI improves versus the prior year.',
        'Step 2 (2023): RI = −$32,000. Change versus baseline ($0) = −$32,000. RI worsened, so bonus = $0.',
        'Step 3 (2024): RI = −$18,000. Change versus 2023 (−$32,000) = +$14,000. RI improved, so bonus = 10% × $14,000 = $1,400.',
        'Step 4 (2025): RI = −$4,000. Change versus 2024 (−$18,000) = +$14,000. RI improved, so bonus = 10% × $14,000 = $1,400.',
        'Step 5: Total bonus over 3 years = $0 + $1,400 + $1,400 = $2,800. Mary earns no bonus in Year 1 (which discourages the investment) but earns bonuses in Years 2-3 for mechanical improvement (which is not real performance). The system penalizes the decision when it is made and rewards waiting.',
      ],
      answer: '2023: $0 | 2024: $1,400 | 2025: $1,400 | Total: $2,800',
      keyTakeaway: '💡 The zero bonus in Year 1 is the distortion: it punishes Mary for making a value-creating investment ($30,000 total cash flow). A rational manager might delay or reject the investment to protect her short-term bonus. This is goal incongruence between the manager and shareholders.',
    },
    // ===== PART 5 =====
    {
      id: 'q27',
      partLabel: 'Part 5 — System Critique',
      questionTitle: 'System Critique',
      question: 'Analyze AGL\'s variance analysis, pricing policy, transfer pricing, performance measure, and incentives. For each dimension, identify the problem, explain the behavioral distortion it creates, and propose a concrete improvement.',
      formulaTex: '\\text{Problem} \\to \\text{Behavioral Distortion} \\to \\text{Recommended Fix}',
      formulaLegend: 'For each of the five dimensions, follow this three-step structure: name the accounting or measurement issue, explain how it changes manager behavior, then propose a specific alternative design.',
      approach: [
        'Step 1 — Variance Analysis: Problem: The budget was highly optimistic (1,200 contracts budgeted versus 900 actual), making almost every variance appear unfavorable. The favorable materials variances (efficiency +$225k, input price +$270k) could reflect genuine savings or quality cuts — the current system does not distinguish. Distortion: Mary cannot tell whether she underperformed or whether the budget was unrealistic. Fix: Use a rolling forecast or prior-year actual as the budget base, and add non-financial quality metrics alongside financial variances.',
        'Step 2 — Cost Allocation and Pricing: Problem: Full-cost pricing allocates all fixed costs and corporate overhead to contracts based on actual volume. At 900 contracts, the full-cost price ($3,007) exceeds the market price ($2,500). Distortion: Clients receive uncompetitive quotes, volume drops further, cost per unit rises — the death spiral. Fix: Exclude idle capacity from the cost base (as shown in Q13, which drops the price to $2,347) or use market-based pricing with cost as a floor check.',
        'Step 3 — Transfer Pricing: Problem: The full-cost TP ($2,640) exceeds the NE external selling price ($2,000). Goal-congruent range is $840 to $2,000, but the policy TP is $640 above the ceiling. Distortion: NE rejects a transfer that creates $116,000 in company cash flow, and instead hires gardeners at $100,000 additional cost (Q20-Q21). Fix: Set TP = variable cost plus a negotiated share of the surplus, or use the external market price as the TP ceiling.',
        'Step 4 — Performance Measurement: Problem: RI charges 10% of book value, which exceeds the $10,000 annual divisional profit in every year. RI is negative throughout (−$32k, −$18k, −$4k). Distortion: Mary is discouraged from investing $420,000 in equipment that generates $30,000 in total cash flow because her performance metric shows negative results. Fix: Use annuity depreciation (which produces constant RI across years) or evaluate investments separately from ongoing operations.',
        'Step 5 — Incentive Design: Problem: The bonus (10% of DP if positive) has no cap, no target, and no adjustment for budget difficulty. Under the RI bonus, Year 1 pays $0 and Years 2-3 pay $1,400 each — the improvement is mechanical (book value declines), not operational. Distortion: The DP bonus rewards any positive result without distinguishing strong versus weak performance. The RI bonus punishes new investments in Year 1 and rewards doing nothing in later years. Fix: Base the bonus on controllable cash flows or multi-year cumulative RI. Introduce a budget-based target with a bonus zone rather than a simple threshold.',
      ],
      answer: '(1) Variance system: unrealistic budget base; add quality metrics. (2) Pricing: full-cost-plus creates death spiral; exclude idle capacity. (3) Transfer pricing: full-cost TP ($2,640) destroys congruence; use market-based or negotiated TP. (4) RI: negative every year despite positive cash flows; use annuity depreciation. (5) Incentives: no target, mechanical RI improvement; base on controllable cash flow.',
      keyTakeaway: '💡 The five dimensions are interconnected. The full-cost allocation base is the root cause: it inflates external prices (death spiral), inflates transfer prices (goal incongruence), and distorts performance measurement (RI rejects positive-NPV investments). On the exam, always show these connections — do not analyze each dimension in isolation.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis: volume, price, efficiency, input price, FC, and OH variances',
      'Relevance: CF vs divisional profit, capacity-adjusted performance measures',
      'Pricing: full-cost plus markup, death spiral risk, idle capacity exclusion',
      'Transfer pricing: full-cost TP failure, goal congruence range, hire-vs-transfer analysis',
      'RI: capital charge, depreciation effect on bonuses, investment incentive distortions',
      'System critique across all five dimensions',
    ],
    keyTheme: 'AGL illustrates how a full-cost allocation base cascades through the entire control system: it inflates external prices, destroys transfer pricing congruence, and distorts investment incentives under RI.',
  },
}
