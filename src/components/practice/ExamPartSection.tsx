import { useState } from 'react'
import Formula from '../Formula'

interface ExamPartSectionProps {
  partLabel: string
  partColor: string
  context?: string
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
  tableData?: {
    headers: string[]
    rows: string[][]
  }
  tableTitle?: string
}

export default function ExamPartSection({
  partLabel,
  partColor,
  context,
  questions,
  tableData,
  tableTitle,
}: ExamPartSectionProps) {
  const [revealedSet, setRevealedSet] = useState<Set<string>>(new Set())

  const toggleSolution = (id: string) => {
    setRevealedSet(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const tableElement = tableData ? (
    <div style={{ marginBottom: '20px' }}>
      {tableTitle && (
        <p style={{
          margin: '0 0 8px',
          fontSize: '12px',
          fontWeight: 700,
          color: partColor,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          📊 {tableTitle}
        </p>
      )}
      <div style={{
        overflowX: 'auto',
        background: 'var(--card)',
        border: `1px solid ${partColor}40`,
        borderRadius: '10px',
        boxShadow: 'var(--shadow)',
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '13px',
        }}>
          <thead>
            <tr>
              {tableData.headers.map((h, i) => (
                <th key={i} style={{
                  padding: '8px 12px',
                  textAlign: i === 0 ? 'left' : 'right',
                  borderBottom: '2px solid var(--border)',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, ri) => (
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
                    whiteSpace: 'nowrap',
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : null

  const questionsElement = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {questions.map((q, qi) => {
        const revealed = revealedSet.has(q.id)
        return (
          <div key={q.id} style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}>
            {/* Question header */}
            <div style={{
              padding: '12px 18px',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'var(--surface)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: partColor + '18',
                color: partColor,
                fontSize: '13px',
                fontWeight: 700,
                flexShrink: 0,
              }}>
                {qi + 1}
              </span>
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}>
                {q.questionTitle}
              </span>
            </div>

            {/* Question body */}
            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '16px',
              }}>
                <p style={{
                  margin: '0 0 8px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: partColor,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  Question
                </p>
                <p style={{
                  margin: 0,
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}>
                  {q.question}
                </p>
              </div>

              {!revealed && (
                <button
                  onClick={() => toggleSolution(q.id)}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '10px 20px',
                    background: partColor,
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Show Solution
                </button>
              )}

              {revealed && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}>
                  {/* Formula */}
                  {q.formulaTex && (
                    <div style={{
                      padding: '14px 16px',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}>
                      <p style={{
                        margin: '0 0 8px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: partColor,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}>
                        Formula
                      </p>
                      <Formula tex={q.formulaTex} legend={q.formulaLegend} />
                    </div>
                  )}

                  {/* Approach — Step by Step */}
                  <div style={{
                    padding: '16px 18px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}>
                    <p style={{
                      margin: '0 0 12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>
                      Step-by-Step Approach
                    </p>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}>
                      {q.approach.map((s, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'flex-start',
                        }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: 'var(--blue-soft)',
                            color: 'var(--blue)',
                            fontSize: '12px',
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: '2px',
                          }}>
                            {i + 1}
                          </span>
                          <p style={{
                            margin: 0,
                            fontSize: '14px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                          }}>
                            {s}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Answer */}
                  <div style={{
                    padding: '14px 16px',
                    background: 'var(--green-soft)',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}>
                    <p style={{
                      margin: '0 0 4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--green)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>
                      Answer
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                      lineHeight: 1.6,
                      fontWeight: 600,
                    }}>
                      {q.answer}
                    </p>
                  </div>

                  {/* Key Takeaway */}
                  <div style={{
                    padding: '14px 16px',
                    background: 'rgba(251, 191, 36, 0.08)',
                    borderLeft: '4px solid #f59e0b',
                  }}>
                    <p style={{
                      margin: '0 0 4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#d97706',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>
                      Key Takeaway
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      lineHeight: 1.6,
                    }}>
                      <span role="img" aria-label="lightbulb" style={{ marginRight: '6px' }}>💡</span>
                      {q.keyTakeaway}
                    </p>
                  </div>
                </div>
              )}

              {revealed && (
                <button
                  onClick={() => toggleSolution(q.id)}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '8px 16px',
                    background: 'var(--card-hover)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-secondary)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Hide Solution
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Part header */}
      <div style={{
        borderLeft: `4px solid ${partColor}`,
        paddingLeft: '16px',
        marginBottom: '20px',
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--text-primary)',
        }}>
          {partLabel}
        </h3>
        {context && (
          <p style={{
            margin: '6px 0 0',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}>
            {context}
          </p>
        )}
      </div>

      {/* Table always above questions for visibility */}
      {tableElement}
      {questionsElement}
    </div>
  )
}
