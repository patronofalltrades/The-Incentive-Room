import { useState } from 'react'
import { ChevronRight, Star, Clock, HelpCircle } from 'lucide-react'
import ExamRunner from './practice/ExamRunner'
import { ARTISAN_GARDENERS } from '../data/artisanGardeners'
import type { Simulation } from '../data/artisanGardeners'
import { LE_BISTROT_PARISIEN } from '../data/leBistrotParisien'
import { CIPRIANI_LOMBARDI } from '../data/ciprianiLombardi'
import { LIQUEURS_DE_MONTAGNE } from '../data/liqueursDeMontagne'
import { FRESHBREAD } from '../data/freshbread'
import { XTREMECLIMB } from '../data/xtremeclimb'
import { GAMECO } from '../data/gameco'
import { INTERNATIONAL_GOODS } from '../data/internationalGoods'
import { BARCELONA_MED_FOOD } from '../data/barcelonaMedFood'
import { LOCALWINGS } from '../data/localwings'
import { SPEED_CONTROL } from '../data/speedControl'
import { DELICIOUS_MEALS } from '../data/deliciousMeals'
import { SPECIAL_COMPONENTS } from '../data/specialComponents'
import { SMART_DONKEY } from '../data/smartDonkey'
import { REPAP_ESAB } from '../data/repapEsab'
import { DIME_LURBENTS } from '../data/dimeLurbents'
import { TRIPRINCE } from '../data/triprince'
import { MEDEV } from '../data/medev'
import { CRAZY_OFFICE } from '../data/crazyOffice'
import { MACHTEX } from '../data/machtex'
import { FRANKFURTER } from '../data/frankfurter'
import { WEATHER_CORP } from '../data/weatherCorp'
import { EXAM_INDEX } from '../data/examIndex'
import { TOPIC_LABELS } from '../data/types'
import type { ExamIndexEntry } from '../data/types'

/* ── Available exam data keyed by examIndex id ── */
const EXAM_DATA: Record<string, Simulation> = {
  agl: ARTISAN_GARDENERS,
  bistrot: LE_BISTROT_PARISIEN,
  cl: CIPRIANI_LOMBARDI,
  limon: LIQUEURS_DE_MONTAGNE,
  freshbread: FRESHBREAD,
  xtremeclimb: XTREMECLIMB,
  gameco: GAMECO,
  intlgoods: INTERNATIONAL_GOODS,
  'barcelona-med-food': BARCELONA_MED_FOOD,
  machtex: MACHTEX,
  medev: MEDEV,
  localwings: LOCALWINGS,
  speedcontrol: SPEED_CONTROL,
  deliciousmeals: DELICIOUS_MEALS,
  specialcomp: SPECIAL_COMPONENTS,
  smartdonkey: SMART_DONKEY,
  rec: REPAP_ESAB,
  dimelurbents: DIME_LURBENTS,
  triprince: TRIPRINCE,
  crazyoffice: CRAZY_OFFICE,
  frankfurt: FRANKFURTER,
  weather: WEATHER_CORP,
}

const TIER_META: Record<1 | 2 | 3, { label: string; color: string; bg: string; description: string }> = {
  1: { label: 'Core', color: 'var(--green)', bg: 'var(--green-soft)', description: 'Do all of these first' },
  2: { label: 'Fill Gaps', color: 'var(--amber)', bg: 'var(--amber-soft)', description: 'Strengthen weak areas' },
  3: { label: 'Target', color: 'var(--blue)', bg: 'var(--blue-soft)', description: 'Target specific weak spots' },
}

export default function Practice() {
  const [view, setView] = useState<string>('list')

  /* ── Exam runner view ── */
  const examData = EXAM_DATA[view]
  if (examData) {
    return <ExamRunner simulation={examData} onBack={() => setView('list')} />
  }

  /* ── Exam selector ── */
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Select an exam case to simulate. Work through all parts with data tables and step-by-step solutions.
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

