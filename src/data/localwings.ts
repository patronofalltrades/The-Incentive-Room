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
        'Step 1: Understand what the volume variance isolates. This variance captures the profit impact of carrying more passengers per flight, holding all per-unit rates at budgeted levels. More passengers on the same number of flights generates additional contribution margin.',
        'Step 2: Compute total passengers. Budget = 150 \u00D7 4 \u00D7 365 = 219,000. Actual = 160 \u00D7 4 \u00D7 365 = 233,600. The airline carried 14,600 more passengers.',
        'Step 3: Determine the budgeted contribution margin per passenger. Each additional passenger generates revenue of 100 and incurs variable cost of 1.2 \u00D7 10 = 12. Contribution per passenger = 100 \u2212 12 = 88. Cost per flight is irrelevant here because the number of flights did not change.',
        'Step 4: Compute the variance. Volume variance = 14,600 \u00D7 88 = +1,284,800. This large favorable variance reflects the high marginal profitability of filling more seats on existing flights.',
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
        'Step 1: Understand what the price variance isolates. Holding volume at its actual level (233,600 passengers), this variance captures the revenue impact of charging a different price. It is evaluated at actual volume to avoid double-counting with the volume variance.',
        'Step 2: Compute the variance. Price variance = 233,600 \u00D7 (110 \u2212 100) = 233,600 \u00D7 10 = +2,336,000. The $10 price increase per passenger is the single largest favorable variance, suggesting strong pricing power or favorable market conditions.',
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
        'Step 1: Understand what the efficiency variance isolates. This variance measures the cost impact of using more or fewer minutes of ground service per passenger than budgeted, valued at the budgeted cost per minute. It separates the "how long per passenger" question from the "how much does each minute cost" question.',
        'Step 2: Identify the efficiency ratios. Budget = 1.2 minutes/passenger. Actual = 1.3 minutes/passenger. Each passenger took 0.1 extra minutes of ground service.',
        'Step 3: Compute the variance. Efficiency variance = \u2212233,600 \u00D7 (1.3 \u2212 1.2) \u00D7 10 = \u2212233,600 \u00D7 0.1 \u00D7 10 = \u2212233,600. This is unfavorable: longer processing times per passenger increased variable costs.',
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
        'Step 1: Understand what the input price variance isolates. This variance measures the cost impact of paying a different rate per minute of ground service, evaluated at the actual quantity of minutes consumed. By using actual minutes (not budgeted), this variance captures the full price effect on what was actually used.',
        'Step 2: Compute the actual total minutes consumed. Total minutes = 233,600 passengers \u00D7 1.3 min/passenger = 303,680 minutes.',
        'Step 3: Compute the variance. Input price variance = \u2212303,680 \u00D7 (11 \u2212 10) = \u2212303,680. Each of the 303,680 actual minutes cost $1 more than budgeted, creating a significant unfavorable variance.',
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
        'Step 1: Understand what this variance isolates. The cost per flight (fuel + ground fees) is a per-flight variable cost that does not depend on the number of passengers. Since the number of flights is the same in both budget and actual (4 \u00D7 365 = 1,460), we only need to compare the per-flight rates.',
        'Step 2: Identify the per-flight costs. Budget = $4,000/flight. Actual = $4,100/flight. The $100 increase likely reflects higher fuel prices or ground service charges.',
        'Step 3: Compute the variance. Cost per flight variance = \u22121,460 \u00D7 ($4,100 \u2212 $4,000) = \u22121,460 \u00D7 $100 = \u2212$146,000. Unfavorable, but relatively small compared to the passenger-related variances.',
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
        'Step 1: Understand what this variance isolates. Fixed costs do not vary with volume, so there is no volume adjustment. We simply compare the budgeted and actual fixed cost totals. A lower actual figure is favorable because it directly increases operating profit.',
        'Step 2: Identify the fixed costs. Budget = $13,200,000. Actual = $12,600,000. Fixed costs came in $600,000 below budget.',
        'Step 3: Compute the variance. Fixed cost variance = \u2212($12,600,000 \u2212 $13,200,000) = +$600,000. Favorable \u2014 this could reflect successful cost management, renegotiated contracts, or lower corporate overhead allocation.',
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
        'Step 1: Identify the key distinction. The volume variance here is driven by passengers per flight, not by the number of flights. The question is whether a variable OH per flight would change the volume variance.',
        'Step 2: Note that the number of flights is the same in both budget and actual (4 \u00D7 365 = 1,460). Since the variable OH is charged per flight, and the number of flights did not change, the OH amount does not change when more passengers board each flight.',
        'Step 3: Conclude. The volume variance remains +1,284,800, identical to Q1. The variable OH per flight is unaffected by the number of passengers per flight because it is a per-flight charge, not a per-passenger charge.',
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
        'Step 1: Identify relevant cash flows. For investment analysis, we use cash flows (not accounting profit). Depreciation is a non-cash expense and is excluded. The aircraft purchase and sale are cash events.',
        'Step 2: Compute 2018 cash flow. The only cash flow in 2018 is the aircraft purchase: \u2212$100,000,000.',
        'Step 3: Compute 2019 operating cash flow. Revenue = 219,000 \u00D7 $100 = $21,900,000. Variable costs: passenger costs = 219,000 \u00D7 $12 = $2,628,000, flight costs = 1,460 \u00D7 $4,000 = $5,840,000. Fixed additions: pilots = 4 \u00D7 $100,000 = $400,000, staff = 16 \u00D7 $50,000 = $800,000, airport fees = $1,000,000, corporate OH = $100,000. Net = $21,900,000 \u2212 $2,628,000 \u2212 $5,840,000 \u2212 $400,000 \u2212 $800,000 \u2212 $1,000,000 \u2212 $100,000 = $11,132,000.',
        'Step 4: Compute 2020 cash flow. Same operating cash flow ($11,132,000) plus aircraft sale ($90,000,000) = $101,132,000.',
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
        'Step 1: Understand the NPV criterion. NPV discounts all future cash flows to their present value using the cost of capital (10%). A positive NPV means the project creates value for shareholders; a negative NPV destroys value.',
        'Step 2: Discount each cash flow. Year 0 (2018): \u2212$100,000k (no discounting needed). Year 1 (2019): $11,132k / 1.1 = $10,120k. Year 2 (2020): $101,132k / 1.21 = $83,580k.',
        'Step 3: Sum to get NPV. NPV = \u2212$100,000k + $10,120k + $83,580k = \u2212$6,300k. The NPV is negative, meaning the project destroys shareholder value. The operating cash flows and aircraft resale are insufficient to compensate for the large upfront investment at the required 10% return.',
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
        'Step 1: Understand the difference between cash flow and operating profit. Operating Profit includes non-cash items like depreciation but excludes financing costs. This is why the OP calculation differs from the cash flow analysis.',
        'Step 2: Compute incremental revenues and costs. Revenue = $21,900,000. Variable costs = $8,468,000. Aircraft depreciation = $5,000,000/year. Pilots = $400,000. Staff = $800,000. Airport fees = $1,000,000. Corporate OH allocated to LW = 10% \u00D7 $100,000 = $10,000.',
        'Step 3: Calculate Operating Profit effect. OP = $21,900,000 \u2212 $8,468,000 \u2212 $5,000,000 \u2212 $400,000 \u2212 $800,000 \u2212 $1,000,000 \u2212 $10,000 = $6,222,000. Same for both 2019 and 2020.',
        'Step 4: Note the critical flaw. OP looks strongly positive (+$6.2M), but it does not include the financing cost of the $100M aircraft investment. This creates a misleading picture \u2014 the project looks profitable on an OP basis but is value-destroying on an NPV basis.',
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
        'Step 1: Apply the bonus formula. The bonus slope is 0.01 (i.e., the manager receives 1% of Operating Profit as bonus). Incremental OP from the new route = $6,222,000.',
        'Step 2: Calculate the bonus. Bonus = 0.01 \u00D7 $6,222,000 = $62,220 per year for both 2019 and 2020.',
        'Step 3: Identify the incentive distortion. The manager receives a $62,220 annual bonus for a project that destroys $6.3M in shareholder value. This happens because Operating Profit ignores the cost of capital employed in the $100M aircraft. This is a textbook example of why OP is a flawed performance measure for an investment center.',
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
        'Step 1: Analyze from the company-wide perspective. For AHC as a whole, internal transfers cancel out. Only external revenues and actual resource costs matter.',
        'Step 2: Compute the revenue change. Before: 150 passengers \u00D7 $100 = $15,000/flight. After: 200 passengers \u00D7 $90 = $18,000/flight. Change = +$3,000/flight \u00D7 1,460 flights = +$4,380,000.',
        'Step 3: Compute the variable cost change. 50 additional passengers per flight \u00D7 $12 variable cost/passenger \u00D7 1,460 flights = $876,000 increase. No change in per-flight costs because the number of flights is unchanged.',
        'Step 4: Compute net effect. Net = $4,380,000 \u2212 $876,000 = +$3,504,000. The promotion is beneficial for AHC because the revenue gain from more passengers outweighs the lower price and higher variable costs.',
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
        'Step 1: Identify what changes for LW. LW\'s costs to GS are the transfer price per flight. Since the number of flights stays at 1,460 and the TP is per-flight (not per-passenger), LW\'s payment to GS does not change.',
        'Step 2: Compute LW\'s revenue change. Revenue per flight: before = 150 \u00D7 $100 = $15,000, after = 200 \u00D7 $90 = $18,000. Change = +$3,000/flight \u00D7 1,460 = +$4,380,000.',
        'Step 3: Note the key insight. LW captures the full revenue gain without bearing any additional costs, because the per-passenger variable costs (ground services) are borne by GS under the per-flight transfer pricing structure.',
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
        'Step 1: Identify what changes for GS. GS\'s revenue comes from the transfer price, which is per-flight. Since the number of flights is unchanged, GS\'s revenue does not change.',
        'Step 2: Compute GS\'s cost increase. GS must serve 50 additional passengers per flight at $12/passenger variable cost. Cost increase = 50 \u00D7 1,460 \u00D7 $12 = $876,000.',
        'Step 3: Compute the net effect. GS loses $876,000 because it absorbs all the cost of additional passengers without receiving any additional revenue. This is a classic goal congruence problem: what is good for AHC (+$3.5M) and for LW (+$4.4M) is bad for GS (\u2212$876k).',
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
        'Step 1: Identify the relevant cash flows for AHC. From the company-wide view, only actual external revenues and incremental resource costs matter. Internal transfers cancel out.',
        'Step 2: Compute external revenue. External flights = 2/day \u00D7 365 = 730 flights. Revenue = 730 \u00D7 $4,000 = $2,920,000.',
        'Step 3: Compute incremental costs. Passenger variable cost = 180 passengers/flight \u00D7 730 flights \u00D7 $12 = $1,576,800. Flight variable cost (ground only, as external clients provide fuel) = 730 \u00D7 $1,000 = $730,000.',
        'Step 4: Compute net effect. Net = $2,920,000 \u2212 $1,576,800 \u2212 $730,000 = +$613,200. Serving external clients is profitable for AHC because GS has idle capacity \u2014 the fixed costs are already covered.',
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
        'Step 1: Understand the transfer pricing formula. TP = 1.5 \u00D7 (variable cost per flight + fixed costs per flight). The fixed cost per flight changes because the fixed cost pool is now spread over more flights.',
        'Step 2: Compute the new total flights. Internal flights = 4/day \u00D7 365 = 1,460. External flights = 2/day \u00D7 365 = 730. Total = 2,190 flights.',
        'Step 3: Compute the new fixed cost per flight. Fixed costs per flight = $4,000,000 / 2,190 = $1,826 (rounded). This is lower than the original $4,000,000 / 1,460 = $2,740 because more flights share the same fixed cost pool.',
        'Step 4: Compute the new transfer price. TP = 1.5 \u00D7 ($1,000 + $1,826) = 1.5 \u00D7 $2,826 = $4,240 (rounded). Down from $5,609.59 without external clients.',
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
        'Step 1: Identify what changes for LW. LW\'s own operations (flights, passengers, revenue) do not change. The only change is the transfer price paid to GS, which decreases because the fixed cost pool is spread over more flights.',
        'Step 2: Compute the savings per flight. Old TP = $5,610 (rounded). New TP = $4,240. Savings = $5,610 \u2212 $4,240 = $1,370 per flight.',
        'Step 3: Compute total savings. Total = $1,370 \u00D7 1,460 flights = $2,000,200. LW benefits significantly from GS serving external clients, even though LW did nothing different \u2014 this is purely a transfer pricing artifact from the actual-volume-based allocation.',
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
        'Step 1: Compute GS\'s gains from external clients. External revenue = 730 \u00D7 $4,000 = $2,920,000. Variable costs: passengers = 180 \u00D7 730 \u00D7 $12 = $1,576,800; flights = 730 \u00D7 $1,000 = $730,000. Net external contribution = $2,920,000 \u2212 $1,576,800 \u2212 $730,000 = $613,200.',
        'Step 2: Compute GS\'s loss on internal revenue. The lower TP means GS receives less from LW on the 1,460 internal flights. Revenue change = 1,460 \u00D7 ($4,240 \u2212 $5,610) = \u2212$2,000,200.',
        'Step 3: Compute net effect on GS. Net = $613,200 \u2212 $2,000,200 = \u2212$1,386,800. GS loses money because the external business, while profitable in isolation, triggers a TP recalculation that reduces internal revenue by more than the external contribution.',
        'Step 4: Identify the goal congruence problem. GS would rationally reject external clients despite +$613k being good for AHC. The actual-volume-based allocation creates a perverse incentive: serving more clients lowers GS\'s own profitability by reducing the transfer price on existing internal business.',
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
        'Step 1: Critique the variance analysis. Add a product mix variance if new routes are opened. Add a variance for operating days (strikes, force majeure). Separate different ground service types (check-in, boarding, handling) for better efficiency analysis.',
        'Step 2: Critique the transfer pricing. The per-flight TP means GS is worse off when passengers increase (costs rise, revenue does not). Actual-volume allocation makes GS reluctant to serve external clients (lowers TP). Consider market-based TP if available, or use budgeted rather than actual costs to avoid volume-induced TP changes.',
        'Step 3: Critique the cost system. The 10% of HQ costs allocation creates free-riding incentives. One subsidiary internalizes costs induced by others. Consider more direct allocation methods based on cost causation.',
        'Step 4: Critique the performance measure. Operating Profit is the wrong measure for an investment center. Part 2 shows LW managers may accept negative-NPV projects because financing costs are excluded. Use Residual Income or ROI instead to incorporate the cost of capital.',
        'Step 5: Critique the bonus scheme. Unlimited upside with limited downside (bonus cannot go below zero) generates risk-taking incentives. The uncapped bonus could also create liquidity issues for AHC. Consider capping the bonus or using a balanced scorecard approach.',
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
