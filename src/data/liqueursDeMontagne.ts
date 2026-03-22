import type { Simulation } from './artisanGardeners'

export const LIQUEURS_DE_MONTAGNE: Simulation = {
  id: 'liqueurs-de-montagne',
  title: 'Liqueurs de Montagne (LIMON)',
  caseScenario: [
    'LIMON is a French spirits company with two distilleries: Chartreuse (managed by Claire) and Vercors. Each distillery is treated as an investment center. The bonus system pays 10% of favorable variance (zero if unfavorable). The budget is based on prior year results.',
    'The Chartreuse distillery produces artisanal liqueurs from mountain fruits. In 2021, Chartreuse had budgeted profit of \u20AC1,225,000 but actual profit of \u20AC415,000, a total unfavorable variance of \u20AC810,000.',
    'Corporate overhead is fixed and equally distributed across distilleries (does not depend on volume). Assume 0% tax rate and no trade credit.',
  ],
  tableData: {
    headers: ['', 'Budget 2021', 'Actual 2021'],
    rows: [
      ['Bottles sold', '500,000', '400,000'],
      ['Selling price per bottle', '\u20AC9.00', '\u20AC8.375'],
      ['Fruit per bottle (kilograms)', '0.40', '0.45'],
      ['Price per kilogram of fruit', '\u20AC5.00', '\u20AC5.25'],
      ['Other variable costs per bottle', '\u20AC2.50', '\u20AC2.45'],
      ['Distillery fixed costs', '\u20AC800,000', '\u20AC785,000'],
      ['Corporate overhead allocation', '\u20AC225,000', '\u20AC225,000'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Variance Analysis',
      context: 'Decompose the total unfavorable variance of \u2212\u20ac810,000 in Chartreuse Distillery Profit into individual variances: volume, selling price, fruit efficiency, fruit input price, other variable costs, fixed costs, and corporate overhead.',
    },
    {
      partLabel: 'Part 2 \u2014 New Product Launch',
      context: 'Chartreuse can launch "Cr\u00e8me Exquisite" using spare distillery capacity. Evaluate the effect on LIMON cash flows and Distillery Profit under different corporate overhead allocation methods.',
      tableData: {
        title: 'Cr\u00e8me Exquisite Proposal',
        headers: ['', 'Amount'],
        rows: [
          ['Expected bottles/year', '50,000'],
          ['Selling price per bottle', '\u20ac8.00'],
          ['Variable cost per bottle', '\u20ac5.00'],
          ['Additional fixed costs', '\u20ac0'],
          ['Current OH rate (per bottle)', '\u20ac0.45'],
          ['Distillery capacity', '600,000 bottles'],
        ],
      },
    },
    {
      partLabel: 'Part 3 \u2014 International Pricing',
      context: 'LIMON uses a full-cost-plus-20% pricing policy for Cr\u00e8me Exquisite exports to Foreignland. Evaluate the export price and the death spiral risk when domestic demand drops.',
      tableData: {
        title: 'Export to Foreignland',
        headers: ['', 'Amount'],
        rows: [
          ['Expected export bottles', '25,000'],
          ['Variable cost per bottle', '\u20ac5.00'],
          ['Expected domestic sales', '500,000 bottles'],
          ['Distillery fixed costs', '\u20ac800,000'],
          ['Pricing policy', 'Full cost + 20% markup'],
          ['Distillery capacity', '600,000 bottles'],
        ],
      },
    },
    {
      partLabel: 'Part 4 \u2014 Transfer Pricing',
      context: 'Vercors wants to buy 50,000 bottles of base liqueur from Chartreuse. LIMON uses a full-cost-plus-10% transfer pricing policy. Evaluate the transfer price, cash flow effects, and goal congruence.',
      tableData: {
        title: 'Chartreuse \u2192 Vercors Transfer',
        headers: ['', 'Amount'],
        rows: [
          ['Bottles transferred', '50,000'],
          ['Chartreuse VC per bottle', '\u20ac4.50'],
          ['Vercors external selling price', '\u20ac12.00'],
          ['Vercors processing VC per bottle', '\u20ac3.00'],
          ['Corporate OH per bottle (seller)', '\u20ac0.45'],
          ['Transfer pricing policy', 'Full cost + 10% markup'],
          ['Chartreuse spare capacity', 'Yes'],
        ],
      },
    },
    {
      partLabel: 'Part 4 \u2014 Transfer Pricing (Alternative OH)',
      context: 'Re-examine the Chartreuse\u2192Vercors transfer under an alternative corporate overhead rate of \u20ac0.50 per bottle. Analyze how the higher rate affects the transfer price and goal congruence range.',
    },
    {
      partLabel: 'Part 5 \u2014 System Critique',
      context: 'Analyze LIMON\'s management control system across variance analysis, cost allocation, pricing policy, transfer pricing, and incentive design. Identify weaknesses and propose improvements.',
    },
  ],
  steps: [
    // ===== PART 1 \u2014 Variance Analysis =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q1: Volume Variance',
      question:
        'Compute the difference between the budgeted and actual Distillery Profit values that is due to a change in the number of bottles sold.',
      formulaTex:
        'V_{vol} = (N_a - N_b) \\times CM_b = (400{,}000 - 500{,}000) \\times 4.50 = -\\texteuro 450{,}000',
      formulaLegend:
        'N_a = actual bottles (400,000), N_b = budgeted bottles (500,000), CM_b = budgeted contribution margin per bottle = 9.00 \u2212 (0.40 \u00d7 5.00) \u2212 2.50 = \u20AC4.50',
      approach: [
        'Budgeted CM per bottle = 9.00 \u2212 (0.40 \u00d7 5.00) \u2212 2.50 = 9.00 \u2212 2.00 \u2212 2.50 = \u20AC4.50.',
        'Volume Variance = (400,000 \u2212 500,000) \u00d7 4.50 = \u2212100,000 \u00d7 4.50 = \u2212\u20AC450,000.',
      ],
      answer: '\u2212\u20AC450,000 (Unfavorable)',
      keyTakeaway:
        'Selling 100,000 fewer bottles than planned is the single largest driver of the profit decline.',
    },
    {
      id: 'q2',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q2: Selling Price Variance',
      question:
        'Compute the difference between the budgeted and actual Distillery Profit values that is due to a change in the selling price per bottle.',
      formulaTex:
        'V_{price} = (P_a - P_b) \\times N_a = (8.375 - 9.00) \\times 400{,}000 = -\\texteuro 250{,}000',
      formulaLegend:
        'P_a = actual selling price (\u20AC8.375), P_b = budgeted selling price (\u20AC9.00), N_a = actual bottles sold (400,000)',
      approach: [
        'Price Variance = (8.375 \u2212 9.00) \u00d7 400,000 = \u22120.625 \u00d7 400,000 = \u2212\u20AC250,000.',
      ],
      answer: '\u2212\u20AC250,000 (Unfavorable)',
      keyTakeaway:
        'Selling each bottle at \u20AC0.625 below budget across 400,000 bottles creates a substantial revenue shortfall.',
    },
    {
      id: 'q3',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q3: Fruit Efficiency Variance',
      question:
        'Compute the difference between the budgeted and actual Distillery Profit values that is due to a change in the quantity of fruit used per bottle.',
      formulaTex:
        'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a = -(0.45 - 0.40) \\times 5.00 \\times 400{,}000 = -\\texteuro 100{,}000',
      formulaLegend:
        'Q_a = actual fruit per bottle (0.45 kg), Q_b = budgeted fruit per bottle (0.40 kg), C_b = budgeted price per kg (\u20AC5.00), N_a = actual bottles (400,000)',
      approach: [
        'Each bottle used 0.05 kg more fruit than budgeted.',
        'Efficiency Variance = \u2212(0.45 \u2212 0.40) \u00d7 5.00 \u00d7 400,000 = \u22120.05 \u00d7 5.00 \u00d7 400,000 = \u2212\u20AC100,000.',
      ],
      answer: '\u2212\u20AC100,000 (Unfavorable)',
      keyTakeaway:
        'Using more fruit per bottle than planned increased material costs, valued at the budgeted fruit price.',
    },
    {
      id: 'q4',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q4: Fruit Input Price Variance',
      question:
        'Compute the difference between the budgeted and actual Distillery Profit values that is due to a change in the price per kilogram of fruit.',
      formulaTex:
        'V_{input} = -(C_a - C_b) \\times Q_a \\times N_a = -(5.25 - 5.00) \\times 0.45 \\times 400{,}000 = -\\texteuro 45{,}000',
      formulaLegend:
        'C_a = actual price per kg (\u20AC5.25), C_b = budgeted price per kg (\u20AC5.00), Q_a = actual fruit per bottle (0.45 kg), N_a = actual bottles (400,000)',
      approach: [
        'Fruit cost \u20AC0.25 more per kg than budgeted.',
        'Input Price Variance = \u2212(5.25 \u2212 5.00) \u00d7 0.45 \u00d7 400,000 = \u22120.25 \u00d7 180,000 = \u2212\u20AC45,000.',
      ],
      answer: '\u2212\u20AC45,000 (Unfavorable)',
      keyTakeaway:
        'Higher fruit prices added \u20AC45,000 in costs, evaluated at the actual quantity of fruit consumed.',
    },
    {
      id: 'q5',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q5: Other Variable Cost Variance',
      question:
        'Compute the difference between the budgeted and actual Distillery Profit values that is due to a change in other variable costs per bottle.',
      formulaTex:
        'V_{ovc} = -(OVC_a - OVC_b) \\times N_a = -(2.45 - 2.50) \\times 400{,}000 = +\\texteuro 20{,}000',
      formulaLegend:
        'OVC_a = actual other VC per bottle (\u20AC2.45), OVC_b = budgeted other VC per bottle (\u20AC2.50), N_a = actual bottles (400,000)',
      approach: [
        'Other variable costs per bottle were \u20AC0.05 lower than budgeted.',
        'OVC Variance = \u2212(2.45 \u2212 2.50) \u00d7 400,000 = +0.05 \u00d7 400,000 = +\u20AC20,000.',
      ],
      answer: '+\u20AC20,000 (Favorable)',
      keyTakeaway:
        'A small per-unit saving on other variable costs provided a modest favorable variance.',
    },
    {
      id: 'q6',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q6: Fixed Cost Variance',
      question:
        'Compute the difference between the budgeted and actual Distillery Profit values that is due to a change in distillery fixed costs.',
      formulaTex:
        'V_{FC} = FC_b - FC_a = 800{,}000 - 785{,}000 = +\\texteuro 15{,}000',
      formulaLegend:
        'FC_b = budgeted distillery fixed costs (\u20AC800,000), FC_a = actual distillery fixed costs (\u20AC785,000)',
      approach: [
        'Fixed costs came in \u20AC15,000 under budget: 800,000 \u2212 785,000 = +\u20AC15,000.',
        'Fixed costs are not flexed with volume \u2014 this is a direct budget-to-actual comparison.',
      ],
      answer: '+\u20AC15,000 (Favorable)',
      keyTakeaway:
        'Fixed costs are compared directly between budget and actual without adjusting for volume.',
    },
    {
      id: 'q7',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q7: Corporate Overhead Variance',
      question:
        'Compute the difference between the budgeted and actual Distillery Profit values that is due to a change in corporate overhead allocation.',
      formulaTex:
        'V_{OH} = OH_b - OH_a = 225{,}000 - 225{,}000 = \\texteuro 0',
      formulaLegend:
        'Corporate overhead is a fixed allocation, unchanged between budget and actual',
      approach: [
        'Corporate overhead is fixed at \u20AC225,000 regardless of volume.',
        'No variance: 225,000 \u2212 225,000 = \u20AC0.',
      ],
      answer: '\u20AC0 (No variance)',
      keyTakeaway:
        'The fixed corporate overhead allocation creates no variance here, but its treatment becomes important in later parts of the case.',
    },
    {
      id: 'q8',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: "Q8: Claire's Bonus",
      question:
        "Compute Claire's bonus payment for 2021 under LIMON's incentive system.",
      formulaTex:
        'Bonus = 10\\% \\times \\max(0,\\; \\text{Favorable Variance}) = 10\\% \\times 0 = \\texteuro 0',
      formulaLegend:
        'The bonus is 10% of the total favorable variance. Since the overall variance is unfavorable (\u2212\u20AC810,000), the bonus is zero.',
      approach: [
        'Total variance = \u2212450,000 \u2212 250,000 \u2212 100,000 \u2212 45,000 + 20,000 + 15,000 + 0 = \u2212\u20AC810,000.',
        'The overall variance is unfavorable, so the bonus is \u20AC0.',
      ],
      answer: '\u20AC0',
      keyTakeaway:
        'Despite some favorable variances on fixed costs and other variable costs, the massive unfavorable volume and price variances wipe out any bonus.',
    },

    // ===== PART 2 \u2014 New Product Launch =====
    {
      id: 'q9',
      partLabel: 'Part 2 \u2014 New Product Launch',
      questionTitle: 'Q9: Cash Flow Effect of Cr\u00e8me Exquisite',
      question:
        'Chartreuse can launch "Cr\u00e8me Exquisite" using spare distillery capacity. Expected sales: 50,000 bottles at \u20AC8.00 per bottle, variable cost \u20AC5.00 per bottle, no incremental fixed costs. Compute the effect on LIMON\'s cash flows.',
      formulaTex:
        '\\Delta CF = N \\times (P - VC) = 50{,}000 \\times (8.00 - 5.00) = +\\texteuro 150{,}000',
      formulaLegend:
        'N = 50,000 bottles, P = \u20AC8.00 selling price, VC = \u20AC5.00 variable cost per bottle. No incremental fixed costs or overhead.',
      approach: [
        'Incremental revenue = 50,000 \u00d7 8.00 = \u20AC400,000.',
        'Incremental variable costs = 50,000 \u00d7 5.00 = \u20AC250,000.',
        'Incremental cash flow = 400,000 \u2212 250,000 = +\u20AC150,000.',
        'Fixed costs and corporate overhead do not change, so they are irrelevant for cash flow.',
      ],
      answer: '+\u20AC150,000',
      keyTakeaway:
        'With spare capacity and no incremental fixed costs, the entire contribution margin flows directly to cash.',
    },
    {
      id: 'q10',
      partLabel: 'Part 2 \u2014 New Product Launch',
      questionTitle: 'Q10: Distillery Profit Effect',
      question:
        'Compute the effect of launching Cr\u00e8me Exquisite on the Chartreuse Distillery Profit, given that corporate overhead is allocated at \u20AC0.45 per bottle (\u20AC225,000 / 500,000 bottles).',
      formulaTex:
        '\\Delta DP = N \\times (P - VC - OH_{rate}) = 50{,}000 \\times (8.00 - 5.00 - 0.45) = 50{,}000 \\times 2.55 = +\\texteuro 127{,}500',
      formulaLegend:
        'OH_rate = \u20AC225,000 / 500,000 = \u20AC0.45 per bottle. The per-bottle overhead allocation reduces the profit impact relative to the cash flow effect.',
      approach: [
        'Corporate overhead allocation rate = 225,000 / 500,000 = \u20AC0.45 per bottle.',
        'Incremental OH charged = 50,000 \u00d7 0.45 = \u20AC22,500.',
        'Distillery Profit effect = 150,000 \u2212 22,500 = +\u20AC127,500.',
      ],
      answer: '+\u20AC127,500',
      keyTakeaway:
        'The per-bottle overhead allocation reduces the distillery profit impact by \u20AC22,500 compared to the cash flow effect, but the project remains attractive under both measures.',
    },
    {
      id: 'q11',
      partLabel: 'Part 2 \u2014 New Product Launch',
      questionTitle: 'Q11: Distillery Profit with Capacity-Based OH',
      question:
        'If corporate overhead is instead allocated based on total distillery capacity of 600,000 bottles, recompute the effect on Chartreuse Distillery Profit.',
      formulaTex:
        'OH_{new} = \\frac{225{,}000}{600{,}000} = \\texteuro 0.375 \\quad \\Delta DP = 50{,}000 \\times (8.00 - 5.00 - 0.375) = +\\texteuro 131{,}250',
      formulaLegend:
        'OH_new = corporate overhead allocated over capacity (600,000 bottles) rather than budgeted volume (500,000 bottles)',
      approach: [
        'New OH rate = 225,000 / 600,000 = \u20AC0.375 per bottle.',
        'Incremental OH charged = 50,000 \u00d7 0.375 = \u20AC18,750.',
        'Distillery Profit effect = 150,000 \u2212 18,750 = +\u20AC131,250.',
      ],
      answer: '+\u20AC131,250',
      keyTakeaway:
        'Allocating overhead over capacity rather than budgeted volume reduces the per-unit charge, making new products appear slightly more profitable and better aligning with cash flow incentives.',
    },

    // ===== PART 3 \u2014 International Pricing =====
    {
      id: 'q12',
      partLabel: 'Part 3 \u2014 International Pricing',
      questionTitle: 'Q12: Fixed Cost per Unit for Export Pricing',
      question:
        'LIMON uses a full-cost-plus-20% pricing policy for exports. Chartreuse capacity is 600,000 bottles. Expected domestic sales are 500,000 bottles and expected export sales to Foreignland are 25,000 bottles. Compute the fixed cost per unit used in the pricing formula.',
      formulaTex:
        'FC_{unit} = \\frac{FC}{N_{total}} = \\frac{800{,}000}{525{,}000} = \\texteuro 1.524',
      formulaLegend:
        'FC = budgeted distillery fixed costs (\u20AC800,000), N_total = expected domestic (500,000) + expected export (25,000) = 525,000 bottles',
      approach: [
        'Total expected volume = 500,000 + 25,000 = 525,000 bottles.',
        'Fixed cost per unit = 800,000 / 525,000 = \u20AC1.524 (rounded to 3 decimal places).',
      ],
      answer: '\u20AC1.524 per bottle',
      keyTakeaway:
        'Fixed cost allocation depends on expected total volume. Including export volumes in the denominator slightly lowers the per-unit fixed cost.',
    },
    {
      id: 'q13',
      partLabel: 'Part 3 \u2014 International Pricing',
      questionTitle: 'Q13: Export Price under Full-Cost-Plus-20%',
      question:
        'Compute the export price per bottle of Cr\u00e8me Exquisite using the full-cost-plus-20% policy. Variable cost is \u20AC5.00 per bottle.',
      formulaTex:
        'P_{exp} = (VC + FC_{unit}) \\times 1.20 = (5.00 + 1.524) \\times 1.20 = 6.524 \\times 1.20 = \\texteuro 7.83',
      formulaLegend:
        'VC = \u20AC5.00, FC_unit = \u20AC1.524 (from Q12). Full cost = VC + FC_unit. Markup = 20%.',
      approach: [
        'Full manufacturing cost = 5.00 + 1.524 = \u20AC6.524.',
        'Export price = 6.524 \u00d7 1.20 = \u20AC7.83 (rounded to nearest cent).',
      ],
      answer: '\u20AC7.83 per bottle',
      keyTakeaway:
        'The full-cost-plus pricing formula ensures all costs are covered with a margin, but it makes the price sensitive to volume assumptions.',
    },
    {
      id: 'q14',
      partLabel: 'Part 3 \u2014 International Pricing',
      questionTitle: 'Q14: Cash Flow Effect of Export Sales',
      question:
        'Compute the effect on LIMON\'s cash flows from selling 25,000 bottles of Cr\u00e8me Exquisite to Foreignland in 2022.',
      formulaTex:
        '\\Delta CF = N \\times (P_{exp} - VC) = 25{,}000 \\times (7.83 - 5.00) = 25{,}000 \\times 2.83 = +\\texteuro 70{,}750',
      formulaLegend:
        'N = 25,000 export bottles, P_exp = \u20AC7.83 (from Q13), VC = \u20AC5.00. Fixed costs do not change.',
      approach: [
        'Revenue from exports = 25,000 \u00d7 7.83 = \u20AC195,750.',
        'Variable costs = 25,000 \u00d7 5.00 = \u20AC125,000.',
        'Incremental cash flow = 195,750 \u2212 125,000 = +\u20AC70,750.',
      ],
      answer: '+\u20AC70,750',
      keyTakeaway:
        'Export sales generate positive incremental cash flow because the price exceeds variable cost and fixed costs are sunk.',
    },
    {
      id: 'q15',
      partLabel: 'Part 3 \u2014 International Pricing',
      questionTitle: 'Q15: Death Spiral Risk',
      question:
        'If domestic demand drops by 50,000 bottles to 450,000 in 2023, recompute the export price. Explain the death spiral risk.',
      formulaTex:
        'FC_{unit} = \\frac{800{,}000}{475{,}000} = \\texteuro 1.684 \\quad P_{new} = (5.00 + 1.684) \\times 1.20 = \\texteuro 8.02',
      formulaLegend:
        'N_total = 450,000 + 25,000 = 475,000 bottles. Lower volume raises the FC per unit, which raises the price.',
      approach: [
        'New total expected volume = 450,000 + 25,000 = 475,000 bottles.',
        'New FC per unit = 800,000 / 475,000 = \u20AC1.684.',
        'New full cost = 5.00 + 1.684 = \u20AC6.684.',
        'New export price = 6.684 \u00d7 1.20 = \u20AC8.02.',
        'The price rises from \u20AC7.83 to \u20AC8.02, which may cause further volume losses.',
      ],
      answer: '\u20AC8.02 per bottle (up from \u20AC7.83)',
      keyTakeaway:
        'This illustrates the death spiral: lower volume raises the per-unit fixed cost, which raises the price, which may further reduce demand in a self-reinforcing negative cycle.',
    },

    // ===== PART 4 \u2014 Transfer Pricing =====
    {
      id: 'q16',
      partLabel: 'Part 4 \u2014 Transfer Pricing',
      questionTitle: 'Q16: Transfer Price Computation',
      question:
        'Vercors wants to buy 50,000 bottles of base liqueur from Chartreuse. Chartreuse variable cost is \u20AC4.50 per bottle and has spare capacity. LIMON\u2019s transfer pricing policy is full cost plus 10% markup. With the transfer, Chartreuse produces 550,000 bottles. Corporate overhead is \u20AC0.45 per bottle for the seller. Compute the transfer price.',
      formulaTex:
        'TP = (VC + FC_{unit} + OH) \\times 1.10 = (4.50 + 1.455 + 0.45) \\times 1.10 = 6.405 \\times 1.10 = \\texteuro 7.05',
      formulaLegend:
        'VC = \u20AC4.50, FC_unit = 800,000 / 550,000 = \u20AC1.455, OH = \u20AC0.45/bottle. Full cost = VC + FC_unit + OH. Markup = 10%.',
      approach: [
        'With transfer, total Chartreuse volume = 500,000 + 50,000 = 550,000 bottles.',
        'FC per unit = 800,000 / 550,000 = \u20AC1.455.',
        'Full cost = 4.50 + 1.455 + 0.45 = \u20AC6.405.',
        'Transfer price = 6.405 \u00d7 1.10 = \u20AC7.05 (rounded).',
      ],
      answer: '\u20AC7.05 per bottle',
      keyTakeaway:
        'The full-cost-plus TP includes fixed cost allocation and corporate overhead, making the transfer price substantially higher than the variable cost.',
    },
    {
      id: 'q17',
      partLabel: 'Part 4 \u2014 Transfer Pricing',
      questionTitle: 'Q17: Cash Flow Effect on LIMON',
      question:
        'Vercors sells the finished product externally at \u20AC12.00 per bottle with own processing variable cost of \u20AC3.00 per bottle. Compute the effect on LIMON\'s overall cash flows of the internal transfer.',
      formulaTex:
        '\\Delta CF = N \\times (P_{ext} - VC_{C} - VC_{V}) = 50{,}000 \\times (12.00 - 4.50 - 3.00) = 50{,}000 \\times 4.50 = +\\texteuro 225{,}000',
      formulaLegend:
        'P_ext = Vercors external price (\u20AC12.00), VC_C = Chartreuse variable cost (\u20AC4.50), VC_V = Vercors processing cost (\u20AC3.00). Transfer price cancels at company level.',
      approach: [
        'External revenue = 50,000 \u00d7 12.00 = \u20AC600,000.',
        'Total variable costs = 50,000 \u00d7 (4.50 + 3.00) = 50,000 \u00d7 7.50 = \u20AC375,000.',
        'Incremental cash flow = 600,000 \u2212 375,000 = +\u20AC225,000.',
        'The transfer price is irrelevant at the company level \u2014 it is an internal transaction that cancels out.',
      ],
      answer: '+\u20AC225,000',
      keyTakeaway:
        'At the company level, only external revenues and incremental costs matter. The transfer price is an internal allocation that nets to zero.',
    },
    {
      id: 'q18',
      partLabel: 'Part 4 \u2014 Transfer Pricing',
      questionTitle: 'Q18: Effect on Chartreuse Distillery Profit',
      question:
        'Compute the effect of the internal transfer on Chartreuse\'s Distillery Profit.',
      formulaTex:
        '\\Delta DP_C = N \\times (TP - VC - OH) = 50{,}000 \\times (7.05 - 4.50 - 0.45) = 50{,}000 \\times 2.10 = +\\texteuro 105{,}000',
      formulaLegend:
        'TP = \u20AC7.05 (transfer price), VC = \u20AC4.50 (Chartreuse variable cost), OH = \u20AC0.45 (corporate overhead per bottle)',
      approach: [
        'Transfer revenue = 50,000 \u00d7 7.05 = \u20AC352,500.',
        'Incremental variable cost = 50,000 \u00d7 4.50 = \u20AC225,000.',
        'Incremental overhead charge = 50,000 \u00d7 0.45 = \u20AC22,500.',
        'Chartreuse \u0394DP = 352,500 \u2212 225,000 \u2212 22,500 = +\u20AC105,000.',
      ],
      answer: '+\u20AC105,000',
      keyTakeaway:
        'Chartreuse benefits from the transfer because the transfer price exceeds its variable cost plus overhead allocation.',
    },
    {
      id: 'q19',
      partLabel: 'Part 4 \u2014 Transfer Pricing',
      questionTitle: 'Q19: Effect on Vercors Distillery Profit',
      question:
        'Compute the effect of the internal transfer on Vercors\'s Distillery Profit.',
      formulaTex:
        '\\Delta DP_V = N \\times (P_{ext} - TP - VC_V) = 50{,}000 \\times (12.00 - 7.05 - 3.00) = 50{,}000 \\times 1.95 = +\\texteuro 97{,}500',
      formulaLegend:
        'P_ext = \u20AC12.00 external selling price, TP = \u20AC7.05 transfer price paid, VC_V = \u20AC3.00 Vercors processing cost',
      approach: [
        'Revenue per bottle = \u20AC12.00.',
        'Cost per bottle = 7.05 (TP) + 3.00 (own VC) = \u20AC10.05.',
        'Margin per bottle = 12.00 \u2212 10.05 = \u20AC1.95.',
        'Vercors \u0394DP = 50,000 \u00d7 1.95 = +\u20AC97,500.',
      ],
      answer: '+\u20AC97,500',
      keyTakeaway:
        'Both divisions profit from the transfer. The sum of divisional profit effects (\u20AC105,000 + \u20AC97,500 = \u20AC202,500) differs from the company cash flow effect (\u20AC225,000) due to overhead allocation.',
    },
    {
      id: 'q20',
      partLabel: 'Part 4 \u2014 Transfer Pricing',
      questionTitle: 'Q20: Goal Congruence Range',
      question:
        'Determine the range of transfer prices that achieves goal congruence, and assess whether the current transfer price falls within it.',
      formulaTex:
        'TP_{min} = VC_C + OH = 4.50 + 0.45 = \\texteuro 4.95 \\quad TP_{max} = P_{ext} - VC_V = 12.00 - 3.00 = \\texteuro 9.00',
      formulaLegend:
        'TP_min = Chartreuse minimum (VC + OH, since spare capacity means opportunity cost = 0). TP_max = Vercors maximum (external price minus own processing cost).',
      approach: [
        'Chartreuse minimum: VC + OH = 4.50 + 0.45 = \u20AC4.95 (spare capacity, so opportunity cost is zero).',
        'Vercors maximum: External price \u2212 own VC = 12.00 \u2212 3.00 = \u20AC9.00.',
        'Goal congruence range: \u20AC4.95 \u2264 TP \u2264 \u20AC9.00.',
        'Current TP = \u20AC7.05, which falls within the range. Goal congruence is achieved.',
      ],
      answer: '\u20AC4.95 \u2264 TP \u2264 \u20AC9.00. Current TP (\u20AC7.05) is within range.',
      keyTakeaway:
        'The current full-cost-plus TP happens to fall within the goal congruence range, so both divisions are willing to trade. This is not always the case with full-cost-plus policies.',
    },
    {
      id: 'q21',
      partLabel: 'Part 4 \u2014 Transfer Pricing (Alternative OH)',
      questionTitle: 'Q21: Cash Flow with Alternative OH Allocation',
      question:
        'If corporate overhead is instead allocated at \u20AC0.50 per bottle (a higher rate), compute the effect on LIMON\'s cash flows from the transfer.',
      formulaTex:
        '\\Delta CF = 50{,}000 \\times (12.00 - 4.50 - 3.00) = +\\texteuro 225{,}000',
      formulaLegend:
        'Cash flows are unchanged because corporate overhead is an internal allocation, not a cash cost. The overhead rate does not affect incremental cash flows.',
      approach: [
        'The corporate overhead allocation rate changes only the internal accounting treatment.',
        'Cash flows depend on external revenues and actual variable costs, both unchanged.',
        'Incremental cash flow remains 50,000 \u00d7 (12.00 \u2212 4.50 \u2212 3.00) = +\u20AC225,000.',
      ],
      answer: '+\u20AC225,000 (unchanged)',
      keyTakeaway:
        'Corporate overhead is an allocation, not an incremental cash cost. Changing the allocation method never affects the company\'s actual cash flows.',
    },
    {
      id: 'q22',
      partLabel: 'Part 4 \u2014 Transfer Pricing (Alternative OH)',
      questionTitle: 'Q22: New Transfer Price with Higher OH',
      question:
        'With the alternative overhead rate of \u20AC0.50 per bottle, recompute the transfer price using the full-cost-plus-10% policy.',
      formulaTex:
        'TP_{new} = (4.50 + 1.455 + 0.50) \\times 1.10 = 6.455 \\times 1.10 = \\texteuro 7.10',
      formulaLegend:
        'VC = \u20AC4.50, FC_unit = \u20AC1.455, OH_new = \u20AC0.50. Full cost increases by \u20AC0.05, TP increases by \u20AC0.055.',
      approach: [
        'New full cost = 4.50 + 1.455 + 0.50 = \u20AC6.455.',
        'New TP = 6.455 \u00d7 1.10 = \u20AC7.10 (rounded).',
        'The TP increased by \u20AC0.05 due to the higher overhead rate.',
      ],
      answer: '\u20AC7.10 per bottle',
      keyTakeaway:
        'A higher overhead allocation rate mechanically increases the full-cost TP, shifting profit from buyer to seller without changing the underlying economics.',
    },
    {
      id: 'q23',
      partLabel: 'Part 4 \u2014 Transfer Pricing (Alternative OH)',
      questionTitle: 'Q23: Goal Congruence Range with Higher OH',
      question:
        'With the alternative overhead rate of \u20AC0.50 per bottle applied to both the seller and buyer, recompute the goal congruence range.',
      formulaTex:
        'TP_{min} = 4.50 + 0.50 = \\texteuro 5.00 \\quad TP_{max} = 12.00 - 3.00 - 0.50 = \\texteuro 8.50',
      formulaLegend:
        'TP_min = Chartreuse VC + new OH = \u20AC5.00. TP_max = Vercors external price \u2212 own VC \u2212 own OH charge = \u20AC8.50.',
      approach: [
        'Chartreuse minimum: VC + OH = 4.50 + 0.50 = \u20AC5.00.',
        'Vercors maximum: 12.00 \u2212 3.00 \u2212 0.50 = \u20AC8.50 (buyer also bears overhead on purchased bottles).',
        'Goal congruence range: \u20AC5.00 \u2264 TP \u2264 \u20AC8.50.',
        'The new TP of \u20AC7.10 still falls within this range.',
      ],
      answer: '\u20AC5.00 \u2264 TP \u2264 \u20AC8.50. Current TP (\u20AC7.10) is within range.',
      keyTakeaway:
        'The higher overhead rate narrows the goal congruence range from both ends. If overhead were high enough, it could squeeze the range until goal congruence becomes impossible.',
    },
    {
      id: 'q24',
      partLabel: 'Part 4 \u2014 Transfer Pricing (Alternative OH)',
      questionTitle: 'Q24: Sensitivity of Goal Congruence to OH Rate',
      question:
        'At what corporate overhead rate per bottle would the goal congruence range collapse, making the transfer impossible regardless of the transfer price?',
      formulaTex:
        'TP_{min} = TP_{max} \\Rightarrow 4.50 + OH = 12.00 - 3.00 - OH \\Rightarrow 2 \\times OH = 4.50 \\Rightarrow OH = \\texteuro 2.25',
      formulaLegend:
        'Setting the seller minimum equal to the buyer maximum and solving for the overhead rate at which the range vanishes.',
      approach: [
        'Seller minimum: 4.50 + OH.',
        'Buyer maximum: 12.00 \u2212 3.00 \u2212 OH = 9.00 \u2212 OH.',
        'Range collapses when 4.50 + OH = 9.00 \u2212 OH.',
        'Solving: 2 \u00d7 OH = 4.50, so OH = \u20AC2.25 per bottle.',
        'At any OH rate above \u20AC2.25, no TP can satisfy both divisions.',
      ],
      answer: '\u20AC2.25 per bottle',
      keyTakeaway:
        'Corporate overhead allocation acts as a tax on internal trade. If the rate is too high, it destroys the gains from trade and no transfer price can achieve goal congruence.',
    },

    // ===== PART 5 \u2014 System Critique =====
    {
      id: 'q25',
      partLabel: 'Part 5 \u2014 System Critique',
      questionTitle: 'System Critique',
      question:
        "Analyze LIMON's management control system across variance analysis, cost allocation, pricing policy, transfer pricing, and incentive design. Identify weaknesses and propose improvements.",
      approach: [
        'Variance analysis: The budget was set at 500,000 bottles but actual was 400,000. Consider decomposing the volume variance into market size and market share components. The efficiency variance on fruit usage is unfavorable \u2014 investigate whether the quality of mountain fruits required more kg per bottle.',
        'Cost allocation: Corporate overhead is allocated as a fixed amount per distillery, which avoids distortions from volume changes. However, when applied per-bottle for pricing or TP purposes, it makes prices volume-dependent. Allocating over capacity (600,000 bottles) rather than expected volume would reduce death spiral risk.',
        'Pricing policy: Full-cost-plus-20% makes the export price sensitive to volume assumptions (Q15 death spiral). When domestic demand falls, prices rise, potentially losing export customers. Consider separating the pricing decision from cost allocation by using market-based or target-cost approaches.',
        'Transfer pricing: Full-cost-plus-10% works in this case because the TP (\u20AC7.05) falls within the goal congruence range (\u20AC4.95\u2013\u20AC9.00). However, this is fragile \u2014 a higher overhead rate could destroy congruence (Q24). A negotiated TP or variable-cost-plus approach would be more robust.',
        'Incentive design: The bonus of 10% of favorable variance (zero if unfavorable) is asymmetric. Claire earns nothing in 2021 despite favorable FC and OVC variances. This may discourage risk-taking and could lead to budget gaming (sandbagging targets). Consider a more balanced scheme that rewards improvements on controllable items even when the overall result is unfavorable.',
      ],
      answer:
        'Key issues: (1) Volume-based cost allocation creates death spiral risk in export pricing, (2) full-cost TP works here but is fragile to overhead rate changes, (3) the all-or-nothing bonus structure discourages risk-taking and may induce budget gaming, (4) the variance analysis does not decompose volume into market size vs share.',
      keyTakeaway:
        'LIMON\'s system has interconnected weaknesses rooted in full-cost allocation. The cost allocation method cascades through pricing, transfer pricing, and incentive calculations, creating fragility and potential misalignment between divisional and corporate interests.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis: volume, price, efficiency, input price, other VC, fixed cost, and overhead variances',
      'Relevance: cash flow vs distillery profit, impact of overhead allocation method',
      'Pricing: full-cost-plus markup, death spiral risk from volume-dependent FC allocation',
      'Transfer pricing: full-cost-plus TP, goal congruence range, sensitivity to overhead rates',
      'Incentive design: asymmetric bonus structure, budget gaming risk',
      'System critique across all five dimensions of management control',
    ],
    keyTheme:
      'LIMON illustrates how full-cost allocation cascades through the entire control system: it inflates export prices under demand shocks, creates fragility in transfer pricing congruence, and interacts with an asymmetric bonus structure to potentially discourage value-creating behavior.',
  },
}
