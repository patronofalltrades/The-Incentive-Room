import type { Simulation } from './artisanGardeners'

export const DIME_LURBENTS: Simulation = {
  id: 'dime-lurbents',
  title: 'Dime Lurbents Corp',
  caseScenario: [
    'Dime Lurbents Corp is a huge manufacturer of cars, busses, trucks, and motorbikes. It operates with a decentralized structure and treats every manufacturing division as a separate profit center. Each division manager has been delegated full authority on all decisions (including pricing) involved in the sale of that division\'s output, either to other divisions or to other automotive companies.',
    'The "truck engine plastic parts" (TEPP) and "truck engine final assembly" (TEFA) division are currently having a dispute over transfer pricing. In the past, TEFA has always purchased a particular plastic part from TEPP. However, recently TEPP has informed that it is going to charge TEFA $150 for that plastic part. The TEFA manager can purchase the same part in the open market for $135 and has decided to source from an outside supplier.',
    'TEPP insists it has no choice but to increase the price because it has recently installed highly specialized equipment and needs to recover its investment by charging a price that covers all production costs.',
  ],
  tableData: {
    headers: ['', 'Amount'],
    rows: [
      ["TEFA's annual purchase volume", '1,000 units'],
      ["TEPP's variable costs per unit", '$120'],
      ["TEPP's fixed cost per unit", '$20'],
      ['Note', 'Fixed costs include the depreciation of the equipment'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Company-Wide Relevance Analysis',
      context:
        'Assume that there are no alternative uses for TEPP\'s new equipment. Analyze whether Dime Lurbents as a whole benefits if TEFA purchases the part from outside suppliers for $135 per unit.',
    },
    {
      partLabel: 'Part 2 \u2014 Transfer Price Range',
      context:
        'Determine the minimum and maximum transfer prices so that the two division managers always act in the best interest of Dime Lurbents when acting in the best interest of their divisions.',
    },
    {
      partLabel: 'Part 3 \u2014 Goal Congruence',
      context:
        'Assess whether there is a goal congruence problem and how to fix it.',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Company-Wide Relevance Analysis',
      questionTitle: 'Q1: Should TEFA buy from outside suppliers?',
      question:
        'Assume that there are no alternative uses for TEPP\'s new equipment. Will Dime Lurbents as a whole benefit if TEFA purchases the part from outside suppliers for $135 per unit?',
      formulaTex:
        '\\Delta_{\\text{company}} = -(135 - 120) \\times 1{,}000 = -\\$15{,}000',
      formulaLegend:
        'If TEFA buys externally, the company loses $15 per unit (pays $135 externally vs. $120 variable cost internally) across 1,000 units',
      approach: [
        'If TEFA purchases internally, Dime Lurbents incurs variable cost of $120 \u00D7 1,000 = $120,000.',
        'If TEFA purchases externally, Dime Lurbents pays $135 \u00D7 1,000 = $135,000.',
        'The fixed costs of TEPP ($20 \u00D7 1,000 = $20,000) are sunk and incurred regardless.',
        'Difference: buying externally costs the company $15,000 more.',
      ],
      answer:
        'No. The company as a whole is better off if TEFA purchases the part from TEPP rather than from outside suppliers. Buying externally costs $15,000 more.',
      keyTakeaway:
        'When there is no alternative use for internal capacity, fixed costs are irrelevant. Only the variable cost ($120) matters for the internal supply decision.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 2 \u2014 Transfer Price Range',
      questionTitle: 'Q2: Minimum and maximum transfer prices',
      question:
        'What are the minimum and maximum transfer prices so that the two division managers always act in the best interest of Dime Lurbents when acting in the best interest of their divisions?',
      formulaTex:
        'TP > 120 \\quad \\text{(TEPP gains)} \\quad \\text{and} \\quad TP < 135 \\quad \\text{(TEFA gains)}',
      formulaLegend:
        'TEPP needs TP > variable cost ($120) to benefit; TEFA needs TP < external price ($135) to prefer internal sourcing',
      approach: [
        'TEPP perspective: Revenue = TP \u00D7 1,000; Variable cost = $120 \u00D7 1,000. TEPP gains if (TP \u2212 120) \u00D7 1,000 > 0, so TP > $120.',
        'TEFA perspective: Internal cost = TP \u00D7 1,000; External cost = $135 \u00D7 1,000. TEFA gains if (\u2212TP + 135) \u00D7 1,000 > 0, so TP < $135.',
        'Thus, the range is $120 < TP < $135.',
      ],
      answer:
        'Minimum transfer price: $120. Maximum transfer price: $135.',
      keyTakeaway:
        'The transfer price must lie between the seller\'s variable cost and the buyer\'s external opportunity price.',
    },
    // ===== Q3 =====
    {
      id: 'q3',
      partLabel: 'Part 3 \u2014 Goal Congruence',
      questionTitle: 'Q3: Is there a goal congruence problem? How to fix it?',
      question:
        'Is there a goal congruence problem? How would you fix it?',
      approach: [
        'At TP = $150, there is a goal congruence problem: while it is in the best interest of the company that TEFA purchases from TEPP, TEFA would not be willing to do so and instead would resort to outside suppliers.',
        'The root of the problem is that TEPP invested in new equipment without considering the market (TEFA\'s outside opportunities). Given that this is a relation-specific investment, TEPP should have consulted TEFA.',
        'Since divisions have discretion to set prices, they can negotiate the transfer price. Given that the equipment investment is a sunk cost, TEPP will probably accept a price of $135 (unless they can sell externally at $150).',
        'Another possibility: headquarters could set a corporate policy dictating that internal transfers be executed at market prices or at full manufacturing cost plus a mark-up (e.g., 10%).',
      ],
      answer:
        'Yes, there is a goal congruence problem at TP = $150. Solutions include letting divisions negotiate the price (TEPP would likely accept $135), or having headquarters set a policy based on market prices or cost-plus markup.',
      keyTakeaway:
        'Relation-specific investments can create goal congruence problems if the investing division does not consult the buying division about external alternatives before committing.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Transfer pricing',
      'Relevance analysis',
      'Goal congruence',
      'Sunk cost',
      'Negotiated transfer prices',
    ],
    keyTheme:
      'When internal capacity has no alternative use, the transfer price should be set between the seller\'s variable cost and the buyer\'s external market price to achieve goal congruence.',
  },
}
