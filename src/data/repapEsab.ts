import type { Simulation } from './artisanGardeners'

export const REPAP_ESAB: Simulation = {
  id: 'repap-esab',
  title: 'Repap Esab Company (REC)',
  caseScenario: [
    'Repap Esab Company (REC) is a vertically integrated producer of white paper, kraft paper, paperboard, and carton boxes. Production is done in two steps: the upstream division (Production) turns raw materials into "corrugating medium," and the downstream division (Assembly) transforms the intermediate product into the final product.',
    'Both divisions are profit centers with manager bonuses linked to Divisional Profit. Fixed costs are allocated based on maximum capacity. Corporate overhead is allocated at $100 per unit based on production volume. The cost of idle capacity does not affect bonuses.',
    'Divisions have full discretion over pricing, client selection, and supplier choice. Both sell to and buy from external markets. In March 2013, a client named Adam approaches the downstream division for 1,000 units of Carton 223-Z at $650 per unit. External suppliers quote $250 per unit for corrugating medium.',
  ],
  tableData: {
    headers: ['', 'Upstream (per unit)', 'Downstream (per unit)'],
    rows: [
      ['Direct variable labor cost', '$10', '$80'],
      ['Other direct variable cost', '$58', '$10'],
      ['Fixed labor cost', '$0', '$20'],
      ['Other divisional fixed cost', '$100', '$180'],
      ['Fixed corporate overhead', '$100', '$100'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part A \u2014 Accept or Reject',
      context:
        'Determine whether accepting Adam\'s order is in the best interest of REC\'s shareholders. Both divisions have idle capacity.',
    },
    {
      partLabel: 'Part A \u2014 Internal vs. External Sourcing',
      context:
        'Determine whether it is better for shareholders to produce the intermediate product internally or outsource it at $250 per unit.',
    },
    {
      partLabel: 'Part A \u2014 Transfer Price Policies',
      context:
        'Evaluate which transfer pricing policies (market price, variable cost, full cost, negotiated) achieve goal congruence.',
    },
    {
      partLabel: 'Part B \u2014 Capacity Constraint with Eve',
      context:
        'The upstream division is now at capacity. Producing for Adam means dropping Eve\'s order (2,000 units of corrugating medium at $270/unit; Eve insists on a single supplier). Determine which alternative maximizes company profits: (A) accept Adam and produce internally, (B) accept Adam and buy externally, or (C) reject Adam.',
    },
    {
      partLabel: 'Part B \u2014 Upstream Division Preference',
      context:
        'Assume transfer prices are set at full cost. Determine which client the upstream division will favor.',
    },
    {
      partLabel: 'Part B \u2014 Goal Congruent Transfer Price',
      context:
        'Propose a transfer pricing policy that achieves goal congruence in this scenario.',
    },
  ],
  steps: [
    // ===== Part A: Q1 =====
    {
      id: 'q1',
      partLabel: 'Part A \u2014 Accept or Reject',
      questionTitle: 'Q1: Should REC accept Adam\'s order?',
      question:
        'Is accepting the client order in the best interest of Repap Esab\'s shareholders?',
      formulaTex:
        '\\text{Accept internally}: 650 \\times 1{,}000 - 68 \\times 1{,}000 - 90 \\times 1{,}000 = 492{,}000',
      formulaLegend:
        'Upstream variable cost = $10 + $58 = $68; Downstream variable cost = $80 + $10 = $90; Revenue = $650/unit',
      approach: [
        'Step 1: Identify relevant costs. With idle capacity in both divisions, only variable costs are relevant \u2014 fixed costs and corporate overhead are incurred regardless of the decision. Upstream variable cost = $10 + $58 = $68/unit. Downstream variable cost = $80 + $10 = $90/unit.',
        'Step 2: Evaluate accepting and producing internally. Revenue = $650 \u00D7 1,000 = $650,000. Variable costs = ($68 + $90) \u00D7 1,000 = $158,000. Contribution = $650,000 \u2212 $158,000 = $492,000.',
        'Step 3: Evaluate accepting and outsourcing the intermediate. Revenue = $650,000. External purchase = $250 \u00D7 1,000 = $250,000. Downstream variable cost = $90,000. Contribution = $650,000 \u2212 $250,000 \u2212 $90,000 = $310,000.',
        'Step 4: Compare all options. Accept internally: +$492k. Accept with outsourcing: +$310k. Reject: $0. Accepting and producing internally is clearly the best option because the internal variable cost ($68) is far below the external price ($250).',
      ],
      answer:
        'Yes. Accepting Adam\'s order is in shareholders\' best interest. Best option: accept and produce internally ($492,000 > $310,000 > $0).',
      keyTakeaway:
        'With idle capacity, internal production is preferred because the variable cost ($68) is much lower than the external price ($250).',
    },
    // ===== Part A: Q2 =====
    {
      id: 'q2',
      partLabel: 'Part A \u2014 Internal vs. External Sourcing',
      questionTitle: 'Q2: Produce internally or outsource?',
      question:
        'What is in the best interest of shareholders: to produce the intermediate product internally or to outsource it?',
      approach: [
        'Step 1: Compare the two sourcing options. Internal production profit = $492,000 (from Q1). External sourcing profit = $310,000 (from Q1).',
        'Step 2: Compute the difference. Internal is better by $492,000 \u2212 $310,000 = $182,000. This equals the savings from producing at $68/unit internally vs. buying at $250/unit externally: ($250 \u2212 $68) \u00D7 1,000 = $182,000.',
        'Step 3: Explain why. The large gap between internal variable cost ($68) and external price ($250) makes internal sourcing strongly preferable. The external price reflects the supplier\'s own costs, margins, and fixed cost recovery, whereas internally REC only incurs its variable costs because fixed costs are already sunk.',
      ],
      answer:
        'Internal production is in shareholders\' best interest ($492,000 vs. $310,000).',
      keyTakeaway:
        'The large gap between internal variable cost ($68) and external price ($250) makes internal sourcing strongly preferable.',
    },
    // ===== Part A: Q3 =====
    {
      id: 'q3',
      partLabel: 'Part A \u2014 Transfer Price Policies',
      questionTitle: 'Q3: Which transfer pricing policies achieve goal congruence?',
      question:
        'Can any of the following transfer pricing policies achieve goal congruence: (a) market price ($250), (b) variable cost, (c) full cost, (d) negotiated?',
      formulaTex:
        '\\text{Upstream: } (TP - 268) \\times 1{,}000 \\quad \\text{Downstream: } (260 - TP) \\times 1{,}000',
      formulaLegend:
        'Upstream needs TP > 268 (variable + fixed + OH = 68 + 100 + 100); Downstream needs TP < 260 (650 \u2212 90 \u2212 200 \u2212 100). No TP satisfies both.',
      approach: [
        'Step 1: Determine each division\'s breakeven transfer price. Upstream divisional profit from internal trade = (TP \u2212 variable cost \u2212 fixed cost \u2212 corporate OH) \u00D7 1,000 = (TP \u2212 $68 \u2212 $100 \u2212 $100) \u00D7 1,000 = (TP \u2212 $268) \u00D7 1,000. Upstream needs TP > $268 to show positive divisional profit.',
        'Step 2: Downstream divisional profit = ($650 \u2212 TP \u2212 $90 \u2212 $200 \u2212 $100) \u00D7 1,000 = ($260 \u2212 TP) \u00D7 1,000. Downstream needs TP < $260 to show positive divisional profit.',
        'Step 3: Check for a feasible range. For both to benefit: TP > $268 AND TP < $260. This is mathematically impossible \u2014 the ranges do not overlap.',
        'Step 4: Diagnose the root cause. The combined divisional profit is always negative regardless of TP because the corporate OH charge ($100/unit per division = $200 total) exceeds the margin available. The company earns +$492k, but the accounting system assigns $200k in OH that makes the sum of divisional profits negative.',
        'Step 5: Conclude. None of the four policies achieves goal congruence. The volume-based corporate overhead allocation destroys the incentive for internal trade by imposing $200/unit in overhead that the divisions cannot recover.',
      ],
      answer:
        'None of the four policies achieves goal congruence. No TP exists where both divisions gain from the internal trade, because the $200/unit combined corporate OH charge exceeds the margin available for distribution.',
      keyTakeaway:
        'Volume-based corporate overhead allocation can destroy goal congruence by making it impossible for any transfer price to benefit both divisions simultaneously.',
    },
    // ===== Part B: Q4 =====
    {
      id: 'q4',
      partLabel: 'Part B \u2014 Capacity Constraint with Eve',
      questionTitle: 'Q4: Which alternative maximizes company profits?',
      question:
        'Which alternative maximizes company profits: (A) accept Adam\'s order and produce internally, (B) accept Adam\'s order and buy externally, or (C) reject Adam\'s order? Consider that accepting option A means dropping Eve\'s order.',
      formulaTex:
        'A: 492{,}000; \\quad B: 310{,}000 + 404{,}000 = 714{,}000; \\quad C: 404{,}000',
      formulaLegend:
        'Eve\'s profit = (270 \u2212 68) \u00D7 2,000 = $404,000. Option B allows serving both Adam (externally sourced) and Eve.',
      approach: [
        'Step 1: Compute Eve\'s contribution. Eve offers $270/unit for 2,000 units of corrugating medium. Variable cost = $68/unit. Contribution = ($270 \u2212 $68) \u00D7 2,000 = $404,000.',
        'Step 2: Evaluate Option A (Adam internal, drop Eve). Adam contribution = $492,000. Eve contribution = $0 (dropped). Total = $492,000.',
        'Step 3: Evaluate Option B (Adam external, keep Eve). Adam contribution with external sourcing = $310,000. Eve contribution = $404,000. Total = $714,000. This option is possible because buying the intermediate externally frees upstream capacity for Eve.',
        'Step 4: Evaluate Option C (reject Adam, keep Eve). Eve contribution = $404,000. Total = $404,000.',
        'Step 5: Compare. Option B ($714k) > Option A ($492k) > Option C ($404k). The key insight: when upstream is at capacity, the opportunity cost of producing Adam\'s intermediate internally is the forgone profit from Eve. Option B avoids this opportunity cost by outsourcing Adam\'s intermediate.',
      ],
      answer:
        'Option B: Accept Adam\'s order and buy corrugating medium externally ($714,000). This allows serving both Adam and Eve.',
      keyTakeaway:
        'When the upstream division is at capacity, the opportunity cost of internal production includes the forgone profit from Eve\'s order.',
    },
    // ===== Part B: Q5 =====
    {
      id: 'q5',
      partLabel: 'Part B \u2014 Upstream Division Preference',
      questionTitle: 'Q5: Which client will the upstream division favor at full cost?',
      question:
        'Assume that transfer prices are set at full cost. Which of the two clients will the upstream division favor?',
      formulaTex:
        'TP = 268; \\quad \\text{Adam: } (268 - 268) \\times 1{,}000 = 0; \\quad \\text{Eve: } (270 - 268) \\times 2{,}000 = 4{,}000',
      formulaLegend:
        'Full cost TP = $268 per unit. Adam yields zero divisional profit. Eve yields $4,000.',
      approach: [
        'Step 1: Compute the full cost transfer price. Full cost = variable ($68) + fixed ($100) + corporate OH ($100) = $268/unit.',
        'Step 2: Compute upstream profit from Adam at full cost TP. Upstream profit = ($268 \u2212 $268) \u00D7 1,000 = $0. At full cost, upstream exactly breaks even on internal transfers \u2014 by definition, there is no margin.',
        'Step 3: Compute upstream profit from Eve. Eve pays $270/unit externally. Upstream profit = ($270 \u2212 $268) \u00D7 2,000 = $4,000. Eve provides a small but positive margin.',
        'Step 4: Conclude. Upstream prefers Eve ($4k > $0). This leads upstream to favor Option B (serve Eve externally, let downstream buy Adam\'s intermediate from outside). This happens to align with the company-optimal decision.',
      ],
      answer:
        'At full cost TP ($268), the upstream division favors Eve ($4,000 profit vs. $0 from Adam). This leads to Option B, which is also optimal for the company.',
      keyTakeaway:
        'Full cost transfer pricing happens to achieve goal congruence in this specific capacity-constrained scenario.',
    },
    // ===== Part B: Q6 =====
    {
      id: 'q6',
      partLabel: 'Part B \u2014 Goal Congruent Transfer Price',
      questionTitle: 'Q6: Transfer pricing policy for goal congruence',
      question:
        'If possible, propose a transfer pricing policy that achieves goal congruence in this case.',
      approach: [
        'Step 1: Analyze the incentive structure. For upstream to prefer Adam over Eve (i.e., choose Option A): (TP \u2212 $268) \u00D7 1,000 > $4,000, so TP > $272. But downstream would lose at TP > $272: ($260 \u2212 $272) \u00D7 1,000 = \u2212$12,000 < 0. So downstream would reject internal sourcing at any TP that makes upstream prefer Adam.',
        'Step 2: Recognize the natural alignment. At any TP \u2264 $272, upstream prefers Eve over Adam. And downstream, knowing upstream prefers Eve, would source Adam\'s intermediate externally. The result is Option B (both Adam and Eve served).',
        'Step 3: Conclude. Any transfer price achieves goal congruence in this scenario. The capacity constraint naturally aligns incentives: upstream always prefers the more profitable external client (Eve), and downstream can still serve Adam by buying externally. The divisions naturally converge on the company-optimal Option B regardless of the specific TP.',
      ],
      answer:
        'Any transfer price achieves goal congruence. At any TP, the upstream division prefers Eve (Accept & Externally), and the downstream accepts Adam with external sourcing. The divisions naturally choose the company-optimal Option B.',
      keyTakeaway:
        'In some capacity-constrained scenarios, the natural incentives of divisional managers align with the company-optimal outcome regardless of the specific transfer price.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Transfer pricing policies (market, variable cost, full cost, negotiated)',
      'Goal congruence analysis',
      'Corporate overhead allocation effects',
      'Capacity constraints and opportunity costs',
      'Vertical integration decisions',
    ],
    keyTheme:
      'Volume-based corporate overhead allocation can make goal congruence impossible when there is idle capacity, but capacity constraints can naturally align divisional incentives with the company-optimal outcome.',
  },
}
