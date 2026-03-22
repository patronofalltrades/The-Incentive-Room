import type { Simulation } from './artisanGardeners'

export const BARCELONA_MED_FOOD: Simulation = {
  id: 'barcelona-med-food',
  title: 'Barcelona Mediterranean Food (BMF)',
  caseScenario: [
    "The CFO of Barcelona Mediterranean Food (BMF) was preparing for the annual performance review of his downtown Barcelona restaurant. After an exceptionally good year in 2013, the CFO budgeted similarly good results for 2014 (budget = actual 2013 results).",
    "The restaurant's maximum internal cooking capacity is 30,000 meals. Meals above this capacity are outsourced at \u20AC5.00 per meal. A part-time waiter is employed only when sales exceed 30,000 meals (\u20AC11,000/year). Corporate overhead is allocated at a rate per meal served. Demand is perfectly stable across the year (half in each 6-month period).",
    "In 2014, the outsource supplier had a fire on New Year's Day and could not deliver for 6 months. During H1: demand, prices, and variable costs were as budgeted, but no outsourced meals were delivered (BMF turned away customers). The supplier compensated BMF with the planned contribution margin on the 500 undelivered meals. During H2: demand dropped significantly, BMF discontinued the supplier contract, fired the part-time waiter, dropped meal prices, found variable cost savings, and the corporate OH allocation rate changed.",
  ],
  tableData: {
    headers: ['', 'Budget', 'Actual'],
    rows: [
      ['Meals sold (units)', '31,000', '29,000'],
      ['  Of which: cooked in-house', '30,000', '29,000'],
      ['  Of which: outsourced', '1,000', '0'],
      ['Meal price (per unit)', '\u20AC16', '\u20AC14 (avg)'],
      ['Materials volume', '12,000 kg', '11,000 kg'],
      ['Materials input price', '\u20AC10.50/kg', '\u20AC9.60/kg'],
      ['Cost of outsourced meals', '\u20AC5,000', '\u2013'],
      ['Part-time waiter', '\u20AC11,000', '\u20AC5,500 (avg)'],
      ['Other fixed costs', '\u20AC210,000', '\u20AC210,000'],
      ['Compensation from outsourcer', '\u2013', '\u20AC5,500'],
      ['Corporate OH rate', '\u20AC0.10/meal', '\u20AC0.05/meal'],
      ['Corporate OH', '\u20AC3,100', '\u20AC1,450'],
      ['Restaurant profit', '\u20AC140,900', '\u20AC88,950'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Variance Analysis',
      context:
        "Perform a comprehensive variance analysis to explain the difference between budgeted profit (\u20AC140,900) and actual profit (\u20AC88,950). Decompose into: (a) sales volume impact (contribution margin, part-time waiter, compensation from outsourcer), (b) selling price variance, (c) variable cost variance (efficiency and input price), and (d) other variances. Note: H1 price = \u20AC16, H2 price = \u20AC12 (average = \u20AC14). H1 part-time waiter = \u20AC11,000, H2 = \u20AC0 (average = \u20AC5,500). Budgeted efficiency = 12,000/30,000 = 0.4 kg/meal. Actual efficiency = 11,000/29,000 \u2248 0.379 kg/meal.",
    },
    {
      partLabel: 'Part 2 \u2014 Main Driver of Profit Shortfall',
      context:
        'Based on your variance analysis, identify the main reason that actual profit fell well short of budgeted profit.',
    },
  ],
  steps: [
    // ===== PART 1 =====
    {
      id: 'bmf-q1',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q1: Sales Volume Variance (Total)',
      question:
        'Compute the impact of the drop in volume, including the effect on the contribution margin, the payment of the part-time waiter, and the compensation from the outside provider of meals.',
      formulaTex:
        'V_{vol} = [(29-31) \\times 16{,}000] + [-(29-30) \\times 0.4 \\times 10.5 \\times 1{,}000] + [-5{,}500-(-11{,}000)] + [0-(-5{,}000)] + [5{,}500-0] + [-0.1 \\times (29-31) \\times 1{,}000] = -11{,}600',
      formulaLegend:
        'Components: revenue loss, materials savings (in-house only), part-time waiter savings, outsourced meal cost savings, compensation received, corporate OH savings',
      approach: [
        'Step 1: Compute the revenue loss from selling fewer meals. The restaurant sold 29,000 vs. 31,000 budgeted. At the budgeted price of \u20AC16: revenue effect = (29,000 \u2212 31,000) \u00D7 \u20AC16 = \u2212\u20AC32,000. This is the gross revenue impact of 2,000 fewer meals.',
        'Step 2: Compute the materials savings on the 1,000 fewer in-house meals. Only in-house meals use materials. In-house meals dropped from 30,000 to 29,000 (1,000 fewer). At the budgeted efficiency of 0.4 kg/meal and \u20AC10.50/kg: savings = \u2212(29,000 \u2212 30,000) \u00D7 0.4 \u00D7 \u20AC10.50 = +\u20AC4,200.',
        'Step 3: Compute the part-time waiter savings. The waiter is only needed when volume exceeds 30,000. Since actual volume was 29,000, the waiter was let go in H2. Savings = \u2212\u20AC5,500 \u2212 (\u2212\u20AC11,000) = +\u20AC5,500. This is a step-cost effect: dropping below the threshold eliminates the cost.',
        'Step 4: Compute the outsourced meal cost savings. No meals were outsourced, saving the full outsourcing cost. Savings = 0 \u2212 (\u2212\u20AC5,000) = +\u20AC5,000.',
        'Step 5: Add the compensation received from the outsourcer. The outsourcer compensated BMF for the contribution margin on the 500 meals it failed to deliver in H1: 500 \u00D7 (\u20AC16 \u2212 \u20AC5) = +\u20AC5,500.',
        'Step 6: Compute corporate OH savings from lower volume. OH savings = \u2212\u20AC0.10 \u00D7 (29,000 \u2212 31,000) = +\u20AC200.',
        'Step 7: Sum all volume-related effects. Total volume variance = \u2212\u20AC32,000 + \u20AC4,200 + \u20AC5,500 + \u20AC5,000 + \u20AC5,500 + \u20AC200 = \u2212\u20AC11,600. The revenue loss dominates, but cost savings partially offset it.',
      ],
      answer: '\u2212\u20AC11,600 (Unfavorable)',
      keyTakeaway:
        'The volume decline cost \u20AC32,000 in revenue but was partially offset by cost savings from fewer in-house meals, no outsourcing costs, waiter savings, outsourcer compensation, and lower OH.',
    },
    {
      id: 'bmf-q2',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q2: Selling Price Variance',
      question: 'Compute the impact of the lower meal price.',
      formulaTex:
        'V_{price} = 29{,}000 \\times (14 - 16) = 29{,}000 \\times (-2) = -58{,}000',
      formulaLegend:
        'Actual avg price = \u20AC14, Budget price = \u20AC16, applied to actual volume of 29,000 meals',
      approach: [
        'Step 1: Understand what the price variance isolates. It measures the impact of charging a different price than budgeted, evaluated at the actual volume. This way it does not double-count the volume effect.',
        'Step 2: Identify the prices. Budget price = \u20AC16. Actual average price = \u20AC14 (H1 at \u20AC16, H2 at \u20AC12, averaging to \u20AC14). The \u20AC2 drop is entirely due to the H2 price reduction to attract customers after the supply disruption.',
        'Step 3: Compute the variance. Selling price variance = 29,000 \u00D7 (\u20AC14 \u2212 \u20AC16) = 29,000 \u00D7 (\u2212\u20AC2) = \u2212\u20AC58,000. This is the single largest variance in the entire analysis.',
      ],
      answer: '\u2212\u20AC58,000 (Unfavorable)',
      keyTakeaway:
        'The price reduction is by far the largest negative variance. Dropping the average price by \u20AC2 (from \u20AC16 to an average of \u20AC14, driven by the H2 reduction to \u20AC12) cost \u20AC58,000.',
    },
    {
      id: 'bmf-q3',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q3: Input Efficiency Variance',
      question:
        'Compute the impact of the variable cost of internal production due to production efficiency (kg of materials per meal).',
      formulaTex:
        'V_{eff} = -29{,}000 \\times \\left(\\frac{11{,}000}{29{,}000} - \\frac{12{,}000}{30{,}000}\\right) \\times 10.50 = -29{,}000 \\times (0.379 - 0.400) \\times 10.50 = +6{,}300',
      formulaLegend:
        'Actual efficiency = 11,000/29,000 \u2248 0.379 kg/meal; Budget efficiency = 12,000/30,000 = 0.400 kg/meal; valued at budget price \u20AC10.50/kg',
      approach: [
        'Step 1: Understand what the efficiency variance isolates. It measures the impact of using more or less input per unit of output than budgeted, valued at the budgeted input price. This separates the "how much material per meal" question from the "how much does material cost" question.',
        'Step 2: Compute the efficiency ratios. Budget efficiency = 12,000 kg / 30,000 meals = 0.400 kg/meal. Actual efficiency = 11,000 kg / 29,000 meals \u2248 0.379 kg/meal. The restaurant used 0.021 fewer kg per meal than budgeted.',
        'Step 3: Compute the variance. Valued at the budgeted price (\u20AC10.50/kg) to isolate the pure efficiency effect: Variance = \u221229,000 \u00D7 (0.379 \u2212 0.400) \u00D7 \u20AC10.50 = \u221229,000 \u00D7 (\u22120.021) \u00D7 \u20AC10.50 \u2248 +\u20AC6,300. This is favorable \u2014 the kitchen used less material per meal.',
      ],
      answer: '+\u20AC6,300 (Favorable)',
      keyTakeaway:
        'The restaurant manager improved material efficiency, using slightly less material per meal than budgeted.',
    },
    {
      id: 'bmf-q4',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q4: Input Price Variance',
      question:
        'Compute the impact of the variable cost of internal production due to input prices (price per kg of materials).',
      formulaTex:
        'V_{input} = -29{,}000 \\times 0.379 \\times (9.60 - 10.50) = -29{,}000 \\times 0.379 \\times (-0.90) \\approx +9{,}900',
      formulaLegend:
        'Actual price = \u20AC9.60/kg; Budget price = \u20AC10.50/kg; applied to actual quantity used',
      approach: [
        'Step 1: Understand what the input price variance isolates. It measures the impact of paying a different price per kg of materials than budgeted, evaluated at the actual quantity consumed. By using actual quantity, this variance captures the full effect of price on what was actually purchased.',
        'Step 2: Identify the prices and quantity. Budget price = \u20AC10.50/kg. Actual price = \u20AC9.60/kg (a \u20AC0.90 saving). Actual quantity per meal = 0.379 kg.',
        'Step 3: Compute the variance. Input price variance = \u221229,000 \u00D7 0.379 \u00D7 (\u20AC9.60 \u2212 \u20AC10.50) = \u221229,000 \u00D7 0.379 \u00D7 (\u2212\u20AC0.90) \u2248 +\u20AC9,900. This is favorable \u2014 BMF secured cheaper materials in H2.',
      ],
      answer: '+\u20AC9,900 (Favorable)',
      keyTakeaway:
        'Material prices fell by \u20AC0.90/kg, contributing a favorable \u20AC9,900 variance.',
    },
    {
      id: 'bmf-q5',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q5: Corporate OH Rate Variance',
      question:
        'Compute the impact of the change in the corporate overhead allocation rate.',
      formulaTex:
        'V_{OH} = -29{,}000 \\times (0.05 - 0.10) = -29{,}000 \\times (-0.05) = +1{,}450',
      formulaLegend:
        'OH rate fell from \u20AC0.10/meal to \u20AC0.05/meal; applied to 29,000 actual meals',
      approach: [
        'Step 1: Understand what this variance isolates. The corporate OH rate change is determined by headquarters, not the restaurant manager. This variance captures the impact of the headquarters\' internal accounting change on the restaurant\'s reported profit.',
        'Step 2: Identify the rates. Budget OH rate = \u20AC0.10/meal. Actual OH rate = \u20AC0.05/meal. The rate was halved, likely due to corporate-level cost changes.',
        'Step 3: Compute the variance at actual volume. OH rate variance = \u221229,000 \u00D7 (\u20AC0.05 \u2212 \u20AC0.10) = \u221229,000 \u00D7 (\u2212\u20AC0.05) = +\u20AC1,450. Favorable, but entirely outside the restaurant manager\'s control.',
      ],
      answer: '+\u20AC1,450 (Favorable)',
      keyTakeaway:
        'The halving of the corporate OH rate saved \u20AC1,450, a small favorable variance reflecting changes in headquarters\u2019 internal accounting.',
    },
    {
      id: 'bmf-q6',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q6: Variance Reconciliation',
      question: 'Verify that all variances sum to the total profit difference.',
      formulaTex:
        '\\text{Total} = -11{,}600 + (-58{,}000) + 6{,}300 + 9{,}900 + 1{,}450 = -51{,}950',
      formulaLegend:
        'Budget profit = \u20AC140,900; Actual profit = \u20AC88,950; Difference = \u2212\u20AC51,950',
      approach: [
        'Step 1: List all variances to verify completeness. A correct variance analysis must sum exactly to the total profit difference. This is the integrity check.',
        'Step 2: Sum the variances. Volume: \u2212\u20AC11,600 + Selling price: \u2212\u20AC58,000 + Input efficiency: +\u20AC6,300 + Input price: +\u20AC9,900 + Corporate OH rate: +\u20AC1,450 = \u2212\u20AC51,950.',
        'Step 3: Verify against the profit difference. Budget profit \u2212 Actual profit = \u20AC140,900 \u2212 \u20AC88,950 = \u20AC51,950. The variances reconcile exactly, confirming the analysis is complete and no variance has been missed.',
      ],
      answer: '\u2212\u20AC51,950 (reconciles to profit shortfall)',
      keyTakeaway:
        'All variances sum exactly to the \u20AC51,950 profit shortfall, confirming the analysis is complete and consistent.',
    },
    // ===== PART 2 =====
    {
      id: 'bmf-q7',
      partLabel: 'Part 2 \u2014 Main Driver of Profit Shortfall',
      questionTitle: 'Q7: Main Reason for Profit Shortfall',
      question:
        'Based on your variance analysis, what was the main reason that actual profit fell well short of budgeted profit?',
      approach: [
        'Step 1: Identify the dominant variance. The selling price variance of \u2212\u20AC58,000 is by far the largest unfavorable variance, accounting for more than the entire profit shortfall. Without it, the other variances would have netted to approximately +\u20AC6,000.',
        'Step 2: Trace the cause. The price drop (from \u20AC16 to an average of \u20AC14, with H2 at \u20AC12) was the restaurant manager\u2019s response to the demand drop caused by turning away customers during the H1 supply disruption. He cut prices aggressively to re-attract customers.',
        'Step 3: Evaluate the decision. The price adjustment may have been an overreaction. The volume variance (\u2212\u20AC11,600) was relatively modest thanks to cost savings and outsourcer compensation. The manager traded \u20AC58,000 in price to recover some volume, but the net outcome was worse.',
        'Step 4: Note the limitation. This conclusion is tentative: we do not know what demand would have been in H2 without the price reduction. It is possible that without the cut, volume would have been even lower.',
      ],
      answer:
        'The main driver is the significant decrease in price (\u2212\u20AC58,000), which displays by far the largest negative variance. The price adjustment to re-attract customers after the H1 supply disruption may have been an exaggerated response.',
      keyTakeaway:
        'The price reduction was the dominant cause of the profit shortfall, overshadowing all other variances combined. Whether it was justified depends on the counterfactual demand without the price cut.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis: volume (multi-component), selling price, input efficiency, input price, corporate OH rate variances',
      'Supply chain disruption: outsourcer failure, contractual compensation, capacity constraints',
      'Pricing decisions: price reduction as demand recovery strategy and its profit impact',
      'Semi-fixed costs: part-time waiter as a step cost tied to volume threshold',
    ],
    keyTheme:
      'Barcelona Mediterranean Food illustrates how a supply chain disruption cascades into demand loss and price reductions, with the variance analysis revealing that the managerial response (price cutting) caused more profit damage than the original volume decline.',
  },
}
