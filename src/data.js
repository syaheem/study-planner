export const NEURO_PRINCIPLES = [
  { id:1, title:"Peak Cortisol & Alertness",      time:"9:00â€“11:00 AM",    desc:"Hardest subject window. Unfamiliar or high cognitive load topics go here as cortisol and norepinephrine peak.", icon:"âš¡" },
  { id:2, title:"Post-Lunch Dip",                 time:"1:00â€“2:00 PM",     desc:"Avoid deep work. Use for shallow tasks, flashcards, organizing review notes, or a strategic nap (under 20 mins).", icon:"ðŸ˜´" },
  { id:3, title:"Secondary Alertness Peak",        time:"3:00â€“5:00 PM",     desc:"Second deep work block. Use for familiar subjects or secondary priorities where information processing is faster.", icon:"ðŸ“ˆ" },
  { id:4, title:"Evening Consolidation",          time:"7:00â€“9:00 PM",     desc:"Active recall and retrieval practice. Solving past papers or self-testing triggers hippocampus memory formation.", icon:"ðŸ§ " },
  { id:5, title:"Sleep is Study",                 time:"10:00 PM Sleep",   desc:"Non-negotiable. Memory consolidation locks in overnight. Staying up late actively degrades retrieval paths.", icon:"ðŸŒ™" },
  { id:6, title:"Spaced Repetition",              time:"24h & 72h passes", desc:"Revisiting material after 1 day and 3 days doubles long-term retention compared to single-session block study.", icon:"ðŸ”„" },
  { id:7, title:"Interleaving Practice",          time:"Alternating",      desc:"Switching between topics builds stronger retrieval pathways than studying one subject all day.", icon:"ðŸ”€" },
  { id:8, title:"90-min Ultradian Rhythm",        time:"Deep work limit",  desc:"Focus capacity naturally peaks in 90-minute waves. Work intensely for 90 mins max, then completely disconnect.", icon:"â±ï¸" },
];

export const SUBJECTS = {
  arab:       { label:"Arabic",               short:"Arab",    color:"#9ca3af", priority:"low",    ch:0.5, exam:"18 Jun, 2:30 PM", daysLeft:3,  sessions:1, icon:"ðŸ“–" },
  math:       { label:"Engineering Math",     short:"Math",    color:"#60A5FA", priority:"medium", ch:3,   exam:"23 Jun, 2:30 PM", daysLeft:8,  sessions:3, icon:"ðŸ“" },
  sad:        { label:"Sys Analyst & Design", short:"SAD",     color:"#a78bfa", priority:"high",   ch:3,   exam:"24 Jun, 9:00 AM", daysLeft:9,  sessions:4, icon:"ðŸ“Š" },
  networking: { label:"Computer Networking",  short:"Network", color:"#00e5cc", priority:"high",   ch:3,   exam:"25 Jun, 9:00 AM", daysLeft:10, sessions:4, icon:"ðŸŒ" },
  embedded:   { label:"Digital Embedded",     short:"Embedded",color:"#f472b6", priority:"high",   ch:3,   exam:"26 Jun, 3:00 PM", daysLeft:11, sessions:4, icon:"ðŸ’»" },
  is:         { label:"Intelligent System",   short:"IS",      color:"#4ade80", priority:"high",   ch:3,   exam:"30 Jun, 9:00 AM", daysLeft:15, sessions:4, icon:"ðŸ§ " },
  oop:        { label:"OOP",                  short:"OOP",     color:"#f97316", priority:"high",   ch:3,   exam:"1 Jul, 9:00 AM",  daysLeft:16, sessions:4, icon:"âš™ï¸" },
};

export const BLOCK_STYLE = {
  deep:    { border:"#7c6af7", label:"DEEP WORK", icon:"ðŸ§ " },
  shallow: { border:"#00e5cc", label:"SHALLOW",   icon:"ðŸ“" },
  review:  { border:"#ffd166", label:"REVIEW",    icon:"ðŸ”„" },
};

export const PRIORITY_STYLE = {
  high:   { bg:"rgba(255,107,122,0.12)", color:"#ff6b7a",  label:"HIGH" },
  medium: { bg:"rgba(96,165,250,0.12)",  color:"#60a5fa",  label:"MED"  },
  low:    { bg:"rgba(156,163,175,0.12)", color:"#9ca3af",  label:"LOW"  },
};

export const DAYS = [
  {
    date:"16 Jun", day:"Tue", today:true,
    deepBlocks:[
      { subject:"embedded", slot:"9:00â€“10:30 AM", type:"deep", why:"Peak cortisol window. Use it for the HARDEST unfamiliar subject first.", topics:"Combination Logic (K-Maps, PLDs, QM, VEM, Minimization). Practice basic gates logic.", strategy:"Write, close book, reproduce from memory. Solve 10 combination logic problems.", coverage:"25%" },
      { subject:"sad",      slot:"3:00â€“4:30 PM",  type:"deep", why:"Secondary alertness peak. SAD is familiar.", topics:"Systems, Roles, Methodologies, Organizational Systems, SDLC.", strategy:"Mind map each SDLC phase and organizational system types. Close notes. Reproduce.", coverage:"25%" },
    ],
    shallowBlocks:[
      { type:"shallow", label:"Arab blitz",                slot:"8:00â€“8:45 AM", task:"Vocab list scan, grammar rules. Low priority.", subject:"arab" },
      { type:"shallow", label:"Embedded flashcards",       slot:"1:00â€“1:30 PM", task:"Write 10 flashcards on Combination Logic and K-Maps.", subject:"embedded" },
      { type:"review",  label:"SAD review + predict",      slot:"5:00â€“5:30 PM", task:"Skim SDLC and Methodologies notes. Active recall.", subject:"sad" },
      { type:"shallow", label:"Networking first look",     slot:"7:30â€“9:00 PM", task:"Modules 1-3: Networking Today, Basic Switch/End Device Config, Protocols and Models.", subject:"networking" },
    ],
    tip:"Use peak cortisol (9-11AM) for your hardest unfamiliar material. Save the afternoon for secondary priorities that are more familiar."
  },
  {
    date:"17 Jun", day:"Wed",
    deepBlocks:[
      { subject:"embedded", slot:"9:00â€“10:30 AM", type:"deep", why:"Day 2 cortisol peak. Build on yesterday's foundation.", topics:"Sequential Logic (Flip-Flops, Counters, Registers, FSM). Timing diagrams.", strategy:"Draw all flip-flop types from memory. Practice state transition diagrams.", coverage:"50%" },
      { subject:"sad",      slot:"3:00â€“4:30 PM",  type:"deep", why:"Spaced repetition: 24h since last SAD session.", topics:"Requirements Engineering, Feasibility Study, Use Case Diagrams, DFD.", strategy:"Draw DFDs and use case diagrams from scratch. Compare with textbook.", coverage:"50%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Embedded Day 1 recall",    slot:"8:00â€“8:30 AM", task:"5-min active recall of yesterday's K-Maps and combination logic.", subject:"embedded" },
      { type:"shallow", label:"Math warm-up",             slot:"1:00â€“1:30 PM", task:"Preview Chapter 1-2: Matrices and Linear Algebra basics.", subject:"math" },
      { type:"review",  label:"SAD flashcards",           slot:"5:00â€“5:30 PM", task:"Create 10 flashcards from today's DFD and Use Case content.", subject:"sad" },
      { type:"shallow", label:"Networking Modules 4-6",   slot:"7:30â€“9:00 PM", task:"Physical Layer, Number Systems, Data Link Layer.", subject:"networking" },
    ],
    tip:"Spaced repetition: Revisiting yesterday's material after 24h doubles retention. Quick 5-min recall before deep work primes the hippocampus."
  },
  {
    date:"18 Jun", day:"Thu", examToday:"arab",
    deepBlocks:[
      { subject:"arab",     slot:"8:00â€“10:00 AM", type:"deep", why:"EXAM DAY: Arabic at 2:30 PM. Use morning for final cram.", topics:"Full Arabic exam review: Grammar, vocabulary, and writing practice.", strategy:"Active recall only. Test yourself on every vocab list and grammar rule.", coverage:"100%" },
      { subject:"embedded", slot:"5:00â€“6:30 PM",  type:"deep", why:"Post-exam recovery window. Keep embedded momentum going.", topics:"Memory Systems (RAM, ROM, Cache). Address Decoding. Memory expansion.", strategy:"Draw memory hierarchy diagrams. Practice address decoding calculations.", coverage:"75%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Post-exam SAD recall",    slot:"4:00â€“4:30 PM", task:"Quick 72h spaced repetition of Day 1 SAD content.", subject:"sad" },
      { type:"shallow", label:"Networking Modules 7-9",  slot:"7:30â€“9:00 PM", task:"Ethernet Switching, Network Layer, Address Resolution.", subject:"networking" },
    ],
    tip:"On exam days, use the morning for final active recall. After the exam, take a 30-min break before returning to study."
  },
  {
    date:"19 Jun", day:"Fri",
    deepBlocks:[
      { subject:"networking", slot:"9:00â€“10:30 AM", type:"deep", why:"Peak cortisol. Networking is now the priority - exam in 6 days.", topics:"Modules 10-12: TCP/IP Transport, Application Layer, Network Security Fundamentals.", strategy:"Subnetting practice problems. Draw TCP 3-way handshake from memory.", coverage:"50%" },
      { subject:"sad",        slot:"3:00â€“4:30 PM",  type:"deep", why:"SAD exam in 5 days. Increase to high priority.", topics:"Object-Oriented Analysis: Class Diagrams, Sequence Diagrams, Activity Diagrams.", strategy:"Draw each UML diagram type from memory. Practice converting scenarios to diagrams.", coverage:"75%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Embedded spaced recall",  slot:"8:00â€“8:30 AM", task:"Full embedded recall: Combination, Sequential, Memory systems.", subject:"embedded" },
      { type:"shallow", label:"Math Chapter 3-4",        slot:"1:00â€“2:00 PM", task:"Eigenvalues, Eigenvectors, Vector Spaces, Linear Transformations.", subject:"math" },
      { type:"review",  label:"Networking recall",       slot:"5:00â€“5:30 PM", task:"Active recall of all networking modules covered so far.", subject:"networking" },
      { type:"shallow", label:"IS first look",           slot:"7:30â€“9:00 PM", task:"Chapter 1-2: Introduction to AI, Problem Solving, Search Strategies.", subject:"is" },
    ],
    tip:"Friday is an ideal day for interleaving - switching between subjects builds stronger cross-domain retrieval pathways."
  },
  {
    date:"20 Jun", day:"Sat",
    deepBlocks:[
      { subject:"math",       slot:"9:00â€“10:30 AM", type:"deep", why:"Math exam in 3 days. Elevate to critical priority.", topics:"Differential Equations: First-order, Second-order, Laplace Transforms.", strategy:"Solve 15 practice problems. Time yourself. Focus on weak areas.", coverage:"40%" },
      { subject:"networking", slot:"3:00â€“4:30 PM",  type:"deep", why:"Networking exam in 5 days. Continue building momentum.", topics:"Modules 13-15: VLSM, IPv6 Addressing, Static Routing, Router Configuration.", strategy:"Practice subnetting with VLSM. Configure static routes on paper.", coverage:"75%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"SAD full recall",           slot:"8:00â€“8:30 AM", task:"Full SAD recall: All diagrams, methodologies, requirements.", subject:"sad" },
      { type:"shallow", label:"Math practice",             slot:"1:00â€“2:00 PM", task:"More differential equation practice. Focus on Laplace transforms.", subject:"math" },
      { type:"review",  label:"Embedded final review",     slot:"5:00â€“5:30 PM", task:"Complete embedded review. All chapters flashcard test.", subject:"embedded" },
      { type:"shallow", label:"IS Chapter 3-4",            slot:"7:30â€“9:00 PM", task:"Knowledge Representation, Expert Systems, Fuzzy Logic.", subject:"is" },
    ],
    tip:"When exam pressure builds, resist the urge to study all night. Diminishing returns set in after 90 minutes of focused work."
  },
  {
    date:"21 Jun", day:"Sun",
    deepBlocks:[
      { subject:"math", slot:"9:00â€“10:30 AM", type:"deep", why:"Math exam in 2 days. Intensive problem solving.", topics:"Fourier Series, Partial Differential Equations, Complex Analysis.", strategy:"Past paper practice. Solve under timed conditions.", coverage:"70%" },
      { subject:"sad",  slot:"3:00â€“4:30 PM",  type:"deep", why:"SAD exam in 3 days. Final deep work session.", topics:"Implementation, Testing, Maintenance. Complete system design case study.", strategy:"Write a complete system analysis for a sample project from scratch.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Math formula review", slot:"8:00â€“8:30 AM", task:"Write all key formulas from memory. Check and correct.", subject:"math" },
      { type:"shallow", label:"Networking recall",   slot:"1:00â€“1:30 PM", task:"Full networking recall. All modules.", subject:"networking" },
      { type:"review",  label:"SAD past papers",     slot:"5:00â€“6:00 PM", task:"Solve 2 past SAD exam papers under timed conditions.", subject:"sad" },
      { type:"shallow", label:"OOP first look",      slot:"7:30â€“9:00 PM", task:"Java basics: Classes, Objects, Inheritance, Polymorphism.", subject:"oop" },
    ],
    tip:"Active recall testing (past papers) is 3x more effective than re-reading notes. Test yourself ruthlessly."
  },
  {
    date:"22 Jun", day:"Mon",
    deepBlocks:[
      { subject:"math",       slot:"9:00â€“11:00 AM", type:"deep", why:"Math exam TOMORROW. Final intensive review.", topics:"Full math review: All chapters. Focus on weak areas identified in practice.", strategy:"Solve 20 mixed problems covering all topics. Active recall of formulas.", coverage:"90%" },
      { subject:"networking", slot:"3:00â€“4:30 PM",  type:"deep", why:"Networking exam in 3 days. Keep momentum.", topics:"Final networking modules: Dynamic Routing, Network Troubleshooting, Review.", strategy:"Complete subnetting mastery. Solve 20 subnetting problems.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Math key formulas",   slot:"7:00â€“7:30 AM", task:"Write every formula from memory one final time.", subject:"math" },
      { type:"shallow", label:"SAD final review",    slot:"1:00â€“1:30 PM", task:"Quick SAD scan for any remaining gaps.", subject:"sad" },
      { type:"review",  label:"IS Chapter 5-6",      slot:"5:00â€“6:00 PM", task:"Neural Networks basics, Machine Learning concepts.", subject:"is" },
      { type:"shallow", label:"OOP Chapters 3-4",    slot:"7:30â€“9:00 PM", task:"Encapsulation, Abstraction, Interfaces, Abstract Classes.", subject:"oop" },
    ],
    tip:"The night before an exam: do a single final active recall pass, then STOP. Sleep is the most powerful study tool you have."
  },
  {
    date:"23 Jun", day:"Tue", examToday:"math",
    deepBlocks:[
      { subject:"math", slot:"8:00â€“11:00 AM", type:"deep", why:"EXAM DAY: Math at 2:30 PM. Morning final review.", topics:"Final math exam preparation. Active recall of all formulas and problem types.", strategy:"Quick formula sheet from memory. Solve 5 practice problems. Stay calm.", coverage:"100%" },
      { subject:"sad",  slot:"5:00â€“6:30 PM",  type:"deep", why:"SAD exam TOMORROW. Post-math exam deep work.", topics:"Complete SAD review: All chapters, diagrams, methodologies.", strategy:"Full active recall test. Draw every diagram type from memory.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Networking spaced recall", slot:"4:00â€“4:30 PM", task:"Post-exam networking recall to maintain momentum.", subject:"networking" },
      { type:"shallow", label:"IS recall",               slot:"7:30â€“8:30 PM", task:"Review IS chapters 1-6 flashcards.", subject:"is" },
    ],
    tip:"On exam morning: one quick active recall pass of key formulas, then trust your preparation. Anxiety harms retrieval."
  },
  {
    date:"24 Jun", day:"Wed", examToday:"sad",
    deepBlocks:[
      { subject:"sad",        slot:"7:00â€“8:30 AM", type:"deep", why:"EXAM DAY: SAD at 9:00 AM. Final morning prep.", topics:"Final SAD review: Key diagrams, methodologies, case study patterns.", strategy:"Quick active recall of all UML diagrams and SDLC phases.", coverage:"100%" },
      { subject:"networking", slot:"2:00â€“3:30 PM", type:"deep", why:"Networking exam TOMORROW. Post-SAD exam focus shift.", topics:"Full networking review: All modules, subnetting, protocols.", strategy:"Timed subnetting drill. Protocol comparison tables from memory.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Post-SAD debrief",          slot:"11:00â€“11:30 AM", task:"Quick post-exam review. Note any surprising questions.", subject:"sad" },
      { type:"shallow", label:"Networking final prep",     slot:"5:00â€“6:30 PM",   task:"Final networking practice: past papers and key concept review.", subject:"networking" },
      { type:"shallow", label:"OOP Chapter 5-6",           slot:"7:30â€“9:00 PM",   task:"Exception Handling, File I/O, Collections Framework.", subject:"oop" },
    ],
    tip:"After each exam, take a 30-min complete break. Then pivot fully to the next exam subject. Don't dwell on what's done."
  },
  {
    date:"25 Jun", day:"Thu", examToday:"networking",
    deepBlocks:[
      { subject:"networking", slot:"7:00â€“8:30 AM", type:"deep", why:"EXAM DAY: Networking at 9:00 AM. Final prep.", topics:"Final networking review: Subnetting, routing, protocols, security.", strategy:"Quick recall of all subnetting rules. Review protocol port numbers.", coverage:"100%" },
      { subject:"embedded",   slot:"2:00â€“3:30 PM", type:"deep", why:"Embedded exam TOMORROW. Shift focus immediately.", topics:"Full embedded review: Combination, Sequential, Memory, I/O systems.", strategy:"Complete active recall test of all embedded topics.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Post-networking debrief",    slot:"11:00â€“11:30 AM", task:"Quick post-exam notes on networking.", subject:"networking" },
      { type:"shallow", label:"Embedded final review",      slot:"5:00â€“6:30 PM",   task:"Embedded past papers and key concept tables.", subject:"embedded" },
      { type:"shallow", label:"IS Chapter 7-8",             slot:"7:30â€“9:00 PM",   task:"Genetic Algorithms, Natural Language Processing basics.", subject:"is" },
    ],
    tip:"Back-to-back exams require strong mental discipline. Use the afternoon to fully pivot - don't look back at the morning exam."
  },
  {
    date:"26 Jun", day:"Fri", examToday:"embedded",
    deepBlocks:[
      { subject:"embedded", slot:"9:00â€“11:00 AM", type:"deep", why:"EXAM DAY: Embedded at 3:00 PM. Morning deep review.", topics:"Full embedded review: All chapters, circuit diagrams, timing analysis.", strategy:"Draw all circuit diagrams from memory. Review timing analysis problems.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"shallow", label:"Embedded final scan", slot:"1:00â€“2:00 PM", task:"Light review. Don't cram. Trust preparation.", subject:"embedded" },
      { type:"review",  label:"IS deep review",      slot:"5:00â€“6:30 PM", task:"Post-exam IS deep review of all chapters.", subject:"is" },
      { type:"shallow", label:"OOP Chapter 7-8",     slot:"7:30â€“9:00 PM", task:"Design Patterns: Singleton, Factory, Observer, Strategy.", subject:"oop" },
    ],
    tip:"For afternoon exams, use the morning peak for focused review but stop 1 hour before the exam to let your mind settle."
  },
  {
    date:"27 Jun", day:"Sat",
    deepBlocks:[
      { subject:"is",  slot:"9:00â€“10:30 AM", type:"deep", why:"IS exam in 3 days. Intensive study begins.", topics:"Full IS review Part 1: AI intro, Search, Knowledge Representation, Expert Systems.", strategy:"Create comprehensive mind maps for each chapter. Active recall test.", coverage:"50%" },
      { subject:"oop", slot:"3:00â€“4:30 PM",  type:"deep", why:"OOP exam in 4 days. Start intensive preparation.", topics:"Full OOP review Part 1: Classes, Inheritance, Polymorphism, Encapsulation.", strategy:"Write code examples from memory for each OOP concept.", coverage:"50%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"IS flashcards",      slot:"1:00â€“1:30 PM", task:"Create 20 IS flashcards covering all key concepts.", subject:"is" },
      { type:"shallow", label:"OOP code practice",  slot:"5:00â€“6:00 PM", task:"Write 5 small Java programs demonstrating each OOP principle.", subject:"oop" },
      { type:"review",  label:"IS recall",          slot:"7:30â€“8:30 PM", task:"Active recall of all IS chapters. Identify weak areas.", subject:"is" },
    ],
    tip:"With 3+ days until an exam, focus on building strong conceptual frameworks rather than memorizing details."
  },
  {
    date:"28 Jun", day:"Sun",
    deepBlocks:[
      { subject:"is",  slot:"9:00â€“10:30 AM", type:"deep", why:"IS exam in 2 days. Increase intensity.", topics:"Full IS review Part 2: Neural Networks, ML, Fuzzy Logic, NLP, Genetic Algorithms.", strategy:"Draw neural network architectures. Practice fuzzy logic calculations.", coverage:"80%" },
      { subject:"oop", slot:"3:00â€“4:30 PM",  type:"deep", why:"OOP exam in 3 days. Continue intensive prep.", topics:"Full OOP review Part 2: Exception Handling, Collections, Design Patterns, File I/O.", strategy:"Implement design patterns from memory. Trace through collection operations.", coverage:"80%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"IS past papers",        slot:"1:00â€“2:00 PM", task:"Solve IS past exam papers under timed conditions.", subject:"is" },
      { type:"shallow", label:"OOP design patterns",   slot:"5:00â€“6:00 PM", task:"Review and implement all design patterns from memory.", subject:"oop" },
      { type:"review",  label:"IS weak areas",         slot:"7:30â€“8:30 PM", task:"Focus on IS weak areas identified in past papers.", subject:"is" },
    ],
    tip:"Two days before an exam is the sweet spot for past paper practice. It reveals gaps while there's still time to fix them."
  },
  {
    date:"29 Jun", day:"Mon",
    deepBlocks:[
      { subject:"is",  slot:"9:00â€“11:00 AM", type:"deep", why:"IS exam TOMORROW. Final intensive review.", topics:"Complete IS review: All chapters, algorithms, calculations, theory.", strategy:"Full active recall test. Cover every chapter systematically.", coverage:"100%" },
      { subject:"oop", slot:"3:00â€“4:30 PM",  type:"deep", why:"OOP exam in 2 days. Pre-final review.", topics:"Complete OOP review: All concepts, code patterns, design principles.", strategy:"Write complete Java programs demonstrating all key concepts.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"IS final formula sheet", slot:"7:00â€“7:30 AM", task:"Write all IS key concepts and formulas from memory.", subject:"is" },
      { type:"shallow", label:"OOP past papers",        slot:"5:00â€“6:30 PM", task:"Solve OOP past exam papers. Focus on code tracing.", subject:"oop" },
      { type:"review",  label:"IS final recall",        slot:"7:30â€“8:30 PM", task:"One final active recall pass of all IS material.", subject:"is" },
    ],
    tip:"The night before: one final active recall pass, then STOP. Trust your preparation. Quality sleep is your secret weapon."
  },
  {
    date:"30 Jun", day:"Tue", examToday:"is",
    deepBlocks:[
      { subject:"is",  slot:"7:00â€“8:30 AM", type:"deep", why:"EXAM DAY: IS at 9:00 AM. Final morning prep.", topics:"Final IS review: Key algorithms, neural networks, fuzzy logic, expert systems.", strategy:"Quick active recall of top 20 key concepts. Stay calm and confident.", coverage:"100%" },
      { subject:"oop", slot:"2:00â€“3:30 PM", type:"deep", why:"OOP exam TOMORROW. Post-IS focus shift.", topics:"Full OOP final review: All chapters and code patterns.", strategy:"Write code from memory. Trace through past paper problems.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review",  label:"Post-IS debrief",   slot:"11:00â€“11:30 AM", task:"Quick post-IS exam notes.", subject:"is" },
      { type:"shallow", label:"OOP final prep",    slot:"5:00â€“6:30 PM",   task:"Final OOP practice: past papers and concept review.", subject:"oop" },
      { type:"review",  label:"OOP final recall",  slot:"7:30â€“8:30 PM",   task:"One final comprehensive OOP recall session.", subject:"oop" },
    ],
    tip:"Almost done! Two exams left. Channel your momentum forward - you've built strong foundations through this systematic approach."
  },
  {
    date:"1 Jul", day:"Wed", examToday:"oop",
    deepBlocks:[
      { subject:"oop", slot:"7:00â€“8:30 AM", type:"deep", why:"EXAM DAY: OOP at 9:00 AM. Final preparation.", topics:"Final OOP review: Java concepts, design patterns, code tracing.", strategy:"Quick recall of all OOP principles. Review code patterns one final time.", coverage:"100%" },
    ],
    shallowBlocks:[
      { type:"review", label:"Victory review", slot:"2:00â€“3:00 PM", task:"Exams complete! Review your study system. Note what worked best for future semesters.", subject:null },
    ],
    tip:"Congratulations on completing your exam season! Reflect on what worked: the neuroscience-backed approach of peak-aligned deep work and spaced repetition."
  },
];

export const PHASES = [
  { id:1, label:"Phase 1", period:"Julâ€“Sep 2026", title:"Foundation: Advanced Core & Algorithms",  color:"#00e5cc", income:"RM 0 â†’ 2k/mo",     focus:"Master advanced data structures, algorithms, and high-performance backend engineering (Go/Rust/C++).", milestones:["Deep dive into distributed systems concepts and low-latency architectures.","Complete 100+ LeetCode Hard problems for elite problem-solving speed.","Build a high-throughput microservice architecture project and open-source it.","Secure high-paying remote freelance gigs fixing complex backend bottlenecks."] },
  { id:2, label:"Phase 2", period:"Octâ€“Dec 2026", title:"Niche Mastery: AI & Machine Learning",    color:"#a78bfa", income:"RM 2k â†’ 15k/mo",   focus:"Pivot into high-leverage domains: training LLMs, deploying machine learning models, and data engineering.", milestones:["Master PyTorch, TensorFlow, and advanced neural network architectures.","Deploy custom AI agents for business workflow automation.","Acquire premium business clients for custom AI integration retainers.","Publish technical papers or detailed blogs on implementing scalable AI pipelines."] },
  { id:3, label:"Phase 3", period:"Janâ€“Jun 2027", title:"Scale: High-Value Consulting & SaaS",     color:"#ffd166", income:"RM 10k â†’ 60k/mo",  focus:"Productize deep technical skills. Shift from hourly work to value-based pricing and recurring SaaS revenue.", milestones:["Launch an AI-driven B2B SaaS product solving a niche enterprise problem.","Transition to elite tech consulting, charging premium rates for system architecture.","Scale monthly recurring revenue by onboarding 5 high-ticket enterprise clients.","Contribute to major open-source projects to establish elite technical authority."] },
  { id:4, label:"Phase 4", period:"Julâ€“Dec 2027", title:"Dominate: Tech Leadership & Automation",  color:"#4ade80", income:"RM 60k â†’ 100k+/mo", focus:"Achieve hands-off business operations, build a specialized dev team, and focus on high-level architecture.", milestones:["Hire top-tier developers to maintain and scale your SaaS products.","Focus exclusively on R&D, exploring emerging tech like quantum computing or web3.","Launch a second high-leverage SaaS product leveraging your scalable backend template.","Achieve RM 100k+/month run rate while dedicating time to technical leadership."] },
];

export const TABS = [
  { id:'exam',     icon:'ðŸ ', label:'Schedule' },
  { id:'neuro',    icon:'ðŸ§¬', label:'Science'  },
  { id:'subjects', icon:'ðŸ“Š', label:'Matrix'   },
  { id:'roadmap',  icon:'ðŸš€', label:'Roadmap'  },
];
