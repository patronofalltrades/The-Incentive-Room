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
        'Step 1: Compute budgeted profit as the starting point. Budgeted labor cost per sausage = \u20AC15 / 300 = \u20AC0.05. Budgeted contribution margin per unit = \u20AC4.00 \u2212 \u20AC0.85 \u2212 \u20AC0.05 \u2212 \u20AC0.30 = \u20AC2.80. Budgeted profit = 1,500,000 \u00D7 \u20AC2.80 \u2212 \u20AC900,000 = \u20AC3,300,000.',
        'Step 2: Compute actual profit. Actual labor cost per sausage = \u20AC15 / 250 = \u20AC0.06. Actual profit = 1,200,000 \u00D7 (\u20AC3.70 \u2212 \u20AC0.80 \u2212 \u20AC0.06 \u2212 \u20AC0.40) \u2212 \u20AC950,000 = 1,200,000 \u00D7 \u20AC2.44 \u2212 \u20AC950,000 = \u20AC1,978,000. Total variance = \u20AC1,978,000 \u2212 \u20AC3,300,000 = \u2212\u20AC1,322,000.',
        'Step 3: Compute the sales volume variance. This isolates the impact of selling fewer units at the budgeted contribution margin. Volume ratio = 1,200,000 / 1,500,000 = 0.80 (80% of plan). Volume variance = (0.80 \u2212 1) \u00D7 1,500,000 \u00D7 \u20AC2.80 = \u22120.20 \u00D7 \u20AC4,200,000 = \u2212\u20AC840,000. This is the largest single variance.',
        'Step 4: Compute the selling price variance. Evaluated at actual volume to avoid double-counting: 1,200,000 \u00D7 (\u20AC3.70 \u2212 \u20AC4.00) = 1,200,000 \u00D7 (\u2212\u20AC0.30) = \u2212\u20AC360,000. The premium price eroded, possibly due to competitive pressure.',
        'Step 5: Compute the material price variance. Material cost fell from \u20AC0.85 to \u20AC0.80 per sausage. Variance = \u22121,200,000 \u00D7 (\u20AC0.80 \u2212 \u20AC0.85) = +\u20AC60,000. Favorable: cheaper materials were sourced.',
        'Step 6: Compute the labor efficiency variance. Budget: \u20AC15/300 = \u20AC0.05/sausage. Actual: \u20AC15/250 = \u20AC0.06/sausage. Variance = \u22121,200,000 \u00D7 (\u20AC0.06 \u2212 \u20AC0.05) = \u2212\u20AC12,000. Unfavorable: lower productivity (250 vs. 300 sausages/hour). Note: the hourly labor rate stayed at \u20AC15, so there is no input price variance for labor.',
        'Step 7: Compute the marketing cost variance. Budget: \u20AC0.30. Actual: \u20AC0.40. Variance = \u22121,200,000 \u00D7 (\u20AC0.40 \u2212 \u20AC0.30) = \u2212\u20AC120,000. Unfavorable: higher marketing spend per sausage, possibly an attempt to stimulate weak demand.',
        'Step 8: Compute the fixed overhead variance. Fixed costs rose from \u20AC900,000 to \u20AC950,000. Variance = \u2212(\u20AC950,000 \u2212 \u20AC900,000) = \u2212\u20AC50,000. Unfavorable.',
        'Step 9: Reconcile. Total = \u2212\u20AC840,000 \u2212 \u20AC360,000 + \u20AC60,000 \u2212 \u20AC12,000 \u2212 \u20AC120,000 \u2212 \u20AC50,000 = \u2212\u20AC1,322,000. Matches the total profit shortfall.',
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
        'Step 1: Assess overall performance. The company performed poorly along nearly all dimensions. Volume fell 20%, price dropped \u20AC0.30, marketing costs rose, labor productivity declined, and fixed costs increased. Only material costs improved.',
        'Step 2: Explore possible causal links. The favorable material price variance (+\u20AC60,000) could be related to the unfavorable labor efficiency variance (\u2212\u20AC12,000). Cheaper materials may have been of lower quality, requiring more labor time per sausage (250 vs. 300 per hour). If true, the net effect is \u20AC60,000 \u2212 \u20AC12,000 = +\u20AC48,000, still favorable, but the link suggests the material savings are partially illusory.',
        'Step 3: Consider the demand picture. The volume shortfall (\u2212\u20AC840k) and price decline (\u2212\u20AC360k) together account for \u20AC1.2M of the \u20AC1.32M shortfall. This suggests a fundamental demand problem \u2014 perhaps the premium positioning is under pressure. The increased marketing spend (+\u20AC120k unfavorable) may have been an unsuccessful attempt to combat the demand weakness.',
        'Step 4: Note the optimistic budgeting. Frank is described as an "eternal optimist." The 1,500,000 target may have been unrealistically ambitious, making the variances look worse than actual performance warrants.',
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
