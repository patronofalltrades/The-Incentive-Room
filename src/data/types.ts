export interface ExamProblem {
  id: string
  title: string
  source: string
  difficulty: 1 | 2 | 3
  tier: 1 | 2 | 3
  topics: Topic[]
  scenario: string[]
  tables: DataTable[]
  parts: ExamPart[]
}

export interface ExamPart {
  id: string
  title: string
  partType: PartType
  context?: string
  tables?: DataTable[]
  subparts?: SubPart[]
  questions: Question[]
}

export interface SubPart {
  id: string
  title: string
  context: string
  questions: Question[]
}

export interface Question {
  id: string
  number: number
  text: string
  topics: Topic[]
  hint: string
  solutionSteps: string[]
  solutionFormula?: string
  solutionFormulaLegend?: string
  answer: string
  trap?: string
  patternNote?: string
  keyTakeaway?: string
}

export interface DataTable {
  id: string
  title: string
  headers: string[]
  rows: (string | number)[][]
  notes?: string[]
}

export type Topic =
  | 'variance-analysis'
  | 'variance-inflation'
  | 'variance-flexible-budget'
  | 'variance-market-decomposition'
  | 'relevance-analysis'
  | 'cost-plus-pricing'
  | 'idle-capacity'
  | 'abc-costing'
  | 'transfer-pricing'
  | 'goal-congruence'
  | 'corp-oh-distortion'
  | 'investment-cashflows'
  | 'residual-income'
  | 'depreciation-effects'
  | 'system-critique'

export type PartType =
  | 'variance'
  | 'pricing-relevance'
  | 'transfer-pricing'
  | 'investment-ri'
  | 'critique'

export const TOPIC_LABELS: Record<Topic, string> = {
  'variance-analysis': 'Variance Analysis',
  'variance-inflation': 'Inflation Adjustment',
  'variance-flexible-budget': 'Flexible Budget',
  'variance-market-decomposition': 'Market Decomposition',
  'relevance-analysis': 'Relevance Analysis',
  'cost-plus-pricing': 'Cost-Plus Pricing',
  'idle-capacity': 'Idle Capacity',
  'abc-costing': 'Activity-Based Costing',
  'transfer-pricing': 'Transfer Pricing',
  'goal-congruence': 'Goal Congruence',
  'corp-oh-distortion': 'Corporate Overhead Distortion',
  'investment-cashflows': 'Investment Cash Flows',
  'residual-income': 'Residual Income',
  'depreciation-effects': 'Depreciation Effects',
  'system-critique': 'System Critique',
}

export const PART_TYPE_LABELS: Record<PartType, string> = {
  'variance': 'Variance Analysis',
  'pricing-relevance': 'Pricing and Relevance',
  'transfer-pricing': 'Transfer Pricing',
  'investment-ri': 'Investment and Residual Income',
  'critique': 'System Critique',
}

export interface ExamIndexEntry {
  id: string
  title: string
  tier: 1 | 2 | 3
  difficulty: 1 | 2 | 3
  topics: Topic[]
  questionCount: number
  estimatedMinutes: number
  whyStudy: string
  available: boolean
}
