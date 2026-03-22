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
        'Accept & produce internally: Revenue = $650 \u00D7 1,000 = $650,000; Upstream variable cost = $68 \u00D7 1,000 = $68,000; Downstream variable cost = $90 \u00D7 1,000 = $90,000. Profit = $492,000.',
        'Accept & outsource intermediate: Revenue = $650,000; External purchase = $250 \u00D7 1,000 = $250,000; Downstream variable cost = $90,000. Profit = $310,000.',
        'Reject: Profit = $0.',
        'Accepting and producing internally yields the highest profit.',
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
        'Internal production profit: $492,000.',
        'External sourcing profit: $310,000.',
        'Internal production is better by $182,000.',
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
        'Upstream divisional profit from internal: (TP \u2212 68 \u2212 100 \u2212 100) \u00D7 1,000 = (TP \u2212 268) \u00D7 1,000.',
        'Downstream divisional profit from internal: (650 \u2212 TP \u2212 90 \u2212 200 \u2212 100) \u00D7 1,000 = (260 \u2212 TP) \u00D7 1,000.',
        'For both to benefit: TP > 268 AND TP < 260. This is impossible.',
        'None of the four policies achieves goal congruence. The sum of divisional profit changes is always negative regardless of TP.',
        'The source of the problem is the corporate OH charge ($100 per unit per division = $200 total), which penalizes both divisions and offsets the positive contribution margin.',
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
        'Option A (accept Adam, produce internally, drop Eve): $492,000 + $0 = $492,000.',
        'Option B (accept Adam, buy externally, keep Eve): Adam profit = $310,000; Eve profit = (270 \u2212 68) \u00D7 2,000 = $404,000. Total = $714,000.',
        'Option C (reject Adam, keep Eve): $0 + $404,000 = $404,000.',
        'Option B maximizes company profits at $714,000.',
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
        'At full cost TP = $268: Upstream profit from Adam = (268 \u2212 268) \u00D7 1,000 = $0.',
        'Upstream profit from Eve = (270 \u2212 268) \u00D7 2,000 = $4,000.',
        'The upstream division favors Eve (and thus Accept & Externally for Adam).',
        'This aligns with the company-optimal decision (Option B).',
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
        'Any transfer price achieves goal congruence in this case.',
        'For the upstream division to prefer Adam over Eve (i.e., Accept & Internally): (TP \u2212 268) \u00D7 1,000 > 4,000, so TP > $272.',
        'But at TP > $272, the downstream division loses: (260 \u2212 272) \u00D7 1,000 = \u2212$12,000 < 0.',
        'So the downstream division would never accept internal sourcing at TP > $272.',
        'As a result, any TP naturally steers both divisions toward Option B (external sourcing for Adam), which is the company-optimal outcome.',
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
