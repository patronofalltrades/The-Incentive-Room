import type { Simulation } from './artisanGardeners'

export const XTREMECLIMB: Simulation = {
  id: 'xtremeclimb',
  title: 'XtremeClimb (XC)',
  caseScenario: [
    'XtremeClimb (XC) is a specialized manufacturer of high-cost base layers with only one type of product. The company is organized in two divisions corresponding to regions: the West Division (WD) and the East Division (ED), each with their own production plant and sales department.',
    'Both divisions are treated as investment centers. The compensation of divisional general managers (John for WD, Mei for ED) includes a fixed salary and an annual bonus that varies with "Divisional Profit". The bonus is 10% of the increase in Divisional Profit relative to the budget for that year; if Divisional Profit is lower than the budget, then the bonus is zero.',
    'Corporate OH is allocated proportionally to the number of units sold by the division (including external and internal sales) at a rate of \u20AC10 per unit sold. The number of units produced equals the number of units sold (ignore inventories). Standard manufacturing variable cost per unit is \u20AC39. Standard manufacturing fixed cost per unit is \u20AC20 (= \u20AC800,000 / 40,000 units capacity). External pricing: standard manufacturing full cost per unit plus 45% markup.',
  ],
  tableData: {
    headers: ['', 'Budget', 'Actual'],
    rows: [
      ["Revenues ('000 \u20AC)", '3,400', '2,490'],
      ['  Number of units sold (thousands)', '40', '30'],
      ["Materials ('000 \u20AC)", '1,200', '1,092'],
      ['  Meters of fabric (thousands)', '80', '84'],
      ['  Avg price per meter of fabric (\u20AC)', '15', '13'],
      ["Other manufacturing variable costs ('000 \u20AC)", '360', '273'],
      ["Manufacturing fixed costs ('000 \u20AC)", '800', '810'],
      ["SG&A ('000 \u20AC)", '500', '520'],
      ["Corporate OH ('000 \u20AC)", '400', '300'],
      ["Divisional Profit ('000 \u20AC)", '140', '\u2212505'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1.a \u2014 Variance Analysis',
      context:
        'Using the information in Table 1, perform a variance analysis to explain the difference between the budgeted and actual Divisional Profit of WD in 2017. Compute each variance in order.',
    },
    {
      partLabel: 'Part 1.b \u2014 Fixed Corporate OH Allocation',
      context:
        'Now assume the following change: Corporate OH is a fixed allocation of \u20AC400,000 per division (no longer varies with units sold). Recompute actual Divisional Profit and the sales volume variance under this alternative.',
    },
    {
      partLabel: 'Part 2.a \u2014 Transfer Pricing (Idle Capacity)',
      context:
        'At the start of 2018, WD has poor prospects (expected 30,000 units). ED is at full capacity. NorthWind (NW) offers ED a one-time contract for 1,000 units at \u20AC83/unit. ED proposes that WD produce the units at \u20AC39 variable cost/unit. Transportation: \u20AC5,000 from WD to ED (paid by ED), \u20AC1,000 from ED to NW (paid by NW). Transfer pricing policy: standard variable manufacturing cost with no markup (\u20AC39/unit). Fixed costs, SG&A, and financing costs are unaffected. The corporate OH allocation rate does not change.',
      tableData: {
        title: 'Alternatives (WD idle capacity)',
        headers: ['', 'Alternative 1', 'Alternative 2'],
        rows: [
          ['For WD', 'Produce and sell 1,000 units to ED', "Reject ED's proposal"],
          ['For ED', 'Supply to NW buying 1,000 units from WD', "Reject NW's proposal"],
        ],
      },
    },
    {
      partLabel: 'Part 2.b \u2014 Transfer Pricing (Full Capacity)',
      context:
        'Now assume WD has good prospects. Producing the 1,000 units for ED would force WD to reject SouthFace (SF), an external client willing to purchase 1,000 units at \u20AC70/unit (SF pays transportation of \u20AC6,000). All other assumptions remain as in Part 2.a.',
      tableData: {
        title: 'Alternatives (WD full capacity)',
        headers: ['', 'Alternative 1', 'Alternative 2'],
        rows: [
          ['For WD', 'Produce and sell 1,000 units to ED', 'Produce and sell 1,000 units to SF'],
          ['For ED', 'Supply to NW buying units from WD', "Reject NW's proposal"],
        ],
      },
    },
    {
      partLabel: 'Part 3.a \u2014 New Product (Capacity-Based Allocation)',
      context:
        'WD considers producing low-cost base layers (LC) in addition to high-cost (HC). Expected LC sales: 2,000 units/year. LC variable manufacturing cost: \u20AC10/unit. Fixed costs and SG&A unchanged. Corporate OH rate unchanged. LC external price = standard full cost + 45% markup. Standard fixed cost/unit computed as expected fixed manufacturing costs / max capacity (40,000 units). Selling LC would reduce HC price from \u20AC85 to \u20AC83/unit. HC volume remains 30,000 units.',
    },
    {
      partLabel: 'Part 3.b \u2014 New Product (Volume-Based Allocation)',
      context:
        'What would the price per unit of LC be if manufacturing fixed costs were allocated based on expected sales volume (30,000 + 2,000 = 32,000 units) rather than capacity (40,000 units)?',
    },
    {
      partLabel: 'Part 4.a \u2014 Equipment Investment (Cash Flows & Profit)',
      context:
        'At the end of 2018, John considers investing \u20AC900,000 in equipment to increase efficiency. Expected life: 3 years (2019\u20132021). Depreciated evenly. Variable manufacturing costs decrease from \u20AC39 to \u20AC29/unit. Labor savings: \u20AC100,000/year. Selling price remains \u20AC85, volume remains 30,000 units. The investment is paid by XC headquarters and does not require additional external financing.',
    },
    {
      partLabel: 'Part 4.b \u2014 Residual Income & Depreciation',
      context:
        "Bonus is now based on Residual Income: RI = Divisional Profit \u2212 0.1 \u00D7 Book value of assets (start of year). Bonus = 10% of the increase of RI relative to the prior year (zero if RI decreases). Compute the effect on John's bonus under (i) straight-line depreciation and (ii) delayed depreciation (10% in 2019, 30% in 2020, 60% in 2021).",
    },
  ],
  steps: [
    // ===== PART 1.a =====
    {
      id: 'xc-q1',
      partLabel: 'Part 1.a \u2014 Variance Analysis',
      questionTitle: 'Q1: Sales Volume Variance',
      question:
        'Compute the difference between the budgeted and actual Divisional Profit of WD in 2017 due to the change in the number of units sold.',
      formulaTex:
        'V_{vol} = (N_a - N_b) \\times CM_b = (30 - 40) \\times 36 = -360 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        "N_a = actual units sold in thousands (30), N_b = budget units (40), CM_b = budgeted contribution margin per thousand units = (3,400/40) \u2212 (80/40)\u00D715 \u2212 (360/40) \u2212 10 = 85 \u2212 30 \u2212 9 \u2212 10 = 36 ('000 \u20AC per thousand units)",
      approach: [
        'Budgeted CM per unit = \u20AC85 \u2212 \u20AC30 \u2212 \u20AC9 \u2212 \u20AC10 (corporate OH) = \u20AC36.',
        'Volume shortfall = 30,000 \u2212 40,000 = \u221210,000 units.',
        'Volume variance = \u221210,000 \u00D7 \u20AC36 = \u2212\u20AC360,000 (Unfavorable).',
      ],
      answer: '\u2212\u20AC360,000 (Unfavorable)',
      keyTakeaway:
        'Selling 10,000 fewer units cost \u20AC360,000 in lost contribution margin, the largest single driver of the profit shortfall.',
    },
    {
      id: 'xc-q2',
      partLabel: 'Part 1.a \u2014 Variance Analysis',
      questionTitle: 'Q2: Selling Price Variance',
      question:
        'Compute the difference between the budgeted and actual Divisional Profit of WD in 2017 due to the change in the average selling price per unit.',
      formulaTex:
        'V_{price} = N_a \\times (P_a - P_b) = 30 \\times (83 - 85) = -60 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'P_a = actual selling price = 2,490/30 = \u20AC83, P_b = budget selling price = 3,400/40 = \u20AC85',
      approach: [
        'Price dropped from \u20AC85 to \u20AC83, a decrease of \u20AC2 per unit.',
        'Price variance = 30,000 \u00D7 (\u20AC83 \u2212 \u20AC85) = \u2212\u20AC60,000 (Unfavorable).',
      ],
      answer: '\u2212\u20AC60,000 (Unfavorable)',
      keyTakeaway:
        'The actual selling price was \u20AC2 lower than budget, possibly due to ad-hoc negotiations deviating from the cost-plus pricing policy.',
    },
    {
      id: 'xc-q3',
      partLabel: 'Part 1.a \u2014 Variance Analysis',
      questionTitle: 'Q3: Material Efficiency Variance',
      question:
        'Compute the difference between the budgeted and actual Divisional Profit of WD in 2017 due to the change in the average amount of fabric used to produce one unit.',
      formulaTex:
        'V_{eff} = -N_a \\times (q_a - q_b) \\times C_b = -30 \\times (84/30 - 80/40) \\times 15 = -360 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'q_a = actual fabric per unit = 84/30 = 2.8m, q_b = budget fabric per unit = 80/40 = 2.0m, C_b = budget price per meter = \u20AC15',
      approach: [
        'Fabric per unit: Budget = 2.0 m, Actual = 2.8 m (+0.8 m/unit).',
        'Efficiency variance = \u221230,000 \u00D7 (2.8 \u2212 2.0) \u00D7 \u20AC15 = \u2212\u20AC360,000 (Unfavorable).',
      ],
      answer: '\u2212\u20AC360,000 (Unfavorable)',
      keyTakeaway:
        'Each unit consumed 0.8 meters more fabric than budgeted, generating a large unfavorable efficiency variance equal to the volume variance.',
    },
    {
      id: 'xc-q4',
      partLabel: 'Part 1.a \u2014 Variance Analysis',
      questionTitle: 'Q4: Material Input Price Variance',
      question:
        'Compute the difference between the budgeted and actual Divisional Profit of WD in 2017 due to the change in the average price of one meter of fabric.',
      formulaTex:
        'V_{input} = -N_a \\times q_a \\times (C_a - C_b) = -30 \\times (84/30) \\times (13 - 15) = +168 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'C_a = actual price per meter = \u20AC13, C_b = budget price per meter = \u20AC15, q_a = actual fabric per unit = 84/30 = 2.8m',
      approach: [
        'Fabric price fell from \u20AC15 to \u20AC13 (\u2212\u20AC2/meter).',
        'Input price variance = \u221230,000 \u00D7 2.8 \u00D7 (\u20AC13 \u2212 \u20AC15) = +\u20AC168,000 (Favorable).',
      ],
      answer: '+\u20AC168,000 (Favorable)',
      keyTakeaway:
        'Fabric price fell by \u20AC2 per meter, partially offsetting the efficiency variance. Note the possible trade-off: cheaper fabric may explain excess usage.',
    },
    {
      id: 'xc-q5',
      partLabel: 'Part 1.a \u2014 Variance Analysis',
      questionTitle: 'Q5: Other Variable Costs Variance',
      question:
        'Compute the difference between the budgeted and actual Divisional Profit of WD in 2017 due to the change in the average "other manufacturing variable costs" per unit.',
      formulaTex:
        'V_{ovc} = -N_a \\times (ovc_a - ovc_b) = -30 \\times (273/30 - 360/40) = -3 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'ovc_a = actual other VC per unit = 273/30 = \u20AC9.1, ovc_b = budget other VC per unit = 360/40 = \u20AC9',
      approach: [
        'Other VC per unit: Budget = \u20AC9.00, Actual = \u20AC9.10 (+\u20AC0.10).',
        'Other VC variance = \u221230,000 \u00D7 (\u20AC9.10 \u2212 \u20AC9.00) = \u2212\u20AC3,000 (Unfavorable).',
      ],
      answer: '\u2212\u20AC3,000 (Unfavorable)',
      keyTakeaway:
        'A small unfavorable variance of \u20AC3,000 from other variable costs being \u20AC0.10 higher per unit than budgeted.',
    },
    {
      id: 'xc-q6',
      partLabel: 'Part 1.a \u2014 Variance Analysis',
      questionTitle: "Q6: John's Bonus in 2017",
      question: "Compute John's bonus payment in 2017.",
      formulaTex:
        '\\text{Actual Profit} = -505 < 140 = \\text{Budget} \\implies \\text{Bonus} = 0',
      formulaLegend:
        'Bonus = 10% of (Actual Profit \u2212 Budget Profit) if positive, otherwise zero',
      approach: [
        'Actual Profit (\u2212\u20AC505,000) < Budget (\u20AC140,000), so bonus = \u20AC0.',
      ],
      answer: '\u20AC0 (No bonus)',
      keyTakeaway:
        'The massive shortfall in Divisional Profit means John earns zero bonus for 2017.',
    },
    // ===== PART 1.b =====
    {
      id: 'xc-q7',
      partLabel: 'Part 1.b \u2014 Fixed Corporate OH Allocation',
      questionTitle: 'Q7: Actual Divisional Profit with Fixed OH',
      question:
        'Compute the actual Divisional Profit of WD in 2017 if Corporate OH is a fixed allocation of \u20AC400,000 per division.',
      formulaTex:
        '\\text{Profit}_{new} = -505 - (-30 \\times 10) - 400 = -505 + 300 - 400 = -605 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Replace actual variable OH (30\u00D710 = 300) with fixed OH (400); net change = \u2212100',
      approach: [
        'Remove old variable OH: \u2212\u20AC505,000 + \u20AC300,000 (old OH) = \u2212\u20AC205,000.',
        'Add new fixed OH: \u2212\u20AC205,000 \u2212 \u20AC400,000 = \u2212\u20AC605,000.',
      ],
      answer: '\u2212\u20AC605,000',
      keyTakeaway:
        'The fixed allocation is \u20AC100,000 higher than the variable one at actual volume (30,000 units), making Divisional Profit worse.',
    },
    {
      id: 'xc-q8',
      partLabel: 'Part 1.b \u2014 Fixed Corporate OH Allocation',
      questionTitle: 'Q8: Sales Volume Variance with Fixed OH',
      question:
        'Compute the sales volume variance under the fixed OH allocation. How does this change from Part 1.a?',
      formulaTex:
        'V_{vol}^{new} = (30 - 40) \\times [(3{,}400/40) - (80/40) \\times 15 - (360/40)] = -460 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'CM per unit now excludes the \u20AC10 corporate OH component because OH is fixed and does not vary with volume',
      approach: [
        'New CM = \u20AC85 \u2212 \u20AC30 \u2212 \u20AC9 = \u20AC46 (no \u20AC10 OH deduction since OH is now fixed).',
        'Volume variance = (30,000 \u2212 40,000) \u00D7 \u20AC46 = \u2212\u20AC460,000 (larger than \u2212\u20AC360,000 before).',
      ],
      answer: '\u2212\u20AC460,000 (Unfavorable)',
      keyTakeaway:
        'With fixed OH, the volume variance is larger (\u2212460 vs \u2212360) because the OH "savings" from lower volume no longer offset the lost contribution margin.',
    },
    // ===== PART 2.a =====
    {
      id: 'xc-q9',
      partLabel: 'Part 2.a \u2014 Transfer Pricing (Idle Capacity)',
      questionTitle: "Q9: WD's Divisional Profit Difference",
      question:
        "Compute the difference between alternatives 1 and 2 in terms of WD's Divisional Profit.",
      formulaTex:
        '\\Delta WD = 39 \\times 1{,}000 - 39 \\times 1{,}000 - 10 \\times 1{,}000 = -10{,}000',
      formulaLegend:
        'Revenue from transfer = 39\u00D71,000; Manufacturing cost = 39\u00D71,000; Additional corporate OH = 10\u00D71,000',
      approach: [
        'WD revenue = 1,000 \u00D7 \u20AC39 = \u20AC39,000. WD cost = 1,000 \u00D7 \u20AC39 = \u20AC39,000. Breakeven on transfer.',
        'But additional corporate OH = 1,000 \u00D7 \u20AC10 = \u20AC10,000.',
        'Net effect on WD = \u20AC39,000 \u2212 \u20AC39,000 \u2212 \u20AC10,000 = \u2212\u20AC10,000.',
      ],
      answer: '\u2212\u20AC10,000',
      keyTakeaway:
        'WD loses \u20AC10,000 because the transfer price only covers variable cost but not the additional corporate OH allocation triggered by the extra units.',
    },
    {
      id: 'xc-q10',
      partLabel: 'Part 2.a \u2014 Transfer Pricing (Idle Capacity)',
      questionTitle: "Q10: ED's Divisional Profit Difference",
      question:
        "Compute the difference between alternatives 1 and 2 in terms of ED's Divisional Profit.",
      formulaTex:
        '\\Delta ED = 83 \\times 1{,}000 - 39 \\times 1{,}000 - 5{,}000 - 10 \\times 1{,}000 = 29{,}000',
      formulaLegend:
        'Revenue from NW = 83,000; Cost of units from WD = 39,000; Transportation = 5,000; Corporate OH = 10,000',
      approach: [
        'ED revenue = 1,000 \u00D7 \u20AC83 = \u20AC83,000. Cost from WD = \u20AC39,000. Transport = \u20AC5,000. OH = \u20AC10,000.',
        'Net effect on ED = \u20AC83,000 \u2212 \u20AC39,000 \u2212 \u20AC5,000 \u2212 \u20AC10,000 = +\u20AC29,000.',
      ],
      answer: '+\u20AC29,000',
      keyTakeaway:
        'ED captures most of the surplus from the NW deal because the transfer price is at variable cost.',
    },
    {
      id: 'xc-q11',
      partLabel: 'Part 2.a \u2014 Transfer Pricing (Idle Capacity)',
      questionTitle: "Q11: XC's Overall Profit Difference",
      question:
        "Compute the difference between alternatives 1 and 2 in terms of XC's overall profit.",
      formulaTex:
        '\\Delta XC = 83 \\times 1{,}000 - 39 \\times 1{,}000 - 5{,}000 = 39{,}000',
      formulaLegend:
        'Revenue from NW = 83,000; Variable manufacturing cost = 39,000; Transportation = 5,000. Corporate OH washes out at company level.',
      approach: [
        'Revenue = \u20AC83,000. Variable cost = \u20AC39,000. Transport = \u20AC5,000. OH cancels at company level.',
        'Net effect on XC = \u20AC83,000 \u2212 \u20AC39,000 \u2212 \u20AC5,000 = +\u20AC39,000.',
      ],
      answer: '+\u20AC39,000',
      keyTakeaway:
        'The NW deal is clearly profitable for XC (+\u20AC39,000), but WD would reject it (\u221210,000). This is a goal congruence failure caused by the variable corporate OH allocation.',
    },
    // ===== PART 2.b =====
    {
      id: 'xc-q12',
      partLabel: 'Part 2.b \u2014 Transfer Pricing (Full Capacity)',
      questionTitle: "Q12: WD's Divisional Profit Difference",
      question:
        "Compute the difference between alternatives 1 and 2 in terms of WD's Divisional Profit when WD is at full capacity.",
      formulaTex:
        '\\Delta WD = (39 \\times 1{,}000 - 39 \\times 1{,}000 - 10 \\times 1{,}000) - (70 \\times 1{,}000 - 39 \\times 1{,}000 - 10 \\times 1{,}000) = -31{,}000',
      formulaLegend:
        'Alt 1: transfer at 39/unit minus cost minus OH. Alt 2: sell to SF at 70/unit minus cost minus OH.',
      approach: [
        'Alt 1 (sell to ED): \u20AC39k revenue \u2212 \u20AC39k cost \u2212 \u20AC10k OH = \u2212\u20AC10,000.',
        'Alt 2 (sell to SF): \u20AC70k revenue \u2212 \u20AC39k cost \u2212 \u20AC10k OH = +\u20AC21,000.',
        'Difference = \u2212\u20AC10,000 \u2212 \u20AC21,000 = \u2212\u20AC31,000. WD strongly prefers SF.',
      ],
      answer: '\u2212\u20AC31,000',
      keyTakeaway:
        'WD strongly prefers selling to SF rather than transferring to ED at variable cost. The opportunity cost of \u20AC31,000 per unit makes the internal transfer unacceptable to WD.',
    },
    {
      id: 'xc-q13',
      partLabel: 'Part 2.b \u2014 Transfer Pricing (Full Capacity)',
      questionTitle: "Q13: ED's Divisional Profit Difference",
      question:
        "Compute the difference between alternatives 1 and 2 in terms of ED's Divisional Profit when WD is at full capacity.",
      formulaTex:
        '\\Delta ED = 83 \\times 1{,}000 - 39 \\times 1{,}000 - 5{,}000 - 10 \\times 1{,}000 = 29{,}000',
      formulaLegend:
        'Same as Part 2.a: ED perspective is unchanged because ED alternatives are the same.',
      approach: [
        'ED\u2019s calculation is identical to Part 2.a: \u20AC83k \u2212 \u20AC39k \u2212 \u20AC5k \u2212 \u20AC10k = +\u20AC29,000.',
        'ED is indifferent to WD\u2019s capacity situation.',
      ],
      answer: '+\u20AC29,000',
      keyTakeaway:
        "ED's gain remains +\u20AC29,000 regardless of WD's opportunity cost.",
    },
    {
      id: 'xc-q14',
      partLabel: 'Part 2.b \u2014 Transfer Pricing (Full Capacity)',
      questionTitle: "Q14: XC's Overall Profit Difference",
      question:
        "Compute the difference between alternatives 1 and 2 in terms of XC's profit when WD is at full capacity.",
      formulaTex:
        '\\Delta XC = (83 - 70) \\times 1{,}000 - 5{,}000 = 8{,}000',
      formulaLegend:
        'Alt 1 revenue = 83,000, Alt 2 revenue = 70,000; manufacturing costs cancel; transport = 5,000',
      approach: [
        'Alt 1 (NW): \u20AC83k \u2212 \u20AC39k \u2212 \u20AC5k = \u20AC39k. Alt 2 (SF): \u20AC70k \u2212 \u20AC39k = \u20AC31k.',
        'Difference = +\u20AC8,000 in favor of NW deal. But divisions can\u2019t agree (\u221231k + 29k = \u22122k).',
      ],
      answer: '+\u20AC8,000',
      keyTakeaway:
        'XC benefits from choosing Alt 1 (+\u20AC8,000), but the combined divisional surplus is negative (\u221231,000 + 29,000 = \u22122,000). Negotiation cannot fix this: the corporate OH distortion makes goal congruence impossible.',
    },
    // ===== PART 3.a =====
    {
      id: 'xc-q15',
      partLabel: 'Part 3.a \u2014 New Product (Capacity-Based Allocation)',
      questionTitle: 'Q15: Fixed Cost Allocation per LC Unit',
      question:
        'Compute the amount of manufacturing fixed costs allocated to each unit of LC for external pricing purposes if WD starts producing and selling this product.',
      formulaTex:
        '\\text{FC per unit} = \\frac{800{,}000}{40{,}000} = \\text{€} 20 \\text{ per unit}',
      formulaLegend:
        'Fixed costs allocated based on capacity (40,000 units), not actual volume. Same for HC and LC.',
      approach: [
        'Fixed cost per unit = \u20AC800,000 / 40,000 (capacity) = \u20AC20/unit.',
        'Same rate for HC and LC, regardless of resource consumption.',
      ],
      answer: '\u20AC20 per unit',
      keyTakeaway:
        'Capacity-based allocation gives each unit \u20AC20 of fixed costs, regardless of the product type or volume produced.',
    },
    {
      id: 'xc-q16',
      partLabel: 'Part 3.a \u2014 New Product (Capacity-Based Allocation)',
      questionTitle: 'Q16: LC External Price',
      question:
        "Compute the price of one unit of LC according to the firm's external pricing policy.",
      formulaTex:
        'P_{LC} = 1.45 \\times (10 + 20) = 1.45 \\times 30 = \\text{€} 43.50',
      formulaLegend:
        'Price = (variable cost + allocated fixed cost) \u00D7 1.45 markup',
      approach: [
        'LC full cost = \u20AC10 (VC) + \u20AC20 (FC) = \u20AC30.',
        'LC price = \u20AC30 \u00D7 1.45 = \u20AC43.50.',
      ],
      answer: '\u20AC43.50 per unit',
      keyTakeaway:
        'The uniform fixed cost allocation results in a high LC price of \u20AC43.50, which seems excessive for a "low-cost" product and may explain the low expected demand.',
    },
    {
      id: 'xc-q17',
      partLabel: 'Part 3.a \u2014 New Product (Capacity-Based Allocation)',
      questionTitle: "Q17: Effect on XC's Cash Flows",
      question:
        "Compute the effect of manufacturing 2,000 units of LC on the cash flows of XC for 2018.",
      formulaTex:
        '\\Delta CF_{XC} = (43.5 \\times 2 + 83 \\times 30) - (10 \\times 2 + 39 \\times 30) - (85 \\times 30 - 83 \\times 30 + 39 \\times 30 - 39 \\times 30) = +7 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Net effect = LC revenue + HC revenue change \u2212 LC variable cost \u2212 HC price drop effect',
      approach: [
        'LC margin = 2,000 \u00D7 (\u20AC43.50 \u2212 \u20AC10) = +\u20AC67,000.',
        'HC cannibalization = (\u20AC83 \u2212 \u20AC85) \u00D7 30,000 = \u2212\u20AC60,000.',
        'Net = \u20AC67,000 \u2212 \u20AC60,000 = +\u20AC7,000.',
      ],
      answer: '+\u20AC7,000',
      keyTakeaway:
        'LC is marginally positive for XC overall (+\u20AC7,000) despite the cannibalization effect on HC prices.',
    },
    {
      id: 'xc-q18',
      partLabel: 'Part 3.a \u2014 New Product (Capacity-Based Allocation)',
      questionTitle: "Q18: Effect on John's Bonus",
      question:
        "Compute the effect of producing and selling 2,000 units of LC on John's bonus for 2018.",
      formulaTex:
        '\\Delta \\text{WD Profit} = 87 - 20 - 60 - 20 = -13 \\text{ (\'000 \\text{€})} \\implies \\text{No bonus}',
      formulaLegend:
        'WD sees LC revenue 87, LC variable cost 20, HC price drop 60, and additional corporate OH 10\u00D72 = 20',
      approach: [
        'WD: LC revenue \u20AC87k \u2212 LC cost \u20AC20k \u2212 HC price drop \u20AC60k \u2212 corporate OH (2k \u00D7 \u20AC10) \u20AC20k = \u2212\u20AC13,000.',
        'WD profit decreases, so no bonus. Goal congruence failure: +\u20AC7k for XC but \u2212\u20AC13k for WD.',
      ],
      answer: 'No bonus (WD profit decreases by \u20AC13,000)',
      keyTakeaway:
        'Goal congruence failure: LC is profitable for XC (+\u20AC7,000) but unprofitable for WD (\u2212\u20AC13,000) due to the corporate OH allocation on extra units.',
    },
    // ===== PART 3.b =====
    {
      id: 'xc-q19',
      partLabel: 'Part 3.b \u2014 New Product (Volume-Based Allocation)',
      questionTitle: 'Q19: LC Price under Volume-Based Allocation',
      question:
        'What would the price per unit of LC be if manufacturing fixed costs were allocated based on expected sales volume (32,000 units) rather than capacity (40,000 units)?',
      formulaTex:
        'P_{LC}^{vol} = 1.45 \\times \\left(10 + \\frac{800{,}000}{32{,}000}\\right) = 1.45 \\times (10 + 25) = \\text{€} 50.75',
      formulaLegend:
        'Fixed cost per unit = 800,000 / 32,000 = \u20AC25; Full cost = 10 + 25 = \u20AC35',
      approach: [
        'FC per unit = \u20AC800,000 / 32,000 = \u20AC25 (vs \u20AC20 under capacity-based).',
        'LC price = 1.45 \u00D7 (\u20AC10 + \u20AC25) = \u20AC50.75 \u2014 even higher than \u20AC43.50.',
      ],
      answer: '\u20AC50.75 per unit',
      keyTakeaway:
        'Volume-based allocation gives an even higher LC price (\u20AC50.75 vs \u20AC43.50) because idle capacity costs are spread over fewer units, pushing the "death spiral" dynamic.',
    },
    // ===== PART 4.a =====
    {
      id: 'xc-q20',
      partLabel: 'Part 4.a \u2014 Equipment Investment (Cash Flows & Profit)',
      questionTitle: 'Q20: Effect on Cash Flows',
      question:
        'Compute the effect of investing in the new equipment on the cash flows of XC for 2018, 2019, 2020, and 2021.',
      formulaTex:
        '\\Delta CF_{2018} = -900, \\quad \\Delta CF_{2019} = \\Delta CF_{2020} = \\Delta CF_{2021} = (39-29) \\times 30 + 100 = 400 \\text{ (\'000 \\text{€})}',
      formulaLegend:
        'Annual savings = variable cost reduction (10 \u00D7 30,000 = 300,000) + labor savings (100,000) = 400,000',
      approach: [
        '2018: Equipment purchase = \u2212\u20AC900,000.',
        '2019\u20132021: VC savings = \u20AC300k + labor savings = \u20AC100k = \u20AC400k/year.',
        'Total = \u2212\u20AC900k + \u20AC400k \u00D7 3 = +\u20AC300,000.',
      ],
      answer: '\u2212\u20AC900,000 in 2018; +\u20AC400,000 in each of 2019, 2020, and 2021',
      keyTakeaway:
        'The investment generates \u20AC1,200,000 in total savings over 3 years against a \u20AC900,000 outlay, yielding a positive NPV before discounting.',
    },
    {
      id: 'xc-q21',
      partLabel: 'Part 4.a \u2014 Equipment Investment (Cash Flows & Profit)',
      questionTitle: 'Q21: Effect on Divisional Profit',
      question:
        'Compute the effect of investing in the new equipment on the Divisional Profit of WD for 2019, 2020, and 2021.',
      formulaTex:
        '\\Delta \\text{Profit} = 400 - 900/3 = 400 - 300 = 100 \\text{ (\'000 \\text{€}) per year}',
      formulaLegend:
        'Annual savings = 400; Annual depreciation = 900/3 = 300',
      approach: [
        'Annual savings = \u20AC400,000. Annual depreciation = \u20AC900,000 / 3 = \u20AC300,000.',
        'Profit effect = \u20AC400,000 \u2212 \u20AC300,000 = +\u20AC100,000 per year.',
      ],
      answer: '+\u20AC100,000 in each of 2019, 2020, and 2021',
      keyTakeaway:
        'After depreciation, each year shows a +\u20AC100,000 improvement in Divisional Profit, consistent across all three years under straight-line depreciation.',
    },
    // ===== PART 4.b =====
    {
      id: 'xc-q22',
      partLabel: 'Part 4.b \u2014 Residual Income & Depreciation',
      questionTitle: "Q22: Bonus under Straight-Line Depreciation",
      question:
        "Compute the effect of investing in the new equipment on John's bonus for 2019, 2020, and 2021 under straight-line depreciation.",
      formulaTex:
        '\\Delta RI_{2019} = 400 - 300 - 0.1 \\times 900 = 10 \\text{ (\'000)}; \\quad \\Delta(\\Delta RI)_{2020} = \\Delta(\\Delta RI)_{2021} = 0.1 \\times 300 = 30',
      formulaLegend:
        'Year 1: full capital charge on 900. Years 2\u20133: book value decreases by 300 each year, so RI improves by 0.1\u00D7300 = 30 per year.',
      approach: [
        '2019: \u0394RI = \u20AC100k \u2212 10% \u00D7 \u20AC900k = +\u20AC10k. Bonus = 10% \u00D7 \u20AC10k = \u20AC1,000.',
        '2020: \u0394RI = \u20AC100k \u2212 10% \u00D7 \u20AC600k = +\u20AC40k. Improvement = \u20AC30k. Bonus = \u20AC3,000.',
        '2021: \u0394RI = \u20AC100k \u2212 10% \u00D7 \u20AC300k = +\u20AC70k. Improvement = \u20AC30k. Bonus = \u20AC3,000.',
      ],
      answer: '\u20AC1,000 in 2019; \u20AC3,000 in 2020; \u20AC3,000 in 2021',
      keyTakeaway:
        'Under straight-line depreciation, the bonus is small in year 1 (capital charge is high) and grows as the book value of the equipment declines.',
    },
    {
      id: 'xc-q23',
      partLabel: 'Part 4.b \u2014 Residual Income & Depreciation',
      questionTitle: "Q23: Bonus under Delayed Depreciation",
      question:
        "Compute the effect of investing in the new equipment on John's bonus for 2019, 2020, and 2021 under delayed depreciation (10% in 2019, 30% in 2020, 60% in 2021).",
      formulaTex:
        '\\Delta RI_{2019} = 400 - 0.1 \\times 900 - 0.1 \\times 900 = 220; \\quad \\Delta(\\Delta RI)_{2020} = -0.2 \\times 900 + 0.1 \\times 0.1 \\times 900 < 0',
      formulaLegend:
        '2019 depreciation = 90, capital charge = 90, savings = 400. Years 2\u20133: accelerating depreciation causes RI to fall.',
      approach: [
        '2019: Dep = 10% \u00D7 \u20AC900k = \u20AC90k. Profit = \u20AC310k. \u0394RI = \u20AC310k \u2212 \u20AC90k = +\u20AC220k. Bonus = \u20AC22,000.',
        '2020: Dep = \u20AC270k. \u0394RI = \u20AC49k. Year-over-year = \u2212\u20AC171k. Bonus = \u20AC0.',
        '2021: Dep = \u20AC540k. RI falls further. Bonus = \u20AC0.',
      ],
      answer: '\u20AC22,000 in 2019; \u20AC0 in 2020; \u20AC0 in 2021',
      keyTakeaway:
        'Delayed depreciation front-loads the bonus into year 1 (\u20AC22,000 vs \u20AC1,000 under straight-line). This may incentivize investment but also creates risk if the expected savings do not materialize, and provides no incentive to follow up in later years.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis: sales volume, selling price, material efficiency, input price, other variable costs variances',
      'Transfer pricing: variable cost TP, goal congruence failure under idle vs full capacity',
      'Product introduction: capacity-based vs volume-based fixed cost allocation, pricing policy effects',
      'Investment analysis: cash flow vs profit impact, straight-line vs delayed depreciation',
      'Residual income: capital charge effect on bonuses, depreciation schedule incentive distortions',
    ],
    keyTheme:
      "XtremeClimb illustrates how a variable corporate overhead allocation based on volume creates goal congruence failures across transfer pricing, new product decisions, and divisional performance measurement, while the choice of depreciation schedule for RI-based bonuses can drastically alter managers' investment incentives.",
  },
}
