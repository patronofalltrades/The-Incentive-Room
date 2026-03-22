import type { Tab } from '../App'

interface TabBarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'exam-map', label: 'Exam Map', icon: '🗺' },
  { id: 'concepts', label: 'Concepts', icon: '🧠' },
  { id: 'discovery', label: 'Discovery', icon: '🔬' },
  { id: 'practice', label: 'Practice', icon: '✏️' },
  { id: 'formulas', label: 'Formulas', icon: '∑' },
]

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav
      style={{
        display: 'flex',
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        flexShrink: 0,
      }}
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              padding: '10px 4px 12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              borderTop: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
              transition: 'all 0.15s ease',
            }}
          >
            <span style={{ fontSize: '17px', lineHeight: 1 }}>{tab.icon}</span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                letterSpacing: '0.02em',
                transition: 'color 0.15s ease',
              }}
            >
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
