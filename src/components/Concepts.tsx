import VarianceSandbox from './VarianceSandbox'
import Formula from './Formula'

interface Trap {
  title: string
  explanation: string
  example?: string
  formulaTex?: string
}

interface KeyTerm {
  term: string
  definition: string
  formulaTex?: string
}

interface Concept {
  id: string
  icon: string
  title: string
  formulaTex: string
  formulaLegend: string
  intuition: string
  examPattern: string
  keyTerms: KeyTerm[]
  traps: Trap[]
  color: string
}

const CONCEPTS: Concept[] = [
  {
    id: 'variance',
    icon: '📊',
    title: 'Variance Analysis',
    formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b',
    formulaLegend: 'N_a = actual units sold, N_b = budgeted units sold, CM_b = budgeted contribution margin per unit',
    intuition: 'Break the gap between budgeted and actual profit into its underlying causes: units sold, selling price charged, production efficiency, and input costs. Each variance tells you which driver is responsible for the deviation.',
    examPattern: 'Given a Budget versus Actual table with unit-level data, build a waterfall chart that traces the path from Budgeted Profit to Actual Profit, with each variance shown as a step.',
    keyTerms: [
      {
        term: 'Volume Variance',
        definition: 'Measures the profit impact of selling more or fewer units than budgeted. Computed at budgeted per-unit economics so it isolates the pure volume effect without contamination from price or cost changes.',
        formulaTex: 'V_{vol} = (N_a - N_b) \\times CM_b',
      },
      {
        term: 'Selling Price Variance',
        definition: 'Measures the revenue impact of charging a different price than budgeted. Uses actual volume as the multiplier because the price difference only applies to units actually sold.',
        formulaTex: 'V_{price} = (P_a - P_b) \\times N_a',
      },
      {
        term: 'Efficiency Variance (Variable Cost)',
        definition: 'Measures whether more or fewer inputs were used per unit than planned. Valued at budgeted input prices so it isolates the quantity effect from the price effect. A favorable variance means fewer inputs per unit — but check whether quality was sacrificed.',
        formulaTex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a',
      },
      {
        term: 'Input Price Variance',
        definition: 'Measures the cost impact of paying more or less per unit of input than budgeted. Uses actual quantity consumed so it captures the full cost of the price difference on all inputs actually purchased.',
        formulaTex: 'V_{input} = -(C_a - C_b) \\times Q_a \\times N_a',
      },
      {
        term: 'Fixed Cost Variance',
        definition: 'A direct comparison of budgeted versus actual fixed costs. Fixed costs are never flexed with volume — if the budget said €800,000 and actual was €785,000, the variance is simply +€15,000 favorable.',
        formulaTex: 'V_{FC} = FC_b - FC_a',
      },
      {
        term: 'Flexible Budget',
        definition: 'A budget restated at actual volume. Variable costs are recalculated using actual units sold, but fixed costs remain at the original budgeted amount. The flexible budget is the correct benchmark for evaluating efficiency because it asks: given what we actually sold, what should our costs have been?',
      },
      {
        term: 'Inflation Adjustment',
        definition: 'When the budget was set before an inflation period, you must restate the budget at inflated prices before computing price and efficiency variances. This isolates the uncontrollable inflation effect from the controllable manager pricing decision.',
      },
    ],
    traps: [
      {
        title: 'Forgetting the Inflation Adjustment',
        explanation: 'When inflation occurs between the budget period and the actual period, the budgeted prices are no longer the correct benchmark. If you compute the selling price variance without adjusting for inflation first, the inflation effect gets mixed into the price variance, making it appear that the manager changed prices when in reality the general price level shifted.',
        example: 'Budget price = €29, inflation = 5%, actual price = €32. Without adjustment: price variance = (32 − 29) × N = overstated. With adjustment: inflation-adjusted budget = €30.45, real price variance = (32 − 30.45) × N = the true manager pricing decision.',
        formulaTex: 'V_{price}^{real} = (P_a - P_b \\times (1 + \\pi)) \\times N_a',
      },
      {
        title: 'Flexing Fixed Costs with Volume',
        explanation: 'In a flexible budget, only variable costs are restated at actual volume. Fixed costs stay at the original budgeted amount regardless of how many units were produced. A common exam mistake is to multiply fixed costs by actual volume or to "flex" them — this is wrong because fixed costs by definition do not change with production levels.',
        example: 'Budget FC = €800,000 with budget volume of 1,000 units. Actual volume is 900 units. The flexible budget FC is still €800,000, NOT €800,000 × (900/1,000) = €720,000.',
      },
      {
        title: 'Mixing Up Which Volume to Use',
        explanation: 'The volume variance uses budgeted per-unit margins. All other variances (price, efficiency, input price) use actual volume. This is because the volume variance isolates the volume effect at budget economics, while subsequent variances measure per-unit deviations applied to the units actually sold.',
        example: 'Volume variance = (actual units − budget units) × budget CM per unit. Price variance = (actual price − budget price) × actual units. Never use budget units for the price variance.',
      },
    ],
    color: '#7c3aed',
  },
  {
    id: 'relevance',
    icon: '⚖️',
    title: 'Relevance Analysis',
    formulaTex: '\\Delta CF = N(P - VC) \\quad \\Delta DP = N(P - VC - OH)',
    formulaLegend: 'CF = incremental cash flow, DP = incremental divisional profit, N = units, P = price, VC = variable cost, OH = allocated overhead per unit',
    intuition: 'The company cares about cash flows. The division manager cares about their divisional profit and loss statement. When allocated overhead that does not change in cash appears on the division income statement, it can make a profitable deal look unprofitable to the manager. This is goal incongruence.',
    examPattern: 'A new client offers to buy a quantity at a given price. Set up two columns: the company cash flow perspective versus the divisional profit perspective. Highlight any divergence between the two recommendations.',
    keyTerms: [
      {
        term: 'Relevant Cost',
        definition: 'A cost that satisfies two conditions: it must be a future cost (not sunk) and it must differ between the alternatives being considered. If a cost has already been incurred or will be incurred regardless of the decision, it is irrelevant.',
      },
      {
        term: 'Incremental Cash Flow',
        definition: 'The change in cash that results from accepting the order. Includes only revenues and variable costs that change. Allocated fixed costs and corporate overhead that exist regardless are excluded because they do not change in cash.',
        formulaTex: '\\Delta CF = N \\times (P - VC)',
      },
      {
        term: 'Divisional Profit',
        definition: 'The profit measure the division manager is evaluated on. It includes allocated corporate overhead even though this overhead does not change with the decision. This is why the manager may see a different picture than the company.',
        formulaTex: '\\Delta DP = N \\times (P - VC - OH)',
      },
      {
        term: 'Goal Incongruence',
        definition: 'When the management control system leads the manager to make a decision that is not in the best interest of the company. Typically caused by allocating costs that do not change with the decision onto the division income statement, flipping the sign of the manager calculation.',
      },
      {
        term: 'Opportunity Cost',
        definition: 'The contribution margin lost from the best alternative foregone. Only exists when a constraint is binding (full capacity). With spare capacity, the opportunity cost is zero. At full capacity, accepting a new order means rejecting an existing one — the lost margin from the displaced order is the opportunity cost.',
        formulaTex: 'OC = N_{displaced} \\times CM_{displaced}',
      },
      {
        term: 'Sunk Cost',
        definition: 'A cost already incurred that cannot be recovered regardless of the decision. Past investments, signed leases, and committed contracts are sunk. They should be excluded from the analysis entirely.',
      },
    ],
    traps: [
      {
        title: 'Including Allocated Overhead in Cash Flow Analysis',
        explanation: 'Corporate overhead is allocated to the division for reporting purposes, but it does not change when the division accepts or rejects an order. It is a fixed cost at the corporate level. Including it in the cash flow analysis makes a profitable deal appear unprofitable.',
        example: 'Order: 500 units at $25, VC = $18, OH = $5/unit. Company CF = 500 × (25 − 18) = +$3,500. Manager DP = 500 × (25 − 18 − 5) = +$1,000. Both accept here. But if price were $22: CF = +$2,000 (accept), DP = −$500 (reject). Goal incongruence.',
        formulaTex: '\\Delta CF = N(P - VC) > 0 \\quad \\text{but} \\quad \\Delta DP = N(P - VC - OH) < 0',
      },
      {
        title: 'Ignoring Opportunity Cost at Full Capacity',
        explanation: 'When the division has no spare capacity, accepting a new order means displacing an existing order. The contribution margin lost from the displaced order is the opportunity cost and must be added to the incremental cost. Many students forget this, treating the decision as if capacity were unlimited.',
        example: 'New order: 2,000 units at $45, VC = $30. Existing order: $50, VC = $30. Incremental benefit = 2,000 × (45 − 30) = $30,000. Opportunity cost = 2,000 × (50 − 30) = $40,000. Net = −$10,000. Reject.',
        formulaTex: '\\text{Net} = N \\times (P_{new} - VC) - N \\times (P_{existing} - VC)',
      },
    ],
    color: '#2563eb',
  },
  {
    id: 'costAllocation',
    icon: '🏗️',
    title: 'Cost Allocation and Pricing',
    formulaTex: 'P = (VC + \\frac{FC}{N_{base}}) \\times (1 + m)',
    formulaLegend: 'VC = variable cost per unit, FC = total fixed costs, N_{base} = allocation base (capacity or actual volume), m = markup percentage',
    intuition: 'The method you choose for allocating fixed costs determines the product price floor. Allocating over practical capacity avoids the death spiral, where a price increase leads to lower volume, which raises the cost per unit, which triggers another price increase.',
    examPattern: 'Compare using practical capacity versus actual volume as the allocation base. Show the resulting cost-plus price under each method and explain whether it incentivizes product dumping or cross-subsidization.',
    keyTerms: [
      {
        term: 'Death Spiral',
        definition: 'A self-reinforcing loop where falling volume leads to rising unit costs (because fixed costs are spread over fewer units), which leads to higher prices, which leads to further volume decline, which raises unit costs even more. The cycle continues until the product is priced out of the market.',
        formulaTex: 'N \\downarrow \\to \\frac{FC}{N} \\uparrow \\to P \\uparrow \\to N \\downarrow \\to \\ldots',
      },
      {
        term: 'Capacity-Based Allocation',
        definition: 'Divides total fixed costs by practical capacity (the maximum sustainable production level). This gives a stable cost per unit that does not change with actual demand. The idle capacity cost is absorbed by the company rather than loaded onto products. This breaks the death spiral.',
        formulaTex: 'FC_{unit} = \\frac{FC}{N_{cap}}',
      },
      {
        term: 'Actual-Volume Allocation',
        definition: 'Divides total fixed costs by actual units produced. When demand drops, the cost per unit rises because the same total cost is spread over fewer units. This is the allocation method that triggers the death spiral.',
        formulaTex: 'FC_{unit} = \\frac{FC}{N_{actual}}',
      },
      {
        term: 'Cross-Subsidization',
        definition: 'Occurs when one product or customer is overcharged and another is undercharged because the allocation base does not reflect actual resource consumption. Activity-based costing reveals this by using multiple cost drivers instead of a single volume-based measure.',
      },
      {
        term: 'Idle Capacity Cost',
        definition: 'The portion of fixed costs attributable to unused capacity. Under capacity-based allocation, this cost is absorbed by the company rather than charged to products. Under actual-volume allocation, it is implicitly loaded onto each unit produced.',
        formulaTex: 'FC_{idle} = FC \\times (1 - \\frac{N_a}{N_{cap}})',
      },
    ],
    traps: [
      {
        title: 'Death Spiral from Actual-Volume Allocation',
        explanation: 'When fixed costs are allocated over actual volume and demand drops, the cost per unit rises mechanically. If the company uses cost-plus pricing, this higher cost leads to a higher price, which causes further demand loss. The spiral accelerates: each round of price increases drives more customers away.',
        example: 'FC = $100,000, capacity = 10,000 units, actual = 8,000. Actual allocation: FC/unit = $12.50. Price = (5 + 12.50) × 1.2 = $21.00. Capacity allocation: FC/unit = $10.00. Price = (5 + 10) × 1.2 = $18.00. The $3 gap widens further if demand drops to 6,000.',
        formulaTex: 'P_{actual} = (VC + \\frac{FC}{N_a}) \\times (1+m) \\quad P_{cap} = (VC + \\frac{FC}{N_{cap}}) \\times (1+m)',
      },
      {
        title: 'Including Idle Capacity in the Full Cost',
        explanation: 'When full cost includes idle capacity (because the denominator is actual volume rather than capacity), the resulting price is artificially inflated above the competitive market price. This makes the product look expensive when in reality the excess cost comes from underutilized capacity, not from the product itself.',
        example: 'A factory at 60% utilization allocates FC over actual output, inflating cost/unit by 67% compared to capacity-based. The "full cost" price exceeds competitor prices, losing more sales, which lowers utilization further.',
      },
    ],
    color: '#d97706',
  },
  {
    id: 'transfer',
    icon: '🔄',
    title: 'Transfer Pricing',
    formulaTex: 'TP_{min} = VC_S + OC_S \\quad TP_{max} = P_{ext} - VC_B',
    formulaLegend: 'TP_{min} = seller minimum price, TP_{max} = buyer maximum price, VC_S = seller variable cost, OC_S = seller opportunity cost, P_{ext} = buyer external selling price, VC_B = buyer other variable costs',
    intuition: 'The transfer price must leave incremental profit on the table for both the selling and buying division. When corporate overhead is allocated on a per-unit-sold basis, it inflates the seller floor price and can cause the congruence zone to disappear entirely.',
    examPattern: 'Division A supplies Division B. Find the minimum and maximum transfer price for goal congruence. Then test standard methods: variable cost, full cost, cost-plus, and market price. Show each division incremental profit at each transfer price.',
    keyTerms: [
      {
        term: 'Seller Minimum Transfer Price (Floor)',
        definition: 'The lowest price the selling division will accept. Equals their incremental cost of production plus any opportunity cost from forgoing external sales. With spare capacity, opportunity cost is zero, so the floor is just the variable cost.',
        formulaTex: 'TP_{min} = VC_S + OC_S',
      },
      {
        term: 'Buyer Maximum Transfer Price (Ceiling)',
        definition: 'The highest price the buying division will pay. Equals the external selling price to end customers minus all other variable costs the buyer incurs beyond the transfer price. The buyer will not pay more than what they can earn by selling externally.',
        formulaTex: 'TP_{max} = P_{ext} - VC_B',
      },
      {
        term: 'Goal Congruence Zone',
        definition: 'The range of transfer prices between the seller minimum and buyer maximum where internal trade benefits both divisions and the company. If the minimum exceeds the maximum, no congruent transfer price exists and profitable internal trade will not occur.',
        formulaTex: 'TP_{min} \\leq TP \\leq TP_{max}',
      },
      {
        term: 'Corporate Overhead Distortion',
        definition: 'When corporate overhead is allocated per unit sold, it acts as a variable cost for both divisions even though it does not represent a real incremental cash cost. For the seller, it inflates the floor. For the buyer, it compresses the ceiling. This double squeeze can eliminate the congruence zone entirely.',
      },
      {
        term: 'Full-Cost Transfer Price',
        definition: 'Transfer price set at variable cost plus allocated fixed costs plus a markup. Often fails because the fixed cost allocation inflates the price above what the buyer can afford, blocking trade that would create positive cash flows for the company.',
        formulaTex: 'TP_{FC} = (VC + \\frac{FC}{N}) \\times (1 + m)',
      },
    ],
    traps: [
      {
        title: 'Corporate Overhead Per Unit Destroying the Congruence Zone',
        explanation: 'When corporate overhead is charged per unit sold, it creates a phantom variable cost for both the seller and the buyer. The seller floor rises because each unit triggers an overhead charge. The buyer ceiling drops because overhead is also charged on the purchase. This double squeeze can eliminate the congruence zone entirely, blocking internal trade that creates positive company cash flows.',
        example: 'Seller VC = €10, OH = €3/unit, Buyer external price = €25, Buyer VC = €5, OH = €3/unit. Without OH: range = €10 to €20. With OH: range = €13 to €17. Zone shrinks by €6. If OH were €6/unit: floor = €16, ceiling = €14. No zone exists.',
        formulaTex: 'TP_{min} = VC_S + OH_S \\quad TP_{max} = P_{ext} - VC_B - OH_B',
      },
      {
        title: 'Full-Cost Transfer Price Above Buyer External Price',
        explanation: 'When the transfer price is set at full cost plus markup, and the full cost includes allocated fixed costs and overhead, the resulting TP can exceed what the buyer charges their external customers. The buyer would lose money on every unit — they rationally refuse the trade even though the company would benefit.',
        example: 'Seller full cost = $2,400, markup 10%, TP = $2,640. Buyer sells externally at $2,000. The buyer loses $640 per unit. The trade dies despite generating +$1,160 in company cash flow per unit.',
      },
      {
        title: 'Forgetting Opportunity Cost When Seller Is at Full Capacity',
        explanation: 'When the seller has no spare capacity, producing for the internal buyer means displacing external sales. The lost contribution margin from those displaced sales is the opportunity cost and must be added to the seller minimum. Students often assume the floor is always just the variable cost, forgetting to check whether the seller has spare capacity.',
        example: 'Seller VC = €15.50, displaced external order earns CM = €18.50 per pair on 40,000 pairs. OC = 40,000 × 18.50 = €740,000. Spread over 60,000 transfer units: OC/unit = €12.33. Floor = 15.50 + 12.33 = €27.83, not €15.50.',
        formulaTex: 'TP_{min} = VC_S + \\frac{N_{displaced} \\times CM_{displaced}}{N_{transfer}}',
      },
    ],
    color: '#d97706',
  },
  {
    id: 'ri',
    icon: '📈',
    title: 'Residual Income and Investment',
    formulaTex: 'RI = DP - r \\times BV_0',
    formulaLegend: 'RI = residual income, DP = divisional profit after depreciation, r = cost of capital rate, BV_0 = book value of assets at beginning of period',
    intuition: 'Residual income charges the division for the capital it uses. The depreciation method does not change total cash flows over the life of the investment, but it shifts the timing of reported profit and manager bonuses across years, creating powerful timing incentives.',
    examPattern: 'Given an investment amount, a useful life, and annual operating profit, build a year-by-year table showing: Book Value, Divisional Profit after Depreciation, Residual Income, and Bonus. Compare the results under straight-line versus accelerated versus delayed depreciation.',
    keyTerms: [
      {
        term: 'Residual Income',
        definition: 'Divisional profit minus a capital charge for the assets the division uses. A positive RI means the division earns more than its cost of capital. Unlike ROI (a ratio), RI correctly accepts any project earning above the hurdle rate.',
        formulaTex: 'RI = DP - r \\times BV_0',
      },
      {
        term: 'Capital Charge',
        definition: 'The minimum return the company requires on the capital tied up in divisional assets. Computed as the cost of capital rate multiplied by the book value of assets at the beginning of the period. As the asset depreciates, the book value shrinks and so does the capital charge.',
        formulaTex: '\\text{Capital Charge} = r \\times BV_0',
      },
      {
        term: 'Return on Investment (ROI)',
        definition: 'A ratio (divisional profit divided by book value). The problem with ROI: a division earning 20% ROI will reject a new project earning 15% (above the 10% cost of capital) because it would lower the blended ratio. RI avoids this problem.',
        formulaTex: 'ROI = \\frac{DP}{BV_0}',
      },
      {
        term: 'Divisional Profit',
        definition: 'Operating cash flow minus depreciation. Depreciation is a non-cash charge that allocates the investment cost over its useful life. Different depreciation methods (straight-line, accelerated, delayed) produce different divisional profits in each year even though total cash flows are identical.',
        formulaTex: 'DP = \\Delta CF - Depr',
      },
      {
        term: 'Moving-Target Bonus',
        definition: 'A bonus system where the target for next year is based on this year actual performance. If the manager performs well, next year target ratchets up, making the bonus harder to earn. This creates a perverse incentive to deliberately hold back performance.',
      },
    ],
    traps: [
      {
        title: 'Using End-of-Year Book Value Instead of Beginning',
        explanation: 'The capital charge uses the book value at the beginning of the period, not the end. The manager had use of the asset for the full period and should be charged accordingly. Using end-of-year book value would understate the charge because depreciation has already reduced the asset value.',
        example: 'Investment = $420,000, Year 1 depreciation = $140,000. Beginning BV = $420,000. End BV = $280,000. Capital charge should be 10% × $420,000 = $42,000, NOT 10% × $280,000 = $28,000.',
      },
      {
        title: 'Positive NPV but Negative Year 1 Residual Income',
        explanation: 'A value-creating investment can have negative RI in early years because the capital charge on the high initial book value exceeds the thin divisional profit after depreciation. This discourages managers from investing even though the project creates company value. The RI improves each year as book value declines, but the Year 1 penalty is enough to deter a short-tenure manager.',
        example: 'Investment = $420,000, annual CF = $150,000, depreciation = $140,000, DP = $10,000. Year 1 RI = 10,000 − 10% × 420,000 = −$32,000. Total cash flow over 3 years = +$30,000 (positive NPV), but Year 1 RI is deeply negative.',
        formulaTex: 'RI_1 = 10{,}000 - 0.10 \\times 420{,}000 = -32{,}000',
      },
      {
        title: 'Depreciation Changes Bonus Timing, Not Total Value',
        explanation: 'Straight-line, accelerated, and delayed depreciation all produce the same total cash flows and the same total RI over the investment life. But they shift WHEN the bonus is earned. Accelerated depreciation front-loads the depreciation expense, which reduces early-year DP but also reduces book value faster, improving RI sooner. Delayed depreciation does the opposite. The manager choice of depreciation method is really a choice about bonus timing.',
        example: 'Same investment under straight-line: bonus = $0 / $1,400 / $1,400. Under delayed depreciation: bonus = $22,000 / $0 / $0. Total is similar but the timing is completely different.',
      },
    ],
    color: '#16a34a',
  },
  {
    id: 'critique',
    icon: '🔍',
    title: 'System Critique Framework',
    formulaTex: '\\text{Problem} \\to \\text{Behavioral Distortion} \\to \\text{Recommended Fix}',
    formulaLegend: 'For each of 6 dimensions: name the specific accounting issue, explain the behavioral distortion it creates for the manager, then propose a concrete alternative',
    intuition: 'Part 5 is synthesis. You are not solving for a number. You are diagnosing whether the management control system aligns manager behavior with company-wide value creation. For each dimension, you must name the specific behavioral distortion, not just describe the accounting mechanism.',
    examPattern: 'The exam asks you to analyze several elements of the control system. For each dimension: state what the problem is, explain what behavior it causes in the manager, and recommend what would fix the distortion.',
    keyTerms: [
      {
        term: 'The Six Dimensions',
        definition: 'Every system critique should cover: (1) Variance analysis design — is the budget realistic? (2) Cost allocation — does it cause cross-subsidization or death spiral? (3) Pricing policy — cost-based or market-based? (4) Transfer pricing — does it achieve goal congruence? (5) Performance measurement — profit center or investment center, ROI or RI? (6) Incentive design — moving target? Short-termism risk?',
      },
      {
        term: 'Controllability Principle',
        definition: 'The metric used to evaluate a manager should only include factors within their control. Exchange rate movements, corporate-level decisions, and market size changes should be excluded. Violating this principle makes the evaluation unfair and distorts incentives.',
      },
      {
        term: 'Goal Congruence',
        definition: 'The actions that maximize the manager metric are also the actions that maximize company value. This is the ultimate test of any management control system. If the manager rationally acts against the company interest, the system is broken.',
      },
    ],
    traps: [
      {
        title: 'Describing the Accounting Without Naming the Behavioral Consequence',
        explanation: 'Stating "the transfer pricing policy uses full cost plus markup" earns no marks by itself. You must explain the behavioral distortion: "This causes the buyer to reject internal trade because the TP of €2,640 exceeds the external price of €2,000, resulting in lost company cash flows of €116,000." Always state the "so what" in terms of manager incentives.',
        example: 'Bad answer: "The TP is full cost plus 10%." Good answer: "The full-cost TP of €2,640 exceeds the buyer external price of €2,000, causing the buyer to refuse internal trade. This destroys €116,000 in company cash flows. Recommendation: use negotiated TP within the range €840 to €2,000."',
      },
      {
        title: 'Corporate Overhead as Root Cause Across Multiple Dimensions',
        explanation: 'Per-unit corporate overhead allocation is often the single root cause that cascades across multiple dimensions. It inflates transfer prices (Part 3), distorts relevance analysis (Part 2), and appears in the performance measure (Part 4). In the critique, you should identify this as a systemic issue, not just a problem in one dimension.',
        example: 'OH = $5/unit. In Part 2: flips the manager decision from accept to reject. In Part 3: pushes seller floor above buyer ceiling. In Part 4: inflates the divisional cost base, distorting the bonus. One allocation choice cascades everywhere.',
      },
      {
        title: 'Moving-Target Bonus Causing Sandbagging',
        explanation: 'When the bonus target is set based on prior year performance, a manager who performs well this year raises the bar for next year. Rational managers learn to deliver just enough to earn the bonus but not so much that next year becomes impossible. This rewards mediocrity and punishes excellence.',
        example: 'Year 1: RI = −€400,000. Year 2: RI = −€200,000 (improvement of €200,000 → bonus = 10% × 200,000 = €20,000). Year 3: RI = €0 (improvement of €200,000 → bonus = €20,000). If the manager had achieved RI = €0 in Year 2 instead, Year 3 target would require RI > €0, making it much harder.',
      },
    ],
    color: '#e11d48',
  },
]

export default function Concepts() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Six core concepts that appear on every exam. Each card includes the key formula, term definitions, and detailed trap explanations.
      </p>

      {CONCEPTS.map((c) => (
        <div
          key={c.id}
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}
        >
          {/* Card header */}
          <div style={{
            padding: '18px 20px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <span style={{ fontSize: '26px' }}>{c.icon}</span>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {c.title}
            </h3>
          </div>

          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Formula */}
            <div>
              <p style={{ margin: '0 0 8px', fontSize: '11px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Core Formula
              </p>
              <Formula tex={c.formulaTex} legend={c.formulaLegend} />
            </div>

            {/* Intuition */}
            <div>
              <p style={{ margin: '0 0 6px', fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                The Intuition
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {c.intuition}
              </p>
            </div>

            {/* Exam pattern */}
            <div style={{
              background: 'var(--card-hover)',
              borderRadius: '10px',
              padding: '14px 16px',
            }}>
              <p style={{ margin: '0 0 6px', fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Exam Pattern
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {c.examPattern}
              </p>
            </div>

            {/* Key Terms */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '11px', color: c.color, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Key Terms Explained
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {c.keyTerms.map((term, i) => (
                  <div key={i} style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderLeft: `4px solid ${c.color}`,
                    borderRadius: '0 10px 10px 0',
                    padding: '14px 16px',
                  }}>
                    <p style={{ margin: '0 0 6px', fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {term.term}
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {term.definition}
                    </p>
                    {term.formulaTex && (
                      <div style={{ marginTop: '10px' }}>
                        <Formula tex={term.formulaTex} block={false} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Traps — Detailed */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '11px', color: 'var(--red)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ⚠ Common Traps — Explained
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {c.traps.map((trap, i) => (
                  <div key={i} style={{
                    background: 'var(--red-soft)',
                    border: '1px solid var(--red)',
                    borderRadius: '10px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      ⚠ {trap.title}
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {trap.explanation}
                    </p>
                    {trap.example && (
                      <div style={{
                        background: 'var(--card)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                      }}>
                        <p style={{ margin: '0 0 4px', fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          Example
                        </p>
                        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                          {trap.example}
                        </p>
                      </div>
                    )}
                    {trap.formulaTex && (
                      <Formula tex={trap.formulaTex} block={false} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Sandbox */}
            {c.id === 'variance' && <VarianceSandbox />}
          </div>
        </div>
      ))}
    </div>
  )
}
