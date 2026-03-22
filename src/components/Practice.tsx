import { useState } from 'react'
import { ChevronRight, ArrowLeft, Star, Clock, HelpCircle } from 'lucide-react'
import ExamRunner from './practice/ExamRunner'
import Formula from './Formula'
import { ARTISAN_GARDENERS } from '../data/artisanGardeners'
import type { Simulation } from '../data/artisanGardeners'
import { LE_BISTROT_PARISIEN } from '../data/leBistrotParisien'
import { CIPRIANI_LOMBARDI } from '../data/ciprianiLombardi'
import { LIQUEURS_DE_MONTAGNE } from '../data/liqueursDeMontagne'
import { TOPIC_PROBLEMS } from '../data/topicProblems'
import type { TopicProblem } from '../data/topicProblems'
import { EXAM_INDEX } from '../data/examIndex'
import { TOPIC_LABELS } from '../data/types'
import type { ExamIndexEntry } from '../data/types'

/* ── Available exam data keyed by examIndex id ── */
const EXAM_DATA: Record<string, Simulation> = {
  agl: ARTISAN_GARDENERS,
  bistrot: LE_BISTROT_PARISIEN,
  cl: CIPRIANI_LOMBARDI,
  limon: LIQUEURS_DE_MONTAGNE,
}

const TIER_META: Record<1 | 2 | 3, { label: string; color: string; bg: string; description: string }> = {
  1: { label: 'Core', color: 'var(--green)', bg: 'var(--green-soft)', description: 'Do all of these first' },
  2: { label: 'Fill Gaps', color: 'var(--amber)', bg: 'var(--amber-soft)', description: 'Strengthen weak areas' },
  3: { label: 'Target', color: 'var(--blue)', bg: 'var(--blue-soft)', description: 'Target specific weak spots' },
}

const TOPIC_FILTER_LIST = ['All', 'Variance Analysis', 'Transfer Pricing', 'Residual Income', 'Relevance Analysis', 'Cost Allocation'] as const

export default function Practice() {
  const [view, setView] = useState<'list' | 'topic-detail' | string>('list')
  const [tab, setTab] = useState<'exams' | 'topics'>('exams')
  const [topicFilter, setTopicFilter] = useState('All')

  /* ── Exam runner view ── */
  const examData = EXAM_DATA[view]
  if (examData) {
    return <ExamRunner simulation={examData} onBack={() => setView('list')} />
  }

  /* ── Topic detail view ── */
  if (view.startsWith('topic-')) {
    const problemId = view.replace('topic-', '')
    const problem = TOPIC_PROBLEMS.find(p => p.id === problemId)
    if (!problem) { setView('list'); return null }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button onClick={() => setView('list')} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontSize: '14px', fontWeight: 600, padding: 0 }}>
          <ArrowLeft size={16} /> Back to Practice
        </button>
        <TopicProblemCard problem={problem} />
      </div>
    )
  }

  /* ── List view ── */
  const filteredProblems = topicFilter === 'All' ? TOPIC_PROBLEMS : TOPIC_PROBLEMS.filter(p => p.topic === topicFilter)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: '0', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)' }}>
        {(['exams', 'topics'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1, padding: '10px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600,
              background: tab === t ? 'var(--accent)' : 'var(--card)',
              color: tab === t ? '#ffffff' : 'var(--text-secondary)',
              transition: 'all 0.15s ease',
            }}
          >
            {t === 'exams' ? 'Full Exams' : 'Topic Based'}
          </button>
        ))}
      </div>

      {/* ═══════ Full Exams Tab ═══════ */}
      {tab === 'exams' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Select an exam case to work through all parts. Questions are grouped by part with data tables alongside for context.
          </p>

          {([1, 2, 3] as const).map(tier => {
            const tierExams = EXAM_INDEX.filter(e => e.tier === tier)
            const meta = TIER_META[tier]
            return (
              <div key={tier} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Tier header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, color: meta.color,
                    background: meta.bg, padding: '4px 12px', borderRadius: '8px',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    Tier {tier} — {meta.label}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{meta.description}</span>
                </div>

                {/* Exam cards */}
                {tierExams.map(exam => (
                  <ExamCard
                    key={exam.id}
                    exam={exam}
                    onSelect={() => setView(exam.id)}
                  />
                ))}
              </div>
            )
          })}
        </div>
      )}

      {/* ═══════ Topic Based Tab ═══════ */}
      {tab === 'topics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {TOPIC_FILTER_LIST.map(t => (
              <button
                key={t}
                onClick={() => setTopicFilter(t)}
                style={{
                  padding: '6px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 500,
                  background: topicFilter === t ? 'var(--accent)' : 'var(--card-hover)',
                  color: topicFilter === t ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {filteredProblems.map(problem => (
            <button
              key={problem.id}
              onClick={() => setView(`topic-${problem.id}`)}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px',
                background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px',
                cursor: 'pointer', textAlign: 'left', width: '100%', boxShadow: 'var(--shadow)',
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0 0 2px', fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>{problem.topic}</p>
                <h3 style={{ margin: '0 0 2px', fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>{problem.title}</h3>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>{problem.questions.length} question{problem.questions.length > 1 ? 's' : ''}</p>
              </div>
              <span style={{ fontSize: '12px', color: problem.difficultyColor, background: problem.difficultyBg, padding: '4px 10px', borderRadius: '8px', fontWeight: 500, flexShrink: 0 }}>
                {problem.difficulty}
              </span>
              <ChevronRight size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Exam Card Component ── */
function ExamCard({ exam, onSelect }: { exam: ExamIndexEntry; onSelect: () => void }) {
  const isAvailable = exam.available

  return (
    <button
      onClick={isAvailable ? onSelect : undefined}
      disabled={!isAvailable}
      style={{
        display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px',
        background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px',
        cursor: isAvailable ? 'pointer' : 'default', textAlign: 'left', width: '100%',
        boxShadow: 'var(--shadow)', opacity: isAvailable ? 1 : 0.55,
        transition: 'all 0.15s ease',
      }}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
            {exam.title}
          </h3>
          {!isAvailable && (
            <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', background: 'var(--card-hover)', padding: '2px 8px', borderRadius: '6px' }}>
              Coming Soon
            </span>
          )}
        </div>

        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {exam.whyStudy}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Difficulty stars */}
          <span style={{ display: 'flex', gap: '2px' }}>
            {[1, 2, 3].map(s => (
              <Star key={s} size={12} fill={s <= exam.difficulty ? 'var(--amber)' : 'none'} stroke={s <= exam.difficulty ? 'var(--amber)' : 'var(--text-muted)'} />
            ))}
          </span>
          {/* Question count + time */}
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <HelpCircle size={12} /> {exam.questionCount} questions
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} /> {exam.estimatedMinutes} minutes
          </span>
        </div>

        {/* Topic pills */}
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {exam.topics.slice(0, 4).map(t => (
            <span key={t} style={{
              fontSize: '10px', fontWeight: 500, color: 'var(--text-secondary)',
              background: 'var(--card-hover)', padding: '2px 8px', borderRadius: '6px',
            }}>
              {TOPIC_LABELS[t]}
            </span>
          ))}
          {exam.topics.length > 4 && (
            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
              +{exam.topics.length - 4} more
            </span>
          )}
        </div>
      </div>

      {isAvailable && <ChevronRight size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
    </button>
  )
}

/* ── Topic Problem Card (unchanged from before) ── */
function TopicProblemCard({ problem }: { problem: TopicProblem }) {
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ margin: '0 0 2px', fontSize: '11px', color: 'var(--text-muted)' }}>{problem.topic}</p>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{problem.title}</h3>
        </div>
        <span style={{ fontSize: '12px', color: problem.difficultyColor, background: problem.difficultyBg, padding: '4px 10px', borderRadius: '8px', fontWeight: 500 }}>{problem.difficulty}</span>
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ background: 'var(--card-hover)', borderRadius: '10px', padding: '14px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.7 }}>{problem.scenario}</p>
        </div>
        {problem.questions.map((q, i) => (
          <details key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
            <summary style={{ padding: '14px 16px', fontSize: '14px', color: 'var(--text-primary)', cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>Q{i + 1}</span>
              <span style={{ lineHeight: 1.6 }}>{q.text}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', flexShrink: 0, fontSize: '12px' }}>Reveal →</span>
            </summary>
            <div style={{ borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
              {q.formulaTex && (
                <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <Formula tex={q.formulaTex} legend={q.formulaLegend} />
                </div>
              )}
              <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
                <ol style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {q.approach.map((s, j) => (
                    <li key={j} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s}</li>
                  ))}
                </ol>
              </div>
              <div style={{ padding: '14px 16px', background: 'var(--green-soft)', borderBottom: '1px solid var(--border-subtle)' }}>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', fontWeight: 600 }}>{q.answer}</p>
              </div>
              <div style={{ padding: '14px 16px', background: 'var(--accent-soft)' }}>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.6 }}>{q.keyTakeaway}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
