import type { Simulation } from './artisanGardeners'

export const DELICIOUS_MEALS: Simulation = {
  id: 'delicious-meals',
  title: 'Delicious Meals',
  caseScenario: [
    'The CFO of Delicious Meals (DM) is currently preparing for the annual performance review of his most successful restaurant located in downtown Barcelona. For the first time ever, he is doubtful how to proceed with his variance analysis.',
    'The reason: it had been budgeted that this restaurant would operate at full capacity, but it was even more successful and attracted more customers than the kitchen could handle. During peak times, it had to outsource the cooking of some of its meals to another, close-by restaurant (fortunately, the quality of these meals was acceptable).',
    'The actual number of meals in 2013 includes 1,000 meals that DM sourced from the other restaurant. These meals had not been included in the budget and were procured at a price of \u20AC5 per meal. Associated transport costs amounted to \u20AC1,000 but were covered by the other restaurant.',
  ],
  tableData: {
    headers: ['', '2013 Budget', '2013 Actual'],
    rows: [
      ['Meals sold (units)', '30,000', '31,000'],
      ['Meal price (per unit)', '\u20AC15', '\u20AC16'],
      ['Materials (volume)', '9,000 kg', '12,000 kg'],
      ['Materials (input price)', '\u20AC10 per kg', '\u20AC10.50 per kg'],
      ['Cost of sourced meals', '\u2014', '\u20AC5,000'],
      ['Fixed costs', '\u20AC210,000', '\u20AC221,000'],
      ['Corporate overhead', '\u20AC15,000', '\u20AC3,100'],
      ['Restaurant profit (after corporate OH)', '\u20AC135,000', '\u20AC140,900'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Variance Analysis',
      context:
        'Perform a comprehensive variance analysis to explain the difference between the budgeted and actual profit. Follow the order: volume (including outsourcing), selling price, material efficiency, material input price, fixed costs, corporate overhead.',
    },
    {
      partLabel: 'Part 2 \u2014 Manager Evaluation',
      context:
        'Given that actual profit exceeded budgeted profit, assess whether the CFO should congratulate the restaurant manager and pay a bonus. What was the main reason that actual profit exceeded budgeted profit?',
    },
    {
      partLabel: 'Part 3 \u2014 Outsourcing Decision',
      context:
        'Evaluate whether it was a good decision to sell the 1,000 additional meals. Should DM have turned down these customers?',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q1: Comprehensive variance analysis',
      question:
        'Perform a comprehensive variance analysis to explain the difference between the budgeted and the actual profit. Follow this order: (1) variance due to change in sales volume (include the effect of outsourcing), (2) selling price, (3) material efficiency, (4) material input price, (5) fixed costs, (6) corporate overhead.',
      formulaTex:
        'V_{vol} = (31{,}000 - 30{,}000) \\times 15 - 5{,}000 = 10{,}000',
      formulaLegend:
        'Volume variance includes the incremental revenue from 1,000 extra meals minus the outsourcing cost of \u20AC5,000. Budgeted efficiency: 9,000/30,000 = 0.3 kg/meal; Actual: 12,000/30,000 = 0.4 kg/meal (computed over 30,000 in-house meals)',
      approach: [
        ' Compute the volume variance. The restaurant sold 1,000 more meals than budgeted. Revenue from extra meals = 1,000 \u00D7 \u20AC15 (at budget price) = \u20AC15,000. However, these meals were outsourced at \u20AC5 each = \u20AC5,000 cost. Volume variance = \u20AC15,000 \u2212 \u20AC5,000 = +\u20AC10,000. We use the budget price because the selling price variance will capture the price difference separately.',
        ' Compute the selling price variance. The actual price (\u20AC16) exceeded the budget (\u20AC15). Price variance = 31,000 \u00D7 (\u20AC16 \u2212 \u20AC15) = +\u20AC31,000. Evaluated at actual volume to avoid double-counting with the volume effect.',
        ' Compute the input efficiency variance. Budget efficiency = 9,000 kg / 30,000 meals = 0.3 kg/meal. Actual efficiency = 12,000 kg / 30,000 in-house meals = 0.4 kg/meal (outsourced meals do not use materials). The kitchen used 0.1 more kg per meal. Variance = \u221230,000 \u00D7 (0.4 \u2212 0.3) \u00D7 \u20AC10 = \u2212\u20AC30,000. Valued at budget input price to isolate the efficiency effect.',
        ' Compute the input price variance. Actual material price = \u20AC10.50/kg vs. budget = \u20AC10/kg. Variance = \u221230,000 \u00D7 0.4 \u00D7 (\u20AC10.50 \u2212 \u20AC10) = \u221212,000 \u00D7 \u20AC0.50 = \u2212\u20AC6,000. Valued at actual quantity to capture the full price impact.',
        ' Compute the fixed cost variance. Fixed costs rose from \u20AC210,000 to \u20AC221,000. Variance = \u2212(\u20AC221,000 \u2212 \u20AC210,000) = \u2212\u20AC11,000. Unfavorable \u2014 additional fixed costs were incurred, possibly related to the higher volume.',
        ' Compute the corporate overhead variance. Corporate OH dropped from \u20AC15,000 to \u20AC3,100. Variance = \u2212(\u20AC3,100 \u2212 \u20AC15,000) = +\u20AC11,900. This is a headquarters-driven change, not within the restaurant manager\'s control.',
        ' Verify reconciliation. Total = +\u20AC10,000 + \u20AC31,000 \u2212 \u20AC30,000 \u2212 \u20AC6,000 \u2212 \u20AC11,000 + \u20AC11,900 = +\u20AC5,900. Check: \u20AC140,900 \u2212 \u20AC135,000 = \u20AC5,900. Reconciles perfectly.',
      ],
      answer:
        'Sales volume: +\u20AC10,000; Selling price: +\u20AC31,000; Input efficiency: \u2212\u20AC30,000; Input price: \u2212\u20AC6,000; Fixed costs: \u2212\u20AC11,000; Corporate OH: +\u20AC11,900. Total change: +\u20AC5,900 (from \u20AC135,000 to \u20AC140,900).',
      keyTakeaway:
        'The selling price increase (+\u20AC31,000) and the corporate OH reduction (+\u20AC11,900) are the main favorable variances, while material efficiency (\u2212\u20AC30,000) is the largest unfavorable variance.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 2 \u2014 Manager Evaluation',
      questionTitle: 'Q2: Should the CFO congratulate the manager?',
      question:
        'Given that actual profit exceeded budgeted profit, should the CFO congratulate the restaurant manager for his "success" and pay him a bonus? What was the main reason that actual profit exceeded budgeted profit?',
      approach: [
        ' Identify the main driver of the profit increase. Without the corporate OH reduction (+\u20AC11,900), the total variance would be \u2212\u20AC6,000 \u2014 meaning profit would have been below budget. The corporate OH change is the factor that tipped the result from negative to positive.',
        ' Assess controllability. The corporate overhead allocation is determined by headquarters, not by the restaurant manager. The manager has no influence over this variance. Giving credit (or blame) for it would violate the controllability principle.',
        ' Evaluate the manager\'s actual performance. The manager did achieve a higher selling price (+\u20AC31,000) and higher volume (+\u20AC10,000), both favorable. But material efficiency deteriorated significantly (\u2212\u20AC30,000), and fixed costs rose (\u2212\u20AC11,000). The net of controllable variances is approximately zero.',
        ' Conclude. It is not clear the manager deserves congratulations or a bonus. The profit increase was driven by a headquarters accounting change, not by operational excellence.',
      ],
      answer:
        'The main driver of the profit increase was the lower corporate overhead charge (+\u20AC11,900), which is determined by headquarters, not the restaurant manager. It is not clear the manager deserves credit or a bonus for this.',
      keyTakeaway:
        'When evaluating managerial performance, it is important to distinguish between factors within the manager\'s control and those determined by headquarters.',
    },
    // ===== Q3 =====
    {
      id: 'q3',
      partLabel: 'Part 3 \u2014 Outsourcing Decision',
      questionTitle: 'Q3: Was selling the 1,000 additional meals a good decision?',
      question:
        'Was it a good decision to sell the 1,000 additional meals? Should DM have turned down these customers?',
      formulaTex:
        '\\text{Revenue} = 1{,}000 \\times 16 = 16{,}000; \\quad \\text{Outsourcing} = -5{,}000; \\quad \\text{Fixed cost increase} = -11{,}000; \\quad \\text{Net} = 0',
      formulaLegend:
        'Comparing the incremental revenue of 1,000 meals against incremental costs (outsourcing cost + additional fixed costs)',
      approach: [
        ' Identify relevant costs and revenues. The relevance principle says: only costs and revenues that change with the decision matter. Irrelevant items (like materials for in-house meals, corporate OH) should be excluded because they would occur regardless of this decision.',
        ' Compute incremental revenue. Revenue from extra 1,000 meals = 1,000 \u00D7 \u20AC16 = \u20AC16,000.',
        ' Compute incremental costs. Outsourcing cost = \u20AC5,000 (the per-unit cost of having the other restaurant cook). No materials cost because the meals were outsourced, not cooked in-house. Additional fixed costs = \u20AC11,000 (the increase in fixed costs appears related to the higher volume).',
        ' Compute net effect. Net = \u20AC16,000 \u2212 \u20AC5,000 \u2212 \u20AC11,000 = \u20AC0. The two alternatives (selling or turning away) are financially equivalent.',
        ' Consider non-financial factors. Since the financial analysis yields indifference, the decision should be based on non-financial criteria: customer satisfaction, reputation, future demand potential, and the relationship with the outsourcing partner.',
      ],
      answer:
        'The two alternatives are financially equivalent (net effect = \u20AC0). Other criteria such as customer satisfaction and reputation would be needed to make a definitive judgment.',
      keyTakeaway:
        'When a relevance analysis yields indifference, non-financial factors (customer relationships, reputation, future demand) become the deciding criteria.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis with outsourcing',
      'Volume variance with capacity constraints',
      'Material efficiency and price variances',
      'Corporate overhead allocation',
      'Controllability principle',
      'Relevance analysis for outsourcing',
    ],
    keyTheme:
      'Variance analysis at capacity-constrained operations must account for outsourcing effects, and managerial evaluation should focus on controllable variances rather than headquarters-driven allocations.',
  },
}
