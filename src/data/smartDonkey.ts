import type { Simulation } from './artisanGardeners'

export const SMART_DONKEY: Simulation = {
  id: 'smart-donkey',
  title: 'Smart Donkey Inc.',
  caseScenario: [
    'Smart Donkey Inc. is a small manufacturing company that builds and distributes offroad transport vehicles. Its CEO, Jim Donkey, uses residual income (RI) to measure divisional performance: RI = NOPAT \u2212 cost of capital \u00D7 NOA.',
    'A lump-sum bonus is awarded to the divisional manager at the end of a year if and only if that year\'s RI is positive.',
    'Peter Rabbit, the production division manager, is about to implement "project MCT (marzipan carrot transporter)" requiring an upfront NOA investment of $40. Forecasted positions: 10 units in Year 1 and 12 units in Year 2; price $10/unit; materials $4/unit (2 kg at $2/kg); labor $3/unit; cost of capital 10%; tax rate 0%.',
    'Peter has two character flaws: he cares only about the short term (upcoming year) and only about his bonus. He would never make a decision that prevented him from obtaining his bonus in Year 1.',
  ],
  partContexts: [
    {
      partLabel: 'Part A \u2014 Accelerated Depreciation',
      context:
        'Jim proposes capitalizing R&D and depreciating it over two years with accelerated amortization: 70% in Year 1 and 30% in Year 2.',
    },
    {
      partLabel: 'Part A \u2014 Shareholder Perspective',
      context:
        'Determine whether the project should be undertaken from the shareholders\' point of view.',
    },
    {
      partLabel: 'Part A \u2014 Peter\'s Incentives (Accelerated)',
      context:
        'Given Peter\'s character flaws, will he invest given accelerated depreciation?',
    },
    {
      partLabel: 'Part A \u2014 Straight-Line Depreciation',
      context:
        'Will Peter invest if Jim changes to straight-line depreciation (50% each year)?',
    },
    {
      partLabel: 'Part B \u2014 Variance Analysis',
      context:
        'Using straight-line amortization, perform a variance analysis for RI in Year 1. Actual results: price dropped to $9, sold 18 units (8 more than budgeted), material supplier charged 10% below budget but 10% more material consumed per unit, labor $0.30 more per unit, cost of capital rose from 10% to 15%. Actual RI = $5.32.',
    },
    {
      partLabel: 'Part B \u2014 RI as Performance Measure',
      context:
        'Evaluate whether RI is a good performance measure for the production division.',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part A \u2014 Accelerated Depreciation',
      questionTitle: 'Q1: NOPAT and RI with accelerated depreciation',
      question:
        'What is the project\'s NOPAT and RI in Year 1 and Year 2 with accelerated depreciation (70% Year 1, 30% Year 2)?',
      formulaTex:
        'RI_1 = 2 - 0.1 \\times 40 = -2; \\quad RI_2 = 24 - 0.1 \\times 12 = 22.8',
      formulaLegend:
        'Year 1: NOPAT = 10\u00D710 \u2212 4\u00D710 \u2212 3\u00D710 \u2212 0.7\u00D740 = 2; NOA = 40 \u2212 28 = 12. Year 2: NOPAT = 10\u00D712 \u2212 4\u00D712 \u2212 3\u00D712 \u2212 0.3\u00D740 = 24; NOA = 12 \u2212 12 = 0',
      approach: [
        'Year 1: Revenue = 10 \u00D7 10 = $100; Material = 4 \u00D7 10 = $40; Labor = 3 \u00D7 10 = $30; Depreciation = 0.7 \u00D7 40 = $28.',
        'Year 1 NOPAT = $100 \u2212 $40 \u2212 $30 \u2212 $28 = $2.',
        'Year 1 NOA (beginning) = $40. RI = $2 \u2212 0.1 \u00D7 $40 = \u2212$2.',
        'Year 2: Revenue = 10 \u00D7 12 = $120; Material = 4 \u00D7 12 = $48; Labor = 3 \u00D7 12 = $36; Depreciation = 0.3 \u00D7 40 = $12.',
        'Year 2 NOPAT = $120 \u2212 $48 \u2212 $36 \u2212 $12 = $24.',
        'Year 2 NOA (beginning) = $40 \u2212 $28 = $12. RI = $24 \u2212 0.1 \u00D7 $12 = $22.80.',
      ],
      answer:
        'Year 1: NOPAT = $2, RI = \u2212$2. Year 2: NOPAT = $24, RI = $22.80.',
      keyTakeaway:
        'Accelerated depreciation front-loads the expense, causing negative RI in Year 1 despite positive NOPAT.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part A \u2014 Shareholder Perspective',
      questionTitle: 'Q2: Should the project be undertaken?',
      question:
        'From the point of view of Smart Donkey\'s shareholders, should Peter invest in this project?',
      formulaTex:
        'NPV = -40 + \\frac{30}{1.1} + \\frac{36}{1.1^2} = -40 + 27.27 + 29.75 = 17.02 > 0',
      formulaLegend:
        'Cash flows: Year 0 = \u2212$40 investment; Year 1 = (10\u22124\u22123)\u00D710 = $30; Year 2 = (10\u22124\u22123)\u00D712 = $36',
      approach: [
        'Year 1 cash flow = (10 \u2212 4 \u2212 3) \u00D7 10 = $30.',
        'Year 2 cash flow = (10 \u2212 4 \u2212 3) \u00D7 12 = $36.',
        'NPV = \u2212$40 + $30/1.1 + $36/1.1\u00B2 = \u2212$40 + $27.27 + $29.75 = $17.02.',
        'The NPV is positive, so shareholders benefit from the project.',
      ],
      answer:
        'Yes. The NPV is $17.02 > 0, so the project is in shareholders\' best interest.',
      keyTakeaway:
        'NPV is the correct criterion for investment decisions from the shareholders\' perspective.',
    },
    // ===== Q3 =====
    {
      id: 'q3',
      partLabel: 'Part A \u2014 Peter\'s Incentives (Accelerated)',
      questionTitle: 'Q3: Will Peter invest with accelerated depreciation?',
      question:
        'Given his character flaws, will Peter invest into this project given the proposed accounting policy (accelerated depreciation)?',
      approach: [
        'With accelerated depreciation, RI in Year 1 is \u2212$2 (negative).',
        'Peter\'s bonus requires positive RI. Since RI is negative in Year 1, Peter would not receive a bonus.',
        'Given Peter only cares about the short term and his bonus, he would not invest.',
      ],
      answer:
        'No. Year 1 RI is negative (\u2212$2), so Peter would not receive a bonus and would reject the project despite its positive NPV.',
      keyTakeaway:
        'Accelerated depreciation combined with short-term bonus incentives can cause managers to reject positive-NPV projects.',
    },
    // ===== Q4 =====
    {
      id: 'q4',
      partLabel: 'Part A \u2014 Straight-Line Depreciation',
      questionTitle: 'Q4: Will Peter invest with straight-line depreciation?',
      question:
        'Will Peter invest into the project if Jim changes the depreciation method from accelerated to straight-line (50% in each year)?',
      formulaTex:
        'RI_1 = 10 - 0.1 \\times 40 = 6 > 0',
      formulaLegend:
        'Year 1: NOPAT = 100 \u2212 40 \u2212 30 \u2212 20 = $10; NOA = $40; RI = $10 \u2212 $4 = $6',
      approach: [
        'Year 1: Depreciation = 0.5 \u00D7 $40 = $20. NOPAT = $100 \u2212 $40 \u2212 $30 \u2212 $20 = $10.',
        'Year 1 NOA = $40. RI = $10 \u2212 0.1 \u00D7 $40 = $6.',
        'RI is positive, so Peter qualifies for a bonus.',
        'Yes, Peter would invest under straight-line depreciation.',
        '(Year 2 for reference: NOPAT = $120 \u2212 $48 \u2212 $36 \u2212 $20 = $16; NOA = $20; RI = $16 \u2212 $2 = $14.)',
      ],
      answer:
        'Yes. With straight-line depreciation, Year 1 RI = $6 > 0, so Peter receives his bonus and would invest.',
      keyTakeaway:
        'The depreciation method choice directly affects RI-based incentives and can determine whether a manager accepts or rejects a value-creating project.',
    },
    // ===== Q5 =====
    {
      id: 'q5',
      partLabel: 'Part B \u2014 Variance Analysis',
      questionTitle: 'Q5: Variance analysis for RI in Year 1',
      question:
        'Assume straight-line amortization and perform a comprehensive variance analysis for RI in Year 1. Provide variances for: volume, selling price, material efficiency, material input price, labor cost, and capital charge.',
      formulaTex:
        'RI_{budget} = 6; \\quad RI_{actual} = 5.32; \\quad \\Delta = -0.68',
      formulaLegend:
        'Actual: 18 units at $9; material = 18 \u00D7 2 \u00D7 1.1 kg at $2 \u00D7 0.9/kg; labor = 18 \u00D7 $3.30; cost of capital = 15%',
      approach: [
        'Budgeted RI = $6. Actual RI = $5.32.',
        'Volume variance = (18 \u2212 10) \u00D7 (10 \u2212 2\u00D72 \u2212 3) = 8 \u00D7 3 = +$24.',
        'Selling price variance = 18 \u00D7 (9 \u2212 10) = \u2212$18.',
        'Material efficiency variance = \u221218 \u00D7 (2.2 \u2212 2) \u00D7 2 = \u2212$7.20.',
        'Material input price variance = \u221218 \u00D7 2.2 \u00D7 (1.80 \u2212 2) = +$7.92.',
        'Labor cost variance = \u221218 \u00D7 (3.30 \u2212 3) = \u2212$5.40.',
        'Capital charge variance = \u2212(0.15 \u2212 0.10) \u00D7 40 = \u2212$2.00.',
        'Total: $24 \u2212 $18 \u2212 $7.20 + $7.92 \u2212 $5.40 \u2212 $2.00 = \u2212$0.68.',
      ],
      answer:
        'Volume: +$24; Selling price: \u2212$18; Material efficiency: \u2212$7.20; Material input price: +$7.92; Labor: \u2212$5.40; Capital charge: \u2212$2.00. Total variance: \u2212$0.68 (from RI of $6.00 to $5.32).',
      keyTakeaway:
        'The volume increase (+$24) was nearly offset by the price reduction (\u2212$18) and cost increases, resulting in only a small net decline in RI.',
    },
    // ===== Q6 =====
    {
      id: 'q6',
      partLabel: 'Part B \u2014 RI as Performance Measure',
      questionTitle: 'Q6: Is RI a good performance measure?',
      question:
        'Do you think that RI is a good performance measure for the production division and its manager? State your reason.',
      approach: [
        'RI is sensitive to variables beyond the division manager\'s control, such as the cost of capital and investment levels.',
        'A change in the cost of capital from 10% to 15% (an uncontrollable variable) reduced RI by $2.',
        'This can have detrimental incentive and motivation effects.',
        'One solution: use the budgeted rather than actual cost of capital to compute RI for performance evaluation.',
      ],
      answer:
        'RI is problematic because it is sensitive to variables outside the manager\'s control (e.g., cost of capital, investment levels). A fix: use budgeted rather than actual cost of capital for evaluation.',
      keyTakeaway:
        'Performance measures should ideally exclude factors beyond the manager\'s control to maintain proper incentive and motivation effects.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Residual income computation',
      'NPV analysis',
      'Depreciation method effects on RI',
      'Short-term incentive distortions',
      'Variance analysis for RI',
      'Controllability principle',
    ],
    keyTheme:
      'The choice of depreciation method and the inclusion of uncontrollable variables in RI can create incentive distortions that cause managers to reject positive-NPV projects or be penalized for factors beyond their control.',
  },
}
