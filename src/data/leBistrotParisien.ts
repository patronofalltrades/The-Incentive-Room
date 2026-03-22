import type { Simulation } from './artisanGardeners'

export const LE_BISTROT_PARISIEN: Simulation = {
  id: 'le-bistrot-parisien',
  title: 'Le Bistrot Parisien (BP)',
  caseScenario: [
    'Le Bistrot Parisien (BP) is a restaurant belonging to the Sabores de França (SF) group, a Portuguese restaurant company. BP offers a single fixed menu (salad + beefsteak + dessert) plus drinks.',
    'The restaurant manager is Patrícia Moreira. 2023 was a record year. In 2024, a competitor "L\'Entrecôte" opened nearby. Patrícia shifted the strategy toward cocktails and higher drink prices.',
    'Compensation: fixed salary + bonus = 10% of increase in Restaurant Profit vs prior year. If Restaurant Profit decreases, bonus = €0. Max capacity = 80,000 menus. Assume 0% tax rate, no trade credit.',
  ],
  tableData: {
    headers: ['', '2023', '2024'],
    rows: [
      ['Revenue from menus (€000)', '2,400', '1,820'],
      ['  Number of menus', '60,000', '52,000'],
      ['  Price per menu (€)', '40', '35'],
      ['Revenue from drinks (€000)', '600', '468'],
      ['  Number of drinks', '120,000', '78,000'],
      ['  Drinks per menu', '2.0', '1.5'],
      ['  Price per drink (€)', '5', '6'],
      ['Cost of menus (€000)', '840', '728'],
      ['  Cost per menu (€)', '14', '14'],
      ['Cost of drinks (€000)', '240', '187.2'],
      ['  Cost per drink (€)', '2', '2.4'],
      ['Total Fixed Costs (€000)', '800', '800'],
      ['Restaurant Profit (€000)', '1,120', '572.8'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1a — Variance Analysis',
      context: 'Decompose the change in Restaurant Profit from 2023 to 2024 into individual variances: customer volume, drinks per customer, menu price, drink price, menu cost, drink cost, and fixed costs.',
    },
    {
      partLabel: 'Part 1b — Capacity-Adjusted Profit',
      context: 'Compute an alternative performance measure where fixed costs are allocated based on capacity utilization (max = 80,000 menus), so managers are not penalized for idle capacity.',
    },
    {
      partLabel: 'Part 1b — Alternative Performance Measure',
      context: 'Compute the capacity-adjusted Restaurant Profit using a daily seating capacity basis (1,200 customers per day for 365 days = 438,000 customers/year) instead of the 80,000-menu capacity.',
    },
    {
      partLabel: 'Part 2 — New Vegan Menu',
      context: 'BP considers launching a vegan menu to attract new customers. Evaluate the effect on cash flow, Restaurant Profit, and bonus incentives.',
      tableData: {
        title: 'Vegan Menu Proposal',
        headers: ['', 'Amount'],
        rows: [
          ['Expected vegan menus/year', '20,000'],
          ['Price per vegan menu', '€30'],
          ['Variable cost per vegan menu', '€10'],
          ['Additional fixed costs/year', '€120,000'],
        ],
      },
    },
    {
      partLabel: 'Part 3 — Transfer Pricing',
      context: 'Another SF restaurant, Costa Restaurante (CR), needs 10,000 menus from BP. The current transfer price is full cost (VC + FC per menu at capacity). An external supplier offers €22/menu. BP has spare capacity.',
      tableData: {
        title: 'Internal Transfer to CR',
        headers: ['', 'Amount'],
        rows: [
          ['Menus requested by CR', '10,000'],
          ['BP variable cost per menu', '€14'],
          ['FC per menu (at 80,000 capacity)', '€10'],
          ['Full-cost transfer price', '€24'],
          ['External supplier price', '€22'],
          ['BP spare capacity', '28,000 menus'],
        ],
      },
    },
    {
      partLabel: 'Part 3b — Extended Transfer Pricing',
      context: 'Re-examine the internal transfer using BP\'s alternative pricing policy of variable cost plus 60% markup (TP = €14 x 1.60 = €22.40). Evaluate goal congruence under this transfer price.',
    },
    {
      partLabel: 'Part 4 — Investment Analysis',
      context: 'BP can invest in kitchen equipment to supply menus through a Fast Delivery platform. Evaluate the investment using cash flow, Restaurant Profit, and Residual Income.',
      tableData: {
        title: 'Fast Delivery Investment',
        headers: ['', 'Amount'],
        rows: [
          ['Equipment cost', '€330,000'],
          ['Useful life', '3 years'],
          ['Depreciation', 'Straight-line (€110,000/year)'],
          ['Menus per year', '20,000'],
          ['Selling price per menu', '€20'],
          ['Variable cost per menu', '€15'],
          ['Additional staff cost/year', '€40,000'],
        ],
      },
    },
    {
      partLabel: 'Part 4b — Extended Investment Analysis',
      context: 'Re-evaluate the Fast Delivery investment using a 12% cost of capital (instead of 10%) and analyze the RI-based bonus incentives over 2025-2027.',
    },
    {
      partLabel: 'Part 5 — System Critique',
      context: 'Analyze BP\'s management control system across variance analysis, incentive design, transfer pricing, and investment decisions. Identify weaknesses and propose improvements.',
    },
  ],
  steps: [
    // ===== PART 1a — Variance Analysis =====
    {
      id: 'q1',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q1: Volume of Customers Variance',
      question: 'Compute the difference in Restaurant Profit due to the change in Number of menus (customers).',
      formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b = (52{,}000 - 60{,}000) \\times 32 = -256{,}000',
      formulaLegend: 'N_a = actual menus (52,000), N_b = prior year menus (60,000), CM_b = prior year contribution margin per customer',
      approach: [
        'Menu margin = €40 − €14 = €26. Drink margin = 2 drinks × (€5 − €2) = €6. Total CM per customer = €26 + €6 = €32.',
        'Volume Variance = (52,000 − 60,000) × 32 = −8,000 × 32 = −€256,000.',
      ],
      answer: '−€256,000 (Unfavorable)',
      keyTakeaway: 'Losing 8,000 customers is the largest single driver of the profit decline.',
    },
    {
      id: 'q2',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q2: Drinks per Customer Variance',
      question: 'Compute the difference in Restaurant Profit due to the change in drinks per menu (from 2.0 to 1.5).',
      formulaTex: 'V_{dpc} = (D_a - D_b) \\times CM^d_b \\times N_a = (1.5 - 2.0) \\times 3 \\times 52{,}000 = -78{,}000',
      formulaLegend: 'D_a = actual drinks/menu (1.5), D_b = prior drinks/menu (2.0), CM^d_b = prior drink margin (€3)',
      approach: [
        'Drink CM (2023) = 5 − 2 = €3 per drink.',
        'Variance = (1.5 − 2.0) × 3 × 52,000 = −0.5 × 3 × 52,000 = −€78,000.',
      ],
      answer: '−€78,000 (Unfavorable)',
      keyTakeaway: 'Customers ordered fewer drinks per visit, reducing drink contribution margin.',
    },
    {
      id: 'q3',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q3: Menu Price Variance',
      question: 'Compute the difference in Restaurant Profit due to the change in price per menu.',
      formulaTex: 'V_{mp} = (P^m_a - P^m_b) \\times N_a = (35 - 40) \\times 52{,}000 = -260{,}000',
      formulaLegend: 'P^m_a = actual menu price (€35), P^m_b = prior menu price (€40)',
      approach: [
        'Menu price dropped by €5.',
        'Variance = (35 − 40) × 52,000 = −€260,000.',
      ],
      answer: '−€260,000 (Unfavorable)',
      keyTakeaway: 'The €5 price cut per menu across 52,000 menus is the second-largest adverse effect.',
    },
    {
      id: 'q4',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q4: Drink Price Variance',
      question: 'Compute the difference in Restaurant Profit due to the change in price per drink.',
      formulaTex: 'V_{dp} = (P^d_a - P^d_b) \\times D_a \\times N_a = (6 - 5) \\times 1.5 \\times 52{,}000 = +78{,}000',
      formulaLegend: 'P^d_a = actual drink price (€6), P^d_b = prior drink price (€5), D_a = actual drinks/menu',
      approach: [
        'Drink price rose by €1.',
        'Variance = (6 − 5) × 1.5 × 52,000 = +€78,000.',
      ],
      answer: '+€78,000 (Favorable)',
      keyTakeaway: 'Higher drink prices partially offset the menu price cut, but not enough to compensate.',
    },
    {
      id: 'q5',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q5: Menu Cost Variance',
      question: 'Compute the difference in Restaurant Profit due to the change in cost per menu.',
      formulaTex: 'V_{mc} = -(C^m_a - C^m_b) \\times N_a = -(14 - 14) \\times 52{,}000 = 0',
      formulaLegend: 'C^m_a = C^m_b = €14. No change in menu unit cost.',
      approach: [
        'Cost per menu unchanged at €14.',
        'Variance = 0.',
      ],
      answer: '€0 (No variance)',
      keyTakeaway: 'Menu costs were stable despite the competitive disruption.',
    },
    {
      id: 'q6',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q6: Drink Cost Variance',
      question: 'Compute the difference in Restaurant Profit due to the change in cost per drink.',
      formulaTex: 'V_{dc} = -(C^d_a - C^d_b) \\times D_a \\times N_a = -(2.4 - 2) \\times 1.5 \\times 52{,}000 = -31{,}200',
      formulaLegend: 'C^d_a = actual cost/drink (€2.4), C^d_b = prior cost/drink (€2)',
      approach: [
        'Drink cost rose by €0.40 (cocktails are more expensive to prepare).',
        'Variance = −(2.4 − 2) × 1.5 × 52,000 = −0.4 × 78,000 = −€31,200.',
      ],
      answer: '−€31,200 (Unfavorable)',
      keyTakeaway: 'The shift to cocktails increased drink costs by 20%, eroding part of the drink price gain.',
    },
    {
      id: 'q7',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q7: Fixed Cost Variance',
      question: 'Compute the difference in Restaurant Profit due to the change in Total Fixed Costs.',
      formulaTex: 'V_{FC} = FC_b - FC_a = 800 - 800 = 0',
      formulaLegend: 'FC unchanged at €800,000.',
      approach: [
        'Fixed costs remained at €800,000. No variance.',
      ],
      answer: '€0 (No variance)',
      keyTakeaway: 'Fixed costs were unchanged, so neither favorable nor unfavorable.',
    },
    {
      id: 'q8',
      partLabel: 'Part 1a — Variance Analysis',
      questionTitle: 'Q8: Bonus Computation',
      question: 'Compute Patrícia\'s bonus for 2024.',
      formulaTex: 'Bonus = 10\\% \\times \\max(RP_{2024} - RP_{2023},\\, 0) = 10\\% \\times \\max(572.8 - 1{,}120,\\, 0) = 0',
      formulaLegend: 'RP = Restaurant Profit (€000). Bonus only if RP increases vs prior year.',
      approach: [
        'RP 2024 = €572,800. RP 2023 = €1,120,000.',
        'Change = 572,800 − 1,120,000 = −€547,200 (decrease).',
        'Since RP decreased, bonus = €0.',
      ],
      answer: '€0',
      keyTakeaway: 'Despite the restaurant still being profitable, Patrícia earns no bonus because profit declined vs the prior year.',
    },
    // ===== PART 1b — Capacity-Adjusted Profit =====
    {
      id: 'q9',
      partLabel: 'Part 1b — Capacity-Adjusted Profit',
      questionTitle: 'Q9: Capacity-Adjusted Restaurant Profit',
      question: 'Compute the Capacity-Adjusted Restaurant Profit for 2023 and 2024, where FC is allocated based on capacity utilization (max = 80,000 menus). Recompute the bonus.',
      formulaTex: 'ARP = Rev - VC - FC \\times \\frac{N}{N_{cap}}',
      formulaLegend: 'ARP = Adjusted Restaurant Profit, N_cap = 80,000 menus',
      approach: [
        'Capacity = 80,000 menus. Fixed costs = €800,000.',
        '2023: Used 60,000 of 80,000 capacity (75%). FC allocated = €800k × 75% = €600k.',
        '2023 Adjusted Restaurant Profit (ARP) = Revenue €3,000k − Variable costs €1,080k − FC allocated €600k = €1,320k.',
        '2024: Used 52,000 of 80,000 capacity (65%). FC allocated = €800k × 65% = €520k.',
        '2024 ARP = Revenue €2,288k − Variable costs €915.2k − FC allocated €520k = €852.8k.',
        'Change = 852.8 − 1,320 = −€467.2k (decrease). Bonus = €0.',
      ],
      answer: '2023 Adjusted Restaurant Profit = €1,320k | 2024 Adjusted Restaurant Profit = €852.8k | Bonus = €0',
      keyTakeaway: 'Capacity-adjusted profit is higher than unadjusted in both years (idle capacity cost excluded), but the decline persists so the bonus remains zero.',
    },
    // ===== PART 1b — Alternative Performance Measure =====
    {
      id: 'q23',
      partLabel: 'Part 1b — Alternative Performance Measure',
      questionTitle: 'Q23: Capacity-Adjusted RP (Daily Capacity Basis)',
      question:
        'Compute the Restaurant Profit for 2024 using the capacity-adjusted performance measure, where fixed costs are allocated based on the ratio of actual customers to maximum seating capacity of 1,200 customers per day for 365 days.',
      formulaTex:
        'ARP = Rev - VC - FC \\times \\frac{N_a}{N_{cap}}',
      formulaLegend:
        'N_cap = 1,200 × 365 = 438,000 customers/year. N_a = actual customers.',
      approach: [
        'Daily capacity = 1,200 customers × 365 days = 438,000 customers/year.',
        '2023: Utilization = 60,000 / 438,000 = 13.7%. FC allocated = €800,000 × 13.7% = €109,589.',
        '2023 Adjusted Restaurant Profit (ARP) = Revenue €3,000,000 − Variable costs €1,080,000 − FC allocated €109,589 = €1,810,411.',
        '2024: Utilization = 52,000 / 438,000 = 11.9%. FC allocated = €800,000 × 11.9% = €94,977.',
        '2024 ARP = Revenue €2,288,000 − Variable costs €915,200 − FC allocated €94,977 = €1,277,823.',
        'Change = 1,277,823 − 1,810,411 = −€532,588. Bonus = €0 (profit decreased).',
      ],
      answer:
        '2023 Adjusted Restaurant Profit = €1,810,411 | 2024 Adjusted Restaurant Profit = €1,277,823 | Bonus = €0',
      keyTakeaway:
        'With a much larger capacity base (438,000 vs 80,000), very little FC is allocated — Adjusted Restaurant Profit is much higher than under the 80,000 capacity base, but the year-on-year decline persists so the bonus remains zero.',
    },
    {
      id: 'q24',
      partLabel: 'Part 1b — Alternative Performance Measure',
      questionTitle: 'Q24: Customer Volume Variance (Capacity-Adjusted)',
      question:
        'Compute the variance due to the change in the number of customers using the capacity-adjusted performance measure.',
      formulaTex:
        'V_{vol}^{adj} = (N_a - N_b) \\times \\left(CM_b - \\frac{FC}{N_{cap}}\\right)',
      formulaLegend:
        'CM_b = contribution margin per customer (2023) = €32. FC/N_cap = 800,000/438,000 = €1.83.',
      approach: [
        'FC per customer at capacity = 800,000 / 438,000 = €1.83.',
        'Effective CM per customer = €32 (contribution margin) − €1.83 (FC charge) = €30.17.',
        'Volume Variance = (52,000 − 60,000) × 30.17 = −€241,370.',
      ],
      answer: '−€241,370 (Unfavorable)',
      keyTakeaway:
        'The capacity-adjusted measure reduces the volume variance because fixed cost allocation per customer is much lower when the capacity base is large. This better isolates the manager\'s controllable contribution margin loss.',
    },
    // ===== PART 2 — New Vegan Menu =====
    {
      id: 'q10',
      partLabel: 'Part 2 — New Vegan Menu',
      questionTitle: 'Q10: Cash Flow Effect of Vegan Menu',
      question: 'BP considers adding a vegan menu: 20,000 menus/year at €30 price, variable cost €10/menu, extra fixed costs €120,000/year. Compute the effect on SF\'s cash flow.',
      formulaTex: '\\Delta CF = N_v \\times (P_v - VC_v) - \\Delta FC = 20{,}000 \\times (30 - 10) - 120{,}000 = +280{,}000',
      formulaLegend: 'N_v = 20,000 vegan menus, P_v = €30, VC_v = €10, ΔFC = €120,000',
      approach: [
        'Incremental contribution = 20,000 × (30 − 10) = €400,000.',
        'Incremental FC = €120,000.',
        'ΔCF = 400,000 − 120,000 = +€280,000.',
      ],
      answer: '+€280,000',
      keyTakeaway: 'The vegan menu generates strong positive incremental cash flow for SF.',
    },
    {
      id: 'q11',
      partLabel: 'Part 2 — New Vegan Menu',
      questionTitle: 'Q11: Restaurant Profit Effect of Vegan Menu',
      question: 'Compute the effect on Restaurant Profit (assuming no depreciation difference).',
      formulaTex: '\\Delta RP = \\Delta CF = +280{,}000',
      formulaLegend: 'No additional depreciation, so ΔRP = ΔCF.',
      approach: [
        'No incremental depreciation or non-cash items mentioned.',
        'ΔRP = ΔCF = +€280,000.',
        'New RP = 572,800 + 280,000 = €852,800.',
      ],
      answer: '+€280,000 (New RP = €852,800)',
      keyTakeaway: 'Restaurant Profit increases but remains below 2023 level (€1,120k), so the bonus is still €0 under the current scheme.',
    },
    {
      id: 'q12',
      partLabel: 'Part 2 — New Vegan Menu',
      questionTitle: 'Q12: Bonus Effect of Vegan Menu',
      question: 'Does the vegan menu change Patrícia\'s bonus? Is there goal congruence?',
      formulaTex: 'RP_{new} = 852{,}800 < RP_{2023} = 1{,}120{,}000 \\Rightarrow Bonus = 0',
      formulaLegend: 'Bonus requires RP to exceed prior year.',
      approach: [
        'Even with the vegan menu, 2024 RP (€852.8k) < 2023 RP (€1,120k).',
        'Bonus remains €0.',
        'Goal incongruence: project is +€280k for SF, but Patrícia has no incentive to pursue it.',
      ],
      answer: '€0 — no change. Goal incongruence exists.',
      keyTakeaway: 'The bonus-on-improvement scheme creates goal incongruence: a value-creating project gives Patrícia no reward because the prior-year benchmark is too high.',
    },
    {
      id: 'q13',
      partLabel: 'Part 2 — New Vegan Menu',
      questionTitle: 'Q13: Capacity-Adjusted Profit with Vegan Menu',
      question: 'Compute the Capacity-Adjusted Restaurant Profit with the vegan menu. Assume vegan menus use the same capacity as regular menus.',
      formulaTex: 'ARP_{new} = ARP_{base} + \\Delta CF - \\Delta FC_{cap} ',
      formulaLegend: 'ΔFC_cap = change in capacity-allocated FC from adding 20k menus',
      approach: [
        'Total menus with vegan = 52,000 + 20,000 = 72,000. Capacity = 80,000.',
        'Total FC = €800k (existing) + €120k (vegan) = €920k.',
        'FC allocated = €920k × (72,000 / 80,000) = €920k × 90% = €828k.',
        'Total revenue = €2,288k + €600k = €2,888k. Total VC = €915.2k + €200k = €1,115.2k.',
        'Adjusted Restaurant Profit (ARP) = €2,888k − €1,115.2k − €828k = €944.8k.',
        'vs 2023 Adjusted Restaurant Profit of €1,320k: still a decrease, bonus = €0.',
      ],
      answer: 'Adjusted Restaurant Profit = €944,800 | Bonus = €0',
      keyTakeaway: 'Even under capacity-adjusted profit, the vegan menu cannot close the gap to 2023, so the bonus remains zero.',
    },
    // ===== PART 3 — Transfer Pricing =====
    {
      id: 'q14',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q14: Current Transfer Price Computation',
      question: 'Another SF restaurant (CR) needs 10,000 menus from BP. Transfer price = full cost = VC + FC per menu (FC = €800k / 80,000 capacity = €10). BP has spare capacity. Compute the TP.',
      formulaTex: 'TP = VC + FC_{unit} = 14 + 10 = 24',
      formulaLegend: 'VC = €14/menu, FC per menu at capacity = 800,000/80,000 = €10',
      approach: [
        'Variable cost per menu = €14.',
        'FC per menu (at full capacity) = 800,000 / 80,000 = €10.',
        'TP = 14 + 10 = €24 per menu.',
      ],
      answer: '€24 per menu',
      keyTakeaway: 'The full-cost TP includes a fixed cost allocation even though BP has spare capacity.',
    },
    {
      id: 'q15',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q15: External Supplier Alternative',
      question: 'CR can buy from an external supplier at €22/menu. Compare CR\'s cost under both alternatives.',
      formulaTex: 'Cost_{internal} = 10{,}000 \\times 24 = 240{,}000 \\quad vs \\quad Cost_{ext} = 10{,}000 \\times 22 = 220{,}000',
      formulaLegend: 'TP = €24, external price = €22',
      approach: [
        'Internal: 10,000 × €24 = €240,000.',
        'External: 10,000 × €22 = €220,000.',
        'CR saves €20,000 buying externally. CR rejects internal transfer.',
      ],
      answer: 'CR prefers external by €20,000',
      keyTakeaway: 'The inflated TP makes the internal option uncompetitive for CR.',
    },
    {
      id: 'q16',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q16: SF Cash Flow Effect',
      question: 'Compute the effect on SF group cash flow if BP supplies the 10,000 menus internally (BP has spare capacity).',
      formulaTex: '\\Delta CF_{SF} = N \\times (P_{ext} - VC_{BP}) = 10{,}000 \\times (22 - 14) = +80{,}000',
      formulaLegend: 'Saved external cost vs BP variable cost. TP cancels out within the group.',
      approach: [
        'If internal: SF avoids paying €22 externally and incurs only €14 VC at BP.',
        'ΔCF = 10,000 × (22 − 14) = +€80,000 for SF.',
        'Internal transfer is better for the group.',
      ],
      answer: '+€80,000 for SF group',
      keyTakeaway: 'The group saves €80k by producing internally, but the TP signals the wrong decision to CR.',
    },
    {
      id: 'q17',
      partLabel: 'Part 3 — Transfer Pricing',
      questionTitle: 'Q17: Goal Congruence TP Range',
      question: 'What transfer price range achieves goal congruence? BP has spare capacity.',
      formulaTex: 'TP_{min} = VC_{BP} = 14 \\quad TP_{max} = P_{ext} = 22',
      formulaLegend: 'BP has spare capacity so opportunity cost = 0. CR will not pay more than external price.',
      approach: [
        'BP minimum: VC = €14 (spare capacity, no opportunity cost).',
        'CR maximum: external price = €22.',
        'Goal congruence range: €14 ≤ TP ≤ €22.',
        'Current TP of €24 is above the range — goal incongruence.',
      ],
      answer: '€14 ≤ TP ≤ €22. Current TP (€24) fails.',
      keyTakeaway: 'The full-cost TP destroys goal congruence because it loads fixed costs onto transfers despite spare capacity.',
    },
    // ===== PART 3b — Extended Transfer Pricing =====
    {
      id: 'q25',
      partLabel: 'Part 3b — Extended Transfer Pricing',
      questionTitle: 'Q25: Transfer Price (VC + 60% Markup)',
      question:
        'Compute the transfer price per menu using the internal pricing policy of variable cost plus 60 percent markup.',
      formulaTex: 'TP = VC \\times 1.60 = 14 \\times 1.60 = 22.40',
      formulaLegend:
        'VC = €14 per menu (variable cost of menu preparation). Markup = 60%.',
      approach: [
        'Variable cost per menu = €14.',
        'TP = 14 × 1.60 = €22.40 per menu.',
      ],
      answer: '€22.40 per menu',
      keyTakeaway:
        'The VC-plus-markup TP (€22.40) is lower than the full-cost TP (€24) but still above the external supplier price of €22.',
    },
    {
      id: 'q26',
      partLabel: 'Part 3b — Extended Transfer Pricing',
      questionTitle: 'Q26: Effect on BP\'s Restaurant Profit',
      question:
        'Compute the effect of the internal supply arrangement on BP\'s Restaurant Profit.',
      formulaTex:
        '\\Delta RP_{BP} = N \\times (TP - VC) = 10{,}000 \\times (22.40 - 14) = +84{,}000',
      formulaLegend:
        'N = 10,000 menus, TP = €22.40, VC = €14. BP has spare capacity (80,000 − 52,000 = 28,000 menus).',
      approach: [
        'BP has 28,000 menus of spare capacity — enough for the 10,000 menu order.',
        'Incremental revenue = 10,000 × 22.40 = €224,000.',
        'Incremental cost = 10,000 × 14 = €140,000 (variable cost only; FC unchanged).',
        'ΔRP for BP = 224,000 − 140,000 = +€84,000.',
      ],
      answer: '+€84,000',
      keyTakeaway:
        'BP benefits from the internal transfer — the markup above variable cost generates €84k of incremental profit with no additional fixed costs.',
    },
    {
      id: 'q27',
      partLabel: 'Part 3b — Extended Transfer Pricing',
      questionTitle: 'Q27: Effect on CR\'s Restaurant Profit',
      question:
        'Compute the effect on CR\'s Restaurant Profit.',
      formulaTex:
        '\\Delta RP_{CR} = N \\times (P_{ext} - TP) = 10{,}000 \\times (22 - 22.40) = -4{,}000',
      formulaLegend:
        'P_ext = €22 (external supplier price), TP = €22.40.',
      approach: [
        'CR can buy externally at €22/menu or internally at €22.40/menu.',
        'Cost difference = 22.40 − 22 = €0.40 per menu more expensive internally.',
        'Effect on CR = 10,000 × (22 − 22.40) = −€4,000.',
        'CR is worse off buying internally — it would prefer the external supplier.',
      ],
      answer: '−€4,000',
      keyTakeaway:
        'The TP of €22.40 exceeds the external price of €22, so CR rationally rejects the internal transfer, even though it benefits the group.',
    },
    {
      id: 'q28',
      partLabel: 'Part 3b — Extended Transfer Pricing',
      questionTitle: 'Q28: Effect on SF\'s Consolidated Cash Flows',
      question:
        'Compute the effect on SF\'s consolidated cash flows.',
      formulaTex:
        '\\Delta CF_{SF} = N \\times (P_{ext} - VC_{BP}) = 10{,}000 \\times (22 - 14) = +80{,}000',
      formulaLegend:
        'At group level, the TP cancels out. SF saves the external cost and incurs only BP\'s variable cost.',
      approach: [
        'If internal: SF avoids paying €22 externally and incurs only €14 VC at BP.',
        'ΔCF for SF = 10,000 × (22 − 14) = +€80,000.',
        'This is identical to Q16 — the group benefit does not depend on the TP.',
        'The TP only affects how the €80k is split between BP (+€84k) and CR (−€4k).',
      ],
      answer: '+€80,000 for SF group',
      keyTakeaway:
        'The group saves €80k by producing internally regardless of the TP used. The TP merely determines the internal profit split.',
    },
    {
      id: 'q29',
      partLabel: 'Part 3b — Extended Transfer Pricing',
      questionTitle: 'Q29: Goal Congruence TP Range',
      question:
        'What is the range of transfer prices that achieves goal congruence for this internal supply arrangement?',
      formulaTex:
        'TP_{min} = VC_{BP} = 14 \\quad TP_{max} = P_{ext} = 22 \\quad \\Rightarrow 14 \\leq TP \\leq 22',
      formulaLegend:
        'BP has spare capacity so opportunity cost = 0. CR will not pay more than the external price.',
      approach: [
        'BP minimum: VC = €14 (spare capacity, no opportunity cost). Any TP above €14 improves BP\'s profit.',
        'CR maximum: external price = €22. CR rejects any TP above €22.',
        'Goal congruence range: €14 ≤ TP ≤ €22.',
        'Current TP of €22.40 is €0.40 above the range — goal incongruence.',
        'The full-cost TP of €24 (from Q14) is even further outside the range.',
        'Any TP within €14–€22 would make both divisions and the group better off.',
      ],
      answer: '€14 ≤ TP ≤ €22. Current TP (€22.40) is outside the range.',
      keyTakeaway:
        'Both the VC-plus-markup TP (€22.40) and the full-cost TP (€24) fail goal congruence. The VC markup is closer but still exceeds the external alternative by €0.40.',
    },
    // ===== PART 4 — Investment Analysis =====
    {
      id: 'q18',
      partLabel: 'Part 4 — Investment Analysis',
      questionTitle: 'Q18: Cash Flow Effect of Fast Delivery Investment',
      question: 'BP can invest €330,000 in equipment (3-year life, straight-line) to supply 20,000 menus/year through Fast Delivery at €20 price, VC = €15/menu, plus hire staff at €40,000/year. Compute annual CF.',
      formulaTex: '\\Delta CF = N \\times (P - VC) - Staff = 20{,}000 \\times (20 - 15) - 40{,}000 = +60{,}000',
      formulaLegend: 'N = 20,000, P = €20, VC = €15, Staff = €40k/year',
      approach: [
        'Year 0: CF = −€330,000 (investment).',
        'Years 1-3: Revenue = 20,000 × 20 = €400,000. VC = 20,000 × 15 = €300,000. Staff = €40,000.',
        'Annual CF = 400,000 − 300,000 − 40,000 = +€60,000.',
        'Total CF = −330,000 + 3 × 60,000 = −€150,000.',
      ],
      answer: 'Year 0: −€330,000 | Years 1-3: +€60,000/year | Total: −€150,000',
      keyTakeaway: 'The investment has negative total CF over 3 years — it destroys value for SF.',
    },
    {
      id: 'q19',
      partLabel: 'Part 4 — Investment Analysis',
      questionTitle: 'Q19: Bonus Effect of Investment',
      question: 'Compute the effect on Patrícia\'s bonus from the investment (years 1-3). Depreciation = €330k / 3 = €110k/year.',
      formulaTex: '\\Delta RP = \\Delta CF - Depr = 60{,}000 - 110{,}000 = -50{,}000',
      formulaLegend: 'Depr = €110,000/year. ΔRP is negative each year.',
      approach: [
        'Annual ΔRP = 60,000 − 110,000 = −€50,000/year.',
        'The investment reduces Restaurant Profit by €50k/year.',
        'Bonus (on improvement vs prior year) is further harmed. No bonus from this project.',
      ],
      answer: '−€50,000/year impact on RP. No bonus contribution.',
      keyTakeaway: 'Both CF and RP are negative — Patrícia has no incentive to invest, which is correctly aligned since the project destroys value.',
    },
    {
      id: 'q20',
      partLabel: 'Part 4 — Investment Analysis',
      questionTitle: 'Q20: Residual Income of Investment',
      question: 'Compute the Residual Income for years 1-3. Cost of capital = 10%.',
      formulaTex: 'RI_t = \\Delta RP - 10\\% \\times BV_t',
      formulaLegend: 'BV depreciates by €110k/year. ΔRP = −€50k/year.',
      approach: [
        'Annual ΔRP = €60,000 (cash flow) − €110,000 (depreciation) = −€50,000.',
        'Year 1: Book value = €330k. Capital charge = 10% × 330,000 = €33,000. RI = −50,000 − 33,000 = −€83,000.',
        'Year 2: Book value = €220k. Capital charge = 10% × 220,000 = €22,000. RI = −50,000 − 22,000 = −€72,000.',
        'Year 3: Book value = €110k. Capital charge = 10% × 110,000 = €11,000. RI = −50,000 − 11,000 = −€61,000.',
      ],
      answer: 'Year 1: −€83,000 | Year 2: −€72,000 | Year 3: −€61,000',
      keyTakeaway: 'RI is deeply negative every year, confirming the investment should be rejected — consistent with the negative total CF.',
    },
    {
      id: 'q21',
      partLabel: 'Part 4 — Investment Analysis',
      questionTitle: 'Q21: Should Patrícia Invest?',
      question: 'Analyze whether Patrícia should invest from both the company perspective and her personal incentive perspective.',
      approach: [
        'Company (SF) perspective: Total CF = −€150,000. NPV is negative. Reject.',
        'Patrícia perspective: ΔRP = −€50k/year, worsening her already zero bonus. Reject.',
        'Goal congruence: both SF and Patrícia agree to reject. No incongruence on this decision.',
      ],
      answer: 'Reject. Both SF and Patrícia agree — no goal incongruence.',
      keyTakeaway: 'Unlike typical cases, the investment incentive is aligned here because the project genuinely destroys value.',
    },
    // ===== PART 4b — Extended Investment Analysis =====
    {
      id: 'q30',
      partLabel: 'Part 4b — Extended Investment Analysis',
      questionTitle: 'Q30: Residual Income (12% Cost of Capital)',
      question:
        'Compute the effect of the kitchen equipment investment on BP\'s Residual Income for 2025, 2026, and 2027, where the cost of capital is 12 percent and book value is measured at the beginning of each year.',
      formulaTex: 'RI_t = \\Delta RP_t - 0.12 \\times BV_t',
      formulaLegend:
        'Investment = €330,000. Depreciation = €110,000/year. ΔRP = ΔCF − Depr = 60,000 − 110,000 = −€50,000/year. BV at start of year t.',
      approach: [
        'Annual ΔRP = €60,000 (cash flow) − €110,000 (depreciation) = −€50,000.',
        '2025: Book value = €330,000. Capital charge = 12% × 330,000 = €39,600. RI = −50,000 − 39,600 = −€89,600.',
        '2026: Book value = €220,000. Capital charge = 12% × 220,000 = €26,400. RI = −50,000 − 26,400 = −€76,400.',
        '2027: Book value = €110,000. Capital charge = 12% × 110,000 = €13,200. RI = −50,000 − 13,200 = −€63,200.',
      ],
      answer:
        '2025: −€89,600 | 2026: −€76,400 | 2027: −€63,200',
      keyTakeaway:
        'At 12% cost of capital, RI is even more negative than at 10% (Q20). The higher hurdle rate makes the already value-destroying investment look worse.',
    },
    {
      id: 'q31',
      partLabel: 'Part 4b — Extended Investment Analysis',
      questionTitle: 'Q31: Bonus under RI-Based Evaluation',
      question:
        'Compute the effect on Patrícia\'s bonus for 2025, 2026, and 2027 under the Residual Income based evaluation, where the bonus equals 10 percent of the increase in Residual Income.',
      formulaTex:
        'Bonus_t = 10\\% \\times \\max(RI_t - RI_{t-1},\\, 0)',
      formulaLegend:
        'RI_0 = 0 (no investment baseline). RI increases year-over-year as the capital charge declines.',
      approach: [
        'Baseline RI (before investment) = €0.',
        '2025: RI = −€89,600. Change vs baseline = −€89,600. Bonus = €0 (RI decreased).',
        '2026: RI = −€76,400. Change vs prior year = −76,400 − (−89,600) = +€13,200. Bonus = 10% × 13,200 = €1,320.',
        '2027: RI = −€63,200. Change vs prior year = −63,200 − (−76,400) = +€13,200. Bonus = 10% × 13,200 = €1,320.',
      ],
      answer:
        '2025: €0 | 2026: €1,320 | 2027: €1,320',
      keyTakeaway:
        'The RI-based bonus creates goal incongruence: a value-destroying investment generates positive bonuses in later years because the declining book value mechanically improves RI. This incentivizes managers to accept bad investments for the sake of future bonus gains.',
    },
    // ===== PART 5 — System Critique =====
    {
      id: 'q22',
      partLabel: 'Part 5 — System Critique',
      questionTitle: 'System Critique',
      question: 'Analyze BP\'s variance analysis, incentive scheme, transfer pricing, and investment decisions. Propose improvements.',
      approach: [
        'Variance analysis: Cocktail strategy partially worked (drink price +€78k) but customer loss (−€256k) and menu price cuts (−€260k) dominated.',
        'Incentive scheme: Bonus on improvement vs prior record year means zero incentive for any project below the €547k gap. A budget-based or rolling-average target would be better.',
        'Transfer pricing: Full-cost TP (€24) exceeds external price (€22). With spare capacity, congruent range is €14 to €22.',
        'Investment: Fast Delivery has negative CF and RP — correctly rejected. But the bonus scheme also blocks value-creating investments since bonus = €0 regardless.',
      ],
      answer: 'Key issues: (1) Prior-year bonus benchmark kills incentives after a record year, (2) full-cost TP destroys goal congruence with spare capacity, (3) the vegan menu creates goal incongruence — good for SF but zero bonus for Patrícia.',
      keyTakeaway: 'The core problem is the bonus-on-improvement design: after a record year, the manager cannot earn a bonus regardless of value-creating decisions, creating widespread goal incongruence.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis: customer volume, drinks per customer, menu price, drink price, menu cost, drink cost, fixed costs',
      'Capacity-adjusted profit: excluding idle capacity cost from performance measurement (80k and 438k capacity bases)',
      'Relevance analysis: incremental CF vs incremental RP for new product decisions',
      'Transfer pricing: full-cost TP and VC-plus-markup TP, goal congruence range with spare capacity',
      'Investment analysis: CF, RP, RI at 10% and 12% cost of capital, RI-based bonus incentives',
      'System critique: bonus-on-improvement design flaws after record year',
    ],
    keyTheme: 'Le Bistrot Parisien illustrates how a bonus-on-improvement scheme creates perverse incentives after a record year: the manager has no reason to pursue value-creating projects because the prior-year benchmark is unreachable.',
  },
}
