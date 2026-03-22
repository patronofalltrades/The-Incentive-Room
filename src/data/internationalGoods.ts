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
        'EBIT (2014) = \u20AC1,800,000. Capital charge = 10% \u00D7 \u20AC16,000,000 = \u20AC1,600,000.',
        'RI = \u20AC1,800,000 \u2212 \u20AC1,600,000 = \u20AC200,000.',
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
        'Full cost = \u20AC0.2 + \u20AC3.3 = \u20AC3.5/unit. TP = 1.20 \u00D7 \u20AC3.5 = \u20AC4.2/unit.',
        'Verify: 500,000 \u00D7 \u20AC4.2 = \u20AC2,100,000 \u2014 matches the income data.',
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
        'Variable component = \u20AC0.2/unit (Division B\u2019s variable cost).',
        'Verify: (450,000 \u00D7 \u20AC0.2) + \u20AC2,000,000 = \u20AC2,090,000 \u2014 matches.',
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
        'EBIT (2015) = \u20AC1,445,000. Capital charge = 10% \u00D7 \u20AC11,200,000 = \u20AC1,120,000.',
        'RI = \u20AC1,445,000 \u2212 \u20AC1,120,000 = \u20AC325,000.',
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
        'RI increase = \u20AC325,000 \u2212 \u20AC200,000 = \u20AC125,000.',
        'Bonus = 10% \u00D7 \u20AC125,000 = \u20AC12,500.',
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
        'Old TP cost = \u20AC4.2 \u00D7 450,000 = \u20AC1,890,000 (vs actual \u20AC2,090,000).',
        'EBIT = \u20AC10,800k \u2212 \u20AC1,890k \u2212 \u20AC1,665k \u2212 \u20AC5,600k = \u20AC1,645,000. RI = \u20AC1,645k \u2212 \u20AC1,120k = \u20AC525,000.',
        'Bonus = 10% \u00D7 (\u20AC525,000 \u2212 \u20AC200,000) = \u20AC32,500.',
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
        'Price/unit = \u20AC24. Revenue effect = (450k \u2212 500k) \u00D7 \u20AC24 = \u2212\u20AC1,200k.',
        'Transfer savings = 50k \u00D7 \u20AC4.2 = +\u20AC210k. VC savings = 50k \u00D7 \u20AC4.2 = +\u20AC210k.',
        'Volume variance = \u2212\u20AC1,200k + \u20AC210k + \u20AC210k = \u2212\u20AC780k (Unfavorable).',
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
        '2014 price = \u20AC24/unit. 2015 price = \u20AC24/unit. No change.',
        'Price variance = 450k \u00D7 (\u20AC24 \u2212 \u20AC24) = \u20AC0.',
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
        'Old TP at 450k units = 450k \u00D7 \u20AC4.2 = \u20AC1,890k. New TP = \u20AC90k + \u20AC2,000k = \u20AC2,090k.',
        'Transfer variance = \u2212\u20AC2,090k + \u20AC1,890k = \u2212\u20AC200k (Unfavorable).',
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
        'VC per unit fell from \u20AC4.2 to \u20AC3.7 (\u2212\u20AC0.50).',
        'VC variance = \u2212450k \u00D7 (\u20AC3.7 \u2212 \u20AC4.2) = +\u20AC225k (Favorable).',
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
        'Fixed costs: 2014 = \u20AC6,000k, 2015 = \u20AC5,600k. Cut \u20AC400k.',
        'FC variance = +\u20AC400k (Favorable).',
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
        'Book value fell from \u20AC16,000k to \u20AC11,200k (\u2212\u20AC4,800k).',
        'BV variance = \u22120.10 \u00D7 (\u2212\u20AC4,800k) = +\u20AC480k (Favorable).',
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
        'Reconcile: \u2212780 + 0 \u2212 200 + 225 + 400 + 480 = +\u20AC125k. Matches RI change (\u20AC325k \u2212 \u20AC200k).',
        'Cost savings (+\u20AC625k) and asset reduction (+\u20AC480k) offset volume decline (\u2212\u20AC780k).',
        'The lump-sum TP (\u2212\u20AC200k) shifts volume risk to Division A. Price was unchanged.',
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
