export interface ProjectData {
  id: string;
  title: string;
  tags: string[];
  institution: string;
  date: string;
  description: string;
  highlights: string[];
  skills: string[];
  award?: string;
  image: string;
  // New fields for detail page
  introduction?: string;
  posterImage?: string; // Changed from posterUrl to posterImage for actual image
  posterUrl?: string; // Keep for PDF link
  paperUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
}

export const projects: ProjectData[] = [
  {
    id: "selective-dp-sgd",
    title:
      "Balancing Privacy, Fairness, and Accuracy: A Comparative Study of Standard and Selective DP-SGD on the UCI Adult Income Dataset",
    tags: ["Fairness & Privacy", "Machine Learning"],
    institution: "University of Chicago",
    date: "Fall 2025",
    description:
      "Implemented Selective DP-SGD to study privacy-utility-fairness tradeoffs, applying privacy protection only to sensitive attributes.",
    introduction:
      "This research investigates the tradeoffs between privacy, utility, and fairness in differential privacy methods. This explores whether S-DP-SGD, which selectively applies differential privacy noise to gradients associated with sensitive features (e.g., race and sex), preserve model utility and fairness more effectively than classical DP-SGD.",
    highlights: [
      "Compared Standard DP-SGD vs. Selective DP-SGD on Adult Income Census dataset",
      "Analyzed fairness impacts for both privacy models across demographic groups (sex and race)",
      "Won Faculty Favorite Award at Data Ethics Poster Session",
    ],
    skills: [
      "PyTorch",
      "Opacus",
      "Differential Privacy",
      "Fairness Metrics",
      "Statistical Analysis",
    ],
    award: "Faculty Favorite Award",
    image:
      "/images/IMG_8752.jpg",
    posterImage:
      "/images/Poster_DATA259.jpg",
    posterUrl: "/images/Poster_DATA259.jpg",
    paperUrl: "/paper/Paper_DATA259.pdf",
    githubUrl:
      "https://github.com/Enrico-Madani1/S-DP-SGD_Data259",
  },
  {
    id: "ai-adversarial-chatbot",
    title:
      "Adversarial Collaboration as Pedagogy: Enhacing Spatial Reasoning with Chatbot Dialogue",
    tags: ["Human-AI Collaboration", "NLP", "Education"],
    institution: "Center for Spatial Data Science, UChicago",
    date: "Summer 2025",
    description:
      "Interactive AI chatbot that acts as an adversarial collaborator to help students improve their research questions in spatial data science.",
    introduction:
      "This project develops an interactive AI chatbot designed to help student refine their research question in spatial data science by asking critical and constructive questions (rather than just directly give them answers). Through prompt engineering, the chatbot evaluates and challenges student proposals, helping them develop more rigorous, causally clear, and novel research approaches.",
    highlights: [
      "Built a rubric-based evaluation pipeline for automated research quality assessment",
      "Implemented guardrail mechanisms to balance adversarial challenge with instructional support",
      "Enhanced rigor, causal clarity, and novelty detection in student research ideas development",
    ],
    skills: ["Python", "NLP", "LLMs", "Prompt Engineering", "AI"],
    image:
      "/images/chatbot-layout.png",
    posterImage:
      "/images/AI-chatbot.png",
    youtubeUrl: "https://www.youtube.com/watch?v=O16SpiGKBCU",
    posterUrl: "/images/AI-chatbot.png",
    githubUrl:
      "https://github.com/Enrico-Madani1/adversarial-collaborator-chatbot",
  },
  {
    id: "missing-middle-housing",
    title: "Missing Middle Housing Detection in Chicago",
    tags: [
      "Computer Vision",
      "Urban Data Science",
      "Social Impact",
    ],
    institution: "Urbanism Lab, UChicago",
    date: "Sep 2024 - Present",
    description:
      "YOLOv9-based computer vision pipeline to detect Missing Middle Housing in Chicago and analyze relationships with socioeconomic factors.",
    introduction:
      "Missing Middle Housing (medium-density residential buildings like duplexes, townhouses, and small apartment buildings) plays a crucial role in urban affordability and neighborhood diversity. This project develops a computer vision system to automatically identify and map these housing types across Chicago, enabling large-scale analysis of their distribution and relationship to socioeconomic factors.",
    highlights: [
      "Labeled 11,000+ housing images using Google Street View API and Roboflow",
      "Developed computer vision pipeline using YOLOv9 model to detect middle housings",
      "Applied regression and clustering to study housing-socioeconomic correlations",
    ],
    skills: [
      "YOLOv9",
      "Computer Vision",
      "Web Scraping",
      "Spatial Analysis",
      "QGIS",
    ],
    image:
      "/images/mmh.png",
    githubUrl:
      "https://github.com/Enrico-Madani1/Missing-Middle-Housing",
  },
  {
    id: "chicago-insurance-disparities",
    title: "Chicago Insurance Disparity Project",
    tags: [
      "Data Visualization",
      "Urban Data Science",
      "Social Impact",
    ],
    institution: "University of Chicago",
    date: "Winter 2025",
    description:
      "Data visualization project that explores the impact of healthcare access and socioeconomic conditions on the insurance ownerships in Chicago",
    introduction:
      "This project analyzes health insurance disparities across Chicago by examining how the spatial distribution of healthcare facilities intersects with socioeconomic conditions and changes over time. Using community-area data, I combine geospatial visualizations and exploratory analysis to uncover how clinics, hospitals, income assistance, and neighborhood safety relate to public versus private insurance coverage.",
    highlights: [
      "Analyzed spatial disparities in private vs. public health insurance across Chicago community areas",
      "Conducted temporal analysis to track changes in Medicaid, employment-based insurance, and cash welfare",
      "Integrated data from the Chicago Health Atlas, Chicago Data Portal, and ACS for urban health insights",
    ],
    skills: [
      "Python",
      "Data Visualization",
      "Spatial Analysis",
    ],
    image:
      "/images/chicago_insurance.png",
    paperUrl: "/paper/Final_Project_Write_Up.pdf",
    githubUrl:
      "https://github.com/Enrico-Madani1/Chicago_Insurance_Disparity_Project",
  },
  {
    id: "historical-map-digitization",
    title: "Historical Map Digitization with OpenCV",
    tags: [
      "Computer Vision",
      "Digital Humanities",
      "Spatial Analysis",
    ],
    institution: "Summer Institute in Social Science Research",
    date: "Summer 2024",
    description:
      "AI algorithm using OpenCV to convert historical Sanborn Maps into contour maps, enabling 3D model construction for urban historical analysis.",
    introduction:
      "Historical maps, such as Sanborn maps, contain useful information about urban development patterns, but their paper format limits modern analysis. This project develops AI algorithms to digitize and transform historical Sanborn Fire Insurance Maps into machine-readable contour data, enabling 3D reconstruction of historical urban landscapes and quantitative spatial analysis across time.",
    highlights: [
      "Developed computer vision algorithm using OpenCV for historical map digitization",
      "Spatial analysis of 900+ Illinois streets using QGIS and GeoDa",
      "Produced standardized OpenStreetMap dataset for long-term research use",
    ],
    skills: [
      "OpenCV",
      "Image Processing",
      "QGIS",
      "GeoDa",
      "Spatial Statistics",
    ],
    image:
      "/images/sanborn.png",
    githubUrl:
      "https://github.com/Enrico-Madani1/OpenCV-Translating-Sanborn-Map",
  },
  {
    id: "pisa-socioeconomic-analysis",
    title: "Impact of Socioeconomic Features on PISA Scores",
    tags: [
      "Machine Learning",
      "Education",
      "Statistical Modeling",
    ],
    institution: "University of Chicago",
    date: "Winter 2024",
    description:
      "Regression models and clustering analysis to understand socioeconomic predictors of international student performance.",
    introduction:
      "Educational outcomes vary significantly across countries and demographics. This project uses machine learning and statistical modeling to analyze PISA (Programme for International Student Assessment) data, identifying key socioeconomic factors that predict student performance and revealing patterns of educational inequality across different regions.",
    highlights: [
      "Regression modeling to identify key predictors",
      "K-Means and hierarchical clustering to find regional patterns",
      "Data visualization of educational inequalities",
    ],
    skills: [
      "Python",
      "Scikit-learn",
      "Statistical Modeling",
      "Data Visualization",
    ],
    image:
      "/images/cluster_pisa.png",
    paperUrl: "/paper/Project_Report_Final.pdf",
    githubUrl:
      "https://github.com/Enrico-Madani1/Impact-of-Socio-economic-Features-on-PISA-Scores",
  },
];