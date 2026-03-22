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
        <p style={{
          margin: '12px 0 0',
          paddingTop: '10px',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
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
