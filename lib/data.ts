export interface Project {
    slug: string
    title: string
    description: string
    tech: string[]
    role: string
    result: string
    github: string
    gradient: string
    icon: 'shield' | 'scan-text' | 'umbrella' | 'scan'
  }
  
  export const projects: Project[] = [
    {
      slug: 'neuro-symbolic-bot-detection',
      title: 'Neuro-Symbolic AI for Suspicious Bot Detection',
      description:
        'Reproduced a neuro-symbolic explainable-AI research baseline, combining autoencoder-based anomaly detection, Kernel SHAP explainability, and knowledge-graph symbolic reasoning.',
      tech: ['Python', 'PyTorch', 'Autoencoders', 'SHAP', 'Knowledge Graphs'],
      role: 'Team project — research reproduction',
      result: 'ROC-AUC 0.998, 91.3% accuracy on USBIDS dataset; symbolic reasoning layer scored 100% on evaluated explanations',
      github: 'https://github.com/Anamika457/Neuro-Symbolic-AI-for-Suspicious-Bot-Detection',
      gradient: 'from-lime-500/15 via-base-400/10 to-base-600/10',
      icon: 'shield',
    },
    {
      slug: 'document-vqa-robustness',
      title: 'Document VQA Robustness Evaluation',
      description:
        'Fine-tuned a vision-language model on document VQA using LoRA, then built an evaluation pipeline testing robustness to real-world document-capture corruptions like blur, rotation, and compression.',
      tech: ['Python', 'PyTorch', 'Hugging Face', 'PEFT/LoRA', 'SmolVLM'],
      role: 'Independent research project',
      result: 'Diagnosed and fixed evaluation pipeline bugs; separated genuine robustness patterns from statistical noise using held-out test sets',
      github: 'https://github.com/Anamika457/document-vqa-robustness-lora',
      gradient: 'from-coral-500/15 via-lime-500/10 to-base-400/10',
      icon: 'scan-text',
    },
    {
      slug: 'delisure',
      title: 'Delisure — Parametric Income Insurance',
      description:
        'A zero-touch parametric insurance platform for gig workers (Swiggy/Zomato/Zepto delivery partners) with 11 auto-trigger types via live weather API integration.',
      tech: ['FastAPI', 'XGBoost', 'Isolation Forest', 'SHAP', 'PostgreSQL', 'Flutter'],
      role: 'Team project — DEVTrails Guidewire Hackathon 2026',
      result: 'XGBoost premium model R²=0.954; fraud detection stack achieved F1=0.63 with FPR=0.03, prioritizing low false positives for insurance context',
      github: 'https://github.com/shraavv/delisure',
      gradient: 'from-lime-500/15 via-coral-400/10 to-base-500/10',
      icon: 'umbrella',
    },
    {
      slug: 'polyp-segmentation',
      title: 'Polyp Segmentation — Deep Learning',
      description:
        'An end-to-end cloud segmentation pipeline for medical imaging, using a combined BCE and Dice loss function, with all experiments tracked and reproduced via Weights & Biases.',
      tech: ['Python', 'PyTorch', 'WandB', 'GCP'],
      role: 'Independent research project',
      result: 'IoU: 0.8093, Dice: 0.8761 on held-out test set',
      github: 'https://github.com/Anamika457/polyp-segmentation',
      gradient: 'from-base-500/10 via-lime-500/15 to-coral-400/5',
      icon: 'scan',
    },
  ]
  
  export interface ExperienceItem {
    title: string
    org: string
    location: string
    period: string
    points: string[]
  }
  
  export const experience: ExperienceItem[] = [
    {
      title: 'App Development Intern',
      org: 'Traboda Cyberlabs',
      location: 'Remote',
      period: 'Apr 2024 – Nov 2024',
      points: [
        'Engineered and shipped a production-ready Flutter OTT application end-to-end across the full SDLC, meeting all client deadlines.',
        'Translated stakeholder requirements into modular features; maintained code quality via iterative development and peer review.',
      ],
    },
    {
      title: 'Member, amFOSS Student Technology Community',
      org: 'Amrita Vishwa Vidyapeetham',
      location: 'Kollam, India',
      period: 'Nov 2023 – Present',
      points: [
        'Contribute upstream patches to open-source ML libraries sktime and DeepChem: model implementation and API interfacing.',
        'Co-organised Wikimedia Hackathon 2024 (Kochi); led HackTheFuture Hackathon at the college techfest.',
      ],
    },
  ]
  
  export const skills = {
    'AI / ML': [
      'PyTorch',
      'Hugging Face',
      'PEFT/LoRA Fine-Tuning',
      'Vision-Language Models',
      'scikit-learn',
      'XGBoost',
      'Deep Learning',
      'Computer Vision',
      'Explainable AI (SHAP)',
    ],
    Development: ['Flutter', 'Cross-Platform Mobile', 'Python', 'Java', 'C', 'SQL'],
    'Cloud & MLOps': ['GCP', 'WandB', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
    Concepts: ['Probability & Statistics', 'Agile Workflows', 'Relational Databases', 'SDLC'],
  }
  
  export const social = {
    github: 'https://github.com/Anamika457',
    linkedin: 'https://www.linkedin.com/in/anamika-v-menon/',
    email: 'anamikavmenon1@gmail.com',
  }
  
  export const now = {
    text: 'Exploring temporal-GNN extensions for social bot detection',
    location: 'Kerala, India',
  }
  
  export const techMarquee = [
    'PyTorch', 'Flutter', 'LoRA Fine-Tuning', 'XGBoost', 'Hugging Face',
    'FastAPI', 'SHAP', 'GCP', 'Docker', 'Computer Vision',
  ]