import { useState } from 'react'
import { EXAM_PARTS } from '../data/examParts'
import type { Tab } from '../App'

const DIFFICULTY_LABEL = { 1: 'Easy', 2: 'Medium', 3: 'Hard' } as const
const DIFFICULTY_COLOR = { 1: '#22c55e', 2: '#f59e0b', 3: '#ef4444' } as const

interface ExamMapProps {
  onNavigate: (tab: Tab) => void
}

export default function ExamMap({ onNavigate }: ExamMapProps) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div>
      {/* Section label */}
      <div style={{ marginBottom: '16px' }}>
        <p style={{ margin: 0, fontSize: '13px', color: '#8888aa', lineHeight: 1.5 }}>
          Every exam follows this exact 5-part structure. Learn to recognize the part type within 30 seconds of reading a problem.
        </p>
      </div>

      {/* Pipeline — horizontal scroll on mobile */}
      <div
        style={{
          display: 'flex',
          gap: '0',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '24px',
        }}
      >
        {EXAM_PARTS.map((part, idx) => (
          <div key={part.part} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {/* Card */}
            <button
              onClick={() => setExpanded(expanded === part.part ? null : part.part)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '14px 16px',
                background: expanded === part.part ? '#1e1e2e' : '#12121a',
                border: `1px solid ${expanded === part.part ? part.color : '#2a2a3a'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                width: '160px',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize: '10px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 600,
                    color: part.color,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  PART {part.part}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    color: DIFFICULTY_COLOR[part.difficulty],
                    background: `${DIFFICULTY_COLOR[part.difficulty]}18`,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 500,
                  }}
                >
                  {DIFFICULTY_LABEL[part.difficulty]}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontSize: '22px', lineHeight: 1, flexShrink: 0 }}>{part.icon}</span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#f0f0f8',
                    lineHeight: 1.3,
                  }}
                >
                  {part.title}
                </span>
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: '11px',
                  color: '#8888aa',
                  lineHeight: 1.4,
                }}
              >
                {part.tagline}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '2px',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#8888aa',
                  }}
                >
                  ~{part.weight}
                </span>
                <span style={{ fontSize: '12px', color: '#8888aa' }}>
                  {expanded === part.part ? '▲' : '▼'}
                </span>
              </div>
            </button>

            {/* Arrow connector */}
            {idx < EXAM_PARTS.length - 1 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 6px',
                  color: '#3a3a50',
                  fontSize: '18px',
                  flexShrink: 0,
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Expanded detail panel */}
      {expanded !== null && (() => {
        const part = EXAM_PARTS.find(p => p.part === expanded)!
        return (
          <div
            style={{
              background: '#12121a',
              border: `1px solid ${part.color}44`,
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '28px' }}>{part.icon}</span>
              <div>
                <p style={{ margin: 0, fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: part.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  PART {part.part}
                </p>
                <h2 style={{ margin: '2px 0 0', fontSize: '18px', fontWeight: 700, color: '#f0f0f8' }}>
                  {part.title}
                </h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              <DetailBlock label="The Pattern" value={part.pattern} />
              <DetailBlock label="Data You Get" value={part.dataIn} />
              <DetailBlock label="What You Compute" value={part.compute} />
              <div
                style={{
                  background: '#1e0a0a',
                  border: '1px solid #ef444433',
                  borderRadius: '8px',
                  padding: '12px',
                }}
              >
                <p style={{ margin: '0 0 4px', fontSize: '10px', fontWeight: 600, color: '#ef4444', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  🪤 The Trap
                </p>
                <p style={{ margin: 0, fontSize: '12px', color: '#fca5a5', lineHeight: 1.5 }}>
                  {part.trap}
                </p>
              </div>
            </div>

            <div
              style={{
                background: '#0f0a1a',
                border: `1px solid ${part.color}33`,
                borderRadius: '8px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <span style={{ fontSize: '12px', color: '#8888aa' }}>🚩 Red flag:</span>
              <span style={{ fontSize: '12px', color: '#c4b5fd' }}>{part.redFlag}</span>
            </div>

            <button
              onClick={() => onNavigate('practice')}
              style={{
                padding: '8px 16px',
                background: part.color,
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Quick Practice →
            </button>
          </div>
        )
      })()}

      {/* Concept Web */}
      <div style={{ marginTop: '8px' }}>
        <h3 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 600, color: '#8888aa', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Concept Web
        </h3>
        <div
          style={{
            background: '#12121a',
            border: '1px solid #2a2a3a',
            borderRadius: '12px',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
          }}
        >
          {[
            { node: 'Variance Analysis', color: '#7c3aed' },
            { node: 'Cost Allocation', color: '#0ea5e9' },
            { node: 'Pricing Policy', color: '#f59e0b' },
            { node: 'Transfer Pricing', color: '#f59e0b' },
            { node: 'Residual Income', color: '#22c55e' },
            { node: 'System Critique', color: '#f43f5e' },
          ].map(({ node, color }) => (
            <div
              key={node}
              style={{
                padding: '8px 10px',
                background: `${color}12`,
                border: `1px solid ${color}33`,
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 500,
                color: color,
                textAlign: 'center',
              }}
            >
              {node}
            </div>
          ))}
        </div>
        <p style={{ margin: '8px 0 0', fontSize: '11px', color: '#8888aa' }}>
          Cost Allocation feeds both Transfer Pricing and Pricing Policy. Distortions here cascade into goal incongruence and system critique.
        </p>
      </div>
    </div>
  )
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: '#1a1a26',
        border: '1px solid #2a2a3a',
        borderRadius: '8px',
        padding: '12px',
      }}
    >
      <p style={{ margin: '0 0 4px', fontSize: '10px', fontWeight: 600, color: '#8888aa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </p>
      <p style={{ margin: 0, fontSize: '12px', color: '#c4c4d8', lineHeight: 1.5 }}>
        {value}
      </p>
    </div>
  )
}
