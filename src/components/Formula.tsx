import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'

interface FormulaProps {
  tex: string
  block?: boolean
  legend?: string
}

/**
 * Render legend with each variable as KaTeX inline math.
 * Splits on commas, then on " = " to separate symbol from definition.
 * Renders symbols like N_a, CM_b, TP_{min}, VC_S, etc. as proper KaTeX.
 */
function renderLegend(legend: string) {
  const parts = legend.split(',').map(s => s.trim()).filter(Boolean)

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '6px 12px',
      alignItems: 'baseline',
    }}>
      {parts.map((part, i) => {
        const eqIdx = part.indexOf(' = ')
        if (eqIdx > 0) {
          const symbol = part.slice(0, eqIdx).trim()
          const definition = part.slice(eqIdx + 3).trim()

          // Render symbol as KaTeX if it looks like math
          // Matches: N_a, CM_b, TP_{min}, VC_S, BV_0, ΔCF, FC, VC, OH, RI, DP, P, r, m, π, i, etc.
          const isMath = /[_^\\{}]/.test(symbol)
            || /[ΔΠΣπ]/.test(symbol)
            || /^[A-Z]{1,4}$/.test(symbol)         // FC, VC, OH, RI, DP, CF, BV, CM, TP
            || /^[A-Z]+[_]/.test(symbol)            // N_a, P_b, VC_S, TP_{min}
            || /^[a-z]$/.test(symbol)               // r, m, i, π
            || /^\\/.test(symbol)                    // \Delta, \Pi, etc.

          return (
            <div key={i} style={{ display: 'contents' }}>
              <span style={{
                fontSize: '13px',
                color: 'var(--accent)',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}>
                {isMath ? (
                  <InlineMath math={symbol} />
                ) : (
                  symbol
                )}
              </span>
              <span style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                = {definition}
              </span>
            </div>
          )
        }
        // No "=" sign — render as a plain description spanning both columns
        return (
          <span key={i} style={{
            gridColumn: '1 / -1',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            {part}
          </span>
        )
      })}
    </div>
  )
}

export default function Formula({ tex, block = true, legend }: FormulaProps) {
  return (
    <div style={{
      background: 'var(--code-bg, var(--card-hover))',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      overflow: 'auto',
    }}>
      {/* Formula */}
      <div style={{
        padding: block ? '20px 18px' : '8px 12px',
        textAlign: 'center',
      }}>
        {block ? <BlockMath math={tex} /> : <InlineMath math={tex} />}
      </div>

      {/* Symbol Breakdown */}
      {legend && (
        <div style={{
          padding: '14px 18px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--surface)',
          borderRadius: '0 0 10px 10px',
        }}>
          <p style={{
            margin: '0 0 8px',
            fontSize: '10px',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Symbol Breakdown
          </p>
          {renderLegend(legend)}
        </div>
      )}
    </div>
  )
}

export function Inline({ tex }: { tex: string }) {
  return <InlineMath math={tex} />
}
