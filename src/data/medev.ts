import type { Simulation } from './artisanGardeners'

export const MEDEV: Simulation = {
  id: 'medev',
  title: 'MeDev',
  caseScenario: [
    'One of Jay Company\'s divisions, called MeDev, produces and sells medical devices. The division is a profit center. The performance measure used for managerial compensation is residual income (RI), defined as RI = NOPAT \u2212 cost of capital \u00D7 NOA.',
    'NOPAT is the division\'s net operating profit after taxes. NOA is the division\'s net operating assets. NOPAT = Net income + Interest expense \u2212 Tax deduction, where Tax deduction = Tax rate \u00D7 Interest expense.',
  ],
  tableData: {
    headers: ['', 'Amount'],
    rows: [
      ['Sales', '$7,600,000'],
      ['Interest expense', '$500,000'],
      ['Net income', '$1,000,000'],
      ['Net operating assets (book value)', '$9,200,000'],
      ['Market value of equity', '$10,000,000'],
      ['Interest rate', '10%'],
      ['Tax rate', '30%'],
      ['Cost of capital (WACC)', '14%'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part A \u2014 NOPAT Computation',
      context:
        'Calculate MeDev\'s NOPAT for 2010 using the relationship between net income, interest expense, and tax deduction.',
    },
    {
      partLabel: 'Part A \u2014 Residual Income',
      context:
        'Calculate MeDev\'s residual income using the NOPAT and cost of capital applied to net operating assets.',
    },
    {
      partLabel: 'Part A \u2014 RI as Performance Measure',
      context:
        'Evaluate whether residual income is an appropriate performance measure for divisional managers\' compensation, given that MeDev is a profit center.',
    },
    {
      partLabel: 'Part B \u2014 Transfer Pricing',
      context:
        'One of MeDev\'s products sells for $50 per unit with variable production cost of $22 and transportation cost of $7 (assumed by client). Fixed manufacturing cost is $2,000,000 and fixed S&A is $500,000. Fixed manufacturing cost per unit is $8 (computed over maximum capacity of 250,000 units). Another division, HeDev, needs 30,000 units. Transfer pricing policy: full manufacturing cost plus 50% mark-up. HeDev\'s external alternative: $42 per unit plus $10 transportation. MeDev is at full capacity.',
      tableData: {
        title: 'Transfer Pricing Data',
        headers: ['', 'Amount'],
        rows: [
          ['External selling price', '$50/unit'],
          ['Variable production cost', '$22/unit'],
          ['Transportation cost (external)', '$7/unit (paid by client)'],
          ['Fixed manufacturing cost', '$2,000,000'],
          ['Fixed manufacturing cost per unit', '$8 (over 250,000 max capacity)'],
          ['Fixed S&A cost', '$500,000'],
          ['Transfer price policy', 'Full manuf. cost + 50% markup'],
          ['HeDev external price', '$42/unit'],
          ['HeDev external transportation', '$10/unit'],
          ['Units needed by HeDev', '30,000'],
        ],
      },
    },
  ],
  steps: [
    // ===== Part A: Q1 =====
    {
      id: 'q1',
      partLabel: 'Part A \u2014 NOPAT Computation',
      questionTitle: 'Q1: Calculate MeDev\'s NOPAT',
      question: 'Calculate MeDev\'s NOPAT for 2010.',
      formulaTex:
        'NOPAT = 1{,}000{,}000 + 500{,}000 - 0.3 \\times 500{,}000 = \\$1{,}350{,}000',
      formulaLegend:
        'NOPAT = Net income + Interest expense \u2212 Tax deduction; Tax deduction = 30% \u00D7 $500,000 = $150,000',
      approach: [
        'Tax deduction = Tax rate \u00D7 Interest expense = 0.30 \u00D7 $500,000 = $150,000.',
        'NOPAT = Net income + Interest expense \u2212 Tax deduction = $1,000,000 + $500,000 \u2212 $150,000 = $1,350,000.',
      ],
      answer: "MeDev's NOPAT for 2010 is $1,350,000.",
      keyTakeaway:
        'NOPAT adds back the after-tax cost of interest to net income, removing the effect of financing decisions from operating performance.',
    },
    // ===== Part A: Q2 =====
    {
      id: 'q2',
      partLabel: 'Part A \u2014 Residual Income',
      questionTitle: 'Q2: Calculate MeDev\'s Residual Income',
      question: "Calculate MeDev's residual income.",
      formulaTex:
        'RI = 1{,}350{,}000 - 0.14 \\times 9{,}200{,}000 = \\$62{,}000',
      formulaLegend:
        'RI = NOPAT \u2212 cost of capital \u00D7 NOA = $1,350,000 \u2212 $1,288,000',
      approach: [
        'Capital charge = 0.14 \u00D7 $9,200,000 = $1,288,000.',
        'RI = $1,350,000 \u2212 $1,288,000 = $62,000.',
      ],
      answer: "MeDev's residual income is $62,000.",
      keyTakeaway:
        'Despite a net income of $1,000,000, the residual income is only $62,000 after charging for the cost of capital employed.',
    },
    // ===== Part A: Q3 =====
    {
      id: 'q3',
      partLabel: 'Part A \u2014 RI as Performance Measure',
      questionTitle: 'Q3: Is RI a good performance measure for MeDev?',
      question:
        "What do you think about using residual income as a performance measure for divisional managers' compensation?",
      approach: [
        'MeDev is a profit center, meaning headquarters has not delegated investment decisions to the division.',
        'Residual income penalizes the division for the capital employed (NOA), which is largely outside the division manager\'s control.',
        'It is questionable whether divisional managers should be evaluated on RI when they do not control investment decisions.',
      ],
      answer:
        'RI is questionable for MeDev because it is a profit center (not an investment center). The division manager does not control investment decisions, yet RI penalizes for capital employed.',
      keyTakeaway:
        'The performance measure should align with the decision rights delegated to the manager. Evaluating a profit center on RI creates accountability without authority over investments.',
    },
    // ===== Part B: Q4 =====
    {
      id: 'q4',
      partLabel: 'Part B \u2014 Transfer Pricing',
      questionTitle: 'Q4: Will MeDev accept to supply HeDev?',
      question: 'Will MeDev accept to supply HeDev with the product?',
      formulaTex:
        'TP = 1.5 \\times (22 + 8) = \\$45 \\quad \\text{vs.} \\quad \\text{External price} = \\$50',
      formulaLegend:
        'Transfer price = 1.5 \u00D7 full manufacturing cost ($30) = $45; External selling price = $50',
      approach: [
        'Full manufacturing cost per unit = Variable ($22) + Fixed ($8) = $30.',
        'Transfer price = 1.5 \u00D7 $30 = $45 per unit.',
        'MeDev is at full capacity. Selling internally at $45 means forgoing external sales at $50.',
        'MeDev loses ($50 \u2212 $45) \u00D7 30,000 = $150,000 if it sells internally.',
        'MeDev is not interested in the internal transfer.',
      ],
      answer:
        'No. MeDev would not accept because the transfer price of $45 is below the external selling price of $50, and MeDev is at full capacity.',
      keyTakeaway:
        'At full capacity, the opportunity cost of internal supply is the external selling price minus variable cost, which exceeds the transfer price margin.',
    },
    // ===== Part B: Q5 =====
    {
      id: 'q5',
      partLabel: 'Part B \u2014 Transfer Pricing',
      questionTitle: 'Q5: Will HeDev prefer to buy from MeDev?',
      question:
        'Will HeDev prefer to buy the 30,000 units from MeDev rather than from the external supplier?',
      formulaTex:
        '\\text{Internal cost} = 45 \\times 30{,}000 = \\$1{,}350{,}000 \\quad \\text{vs.} \\quad \\text{External cost} = (42 + 10) \\times 30{,}000 = \\$1{,}560{,}000',
      formulaLegend:
        'Internal: TP = $45, no transportation; External: $42 purchase + $10 transportation = $52 total per unit',
      approach: [
        'HeDev\'s cost buying internally: $45 \u00D7 30,000 = $1,350,000 (no transportation).',
        'HeDev\'s cost buying externally: ($42 + $10) \u00D7 30,000 = $1,560,000.',
        'HeDev saves $210,000 by buying internally.',
      ],
      answer:
        'Yes. HeDev would prefer to buy from MeDev. While TP ($45) exceeds the supplier price ($42), HeDev saves $10/unit in transportation, making the total internal cost ($45) lower than the total external cost ($52).',
      keyTakeaway:
        'Transportation cost savings can make internal sourcing preferable even when the transfer price exceeds the external purchase price.',
    },
    // ===== Part B: Q6 =====
    {
      id: 'q6',
      partLabel: 'Part B \u2014 Transfer Pricing',
      questionTitle: 'Q6: Is the internal transfer in the best interest of Jay Company?',
      question:
        'Is the internal transfer in the best interest of the company as a whole (i.e., Jay Company)?',
      formulaTex:
        '\\Delta = -(50 - 22) \\times 30{,}000 + (42 + 10) \\times 30{,}000 = -2 \\times 30{,}000 = -\\$60{,}000',
      formulaLegend:
        'Company loses $50 \u2212 $22 = $28 per unit external margin but saves $52 per unit external cost of HeDev; net: \u2212$2 per unit',
      approach: [
        'If MeDev sells externally: company earns ($50 \u2212 $22) \u00D7 30,000 from MeDev but HeDev pays ($42 + $10) \u00D7 30,000 externally.',
        'If internal transfer: company saves HeDev\'s external cost but loses MeDev\'s external margin.',
        'Net difference of internal transfer vs. both selling/buying externally = \u2212$2 \u00D7 30,000 = \u2212$60,000.',
        'The internal transfer is in the best interest of Jay Company (it is better than HeDev buying externally).',
      ],
      answer:
        'Yes, the internal transfer is in the best interest of Jay Company. It saves $60,000 compared to both divisions transacting externally (HeDev buying from external supplier while MeDev sells to external clients is worse).',
      keyTakeaway:
        'The company-wide perspective must consider the opportunity cost of MeDev\'s lost external sales against HeDev\'s savings from not using an external supplier.',
    },
    // ===== Part B: Q7 =====
    {
      id: 'q7',
      partLabel: 'Part B \u2014 Transfer Pricing',
      questionTitle: 'Q7: Is there goal congruence? How to fix it?',
      question:
        'In this case, is there goal congruence between the divisions and the company as a whole? If not, how would you fix it?',
      approach: [
        'There is no goal congruence: MeDev rejects the internal transfer (which is beneficial for the company) because the transfer price ($45) is below the external selling price ($50).',
        'Fix 1: Set the transfer price at the market value ($50 per unit), matching MeDev\'s external opportunity cost. MeDev would then be indifferent, and HeDev would still benefit (pays $50 vs. $52 externally).',
        'Fix 2: Let the two divisions negotiate the transfer price. Given the range ($45 < TP < $52), both can find a mutually beneficial price.',
      ],
      answer:
        'No goal congruence. MeDev rejects the transfer that benefits the company. Fixes: (1) set TP at market price ($50) so MeDev is indifferent and HeDev still saves on transportation, or (2) let divisions negotiate a price between $45 and $52.',
      keyTakeaway:
        'When the seller is at full capacity, the transfer price must reflect the opportunity cost (market price) to achieve goal congruence.',
    },
  ],
  summary: {
    conceptsCovered: [
      'NOPAT computation',
      'Residual income',
      'Profit center vs. investment center',
      'Transfer pricing at full capacity',
      'Opportunity cost',
      'Goal congruence',
    ],
    keyTheme:
      'Residual income may be inappropriate for profit centers, and cost-plus transfer prices at full capacity can cause goal congruence failures when they fall below the seller\'s opportunity cost.',
  },
}
