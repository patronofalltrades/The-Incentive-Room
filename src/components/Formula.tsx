import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'

interface FormulaProps {
  tex: string
  block?: boolean
  legend?: string
}

/* Parse legend text: render math-like tokens (e.g. N_a, CM_b, P_ext, VC_S, BV_0, ΔCF) as KaTeX inline */
function renderLegend(legend: string) {
  // Split on commas to get individual definitions
  const parts = legend.split(',').map(s => s.trim())
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {parts.map((part, i) => {
        // Try to split on " = " to get symbol and definition
        const eqIdx = part.indexOf(' = ')
        if (eqIdx > 0) {
          const symbol = part.slice(0, eqIdx).trim()
          const definition = part.slice(eqIdx + 3).trim()
          // Check if symbol looks like a math expression (contains _, ^, \, or Greek)
          const isMath = /[_^\\]|[ΔΠΣ]/.test(symbol) || /^[A-Z]{1,3}[_]/.test(symbol) || /^[a-z]$/.test(symbol)
          return (
            <span key={i} style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {isMath ? (
                <>
                  <InlineMath math={symbol} />
                  {' = ' + definition}
                </>
              ) : (
                part
              )}
            </span>
          )
        }
        return (
          <span key={i} style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
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
      padding: block ? '16px 18px' : '8px 12px',
      overflow: 'auto',
    }}>
      <div style={{ padding: block ? '12px 0' : '0' }}>
        {block ? <BlockMath math={tex} /> : <InlineMath math={tex} />}
      </div>
      {legend && (
        <div style={{
          margin: '12px 0 0',
          paddingTop: '10px',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          {renderLegend(legend)}
        </div>
      )}
    </div>
  )
}

export function Inline({ tex }: { tex: string }) {
  return <InlineMath math={tex} />
}
