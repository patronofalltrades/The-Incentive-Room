import { LayoutDashboard, FileText, Lightbulb, BookOpen } from 'lucide-react'
import type { Tab } from '../App'

interface TabBarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const TABS: { id: Tab; label: string; Icon: typeof LayoutDashboard }[] = [
  { id: 'home', label: 'Home', Icon: LayoutDashboard },
  { id: 'practice', label: 'Practice', Icon: FileText },
  { id: 'strategy', label: 'Strategy', Icon: Lightbulb },
  { id: 'formulas', label: 'Reference', Icon: BookOpen },
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
            <tab.Icon size={18} style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }} />
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
