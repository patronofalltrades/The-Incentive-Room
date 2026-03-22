import type { Simulation } from './artisanGardeners'

export const INTERNATIONAL_GOODS: Simulation = {
  id: 'international-goods',
  title: 'International Goods (IG)',
  caseScenario: [
    'Patricia manages Division A of International Goods (IG), a large multinational company. Division A produces one product using one part purchased from Division B (another IG division). Division A also incurs variable costs beyond the transfer payment.',
    "Division B manufactures one type of intermediate product with variable cost per unit of \u20AC0.2 and fixed cost per unit of \u20AC3.3. Patricia's compensation includes a fixed salary of \u20AC100,000 plus a bonus based on the increase in Residual Income (RI = EBIT \u2212 cost of capital \u00D7 Book value of assets at start of year). Bonus = 10% of (RI current year \u2212 RI prior year) if positive, otherwise zero. Cost of capital = 10%.",
    "In 2014, the transfer pricing policy was full cost (\u20AC3.5/unit) plus 20% markup = \u20AC4.2/unit. In 2015, the policy changed to: variable cost per unit + lump sum of \u20AC2,000,000 regardless of volume. Division A's variable costs per unit (excl. transfers) decreased from \u20AC4.2 to \u20AC3.7. Fixed costs decreased by \u20AC400,000. Book value of assets fell 30%. EBIT did not include corporate overhead charges. Units valued at variable cost for inventory; production = sales volume.",
  ],
  tableData: {
    headers: ['(in thousands of \u20AC)', '2014', '2015'],
    rows: [
      ['Revenues', '12,000', '10,800'],
      ['Payments to Division B', '2,100', '2,090'],
      ['Variable costs (excl. transfer)', '2,100', '1,665'],
      ['Fixed costs (division-specific)', '6,000', '5,600'],
      ['EBIT', '1,800', '1,445'],
      ['Book value of assets (start of year)', '16,000', '11,200'],
      ['Sales volume (thousands of units)', '500', '450'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Residual Income & Transfer Pricing',
      context:
        'Compute Division A\'s Residual Income for 2014 and 2015, the transfer prices, and Patricia\'s bonus. Also compute the hypothetical bonus under the old (2014) transfer pricing policy.',
    },
    {
      partLabel: 'Part 2 \u2014 Variance Analysis',
      context:
        'Perform a variance analysis to explain the difference in Residual Income between 2014 and 2015. Decompose into: sales volume, selling price, internal transfer, variable cost per unit, fixed costs, and book value of assets variances.',
    },
  ],
  steps: [
    // ===== PART 1 =====
    {
      id: 'ig-q1',
      partLabel: 'Part 1 \u2014 Residual Income & Transfer Pricing',
      questionTitle: "Q1: Division A's Residual Income in 2014",
      question: "What was Division A's Residual Income in 2014?",
      formulaTex:
        'RI_{2014} = 1{,}800{,}000 - 0.1 \\times 16{,}000{,}000 = \\text{\u20AC} 200{,}000',
      formulaLegend:
        'RI = EBIT \u2212 cost of capital \u00D7 Book value of assets (start of year)',
      approach: [
        'Step 1: Identify EBIT from the income data. EBIT (2014) = \u20AC1,800,000. This is the division\'s operating profit before any capital charge.',
        'Step 2: Compute the capital charge. Residual Income deducts a charge for the capital the division ties up \u2014 this ensures the division earns above its cost of capital. Capital charge = 10% \u00D7 \u20AC16,000,000 = \u20AC1,600,000.',
        'Step 3: Calculate Residual Income. RI = EBIT \u2212 capital charge = \u20AC1,800,000 \u2212 \u20AC1,600,000 = \u20AC200,000. This means Division A created only \u20AC200,000 of value above what investors require for lending \u20AC16M in assets.',
      ],
      answer: '\u20AC200,000',
      keyTakeaway:
        'Despite \u20AC1.8M in EBIT, the large asset base (\u20AC16M) absorbs most of the profit through the 10% capital charge.',
    },
    {
      id: 'ig-q2',
      partLabel: 'Part 1 \u2014 Residual Income & Transfer Pricing',
      questionTitle: 'Q2: Transfer Price per Unit in 2014',
      question: 'What was the transfer price per unit in 2014?',
      formulaTex:
        'TP_{2014} = 1.20 \\times (0.2 + 3.3) = 1.20 \\times 3.5 = \\text{\u20AC} 4.2',
      formulaLegend:
        "Full cost = variable (\u20AC0.2) + fixed (\u20AC3.3) = \u20AC3.5; Markup = 20%",
      approach: [
        'Step 1: Determine Division B\'s full cost. The 2014 transfer pricing policy is full cost plus a markup. Full cost = variable cost (\u20AC0.2) + fixed cost (\u20AC3.3) = \u20AC3.5 per unit. Full cost includes both variable and fixed components to ensure Division B recovers all production costs.',
        'Step 2: Apply the 20% markup. The markup gives Division B a margin above cost recovery. Transfer price = 1.20 \u00D7 \u20AC3.5 = \u20AC4.2 per unit.',
        'Step 3: Verify against the financial statements. Total payments to Division B = 500,000 units \u00D7 \u20AC4.2 = \u20AC2,100,000, which matches the 2014 income data exactly.',
      ],
      answer: '\u20AC4.2 per unit',
      keyTakeaway:
        'The 2014 transfer price is purely per-unit, so transfer costs scale linearly with volume.',
    },
    {
      id: 'ig-q3',
      partLabel: 'Part 1 \u2014 Residual Income & Transfer Pricing',
      questionTitle: 'Q3: Variable Component of 2015 Transfer Price',
      question: 'What was the variable (per unit) component of the transfer pricing policy in 2015?',
      formulaTex:
        'TP_{2015}^{var} = \\text{\u20AC} 0.2 \\text{ per unit}',
      formulaLegend:
        'Under the new policy, only the variable cost (\u20AC0.2/unit) varies with volume; the rest is a lump sum.',
      approach: [
        'Step 1: Understand the new policy structure. In 2015, the transfer pricing policy changed to: variable cost per unit + a fixed lump sum of \u20AC2,000,000 regardless of volume. This separates the variable component (which scales with volume) from the fixed component (which does not).',
        'Step 2: Identify the variable component. Division B\'s variable cost per unit = \u20AC0.2. This is the only part of the transfer that changes with volume.',
        'Step 3: Verify against financial statements. Total payments = (450,000 \u00D7 \u20AC0.2) + \u20AC2,000,000 = \u20AC90,000 + \u20AC2,000,000 = \u20AC2,090,000, which matches the 2015 income data. The lump sum structure means Division A bears volume risk \u2014 if volume drops, the fixed \u20AC2M is still owed.',
      ],
      answer: '\u20AC0.2 per unit',
      keyTakeaway:
        'The new policy shifts most of the transfer cost into a fixed lump sum, exposing Division A to volume risk.',
    },
    {
      id: 'ig-q4',
      partLabel: 'Part 1 \u2014 Residual Income & Transfer Pricing',
      questionTitle: "Q4: Division A's Residual Income in 2015",
      question: "What was Division A's Residual Income in 2015?",
      formulaTex:
        'RI_{2015} = 1{,}445{,}000 - 0.1 \\times 11{,}200{,}000 = \\text{\u20AC} 325{,}000',
      formulaLegend:
        'EBIT = 1,445,000; Capital charge = 0.1 \u00D7 11,200,000 = 1,120,000',
      approach: [
        'Step 1: Read EBIT from the 2015 income data. EBIT (2015) = \u20AC1,445,000. Note this is lower than 2014\'s \u20AC1,800,000, reflecting lower revenue and higher transfer costs.',
        'Step 2: Compute the capital charge on the reduced asset base. Book value of assets fell 30% (from \u20AC16M to \u20AC11.2M). Capital charge = 10% \u00D7 \u20AC11,200,000 = \u20AC1,120,000. This is \u20AC480,000 less than 2014\'s charge \u2014 a major driver of the RI improvement.',
        'Step 3: Calculate Residual Income. RI (2015) = \u20AC1,445,000 \u2212 \u20AC1,120,000 = \u20AC325,000. Despite lower EBIT, RI rose from \u20AC200,000 to \u20AC325,000 because the asset base shrank faster than EBIT.',
      ],
      answer: '\u20AC325,000',
      keyTakeaway:
        'RI increased from \u20AC200,000 to \u20AC325,000 despite lower EBIT, largely because the 30% reduction in book value of assets reduced the capital charge by \u20AC480,000.',
    },
    {
      id: 'ig-q5',
      partLabel: 'Part 1 \u2014 Residual Income & Transfer Pricing',
      questionTitle: "Q5: Patricia's Bonus in 2015",
      question: "What was Patricia's bonus in 2015?",
      formulaTex:
        '\\text{Bonus} = 0.1 \\times (325{,}000 - 200{,}000) = 0.1 \\times 125{,}000 = \\text{\u20AC} 12{,}500',
      formulaLegend:
        'Bonus = 10% of (RI_2015 \u2212 RI_2014) if positive',
      approach: [
        'Step 1: Compute the year-over-year RI improvement. The bonus is triggered only if RI increased year-over-year. RI increase = \u20AC325,000 \u2212 \u20AC200,000 = \u20AC125,000. Since this is positive, Patricia qualifies for a bonus.',
        'Step 2: Apply the bonus formula. Bonus = 10% \u00D7 RI increase = 10% \u00D7 \u20AC125,000 = \u20AC12,500. This incentive structure rewards year-over-year RI improvement, not the absolute level of RI.',
      ],
      answer: '\u20AC12,500',
      keyTakeaway:
        "Patricia earns a \u20AC12,500 bonus thanks to the RI increase, which was driven more by asset reduction than operational improvement.",
    },
    {
      id: 'ig-q6',
      partLabel: 'Part 1 \u2014 Residual Income & Transfer Pricing',
      questionTitle: "Q6: Hypothetical Bonus under Old TP Policy",
      question:
        "What would Patricia's bonus have been in 2015 if the company had used the 2014 transfer price (\u20AC4.2/unit, no lump sum)?",
      formulaTex:
        'EBIT_{2015}^{old\\ TP} = 10{,}800 - 4.2 \\times 450 - 1{,}665 - 5{,}600 = 1{,}645 \\text{ (\'000)}',
      formulaLegend:
        'Under old TP: transfer cost = 4.2 \u00D7 450 = 1,890 vs actual 2,090; EBIT rises by 200',
      approach: [
        'Step 1: Recalculate transfer costs under the old per-unit policy. Under the 2014 policy, the transfer price is \u20AC4.2/unit with no lump sum. Transfer cost = \u20AC4.2 \u00D7 450,000 = \u20AC1,890,000. This is \u20AC200,000 less than the actual 2015 payment of \u20AC2,090,000, because the per-unit rate saves money at lower volumes.',
        'Step 2: Recompute EBIT with the old TP. EBIT = \u20AC10,800,000 \u2212 \u20AC1,890,000 \u2212 \u20AC1,665,000 \u2212 \u20AC5,600,000 = \u20AC1,645,000. This is \u20AC200,000 higher than the actual \u20AC1,445,000.',
        'Step 3: Recompute RI. RI = \u20AC1,645,000 \u2212 \u20AC1,120,000 = \u20AC525,000.',
        'Step 4: Compute the hypothetical bonus. Bonus = 10% \u00D7 (\u20AC525,000 \u2212 \u20AC200,000) = 10% \u00D7 \u20AC325,000 = \u20AC32,500. Patricia would have earned \u20AC20,000 more under the old policy, highlighting how the new lump-sum TP penalizes Division A when volume declines.',
      ],
      answer: '\u20AC32,500',
      keyTakeaway:
        'Under the old per-unit TP, Patricia would have earned \u20AC32,500 (\u20AC20,000 more) because the per-unit rate at lower volume saves \u20AC200,000 vs the lump sum policy.',
    },
    // ===== PART 2 =====
    {
      id: 'ig-q7',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q7: Sales Volume Variance',
      question:
        'How much of the difference between the residual income of 2014 and 2015 is due to a change in sales volume?',
      formulaTex:
        'V_{vol} = (450 - 500) \\times 24 - (450 - 500) \\times 4.2 - (450 - 500) \\times 4.2 = -780 \\text{ (\'000 \\text{\u20AC})}',
      formulaLegend:
        'Price/unit = 12,000/500 = \u20AC24. Transfer/unit = \u20AC4.2. Variable cost/unit = \u20AC4.2. All at 2014 rates.',
      approach: [
        'Step 1: Understand what the volume variance isolates. This variance captures the impact of selling fewer units, holding all per-unit rates at their 2014 (base-year) levels. It answers: "How much RI did we lose purely because volume dropped?"',
        'Step 2: Compute the revenue effect of lower volume. Selling price in 2014 = \u20AC12,000k / 500k = \u20AC24/unit. Revenue lost = (450 \u2212 500) \u00D7 \u20AC24 = \u221250 \u00D7 \u20AC24 = \u2212\u20AC1,200k.',
        'Step 3: Compute the transfer cost savings from lower volume. At the 2014 per-unit TP of \u20AC4.2, fewer units mean lower transfer costs. Savings = \u2212(450 \u2212 500) \u00D7 \u20AC4.2 = +\u20AC210k. The negative sign before the volume change converts a cost reduction into a favorable effect.',
        'Step 4: Compute the variable cost savings from lower volume. At the 2014 variable cost of \u20AC4.2/unit: savings = \u2212(450 \u2212 500) \u00D7 \u20AC4.2 = +\u20AC210k.',
        'Step 5: Sum to get total volume variance. Volume variance = \u2212\u20AC1,200k + \u20AC210k + \u20AC210k = \u2212\u20AC780k. The revenue loss far exceeds the cost savings, because each lost unit had a positive contribution margin of \u20AC15.60.',
      ],
      answer: '\u2212\u20AC780,000 (Unfavorable)',
      keyTakeaway:
        'The 50,000-unit decline in sales volume caused a \u20AC780,000 drop in RI, reflecting the lost contribution margin at 2014 rates.',
    },
    {
      id: 'ig-q8',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q8: Selling Price Variance',
      question:
        'How much of the difference between the residual income of 2014 and 2015 is due to a change in selling price?',
      formulaTex:
        'V_{price} = 450 \\times (24 - 24) = 0',
      formulaLegend:
        'Selling price per unit = 12,000/500 = \u20AC24 in 2014; 10,800/450 = \u20AC24 in 2015',
      approach: [
        'Step 1: Understand what the price variance isolates. Holding volume at its actual 2015 level, this variance captures the impact of a change in selling price per unit. It is computed on actual volume so it does not double-count the volume effect.',
        'Step 2: Determine per-unit selling prices. 2014 price = \u20AC12,000k / 500k = \u20AC24. 2015 price = \u20AC10,800k / 450k = \u20AC24. Prices are identical.',
        'Step 3: Compute the variance. Price variance = 450k \u00D7 (\u20AC24 \u2212 \u20AC24) = \u20AC0. There is no variance because the selling price did not change \u2014 the entire revenue decline was caused by the volume drop.',
      ],
      answer: '\u20AC0 (No variance)',
      keyTakeaway:
        'The selling price remained constant at \u20AC24 per unit, so there is no price variance.',
    },
    {
      id: 'ig-q9',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q9: Internal Transfer Variance',
      question:
        'How much of the difference between the residual income of 2014 and 2015 is due to a change in the transfer pricing policy?',
      formulaTex:
        'V_{TP} = -(450 \\times 0.2 + 2{,}000) - (-450 \\times 4.2) = -2{,}090 + 1{,}890 = -200 \\text{ (\'000 \\text{\u20AC})}',
      formulaLegend:
        '2015 TP at 450k units = 90 + 2,000 = 2,090; 2014 TP at 450k units = 450 \u00D7 4.2 = 1,890',
      approach: [
        'Step 1: Understand what the transfer variance isolates. This variance captures the impact of the change in transfer pricing policy, holding volume at the actual 2015 level. It asks: "At 450k units, how much more or less does the new TP policy cost compared to the old one?"',
        'Step 2: Compute transfer cost under the old (2014) policy at 2015 volume. Old TP cost = 450k \u00D7 \u20AC4.2 = \u20AC1,890k. This is the benchmark \u2014 what Division A would have paid if the policy had not changed.',
        'Step 3: Compute transfer cost under the new (2015) policy at 2015 volume. New TP cost = (450k \u00D7 \u20AC0.2) + \u20AC2,000k = \u20AC90k + \u20AC2,000k = \u20AC2,090k. The lump sum dominates.',
        'Step 4: Compute the variance. Transfer variance = \u2212\u20AC2,090k \u2212 (\u2212\u20AC1,890k) = \u2212\u20AC200k. The new policy costs \u20AC200k more at 450k units because the fixed \u20AC2M lump sum exceeds what a per-unit charge would have been at the reduced volume.',
      ],
      answer: '\u2212\u20AC200,000 (Unfavorable)',
      keyTakeaway:
        'The new lump-sum TP policy costs Division A \u20AC200,000 more at the reduced volume of 450,000 units, because the fixed \u20AC2M payment does not decrease with volume.',
    },
    {
      id: 'ig-q10',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q10: Variable Cost per Unit Variance',
      question:
        'How much of the difference between the residual income of 2014 and 2015 is due to a change in variable cost per unit (excluding transfers)?',
      formulaTex:
        'V_{vc} = -450 \\times (3.7 - 4.2) = -450 \\times (-0.5) = +225 \\text{ (\'000 \\text{\u20AC})}',
      formulaLegend:
        'Variable cost decreased from \u20AC4.2 to \u20AC3.7 per unit',
      approach: [
        'Step 1: Understand what this variance isolates. It captures the impact of the change in per-unit variable costs (excluding transfers), holding volume at the actual 2015 level. A cost decrease is favorable because it means Division A became more efficient.',
        'Step 2: Identify the per-unit variable costs. 2014 = \u20AC2,100k / 500k = \u20AC4.2/unit. 2015 = \u20AC1,665k / 450k = \u20AC3.7/unit. The cost fell by \u20AC0.50 per unit.',
        'Step 3: Compute the variance. The negative sign converts a cost change into its profit impact. Variance = \u2212450k \u00D7 (\u20AC3.7 \u2212 \u20AC4.2) = \u2212450k \u00D7 (\u2212\u20AC0.5) = +\u20AC225k. This is favorable: Division A saved \u20AC0.50 per unit on 450,000 units.',
      ],
      answer: '+\u20AC225,000 (Favorable)',
      keyTakeaway:
        'Division A successfully reduced variable costs by \u20AC0.50 per unit, contributing a favorable \u20AC225,000 variance.',
    },
    {
      id: 'ig-q11',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q11: Fixed Cost Variance',
      question:
        'How much of the difference between the residual income of 2014 and 2015 is due to a change in fixed costs (unrelated to the transfer pricing policy)?',
      formulaTex:
        'V_{FC} = -5{,}600 - (-6{,}000) = +400 \\text{ (\'000 \\text{\u20AC})}',
      formulaLegend:
        'Fixed costs fell from \u20AC6,000,000 to \u20AC5,600,000',
      approach: [
        'Step 1: Understand what this variance isolates. Fixed costs do not vary with volume, so there is no volume adjustment needed. We simply compare the two years\' fixed costs directly.',
        'Step 2: Identify the fixed costs. 2014 = \u20AC6,000,000. 2015 = \u20AC5,600,000. The division cut \u20AC400,000 in fixed costs.',
        'Step 3: Compute the variance. Variance = \u2212\u20AC5,600k \u2212 (\u2212\u20AC6,000k) = +\u20AC400k. This is favorable: lower fixed costs directly improve EBIT and RI by the same amount.',
      ],
      answer: '+\u20AC400,000 (Favorable)',
      keyTakeaway:
        'Division A cut \u20AC400,000 in fixed costs, a major positive contributor to RI improvement.',
    },
    {
      id: 'ig-q12',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q12: Book Value of Assets Variance',
      question:
        'How much of the difference between the residual income of 2014 and 2015 is due to a change in the book value of assets?',
      formulaTex:
        'V_{BV} = -0.1 \\times (11{,}200 - 16{,}000) = -0.1 \\times (-4{,}800) = +480 \\text{ (\'000 \\text{\u20AC})}',
      formulaLegend:
        'Book value fell from \u20AC16,000,000 to \u20AC11,200,000; capital charge reduction = 0.1 \u00D7 4,800 = 480',
      approach: [
        'Step 1: Understand what this variance isolates. The book value of assets determines the capital charge in the RI formula. A lower asset base reduces the capital charge, improving RI even if EBIT does not change.',
        'Step 2: Identify the book values. 2014 = \u20AC16,000,000. 2015 = \u20AC11,200,000 (a 30% reduction of \u20AC4,800,000).',
        'Step 3: Compute the variance. Capital charge variance = \u22120.10 \u00D7 (\u20AC11,200k \u2212 \u20AC16,000k) = \u22120.10 \u00D7 (\u2212\u20AC4,800k) = +\u20AC480k. This is the single largest favorable variance. However, it raises an important question: does the asset reduction reflect genuine efficiency, or is Patricia underinvesting to artificially boost RI?',
      ],
      answer: '+\u20AC480,000 (Favorable)',
      keyTakeaway:
        'The largest positive variance comes from asset reduction. This raises the question of whether the lower book value reflects genuine efficiency or potential underinvestment to boost RI.',
    },
    {
      id: 'ig-q13',
      partLabel: 'Part 2 \u2014 Variance Analysis',
      questionTitle: 'Q13: Interpretation of Variance Analysis',
      question:
        'Provide an interpretation of your results from the variance analysis, including your opinion about the change in the transfer pricing policy in 2015.',
      approach: [
        'Step 1: Reconcile all variances to confirm completeness. Volume \u2212\u20AC780k + Price \u20AC0 + Transfer \u2212\u20AC200k + Variable cost +\u20AC225k + Fixed cost +\u20AC400k + Book value +\u20AC480k = +\u20AC125k. Check: RI rose from \u20AC200k to \u20AC325k, a +\u20AC125k change. The variances reconcile perfectly.',
        'Step 2: Evaluate operational performance. Cost management was effective: variable cost savings (+\u20AC225k) and fixed cost reductions (+\u20AC400k) total +\u20AC625k. However, volume declined (\u2212\u20AC780k), which is a significant concern.',
        'Step 3: Scrutinize the asset reduction. The largest favorable variance (+\u20AC480k) comes from the 30% reduction in book value of assets. This warrants careful scrutiny \u2014 it could reflect genuine efficiency, but it could also signal underinvestment designed to artificially boost RI in the short term.',
        'Step 4: Assess the new transfer pricing policy. The lump-sum TP is unfavorable (\u2212\u20AC200k) because the fixed \u20AC2M payment does not decrease when volume drops. This shifts all volume risk to Division A and all of Division B\u2019s fixed costs unconditionally, discouraging Division A from growing volume.',
        'Step 5: Note the unchanged selling price. Price variance = \u20AC0, so the entire revenue decline is volume-driven. Patricia should focus on demand recovery.',
      ],
      answer:
        'RI increased by \u20AC125,000 despite lower EBIT, driven primarily by asset reduction (+480) and cost cutting (+625), offset by volume decline (\u2212780) and the new TP policy (\u2212200). The lump-sum TP is questionable because it shifts all risk to the buying division.',
      keyTakeaway:
        'The variance analysis reveals that RI improvement was driven by balance-sheet reduction and cost-cutting rather than revenue growth, and the new TP policy penalizes Division A when volume drops.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Residual Income computation: EBIT minus capital charge on book value of assets',
      'Transfer pricing: full-cost-plus vs variable-cost-plus-lump-sum, and their impact on divisional incentives',
      'Variance analysis: volume, price, transfer, variable cost, fixed cost, and book value of assets variances',
      'Performance measurement: how asset reduction can boost RI without genuine operational improvement',
    ],
    keyTheme:
      'International Goods illustrates how a change in transfer pricing policy from per-unit full cost to a lump-sum arrangement shifts volume risk to the buying division, and how Residual Income can improve through asset reduction rather than operational performance, raising concerns about underinvestment incentives.',
  },
}
