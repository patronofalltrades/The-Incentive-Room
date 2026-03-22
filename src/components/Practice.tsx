const PROBLEMS = [
  {
    id: 'variance-basic',
    title: 'Le Bistrot Parisien',
    partType: 'Part 1 · Variance Analysis',
    difficulty: 'Easy',
    difficultyColor: '#22c55e',
    scenario: 'Budget: 1,000 covers at €45 avg price, VC €22/cover, FC €12,000. Actual: 1,100 covers at €43 avg price, VC €24/cover, FC €11,800.',
    questions: [
      { text: 'Compute the Volume Variance', answer: '(1,100 − 1,000) × (45 − 22) = +€2,300 F' },
      { text: 'Compute the Price Variance', answer: '(43 − 45) × 1,100 = −€2,200 U' },
      { text: 'Compute the Variable Cost Variance', answer: '(22 − 24) × 1,100 = −€2,200 U' },
    ],
    patternNote: 'Budget vs. Actual table with unit data → Volume × Budget CM, then price and efficiency deltas.',
    trap: 'Don\'t forget to flex the VC with ACTUAL volume when computing the efficiency variance.',
  },
  {
    id: 'tp-range',
    title: 'Cipriani & Lombardi — TP Range',
    partType: 'Part 3 · Transfer Pricing',
    difficulty: 'Medium',
    difficultyColor: '#f59e0b',
    scenario: 'Division A (seller): VC €30/unit, allocated FC €15/unit, capacity available. Division B (buyer): external selling price €90, other VC €20. Corporate OH: €5/unit based on units sold company-wide.',
    questions: [
      { text: 'What is the minimum TP (seller\'s floor)?', answer: 'Seller\'s incremental cost = VC €30 + Corporate OH €5 = €35 (FC is sunk)' },
      { text: 'What is the maximum TP (buyer\'s ceiling)?', answer: 'Buyer\'s CM from external sale = €90 − €20 − €5 (corp OH on buyer) = €65' },
      { text: 'Is goal congruence achievable? What\'s the range?', answer: 'Yes. TP range: [€35, €65]. Any TP in this range leaves positive incremental profit for both.' },
    ],
    patternNote: 'Division A supplies Division B. Corporate OH allocated per unit → inflates floor. Find the zone.',
    trap: 'Full-cost TP (€30 + €15 = €45) would work here, but corporate OH must be added on top if it\'s charged per unit sold.',
  },
  {
    id: 'ri-depreciation',
    title: 'XtremeClimb — RI & Bonus',
    partType: 'Part 4 · Investment & RI',
    difficulty: 'Hard',
    difficultyColor: '#ef4444',
    scenario: 'Investment: €120,000, 3-year life, straight-line depreciation. Annual incremental operating profit (before depreciation): €60,000. Cost of capital: 12%. Bonus = 20% of RI if positive.',
    questions: [
      { text: 'Build the RI table for Year 1', answer: 'Book Value (start): €120k. Depr: €40k. Div Profit: €60k − €40k = €20k. RI = €20k − 12% × €120k = €20k − €14.4k = €5,600. Bonus = €1,120.' },
      { text: 'Build the RI table for Year 2', answer: 'Book Value (start): €80k. Div Profit: €20k. RI = €20k − 12% × €80k = €20k − €9.6k = €10,400. Bonus = €2,080.' },
      { text: 'Build the RI table for Year 3', answer: 'Book Value (start): €40k. Div Profit: €20k. RI = €20k − 12% × €40k = €20k − €4.8k = €15,200. Bonus = €3,040.' },
    ],
    patternNote: '$X investment over N years → CF → Div Profit → RI (charge CoC × book value) → Bonus.',
    trap: 'Use book value at the START of the year for RI. Same cash flows every year, but RI grows as book value declines.',
  },
]

export default function Practice() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#8888aa' }}>
        3 guided problems — one per key exam skill. See the pattern, spot the trap.
      </p>

      {PROBLEMS.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  )
}

function ProblemCard({ problem }: { problem: typeof PROBLEMS[number] }) {
  return (
    <div
      style={{
        background: '#12121a',
        border: '1px solid #2a2a3a',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid #2a2a3a', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div>
          <p style={{ margin: '0 0 2px', fontSize: '11px', color: '#8888aa' }}>{problem.partType}</p>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#f0f0f8' }}>{problem.title}</h3>
        </div>
        <span
          style={{
            fontSize: '11px',
            color: problem.difficultyColor,
            background: `${problem.difficultyColor}18`,
            padding: '3px 8px',
            borderRadius: '6px',
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          {problem.difficulty}
        </span>
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Scenario */}
        <div style={{ background: '#1a1a26', borderRadius: '8px', padding: '12px' }}>
          <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#8888aa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Scenario</p>
          <p style={{ margin: 0, fontSize: '12px', color: '#c4c4d8', lineHeight: 1.6, fontFamily: 'JetBrains Mono, monospace' }}>{problem.scenario}</p>
        </div>

        {/* Questions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {problem.questions.map((q, i) => (
            <details key={i} style={{ background: '#0a0a0f', border: '1px solid #2a2a3a', borderRadius: '8px', overflow: 'hidden' }}>
              <summary style={{ padding: '10px 12px', fontSize: '12px', color: '#c4c4d8', cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#7c3aed', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, flexShrink: 0 }}>Q{i + 1}</span>
                <span>{q.text}</span>
                <span style={{ marginLeft: 'auto', color: '#8888aa', flexShrink: 0, fontSize: '11px' }}>Reveal →</span>
              </summary>
              <div style={{ padding: '10px 12px', borderTop: '1px solid #2a2a3a', background: '#0d0d1a' }}>
                <p style={{ margin: 0, fontSize: '12px', color: '#22c55e', fontFamily: 'JetBrains Mono, monospace', lineHeight: 1.6 }}>{q.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Pattern + Trap */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ background: '#0f0a1a', border: '1px solid #7c3aed33', borderRadius: '8px', padding: '10px 12px' }}>
            <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#7c3aed', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Pattern</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#c4b5fd', lineHeight: 1.5 }}>{problem.patternNote}</p>
          </div>
          <div style={{ background: '#1e0a0a', border: '1px solid #ef444433', borderRadius: '8px', padding: '10px 12px' }}>
            <p style={{ margin: '0 0 4px', fontSize: '10px', color: '#ef4444', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>🪤 Trap</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#fca5a5', lineHeight: 1.5 }}>{problem.trap}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
