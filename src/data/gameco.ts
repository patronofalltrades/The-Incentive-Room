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
        'Paying users = 550,000 \u00D7 10% = 55,000.',
        'Revenue = 55,000 \u00D7 \u20AC20 = \u20AC1,100,000.',
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
        '55,000 paying users \u00D7 \u20AC20 = \u20AC1,100,000.',
        'Same as GameCo\u2019s revenue \u2014 all gamer payments flow to CG.',
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
        'Development revenue = 15,000 \u00D7 \u20AC60.5 = \u20AC907,500.',
        'User service revenue = 550,000 \u00D7 \u20AC0.02 = \u20AC11,000.',
        'Total UE revenue = \u20AC907,500 + \u20AC11,000 = \u20AC918,500.',
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
        'Revenue = \u20AC1,100,000. Developer cost = 15,000 \u00D7 \u20AC25 = \u20AC375,000 (real cost, not TP).',
        'Employees: UE 2 \u00D7 \u20AC70k = \u20AC140k. CG 3 \u00D7 \u20AC70k = \u20AC210k.',
        'Profit = \u20AC1,100k \u2212 \u20AC375k \u2212 \u20AC140k \u2212 \u20AC210k = +\u20AC375,000.',
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
        'CG revenue = \u20AC1,100,000. Dev TP = 15,000 \u00D7 \u20AC60.5 = \u20AC907,500. User TP = \u20AC11,000. Employees = \u20AC210,000.',
        'CG profit = \u20AC1,100k \u2212 \u20AC907.5k \u2212 \u20AC11k \u2212 \u20AC210k = \u2212\u20AC28,500.',
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
        'UE revenue = \u20AC907,500 + \u20AC11,000 = \u20AC918,500.',
        'UE costs: developers = \u20AC375,000, employees = \u20AC140,000.',
        'UE profit = \u20AC918,500 \u2212 \u20AC375,000 \u2212 \u20AC140,000 = +\u20AC403,500.',
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
        'HP is +\u20AC375k for GameCo but \u2212\u20AC28.5k for CG. Goal congruence failure.',
        'Root cause: the dev TP (\u20AC60.5/hr) passes UE\u2019s fixed costs + markup to CG.',
        'Fixes: capacity-based cost rates, negotiated TPs, company-wide incentives, non-financial KPIs.',
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
        'Corporate overhead is unaltered by HP \u2014 no additional corporate resources consumed.',
        'The \u20AC50k/employee charge is an internal allocation, not a real cost. Additional OH for GameCo = \u20AC0.',
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
        'CG hires 3 employees. OH charge = 3 \u00D7 \u20AC50,000 = \u20AC150,000.',
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
        'UE hires 2 employees. OH charge = 2 \u00D7 \u20AC50,000 = \u20AC100,000.',
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
        'Dev cost allocated to 2016 = \u20AC375,000 / 2 = \u20AC187,500. Employees = 5 \u00D7 \u20AC70k = \u20AC350,000.',
        'Profit = \u20AC1,100,000 \u2212 \u20AC187,500 \u2212 \u20AC350,000 = +\u20AC562,500.',
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
        'Dev TP = \u20AC907,500 / 2 = \u20AC453,750. User TP = \u20AC11,000. Employees = \u20AC210,000. OH = \u20AC150,000.',
        'CG profit = \u20AC1,100k \u2212 \u20AC453.75k \u2212 \u20AC11k \u2212 \u20AC210k \u2212 \u20AC150k = +\u20AC275,250.',
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
        'Dev revenue = \u20AC453,750. User service = \u20AC11,000. Dev cost = \u20AC187,500. Employees = \u20AC140,000. OH = \u20AC100,000.',
        'UE profit = \u20AC453,750 + \u20AC11,000 \u2212 \u20AC187,500 \u2212 \u20AC140,000 \u2212 \u20AC100,000 = +\u20AC37,250.',
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
