import { useState } from 'react'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Formula from './Formula'
import type { Simulation } from '../data/artisanGardeners'

interface ExamSimulatorProps {
  simulation: Simulation
  onBack: () => void
}

export default function ExamSimulator({ simulation, onBack }: ExamSimulatorProps) {
  const sim = simulation
  const totalSteps = sim.steps.length
  const [currentStep, setCurrentStep] = useState(0)
  const [showSolution, setShowSolution] = useState(false)

  const goNext = () => {
    setShowSolution(false)
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <button
        onClick={onBack}
        style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontSize: '14px', fontWeight: 600, padding: 0 }}
      >
        <ArrowLeft size={16} />
        Back to Practice
      </button>

      {/* Progress */}
      {currentStep > 0 && currentStep <= totalSteps && (
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 18px', boxShadow: 'var(--shadow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
              Question {currentStep} of {totalSteps}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {sim.steps[currentStep - 1].questionTitle}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            {sim.steps.map((_, i) => (
              <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', background: i < currentStep ? 'var(--accent)' : 'var(--border)', transition: 'background 0.2s ease' }} />
            ))}
          </div>
        </div>
      )}

      {/* Intro */}
      {currentStep === 0 && (
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '36px' }}>📋</span>
            <div>
              <p style={{ margin: '0 0 2px', fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Full Exam Simulation</p>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>{sim.title}</h2>
            </div>
          </div>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {sim.caseScenario.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8 }}>{p}</p>
            ))}

            {sim.tableData && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr>
                      {sim.tableData.headers.map((h, i) => (
                        <th key={i} style={{ padding: '8px 12px', textAlign: i === 0 ? 'left' : 'right', borderBottom: '2px solid var(--border)', color: 'var(--text-muted)', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sim.tableData.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: '6px 12px', textAlign: j === 0 ? 'left' : 'right', borderBottom: '1px solid var(--border-subtle)', color: j === 0 ? 'var(--text-secondary)' : 'var(--text-primary)', fontWeight: j === 0 ? 400 : 500 }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <button onClick={goNext} style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--accent)', border: 'none', borderRadius: '10px', color: '#ffffff', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
              Begin Simulation <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Question steps */}
      {currentStep >= 1 && currentStep <= totalSteps && (() => {
        const step = sim.steps[currentStep - 1]
        return (
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', background: 'var(--accent-soft)', padding: '4px 10px', borderRadius: '8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {step.partLabel}
              </span>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Question</p>
                <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.8 }}>{step.question}</p>
              </div>

              {!showSolution && (
                <button onClick={() => setShowSolution(true)} style={{ alignSelf: 'flex-start', padding: '12px 24px', background: 'var(--accent)', border: 'none', borderRadius: '10px', color: '#ffffff', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                  Show Solution
                </button>
              )}

              {showSolution && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                  {/* Formula */}
                  {step.formulaTex && (
                    <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
                      <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Formula</p>
                      <Formula tex={step.formulaTex} legend={step.formulaLegend} />
                    </div>
                  )}

                  {/* Approach */}
                  <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <p style={{ margin: '0 0 10px', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Approach</p>
                    <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {step.approach.map((s, i) => (
                        <li key={i} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Answer */}
                  <div style={{ padding: '16px 18px', background: 'var(--green-soft)', borderBottom: '1px solid var(--border-subtle)' }}>
                    <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 600, color: 'var(--green)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Answer</p>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 600 }}>{step.answer}</p>
                  </div>

                  {/* Key Takeaway */}
                  <div style={{ padding: '16px 18px', background: 'var(--accent-soft)' }}>
                    <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Key Takeaway</p>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>{step.keyTakeaway}</p>
                  </div>
                </div>
              )}

              {showSolution && (
                <button onClick={goNext} style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--accent)', border: 'none', borderRadius: '10px', color: '#ffffff', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                  {currentStep < totalSteps ? 'Next Question' : 'View Summary'}
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        )
      })()}

      {/* Summary */}
      {currentStep === totalSteps + 1 && (
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '12px' }}>🎉</span>
            <h2 style={{ margin: '0 0 4px', fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)' }}>Simulation Complete</h2>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              All {totalSteps} questions completed.
            </p>
          </div>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {sim.summary.conceptsCovered.map((c, i) => (
                <li key={i} style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>{c}</li>
              ))}
            </ul>
            <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent)', borderRadius: '10px', padding: '18px' }}>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.8 }}>{sim.summary.keyTheme}</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => { setCurrentStep(0); setShowSolution(false) }} style={{ padding: '12px 20px', background: 'var(--card-hover)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                Restart
              </button>
              <button onClick={onBack} style={{ padding: '12px 20px', background: 'var(--accent)', border: 'none', borderRadius: '10px', color: '#ffffff', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                Back to Practice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
