export const NAV_LINKS = ['About', 'Projects', 'Research', 'Skills', 'Experience', 'Contact'];

export const STATS = [
  { value: '12+', label: 'Years Research Experience' },
  { value: '159+', label: 'Publications (PHENIX)' },
  { value: 'Ph.D.', label: 'Experimental Nuclear Physics' },
  { value: 'PB', label: 'Scale Data Analyzed' },
];

export const ML_PROJECTS = [
  {
    tag: 'Time Series · Finance',
    title: 'Stock Price & Portfolio Prediction',
    description:
      'Modeled S&P 500 stock prices and constructed portfolios optimized for maximum return and minimum risk. Pipeline spans LSTM and ARIMA/GARCH price modeling, return calculation, and risk metrics.',
    stack: ['Python', 'LSTM', 'ARIMA', 'GARCH', 'Pandas'],
    link: 'https://github.com/deepssharma/Capstone',
    linkLabel: 'GitHub',
  },
  {
    tag: 'Classification · Social Impact',
    title: 'Tanzanian Water Pump Classifier',
    description:
      'Multiclass ML classification to predict pump status — Functional, Non-Functional, or Needs Repair — across thousands of water points. Detailed EDA, feature engineering, XGBoost and stacked ensembles.',
    stack: ['Scikit-learn', 'XGBoost', 'Random Forest', 'Pandas'],
    link: 'https://github.com/deepssharma/project_phase3_tanzania',
    linkLabel: 'GitHub',
  },
  {
    tag: 'Computer Vision · Healthcare',
    title: 'Pneumonia Detection from X-rays',
    description:
      'CNN image classifier to detect pneumonia in chest X-rays. Compared ANN and CNN architectures; applied transfer learning (ResNet, Xception) and LIME for model interpretability.',
    stack: ['Keras', 'CNN', 'ResNet', 'Xception', 'LIME'],
    link: 'https://github.com/deepssharma/Phase4',
    linkLabel: 'GitHub',
  },
  {
    tag: 'Automation · Finance · Python',
    title: 'PTA Treasurer Report Generator',
    description:
      'Python tool that automatically generates monthly treasurer reports for a school PTA from three input files (QuickBooks P&L, Chase bank statement PDF, Givebacks CSV). Outputs a formatted Excel workbook with 4 tabs: Monthly Report, Income vs Budget, Expense vs Budget, and Giveback Reconciliation.',
    stack: ['Python', 'Pandas', 'openpyxl', 'pdfplumber', 'Jupyter'],
    link: 'https://github.com/deepssharma/pta_treasurer',
    linkLabel: 'GitHub',
  },
];

export const RESEARCH_PROJECTS = [
  {
    tag: 'Physics · Automation · Monitoring',
    title: 'Solar Activity Monitoring System',
    description:
      'Automated daily pipeline (cron job) that acquires cosmic muon flux data from detectors across the US, analyzes variation patterns, generates visualizations, and publishes results to the web to predict space weather. Published in JGR Space Physics (2023).',
    stack: ['Python', 'Bash', 'Cron', 'ROOT', 'Data Viz'],
    link: 'http://phynp6.phy-astr.gsu.edu/~cosmic/index_muonTelescope.html',
    linkLabel: 'Live Dashboard',
    title: 'RICH Detector Analysis Pipeline',
    description:
      'Bash/Perl/C++ pipelines for processing terabytes of R&D data from the Ring Imaging Cherenkov Detector at Jefferson Lab, on HPC clusters via Slurm. Results published as first author in NIM A (2024).',
    stack: ['C++', 'Bash', 'Slurm', 'ROOT', 'Perl'],
    link: null,
    linkLabel: null,
  },
  {
    tag: 'Statistical Analysis · Signal Extraction',
    title: 'QGP Signal Extraction at RHIC',
    description:
      'Novel statistical method to extract bottom-quark cross-section from petabytes of heavy-ion collision data (PHENIX, BNL) — exploiting both mass and pT dimensions for greater sensitivity than prior approaches. Contributed to Nature Physics publication (2019).',
    stack: ['C++', 'ROOT', 'SQL', 'Monte Carlo', 'Condor HPC'],
    link: null,
    linkLabel: null,
  },
];

export const PUBLICATIONS = [
  {
    year: '2024',
    title: 'Performance of modular ring imaging Cherenkov detector for particle identification',
    venue: 'Nuclear Instruments and Methods A, Volume 1061, 169080',
    authors: 'D. Sharma et al.',
    badge: 'First Author',
    badgeStyle: 'gold',
    doi: 'https://doi.org/10.1016/j.nima.2023.169080',
  },
  {
    year: '2023',
    title: 'Muon Flux Variations Measured by Low-Cost Portable Cosmic Ray Detectors and Their Correlation with Space Weather Activity',
    venue: 'Journal of Geophysical Research: Space Physics 128(12)',
    authors: 'A. Mubashir et al.',
    badge: null,
    doi: 'https://doi.org/10.1029/2023JA031583',
  },
  {
    year: '2019',
    title: 'Creation of quark-gluon plasma droplets with three distinct geometries',
    venue: 'Nature Physics 15, no. 3',
    authors: 'C. Aidala et al. [PHENIX Collaboration]',
    badge: 'Nature Physics',
    badgeStyle: 'plasma',
    doi: 'https://doi.org/10.1038/s41567-018-0360-0',
  },
  {
    year: '2016',
    title: 'Dielectron production in Au+Au collisions at √s\u2099\u2099 = 200 GeV',
    venue: 'Physical Review C 93, 014904',
    authors: 'A. Adare et al. [PHENIX Collaboration]',
    badge: null,
    doi: 'https://doi.org/10.1103/PhysRevC.93.014904',
  },
  {
    year: '2015',
    title: 'Search for dark photons from neutral meson decays in p+p and d+Au collisions',
    venue: 'Physical Review C 91, 031901(R)',
    authors: 'A. Adare et al. [PHENIX Collaboration]',
    badge: 'Invited Talk',
    badgeStyle: 'mist',
    doi: 'https://doi.org/10.1103/PhysRevC.91.031901',
  },
  {
    year: '2011',
    title: 'Design, Construction, Operation and Performance of a Hadron Blind Detector for PHENIX',
    venue: 'Nuclear Instruments and Methods A, Vol 646.1',
    authors: 'W. Anderson et al.',
    badge: null,
    doi: 'https://doi.org/10.1016/j.nima.2011.05.007',
  },
];

export const SKILLS = [
  {
    category: 'ML & Data Science',
    items: ['Scikit-learn', 'Keras', 'TensorFlow', 'XGBoost', 'Pandas', 'NumPy'],
  },
  {
    category: 'Deep Learning',
    items: ['CNN', 'LSTM', 'ResNet', 'Transfer Learning', 'Data Augmentation', 'LIME'],
  },
  {
    category: 'Languages',
    items: ['Python', 'C++', 'SQL', 'Bash / Shell', 'Perl', 'Fortran'],
  },
  {
    category: 'HPC & Data Engineering',
    items: ['Slurm', 'Condor', 'ROOT', 'PostgreSQL', 'Flask', 'Jekyll'],
  },
  {
    category: 'Physics & Simulation',
    items: ['PYTHIA', 'MC@NLO', 'POWHEG', 'Monte Carlo', 'LaTeX', 'ROOT'],
  },
  {
    category: 'Domain Expertise',
    items: ['Statistical Analysis', 'Signal Extraction', 'Detector Physics', 'Peer Review', 'Scientific Writing'],
  },
];

export const EXPERIENCE = [
  {
    period: '2020 — 2023',
    role: 'Research Fellow',
    org: 'Georgia State University',
    location: 'Atlanta, GA',
    bullets: [
      'Analyzed mRICH detector performance data at Jefferson Lab for future Electron-Ion Collider; published as first author in NIM A (2024).',
      'Built automated daily space weather monitoring pipeline using cosmic muon detectors across the US; published in JGR Space Physics (2023).',
      'Developed HPC pipelines (Bash/Perl/C++) on Slurm clusters for terabyte-scale data processing.',
      'Supervised 2 M.S. students on space weather analysis and programming projects.',
    ],
    stack: ['C++', 'Python', 'Bash', 'HPC / Slurm', 'ROOT'],
  },
  {
    period: '2017 — 2019',
    role: 'Visiting Research Scholar',
    org: 'Stony Brook University',
    location: 'Stony Brook, NY',
    bullets: [
      'Continued PHENIX analyses: low-momentum direct photon measurements in Cu+Au collisions and electron-muon heavy-flavor correlations.',
      'Presented results at Quark Matter 2017 in Chicago.',
    ],
    stack: ['C++', 'ROOT', 'Condor HPC'],
  },
  {
    period: '2011 — 2017',
    role: 'Senior Postdoctoral Research Fellow',
    org: 'Stony Brook University / Brookhaven National Lab',
    location: 'Stony Brook, NY',
    bullets: [
      'Led multiple PHENIX analyses processing petabytes of heavy-ion collision data; contributed to Nature Physics publication (2019).',
      'Developed novel statistical method for extracting bb̄ cross-section exploiting both mass and pT dimensions simultaneously.',
      'Led design, construction, commissioning, and software development for the Hadron Blind Detector — the first large-scale photosensitive GEM detector in a major collider experiment.',
      'Supervised 2 Ph.D. and 2 M.S. students; served as shift leader for data-taking operations; published 7 papers in PRC/PRD/NIM A.',
    ],
    stack: ['C++', 'SQL', 'ROOT', 'Condor HPC', 'Monte Carlo'],
  },
  {
    period: '2010 — 2011',
    role: 'Postdoctoral Research Fellow',
    org: 'Weizmann Institute of Science',
    location: 'Rehovot, Israel',
    bullets: [
      'Studied heavy flavor production via single electrons in Au+Au collisions at √sNN = 62.4 GeV.',
      'Supervised summer student on GEM detector gain calibration for the Hadron Blind Detector.',
    ],
    stack: ['C++', 'ROOT', 'Statistical Analysis'],
  },
  {
    period: '2022 — 2023',
    role: 'Data Science Bootcamp',
    org: 'Flatiron School',
    location: 'New York, NY (part-time)',
    bullets: [
      'Applied ML and deep learning to real-world problems in finance, healthcare, and infrastructure.',
      'Built full Python data science stack: Pandas, NumPy, Scikit-learn, Keras, SQL, Flask.',
    ],
    stack: ['Python', 'Keras', 'Scikit-learn', 'SQL', 'Flask'],
  },
];

export const SOCIAL = {
  github: 'https://github.com/deepssharma',
  linkedin: 'https://www.linkedin.com/in/deepali-sharma-a83a126/',
  scholar: 'https://scholar.google.com/citations?user=IHTt5T0AAAAJ&hl=en',
  orcid: 'https://orcid.org/0000-0001-9872-5250',
  medium: 'https://medium.com/@deeps.sharma',
  email: 'deeps.sharma@gmail.com',
};
