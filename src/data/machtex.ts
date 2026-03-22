import type { Simulation } from './artisanGardeners'

export const MACHTEX: Simulation = {
  id: 'machtex',
  title: 'Machtex SA',
  caseScenario: [
    'Machtex SA makes a special-purpose machine, D4H, used in the textile industry. Machtex has designed the D4H machine for 2003 to be distinct from its competitors. The market has generally accepted it as a superior machine.',
    'Manufacturing costs depend on production capacity defined in terms of D4H units that can be produced, not the actual units produced. Selling and administrative costs depend on the number of customers, not on the actual number of machines sold. At the start of each year, management uses its discretion to determine the number of design staff for the year; design staff costs have no direct relationship with the quantity of D4H produced.',
  ],
  tableData: {
    headers: ['(in CHF unless stated otherwise)', '2002', '2003'],
    rows: [
      ['Units of D4H produced and sold', '200', '210'],
      ['Selling price', '40,000', '42,000'],
      ['Direct materials, in kilograms', '300,000', '310,000'],
      ['Direct material cost per kilogram', '8.00', '8.50'],
      ['Manufacturing costs (other than direct materials)', '2,000,000', '2,025,000'],
      ['Total design costs', '1,200,000', '1,212,000'],
      ['Total selling and administrative costs', '1,000,000', '940,500'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Operating Income',
      context:
        'Calculate the operating income of Machtex in 2002 and 2003.',
    },
    {
      partLabel: 'Part 2 \u2014 Variance Analysis',
      context:
        'Use variance analysis to explain the change in operating income from 2002 to 2003. Start with the impact of sales volume and then follow the sequence of items from top to bottom: selling price, material efficiency, material price, and so on. Finish with the variance for S&A cost.',
    },
    {
      partLabel: 'Part 3 \u2014 Commentary',
      context: 'Comment on the results of the analysis.',
    },
    {
      partLabel: 'Part 4 \u2014 Design Improvement',
      context: 'Would you modify the design of the analysis?',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Operating Income',
      questionTitle: 'Q1: Calculate operating income for 2002 and 2003',
      question:
        'Calculate the operating income of Machtex in 2002 and 2003.',
      formulaTex:
        '\\pi_{2002} = 200 \\times 40{,}000 - 300{,}000 \\times 8 - 2{,}000{,}000 - 1{,}200{,}000 - 1{,}000{,}000 = 1{,}400{,}000',
      formulaLegend:
        'Operating income = Revenue \u2212 Direct materials \u2212 Manufacturing costs \u2212 Design costs \u2212 S&A costs',
      approach: [
        '2002: Revenue = 200 \u00D7 40,000 = CHF 8,000,000.',
        '2002: Direct materials = 300,000 \u00D7 8 = CHF 2,400,000.',
        '2002: Operating income = 8,000,000 \u2212 2,400,000 \u2212 2,000,000 \u2212 1,200,000 \u2212 1,000,000 = CHF 1,400,000.',
        '2003: Revenue = 210 \u00D7 42,000 = CHF 8,820,000.',
        '2003: Direct materials = 310,000 \u00D7 8.50 = CHF 2,635,000.',
        '2003: Operating income = 8,820,000 \u2212 2,635,000 \u2212 2,025,000 \u2212 1,212,000 \u2212 940,500 = CHF 2,007,500.',
      ],
      answer:
        'Operating income 2002: CHF 1,400,000. Operating income 2003: CHF 2,007,500.',
      keyTakeaway:
        'Operating income increased by CHF 607,500 from 2002 to 2003.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q2: Variance analysis explaining the change in operating income',
      question:
        'Use the methodology of variance analysis to explain the change in operating income from 2002 to 2003. Start with the impact of sales volume and then follow the sequence of the items in the Table from top to bottom: selling price, material efficiency, then material price and so on. Finish with the variance for S&A cost.',
      formulaTex:
        'V_{vol} = (210 - 200) \\times (40{,}000 - 1{,}500 \\times 8) = 280{,}000',
      formulaLegend:
        'Budgeted material efficiency: 300,000/200 = 1,500 kg per unit; Actual: 310,000/210 = 1,476 kg per unit (rounded)',
      approach: [
        'Budgeted efficiency ratio: 300,000/200 = 1,500 kg/unit.',
        'Actual efficiency ratio: 310,000/210 \u2248 1,476 kg/unit.',
        'Sales volume variance = (210 \u2212 200) \u00D7 (40,000 \u2212 1,500 \u00D7 8) = 10 \u00D7 28,000 = +CHF 280,000.',
        'Selling price variance = 210 \u00D7 (42,000 \u2212 40,000) = +CHF 420,000.',
        'Material efficiency variance = \u2212210 \u00D7 (1,476 \u2212 1,500) \u00D7 8 = +CHF 40,000 (rounded).',
        'Material price variance = \u2212210 \u00D7 1,476 \u00D7 (8.50 \u2212 8) = \u2212CHF 155,000 (rounded).',
        'Manufacturing variance = \u2212(2,025,000 \u2212 2,000,000) = \u2212CHF 25,000.',
        'Design variance = \u2212(1,212,000 \u2212 1,200,000) = \u2212CHF 12,000.',
        'S&A variance = \u2212(940,500 \u2212 1,000,000) = +CHF 59,500.',
      ],
      answer:
        'Sales volume: +CHF 280,000; Selling price: +CHF 420,000; Material efficiency: +CHF 40,000; Material price: \u2212CHF 155,000; Manufacturing: \u2212CHF 25,000; Design: \u2212CHF 12,000; S&A: +CHF 59,500. Total: +CHF 607,500.',
      keyTakeaway:
        'The two largest favorable variances are selling price (+CHF 420,000) and sales volume (+CHF 280,000). Material price is the largest unfavorable variance.',
    },
    // ===== Q3 =====
    {
      id: 'q3',
      partLabel: 'Part 3 \u2014 Commentary',
      questionTitle: 'Q3: Comment on the results',
      question: 'Comment on the results of the analysis.',
      approach: [
        'The company performed better mainly because it sold more units and at a higher price.',
        'In other aspects (e.g., manufacturing and design), things were slightly worse than the prior year.',
        'The S&A cost reduction was favorable, possibly reflecting cost management or fewer customers.',
        'Material cost per kg increased, partially offsetting the efficiency gain from using fewer kg per unit.',
      ],
      answer:
        'Machtex performed better mainly due to higher sales volume and selling price. Manufacturing and design costs were slightly worse. The favorable S&A variance also contributed positively.',
      keyTakeaway:
        'Revenue-side improvements (volume and price) drove the profit increase despite slight cost increases in manufacturing and design.',
    },
    // ===== Q4 =====
    {
      id: 'q4',
      partLabel: 'Part 4 \u2014 Design Improvement',
      questionTitle: 'Q4: Would you modify the design of the analysis?',
      question: 'Would you modify the design of the analysis?',
      approach: [
        'One improvement: separate the increase in sales due to an overall increase in the market from the part associated with an increase in market share.',
        'This would help understand whether the manager deserves credit for the good results (if the increase merely reflects overall demand growth, the manager\'s contribution is less clear).',
      ],
      answer:
        'Yes. Separate the volume variance into a market-size component and a market-share component to determine whether the sales increase reflects the manager\'s efforts or general market growth.',
      keyTakeaway:
        'Decomposing the volume variance into market-size and market-share components improves the informativeness of the variance analysis for performance evaluation.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Operating income computation',
      'Sequential variance analysis',
      'Material efficiency and price variances',
      'Capacity-driven cost behavior',
      'Market-size vs. market-share decomposition',
    ],
    keyTheme:
      'Variance analysis decomposes the change in operating income into individual drivers, and further decomposition (e.g., market-size vs. market-share) can improve the analysis for performance evaluation.',
  },
}
