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
        'Step 1: Compute 2002 operating income. Revenue = 200 \u00D7 CHF 40,000 = CHF 8,000,000. Direct materials = 300,000 kg \u00D7 CHF 8 = CHF 2,400,000. Other manufacturing = CHF 2,000,000. Design = CHF 1,200,000. S&A = CHF 1,000,000. Operating income = CHF 8,000,000 \u2212 CHF 2,400,000 \u2212 CHF 2,000,000 \u2212 CHF 1,200,000 \u2212 CHF 1,000,000 = CHF 1,400,000.',
        'Step 2: Compute 2003 operating income. Revenue = 210 \u00D7 CHF 42,000 = CHF 8,820,000. Direct materials = 310,000 kg \u00D7 CHF 8.50 = CHF 2,635,000. Other manufacturing = CHF 2,025,000. Design = CHF 1,212,000. S&A = CHF 940,500. Operating income = CHF 8,820,000 \u2212 CHF 2,635,000 \u2212 CHF 2,025,000 \u2212 CHF 1,212,000 \u2212 CHF 940,500 = CHF 2,007,500.',
        'Step 3: Note the change. Operating income increased by CHF 607,500 (from CHF 1,400,000 to CHF 2,007,500), a 43% improvement. The variance analysis in Q2 will decompose this into its component drivers.',
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
        'Step 1: Compute the volume variance. The volume variance measures the profit impact of selling more units, at 2002 (base-year) contribution margin per unit. Contribution per unit = CHF 40,000 \u2212 (1,500 kg \u00D7 CHF 8) = CHF 40,000 \u2212 CHF 12,000 = CHF 28,000. Volume variance = (210 \u2212 200) \u00D7 CHF 28,000 = +CHF 280,000. Note: manufacturing, design, and S&A costs are not included here because they do not vary per unit.',
        'Step 2: Compute the selling price variance. Evaluated at actual volume: 210 \u00D7 (CHF 42,000 \u2212 CHF 40,000) = +CHF 420,000. The price increase to CHF 42,000 is the largest favorable variance, reflecting the market\'s acceptance of the superior D4H design.',
        'Step 3: Compute the material efficiency variance. Budget efficiency = 300,000 / 200 = 1,500 kg/unit. Actual = 310,000 / 210 \u2248 1,476 kg/unit. Efficiency improved by 24 kg/unit. Valued at base-year price: \u2212210 \u00D7 (1,476 \u2212 1,500) \u00D7 CHF 8 = +CHF 40,000 (approximately). Favorable: the factory used less material per machine.',
        'Step 4: Compute the material price variance. Price rose from CHF 8 to CHF 8.50/kg. Valued at actual quantity: \u2212210 \u00D7 1,476 \u00D7 (CHF 8.50 \u2212 CHF 8.00) = \u2212CHF 155,000 (approximately). Unfavorable: raw material prices increased significantly.',
        'Step 5: Compute the manufacturing cost variance. This is a direct comparison since these costs depend on capacity, not volume. Variance = \u2212(CHF 2,025,000 \u2212 CHF 2,000,000) = \u2212CHF 25,000. Slightly unfavorable.',
        'Step 6: Compute the design cost variance. Design costs are discretionary and set at the start of each year. Variance = \u2212(CHF 1,212,000 \u2212 CHF 1,200,000) = \u2212CHF 12,000. Slightly unfavorable.',
        'Step 7: Compute the S&A cost variance. S&A depends on customer count, not sales volume. Variance = \u2212(CHF 940,500 \u2212 CHF 1,000,000) = +CHF 59,500. Favorable, possibly due to fewer customers or improved sales efficiency.',
        'Step 8: Reconcile. Total = +CHF 280,000 + CHF 420,000 + CHF 40,000 \u2212 CHF 155,000 \u2212 CHF 25,000 \u2212 CHF 12,000 + CHF 59,500 = +CHF 607,500. Matches the total change.',
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
        'Step 1: Identify the revenue-side success. The company performed better mainly because it sold more units (+10) at a higher price (+CHF 2,000). Together, these two revenue effects account for +CHF 700,000, which is more than the total improvement. This suggests strong market positioning and pricing power for the superior D4H design.',
        'Step 2: Assess cost management. On the cost side, results are mixed. Material efficiency improved (+CHF 40,000) and S&A costs decreased (+CHF 59,500). But material prices rose (\u2212CHF 155,000), manufacturing costs increased slightly (\u2212CHF 25,000), and design costs edged up (\u2212CHF 12,000). Net cost variances are approximately \u2212CHF 93,000.',
        'Step 3: Flag a potential trade-off. The favorable material price variance (\u2212CHF 155,000) could be related to broader commodity price trends beyond the manager\'s control. Conversely, the efficiency improvement may reflect genuine operational improvements.',
        'Step 4: Note the S&A cost reduction. The CHF 59,500 S&A savings could indicate fewer customers (a concern if it signals lost market presence) or more efficient sales operations (positive). Further investigation is needed.',
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
        'Step 1: Propose decomposing the volume variance. The current volume variance (+CHF 280,000) does not distinguish between overall market growth and Machtex\'s share gain. If the textile machine market grew by 5% and Machtex grew by 5%, the manager deserves no special credit. But if the market was flat and Machtex grew, the manager\'s commercial efforts were effective.',
        'Step 2: Define the decomposition. Market-size variance = change in total market \u00D7 Machtex\'s base-year market share \u00D7 base-year contribution margin. Market-share variance = actual market \u00D7 change in Machtex\'s share \u00D7 base-year contribution margin. This decomposition helps separate controllable performance (market share) from uncontrollable environment (market size).',
        'Step 3: Explain the benefit. For performance evaluation, the market-share component is more informative about the manager\'s effort and skill. The market-size component reflects industry trends that no single manager can control. This refinement improves the informativeness of the variance analysis for compensation and evaluation decisions.',
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
