import type { Simulation } from './artisanGardeners'

export const SPECIAL_COMPONENTS: Simulation = {
  id: 'special-components',
  title: 'Special Components (SC)',
  caseScenario: [
    'Special Components (SC) is the sole manufacturer of a specialized industrial product with headquarters in San Jose, California, and two geographical divisions: the West Coast (WCO) Division in California and the East Coast (ECO) Division in Massachusetts.',
    'The two divisions are virtually identical: both have their own production plant and marketing department, produce the same product, have identical cost structures, and have the same production capacity of 300,000 units per year. However, ECO will operate at full capacity in 2014 while WCO expects production of only 200,000 units.',
    'The product\'s standard price is $100 per unit. Variable manufacturing cost is $33/unit and fixed divisional manufacturing overhead is $30/unit. Fixed divisional manufacturing OH includes $3,000,000 for production labor (100 workers at $30,000 each) and $6,000,000 for equipment/facilities rental.',
    'Headquarters incurs fixed corporate overhead of $1,200,000, allocated to divisions based on actual total divisional labor costs. Financing costs are 8% on investments and NFO.',
    'Divisional income = Revenue \u2212 Variable costs \u2212 Fixed divisional manufacturing costs \u2212 Non-production costs \u2212 Allocated corporate overhead. The bonus is based on divisional income.',
  ],
  tableData: {
    headers: ['', 'WCO', 'ECO'],
    rows: [
      ['Budgeted production (units)', '200,000', '300,000'],
      ['Production capacity (units)', '300,000', '300,000'],
      ['Standard price per unit', '$100', '$100'],
      ['Variable manufacturing cost/unit', '$33', '$33'],
      ['Fixed divisional manufacturing OH/unit', '$30', '$30'],
      ['Full standard manufacturing cost/unit', '$63', '$63'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part A \u2014 Company Perspective',
      context:
        'ECO receives a one-time order from Newton Inc. for 10,000 units at $100 per unit. ECO is at full capacity and cannot expand. WCO has idle capacity and could produce the units. Transfer price = full standard manufacturing cost plus 50% mark-up = $94.50. WCO would need to hire 4 additional workers at $30,000 each, finance $100,000 NFO at 8%, and pay $3,000 shipping to ECO.',
      tableData: {
        title: 'Newton Order Details',
        headers: ['', 'Amount'],
        rows: [
          ['Order size', '10,000 units'],
          ['Price per unit', '$100'],
          ['Transfer price (full cost + 50%)', '$94.50'],
          ['Additional WCO workers', '4 at $30,000 each'],
          ['Additional NFO', '$100,000 at 8%'],
          ['Shipping cost (WCO to ECO)', '$3,000'],
        ],
      },
    },
    {
      partLabel: 'Part A \u2014 Divisional Perspective',
      context:
        'Analyze the effect of accepting Newton\'s order on the divisional incomes of both WCO and ECO. Note that accepting the order changes the allocation of corporate overhead because the allocation is based on actual divisional labor costs.',
    },
    {
      partLabel: 'Part A \u2014 Goal Congruence',
      context:
        'Determine whether the transfer price policy achieves goal congruence: do the divisional managers make the decision that is in the best interest of shareholders?',
    },
    {
      partLabel: 'Part B \u2014 ECO Self-Production',
      context:
        'ECO could alternatively produce the 10,000 units itself by renting a machine for $16,000 and hiring 8 workers for a year. NFO and interest costs are the same. WCO would not incur any costs. Compare producing at WCO vs. ECO from the company perspective.',
    },
    {
      partLabel: 'Part B \u2014 Cathy\'s Decision',
      context:
        'Cathy (ECO manager) cares only about her divisional income and bonus. Determine what Cathy will decide regarding the Newton order.',
    },
    {
      partLabel: 'Part B \u2014 Problem Diagnosis',
      context:
        'Assess whether there is a problem and what conclusions can be drawn from Parts A and B.',
    },
    {
      partLabel: 'Part B \u2014 System Improvements',
      context:
        'Propose changes to the management control/organizational governance system at SC.',
    },
  ],
  steps: [
    // ===== Part A: Q1 =====
    {
      id: 'q1',
      partLabel: 'Part A \u2014 Company Perspective',
      questionTitle: 'Q1: Effect on SC\'s profit',
      question:
        'Is accepting Newton\'s order in the best interest of SC\'s shareholders? Compute the effect of accepting the order on SC\'s profit.',
      formulaTex:
        '\\Delta\\pi_{SC} = 100 \\times 10 - 33 \\times 10 - 3 - 30 \\times 4 - 0.08 \\times 100 = 539 \\quad (\\$\'000)',
      formulaLegend:
        'Revenue ($1,000k) \u2212 variable cost ($330k) \u2212 shipping ($3k) \u2212 labor ($120k) \u2212 financing ($8k) = $539k',
      approach: [
        'Revenue: $100 \u00D7 10,000 = $1,000,000.',
        'Variable manufacturing cost: $33 \u00D7 10,000 = $330,000.',
        'Shipping: $3,000.',
        'Additional labor (4 workers): 4 \u00D7 $30,000 = $120,000.',
        'Financing cost of NFO: 0.08 \u00D7 $100,000 = $8,000.',
        'Total effect: $1,000,000 \u2212 $330,000 \u2212 $3,000 \u2212 $120,000 \u2212 $8,000 = $539,000.',
        'Accepting the order is in the best interest of shareholders.',
      ],
      answer:
        'Yes. The effect on SC\'s profit is +$539,000. Accepting the order is in the best interest of shareholders.',
      keyTakeaway:
        'From the company-wide perspective, the order generates a large positive margin because WCO has idle capacity.',
    },
    // ===== Part A: Q2 =====
    {
      id: 'q2',
      partLabel: 'Part A \u2014 Divisional Perspective',
      questionTitle: 'Q2: Effect on divisional incomes',
      question:
        'Is accepting Newton\'s order in the best interest of the ECO and WCO divisions and their managers? Compute the effect of accepting this order on the divisional incomes of the two divisions.',
      formulaTex:
        '\\Delta DI_{WCO} = 945 - 330 - 3 - 120 - 8 - 12 = 472 \\quad (\\$\'000)',
      formulaLegend:
        'WCO: TP revenue ($945k) \u2212 costs \u2212 corporate OH reallocation ($12k). ECO: Revenue ($1,000k) \u2212 TP cost ($945k) + OH saving ($12k) = $67k',
      approach: [
        'Transfer price = 1.5 \u00D7 $63 = $94.50 per unit.',
        'WCO: Revenue = $94.50 \u00D7 10,000 = $945,000; Variable cost = $330,000; Shipping = $3,000; Labor = $120,000; Financing = $8,000.',
        'Corporate OH reallocation: Without Newton: $1,200,000 allocated equally ($600,000 each) since labor costs are equal ($3M each). With Newton: rate = $1,200,000/$6,120,000 = 0.196; WCO gets 0.196 \u00D7 $3,120,000 = $612,000 (+$12,000); ECO gets 0.196 \u00D7 $3,000,000 = $588,000 (\u2212$12,000).',
        'WCO divisional income effect = $945,000 \u2212 $330,000 \u2212 $3,000 \u2212 $120,000 \u2212 $8,000 \u2212 $12,000 = +$472,000.',
        'ECO divisional income effect = $1,000,000 \u2212 $945,000 + $12,000 = +$67,000.',
        'Both divisions benefit from accepting the order.',
      ],
      answer:
        'Yes. WCO\'s divisional income increases by $472,000 and ECO\'s increases by $67,000. Both divisions benefit.',
      keyTakeaway:
        'The corporate OH reallocation shifts $12,000 from ECO to WCO when Newton\'s order is accepted, because WCO\'s labor costs increase.',
    },
    // ===== Part A: Q3 =====
    {
      id: 'q3',
      partLabel: 'Part A \u2014 Goal Congruence',
      questionTitle: 'Q3: Does the transfer price policy achieve goal congruence?',
      question:
        'Does the transfer price policy achieve goal congruence? That is, does it achieve that the divisional managers make the decision that is in the best interest of the shareholders as identified in part 1?',
      approach: [
        'Goal congruence means that the decision optimal for each division is also optimal for the company.',
        'Both divisions benefit from accepting (WCO: +$472k, ECO: +$67k), and SC benefits (+$539k).',
        'In this specific case, there is goal congruence.',
        'However, the fact that there is goal congruence in this case does not necessarily mean there is always goal congruence under these accounting rules.',
      ],
      answer:
        'Yes, in this specific case. Both divisions want to accept the order, which is also optimal for SC. However, this does not guarantee goal congruence in all cases under these rules.',
      keyTakeaway:
        'Goal congruence should be evaluated case by case. A policy that works in one scenario may fail in another.',
    },
    // ===== Part B: Q4 =====
    {
      id: 'q4',
      partLabel: 'Part B \u2014 ECO Self-Production',
      questionTitle: 'Q4: Produce at WCO or ECO?',
      question:
        'From the perspective of the company as a whole, is it better to produce the units for Newton at WCO or at ECO?',
      formulaTex:
        '\\Delta_{WCO \\to ECO} = -3 + 120 + 16 = 133 \\quad (\\$\'000) \\quad \\text{in favor of WCO}',
      formulaLegend:
        'Producing at ECO saves $3k shipping but costs $120k extra labor (8 vs. 4 workers) and $16k rent; net: WCO is $133k cheaper',
      approach: [
        'Revenue and variable manufacturing costs are the same in both cases.',
        'At WCO: Shipping $3k, Labor 4 \u00D7 $30k = $120k, Financing $8k.',
        'At ECO: Rent $16k, Labor 8 \u00D7 $30k = $240k, Financing $8k.',
        'Difference (WCO vs. ECO): \u2212$3k \u2212 $120k \u2212 $8k vs. \u2212$16k \u2212 $240k \u2212 $8k.',
        'WCO total: $131k; ECO total: $264k. WCO is cheaper by $133k.',
        'SC would prefer production at WCO (using existing idle capacity is more efficient).',
      ],
      answer:
        'Producing at WCO is better for SC by $133,000. It makes more sense to use WCO\'s existing idle capacity (4 workers) rather than rent new equipment and hire 8 workers at ECO.',
      keyTakeaway:
        'Utilizing existing idle capacity is generally more cost-effective than expanding capacity at a fully utilized facility.',
    },
    // ===== Part B: Q5 =====
    {
      id: 'q5',
      partLabel: 'Part B \u2014 Cathy\'s Decision',
      questionTitle: 'Q5: What will Cathy decide?',
      question:
        'Cathy cares only about the divisional income of her division and her bonus. What do you think Cathy will decide with respect to the Newton order? Compute the effect of accepting the order on ECO\'s divisional income.',
      formulaTex:
        '\\Delta DI_{ECO}^{\\text{self}} = 1{,}000 - 330 - 240 - 8 - 16 - 23 = 383 \\quad (\\$\'000)',
      formulaLegend:
        'ECO self-production: revenue $1,000k \u2212 variable cost $330k \u2212 labor $240k \u2212 financing $8k \u2212 rent $16k \u2212 OH reallocation $23k',
      approach: [
        'If ECO produces internally: revenue = $1,000k; variable cost = $330k; labor = 8 \u00D7 $30k = $240k; financing = $8k; rent = $16k.',
        'Corporate OH with ECO production: rate = $1,200k/$6,240k = 0.192; ECO gets 0.192 \u00D7 $3,240k = $623k (+$23k vs. baseline $600k); WCO gets 0.192 \u00D7 $3,000k = $577k (\u2212$23k).',
        'ECO divisional income if self-produced: $1,000k \u2212 $330k \u2212 $240k \u2212 $8k \u2212 $16k \u2212 $23k = +$383k.',
        'ECO divisional income if via WCO: +$67k (from Part A).',
        'Cathy prefers self-production ($383k > $67k) even though it is $133k worse for SC.',
      ],
      answer:
        'Cathy would choose to produce at ECO (divisional income +$383k) rather than source from WCO (+$67k), even though WCO production is better for SC by $133k.',
      keyTakeaway:
        'The transfer price policy shifts most of the value to WCO, giving ECO a strong incentive to self-produce even when that is suboptimal for the company.',
    },
    // ===== Part B: Q6 =====
    {
      id: 'q6',
      partLabel: 'Part B \u2014 Problem Diagnosis',
      questionTitle: 'Q6: Is there a problem?',
      question:
        'What do you conclude from your answers to parts A and B? Is there any problem?',
      approach: [
        'Yes, there is a problem. ECO might expand its own production capacity even though doing so is suboptimal for SC.',
        'The main issue is the transfer price policy that shifts almost all benefits of accepting Newton\'s order from ECO to WCO.',
        'ECO\'s incentive to self-produce undermines the efficient use of WCO\'s idle capacity.',
      ],
      answer:
        'Yes. The transfer price policy shifts most benefits to WCO, creating an incentive for ECO to self-produce at higher cost rather than use WCO\'s cheaper idle capacity.',
      keyTakeaway:
        'Transfer pricing can distort divisional incentives when the markup leaves the buying division with minimal margin.',
    },
    // ===== Part B: Q7 =====
    {
      id: 'q7',
      partLabel: 'Part B \u2014 System Improvements',
      questionTitle: 'Q7: Proposed system changes',
      question:
        'Given your previous answers, would you like to make any changes to the management control/organizational governance system in place at SC?',
      approach: [
        'Transfer price: reduce the markup so ECO captures more of the value, reducing the incentive for suboptimal self-production.',
        'Performance measurement: measure divisional performance independent of the transfer to side-step the problem entirely.',
        'Bonus scheme: tie compensation to corporate profits so managers think of the company as a whole, not only their division.',
        'Allocation rule: allocate corporate overhead based on budgeted costs and/or capacity rather than actual costs to avoid erroneous fluctuations.',
      ],
      answer:
        'Proposals: (1) reduce the transfer price markup to let ECO capture more value, (2) use performance measures independent of the transfer, (3) tie bonuses to corporate profits, (4) allocate corporate OH based on budgeted costs or capacity rather than actual costs.',
      keyTakeaway:
        'Multiple levers (transfer pricing, performance measurement, incentive design, cost allocation) can be adjusted to improve goal congruence in a multi-divisional firm.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Transfer pricing with idle capacity',
      'Corporate overhead allocation',
      'Goal congruence analysis',
      'Make-vs-transfer decisions',
      'Divisional income computation',
      'Management control system design',
    ],
    keyTheme:
      'Cost-plus transfer pricing can distort divisional incentives, causing a buying division to self-produce at higher cost rather than use a selling division\'s idle capacity, highlighting the need for careful transfer price and incentive system design.',
  },
}
