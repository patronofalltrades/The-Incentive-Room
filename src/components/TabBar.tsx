import type { Tab } from '../App'

interface TabBarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'exam-map', label: 'Exam Map', icon: '🗺' },
  { id: 'concepts', label: 'Concepts', icon: '🧠' },
  { id: 'practice', label: 'Practice', icon: '✏️' },
  { id: 'formulas', label: 'Formulas', icon: '∑' },
]

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav
      style={{
        display: 'flex',
        borderTop: '1px solid #2a2a3a',
        background: '#12121a',
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
              gap: '4px',
              padding: '10px 8px 12px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              borderTop: `2px solid ${isActive ? '#7c3aed' : 'transparent'}`,
              transition: 'all 0.15s ease',
            }}
          >
            <span style={{ fontSize: '18px', lineHeight: 1 }}>{tab.icon}</span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#f0f0f8' : '#8888aa',
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
