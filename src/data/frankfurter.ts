import type { Simulation } from './artisanGardeners'

export const FRANKFURTER: Simulation = {
  id: 'frankfurter',
  title: 'Frank Furt',
  caseScenario: [
    'Frank Furt manufactures and distributes high quality sausages that sell at a premium price. As he knows quite a lot about greasy food, but little about accounting, he asks you to help him out with understanding the performance of his business during the last month, February 2010.',
    'Being an eternal optimist, Frank had thought he could sell 1,500,000 sausages during February. Actual sales, however, turned out to be less.',
  ],
  tableData: {
    headers: ['', 'Budget', 'Actual'],
    rows: [
      ['Average selling price per sausage', '\u20AC4.00', '\u20AC3.70'],
      ['Total direct material cost per sausage', '\u20AC0.85', '\u20AC0.80'],
      ['Average labor productivity rate (sausages/hour)', '300', '250'],
      ['Direct manufacturing labor cost per hour', '\u20AC15.00', '\u20AC15.00'],
      ['Direct marketing cost per sausage', '\u20AC0.30', '\u20AC0.40'],
      ['Fixed overhead cost', '\u20AC900,000', '\u20AC950,000'],
      ['Unit sales', '1,500,000', '1,200,000 (80% of plan)'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Variance Analysis',
      context:
        'Identify and calculate all the possible profit plan variances. Start with the impact of volume and then follow the sequence of the original budget from top to bottom: selling price, then direct material, and so on. Finish with the variance for fixed overhead cost.',
    },
    {
      partLabel: 'Part 2 \u2014 Interpretation',
      context:
        'Provide a possible interpretation for the analysis.',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q1: Identify and calculate all the possible profit plan variances',
      question:
        'Identify and calculate all the possible profit plan variances. Start with the impact of volume and then follow the sequence of the original budget for January from top to bottom: selling price, then direct material, and so on. Finish with the variance for fixed overhead cost.',
      formulaTex:
        '\\text{Budgeted CM/unit} = 4.00 - 0.85 - \\frac{15}{300} - 0.30 = 2.80',
      formulaLegend:
        'CM per unit = selling price \u2212 material cost \u2212 labor cost per unit \u2212 marketing cost per unit',
      approach: [
        'Budgeted unit contribution margin = 4.00 \u2212 0.85 \u2212 (15/300) \u2212 0.30 = \u20AC2.80.',
        'Budgeted profit = 1,500,000 \u00D7 2.80 \u2212 900,000 = \u20AC3,300,000.',
        'Actual profit = 1,200,000 \u00D7 3.70 \u2212 1,200,000 \u00D7 0.80 \u2212 (1,200,000/250) \u00D7 15 \u2212 1,200,000 \u00D7 0.40 \u2212 950,000 = \u20AC1,978,000.',
        'Note: the column for labor cost per hour is omitted because there is no variation from the budget.',
        'Sales volume variance = (0.8 \u2212 1) \u00D7 1,500,000 \u00D7 2.80 = \u2212\u20AC840,000.',
        'Selling price variance = 0.8 \u00D7 1,500,000 \u00D7 (3.70 \u2212 4.00) = \u2212\u20AC360,000.',
        'Material price variance = \u22120.8 \u00D7 1,500,000 \u00D7 (0.80 \u2212 0.85) = +\u20AC60,000.',
        'Labor efficiency variance = \u22120.8 \u00D7 1,500,000 \u00D7 (15/250 \u2212 15/300) = \u2212\u20AC12,000.',
        'Marketing cost variance = \u22120.8 \u00D7 1,500,000 \u00D7 (0.40 \u2212 0.30) = \u2212\u20AC120,000.',
        'Fixed OH variance = \u2212(950,000 \u2212 900,000) = \u2212\u20AC50,000.',
      ],
      answer:
        'Sales volume: \u2212\u20AC840,000; Selling price: \u2212\u20AC360,000; Material price: +\u20AC60,000; Labor efficiency: \u2212\u20AC12,000; Marketing cost: \u2212\u20AC120,000; Fixed OH: \u2212\u20AC50,000. Total change: \u2212\u20AC1,322,000 (from \u20AC3,300,000 to \u20AC1,978,000).',
      keyTakeaway:
        'The volume shortfall (\u2212\u20AC840,000) and the price decline (\u2212\u20AC360,000) are the two largest unfavorable variances.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 2 \u2014 Interpretation',
      questionTitle: 'Q2: Provide a possible interpretation for the analysis',
      question:
        'Provide a possible interpretation for the analysis.',
      approach: [
        'The company has performed poorly along all dimensions.',
        'One possible exception is that the firm obtained materials at a lower price than planned (+\u20AC60,000 favorable).',
        'However, the saving in material costs could have come at the expense of lower production efficiency (perhaps those materials were of poorer quality and required extra work, as reflected in the labor efficiency variance of \u2212\u20AC12,000).',
      ],
      answer:
        'The company has performed poorly along all dimensions. The only favorable variance is material cost, but this saving may have contributed to lower labor productivity (lower quality materials requiring more work).',
      keyTakeaway:
        'A favorable material price variance can mask quality issues that cause unfavorable efficiency variances elsewhere.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Profit plan variance analysis',
      'Volume variance',
      'Selling price variance',
      'Material price variance',
      'Labor efficiency variance',
      'Marketing cost variance',
      'Fixed overhead variance',
    ],
    keyTheme:
      'Sequential decomposition of profit plan variances, showing how volume, price, and cost variances explain the gap between budgeted and actual profit.',
  },
}
