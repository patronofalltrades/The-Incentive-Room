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
        ' Identify the allocation base. The existing cost system uses a two-stage process. In stage 1, service department costs are allocated to production departments using machine hours as the allocation base. The rationale is that service department effort (engineering, management) is assumed to correlate with machine utilization.',
        ' Compute total machine hours. Total = 52,000 (Machining) + 8,000 (Assembly) = 60,000 machine hours.',
        ' Compute the allocation rate. Rate = $360,000 / 60,000 = $6 per machine hour.',
        ' Apply to each department. Machining receives $6 \u00D7 52,000 = $312,000. Assembly receives $6 \u00D7 8,000 = $48,000. Total = $360,000 (check). Machining absorbs 87% of service costs because it uses 87% of machine hours.',
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
        ' Compute total Machining department cost pool. In stage 2, each production department allocates its full cost pool (own costs + allocated service costs) to products. Machining total = $192,000 (own) + $312,000 (service allocation from Q1) = $504,000.',
        ' Determine the allocation base. Stage 2 uses direct labor hours (DLH) to allocate costs to products. Machining DLH: Regular = 15,000, Luxury = 13,000, Total = 28,000.',
        ' Compute the department allocation rate. Rate = $504,000 / 28,000 DLH = $18/DLH.',
        ' Allocate to products. Regular: $18 \u00D7 15,000 = $270,000 (approximately). Luxury: $18 \u00D7 13,000 = $234,000 (approximately). The split is roughly proportional to labor hours, which is the key limitation of this system \u2014 it assumes all overhead correlates with labor time.',
      ],
      answer:
        'From the Machining department: Regular staplers receive approximately $270,000 and Luxury staplers receive approximately $234,000.',
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
        '\\text{Regular} = \\frac{420{,}000 + 270{,}000 + 81{,}000}{300{,}000} \\approx \\$2.57',
      formulaLegend:
        'Assembly allocation: Rate = $216,000/8,000 = $27/DLH. Regular: $27\u00D73,000 = $81,000; Luxury: $27\u00D75,000 = $135,000',
      approach: [
        ' Compute Assembly department cost pool and allocation. Assembly total = $168,000 (own) + $48,000 (service) = $216,000. Rate = $216,000 / 8,000 DLH = $27/DLH. Regular from Assembly: $27 \u00D7 3,000 = $81,000. Luxury from Assembly: $27 \u00D7 5,000 = $135,000.',
        ' Sum total costs for Regular. Direct costs = $420,000. Machining overhead = $270,000. Assembly overhead = $81,000. Total = $771,000 (approximately). Cost per unit = $771,000 / 300,000 = $2.57.',
        ' Sum total costs for Luxury. Direct costs = $400,000. Machining overhead = $234,000. Assembly overhead = $135,000. Total = $769,000 (approximately). Cost per unit = $769,000 / 200,000 = $3.84.',
        ' Note the key observation. Under the existing system, both products receive roughly equal total overhead ($351k vs. $369k) because they consume equal total direct labor hours (18,000 each). This peanut-butter spreading may mask important cost differences that ABC would reveal.',
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
        ' Compute cost driver quantities. Regular orders = 300,000 / 5,000 = 60 orders. Luxury orders = 200,000 / 2,000 = 100 orders. Regular setup hours = 60 \u00D7 3 = 180 hours. Luxury setup hours = 100 \u00D7 5 = 500 hours. Total setup hours = 680.',
        ' Compute ABC activity rates. Machining = $112,000 / 28,000 = $4/labor hour. Assembly = $96,000 / 8,000 = $12/labor hour. Order handling = $240,000 / 250 = $960/order (based on maximum capacity, not actual). Setup = $272,000 / 680 = $400/setup hour. Using maximum capacity for orders means idle capacity cost ($960 \u00D7 90 unused orders = $86,400) is excluded from product costs.',
        ' Allocate to Regular. Machining: $4 \u00D7 15,000 = $60,000. Assembly: $12 \u00D7 3,000 = $36,000. Orders: $960 \u00D7 60 = $57,600. Setup: $400 \u00D7 180 = $72,000. Total overhead = $225,600. Total cost = ($420,000 + $225,600) / 300,000 = $2.15.',
        ' Allocate to Luxury. Machining: $4 \u00D7 13,000 = $52,000. Assembly: $12 \u00D7 5,000 = $60,000. Orders: $960 \u00D7 100 = $96,000. Setup: $400 \u00D7 500 = $200,000. Total overhead = $408,000. Total cost = ($400,000 + $408,000) / 200,000 = $4.04.',
        ' Compare with the traditional system. Regular: $2.15 (ABC) vs. $2.57 (traditional) \u2014 the traditional system overcosted Regular by $0.42. Luxury: $4.04 (ABC) vs. $3.84 (traditional) \u2014 the traditional system undercosted Luxury by $0.20. This cross-subsidization explains Crazy Office\'s declining profitability: the Luxury model is more expensive than previously thought.',
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
        ' Explain the misalignment of cost drivers. The existing system allocates all overhead (including order handling and setup) based on direct labor hours. Both products consume equal total labor hours (18,000 each), so they receive roughly equal overhead. But the actual consumption of activities differs dramatically: Luxury has 100 orders vs. Regular\'s 60, and 500 setup hours vs. Regular\'s 180. The traditional system cannot capture these differences because it uses a single allocation base.',
        ' Explain the idle capacity treatment. The ABC system allocates order handling costs based on maximum capacity (250 orders), meaning idle capacity costs (90 unused order slots \u00D7 $960 = $86,400) are excluded from product costs. The traditional system implicitly allocates all costs, including idle capacity, to products. This is a conceptual improvement \u2014 products should not be penalized for unused capacity.',
        ' Conclude. ABC provides more accurate product costs because it uses activity-specific cost drivers that reflect actual resource consumption patterns. When the traditional allocation base (direct labor hours) does not correlate with the actual drivers of overhead costs (orders, setups), the traditional system systematically cross-subsidizes: it overcharges the simple, high-volume product (Regular) and undercharges the complex, lower-volume product (Luxury).',
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
