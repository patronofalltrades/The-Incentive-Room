import { useState } from 'react'
import { EXAM_PARTS } from '../data/examParts'
import Formula from './Formula'
import type { Tab } from '../App'

const DIFFICULTY_LABEL = { 1: 'Easy', 2: 'Medium', 3: 'Hard' } as const
const DIFFICULTY_COLOR = { 1: 'var(--green)', 2: 'var(--amber)', 3: 'var(--red)' } as const
const DIFFICULTY_BG = { 1: 'var(--green-soft)', 2: 'var(--amber-soft)', 3: 'var(--red-soft)' } as const

const KEY_INSIGHTS: Record<number, string> = {
  1: 'Each variance isolates one driver. The order matters: always start with volume, then work through price, efficiency, input cost, and fixed costs.',
  2: 'The company sees cash flows. The manager sees divisional profit. When they disagree, there is goal incongruence — and that is the exam question.',
  3: 'The transfer price range exists where both divisions prefer to trade. If the policy transfer price falls outside this range, value-creating trade will not occur.',
  4: 'Residual income charges the division for capital used. As the asset depreciates, the charge shrinks and residual income improves mechanically — this is not real performance improvement.',
  5: 'For each dimension, state the problem, name the behavioral distortion, and propose a concrete fix. Never describe the accounting without explaining the incentive consequence.',
}

const PART_TOPIC: Record<number, string> = {
  1: 'variance-analysis',
  2: 'relevance-analysis',
  3: 'transfer-pricing',
  4: 'residual-income',
  5: 'system-critique',
}

const SUBTOPICS: Record<number, string[]> = {
  1: ['Volume Variance', 'Price Variance', 'Efficiency Variance', 'Inflation Adjustment'],
  2: ['Cash Flow vs Divisional Profit', 'Goal Incongruence', 'Opportunity Cost'],
  3: ['Seller Floor', 'Buyer Ceiling', 'Goal Congruence Range', 'Corporate Overhead Distortion'],
  4: ['Cash Flows', 'Divisional Profit', 'Residual Income', 'Bonus Timing'],
  5: ['Variance System', 'Cost Allocation', 'Pricing', 'Transfer Pricing', 'Incentives'],
}

interface ExamMapProps {
  onNavigate: (tab: Tab) => void
  onTopicSelect?: (topicId: string) => void
}

export default function ExamMap({ onTopicSelect }: ExamMapProps) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div>
      <p style={{ margin: '0 0 24px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Every exam follows this five-part structure. Tap a level to explore.
      </p>

      {/* Game-like level map */}
      <div style={{ position: 'relative', paddingBottom: '20px' }}>

        {/* Vertical connector line running down the center */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '40px',
          bottom: '40px',
          width: '3px',
          background: 'linear-gradient(to bottom, var(--accent), var(--blue), var(--amber), var(--green), var(--pink))',
          borderRadius: '2px',
          opacity: 0.3,
          transform: 'translateX(-50%)',
          zIndex: 0,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative', zIndex: 1 }}>
          {EXAM_PARTS.map((part, idx) => {
            const isExpanded = expanded === part.part
            // Zigzag: odd parts align left, even parts align right
            const isLeft = idx % 2 === 0

            return (
              <div key={part.part}>
                {/* Level node row */}
                <div style={{
                  display: 'flex',
                  alignItems: isLeft ? 'flex-start' : 'flex-end',
                  flexDirection: 'column',
                  padding: '0 8px',
                }}>
                  {/* Node + Card */}
                  <div style={{
                    width: '100%',
                    maxWidth: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    {/* Circle node */}
                    <button
                      onClick={() => setExpanded(isExpanded ? null : part.part)}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: isExpanded ? part.color : 'var(--card)',
                        border: `3px solid ${part.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: isExpanded
                          ? `0 0 20px ${part.color}40, 0 4px 12px rgba(0,0,0,0.15)`
                          : 'var(--shadow)',
                        transition: 'all 0.25s ease',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <span style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: isExpanded ? '#ffffff' : part.color,
                      }}>
                        {part.part}
                      </span>
                    </button>

                    {/* Title + subtitle card below the node */}
                    <div
                      onClick={() => setExpanded(isExpanded ? null : part.part)}
                      style={{
                        marginTop: '10px',
                        width: '100%',
                        background: 'var(--card)',
                        border: `1px solid ${isExpanded ? part.color : 'var(--border)'}`,
                        borderRadius: '14px',
                        padding: '16px 18px',
                        cursor: 'pointer',
                        boxShadow: isExpanded ? `0 4px 20px ${part.color}15` : 'var(--shadow)',
                        transition: 'all 0.2s ease',
                        textAlign: 'center',
                      }}
                    >
                      {/* Part label */}
                      <p style={{
                        margin: '0 0 4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: part.color,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>
                        Part {part.part}
                      </p>

                      {/* Title */}
                      <h3 style={{
                        margin: '0 0 8px',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}>
                        {part.title}
                      </h3>

                      {/* Tagline */}
                      <p style={{
                        margin: '0 0 10px',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}>
                        {part.tagline}
                      </p>

                      {/* Subtopic pills */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        justifyContent: 'center',
                      }}>
                        {SUBTOPICS[part.part]?.map((sub, si) => (
                          <span key={si} style={{
                            fontSize: '10px',
                            fontWeight: 500,
                            color: part.color,
                            background: part.softColor,
                            padding: '3px 10px',
                            borderRadius: '20px',
                            whiteSpace: 'nowrap',
                          }}>
                            {sub}
                          </span>
                        ))}
                      </div>

                      {/* Difficulty + Weight row */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        marginTop: '10px',
                      }}>
                        <span style={{
                          fontSize: '11px',
                          color: DIFFICULTY_COLOR[part.difficulty],
                          background: DIFFICULTY_BG[part.difficulty],
                          padding: '2px 10px',
                          borderRadius: '6px',
                          fontWeight: 500,
                        }}>
                          {DIFFICULTY_LABEL[part.difficulty]}
                        </span>
                        <span style={{
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          padding: '2px 0',
                        }}>
                          {part.weight}
                        </span>
                      </div>
                    </div>

                    {/* Expanded detail panel */}
                    {isExpanded && (
                      <div style={{
                        marginTop: '12px',
                        width: '100%',
                        background: 'var(--card)',
                        border: `1px solid ${part.color}40`,
                        borderRadius: '14px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        boxShadow: `0 4px 20px ${part.color}10`,
                      }}>
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

                        {/* Isolated Formulas */}
                        {part.isolatedFormulas ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                                  padding: '8px 14px',
                                  background: part.softColor,
                                  borderBottom: '1px solid var(--border-subtle)',
                                }}>
                                  <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: part.color }}>
                                    {f.name}
                                  </p>
                                </div>
                                <div style={{ padding: '12px 14px' }}>
                                  <Formula tex={f.tex} legend={f.legend} />
                                  <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    {f.explanation}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div style={{ background: part.softColor, borderRadius: '10px', padding: '14px' }}>
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
                            borderRadius: '0 10px 10px 0',
                            padding: '14px 16px',
                          }}>
                            <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 600, color: part.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                              Key Insight
                            </p>
                            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                              💡 {KEY_INSIGHTS[part.part]}
                            </p>
                          </div>
                        )}

                        {/* Data In + Compute */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <DetailBlock label="Data You Receive" value={part.dataIn} />
                          <DetailBlock label="What You Compute" value={part.compute} />
                        </div>

                        {/* Trap + Red Flag */}
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

                        {/* Learn & Practice button */}
                        <button
                          onClick={(e) => { e.stopPropagation(); onTopicSelect?.(PART_TOPIC[part.part]) }}
                          style={{
                            alignSelf: 'stretch',
                            padding: '12px 18px',
                            background: part.color,
                            border: 'none',
                            borderRadius: '10px',
                            color: '#ffffff',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          Learn and Practice →
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector between levels */}
                {idx < EXAM_PARTS.length - 1 && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '6px 0',
                  }}>
                    <div style={{
                      width: '3px',
                      height: '32px',
                      background: `linear-gradient(to bottom, ${part.color}60, ${EXAM_PARTS[idx + 1].color}60)`,
                      borderRadius: '2px',
                    }} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
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
