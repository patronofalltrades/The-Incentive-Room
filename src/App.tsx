import { useState, useEffect, createContext, useContext } from 'react'
import { Moon, Sun, Lock } from 'lucide-react'
import TabBar from './components/TabBar'
import ExamMap from './components/ExamMap'
import Practice from './components/Practice'
import Formulas from './components/Formulas'
import TopicHub from './components/TopicHub'
import Strategy from './components/Strategy'

export type Tab = 'home' | 'practice' | 'strategy' | 'formulas'

// SHA-256 hash of the password
const PASSWORD_HASH = '13d2180f94fd7103b38af8246fe568758c3932a99eccc91428b551020d68532e'

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [checking, setChecking] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setChecking(true)
    setError(false)
    const hash = await hashPassword(password.trim())
    if (hash === PASSWORD_HASH) {
      localStorage.setItem('ir_auth', hash)
      onUnlock()
    } else {
      setError(true)
      setChecking(false)
    }
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '360px',
        textAlign: 'center',
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          background: 'var(--accent-soft)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
        }}>
          <Lock size={28} style={{ color: 'var(--accent)' }} />
        </div>

        <h1 style={{
          margin: '0 0 4px',
          fontSize: '22px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          The Incentive Room
        </h1>

        <div style={{
          margin: '16px 0 28px',
          padding: '16px 20px',
          background: 'var(--accent-soft)',
          borderRadius: '12px',
          borderLeft: '4px solid var(--accent)',
        }}>
          <p style={{
            margin: 0,
            fontSize: '15px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.6,
          }}>
            Congratulations on finishing your exams!
          </p>
          <p style={{
            margin: '6px 0 0',
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}>
            Have a nice break and see everyone in the third term!
          </p>
        </div>

        <p style={{
          margin: '0 0 16px',
          fontSize: '13px',
          color: 'var(--text-muted)',
        }}>
          Enter the access code to continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false) }}
            placeholder="Access code"
            autoFocus
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: '16px',
              background: 'var(--surface)',
              border: `2px solid ${error ? 'var(--red)' : 'var(--border)'}`,
              borderRadius: '12px',
              color: 'var(--text-primary)',
              outline: 'none',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => { if (!error) e.currentTarget.style.borderColor = 'var(--accent)' }}
            onBlur={(e) => { if (!error) e.currentTarget.style.borderColor = 'var(--border)' }}
          />

          {error && (
            <p style={{ margin: '8px 0 0', fontSize: '13px', color: 'var(--red)' }}>
              Incorrect access code. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={checking || !password.trim()}
            style={{
              width: '100%',
              padding: '14px',
              marginTop: '16px',
              fontSize: '15px',
              fontWeight: 600,
              color: '#fff',
              background: password.trim() ? 'var(--accent)' : 'var(--text-muted)',
              border: 'none',
              borderRadius: '12px',
              cursor: password.trim() ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              opacity: checking ? 0.7 : 1,
            }}
          >
            {checking ? 'Checking...' : 'Enter'}
          </button>
        </form>

        <p style={{
          margin: '40px 0 0',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
        }}>
          IESE MBA · Managerial Accounting
        </p>
      </div>
    </div>
  )
}

interface ThemeContextType {
  isDark: boolean
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType>({ isDark: false, toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('ir_auth') === PASSWORD_HASH
  })
  const [activeTab, setActiveTab] = useState<Tab>('home')
  const [topicView, setTopicView] = useState<string | null>(null)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggle = () => setIsDark(prev => !prev)

  const handleTopicSelect = (topicId: string) => {
    setTopicView(topicId)
    window.scrollTo({ top: 0 })
  }

  const handleTopicBack = () => {
    setTopicView(null)
    window.scrollTo({ top: 0 })
  }

  if (!isUnlocked) {
    return (
      <ThemeContext.Provider value={{ isDark, toggle }}>
        <PasswordGate onUnlock={() => setIsUnlocked(true)} />
      </ThemeContext.Provider>
    )
  }

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
          {topicView ? (
            <TopicHub topicId={topicView} onBack={handleTopicBack} onTopicSelect={handleTopicSelect} />
          ) : (
            <>
              {activeTab === 'home' && <ExamMap onNavigate={setActiveTab} onTopicSelect={handleTopicSelect} />}
              {activeTab === 'practice' && <Practice />}
              {activeTab === 'strategy' && <Strategy />}
              {activeTab === 'formulas' && <Formulas />}
            </>
          )}
        </main>

        {/* Tab Bar */}
        <TabBar activeTab={activeTab} onTabChange={(tab) => { setTopicView(null); setActiveTab(tab) }} />
      </div>
    </ThemeContext.Provider>
  )
}
