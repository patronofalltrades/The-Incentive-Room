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
      formulaLegend: 'N_a = actual contracts (900), N_b = budget contracts (1,200), CM_b = budgeted CM/contract ($1,450 = 3,600 − 1,750 − 400)',
      approach: [
        'Budgeted CM per contract = Revenue $3,600 − Materials (70 × $25 = $1,750) − Other VC $400 = $1,450.',
        'Volume Variance = (900 − 1,200) × 1,450 = −$435,000.',
      ],
      answer: '−$435,000 (Unfavorable)',
      keyTakeaway: 'The 300-contract shortfall is the single largest driver of the profit decline.',
    },
    {
      id: 'q2',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q2: Price Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Average price per contract.',
      formulaTex: 'V_{price} = (P_a - P_b) \\times N_a = (3{,}500 - 3{,}600) \\times 900 = -90{,}000',
      formulaLegend: 'P_a = actual price ($3,500), P_b = budget price ($3,600), N_a = actual contracts (900)',
      approach: [
        'Price variance = (3,500 − 3,600) × 900 = −100 × 900 = −$90,000.',
      ],
      answer: '−$90,000 (Unfavorable)',
      keyTakeaway: '$100 lower price per contract across 900 contracts.',
    },
    {
      id: 'q3',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q3: Plant Efficiency Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Average number of plants per contract.',
      formulaTex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a = -(60 - 70) \\times 25 \\times 900 = +225{,}000',
      formulaLegend: 'Q_a = actual plants/contract (60), Q_b = budget plants/contract (70), C_b = budget cost per plant ($25)',
      approach: [
        'Fewer plants used per contract: (70 − 60) × 25 × 900 = 10 × 25 × 900 = +$225,000.',
      ],
      answer: '+$225,000 (Favorable)',
      keyTakeaway: 'Using 10 fewer plants per contract saved materials cost, valued at budget price.',
    },
    {
      id: 'q4',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q4: Input Price Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Average cost per plant.',
      formulaTex: 'V_{input} = -(C_a - C_b) \\times Q_a \\times N_a = -(20 - 25) \\times 60 \\times 900 = +270{,}000',
      formulaLegend: 'C_a = actual cost per plant ($20), C_b = budget cost per plant ($25), Q_a = actual plants/contract (60)',
      approach: [
        'Lower plant cost: (25 − 20) × 60 × 900 = 5 × 54,000 = +$270,000.',
      ],
      answer: '+$270,000 (Favorable)',
      keyTakeaway: 'Plants cost $5 less than budgeted, a significant favorable input price effect.',
    },
    {
      id: 'q5',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q5: Other Variable Cost Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Other variable costs per contract.',
      formulaTex: 'V_{ovc} = -(OVC_a - OVC_b) \\times N_a = -(500 - 400) \\times 900 = -90{,}000',
      formulaLegend: 'OVC_a = actual other VC/contract ($500), OVC_b = budget ($400)',
      approach: [
        'Other VC per contract rose by $100: −(500 − 400) × 900 = −$90,000.',
      ],
      answer: '−$90,000 (Unfavorable)',
      keyTakeaway: 'Transportation and ancillary materials were $100 more per contract than planned.',
    },
    {
      id: 'q6',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q6: Fixed Cost Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Divisional fixed costs.',
      formulaTex: 'V_{FC} = FC_b - FC_a = 1{,}400 - 1{,}350 = +50',
      formulaLegend: 'FC_b = budget fixed costs ($000), FC_a = actual fixed costs ($000)',
      approach: [
        'Fixed costs came in $50,000 under budget: 1,400 − 1,350 = +$50,000.',
      ],
      answer: '+$50,000 (Favorable)',
      keyTakeaway: 'Fixed costs are not flexed with volume — this is a direct comparison.',
    },
    {
      id: 'q7',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q7: Corporate Overhead Variance',
      question: 'Compute the difference in Divisional Profit due to the change in Corporate overhead.',
      formulaTex: 'V_{OH} = OH_b - OH_a = 210 - 210 = 0',
      formulaLegend: 'Corporate OH is a fixed allocation, unchanged',
      approach: [
        'Corporate OH is fixed at $210,000 regardless of volume. No variance.',
      ],
      answer: '$0 (No variance)',
      keyTakeaway: 'Fixed corporate OH allocation does not create a variance here — but this changes in Part 1.2.',
    },
    {
      id: 'q8',
      partLabel: 'Part 1.1 — Variance Analysis',
      questionTitle: 'Q8: Bonus Computation',
      question: 'Compute Mary\'s bonus payment in 2022.',
      formulaTex: 'Bonus = 10\\% \\times DP = 10\\% \\times 60{,}000 = 6{,}000',
      formulaLegend: 'DP = Divisional Profit (actual). Bonus paid if DP > 0.',
      approach: [
        'Actual Divisional Profit = $60,000 > 0.',
        'Bonus = 10% × 60,000 = $6,000.',
      ],
      answer: '$6,000',
      keyTakeaway: 'Despite a $70,000 decline from budget, Mary still earns a bonus because DP > 0.',
    },
    // ===== PART 1.2 =====
    {
      id: 'q9',
      partLabel: 'Part 1.2 — Variable OH Allocation',
      questionTitle: 'Q9: Volume Variance with Per-Contract OH',
      question: 'If corporate OH is allocated at $175 per contract instead of a fixed amount, recompute the Volume Variance.',
      formulaTex: 'V_{vol} = (N_a - N_b) \\times (CM_b - OH_{rate}) = (900 - 1{,}200) \\times (1{,}450 - 175) = -300 \\times 1{,}275 = -382{,}500',
      formulaLegend: 'OH_rate = $175/contract. CM_b now reduced by the per-contract OH charge.',
      approach: [
        'With per-contract OH, the budgeted CM per contract drops: 1,450 − 175 = $1,275.',
        'Volume Variance = (900 − 1,200) × 1,275 = −$382,500.',
      ],
      answer: '−$382,500 (Unfavorable)',
      keyTakeaway: 'Per-contract OH allocation makes overhead behave like a variable cost, shrinking the volume variance but creating distortions elsewhere.',
    },
    // ===== PART 2.1 =====
    {
      id: 'q10',
      partLabel: 'Part 2.1 — Relevance Analysis',
      questionTitle: 'Q10: Cash Flow Effect of Maintenance Contracts',
      question: 'Compute the effect of the new maintenance contracts on AGL\'s cash flow in 2023.',
      formulaTex: '\\Delta CF = N \\times (P - VC) = 300 \\times (2{,}500 - 1{,}000) = +450{,}000',
      formulaLegend: 'N = 300 contracts, P = $2,500, VC = $1,000. No incremental FC or OH.',
      approach: [
        'Incremental revenue = 300 × 2,500 = $750,000.',
        'Incremental variable costs = 300 × 1,000 = $300,000.',
        'Incremental cash flow = 750,000 − 300,000 = +$450,000.',
      ],
      answer: '+$450,000',
      keyTakeaway: 'No additional fixed costs or OH — pure incremental contribution margin.',
    },
    {
      id: 'q11',
      partLabel: 'Part 2.1 — Relevance Analysis',
      questionTitle: 'Q11: Bonus Effect of Maintenance Contracts',
      question: 'Compute the effect of the new maintenance contracts on Mary\'s bonus in 2023.',
      formulaTex: '\\Delta DP = 300 \\times (2{,}500 - 1{,}000) = +450{,}000',
      formulaLegend: 'Since OH is fixed (not per-contract), ΔDP = ΔCF here.',
      approach: [
        'No incremental FC or OH, so ΔDP = ΔCF = +$450,000.',
        'New DP = $60,000 + $450,000 = $510,000.',
        'Old bonus = 10% × $60,000 = $6,000.',
        'New bonus = 10% × $510,000 = $51,000.',
        'Bonus increase = $51,000 − $6,000 = +$45,000.',
      ],
      answer: '+$45,000 increase in bonus',
      keyTakeaway: 'With fixed OH allocation, the company and manager incentives are aligned — no goal incongruence.',
    },
    // ===== PART 2.2 =====
    {
      id: 'q12',
      partLabel: 'Part 2.2 — Pricing Policy',
      questionTitle: 'Q12: Standard Full Cost Price',
      question: 'Compute the price of a maintenance contract using the standard full cost plus 10% pricing policy.',
      formulaTex: 'P = (VC + FC_{alloc}) \\times 1.10 = (1{,}000 + \\frac{1{,}350 + 210}{900}) \\times 1.10 = (1{,}000 + 1{,}733) \\times 1.10 = 3{,}007',
      formulaLegend: 'FC_alloc = total fixed costs / actual contracts from prior year (2022 actuals).',
      approach: [
        'Fixed cost per contract = (1,350 + 210) / 900 = $1,733.33.',
        'Standard full cost = 1,000 + 1,733.33 = $2,733.33.',
        'Price = 2,733.33 × 1.10 = $3,006.67 ≈ $3,007.',
      ],
      answer: '≈ $3,007 per contract',
      keyTakeaway: 'The full-cost price ($3,007) exceeds the market-based price ($2,500). The FC allocation makes maintenance contracts look expensive.',
    },
    // ===== PART 2.3 =====
    {
      id: 'q13',
      partLabel: 'Part 2.3 — Idle Capacity Pricing',
      questionTitle: 'Q13: Price Excluding Idle Capacity Cost',
      question: 'Compute the price using the modified policy where idle capacity cost is excluded. Max capacity = 1,500 contracts.',
      formulaTex: 'FC_{used} = FC_{div} \\times \\frac{N_a}{N_{cap}} = 1{,}350 \\times \\frac{900}{1{,}500} = 810',
      formulaLegend: 'N_a = 900 actual, N_cap = 1,500 capacity. Only the used portion of FC is allocated.',
      approach: [
        'FC allocated = 1,350 × (900/1,500) = $810,000.',
        'FC per contract = (810 + 210) / 900 = $1,133.33.',
        'Full cost = 1,000 + 1,133.33 = $2,133.33.',
        'Price = 2,133.33 × 1.10 = $2,346.67 ≈ $2,347.',
      ],
      answer: '≈ $2,347 per contract',
      keyTakeaway: 'Excluding idle capacity lowers the price closer to market ($2,500), reducing death spiral risk.',
    },
    // ===== PART 2.4 =====
    {
      id: 'q14',
      partLabel: 'Part 2.4 — Adjusted Divisional Profit',
      questionTitle: 'Q14: Bonus with Capacity-Adjusted Performance Measure',
      question: 'Using Adjusted Divisional Profit (only capacity-used portion of FC), compute the bonus effect of maintenance contracts.',
      formulaTex: 'ADP = Rev - VC - FC \\times \\frac{N}{N_{cap}} - OH',
      formulaLegend: 'ADP = Adjusted Divisional Profit. FC is allocated based on capacity utilization.',
      approach: [
        'Without maintenance: 900 contracts. FC allocated = $1,350k × (900 / 1,500) = $810k.',
        'Without maintenance, Adjusted Divisional Profit (ADP) = Revenue $3,150k − VC ($1,080k + $450k) − FC $810k − OH $210k = $600k.',
        'With maintenance: 900 + 300 = 1,200 contracts. FC allocated = $1,350k × (1,200 / 1,500) = $1,080k.',
        'With maintenance, ADP = Revenue $3,900k − VC $1,830k − FC $1,080k − OH $210k = $780k.',
        'Bonus increase = 10% × ($780k − $600k) = 10% × $180k = $18,000.',
      ],
      answer: '+$18,000 increase in bonus',
      keyTakeaway: 'The capacity-adjusted measure reduces the bonus uplift vs Q11 ($45k) because adding contracts increases the FC allocation share.',
    },
    // ===== PART 3.1 =====
    {
      id: 'q15',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q15: Compute Transfer Price',
      question: 'Compute the average transfer price for the 100 NE contracts using AGL\'s internal pricing policy (full cost + 10%).',
      formulaTex: 'TP = (VC + \\frac{FC + OH}{N_{total}}) \\times 1.10',
      formulaLegend: 'N_total includes the 100 transferred contracts. FC and OH from SE division.',
      approach: [
        'SE total contracts with transfer = 900 + 100 = 1,000.',
        'FC per contract = (1,350 + 210) / 1,000 = $1,560.',
        'VC of transferred contracts = $840 (given in Table 3).',
        'Full cost = 840 + 1,560 = $2,400.',
        'TP = 2,400 × 1.10 = $2,640.',
      ],
      answer: '$2,640 per contract',
      keyTakeaway: 'The TP includes SE divisional FC and corporate OH spread over 1,000 contracts.',
    },
    {
      id: 'q16',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q16: Cash Flow Effect on AGL',
      question: 'Compute the effect on AGL\'s cash flows of accepting the 100 NE contracts.',
      formulaTex: '\\Delta CF_{AGL} = N \\times (P_{ext} - VC) = 100 \\times (2{,}000 - 840) = +116{,}000',
      formulaLegend: 'Internal transfer cancels out at company level. Only external revenue minus VC matters.',
      approach: [
        'External revenue from NE clients = 100 × 2,000 = $200,000.',
        'Variable cost (same regardless of who executes) = 100 × 840 = $84,000.',
        'ΔCF = 200,000 − 84,000 = +$116,000.',
      ],
      answer: '+$116,000',
      keyTakeaway: 'Internal transfers cancel at the company level — only external cash flows matter.',
    },
    {
      id: 'q17',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q17: NE Divisional Profit Effect',
      question: 'Compute the effect on NE division\'s Divisional Profit.',
      formulaTex: '\\Delta DP_{NE} = N \\times (P_{ext} - TP - OH_{NE}) = 100 \\times (2{,}000 - 2{,}640) = -64{,}000',
      formulaLegend: 'NE pays the transfer price but earns the external price.',
      approach: [
        'NE revenue = 100 × 2,000 = $200,000.',
        'NE cost = 100 × 2,640 (TP) = $264,000.',
        'Δ NE divisional profit = 200,000 − 264,000 = −$64,000.',
      ],
      answer: '−$64,000 (NE rejects)',
      keyTakeaway: 'The TP ($2,640) exceeds the external price ($2,000), so NE loses money on every contract. NE will reject.',
    },
    {
      id: 'q18',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q18: SE Divisional Profit Effect',
      question: 'Compute the effect on SE division\'s Divisional Profit.',
      formulaTex: '\\Delta DP_{SE} = N \\times TP - N \\times VC - \\Delta FC_{alloc}',
      formulaLegend: 'SE earns the TP, incurs VC, and FC allocation changes with volume.',
      approach: [
        'Transfer revenue = 100 × $2,640 = $264,000.',
        'Variable cost = 100 × $840 = $84,000.',
        'FC is fixed — no incremental fixed cost from the transfer.',
        'Net Δ SE divisional profit = $264,000 − $84,000 = +$180,000.',
      ],
      answer: '+$180,000 (SE accepts)',
      keyTakeaway: 'SE loves this deal — the TP far exceeds their variable cost, and FC is fixed.',
    },
    {
      id: 'q19',
      partLabel: 'Part 3.1 — Transfer Pricing',
      questionTitle: 'Q19: Goal Congruence TP Range',
      question: 'What transfer price range achieves goal congruence?',
      formulaTex: 'TP_{min} = VC_{SE} = 840 \\quad TP_{max} = P_{ext} = 2{,}000',
      formulaLegend: 'SE has spare capacity (opp. cost = 0). NE needs TP ≤ external price.',
      approach: [
        'SE minimum: VC = $840 (spare capacity, no opportunity cost).',
        'NE maximum: External price = $2,000 (NE won\'t pay more than the client pays).',
        'Range: $840 ≤ TP ≤ $2,000.',
        'Current TP of $2,640 is ABOVE the range — no congruence.',
      ],
      answer: '$840 ≤ TP ≤ $2,000. Current TP ($2,640) fails.',
      keyTakeaway: 'Full-cost TP destroys goal congruence because it loads fixed costs onto the transfer price.',
    },
    // ===== PART 3.2 =====
    {
      id: 'q20',
      partLabel: 'Part 3.2 — Hire vs Transfer',
      questionTitle: 'Q20: AGL Cash Flow — Alt 1 vs Alt 2',
      question: 'NE can hire 4 gardeners at $25,000 each instead of using SE. Compare AGL cash flows.',
      formulaTex: '\\Delta CF = CF_1 - CF_2 = 0 - (-4 \\times 25{,}000) = +100{,}000',
      formulaLegend: 'Alt 1: SE does the work (same VC). Alt 2: NE hires ($100k extra FC). Revenue and VC identical.',
      approach: [
        'Both alternatives generate the same revenue (100 × 2,000) and same VC (100 × 840).',
        'Alt 2 adds hiring cost: 4 × 25,000 = $100,000.',
        'Alt 1 is better by $100,000 for AGL.',
      ],
      answer: 'Alt 1 saves $100,000 vs Alt 2',
      keyTakeaway: 'Internal trade avoids the incremental hiring cost — the company prefers Alt 1.',
    },
    {
      id: 'q21',
      partLabel: 'Part 3.2 — Hire vs Transfer',
      questionTitle: 'Q21: NE Divisional Profit — Alt 1 vs Alt 2',
      question: 'Compare NE\'s Divisional Profit under both alternatives.',
      formulaTex: '\\Delta DP_{NE} = DP_1 - DP_2 = (P - TP) \\times N - [(P - VC) \\times N - Hire]',
      formulaLegend: 'Alt 1: NE pays TP. Alt 2: NE hires gardeners and keeps all margin.',
      approach: [
        'Alt 1: NE Δ DP = 100 × (2,000 − 2,640) = −$64,000.',
        'Alt 2: NE Δ DP = 100 × (2,000 − 840) − 100,000 = 116,000 − 100,000 = +$16,000.',
        'NE prefers Alt 2 by $80,000.',
      ],
      answer: 'NE prefers Alt 2 (hiring) by $80,000',
      keyTakeaway: 'The inflated TP makes internal trade unattractive for NE even though it is better for AGL.',
    },
    {
      id: 'q22',
      partLabel: 'Part 3.2 — Hire vs Transfer',
      questionTitle: 'Q22: SE Divisional Profit — Alt 1 vs Alt 2',
      question: 'Compare SE\'s Divisional Profit under both alternatives.',
      approach: [
        'Alt 1: SE Δ DP = +$180,000 (from Q18).',
        'Alt 2: SE Δ DP = $0 (SE does nothing).',
        'SE prefers Alt 1 by $180,000.',
      ],
      answer: 'SE prefers Alt 1 (transfer) by $180,000',
      keyTakeaway: 'SE wants to trade, NE does not. Goal incongruence caused by the inflated TP.',
    },
    // ===== PART 4.1 =====
    {
      id: 'q23',
      partLabel: 'Part 4.1 — Investment Analysis',
      questionTitle: 'Q23: Cash Flow Effect of Equipment Investment',
      question: 'Compute the CF effect of the $420,000 equipment investment for 2022-2025. Equipment lasts 3 years. 50 large contracts/year at $9,000 price and $5,000 VC. 2 new gardeners at $25,000 each.',
      formulaTex: '\\Delta CF_t = N \\times (P - VC) - Hire = 50 \\times (9{,}000 - 5{,}000) - 50{,}000 = 150{,}000',
      formulaLegend: 'Annual incremental CF for 2023-2025. CF in 2022 = −$420,000 (investment).',
      approach: [
        '2022: CF = −$420,000 (equipment purchase).',
        '2023-2025: Revenue = 50 × $9,000 = $450,000. VC = 50 × $5,000 = $250,000.',
        'Hiring cost = 2 × $25,000 = $50,000.',
        'Annual CF = $450,000 − $250,000 − $50,000 = +$150,000.',
      ],
      answer: '2022: −$420,000 | 2023-2025: +$150,000/year',
      keyTakeaway: 'Total CF = −420 + 3 × 150 = +$30,000 over 4 years. Positive but thin.',
    },
    {
      id: 'q24',
      partLabel: 'Part 4.1 — Investment Analysis',
      questionTitle: 'Q24: Divisional Profit Effect',
      question: 'Compute the effect on SE Divisional Profit for 2023-2025.',
      formulaTex: '\\Delta DP = \\Delta CF_{annual} - Depr = 150{,}000 - 140{,}000 = 10{,}000',
      formulaLegend: 'Depr = 420,000 / 3 = $140,000/year (straight-line).',
      approach: [
        'Depreciation = 420,000 / 3 = $140,000/year.',
        'Δ DP = 150,000 − 140,000 = +$10,000/year for each of 2023-2025.',
      ],
      answer: '+$10,000/year for 2023, 2024, and 2025',
      keyTakeaway: 'Despite strong cash flows, depreciation absorbs most of the incremental profit.',
    },
    // ===== PART 4.2 =====
    {
      id: 'q25',
      partLabel: 'Part 4.2 — Residual Income',
      questionTitle: 'Q25: Residual Income Effect',
      question: 'Compute the effect on RI for 2023-2025. RI = Divisional Profit − 0.10 × Book Value (beginning of year).',
      formulaTex: 'RI_t = \\Delta DP - 0.10 \\times BV_t',
      formulaLegend: 'BV = book value at start of year. Depreciates by $140k/year.',
      approach: [
        'Annual ΔDP = $150,000 (cash flow) − $140,000 (depreciation) = $10,000.',
        '2023: Book value = $420,000. Capital charge = 10% × 420,000 = $42,000. RI = 10,000 − 42,000 = −$32,000.',
        '2024: Book value = $280,000. Capital charge = 10% × 280,000 = $28,000. RI = 10,000 − 28,000 = −$18,000.',
        '2025: Book value = $140,000. Capital charge = 10% × 140,000 = $14,000. RI = 10,000 − 14,000 = −$4,000.',
      ],
      answer: '2023: −$32,000 | 2024: −$18,000 | 2025: −$4,000',
      keyTakeaway: 'RI is negative every year because the capital charge exceeds the thin divisional profit. The investment looks bad under RI despite positive NPV.',
    },
    {
      id: 'q26',
      partLabel: 'Part 4.2 — Residual Income',
      questionTitle: 'Q26: Bonus Under RI-Based Compensation',
      question: 'Compute the bonus effect for 2023-2025. Bonus = 10% of RI increase vs prior year (zero if RI decreases).',
      approach: [
        'Baseline RI (before investment) = $0.',
        '2023: RI = −$32,000. Change vs baseline = −$32,000. Bonus = $0 (RI decreased).',
        '2024: RI = −$18,000. Change vs prior year = −18,000 − (−32,000) = +$14,000. Bonus = 10% × 14,000 = $1,400.',
        '2025: RI = −$4,000. Change vs prior year = −4,000 − (−18,000) = +$14,000. Bonus = 10% × 14,000 = $1,400.',
      ],
      answer: '2023: $0 | 2024: $1,400 | 2025: $1,400',
      keyTakeaway: 'No bonus in Year 1 discourages investment. The improving RI pattern rewards patience but the total bonus ($2,800) may not justify the effort.',
    },
    // ===== PART 5 =====
    {
      id: 'q27',
      partLabel: 'Part 5 — System Critique',
      questionTitle: 'System Critique',
      question: 'Analyze AGL\'s variance analysis, pricing policy, transfer pricing, performance measure, and incentives. Propose improvements.',
      approach: [
        'Variance: Budget was optimistic (1,200 vs 900 actual). Materials efficiency and input price were both favorable — investigate if quality dropped.',
        'Pricing: Full-cost price ($3,007) exceeds market ($2,500). Idle capacity cost in the price creates death spiral risk.',
        'Transfer pricing: Full-cost TP ($2,640) exceeds NE external price ($2,000). Congruent range is $840 to $2,000.',
        'Performance: RI produces negative values for a positive-NPV investment, discouraging value-creating projects.',
        'Incentives: 10% of DP if positive is simple but has no cap. RI-based bonus rewards "getting worse first" via declining book value.',
      ],
      answer: 'Key issues: (1) Full-cost TP destroys goal congruence, (2) cost-plus pricing with idle capacity creates death spiral risk, (3) RI-based bonus discourages investment in Year 1, (4) volume-based OH allocation distorts the volume variance.',
      keyTakeaway: 'The system has multiple interconnected distortions. The full-cost allocation base is the root cause: it inflates prices, inflates TPs, and distorts performance measurement.',
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
