import { useState } from 'react'
import TabBar from './components/TabBar'
import ExamMap from './components/ExamMap'
import Concepts from './components/Concepts'
import Practice from './components/Practice'
import Formulas from './components/Formulas'

export type Tab = 'exam-map' | 'concepts' | 'practice' | 'formulas'

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('exam-map')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0a0a0f' }}>
      {/* Header */}
      <header style={{ padding: '16px 24px 0', flexShrink: 0 }}>
        <p style={{ margin: 0, fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: '#7c3aed', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          IESE MBA · Managerial Accounting
        </p>
        <h1 style={{ margin: '4px 0 0', fontSize: '20px', fontWeight: 700, color: '#f0f0f8', letterSpacing: '-0.02em' }}>
          The Incentive Room
        </h1>
      </header>

      {/* Main content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '20px 24px 8px' }}>
        {activeTab === 'exam-map' && <ExamMap onNavigate={setActiveTab} />}
        {activeTab === 'concepts' && <Concepts />}
        {activeTab === 'practice' && <Practice />}
        {activeTab === 'formulas' && <Formulas />}
      </main>

      {/* Tab Bar */}
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
