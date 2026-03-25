import { useState } from 'react'
import Formula from './Formula'

interface Framework {
  id: string
  title: string
  subtitle: string
  color: string
  steps: {
    label: string
    description: string
    example?: string
    formulaTex?: string
    formulaLegend?: string
  }[]
  examTip: string
}

const FRAMEWORKS: Framework[] = [
  {
    id: 'system-critique',
    title: 'System Critique',
    subtitle: 'The five-dimension diagnostic that appears in every Part 5',
    color: '#e11d48',
    steps: [
      {
        label: 'Step 1: Identify the dimension',
        description: 'Every management control system has five to six dimensions you must evaluate. Work through each one systematically — do not skip any.',
        example: '(1) Variance analysis system, (2) Cost allocation and pricing policy, (3) Transfer pricing policy, (4) Performance measurement, (5) Incentive design, and optionally (6) Budget quality.',
      },
      {
        label: 'Step 2: Name the accounting problem',
        description: 'For each dimension, state exactly what the current system does wrong. Be specific — reference the numbers you computed in earlier parts.',
        example: '"The full-cost transfer price is $2,640, which exceeds the external client price of $2,000. The goal-congruent range is $840 to $2,000, so the policy TP falls $640 above the ceiling."',
      },
      {
        label: 'Step 3: Explain the behavioral distortion',
        description: 'This is where most students lose marks. You must connect the accounting issue to a specific change in manager behavior. What does the manager do differently because of this system design?',
        example: '"Because NE loses $640 per transferred contract, the NE manager rejects the internal transfer and instead hires external gardeners at $100,000 — wasting company resources to protect divisional profit."',
      },
      {
        label: 'Step 4: Propose a concrete fix',
        description: 'Do not write vague recommendations like "improve the system." Name the specific alternative design and explain why it solves the problem.',
        example: '"Set the transfer price equal to the seller\'s variable cost ($840) plus a negotiated share of the $1,160 per-contract surplus. This ensures both divisions benefit and the company-preferred trade occurs."',
      },
      {
        label: 'Step 5: Connect dimensions',
        description: 'The strongest answers show how dimensions interact. One root cause (often the cost allocation method) cascades through pricing, transfer pricing, and performance measurement.',
        example: '"The full-cost allocation base is the root cause of three distortions: it inflates the external price (death spiral risk), inflates the transfer price (goal incongruence), and inflates the cost base for RI (discouraging investment)."',
      },
    ],
    examTip: 'Structure your answer as a table with three columns: Problem, Behavioral Distortion, and Recommended Fix. Allocate roughly equal space to each dimension. Always reference specific numbers from your calculations.',
  },
  {
    id: 'goal-congruence',
    title: 'Goal Congruence Analysis',
    subtitle: 'Determine whether the company and manager make the same decision',
    color: '#2563eb',
    steps: [
      {
        label: 'Step 1: Compute the company perspective',
        description: 'Always start here. The company cares about incremental cash flows — money entering or leaving the firm. Internal transfers, allocated overhead, and depreciation are irrelevant at the company level.',
        formulaTex: '\\Delta CF = N \\times (P - VC)',
        formulaLegend: 'Only include costs that change with the decision. Fixed costs, corporate OH, and transfer prices cancel out.',
      },
      {
        label: 'Step 2: Compute the manager perspective',
        description: 'The manager sees Divisional Profit, not cash flow. This includes allocated overhead, transfer prices, and depreciation — costs that may not change in cash but appear on the divisional income statement.',
        formulaTex: '\\Delta DP = N \\times (P - VC - OH)',
        formulaLegend: 'OH = allocated overhead per unit. If OH is large enough to flip the sign, the manager rejects a deal the company would accept.',
      },
      {
        label: 'Step 3: Compare the two answers',
        description: 'If both are positive (or both negative), incentives are aligned — goal congruence. If the signs differ, identify what causes the wedge. The cause is almost always an allocated cost that does not change in cash.',
        example: 'Company: +$116,000 (accept). Manager: -$64,000 (reject). The $180,000 wedge is caused by the full-cost transfer price loading $1,560 of fixed costs per contract onto a purely incremental decision.',
      },
      {
        label: 'Step 4: Name the root cause',
        description: 'The root cause is always a system design choice: the overhead allocation method, the transfer pricing policy, or the performance metric. Never blame the manager — blame the system.',
        example: '"The goal incongruence is caused by the full-cost transfer pricing policy. Because fixed costs are loaded into the TP, the division sees a cost that the company does not incur. Switching to variable-cost TP eliminates the distortion."',
      },
      {
        label: 'Step 5: Propose the fix',
        description: 'State what system change would realign incentives. Common fixes: variable-cost TP, market-based TP, cash-flow-based bonus, idle capacity exclusion, or dual pricing.',
      },
    ],
    examTip: 'The exam answer template: "The company gains [X] in cash flow, so the deal creates value. The manager loses [Y] in divisional profit because of [allocated cost Z]. This is goal incongruence. To fix it, [specific system change]."',
  },
  {
    id: 'transfer-pricing',
    title: 'Transfer Pricing Range',
    subtitle: 'Find the range where both divisions voluntarily trade',
    color: '#059669',
    steps: [
      {
        label: 'Step 1: Identify the seller floor',
        description: 'The selling division will only transfer if the TP covers its incremental cost plus any opportunity cost. The opportunity cost depends on whether the seller has spare capacity.',
        formulaTex: 'TP_{min} = VC_{seller} + \\text{Opportunity Cost}',
        formulaLegend: 'With spare capacity: opportunity cost = 0, so floor = VC. At full capacity: opportunity cost = contribution margin lost on displaced sales.',
      },
      {
        label: 'Step 2: Identify the buyer ceiling',
        description: 'The buying division will only buy internally if the TP is at or below its next best alternative — usually the external market price.',
        formulaTex: 'TP_{max} = P_{external}',
        formulaLegend: 'The buyer will not pay more internally than it would pay an outside supplier (or more than it earns from external clients).',
      },
      {
        label: 'Step 3: Check for overlap',
        description: 'If the floor is below the ceiling, a goal-congruent range exists and any TP within it makes both divisions better off. If the floor exceeds the ceiling, no mutually beneficial trade is possible.',
        example: 'SE floor = $840 (VC, spare capacity). NE ceiling = $2,000 (external price). Range: $840 to $2,000. Current policy TP = $2,640 — outside the range, so trade fails.',
      },
      {
        label: 'Step 4: Test the policy TP',
        description: 'Check whether the company\'s actual transfer pricing policy produces a TP inside the range. Full-cost TPs typically fail because they load fixed costs that push the price above the ceiling.',
        example: '"The full-cost-plus TP of $2,640 exceeds the $2,000 ceiling by $640. NE rejects. The company loses $116,000 in value-creating trade."',
      },
      {
        label: 'Step 5: Capacity change scenario',
        description: 'If the exam switches from spare to full capacity, recompute the seller floor. At full capacity, the seller has an opportunity cost — the margin on displaced external sales.',
        formulaTex: 'TP_{min}^{full} = VC + CM_{lost} = VC + (P_{ext,seller} - VC_{seller})',
        formulaLegend: 'At full capacity, the seller gives up external sales to fulfill the transfer. The lost contribution margin becomes part of the floor.',
      },
    ],
    examTip: 'Always state: "Seller floor = [X] because [reason]. Buyer ceiling = [Y] because [reason]. Range = [X] to [Y]. Policy TP = [Z], which is [inside/outside] the range." If the exam changes capacity, recompute.',
  },
  {
    id: 'investment-decision',
    title: 'Investment Decision Under RI',
    subtitle: 'When accounting profit and cash flow disagree on investing',
    color: '#d97706',
    steps: [
      {
        label: 'Step 1: Compute cash flows',
        description: 'Start with the economic reality. What cash enters and leaves? Depreciation is not cash — ignore it here. The investment creates value if total cash flow over the project life is positive.',
        formulaTex: 'CF_0 = -\\text{Investment} \\quad CF_t = N(P - VC) - \\text{Incremental FC}',
        formulaLegend: 'Year 0 is the purchase. Subsequent years are operating cash flows. Depreciation is excluded.',
      },
      {
        label: 'Step 2: Compute Divisional Profit',
        description: 'Now compute what the manager sees on the income statement. DP = cash flow minus depreciation. This is always less than cash flow for capital-intensive investments.',
        formulaTex: '\\Delta DP = \\Delta CF - \\text{Depreciation}',
        formulaLegend: 'Depreciation = Investment / useful life (straight-line). DP can be very thin even when CF is strong.',
      },
      {
        label: 'Step 3: Compute Residual Income year by year',
        description: 'RI subtracts a capital charge from DP. The charge = cost of capital multiplied by the book value at the start of each year. As the asset depreciates, the book value and capital charge fall.',
        formulaTex: 'RI_t = \\Delta DP - r \\times BV_t',
        formulaLegend: 'r = cost of capital (e.g., 10%). BV falls by depreciation each year. RI mechanically improves over time as BV shrinks.',
      },
      {
        label: 'Step 4: Compute the bonus pattern',
        description: 'If the bonus is based on RI improvement (not RI level), the manager earns nothing in Year 1 (RI drops from zero to negative) but earns bonuses in later years as RI mechanically improves.',
        example: 'Year 1: RI = -$32k, change = -$32k, bonus = $0. Year 2: RI = -$18k, change = +$14k, bonus = $1,400. Year 3: RI = -$4k, change = +$14k, bonus = $1,400.',
      },
      {
        label: 'Step 5: Diagnose the distortion',
        description: 'The zero bonus in Year 1 punishes the manager for making a value-creating investment. The improving bonus in Years 2-3 rewards patience, not performance. This is the mechanical depreciation effect — not real improvement.',
        example: '"The manager may delay or reject a positive-NPV investment to protect short-term RI. This is goal incongruence between the manager and shareholders."',
      },
      {
        label: 'Step 6: Propose the fix',
        description: 'Common fixes: annuity depreciation (produces constant RI), multi-year evaluation period, cash-flow-based bonus, or evaluating new investments separately from ongoing operations.',
      },
    ],
    examTip: 'Build a 3-year table with columns: Year, Book Value, Cash Flow, Depreciation, DP, Capital Charge, RI, RI Change, and Bonus. This makes the mechanical pattern visible and earns full marks.',
  },
  {
    id: 'death-spiral',
    title: 'Death Spiral Diagnosis',
    subtitle: 'When cost allocation drives away customers in a vicious cycle',
    color: '#7c3aed',
    steps: [
      {
        label: 'Step 1: Identify the allocation method',
        description: 'The death spiral starts with full-cost pricing where fixed costs are allocated over actual (or expected) volume. When volume drops, the fixed cost per unit rises.',
        formulaTex: 'FC_{unit} = \\frac{FC_{total}}{N_{actual}}',
        formulaLegend: 'As N falls, FC per unit rises. This is the trigger for the spiral.',
      },
      {
        label: 'Step 2: Trace the price increase',
        description: 'The higher cost per unit leads to a higher price (because the pricing policy is cost-plus). If the price now exceeds market, customers leave.',
        example: 'At 900 contracts: FC/unit = $1,733. Price = $3,007. Market = $2,500. Price exceeds market by $507 — customers leave.',
      },
      {
        label: 'Step 3: Show the feedback loop',
        description: 'Customers leaving reduces volume further, which raises FC per unit further, which raises the price further. This is the spiral — it feeds on itself.',
        example: 'If volume drops to 600: FC/unit = $2,600. Price = $3,960. Even more customers leave. The cycle accelerates.',
      },
      {
        label: 'Step 4: Name the fix',
        description: 'Break the spiral by removing idle capacity cost from the price. Allocate fixed costs based on practical capacity, not actual volume. The unused capacity cost is reported separately as a period expense.',
        formulaTex: 'FC_{unit} = \\frac{FC_{total}}{N_{capacity}} \\quad \\text{Idle cost} = FC_{total} \\times \\frac{N_{cap} - N_{actual}}{N_{cap}}',
        formulaLegend: 'Capacity-based allocation keeps FC/unit stable regardless of actual volume. Idle cost is visible but does not inflate the price.',
      },
    ],
    examTip: 'On the exam, show the spiral with two scenarios: current volume and a lower volume. Demonstrate that the price rises and crosses the market price threshold. Then show how capacity-based allocation breaks the cycle.',
  },
  {
    id: 'variance-interpretation',
    title: 'Variance Interpretation',
    subtitle: 'Go beyond the numbers — explain what the variances mean',
    color: '#0891b2',
    steps: [
      {
        label: 'Step 1: Summarize the variance waterfall',
        description: 'List all variances with their signs. Verify they sum to the total profit gap (actual DP minus budget DP). If they do not sum correctly, recheck your calculations.',
      },
      {
        label: 'Step 2: Identify the dominant driver',
        description: 'Which variance is the largest? This is where the exam wants you to focus your interpretation. Usually volume or efficiency dominates.',
        example: 'Volume = -$435k, Price = -$90k, Efficiency = +$225k, Input = +$270k, Other VC = -$90k, FC = +$50k. Volume dominates at -$435k.',
      },
      {
        label: 'Step 3: Look for linked variances',
        description: 'Favorable efficiency + favorable input price may indicate cheaper, lower-quality materials. Unfavorable volume + favorable price may indicate a deliberate strategy to raise prices at the cost of demand.',
        example: '"AGL used 10 fewer plants per contract (+$225k) and paid $5 less per plant (+$270k). But other VC rose by $100/contract (-$90k). Possible interpretation: cheaper designs with more ancillary subcontracting."',
      },
      {
        label: 'Step 4: Question the budget',
        description: 'Was the budget realistic? A large unfavorable volume variance may reflect an overambitious budget rather than poor execution. If the budget was unrealistic, all variances are distorted.',
        example: '"Budget: 1,200 contracts. Actual: 900. Was 1,200 ever achievable? If not, the entire variance analysis penalizes the manager for a target that was never realistic."',
      },
      {
        label: 'Step 5: State the managerial action',
        description: 'End with what the manager should do. Investigate? Change suppliers? Adjust pricing? The interpretation must lead to a decision, not just a description.',
      },
    ],
    examTip: 'Never just report numbers. The exam rewards interpretation: "The favorable efficiency variance ($225k) may reflect simpler designs rather than operational improvement — investigate whether customer satisfaction declined."',
  },
]

export default function Strategy() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div>
      <p style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Step-by-step frameworks for solving qualitative and non-financial exam questions. Each framework is a repeatable strategy you can apply to any case.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
        {FRAMEWORKS.map((fw) => {
          const isExpanded = expanded === fw.id
          return (
            <div key={fw.id} style={{
              background: 'var(--card)',
              border: `1px solid ${isExpanded ? fw.color : 'var(--border)'}`,
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: isExpanded ? 'var(--shadow-lg)' : 'var(--shadow)',
              transition: 'all 0.2s ease',
            }}>
              {/* Header */}
              <button
                onClick={() => setExpanded(isExpanded ? null : fw.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: fw.color + '18',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: fw.color,
                  flexShrink: 0,
                }}>
                  {FRAMEWORKS.indexOf(fw) + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {fw.title}
                  </p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>
                    {fw.subtitle}
                  </p>
                </div>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  transition: 'transform 0.2s',
                  transform: isExpanded ? 'rotate(180deg)' : 'none',
                  flexShrink: 0,
                }}>
                  ▼
                </span>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div style={{
                  padding: '0 20px 20px',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '16px',
                }}>
                  {/* Steps */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {fw.steps.map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: '14px' }}>
                        {/* Step number line */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                          <div style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: fw.color,
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                            {i + 1}
                          </div>
                          {i < fw.steps.length - 1 && (
                            <div style={{ width: '2px', flex: 1, background: fw.color + '30', marginTop: '4px' }} />
                          )}
                        </div>

                        {/* Step content */}
                        <div style={{ flex: 1, paddingBottom: i < fw.steps.length - 1 ? '4px' : '0' }}>
                          <p style={{ margin: '0 0 6px', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {step.label}
                          </p>
                          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            {step.description}
                          </p>

                          {step.formulaTex && (
                            <div style={{ marginTop: '10px' }}>
                              <Formula tex={step.formulaTex} legend={step.formulaLegend} />
                            </div>
                          )}

                          {step.example && (
                            <div style={{
                              marginTop: '10px',
                              padding: '10px 14px',
                              background: 'var(--card-hover)',
                              borderRadius: '8px',
                              borderLeft: `3px solid ${fw.color}`,
                            }}>
                              <p style={{ margin: '0 0 4px', fontSize: '10px', fontWeight: 600, color: fw.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                Example
                              </p>
                              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                                {step.example}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Exam tip */}
                  <div style={{
                    marginTop: '20px',
                    padding: '14px 16px',
                    background: '#f59e0b12',
                    borderLeft: '4px solid #f59e0b',
                    borderRadius: '0 10px 10px 0',
                  }}>
                    <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 600, color: '#d97706', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      💡 Exam Strategy
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                      {fw.examTip}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
