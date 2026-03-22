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
        'Budgeted CM per box = $10 − $2.40 − $2.20 = $5.40.',
        'Volume change = 140,000 − 150,000 = −10,000 boxes.',
        'Volume variance = −10,000 × $5.40 = −$54,000 (Unfavorable).',
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
        'Price dropped from $10.00 to $9.50, a decrease of $0.50 per box.',
        'Price variance = ($9.50 − $10.00) × 140,000 = −$70,000 (Unfavorable).',
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
        'Usage per box: 2019 = 6.0 kg, 2020 = 5.0 kg — improved by 1 kg/box.',
        'Efficiency variance = −(5 − 6) × $0.40 × 140,000 = +$56,000 (Favorable).',
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
        'Input price rose from $0.40/kg to $0.50/kg (+$0.10/kg).',
        'Input price variance = −($0.50 − $0.40) × 5 × 140,000 = −$70,000 (Unfavorable).',
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
        'Other VC per box fell from $2.20 to $2.00 (−$0.20/box).',
        'Other VC variance = −($2.00 − $2.20) × 140,000 = +$28,000 (Favorable).',
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
        'Total fixed costs: 2019 = $732,000, 2020 = $732,000 — no change.',
        'Fixed cost variance = $0.',
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
        'Since profit decreased, bonus = $0.',
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
        'OH rate = $600,000 / 150,000 = $4/box. Charged OH = 140,000 × $4 = $560,000.',
        'Idle capacity excluded = $600,000 − $560,000 = $40,000.',
        'Adjusted Profit = −$32,000 + $40,000 = $8,000.',
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
        'Adjusted CM = $5.40 − $4.00 (OH rate) = $1.40/box.',
        'Volume variance = (140,000 − 150,000) × $1.40 = −$14,000 (Unfavorable).',
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
        'Revenue = 50,000 × $15 = $750,000. VC = ($4 + $3) × 50,000 = $350,000.',
        'Additional Divisional OH = $100,000. No additional Corporate OH.',
        'Cash flow = $750,000 − $350,000 − $100,000 = +$300,000.',
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
        'Same calculation as cash flow: $750,000 − $350,000 − $100,000 = +$300,000.',
        'No new depreciation or Corporate OH, so Divisional Profit = cash flow effect.',
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
        'Gourmand generates +$300,000 in incremental cash flows with no upfront investment.',
        'Cash-flow positive = creates value for shareholders.',
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
        'Gourmand increases Divisional Profit by $300,000.',
        'Bonus increase = 10% × $300,000 = $30,000. Nancy benefits.',
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
        'Without Gourmand: rate = $600k / 150k = $4.00/box, charge = $4.00 × 140k = $560k.',
        'With Gourmand: rate = $700k / 200k = $3.50/box, charge = $3.50 × 190k = $665k.',
        'Incremental OH = $665k − $560k = $105k. Profit = $750k − $350k − $105k = +$295,000.',
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
        'Divisional Profit increases by $295,000 from Gourmand.',
        'Bonus = 10% × $295,000 = $29,500. Nancy still benefits.',
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
        'Total fixed costs = $600k + $100k + $132k = $832k. Total revenue = $1,330k + $750k = $2,080k.',
        'Allocation rate = $832k / $2,080k = 0.40 (40% of revenue).',
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
        'Revenue = $750,000. VC = $350,000. Allocated FC = 0.40 × $750,000 = $300,000.',
        'Gourmand profit = $750,000 − $350,000 − $300,000 = $100,000.',
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
        'Step 1: At the company level, only incremental external cash flows matter. Internal transfer prices cancel out. Division 1 has spare capacity (150,000 − 140,000 = 10,000 boxes), so no capacity is displaced.',
        'Step 2: Revenue from external client = 10,000 × $7 = $70,000.',
        'Step 3: Incremental costs. Variable production cost = 10,000 × $4.50 = $45,000 (the only real resource cost). Transportation = $10,000. Fixed costs are unaffected by this order.',
        'Step 4: Cash flow effect = $70,000 − $45,000 − $10,000 = +$15,000. The order creates value for FB because the client price ($7) exceeds variable cost ($4.50) plus transport per box ($1).',
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
        'Step 1: Division 1 is the seller in this internal transfer. Its revenue is the transfer price, not the external client price. The TP includes a fixed cost component that does not represent an incremental cost.',
        'Step 2: Compute the transfer price. TP = variable cost + total fixed costs / capacity = $4.50 + $732,000 / 150,000 = $4.50 + $4.88 = $9.38/box.',
        'Step 3: Division 1 revenue = $9.38 × 10,000 = $93,800. Division 1 variable cost = $4.50 × 10,000 = $45,000.',
        'Step 4: Effect on Division 1 Divisional Profit = $93,800 − $45,000 = +$48,800. Division 1 benefits significantly because the full-cost TP ($9.38) far exceeds its incremental cost ($4.50).',
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
        'Step 1: Division 2 is the buyer in this transfer. It pays the TP to Division 1, sells at $7/box to the client, and pays transportation. Division 2 bears all the external-facing costs.',
        'Step 2: Revenue from external client = 10,000 × $7 = $70,000.',
        'Step 3: Cost of buying from Division 1 = 10,000 × $9.38 = $93,800. Transportation = $10,000.',
        'Step 4: Effect = $70,000 − $93,800 − $10,000 = −$33,800. Division 2 would reject this order because the full-cost TP ($9.38) exceeds the client price ($7). This is a goal congruence failure: the order creates value for FB (+$15,000) but Division 2 refuses it.',
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
        'Step 1: For goal congruence, both divisions must prefer to accept the order. We need to find a TP range where both say yes, which also means FB says yes (since the order is profitable at the company level).',
        'Step 2: Division 1\u2019s minimum acceptable TP. Division 1 has idle capacity, so its only incremental cost is variable cost ($4.50/box). Division 1 accepts if TP > $4.50.',
        'Step 3: Division 2\u2019s maximum acceptable TP. Division 2 earns $7/box from the client and pays $1/box in transport ($10,000 / 10,000). Division 2 accepts if TP < $7 − $1 = $6.00.',
        'Step 4: Goal congruent range: $4.50 < TP < $6.00. The current full-cost TP of $9.38 is far above this range, destroying goal congruence.',
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
        'Step 1: From FB\u2019s perspective, internal production is cheaper. Division 1\u2019s variable cost is $4.50/box vs the external supplier price of $6.00/box, saving $1.50/box. FB prefers internal sourcing.',
        'Step 2: Division 1 still requires TP > $4.50 (its incremental cost). The external supplier does not change Division 1\u2019s economics.',
        'Step 3: Division 2 now compares internal vs external sourcing. Internal: pays TP + $10,000 transport. External: pays $6/box + $10,000 transport. Transportation is the same either way, so Division 2 prefers internal if TP < $6.00.',
        'Step 4: Goal congruent range = $4.50 < TP < $6.00, same as Q21. The external supplier price ($6) happens to match the upper bound, confirming the range.',
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
        'Step 1: Under idle capacity exclusion, producing the extra 10,000 boxes means Division 1 is charged Divisional OH on those units. The OH rate = $600,000 / 150,000 = $4/box. This turns a previously fixed cost into an incremental cost from Division 1\u2019s perspective.',
        'Step 2: Division 1\u2019s effective incremental cost per box = $4.50 (variable) + $4.00 (OH allocation) = $8.50. Division 1 requires TP > $8.50.',
        'Step 3: Division 2\u2019s constraint is unchanged: TP < $6.00 (client price minus transport).',
        'Step 4: Since Division 1 requires TP > $8.50 and Division 2 requires TP < $6.00, there is no TP that satisfies both. Goal congruence is impossible. The idle capacity exclusion policy backfires here by making Division 1 bear an artificial incremental OH cost.',
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
        'Step 1: Cash flow analysis considers real money in and out, ignoring accounting allocations like depreciation. The investment is paid by HQ at end of 2020.',
        'Step 2: 2020 cash flow: Equipment purchase = −$90,000. No savings yet because the equipment is bought at year-end.',
        'Step 3: 2021-2023 cash flow: The equipment reduces VC from $4.50 to $4.20 per box, saving $0.30/box. Annual savings = $0.30 × 140,000 = $42,000 per year.',
        'Step 4: Total cash flows = −$90,000 + $42,000 × 3 = +$36,000. The investment is cash-positive over its life, creating value for shareholders (before discounting).',
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
        'Step 1: Divisional Profit differs from cash flow because it includes depreciation (a non-cash charge). The equipment cost is spread over 3 years via straight-line depreciation.',
        'Step 2: Annual VC savings = $42,000 (same as cash flow). Annual depreciation = $90,000 / 3 = $30,000.',
        'Step 3: Effect on Divisional Profit = $42,000 − $30,000 = +$12,000 per year, constant across all 3 years under straight-line depreciation.',
        'Step 4: Since Divisional Profit increases, Nancy would earn a bonus from this investment: 10% × $12,000 = $1,200 per year. Her incentives align with shareholders\u2019 interests here.',
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
        'Step 1: Residual Income = Divisional Profit − Capital Charge. The capital charge = 15% × Book Value at start of year. RI penalizes the division for tying up capital, encouraging efficient asset use.',
        'Step 2: 2021: Book value at start = $90,000 (full cost). Capital charge = 15% × $90,000 = $13,500. ΔRI = $12,000 (profit impact) − $13,500 = −$1,500. The capital charge exceeds the profit gain in year 1.',
        'Step 3: 2022: Book value = $90,000 − $30,000 = $60,000. Capital charge = 15% × $60,000 = $9,000. ΔRI = $12,000 − $9,000 = +$3,000.',
        'Step 4: 2023: Book value = $30,000. Capital charge = 15% × $30,000 = $4,500. ΔRI = $12,000 − $4,500 = +$7,500. RI improves each year as book value (and thus capital charge) declines through depreciation.',
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
        'Step 1: Nancy\u2019s bonus under RI = 10% of the increase in RI relative to the prior year. If RI decreases, the bonus is zero. The bonus rewards RI growth, not the RI level.',
        'Step 2: 2021: ΔRI = −$1,500 (a decrease from baseline). Since RI fell, Nancy\u2019s bonus = $0. She gets no reward in the first year of a value-creating investment.',
        'Step 3: 2022: Change in RI vs 2021 = $3,000 − (−$1,500) = +$4,500. Bonus = 10% × $4,500 = $450.',
        'Step 4: 2023: Change in RI vs 2022 = $7,500 − $3,000 = +$4,500. Bonus = 10% × $4,500 = $450. The bonus-on-improvement structure creates a delayed incentive, which could discourage managers from making positive-NPV investments.',
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
        'Step 1 \u2014 Variance analysis: The current decomposition is a good starting point but has gaps. Adding Gourmand creates a need for product mix variance analysis (how much of the volume change is due to shifting product mix?). Decomposing the volume variance into market size vs. market share would yield more actionable insight. The catch-all "other variable costs" and fixed costs should be broken down further for transparency and controllability.',
        'Step 2 \u2014 Cost system: Revenue-based allocation (system #1) is crude. It assumes each revenue dollar consumes the same proportion of fixed resources, which ignores actual resource usage. Gourmand (multigrain) may require different production processes than Regular bread. An Activity-Based Costing (ABC) system would trace costs to activities (mixing, baking, packaging) and allocate based on actual resource consumption, giving more accurate product profitability.',
        'Step 3 \u2014 Transfer pricing: The full-cost TP ($9.38) far exceeds the goal-congruent range ($4.50\u2013$6.00), destroying goal congruence. Since an external market exists ($6/box), a market-based TP would be most appropriate. For occasional one-off transfers, negotiated pricing between divisions may work, subject to a TP floor at variable cost and a ceiling at market price.',
        'Step 4 \u2014 Performance measure: As an investment center, Division 1 should use a metric reflecting capital employed (RI or ROI), not just Divisional Profit. However, RI with straight-line depreciation creates a year-1 disincentive (Q26\u2013Q27). Annuity depreciation or a level-based bonus (rather than improvement-based) could fix this timing distortion.',
        'Step 5 \u2014 Incentives: Annual bonuses based solely on year-over-year financial improvement create ratchet effects (managers sandbag after a good year) and short-termism. Non-financial measures (quality, customer satisfaction, market share) should complement financial ones. Multi-year bonus pools or deferred compensation reduce gaming incentives.',
        'Step 6 \u2014 Idle capacity (Parts 1.b, 2.b, 4.c): Excluding idle capacity helps in some contexts (Part 2.b: does not distort the Gourmand decision) but destroys goal congruence in others (Part 4.c: makes internal transfers impossible). The key trade-off: if managers control capacity utilization, charging idle capacity incentivizes them to use it; but if demand is uncontrollable, it penalizes them unfairly.',
        'Step 7 \u2014 Residual income (Part 5.b): RI improves capital discipline vs. Divisional Profit, but the bonus-on-improvement scheme means no bonus in year 1 of a positive-NPV investment. A different depreciation schedule (annuity depreciation) or a level-based bonus (rewarding RI level rather than improvement) would better align incentives with value creation.',
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
