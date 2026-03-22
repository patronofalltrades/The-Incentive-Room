import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Clock } from 'lucide-react'
import type { Simulation } from '../../data/artisanGardeners'
import ExamPartSection from './ExamPartSection'

interface ExamRunnerProps {
  simulation: Simulation
  onBack: () => void
}

const PART_COLORS = ['#7c3aed', '#2563eb', '#d97706', '#16a34a', '#e11d48']

type Screen = 'intro' | 'active' | 'summary'

interface PartGroup {
  label: string
  color: string
  context?: string
  tableData?: {
    title?: string
    headers: string[]
    rows: string[][]
    notes?: string[]
  }
  questions: {
    id: string
    questionTitle: string
    question: string
    formulaTex?: string
    formulaLegend?: string
    approach: string[]
    answer: string
    keyTakeaway: string
  }[]
}

export default function ExamRunner({ simulation, onBack }: ExamRunnerProps) {
  const sim = simulation
  const [screen, setScreen] = useState<Screen>('intro')
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [caseMaterialsOpen, setCaseMaterialsOpen] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  // partRefs removed — part tabs removed per user request

  // Group steps by partLabel
  const parts: PartGroup[] = (() => {
    const map = new Map<string, typeof sim.steps>()
    const order: string[] = []
    sim.steps.forEach(step => {
      if (!map.has(step.partLabel)) {
        map.set(step.partLabel, [])
        order.push(step.partLabel)
      }
      map.get(step.partLabel)!.push(step)
    })
    return order.map((label, i) => {
      const pc = sim.partContexts?.find(p => p.partLabel === label)
      return {
      label,
      color: PART_COLORS[i % PART_COLORS.length],
      context: pc?.context,
      tableData: pc?.tableData,
      questions: map.get(label)!.map(step => ({
        id: step.id,
        questionTitle: step.questionTitle,
        question: step.question,
        formulaTex: step.formulaTex,
        formulaLegend: step.formulaLegend,
        approach: step.approach,
        answer: step.answer,
        keyTakeaway: step.keyTakeaway,
      })),
    }})
  })()

  // Timer
  useEffect(() => {
    if (screen === 'active') {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [screen])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const beginExam = () => {
    setScreen('active')
    setElapsedSeconds(0)
    window.scrollTo({ top: 0 })
  }

  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setScreen('summary')
    window.scrollTo({ top: 0 })
  }

  const restart = () => {
    setScreen('intro')
    setElapsedSeconds(0)
    setCaseMaterialsOpen(true)
    window.scrollTo({ top: 0 })
  }

  // --- INTRO SCREEN ---
  if (screen === 'intro') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--accent)',
            fontSize: '14px',
            fontWeight: 600,
            padding: 0,
          }}
        >
          <ArrowLeft size={16} />
          Back to Practice
        </button>

        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }}>
          <div style={{
            padding: '24px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-soft)', padding: '6px 12px', borderRadius: '8px' }}>Full Exam</span>
            <div>
              <p style={{
                margin: '0 0 2px',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Full Exam Simulation
              </p>
              <h2 style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}>
                {sim.title}
              </h2>
            </div>
          </div>

          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {sim.caseScenario.map((p, i) => (
              <p key={i} style={{
                margin: 0,
                fontSize: '14px',
                color: 'var(--text-primary)',
                lineHeight: 1.8,
              }}>
                {p}
              </p>
            ))}

            {sim.tableData && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr>
                      {sim.tableData.headers.map((h, i) => (
                        <th key={i} style={{
                          padding: '8px 12px',
                          textAlign: i === 0 ? 'left' : 'right',
                          borderBottom: '2px solid var(--border)',
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sim.tableData.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{
                            padding: '6px 12px',
                            textAlign: ci === 0 ? 'left' : 'right',
                            borderBottom: '1px solid var(--border-subtle)',
                            color: ci === 0 ? 'var(--text-secondary)' : 'var(--text-primary)',
                            fontWeight: ci === 0 ? 400 : 500,
                          }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '8px',
            }}>
              <span style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
              }}>
                {parts.length} parts / {sim.steps.length} questions
              </span>
            </div>

            <button
              onClick={beginExam}
              style={{
                alignSelf: 'flex-start',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--accent)',
                border: 'none',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Begin Exam <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // --- SUMMARY SCREEN ---
  if (screen === 'summary') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--accent)',
            fontSize: '14px',
            fontWeight: 600,
            padding: 0,
          }}
        >
          <ArrowLeft size={16} />
          Back to Practice
        </button>

        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }}>
          <div style={{
            padding: '24px',
            borderBottom: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green)', background: 'var(--green-soft)', padding: '6px 14px', borderRadius: '8px', display: 'inline-block', marginBottom: '12px' }}>Complete</span>
            <h2 style={{
              margin: '0 0 4px',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}>
              Exam Complete
            </h2>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              {sim.steps.length} questions across {parts.length} parts completed in {formatTime(elapsedSeconds)}.
            </p>
          </div>

          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p style={{
                margin: '0 0 10px',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Concepts Covered
              </p>
              <ul style={{
                margin: 0,
                paddingLeft: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}>
                {sim.summary.conceptsCovered.map((c, i) => (
                  <li key={i} style={{
                    fontSize: '14px',
                    color: 'var(--text-primary)',
                    lineHeight: 1.6,
                  }}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'var(--accent-soft)',
              border: '1px solid var(--accent)',
              borderRadius: '10px',
              padding: '18px',
            }}>
              <p style={{
                margin: '0 0 4px',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Key Theme
              </p>
              <p style={{
                margin: 0,
                fontSize: '14px',
                color: 'var(--text-primary)',
                lineHeight: 1.8,
              }}>
                {sim.summary.keyTheme}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={restart}
                style={{
                  padding: '12px 20px',
                  background: 'var(--card-hover)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Restart
              </button>
              <button
                onClick={onBack}
                style={{
                  padding: '12px 20px',
                  background: 'var(--accent)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Back to Practice
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // --- ACTIVE EXAM SCREEN ---
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* Sticky header */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'var(--card)',
        borderBottom: '1px solid var(--border)',
        padding: '12px 20px',
        boxShadow: 'var(--shadow)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onBack}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--accent)',
                fontSize: '13px',
                fontWeight: 600,
                padding: 0,
              }}
            >
              <ArrowLeft size={14} />
              Exit
            </button>
            <span style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}>
              {sim.title}
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            <Clock size={14} />
            {formatTime(elapsedSeconds)}
          </div>
        </div>

        {/* Question count summary */}
        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>
          {sim.steps.length} questions across {parts.length} parts
        </p>
      </div>

      {/* Case materials collapsible */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
          marginBottom: '24px',
        }}>
          <button
            onClick={() => setCaseMaterialsOpen(prev => !prev)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              background: 'var(--surface)',
              border: 'none',
              cursor: 'pointer',
              borderBottom: caseMaterialsOpen ? '1px solid var(--border-subtle)' : 'none',
            }}
          >
            <span style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              Case Materials
            </span>
            {caseMaterialsOpen ? (
              <ChevronUp size={16} style={{ color: 'var(--text-muted)' }} />
            ) : (
              <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
            )}
          </button>

          {caseMaterialsOpen && (
            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {sim.caseScenario.map((p, i) => (
                <p key={i} style={{
                  margin: 0,
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {p}
                </p>
              ))}

              {sim.tableData && (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                    <thead>
                      <tr>
                        {sim.tableData.headers.map((h, i) => (
                          <th key={i} style={{
                            padding: '8px 12px',
                            textAlign: i === 0 ? 'left' : 'right',
                            borderBottom: '2px solid var(--border)',
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sim.tableData.rows.map((row, ri) => (
                        <tr key={ri} style={{
                          background: ri % 2 === 1 ? 'var(--surface)' : 'transparent',
                        }}>
                          {row.map((cell, ci) => (
                            <td key={ci} style={{
                              padding: '6px 12px',
                              textAlign: ci === 0 ? 'left' : 'right',
                              borderBottom: '1px solid var(--border-subtle)',
                              color: ci === 0 ? 'var(--text-secondary)' : 'var(--text-primary)',
                              fontWeight: ci === 0 ? 400 : 500,
                              fontVariantNumeric: ci > 0 ? 'tabular-nums' : 'normal',
                            }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Part sections */}
        {parts.map((part, idx) => (
          <div
            key={part.label}
            id={`exam-part-${idx}`}
          >
            <ExamPartSection
              partLabel={part.label}
              partColor={part.color}
              context={part.context}
              questions={part.questions}
              tableData={part.tableData ? { headers: part.tableData.headers, rows: part.tableData.rows } : undefined}
              tableTitle={part.tableData?.title}
            />
          </div>
        ))}

        {/* Finish exam button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0 40px',
        }}>
          <button
            onClick={finishExam}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Finish Exam <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
