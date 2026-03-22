import type { Simulation } from './artisanGardeners'

export const GAMECO: Simulation = {
  id: 'gameco',
  title: 'GameCo',
  caseScenario: [
    'GameCo is a multi-divisional firm in the gaming space. Cooking Games (CG) and User Experience (UE) are two of the divisions, both defined as profit centers. CG has a portfolio of games inspired by food and cooking. UE provides software development and user services to other divisions within GameCo.',
    'Bonuses for divisional executives are based on measures of divisional profits (computed before interests and taxes). GameCo does not include corporate overhead charges in the definition of divisional profits.',
    'Transfer pricing for development work: full cost + 10% markup. Full cost = market hourly rate for developers (\u20AC25/hr) + \u20AC30/hr for UE fixed costs = \u20AC55/hr \u00D7 1.1 = \u20AC60.5/hr. Transfer price for user services: \u20AC0.02 per user per year. External freelance developers cost \u20AC25/hr.',
  ],
  tableData: {
    headers: ['', 'CG (\u20AC)', 'UE (\u20AC)'],
    rows: [
      ['Revenues', '16,600,000', '14,520,000 + 3,000,000'],
      ['  CG: from gamers', '16,600,000', ''],
      ['  UE: development of new games', '', '14,520,000'],
      ['  UE: services to users', '', '3,000,000'],
      ['Payments to UE (developing)', '\u22123,000,000', ''],
      ['Payments to UE (user services)', '\u2212160,000', ''],
      ['Marketing salaries (CG)', '\u22123,500,000', ''],
      ['Admin & other fixed costs', '\u22124,000,000', '\u22122,900,000'],
      ['Developers (UE)', '', '\u22126,000,000'],
      ['Designers & anthropologists (UE)', '', '\u22124,200,000'],
      ['Divisional profit', '5,940,000', '4,420,000'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      context:
        'In early 2016, CG considers a new game "Hot Peppers" (HP). Expected: 550,000 users, 10% purchase power bars, average revenue per paying user = \u20AC20/year. Expected life: 1 year. Development requires 15,000 additional hours of external developers. CG hires 3 additional marketing employees at \u20AC70,000 each. UE hires 2 additional service employees at \u20AC70,000 each. All 5 dismissed after 1 year with no cost. Admin and other fixed costs unaltered for both divisions. Corporate overhead unaltered.',
    },
    {
      partLabel: 'Part B \u2014 Corporate Overhead Charge',
      context:
        'GameCo introduces a charge for corporate overhead into divisional profits: \u20AC50,000 per internal employee per year.',
    },
    {
      partLabel: 'Part C \u2014 Hot Peppers (2-Year Life)',
      context:
        'Assume HP has a 2-year expected life instead of 1 year. Each year: 550,000 users, 10% pay, \u20AC20/paying user. The 3 CG and 2 UE employees hired for 2 years. Corporate overhead: \u20AC50,000/employee/year. Development costs allocated evenly over the expected life of the game at both company and divisional level. UE also allocates development revenues evenly.',
    },
  ],
  steps: [
    // ===== PART A =====
    {
      id: 'gc-q1',
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      questionTitle: 'Q1: Additional Revenue for GameCo',
      question: 'How much additional revenue would HP generate for GameCo in 2016?',
      formulaTex:
        '\\text{Revenue}_{GameCo} = 550{,}000 \\times 10\\% \\times \\text{€} 20 = \\text{€} 1{,}100{,}000',
      formulaLegend:
        '550,000 users, 10% purchasing, \u20AC20 per paying user',
      approach: [
        'Step 1: Identify the revenue driver. Only paying users generate revenue \u2014 the 90% of non-paying users contribute nothing to GameCo\u2019s top line.',
        'Step 2: Compute paying users. Total users = 550,000, conversion rate = 10%, so paying users = 550,000 \u00D7 10% = 55,000.',
        'Step 3: Compute revenue. Each paying user spends \u20AC20 on power bars. Revenue = 55,000 \u00D7 \u20AC20 = \u20AC1,100,000.',
        'Step 4: This is GameCo revenue (the parent entity). Internal transfers between CG and UE wash out at the company level.',
      ],
      answer: '\u20AC1,100,000',
      keyTakeaway:
        'GameCo revenue equals the cash from paying gamers only. Internal transfers wash out at the company level.',
    },
    {
      id: 'gc-q2',
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      questionTitle: 'Q2: Additional Revenue for CG',
      question: 'How much additional revenue would HP generate for CG in 2016?',
      formulaTex:
        '\\text{Revenue}_{CG} = 550{,}000 \\times 10\\% \\times \\text{€} 20 = \\text{€} 1{,}100{,}000',
      formulaLegend:
        'CG receives revenue directly from paying gamers',
      approach: [
        'Step 1: Understand CG\u2019s revenue source. CG is the division that directly faces the gamers \u2014 all power-bar purchases flow to CG as revenue.',
        'Step 2: Compute paying users. 550,000 total users \u00D7 10% conversion = 55,000 paying users.',
        'Step 3: Compute CG revenue. 55,000 paying users \u00D7 \u20AC20/user = \u20AC1,100,000.',
        'Step 4: CG\u2019s revenue equals GameCo\u2019s revenue because all gamer payments flow to CG. UE earns revenue only through internal transfer prices, not from gamers.',
      ],
      answer: '\u20AC1,100,000',
      keyTakeaway:
        "CG's revenue is the same as GameCo's because all gamer payments flow to CG.",
    },
    {
      id: 'gc-q3',
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      questionTitle: 'Q3: Additional Revenue for UE',
      question: 'How much additional revenue would HP generate for UE in 2016?',
      formulaTex:
        '\\text{Revenue}_{UE} = 15{,}000 \\times \\text{€} 60.5 + 550{,}000 \\times \\text{€} 0.02 = \\text{€} 907{,}500 + \\text{€} 11{,}000 = \\text{€} 918{,}500',
      formulaLegend:
        'UE revenue = development transfer payments + user service transfer payments',
      approach: [
        'Step 1: Understand UE\u2019s revenue sources. UE does not earn revenue from gamers. Its revenue comes entirely from internal transfer prices charged to CG for (a) game development and (b) user services.',
        'Step 2: Compute development revenue. UE charges the full-cost-plus TP of \u20AC60.5/hr for development work. Development revenue = 15,000 hours \u00D7 \u20AC60.5/hr = \u20AC907,500.',
        'Step 3: Compute user service revenue. UE charges \u20AC0.02 per user per year for all users (paying and non-paying). User service revenue = 550,000 \u00D7 \u20AC0.02 = \u20AC11,000.',
        'Step 4: Total UE revenue = \u20AC907,500 + \u20AC11,000 = \u20AC918,500. Note that the development TP (\u20AC60.5) includes a significant markup over the actual external developer cost (\u20AC25/hr), which inflates UE\u2019s revenue.',
      ],
      answer: '\u20AC918,500',
      keyTakeaway:
        "UE's revenue comes from internal transfer prices, not from end users. The development TP includes a significant markup over the actual cost of \u20AC25/hr.",
    },
    {
      id: 'gc-q4',
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      questionTitle: 'Q4: Effect on GameCo Profit',
      question:
        'How much (additional) profit (or loss) would HP generate for GameCo in 2016? Focus on the impact before tax, interests, and executive compensation expenses.',
      formulaTex:
        '\\Delta \\pi_{GameCo} = 1{,}100 - 15 \\times 25 - 2 \\times 70 - 3 \\times 70 = 1{,}100 - 375 - 140 - 210 = +375 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Revenue 1,100; Developer cost 375; UE employees 140; CG employees 210. All in thousands.',
      approach: [
        'Step 1: At the company level, only external cash flows matter. Internal transfer prices between CG and UE cancel out because both divisions belong to GameCo.',
        'Step 2: Identify the external revenue. Revenue from gamers = \u20AC1,100,000 (computed in Q1).',
        'Step 3: Identify the incremental costs. External developer cost = 15,000 hrs \u00D7 \u20AC25/hr = \u20AC375,000 (the \u20AC25 market rate is the real resource cost, not the \u20AC60.5 TP). UE hires 2 employees at \u20AC70,000 = \u20AC140,000. CG hires 3 employees at \u20AC70,000 = \u20AC210,000.',
        'Step 4: Compute GameCo profit. \u20AC1,100,000 \u2212 \u20AC375,000 \u2212 \u20AC140,000 \u2212 \u20AC210,000 = +\u20AC375,000. HP is clearly profitable at the company level. The key question is whether divisional incentives align with this.',
      ],
      answer: '+\u20AC375,000',
      keyTakeaway:
        'HP is clearly profitable for GameCo as a whole. The key question is whether divisional incentives align with this company-level benefit.',
    },
    {
      id: 'gc-q5',
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      questionTitle: 'Q5: Effect on CG Divisional Profit',
      question:
        'How much (additional) divisional profit (or loss) would HP generate for CG in 2016?',
      formulaTex:
        '\\Delta \\pi_{CG} = 1{,}100 - 15 \\times 60.5 - 550 \\times 0.02 - 3 \\times 70 = 1{,}100 - 907.5 - 11 - 210 = -28.5 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Revenue 1,100; Development TP 907.5; User service TP 11; Marketing employees 210. All in thousands.',
      approach: [
        'Step 1: CG\u2019s perspective differs from GameCo\u2019s because CG must pay UE at the internal transfer price, not the actual external cost. This is the buyer\u2019s side of transfer pricing.',
        'Step 2: CG revenue from gamers = \u20AC1,100,000 (same as Q2).',
        'Step 3: CG\u2019s costs include the transfer price, not the real resource cost. Development TP = 15,000 \u00D7 \u20AC60.5 = \u20AC907,500 (vs. \u20AC375,000 actual cost). User services TP = 550,000 \u00D7 \u20AC0.02 = \u20AC11,000. Marketing employees = 3 \u00D7 \u20AC70,000 = \u20AC210,000.',
        'Step 4: CG divisional profit = \u20AC1,100,000 \u2212 \u20AC907,500 \u2212 \u20AC11,000 \u2212 \u20AC210,000 = \u2212\u20AC28,500. CG would reject HP because the inflated development TP makes a profitable project look like a loss at the divisional level.',
      ],
      answer: '\u2212\u20AC28,500',
      keyTakeaway:
        'CG would lose \u20AC28,500 from HP despite it being profitable for GameCo. The high development transfer price drives this goal congruence failure.',
    },
    {
      id: 'gc-q6',
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      questionTitle: 'Q6: Effect on UE Divisional Profit',
      question:
        'How much (additional) divisional profit (or loss) would HP generate for UE in 2016?',
      formulaTex:
        '\\Delta \\pi_{UE} = 15 \\times 60.5 + 550 \\times 0.02 - 15 \\times 25 - 2 \\times 70 = 907.5 + 11 - 375 - 140 = +403.5 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'TP revenue 918.5; Developer cost 375; UE employees 140. All in thousands.',
      approach: [
        'Step 1: UE is the seller in the transfer pricing arrangement. Its revenue comes from the TP charged to CG, while its costs are the actual resources consumed.',
        'Step 2: UE revenue from CG = \u20AC907,500 (development) + \u20AC11,000 (user services) = \u20AC918,500. This is the TP revenue, which includes UE\u2019s fixed cost allocation plus a 10% markup.',
        'Step 3: UE\u2019s actual incremental costs are much lower. External developers = 15,000 \u00D7 \u20AC25 = \u20AC375,000. Additional employees = 2 \u00D7 \u20AC70,000 = \u20AC140,000.',
        'Step 4: UE divisional profit = \u20AC918,500 \u2212 \u20AC375,000 \u2212 \u20AC140,000 = +\u20AC403,500. UE captures more than the entire company profit (\u20AC403,500 > \u20AC375,000) because the TP overcompensates UE at CG\u2019s expense.',
      ],
      answer: '+\u20AC403,500',
      keyTakeaway:
        'UE captures \u20AC403,500, more than the entire GameCo profit of \u20AC375,000. The transfer price overcompensates UE at the expense of CG.',
    },
    {
      id: 'gc-q7',
      partLabel: 'Part A \u2014 Hot Peppers (1-Year Life)',
      questionTitle: 'Q7: Goal Congruence Analysis',
      question:
        "Analyze GameCo's internal accounting and incentive system from the perspective of achieving goal congruence. Provide specific suggestions for improvement.",
      approach: [
        'Step 1: Assess goal congruence. HP generates +\u20AC375,000 for GameCo (Q4), but CG\u2019s divisional profit falls by \u2212\u20AC28,500 (Q5). CG\u2019s manager has no incentive to launch HP. This is a classic goal congruence failure.',
        'Step 2: Diagnose the root cause. The development TP (\u20AC60.5/hr) passes all of UE\u2019s fixed costs (designers, anthropologists at \u20AC30/hr) plus a 10% markup to CG. The \u20AC30/hr is based on actual hours, so CG absorbs UE\u2019s idle capacity costs \u2014 costs CG cannot control.',
        'Step 3: Question the organizational design. If UE has no external customers, defining it as a profit center is questionable. A cost center structure would remove UE\u2019s incentive to overcharge.',
        'Step 4: Propose alternatives. (a) Base the fixed cost rate on capacity hours (not actual hours) to lower the TP. (b) Allow CG and UE to negotiate the TP for major projects. (c) Introduce company-wide incentives (e.g., stock options) to align divisional interests. (d) Add non-financial KPIs like total user growth to broaden the incentive base.',
      ],
      answer:
        'No goal congruence. CG bears UE fixed costs through the transfer price. Suggestions: capacity-based allocation for TP, negotiated pricing for major projects, common performance measures, and non-financial KPIs.',
      keyTakeaway:
        "The TP formula passes UE's entire fixed cost structure to CG, creating systematic underinvestment in new games by the revenue-generating division.",
    },
    // ===== PART B =====
    {
      id: 'gc-q8',
      partLabel: 'Part B \u2014 Corporate Overhead Charge',
      questionTitle: 'Q8: Additional Corporate OH for GameCo',
      question:
        'What would be the additional corporate overhead cost generated by HP for GameCo in 2016 under this cost system?',
      formulaTex:
        '\\Delta OH_{GameCo} = \\text{€} 0',
      formulaLegend:
        'HP does not alter corporate overhead for the company as a whole; the charge is an internal allocation.',
      approach: [
        'Step 1: Distinguish between actual costs and cost allocations. Corporate overhead is incurred at the headquarters level \u2014 it is a real cost of running the corporate office.',
        'Step 2: Determine whether HP changes real corporate costs. HP adds 5 employees at the divisional level, but the case states corporate overhead is unaltered. No additional corporate resources are consumed.',
        'Step 3: The \u20AC50,000/employee charge is an internal allocation mechanism designed to make divisions \u201Cpay\u201D for their share of corporate costs. It does not create new costs at the company level.',
        'Step 4: Therefore, additional corporate OH for GameCo = \u20AC0. The allocation only shifts costs between the corporate and divisional P&L views.',
      ],
      answer: '\u20AC0 (None)',
      keyTakeaway:
        'The corporate OH charge is an internal allocation mechanism. Actual corporate overhead for GameCo as a whole is unaffected by HP.',
    },
    {
      id: 'gc-q9',
      partLabel: 'Part B \u2014 Corporate Overhead Charge',
      questionTitle: 'Q9: Additional Corporate OH Charge for CG',
      question:
        'What would be the additional corporate overhead charge generated by HP for CG in 2016 under this cost system?',
      formulaTex:
        '\\Delta OH_{CG} = 3 \\times \\text{€} 50{,}000 = \\text{€} 150{,}000',
      formulaLegend:
        '3 additional marketing employees at CG \u00D7 \u20AC50,000 each',
      approach: [
        'Step 1: Identify which employees trigger the OH charge. CG hires 3 additional marketing employees for HP. Each internal employee triggers a \u20AC50,000/year corporate OH allocation.',
        'Step 2: Compute the charge. Corporate OH allocated to CG = 3 \u00D7 \u20AC50,000 = \u20AC150,000.',
        'Step 3: Consider the incentive effect. This charge further penalizes CG for launching HP (on top of the development TP), making the goal congruence problem from Part A even worse.',
      ],
      answer: '\u20AC150,000',
      keyTakeaway:
        'The OH charge further penalizes CG for launching HP, worsening the goal congruence problem from Part A.',
    },
    {
      id: 'gc-q10',
      partLabel: 'Part B \u2014 Corporate Overhead Charge',
      questionTitle: 'Q10: Additional Corporate OH Charge for UE',
      question:
        'What would be the additional corporate overhead charge generated by HP for UE in 2016 under this cost system?',
      formulaTex:
        '\\Delta OH_{UE} = 2 \\times \\text{€} 50{,}000 = \\text{€} 100{,}000',
      formulaLegend:
        '2 additional service employees at UE \u00D7 \u20AC50,000 each',
      approach: [
        'Step 1: UE hires 2 additional service employees for HP. The same \u20AC50,000/employee corporate OH rule applies to UE.',
        'Step 2: Compute the charge. Corporate OH allocated to UE = 2 \u00D7 \u20AC50,000 = \u20AC100,000.',
        'Step 3: Consider UE\u2019s position. Despite this \u20AC100,000 charge, UE still profits handsomely from HP (its development TP surplus of \u20AC403,500 far exceeds this charge). The OH allocation does not meaningfully offset UE\u2019s windfall.',
      ],
      answer: '\u20AC100,000',
      keyTakeaway:
        'UE also bears an OH charge, but its large surplus from the development TP means it still profits from HP.',
    },
    // ===== PART C =====
    {
      id: 'gc-q11',
      partLabel: 'Part C \u2014 Hot Peppers (2-Year Life)',
      questionTitle: 'Q11: Effect on GameCo Profit in 2016',
      question:
        "How much (additional) profit (or loss) would HP generate for GameCo in 2016 under the 2-year life assumption? Focus on the impact before tax, interests, and executive compensation expenses.",
      formulaTex:
        '\\Delta \\pi_{GameCo}^{2016} = 550 \\times 0.1 \\times 20 - 15 \\times 25/2 - 2 \\times 70 - 3 \\times 70 = 1{,}100 - 187.5 - 140 - 210 = +562.5 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Revenue = 1,100; Development allocated over 2 years = 375/2 = 187.5; Employees = 350. All in thousands.',
      approach: [
        'Step 1: The key change is cost timing. Revenue is the same each year (\u20AC1,100,000), but development costs are now spread over 2 years instead of expensed immediately.',
        'Step 2: Allocate development cost. Total external developer cost = 15,000 \u00D7 \u20AC25 = \u20AC375,000. Allocated to 2016 = \u20AC375,000 / 2 = \u20AC187,500. This matching principle aligns cost recognition with the revenue-generating period.',
        'Step 3: Employee costs are not allocated \u2014 they are incurred each year. Employee costs in 2016 = (2 + 3) \u00D7 \u20AC70,000 = \u20AC350,000.',
        'Step 4: GameCo profit in 2016 = \u20AC1,100,000 \u2212 \u20AC187,500 \u2212 \u20AC350,000 = +\u20AC562,500. Spreading development costs boosts each year\u2019s profit (+\u20AC562,500 vs +\u20AC375,000 under 1-year life).',
      ],
      answer: '+\u20AC562,500',
      keyTakeaway:
        'Spreading development costs over 2 years boosts each year\'s profit significantly compared to the 1-year scenario (+\u20AC562,500 vs +\u20AC375,000 per year).',
    },
    {
      id: 'gc-q12',
      partLabel: 'Part C \u2014 Hot Peppers (2-Year Life)',
      questionTitle: 'Q12: Effect on CG Divisional Profit in 2016',
      question:
        'How much (additional) divisional profit (or loss) would HP generate for CG in 2016 under the 2-year life assumption?',
      formulaTex:
        '\\Delta \\pi_{CG}^{2016} = 1{,}100 - 15 \\times 60.5/2 - 550 \\times 0.02 - 3 \\times 70 - 3 \\times 50 = +275.25 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Revenue 1,100; Development TP allocated = 907.5/2 = 453.75; User service TP 11; Marketing employees 210; Corporate OH 150. All in thousands.',
      approach: [
        'Step 1: The 2-year life changes CG\u2019s economics because the development TP is now allocated over 2 years. CG\u2019s large development cost burden from Part A is halved in each year.',
        'Step 2: Revenue = \u20AC1,100,000 (same as Part A). Development TP allocated to 2016 = (\u20AC907,500) / 2 = \u20AC453,750. User service TP = 550,000 \u00D7 \u20AC0.02 = \u20AC11,000.',
        'Step 3: Employee and OH costs are annual. Marketing employees = 3 \u00D7 \u20AC70,000 = \u20AC210,000. Corporate OH = 3 \u00D7 \u20AC50,000 = \u20AC150,000.',
        'Step 4: CG profit = \u20AC1,100,000 \u2212 \u20AC453,750 \u2212 \u20AC11,000 \u2212 \u20AC210,000 \u2212 \u20AC150,000 = +\u20AC275,250. Goal congruence is restored: CG now profits from HP, aligning Nancy\u2019s incentives with the company.',
      ],
      answer: '+\u20AC275,250',
      keyTakeaway:
        'With a 2-year life, CG now profits from HP (+\u20AC275,250 vs \u2212\u20AC28,500 under 1-year). Goal congruence is restored when development costs are allocated over the game\'s full expected life.',
    },
    {
      id: 'gc-q13',
      partLabel: 'Part C \u2014 Hot Peppers (2-Year Life)',
      questionTitle: 'Q13: Effect on UE Divisional Profit in 2016',
      question:
        'How much (additional) divisional profit (or loss) would HP generate for UE in 2016 under the 2-year life assumption?',
      formulaTex:
        '\\Delta \\pi_{UE}^{2016} = 15 \\times 60.5/2 + 550 \\times 0.02 - 15 \\times 25/2 - 2 \\times 70 - 2 \\times 50 = +37.25 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Dev revenue allocated = 453.75; User service 11; Dev cost allocated = 187.5; Employees 140; OH 100. All in thousands.',
      approach: [
        'Step 1: UE\u2019s revenue is also spread over 2 years, mirroring the cost allocation. Development revenue allocated to 2016 = \u20AC907,500 / 2 = \u20AC453,750. User service revenue = \u20AC11,000.',
        'Step 2: UE\u2019s costs are similarly split. Developer cost allocated to 2016 = \u20AC375,000 / 2 = \u20AC187,500. Employees = 2 \u00D7 \u20AC70,000 = \u20AC140,000. Corporate OH = 2 \u00D7 \u20AC50,000 = \u20AC100,000.',
        'Step 3: UE profit = \u20AC453,750 + \u20AC11,000 \u2212 \u20AC187,500 \u2212 \u20AC140,000 \u2212 \u20AC100,000 = +\u20AC37,250.',
        'Step 4: UE\u2019s profit drops dramatically (\u20AC37,250 vs \u20AC403,500 under 1-year). Spreading revenue over 2 years plus the OH charge redistributes the surplus more evenly between divisions, improving fairness.',
      ],
      answer: '+\u20AC37,250',
      keyTakeaway:
        "UE's profit from HP drops significantly (\u20AC37,250 vs \u20AC403,500 under 1-year) as development revenue is also spread over 2 years plus the OH charge. The surplus is now more evenly distributed.",
    },
  ],
  summary: {
    conceptsCovered: [
      'Relevance analysis: company-level vs divisional-level profit from a new product',
      'Transfer pricing: full-cost-plus TP overcharging the buying division for idle capacity',
      'Goal congruence: CG rejects profitable project due to TP and cost allocation',
      'Corporate overhead allocation: per-employee charge and its divisional impact',
      'Multi-period accounting: development cost allocation over game life restores goal congruence',
    ],
    keyTheme:
      "GameCo demonstrates how a full-cost-plus transfer price for internal development services can destroy goal congruence by shifting UE's fixed costs onto CG, and how the horizon over which costs are allocated (1-year vs 2-year game life) is decisive in aligning divisional incentives with company-wide profitability.",
  },
}
