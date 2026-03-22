import type { Simulation } from './artisanGardeners'

export const LOCALWINGS: Simulation = {
  id: 'localwings',
  title: 'LocalWings',
  caseScenario: [
    'LocalWings (LW) is a small subsidiary wholly owned by a large airline holding company called AHC. LW operates local flights connecting the two largest cities of a small country. AHC has delegated investment decisions to LW, but financial management is centralized.',
    'LW managers receive a fixed salary and a bonus (slope = 0.01) based on Operating Profit. Budgeted 2018 Operating Profit: 232,000. Revenues = 219,000 passengers \u00D7 100 = 21,900,000. Variable costs = 219,000 \u00D7 12 + 1,460 \u00D7 4,000 = 8,468,000. Fixed costs = 13,200,000.',
    'Variable cost per passenger = 1.2 minutes \u00D7 10 per minute = 12. Cost per flight = 4,000 (3,000 fuel + 1,000 ground). Corporate overhead = 10% of actual headquarters costs, allocated as fixed amount.',
  ],
  tableData: {
    headers: ['', 'Budget', 'Actual'],
    rows: [
      ['Avg passengers per flight', '150', '160'],
      ['Flights per day', '4', '4'],
      ['Operating days per year', '365', '365'],
      ['Price per passenger', '100', '110'],
      ['Cost per passenger', '12', '14.30'],
      ['  Minutes per passenger', '1.2', '1.3'],
      ['  Cost per minute', '10', '11'],
      ['Cost per flight', '4,000', '4,100'],
      ['Fixed costs', '13,200,000', '12,600,000'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Variance Analysis',
      context:
        'Perform a variance analysis to explain the difference between budgeted and actual Operating Profit for 2018. Compute variances for: (1) average passengers per flight, (2) price per passenger, (3) minutes per passenger, (4) cost per minute, (5) cost per flight, (6) fixed costs. Also: if corporate overhead were variable at 4,110 per flight, how would the volume variance change?',
    },
    {
      partLabel: 'Part 2 \u2014 Investment Analysis (New Route)',
      context:
        'LW considers opening a new route to the third largest city, operating 2019\u20132020 only. Same volume assumptions as main route. Additional fixed costs: 4 pilots at 100,000, 16 staff at 50,000, airport fees +1,000,000, corporate OH +100,000. Aircraft: purchase 100,000,000 in 2018, depreciate 5,000,000/year, sell at 90,000,000 at end of 2020. Variable costs same as budget. Discount rate 10%.',
    },
    {
      partLabel: 'Part 3 \u2014 Price Promotion (with GS)',
      context:
        'After the organizational split into LW and GS (Ground Services), LW considers a price promotion: reduce ticket price to 90, increasing passengers per flight from 150 to 200. Number of flights unchanged. GS transfer price = 1.5 \u00D7 (variable cost per flight + fixed costs per flight) = 5,609.59 per flight.',
    },
    {
      partLabel: 'Part 4 \u2014 External Clients for GS',
      context:
        'GS is allowed to serve external clients: 180 passengers/flight, 2 flights/day, 365 days, at 4,000 per flight. GS has enough capacity. The transfer price changes because the number of flights changes the fixed cost allocation.',
    },
    {
      partLabel: 'Part 5 \u2014 System Critique',
      context:
        'Analyze and propose improvements to: (1) the variance analysis, (2) the internal transfer pricing policy, (3) the cost system, (4) the performance measure for variable compensation, (5) the bonus scheme.',
    },
  ],
  steps: [
    // ===== Part 1: Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q1: Volume variance (passengers per flight)',
      question:
        'Compute the variance related to the average number of passengers per flight.',
      formulaTex:
        'V_{vol} = (233{,}600 - 219{,}000) \\times (100 - 1.2 \\times 10) = 14{,}600 \\times 88 = 1{,}284{,}800',
      formulaLegend:
        'Actual passengers = 160 \u00D7 4 \u00D7 365 = 233,600. Budget passengers = 150 \u00D7 4 \u00D7 365 = 219,000. Contribution per passenger = 100 \u2212 12 = 88.',
      approach: [
        'Budget passengers = 150 \u00D7 4 \u00D7 365 = 219,000.',
        'Actual passengers = 160 \u00D7 4 \u00D7 365 = 233,600.',
        'Budgeted contribution per passenger = 100 \u2212 1.2 \u00D7 10 = 88.',
        'Volume variance = (233,600 \u2212 219,000) \u00D7 88 = 14,600 \u00D7 88 = +1,284,800.',
      ],
      answer: '+1,284,800 (Favorable)',
      keyTakeaway:
        'The 10 additional passengers per flight across 1,460 flights generated substantial additional contribution margin.',
    },
    // ===== Part 1: Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q2: Selling price variance',
      question:
        'Compute the variance related to the average price per flight paid by each passenger.',
      formulaTex:
        'V_{price} = 233{,}600 \\times (110 - 100) = 2{,}336{,}000',
      formulaLegend:
        'Actual passengers (233,600) \u00D7 price increase ($10)',
      approach: [
        'Selling price variance = 233,600 \u00D7 (110 \u2212 100) = 233,600 \u00D7 10 = +2,336,000.',
      ],
      answer: '+2,336,000 (Favorable)',
      keyTakeaway:
        'The $10 price increase per passenger is the largest single favorable variance.',
    },
    // ===== Part 1: Q3 =====
    {
      id: 'q3',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q3: Efficiency variance (minutes per passenger)',
      question:
        'Compute the variance related to the minutes per passenger.',
      formulaTex:
        'V_{eff} = -233{,}600 \\times (1.3 - 1.2) \\times 10 = -233{,}600',
      formulaLegend:
        'Actual passengers \u00D7 (actual \u2212 budget minutes) \u00D7 budget cost per minute',
      approach: [
        'Efficiency variance = \u2212233,600 \u00D7 (1.3 \u2212 1.2) \u00D7 10 = \u2212233,600 \u00D7 0.1 \u00D7 10 = \u2212233,600.',
      ],
      answer: '\u2212233,600 (Unfavorable)',
      keyTakeaway:
        'Each passenger required 0.1 more minutes of ground service, increasing variable costs.',
    },
    // ===== Part 1: Q4 =====
    {
      id: 'q4',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q4: Input price variance (cost per minute)',
      question:
        'Compute the variance related to the cost per minute.',
      formulaTex:
        'V_{input} = -233{,}600 \\times 1.3 \\times (11 - 10) = -303{,}680',
      formulaLegend:
        'Actual passengers \u00D7 actual minutes \u00D7 (actual \u2212 budget cost per minute)',
      approach: [
        'Input price variance = \u2212233,600 \u00D7 1.3 \u00D7 (11 \u2212 10) = \u2212303,680.',
      ],
      answer: '\u2212303,680 (Unfavorable)',
      keyTakeaway:
        'The cost per minute of airport infrastructure increased from 10 to 11.',
    },
    // ===== Part 1: Q5 =====
    {
      id: 'q5',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q5: Cost per flight variance',
      question:
        'Compute the variance related to the cost per flight.',
      formulaTex:
        'V_{flight} = -1{,}460 \\times (4{,}100 - 4{,}000) = -146{,}000',
      formulaLegend:
        'Number of flights (1,460) \u00D7 (actual \u2212 budget cost per flight)',
      approach: [
        'Cost per flight variance = \u22121,460 \u00D7 (4,100 \u2212 4,000) = \u22121,460 \u00D7 100 = \u2212146,000.',
      ],
      answer: '\u2212146,000 (Unfavorable)',
      keyTakeaway:
        'Each flight cost $100 more than budgeted, likely due to higher fuel or ground service costs.',
    },
    // ===== Part 1: Q6 =====
    {
      id: 'q6',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q6: Fixed cost variance',
      question:
        'Compute the variance related to fixed costs.',
      formulaTex:
        'V_{fixed} = -(12{,}600{,}000 - 13{,}200{,}000) = +600{,}000',
      formulaLegend:
        'Budget fixed costs \u2212 actual fixed costs',
      approach: [
        'Fixed cost variance = \u2212(12,600,000 \u2212 13,200,000) = +600,000.',
      ],
      answer: '+600,000 (Favorable)',
      keyTakeaway:
        'Fixed costs came in $600,000 below budget, contributing favorably to operating profit.',
    },
    // ===== Part 1: Q7 =====
    {
      id: 'q7',
      partLabel: 'Part 1 \u2014 Variance Analysis',
      questionTitle: 'Q7: Volume variance with variable corporate OH',
      question:
        'If corporate overhead allocation were variable at 4,110 per flight (instead of fixed), what would be the volume variance related to average number of passengers per flight?',
      approach: [
        'The number of flights is the same in budget and actual (4 \u00D7 365 = 1,460).',
        'Since the volume variance is driven by passengers per flight (not flights), the corporate OH allocation at 4,110 per flight does not change with passengers.',
        'The volume variance remains the same as in Q1: +1,284,800.',
      ],
      answer:
        '+1,284,800 \u2014 same as Q1, because the number of flights did not change. The variable OH per flight is unaffected by the passenger count.',
      keyTakeaway:
        'Corporate OH allocated per flight does not change with passengers per flight, so the volume variance is unchanged.',
    },
    // ===== Part 2: Q8 =====
    {
      id: 'q8',
      partLabel: 'Part 2 \u2014 Investment Analysis (New Route)',
      questionTitle: 'Q8: Cash flow effect of the new route',
      question:
        'Compute the effect of opening the new route on the cash flows of AHC for 2018, 2019, and 2020. Ignore interest payments.',
      formulaTex:
        '\\text{2018}: -100{,}000; \\quad \\text{2019}: 11{,}132; \\quad \\text{2020}: 101{,}132 \\quad (\\$\'000)',
      formulaLegend:
        'Revenue = 21,900k; Variable costs = 8,468k; Fixed additions: pilots 400k, staff 800k, airport 1,000k, corp OH 100k',
      approach: [
        '2018: Aircraft purchase = \u2212100,000,000. Total = \u2212100,000,000.',
        '2019: Revenue = 219,000 \u00D7 100 = 21,900,000. Variable costs = 8,468,000. Pilots = 4 \u00D7 100,000 = 400,000. Other staff = 16 \u00D7 50,000 = 800,000. Airport fees = 1,000,000. Corporate OH = 100,000. Total = 21,900,000 \u2212 8,468,000 \u2212 400,000 \u2212 800,000 \u2212 1,000,000 \u2212 100,000 = 11,132,000.',
        '2020: Same operating cash flow = 11,132,000 + aircraft sale 90,000,000 = 101,132,000.',
      ],
      answer:
        '2018: \u2212100,000,000; 2019: +11,132,000; 2020: +101,132,000.',
      keyTakeaway:
        'The large upfront aircraft investment is only partially recovered through operating cash flows and the aircraft resale.',
    },
    // ===== Part 2: Q9 =====
    {
      id: 'q9',
      partLabel: 'Part 2 \u2014 Investment Analysis (New Route)',
      questionTitle: 'Q9: NPV of the new route',
      question:
        'Compute the net present value of the cash flows assuming a discount rate of 10%.',
      formulaTex:
        'NPV = -100{,}000 + \\frac{11{,}132}{1.1} + \\frac{101{,}132}{1.1^2} \\approx -6{,}300 \\quad (\\$\'000)',
      formulaLegend:
        'Discount rate = 10%. NPV in thousands.',
      approach: [
        'NPV = \u2212100,000 + 11,132/1.1 + 101,132/1.21.',
        '= \u2212100,000 + 10,120 + 83,580.',
        '= \u2212100,000 + 93,700 \u2248 \u22126,300 (thousands).',
        'NPV is negative: the project destroys value.',
      ],
      answer:
        'NPV \u2248 \u22126,300,000. The project is value-destroying and should not be undertaken.',
      keyTakeaway:
        'Despite positive operating cash flows, the large upfront investment and the short project life (2 years) result in a negative NPV.',
    },
    // ===== Part 2: Q10 =====
    {
      id: 'q10',
      partLabel: 'Part 2 \u2014 Investment Analysis (New Route)',
      questionTitle: 'Q10: Effect on LW\'s Operating Profit',
      question:
        'Compute the effect of opening the new route on LW\'s Operating Profit for 2019 and 2020.',
      formulaTex:
        '\\Delta OP = 21{,}900 - 8{,}468 - 5{,}000 - 400 - 800 - 1{,}000 - 10 = 6{,}222 \\quad (\\$\'000)',
      formulaLegend:
        'Depreciation = 5,000k per year. Corporate OH allocated to LW = 10% \u00D7 100k = 10k. Same for both 2019 and 2020.',
      approach: [
        'Revenue = 21,900,000.',
        'Variable costs = 8,468,000.',
        'Aircraft depreciation = 5,000,000.',
        'Pilots = 400,000. Staff = 800,000. Airport fees = 1,000,000.',
        'Corporate OH (LW share) = 0.10 \u00D7 100,000 = 10,000.',
        'Operating Profit effect = 21,900,000 \u2212 8,468,000 \u2212 5,000,000 \u2212 400,000 \u2212 800,000 \u2212 1,000,000 \u2212 10,000 = 6,222,000.',
        'Same for both 2019 and 2020.',
      ],
      answer:
        'Effect on LW\'s Operating Profit: +6,222,000 for both 2019 and 2020.',
      keyTakeaway:
        'Operating Profit looks strongly positive because it does not include the financing cost of the $100M aircraft investment, creating a misleading picture.',
    },
    // ===== Part 2: Q11 =====
    {
      id: 'q11',
      partLabel: 'Part 2 \u2014 Investment Analysis (New Route)',
      questionTitle: 'Q11: Effect on LW manager bonus',
      question:
        'Compute the effect of opening the new route on the bonus of LW managers for 2019 and 2020.',
      formulaTex:
        '\\text{Bonus} = 0.01 \\times 6{,}222{,}000 = 62{,}220',
      formulaLegend:
        'Bonus slope = 0.01 applied to the incremental Operating Profit',
      approach: [
        'Bonus = 0.01 \u00D7 6,222,000 = 62,220.',
        'Same for both 2019 and 2020.',
      ],
      answer:
        'Bonus increase: 62,220 for both 2019 and 2020.',
      keyTakeaway:
        'The manager receives a large bonus for a value-destroying project because Operating Profit ignores the cost of capital employed.',
    },
    // ===== Part 3: Q12 =====
    {
      id: 'q12',
      partLabel: 'Part 3 \u2014 Price Promotion (with GS)',
      questionTitle: 'Q12: Effect of price promotion on AHC profit',
      question:
        'Compute the effect of the price promotion on AHC\'s profit.',
      formulaTex:
        '\\Delta\\pi_{AHC} = (200 \\times 90 - 150 \\times 100) \\times 4 \\times 365 - (200 - 150) \\times 4 \\times 365 \\times 12 = 3{,}504{,}000',
      formulaLegend:
        'Revenue change: (18,000 \u2212 15,000) \u00D7 1,460 = 3,000 \u00D7 1,460. Variable cost change: 50 \u00D7 1,460 \u00D7 12. Net per flight: 3,000 \u2212 600 = 2,400.',
      approach: [
        'Revenue change = (200 \u00D7 90 \u2212 150 \u00D7 100) \u00D7 4 \u00D7 365 = 3,000 \u00D7 1,460 = 4,380,000.',
        'Variable cost change = (200 \u2212 150) \u00D7 4 \u00D7 365 \u00D7 12 = 50 \u00D7 1,460 \u00D7 12 = 876,000.',
        'Net effect on AHC = 4,380,000 \u2212 876,000 = 3,504,000.',
      ],
      answer: 'Effect on AHC profit: +3,504,000.',
      keyTakeaway:
        'The price promotion increases total revenue enough to more than offset the higher variable costs from additional passengers.',
    },
    // ===== Part 3: Q13 =====
    {
      id: 'q13',
      partLabel: 'Part 3 \u2014 Price Promotion (with GS)',
      questionTitle: 'Q13: Effect of price promotion on LW Operating Profit',
      question:
        'Compute the effect of the price promotion on LW\'s Operating Profit.',
      formulaTex:
        '\\Delta OP_{LW} = (200 \\times 90 - 150 \\times 100) \\times 1{,}460 = 3{,}000 \\times 1{,}460 = 4{,}380{,}000',
      formulaLegend:
        'LW pays GS a fixed amount per flight (transfer price unchanged at 5,609.59 since number of flights is unchanged). Revenue change = 3,000 per flight.',
      approach: [
        'The transfer price per flight is the same (5,609.59) because the number of flights is unchanged.',
        'LW revenue change = (200 \u00D7 90 \u2212 150 \u00D7 100) \u00D7 1,460 = 4,380,000.',
        'LW payments to GS: unchanged (same number of flights, same TP).',
        'Effect on LW Operating Profit: +4,380,000.',
      ],
      answer: 'Effect on LW Operating Profit: +4,380,000.',
      keyTakeaway:
        'LW benefits fully from the price promotion because GS charges per flight, not per passenger. The additional passenger costs are borne by GS.',
    },
    // ===== Part 3: Q14 =====
    {
      id: 'q14',
      partLabel: 'Part 3 \u2014 Price Promotion (with GS)',
      questionTitle: 'Q14: Effect of price promotion on GS Operating Profit',
      question:
        'Compute the effect of the price promotion on GS\'s Operating Profit.',
      formulaTex:
        '\\Delta OP_{GS} = -(200 - 150) \\times 4 \\times 365 \\times 12 = -876{,}000',
      formulaLegend:
        'GS revenue unchanged (same TP, same flights). GS variable costs increase by 50 extra passengers \u00D7 1,460 flights \u00D7 12 per passenger.',
      approach: [
        'GS revenue: unchanged (same TP per flight, same number of flights).',
        'GS additional variable cost = 50 \u00D7 1,460 \u00D7 12 = 876,000.',
        'Effect on GS Operating Profit: \u2212876,000.',
      ],
      answer: 'Effect on GS Operating Profit: \u2212876,000.',
      keyTakeaway:
        'GS absorbs all the cost of the additional passengers without receiving any additional revenue, creating a goal congruence problem.',
    },
    // ===== Part 4: Q15 =====
    {
      id: 'q15',
      partLabel: 'Part 4 \u2014 External Clients for GS',
      questionTitle: 'Q15: Effect of external clients on AHC profit',
      question:
        'Compute the effect of serving external clients on AHC\'s profit.',
      formulaTex:
        '\\Delta\\pi_{AHC} = 2 \\times 365 \\times 4{,}000 - 180 \\times 2 \\times 365 \\times 12 - 2 \\times 365 \\times 1{,}000 = 613{,}200',
      formulaLegend:
        'External revenue: 730 flights \u00D7 4,000 = 2,920,000. Passenger cost: 131,400 \u00D7 12 = 1,576,800. Flight cost: 730 \u00D7 1,000 = 730,000.',
      approach: [
        'External flights = 2 \u00D7 365 = 730.',
        'Revenue from external = 730 \u00D7 4,000 = 2,920,000.',
        'Variable cost per passenger = 180 \u00D7 730 \u00D7 12 = 1,576,800.',
        'Variable cost per flight = 730 \u00D7 1,000 = 730,000.',
        'Net effect = 2,920,000 \u2212 1,576,800 \u2212 730,000 = 613,200.',
      ],
      answer: 'Effect on AHC profit: +613,200.',
      keyTakeaway:
        'Serving external clients generates positive contribution for AHC by utilizing GS\'s idle capacity.',
    },
    // ===== Part 4: Q16 =====
    {
      id: 'q16',
      partLabel: 'Part 4 \u2014 External Clients for GS',
      questionTitle: 'Q16: New transfer price with external clients',
      question:
        'Compute the internal transfer price for each flight served by GS if GS serves the external clients.',
      formulaTex:
        'TP = 1.5 \\times \\left(1{,}000 + \\frac{4{,}000{,}000}{2{,}190}\\right) = 1.5 \\times 2{,}826 = 4{,}240',
      formulaLegend:
        'Total flights with external = (4+2) \u00D7 365 = 2,190. Fixed cost per flight = 4,000,000/2,190 = 1,826 (rounded). TP = 1.5 \u00D7 (1,000 + 1,826).',
      approach: [
        'Total flights = (4 + 2) \u00D7 365 = 2,190.',
        'Fixed cost per flight = 4,000,000 / 2,190 = 1,826 (rounded).',
        'Transfer price = 1.5 \u00D7 (1,000 + 1,826) = 1.5 \u00D7 2,826 = 4,240 (rounded).',
      ],
      answer: 'New transfer price: 4,240 per flight (down from 5,609.59).',
      keyTakeaway:
        'More flights spread the fixed costs, reducing the transfer price. This benefits LW but reduces GS\'s internal revenue.',
    },
    // ===== Part 4: Q17 =====
    {
      id: 'q17',
      partLabel: 'Part 4 \u2014 External Clients for GS',
      questionTitle: 'Q17: Effect on LW Operating Profit',
      question:
        'Compute the effect of serving external clients on LW\'s Operating Profit.',
      formulaTex:
        '\\Delta OP_{LW} = -4 \\times 365 \\times (4{,}240 - 5{,}610) = -1{,}460 \\times (-1{,}370) = 2{,}000{,}200',
      formulaLegend:
        'LW pays a lower TP per flight (4,240 vs. 5,610). Savings = 1,370 \u00D7 1,460 flights.',
      approach: [
        'LW pays TP per flight: 4,240 (with external) vs. 5,610 (without).',
        'Savings per flight = 5,610 \u2212 4,240 = 1,370.',
        'Total LW savings = 1,370 \u00D7 1,460 = 2,000,200.',
        'LW\'s own operations are unchanged; only the payment to GS decreases.',
      ],
      answer: 'Effect on LW Operating Profit: +2,000,000 (approx).',
      keyTakeaway:
        'LW benefits significantly from GS serving external clients because the lower transfer price reduces LW\'s costs.',
    },
    // ===== Part 4: Q18 =====
    {
      id: 'q18',
      partLabel: 'Part 4 \u2014 External Clients for GS',
      questionTitle: 'Q18: Effect on GS Operating Profit',
      question:
        'Compute the effect of serving external clients on GS\'s Operating Profit.',
      formulaTex:
        '\\Delta OP_{GS} = 2{,}920{,}000 - 1{,}576{,}800 - 730{,}000 - 2{,}000{,}200 = -1{,}386{,}800',
      formulaLegend:
        'GS gains external revenue but loses internal revenue due to the lower TP charged to LW.',
      approach: [
        'GS external revenue = 730 \u00D7 4,000 = 2,920,000.',
        'GS variable costs (external passengers) = 180 \u00D7 730 \u00D7 12 = 1,576,800.',
        'GS variable costs (external flights) = 730 \u00D7 1,000 = 730,000.',
        'GS internal revenue change = 1,460 \u00D7 (4,240 \u2212 5,610) = \u22122,000,200.',
        'Net effect = 2,920,000 \u2212 1,576,800 \u2212 730,000 \u2212 2,000,200 = \u22121,386,800 (approx).',
      ],
      answer: 'Effect on GS Operating Profit: \u22121,386,800 (approx).',
      keyTakeaway:
        'GS loses money from serving external clients because the lower transfer price reduces revenue from LW more than the external business contributes. This creates a goal congruence problem.',
    },
    // ===== Part 5: Q19 =====
    {
      id: 'q19',
      partLabel: 'Part 5 \u2014 System Critique',
      questionTitle: 'Q19: System critique and proposals',
      question:
        'Analyze the following elements and propose improvements: (1) variance analysis, (2) transfer pricing policy, (3) cost system, (4) performance measure, (5) bonus scheme.',
      approach: [
        'Variance analysis: add product mix variance if new routes are opened. Add a variance for operating days (strikes, force majeure). Separate different ground service types (check-in, boarding, handling) for better efficiency analysis.',
        'Transfer pricing: The per-flight TP means GS is worse off when passengers increase (costs rise, revenue doesn\'t). Actual-volume allocation makes GS reluctant to serve external clients (lowers TP). Consider market-based TP if available, or use budgeted rather than actual costs.',
        'Cost system: The 10% of HQ costs allocation creates free-riding incentives. One subsidiary internalizes costs induced by others. Consider more direct allocation methods.',
        'Performance measure: Operating Profit is wrong for an investment center. Part 2 shows LW managers may accept negative-NPV projects because financing costs are excluded. Use RI or ROI instead.',
        'Bonus scheme: Unlimited upside with limited downside generates risk-taking incentives. The unlimited upside could also create liquidity issues for AHC.',
      ],
      answer:
        'Key improvements: (1) Add mix and operating-day variances. (2) Use market-based or budgeted-cost TP; avoid actual-volume allocation that penalizes GS. (3) Improve HQ cost allocation to reduce free-riding. (4) Use RI/ROI instead of Operating Profit for an investment center. (5) Cap the bonus upside to limit risk-taking incentives.',
      keyTakeaway:
        'The combination of actual-cost-based transfer pricing, operating profit as performance measure for an investment center, and an uncapped bonus creates multiple incentive distortions that should be addressed holistically.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Variance analysis (multi-level)',
      'Investment analysis (NPV)',
      'Transfer pricing (cost-plus, actual vs. budgeted)',
      'Goal congruence between subsidiaries',
      'Operating Profit vs. Residual Income',
      'Bonus scheme design',
      'Corporate overhead allocation',
      'Idle capacity allocation',
    ],
    keyTheme:
      'A comprehensive examination of how internal accounting systems (variance analysis, transfer pricing, cost allocation, performance measurement, and bonus design) interact and can create incentive distortions in a multi-entity airline group.',
  },
}
