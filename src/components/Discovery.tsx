import { useState } from 'react'
import Formula from './Formula'

interface KeyQuestion {
  question: string
  answer: string
}

interface AnswerMeaning {
  concept: string
  formulaTex?: string
  formulaLegend?: string
  exampleValue: string
  interpretation: string
}

interface Topic {
  id: string
  title: string
  icon: string
  color: string
  description: string
  keyQuestions: KeyQuestion[]
  answerMeanings: AnswerMeaning[]
  subtopics: {
    name: string
    explanation: string
  }[]
  connections: string[]
}

const TOPICS: Topic[] = [
  {
    id: 'variance',
    title: 'Variance Analysis',
    icon: '📊',
    color: 'var(--accent)',
    description: 'Variance analysis decomposes the difference between budgeted and actual profit into its component drivers. Each variance isolates one factor — volume, selling price, variable cost efficiency, input prices, or fixed costs — so you can pinpoint who is responsible and what went wrong.',
    keyQuestions: [
      {
        question: 'What are the five standard variances in a profit waterfall, and in what order should they be computed?',
        answer: 'The five standard variances are the volume variance, selling price variance, variable cost efficiency variance, input price variance, and fixed cost variance. They should be computed in this order because each subsequent variance uses actual volume as the base, and computing them sequentially traces a waterfall from budgeted profit to actual profit. The order matters because it determines how each driver is isolated — volume is measured at budgeted margins, then price and cost effects are measured at actual volume.',
      },
      {
        question: 'Why must you adjust the budget for inflation before computing selling price and efficiency variances?',
        answer: 'If the budget was set before an inflation period, the original budgeted price is no longer the correct benchmark. Without adjustment, the inflation effect gets mixed into the selling price variance, making it appear that the manager changed prices when in reality the general price level shifted. By restating the budget at inflated prices first, you isolate the manager controllable price decision from the uncontrollable inflation effect. This produces a cleaner attribution of responsibility.',
      },
      {
        question: 'What is the difference between a flexible budget and a static budget, and which costs flex with volume?',
        answer: 'A static budget uses the originally planned volume for all computations. A flexible budget restates variable costs at actual volume while keeping fixed costs unchanged. Only variable costs (materials, labor, variable overhead) flex with volume. Fixed costs remain at the budgeted amount regardless of actual volume because they do not change with production levels. The flexible budget is the correct benchmark for evaluating efficiency because it asks: given the volume we actually achieved, what should our costs have been?',
      },
      {
        question: 'How do you interpret a favorable volume variance if it came at the expense of a lower selling price?',
        answer: 'A favorable volume variance means more units were sold than planned, each contributing the budgeted margin. However, if the extra volume was achieved by cutting prices, the selling price variance will be unfavorable. You must look at both variances together: the net effect could be positive (the extra volume more than compensates for the price cut), negative (the price cut destroys more margin than the extra volume creates), or neutral. The manager may have made a rational trade-off, but the variance analysis reveals whether it actually worked.',
      },
      {
        question: 'When should you decompose the volume variance further into market size, market share, and product mix components?',
        answer: 'You should decompose the volume variance when the company sells multiple products or operates in a market where total demand fluctuates. The market size component captures whether the overall market grew or shrank (uncontrollable). The market share component captures whether the company gained or lost ground against competitors (partially controllable). The product mix component captures whether the mix shifted toward higher-margin or lower-margin products. This decomposition is especially useful when the volume variance is large and the cause is ambiguous.',
      },
    ],
    answerMeanings: [
      {
        concept: 'Negative Volume Variance',
        formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b',
        formulaLegend: 'N_a = actual units, N_b = budgeted units, CM_b = budgeted contribution margin',
        exampleValue: '−$435,000',
        interpretation: 'The division lost $435,000 in contribution margin purely because it sold fewer contracts than planned. Each missing contract cost the company one budgeted contribution margin.',
      },
      {
        concept: 'Favorable Efficiency Variance',
        formulaTex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a',
        formulaLegend: 'Q = input per unit, C_b = budgeted input cost, N_a = actual units',
        exampleValue: '+$225,000',
        interpretation: 'The division used fewer inputs per unit than planned, saving $225,000 at budget prices. This signals improved resource utilization, but check whether quality was sacrificed.',
      },
      {
        concept: 'Zero Fixed Cost Variance',
        formulaTex: 'V_{FC} = FC_b - FC_a',
        formulaLegend: 'FC_b = budgeted fixed costs, FC_a = actual fixed costs',
        exampleValue: '$0',
        interpretation: 'Fixed costs came in exactly at budget. Fixed costs are never flexed with volume — this is always a simple comparison of budget versus actual totals.',
      },
      {
        concept: 'Favorable Price with Unfavorable Volume Trade-Off',
        exampleValue: 'Price +$140,000, Volume −$190,000',
        interpretation: 'Raising prices generated $140,000 more per customer, but the higher price drove 100 fewer customers, costing $190,000 in lost volume. The net is −$50,000 — the price increase did not compensate for the lost traffic.',
      },
    ],
    subtopics: [
      { name: 'Volume Variance', explanation: 'Captures the profit impact of selling more or fewer units than budgeted. Computed as the volume difference multiplied by the budgeted contribution margin per unit.' },
      { name: 'Selling Price Variance', explanation: 'Measures the revenue impact of charging a different price than budgeted. Uses actual volume as the multiplier because you can only earn a price premium on units actually sold.' },
      { name: 'Variable Cost Efficiency Variance', explanation: 'Reflects whether production used more or fewer resources per unit than planned. Compares budgeted input usage per unit against actual usage, valued at standard input prices.' },
      { name: 'Input Price Variance', explanation: 'Isolates the cost impact of paying more or less for raw materials than expected. Computed on the actual quantity purchased.' },
      { name: 'Fixed Cost Variance', explanation: 'A direct comparison of budgeted versus actual fixed costs. Fixed costs are never flexed with volume, making this a straightforward difference.' },
      { name: 'Inflation Adjustment', explanation: 'When the budget was set before an inflation period, you must restate the budget at inflated prices before computing price and efficiency variances. Otherwise the inflation effect is conflated with the manager performance effect.' },
    ],
    connections: [
      'Variance analysis results feed directly into the System Critique when you assess whether the budget is realistic and whether the right drivers are being measured.',
      'The volume variance connects to Pricing and Relevance decisions: accepting a special order changes actual volume and therefore the volume variance.',
    ],
  },
  {
    id: 'relevance',
    title: 'Relevance Analysis and Accept-or-Reject Decisions',
    icon: '⚖️',
    color: 'var(--blue)',
    description: 'Relevance analysis separates the cash flows that change with a decision from those that do not. The core challenge is that the company and the division manager may see different numbers — the company looks at incremental cash flows while the manager looks at incremental divisional profit, which may include allocated costs that do not actually change.',
    keyQuestions: [
      {
        question: 'What makes a cost relevant to a decision, and what are the two conditions a cost must satisfy?',
        answer: 'A cost is relevant if it satisfies two conditions: it must be a future cost (not a sunk cost already incurred) and it must differ between the alternatives being considered (accepting versus rejecting the order). If a cost has already been incurred, it is sunk and irrelevant regardless of its size. If a cost will be incurred regardless of the decision (such as existing fixed overhead), it is also irrelevant because it does not change the comparison. Only costs that are both future and differential should enter the analysis.',
      },
      {
        question: 'Why does corporate overhead allocation create goal incongruence when it is charged on a per-unit basis?',
        answer: 'When corporate overhead is allocated per unit sold, each additional unit produced triggers an additional overhead charge on the division income statement. From the company perspective, this overhead exists regardless of the decision and is therefore irrelevant. But from the manager perspective, the allocated overhead appears as a variable cost that increases with volume. This mismatch means the manager sees a higher cost per unit than the company does, and may reject an order that generates positive cash flow for the company because it generates negative divisional profit. The allocation creates a phantom cost that distorts the manager decision.',
      },
      {
        question: 'How does opportunity cost enter the analysis when the division is operating at full capacity?',
        answer: 'When the division has no spare capacity, accepting a new order means displacing an existing order. The contribution margin lost from the displaced order is the opportunity cost and must be added to the incremental cost of accepting the new order. For example, if a unit currently earns 20 euros contribution margin and the new order would earn 15 euros, the net incremental benefit is 15 minus 20 equals negative 5 euros — the order should be rejected. Opportunity cost only exists when a constraint is binding; with spare capacity, the opportunity cost is zero.',
      },
      {
        question: 'What is the difference between the company recommendation and the manager recommendation, and when do they diverge?',
        answer: 'The company recommendation is based on incremental cash flows: revenue minus truly variable costs, excluding any allocated overhead that does not change. The manager recommendation is based on incremental divisional profit, which includes allocated corporate overhead and any other costs charged to the division. They diverge when allocated overhead is large enough relative to the contribution margin to flip the sign of the decision. The company says accept (positive cash flow) while the manager says reject (negative divisional profit). This divergence is goal incongruence.',
      },
      {
        question: 'How should you handle sunk costs and committed fixed costs in a special order decision?',
        answer: 'Sunk costs (money already spent) and committed fixed costs (contractual obligations that cannot be avoided) are excluded from the analysis entirely. They do not change with the decision and therefore have no bearing on whether to accept or reject. Common examples include past investments in equipment, signed lease agreements, and existing staff salaries that will be paid regardless. The only costs that matter are those that would be incurred specifically because the order is accepted and would not exist otherwise.',
      },
    ],
    answerMeanings: [
      {
        concept: 'Positive Cash Flow but Negative Divisional Profit',
        formulaTex: '\\Delta CF = N(P - VC) > 0 \\quad \\Delta DP = N(P - VC - OH) < 0',
        formulaLegend: 'CF = cash flow, DP = divisional profit, OH = allocated overhead per unit',
        exampleValue: 'Company: +$450,000 | Manager: −$50,000',
        interpretation: 'The company gains $450,000 in real cash, but the manager sees a $50,000 loss because allocated overhead is charged as if it were a real cost. This is goal incongruence — the manager rationally rejects a deal that creates value for the company.',
      },
      {
        concept: 'Opportunity Cost at Full Capacity',
        formulaTex: 'OC = N_{displaced} \\times CM_{displaced}',
        formulaLegend: 'N = units displaced, CM = contribution margin of displaced order',
        exampleValue: '+$100,000 opportunity cost',
        interpretation: 'Accepting the new order means giving up $100,000 in contribution margin from the existing order. This opportunity cost must be added to the incremental cost of the new order to get the true economic picture.',
      },
      {
        concept: 'Bonus Alignment with Company Interest',
        formulaTex: '\\Delta Bonus = 10\\% \\times \\Delta DP',
        exampleValue: '+$45,000 bonus increase',
        interpretation: 'When the manager bonus aligns with the company decision, there is no goal incongruence. The manager accepts the deal because both cash flows and divisional profit are positive.',
      },
    ],
    subtopics: [
      { name: 'Incremental Cash Flow Analysis', explanation: 'The company perspective considers only costs and revenues that change as a direct result of accepting the order. Allocated overhead that exists regardless of the decision is excluded.' },
      { name: 'Divisional Profit Impact', explanation: 'The manager perspective includes allocated overhead charged to the division, even if it does not change in cash. This can cause the manager to reject an order that is profitable for the company.' },
      { name: 'Goal Incongruence', explanation: 'Occurs when the management control system leads the manager to make a decision that is not in the best interest of the company. Typically caused by allocating costs that do not change with the decision onto the division income statement.' },
      { name: 'Opportunity Cost', explanation: 'When the division is at full capacity, accepting a new order means rejecting an existing one. The lost contribution margin from the displaced order is the opportunity cost and must be included in the analysis.' },
    ],
    connections: [
      'The overhead allocation method from Cost Allocation and Pricing determines what appears on the division income statement, directly affecting goal congruence.',
      'Relevance analysis is the foundation for Transfer Pricing: the same incremental logic determines the minimum and maximum transfer price.',
    ],
  },
  {
    id: 'cost-allocation',
    title: 'Cost Allocation and Pricing Policy',
    icon: '🏗️',
    color: 'var(--amber)',
    description: 'Cost allocation determines how fixed costs are distributed across products, divisions, or customers. The allocation base you choose directly affects the unit cost, the cost-plus price, and the risk of a death spiral. Activity-based costing uses multiple cost drivers to provide a more accurate picture of which products or channels are truly profitable.',
    keyQuestions: [
      {
        question: 'What is the death spiral, and which allocation base triggers it?',
        answer: 'The death spiral is a self-reinforcing loop where falling volume leads to rising unit costs, which leads to higher prices, which leads to further volume decline. It is triggered by allocating fixed costs over actual volume. When actual volume drops, the fixed cost per unit increases because the same total cost is spread over fewer units. This raises the cost-plus price, making the product less competitive, which causes further volume loss. The spiral continues until the product is priced out of the market entirely.',
      },
      {
        question: 'How does allocating fixed costs over practical capacity differ from allocating over actual volume?',
        answer: 'Capacity-based allocation divides total fixed costs by practical capacity (the maximum sustainable production level), giving a stable cost per unit that does not change with actual demand. The difference between capacity and actual volume represents idle capacity cost, which is absorbed by the company rather than loaded onto products. This approach breaks the death spiral because a drop in demand does not increase the cost per unit. Actual-volume allocation ties the cost per unit to current demand, creating instability and the death spiral risk.',
      },
      {
        question: 'What is cross-subsidization, and how does activity-based costing reveal it?',
        answer: 'Cross-subsidization occurs when one product or customer is overcharged and another is undercharged because the allocation base does not reflect the actual consumption of resources. For example, a low-volume specialty product that requires many setups and quality inspections may appear cheap under a volume-based allocation but is actually expensive when traced through the correct cost drivers. Activity-based costing reveals this by using multiple drivers (setup hours, inspection count, machine time) to trace overhead to the activities that cause it, rather than spreading it uniformly across all units.',
      },
      {
        question: 'When is a capacity-based allocation appropriate, and what are its limitations?',
        answer: 'Capacity-based allocation is appropriate when fixed costs represent a commitment to a certain level of capability (factory space, equipment, permanent staff) and the company wants to give managers a stable cost signal for pricing decisions. Its main limitation is that it hides the cost of idle capacity — the unused portion is not charged to any product, so managers may not feel pressure to improve utilization. It also requires a reliable estimate of practical capacity, which can be subjective.',
      },
      {
        question: 'How does the choice of allocation base affect the price-setting behavior of managers?',
        answer: 'Managers who are evaluated on divisional profit will set prices to cover their reported unit cost plus a markup. If fixed costs are allocated over actual volume (high cost per unit at low volumes), managers will raise prices aggressively, potentially accelerating the death spiral. If fixed costs are allocated over capacity (stable cost per unit), managers have a steadier benchmark and are less likely to overreact to short-term demand fluctuations. The allocation base effectively becomes a signal that shapes pricing strategy.',
      },
    ],
    answerMeanings: [
      {
        concept: 'Death Spiral Price Increase',
        formulaTex: 'P_{actual} = (VC + \\frac{FC}{N_a}) \\times (1 + m) \\quad P_{cap} = (VC + \\frac{FC}{N_{cap}}) \\times (1 + m)',
        formulaLegend: 'FC = fixed costs, N_a = actual volume, N_cap = capacity, m = markup percentage',
        exampleValue: '$21.00 versus $18.00',
        interpretation: 'Allocating fixed costs over actual volume ($21.00) versus capacity ($18.00) inflates the price by $3 when demand drops. This higher price further reduces demand, creating a self-reinforcing death spiral.',
      },
      {
        concept: 'Idle Capacity Cost Absorption',
        formulaTex: 'FC_{idle} = FC \\times (1 - \\frac{N_a}{N_{cap}})',
        formulaLegend: 'FC = total fixed costs, N_a = actual volume, N_cap = practical capacity',
        exampleValue: '$20,000 idle capacity cost',
        interpretation: 'Under capacity-based allocation, the $20,000 of unused capacity cost is absorbed by the company rather than loaded onto products. This keeps prices stable and prevents the death spiral.',
      },
      {
        concept: 'Cross-Subsidization Revealed by Activity-Based Costing',
        exampleValue: 'Product A: overcosted by $5 per unit | Product B: undercosted by $8 per unit',
        interpretation: 'Traditional volume-based allocation hides the true cost of complex, low-volume products. Activity-based costing reveals that Product B consumes far more resources per unit than the simple allocation suggests.',
      },
    ],
    subtopics: [
      { name: 'Actual Volume Allocation', explanation: 'Divides total fixed costs by actual units produced. When volume drops, the cost per unit rises, the price goes up, demand falls further, and the cycle repeats. This is the death spiral.' },
      { name: 'Capacity-Based Allocation', explanation: 'Divides total fixed costs by practical capacity. Idle capacity cost is absorbed by the company rather than loaded onto products. This breaks the death spiral and gives managers stable cost information.' },
      { name: 'Activity-Based Costing', explanation: 'Uses multiple cost drivers — such as number of setups, number of orders, or machine hours — to allocate overhead more accurately. Reveals that some products or customers that appear profitable under traditional costing are actually subsidized by others.' },
      { name: 'Cost-Plus Pricing', explanation: 'Adds a markup to the full cost per unit to set the selling price. The resulting price depends entirely on how fixed costs are allocated. This makes the allocation base a strategic decision, not just an accounting one.' },
    ],
    connections: [
      'The allocation base feeds directly into Transfer Pricing: an inflated cost per unit raises the transfer price floor and may destroy the goal congruence zone.',
      'Cost allocation distortions are a major topic in the System Critique. You must identify whether the allocation base causes behavioral problems.',
    ],
  },
  {
    id: 'transfer-pricing',
    title: 'Transfer Pricing',
    icon: '🔄',
    color: 'var(--amber)',
    description: 'Transfer pricing sets the price at which one division sells to another within the same company. The transfer price must satisfy both divisions for the internal trade to occur. The key challenge is finding a price that achieves goal congruence — meaning both the selling and buying division find it profitable to trade internally when it is also in the company best interest.',
    keyQuestions: [
      {
        question: 'How do you calculate the minimum transfer price for the selling division, and what costs should be included?',
        answer: 'The minimum transfer price equals the seller incremental cost plus the seller opportunity cost. Incremental costs include the variable cost of production and any corporate overhead that is triggered by producing the additional unit. Sunk costs and existing fixed costs that do not change are excluded. Opportunity cost is zero if the seller has spare capacity. If the seller must forgo external sales, the opportunity cost is the lost contribution margin from those displaced sales. The minimum represents the lowest price at which the seller is no worse off than not trading.',
      },
      {
        question: 'How do you calculate the maximum transfer price for the buying division?',
        answer: 'The maximum transfer price equals the buyer external selling price minus all other variable costs the buyer incurs to convert and sell the final product, minus any corporate overhead charged to the buyer on the internal purchase. This represents the highest price at which the buyer can still earn a non-negative contribution margin. If the transfer price exceeds this maximum, the buyer would be better off not purchasing internally (or buying from an external supplier if one exists at a lower price).',
      },
      {
        question: 'Under what conditions does no goal-congruent transfer price exist?',
        answer: 'No goal-congruent transfer price exists when the seller minimum exceeds the buyer maximum. This typically happens when corporate overhead allocated per unit inflates the seller floor (by adding a pseudo-variable cost to each unit produced) while simultaneously compressing the buyer ceiling (by adding overhead to the buyer cost structure). It can also occur when the seller has no spare capacity and the opportunity cost of internal trade is very high, pushing the seller minimum above what the buyer can afford.',
      },
      {
        question: 'Why does corporate overhead allocated per unit often destroy the congruence zone?',
        answer: 'Corporate overhead per unit acts as a variable cost for both divisions even though it does not represent a real incremental cash cost. For the seller, it inflates the floor because each unit triggers an overhead charge. For the buyer, it reduces the ceiling because the overhead is also charged on the purchase. The combined effect is a double squeeze: the floor rises and the ceiling drops. In many cases, this eliminates the congruence zone entirely, meaning the divisions will refuse to trade even when internal trade is profitable for the company as a whole.',
      },
      {
        question: 'What are the trade-offs between variable cost, full cost, cost-plus, market-based, and negotiated transfer pricing methods?',
        answer: 'Variable cost pricing gives all the margin to the buyer but leaves the seller with zero profit, undermining seller motivation and making performance measurement meaningless. Full cost pricing includes allocated fixed costs, often setting the price above the congruence zone. Cost-plus adds a markup to full cost, which can work but is arbitrary and may over- or under-price depending on the markup. Market-based pricing works well when a competitive external market exists, but fails when no such market exists or when the internal product is specialized. Negotiated pricing preserves divisional autonomy and can land in the congruence zone, but is time-consuming, can create conflict, and outcomes depend on bargaining power rather than economic fundamentals.',
      },
    ],
    answerMeanings: [
      {
        concept: 'Empty Goal Congruence Zone',
        formulaTex: 'TP_{min} = VC_S + OH_S > P_{ext} - VC_B - OH_B = TP_{max}',
        formulaLegend: 'TP_min = seller minimum, TP_max = buyer maximum, OH = corporate overhead per unit',
        exampleValue: 'Seller minimum: $2,640 | Buyer maximum: $2,000',
        interpretation: 'When the seller minimum exceeds the buyer maximum, no transfer price exists that makes both divisions willing to trade. Internal trade that is profitable for the company will not occur because both divisions rationally refuse.',
      },
      {
        concept: 'Full-Cost Transfer Price Above Market',
        formulaTex: 'TP_{FC} = (VC + \\frac{FC}{N} + OH) \\times (1 + m)',
        formulaLegend: 'TP_FC = full cost transfer price, FC = fixed costs, m = markup',
        exampleValue: '$2,640 versus market price of $2,000',
        interpretation: 'The full-cost transfer price loads fixed overhead onto each unit, inflating the price $640 above what the buyer can pay. The overhead does not change in cash, but it destroys the internal trade incentive.',
      },
      {
        concept: 'Goal Congruence Transfer Price Range',
        formulaTex: 'VC_S + OC_S \\leq TP \\leq P_{ext} - VC_B',
        formulaLegend: 'VC_S = seller variable cost, OC_S = seller opportunity cost, P_ext = buyer external price, VC_B = buyer other variable costs',
        exampleValue: '$840 ≤ TP ≤ $2,000',
        interpretation: 'Any transfer price within this range makes both the seller and the buyer better off from trading internally. The company also benefits because the total contribution margin from internal trade is positive.',
      },
    ],
    subtopics: [
      { name: 'Seller Minimum Transfer Price', explanation: 'The seller will only agree to internal trade if the transfer price covers their incremental cost plus any opportunity cost from forgoing external sales. When spare capacity exists, the opportunity cost is zero.' },
      { name: 'Buyer Maximum Transfer Price', explanation: 'The buyer will only agree if the transfer price is low enough that they can still earn a positive contribution margin on their final product. The ceiling equals the external selling price minus the buyer other variable costs.' },
      { name: 'Goal Congruence Zone', explanation: 'The range between the seller minimum and buyer maximum where internal trade benefits both divisions and the company. If the minimum exceeds the maximum, no congruent transfer price exists.' },
      { name: 'Impact of Corporate Overhead', explanation: 'When corporate overhead is allocated per unit sold, it behaves like a variable cost for both the seller and buyer. This inflates the seller floor and compresses or eliminates the congruence zone.' },
      { name: 'Transfer Pricing Methods', explanation: 'Variable cost transfer pricing maximizes buyer benefit but gives the seller zero margin. Full cost includes the fixed allocation, often setting the price too high. Market price works well when a competitive external market exists. Negotiated pricing preserves autonomy but may lead to conflict.' },
    ],
    connections: [
      'Transfer pricing depends heavily on Cost Allocation: the overhead allocation method determines whether the seller floor is inflated.',
      'Transfer pricing failures are a central theme in the System Critique, because they directly cause goal incongruence and lost company profit.',
    ],
  },
  {
    id: 'residual-income',
    title: 'Residual Income and Investment Decisions',
    icon: '📈',
    color: 'var(--green)',
    description: 'Residual income measures whether a division earns more than its cost of capital. Unlike return on investment, residual income correctly accepts any project that earns above the hurdle rate. The depreciation method does not change total cash flows, but it dramatically shifts the timing of reported profit and bonuses, creating powerful incentives for or against investment.',
    keyQuestions: [
      {
        question: 'What is the formula for residual income, and why does it use book value at the beginning of the period?',
        answer: 'Residual income equals divisional profit minus the capital charge, where the capital charge is the cost of capital multiplied by the book value of assets at the beginning of the period. Book value at the beginning is used because it represents the capital tied up during the period — the manager had use of those assets for the full period and should be charged accordingly. Using end-of-period book value would understate the charge because depreciation has already reduced the asset value.',
      },
      {
        question: 'Why does residual income improve over time under straight-line depreciation even when cash flows are constant?',
        answer: 'Under straight-line depreciation, the book value of the asset decreases by the same amount each year. Since the capital charge is a percentage of book value, the charge gets smaller each year. Meanwhile, if operating cash flows are constant and depreciation is constant, divisional profit after depreciation is also constant. The combination of constant profit and declining capital charge means residual income automatically increases each year. This is a mechanical artifact of the accounting method, not a genuine improvement in performance.',
      },
      {
        question: 'How does accelerated depreciation affect the timing of bonuses compared to straight-line?',
        answer: 'Accelerated depreciation front-loads the depreciation expense, which reduces divisional profit in the early years and increases it in the later years. However, it also reduces book value faster, which shrinks the capital charge more quickly. The net effect is that residual income under accelerated depreciation is typically lower in Year 1 but rises more steeply. Depending on the specific numbers, this can shift bonuses earlier or later. The key insight is that the same investment with identical cash flows produces different bonus patterns purely due to the depreciation schedule chosen.',
      },
      {
        question: 'What is the moving-target bonus problem, and why does it discourage strong performance?',
        answer: 'A moving-target bonus sets the next year target based on the current year actual performance. If a manager performs well this year, the target for next year ratchets up, making it harder to earn a bonus. This creates a perverse incentive: the manager is penalized for exceeding expectations. Rational managers may deliberately hold back performance in a good year, or shift revenue and costs between periods, to keep the target manageable. The system rewards mediocrity and punishes excellence.',
      },
      {
        question: 'When might a manager reject a positive net present value investment, and which performance metric causes this behavior?',
        answer: 'A manager evaluated on return on investment (a ratio) may reject a new investment if it would lower their current return percentage, even though it earns above the cost of capital. For example, a division earning 20 percent return on investment would reject a project earning 15 percent return because the blended ratio would fall below 20 percent — even though 15 percent exceeds the 10 percent cost of capital. Residual income avoids this problem because any project with positive residual income increases the total, regardless of its return on investment percentage.',
      },
    ],
    answerMeanings: [
      {
        concept: 'Negative Year 1 Residual Income Despite Positive Net Present Value',
        formulaTex: 'RI_1 = DP_1 - r \\times BV_0 = 10{,}000 - 0.10 \\times 420{,}000 = -32{,}000',
        formulaLegend: 'DP = divisional profit after depreciation, r = cost of capital, BV_0 = book value at start of year',
        exampleValue: '−$32,000',
        interpretation: 'The investment has positive total cash flows (+$30,000 over 4 years), but the Year 1 capital charge ($42,000) exceeds the thin divisional profit ($10,000). This makes the manager reluctant to invest even though the project creates company value.',
      },
      {
        concept: 'Increasing Residual Income Pattern Under Straight-Line Depreciation',
        formulaTex: 'RI_t \\uparrow \\text{ as } BV_t \\downarrow \\text{ while } DP_t \\text{ stays constant}',
        exampleValue: 'Year 1: −$32,000 | Year 2: −$18,000 | Year 3: −$4,000',
        interpretation: 'Residual income automatically improves each year because book value declines (shrinking the capital charge) while cash flows and depreciation stay constant. This is a mechanical artifact of the accounting, not genuine performance improvement.',
      },
      {
        concept: 'Moving-Target Bonus Discouraging Strong Performance',
        exampleValue: 'Year 1 bonus: $0 | Year 2 bonus: $1,400 | Year 3 bonus: $1,400',
        interpretation: 'No bonus in Year 1 (when the investment burden is heaviest) strongly discourages the manager from investing. The improving pattern in Years 2 and 3 rewards patience, but the total bonus of $2,800 over three years may not justify the effort and risk.',
      },
    ],
    subtopics: [
      { name: 'Residual Income Formula', explanation: 'Residual income equals divisional profit minus the capital charge, where the capital charge is the cost of capital multiplied by the book value of assets at the beginning of the period. A positive residual income means the division is creating value above its cost of capital.' },
      { name: 'Return on Investment versus Residual Income', explanation: 'Return on investment is a ratio, which means a manager with a high current return may reject a good new investment if it lowers their percentage. Residual income avoids this problem because any positive residual income investment increases the total.' },
      { name: 'Depreciation and Bonus Timing', explanation: 'Straight-line depreciation produces increasing residual income over time because book value declines while operating profit stays constant. Accelerated depreciation front-loads the bonus because the higher early depreciation reduces book value faster.' },
      { name: 'Moving-Target Bonus', explanation: 'When the bonus target is set based on the prior year performance, a strong year raises the bar for the next year. This creates a perverse incentive to deliberately underperform to keep the target low.' },
    ],
    connections: [
      'Residual income connects to the System Critique through performance measurement: the choice of metric directly shapes whether managers accept value-creating investments.',
      'The depreciation method choice is an incentive design question that affects both the Investment analysis and the System Critique.',
    ],
  },
  {
    id: 'system-critique',
    title: 'Management Control System Critique',
    icon: '🔍',
    color: 'var(--pink)',
    description: 'The system critique is the synthesis question. You are not computing a number — you are diagnosing whether the management control system as a whole aligns manager behavior with company value creation. Each dimension of the control system can introduce a distortion that causes managers to act against the company interest.',
    keyQuestions: [
      {
        question: 'What are the six dimensions you should cover in a structured system critique?',
        answer: 'The six dimensions are: (1) the variance analysis system — is the budget realistic, are the right drivers measured? (2) the cost allocation system — is the allocation base appropriate, does it cause cross-subsidization? (3) the pricing policy — is it cost-based or market-based, does it create death spiral risk? (4) the transfer pricing policy — does it achieve goal congruence, does overhead distort it? (5) the performance measurement system — profit center versus investment center, return on investment versus residual income, is it controllable? (6) the incentive design — moving target problems, short-termism risk, non-financial measures needed? For each dimension, state the problem, the behavioral distortion, and the recommended fix.',
      },
      {
        question: 'For each dimension, can you name a specific behavioral distortion and explain why it is harmful?',
        answer: 'Variance system: an unrealistic budget that is always missed causes managers to stop taking the budget seriously, undermining the entire planning process. Cost allocation: actual-volume allocation triggers the death spiral where managers raise prices in response to volume drops. Pricing: cost-plus pricing based on full cost may overprice products in competitive markets, losing share. Transfer pricing: full-cost pricing with overhead inflates the seller floor and blocks profitable internal trade. Performance measurement: return on investment causes managers to reject positive-net-present-value projects. Incentive design: moving-target bonuses cause managers to sandbag and shift income between periods.',
      },
      {
        question: 'How does the choice of allocation base in the cost system affect transfer pricing and pricing policy?',
        answer: 'The allocation base determines the fixed cost per unit, which flows into both the cost-plus external price and the full-cost transfer price. If actual volume is used and volume drops, the cost per unit rises, making the external price less competitive (death spiral) and inflating the internal transfer price above the congruence zone. If capacity is used, the cost per unit is stable, external prices remain competitive, and the transfer price is less likely to be inflated. The allocation base is therefore a single design choice that cascades across multiple dimensions of the control system.',
      },
      {
        question: 'What are the three conditions a good performance measurement system should satisfy?',
        answer: 'A good performance measurement system should satisfy three conditions: (1) the metric should promote goal congruence, meaning the actions that maximize the metric are also the actions that maximize company value; (2) the metric should be controllable by the manager being evaluated, excluding factors outside their influence like exchange rate movements or corporate-level decisions; (3) the metric should provide a fair basis for comparing performance across divisions of different sizes and risk profiles. No single metric satisfies all three perfectly, which is why companies often use a combination of financial and non-financial measures.',
      },
      {
        question: 'How can incentive design create unintended consequences such as short-termism or sandbagging?',
        answer: 'Short-termism arises when bonuses are based on annual profits and the manager can boost short-term results at the expense of long-term value (cutting maintenance, delaying investments, reducing training). Sandbagging arises from moving-target bonuses where last year success becomes next year minimum — managers learn to deliver just enough to earn the bonus but not so much that next year becomes impossible. Both are rational responses to poorly designed incentive systems. Fixes include multi-year bonus pools, equity-based compensation, balanced scorecards with non-financial measures, and targets set relative to external benchmarks rather than internal history.',
      },
    ],
    answerMeanings: [
      {
        concept: 'Cascade Diagnosis: One Allocation Choice Ripples Everywhere',
        exampleValue: 'Full-cost allocation → inflated TP → blocked internal trade → lost $116,000 in cash flows',
        interpretation: 'The choice of cost allocation base is not an isolated accounting decision. It cascades into transfer pricing (inflating the floor), external pricing (creating death spiral risk), and investment evaluation (distorting residual income through depreciation of over-valued assets).',
      },
      {
        concept: 'Structured Critique Framework',
        formulaTex: '\\text{Problem} \\to \\text{Behavioral Distortion} \\to \\text{Recommended Fix}',
        exampleValue: 'Six dimensions: variance, allocation, pricing, transfer pricing, performance measure, incentives',
        interpretation: 'For each dimension, you must name the specific accounting issue, explain the behavioral distortion it creates for the manager, and propose a concrete alternative. Simply describing the accounting method without stating the behavioral consequence earns no marks.',
      },
      {
        concept: 'Goal Congruence as the Central Test',
        exampleValue: 'Manager rejects a positive net present value investment',
        interpretation: 'The ultimate test of any management control system is whether it leads managers to make decisions that maximize company value. If the manager rationally acts against the company interest, the system is broken — regardless of how sophisticated the accounting methods are.',
      },
    ],
    subtopics: [
      { name: 'Variance System Assessment', explanation: 'Is the budget realistic? Does it capture the right cost drivers? Should the volume variance be decomposed further into market size, market share, and product mix?' },
      { name: 'Cost Allocation System Assessment', explanation: 'Is the allocation base appropriate? Does the current method cause cross-subsidization between products or divisions? Would activity-based costing reveal a different profitability picture?' },
      { name: 'Pricing Policy Assessment', explanation: 'Is pricing based on cost-plus or market-based methods? Does the cost include idle capacity, creating death spiral risk? Is the pricing approach consistent with the competitive environment?' },
      { name: 'Transfer Pricing Assessment', explanation: 'Does the current transfer pricing method achieve goal congruence? Is corporate overhead creating distortions? Should divisions be allowed to negotiate, or would a different method be better?' },
      { name: 'Performance Measurement Assessment', explanation: 'Is the division treated as a profit center or an investment center? Should residual income or return on investment be the primary metric? Is the measure controllable by the manager?' },
      { name: 'Incentive Design Assessment', explanation: 'Does the bonus formula create a moving-target problem? Is there a risk of short-termism? Should non-financial measures be included? Would equity-based compensation better align incentives?' },
    ],
    connections: [
      'The system critique draws on findings from all other five concepts. Every analysis you perform in Parts 1 through 4 provides evidence for the critique in Part 5.',
      'The core question is always: does the system lead managers to make decisions that maximize company value, or does it create incentives that work against the company interest?',
    ],
  },
]

export default function Discovery() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
  const [mastered, setMastered] = useState<Set<string>>(() => new Set())
  const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(() => new Set())

  const toggleMastered = (id: string) => {
    setMastered(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleAnswer = (key: string) => {
    setExpandedAnswers(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const progressPercent = Math.round((mastered.size / TOPICS.length) * 100)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p style={{ margin: '0 0 6px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
        A comprehensive review of every concept tested on the final exam. Expand each topic to explore its subtopics, test yourself with the key questions, reveal the answers, and mark topics as mastered.
      </p>

      {/* Progress bar */}
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '18px 20px',
        boxShadow: 'var(--shadow)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
            Mastery Progress
          </span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent)' }}>
            {mastered.size} of {TOPICS.length} concepts
          </span>
        </div>
        <div style={{
          height: '8px',
          background: 'var(--card-hover)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: 'var(--accent)',
            borderRadius: '4px',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Topic cards */}
      {TOPICS.map((topic) => {
        const isExpanded = expandedTopic === topic.id
        const isMastered = mastered.has(topic.id)

        return (
          <div
            key={topic.id}
            style={{
              background: 'var(--card)',
              border: `1px solid ${isExpanded ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: isExpanded ? 'var(--shadow-lg)' : 'var(--shadow)',
              transition: 'all 0.2s ease',
            }}
          >
            <button
              onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
              style={{
                width: '100%',
                padding: '18px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '28px', flexShrink: 0 }}>{topic.icon}</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {topic.title}
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {topic.description.slice(0, 120)}...
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                {isMastered && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--green)',
                    background: 'var(--green-soft)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                  }}>
                    Mastered
                  </span>
                )}
                <span style={{ fontSize: '14px', color: 'var(--text-muted)', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'none' }}>
                  ▼
                </span>
              </div>
            </button>

            {isExpanded && (
              <div style={{ padding: '0 20px 24px', display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ paddingTop: '20px' }}>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {topic.description}
                  </p>
                </div>

                {/* Key Questions with collapsible answers */}
                <div>
                  <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Key Questions to Test Your Understanding
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {topic.keyQuestions.map((kq, i) => {
                      const answerKey = `${topic.id}-${i}`
                      const isAnswerOpen = expandedAnswers.has(answerKey)

                      return (
                        <div key={i}>
                          <button
                            onClick={() => toggleAnswer(answerKey)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '12px 14px',
                              background: 'var(--card-hover)',
                              border: 'none',
                              borderRadius: isAnswerOpen ? '10px 10px 0 0' : '10px',
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                          >
                            <span style={{
                              fontSize: '12px',
                              fontWeight: 700,
                              color: 'var(--accent)',
                              flexShrink: 0,
                              minWidth: '18px',
                            }}>
                              {i + 1}.
                            </span>
                            <span style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6, flex: 1 }}>
                              {kq.question}
                            </span>
                            <span style={{
                              fontSize: '12px',
                              color: 'var(--text-muted)',
                              flexShrink: 0,
                              transition: 'transform 0.2s',
                              transform: isAnswerOpen ? 'rotate(180deg)' : 'none',
                            }}>
                              ▼
                            </span>
                          </button>

                          {isAnswerOpen && (
                            <div style={{
                              padding: '14px 16px',
                              background: 'var(--surface)',
                              border: '1px solid var(--border)',
                              borderTop: 'none',
                              borderRadius: '0 0 10px 10px',
                              borderLeft: '3px solid var(--accent)',
                            }}>
                              <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                What This Means
                              </p>
                              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                {kq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* What the Answer Means */}
                {topic.answerMeanings.length > 0 && (
                  <div>
                    <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: topic.color, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      What the Answer Means
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {topic.answerMeanings.map((am, i) => (
                        <div key={i} style={{
                          padding: '16px',
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderLeft: `4px solid ${topic.color}`,
                          borderRadius: '10px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}>
                          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                              {am.concept}
                            </p>
                            <span style={{
                              fontSize: '13px',
                              fontWeight: 600,
                              color: topic.color,
                              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                              flexShrink: 0,
                            }}>
                              {am.exampleValue}
                            </span>
                          </div>
                          {am.formulaTex && (
                            <div style={{ background: 'var(--card-hover)', borderRadius: '8px', padding: '10px 14px' }}>
                              <Formula tex={am.formulaTex} legend={am.formulaLegend} />
                            </div>
                          )}
                          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            {am.interpretation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subtopics */}
                <div>
                  <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Subtopics to Review
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {topic.subtopics.map((sub, i) => (
                      <div key={i} style={{
                        padding: '14px 16px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '10px',
                      }}>
                        <p style={{ margin: '0 0 6px', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {sub.name}
                        </p>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                          {sub.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connections */}
                <div style={{
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--accent)',
                  borderRadius: '10px',
                  padding: '16px',
                  opacity: 0.95,
                }}>
                  <h4 style={{ margin: '0 0 10px', fontSize: '13px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Connections to Other Concepts
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {topic.connections.map((conn, i) => (
                      <li key={i} style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        {conn}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => toggleMastered(topic.id)}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '10px 20px',
                    background: isMastered ? 'var(--card-hover)' : 'var(--green)',
                    border: isMastered ? '1px solid var(--border)' : 'none',
                    borderRadius: '10px',
                    color: isMastered ? 'var(--text-secondary)' : '#ffffff',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {isMastered ? 'Unmark as Mastered' : 'Mark as Mastered'}
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
