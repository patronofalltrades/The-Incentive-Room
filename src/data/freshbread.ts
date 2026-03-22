import type { Simulation } from './artisanGardeners'

export const FRESHBREAD: Simulation = {
  id: 'freshbread',
  title: 'FreshBread (FB)',
  caseScenario: [
    'FreshBread (FB) is a company specialized in the mass production of bread that operates in a country called "Remoteland". The company is organized by geographical divisions. All divisions are treated as investment centers.',
    'The compensation of divisional managers includes a fixed salary and an annual bonus that varies with "Divisional Profit". The bonus is 10% of the increase of this performance measure relative to the prior year; if the value of the metric decreases, then the bonus is zero.',
    'Division 1 is led by a manager named Nancy. Up to 2020, Division 1 only produced one type of bread of average quality ("regular") sold to bakery shops. Baguettes are sold in boxes of 40. FB uses variable costing for inventory valuation. Production volume equals sales volume.',
    'Divisional OH includes fixed salaries, depreciation, and rent. Maximum production capacity of Division 1 is 150,000 boxes. Corporate OH is a fixed allocation equally distributed across divisions. The headquarters work at full capacity.',
  ],
  tableData: {
    headers: ['', '2019', '2020'],
    rows: [
      ['Total revenues (\'000 $)', '1,500', '1,330'],
      ['  Volume (\'000 boxes)', '150', '140'],
      ['  Average price per box ($)', '10', '9.5'],
      ['Total variable costs (\'000 $)', '690', '630'],
      ['  Cost of bread premix (\'000 $)', '360', '350'],
      ['    Total use of bread premix (\'000 kg)', '900', '700'],
      ['  Other variable costs (\'000 $)', '330', '280'],
      ['Total fixed costs (\'000 $)', '732', '732'],
      ['  Divisional OH (\'000 $)', '600', '600'],
      ['  Corporate OH (\'000 $)', '132', '132'],
      ['Divisional Profit (\'000 $)', '78', '-32'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1.a — Variance Analysis',
      context:
        'Using the information in Table 1, perform a variance analysis to explain the difference between Divisional Profit in 2019 and 2020 for Division 1.',
      tableData: {
        title: 'Derived Unit Figures',
        headers: ['', '2019', '2020'],
        rows: [
          ['Selling price ($/box)', '10', '9.5'],
          ['Efficiency ratio (kg/box)', '900/150 = 6', '700/140 = 5'],
          ['Input price ($/kg)', '360/900 = 0.4', '350/700 = 0.5'],
          ['Other VC ($/box)', '330/150 = 2.2', '280/140 = 2'],
        ],
      },
    },
    {
      partLabel: 'Part 1.b — Idle Capacity Exclusion',
      context:
        'The headquarters decide not to include the cost of idle capacity in the computation of Divisional Profit. Divisional OH is allocated based on the proportion of actual volume produced with respect to the maximum production capacity (150,000 boxes). Allocation rate: 600/150 = $4/box.',
    },
    {
      partLabel: 'Part 2.a — Launching Gourmand',
      context:
        'Ignore Part 1. Expected 2021 sales and unit costs were the same as 2020. Nancy launches a new multigrain bread called "Gourmand" in addition to "Regular" bread.',
      tableData: {
        title: 'Gourmand Estimated Data',
        headers: ['', 'Amount'],
        rows: [
          ['Sales of Gourmand (\'000 boxes)', '50'],
          ['Average price per box ($)', '15'],
          ['Variable cost — bread premix ($/box)', '4'],
          ['Variable cost — other ($/box)', '3'],
          ['Additional Divisional OH (\'000 $)', '100'],
          ['Additional Corporate OH (\'000 $)', '0'],
        ],
        notes: [
          'Additional Divisional OH corresponds to hiring additional workers (all workers can work on both products).',
          'This increase in personnel raises production capacity to 200,000 boxes per year.',
          'Nancy estimates Division 1 could produce all Gourmand boxes using existing facilities, machinery, and equipment.',
        ],
      },
    },
    {
      partLabel: 'Part 2.b — Gourmand with Idle Capacity Exclusion',
      context:
        'As in Part 1.b, the headquarters decide not to include the cost of idle capacity in the computation of Divisional Profit. Divisional OH is allocated based on the proportion of realized production volume with respect to maximum production capacity.',
    },
    {
      partLabel: 'Part 3 — Product Profitability',
      context:
        'Ignore Part 1. Follows from Part 2. The CFO asks Nancy for a profitability report. Cost system #1 fully allocates total fixed costs (Divisional OH + Corporate OH) between the two products based on the proportion of revenues from each product. In 2021, Regular data matches 2020 from Table 1; Gourmand data matches Table 2.',
    },
    {
      partLabel: 'Part 4.a — Internal Transfer Pricing',
      context:
        'Ignore Parts 1-3. Expected 2021 data same as 2020. Division 1 produces only Regular bread. A new client approaches Division 2 with a one-time order for 10,000 boxes at $7/box. Division 2 lacks capacity and may ask Division 1 to produce. Transfer price = variable cost + fixed cost per unit (total fixed costs / 150,000 boxes = $4.88/box). Transportation costs of $10,000 are charged to Division 2. Division 1 has no alternative use for excess capacity.',
      tableData: {
        title: 'Transfer Pricing Setup',
        headers: ['', 'Amount'],
        rows: [
          ['Order size', '10,000 boxes'],
          ['Client willing to pay', '$7/box'],
          ['Transfer price (full cost)', 'VC + 732/150 = $4.5 + $4.88 = $9.38/box'],
          ['Transportation cost', '$10,000 (charged to Division 2)'],
          ['Division 1 spare capacity', '10,000 boxes (150k − 140k)'],
        ],
      },
    },
    {
      partLabel: 'Part 4.b — External Supplier Option',
      context:
        'Division 2 also has the option to purchase the 10,000 boxes from an external supplier for $6/box. No significant quality differences. Division 2 pays $10,000 transportation from the external supplier as well.',
    },
    {
      partLabel: 'Part 4.c — Transfer Pricing with Idle Capacity Exclusion',
      context:
        'Ignore Part 4.b. As in Parts 1.b and 2.b, the headquarters dictates that idle capacity cost should not be included in Divisional Profit. Divisional OH is allocated based on actual volume / maximum capacity. Allocation rate = 600/150 = $4/box.',
    },
    {
      partLabel: 'Part 5.a — Equipment Investment',
      context:
        'Ignore Parts 1-4. Expected 2021 data same as 2020. Division 1 produces only Regular bread. Nancy considers investing $90,000 in equipment to reduce variable cost per box from $4.50 to $4.20. Equipment life is 3 years, zero residual value, straight-line depreciation ($30,000/year). HQ pays for the equipment at end of 2020. No additional financing needed. Remaining fixed costs stay at 2020 levels. Average price stays at $9.50.',
      tableData: {
        title: 'Equipment Investment Details',
        headers: ['', 'Amount'],
        rows: [
          ['Equipment cost', '$90,000'],
          ['Useful life', '3 years'],
          ['Salvage value', '$0'],
          ['Depreciation', '$30,000/year (straight-line)'],
          ['VC reduction per box', '$4.50 → $4.20 (savings of $0.30)'],
          ['Expected volume', '140,000 boxes/year'],
          ['Annual VC savings', '0.30 × 140 = $42,000'],
        ],
      },
    },
    {
      partLabel: 'Part 5.b — Residual Income',
      context:
        'Nancy\'s bonus is now based on Residual Income (RI) = Divisional Profit − 0.15 × Book Value of Assets (measured at beginning of year). The bonus is 10% of the increase in RI relative to the prior year; if RI decreases, the bonus is zero. The new equipment is included in Division 1\'s PP&E balance sheet.',
    },
    {
      partLabel: 'Part 6 — System Critique',
      context:
        'Analyze the following elements of FB\'s internal accounting and incentive systems and propose alternatives: (1) the variance analysis, (2) the cost system for product profitability, (3) the internal transfer pricing policy, (4) the performance measure for variable compensation, (5) the monetary incentives. Also comment on the modifications considered in Parts 1.b, 2.b, 4.c (idle capacity treatment) and 5.b (residual income).',
    },
  ],
  steps: [
    // ===== PART 1.a =====
    {
      id: 'q1',
      partLabel: 'Part 1.a — Variance Analysis',
      questionTitle: 'Q1: Sales Volume Variance',
      question:
        'Compute the difference between Divisional Profit in 2019 and 2020 due to a change in the number of boxes sold.',
      formulaTex:
        'V_{vol} = (N_{2020} - N_{2019}) \\times CM_{2019} = (140 - 150) \\times 5.4 = -54',
      formulaLegend:
        'N = volume in \'000 boxes, CM_{2019} = contribution margin per box in 2019 = 10 − 6×0.4 − 2.2 = $5.40',
      approach: [
        'Contribution margin per box in 2019: Price − Material cost per box − Other VC per box = 10 − (6 × 0.4) − 2.2 = $5.40.',
        'Volume variance = (140 − 150) × 5.40 = −10 × 5.40 = −$54,000.',
      ],
      answer: '−$54,000 (Unfavorable)',
      keyTakeaway:
        'Selling 10,000 fewer boxes at the 2019 contribution margin reduces profit by $54,000.',
    },
    {
      id: 'q2',
      partLabel: 'Part 1.a — Variance Analysis',
      questionTitle: 'Q2: Selling Price Variance',
      question:
        'Compute the difference between Divisional Profit in 2019 and 2020 due to a change in the average price of one box.',
      formulaTex:
        'V_{price} = (P_{2020} - P_{2019}) \\times N_{2020} = (9.5 - 10) \\times 140 = -70',
      formulaLegend:
        'P_{2020} = $9.50, P_{2019} = $10.00, N_{2020} = 140 (\'000 boxes)',
      approach: [
        'Selling price variance = (9.5 − 10) × 140 = −0.5 × 140 = −$70,000.',
      ],
      answer: '−$70,000 (Unfavorable)',
      keyTakeaway:
        'A $0.50 price decrease per box across 140,000 boxes costs $70,000 in profit.',
    },
    {
      id: 'q3',
      partLabel: 'Part 1.a — Variance Analysis',
      questionTitle: 'Q3: Efficiency Variance (Bread Premix Usage)',
      question:
        'Compute the difference between Divisional Profit in 2019 and 2020 due to a change in the average usage of bread premix (the "efficiency variance").',
      formulaTex:
        'V_{eff} = -(E_{2020} - E_{2019}) \\times IP_{2019} \\times N_{2020} = -(5 - 6) \\times 0.4 \\times 140 = +56',
      formulaLegend:
        'E = kg of premix per box (2019: 6, 2020: 5), IP_{2019} = input price in 2019 ($0.40/kg)',
      approach: [
        'Efficiency ratio: 2019 = 900/150 = 6 kg/box, 2020 = 700/140 = 5 kg/box.',
        'Efficiency variance = −(5 − 6) × 0.4 × 140 = 1 × 0.4 × 140 = +$56,000.',
      ],
      answer: '+$56,000 (Favorable)',
      keyTakeaway:
        'Using 1 kg less premix per box (at the 2019 input price) saves $56,000.',
    },
    {
      id: 'q4',
      partLabel: 'Part 1.a — Variance Analysis',
      questionTitle: 'Q4: Input Price Variance (Bread Premix Price)',
      question:
        'Compute the difference between Divisional Profit in 2019 and 2020 due to a change in the average price of bread premix (the "input price variance").',
      formulaTex:
        'V_{ip} = -(IP_{2020} - IP_{2019}) \\times E_{2020} \\times N_{2020} = -(0.5 - 0.4) \\times 5 \\times 140 = -70',
      formulaLegend:
        'IP = price per kg of premix (2019: $0.40, 2020: $0.50), E_{2020} = 5 kg/box',
      approach: [
        'Input price: 2019 = 360/900 = $0.40/kg, 2020 = 350/700 = $0.50/kg.',
        'Input price variance = −(0.5 − 0.4) × 5 × 140 = −0.1 × 700 = −$70,000.',
      ],
      answer: '−$70,000 (Unfavorable)',
      keyTakeaway:
        'The $0.10/kg increase in premix price, applied to the 2020 usage, costs $70,000.',
    },
    {
      id: 'q5',
      partLabel: 'Part 1.a — Variance Analysis',
      questionTitle: 'Q5: Other Variable Costs Variance',
      question:
        'Compute the difference between Divisional Profit in 2019 and 2020 due to a change in the per-unit value of other variable costs.',
      formulaTex:
        'V_{ovc} = -(OVC_{2020} - OVC_{2019}) \\times N_{2020} = -(2 - 2.2) \\times 140 = +28',
      formulaLegend:
        'OVC = other variable cost per box (2019: $2.20, 2020: $2.00)',
      approach: [
        'Other VC per box: 2019 = 330/150 = $2.20, 2020 = 280/140 = $2.00.',
        'Other VC variance = −(2.00 − 2.20) × 140 = 0.20 × 140 = +$28,000.',
      ],
      answer: '+$28,000 (Favorable)',
      keyTakeaway:
        'A $0.20 per-box reduction in other variable costs provides a $28,000 favorable variance.',
    },
    {
      id: 'q6',
      partLabel: 'Part 1.a — Variance Analysis',
      questionTitle: 'Q6: Fixed Costs Variance',
      question:
        'Compute the difference between Divisional Profit in 2019 and 2020 due to a change in total fixed costs.',
      formulaTex:
        'V_{FC} = -(FC_{2020} - FC_{2019}) = -(732 - 732) = 0',
      formulaLegend:
        'FC = total fixed costs (Divisional OH + Corporate OH), unchanged at $732,000',
      approach: [
        'Total fixed costs: 2019 = 732, 2020 = 732. No change.',
        'Fixed cost variance = −(732 − 732) = $0.',
      ],
      answer: '$0 (No variance)',
      keyTakeaway:
        'Fixed costs remained identical between years, contributing no variance.',
    },
    {
      id: 'q7',
      partLabel: 'Part 1.a — Variance Analysis',
      questionTitle: 'Q7: Nancy\'s Bonus in 2020',
      question: 'Compute Nancy\'s bonus payment in 2020.',
      formulaTex:
        '\\text{Profit}_{2020} = -32 < \\text{Profit}_{2019} = 78 \\implies \\text{Bonus} = 0',
      formulaLegend:
        'Bonus = 10% × max(0, Profit_{2020} − Profit_{2019})',
      approach: [
        'Divisional Profit 2020 (−$32,000) < Divisional Profit 2019 ($78,000).',
        'Since divisional profit decreased, the bonus is zero.',
      ],
      answer: '$0',
      keyTakeaway:
        'The bonus is zero because Divisional Profit declined from 2019 to 2020.',
    },
    // ===== PART 1.b =====
    {
      id: 'q8',
      partLabel: 'Part 1.b — Idle Capacity Exclusion',
      questionTitle: 'Q8: Divisional Profit 2020 (Excl. Idle Capacity)',
      question:
        'Compute the Divisional Profit for 2020 under the alternative system that excludes idle capacity costs from Divisional Profit.',
      formulaTex:
        '\\text{Profit}_{2020}^{new} = -32 + 4 \\times (150 - 140) = -32 + 40 = 8',
      formulaLegend:
        'Allocation rate = 600/150 = $4/box. Idle capacity = (150 − 140) × 4 = $40,000 excluded',
      approach: [
        'Divisional OH allocation rate = 600/150 = $4 per box.',
        'Under the new system, only 140 × 4 = $560,000 of Divisional OH is charged (vs. $600,000).',
        'New Profit = −32 + (600 − 560) = −32 + 40 = $8,000.',
      ],
      answer: '$8,000',
      keyTakeaway:
        'Excluding idle capacity costs turns Division 1 from a $32,000 loss to an $8,000 profit in 2020.',
    },
    {
      id: 'q9',
      partLabel: 'Part 1.b — Idle Capacity Exclusion',
      questionTitle: 'Q9: Volume Variance (Excl. Idle Capacity)',
      question:
        'Compute the difference between Divisional Profit in 2019 and 2020 due to a change in volume under the alternative Divisional OH allocation.',
      formulaTex:
        'V_{vol}^{new} = (N_{2020} - N_{2019}) \\times (CM_{2019} - 4) = (140 - 150) \\times 1.4 = -14',
      formulaLegend:
        'CM_{2019} = $5.40, net of Divisional OH rate ($4): $5.40 − $4.00 = $1.40 per box',
      approach: [
        'Under the new system, Divisional OH is variable at $4/box, so it enters the per-unit margin.',
        'Adjusted CM per box = 5.40 − 4.00 = $1.40.',
        'Volume variance = (140 − 150) × 1.40 = −$14,000.',
      ],
      answer: '−$14,000 (Unfavorable)',
      keyTakeaway:
        'Excluding idle capacity shrinks the volume variance from −$54,000 to −$14,000, because the per-unit OH charge is now part of the flexed margin.',
    },
    // ===== PART 2.a =====
    {
      id: 'q10',
      partLabel: 'Part 2.a — Launching Gourmand',
      questionTitle: 'Q10: Cash Flow Effect of Launching Gourmand',
      question:
        'Compute the effect of launching the new product on the cash flows of FB in 2021.',
      formulaTex:
        '\\Delta CF = 15 \\times 50 - (4+3) \\times 50 - 100 = 750 - 350 - 100 = 300',
      formulaLegend:
        'All amounts in \'000 $. Revenue = 15 × 50 = 750, VC = 7 × 50 = 350, Additional Div OH = 100',
      approach: [
        'Additional revenues: 15 × 50 = $750,000.',
        'Additional variable costs: (4 + 3) × 50 = $350,000.',
        'Additional Divisional OH: $100,000.',
        'Cash flow effect = 750 − 350 − 100 = $300,000.',
      ],
      answer: '+$300,000',
      keyTakeaway:
        'Launching Gourmand generates $300,000 in incremental cash flows for the firm.',
    },
    {
      id: 'q11',
      partLabel: 'Part 2.a — Launching Gourmand',
      questionTitle: 'Q11: Divisional Profit Effect of Launching Gourmand',
      question:
        'Compute the effect of launching the new product on the Divisional Profit of Division 1 in 2021.',
      formulaTex:
        '\\Delta DP = 750 - 350 - 100 = 300',
      formulaLegend:
        'Amounts in \'000 $. Same as cash flow since no depreciation or Corporate OH changes',
      approach: [
        'Additional revenues: $750,000.',
        'Additional variable costs: $350,000.',
        'Additional Divisional OH: $100,000.',
        'No additional Corporate OH.',
        'Effect on Divisional Profit = 750 − 350 − 100 = $300,000.',
      ],
      answer: '+$300,000',
      keyTakeaway:
        'The Divisional Profit effect equals the cash flow effect because there are no new depreciation or Corporate OH charges.',
    },
    {
      id: 'q12',
      partLabel: 'Part 2.a — Launching Gourmand',
      questionTitle: 'Q12: Is Gourmand in Shareholders\' Interest?',
      question:
        'Was launching Gourmand in the best interest of shareholders? Focus only on monetary considerations and provide your rationale.',
      approach: [
        'Launching Gourmand generates $300,000 in additional cash flows for FB.',
        'Since the project is cash-flow positive, it creates value for shareholders.',
      ],
      answer:
        'Yes. Launching Gourmand generates $300,000 in positive incremental cash flows for FB.',
      keyTakeaway:
        'Positive incremental cash flow means the product launch creates shareholder value.',
    },
    {
      id: 'q13',
      partLabel: 'Part 2.a — Launching Gourmand',
      questionTitle: 'Q13: Is Gourmand in Nancy\'s Interest?',
      question:
        'Was launching Gourmand in the best interest of Nancy? Focus only on monetary considerations and provide your rationale.',
      approach: [
        'Divisional Profit increases by $300,000 due to Gourmand.',
        'Since the bonus is 10% of the increase in Divisional Profit, Nancy benefits.',
        'Her bonus increases by 10% × $300,000 = $30,000.',
      ],
      answer:
        'Yes. It has a positive effect on her bonus because Divisional Profit increases by $300,000.',
      keyTakeaway:
        'Goal congruence holds: both shareholders and Nancy benefit from launching Gourmand.',
    },
    // ===== PART 2.b =====
    {
      id: 'q14',
      partLabel: 'Part 2.b — Gourmand with Idle Capacity Exclusion',
      questionTitle: 'Q14: Divisional Profit Effect (Excl. Idle Capacity)',
      question:
        'Compute the effect of launching the new product on the Divisional Profit of Division 1 under the alternative system that excludes idle capacity costs.',
      formulaTex:
        '\\Delta DP^{new} = 750 - 350 - [3.5 \\times 190 - 4 \\times 140] = 750 - 350 - (665 - 560) = 295',
      formulaLegend:
        'Without Gourmand: rate = 600/150 = $4/box, charge = 4 × 140 = 560. With Gourmand: rate = 700/200 = $3.50/box, charge = 3.5 × 190 = 665. Difference in OH charge = 105.',
      approach: [
        'Without Gourmand: OH rate = 600/150 = $4/box, charged OH = 4 × 140 = $560,000.',
        'With Gourmand: OH rate = (600 + 100)/200 = $3.50/box, charged OH = 3.5 × (140 + 50) = $665,000.',
        'Incremental OH charge = 665 − 560 = $105,000.',
        'Effect = 750 − 350 − 105 = $295,000.',
      ],
      answer: '+$295,000',
      keyTakeaway:
        'Under the capacity-adjusted system, the Gourmand effect is $295,000 vs $300,000, because spreading fixed OH across more volume changes the per-unit rate.',
    },
    {
      id: 'q15',
      partLabel: 'Part 2.b — Gourmand with Idle Capacity Exclusion',
      questionTitle: 'Q15: Is Gourmand in Nancy\'s Interest (Excl. Idle Capacity)?',
      question:
        'Would launching Gourmand have been in the best interest of Nancy under this alternative way to compute Divisional Profit? Focus only on monetary considerations.',
      approach: [
        'Divisional Profit increases by $295,000 under the alternative system.',
        'Nancy\'s bonus increases by 10% × $295,000 = $29,500.',
      ],
      answer:
        'Yes. It has a positive effect on her bonus because Divisional Profit increases by $295,000.',
      keyTakeaway:
        'Goal congruence is preserved under both systems for this decision.',
    },
    // ===== PART 3 =====
    {
      id: 'q16',
      partLabel: 'Part 3 — Product Profitability',
      questionTitle: 'Q16: Allocation Rate (Cost System #1)',
      question:
        'Compute the allocation rate of total fixed costs based on cost system #1 (revenue-based allocation).',
      formulaTex:
        'r = \\frac{FC_{total}}{Rev_{total}} = \\frac{600 + 100 + 132}{1{,}330 + 750} = \\frac{832}{2{,}080} = 0.4',
      formulaLegend:
        'Total fixed costs = Divisional OH (600 + 100) + Corporate OH (132) = 832. Total revenues = 1,330 + 750 = 2,080. All in \'000 $.',
      approach: [
        'Total fixed costs = 600 + 100 + 132 = $832,000.',
        'Total revenues = 1,330 + 750 = $2,080,000.',
        'Allocation rate = 832 / 2,080 = 0.4 (i.e., $0.40 per dollar of revenue).',
      ],
      answer: '0.4 (40% of revenue)',
      keyTakeaway:
        'Under cost system #1, 40 cents of every revenue dollar is allocated to fixed costs.',
    },
    {
      id: 'q17',
      partLabel: 'Part 3 — Product Profitability',
      questionTitle: 'Q17: Profit of Gourmand (Cost System #1)',
      question:
        'Compute the profit of the Gourmand bread using cost system #1.',
      formulaTex:
        '\\pi_G = 750 - 350 - 0.4 \\times 750 = 750 - 350 - 300 = 100',
      formulaLegend:
        'Revenue = $750,000, VC = (4+3) × 50 = $350,000, Allocated FC = 0.4 × 750 = $300,000',
      approach: [
        'Revenue from Gourmand = 15 × 50 = $750,000.',
        'Variable costs = (4 + 3) × 50 = $350,000.',
        'Allocated fixed costs = 0.4 × 750 = $300,000.',
        'Profit = 750 − 350 − 300 = $100,000.',
      ],
      answer: '$100,000',
      keyTakeaway:
        'Gourmand shows a $100,000 profit under revenue-based cost allocation, but the allocation method may be questioned.',
    },
    // ===== PART 4.a =====
    {
      id: 'q18',
      partLabel: 'Part 4.a — Internal Transfer Pricing',
      questionTitle: 'Q18: Cash Flow Effect of Accepting the Order',
      question:
        'Compute the effect of accepting the order of 10,000 boxes from the new client on the cash flows of FB.',
      formulaTex:
        '\\Delta CF = 7 \\times 10 - 4.5 \\times 10 - 10 = 70 - 45 - 10 = 15',
      formulaLegend:
        'Amounts in \'000 $. Revenue from client = $70, VC for Division 1 = $45, Transportation = $10',
      approach: [
        'Revenue from client: 7 × 10,000 = $70,000.',
        'Variable cost of production: 4.5 × 10,000 = $45,000.',
        'Transportation cost: $10,000.',
        'Net cash flow effect = 70 − 45 − 10 = $15,000.',
      ],
      answer: '+$15,000',
      keyTakeaway:
        'The order is cash-flow positive for FB at $15,000, using spare capacity.',
    },
    {
      id: 'q19',
      partLabel: 'Part 4.a — Internal Transfer Pricing',
      questionTitle: 'Q19: Divisional Profit Effect on Division 1',
      question:
        'Compute the effect of accepting the order of 10,000 boxes from Division 2 on the Divisional Profit of Division 1.',
      formulaTex:
        '\\Delta DP_1 = TP \\times 10 - 4.5 \\times 10 = 9.38 \\times 10 - 4.5 \\times 10 = 48.8',
      formulaLegend:
        'TP = transfer price = 4.5 + 732/150 = $9.38/box. Amounts in \'000 $.',
      approach: [
        'Transfer price = VC + FC/capacity = 4.5 + 732/150 = 4.5 + 4.88 = $9.38/box.',
        'Revenue for Division 1 = 9.38 × 10 = $93,800.',
        'Variable cost = 4.5 × 10 = $45,000.',
        'Effect on Division 1 Divisional Profit = 93.8 − 45 = $48,800.',
      ],
      answer: '+$48,800',
      keyTakeaway:
        'Division 1 benefits significantly because the full-cost transfer price far exceeds its variable cost.',
    },
    {
      id: 'q20',
      partLabel: 'Part 4.a — Internal Transfer Pricing',
      questionTitle: 'Q20: Divisional Profit Effect on Division 2',
      question:
        'Compute the effect of accepting the order of 10,000 boxes from the new client (buying them from Division 1) on the Divisional Profit of Division 2.',
      formulaTex:
        '\\Delta DP_2 = 7 \\times 10 - 9.38 \\times 10 - 10 = 70 - 93.8 - 10 = -33.8',
      formulaLegend:
        'Revenue from client = $70,000, Cost at TP = $93,800, Transportation = $10,000',
      approach: [
        'Revenue from external client: 7 × 10 = $70,000.',
        'Cost of buying from Division 1: 9.38 × 10 = $93,800.',
        'Transportation: $10,000.',
        'Effect = 70 − 93.8 − 10 = −$33,800.',
      ],
      answer: '−$33,800',
      keyTakeaway:
        'Division 2 loses $33,800 because the full-cost transfer price exceeds the client\'s selling price. Division 2 would reject the order.',
    },
    {
      id: 'q21',
      partLabel: 'Part 4.a — Internal Transfer Pricing',
      questionTitle: 'Q21: Goal Congruent Transfer Price Range',
      question:
        'What is the range (if any) that a transfer price needs to be within to achieve goal congruence in the current situation?',
      formulaTex:
        '\\text{Division 1: } (TP - 4.5) \\times 10 > 0 \\implies TP > 4.5 \\quad | \\quad \\text{Division 2: } (7 - TP) \\times 10 - 10 > 0 \\implies TP < 6',
      formulaLegend:
        'Division 1 needs TP > VC ($4.50). Division 2 needs TP < client price minus transportation per box ($7 − $1 = $6).',
      approach: [
        'Division 1 accepts if TP > variable cost = $4.50.',
        'Division 2 accepts if (7 − TP) × 10 − 10 > 0, i.e., TP < $6.00.',
        'Goal congruent range: $4.50 < TP < $6.00.',
        'The current full-cost TP of $9.38 is outside this range, so it destroys goal congruence.',
      ],
      answer: '$4.50 < TP < $6.00',
      keyTakeaway:
        'The full-cost transfer price ($9.38) is far above the goal-congruent range, causing Division 2 to reject a value-creating order.',
    },
    // ===== PART 4.b =====
    {
      id: 'q22',
      partLabel: 'Part 4.b — External Supplier Option',
      questionTitle: 'Q22: Goal Congruent TP Range (with External Supplier)',
      question:
        'What is the range (if any) that a transfer price needs to be within to achieve goal congruence when Division 2 can buy externally at $6/box?',
      formulaTex:
        '\\text{Div 1: } (TP - 4.5) \\times 10 > 0 \\implies TP > 4.5 \\quad | \\quad \\text{Div 2: } (-TP + 6) \\times 10 > 0 \\implies TP < 6',
      formulaLegend:
        'Division 2 prefers internal if TP < external price ($6). Division 1 accepts if TP > $4.50. Transportation costs cancel (same for both options).',
      approach: [
        'From FB perspective: internal production saves $1.50/box (VC $4.50 vs external $6.00). FB prefers internal.',
        'Division 1 accepts if TP > $4.50.',
        'Division 2 prefers internal over external if TP < $6.00 (same transportation either way).',
        'Goal congruent range: $4.50 < TP < $6.00.',
      ],
      answer: '$4.50 < TP < $6.00',
      keyTakeaway:
        'The goal-congruent range is the same as 4.a because the external supplier price ($6) matches the upper bound derived from the client price.',
    },
    // ===== PART 4.c =====
    {
      id: 'q23',
      partLabel: 'Part 4.c — Transfer Pricing with Idle Capacity Exclusion',
      questionTitle: 'Q23: Goal Congruent TP Range (Idle Capacity Excluded)',
      question:
        'What is the range (if any) that a transfer price needs to be within to achieve goal congruence when idle capacity costs are excluded from Divisional Profit?',
      formulaTex:
        '\\text{Div 1: } (TP - 4.5 - 4) \\times 10 > 0 \\implies TP > 8.5 \\quad | \\quad \\text{Div 2: } (7 - TP) \\times 10 - 10 > 0 \\implies TP < 6',
      formulaLegend:
        'Divisional OH rate = 600/150 = $4/box. Division 1 now bears $4/box OH on additional production. Need TP > 8.5 AND TP < 6, which is impossible.',
      approach: [
        'Divisional OH allocation rate = 600/150 = $4/box.',
        'Division 1 is now charged $4/box of Divisional OH for the additional 10,000 boxes.',
        'Division 1 accepts if (TP − 4.5 − 4) × 10 > 0, i.e., TP > $8.50.',
        'Division 2 accepts if (7 − TP) × 10 − 10 > 0, i.e., TP < $6.00.',
        'Since $8.50 > $6.00, there is no range of TP that achieves goal congruence.',
      ],
      answer:
        'No goal-congruent range exists. Division 1 requires TP > $8.50 while Division 2 requires TP < $6.00.',
      keyTakeaway:
        'Excluding idle capacity from Divisional Profit backfires here: Division 1 now bears an incremental OH charge that makes the order unattractive at any price Division 2 would accept.',
    },
    // ===== PART 5.a =====
    {
      id: 'q24',
      partLabel: 'Part 5.a — Equipment Investment',
      questionTitle: 'Q24: Cash Flow Effect of Investment',
      question:
        'Compute the effect of investing in the new equipment on the cash flows of FB for 2020, 2021, 2022, and 2023.',
      formulaTex:
        '\\Delta CF_{2020} = -90 \\quad | \\quad \\Delta CF_{2021-2023} = (4.50 - 4.20) \\times 140 = +42 \\text{ each year}',
      formulaLegend:
        'Amounts in \'000 $. VC savings = $0.30/box × 140,000 boxes = $42,000/year',
      approach: [
        '2020: Cash outflow for equipment = −$90,000.',
        '2021-2023: Annual VC savings = (4.50 − 4.20) × 140,000 = $42,000 per year.',
        'Total cash flows: −90 + 42 + 42 + 42 = +$36,000 over the period.',
      ],
      answer:
        '2020: −$90,000 | 2021: +$42,000 | 2022: +$42,000 | 2023: +$42,000',
      keyTakeaway:
        'The investment has a positive total cash flow of $36,000 over the 4-year period, making it value-creating.',
    },
    {
      id: 'q25',
      partLabel: 'Part 5.a — Equipment Investment',
      questionTitle: 'Q25: Divisional Profit Effect of Investment',
      question:
        'Compute the effect of investing in the new equipment on the Divisional Profit of Division 1 for 2021, 2022, and 2023.',
      formulaTex:
        '\\Delta DP = 42 - \\frac{90}{3} = 42 - 30 = 12 \\text{ each year}',
      formulaLegend:
        'Amounts in \'000 $. Annual VC savings = 42, Annual depreciation = 90/3 = 30',
      approach: [
        'Annual VC savings: $42,000.',
        'Annual depreciation: 90,000 / 3 = $30,000.',
        'Effect on Divisional Profit = 42 − 30 = $12,000 per year.',
      ],
      answer:
        '2021: +$12,000 | 2022: +$12,000 | 2023: +$12,000',
      keyTakeaway:
        'Divisional Profit increases by $12,000 each year, which means Nancy would earn a bonus from this investment.',
    },
    // ===== PART 5.b =====
    {
      id: 'q26',
      partLabel: 'Part 5.b — Residual Income',
      questionTitle: 'Q26: Effect on Residual Income',
      question:
        'Compute the effect of investing in the new equipment on Division 1\'s Residual Income (RI) for 2021, 2022, and 2023.',
      formulaTex:
        '\\Delta RI_{2021} = 12 - 0.15 \\times 90 = -1.5 \\quad | \\quad \\Delta RI_{2022} = 12 - 0.15 \\times 60 = 3 \\quad | \\quad \\Delta RI_{2023} = 12 - 0.15 \\times 30 = 7.5',
      formulaLegend:
        'Amounts in \'000 $. RI impact = Profit impact − 15% × Book Value at start of year. BV: start 2021 = 90, start 2022 = 60, start 2023 = 30.',
      approach: [
        '2021: ΔRI = 42 − 30 − 0.15 × 90 = 12 − 13.5 = −$1,500.',
        '2022: ΔRI = 42 − 30 − 0.15 × 60 = 12 − 9 = +$3,000.',
        '2023: ΔRI = 42 − 30 − 0.15 × 30 = 12 − 4.5 = +$7,500.',
      ],
      answer:
        '2021: −$1,500 | 2022: +$3,000 | 2023: +$7,500',
      keyTakeaway:
        'RI is negative in year 1 despite positive cash flows, because the capital charge on the full book value exceeds the profit gain. This can discourage value-creating investment.',
    },
    {
      id: 'q27',
      partLabel: 'Part 5.b — Residual Income',
      questionTitle: 'Q27: Effect on Nancy\'s Bonus (RI-based)',
      question:
        'Compute the effect of investing in the new equipment on Nancy\'s bonus for 2021, 2022, and 2023 under the RI-based system.',
      formulaTex:
        '\\Delta \\text{Bonus}_{2021} = 0 \\quad | \\quad \\Delta \\text{Bonus}_{2022} = 0.1 \\times 4.5 = 0.45 \\quad | \\quad \\Delta \\text{Bonus}_{2023} = 0.1 \\times 4.5 = 0.45',
      formulaLegend:
        'Amounts in \'000 $. Bonus = 10% × max(0, ΔRI year-over-year). Change in RI: 2021 = −1.5, 2022 = +4.5 (from −1.5 to +3), 2023 = +4.5 (from +3 to +7.5).',
      approach: [
        '2021: ΔRI = −1.5 (decrease from baseline) → Bonus = $0.',
        '2022: Change in RI vs 2021 = 3 − (−1.5) = +4.5 → Bonus = 10% × 4,500 = $450.',
        '2023: Change in RI vs 2022 = 7.5 − 3 = +4.5 → Bonus = 10% × 4,500 = $450.',
      ],
      answer:
        '2021: $0 | 2022: $450 | 2023: $450',
      keyTakeaway:
        'Under RI, Nancy gets no bonus in 2021 despite a value-creating investment. The bonus-on-improvement structure rewards RI growth rather than RI level, creating a delayed incentive.',
    },
    // ===== PART 6 =====
    {
      id: 'q28',
      partLabel: 'Part 6 — System Critique',
      questionTitle: 'Q28: System Critique and Recommendations',
      question:
        'Analyze the following elements of FB\'s internal accounting and incentive systems and propose alternatives: (1) the variance analysis, (2) the cost system for product profitability, (3) the internal transfer pricing policy, (4) the performance measure, (5) the monetary incentives. Also comment on the idle capacity treatment (Parts 1.b, 2.b, 4.c) and residual income (Part 5.b).',
      approach: [
        'Variance analysis: Adding Gourmand calls for product mix analysis. Decomposing volume into market size vs. share would improve insight. "Other variable costs" and fixed costs should be broken down further for transparency.',
        'Cost system: Revenue-based allocation (system #1) is rough. Higher-priced products like Gourmand may consume fewer production resources per unit despite higher per-unit cost. An ABC system would provide more accurate product profitability.',
        'Transfer pricing: Full-cost TP ($9.38) destroys goal congruence. An external market exists, so market-based TP is preferable. At minimum, TP should be between VC ($4.50) and client price minus transport ($6). For occasional transfers, negotiated pricing may work best.',
        'Performance measure: As an investment center, Division 1 should use a metric that reflects capital employed (e.g., RI or ROI). Current Divisional Profit ignores investment. Using RI makes Nancy forgo a bonus in 2021 for a positive-NPV investment. Changing the depreciation schedule (e.g., annuity depreciation) could fix the year-1 disincentive.',
        'Incentives: Annual bonuses based solely on financial performance may induce short-termism. Non-financial measures (quality, customer satisfaction) should complement. Compensation based on a moving target (year-over-year improvement) can lead to ratchet effects (recall Vyaderm). Consider multi-year bonus pools or deferred compensation.',
        'Idle capacity (Parts 1.b, 2.b, 4.c): Excluding idle capacity from Divisional Profit has pros and cons. If division managers can influence capacity utilization (likely in investment centers), charging idle capacity incentivizes them to reduce it. However, in extreme low-demand situations, excluding it avoids penalizing managers for uncontrollable factors. Part 4.c shows a downside: it destroys goal congruence for internal transfers.',
        'Residual income (Part 5.b): RI improves capital discipline but the bonus-on-improvement scheme means no bonus in year 1 of a positive-NPV investment. A different depreciation schedule or a level-based bonus could fix this.',
      ],
      answer:
        'Key issues: (1) Full-cost TP destroys goal congruence ($9.38 vs. range $4.50–$6.00), (2) revenue-based cost allocation is too rough for product profitability — consider ABC, (3) idle capacity exclusion helps in some contexts (Part 2.b) but destroys goal congruence in others (Part 4.c), (4) RI discourages investment in year 1, (5) year-over-year bonus creates ratchet risk and short-termism.',
      keyTakeaway:
        'FB\'s control system has interconnected distortions. The full-cost allocation base inflates transfer prices, and the bonus-on-improvement structure can discourage value-creating investments.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis: volume, selling price, efficiency, input price, other VC, and fixed cost variances',
      'Idle capacity exclusion and its impact on Divisional Profit and volume variance',
      'Relevance analysis: cash flow vs. Divisional Profit for new product launch (Gourmand)',
      'Product profitability: revenue-based cost allocation (cost system #1)',
      'Transfer pricing: full-cost TP, goal congruence ranges, external supplier alternative',
      'Idle capacity exclusion destroying goal congruence in transfer pricing (Part 4.c)',
      'Investment analysis: cash flows vs. Divisional Profit with depreciation',
      'Residual Income: capital charge, book value depreciation, bonus timing distortions',
      'System critique across five dimensions with idle capacity and RI modifications',
    ],
    keyTheme:
      'FreshBread illustrates how cost allocation choices cascade through the control system: full-cost transfer pricing destroys goal congruence, idle capacity treatment creates conflicting incentives across contexts, and RI-based bonuses can discourage value-creating investments in their first year.',
  },
}
