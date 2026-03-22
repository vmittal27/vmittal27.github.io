export const siteData = {
  name: "Viresh Mittal",
  siteTitle: "Viresh Mittal",
  profileImage: "/images/profile.png",
  bio: `3rd Year Student at UChicago`,
  location: "Chicago, IL",
  institution: "The University of Chicago",
  lastUpdated: "March 22, 2026",
  links: {
    email: "mailto:vmittal@uchicago.edu",
    googleScholar: "#",
    orcid: "https://orcid.org/0009-0005-9826-7591",
    github: "https://github.com/vmittal27",
    linkedin: "https://www.linkedin.com/in/vireshm",
    src: "https://github.com/vmittal27/vmittal27.github.io/tree/main"
  },
  home: {
    title: "About",
    content:
    `I'm a junior at the University of Chicago double majoring in computer science (specializing in systems) and economics.
    I conduct research with the UChicago [SAND Lab](https://sandlab.cs.uchicago.edu/) run by Ben Zhao and Heather Zheng,
    where I study security issues in generative AI. Recently, I have had a particular focus on
    studying AI-generated music. While my research interests primarily
    lie in the adversarial machine learning space,  I also have a strong interest in building
    scalable infrastructure and high-performance data engineering systems.

    This summer, I'm excited to be interning as a Software Engineer at [IMC Trading](https://www.imc.com/us) in Chicago. 
    Previously, I interned at [Icosa Computing](https://www.icosacomputing.com/) where I helped build the supporting infrastructure
    for a quantum-inspired optimization engine used in LLM reasoning.
    
    In my free time, I enjoy watching Cleveland Browns football, trying out new recipes in the kitchen, and getting into pointless arguments with my friends.
    
    You can find more of my work on my [GitHub](https://github.com/vmittal27).`,


  },
  publications: {
    items: [
      {
        title: "Understanding the Prevalence, Detectability, and Economic Impact of AI-generated Music",
        authors: (
          <>
            Stanley Wu, Josephine Passananti, <strong>Viresh Mittal</strong>, Wenxin Ding,
            Haitao Zheng, Ben Y. Zhao
          </>
        ),
        venue: "Proceedings of the 35th USENIX Security Symposium, Baltimore MD, August 2026 (In Submission)",
        year: 2026,
        abstract: "Performed a large-scale measurement of AI-generated music on Spotify, finding that AI slop is easily uploaded, " +
        "and as a result, makes up the majority of new music releases on the platform. ",
        links: {
          pdf: null,
          code: null,
          media: null,
        },
      },
    ],
  },
  cv: {
    downloadUrl: "/files/Viresh_Mittal_Resume.pdf",
    embedUrl: "/files/Viresh_Mittal_Resume.pdf",
  },
  projects: [
    {
      title: "Mkforge",
      date: "In Progress",
      description: "A high-performance, zero external dependency Markdown to PDF converter written in Rust. Still a work in progress.",
      image: "/images/md.png",
      alt: "Markdown logo",
      externalUrl: "https://github.com/vmittal27/mkforge",
      externalText: "Follow Along"
    },
    {
      title: "UChicago Trading Competition",
      date: "In Progress",
      description: "As a member of the UTC Dev Team, I maintain XChange, a high-performance trading platform built in Rust. UTC is one of the largest collegiate trading competitions in the country, with 150 participants and $13,000 in prizes awarded annually.",
      image: "/images/utc.png",
      alt: "UTC 2026 logo",
      externalUrl: "https://tradingcompetition.uchicago.edu/",
      externalText: "Learn More",
    }, 
    {
      title: "Measuring Deepfake Voice Impersonation Attacks",
      date: "Winter 2026", 
      description: "Class project for CMSC 35800: Advanced Adversarial Machine Learning.",
      image: "/images/cs358.png",
      alt: "Graph for deepfake voice impersonation attack project",
      externalUrl: "https://github.com/vmittal27/cs358-project/blob/main/report.pdf",
      externalText: "View Report",
    },
    {
      title: "The Misallocation of AI Innovation in Middle Income Countries",
      date: "Spring 2025",
      description: "Class project for ECON 23050: AI, Innovation, and Growth.",
      alt: "Graph for misallocation of AI innovation project",
      image: "/images/econ23050.png",
      externalUrl: "/files/ECON_23050_FINAL_REPORT.pdf",
      externalText: "View Report"
    },
    {
      title: "Hoops Head 2 Head",
      date: "Summer 2024",
      description: "A challenging multiplayer game where players compete to connect two NBA players through a chain of shared teammates.",
      image: "/images/hoopsh2h.png",
      alt: "Hoops Head 2 Head logo",
      externalUrl: "https://hoopsh2h.sv2projects.com/",
      externalText: "Play Now",
    }

  ],
};
