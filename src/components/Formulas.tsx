import Formula from './Formula'

const SECTIONS = [
  {
    title: 'Variance Analysis',
    color: 'var(--accent)',
    formulas: [
      { name: 'Volume Variance', tex: 'V_{vol} = (N_a - N_b) \\times CM_b', legend: 'N_a = actual units, N_b = budget units, CM_b = budgeted contribution margin per unit', note: 'Favorable when actual > budget' },
      { name: 'Selling Price Variance', tex: 'V_{price} = (P_a - P_b) \\times N_a', legend: 'P_a = actual price, P_b = budget price, N_a = actual volume', note: 'Compare vs inflation-adjusted budget when applicable' },
      { name: 'Efficiency Variance', tex: 'V_{eff} = -(Q_a - Q_b) \\times C_b \\times N_a', legend: 'Q_a = actual input/unit, Q_b = budget input/unit, C_b = budget cost per input', note: '' },
      { name: 'Input Price Variance', tex: 'V_{input} = -(C_a - C_b) \\times Q_a \\times N_a', legend: 'C_a = actual input cost, C_b = budget input cost', note: '' },
      { name: 'Fixed Cost Variance', tex: 'V_{FC} = FC_b - FC_a', legend: 'Direct comparison. Not flexed with volume.', note: '' },
    ],
  },
  {
    title: 'Contribution Margin',
    color: 'var(--blue)',
    formulas: [
      { name: 'Contribution Margin per Unit', tex: 'CM = P - VC', legend: 'P = selling price, VC = variable cost per unit', note: '' },
      { name: 'Break-Even Volume', tex: 'N_{BE} = \\frac{FC}{CM}', legend: 'FC = total fixed costs', note: '' },
      { name: 'Incremental CM (Special Order)', tex: '\\Delta CM = N \\times (P - VC)', legend: 'Accept if > 0 (company view)', note: '' },
    ],
  },
  {
    title: 'Transfer Pricing',
    color: 'var(--amber)',
    formulas: [
      { name: 'Seller Minimum (Floor)', tex: 'TP_{min} = VC_S + OC_S', legend: 'VC_S = seller variable cost, OC_S = opportunity cost (0 if spare capacity)', note: '' },
      { name: 'Buyer Maximum (Ceiling)', tex: 'TP_{max} = P_{ext} - VC_B', legend: 'P_ext = external price, VC_B = buyer other variable costs', note: '' },
      { name: 'Goal Congruence', tex: 'TP_{min} \\leq TP \\leq TP_{max}', legend: 'If TP_min > TP_max, no congruent TP exists', note: '' },
    ],
  },
  {
    title: 'Residual Income',
    color: 'var(--green)',
    formulas: [
      { name: 'Residual Income', tex: 'RI = DP - r \\times BV_0', legend: 'DP = divisional profit, r = cost of capital, BV_0 = book value at start of period', note: '' },
      { name: 'ROI', tex: 'ROI = \\frac{DP}{BV_0}', legend: 'Risk: manager rejects +RI projects that lower ROI percentage', note: '' },
      { name: 'Straight-Line Depreciation', tex: 'Depr = \\frac{Cost}{Life}', legend: 'BV declines linearly → RI improves over time', note: '' },
    ],
  },
  {
    title: 'Cost-Plus Pricing',
    color: 'var(--pink)',
    formulas: [
      { name: 'Full-Cost Price', tex: 'P = (VC + FC_{alloc}) \\times (1 + markup)', legend: 'FC_alloc = fixed cost allocation per unit at chosen base', note: '' },
      { name: 'FC per Unit (Capacity)', tex: 'FC_{unit} = \\frac{FC}{N_{cap}}', legend: 'Avoids death spiral — idle capacity not charged to products', note: '' },
      { name: 'FC per Unit (Actual)', tex: 'FC_{unit} = \\frac{FC}{N_a}', legend: 'Death spiral risk: volume drops → cost/unit rises → price rises', note: '' },
    ],
  },
  {
    title: 'Key Decision Rules',
    color: 'var(--text-secondary)',
    formulas: [
      { name: 'Company Accepts If', tex: '\\Delta CF > 0', legend: 'Allocated overhead is irrelevant (does not change in cash)', note: '' },
      { name: 'Manager Accepts If', tex: '\\Delta DP > 0', legend: 'May include allocated OH → goal incongruence risk', note: '' },
    ],
  },
]

const REMEMBER_NOTES: Record<string, string> = {
  'Variance Analysis': 'Remember: Volume variance uses BUDGET margins. All other variances use ACTUAL volume.',
  'Transfer Pricing': 'Remember: The seller floor is their incremental cost. The buyer ceiling is their alternative. Corporate overhead inflates BOTH.',
  'Residual Income': 'Remember: Use BEGINNING of year book value. The capital charge shrinks as the asset depreciates.',
  'Cost-Plus Pricing': 'Remember: Capacity-based allocation prevents the death spiral. Actual-volume allocation causes it.',
}

const TEN_TRAPS = [
  { trap: 'Forgetting inflation adjustment', where: 'Part 1 (Variance)', fix: 'Insert the inflation step right after volume. Restate budget prices at inflated level before computing price and efficiency variances.' },
  { trap: 'Including allocated overhead in cash flow analysis', where: 'Part 2 (Relevance)', fix: 'Allocated overhead does not change in cash. Exclude it from the company cash flow calculation. Include it only in the divisional profit calculation.' },
  { trap: 'Death spiral from actual-volume allocation', where: 'Part 2 (Pricing)', fix: 'Use capacity-based allocation so the fixed cost per unit stays stable regardless of demand fluctuations.' },
  { trap: 'Corporate overhead per unit inflating the transfer price floor', where: 'Part 3 (Transfer Pricing)', fix: 'When computing the seller minimum, include only truly incremental costs. Corporate overhead per unit is a phantom variable cost.' },
  { trap: 'Full-cost transfer price above buyer external price', where: 'Part 3 (Transfer Pricing)', fix: 'Check whether the policy transfer price falls within the goal congruence range. If it exceeds the buyer maximum, the trade will not occur.' },
  { trap: 'Ignoring opportunity cost at full capacity', where: 'Part 2 and Part 3', fix: 'When the seller has no spare capacity, add the lost contribution margin from displaced sales to the seller minimum transfer price.' },
  { trap: 'Using end-of-year book value for residual income', where: 'Part 4 (Residual Income)', fix: 'Always use beginning-of-year book value for the capital charge. The manager had use of the asset for the full period.' },
  { trap: 'Positive net present value but negative residual income in Year 1', where: 'Part 4 (Investment)', fix: 'This is a known distortion of residual income under straight-line depreciation. The capital charge on the high initial book value exceeds the thin divisional profit.' },
  { trap: 'Describing the accounting problem without naming the behavioral distortion', where: 'Part 5 (Critique)', fix: 'Always state the "so what" in terms of manager incentives. For example: "The full-cost transfer price causes the buyer to reject a trade that creates positive cash flow for the company."' },
  { trap: 'Moving-target bonus causing sandbagging', where: 'Part 5 (Incentives)', fix: 'When the bonus target is based on prior year performance, a strong year raises next year bar. Propose external benchmarks or multi-year bonus pools instead.' },
]

export default function Formulas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Complete formula reference organized by concept.
        </p>
        <button
          onClick={() => window.print()}
          style={{
            padding: '8px 16px', background: 'var(--accent)', border: 'none',
            borderRadius: '8px', color: '#ffffff', fontSize: '13px', fontWeight: 600,
            cursor: 'pointer', flexShrink: 0,
          }}
        >
          Print
        </button>
      </div>

      {SECTIONS.map((section) => (
        <div key={section.title} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '4px', height: '18px', background: section.color, borderRadius: '2px' }} />
            <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{section.title}</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {section.formulas.map((f, i) => (
              <div key={i} style={{ padding: '14px 20px', borderBottom: i < section.formulas.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>{f.name}</p>
                <Formula tex={f.tex} legend={f.legend} />
                {f.note && (
                  <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f.note}</p>
                )}
              </div>
            ))}
            {REMEMBER_NOTES[section.title] && (
              <div style={{
                margin: '0 20px 14px',
                padding: '12px 16px',
                borderLeft: `4px solid ${section.color}`,
                background: 'var(--card-hover)',
                borderRadius: '0 8px 8px 0',
              }}>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 500 }}>
                  {REMEMBER_NOTES[section.title]}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* 10 Traps to Watch For */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '4px', height: '18px', background: 'var(--red)', borderRadius: '2px' }} />
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>10 Traps to Watch For</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px 16px', textAlign: 'left', borderBottom: '2px solid var(--border)', color: 'var(--text-muted)', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>Trap</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', borderBottom: '2px solid var(--border)', color: 'var(--text-muted)', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>Where</th>
                <th style={{ padding: '10px 16px', textAlign: 'left', borderBottom: '2px solid var(--border)', color: 'var(--text-muted)', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>How to Avoid</th>
              </tr>
            </thead>
            <tbody>
              {TEN_TRAPS.map((t, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--surface)' }}>
                  <td style={{ padding: '10px 16px', borderBottom: '1px solid var(--border-subtle)', color: 'var(--red)', fontWeight: 600, verticalAlign: 'top' }}>{t.trap}</td>
                  <td style={{ padding: '10px 16px', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{t.where}</td>
                  <td style={{ padding: '10px 16px', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-secondary)', lineHeight: 1.6, verticalAlign: 'top' }}>{t.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
