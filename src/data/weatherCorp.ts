import type { Simulation } from './artisanGardeners'

export const WEATHER_CORP: Simulation = {
  id: 'weather-corp',
  title: 'Weather Corp',
  caseScenario: [
    'The Weather Corp. consists of two divisions, HOT and COLD. Both divisions are profit centers and the managers\' evaluation and bonus depend on the corresponding divisional profit.',
    'The HOT division manufactures two different products: one is transferred to the COLD division within the same company, and the other is sold externally at a market price of $210 per unit. The transfer price for the internally transferred product is based on full cost plus a profit mark-up of 15% on full cost.',
    'HOT\'s indirect manufacturing costs are $240,000, consisting of $160,000 variable overhead and $80,000 fixed overhead. Corporate policies prescribe that departments\' overhead costs are allocated to products based on actual direct labor costs.',
    'A new external customer offers to buy 600 units of a slightly modified version of the externally sold product at a unit price of $200. The entire industry has idle capacity, which also holds for the HOT division.',
  ],
  tableData: {
    headers: ['', 'Internally transferred', 'Externally sold'],
    rows: [
      ['Output (in units)', '1,000', '900'],
      ['Total direct labor costs', '$40,000', '$40,000'],
      ['Total direct material costs', '$60,000', '$40,000'],
      ['Total marketing costs', '\u2014', '$10,000'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Firm-Wide Perspective',
      context:
        'As CEO of Weather Corp, determine whether the order of 600 units at $200 should be accepted from a firm-wide perspective. The order would result in additional direct labor costs of $40,000, additional direct material costs of $34,000, and additional variable overhead costs of $30,000.',
    },
    {
      partLabel: 'Part 2 \u2014 HOT Division Perspective',
      context:
        'As manager of HOT, given the current rules for overhead allocation and transfer pricing, determine whether the HOT division will accept the offer. Analyze how accepting the order changes the overhead allocation rate and thus the transfer price.',
    },
    {
      partLabel: 'Part 3 \u2014 System Diagnosis',
      context:
        'Assess whether there is a problem with the internal accounting system and propose fixes.',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Firm-Wide Perspective',
      questionTitle: 'Q1: Should the order be accepted from the firm-wide perspective?',
      question:
        'Assume you are the CEO of Weather Corp. Should the order be accepted from a firm-wide (Weather Corp.) perspective? How much more or less profit will Weather Corp. earn if it accepts the order? Show your calculations in detail.',
      formulaTex:
        '\\Delta\\pi = 600 \\times 200 - 40{,}000 - 34{,}000 - 30{,}000 = \\$16{,}000',
      formulaLegend:
        'Incremental revenue (600 \u00D7 $200) minus incremental labor ($40,000), material ($34,000), and variable overhead ($30,000)',
      approach: [
        'Step 1: Apply the relevance principle. From the company-wide perspective, only incremental costs and revenues matter. Fixed overhead ($80,000) is incurred regardless of the decision because the division has idle capacity. Existing product costs and the transfer price are unaffected and irrelevant.',
        'Step 2: Compute incremental revenue. 600 units \u00D7 $200 = $120,000.',
        'Step 3: Compute incremental costs. Additional direct labor = $40,000. Additional direct materials = $34,000. Additional variable overhead = $30,000. Total incremental costs = $104,000. Fixed overhead does not increase (idle capacity).',
        'Step 4: Compute net effect. Incremental profit = $120,000 \u2212 $104,000 = +$16,000. The order should be accepted because it makes a positive contribution to Weather Corp\'s profit.',
      ],
      answer:
        'Yes, the order should be accepted. Weather Corp. earns $16,000 more profit.',
      keyTakeaway:
        'From the firm-wide perspective, only incremental costs matter. Fixed overhead and existing costs are irrelevant since the division has idle capacity.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 2 \u2014 HOT Division Perspective',
      questionTitle: 'Q2: Will the HOT division accept the offer?',
      question:
        'Now assume that you are the manager of HOT. Given the current rules for overhead allocation and transfer pricing, will the HOT division accept the offer? How much more or less profit will HOT show in its accounting if it accepts the order? Show your calculations in detail.',
      formulaTex:
        'TP_A - TP_R = 1.15 \\times (90 - 120) = -34.5 \\quad \\Rightarrow \\quad (-34.5 + 16) \\times 1{,}000 < 0',
      formulaLegend:
        'TP_A = transfer price if order accepted, TP_R = transfer price if rejected; the change in allocated OH per internal unit changes the transfer price',
      approach: [
        'Step 1: Compute the overhead allocation rate without the new order. Total indirect costs = $240,000. Total direct labor = $40,000 (internal) + $40,000 (external) = $80,000. Allocation rate = $240,000 / $80,000 = 3.0. Overhead allocated to internal product = 3.0 \u00D7 $40,000 = $120,000.',
        'Step 2: Compute the transfer price without the new order. Full cost of internal product = direct materials ($60,000) + direct labor ($40,000) + allocated OH ($120,000) = $220,000 for 1,000 units = $220/unit. Transfer price = 1.15 \u00D7 $220 = $253/unit. Total internal revenue = $253,000.',
        'Step 3: Compute the overhead allocation rate with the new order. Total indirect costs = $240,000 + $30,000 (new variable OH) = $270,000. Total direct labor = $80,000 + $40,000 (new) = $120,000. New allocation rate = $270,000 / $120,000 = 2.25. Overhead allocated to internal product = 2.25 \u00D7 $40,000 = $90,000.',
        'Step 4: Compute the new transfer price. Full cost of internal product = $60,000 + $40,000 + $90,000 = $190,000 for 1,000 units = $190/unit. New TP = 1.15 \u00D7 $190 = $218.50/unit. Total internal revenue = $218,500.',
        'Step 5: Compute the revenue loss on internal sales. The lower allocation rate reduces the transfer price by $253 \u2212 $218.50 = $34.50/unit. Revenue loss on 1,000 internal units = \u2212$34,500. This is the hidden cost: accepting the new order spreads overhead over more products, lowering the per-unit rate and thus the cost-plus transfer price.',
        'Step 6: Compute total effect on HOT. Gain from new order = +$16,000 (same as company-wide). Loss on internal revenue = \u2212$34,500. Net effect = \u2212$18,500. HOT would reject the order.',
        'Step 7: Identify the distortion. The accounting system creates a perverse incentive: accepting a profitable order ($16k for the company) reduces HOT\'s divisional profit by $18.5k because the lower overhead allocation rate mechanically reduces the cost-plus transfer price on existing internal sales.',
      ],
      answer:
        'No, the HOT division would not accept the order. Accepting the order reduces HOT\'s divisional profit by $18,500 because the lower overhead allocation rate reduces the transfer price charged to COLD, losing $34,500 on internal sales while gaining only $16,000 from the new order.',
      keyTakeaway:
        'When overhead is allocated based on actual volume and the transfer price is cost-plus, accepting a new order can decrease the per-unit overhead allocation, lowering the transfer price on existing internal sales.',
    },
    // ===== Q3 =====
    {
      id: 'q3',
      partLabel: 'Part 3 \u2014 System Diagnosis',
      questionTitle: 'Q3: Is there a problem with the internal accounting system?',
      question:
        'Do you think there is a problem with the internal accounting system? If so, how would you fix it?',
      approach: [
        'Step 1: Confirm the goal congruence failure. HOT rejects an order that benefits Weather Corp by $16,000. This is a clear failure of the internal accounting system to align divisional incentives with corporate interests.',
        'Step 2: Diagnose the root cause. The problem has two interacting components: (a) overhead is allocated based on actual direct labor costs, so the rate changes whenever production volume changes; (b) the transfer price is set at full cost plus 15%, meaning any change in the allocation rate mechanically changes the TP. Together, these create a feedback loop where accepting new business lowers the TP on existing internal business.',
        'Step 3: Propose Fix 1 \u2014 Capacity-based allocation. Compute the allocation rate based on maximum (or budgeted) capacity rather than actual usage. This keeps the rate constant regardless of new orders, eliminating the perverse feedback effect.',
        'Step 4: Propose Fix 2 \u2014 Pre-determined transfer prices. Set transfer prices at the beginning of the year based on budgeted costs and volumes. Changes in actual production during the year would not affect the TP, removing the disincentive to accept profitable orders.',
        'Step 5: Propose Fix 3 \u2014 Direct measurement of variable OH. Instead of allocating variable overhead using an average rate, measure the actual variable OH consumed by each product directly. This prevents the new customer\'s variable OH from reducing the allocation to the internal product.',
        'Step 6: Propose Fix 4 \u2014 Corporate-level compensation. Base managerial bonuses on corporate profits instead of (or in addition to) divisional profits. This gives HOT\'s manager an incentive to consider the company-wide impact.',
      ],
      answer:
        'Yes, there is a goal congruence problem. Fixes include: (1) use capacity-based allocation rates instead of actual-volume rates, (2) set transfer prices based on pre-determined standards, (3) directly measure variable OH consumption by client, or (4) base compensation on corporate-level profits.',
      keyTakeaway:
        'Cost-plus transfer prices based on actual overhead allocation can create perverse incentives when overhead rates change with volume. Using pre-set standards or capacity-based allocation eliminates this distortion.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Relevance analysis',
      'Overhead allocation',
      'Cost-plus transfer pricing',
      'Goal congruence',
      'Idle capacity decisions',
    ],
    keyTheme:
      'When transfer prices are based on actual full cost, changes in production volume can alter the overhead allocation rate and transfer price, creating situations where a profitable order is rejected by the selling division.',
  },
}
