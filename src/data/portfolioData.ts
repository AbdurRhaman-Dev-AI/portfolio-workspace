import { Project, HighlightSlide, ExpertiseArea, RoadmapItem } from '../types/portfolio';

export const personalInfo = {
  name: 'Abdur Rahman',
  githubUsername: 'AbdurRhaman-Dev-AI',
  githubUrl: 'https://github.com/AbdurRhaman-Dev-AI',
  email: 'abdurrahman.dev.ai@gmail.com',
  role: 'Computer Science & Technology Diploma Engineer',
  tagline: 'Building intelligent Python systems, full-stack web apps, and interactive 3D tools.',
  shortBio:
    '2+ years of Python development and 3D modeling experience—turning complex ideas into clean, human-centered software.',
  location: 'Bangladesh',
  status: 'Open to Software Engineering Roles & Innovative Collaborations',
  metrics: [
    { label: 'Python Systems Experience', value: '2+ Yrs' },
    { label: 'Specialization', value: '3D Mesh & AI' },
    { label: 'Full-Stack Delivery', value: 'Next.js & Cloud' },
  ],
};

export const highlightSlides: HighlightSlide[] = [
  {
    id: 'daily-flow-slide',
    tag: 'Full-Stack Engineering',
    title: 'Daily Flow',
    headline: 'Liquid Glass Journaling & Memory Vault',
    description:
      'Story-driven daily journaling web application architected with Next.js, TypeScript, and Firebase. Features interactive monthly calendar heatmaps, per-user data isolation, and automatic chronological timestamps.',
    gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    accentColor: '#0071E3',
    bullets: [
      'Interactive monthly calendar with activity status dots and smooth transitions',
      'Firebase security rules enforcing strict per-user database and media isolation',
      'Rich text entries supporting image/video memories with instant auto-save',
      'Apple liquid-glass translucent aesthetic with zero-latency responsive layout',
    ],
    previewType: 'calendar',
  },
  {
    id: '3d-studio-slide',
    tag: '3D Graphics & AI',
    title: 'AI-Assisted 3D Asset Studio',
    headline: 'Generative 2D-to-3D & Text Mesh Workspace',
    description:
      'Interactive web and desktop 3D tooling platform enabling text-to-3D and image-to-3D workflows. Features real-time Three.js viewport manipulation, trimesh geometry processing, natural-language modifications, and multi-format exports.',
    gradient: 'from-purple-500/10 via-cyan-500/5 to-transparent',
    accentColor: '#8E44AD',
    bullets: [
      'Interactive Three.js 3D viewport with OrbitControls and real-time wireframe toggle',
      'Automated mesh island separation and watertight plane-slicing geometry engine',
      'Integrated Gemini AI vision & prompt orchestration for intelligent mesh refinement',
      'Direct multi-format pipeline exporting production-ready .GLB, .FBX, and .OBJ',
    ],
    previewType: 'mesh-viewport',
  },
  {
    id: 'python-systems-slide',
    tag: 'Systems & Agentic Automation',
    title: 'Python Automation & Agentic AI',
    headline: 'Intelligent Workflows & Orchestrated Agents',
    description:
      'Engineered over 2+ years of hands-on Python development. Encompasses automated CLI utilities, high-performance data processing, and multi-agent workflows leveraging Claude AI, Gemini, and Google Antigravity.',
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    accentColor: '#10B981',
    bullets: [
      'Robust Python backend services with type hints, custom error boundaries, and logging',
      'Multi-model LLM orchestration using Gemini API and Claude reasoning loops',
      'Automated batch file transformation, web scrapers, and headless browser agents',
      'Deterministic script pipelines with reproducible virtual environments and CI checks',
    ],
    previewType: 'terminal',
  },
  {
    id: '3d-pipeline-slide',
    tag: 'Digital Asset Engineering',
    title: '3D Modeling & Mesh Pipelines',
    headline: 'Watertight Geometry for Renders & Additive Fabrication',
    description:
      'Advanced 3D modeling and mesh repair pipelines in Blender and trimesh. Converting organic 2D concept art into structurally sound, optimized polygonal models ready for real-time engines and 3D printing.',
    gradient: 'from-amber-500/10 via-rose-500/5 to-transparent',
    accentColor: '#F59E0B',
    bullets: [
      'Precision polygon topology with clean quad flow and non-manifold error elimination',
      'Automated boolean operations, hollow shell generation, and wall-thickness validation',
      'Blender Python (bpy) automation scripts for rapid UV unwrapping and batch export',
      'High-poly to low-poly baking workflows with normal and ambient occlusion maps',
    ],
    previewType: 'pipeline',
  },
];

export const projectsData: Project[] = [
  {
    id: 'daily-flow',
    title: 'Daily Flow',
    subtitle: 'Story-Driven Daily Journaling Web App',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web',
    featured: true,
    summary:
      'Story-driven daily journaling web app with rich text entries, image/video memories, interactive monthly calendar, automatic timestamps, and per-user Firebase data isolation.',
    description:
      'Daily Flow is a modern, privacy-first personal journaling platform built to help people record their life stories with grace and speed. Engineered with Next.js App Router, TypeScript, and Firebase Firestore, it provides real-time syncing, rich multimedia attachments, an interactive month-view calendar with entry indicators, and strict user security rules.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase Firestore', 'Framer Motion'],
    githubUrl: 'https://github.com/AbdurRhaman-Dev-AI/daily-flow',
    badge: 'Production Web App',
    stats: [
      { label: 'Security Model', value: 'Per-User Firebase Rules' },
      { label: 'Sync Latency', value: '< 100ms' },
      { label: 'UI Architecture', value: 'Liquid Glass (Apple)' },
    ],
    overview:
      'Daily Flow was born from a desire to combine emotional reflection with the frictionless speed of modern web architecture. Traditional note apps often feel either too cluttered or rigid; Daily Flow focuses on a fluid, tactile journaling journey. Every journal entry is timestamped automatically and grouped by date in an interactive calendar that visually plots personal writing habits over weeks and months.',
    keyFeatures: [
      'Interactive Monthly Calendar: Dynamic calendar matrix with active day indicators, streak counters, and instant single-click day review.',
      'Per-User Data Isolation: Firebase security rules guarantee users can only read and write their own documents and encrypted media storage tokens.',
      'Rich Multimedia Attachments: Seamless support for visual memories, audio reflections, and inline rich formatting.',
      'Auto-Saving Engine: Debounced background synchronization prevents lost thoughts during live typing.',
      'Responsive Apple Liquid-Glass UI: Translucent frosted elements, glass cards with backdrop blur, and dark mode support.',
    ],
    architecture: {
      title: 'Next.js App Router & Serverless Firebase Infrastructure',
      description:
        'A reactive client-server architecture balancing instant local state responsiveness with cloud durability and encryption.',
      layers: [
        {
          name: 'Presentation Layer',
          tech: 'Next.js App Router, React 19, Tailwind CSS',
          role: 'Handles liquid-glass component rendering, interactive calendar state, and layout animations.',
        },
        {
          name: 'State & Client Logic',
          tech: 'TypeScript, React Context, Debounced State Hooks',
          role: 'Manages draft caching, input validation, and optimistic UI updates for instant feedback.',
        },
        {
          name: 'Backend & Persistence',
          tech: 'Firebase Firestore & Cloud Storage',
          role: 'Provides real-time document listener synchronization, ACID document transactions, and media storage.',
        },
        {
          name: 'Security & Access Boundary',
          tech: 'Firebase Security Rules & Firebase Auth',
          role: 'Enforces strict per-UID authorization headers ensuring zero cross-tenant data leakage.',
        },
      ],
    },
    techStack: [
      { category: 'Frontend', skills: ['Next.js (App Router)', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend & Cloud', skills: ['Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'Security Rules'] },
      { category: 'Tooling & CI', skills: ['Git', 'GitHub', 'ESLint', 'Vercel Deployment'] },
    ],
  },
  {
    id: 'ai-3d-asset-studio',
    title: 'AI-Assisted 3D Asset Studio',
    subtitle: 'Text & 2D-to-3D Generative Mesh Workspace',
    category: '3d-ai',
    categoryLabel: '3D & AI Tooling',
    featured: true,
    summary:
      'Full-stack 2D-image-to-3D and text-to-3D creation workspace with Three.js mouse/touch viewport controls, natural-language model editing, mesh island splitting & plane slicing, and .glb, .fbx, .obj export.',
    description:
      'AI-Assisted 3D Asset Studio bridges natural language and generative AI with high-precision 3D geometry manipulation. Users can input reference images or text prompts to produce preliminary 3D models, inspect them with full 360° orbital controls, slice models cleanly across user-defined cutting planes, separate loose mesh islands, and export directly to industry standard formats.',
    tags: ['Python', 'Three.js', 'trimesh', 'Gemini AI', 'TypeScript', 'Blender API'],
    badge: 'AI & 3D Pipeline',
    stats: [
      { label: 'Viewport Renderer', value: 'WebGL / Three.js' },
      { label: 'Geometry Engine', value: 'trimesh & NumPy' },
      { label: 'Export Formats', value: '.GLB, .FBX, .OBJ' },
    ],
    overview:
      'Building 3D assets from scratch has traditionally required steep learning curves in complex DCC software. This project combines Python geometry compute kernels with Gemini AI multimodal vision reasoning and a responsive Three.js browser viewport, allowing creators to rapidly generate, visualize, slice, and export 3D prototypes within minutes.',
    keyFeatures: [
      'Interactive 3D Web Viewport: 60fps WebGL canvas with orbit rotation, pan, zoom, wireframe toggle, and realistic PBR lighting.',
      'Natural-Language AI Mesh Refinement: Prompts interpreted via Gemini to suggest geometry edits, scale adjustments, and material modifications.',
      'Plane Slicing & Mesh Island Splitting: Algorithmic mesh sectioning powered by trimesh, allowing parts to be sliced for 3D printing bed limits.',
      'Watertight & Manifold Validation: Automatic detection and repair of non-manifold edges, inverted normals, and zero-volume holes.',
      'Multi-Format Asset Exporter: One-click serialization into .GLB (for web/AR), .OBJ (for DCC tools), and .FBX (for game engines).',
    ],
    architecture: {
      title: 'Full-Stack Hybrid Python-WebGL Architecture',
      description:
        'Decoupled computational architecture: WebGL front-end for interactive viewing and high-performance Python geometry workers.',
      layers: [
        {
          name: 'Interactive Viewport',
          tech: 'Three.js, WebGL, OrbitControls, TypeScript',
          role: 'Interactive scene rendering, material shading, bounding-box helpers, and mouse raycasting.',
        },
        {
          name: 'AI Reasoning Layer',
          tech: 'Gemini 2.5 Flash / Multimodal API',
          role: 'Analyzes input 2D concepts, drafts topological bounding boxes, and generates geometric prompt guidance.',
        },
        {
          name: 'Geometry Kernel',
          tech: 'Python, trimesh, NumPy, SciPy',
          role: 'Executes boolean unions, planar slicing, manifold repair, face decimation, and vertex normal recomputation.',
        },
        {
          name: 'Format Serialization',
          tech: 'Python trimesh exporters & Blender headless scripts',
          role: 'Compiles clean binary GLTF/GLB and ASCII OBJ files with embedded material and texture coordinates.',
        },
      ],
    },
    techStack: [
      { category: 'AI & Reasoning', skills: ['Gemini AI API', 'Claude AI', 'Multimodal Vision', 'Prompt Engineering'] },
      { category: '3D & Graphics', skills: ['Three.js', 'WebGL', 'trimesh', 'NumPy', 'Blender (bpy)'] },
      { category: 'Language & Frameworks', skills: ['Python', 'TypeScript', 'Next.js', 'FastAPI'] },
    ],
  },
  {
    id: 'python-automation-suite',
    title: 'Python Automation & Systems Suite',
    subtitle: 'Modular Utilities, Agentic Workflows & Scripting',
    category: 'python',
    categoryLabel: 'Python Systems',
    featured: false,
    summary:
      'Collection of modular Python utilities, workflow automation scripts, and Agentic AI prototypes developed over 2+ years of hands-on coding.',
    description:
      'A comprehensive suite of production-grade Python scripts and tools engineered to eliminate repetitive human friction. Spanning automated file organizers, data parsing scrapers, API pipelines, and multi-agent AI loops using Claude AI and Google Antigravity, this suite reflects deep experience with Python language idioms, async processing, and system reliability.',
    tags: ['Python', 'Agentic AI', 'AsyncIO', 'Google Antigravity', 'CLI Automation'],
    githubUrl: 'https://github.com/AbdurRhaman-Dev-AI',
    badge: 'Systems & Utilities',
    stats: [
      { label: 'Language Depth', value: '2+ Years Python' },
      { label: 'Paradigm', value: 'Modular & Async' },
      { label: 'Agent Tools', value: 'Claude & Gemini' },
    ],
    overview:
      'Over more than two years of continuous Python programming, this suite evolved from simple task automations into structured, maintainable software systems. Each module is built with strict typing, detailed docstrings, automated argument parsing via argparse/click, and deterministic error handling.',
    keyFeatures: [
      'Multi-Agent LLM Orchestration: Scripted tool-calling workflows connecting AI reasoning loops to local OS filesystem operations.',
      'High-Throughput File & Media Batching: Asynchronous workers for file conversion, image compression, and checksum verification.',
      'Headless Web Automation: Robust scrapers with dynamic wait conditions, proxy rotation, and resilient retry semantics.',
      'Type-Safe Modular Architecture: Fully compliant with PEP 8 standards, utilizing dataclasses, typing, and pytest suites.',
    ],
    architecture: {
      title: 'Modular Asynchronous Python System Design',
      description:
        'Organized into discrete, reusable packages with isolated configuration, logging, and asynchronous event loops.',
      layers: [
        {
          name: 'Command-Line Interface',
          tech: 'argparse, Rich, Click',
          role: 'Provides colorful terminal progress bars, interactive prompts, and formatted tabular outputs.',
        },
        {
          name: 'Agentic Controller',
          tech: 'Python, Google Antigravity, LLM APIs',
          role: 'Coordinates tool selection, input validation, and step-by-step task execution plans.',
        },
        {
          name: 'Execution Core',
          tech: 'AsyncIO, aiohttp, concurrent.futures',
          role: 'Parallelizes I/O-bound tasks, concurrent network queries, and CPU-intensive file transformations.',
        },
      ],
    },
    techStack: [
      { category: 'Core Language', skills: ['Python 3.11+', 'AsyncIO', 'Dataclasses', 'Type Hinting'] },
      { category: 'Libraries', skills: ['Requests', 'aiohttp', 'BeautifulSoup', 'Rich', 'Pydantic'] },
      { category: 'AI Integration', skills: ['Gemini API', 'Claude AI', 'Google Antigravity SDK'] },
    ],
  },
  {
    id: '3d-character-pipeline',
    title: '3D Character & Figure Asset Pipeline',
    subtitle: 'Concept-to-Render Watertight Asset Workflows',
    category: '3d-ai',
    categoryLabel: '3D & AI Tooling',
    featured: false,
    summary:
      'Custom 3D modeling and mesh-prep workflows converting 2D character concepts into clean, watertight multi-part 3D models ready for rendering and 3D printing.',
    description:
      'An end-to-end digital modeling workflow designed to bridge concept illustration and tangible physical or real-time digital assets. Utilizing Blender, digital sculpting brushes, and trimesh geometry verification, each model is shaped with attention to silhouette, weight distribution, quad topology, and modular assembly keys for 3D printing.',
    tags: ['Blender', '3D Modeling', 'Digital Sculpting', 'trimesh', 'Additive Manufacturing'],
    badge: 'Digital Art & 3D Engineering',
    stats: [
      { label: 'Primary DCC', value: 'Blender 4.x' },
      { label: 'Mesh Integrity', value: '100% Watertight' },
      { label: 'Deliverables', value: 'Sculpt, Retopo & UV' },
    ],
    overview:
      '3D character modeling demands both artistic anatomical intuition and rigorous mechanical accuracy. This pipeline takes stylized 2D sketches and transforms them into 3D models through sculpting, retopology, keying/joining for physical fabrication, and material baking.',
    keyFeatures: [
      'High-Fidelity Digital Sculpting: Dynamic topology sculpting capturing subtle facial expressions, garments, and accessories.',
      'Retopology & UV Unwrapping: Optimized polygonal edge-loops built to deform cleanly without texture distortion.',
      'Keying & Part Assembly for 3D Printing: Custom male/female interlocking pegs with clearance tolerances for physical assembly.',
      'Watertight Geometry Checks: Zero non-manifold edges, zero self-intersections, and verified uniform wall thickness.',
    ],
    architecture: {
      title: 'Multi-Stage 3D Asset Fabrication Pipeline',
      description:
        'Structured 5-step digital asset lifecycle ensuring aesthetic fidelity and structural viability.',
      layers: [
        {
          name: 'Phase 1: Conceptual Blocking',
          tech: 'Blender Primitive Modeling',
          role: 'Establishes primary proportions, silhouette rhythm, and volume scale against reference orthographics.',
        },
        {
          name: 'Phase 2: Digital Sculpting',
          tech: 'Blender Dyntopo & Multiresolution',
          role: 'Fleshes out micro-details, muscular landmarks, fabric folds, and fine surface accents.',
        },
        {
          name: 'Phase 3: Geometry Optimization',
          tech: 'Manual Retopology & Quad-remesh',
          role: 'Produces low/mid-poly meshes with clean loop topology suitable for real-time engines and UV packing.',
        },
        {
          name: 'Phase 4: Fabrication Prep',
          tech: 'trimesh & Boolean Operations',
          role: 'Hollows heavy volumes, introduces drain holes, cuts keyed puzzle joints, and verifies manifold walls.',
        },
      ],
    },
    techStack: [
      { category: 'DCC Software', skills: ['Blender 4.x', 'Cycles / Eevee', 'Sculpting Tools'] },
      { category: 'Geometry Analysis', skills: ['trimesh', 'MeshLab', 'Boolean Math'] },
      { category: 'Formats', skills: ['.OBJ', '.GLB', '.FBX', '.STL'] },
    ],
  },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'software-ai',
    title: 'Software & AI Engineering',
    eyebrow: 'Full-Stack & Intelligent Systems',
    description:
      'Over 2 years of dedicated Python engineering combined with modern TypeScript, Next.js, and cutting-edge generative AI orchestration.',
    icon: 'Terminal',
    highlightStat: '2+ Years Python',
    skills: [
      { name: 'Python', level: '95%', experience: '2+ Years Core', tag: 'Primary' },
      { name: 'TypeScript', level: '88%', experience: 'Modern Strict', tag: 'Web' },
      { name: 'Next.js & React', level: '90%', experience: 'App Router', tag: 'Full-Stack' },
      { name: 'Tailwind CSS', level: '94%', experience: 'Apple Minimalist', tag: 'UI' },
      { name: 'Firebase', level: '85%', experience: 'Auth & Firestore', tag: 'Cloud' },
      { name: 'Gemini AI API', level: '90%', experience: 'Vision & Multimodal', tag: 'AI' },
      { name: 'Claude AI', level: '88%', experience: 'Reasoning Loops', tag: 'AI' },
      { name: 'Google Antigravity', level: '86%', experience: 'Agent Workflows', tag: 'Agents' },
    ],
    capabilities: [
      'Architecting responsive, high-performance web applications using Next.js App Router',
      'Building agentic AI automation pipelines that execute multi-step tool calls',
      'Designing per-tenant secure database models and real-time cloud subscriptions',
      'Writing type-safe, maintainable Python backend services and automated CLI tools',
    ],
  },
  {
    id: '3d-graphics',
    title: '3D Modeling & Graphics',
    eyebrow: 'Spatial & Computational Geometry',
    description:
      'Translating creative visions into mathematically sound 3D models with Blender, Three.js, and automated trimesh geometry pipelines.',
    icon: 'Box',
    highlightStat: 'Watertight Meshes',
    skills: [
      { name: 'Blender 4.x', level: '92%', experience: 'Modeling & Sculpting', tag: 'DCC' },
      { name: 'Three.js & WebGL', level: '85%', experience: 'Interactive Canvas', tag: 'Web 3D' },
      { name: 'trimesh (Python)', level: '90%', experience: 'Geometry Processing', tag: 'Compute' },
      { name: 'Mesh Slicing', level: '88%', experience: 'Planar & Boolean', tag: 'Algorithm' },
      { name: '.GLB / .FBX / .OBJ', level: '95%', experience: 'Asset Pipelines', tag: 'Pipeline' },
      { name: '3D Printing Prep', level: '90%', experience: 'Tolerances & Keying', tag: 'Fabrication' },
    ],
    capabilities: [
      'Creating production-grade 3D assets from 2D reference images and concept sketches',
      'Implementing real-time WebGL viewports with orbit controls and custom lighting',
      'Developing automated Python algorithms for planar mesh slicing and island separation',
      'Ensuring 100% watertight, manifold geometry validated for 3D printing and rendering',
    ],
  },
  {
    id: 'cs-foundation',
    title: 'CS & Engineering Core',
    eyebrow: 'Academic Foundation & Principles',
    description:
      'Formal academic training in Computer Science & Technology combined with production discipline in version control and API design.',
    icon: 'Cpu',
    highlightStat: 'Diploma Engineer',
    skills: [
      { name: 'CS & Technology Diploma', level: 'Completed', experience: 'Engineering Core', tag: 'Degree' },
      { name: 'Data Structures & Alg.', level: '88%', experience: 'Foundational', tag: 'Core CS' },
      { name: 'RESTful API Design', level: '90%', experience: 'Contract First', tag: 'Network' },
      { name: 'Database Architecture', level: '86%', experience: 'Isolated Models', tag: 'Data' },
      { name: 'Git & GitHub', level: '92%', experience: 'Version Control', tag: 'DevOps' },
      { name: 'Software Testing', level: '84%', experience: 'Edge Cases & Unit', tag: 'Quality' },
    ],
    capabilities: [
      'Applying strong algorithmic reasoning to optimize computational geometry operations',
      'Enforcing strict code quality with version control, modular patterns, and documentation',
      'Evaluating trade-offs in cloud database architectures regarding latency and isolation',
      'Continuous learning mindset focused on transitioning into full-time software engineering',
    ],
  },
];

export const roadmapItems: RoadmapItem[] = [
  {
    id: 'milestone-1',
    status: 'completed',
    timeframe: 'Completed',
    title: 'Diploma in Computer Science & Technology',
    badge: 'Graduated / Certified',
    role: 'Engineering Student & Researcher',
    description:
      'Completed comprehensive formal engineering training in Computer Science & Technology. Mastered core fundamentals of computer architecture, operating systems, data structures, algorithms, object-oriented programming, and relational database systems.',
    milestones: [
      'Graduated with strong academic marks in Computer Science & Technology',
      'Built early foundations in Python scripting, algorithms, and web technologies',
      'Completed capstone projects integrating hardware-software interfaces and software systems',
    ],
    focusAreas: ['Algorithms & Data Structures', 'Computer Architecture', 'Relational Databases', 'Object-Oriented Design'],
  },
  {
    id: 'milestone-2',
    status: 'current',
    timeframe: '2026 (Current)',
    title: 'Shipping Full-Stack & AI 3D Tools',
    badge: 'Active Focus',
    role: 'Independent Software & 3D Developer',
    description:
      'Actively developing and shipping production-grade applications: the story-driven journaling platform Daily Flow, the AI-Assisted 3D Asset Studio, and modular Python agentic automation suites. Deepening mastery of Next.js App Router, Three.js, and multimodal LLM architectures.',
    milestones: [
      'Launched Daily Flow: Liquid-glass journaling platform with Firebase isolation',
      'Architected AI-Assisted 3D Asset Studio with Three.js WebGL and trimesh geometry compute',
      'Open-sourced modular Python automation utilities and agentic workflows on GitHub',
      'Refining Apple-inspired minimalist design language and smooth micro-interactions',
    ],
    focusAreas: ['Next.js App Router & TypeScript', 'Three.js & trimesh Geometry', 'Gemini & Claude AI Orchestration', 'Apple Minimalist UX'],
  },
  {
    id: 'milestone-3',
    status: 'upcoming',
    timeframe: '2027 Goal',
    title: 'Software Engineering Role',
    badge: 'Career Target',
    role: 'Software Engineer / AI Systems Developer',
    description:
      'Targeting a high-impact software engineering position within an innovative tech team. Seeking to contribute 2+ years of Python systems experience, modern full-stack web craftsmanship, and computational 3D tooling capabilities to real-world products at scale.',
    milestones: [
      'Join an engineering team building impactful software, AI applications, or 3D platforms',
      'Contribute to distributed systems, cloud microservices, and human-centered user experiences',
      'Collaborate across cross-functional engineering, design, and product organizations',
    ],
    focusAreas: ['Production Scalability', 'System Design & Distributed Services', 'Collaborative Teamwork', 'Agile Product Delivery'],
  },
  {
    id: 'milestone-4',
    status: 'upcoming',
    timeframe: '2028 Goal',
    title: 'BSc in Computer Science',
    badge: 'Higher Education Target',
    role: 'Undergraduate Computer Science Scholar',
    description:
      'Enrolling in a rigorous Bachelor of Science in Computer Science program to deepen theoretical computer science, advanced machine learning research, distributed systems mathematics, and scientific computing.',
    milestones: [
      'Pursue advanced coursework in Machine Learning, Compilers, and Parallel Computing',
      'Engage in academic research at the intersection of AI, computer vision, and 3D graphics',
      'Publish peer-reviewed open research and open-source contributions',
    ],
    focusAreas: ['Deep Learning & Computer Vision', 'Advanced Distributed Systems', 'Formal Methods & Compilers', 'Academic Research'],
  },
];
