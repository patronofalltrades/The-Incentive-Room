import { useState, useEffect, createContext, useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import TabBar from './components/TabBar'
import ExamMap from './components/ExamMap'
import Concepts from './components/Concepts'
import Discovery from './components/Discovery'
import Practice from './components/Practice'
import Formulas from './components/Formulas'

export type Tab = 'exam-map' | 'concepts' | 'discovery' | 'practice' | 'formulas'

interface ThemeContextType {
  isDark: boolean
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType>({ isDark: false, toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('exam-map')
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggle = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg)' }}>
        {/* Header */}
        <header style={{
          padding: '16px 24px 0',
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <div>
            <p style={{
              margin: 0,
              fontSize: '11px',
              fontWeight: 500,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              IESE MBA · Managerial Accounting
            </p>
            <h1 style={{
              margin: '4px 0 0',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}>
              The Incentive Room
            </h1>
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              boxShadow: 'var(--shadow)',
              transition: 'all 0.2s ease',
              marginTop: '2px',
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </header>

        {/* Main content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '20px 24px 8px' }}>
          {activeTab === 'exam-map' && <ExamMap onNavigate={setActiveTab} />}
          {activeTab === 'concepts' && <Concepts />}
          {activeTab === 'discovery' && <Discovery />}
          {activeTab === 'practice' && <Practice />}
          {activeTab === 'formulas' && <Formulas />}
        </main>

        {/* Tab Bar */}
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </ThemeContext.Provider>
  )
}
