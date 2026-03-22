import VarianceSandbox from './VarianceSandbox'

const CONCEPTS = [
  {
    id: 'variance',
    icon: '📊',
    title: 'Variance Analysis',
    formula: 'Volume Variance = (Actual Units Sold − Budgeted Units Sold) × Budgeted Contribution Margin per Unit',
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
    formula: 'Accept the order if: Incremental Cash Flow is greater than zero (company view) AND Incremental Divisional Profit is greater than zero (manager view)',
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
    formula: 'Price = Variable Cost per Unit + Fixed Cost Allocation per Unit (at the chosen allocation base) + Markup Percentage',
    intuition: 'The method you choose for allocating fixed costs determines the product price floor. Allocating over practical capacity avoids the death spiral, where a price increase leads to lower volume, which raises the cost per unit, which triggers another price increase. Activity-based costing reveals the true profitability of each product or channel.',
    examPattern: 'Compare using practical capacity versus actual volume as the allocation base. Show the resulting cost-plus price under each method and explain whether it incentivizes product dumping or cross-subsidization.',
    traps: [
      'Capacity-based allocation means idle capacity cost is not charged to products. This prevents the death spiral.',
      'Actual-volume allocation means that if volume drops, the fixed cost per unit rises, the price goes up, and volume drops further in a reinforcing loop.',
    ],
    color: '#d97706',
  },
  {
    id: 'transfer',
    icon: '🔄',
    title: 'Transfer Pricing',
    formula: 'Minimum Transfer Price = Seller Variable Cost + Seller Opportunity Cost  |  Maximum Transfer Price = Buyer External Selling Price − Buyer Other Variable Costs',
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
    id: 'ri',
    icon: '📈',
    title: 'Residual Income and Investment',
    formula: 'Residual Income = Divisional Profit − (Cost of Capital × Book Value of Assets at Beginning of Period)',
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
    id: 'critique',
    icon: '🔍',
    title: 'System Critique Framework',
    formula: 'Structure your critique across six dimensions: Variance System → Cost Allocation System → Pricing Policy → Transfer Pricing Policy → Performance Measurement → Incentive Design',
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

export default function Concepts() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Six core concepts that appear on every exam. Each card includes the key formula, the underlying intuition, the exam pattern to recognize, and the traps to avoid.
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
          <div
            style={{
              padding: '18px 20px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <span style={{ fontSize: '26px' }}>{c.icon}</span>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {c.title}
            </h3>
          </div>

          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Formula */}
            <div style={{
              background: 'var(--accent-soft)',
              border: '1px solid var(--accent)',
              borderRadius: '10px',
              padding: '14px 16px',
              opacity: 0.95,
            }}>
              <p style={{ margin: '0 0 4px', fontSize: '11px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Formula
              </p>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.7, fontWeight: 500 }}>
                {c.formula}
              </p>
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

            {/* Traps */}
            <div>
              <p style={{ margin: '0 0 8px', fontSize: '11px', color: 'var(--red)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Traps and Common Mistakes
              </p>
              <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {c.traps.map((trap, i) => (
                  <li key={i} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {trap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Sandbox */}
            {c.id === 'variance' && <VarianceSandbox />}
          </div>
        </div>
      ))}
    </div>
  )
}
