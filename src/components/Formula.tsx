import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'

interface FormulaProps {
  tex: string
  block?: boolean
  legend?: string
}

/**
 * Smart split: split on ", " followed by a letter/symbol that starts a new variable definition.
 * This avoids breaking on commas inside numbers like "$1,450" or "(1,200)".
 */
function splitLegend(legend: string): string[] {
  const results: string[] = []
  let current = ''
  let i = 0

  while (i < legend.length) {
    if (legend[i] === ',' && i + 1 < legend.length && legend[i + 1] === ' ') {
      // Check if the next non-space char starts a new definition (letter, \, Δ, etc.)
      const rest = legend.slice(i + 2).trimStart()
      const startsNewDef = /^[A-Za-zΔΠΣπ\\]/.test(rest)
      // Also check it's not a number continuation like ", 200)" or ", 3"
      const isNumberCont = /^[0-9(]/.test(rest)

      if (startsNewDef && !isNumberCont) {
        results.push(current.trim())
        current = ''
        i += 2 // skip ", "
        continue
      }
    }
    current += legend[i]
    i++
  }
  if (current.trim()) results.push(current.trim())
  return results
}

function renderLegend(legend: string) {
  const parts = splitLegend(legend)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      {parts.map((part, i) => {
        const eqIdx = part.indexOf(' = ')
        if (eqIdx > 0) {
          const symbol = part.slice(0, eqIdx).trim()
          const definition = part.slice(eqIdx + 3).trim()

          const isMath = /[_^\\{}]/.test(symbol)
            || /[ΔΠΣπ]/.test(symbol)
            || /^[A-Z]{1,5}$/.test(symbol)
            || /^[A-Z]+[_]/.test(symbol)
            || /^\\Delta/.test(symbol)
            || /^[a-z]$/.test(symbol)

          return (
            <div key={i} style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'baseline',
              padding: '4px 0',
              borderBottom: i < parts.length - 1 ? '1px solid var(--border-subtle)' : 'none',
            }}>
              <span style={{
                fontSize: '13px',
                color: 'var(--accent)',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                minWidth: '40px',
              }}>
                {isMath ? <InlineMath math={symbol} /> : symbol}
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
        return (
          <p key={i} style={{
            margin: 0,
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            {part}
          </p>
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
      <div style={{
        padding: block ? '20px 18px' : '8px 12px',
        textAlign: 'center',
      }}>
        {block ? <BlockMath math={tex} /> : <InlineMath math={tex} />}
      </div>

      {legend && (
        <div style={{
          padding: '14px 18px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--surface)',
          borderRadius: '0 0 10px 10px',
        }}>
          <p style={{
            margin: '0 0 10px',
            fontSize: '10px',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Where
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
