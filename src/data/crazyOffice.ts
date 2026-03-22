import type { Simulation } from './artisanGardeners'

export const CRAZY_OFFICE: Simulation = {
  id: 'crazy-office',
  title: 'Crazy Office Manufacturers',
  caseScenario: [
    'Crazy Office manufactures two models of staplers: Regular and Luxury. The Luxury model, introduced 2 years ago, now accounts for more than half of the firm\'s profits. It has captured over 65% share of its market segment, while the Regular model\'s market share has decreased to 12%.',
    'The manufacturing plant has three departments: Machining, Assembly (both production), and a Service department providing engineering and management services. Total manufacturing overhead is $720,000.',
    'Despite the successful introduction of the Luxury model, Crazy Office\'s profitability has been declining for the past 2 years. A special task force is investigating the reasons.',
  ],
  tableData: {
    headers: ['', 'Total', 'Regular', 'Luxury'],
    rows: [
      ['Number of units', '500,000', '300,000', '200,000'],
      ['Sales', '$2,400,000', '$1,200,000', '$1,200,000'],
      ['Direct costs', '$820,000', '$420,000', '$400,000'],
      ['Manufacturing overhead', '$720,000', '', ''],
    ],
  },
  partContexts: [
    {
      partLabel: 'Part 1 \u2014 Existing Cost System (Q1-Q3)',
      context:
        'Cost system #1: Step 1 \u2014 Service dept ($360,000) is allocated to Machining and Assembly proportionally to machine hours. Step 2 \u2014 Each production dept\'s costs (own + allocated service) are allocated to products based on direct labor hours. Machining dept own costs: $192,000. Assembly dept own costs: $168,000.',
      tableData: {
        title: 'Operational Data',
        headers: ['', 'Machining', 'Assembly', 'Total'],
        rows: [
          ['Direct labor hours (total)', '28,000', '8,000', '36,000'],
          ['  Regular', '15,000', '3,000', '18,000'],
          ['  Luxury', '13,000', '5,000', '18,000'],
          ['Machine hours', '52,000', '8,000', '60,000'],
        ],
      },
    },
    {
      partLabel: 'Part 2 \u2014 ABC System (Q4-Q5)',
      context:
        'Cost system #2 based on activity analysis. Four cost pools: Machining ($112,000, driver: labor hours of machining), Assembly ($96,000, driver: labor hours of assembly), Handling of orders ($240,000, driver: number of orders, based on max capacity of 250 orders), Setup ($272,000, driver: setup hours). Regular: avg order = 5,000 staplers, 3 setup hours/order. Luxury: avg order = 2,000 staplers, 5 setup hours/order.',
    },
  ],
  steps: [
    // ===== Q1 =====
    {
      id: 'q1',
      partLabel: 'Part 1 \u2014 Existing Cost System (Q1-Q3)',
      questionTitle: 'Q1: Service department allocation rate',
      question:
        'With the existing cost system, what is the allocation rate used to allocate cost from the service department to the two production departments?',
      formulaTex:
        '\\text{Rate} = \\frac{360{,}000}{60{,}000} = \\$6 \\text{ per machine hour}',
      formulaLegend:
        'Service dept cost ($360,000) divided by total machine hours (52,000 + 8,000 = 60,000)',
      approach: [
        'Service department cost = $360,000.',
        'Total machine hours = 52,000 (Machining) + 8,000 (Assembly) = 60,000.',
        'Allocation rate = $360,000 / 60,000 = $6 per machine hour.',
        'Allocated to Machining: $6 \u00D7 52,000 = $312,000.',
        'Allocated to Assembly: $6 \u00D7 8,000 = $48,000.',
      ],
      answer: 'The allocation rate is $6 per machine hour.',
      keyTakeaway:
        'The service department cost is allocated to production departments using machine hours as the allocation base.',
    },
    // ===== Q2 =====
    {
      id: 'q2',
      partLabel: 'Part 1 \u2014 Existing Cost System (Q1-Q3)',
      questionTitle: 'Q2: Total overhead from Machining department to each product',
      question:
        'With the existing cost system, what is the total overhead (in $) that will be allocated from the Machining department to Regular staplers and Luxury staplers?',
      formulaTex:
        '\\text{Machining total} = 192{,}000 + 312{,}000 = 504{,}000; \\quad \\text{Rate} = \\frac{504{,}000}{28{,}000} = 18',
      formulaLegend:
        'Machining dept own costs ($192,000) + allocated service ($312,000) = $504,000. Allocated using direct labor hours.',
      approach: [
        'Machining dept total cost = $192,000 (own) + $312,000 (service allocation) = $504,000.',
        'Machining allocation rate = $504,000 / 28,000 DLH = $18/DLH.',
        'But more precisely: Dept rate = $192,000/28,000 = $6.857/DLH; Service rate = $312,000/28,000 = $11.143/DLH.',
        'Regular: ($6.857 \u00D7 15,000) + ($11.143 \u00D7 15,000) = $102,855 + $167,145 = $269,850 (approx).',
        'Luxury: ($6.857 \u00D7 13,000) + ($11.143 \u00D7 13,000) = $89,141 + $144,859 = $233,870 (approx).',
        'Check: $269,850 + $233,870 \u2248 $503,720 (rounding).',
      ],
      answer:
        'From the Machining department: Regular staplers receive approximately $269,850 and Luxury staplers receive approximately $233,870.',
      keyTakeaway:
        'The allocation from Machining is based on direct labor hours, so the product with more labor hours in machining receives more overhead.',
    },
    // ===== Q3 =====
    {
      id: 'q3',
      partLabel: 'Part 1 \u2014 Existing Cost System (Q1-Q3)',
      questionTitle: 'Q3: Total manufacturing cost per unit',
      question:
        'With the existing cost system, what is the total manufacturing cost (in $) of one Regular stapler and one Luxury stapler?',
      formulaTex:
        '\\text{Regular} = \\frac{420{,}000 + 269{,}850 + 81{,}000}{300{,}000} = \\$2.57',
      formulaLegend:
        'Assembly allocation: Dept rate = $168,000/8,000; Service rate = $48,000/8,000. Regular: (21+6)\u00D73,000 = $81,000; Luxury: (21+6)\u00D75,000 = $135,000',
      approach: [
        'Assembly dept total = $168,000 + $48,000 = $216,000.',
        'Assembly allocation rate = $216,000 / 8,000 DLH = $27/DLH.',
        'Regular from Assembly: $27 \u00D7 3,000 = $81,000.',
        'Luxury from Assembly: $27 \u00D7 5,000 = $135,000.',
        'Regular total cost = $420,000 (direct) + $269,850 (machining) + $81,000 (assembly) = $770,850.',
        'Cost per Regular = $770,850 / 300,000 = $2.57.',
        'Luxury total cost = $400,000 (direct) + $233,870 (machining) + $135,000 (assembly) = $768,870.',
        'Cost per Luxury = $768,870 / 200,000 = $3.84.',
      ],
      answer:
        'Cost per Regular stapler: $2.57. Cost per Luxury stapler: $3.84.',
      keyTakeaway:
        'Under the existing cost system, the Regular stapler appears cheaper because overhead is spread based on direct labor hours, which are equal for both products.',
    },
    // ===== Q4 =====
    {
      id: 'q4',
      partLabel: 'Part 2 \u2014 ABC System (Q4-Q5)',
      questionTitle: 'Q4: ABC manufacturing cost per unit',
      question:
        'Use the output from the activity analysis to calculate the total manufacturing cost of one Regular stapler and one Luxury stapler.',
      formulaTex:
        '\\text{Regular}_{ABC} = \\frac{420{,}000 + 225{,}600}{300{,}000} = \\$2.15; \\quad \\text{Luxury}_{ABC} = \\frac{400{,}000 + 408{,}000}{200{,}000} = \\$4.04',
      formulaLegend:
        'Orders: Regular = 300k/5k = 60, Luxury = 200k/2k = 100. Setup hours: Regular = 60\u00D73 = 180, Luxury = 100\u00D75 = 500. Total = 680.',
      approach: [
        'Cost driver quantities: Regular orders = 300,000/5,000 = 60; Luxury orders = 200,000/2,000 = 100. Total orders = 160.',
        'Setup hours: Regular = 60 \u00D7 3 = 180; Luxury = 100 \u00D7 5 = 500. Total = 680.',
        'Allocation rates: Machining = $112,000/28,000 = $4/hr; Assembly = $96,000/8,000 = $12/hr; Orders = $240,000/250 = $960/order (based on max capacity); Setup = $272,000/680 = $400/hr.',
        'Regular overhead: 4\u00D715,000 + 12\u00D73,000 + 960\u00D760 + 400\u00D7180 = 60,000 + 36,000 + 57,600 + 72,000 = $225,600.',
        'Luxury overhead: 4\u00D713,000 + 12\u00D75,000 + 960\u00D7100 + 400\u00D7500 = 52,000 + 60,000 + 96,000 + 200,000 = $408,000.',
        'Regular total = ($420,000 + $225,600) / 300,000 = $2.15.',
        'Luxury total = ($400,000 + $408,000) / 200,000 = $4.04.',
      ],
      answer:
        'ABC cost per Regular stapler: $2.15. ABC cost per Luxury stapler: $4.04.',
      keyTakeaway:
        'ABC reveals the Luxury stapler is more expensive than the existing system indicated ($4.04 vs. $3.84), while the Regular stapler is cheaper ($2.15 vs. $2.57).',
    },
    // ===== Q5 =====
    {
      id: 'q5',
      partLabel: 'Part 2 \u2014 ABC System (Q4-Q5)',
      questionTitle: 'Q5: Why do costs differ between the two systems?',
      question:
        'Why is the cost of staplers with the ABC system different from the cost with the existing cost system?',
      approach: [
        'Reason #1: The existing system allocates service costs (setup, orders) using direct labor hours, which are equal for both products (18,000 each). But the actual consumption of these activities differs significantly: Luxury has many more orders (100 vs. 60) and much more setup time (500 vs. 180 hours).',
        'Reason #2: The ABC system does not allocate idle capacity for the handling of orders activity (actual 160 orders vs. max 250). The existing system implicitly allocates all costs including idle capacity.',
      ],
      answer:
        'Two reasons: (1) The existing system uses direct labor hours to allocate service costs, which are equal for both products, but actual activity consumption (orders, setup) differs significantly. (2) The ABC system excludes idle capacity costs from the order handling activity (160/250 orders).',
      keyTakeaway:
        'When the traditional allocation base (direct labor hours) does not correlate with actual resource consumption, ABC provides more accurate product costs by using activity-specific cost drivers.',
    },
  ],
  summary: {
    conceptsCovered: [
      'Two-stage cost allocation',
      'Activity-based costing (ABC)',
      'Cost driver selection',
      'Product cost distortion',
      'Idle capacity in ABC',
      'Cross-subsidization between products',
    ],
    keyTheme:
      'Traditional overhead allocation can create cross-subsidization between products. ABC uses activity-specific cost drivers to reveal that high-complexity products (Luxury) consume disproportionately more overhead than simpler products (Regular).',
  },
}
