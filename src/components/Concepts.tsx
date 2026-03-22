const CONCEPTS = [
  {
    id: 'variance',
    icon: '📊',
    title: 'Variance Analysis',
    formula: 'Vol Var = (Actual N − Budget N) × Budget CM/unit',
    intuition: 'Break the gap between budget and actual profit into causes: volume sold, price charged, efficiency in production, and input costs. Each variance tells you who is responsible.',
    examPattern: 'Given a Budget vs. Actual table → build a waterfall from Budget Profit to Actual Profit.',
    traps: ['Adjust budget for inflation BEFORE computing price and efficiency variances', 'FC variance = Actual FC − Budget FC (not volume-driven)', 'Flexible budget FC stays fixed; only VC flexes with volume'],
    color: '#7c3aed',
  },
  {
    id: 'relevance',
    icon: '⚖️',
    title: 'Relevance Analysis',
    formula: 'Accept if: Incremental CF > 0 (company) AND Incremental Div Profit > 0 (manager)',
    intuition: 'The company cares about cash. The manager cares about their P&L. Allocated overhead that doesn\'t change in cash can make a profitable deal look bad to the manager — goal incongruence.',
    examPattern: '"New offer at $X for Y units." Two columns: company CF vs. divisional profit. Highlight where they diverge.',
    traps: ['Allocated OH appears as a cost to the division but is irrelevant to the company', 'Check whether existing capacity can absorb the order (no opportunity cost) vs. full capacity (there is one)'],
    color: '#0ea5e9',
  },
  {
    id: 'costAllocation',
    icon: '🏗️',
    title: 'Cost Allocation & Pricing',
    formula: 'Price = VC + FC/unit (at chosen base) + Markup %',
    intuition: 'How you allocate fixed costs determines the price floor. Allocating over capacity avoids the death spiral (price hike → volume drop → higher cost/unit → price hike). ABC reveals true product profitability.',
    examPattern: '"Use capacity vs. actual volume as allocation base." Show the cost-plus price and whether it incentivizes dumping or cross-subsidization.',
    traps: ['Capacity-based allocation: idle capacity NOT charged to products → no death spiral', 'Actual-volume allocation: volume drop → cost per unit rises → price rises → more volume drop'],
    color: '#f59e0b',
  },
  {
    id: 'transfer',
    icon: '🔄',
    title: 'Transfer Pricing',
    formula: 'TP_min = Seller VC + Seller Opp. Cost   |   TP_max = Buyer\'s external CM − Buyer\'s other costs',
    intuition: 'The transfer price must leave profit on the table for both divisions. Corporate OH allocated per unit inflates the seller\'s floor, potentially making the congruence zone disappear.',
    examPattern: '"Division A supplies Division B." Find the TP range. Test: variable cost TP, full cost TP, market price. Show each division\'s incremental profit at each TP.',
    traps: ['Corporate OH per unit sold = fake variable cost for the seller', 'If TP_min > TP_max there is NO goal-congruent TP under that system', 'Market TP works only if external market exists and is competitive'],
    color: '#f59e0b',
  },
  {
    id: 'ri',
    icon: '📈',
    title: 'Residual Income & Investment',
    formula: 'RI = Divisional Profit − (Cost of Capital × Book Value of Assets)',
    intuition: 'RI charges the division for the capital it uses. Depreciation method doesn\'t change total cash flows — but it shifts profit (and bonus) across years, creating timing incentives.',
    examPattern: '"$X investment, N-year life, annual operating profit Y." Build year-by-year table: Book Value | Div Profit | RI | Bonus. Compare straight-line vs. accelerated vs. delayed depreciation.',
    traps: ['Use book value at START of year for RI calculation', 'Accelerated depreciation → lower early book value → higher early RI → frontloaded bonuses', 'Moving-target bonus: a good year raises the bar for next year → disincentive to outperform'],
    color: '#22c55e',
  },
  {
    id: 'critique',
    icon: '🔍',
    title: 'System Critique Framework',
    formula: 'Cover: Variance System → Cost System → Pricing → TP → Perf. Measure → Incentives',
    intuition: 'Part 5 is synthesis. You\'re not solving for a number — you\'re diagnosing whether the control system aligns manager behavior with company value. Name the distortion, not just the accounting issue.',
    examPattern: '"Analyze the following elements." Structure answer by dimension. For each: what is the problem → what behavior does it cause → what would fix it.',
    traps: ['Don\'t just describe the system — say what incentive it creates', '"Corporate OH per unit" → inflates TP floor → divisions refuse internal trade → lost company profit', 'Moving target bonus → managers sandbag in good years'],
    color: '#f43f5e',
  },
]

export default function Concepts() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#8888aa' }}>
        6 core concepts — tap a card to see the formula, intuition, and exam traps.
      </p>

      {CONCEPTS.map((c) => (
        <div
          key={c.id}
          style={{
            background: '#12121a',
            border: `1px solid #2a2a3a`,
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {/* Card header */}
          <div
            style={{
              padding: '16px',
              borderBottom: '1px solid #2a2a3a',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '24px' }}>{c.icon}</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#f0f0f8' }}>
                {c.title}
              </h3>
            </div>
          </div>

          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Formula */}
            <div style={{ background: '#0a0a0f', border: `1px solid ${c.color}33`, borderRadius: '8px', padding: '10px 14px' }}>
              <p style={{ margin: '0 0 2px', fontSize: '10px', color: c.color, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Formula</p>
              <p style={{ margin: 0, fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#e0e0f0', lineHeight: 1.6 }}>
                {c.formula}
              </p>
            </div>

            {/* Intuition */}
            <div>
              <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#8888aa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>The Intuition</p>
              <p style={{ margin: 0, fontSize: '13px', color: '#c4c4d8', lineHeight: 1.6 }}>{c.intuition}</p>
            </div>

            {/* Exam pattern */}
            <div style={{ background: '#1a1a26', borderRadius: '8px', padding: '10px 14px' }}>
              <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#8888aa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Exam Pattern</p>
              <p style={{ margin: 0, fontSize: '12px', color: '#c4c4d8', lineHeight: 1.5 }}>{c.examPattern}</p>
            </div>

            {/* Traps */}
            <div>
              <p style={{ margin: '0 0 6px', fontSize: '10px', color: '#ef4444', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>🪤 Traps & Tips</p>
              <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {c.traps.map((trap, i) => (
                  <li key={i} style={{ fontSize: '12px', color: '#fca5a5', lineHeight: 1.5 }}>
                    {trap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
