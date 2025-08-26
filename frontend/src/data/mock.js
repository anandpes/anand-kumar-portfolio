// Mock data for Anjard Seng's Portfolio
export const portfolioData = {
  personal: {
    name: "ANAND KUMAR",
    title: "Solutions Architect & Data Specialist",
    tagline: "Transforming businesses through innovative cloud solutions and data-driven architectures",
    location: "Sydney, Singapore",
    phone: {
      singapore: "+65-93436738",
      sydney: "0490010496"
    },
    email: "anand.pes@gmail.com",
    visaStatus: ""
  },

  about: {
    summary: "Passionate Solutions Architect with 15+ years of experience in driving digital transformation through cutting-edge technology solutions. I specialize in adopting AI & emerging technologies, architecting scalable cloud platforms, and modernizing legacy payment systems.",
    highlights: [
      "AI & Emerging Tech Adoption",
      "Digital Transformation Leadership",
      "Integration & Middleware Expertise",
      "Payment System Modernisation",
      "Architecture Governance & Standards",
      "Cross-functional Team Leadership"
    ]
  },

  skills: {
    technical: [
      { category: "Programming", skills: ["Java", "JavaScript", "React Native", "Microservices"] },
      { category: "Cloud Platforms", skills: ["AWS", "Microsoft Azure", "OpenShift", "Kubernetes"] },
      { category: "Data Technologies", skills: ["Hadoop", "Data Lakes", "PostgreSQL", "Oracle", "MS SQL", "Data Analysis"] },
      { category: "Integration", skills: ["TIBCO Suite", "ESB", "SOA Frameworks", "REST API", "SOAP", "KAFKA", "IBM MQ", "JMS", "Batch", "SFTP", "API Gateway"] },
      { category: "DevOps", skills: ["Jenkins", "Git", "Bitbucket", "CI/CD", "Docker", "Helm", "Terraform", "AWS CloudFormation"] },
      { category: "Tools", skills: ["Atlassian JIRA", "Confluence", "Microsoft Project", "Power BI", "Excel"] }
    ]
  },

  experience: [
    {
      id: 1,
      title: "Senior Solutions Architect",
      company: "",
      period: "2020 - Present",
      location: "Singapore",
      description: "Leading digital transformation initiatives and payment system modernization projects.",
      achievements: [
        "Architected cloud-native solutions reducing infrastructure costs by 40%",
        "Led payment system modernization serving 2M+ daily transactions",
        "Implemented AI-driven analytics platform improving decision-making by 60%",
        "Established architecture governance standards across 15+ development teams"
      ]
    },
    {
      id: 2,
      title: "Data Specialist & Integration Lead",
      company: "",
      period: "2018 - 2020",
      location: "Singapore",
      description: "Specialized in middleware integration and data platform development.",
      achievements: [
        "Designed and implemented enterprise data lake architecture",
        "Reduced data processing time by 70% through optimized ETL pipelines",
        "Led migration of legacy systems to cloud-based microservices",
        "Managed cross-functional teams of 12+ engineers and analysts"
      ]
    },
    {
      id: 3,
      title: "Technical Consultant",
      company: "",
      period: "2015 - 2018",
      location: "Singapore",
      description: "Provided technical consulting for enterprise integration solutions.",
      achievements: [
        "Delivered 25+ successful integration projects for banking clients",
        "Optimized API performance improving response times by 50%",
        "Developed reusable integration patterns adopted company-wide",
        "Mentored junior developers in enterprise integration best practices"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Financial Analytics Platform",
      description: "Developed an intelligent analytics platform using machine learning to provide real-time insights for financial decision-making.",
      technologies: ["AWS", "Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
      highlights: [
        "Processed 10TB+ of financial data daily",
        "Implemented ML models with 95% prediction accuracy",
        "Reduced manual analysis time by 80%",
        "Served 500+ concurrent users"
      ],
      status: "Completed",
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "Cloud-Native Payment Gateway",
      description: "Modernized legacy payment systems by building a scalable, cloud-native payment gateway with real-time processing capabilities.",
      technologies: ["AWS", "Java", "Spring Boot", "Kubernetes", "Redis", "PostgreSQL"],
      highlights: [
        "Handles 1M+ transactions per day",
        "99.99% uptime with auto-scaling",
        "PCI DSS compliant architecture",
        "Reduced payment processing latency by 60%"
      ],
      status: "Completed",
      category: "Payment Systems"
    },
    {
      id: 3,
      title: "Enterprise Data Lake Migration",
      description: "Led the migration of on-premises data warehouse to cloud-based data lake architecture, enabling advanced analytics and AI capabilities.",
      technologies: ["AWS", "Hadoop", "Spark", "Kafka", "Airflow", "Tableau"],
      highlights: [
        "Migrated 50TB+ of enterprise data",
        "Reduced data processing costs by 45%",
        "Enabled real-time streaming analytics",
        "Improved data accessibility across 20+ departments"
      ],
      status: "Completed",
      category: "Data Engineering"
    },
    {
      id: 4,
      title: "Microservices Integration Hub",
      description: "Designed and implemented a comprehensive integration platform for connecting legacy systems with modern microservices architecture.",
      technologies: ["TIBCO", "Spring Cloud", "Docker", "Jenkins", "REST APIs", "OAuth 2.0"],
      highlights: [
        "Integrated 15+ legacy systems",
        "Reduced integration development time by 70%",
        "Implemented robust security and monitoring",
        "Enabled seamless data flow across enterprise"
      ],
      status: "Completed",
      category: "Integration & Middleware"
    },
    {
      id: 5,
      title: "DevOps Automation Pipeline",
      description: "Built comprehensive CI/CD pipeline with automated testing, deployment, and monitoring for enterprise applications.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Git", "SonarQube", "Prometheus"],
      highlights: [
        "Automated deployment for 30+ applications",
        "Reduced deployment time from hours to minutes",
        "Implemented comprehensive monitoring and alerting",
        "Achieved 99% deployment success rate"
      ],
      status: "Completed",
      category: "DevOps & Automation"
    }
  ],

  contact: {
    email: "anand.pes@gmail.com",
    phone: {
      singapore: "+65-93436738",
      sydney: "0490010496"
    },
    location: "Sydney, Singapore",
    availability: "Open to new opportunities",
    preferredContact: "Email"
  }
};