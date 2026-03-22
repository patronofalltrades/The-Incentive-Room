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
        ' Apply the relevance principle. Only costs that change with the decision are relevant. TEPP\'s fixed costs ($20/unit = $20,000 total) are sunk \u2014 the specialized equipment is already installed and has no alternative use. These costs will be incurred regardless of whether TEFA buys from TEPP or not.',
        ' Compare the relevant alternatives. If TEFA buys internally: Dime Lurbents incurs TEPP\'s variable cost = $120 \u00D7 1,000 = $120,000. If TEFA buys externally: Dime Lurbents pays the external supplier $135 \u00D7 1,000 = $135,000 (and still pays TEPP\'s fixed costs of $20,000 regardless).',
        ' Compute the company-wide impact. Buying externally costs $135,000 vs. $120,000 internally \u2014 a net loss of $15,000 for the company. The fixed costs cancel out because they are incurred either way.',
        ' Conclude. The company is worse off if TEFA sources externally. Internal sourcing saves $15/unit \u00D7 1,000 units = $15,000. The key insight: TEPP\'s fixed costs are irrelevant to this decision because the equipment has no alternative use.',
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
        ' Determine the seller\'s floor price. TEPP (the seller) will only sell internally if the transfer price exceeds its incremental cost. Since fixed costs are sunk, TEPP\'s incremental cost is just the variable cost: $120/unit. Additionally, since there is no alternative use for the equipment, there is no opportunity cost. Seller\'s floor = $120.',
        ' Determine the buyer\'s ceiling price. TEFA (the buyer) will only buy internally if the transfer price is below its best external alternative: $135/unit. Buyer\'s ceiling = $135.',
        ' Establish the feasible range. For goal congruence, TP must satisfy both conditions: TP > $120 (TEPP earns a contribution) AND TP < $135 (TEFA prefers internal over external). The goal-congruent range is $120 < TP < $135.',
        ' Interpret the range. Any TP in this range makes both divisions better off from internal trade, which aligns with the company\'s interest. The exact TP determines how the $15/unit surplus is split between the two divisions.',
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
        ' Identify the problem. At TP = $150 (TEPP\'s proposed price), TEFA would source externally at $135 because $150 > $135. But we showed in Q1 that internal sourcing saves the company $15,000. There is a goal congruence failure: TEFA\'s divisionally rational decision hurts the company.',
        ' Diagnose the root cause. TEPP set its price at full cost ($120 + $20 = $140) plus a markup, yielding $150. The problem is that TEPP invested in specialized equipment without considering TEFA\'s external alternatives. This is a relation-specific investment \u2014 the equipment only produces parts for TEFA \u2014 and TEPP is now trying to recover sunk costs through the transfer price.',
        ' Propose solutions. (a) Negotiation: since divisions have pricing discretion, they can negotiate. TEPP\'s rational fallback is any price above $120 (better than idle equipment). TEFA\'s ceiling is $135. A negotiated price between $120 and $135 would resolve the dispute. (b) Corporate policy: headquarters could mandate that internal transfers occur at market price ($135) or at a cost-plus price within the $120\u2013$135 range. (c) Prospective fix: before making relation-specific investments, divisions should negotiate transfer terms in advance to avoid hold-up problems.',
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
