import { useState } from 'react'
import Formula from './Formula'
import { TOPIC_PROBLEMS } from '../data/topicProblems'

/* ─── Concept data (from Concepts.tsx) ─── */
const CONCEPTS = [
  {
    id: 'variance',
    icon: '📊',
    title: 'Variance Analysis',
    part: 'Part 1',
    formula: 'Volume Variance = (Actual Units Sold − Budgeted Units Sold) × Budgeted Contribution Margin per Unit',
    formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b',
    formulaLegend: 'N_a = actual units sold, N_b = budgeted units sold, CM_b = budgeted contribution margin per unit',
    intuition: 'Break the gap between budgeted and actual profit into its underlying causes: units sold, selling price charged, production efficiency, and input costs. Each variance tells you which driver is responsible for the deviation.',
    examPattern: 'Given a Budget versus Actual table with unit-level data, build a waterfall chart that traces the path from Budgeted Profit to Actual Profit, with each variance shown as a step.',
    traps: [
      'You must adjust the budget for inflation before computing selling price and variable cost efficiency variances.',
      'The fixed cost variance equals Actual Fixed Costs minus Budgeted Fixed Costs. Fixed costs are not driven by volume.',
      'In a flexible budget, fixed costs stay fixed at the original amount. Only variable costs flex with actual volume.',
    ],
    color: '#7c3aed',
  },
  {
    id: 'relevance',
    icon: '⚖️',
    title: 'Relevance Analysis',
    part: 'Part 2',
    formula: 'Accept the order if: Incremental Cash Flow is greater than zero (company view) AND Incremental Divisional Profit is greater than zero (manager view)',
    formulaTex: '\\Delta CF = N(P - VC) \\quad \\Delta DP = N(P - VC - OH)',
    formulaLegend: 'CF = cash flow, DP = divisional profit, N = units, P = price, VC = variable cost, OH = allocated overhead',
    intuition: 'The company cares about cash flows. The division manager cares about their divisional profit and loss statement. When allocated overhead that does not change in cash appears on the division income statement, it can make a profitable deal look unprofitable to the manager. This is goal incongruence.',
    examPattern: 'A new client offers to buy a quantity at a given price. Set up two columns: the company cash flow perspective versus the divisional profit perspective. Highlight any divergence between the two recommendations.',
    traps: [
      'Allocated corporate overhead appears as a real cost to the division but is completely irrelevant to the company cash flow analysis.',
      'Check whether existing capacity can absorb the order at no opportunity cost, versus a full-capacity situation where accepting the order means forgoing other sales.',
    ],
    color: '#2563eb',
  },
  {
    id: 'costAllocation',
    icon: '🏗️',
    title: 'Cost Allocation and Pricing',
    part: 'Part 2',
    formula: 'Price = Variable Cost per Unit + Fixed Cost Allocation per Unit (at the chosen allocation base) + Markup Percentage',
    formulaTex: 'P = (VC + \\frac{FC}{N_{base}}) \\times (1 + m)',
    formulaLegend: 'VC = variable cost, FC = total fixed costs, N_base = allocation base (capacity or actual), m = markup percentage',
    intuition: 'The method you choose for allocating fixed costs determines the product price floor. Allocating over practical capacity avoids the death spiral, where a price increase leads to lower volume, which raises the cost per unit, which triggers another price increase. Activity-based costing reveals the true profitability of each product or channel.',
    examPattern: 'Compare using practical capacity versus actual volume as the allocation base. Show the resulting cost-plus price under each method and explain whether it incentivizes product dumping or cross-subsidization.',
    traps: [
      'Capacity-based allocation means idle capacity cost is not charged to products. This prevents the death spiral.',
      'Actual-volume allocation means that if volume drops, the fixed cost per unit rises, the price goes up, and volume drops further in a reinforcing loop.',
    ],
    color: '#d97706',
  },
  {
    id: 'transferPricing',
    icon: '🔄',
    title: 'Transfer Pricing and Goal Congruence',
    part: 'Part 3',
    formula: 'Minimum Transfer Price = Seller Variable Cost + Seller Opportunity Cost  |  Maximum Transfer Price = Buyer External Selling Price − Buyer Other Variable Costs',
    formulaTex: 'TP_{min} = VC_S + OC_S \\quad TP_{max} = P_{ext} - VC_B',
    formulaLegend: 'VC_S = seller variable cost, OC_S = seller opportunity cost, P_ext = buyer external price, VC_B = buyer other variable costs',
    intuition: 'The transfer price must leave incremental profit on the table for both the selling and buying division. When corporate overhead is allocated on a per-unit-sold basis, it inflates the seller floor price and can cause the congruence zone to disappear entirely.',
    examPattern: 'Division A supplies Division B. Find the minimum and maximum transfer price for goal congruence. Then test standard methods: variable cost, full cost, cost-plus, and market price. Show each division incremental profit at each transfer price.',
    traps: [
      'Corporate overhead allocated per unit sold creates a cost that behaves like a variable cost for the seller, but it is not a true incremental cost.',
      'If the minimum transfer price exceeds the maximum transfer price, there is no goal-congruent transfer price under that system.',
      'Market-based transfer pricing only works when a competitive external market exists for the intermediate product.',
    ],
    color: '#d97706',
  },
  {
    id: 'residualIncome',
    icon: '📈',
    title: 'Residual Income and Investment Decisions',
    part: 'Part 4',
    formula: 'Residual Income = Divisional Profit − (Cost of Capital × Book Value of Assets at Beginning of Period)',
    formulaTex: 'RI = DP - r \\times BV_0',
    formulaLegend: 'DP = divisional profit, r = cost of capital rate, BV_0 = book value of assets at beginning of period',
    intuition: 'Residual income charges the division for the capital it uses. The depreciation method does not change total cash flows over the life of the investment, but it shifts the timing of reported profit and manager bonuses across years, creating powerful timing incentives.',
    examPattern: 'Given an investment amount, a useful life, and annual operating profit, build a year-by-year table showing: Book Value, Divisional Profit after Depreciation, Residual Income, and Bonus. Compare the results under straight-line versus accelerated versus delayed depreciation.',
    traps: [
      'Always use the book value at the start of the year, not the end, for the residual income capital charge.',
      'Accelerated depreciation produces lower early book values, leading to higher early residual income and front-loaded bonuses.',
      'A moving-target bonus system means that a strong performance year raises the bar for the following year, creating a disincentive to outperform.',
    ],
    color: '#16a34a',
  },
  {
    id: 'systemCritique',
    icon: '🔍',
    title: 'System Critique Framework',
    part: 'Part 5',
    formula: 'Structure your critique across six dimensions: Variance System, Cost Allocation System, Pricing Policy, Transfer Pricing Policy, Performance Measurement, Incentive Design',
    formulaTex: '\\text{Problem} \\to \\text{Behavioral Distortion} \\to \\text{Recommended Fix}',
    formulaLegend: 'For each of 6 dimensions: name the accounting issue, explain how it distorts manager behavior, then propose an alternative',
    intuition: 'Part 5 is synthesis. You are not solving for a number. You are diagnosing whether the management control system aligns manager behavior with company-wide value creation. For each dimension, you must name the specific behavioral distortion, not just describe the accounting mechanism.',
    examPattern: 'The exam asks you to analyze several elements of the control system. For each dimension: state what the problem is, explain what behavior it causes in the manager, and recommend what would fix the distortion.',
    traps: [
      'Do not simply describe the system. You must explain what incentive it creates and why that is a problem.',
      'Corporate overhead allocated per unit inflates the transfer price floor, causing divisions to refuse profitable internal trade, destroying company-wide profit.',
      'A moving-target bonus causes managers to deliberately sandbag their performance in strong years to keep the target low for the following year.',
    ],
    color: '#e11d48',
  },
]

/* ─── Discovery data (from Discovery.tsx) ─── */
interface AnswerMeaning {
  concept: string
  formulaTex?: string
  formulaLegend?: string
  exampleValue: string
  interpretation: string
}

interface KeyQuestion {
  question: string
  answer: string
}

interface DiscoveryTopic {
  id: string
  title: string
  icon: string
  color: string
  description: string
  keyQuestions: KeyQuestion[]
  answerMeanings: AnswerMeaning[]
  subtopics: { name: string; explanation: string }[]
  connections: string[]
}

const DISCOVERY_TOPICS: DiscoveryTopic[] = [
  {
    id: 'variance',
    title: 'Variance Analysis',
    icon: '📊',
    color: 'var(--accent)',
    description: 'Variance analysis decomposes the difference between budgeted and actual profit into its component drivers. Each variance isolates one factor — volume, selling price, variable cost efficiency, input prices, or fixed costs — so you can pinpoint who is responsible and what went wrong.',
    keyQuestions: [
      { question: 'What are the five standard variances in a profit waterfall, and in what order should they be computed?', answer: 'The five standard variances are the volume variance, selling price variance, variable cost efficiency variance, input price variance, and fixed cost variance. They should be computed in this order because each subsequent variance uses actual volume as the base, and computing them sequentially traces a waterfall from budgeted profit to actual profit.' },
      { question: 'Why must you adjust the budget for inflation before computing selling price and efficiency variances?', answer: 'If the budget was set before an inflation period, the original budgeted price is no longer the correct benchmark. Without adjustment, the inflation effect gets mixed into the selling price variance, making it appear that the manager changed prices when in reality the general price level shifted.' },
      { question: 'What is the difference between a flexible budget and a static budget, and which costs flex with volume?', answer: 'A static budget uses the originally planned volume for all computations. A flexible budget restates variable costs at actual volume while keeping fixed costs unchanged. Only variable costs flex with volume. Fixed costs remain at the budgeted amount regardless of actual volume.' },
      { question: 'How do you interpret a favorable volume variance if it came at the expense of a lower selling price?', answer: 'A favorable volume variance means more units were sold than planned, each contributing the budgeted margin. However, if the extra volume was achieved by cutting prices, the selling price variance will be unfavorable. You must look at both variances together to determine the net effect.' },
      { question: 'When should you decompose the volume variance further into market size, market share, and product mix components?', answer: 'You should decompose the volume variance when the company sells multiple products or operates in a market where total demand fluctuates. The market size component captures whether the overall market grew or shrank. The market share component captures whether the company gained or lost ground against competitors.' },
    ],
    answerMeanings: [
      { concept: 'Negative Volume Variance', formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b', formulaLegend: 'N_a = actual units, N_b = budgeted units, CM_b = budgeted contribution margin', exampleValue: '\u2212$435,000', interpretation: 'The division lost $435,000 in contribution margin purely because it sold fewer contracts than planned. Each missing contract cost the company one budgeted contribution margin.' },
      { concept: 'Favorable Efficiency Variance', formulaTex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a', formulaLegend: 'Q = input per unit, C_b = budgeted input cost, N_a = actual units', exampleValue: '+$225,000', interpretation: 'The division used fewer inputs per unit than planned, saving $225,000 at budget prices. This signals improved resource utilization, but check whether quality was sacrificed.' },
      { concept: 'Zero Fixed Cost Variance', formulaTex: 'V_{FC} = FC_b - FC_a', formulaLegend: 'FC_b = budgeted fixed costs, FC_a = actual fixed costs', exampleValue: '$0', interpretation: 'Fixed costs came in exactly at budget. Fixed costs are never flexed with volume — this is always a simple comparison of budget versus actual totals.' },
      { concept: 'Favorable Price with Unfavorable Volume Trade-Off', exampleValue: 'Price +$140,000, Volume \u2212$190,000', interpretation: 'Raising prices generated $140,000 more per customer, but the higher price drove 100 fewer customers, costing $190,000 in lost volume. The net is \u2212$50,000 — the price increase did not compensate for the lost traffic.' },
    ],
    subtopics: [
      { name: 'Volume Variance', explanation: 'Captures the profit impact of selling more or fewer units than budgeted.' },
      { name: 'Selling Price Variance', explanation: 'Measures the revenue impact of charging a different price than budgeted.' },
      { name: 'Variable Cost Efficiency Variance', explanation: 'Reflects whether production used more or fewer resources per unit than planned.' },
      { name: 'Input Price Variance', explanation: 'Isolates the cost impact of paying more or less for raw materials than expected.' },
      { name: 'Fixed Cost Variance', explanation: 'A direct comparison of budgeted versus actual fixed costs.' },
      { name: 'Inflation Adjustment', explanation: 'When the budget was set before an inflation period, you must restate the budget at inflated prices before computing price and efficiency variances.' },
    ],
    connections: ['Variance analysis results feed directly into the System Critique when you assess whether the budget is realistic.', 'The volume variance connects to Pricing and Relevance decisions: accepting a special order changes actual volume.'],
  },
  {
    id: 'relevance',
    title: 'Relevance Analysis and Accept-or-Reject Decisions',
    icon: '⚖️',
    color: 'var(--blue)',
    description: 'Relevance analysis separates the cash flows that change with a decision from those that do not. The core challenge is that the company and the division manager may see different numbers — the company looks at incremental cash flows while the manager looks at incremental divisional profit, which may include allocated costs that do not actually change.',
    keyQuestions: [
      { question: 'What makes a cost relevant to a decision, and what are the two conditions a cost must satisfy?', answer: 'A cost is relevant if it is a future cost (not sunk) and it differs between the alternatives being considered. If a cost has already been incurred or will be incurred regardless of the decision, it is irrelevant.' },
      { question: 'Why does corporate overhead allocation create goal incongruence when charged on a per-unit basis?', answer: 'Each additional unit triggers an overhead charge on the division income statement. From the company perspective, this overhead exists regardless of the decision and is irrelevant. The manager sees a higher cost per unit than the company does, and may reject an order that generates positive cash flow.' },
      { question: 'How does opportunity cost enter the analysis when the division is operating at full capacity?', answer: 'Accepting a new order means displacing an existing order. The contribution margin lost from the displaced order is the opportunity cost and must be added to the incremental cost of accepting the new order.' },
      { question: 'What is the difference between the company recommendation and the manager recommendation?', answer: 'The company recommendation is based on incremental cash flows excluding allocated overhead. The manager recommendation includes allocated corporate overhead. They diverge when allocated overhead flips the sign of the decision.' },
      { question: 'How should you handle sunk costs and committed fixed costs in a special order decision?', answer: 'Sunk costs and committed fixed costs are excluded entirely. They do not change with the decision and have no bearing on whether to accept or reject.' },
    ],
    answerMeanings: [
      { concept: 'Positive Cash Flow but Negative Divisional Profit', formulaTex: '\\Delta CF = N(P - VC) > 0 \\quad \\Delta DP = N(P - VC - OH) < 0', formulaLegend: 'CF = cash flow, DP = divisional profit, OH = allocated overhead per unit', exampleValue: 'Company: +$450,000 | Manager: \u2212$50,000', interpretation: 'The company gains $450,000 in real cash, but the manager sees a $50,000 loss because allocated overhead is charged as if it were a real cost. This is goal incongruence.' },
      { concept: 'Opportunity Cost at Full Capacity', formulaTex: 'OC = N_{displaced} \\times CM_{displaced}', formulaLegend: 'N = units displaced, CM = contribution margin of displaced order', exampleValue: '+$100,000 opportunity cost', interpretation: 'Accepting the new order means giving up $100,000 in contribution margin from the existing order.' },
      { concept: 'Bonus Alignment with Company Interest', formulaTex: '\\Delta Bonus = 10\\% \\times \\Delta DP', exampleValue: '+$45,000 bonus increase', interpretation: 'When the manager bonus aligns with the company decision, there is no goal incongruence.' },
    ],
    subtopics: [
      { name: 'Incremental Cash Flow Analysis', explanation: 'The company perspective considers only costs and revenues that change as a direct result of accepting the order.' },
      { name: 'Divisional Profit Impact', explanation: 'The manager perspective includes allocated overhead charged to the division, even if it does not change in cash.' },
      { name: 'Goal Incongruence', explanation: 'Occurs when the management control system leads the manager to make a decision not in the company best interest.' },
      { name: 'Opportunity Cost', explanation: 'When at full capacity, accepting a new order means rejecting an existing one. The lost contribution margin is the opportunity cost.' },
    ],
    connections: ['The overhead allocation method from Cost Allocation determines what appears on the division income statement.', 'Relevance analysis is the foundation for Transfer Pricing: the same incremental logic determines the minimum and maximum transfer price.'],
  },
  {
    id: 'cost-allocation',
    title: 'Cost Allocation and Pricing Policy',
    icon: '🏗️',
    color: 'var(--amber)',
    description: 'Cost allocation determines how fixed costs are distributed across products, divisions, or customers. The allocation base you choose directly affects the unit cost, the cost-plus price, and the risk of a death spiral.',
    keyQuestions: [
      { question: 'What is the death spiral, and which allocation base triggers it?', answer: 'The death spiral is a self-reinforcing loop where falling volume leads to rising unit costs, higher prices, and further volume decline. It is triggered by allocating fixed costs over actual volume.' },
      { question: 'How does allocating fixed costs over practical capacity differ from allocating over actual volume?', answer: 'Capacity-based allocation divides total fixed costs by practical capacity, giving a stable cost per unit. Idle capacity cost is absorbed by the company rather than loaded onto products. This breaks the death spiral.' },
      { question: 'What is cross-subsidization, and how does activity-based costing reveal it?', answer: 'Cross-subsidization occurs when one product is overcharged and another is undercharged because the allocation base does not reflect actual resource consumption. Activity-based costing uses multiple drivers to trace overhead to the activities that cause it.' },
      { question: 'When is a capacity-based allocation appropriate, and what are its limitations?', answer: 'It is appropriate when fixed costs represent a commitment to capability. Its main limitation is that it hides the cost of idle capacity, so managers may not feel pressure to improve utilization.' },
      { question: 'How does the choice of allocation base affect pricing behavior?', answer: 'Managers set prices to cover reported unit cost plus markup. Actual-volume allocation causes aggressive price increases when volume drops (death spiral). Capacity-based allocation gives a steadier benchmark.' },
    ],
    answerMeanings: [
      { concept: 'Death Spiral Price Increase', formulaTex: 'P_{actual} = (VC + \\frac{FC}{N_a}) \\times (1 + m) \\quad P_{cap} = (VC + \\frac{FC}{N_{cap}}) \\times (1 + m)', formulaLegend: 'FC = fixed costs, N_a = actual volume, N_cap = capacity, m = markup percentage', exampleValue: '$21.00 versus $18.00', interpretation: 'Allocating over actual volume ($21.00) versus capacity ($18.00) inflates the price by $3 when demand drops. This higher price further reduces demand, creating a death spiral.' },
      { concept: 'Idle Capacity Cost Absorption', formulaTex: 'FC_{idle} = FC \\times (1 - \\frac{N_a}{N_{cap}})', formulaLegend: 'FC = total fixed costs, N_a = actual volume, N_cap = practical capacity', exampleValue: '$20,000 idle capacity cost', interpretation: 'Under capacity-based allocation, the $20,000 of unused capacity cost is absorbed by the company rather than loaded onto products.' },
      { concept: 'Cross-Subsidization Revealed by Activity-Based Costing', exampleValue: 'Product A: overcosted by $5 | Product B: undercosted by $8', interpretation: 'Traditional volume-based allocation hides the true cost of complex, low-volume products. Activity-based costing reveals that Product B consumes far more resources per unit.' },
    ],
    subtopics: [
      { name: 'Actual Volume Allocation', explanation: 'Divides total fixed costs by actual units produced. When volume drops, the cost per unit rises, the price goes up, demand falls further.' },
      { name: 'Capacity-Based Allocation', explanation: 'Divides total fixed costs by practical capacity. Idle capacity cost is absorbed by the company.' },
      { name: 'Activity-Based Costing', explanation: 'Uses multiple cost drivers to allocate overhead more accurately.' },
      { name: 'Cost-Plus Pricing', explanation: 'Adds a markup to the full cost per unit. The resulting price depends entirely on how fixed costs are allocated.' },
    ],
    connections: ['The allocation base feeds directly into Transfer Pricing: an inflated cost per unit raises the transfer price floor.', 'Cost allocation distortions are a major topic in the System Critique.'],
  },
  {
    id: 'transfer-pricing',
    title: 'Transfer Pricing and Goal Congruence',
    icon: '🔄',
    color: 'var(--amber)',
    description: 'Transfer pricing sets the price at which one division sells to another within the same company. The transfer price must satisfy both divisions for the internal trade to occur. The key challenge is finding a price that achieves goal congruence.',
    keyQuestions: [
      { question: 'How do you calculate the minimum transfer price for the selling division?', answer: 'The minimum transfer price equals the seller incremental cost plus the seller opportunity cost. Sunk costs and existing fixed costs that do not change are excluded. Opportunity cost is zero if the seller has spare capacity.' },
      { question: 'How do you calculate the maximum transfer price for the buying division?', answer: 'The maximum transfer price equals the buyer external selling price minus all other variable costs the buyer incurs to convert and sell the final product, minus any corporate overhead charged to the buyer on the internal purchase.' },
      { question: 'Under what conditions does no goal-congruent transfer price exist?', answer: 'When the seller minimum exceeds the buyer maximum. This typically happens when corporate overhead allocated per unit inflates the seller floor while simultaneously compressing the buyer ceiling.' },
      { question: 'Why does corporate overhead allocated per unit often destroy the congruence zone?', answer: 'It acts as a variable cost for both divisions even though it does not represent a real incremental cash cost. For the seller, it inflates the floor. For the buyer, it reduces the ceiling. The combined effect is a double squeeze.' },
      { question: 'What are the trade-offs between transfer pricing methods?', answer: 'Variable cost gives all margin to the buyer. Full cost includes allocated fixed costs, often setting the price too high. Market-based works when a competitive external market exists. Negotiated pricing preserves autonomy but depends on bargaining power.' },
    ],
    answerMeanings: [
      { concept: 'Empty Goal Congruence Zone', formulaTex: 'TP_{min} = VC_S + OH_S > P_{ext} - VC_B - OH_B = TP_{max}', formulaLegend: 'TP_min = seller minimum, TP_max = buyer maximum, OH = corporate overhead per unit', exampleValue: 'Seller minimum: $2,640 | Buyer maximum: $2,000', interpretation: 'When the seller minimum exceeds the buyer maximum, no transfer price exists that makes both divisions willing to trade.' },
      { concept: 'Full-Cost Transfer Price Above Market', formulaTex: 'TP_{FC} = (VC + \\frac{FC}{N} + OH) \\times (1 + m)', formulaLegend: 'TP_FC = full cost transfer price, FC = fixed costs, m = markup', exampleValue: '$2,640 versus market price of $2,000', interpretation: 'The full-cost transfer price loads fixed overhead onto each unit, inflating the price above what the buyer can pay.' },
      { concept: 'Goal Congruence Transfer Price Range', formulaTex: 'VC_S + OC_S \\leq TP \\leq P_{ext} - VC_B', formulaLegend: 'VC_S = seller variable cost, OC_S = seller opportunity cost, P_ext = buyer external price, VC_B = buyer other variable costs', exampleValue: '$840 \u2264 TP \u2264 $2,000', interpretation: 'Any transfer price within this range makes both the seller and the buyer better off from trading internally.' },
    ],
    subtopics: [
      { name: 'Seller Minimum Transfer Price', explanation: 'The seller only agrees if the transfer price covers incremental cost plus opportunity cost.' },
      { name: 'Buyer Maximum Transfer Price', explanation: 'The buyer only agrees if they can still earn a positive contribution margin on their final product.' },
      { name: 'Goal Congruence Zone', explanation: 'The range between seller minimum and buyer maximum where internal trade benefits both divisions and the company.' },
      { name: 'Impact of Corporate Overhead', explanation: 'When overhead is allocated per unit sold, it inflates the seller floor and compresses the congruence zone.' },
      { name: 'Transfer Pricing Methods', explanation: 'Variable cost, full cost, market price, and negotiated pricing each have distinct trade-offs.' },
    ],
    connections: ['Transfer pricing depends heavily on Cost Allocation: the overhead allocation method determines whether the seller floor is inflated.', 'Transfer pricing failures are a central theme in the System Critique.'],
  },
  {
    id: 'residual-income',
    title: 'Residual Income and Investment Decisions',
    icon: '📈',
    color: 'var(--green)',
    description: 'Residual income measures whether a division earns more than its cost of capital. Unlike return on investment, residual income correctly accepts any project that earns above the hurdle rate. The depreciation method does not change total cash flows, but it dramatically shifts the timing of reported profit and bonuses.',
    keyQuestions: [
      { question: 'What is the formula for residual income, and why does it use book value at the beginning of the period?', answer: 'Residual income equals divisional profit minus the capital charge (cost of capital times book value at the beginning of the period). Beginning book value is used because it represents the capital tied up during the period.' },
      { question: 'Why does residual income improve over time under straight-line depreciation even when cash flows are constant?', answer: 'Book value decreases by the same amount each year. Since the capital charge is a percentage of book value, the charge gets smaller while divisional profit stays constant. This is a mechanical artifact, not genuine performance improvement.' },
      { question: 'How does accelerated depreciation affect the timing of bonuses?', answer: 'Accelerated depreciation front-loads the depreciation expense but also reduces book value faster. The net effect shifts the residual income pattern. The same investment with identical cash flows produces different bonus patterns purely due to the depreciation schedule.' },
      { question: 'What is the moving-target bonus problem?', answer: 'A moving-target bonus sets the next year target based on current year performance. If a manager performs well, the target ratchets up. This creates a perverse incentive to hold back performance.' },
      { question: 'When might a manager reject a positive NPV investment, and which metric causes this?', answer: 'A manager evaluated on return on investment (a ratio) may reject a new investment if it would lower their current return percentage, even though it earns above the cost of capital. Residual income avoids this problem.' },
    ],
    answerMeanings: [
      { concept: 'Negative Year 1 Residual Income Despite Positive NPV', formulaTex: 'RI_1 = DP_1 - r \\times BV_0 = 10{,}000 - 0.10 \\times 420{,}000 = -32{,}000', formulaLegend: 'DP = divisional profit after depreciation, r = cost of capital, BV_0 = book value at start of year', exampleValue: '\u2212$32,000', interpretation: 'The investment has positive total cash flows, but the Year 1 capital charge exceeds the divisional profit. This makes the manager reluctant to invest even though the project creates company value.' },
      { concept: 'Increasing Residual Income Pattern Under Straight-Line', formulaTex: 'RI_t \\uparrow \\text{ as } BV_t \\downarrow \\text{ while } DP_t \\text{ stays constant}', exampleValue: 'Year 1: \u2212$32,000 | Year 2: \u2212$18,000 | Year 3: \u2212$4,000', interpretation: 'Residual income automatically improves each year because book value declines while cash flows and depreciation stay constant. This is a mechanical artifact of the accounting.' },
      { concept: 'Moving-Target Bonus Discouraging Strong Performance', exampleValue: 'Year 1 bonus: $0 | Year 2 bonus: $1,400 | Year 3 bonus: $1,400', interpretation: 'No bonus in Year 1 strongly discourages the manager from investing. The improving pattern in later years rewards patience, but the total may not justify the effort and risk.' },
    ],
    subtopics: [
      { name: 'Residual Income Formula', explanation: 'RI = Divisional Profit minus Capital Charge. A positive RI means the division creates value above its cost of capital.' },
      { name: 'ROI versus Residual Income', explanation: 'ROI is a ratio that causes managers to reject good projects. Residual income avoids this by measuring the absolute dollar value created.' },
      { name: 'Depreciation and Bonus Timing', explanation: 'Straight-line produces increasing RI over time. Accelerated depreciation shifts the pattern.' },
      { name: 'Moving-Target Bonus', explanation: 'When the target is set based on prior year performance, a strong year raises the bar for next year.' },
    ],
    connections: ['Residual income connects to the System Critique through performance measurement.', 'The depreciation method choice affects both investment analysis and the System Critique.'],
  },
  {
    id: 'system-critique',
    title: 'Management Control System Critique',
    icon: '🔍',
    color: 'var(--pink)',
    description: 'The system critique is the synthesis question. You are not computing a number — you are diagnosing whether the management control system as a whole aligns manager behavior with company value creation.',
    keyQuestions: [
      { question: 'What are the six dimensions you should cover in a structured system critique?', answer: 'Variance analysis system, cost allocation system, pricing policy, transfer pricing policy, performance measurement system, and incentive design. For each: state the problem, the behavioral distortion, and the recommended fix.' },
      { question: 'For each dimension, name a specific behavioral distortion.', answer: 'Variance: unrealistic budget causes managers to stop taking it seriously. Cost allocation: actual-volume triggers death spiral. Pricing: cost-plus may overprice. Transfer pricing: full-cost blocks profitable internal trade. Performance: ROI causes rejection of positive NPV projects. Incentives: moving-target causes sandbagging.' },
      { question: 'How does the choice of allocation base affect transfer pricing and pricing policy?', answer: 'The allocation base determines the fixed cost per unit, which flows into both the cost-plus external price and the full-cost transfer price. Actual-volume allocation causes cascading distortions across multiple dimensions.' },
      { question: 'What are the three conditions a good performance measurement system should satisfy?', answer: 'Goal congruence (actions maximizing the metric also maximize company value), controllability (the manager can influence the metric), and fairness (comparable across divisions of different sizes).' },
      { question: 'How can incentive design create short-termism or sandbagging?', answer: 'Short-termism arises when bonuses are based on annual profits and the manager can boost short-term results at long-term expense. Sandbagging arises from moving-target bonuses. Fixes include multi-year pools, equity compensation, and balanced scorecards.' },
    ],
    answerMeanings: [
      { concept: 'Cascade Diagnosis', exampleValue: 'Full-cost allocation \u2192 inflated TP \u2192 blocked internal trade \u2192 lost $116,000', interpretation: 'The choice of cost allocation base is not an isolated accounting decision. It cascades into transfer pricing, external pricing, and investment evaluation.' },
      { concept: 'Structured Critique Framework', formulaTex: '\\text{Problem} \\to \\text{Behavioral Distortion} \\to \\text{Recommended Fix}', exampleValue: 'Six dimensions: variance, allocation, pricing, transfer pricing, performance measure, incentives', interpretation: 'For each dimension, you must name the specific accounting issue, explain the behavioral distortion it creates for the manager, and propose a concrete alternative.' },
      { concept: 'Goal Congruence as the Central Test', exampleValue: 'Manager rejects a positive NPV investment', interpretation: 'The ultimate test of any management control system is whether it leads managers to make decisions that maximize company value.' },
    ],
    subtopics: [
      { name: 'Variance System Assessment', explanation: 'Is the budget realistic? Does it capture the right cost drivers?' },
      { name: 'Cost Allocation Assessment', explanation: 'Is the allocation base appropriate? Does it cause cross-subsidization?' },
      { name: 'Pricing Policy Assessment', explanation: 'Is pricing cost-plus or market-based? Does it create death spiral risk?' },
      { name: 'Transfer Pricing Assessment', explanation: 'Does the transfer pricing method achieve goal congruence?' },
      { name: 'Performance Measurement Assessment', explanation: 'Profit center or investment center? ROI or residual income? Is it controllable?' },
      { name: 'Incentive Design Assessment', explanation: 'Moving-target problem? Short-termism risk? Non-financial measures needed?' },
    ],
    connections: ['The system critique draws on findings from all other five concepts.', 'The core question is always: does the system lead managers to maximize company value, or does it create incentives that work against the company interest?'],
  },
]

/* ─── Topic ID mapping ─── */
const TOPIC_MAP: Record<string, { conceptId: string; discoveryId: string; problemTopic: string | null }> = {
  'variance-analysis': { conceptId: 'variance', discoveryId: 'variance', problemTopic: 'Variance Analysis' },
  'relevance-analysis': { conceptId: 'relevance', discoveryId: 'relevance', problemTopic: 'Relevance Analysis' },
  'transfer-pricing': { conceptId: 'transferPricing', discoveryId: 'transfer-pricing', problemTopic: 'Transfer Pricing' },
  'residual-income': { conceptId: 'residualIncome', discoveryId: 'residual-income', problemTopic: 'Residual Income' },
  'cost-plus-pricing': { conceptId: 'costAllocation', discoveryId: 'cost-allocation', problemTopic: 'Cost Allocation' },
  'system-critique': { conceptId: 'systemCritique', discoveryId: 'system-critique', problemTopic: null },
}

/* ─── Related topic mapping for navigation ─── */
const RELATED_TOPICS: Record<string, { id: string; label: string }[]> = {
  'variance-analysis': [
    { id: 'system-critique', label: 'System Critique' },
    { id: 'relevance-analysis', label: 'Relevance Analysis' },
  ],
  'relevance-analysis': [
    { id: 'cost-plus-pricing', label: 'Cost Allocation' },
    { id: 'transfer-pricing', label: 'Transfer Pricing' },
  ],
  'transfer-pricing': [
    { id: 'cost-plus-pricing', label: 'Cost Allocation' },
    { id: 'system-critique', label: 'System Critique' },
    { id: 'relevance-analysis', label: 'Relevance Analysis' },
  ],
  'residual-income': [
    { id: 'system-critique', label: 'System Critique' },
    { id: 'transfer-pricing', label: 'Transfer Pricing' },
  ],
  'cost-plus-pricing': [
    { id: 'transfer-pricing', label: 'Transfer Pricing' },
    { id: 'system-critique', label: 'System Critique' },
  ],
  'system-critique': [
    { id: 'variance-analysis', label: 'Variance Analysis' },
    { id: 'relevance-analysis', label: 'Relevance Analysis' },
    { id: 'cost-plus-pricing', label: 'Cost Allocation' },
    { id: 'transfer-pricing', label: 'Transfer Pricing' },
    { id: 'residual-income', label: 'Residual Income' },
  ],
}

/* ─── Key phrase bolding helper ─── */
const KEY_PHRASES: Record<string, string[]> = {
  'Negative Volume Variance': ['contribution margin'],
  'Favorable Efficiency Variance': ['resource utilization'],
  'Zero Fixed Cost Variance': ['never flexed with volume'],
  'Favorable Price with Unfavorable Volume Trade-Off': ['the price increase did not compensate'],
  'Positive Cash Flow but Negative Divisional Profit': ['goal incongruence'],
  'Opportunity Cost at Full Capacity': ['opportunity cost'],
  'Bonus Alignment with Company Interest': ['no goal incongruence'],
  'Death Spiral Price Increase': ['death spiral'],
  'Idle Capacity Cost Absorption': ['idle capacity cost'],
  'Cross-Subsidization Revealed by Activity-Based Costing': ['cross-subsidization'],
  'Empty Goal Congruence Zone': ['no transfer price exists'],
  'Full-Cost Transfer Price Above Market': ['destroys the internal trade incentive'],
  'Goal Congruence Transfer Price Range': ['both the seller and the buyer better off'],
  'Negative Year 1 Residual Income Despite Positive NPV': ['reluctant to invest'],
  'Negative Year 1 Residual Income Despite Positive Net Present Value': ['reluctant to invest'],
  'Increasing Residual Income Pattern Under Straight-Line': ['mechanical artifact'],
  'Increasing Residual Income Pattern Under Straight-Line Depreciation': ['mechanical artifact'],
  'Moving-Target Bonus Discouraging Strong Performance': ['strongly discourages'],
  'Cascade Diagnosis': ['cascades'],
  'Cascade Diagnosis: One Allocation Choice Ripples Everywhere': ['cascades'],
  'Structured Critique Framework': ['behavioral distortion'],
  'Goal Congruence as the Central Test': ['goal congruence'],
}

function boldKeyPhrases(text: string, concept: string): React.ReactNode {
  const phrases = KEY_PHRASES[concept]
  if (!phrases || phrases.length === 0) return text
  const escaped = phrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts = text.split(regex)
  if (parts.length === 1) return text
  const lowerPhrases = phrases.map(p => p.toLowerCase())
  return parts.map((part, i) => {
    if (lowerPhrases.includes(part.toLowerCase())) {
      return <strong key={i}>{part}</strong>
    }
    return part
  })
}

/* ─── Difficulty sort helper ─── */
const DIFF_ORDER: Record<string, number> = { Easy: 0, Medium: 1, Hard: 2 }

/* ─── Component ─── */
interface TopicHubProps {
  topicId: string
  onBack: () => void
  onTopicSelect: (topicId: string) => void
}

export default function TopicHub({ topicId, onBack, onTopicSelect }: TopicHubProps) {
  const [trapsOpen, setTrapsOpen] = useState(false)
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(() => new Set())

  const mapping = TOPIC_MAP[topicId]
  const concept = CONCEPTS.find(c => c.id === mapping?.conceptId)
  const discovery = DISCOVERY_TOPICS.find(d => d.id === mapping?.discoveryId)
  const related = RELATED_TOPICS[topicId] || []

  const problems = mapping?.problemTopic
    ? TOPIC_PROBLEMS.filter(p => p.topic === mapping.problemTopic).sort((a, b) => (DIFF_ORDER[a.difficulty] ?? 1) - (DIFF_ORDER[b.difficulty] ?? 1))
    : []

  if (!concept || !discovery) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
        Topic not found.
      </div>
    )
  }

  const toggleQuestion = (idx: number) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* ═══ HEADER ═══ */}
      <div style={{ marginBottom: '24px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 600,
            padding: '0',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ fontSize: '16px' }}>&larr;</span> Back to Exam Map
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{
            display: 'inline-block',
            padding: '3px 10px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#fff',
            background: concept.color,
          }}>
            {concept.part}
          </span>
        </div>

        <h1 style={{
          margin: 0,
          fontSize: '22px',
          fontWeight: 800,
          color: 'var(--text-primary)',
          lineHeight: 1.3,
        }}>
          {concept.icon} {concept.title}
        </h1>

        <p style={{
          margin: '10px 0 0',
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>
          {discovery.description}
        </p>
      </div>

      {/* ═══ SECTION 1: LEARN ═══ */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Formula box */}
        <div style={{
          background: 'var(--accent-soft)',
          border: '1px solid var(--accent)',
          borderRadius: '14px',
          padding: '18px 20px',
        }}>
          <p style={{
            margin: '0 0 10px',
            fontSize: '11px',
            color: 'var(--accent)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Formula
          </p>
          <Formula tex={concept.formulaTex} legend={concept.formulaLegend} />
        </div>

        {/* The Intuition */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '18px 20px',
          boxShadow: 'var(--shadow)',
        }}>
          <p style={{
            margin: '0 0 8px',
            fontSize: '11px',
            color: 'var(--text-muted)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            The Intuition
          </p>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
          }}>
            {concept.intuition}
          </p>
        </div>

        {/* On the Exam */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '18px 20px',
          boxShadow: 'var(--shadow)',
        }}>
          <p style={{
            margin: '0 0 8px',
            fontSize: '11px',
            color: 'var(--text-muted)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            On the Exam
          </p>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            fontStyle: 'italic',
          }}>
            {concept.examPattern}
          </p>
        </div>

        {/* Common Traps */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }}>
          <button
            onClick={() => setTrapsOpen(!trapsOpen)}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              padding: '18px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'left',
            }}
          >
            <span style={{
              fontSize: '11px',
              color: 'var(--amber, #d97706)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              Common Traps ({concept.traps.length})
            </span>
            <span style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              transform: trapsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}>
              &#9660;
            </span>
          </button>

          {trapsOpen && (
            <div style={{
              padding: '0 20px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {concept.traps.map((trap, i) => (
                <div key={i} style={{
                  background: 'var(--amber-soft, rgba(217, 119, 6, 0.08))',
                  border: '1px solid var(--amber, #d97706)',
                  borderRadius: '10px',
                  padding: '14px 16px',
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}>
                    {trap}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* What the Answer Means */}
        {discovery.answerMeanings.length > 0 && (
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '18px 20px',
            boxShadow: 'var(--shadow)',
          }}>
            <p style={{
              margin: '0 0 14px',
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              What the Answer Means
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {discovery.answerMeanings.map((am, i) => (
                <div key={i} style={{
                  borderLeft: `3px solid ${concept.color}`,
                  paddingLeft: '16px',
                }}>
                  <p style={{
                    margin: '0 0 4px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}>
                    {am.concept}
                  </p>
                  {am.formulaTex && (
                    <div style={{ margin: '6px 0 8px' }}>
                      <Formula tex={am.formulaTex} legend={am.formulaLegend} block={false} />
                    </div>
                  )}
                  <p style={{
                    margin: '0 0 4px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: concept.color,
                  }}>
                    {am.exampleValue}
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}>
                    {boldKeyPhrases(am.interpretation, am.concept)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Questions */}
        {discovery.keyQuestions.length > 0 && (
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}>
            <div style={{ padding: '18px 20px 0' }}>
              <p style={{
                margin: '0 0 14px',
                fontSize: '11px',
                color: 'var(--text-muted)',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Key Questions ({discovery.keyQuestions.length})
              </p>
            </div>
            <div>
              {discovery.keyQuestions.map((kq, i) => (
                <div key={i} style={{
                  borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)',
                }}>
                  <button
                    onClick={() => toggleQuestion(i)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '14px 20px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <span style={{
                      fontSize: '13px',
                      color: 'var(--accent)',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>
                      {expandedQuestions.has(i) ? '\u25BC' : '\u25B6'}
                    </span>
                    <span style={{
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      lineHeight: 1.55,
                    }}>
                      {kq.question}
                    </span>
                  </button>
                  {expandedQuestions.has(i) && (
                    <div style={{
                      padding: '0 20px 16px 46px',
                    }}>
                      <p style={{
                        margin: 0,
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                      }}>
                        {kq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Topics */}
        {related.length > 0 && (
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '18px 20px',
            boxShadow: 'var(--shadow)',
          }}>
            <p style={{
              margin: '0 0 12px',
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              Related Topics
            </p>
            {discovery.connections.length > 0 && (
              <div style={{ marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {discovery.connections.map((conn, i) => (
                  <p key={i} style={{
                    margin: 0,
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {conn}
                  </p>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {related.map(r => (
                <button
                  key={r.id}
                  onClick={() => onTopicSelect(r.id)}
                  style={{
                    background: 'var(--surface, var(--card-hover))',
                    border: '1px solid var(--border)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-soft)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface, var(--card-hover))')}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ═══ SECTION 2: PRACTICE ═══ */}
      <div style={{ marginTop: '32px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '16px',
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--text-primary)',
          }}>
            Practice Problems
          </h2>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '24px',
            height: '24px',
            borderRadius: '12px',
            background: 'var(--accent-soft)',
            color: 'var(--accent)',
            fontSize: '12px',
            fontWeight: 700,
            padding: '0 8px',
          }}>
            {problems.length}
          </span>
        </div>

        {problems.length === 0 ? (
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '32px 20px',
            textAlign: 'center',
            boxShadow: 'var(--shadow)',
          }}>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: 'var(--text-muted)',
            }}>
              Practice problems coming soon.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {problems.map(problem => (
              <div key={problem.id} style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
              }}>
                {/* Problem header */}
                <div style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: problem.difficultyColor,
                    background: problem.difficultyBg,
                  }}>
                    {problem.difficulty}
                  </span>
                  <h3 style={{
                    margin: 0,
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}>
                    {problem.title}
                  </h3>
                </div>

                <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Scenario */}
                  <div style={{
                    background: 'var(--card-hover)',
                    borderRadius: '10px',
                    padding: '14px 16px',
                  }}>
                    <p style={{
                      margin: 0,
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}>
                      {problem.scenario}
                    </p>
                  </div>

                  {/* Questions */}
                  {problem.questions.map((q, qi) => (
                    <details key={qi} style={{
                      borderRadius: '10px',
                      border: '1px solid var(--border-subtle)',
                      overflow: 'hidden',
                    }}>
                      <summary style={{
                        padding: '12px 16px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        lineHeight: 1.55,
                        listStyle: 'none',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}>
                        <span style={{
                          color: 'var(--accent)',
                          fontWeight: 700,
                          flexShrink: 0,
                          fontSize: '12px',
                        }}>
                          Reveal &rarr;
                        </span>
                        <span>{q.text}</span>
                      </summary>

                      <div style={{
                        padding: '0 16px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}>
                        {/* Formula */}
                        {q.formulaTex && (
                          <Formula tex={q.formulaTex} legend={q.formulaLegend} block={false} />
                        )}

                        {/* Approach steps */}
                        <div>
                          <p style={{
                            margin: '0 0 6px',
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}>
                            Approach
                          </p>
                          <ol style={{
                            margin: 0,
                            paddingLeft: '18px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                          }}>
                            {q.approach.map((step, si) => (
                              <li key={si} style={{
                                fontSize: '13px',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                              }}>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Answer */}
                        <div style={{
                          background: 'var(--green-soft, rgba(22, 163, 74, 0.08))',
                          borderRadius: '10px',
                          padding: '12px 16px',
                        }}>
                          <p style={{
                            margin: '0 0 4px',
                            fontSize: '11px',
                            color: 'var(--green, #16a34a)',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}>
                            Answer
                          </p>
                          <p style={{
                            margin: 0,
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            lineHeight: 1.6,
                          }}>
                            {q.answer}
                          </p>
                        </div>

                        {/* Key Takeaway */}
                        <div style={{
                          background: 'var(--blue-soft, rgba(37, 99, 235, 0.08))',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                        }}>
                          <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>💡</span>
                          <p style={{
                            margin: 0,
                            fontSize: '13px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                          }}>
                            {q.keyTakeaway}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
