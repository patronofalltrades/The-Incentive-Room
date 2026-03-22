const SECTIONS = [
  {
    title: 'Variance Analysis',
    color: '#7c3aed',
    formulas: [
      { name: 'Volume Variance', formula: '(Actual N − Budget N) × Budget CM per unit', note: 'Favorable if actual volume > budget' },
      { name: 'Price Variance', formula: '(Actual Price − Budget Price) × Actual Volume', note: 'Compare vs. inflation-adjusted budget price' },
      { name: 'Efficiency Variance', formula: '(Budget VC ratio − Actual VC ratio) × Actual Revenue', note: 'Or: (Budget units of input − Actual) × Std input price' },
      { name: 'Input Price Variance', formula: '(Budget input price − Actual input price) × Actual input qty', note: '' },
      { name: 'Fixed Cost Variance', formula: 'Budget FC − Actual FC', note: 'FC is NOT flexed with volume' },
    ],
  },
  {
    title: 'Contribution Margin',
    color: '#0ea5e9',
    formulas: [
      { name: 'CM per unit', formula: 'Selling Price − Variable Cost per unit', note: '' },
      { name: 'CM ratio', formula: 'CM per unit / Selling Price', note: '' },
      { name: 'Break-even volume', formula: 'Total Fixed Costs / CM per unit', note: '' },
      { name: 'Incremental CM (short-run accept)', formula: 'ΔRevenue − ΔVariable Costs', note: 'Accept if > 0 (company view)' },
    ],
  },
  {
    title: 'Transfer Pricing',
    color: '#f59e0b',
    formulas: [
      { name: 'TP Minimum (seller\'s floor)', formula: 'Seller VC per unit + Opportunity Cost per unit', note: 'Opp. cost = 0 if spare capacity exists' },
      { name: 'TP Maximum (buyer\'s ceiling)', formula: 'Buyer\'s external selling price − Buyer\'s other variable costs', note: 'Subtract any corporate OH charged to buyer' },
      { name: 'Goal Congruence Zone', formula: 'TP ∈ [TP_min, TP_max]', note: 'If TP_min > TP_max → no congruent TP exists' },
      { name: 'Full-cost TP', formula: 'Seller VC + Allocated FC per unit', note: 'Fails when FC allocation inflates floor above TP_max' },
    ],
  },
  {
    title: 'Residual Income & Investment',
    color: '#22c55e',
    formulas: [
      { name: 'Residual Income', formula: 'Divisional Profit − (Cost of Capital × Book Value of Assets)', note: 'Book value at START of period' },
      { name: 'ROI', formula: 'Divisional Profit / Book Value of Assets', note: 'Risk: manager rejects +RI projects if they lower ROI' },
      { name: 'Straight-line depreciation', formula: 'Cost / Useful Life', note: '' },
      { name: 'Book value (year t)', formula: 'Cost − Accumulated Depreciation', note: 'Book value declines → RI improves over time (SL)' },
    ],
  },
  {
    title: 'Cost-Plus Pricing',
    color: '#f43f5e',
    formulas: [
      { name: 'Full-cost price', formula: 'VC per unit + FC per unit (at allocation base) + Markup %', note: '' },
      { name: 'FC per unit (capacity base)', formula: 'Total FC / Practical Capacity', note: 'Avoids death spiral — idle capacity not charged to products' },
      { name: 'FC per unit (actual base)', formula: 'Total FC / Actual Volume', note: 'Death spiral risk if volume falls' },
    ],
  },
  {
    title: 'Key Decision Rules',
    color: '#8888aa',
    formulas: [
      { name: 'Company accepts if', formula: 'Incremental Cash Flow > 0', note: 'Allocated OH = irrelevant (doesn\'t change in cash)' },
      { name: 'Manager accepts if', formula: 'Incremental Divisional Profit > 0', note: 'May include allocated OH → goal incongruence risk' },
      { name: 'Good TP method criteria', formula: '1. Goal congruence  2. Performance measurement  3. Autonomy', note: 'No single method satisfies all three simultaneously' },
    ],
  },
]

export default function Formulas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#8888aa' }}>
        Complete formula reference. Organized by concept.
      </p>

      {SECTIONS.map((section) => (
        <div key={section.title} style={{ background: '#12121a', border: '1px solid #2a2a3a', borderRadius: '12px', overflow: 'hidden' }}>
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid #2a2a3a',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{ width: '3px', height: '16px', background: section.color, borderRadius: '2px' }} />
            <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#f0f0f8' }}>{section.title}</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {section.formulas.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: '12px 16px',
                  borderBottom: i < section.formulas.length - 1 ? '1px solid #1e1e2a' : 'none',
                }}
              >
                <p style={{ margin: '0 0 4px', fontSize: '11px', color: '#8888aa', fontWeight: 500 }}>{f.name}</p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#e0e0f0',
                    lineHeight: 1.5,
                  }}
                >
                  {f.formula}
                </p>
                {f.note && (
                  <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#8888aa', lineHeight: 1.4 }}>
                    ↳ {f.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div
        style={{
          background: '#12121a',
          border: '1px solid #2a2a3a',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span style={{ fontSize: '20px' }}>🖨️</span>
        <div>
          <p style={{ margin: '0 0 2px', fontSize: '13px', fontWeight: 600, color: '#f0f0f8' }}>Print Formula Sheet</p>
          <p style={{ margin: 0, fontSize: '12px', color: '#8888aa' }}>Use your browser's Print → Save as PDF for a clean one-pager.</p>
        </div>
      </div>
    </div>
  )
}
