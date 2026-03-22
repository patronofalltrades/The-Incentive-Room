import type { Simulation } from './artisanGardeners'

export const TRIPRINCE: Simulation = {
  id: 'triprince',
  title: 'TriPrince Ltd.',
  caseScenario: [
    'TriPrince Ltd. has recently hired a new M&A manager, Matt Rojas, who is evaluating whether TriPrince should acquire Luxembourg Super Drugs (LSD), a small privately-owned pharmaceutical company.',
    'LSD\'s accounts show a gross margin of \u20AC438,000 on total revenues of almost \u20AC9 million. However, operating costs raise concerns: they eat up almost the entire gross margin for a meager Return-on-Sales of 0.98% (operating income of \u20AC86,920 divided by revenues of \u20AC8,838,000).',
    'LSD\'s Advertising, Marketing and Sales (AMS) division oversees all distribution through three channels: supermarket chains, drugstore chains, and stand-alone pharmacies. AMS uses gross margin percentage as a profitability proxy. Operating costs have never been rigorously analyzed.',
  ],
  tableData: {
    headers: ['', 'Supermarkets', 'Drugstores', 'Pharmacies', 'Total'],
    rows: [
      ['Revenues', '\u20AC3,708,000', '\u20AC3,150,000', '\u20AC1,980,000', '\u20AC8,838,000'],
      ['COGS', '\u20AC3,600,000', '\u20AC3,000,000', '\u20AC1,800,000', '\u20AC8,400,000'],
      ['Gross Margin', '\u20AC108,000', '\u20AC150,000', '\u20AC180,000', '\u20AC438,000'],
      ['Operating Costs', '', '', '', '\u20AC351,080'],
      ['Operating Income', '', '', '', '\u20AC86,920'],
      ['Gross Margin %', '2.91%', '4.76%', '9.09%', '4.96%'],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 ABC Analysis',
      context:
        'Design an ABC system to allocate operating costs to the three distribution channels and compute operating income per channel. Activities: Order processing (cost driver: number of orders), Line item ordering (number of line items), Store delivery (number of store deliveries), Cartons shipping (number of cartons shipped per delivery), Shelf stacking (hours of shelf stacking). Total allocable operating costs: \u20AC301,080. Unallocated corporate SG&A: \u20AC50,000.',
      tableData: {
        title: 'Activity Costs and Drivers',
        headers: ['Activity', 'Total Costs', 'Total Driver Units'],
        rows: [
          ['Order Processing', '\u20AC80,000', '2,000 orders'],
          ['Line item ordering', '\u20AC63,840', '21,280 line items'],
          ['Store delivery', '\u20AC71,000', '1,420 deliveries'],
          ['Cartons shipping', '\u20AC76,000', '76,000 cartons'],
          ['Shelf stacking', '\u20AC10,240', '640 hours'],
        ],
      },
    },
    {
      partLabel: 'Part 2 \u2014 Recommendations',
      context: 'Based on the ABC analysis, formulate recommendations for LSD.',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 ABC Analysis',
      questionTitle: 'Q1: ABC cost allocation and operating income by channel',
      question:
        'Use activity-based costing to allocate the operating costs to the three distribution channels and calculate the operating income for each of the three distribution channels.',
      formulaTex:
        '\\text{Pharmacies OH} = 60{,}000 + 45{,}000 + 50{,}000 + 16{,}000 + 1{,}600 = 172{,}600',
      formulaLegend:
        'Pharmacies: 40\u00D71,500 orders + 3\u00D710\u00D71,500 items + 50\u00D71,000 deliveries + 1\u00D716,000 cartons + 16\u00D70.1\u00D71,000 hours',
      approach: [
        'Compute allocation rates: Order processing = 80,000/2,000 = \u20AC40/order; Line items = 63,840/21,280 = \u20AC3/item; Delivery = 71,000/1,420 = \u20AC50/delivery; Cartons = 76,000/76,000 = \u20AC1/carton; Shelf stacking = 10,240/640 = \u20AC16/hour.',
        'Compute driver quantities per channel:',
        'Supermarkets: 140 orders, 14\u00D7140 = 1,960 items, 120 deliveries, 36,000 cartons, 3.0\u00D7120 = 360 hours.',
        'Drugstores: 360 orders, 12\u00D7360 = 4,320 items, 300 deliveries, 24,000 cartons, 0.6\u00D7300 = 180 hours.',
        'Pharmacies: 1,500 orders, 10\u00D71,500 = 15,000 items, 1,000 deliveries, 16,000 cartons, 0.1\u00D71,000 = 100 hours.',
        'Allocated costs \u2014 Supermarkets: 40\u00D7140 + 3\u00D71,960 + 50\u00D7120 + 1\u00D736,000 + 16\u00D7360 = 5,600 + 5,880 + 6,000 + 36,000 + 5,760 = \u20AC59,240.',
        'Allocated costs \u2014 Drugstores: 40\u00D7360 + 3\u00D74,320 + 50\u00D7300 + 1\u00D724,000 + 16\u00D7180 = 14,400 + 12,960 + 15,000 + 24,000 + 2,880 = \u20AC69,240.',
        'Allocated costs \u2014 Pharmacies: 40\u00D71,500 + 3\u00D715,000 + 50\u00D71,000 + 1\u00D716,000 + 16\u00D7100 = 60,000 + 45,000 + 50,000 + 16,000 + 1,600 = \u20AC172,600.',
        'Total allocated = 59,240 + 69,240 + 172,600 = \u20AC301,080. Check: matches total.',
        'Operating income \u2014 Supermarkets: 108,000 \u2212 59,240 = \u20AC48,760.',
        'Operating income \u2014 Drugstores: 150,000 \u2212 69,240 = \u20AC80,760.',
        'Operating income \u2014 Pharmacies: 180,000 \u2212 172,600 = \u20AC7,400.',
      ],
      answer:
        'Supermarkets: operating income = \u20AC48,760; Drugstores: operating income = \u20AC80,760; Pharmacies: operating income = \u20AC7,400. Total = \u20AC136,920 (\u20AC86,920 + \u20AC50,000 unallocated SG&A).',
      keyTakeaway:
        'ABC reveals that pharmacies, despite having the highest gross margin % (9.09%), have the lowest operating income (\u20AC7,400) due to high operating costs driven by many small orders and deliveries.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 2 \u2014 Recommendations',
      questionTitle: 'Q2: Recommendations based on the ABC analysis',
      question:
        'What would you recommend based on the ABC analysis?',
      approach: [
        'Market orientation: consider pricing adjustments for pharmacies to reflect the high cost-to-serve. Implement minimum order sizes or charges for small orders. Use CRM to incentivize pharmacies to consolidate orders.',
        'Supply-chain orientation: improve efficiency in order processing and delivery for pharmacies. Reduce the number of deliveries by encouraging larger, less frequent orders.',
        'Internal accounting: stop evaluating channels on gross margin % alone. Incorporate operating costs into channel profitability analysis. Identify and manage idle capacity costs separately.',
      ],
      answer:
        'Recommendations: (1) Market: adjust pricing/minimum orders for high-cost channels like pharmacies; (2) Supply chain: consolidate deliveries and improve efficiency; (3) Accounting: use ABC-based profitability (not gross margin %) for channel evaluation.',
      keyTakeaway:
        'Gross margin percentage can be misleading when operating costs vary significantly across channels. ABC provides a more accurate picture of channel profitability.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Activity-based costing (ABC)',
      'Cost driver analysis',
      'Channel profitability',
      'Gross margin vs. operating income',
      'Cost-to-serve analysis',
    ],
    keyTheme:
      'ABC reveals that high gross-margin channels may actually be the least profitable when operating costs are properly allocated using activity-specific cost drivers.',
  },
}
