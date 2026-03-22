import type { Simulation } from './artisanGardeners'

export const CIPRIANI_LOMBARDI: Simulation = {
  id: 'cipriani-lombardi',
  title: 'Cipriani & Lombardi (C&L)',
  caseScenario: [
    'Cipriani & Lombardi (C&L) is an Italian shoe manufacturer and distributor with two divisions: MAN (manufacturing, based in China, led by Hao Wang) and DIS (distribution, based in Italy, led by Chiara De Luca). Both are investment centers.',
    'Bonus = 10% of Divisional Profit increase vs budget. If DP decreases vs budget, bonus = €0. Inflation was forecasted at 0% but actual inflation was 6%.',
    'Corporate overhead is allocated at €1.40 per pair sold. Max manufacturing capacity = 800,000 pairs. Assume 0% tax rate, no trade credit.',
  ],
  tableData: {
    headers: ['', 'Budget', 'Actual'],
    rows: [
      ['Revenue (€000)', '24,000', '24,450'],
      ['  Number of pairs', '800,000', '750,000'],
      ['  Avg price per pair (€)', '30', '32.60'],
      ['Materials (€000)', '12,000', '12,720'],
      ['  Kg materials per pair', '1.5', '1.6'],
      ['  Price per kg (€)', '10', '10.60'],
      ['Other manufacturing VC (€000)', '4,000', '3,900'],
      ['  Other VC per pair (€)', '5', '5.20'],
      ['Fixed manufacturing costs (€000)', '4,800', '5,200'],
      ['SG&A expenses (€000)', '750', '875'],
      ['Corporate overhead (€000)', '1,120', '1,050'],
      ['  OH per pair (€)', '1.40', '1.40'],
      ['Divisional Profit (€000)', '1,330', '705'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 — Variance Analysis',
      context: 'Decompose the Divisional Profit variance between budget and actual, incorporating a 6% inflation adjustment. The budget assumed 0% inflation but actual inflation was 6%, so variances are split into an inflation step and real (beyond-inflation) components.',
    },
    {
      partLabel: 'Part 2 — External Pricing',
      context: 'A new low-cost customer (UFFS) wants to buy 30,000 pairs. MAN uses a full-cost-plus-20% pricing policy. Evaluate the pricing decision and minimum acceptable price given MAN has 50,000 pairs of spare capacity.',
      tableData: {
        title: 'UFFS Customer Order',
        headers: ['', 'Amount'],
        rows: [
          ['Pairs requested', '30,000'],
          ['Standard VC per pair', '€20'],
          ['FC per pair (at 800,000 capacity)', '€6'],
          ['Standard full manufacturing cost', '€26'],
          ['Corporate OH per pair', '€1.40'],
          ['Pricing policy', 'Full cost + 20% markup'],
          ['MAN spare capacity', '50,000 pairs'],
        ],
      },
    },
    {
      partLabel: 'Part 2b — Extended UFFS Pricing',
      context: 'Examine how the choice of fixed cost allocation base (practical capacity of 800,000 vs 350,000 vs expected volume of 280,000 pairs) affects the cost-plus price and the accept/reject decision for the UFFS order. The customer is willing to pay up to €32 per pair.',
    },
    {
      partLabel: 'Part 3 — Transfer Pricing',
      context: 'DIS wants 60,000 extra pairs from MAN. The current transfer price is standard manufacturing VC x 1.60. MAN has only 50,000 pairs of spare capacity. DIS can buy externally at €30/pair.',
      tableData: {
        title: 'Internal Transfer to DIS',
        headers: ['', 'Amount'],
        rows: [
          ['Pairs requested by DIS', '60,000'],
          ['MAN standard VC per pair', '€20'],
          ['Transfer price (VC x 1.60)', '€32'],
          ['Corporate OH per pair', '€1.40'],
          ['External supplier price', '€30'],
          ['MAN spare capacity', '50,000 pairs'],
        ],
      },
    },
    {
      partLabel: 'Part 3b — Extended Transfer Pricing',
      context: 'A new customer CAVE orders 20,000 pairs through DIS. DIS can source internally from MAN at TP = €32 or externally at €35/pair. Compare alternatives from DIS\'s perspective.',
      tableData: {
        title: 'CAVE Customer Order',
        headers: ['', 'Amount'],
        rows: [
          ['CAVE order size', '20,000 pairs'],
          ['Internal transfer price', '€32'],
          ['External supplier price (CAVE)', '€35'],
          ['Corporate OH per pair', '€1.40'],
        ],
      },
    },
    {
      partLabel: 'Part 4 — Investment Analysis',
      context: 'MAN can invest in new manufacturing equipment. Evaluate the investment using cash flow, Divisional Profit, and Residual Income at 10% cost of capital.',
      tableData: {
        title: 'Equipment Investment',
        headers: ['', 'Amount'],
        rows: [
          ['Equipment cost', '€2,400,000'],
          ['Useful life', '3 years'],
          ['Depreciation', 'Straight-line (€800,000/year)'],
          ['Incremental revenue/year', '€900,000'],
          ['Incremental VC/year', '€500,000'],
        ],
      },
    },
    {
      partLabel: 'Part 4b — Extended RI and Bonus',
      context: 'Re-evaluate the equipment investment using a 25% cost of capital and analyze how the RI-based bonus (10% of RI improvement vs prior year) creates incentives for Wang over 2024-2026.',
    },
    {
      partLabel: 'Part 5 — System Critique',
      context: 'Analyze C&L\'s management control system across variance analysis (with inflation), cost allocation, transfer pricing, and investment incentives. Identify weaknesses and propose improvements.',
    },
  ],
  steps: [
    // ===== PART 1 — Variance Analysis with Inflation =====
    {
      id: 'q1',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q1: Volume Variance',
      question: 'Compute the difference in Divisional Profit due to the change in number of pairs sold.',
      formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b = (750{,}000 - 800{,}000) \\times 8.10 = -405{,}000',
      formulaLegend: 'N_a = 750,000, N_b = 800,000, CM_b = budgeted CM per pair = 30 − 15 − 5 − 1.40 = €8.60. Wait — CM should exclude FC. CM_b = 30 − (1.5×10) − 5 = 30 − 15 − 5 = €10.',
      approach: [
        'Budgeted CM per pair = Price − Materials VC − Other VC = 30 − (1.5 × 10) − 5 = €10.',
        'Note: Corporate OH at €1.40/pair is also volume-dependent, so net CM = 10 − 1.40 = €8.60.',
        'Volume Variance = (750,000 − 800,000) × 8.60 = −50,000 × 8.60 = −€430,000.',
      ],
      answer: '−€430,000 (Unfavorable)',
      keyTakeaway: 'Selling 50,000 fewer pairs than budget is the primary driver of the profit shortfall.',
    },
    {
      id: 'q2',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q2: Inflation Step',
      question: 'Compute the net effect of 6% inflation on Divisional Profit (inflation affects selling price, material cost, and other VC equally at 6%).',
      formulaTex: 'V_{inf} = N_a \\times [(P_b \\times 0.06) - (MC_b \\times 0.06) - (OVC_b \\times 0.06)]',
      formulaLegend: 'All budgeted per-unit values inflated by 6%, applied to actual volume',
      approach: [
        'Inflation-adjusted price = 30 × 1.06 = €31.80. Revenue gain = (31.80 − 30) × 750,000 = +€1,350,000.',
        'Inflation-adjusted material cost = (1.5 × 10) × 1.06 = €15.90. Cost increase = (15.90 − 15) × 750,000 = −€675,000.',
        'Inflation-adjusted other VC = 5 × 1.06 = €5.30. Cost increase = (5.30 − 5) × 750,000 = −€225,000.',
        'Net inflation effect = 1,350,000 − 675,000 − 225,000 = +€450,000.',
      ],
      answer: '+€450,000 (Favorable)',
      keyTakeaway: 'Inflation has a net favorable effect because the price inflation (on €30) exceeds the cost inflation (on €15 + €5 = €20).',
    },
    {
      id: 'q3',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q3: Selling Price Variance (beyond inflation)',
      question: 'Compute the selling price variance beyond the inflation effect. Inflation-adjusted price = €31.80, actual = €32.60.',
      formulaTex: 'V_{price} = (P_a - P_{inf}) \\times N_a = (32.60 - 31.80) \\times 750{,}000 = +600{,}000',
      formulaLegend: 'P_a = actual price (€32.60), P_inf = inflation-adjusted budget price (€31.80)',
      approach: [
        'Price beyond inflation = 32.60 − 31.80 = €0.80 per pair.',
        'Variance = 0.80 × 750,000 = +€600,000.',
      ],
      answer: '+€600,000 (Favorable)',
      keyTakeaway: 'Hao Wang achieved a real price increase of €0.80 per pair beyond inflation.',
    },
    {
      id: 'q4',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q4: Materials Efficiency Variance',
      question: 'Compute the variance due to the change in kg of materials per pair (1.5 budget vs 1.6 actual).',
      formulaTex: 'V_{eff} = -(Q_a - Q_b) \\times C_{inf} \\times N_a = -(1.6 - 1.5) \\times 10.60 \\times 750{,}000 = -795{,}000',
      formulaLegend: 'Q_a = 1.6 kg, Q_b = 1.5 kg, C_inf = inflation-adjusted cost/kg (€10.60)',
      approach: [
        'Extra material = 1.6 − 1.5 = 0.1 kg per pair.',
        'Valued at inflation-adjusted price: 0.1 × 10.60 × 750,000 = €795,000.',
        'Variance = −€795,000 (using more material is unfavorable).',
      ],
      answer: '−€795,000 (Unfavorable)',
      keyTakeaway: 'Material efficiency deteriorated — 0.1 kg extra per pair is a significant cost overrun.',
    },
    {
      id: 'q5',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q5: Materials Input Price Variance (beyond inflation)',
      question: 'Compute the input price variance for materials beyond inflation. Inflation-adjusted cost/kg = €10.60, actual = €10.60.',
      formulaTex: 'V_{ip} = -(C_a - C_{inf}) \\times Q_a \\times N_a = -(10.60 - 10.60) \\times 1.6 \\times 750{,}000 = 0',
      formulaLegend: 'C_a = actual cost/kg (€10.60), C_inf = inflation-adjusted budget cost/kg (€10.60)',
      approach: [
        'Actual cost per kg = €10.60 = inflation-adjusted budget cost per kg.',
        'No real price variance beyond inflation.',
      ],
      answer: '€0 (No variance beyond inflation)',
      keyTakeaway: 'Material prices moved exactly in line with inflation — no real cost change.',
    },
    {
      id: 'q6',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q6: Other Variable Cost Variance (beyond inflation)',
      question: 'Compute the other VC variance beyond inflation. Inflation-adjusted = €5.30/pair, actual = €5.20/pair.',
      formulaTex: 'V_{ovc} = -(OVC_a - OVC_{inf}) \\times N_a = -(5.20 - 5.30) \\times 750{,}000 = +75{,}000',
      formulaLegend: 'OVC_a = €5.20, OVC_inf = €5.30',
      approach: [
        'Actual other VC (€5.20) is below inflation-adjusted budget (€5.30).',
        'Savings = (5.30 − 5.20) × 750,000 = +€75,000.',
      ],
      answer: '+€75,000 (Favorable)',
      keyTakeaway: 'Other variable costs were managed below inflation — a small but positive efficiency gain.',
    },
    {
      id: 'q7',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q7: Fixed Manufacturing Cost Variance',
      question: 'Compute the variance due to the change in fixed manufacturing costs.',
      formulaTex: 'V_{FC} = FC_b - FC_a = 4{,}800 - 5{,}200 = -400',
      formulaLegend: 'FC_b = budget (€4,800k), FC_a = actual (€5,200k). In €000.',
      approach: [
        'Fixed costs exceeded budget by €400,000.',
        'Variance = 4,800 − 5,200 = −€400,000.',
      ],
      answer: '−€400,000 (Unfavorable)',
      keyTakeaway: 'Fixed manufacturing costs overran budget significantly, possibly due to inflation on wages and rent.',
    },
    {
      id: 'q8',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q8: SG&A Expense Variance',
      question: 'Compute the variance due to the change in SG&A expenses.',
      formulaTex: 'V_{SGA} = SGA_b - SGA_a = 750 - 875 = -125',
      formulaLegend: 'SGA_b = €750k, SGA_a = €875k',
      approach: [
        'SG&A exceeded budget by €125,000.',
        'Variance = 750 − 875 = −€125,000.',
      ],
      answer: '−€125,000 (Unfavorable)',
      keyTakeaway: 'SG&A costs were significantly above budget.',
    },
    {
      id: 'q9',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q9: Corporate Overhead Variance',
      question: 'Compute the variance due to the change in corporate overhead allocation.',
      formulaTex: 'V_{OH} = OH_b - OH_a = 1{,}120 - 1{,}050 = +70',
      formulaLegend: 'OH = €1.40/pair. Budget: 800k × 1.40 = €1,120k. Actual: 750k × 1.40 = €1,050k.',
      approach: [
        'OH is volume-based at €1.40/pair.',
        'Budget OH = 800,000 × 1.40 = €1,120,000.',
        'Actual OH = 750,000 × 1.40 = €1,050,000.',
        'Variance = 1,120 − 1,050 = +€70,000 (favorable — already captured in volume variance).',
        'Note: this variance is mechanically linked to volume. The per-pair rate did not change.',
      ],
      answer: '+€70,000 (Favorable)',
      keyTakeaway: 'The OH "saving" is just a byproduct of lower volume — not a real efficiency gain. Already embedded in the volume variance if CM includes OH.',
    },
    {
      id: 'q10',
      partLabel: 'Part 1 — Variance Analysis',
      questionTitle: 'Q10: Bonus Computation',
      question: 'Compute Hao Wang\'s bonus for the year.',
      formulaTex: 'Bonus = 10\\% \\times \\max(DP_a - DP_b,\\, 0) = 10\\% \\times \\max(705 - 1{,}330,\\, 0) = 0',
      formulaLegend: 'DP_a = actual DP (€705k), DP_b = budget DP (€1,330k)',
      approach: [
        'Actual DP = €705,000. Budget DP = €1,330,000.',
        'Difference = 705 − 1,330 = −€625,000 (shortfall).',
        'Since DP decreased vs budget, bonus = €0.',
      ],
      answer: '€0',
      keyTakeaway: 'Despite favorable price and inflation effects, the volume shortfall and cost overruns cause DP to miss budget by €625k.',
    },
    // ===== PART 2 — External Pricing =====
    {
      id: 'q11',
      partLabel: 'Part 2 — External Pricing',
      questionTitle: 'Q11: Standard Manufacturing Full Cost',
      question: 'A new customer wants 30,000 pairs. Compute the standard manufacturing full cost per pair.',
      formulaTex: 'FC_{std} = VC_{std} + \\frac{FC_{mfg}}{N_b} = 20 + \\frac{4{,}800{,}000}{800{,}000} = 20 + 6 = 26',
      formulaLegend: 'VC_std = materials + other VC = 15 + 5 = €20. FC per pair = €6 at budget capacity.',
      approach: [
        'Standard VC per pair = (1.5 × 10) + 5 = €20.',
        'FC per pair = 4,800,000 / 800,000 = €6.',
        'Standard full manufacturing cost = 20 + 6 = €26 per pair.',
      ],
      answer: '€26 per pair',
      keyTakeaway: 'The standard full cost includes a fixed cost allocation at budget capacity.',
    },
    {
      id: 'q12',
      partLabel: 'Part 2 — External Pricing',
      questionTitle: 'Q12: Price with 20% Markup',
      question: 'Compute the price using standard manufacturing full cost + 20% markup.',
      formulaTex: 'P = FC_{std} \\times 1.20 = 26 \\times 1.20 = 31.20',
      formulaLegend: 'Standard full cost = €26, markup = 20%',
      approach: [
        'Price = 26 × 1.20 = €31.20 per pair.',
      ],
      answer: '€31.20 per pair',
      keyTakeaway: 'The cost-plus price is close to the inflation-adjusted budget selling price (€31.80).',
    },
    {
      id: 'q13',
      partLabel: 'Part 2 — External Pricing',
      questionTitle: 'Q13: Minimum Price with Corporate OH',
      question: 'Compute the minimum price MAN should accept for the 30,000 pairs, including corporate OH. MAN has spare capacity (800k − 750k = 50k).',
      formulaTex: 'P_{min} = VC + OH_{pair} = 20 + 1.40 = 21.40',
      formulaLegend: 'VC = €20, Corp OH = €1.40/pair. FC is sunk (spare capacity).',
      approach: [
        'MAN has 50,000 pairs of spare capacity (enough for 30,000).',
        'Incremental cost = VC + corporate OH = 20 + 1.40 = €21.40 per pair.',
        'FC is sunk — not relevant for the minimum price.',
        'Minimum acceptable price = €21.40.',
      ],
      answer: '€21.40 per pair',
      keyTakeaway: 'With spare capacity, the minimum price covers only variable costs and corporate OH — well below the full-cost markup price.',
    },
    // ===== PART 2b — Extended UFFS Pricing =====
    {
      id: 'q22',
      partLabel: 'Part 2b — Extended UFFS Pricing',
      questionTitle: 'Q22: Minimum Price for Positive DP (UFFS)',
      question:
        'What is the minimum price per pair at which MAN\'s Divisional Profit would still be positive for the UFFS contract, considering corporate overhead is allocated at the current rate per pair?',
      formulaTex:
        'P_{min} = VC + \\frac{FC_{mfg}}{N_{cap}} + OH = 20 + 6 + 1.40 = 27.40',
      formulaLegend:
        'VC = €20/pair, FC per pair at practical capacity = €4,800k/800k = €6, OH = €1.40/pair.',
      approach: [
        'For MAN\'s reported Divisional Profit on the UFFS contract to be non-negative, the price must cover all allocated costs.',
        'Variable cost = €20/pair (materials + other VC).',
        'Fixed manufacturing cost allocation = 4,800,000 / 800,000 = €6/pair (at practical capacity).',
        'Corporate overhead = €1.40/pair.',
        'Minimum price = 20 + 6 + 1.40 = €27.40 per pair.',
        'Note: This is higher than the economic minimum (€21.40 from Q13) because FC allocation is included even though FC does not change with the order.',
      ],
      answer: '€27.40 per pair',
      keyTakeaway:
        'The accounting minimum (€27.40) is €6 higher than the economic minimum (€21.40) because fixed cost allocation creates a floor that discourages accepting profitable orders below full cost.',
    },
    {
      id: 'q23',
      partLabel: 'Part 2b — Extended UFFS Pricing',
      questionTitle: 'Q23: Full Cost Price at Expected Volume',
      question:
        'Compute the price per pair using the full cost pricing policy if fixed manufacturing costs were allocated based on expected sales volume of 280,000 pairs rather than practical capacity of 350,000 pairs.',
      formulaTex:
        'P = (VC + \\frac{FC}{N_{exp}}) \\times 1.20 = (20 + \\frac{4{,}800{,}000}{280{,}000}) \\times 1.20',
      formulaLegend:
        'N_exp = 280,000 pairs (expected volume), N_prac = 350,000 pairs (practical capacity).',
      approach: [
        'At expected volume (280,000): FC/pair = 4,800,000 / 280,000 = €17.14. Full cost = 20 + 17.14 = €37.14. Price = 37.14 × 1.20 = €44.57.',
        'At practical capacity (350,000): FC/pair = 4,800,000 / 350,000 = €13.71. Full cost = 20 + 13.71 = €33.71. Price = 33.71 × 1.20 = €40.46.',
        'Compared to standard capacity (800,000): FC/pair = €6, full cost = €26, price = €31.20 (Q12).',
        'Using expected volume inflates the price by €13.37 vs the standard capacity base — the "death spiral" risk where lower volume raises prices, further reducing volume.',
      ],
      answer:
        'At 280,000 pairs: €44.57 | At 350,000 pairs: €40.46 | At 800,000 pairs: €31.20 (Q12)',
      keyTakeaway:
        'Allocating fixed costs over a smaller volume base dramatically inflates the cost-plus price. Using expected volume rather than practical capacity embeds idle capacity cost into prices, risking a downward demand spiral.',
    },
    {
      id: 'q24',
      partLabel: 'Part 2b — Extended UFFS Pricing',
      questionTitle: 'Q24: UFFS Contract Pricing Comparison',
      question:
        'Compare MAN\'s pricing decision under the three allocation bases. The UFFS customer is willing to pay up to €32 per pair. Would MAN accept the order under each basis?',
      formulaTex:
        'P_{UFFS} = 32 \\quad vs \\quad P_{800k} = 31.20 \\quad P_{350k} = 40.46 \\quad P_{280k} = 44.57',
      formulaLegend:
        'UFFS willingness to pay = €32. Cost-plus prices depend on the FC allocation base.',
      approach: [
        'At 800,000 capacity base: price = €31.20. UFFS offers €32 > €31.20 → Accept. ✓',
        'At 350,000 capacity base: price = €40.46. UFFS offers €32 < €40.46 → Reject. ✗',
        'At 280,000 capacity base: price = €44.57. UFFS offers €32 < €44.57 → Reject. ✗',
        'Economic analysis: incremental profit = (32 − 21.40) × 30,000 = +€318,000. The order is value-creating.',
        'The smaller allocation bases lead to rejecting a profitable order — illustrating the danger of cost-plus pricing with low-volume FC allocation.',
      ],
      answer:
        'Accept at 800k base (€31.20). Reject at 350k (€40.46) and 280k (€44.57) bases. All three miss the economic insight: the order generates +€318,000 incremental profit.',
      keyTakeaway:
        'Cost-plus pricing with different allocation bases produces contradictory decisions. Only the economic analysis (incremental cost of €21.40 vs €32 offer) correctly identifies the order as value-creating.',
    },
    // ===== PART 3 — Transfer Pricing =====
    {
      id: 'q14',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q14: Current Transfer Price',
      question: 'DIS wants 60,000 extra pairs from MAN. Current TP = standard manufacturing VC × 1.60. Compute the TP.',
      formulaTex: 'TP = VC_{std} \\times 1.60 = 20 \\times 1.60 = 32',
      formulaLegend: 'VC_std = €20 per pair, markup factor = 1.60',
      approach: [
        'Standard manufacturing VC = (1.5 × 10) + 5 = €20.',
        'TP = 20 × 1.60 = €32 per pair.',
      ],
      answer: '€32 per pair',
      keyTakeaway: 'The TP uses a 60% markup on standard variable cost as an approximation of full cost plus margin.',
    },
    {
      id: 'q15',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q15: Corporate OH per Pair',
      question: 'If DIS buys the 60,000 pairs internally, what is the total corporate OH impact?',
      formulaTex: 'OH_{total} = N \\times OH_{pair} = 60{,}000 \\times 1.40 = 84{,}000',
      formulaLegend: 'OH per pair = €1.40, applied to both MAN (for producing) and DIS needs to consider the overall C&L effect.',
      approach: [
        'MAN incurs additional corporate OH: 60,000 × 1.40 = €84,000.',
        'This is the incremental OH cost if MAN produces the extra pairs.',
        'At C&L group level, this allocation cancels out (it is an internal charge).',
      ],
      answer: '€84,000 incremental OH for MAN',
      keyTakeaway: 'Corporate OH is volume-based, so producing more pairs increases the OH charge on MAN.',
    },
    {
      id: 'q16',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q16: External vs Internal Supply for C&L',
      question: 'DIS can buy 60,000 pairs externally at €30/pair. MAN has 50,000 pairs spare capacity (needs to add capacity for remaining 10,000). Compare alternatives for C&L.',
      formulaTex: '\\Delta CF_{internal} = -N \\times VC_{MAN} = -60{,}000 \\times 20 = -1{,}200{,}000',
      formulaLegend: 'Internal: MAN VC only (TP cancels within group). External: €30/pair.',
      approach: [
        'Internal (all 60k pairs): MAN variable cost = 60,000 × 20 = €1,200,000. (Assume 10k pairs above capacity require same VC — simplification.)',
        'External: 60,000 × 30 = €1,800,000.',
        'C&L saves = 1,800,000 − 1,200,000 = €600,000 by producing internally.',
        'Note: if the extra 10k pairs require overtime or capacity expansion, the true cost may be higher.',
      ],
      answer: 'Internal saves €600,000 for C&L (assuming no capacity cost for extra 10k)',
      keyTakeaway: 'Internal production is substantially cheaper for the group, but the TP may not signal this correctly to the divisions.',
    },
    {
      id: 'q17',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q17: Goal Congruence TP Range',
      question: 'What TP range achieves goal congruence? MAN has 50,000 pairs spare capacity. Consider the 50k within capacity and 10k outside separately.',
      formulaTex: 'TP_{min} = VC + OH = 20 + 1.40 = 21.40 \\quad TP_{max} = P_{ext} = 30',
      formulaLegend: 'For pairs within spare capacity: MAN min = VC + OH (no opportunity cost). DIS max = external price.',
      approach: [
        'For 50,000 pairs (within spare capacity):',
        '  MAN minimum = VC + corporate OH = 20 + 1.40 = €21.40 (no opportunity cost).',
        '  DIS maximum = external price = €30.',
        '  Range: €21.40 ≤ TP ≤ €30.',
        'For 10,000 pairs (beyond capacity):',
        '  MAN minimum = VC + OH + opportunity cost of displaced sales. If MAN must forgo regular sales at CM = 32.60 − 20 − 1.40 = €11.20, then min = 20 + 1.40 + 11.20 = €32.60.',
        '  Since €32.60 > €30 (DIS max), no congruent TP exists for these 10k pairs.',
        'Current TP of €32 is within range for spare capacity pairs but may be too high overall.',
      ],
      answer: 'Spare capacity (50k): €21.40 ≤ TP ≤ €30. Beyond capacity (10k): no congruent range exists.',
      keyTakeaway: 'Goal congruence depends critically on spare capacity. For pairs beyond capacity, the opportunity cost of displaced sales makes internal transfer uneconomical.',
    },
    // ===== PART 3b — Extended Transfer Pricing =====
    {
      id: 'q25',
      partLabel: 'Part 3b — Extended Transfer Pricing',
      questionTitle: 'Q25: CAVE Order — DIS Perspective',
      question:
        'Compute the effect of accepting the CAVE order on DIS\'s Divisional Profit under Alternative 1 (buy from MAN at transfer price) versus Alternative 2 (buy externally at €35 per pair).',
      formulaTex:
        '\\Delta DP_{Alt1} - \\Delta DP_{Alt2} = N \\times (P_{ext,2} - TP) = 20{,}000 \\times (35 - 32) = +60{,}000',
      formulaLegend:
        'CAVE order = 20,000 pairs. TP = €32 (from Q14). External alternative for CAVE = €35/pair. OH = €1.40/pair applies under both alternatives.',
      approach: [
        'Alt 1 (buy from MAN): DIS cost per pair = TP + OH = 32 + 1.40 = €33.40. Total = 20,000 × 33.40 = €668,000.',
        'Alt 2 (buy externally): DIS cost per pair = 35 + 1.40 = €36.40. Total = 20,000 × 36.40 = €728,000.',
        'DIS saves = 728,000 − 668,000 = €60,000 under Alt 1.',
        'Unlike the earlier 60k-pair order (external at €30), the CAVE external supplier charges €35, making the internal TP of €32 competitive.',
      ],
      answer:
        'Alt 1 saves DIS €60,000 vs Alt 2. DIS prefers buying internally at TP = €32.',
      keyTakeaway:
        'When the external alternative is higher (€35 vs €30), the same TP of €32 now achieves goal congruence — DIS willingly sources internally, benefiting both DIS and the group.',
    },
    // ===== PART 4 — Investment Analysis =====
    {
      id: 'q18',
      partLabel: 'Part 4 — Investment Analysis',
      questionTitle: 'Q18: Cash Flow of New Equipment',
      question: 'MAN can invest €2,400,000 in new equipment (3-year life, straight-line). This generates extra revenue of €900,000/year with incremental VC of €500,000/year. Compute the annual incremental CF.',
      formulaTex: '\\Delta CF = \\Delta Rev - \\Delta VC = 900{,}000 - 500{,}000 = +400{,}000',
      formulaLegend: 'ΔRev = €900k/year, ΔVC = €500k/year. No incremental FC mentioned.',
      approach: [
        'Year 0: CF = −€2,400,000 (investment).',
        'Years 1-3: ΔCF = 900,000 − 500,000 = +€400,000/year.',
        'Total CF = −2,400,000 + 3 × 400,000 = −€1,200,000.',
      ],
      answer: 'Year 0: −€2,400,000 | Years 1-3: +€400,000/year | Total: −€1,200,000',
      keyTakeaway: 'Total CF is negative — the investment does not recover its cost over 3 years.',
    },
    {
      id: 'q19',
      partLabel: 'Part 4 — Investment Analysis',
      questionTitle: 'Q19: Divisional Profit Effect',
      question: 'Compute the effect on MAN Divisional Profit for years 1-3. Depreciation = €2,400k / 3 = €800k/year.',
      formulaTex: '\\Delta DP = \\Delta CF - Depr = 400{,}000 - 800{,}000 = -400{,}000',
      formulaLegend: 'Depr = €800,000/year (straight-line over 3 years)',
      approach: [
        'Annual depreciation = 2,400,000 / 3 = €800,000.',
        'ΔDP = 400,000 − 800,000 = −€400,000/year.',
        'The investment reduces DP by €400k/year, worsening the already negative bonus gap.',
      ],
      answer: '−€400,000/year for years 1-3',
      keyTakeaway: 'Depreciation far exceeds incremental cash flow, making DP deeply negative for this project.',
    },
    {
      id: 'q20',
      partLabel: 'Part 4 — Investment Analysis',
      questionTitle: 'Q20: Residual Income',
      question: 'Compute the Residual Income for years 1-3. Cost of capital = 10%.',
      formulaTex: 'RI_t = \\Delta DP - 10\\% \\times BV_t',
      formulaLegend: 'BV depreciates by €800k/year. ΔDP = −€400k/year.',
      approach: [
        'Year 1: BV = 2,400k. RI = −400,000 − 0.10 × 2,400,000 = −400,000 − 240,000 = −€640,000.',
        'Year 2: BV = 1,600k. RI = −400,000 − 0.10 × 1,600,000 = −400,000 − 160,000 = −€560,000.',
        'Year 3: BV = 800k. RI = −400,000 − 0.10 × 800,000 = −400,000 − 80,000 = −€480,000.',
      ],
      answer: 'Year 1: −€640,000 | Year 2: −€560,000 | Year 3: −€480,000',
      keyTakeaway: 'RI is deeply negative every year, confirming the investment should be rejected. Both DP and RI signal correctly here.',
    },
    // ===== PART 4b — Extended RI and Bonus =====
    {
      id: 'q26',
      partLabel: 'Part 4b — Extended RI and Bonus',
      questionTitle: 'Q26: Residual Income (25% Cost of Capital)',
      question:
        'Compute the effect of the equipment investment on MAN\'s Residual Income for 2024, 2025, and 2026, where the cost of capital is 25 percent and book value is measured at the beginning of each year.',
      formulaTex: 'RI_t = \\Delta DP_t - 0.25 \\times BV_t',
      formulaLegend:
        'Investment = €2,400,000. Depr = €800,000/year. ΔDP = −€400,000/year. BV at start of year t.',
      approach: [
        'Year 2024: BV = €2,400,000. RI = −400,000 − 0.25 × 2,400,000 = −400,000 − 600,000 = −€1,000,000.',
        'Year 2025: BV = €1,600,000. RI = −400,000 − 0.25 × 1,600,000 = −400,000 − 400,000 = −€800,000.',
        'Year 2026: BV = €800,000. RI = −400,000 − 0.25 × 800,000 = −400,000 − 200,000 = −€600,000.',
        'At 25% cost of capital, RI is substantially more negative than at 10% (Q20). The capital charge dominates in year 1.',
      ],
      answer:
        '2024: −€1,000,000 | 2025: −€800,000 | 2026: −€600,000',
      keyTakeaway:
        'The 25% cost of capital makes the RI even more deeply negative, but the declining pattern remains — RI improves by €200,000 each year as book value falls.',
    },
    {
      id: 'q27',
      partLabel: 'Part 4b — Extended RI and Bonus',
      questionTitle: 'Q27: Wang\'s Bonus under RI Evaluation',
      question:
        'Compute the effect on Wang\'s bonus for 2024, 2025, and 2026 under the Residual Income evaluation, where the bonus equals 10 percent of the increase in Residual Income compared to the prior year.',
      formulaTex:
        'Bonus_t = 10\\% \\times \\max(RI_t - RI_{t-1},\\, 0)',
      formulaLegend:
        'RI_0 = 0 (pre-investment baseline). RI improves each year as book value declines.',
      approach: [
        'RI_0 (before investment) = €0.',
        '2024: RI = −€1,000,000. Change = −1,000,000 − 0 = −€1,000,000. Bonus = €0 (decrease).',
        '2025: RI = −€800,000. Change = −800,000 − (−1,000,000) = +€200,000. Bonus = 10% × 200,000 = €20,000.',
        '2026: RI = −€600,000. Change = −600,000 − (−800,000) = +€200,000. Bonus = 10% × 200,000 = €20,000.',
        'Total bonus over 3 years = 0 + 20,000 + 20,000 = €40,000.',
      ],
      answer:
        '2024: €0 | 2025: €20,000 | 2026: €20,000 | Total: €40,000',
      keyTakeaway:
        'Despite the investment destroying value every year (RI is always negative), Wang earns €40k in bonuses over years 2-3 because the declining book value creates mechanical RI improvement.',
    },
    {
      id: 'q28',
      partLabel: 'Part 4b — Extended RI and Bonus',
      questionTitle: 'Q28: Wang\'s Investment Decision',
      question:
        'Based on your calculations, would Wang choose to make the equipment investment? Explain how the Residual Income pattern over the three years affects the investment decision.',
      approach: [
        'Company perspective: Total CF = −€1,200,000. The investment destroys value. Reject.',
        'Wang under DP-based bonus: ΔDP = −€400,000/year. This worsens his already negative bonus gap. No incentive to invest. Reject — goal congruence.',
        'Wang under RI-based bonus: Year 1 bonus = €0 (large RI drop). Years 2-3 bonus = €20,000 each. Total bonus = €40,000.',
        'If Wang is patient (multi-year horizon), he might accept the investment for the €40k bonus despite it being value-destroying.',
        'If Wang is short-term focused (year 1 only), he rejects because RI drops by €1M in year 1.',
        'Goal incongruence: The RI-based bonus creates a perverse incentive to accept value-destroying investments because the declining book value mechanically generates RI "improvement" in later years.',
      ],
      answer:
        'Under DP bonus: reject (aligned). Under RI bonus with multi-year horizon: might accept for €40k bonus despite −€1.2M total CF — goal incongruence.',
      keyTakeaway:
        'The RI-based bonus scheme can create goal incongruence for value-destroying investments: the mechanical improvement in RI as assets depreciate generates bonuses even when the underlying project has deeply negative economic value.',
    },
    // ===== PART 5 — System Critique =====
    {
      id: 'q21',
      partLabel: 'Part 5 — System Critique',
      questionTitle: 'System Critique',
      question: 'Analyze C&L\'s variance analysis, inflation treatment, transfer pricing, and investment incentives. Propose improvements.',
      approach: [
        'Variance analysis with inflation: Decomposing into volume, inflation, and real variances is essential when inflation is significant (6% vs 0% forecast). The inflation step (+€450k) shows the net benefit of inflation to MAN. Without this step, the favorable price variance would be overstated.',
        'Volume variance: −€430k is the largest adverse effect. Budget at 100% capacity (800k pairs) may have been unrealistic. Consider capacity-utilization benchmarks.',
        'Material efficiency: −€795k is the most controllable adverse variance. Using 0.1 kg extra per pair is operationally significant and warrants investigation (quality of inputs, worker training, machine maintenance).',
        'Transfer pricing: TP = 1.60 × VC (€32) works within spare capacity but fails beyond it. For 50k pairs within capacity, the congruent range is €21.40–€30. The current TP at €32 exceeds DIS external option (€30) — DIS would reject internal supply. Recommend dual pricing or negotiated TP.',
        'Investment: The €2.4M equipment has negative total CF (−€1.2M) and deeply negative RI. Both manager and company correctly reject. However, the budget-based bonus means Hao Wang has no incentive for any project unless it closes the €625k budget gap — creating potential goal incongruence for value-creating investments.',
        'Recommendations: (1) Use inflation-adjusted budgets to avoid penalizing managers for macro factors. (2) Investigate material efficiency variance operationally. (3) Set TP within congruence range or use negotiated pricing. (4) Consider multi-year bonus pools to avoid short-term bias.',
      ],
      answer: 'Key issues: (1) Budget assumed 0% inflation but actual was 6% — inflation-adjusted analysis is essential. (2) Material efficiency (−€795k) is the largest controllable variance. (3) TP at €32 exceeds DIS external option (€30), destroying goal congruence. (4) Budget-based bonus at 100% capacity is unrealistically high.',
      keyTakeaway: 'C&L illustrates why inflation adjustment in variance analysis is critical and how a TP based on variable cost markup can fail when it exceeds the external market price.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis with inflation adjustment: volume, inflation step, real price, efficiency, input price, other VC, FC, SG&A, corporate OH',
      'External pricing: standard full cost, markup pricing, minimum price, volume-based FC allocation and death spiral risk',
      'Transfer pricing: VC-based markup TP, corporate OH impact, goal congruence range, CAVE order comparison',
      'Investment analysis: CF, DP with depreciation, RI at 10% and 25% cost of capital, RI-based bonus incentives',
      'System critique: inflation treatment, controllable vs uncontrollable variances, TP design',
    ],
    keyTheme: 'Cipriani & Lombardi demonstrates the importance of inflation adjustment in variance analysis and shows how a VC-markup transfer price can exceed external alternatives, destroying goal congruence between manufacturing and distribution divisions.',
  },
}
