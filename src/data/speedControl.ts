import type { Simulation } from './artisanGardeners'

export const SPEED_CONTROL: Simulation = {
  id: 'speed-control',
  title: 'Speed & Control',
  caseScenario: [
    'Speed & Control (SC) is a multinational single-product company operating in 50 countries. In RemoteLand, SC has two regional divisions, North and South. 2015 is the last year of operations in RemoteLand \u2014 all employees will be laid off (at no redundancy costs) and all assets disposed of (at zero liquidation value) at year end.',
    'Divisional managers receive a fixed salary of \u20AC100,000 plus a bonus based on residual income (RI). RI = Operating Profit \u2212 r \u00D7 Divisional Assets, where r = 10%. The bonus is 10% of the positive difference between actual and budgeted RI (zero if actual RI < budgeted RI).',
    'In early January 2015, a commercial treaty causes an increase in North\'s demand from 500,000 to 700,000 units. North is at full capacity (500,000). Two alternatives exist: (1) expand North\'s capacity by investing $2,000,000 in fixed assets, or (2) produce the 200,000 units at South (which has idle capacity) at a transfer price of variable cost + 30% markup, with $1,200,000 in maintenance expenses and $2/unit shipping.',
    'Both alternatives require $1,500,000 in additional NFO and 15 additional workers in the producing division. Average salary: $30,000 (North) or $20,000 (South).',
  ],
  tableData: {
    headers: ['(in thousands)', 'North', 'South'],
    rows: [
      ['Volume', '500', '200'],
      ['Maximum production capacity', '500', '500'],
      ['Revenues', '$12,000', '$4,800'],
      ['Variable manufacturing costs', '$6,000', '$2,400'],
      ['Fixed manufacturing costs', '$4,000', '$2,000'],
      ['SG&A expenses', '$1,000', '$1,000'],
      ['Fixed corporate overhead', '$200', '$200'],
      ['Divisional operating profit', '$800', '\u2212$800'],
      ['Divisional operating assets', '$1,600', '$1,200'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 CEO Perspective',
      context:
        'From Martin\'s (CEO) perspective, should SC produce the additional 200,000 units? If yes, in which division?',
    },
    {
      partLabel: 'Part 2 \u2014 North Division Decision',
      context:
        'Determine what the manager of the North Division will decide, given the bonus structure based on RI.',
    },
    {
      partLabel: 'Part 3 \u2014 South Division Decision',
      context:
        'Determine what the manager of the South Division will decide.',
    },
    {
      partLabel: 'Part 4 \u2014 Suggestions for Martin',
      context:
        'Provide comprehensive suggestions for Martin to resolve the situation. Make at least three qualitatively different suggestions.',
    },
    {
      partLabel: 'Part 5 \u2014 New Treaty Scenario',
      context:
        'A second commercial treaty increases South\'s demand by 50%. Would this change the recommendation?',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 CEO Perspective',
      questionTitle: 'Q1: Should SC produce the additional 200,000 units? Where?',
      question:
        'From the point of view of Martin, the CEO of SC, should the company produce the additional 200,000 units to meet increased demand? If yes, in which regional division should they be produced?',
      formulaTex:
        '\\text{North}: -200; \\quad \\text{South}: 350 \\quad (\\$\'000)',
      formulaLegend:
        'Price = $12,000k/500k = $24/unit; Variable cost = $6,000k/500k = $12/unit; TP = 1.3 \u00D7 $12 = $15.60',
      approach: [
        'Step 1: Determine the relevant costs and revenues. From the CEO\'s perspective, the transfer price is irrelevant (it is an internal accounting entry). Only real cash flows matter: revenue from selling the 200k units, variable production costs, additional labor, and any investment or maintenance costs.',
        'Step 2: Derive per-unit figures. Price per unit = $12,000k / 500k = $24. Variable cost per unit = $6,000k / 500k = $12.',
        'Step 3: Evaluate producing at North. Revenue = $24 \u00D7 200k = $4,800k. Costs: variable manufacturing = $12 \u00D7 200k = $2,400k; labor = 15 \u00D7 $30k = $450k; fixed asset investment = $2,000k (written off at year-end with zero liquidation value); financing of NFO = 10% \u00D7 $1,500k = $150k. Net = $4,800k \u2212 $2,400k \u2212 $450k \u2212 $2,000k \u2212 $150k = \u2212$200k. This destroys value.',
        'Step 4: Evaluate producing at South. Revenue = $4,800k (same). Costs: variable manufacturing = $2,400k; labor = 15 \u00D7 $20k = $300k (cheaper labor); maintenance = $1,200k; shipping = $2 \u00D7 200k = $400k; financing of NFO = $150k. Net = $4,800k \u2212 $2,400k \u2212 $300k \u2212 $1,200k \u2212 $400k \u2212 $150k = +$350k.',
        'Step 5: Compare alternatives. South (+$350k) is clearly better than North (\u2212$200k). The key difference: South avoids the $2M fixed asset investment (which would be written off at year-end) and benefits from lower labor costs ($20k vs. $30k).',
      ],
      answer:
        'Yes, SC should produce the additional units. They should be produced at the South Division ($350,000 profit vs. \u2212$200,000 loss if produced at North).',
      keyTakeaway:
        'Producing at South avoids the $2,000,000 fixed asset investment (which has zero liquidation value at year end) and benefits from lower labor costs.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 2 \u2014 North Division Decision',
      questionTitle: 'Q2: What will the North Division manager decide?',
      question: 'What will the manager of the North Division decide?',
      formulaTex:
        '\\Delta RI_{North}^{\\text{at North}} = -50 - 0.1 \\times 3{,}500 = -400; \\quad \\Delta RI_{North}^{\\text{at South}} = 1{,}280',
      formulaLegend:
        'At North: operating profit change = \u2212$50k, asset increase = $3,500k (investment + NFO). At South: OP change = $4,800k \u2212 $15.6\u00D7200k \u2212 $400k = +$1,280k, no asset change.',
      approach: [
        'Step 1: Determine the transfer price. TP = variable cost + 30% markup = $12 \u00D7 1.3 = $15.60 per unit. This is what North would pay South for each unit produced there.',
        'Step 2: Evaluate North\'s RI if produced at North. Change in OP = $4,800k (revenue) \u2212 $2,400k (variable) \u2212 $450k (labor) \u2212 $2,000k (depreciation of investment) = \u2212$50k. Change in assets = $2,000k (investment) + $1,500k (NFO) = $3,500k. Change in RI = \u2212$50k \u2212 10% \u00D7 $3,500k = \u2212$400k. North\'s RI drops, so no bonus.',
        'Step 3: Evaluate North\'s RI if produced at South. North records the revenue and pays the TP plus shipping. Change in OP = $4,800k \u2212 ($15.60 \u00D7 200k) \u2212 $400k (shipping) = $4,800k \u2212 $3,120k \u2212 $400k = +$1,280k. No asset change for North. Change in RI = +$1,280k. Bonus = 10% \u00D7 $1,280k = $128k.',
        'Step 4: Conclude. North\'s manager strongly prefers production at South (bonus of $128k vs. no bonus). This aligns with the CEO\'s preference.',
      ],
      answer:
        'The North manager prefers production at South (RI increase of $1,280k, bonus = $128k) over production at North (RI decrease of $400k, bonus = $0).',
      keyTakeaway:
        'The investment in fixed assets at North would increase the capital charge beyond the incremental operating profit, destroying RI.',
    },
    // ===== Q3 =====
    {
      id: 'q3',
      partLabel: 'Part 3 \u2014 South Division Decision',
      questionTitle: 'Q3: What will the South Division manager decide?',
      question: 'What will the manager of the South Division decide?',
      formulaTex:
        '\\Delta RI_{South} = -780 - 0.1 \\times 1{,}500 = -930 \\quad (\\$\'000)',
      formulaLegend:
        'South OP change: $15.60\u00D7200k \u2212 $12\u00D7200k \u2212 $300k(labor) \u2212 $1,200k(maintenance) = \u2212$780k. Asset increase: $1,500k NFO.',
      approach: [
        'Step 1: Compute South\'s revenue from the transfer. South receives the transfer price: $15.60 \u00D7 200k = $3,120k.',
        'Step 2: Compute South\'s incremental costs. Variable manufacturing = $12 \u00D7 200k = $2,400k. Additional labor = 15 \u00D7 $20k = $300k. Maintenance = $1,200k. Total costs = $3,900k.',
        'Step 3: Compute change in South\'s operating profit. \u0394OP = $3,120k \u2212 $3,900k = \u2212$780k. The transfer price does not cover South\'s full incremental costs because the 30% markup on variable cost alone is insufficient to cover the additional fixed costs (labor + maintenance).',
        'Step 4: Compute change in South\'s RI. Additional assets = $1,500k (NFO). \u0394RI = \u2212$780k \u2212 10% \u00D7 $1,500k = \u2212$930k. South\'s RI worsens significantly.',
        'Step 5: Assess South\'s incentives. South already earns no bonus (budgeted RI is negative at \u2212$800k \u2212 10% \u00D7 $1,200k = \u2212$920k). Accepting makes RI even worse. The manager has no financial incentive to accept and every reason to refuse \u2014 more work, worse performance metrics, no bonus.',
      ],
      answer:
        'The South manager gets no bonus either way. She could reject the offer because accepting worsens RI by $930,000, making her look bad and generating work with no compensation.',
      keyTakeaway:
        'There is a goal congruence problem: Martin wants South to produce, but South\'s manager has no incentive to accept because the transfer price does not cover full incremental costs plus the capital charge.',
    },
    // ===== Q4 =====
    {
      id: 'q4',
      partLabel: 'Part 4 \u2014 Suggestions for Martin',
      questionTitle: 'Q4: Suggestions to resolve the situation',
      question:
        'What do you suggest Martin do in this situation? Be as comprehensive, concise and concrete as possible. Make at least three qualitatively different suggestions.',
      approach: [
        'Step 1: Adjust the transfer pricing policy. Increase the markup or include fixed costs (labor, maintenance) in the cost base so the transfer price covers South\'s full incremental costs. The minimum viable TP for South is: ($2,400k + $300k + $1,200k + $150k) / 200k = $20.25/unit. North can afford up to ($4,800k \u2212 $400k) / 200k = $22/unit. Any TP between $20.25 and $22 makes both divisions better off.',
        'Step 2: Allow direct negotiation. Since this is a one-time arrangement (last year of operations), let the two division managers negotiate the transfer price directly within the feasible range. This respects divisional autonomy and leverages local information.',
        'Step 3: Create a special compensation arrangement. Define a separate bonus for the 200,000 units that splits the total surplus ($350k) between both divisions. For example, each manager gets a percentage of the joint gain, incentivizing cooperation.',
        'Step 4: Note the trade-offs. Each solution has drawbacks: adjusting the TP policy may set precedents; negotiation has transaction costs; special arrangements add complexity. The choice depends on the organization\'s culture and the CEO\'s management style.',
      ],
      answer:
        'Three suggestions: (1) Increase the transfer price markup or cost base; (2) Let divisions negotiate a one-time transfer price; (3) Create a separate bonus arrangement splitting the surplus from the 200,000 units between both divisions.',
      keyTakeaway:
        'Multiple levers exist to resolve goal congruence problems: transfer pricing adjustments, negotiation, and special compensation arrangements.',
    },
    // ===== Q5 =====
    {
      id: 'q5',
      partLabel: 'Part 5 \u2014 New Treaty Scenario',
      questionTitle: 'Q5: Does the second treaty change the recommendation?',
      question:
        'A second commercial treaty increases South\'s demand by 50% (100,000 additional units). Would this change the recommendation regarding how to deal with the North\'s demand increase?',
      approach: [
        'Step 1: Compute South\'s new demand. South\'s current budgeted volume = 200,000 units. A 50% increase adds 100,000 units, bringing South to 300,000 units of own demand.',
        'Step 2: Check capacity. South\'s maximum capacity = 500,000 units. With its own demand (300,000) plus North\'s request (200,000) = 500,000 total. This exactly equals South\'s capacity.',
        'Step 3: Assess opportunity cost. Since South can accommodate both its own increased demand and North\'s 200,000 units without exceeding capacity, there is no opportunity cost of producing for North. South\'s idle capacity (previously 300,000 unused units) is simply being utilized more fully.',
        'Step 4: Conclude. The recommendation remains unchanged: produce at South. The second treaty does not create a conflict because South still has enough capacity. However, if South\'s demand increased further (beyond 300,000 of its own), the opportunity cost analysis would change.',
      ],
      answer:
        'No change. South still has sufficient capacity (500,000) to produce its own increased demand (300,000) plus the 200,000 units for North (total 500,000). The recommendation remains: produce at South.',
      keyTakeaway:
        'As long as the total demand does not exceed South\'s capacity, the recommendation to use idle capacity remains valid.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Residual income and bonus computation',
      'Transfer pricing with idle capacity',
      'Relevance analysis (cash flow perspective)',
      'Goal congruence between divisions',
      'Capacity utilization decisions',
      'One-time vs. permanent arrangements',
    ],
    keyTheme:
      'When a cost-plus transfer price does not cover the producing division\'s full incremental costs and capital charge, goal congruence breaks down, requiring adjustments to the transfer price, negotiation, or special compensation arrangements.',
  },
}
