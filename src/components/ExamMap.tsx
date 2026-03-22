import { useState } from 'react'
import { EXAM_PARTS } from '../data/examParts'
import Formula from './Formula'
import type { Tab } from '../App'

const DIFFICULTY_LABEL = { 1: 'Easy', 2: 'Medium', 3: 'Hard' } as const
const DIFFICULTY_COLOR = { 1: 'var(--green)', 2: 'var(--amber)', 3: 'var(--red)' } as const
const DIFFICULTY_BG = { 1: 'var(--green-soft)', 2: 'var(--amber-soft)', 3: 'var(--red-soft)' } as const

const KEY_INSIGHTS: Record<number, string> = {
  1: 'On the exam, check whether an inflation adjustment is needed before computing variances. If inflation is given, the budgeted price and cost must be restated first — otherwise every variance after volume will be wrong.',
  2: 'The exam typically asks: "Should the company accept?" then "Would the manager accept?" If the answers differ, you must name the cause (usually allocated overhead) and suggest a fix such as basing the bonus on cash flow instead.',
  3: 'When the exam gives both idle and full capacity scenarios, the seller floor changes because opportunity cost appears at full capacity. Always recompute the goal-congruent range for each scenario separately.',
  4: 'The exam often asks you to compute residual income across multiple years. Watch for the mechanical improvement as book value falls — if the bonus rises each year on a flat cash-flow investment, that is the distortion you must flag.',
  5: 'On the exam, structure your critique around the specific numbers you computed earlier. Reference your variance, transfer pricing, and residual income results to show exactly where the system breaks down and what incentive it creates.',
}

const PART_TOPIC: Record<number, string> = {
  1: 'variance-analysis',
  2: 'relevance-analysis',
  3: 'transfer-pricing',
  4: 'residual-income',
  5: 'system-critique',
}

interface ExamMapProps {
  onNavigate: (tab: Tab) => void
  onTopicSelect?: (topicId: string) => void
}

export default function ExamMap({ onTopicSelect }: ExamMapProps) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div>
      <p style={{ margin: '0 0 20px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Every exam follows this five-part structure. Tap a part to see the pattern, what to compute, and the trap to watch for.
      </p>

      {/* Vertical card list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {EXAM_PARTS.map((part, idx) => {
          const isExpanded = expanded === part.part
          return (
            <div key={part.part}>
              {/* Card */}
              <div
                style={{
                  background: 'var(--card)',
                  border: `1px solid ${isExpanded ? part.color : 'var(--border)'}`,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: isExpanded ? 'var(--shadow-lg)' : 'var(--shadow)',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* Collapsed header — always visible */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : part.part)}
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
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: part.color,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                      minWidth: '44px',
                    }}
                  >
                    Part {part.part}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', flex: 1 }}>
                    {part.title}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      color: DIFFICULTY_COLOR[part.difficulty],
                      background: DIFFICULTY_BG[part.difficulty],
                      padding: '3px 10px',
                      borderRadius: '6px',
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  >
                    {DIFFICULTY_LABEL[part.difficulty]}
                  </span>
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

                {/* Expanded detail — inside the card */}
                {isExpanded && (
                  <div style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    paddingTop: '16px',
                  }}>
                    {/* Tagline */}
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {part.tagline}
                    </p>

                    {/* Pattern */}
                    <div style={{
                      background: 'var(--card-hover)',
                      borderRadius: '10px',
                      padding: '14px',
                    }}>
                      <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        The Pattern
                      </p>
                      <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                        {part.pattern}
                      </p>
                    </div>

                    {/* Formulas — each isolated with explanation */}
                    {part.isolatedFormulas ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <p style={{ margin: 0, fontSize: '11px', fontWeight: 700, color: part.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          Core Formulas
                        </p>
                        {part.isolatedFormulas.map((f, fi) => (
                          <div key={fi} style={{
                            background: 'var(--card)',
                            border: '1px solid var(--border)',
                            borderLeft: `4px solid ${part.color}`,
                            borderRadius: '0 12px 12px 0',
                            overflow: 'hidden',
                          }}>
                            <div style={{
                              padding: '10px 14px',
                              background: part.softColor,
                              borderBottom: '1px solid var(--border-subtle)',
                            }}>
                              <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: part.color }}>
                                {f.name}
                              </p>
                            </div>
                            <div style={{ padding: '12px 14px' }}>
                              <Formula tex={f.tex} legend={f.legend} />
                              <p style={{
                                margin: '10px 0 0',
                                fontSize: '13px',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                              }}>
                                {f.explanation}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{
                        background: part.softColor,
                        borderRadius: '10px',
                        padding: '14px',
                      }}>
                        <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: 600, color: part.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          Core Formula
                        </p>
                        <Formula tex={part.coreFormulaTex} legend={part.coreFormulaLegend} />
                      </div>
                    )}

                    {/* Key Insight */}
                    {KEY_INSIGHTS[part.part] && (
                      <div style={{
                        borderLeft: `4px solid ${part.color}`,
                        background: part.softColor,
                        borderRadius: '10px',
                        padding: '14px 16px',
                      }}>
                        <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 600, color: part.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          Key Insight
                        </p>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                          {KEY_INSIGHTS[part.part]}
                        </p>
                      </div>
                    )}

                    {/* Data In + Compute side by side */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <DetailBlock label="Data You Receive" value={part.dataIn} />
                      <DetailBlock label="What You Compute" value={part.compute} />
                    </div>

                    {/* Combined warning: Trap + Red Flag */}
                    <div style={{
                      background: 'var(--red-soft)',
                      border: '1px solid var(--red)',
                      borderRadius: '10px',
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}>
                      <div>
                        <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 600, color: 'var(--red)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          The Trap
                        </p>
                        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                          {part.trap}
                        </p>
                      </div>
                      <div>
                        <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 600, color: 'var(--red)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          Red Flag to Watch For
                        </p>
                        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                          {part.redFlag}
                        </p>
                      </div>
                    </div>

                    {/* Weight + Learn & Practice */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                        Weight: {part.weight}
                      </span>
                      <button
                        onClick={() => onTopicSelect?.(PART_TOPIC[part.part])}
                        style={{
                          padding: '8px 18px',
                          background: part.color,
                          border: 'none',
                          borderRadius: '8px',
                          color: '#ffffff',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        Learn and Practice →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Connector line between cards */}
              {idx < EXAM_PARTS.length - 1 && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '4px 0',
                }}>
                  <div style={{
                    width: '2px',
                    height: '16px',
                    background: 'var(--border)',
                    borderRadius: '1px',
                  }} />
                </div>
              )}
            </div>
          )
        })}
      </div>

    </div>
  )
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      background: 'var(--card-hover)',
      borderRadius: '10px',
      padding: '12px',
    }}>
      <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {label}
      </p>
      <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
        {value}
      </p>
    </div>
  )
}
