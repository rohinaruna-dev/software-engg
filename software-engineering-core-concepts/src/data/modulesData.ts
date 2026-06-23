/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModuleData } from "../types";

export const modulesData: ModuleData[] = [
  {
    id: "importance",
    title: "1. Why Software Engineering",
    shortDescription: "Coding is typing; Engineering is building stuff that survives contact with users.",
    emoji: "🚀",
    academicContext: "You've survived 3 years of CS. You've written a 500-line Python script that scraped Twitter, and a hackathon React app that technically worked at 4 AM. But what happens when you graduate and have to build a system with 5,000,000 lines of code, touched by 400 developers, that has to stay online 24/7 for 10 years? That's where Software Engineering (SE) comes in.",
    detailedContent: [
      {
        sectionTitle: "The Real Difference: 'It Works on My Machine' vs. Professional Engineering",
        paragraphs: [
          "A huge trap for 3rd-year students is thinking that Software Engineering is just 'advanced programming with harder LeetCode.' It's not. Historically, the entire discipline was born in the late 1960s during the 'Software Crisis' because projects were constantly going way over budget, missing deadlines by years, and crashing spectacularly.",
          "Software Engineering is the application of strict engineering principles—just like building a bridge or an airplane—to software. It covers the entire lifecycle: figuring out what to build, designing it, coding it, breaking it in testing, and maintaining it when Apple drops a new iOS version that breaks all your CSS."
        ]
      },
      {
        sectionTitle: "The Four Horsemen of Good Software",
        paragraphs: [
          "If you code without engineering discipline, you accumulate what we call 'Technical Debt.' Imagine borrowing money at 40% interest to buy pizza. It's great tonight, but next month you're broke. In code, hacking a quick fix gets the feature out today, but makes adding features next year impossible.",
          "Professional software is judged on four main pillars: Maintainability (can the new guy read your code without crying?), Dependability (does it crash and leak user passwords?), Efficiency (does it eat 16GB of RAM to render text?), and Usability (can a non-tech person use it without calling support?)."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Classic Hackathon Hangover",
        scenario: "You and two friends build an amazing Tinder-for-Dogs app in 36 hours. No tests, global variables everywhere, everything shoved in one file. You win 3rd place! A week later, you want to add a 'Dog Walker' feature. You open the code. It looks like ancient hieroglyphics. Changing the background color breaks the login function.",
        analogy: "Hobbyist coding is like building a blanket fort in your living room—fun, quick, and structurally unsound. Software engineering is like designing a skyscraper with fire exits, blueprints, and load-bearing steel.",
        takeaway: "Your personal brainpower doesn't scale. Clean architecture, documentation, and engineering discipline do."
      }
    ],
    quiz: [
      {
        id: "imp_q1",
        question: "What historic event forced the tech industry to create 'Software Engineering' as a formal discipline?",
        options: [
          "The invention of JavaScript in 10 days.",
          "The 'Software Crisis' of the late 1960s, where projects consistently failed due to overwhelming complexity.",
          "The Y2K bug panic.",
          "The realization that developers drink too much coffee."
        ],
        correctAnswer: 1,
        explanation: "During the 1968 NATO conference, the term 'Software Engineering' was championed to solve the crisis of late, over-budget, and highly unreliable software systems."
      },
      {
        id: "imp_q2",
        question: "How do developers usually experience 'Technical Debt'?",
        options: [
          "Having to pay for premium GitHub accounts.",
          "The literal financial loan required to buy cloud servers on AWS.",
          "The friction, bugs, and massive delays caused by writing messy, hacky code in the past to meet a quick deadline.",
          "A punishment from the professor for using Stack Overflow."
        ],
        correctAnswer: 2,
        explanation: "Hacky code is a 'loan'. You get the feature out fast (the money), but you pay heavy 'interest' later because every future update takes 5x longer to write."
      }
    ],
    keyTakeaways: [
      "Programming is a solo activity; Software Engineering is a massive multiplayer team sport.",
      "'It works on my machine' is the war cry of the amateur. Professional code works on the user's machine.",
      "Technical debt is real, and the repo maintainer will come to collect it."
    ]
  },
  {
    id: "problem_solving",
    title: "2. Problem-Solving Activity",
    shortDescription: "Coding the wrong thing perfectly is still a failure.",
    emoji: "🧩",
    academicContext: "Most students get an assignment, immediately crack open VS Code, and start typing. In senior software engineering, coding is literally the LAST step of the problem-solving cycle. Jumping straight to the keyboard is the fastest route to building a beautiful app that absolutely nobody wants or needs.",
    detailedContent: [
      {
        sectionTitle: "The Problem-Solving Pipeline (No Code Required)",
        paragraphs: [
          "Real-world development is essentially a hardcore problem-solving activity. You must follow a sequence: First, Problem Formulation (what the heck are we even trying to fix?). Second, Constraint Analysis (what are the limits on budget, server power, and time?). Third, Solution Space Exploration (what are 3 different ways we could architect this?). ONLY THEN do you move to Implementation (coding) and Verification.",
          "If you skip the first two stages, you fall victim to 'Scope Creep'—the nightmare scenario where the client or your professor keeps saying 'Oh, can it also do X?' and the project never, ever finishes."
        ]
      },
      {
        sectionTitle: "Constraints: The Developer's Reality Check",
        paragraphs: [
          "In a Data Structures exam, your only constraint is O(N log N) time. In the real world, constraints are messy: The app must run on a 5-year-old Android phone, comply with European privacy laws, be built in 2 months, and use an API that goes down every Tuesday.",
          "Engineering is the art of compromise. Do we want it insanely fast, highly secure, or cheap to run? You rarely get to pick all three."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Over-Engineered To-Do List",
        scenario: "Your professor asks for a simple CLI tool to track assignments. Instead of defining the scope, you spend 4 weeks building a full-stack React/Node/GraphQL app deployed on Kubernetes with social OAuth login. On demo day, it crashes because your free-tier database ran out of connections. Meanwhile, the guy who wrote a 20-line Python script gets an A.",
        analogy: "Writing code without defining the problem is like buying a $500 chainsaw to cut a single slice of bread. It's technically powerful, but completely the wrong tool for the actual job.",
        takeaway: "Define the exact boundaries of the problem before you write a single line of logic."
      }
    ],
    quiz: [
      {
        id: "prob_q1",
        question: "What is 'Scope Creep' in a software project?",
        options: [
          "When a loop accidentally becomes infinite.",
          "A gradual, uncontrolled expansion of the project's features and requirements, usually leading to missed deadlines.",
          "A specific type of malware that targets agile teams.",
          "When the UI slowly misaligns due to bad CSS flexbox rules."
        ],
        correctAnswer: 1,
        explanation: "Scope creep happens when boundaries aren't set during Problem Formulation, allowing stakeholders to endlessly request 'just one more small feature'."
      },
      {
        id: "prob_q2",
        question: "Why are constraints actually helpful in software engineering?",
        options: [
          "They give us an excuse when the code is slow.",
          "They define the optimal architectural boundaries (budget, hardware, laws) that narrow down our choices to the right solution.",
          "They ensure we use the newest JavaScript framework.",
          "They don't help; constraints are just annoyances created by management."
        ],
        correctAnswer: 1,
        explanation: "Constraints (like 'must run offline' or 'must launch in 30 days') eliminate impossible architectures and guide the engineer toward a practical, realistic design."
      }
    ],
    keyTakeaways: [
      "Never open your IDE until you can explain the problem in 3 simple sentences.",
      "The perfect solution to the wrong problem is useless.",
      "Constraints aren't your enemy; they are the rules of the game you are playing."
    ]
  },
  {
    id: "modelling",
    title: "3. Modelling Activity",
    shortDescription: "Drawing the blueprint before you pour the concrete.",
    emoji: "📐",
    academicContext: "Would you build a 50-story skyscraper by just throwing bricks together and hoping it stands? Obviously not. Yet, students routinely try to build complex full-stack apps without a single diagram. Modelling is creating an abstraction (blueprint) of your system so you can argue about the design before it costs money to code.",
    detailedContent: [
      {
        sectionTitle: "Abstractions: Ignoring the Noise",
        paragraphs: [
          "Software is invisible. You can't touch an API. Modelling is how we visualize it. We use abstractions—which simply means throwing away useless details to focus on the big picture. When looking at a map of the subway, you don't care about the color of the train cars; you just care about the stops.",
          "We use Unified Modeling Language (UML) to draw these maps. It acts as a universal language. If you hand a UML diagram to a dev in Tokyo and a dev in London, they will both build the exact same class structure."
        ]
      },
      {
        sectionTitle: "The Three Views of Software",
        paragraphs: [
          "Models generally look at the system from three angles. Structural Models (UML Class Diagrams) show the static skeleton—what classes exist and how they link. Behavioral Models (Sequence Diagrams) show the timeline of how data flows dynamically between objects. Functional Models (Use Case Diagrams) show what the system actually does for the end user."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Spaghetti Database Nightmare",
        scenario: "You're building an e-commerce site for a project. You make a 'User' table and an 'Order' table. You write 5,000 lines of code. Then you realize an order can have multiple items, and a user can have multiple shipping addresses. Because you didn't draw an Entity-Relationship (ER) or UML Class diagram first, you have to rewrite your entire backend and manually delete corrupted database rows.",
        analogy: "Skipping UML modeling is like trying to assemble a 5,000-piece IKEA wardrobe without looking at the manual. You will end up with leftover screws and a wobbly shelf.",
        takeaway: "Boxes and arrows on a whiteboard are infinitely cheaper to change than thousands of lines of React and Node.js."
      }
    ],
    quiz: [
      {
        id: "mod_q1",
        question: "In UML, what is the difference between Aggregation and Composition?",
        options: [
          "Aggregation is for frontend; Composition is for backend.",
          "Aggregation means the objects have independent lifespans. Composition means strict ownership—if the parent dies, the child dies.",
          "They are two words for the exact same thing.",
          "Composition is used exclusively in Python, while Aggregation is for Java."
        ],
        correctAnswer: 1,
        explanation: "Composition is a 'Strong Has-A' (a House and its Rooms). Aggregation is a 'Weak Has-A' (a University and its Professors; if the uni closes, the professors still exist)."
      },
      {
        id: "mod_q2",
        question: "Which diagram would you use to map out the exact chronological order of messages sent between a Client, an API Gateway, and a Database?",
        options: [
          "UML Class Diagram",
          "UML Sequence Diagram",
          "Entity-Relationship Diagram",
          "Network Router Diagram"
        ],
        correctAnswer: 1,
        explanation: "Sequence Diagrams are specifically designed to show dynamic behavior—how objects interact over a vertical timeline."
      }
    ],
    keyTakeaways: [
      "Diagrams aren't boring documentation you write at the end of the semester to get a grade. They are the battle plan you draw before you code.",
      "Abstraction is your best friend: hide the details to understand the architecture.",
      "Changing a whiteboard drawing takes 5 seconds; changing a bad database schema in production takes 5 weeks."
    ]
  },
  {
    id: "knowledge_acquisition",
    title: "4. Knowledge Acquisition Activity",
    shortDescription: "Clients don't know what they want. It's your job to find out.",
    emoji: "🧠",
    academicContext: "In university, your professor hands you a perfectly formatted PDF with exact requirements. In the real world, a client says, 'I want an app like Uber but for hamsters, and make it use AI.' Software engineering is largely an investigative process of acquiring knowledge and dragging the actual truth out of confused stakeholders.",
    detailedContent: [
      {
        sectionTitle: "Software is an Evolutionary Learning Process",
        paragraphs: [
          "Day 1 of a project is when you know the absolute least about what you are building. You have 'high epistemic uncertainty.' The goal of development is to learn. You build prototypes not just to write code, but to learn what the user actually wants.",
          "Every time you run a sprint, or put a beta version in front of a user, you are running a science experiment. You are extracting domain rules (e.g., 'Oh, accountants don't use the mouse, they only use keyboard shortcuts')."
        ]
      },
      {
        sectionTitle: "The Art of the Interrogation",
        paragraphs: [
          "Never ask a client 'What features do you want?' They will give you terrible technical advice. Instead, ask 'What is the most painful part of your workflow right now?' Your job as an engineer is to diagnose the business pain and prescribe the technical solution.",
          "When a client gives a vague constraint like 'it must be fast and secure', you must acquire the real metric: 'So you need the page to load in under 2 seconds, and you need data encrypted at rest?'"
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The 'AI Blockchain' Resume Parser",
        scenario: "A recruiter asks you to build an 'AI-powered blockchain solution' to sort resumes. Instead of blindly building a decentralized neural network (which would take 2 years), you ask them what their actual pain point is. They say, 'I get too many PDFs and want to search for the word Java.' You build a simple Python script with a regex search in 3 hours. They think you are a genius.",
        analogy: "Taking client feature requests literally is like a doctor letting the patient perform their own surgery. You are the expert—diagnose the symptoms, don't just fill the prescription.",
        takeaway: "Listen to their business problem, but ruthlessly ignore their technical feature suggestions."
      }
    ],
    quiz: [
      {
        id: "know_q1",
        question: "Why do we say software projects start with 'high epistemic uncertainty'?",
        options: [
          "Because developers usually don't know how to code the framework.",
          "Because on Day 1, neither the developer nor the client fully understands the true requirements, edge cases, and domain rules.",
          "Because the stock market might crash during development.",
          "Because agile sprints are inherently random and unpredictable."
        ],
        correctAnswer: 1,
        explanation: "Uncertainty is highest at the start. You don't fully understand the user's daily reality until you start building prototypes and acquiring knowledge."
      },
      {
        id: "know_q2",
        question: "If a client says 'I want the app to be highly scalable', what is your next move?",
        options: [
          "Immediately purchase a 100-node Kubernetes cluster on AWS.",
          "Ask them to quantify it: 'What peak traffic are we expecting? 100 users a day or 10,000 per second?'",
          "Nod and say 'Yes, I will use MongoDB.'",
          "Tell them scaling is impossible on a budget."
        ],
        correctAnswer: 1,
        explanation: "Engineers must translate vague adjectives ('fast', 'scalable', 'secure') into verifiable, quantitative targets that can be tested."
      }
    ],
    keyTakeaways: [
      "The client is the expert on their pain; you are the expert on the solution.",
      "Prototyping is just buying knowledge at a discount.",
      "A software engineer is 50% coder, 50% detective."
    ]
  },
  {
    id: "rationale_driven",
    title: "5. Rationale-Driven Activity",
    shortDescription: "Leaving a paper trail for the poor dev who inherits your code.",
    emoji: "⚖️",
    academicContext: "If you ask a junior dev why they used React, they say 'Because it's cool.' If you ask a senior engineer, they give you a list of trade-offs comparing bundle sizes, state management complexity, and team hiring velocity. Professional engineering requires justifying and documenting the 'WHY' behind your architectural choices.",
    detailedContent: [
      {
        sectionTitle: "Trade-offs: The Engineer's Currency",
        paragraphs: [
          "There is no 'perfect' database, language, or framework. Everything is a trade-off. Choose microservices? Great, independent scaling, but now you have a nightmare of network latency and distributed debugging. Choose a monolith? Super easy to deploy, but a single memory leak takes down the entire system.",
          "Being rationale-driven means openly acknowledging the downsides of the technology you chose, and justifying why the benefits outweigh them for this specific project."
        ]
      },
      {
        sectionTitle: "The Holy Grail: Architecture Decision Records (ADRs)",
        paragraphs: [
          "How do you stop teams from arguing about the same database choice every 6 months? You write an ADR. An ADR is a simple markdown file stored directly in the repo. It lists: Context (what was the problem?), Options (what did we consider?), Decision (what did we pick?), and Consequences (what are the pros and cons we are accepting?).",
          "When you leave the company in 2 years, the new dev reads the ADR and understands exactly why the code looks the way it does."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Framework Holy War",
        scenario: "Your group project team spends 3 weeks arguing in a WhatsApp group about whether to use Next.js, Svelte, or raw HTML for a simple weather app. You finally decide on Next.js. Four weeks later, someone asks 'Why didn't we use Vue?' and the argument starts all over again. If you had written a 1-page ADR justifying the choice, you could just point to the file and go back to sleeping.",
        analogy: "Making system design choices without an ADR is like getting a tattoo while drunk. You will definitely wake up later wondering why you did it, and you won't have a good explanation.",
        takeaway: "Your code tells the computer WHAT to do. Your documentation tells the next human WHY you did it."
      }
    ],
    quiz: [
      {
        id: "rat_q1",
        question: "What is an Architecture Decision Record (ADR)?",
        options: [
          "A log file that tracks whenever the server crashes.",
          "A document capturing a significant design choice, the context, the alternatives considered, and the trade-offs accepted.",
          "A tool that automatically resolves Git merge conflicts.",
          "A legal contract signed by the client."
        ],
        correctAnswer: 1,
        explanation: "ADRs are lightweight documents stored in the codebase that preserve the 'WHY' behind major architectural choices, preventing future confusion."
      },
      {
        id: "rat_q2",
        question: "A true software engineer believes which of the following?",
        options: [
          "There is always one single, mathematically perfect tech stack for any problem.",
          "Every architecture is a set of compromises, and the goal is to pick the trade-offs that best fit the current business constraints.",
          "You should always rewrite the system in Rust.",
          "If a framework is sponsored by Google or Meta, it has no downsides."
        ],
        correctAnswer: 1,
        explanation: "Everything in system design is a trade-off. Rationale-driven engineering is about evaluating and documenting those compromises based on the project's specific constraints."
      }
    ],
    keyTakeaways: [
      "Junior devs obsess over the 'best' tool. Senior devs obsess over trade-offs.",
      "An undocumented architectural decision is a ticking time bomb of team confusion.",
      "Be brave enough to write down the flaws of the architecture you just designed."
    ]
  },
  {
    id: "umbrella",
    title: "6. Umbrella Activities",
    shortDescription: "The invisible shields that stop your team from destroying the repo.",
    emoji: "☂️",
    academicContext: "Most students view 'coding' as typing logic. But how do you prevent 5 people from editing the same file and wiping out each other's work? How do you ensure code is tested before it hits production? These are 'Umbrella Activities'—the continuous, background processes that keep a project from descending into total chaos.",
    detailedContent: [
      {
        sectionTitle: "Software Configuration Management (SCM)",
        paragraphs: [
          "SCM is the backbone of team collaboration. It includes Version Control (Git), Branching Strategies, and CI/CD pipelines. It ensures that when someone completely breaks the login screen, you can instantly rollback to yesterday's version.",
          "Without SCM, you get the 'Dropbox/Google Drive' method of collaboration, resulting in folders filled with `App_Final_v2_REAL_Final_pls_work.zip`."
        ]
      },
      {
        sectionTitle: "Software Quality Assurance (SQA) & Risk Management",
        paragraphs: [
          "SQA isn't just a poor QA tester clicking buttons at the end of the month. It's automated testing pipelines (Unit/Integration tests), strict code review processes (Pull Requests), and linting rules that force everyone to write clean code.",
          "Risk Management is the act of being professionally paranoid. It's asking, 'What if AWS goes down?' or 'What if our lead developer quits tomorrow?' and having a backup plan ready."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Midnight Merge Conflict Massacre",
        scenario: "It's 11 PM, the project is due at midnight. Developer A and Developer B both push to the `main` branch on GitHub at the same time without doing a Pull Request. They overwrite the core `App.js` file. The server won't start. Panic ensues. If they had used standard branch-protection and SQA code reviews (Umbrella Activities), this nightmare would have been blocked automatically.",
        analogy: "Coding without Umbrella Activities is like driving 150mph on a highway with no lanes, no seatbelts, and no brakes. You might go fast for a minute, but a horrific crash is mathematically guaranteed.",
        takeaway: "Git, PRs, and CI/CD are not dev-ops chores; they are the lifelines of your project's survival."
      }
    ],
    quiz: [
      {
        id: "umb_q1",
        question: "When do Umbrella Activities happen in a software project?",
        options: [
          "Only at the very end, right before you hand it to the professor or client.",
          "Only when the server crashes and you need to investigate.",
          "Continuously, from day one until the project is retired.",
          "Only during the initial design phase."
        ],
        correctAnswer: 2,
        explanation: "Umbrella activities like version control, risk management, and quality assurance are continuous processes that run parallel to all development phases."
      },
      {
        id: "umb_q2",
        question: "Which of the following is an example of Software Configuration Management (SCM)?",
        options: [
          "Enforcing a Git branching policy where no one can push directly to the 'main' branch without an approved Pull Request.",
          "Writing the CSS for the dark mode toggle.",
          "Interviewing a client about their business needs.",
          "Sketching a UML class diagram on a whiteboard."
        ],
        correctAnswer: 0,
        explanation: "SCM manages changes to the software artifacts. Version control rules, branching strategies, and build pipelines are the core of SCM."
      }
    ],
    keyTakeaways: [
      "Version control is not a backup system; it is a time machine and a collaboration engine.",
      "If it's not tested automatically, it's already broken.",
      "A team without branch protection rules is a team begging for disaster."
    ]
  },
  {
    id: "challenges",
    title: "7. Software Engineering Challenges",
    shortDescription: "Welcome to the real world: Legacy code, scaling, and hackers.",
    emoji: "🔥",
    academicContext: "In school, you build 'Greenfield' apps—starting from a blank slate, with zero users, on the latest shiny tech stack. In the corporate world, you will inherit terrifying 15-year-old codebases, handle traffic spikes of millions of users, and actively fight off state-sponsored hackers. These are the core challenges of modern SE.",
    detailedContent: [
      {
        sectionTitle: "The Beast of Legacy Code",
        paragraphs: [
          "Over 70% of a developer's career is spent reading and patching existing code, not writing new stuff. Legacy code isn't necessarily 'bad' code—it's successful code that has outlived its original environment. It's the critical COBOL system running a bank, or a massively complex PHP monolith.",
          "Code undergoes 'Software Aging'. The bits don't rust, but the environment changes. Libraries get deprecated, new security flaws are found, and user expectations shift. Keeping old software alive while slowly refactoring it is a master-tier engineering skill."
        ]
      },
      {
        sectionTitle: "Heterogeneity, Scale, and Security",
        paragraphs: [
          "Heterogeneity: Your app doesn't just run on your Macbook anymore. It runs on a 6-year-old Android, a smart TV, and an iPad on a 3G network in the subway. Making software resilient across all these environments is painfully hard.",
          "Security is no longer a 'firewall' issue. It's a code issue. Engineers must practice 'Zero-Trust' architecture, assuming every input is malicious and every server is compromised."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The 'Don't Touch That Button' Monolith",
        scenario: "You get an internship at a big tech firm. You are assigned to fix a typo on the billing page. You search the codebase and find a file called `BillingEngine_Final_v3.java` written in 2011. There are 10,000 lines of code, zero comments, and a single note that says 'Warning: changing the loop breaks the database. God help you.' Welcome to legacy code.",
        analogy: "Working with legacy code is like trying to change the tires on a car while it is driving 70mph down the highway. You have to upgrade the system without disrupting the passengers (users).",
        takeaway: "Any code you write today will be 'legacy code' in two years. Be kind to your future self; write documentation."
      }
    ],
    quiz: [
      {
        id: "cha_q1",
        question: "What causes 'Software Aging' if the actual code files never physically change?",
        options: [
          "The hard drive platters slowly degrade, losing binary zeros and ones.",
          "The external environment—operating systems, libraries, security standards, and user demands—constantly evolves around the static code, making it obsolete.",
          "The cloud provider deliberately slows down older servers to force upgrades.",
          "Compilers get tired of reading the same syntax."
        ],
        correctAnswer: 1,
        explanation: "Software ages because its ecosystem shifts. A perfectly secure app from 2015 is dangerously vulnerable today because new hacking vectors and OS changes have occurred."
      },
      {
        id: "cha_q2",
        question: "What does 'Heterogeneity' mean in the context of modern software challenges?",
        options: [
          "The difficulty of managing diverse server hardware and ensuring the app runs flawlessly across wildly different devices, screen sizes, and network speeds.",
          "The process of mixing Object-Oriented and Functional programming styles.",
          "Managing developers from different time zones.",
          "Translating the app into multiple different languages."
        ],
        correctAnswer: 0,
        explanation: "Heterogeneity refers to the massive diversity in the environments where software runs (e.g., iOS, Android, web, IoT devices, slow vs. fast networks)."
      }
    ],
    keyTakeaways: [
      "Legacy code pays your salary. Respect it, but know how to safely refactor it.",
      "Assume every text box on your website is currently being attacked by a hacker.",
      "If it only works perfectly on an iPhone 15 Pro on gigabit Wi-Fi, it's not good software."
    ]
  },
  {
    id: "sdlc",
    title: "8. Software Development Life Cycle (SDLC)",
    shortDescription: "The master blueprints of how teams actually build things.",
    emoji: "🔄",
    academicContext: "The SDLC is the lifecycle that outlines how software gets built, from a napkin sketch to a production server. If you don't choose an SDLC methodology, you get chaos. If you choose the WRONG methodology, you burn out your developers and waste millions of dollars.",
    detailedContent: [
      {
        sectionTitle: "The Core Phases",
        paragraphs: [
          "Every software project goes through these phases: 1. Requirements Analysis (What are we building?), 2. System Design (Architecting the solution), 3. Implementation (Coding), 4. Testing (Breaking the code), 5. Deployment (Shipping it to users), and 6. Maintenance (Patching the inevitable bugs).",
          "Crucial rule: A bug found in the Design phase might cost $10 to fix (you just erase a whiteboard). That EXACT same bug found in the Maintenance phase (production) will cost $10,000+ to fix (downtime, data migration, PR apologies)."
        ]
      },
      {
        sectionTitle: "Waterfall vs. Agile Scrum",
        paragraphs: [
          "Waterfall is linear. You must finish 100% of the design before writing 1 line of code. It's rigid, heavy on documents, but excellent for high-risk projects like NASA rockets or pacemakers where failure equals death.",
          "Agile Scrum is iterative. You work in 2-week 'Sprints', building small chunks of the app, testing it with users, and adapting to changes quickly. It's perfect for startups, web apps, and fast-moving tech where requirements change daily."
        ]
      }
    ],
    relatableExamples: [
      {
        title: "The Hackathon Sprint vs. The Thesis Defense",
        scenario: "Your senior design project is basically Agile: you build a little piece every week, show it to your advisor, they tell you it's wrong, and you pivot immediately. Imagine trying to do Waterfall for that project: you write a 200-page spec document for 3 months, write all the code in week 14, and on demo day, you realize you misunderstood the prompt entirely. Boom, automatic failure.",
        analogy: "Waterfall is like ordering a $5,000 custom-tailored suit—you measure everything upfront and hope it fits perfectly when delivered months later. Agile is like buying clothes off the rack and getting them tailored iteratively until you look great.",
        takeaway: "Pick Waterfall for safety and predictable physics. Pick Agile for speed and unpredictable humans."
      }
    ],
    quiz: [
      {
        id: "sdlc_q1",
        question: "Why is an Agile methodology generally preferred over Waterfall for modern consumer web applications?",
        options: [
          "Because Agile requires zero documentation or planning.",
          "Because consumer markets change rapidly, and Agile allows teams to pivot and adapt to new requirements every few weeks.",
          "Because Agile allows developers to skip the testing phase.",
          "Because web browsers cannot compile Waterfall code."
        ],
        correctAnswer: 1,
        explanation: "Web apps face highly volatile markets and changing user demands. Agile's iterative sprints allow teams to pivot continuously, whereas Waterfall locks you into months-old assumptions."
      },
      {
        id: "sdlc_q2",
        question: "Why does the cost of fixing a software defect increase exponentially as it moves through the SDLC?",
        options: [
          "Because cloud hosting providers charge penalty fees for buggy code.",
          "Because fixing a bug in production requires reversing the entire lifecycle: diagnosing live servers, rewriting code, re-testing, and deploying, while affecting real users.",
          "Because developers get paid overtime during maintenance.",
          "Because the code becomes encrypted after deployment."
        ],
        correctAnswer: 1,
        explanation: "Fixing a bug late means you have to untangle deployed code, migrate real user data, and risk massive downtime—which is vastly more expensive than fixing a logic error during the initial whiteboard design."
      }
    ],
    keyTakeaways: [
      "There is no 'best' SDLC. There is only the right tool for the specific project's risk profile.",
      "Agile does not mean 'chaotic coding with no plan.' It requires immense discipline to do correctly.",
      "Find your bugs early, or your users will find them for you (and post about them on Twitter)."
    ]
  },
  {
    id: "process_models_waterfall",
    title: "2. Process Models: The Waterfall Model",
    shortDescription: "The granddaddy of SDLCs. Measure twice, cut once... and pray the client doesn't change their mind.",
    emoji: "🌊",
    academicContext: "The Waterfall model is the oldest and most strictly linear software development life cycle. You must complete one phase entirely before moving to the next. It's fantastic for predictability, but terrible if requirements change.",
    detailedContent: [
      {
        sectionTitle: "Neat Definition: What is it really?",
        content: "The Waterfall model is a sequential design process. Progress flows steadily downwards (like a waterfall) through the phases of **Requirements, Design, Implementation, Verification, and Maintenance**. Once water flows over the edge, it can't flow back up. Similarly, once a phase is finished, you lock it down and move on.",
        codeSnippet: "// The ultimate Waterfall mindset:\nfunction buildSoftware() {\n  gather100PercentOfRequirements();\n  designEverySingleComponent();\n  writeAllTheCode();\n  testEverythingAtOnce();\n  deployAndPray();\n}"
      },
      {
        sectionTitle: "The Relatable Explanation: The Drive-Thru Analogy 🍔",
        content: "Imagine the Waterfall model like a fast-food drive-thru. \n\n1. **Requirements:** You yell your order into the speaker (I want a cheeseburger).\n2. **Design & Implementation:** The kitchen starts cooking exactly what you ordered.\n3. **Verification:** You get to the window and they hand you the bag.\n\nNow, imagine you reach the final window and say, *\"Actually, I've changed my mind. I want a spicy chicken sandwich instead.\"*\n\nThe cashier will look at you with deep, existential sadness. The burger is already made. To get a chicken sandwich, you have to drive all the way back around to the beginning of the line. That is exactly how a Waterfall developer feels when a client changes a requirement right before launch."
      },
      {
        sectionTitle: "Real-Time Case Study: Building the Bank Mainframe 🏦",
        content: "Let's look at a scenario where Waterfall was used (and why it caused pain).\n\n**The Client:** A massive traditional bank.\n**The Project:** A new highly-secure internal money transfer system.\n\n**The Timeline:**\n- **Year 1:** Business analysts spend 12 months writing a 500-page Requirements Document. It is signed in blood by the executives.\n- **Year 2:** Architects design the database schemas and system diagrams.\n- **Year 3:** Engineering builds the system exactly to spec.\n- **Year 4:** The app is finally delivered!\n\n**The Plot Twist:** By Year 4, the entire banking industry has shifted to mobile-first apps and biometric logins (FaceID). The bank's brand new system is perfectly secure, perfectly built to the Year 1 specifications, and completely useless to modern users because the Waterfall model didn't allow the team to pivot when market trends changed."
      },
      {
        sectionTitle: "When should you ACTUALLY use Waterfall?",
        content: "Despite the hate it gets, Waterfall is NOT dead. It is absolutely necessary for **highly-regulated, high-risk systems**.\n\nIf you are writing the software for an **airplane autopilot system**, a **medical pacemaker**, or a **nuclear reactor**, you *want* Waterfall. You want every single requirement locked down, aggressively reviewed, and heavily tested before a single line of code is written. You don't 'Agile' a pacemaker by shipping an MVP and saying, *\"We'll patch the heart-stopping bug in Sprint 2!\"*"
      }
    ],
    quiz: [
      {
        id: "wf_q1",
        question: "Which of the following projects is the BEST fit for the Waterfall Model?",
        options: [
          "A brand new social media app for Gen-Z.",
          "An e-commerce website for a local bakery.",
          "Flight control software for a commercial airliner.",
          "A weekend hackathon project."
        ],
        correctAnswer: 2,
        explanation: "Flight control software requires extreme predictability, massive upfront design, and zero room for failure. It's highly regulated, making Waterfall's strict, documentation-heavy phases perfect for it."
      },
      {
        id: "wf_q2",
        question: "What is the biggest weakness of the Waterfall model?",
        options: [
          "It forces developers to use older programming languages like C++.",
          "It is highly resistant to changing requirements late in the development cycle.",
          "It requires too many daily stand-up meetings.",
          "It completely skips the testing phase."
        ],
        correctAnswer: 1,
        explanation: "Because phases are sequential and locked down once completed, making changes late in the cycle requires going all the way back to the design phase, which is incredibly expensive and time-consuming."
      }
    ],
    keyTakeaways: [
      "Waterfall is sequential: Requirements ➔ Design ➔ Implementation ➔ Testing ➔ Deployment.",
      "Once you finish a phase, you cannot easily go back. Changes are painful and expensive.",
      "Horrible for startups where requirements change weekly.",
      "Excellent for high-stakes, life-critical systems (medical, aerospace) where failure is not an option."
    ]
  }
];
