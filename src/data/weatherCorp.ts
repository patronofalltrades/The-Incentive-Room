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
        'Incremental revenue = 600 \u00D7 $200 = $120,000.',
        'Incremental labor costs = $40,000.',
        'Incremental material costs = $34,000.',
        'Incremental variable overhead = $30,000.',
        'Incremental profit = $120,000 \u2212 $40,000 \u2212 $34,000 \u2212 $30,000 = $16,000.',
        'The order should be accepted because it makes a positive contribution.',
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
        'Without the new customer: total indirect costs = $240,000; total direct labor = $80,000; allocation rate = 240,000/80,000 = 3. Overhead allocated to internal product = 3 \u00D7 $40,000 = $120,000 per product line.',
        'With the new customer: total indirect costs = $240,000 + $30,000 = $270,000; total direct labor = $80,000 + $40,000 = $120,000; allocation rate = 270,000/120,000 = 2.25. Overhead allocated to internal product = 2.25 \u00D7 $40,000 = $90,000.',
        'Transfer price without new customer: TP_R per unit = 1.15 \u00D7 (60,000 + 40,000 + 120,000)/1,000 = 1.15 \u00D7 220 = $253.',
        'Transfer price with new customer: TP_A per unit = 1.15 \u00D7 (60,000 + 40,000 + 90,000)/1,000 = 1.15 \u00D7 190 = $218.50.',
        'Change in transfer price per unit: $218.50 \u2212 $253 = \u2212$34.50.',
        'Change in internal revenue: \u2212$34.50 \u00D7 1,000 = \u2212$34,500.',
        'Direct gain from new order: $16,000.',
        'Net effect on HOT profit: \u2212$34,500 + $16,000 = \u2212$18,500.',
        'HOT would not accept the order because it reduces divisional profit.',
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
        'There is a lack of goal congruence: the HOT division might not accept the order while accepting is in the best interest of the company.',
        'The root problem is that accepting the new customer changes the allocation of indirect costs and thus affects the transfer price on internal sales.',
        'Fix 1: Define a fixed allocation of indirect costs, e.g., compute the allocation rate based on maximum capacity rather than actual usage, so it does not change when new orders are accepted.',
        'Fix 2: Define transfer prices based on a standard set at the beginning of the year that is not subject to variations driven by changes in production during the year.',
        'Fix 3: Measure the consumption of variable overhead by client rather than allocating it.',
        'Fix 4: Base managerial compensation on corporate profits instead of divisional profits.',
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
