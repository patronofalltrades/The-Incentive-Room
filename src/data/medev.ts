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
        ' Understand why NOPAT adds back interest. Net income is computed after deducting interest expense, but NOPAT measures operating performance independent of financing decisions. Adding back interest removes the financing effect. However, since interest is tax-deductible, we only add back the after-tax portion.',
        ' Compute the tax shield on interest. Tax deduction = Tax rate \u00D7 Interest expense = 30% \u00D7 $500,000 = $150,000. This is the tax savings from the interest deduction.',
        ' Compute NOPAT. NOPAT = Net income + Interest expense \u2212 Tax deduction = $1,000,000 + $500,000 \u2212 $150,000 = $1,350,000. This represents the operating profit the division would have earned if it had no debt \u2014 a cleaner measure of operating performance.',
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
        ' Compute the capital charge. The capital charge represents the minimum return investors require on the assets the division ties up. Capital charge = WACC \u00D7 NOA = 14% \u00D7 $9,200,000 = $1,288,000.',
        ' Compute Residual Income. RI = NOPAT \u2212 capital charge = $1,350,000 \u2212 $1,288,000 = $62,000. The RI is barely positive, meaning MeDev only just covers its cost of capital.',
        ' Interpret the result. Despite a net income of $1,000,000, the residual income is only $62,000. The large asset base ($9.2M) at 14% WACC creates a substantial capital charge. This shows the true economic profit after accounting for the opportunity cost of the capital employed.',
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
        ' Identify MeDev\'s organizational classification. MeDev is explicitly described as a profit center. This means headquarters has not delegated investment decisions to the division manager \u2014 the manager controls revenues and costs but not the level of assets.',
        ' Assess the mismatch. Residual Income charges the division for the capital it employs (NOA). But if the manager does not control investment decisions, penalizing them for NOA violates the controllability principle \u2014 you should not hold someone accountable for what they cannot influence.',
        ' Identify the appropriate alternative. For a profit center, a profit-based measure (like controllable profit or contribution margin) would be more appropriate. RI is designed for investment centers, where the manager controls both profit and the asset base.',
        ' Conclude. RI is questionable for MeDev because it creates accountability without authority. The division manager may be penalized for investment decisions made by headquarters.',
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
        ' Compute the transfer price. Full manufacturing cost = variable ($22) + fixed ($8) = $30/unit. Transfer price = 1.5 \u00D7 $30 = $45/unit.',
        ' Assess MeDev\'s opportunity cost. MeDev is at full capacity, meaning selling to HeDev requires giving up external sales. External selling price = $50/unit. The opportunity cost of each unit transferred is $50 (the forgone external revenue).',
        ' Compare TP to opportunity cost. TP ($45) < external price ($50). Each unit transferred to HeDev costs MeDev $5 in lost revenue. Over 30,000 units: $5 \u00D7 30,000 = $150,000 loss for MeDev.',
        ' Conclude. MeDev will not accept the internal transfer because it loses $5/unit compared to selling externally. At full capacity, the seller\'s floor price should equal the external market price, but the cost-plus TP falls short.',
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
        ' Compute HeDev\'s cost of buying internally. Internal cost = TP \u00D7 30,000 = $45 \u00D7 30,000 = $1,350,000. No transportation cost because internal transfers do not require it.',
        ' Compute HeDev\'s cost of buying externally. External price = $42/unit + $10/unit transportation = $52/unit total. External cost = $52 \u00D7 30,000 = $1,560,000.',
        ' Compare. Internal ($1,350,000) < External ($1,560,000). HeDev saves $210,000 by buying internally. Even though the TP ($45) exceeds the supplier\'s price ($42), the $10/unit transportation cost makes the external option more expensive overall.',
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
        ' Compute the company-wide trade-off. If MeDev sells externally and HeDev buys externally: MeDev earns ($50 \u2212 $22) \u00D7 30,000 = $840,000 contribution. HeDev pays ($42 + $10) \u00D7 30,000 = $1,560,000. Net company effect = +$840,000 \u2212 $1,560,000 = \u2212$720,000.',
        ' If internal transfer occurs. MeDev loses the external sale but saves HeDev from paying $52/unit externally. MeDev costs = $22 \u00D7 30,000 = $660,000 (variable cost only). HeDev receives at TP but the TP cancels internally. Net company effect = \u2212$660,000 (MeDev costs) + $0 (internal transfer cancels) = \u2212$660,000.',
        ' Compare. Internal transfer: company pays $660k in production costs. No internal transfer: company earns $840k from MeDev external sales but pays $1,560k for HeDev external purchases, net = \u2212$720k. Difference: internal is better by $720k \u2212 $660k = $60k. Alternatively: per unit, internal saves ($50 \u2212 $22) = $28 in lost margin but saves ($42 + $10) = $52 in external costs. Net = $52 \u2212 $28 \u2212 $22 = $2/unit savings \u00D7 30,000 = $60,000.',
        ' Conclude. The internal transfer benefits Jay Company by $60,000. The key: the transportation cost savings ($10/unit) offset the lower margin, making internal trade worthwhile even at full capacity.',
      ],
      answer:
        'Yes, the internal transfer is in the best interest of Jay Company. It saves $60,000 compared to both divisions transacting externally.',
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
        ' Identify the goal congruence failure. The internal transfer benefits Jay Company by $60,000. HeDev wants to buy internally ($45 < $52). But MeDev refuses because TP ($45) < external price ($50). MeDev\'s rejection of a company-beneficial transfer is a goal congruence failure.',
        ' Determine the seller\'s floor. At full capacity, MeDev\'s floor price = incremental cost + opportunity cost = $22 (variable) + ($50 \u2212 $22) (lost external margin) = $50. MeDev needs at least $50 to be indifferent.',
        ' Determine the buyer\'s ceiling. HeDev\'s ceiling = external alternative = $42 + $10 = $52. HeDev will pay up to $52.',
        ' Propose fixes. Fix 1: Set TP at market price ($50). MeDev would be indifferent, and HeDev would still save $2/unit ($50 vs. $52). Both accept, and the company benefits. Fix 2: Let divisions negotiate freely. The feasible range is $50 \u2264 TP \u2264 $52. Any price in this range makes both divisions at least as well off as their external options. The $2/unit surplus can be split via negotiation.',
      ],
      answer:
        'No goal congruence. MeDev rejects the transfer that benefits the company. Fixes: (1) set TP at market price ($50) so MeDev is indifferent and HeDev still saves on transportation, or (2) let divisions negotiate a price between $50 and $52.',
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
