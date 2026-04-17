export const featuredProjects = [
  {
    id: "drop-and-shipping",
    title: "Drop And Shipping",
    description: "A scalable e-commerce and logistics platform featuring product management and advanced shipping workflows.",
    stack: "Next.js, Node.js, MongoDB, Tailwind CSS",
    image: "/assets/images/projects/drop-shipping.png",
    url: "https://dropandshipping.com",
    category: "E-commerce & Logistics"
  },
  {
    id: "suffah-institute",
    title: "Suffah Institute of Australia",
    description: "A responsive community platform with custom CMS capabilities for event and content management.",
    stack: "React, Express.js, MongoDB, Node.js",
    image: "/assets/images/projects/suffah.png",
    url: "https://suffahaustralia.org.au",
    category: "Community Platform"
  },
  {
    id: "ab-partner-portal",
    title: "AB Partner Portal",
    description: "An academic and partner management system developed for Academic Bridge English School, Ireland.",
    stack: "Next.js, Node.js, MongoDB, REST API",
    image: "/assets/images/projects/ab-portal.png",
    url: "https://abpartnerportal.com",
    category: "Management System"
  }
];

export const education = [
  {
    id: 1,
    institution: "BCEDS",
    program: "Basic Computer Application",
    year: "2018",
    description: "MS Office tools and essential computer applications; foundational IT literacy and productivity skills."
  },
  {
    id: 2,
    institution: "Programming Hero",
    program: "Complete Web Development Program",
    year: "2023",
    description: "Full-stack development with React, Next.js, Node.js, MongoDB. Built and deployed production-ready applications."
  },
  {
    id: 3,
    institution: "Phitron",
    program: "CSE Fundamentals",
    year: "2025",
    description: "Advanced DSA (Graphs, Dijkstra, Floyd-Warshall, Dynamic Programming), Algorithms, and Python OOP."
  },
];

export const certifications = [
  {
    id: 1,
    title: "Software Engineer Certificate",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/0e0e8978c659"
  },
  {
    id: 2,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/63049b05fe7a"
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    issuer: "Phitron",
    link: "#"
  },
  {
    id: 4,
    title: "Full Stack Developer in MERN Stack",
    issuer: "IT Training BD",
    link: "#"
  }
];

export const services = [
  {
    id: 1,
    title: "Enterprise CMS & CRM",
    desc: "Architecting scalable content and customer management systems tailored for operational efficiency and secure role-based access.",
  },
  {
    id: 2,
    title: "LMS & E-commerce Platforms",
    desc: "Building production-ready learning and trading ecosystems with optimized payment flows and high-performance backends.",
  },
  {
    id: 3,
    title: "Secure API Architecture",
    desc: "Designing and optimizing RESTful APIs with a focus on security, performance, and reduced query latency.",
  },
  {
    id: 4,
    title: "Cloud Deployment & DevOps",
    desc: "Managing full-cycle deployments on Linux/VPS, Dockerizing applications, and ensuring architectural resilience.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    title: "Senior Technical Architect",
    quote: "Nazmul's approach to API design is exceptionally clean. His ability to modernize legacy systems while maintaining high security standards significantly accelerated our deployment timeline.",
    image: "/assets/images/testimonials/alex.png",
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Product Director at TechFlow",
    quote: "Building a CRM from scratch is no small feat, but Nazmul delivered a scalable, high-performance solution that exceeded our expectations for speed and user experience.",
    image: "/assets/images/testimonials/sarah.png",
  },
  {
    id: 3,
    name: "Thomas Mueller",
    title: "Founder of SUFFAH",
    quote: "A rare engineer who understands the business vision as much as the code. He transformed our community platform into a professional, high-performance ecosystem.",
    image: "/assets/images/testimonials/thomas.png",
  }
];

export const techSkills = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },
  
  // Frontend/Frameworks
  { name: "Next.js", category: "Development" },
  { name: "React", category: "Development" },
  { name: "React Native", category: "Development" },
  { name: "React Query", category: "Development" },
  { name: "React Router", category: "Development" },
  { name: "React Hook Form", category: "Development" },
  { name: "Redux", category: "Development" },
  { name: "Three.js", category: "Development" },
  { name: "Chart.js", category: "Development" },
  
  // UI Libraries
  { name: "TailwindCSS", category: "Development" },
  { name: "MUI", category: "Development" },
  { name: "Semantic UI", category: "Development" },
  { name: "Bootstrap", category: "Development" },
  { name: "DaisyUI", category: "Development" },
  { name: "Code-Igniter", category: "Development" },
  
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Socket.io", category: "Backend" },
  { name: "JWT", category: "Backend" },
  { name: "Nginx", category: "Backend" },
  { name: "Nodemon", category: "Backend" },
  
  // Cloud & Infrastructure
  { name: "AWS", category: "Cloud" },
  { name: "Cloudflare", category: "Cloud" },
  { name: "Firebase", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Netlify", category: "Cloud" },
  
  // Tools & DevOps
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "GitHub Actions", category: "Tools" },
  { name: "GitLab CI", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "ESLint", category: "Tools" },
  { name: "NPM", category: "Tools" },
  { name: "PNPM", category: "Tools" },
  { name: "Yarn", category: "Tools" },
  { name: "Webpack", category: "Tools" },
  { name: "Esbuild", category: "Tools" },
  
  // Database & ORM
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "Supabase", category: "Database" },
  
  // Design & Media
  { name: "Figma", category: "Design" },
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Adobe Premiere", category: "Design" },
  { name: "Adobe Audition", category: "Design" },
  { name: "Canva", category: "Design" },
  
  // Data Science & AI
  { name: "Pandas", category: "Data Science" },
  { name: "NumPy", category: "Data Science" },
  { name: "PyTorch", category: "Data Science" },
];

