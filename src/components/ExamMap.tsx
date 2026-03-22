import { useState } from 'react'
import { EXAM_PARTS } from '../data/examParts'
import Formula from './Formula'
import type { Tab } from '../App'

const DIFFICULTY_LABEL = { 1: 'Easy', 2: 'Medium', 3: 'Hard' } as const
const DIFFICULTY_COLOR = { 1: 'var(--green)', 2: 'var(--amber)', 3: 'var(--red)' } as const
const DIFFICULTY_BG = { 1: 'var(--green-soft)', 2: 'var(--amber-soft)', 3: 'var(--red-soft)' } as const

const KEY_INSIGHTS: Record<number, string> = {
  1: 'Each variance isolates one driver. The order matters: always start with volume, then work through price, efficiency, input cost, and fixed costs.',
  2: 'The company sees cash flows. The manager sees divisional profit. When they disagree, there is goal incongruence \u2014 and that is the exam question.',
  3: 'The transfer price range exists where both divisions prefer to trade. If the policy transfer price falls outside this range, value-creating trade will not occur.',
  4: 'Residual income charges the division for capital used. As the asset depreciates, the charge shrinks and residual income improves mechanically \u2014 this is not real performance improvement.',
  5: 'For each dimension, state the problem, name the behavioral distortion, and propose a concrete fix. Never describe the accounting without explaining the incentive consequence.',
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
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>{part.icon}</span>
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

                    {/* Core Formula */}
                    <div style={{
                      background: part.softColor,
                      borderRadius: '10px',
                      padding: '14px',
                    }}>
                      <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: 600, color: part.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Core Formula
                      </p>
                      <Formula tex={part.coreFormulaTex} legend={part.coreFormulaLegend} />
                      {part.formulaDescription && (
                        <p style={{
                          margin: '12px 0 0',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.7,
                          padding: '12px 14px',
                          background: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                        }}>
                          {part.formulaDescription}
                        </p>
                      )}
                    </div>

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
