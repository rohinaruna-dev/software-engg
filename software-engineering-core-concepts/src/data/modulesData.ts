/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModuleData } from "../types";

export const modulesData: ModuleData[] = [
  {
    id: "importance",
    title: "1. Why Software Engineering ",
    shortDescription: "Coding is just writing; Engineering is building things that last.",
    emoji: "🚀",
    academicContext: "You've written 100-line Python scripts and built dynamic websites for hackathons. But what happens when you have to build systems with 1,000,000+ lines of code, worked on by 200 developers, used by millions of users, over 10 years? That's where Software Engineering (SE) comes in. It is a systematic, disciplined, and quantifiable approach to development.",
    detailedContent: [
      {
        sectionTitle: "The Core Difference: Hobbyist Coder vs. Professional Engineer",
        paragraphs: [
          "A lot of CS students fall into the trap of thinking software engineering is just 'fancy programming.' Historically, in the 1960s, computing faced the 'Software Crisis'—projects were consistently over budget, behind schedule, filled with bugs, or outright abandoned. Why? Because writing a program is easy, but engineering a reliable, maintainable software product is incredibly hard.",
          "Software Engineering is not just about writing syntax. It is the application of engineering principles (like those in civil or mechanical engineering) to software creation. It covers the entire lifecycle, ensuring the software is efficient, cost-effective, scalable, secure, and adaptable to change."
        ]
      },
      {
        sectionTitle: "The Key Attributes of High-Quality Software",
        paragraphs: [
          "To understand why we engineer software, we look at the standard criteria of professional software: Maintainability (can team members easily update it?), Dependability & Security (does it fail safely, protect user privacy?), Efficiency (does it waste memory, CPU, or battery?), and Usability (can the target user complete tasks without pulling their hair out?).",
          "If you code without engineering discipline, you pile up 'Technical Debt.' Just like credit card debt, you run fast now but pay heavy interest later in the form of bugs, impossible-to-refactor code, and architectural paralysis."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Classic Hackathon Hangover",
        scenario: "You and two friends build a cool food delivery app in 36 hours. You don't write tests, ignore design patterns, and use global variables everywhere. The demo works! The next week, an investor asks to add a 'Group Order' feature. You open the code, and no one understands how anything runs. Changing one line breaks the login screen.",
        analogy: "Hobbyist coding is like building a gorgeous treehouse with cardboard and duct tape. Software engineering is like designing a 40-story apartment complex with blueprints, structural testing, and fire escape plans.",
        takeaway: "Individual coding scales with your personal brainpower. Managed Software Engineering scales with organizational, team, and architectural guidelines."
      }
    ],
    quiz: [
      {
        id: "imp_q1",
        question: "What historic event led directly to the birth of 'Software Engineering' as a formal discipline?",
        options: [
          "The invention of the mouse and graphical user interfaces.",
          "The 'Software Crisis' of the late 1960s, where projects consistently failed due to complexity and lack of discipline.",
          "The transition from assembly language to high-level C programming.",
          "A shortage of silicon wafers for manufacturing memory chips."
        ],
        correctAnswer: 1,
        explanation: "The term 'Software Engineering' was popularized during conferences in 1968 to address the 'Software Crisis'—where software systems were late, over-budget, and highly unreliable."
      },
      {
        id: "imp_q2",
        question: "How does 'Technical Debt' manifest in software projects?",
        options: [
          "It's a literal financial loan a company takes to pay their developers.",
          "It is the cost of buying premium API keys and cloud databases.",
          "The long-term cost and friction caused by choosing quick and messy code hacks over clean, engineered design.",
          "The legal penalty for violating open-source software license terms."
        ],
        correctAnswer: 2,
        explanation: "Choosing easy, un-engineered, hacky fixes enables quick releases but creates 'Technical Debt'—making subsequent updates exponentially harder and more expensive."
      }
    ],
    keyTakeaways: [
      "Programming is a solo activity; Software Engineering is a team discipline.",
      "The 'it works on my machine' excuse is the ultimate indicator of a lack of software engineering discipline.",
      "Quality software is evaluated on four pillars: Maintainability, Dependability, Efficiency, and Usability."
    ]
  },
  {
    id: "problem_solving",
    title: "2. Problem-Solving Activity",
    shortDescription: "Coding is only 20% of the job. The real challenge is defining the problem first.",
    emoji: "🧩",
    academicContext: "Most students get a assignment, open IDE, and start typing. In senior software engineering, coding is actually the LAST step of the problem-solving cycle. Jumping to implementation without defining rules is the fastest route to an application that solves the WRONG problem.",
    detailedContent: [
      {
        sectionTitle: "The Systematic Problem-Solving Pipeline",
        paragraphs: [
          "Software development is fundamentally a problem-solving activity. This activity follows a rigorous sequence: Problem Formulation & Scope Definition (understanding exactly WHAT needs to be solved, defining the boundaries), Constraint Analysis (identifying limits on hardware, latency, budget, and data), Solution Space Exploration (evaluating multiple architectural layouts, algorithms, and tech stacks), Implementation (coding), and Verification (asserting the solution matches requirements under load).",
          "If you miss the first two stages, you suffer from 'Scope Creep'—where the software goals keep bloating because nobody defined where the work starts and ends."
        ]
      },
      {
        sectionTitle: "Analyzing Constraints: The Engineer's Boundary",
        paragraphs: [
          "Unlike standard algorithms class, real-world problems have complex constraints. Some are technical (e.g., must run in a browser with less than 20MB of RAM, or must handle 10,000 WebSocket connections per second). Others are business-related (e.g., must comply with GDPR guidelines, or be developed in 3 months by a 4-person team).",
          "An engineered solution is always a compromise between competing constraints (e.g., security vs. high performance, cost vs. state-of-the-art availability)."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The 'College Dining Booking' Disaster",
        scenario: "Your university wants a portal for students to book dining slots. The developer writes a brilliant booking algorithm that finds optimal slot choices in O(N log N) time. However on the first day, 5,000 students hit the server at exactly 8:00 AM. The server crashes because the developer didn't formulate the problem about *concurrency limit*—only about slot optimization.",
        analogy: "Writing code without understanding the problem is like buying a hyper-expensive kitchen knife to cut down a gigantic oak forest. You are choosing the tool before inspecting the trees.",
        takeaway: "Always separate the 'What' (Problem Definition & Requirements) from the 'How' (Algorithms & Tech Stack)."
      }
    ],
    quiz: [
      {
        id: "prob_q1",
        question: "Why is 'Scope Creep' dangerous in a software project?",
        options: [
          "It refers to viruses and security exploits gradually infesting the server.",
          "It increases the build file sizes, causing slower network delivery.",
          "It's the uncontrolled gradual expansion of project requirements, causing missed deadlines and budget overruns.",
          "It is a database optimization technique that goes too far."
        ],
        correctAnswer: 2,
        explanation: "Without a clear problem definition and strict boundaries, clients and developers will continually append 'small features', inflating the project scope until the deadline is missed."
      },
      {
        id: "prob_q2",
        question: "In the context of SE problem solving, what consists of our 'Constraint Space'?",
        options: [
          "Both technical constraints (RAM, CPU, latency) and business limitations (deadlines, budgets, legal compliance).",
          "Only the limits of the programming language syntax.",
          "The layout properties of CSS flexbox containers.",
          "The available memory on the user's hard drive only."
        ],
        correctAnswer: 0,
        explanation: "Software engineering must resolve both technical limits (e.g., browser RAM, load throughput) and real-life human constraints (e.g., budget, GDPR laws, launch schedules)."
      }
    ],
    keyTakeaways: [
      "Never write a single line of code until you can write down the problem in three simple sentences.",
      "Constraints are not annoyances; they are the architectural parameters that define the optimal design.",
      "Always explore at least two distinct approaches before settling on one."
    ]
  },
  {
    id: "modelling",
    title: "3. Modelling Activity",
    shortDescription: "Visualizing blueprints before laying brick and mortar.",
    emoji: "📐",
    academicContext: "Would you build a skyscraper without blueprint drafts? No. Why do we code complex portals without architectural models? A model is an abstraction of a system that allows us to reason about it, evaluate security/performance, and communicate designs to teammates before writing code.",
    detailedContent: [
      {
        sectionTitle: "Abstractions and Representation",
        paragraphs: [
          "A software system is invisible and complex. Modelling is the process of building simplified representations (abstractions) to analyze specific perspectives. We use Unified Modeling Language (UML) as a standardized blueprint vocabulary.",
          "Models generally focus on three different views: Structural Models (stating the system's static structure, like UML Class Diagrams), Dynamic/Behavioral Models (showing how data flows over time, like Sequence Diagrams and State Machine Diagrams), and Functional Models (showing what the system does from a user's perspective, like Use Case Diagrams)."
        ]
      },
      {
        sectionTitle: "UML Relationship Cheat-Sheet for Engg Students",
        paragraphs: [
          "Association: A general peer-to-peer relationship between two classes (e.g., Student and Professor).",
          "Aggregation (Weak Has-A): Object A contains Object B, but B can exist independently (e.g., Department 'has' Professors. If department is deleted, professors still exist). Illustrated by an empty diamond.",
          "Composition (Strong Has-A): Object A strictly owns Object B. If A is destroyed, B is destroyed too (e.g., House has Rooms. Delete the house, rooms vanish). Illustrated by a filled diamond.",
          "Inheritance/Generalization (Is-A): Class A extends Class B (e.g., CheckingAccount 'is a' BankAccount). Illustrated by a hollow arrowhead pointing to parent-class."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Battle-Royale Class Structure",
        scenario: "You are designing a multiplayer game. You create a 'Player' class, a 'Weapon' class, and an 'Inventory' class. How do they link? Player HAS-A Inventory (Composition - if player leaves, inventory is cleared). Inventory has Weapons (Aggregation - weapons exist as generic entities in the database). Both Player and Enemy inherit from 'Character' (Inheritance).",
        analogy: "Studying UML relationship arrows feels academic, but it's the exact same difference between gluing tables together in SQL vs writing complex object-oriented clean code.",
        takeaway: "Pick the correct relationship: Composition means shared lifespans; Aggregation means independent lifespans."
      }
    ],
    quiz: [
      {
        id: "mod_q1",
        question: "If Object A is deleted, and its nested Object B is also automatically destroyed, what type of UML relationship is this?",
        options: [
          "Aggregation (Weak 'Has-A')",
          "Composition (Strong 'Has-A')",
          "Generalization ('Is-A')",
          "Dependency"
        ],
        correctAnswer: 1,
        explanation: "Composition represents a strict ownership relationship with coincident lifetimes. If the container (A) is destroyed, the parts (B) are destroyed too."
      },
      {
        id: "mod_q2",
        question: "Which diagram is best suited to show the step-by-step chronology of messages exchanged between objects at runtime?",
        options: [
          "Class Diagram",
          "Component Diagram",
          "Sequence Diagram",
          "Deployment Diagram"
        ],
        correctAnswer: 2,
        explanation: "Sequence Diagrams are dynamic behavioral models specifically engineered to map the order of message interactions over a chronological timeline."
      }
    ],
    keyTakeaways: [
      "Models are not docs to write AFTER you finish coding; they are blueprints to guide you DURING development.",
      "Abstractions throw away useless details to help the human brain focus on one architectural concern.",
      "UML is a universal team language—it keeps developers, PMs, and architects on the exact same page."
    ]
  },
  {
    id: "knowledge_acquisition",
    title: "4. Knowledge Acquisition Activity",
    shortDescription: "Software development is a learning loop, not a typing marathon.",
    emoji: "🧠",
    academicContext: "Software engineering is fundamentally a cognitive process of acquiring, structuring, and formalizing knowledge. Requirements are NEVER static because neither you nor your client fully understands the problem at day one. Every sprint is a scientific experiment that feeds back new knowledge.",
    detailedContent: [
      {
        sectionTitle: "Software as an Evolutionary Learning Process",
        paragraphs: [
          "When you start a project, you are in a state of high 'epistemic uncertainty.' You have incomplete knowledge of the business domain, the technical stack, user habits, and performance barriers. Therefore, software development isn't just about translating a rigid spec doc into binaries. It is about actively learning.",
          "We acquire knowledge through three core feedback cycles: Prototyping (building quick mockups to see what breaks), User Testing (watching real humans fail to use your app), and Agile Retro sessions. Every software engineer is a researcher who continuously extracts domain rules from non-technical clients."
        ]
      },
      {
        sectionTitle: "Requirements Gathering: The Art of the Interview",
        paragraphs: [
          "A classic mistake: asking the client 'What features do you want?' Clients almost never know what they actually *need*. They tell you about database grids and buttons. An engineer asks: 'What daily problems are you trying to fix?'",
          "Acquiring domain knowledge requires clarifying ambiguous definitions. If the client says 'the system must be fast', you must acquire the actual metric: 'the checkout API must respond in under 200ms at 1000 requests/sec.'"
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Coffee Shop Owner's Ambition",
        scenario: "An independent coffee shop owner wants you to build an app. They ask for 'AI-driven drink suggestions.' After talking, you realize they just want to give a 10% discount to returning customers who buy americanos on Mondays. A simple SQLite database of purchase counts is all that's required—no AI needed.",
        analogy: "Building software without knowledge acquisition is like starting to draw a portrait of a stranger without looking at them first, assuming they look like a template.",
        takeaway: "Listen to the user's business pain, not their self-prescribed software technical remedies."
      }
    ],
    quiz: [
      {
        id: "know_q1",
        question: "Why do we describe Software Engineering as a 'Knowledge Acquisition' activity?",
        options: [
          "Because developers spend over 80% of their work day reading textbooks.",
          "Because requirements are originally highly uncertain, and the team must systematically learn about the problem, user domain, and limitations via feedback loops.",
          "Because you need a Master's degree to understand advanced cloud frameworks.",
          "Because of the corporate search databases we have to buy."
        ],
        correctAnswer: 1,
        explanation: "Software projects start with huge uncertainties. Success requires systematic discovery of domain rules, tech constraints, and user behaviors through prototyping and interaction."
      },
      {
        id: "know_q2",
        question: "When a client says the application 'must load instantly', how should a professional software engineer handle this query?",
        options: [
          "Nod politely and add a loading spinner to make it look fast.",
          "Decline the client, saying 'instantly' is physically impossible due to network speeds.",
          "Help the client quantify the metric, e.g., 'Ensure the Largest Contentful Paint (LCP) is under 1.5 seconds on a 3G network.'",
          "Ignore it and configure high-performance server clusters."
        ],
        correctAnswer: 2,
        explanation: "Good engineering requires clarifying fluffy constraints ('fast', 'secure') into verifiable, quantitative service targets that can be explicitly measured."
      }
    ],
    keyTakeaways: [
      "The client does not know what they want. It is your job to help them discover what they need.",
      "Prototyping is not wastes of time; it is a mechanism to purchase knowledge cheap before spending real budget.",
      "Every bug found in production is a piece of domain knowledge you failed to acquire during requirements gathering."
    ]
  },
  {
    id: "rationale_driven",
    title: "5. Rationale-Driven Activity",
    shortDescription: "Documenting the 'Why' behind every click, query, and microservice.",
    emoji: "⚖️",
    academicContext: "Junior developers argue over which language is 'coolest.' Senior software engineers make choices based on system trade-offs: cost, maintainability, performance, and scaling limits. Even more importantly, they record their reasoning in Architecture Decision Records (ADR). Code shows WHAT you built; Rationale shows WHY you chose it.",
    detailedContent: [
      {
        sectionTitle: "The Science of Architectural Trade-offs",
        paragraphs: [
          "There are no perfect solutions in software, only trade-offs. If you choose PostgreSQL (Relational), you get powerful ACID transactions but have to manage schema migrations. If you choose MongoDB (NoSQL), you get rapid prototyping schema-free tables, but risk data inconsistencies if you run complex join queries.",
          "A Rationale-Driven activity demands that every major decision is justified. The documentation must cite alternatives considered, benefits of the chosen route, and the accepted drawbacks."
        ]
      },
      {
        sectionTitle: "What is an ADR (Architecture Decision Record)?",
        paragraphs: [
          "An ADR is a short text file kept directly in the codebase. It contains: Title, Status (Proposed, Accepted, Superceded), Context (the problem we are facing), Decision (the tech or architecture we are adopting), and Consequences (what we lose or gain as a result).",
          "By writing ADRs, you prevent the 'We changed this but forgot why' syndrome 18 months down the road when original developers leave the company."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The SQL vs NoSQL Dilemma",
        scenario: "You are building a micro-blogging platform. If you pick SQL, storing user profile relationships is rock solid. If you pick NoSQL, you can scale user feeds across the globe instantly but updating a username might take several seconds to replicate everywhere (eventual consistency). A software engineer documents this compromise, justifying why slow replication is acceptable for modern feed reading.",
        analogy: "Picking a tech stack without writing down the rationale is like buying a massive diesel-guzzling pickup truck to commute 2 miles in a dense, crowded city just because 'trucks look awesome.'",
        takeaway: "Every architectural choice has a dark side. Acknowledging and documenting the drawbacks is the absolute sign of engineering maturity."
      }
    ],
    quiz: [
      {
        id: "rat_q1",
        question: "In system architecture, what is an 'ADR'?",
        options: [
          "Automatic Dependency Resolver - a package manager tool like npm.",
          "Architectural Decision Record - a short document capturing a design choice, the context, and the trade-offs involved.",
          "Alternative Design Resource - a backup cloud region where server runs.",
          "Application Delivery Route - the network configuration of a physical load-balancer."
        ],
        correctAnswer: 1,
        explanation: "An ADR is a structured, version-controlled document that registers key architectural choices, including the context and positive/negative architectural consequences."
      },
      {
        id: "rat_q2",
        question: "Which of the following describes the core mentality of a Rationale-Driven engineer?",
        options: [
          "Always select the newest, hot framework with the most GitHub stars.",
          "Make decisions based on personal coding preferences, avoiding old databases.",
          "Assert that there are no perfect architectures, only trade-offs, and document why a specific trade-off is optimal for the current business context.",
          "Convince the client to buy the most expensive enterprise hosting licenses."
        ],
        correctAnswer: 2,
        explanation: "Good engineering values objectivity. Experienced engineers accept trade-offs, evaluate compromises against business needs, and write down their rationale for future teams."
      }
    ],
    keyTakeaways: [
      "System design has zero absolutes; everything is a context-dependent trade-off.",
      "An undocumented decision is a ticking time-bomb of technical confusion.",
      "Consequences of your decisions are more important than the initial implementation details."
    ]
  },
  {
    id: "umbrella",
    title: "6. Umbrella Activities",
    shortDescription: "The silent operations that keep your code from self-destructing.",
    emoji: "☂️",
    academicContext: "Most students think software development is just planning, coding, and testing. But how do you prevent developers from overwriting each other's code? How do we catch bugs before they reach customers? How do we handle security audits? These continuous, project-wide guardrails are called 'Umbrella Activities.'",
    detailedContent: [
      {
        sectionTitle: "The Continuous Quality and Integrity Guardrails",
        paragraphs: [
          "Umbrella activities run from the very first day of a project to the day it's decommissioned, completely independent of whatever specific SDLC model is active.",
          "Key Umbrella Activities include: Software Configuration Management (SCM) (managing version control, branching strategies, and CI/CD pipelines so code merges safely), Software Quality Assurance (SQA) (establishing testing pipelines, linting rules, and peer reviews), Project Tracking & Control (using Kanban or JIRA to see if the team is falling behind sprint goals), and Risk Management (identifying technical or team failures before they occur)."
        ]
      },
      {
        sectionTitle: "Formal Technical Reviews and Measurement",
        paragraphs: [
          "Two other vital umbrella items: Reusability Management (designing shared libraries, components, or microservices instead of copy-pasting code) and Work Product Preparation (producing docs, API specs, and deployment logs).",
          "Without umbrella activities, a software project undergoes 'entropy'—meaning it slowly descends into chaos as team sizes grow."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Main-Branch Catastrophe",
        scenario: "An engineering team is building a banking portal. Developer A writes the credit card module, and Developer B writes the savings module. Because they don't have SCM branching guidelines (an umbrella activity), Developer A pushes directly to the 'main' branch, completely wiping out Developer B's code. Production crashes, and users are shown zero bank balances.",
        analogy: "Umbrella activities are like the traffic lights, seatbelts, highway dividers, and speed limits of an expressway. You don't build the road with them, but without them, everyone crashes.",
        takeaway: "Writing code without software quality assurance and configuration control is just playing Russian roulette with your codebase."
      }
    ],
    quiz: [
      {
        id: "umb_q1",
        question: "When are 'Umbrella Activities' executed during a software project?",
        options: [
          "Only during the final testing phase of the SDLC.",
          "Only when client requests formal documentation.",
          "Continuously across the entire lifespan of the project, independent of the development model.",
          "During rainy seasons when remote server centers might lose power."
        ],
        correctAnswer: 2,
        explanation: "Umbrella activities are continuous guardrails (e.g., SQA, risk management, SCM) that occur throughout the entire software process from kickoff to maintenance."
      },
      {
        id: "umb_q2",
        question: "Which umbrella activity covers code version control, branching policies, and CI/CD deployment logic?",
        options: [
          "Software Quality Assurance (SQA)",
          "Software Configuration Management (SCM)",
          "Risk Management",
          "Measurements and Metrics"
        ],
        correctAnswer: 1,
        explanation: "Software Configuration Management (SCM) focuses on controlling, monitoring, and tracking changes to the project artifacts, including Git version control and assets."
      }
    ],
    keyTakeaways: [
      "Configuration management (Git, CI/CD) is not a devops tool; it is a core software engineering necessity.",
      "If a process cannot be measured (using metrics), it cannot be managed or improved.",
      "Risk assessment should happen weekly: 'What if our API provider goes down tomorrow?'"
    ]
  },
  {
    id: "challenges",
    title: "7. Software Engineering Challenges",
    shortDescription: "Legacy code, massive scales, and security in an unstable world.",
    emoji: "🔥",
    academicContext: "In classroom settings, you code brand-new apps with zero users. In corporate tech, you'll be dealing with 'Legacy Systems' (pre-existing giant code written in 2012), scaling to millions of concurrent requests, protecting against state-sponsored hackers, and pushing updates twice a day. Welcome to real-world challenges.",
    detailedContent: [
      {
        sectionTitle: "Legacy Code and Software Aging",
        paragraphs: [
          "In the real world, 80% of software engineering is reading, updating, and patching existing codebases rather than building greenfield systems. Legacy code is software that works, delivers value, but is difficult to change due to obsolete frameworks, missing tests, or retired authors.",
          "Software undergoes 'aging'—not because physical bits break, but because the environment, libraries, and customer requirements shift around it. Managing and gradually refactoring legacy code without causing outages is a master-level engineering discipline."
        ]
      },
      {
        sectionTitle: "Modern Scaling, Diversity, and Heterogeneity",
        paragraphs: [
          "Today's apps run across a massive 'heterogeneity' of devices: iPhones, Androids, smart TVs, physical IoT smart watches, and old desktop browsers. Ensuring consistent performance, security, and rendering across these diverse environments is incredibly hard.",
          "Additionally, security has shifted from an afterthought to a core requirement. 'Security by Design' means assuming every server client is an attacker, validating all inputs, implementing Zero-Trust network protocols, and conducting runtime code scans."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Legacy Bank Banking System",
        scenario: "You get a job at a global bank. You expect to write modern React/Node systems. On day one, they couple you with a core COBOL ledger system written in 1988. It processes $50 Billion. A single typo in your bridge code could freeze credit transactions globally.",
        analogy: "Legacy code refactoring is like replacing the jet engine of a commercial airplane with a hybrid turbine mid-flight, while the plane carries 300 business passengers.",
        takeaway: "Legacy code is not bad code—it is successful code that outlived its original technical environment."
      }
    ],
    quiz: [
      {
        id: "cha_q1",
        question: "Why does software experience 'software aging' and deterioration?",
        options: [
          "The compiled silicon chips leak electrons over time, corrupting the source files.",
          "Because the external environments, frameworks, dependencies, and requirements evolve, making unchanged code obsolete, fragile, and insecure.",
          "Because the cloud servers physical SSD hard drives decay.",
          "It's a process where developers get older and forget the original code logic."
        ],
        correctAnswer: 1,
        explanation: "Software doesn't rot physically, but it 'ages' as its ecosystem—dependencies, hardware, OS versions, security standards, and user expectations—continuously changes around it."
      },
      {
        id: "cha_q2",
        question: "What does are the challenges of 'Software Heterogeneity' mean?",
        options: [
          "The difficulty in choosing the correct programming language.",
          "The challenge of making sure software runs reliably across highly diverse operating systems, network speeds, form-factors, and memory limits.",
          "The difference in coding styles between frontend and backend developers.",
          "The database latency caused by storing multiple distinct data types."
        ],
        correctAnswer: 1,
        explanation: "Heterogeneity is the challenge of designing and maintaining systems that operate seamlessly across diverse operating systems, devices, hardware limits, and network parameters."
      }
    ],
    keyTakeaways: [
      "Any code you write today will become 'Legacy Code' in 12 months. Write it with clean tests so people don't curse your name later.",
      "The easiest way to solve the scale challenge is to avoid unnecessary complex architecture until you actually need it.",
      "Security is a continuous pipeline, not a checkbox on a deployment guide."
    ]
  },
  {
    id: "sdlc",
    title: "8. Software Development Life Cycle (SDLC)",
    shortDescription: "From a whiteboard doodle to a production release. Master the workflows.",
    emoji: "🔄",
    academicContext: "The Software Development Life Cycle (SDLC) is the blueprint that outlines the phases of building software. If you follow no SDLC, you get chaos. If you choose the WRONG SDLC for your team or product, you get high costs, missed market opportunities, and high developer burn-out.",
    detailedContent: [
      {
        sectionTitle: "The Classical Phases of SDLC",
        paragraphs: [
          "Regardless of whether you are a formal startup or an enterprise bank, software progresses through six fundamental phases: Requirements Analysis (defining what to build), System Design (crafting modular software architecture, databases, and class diagrams), Implementation/Coding (writing type-safe binaries), Testing (unit, integration, and user tests), Deployment & Installation (pushing to development, staging, and production clusters), and Maintenance (bug fixing, patch updates, and feature upgrades).",
          "Understanding these phases is critical because fixing a bug during the 'Design Phase' costs $10, whereas fixing the same exact bug once deployed in production costs $1,000+ in hotfixes, PR disasters, and data repairs."
        ]
      },
      {
        sectionTitle: "SDLC Process Models: Waterfall vs. Agile Scrum",
        paragraphs: [
          "Waterfall Model: Linear, sequential. Each phase must complete 100% before the next starts. Perfect for high-risk, predictable projects with immutable requirements (e.g., flight controller software, medical devices). It is rigid but highly document-driven.",
          "Agile Scrum: Iterative and incremental. Break work into small deliverables called Sprints (1-4 weeks). Encourages changes, values direct client collaboration, and builds working software rapid-fire. Perfect for web services, SaaS startups, and competitive commercial domains."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Rocket Booster vs. The Food App",
        scenario: "NASA uses a Waterfall-style strict process when engineering space shuttle telemetry software. They cannot run a 'Sprint' to patch a rocket engine mid-flight. Conversely, Netflix runs an Agile Scrum model, allowing developers to deploy new video streaming recommendation sliders multiple times a day behind feature flags.",
        analogy: "Waterfall is like printing a paperback dictionary: once compiled and printed, you can't edit page 42 easily. Agile is like hosting Wikipedia: anyone can edit articles on-the-fly and update content instantly.",
        takeaway: "There's no single 'best' SDLC. A smart engineer selects Waterfall for safety/predictability, and Agile for discovery/speed."
      }
    ],
    quiz: [
      {
        id: "sdlc_q1",
        question: "When is the Waterfall process model highly appropriate to use over Agile?",
        options: [
          "In highly uncertain early-phase startups where requirements change weekly.",
          "On systems where safety is critical, specifications are fixed and clear, and cost of failure is astronomical (e.g., medical devices, aerospace).",
          "When you are working with a small team who hates writing documents.",
          "For typical consumer smartphone web games."
        ],
        correctAnswer: 1,
        explanation: "Waterfall's rigid, document-driven, and non-cyclical nature is perfect for projects where requirements are completely immutable, and bugs could cause death or extreme financial collapse."
      },
      {
        id: "sdlc_q2",
        question: "Why is fixing a software flaw in the 'Maintenance' phase extremely expensive compared to the 'Design' phase?",
        options: [
          "Servers charge high rates for storing backup code copies.",
          "In maintenance, fixing a bug requires re-analyzing, re-designing, re-coding, re-testing, and redeploying a live system with potential user data migrations, involving massive overhead and team sizes.",
          "Developers charge double hourly rates once an app goes live.",
          "Because the database is automatically locked and cannot be edited."
        ],
        correctAnswer: 1,
        explanation: "Finding a design defect post-release requires reversing the entire development chain under crisis mode—often causing database corruption, server patches, and critical downtime."
      }
    ],
    keyTakeaways: [
      "Agile does not mean 'code with no documentation.' That's just unstructured hacking.",
      "The earlier you find a bug in the SDLC, the cheaper it is to solve by orders of magnitude.",
      "Continuous Integration and Continuous Deployment (CI/CD) automates the transition from write-code to deploy-code."
    ]
  }
];
