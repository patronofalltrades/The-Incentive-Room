import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'

interface FormulaProps {
  tex: string
  block?: boolean
  legend?: string
}

export default function Formula({ tex, block = true, legend }: FormulaProps) {
  return (
    <div style={{
      background: 'var(--code-bg)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      padding: block ? '14px 16px' : '8px 12px',
      overflow: 'auto',
    }}>
      {block ? <BlockMath math={tex} /> : <InlineMath math={tex} />}
      {legend && (
        <p style={{
          margin: '8px 0 0',
          fontSize: '12px',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
        }}>
          {legend}
        </p>
      )}
    </div>
  )
}

export function Inline({ tex }: { tex: string }) {
  return <InlineMath math={tex} />
}
