export const featuredProjects = [
  {
    id: "drop-and-shipping",
    title: "Drop And Shipping",
    description:
      "A scalable e-commerce and logistics platform featuring product management and advanced shipping workflows.",
    stack: "Next.js, Node.js, MongoDB, Tailwind CSS",
    image: "/assets/images/projects/drop-shipping.png",
    url: "https://dropandshipping.com",
    category: "E-commerce & Logistics",
  },
  {
    id: "suffah-institute",
    title: "Suffah Institute of Australia",
    description:
      "A responsive community platform with custom CMS capabilities for event and content management.",
    stack: "React, Express.js, MongoDB, Node.js",
    image: "/assets/images/projects/suffah.png",
    url: "https://suffahaustralia.org.au",
    category: "Community Platform",
  },
  {
    id: "ab-partner-portal",
    title: "AB Partner Portal",
    description:
      "An academic and partner management system developed for Academic Bridge English School, Ireland.",
    stack: "Next.js, Node.js, MongoDB, REST API",
    image: "/assets/images/projects/ab-portal.png",
    url: "https://abpartnerportal.com",
    category: "Management System",
  },
];

export const education = [
  {
    id: 1,
    institution: "BCEDS",
    program: "Basic Computer Application",
    year: "2018",
    description:
      "MS Office tools and essential computer applications; foundational IT literacy and productivity skills.",
  },
  {
    id: 2,
    institution: "Programming Hero",
    program: "Complete Web Development Program",
    year: "2023",
    description:
      "Full-stack development with React, Next.js, Node.js, MongoDB. Built and deployed production-ready applications.",
  },
  {
    id: 3,
    institution: "Phitron",
    program: "CSE Fundamentals",
    year: "2025",
    description:
      "Advanced DSA (Graphs, Dijkstra, Floyd-Warshall, Dynamic Programming), Algorithms, and Python OOP.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Software Engineer Certificate",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/0e0e8978c659",
  },
  {
    id: 2,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/63049b05fe7a",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    issuer: "Phitron",
    link: "#",
  },
  {
    id: 4,
    title: "Full Stack Developer in MERN Stack",
    issuer: "IT Training BD",
    link: "#",
  },
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
    quote:
      "Nazmul's approach to API design is exceptionally clean. His ability to modernize legacy systems while maintaining high security standards significantly accelerated our deployment timeline.",
    image: "/assets/images/testimonials/alex.png",
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Product Director at TechFlow",
    quote:
      "Building a CRM from scratch is no small feat, but Nazmul delivered a scalable, high-performance solution that exceeded our expectations for speed and user experience.",
    image: "/assets/images/testimonials/sarah.png",
  },
  {
    id: 3,
    name: "Thomas Mueller",
    title: "Founder of SUFFAH",
    quote:
      "A rare engineer who understands the business vision as much as the code. He transformed our community platform into a professional, high-performance ecosystem.",
    image: "/assets/images/testimonials/thomas.png",
  },
];

// react-icons
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiThreedotjs,
  SiChartdotjs,
  SiTailwindcss,
  SiMui,
  SiSemanticuireact,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiNginx,
  SiCloudflare,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiPostman,
  SiEslint,
  SiNpm,
  SiPnpm,
  SiYarn,
  SiWebpack,
  SiEsbuild,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiPandas,
  SiNumpy,
  SiPytorch,
} from "react-icons/si";

// lucide-react
import { Code, Palette, Terminal } from "lucide-react";
import { FaAmazon } from "react-icons/fa";

export const techSkills = [
  // Languages
  { name: "TypeScript", category: "Languages", icon: SiTypescript },
  { name: "JavaScript", category: "Languages", icon: SiJavascript },
  { name: "Python", category: "Languages", icon: SiPython },
  { name: "C++", category: "Languages", icon: SiCplusplus },
  { name: "HTML5", category: "Languages", icon: SiHtml5 },
  { name: "CSS3", category: "Languages", icon: SiCss },

  // Frontend/Frameworks
  { name: "Next.js", category: "Development", icon: SiNextdotjs },
  { name: "React", category: "Development", icon: SiReact },
  { name: "React Query", category: "Development", icon: SiReactquery },
  { name: "React Router", category: "Development", icon: SiReactrouter },
  { name: "React Hook Form", category: "Development", icon: Code }, // lucide fallback
  { name: "Redux", category: "Development", icon: SiRedux },
  { name: "Three.js", category: "Development", icon: SiThreedotjs },
  { name: "Chart.js", category: "Development", icon: SiChartdotjs },

  // UI Libraries
  { name: "TailwindCSS", category: "Development", icon: SiTailwindcss },
  { name: "MUI", category: "Development", icon: SiMui },
  { name: "Semantic UI", category: "Development", icon: SiSemanticuireact },
  { name: "DaisyUI", category: "Development", icon: Palette }, // lucide fallback

  // Backend
  { name: "Node.js", category: "Backend", icon: SiNodedotjs },
  { name: "Express.js", category: "Backend", icon: SiExpress },
  { name: "Socket.io", category: "Backend", icon: SiSocketdotio },
  { name: "JWT", category: "Backend", icon: SiJsonwebtokens },
  { name: "Nginx", category: "Backend", icon: SiNginx },
  { name: "Nodemon", category: "Backend", icon: Terminal }, // lucide fallback

  // Cloud & Infrastructure
  { name: "AWS", category: "Cloud", icon: FaAmazon },
  { name: "Cloudflare", category: "Cloud", icon: SiCloudflare },
  { name: "Firebase", category: "Cloud", icon: SiFirebase },
  { name: "Vercel", category: "Cloud", icon: SiVercel },
  { name: "Netlify", category: "Cloud", icon: SiNetlify },

  // Tools & DevOps
  { name: "Git", category: "Tools", icon: SiGit },
  { name: "GitHub", category: "Tools", icon: SiGithub },
  { name: "GitHub Actions", category: "Tools", icon: SiGithubactions },
  { name: "GitLab CI", category: "Tools", icon: SiGitlab },
  { name: "Postman", category: "Tools", icon: SiPostman },
  { name: "ESLint", category: "Tools", icon: SiEslint },
  { name: "NPM", category: "Tools", icon: SiNpm },
  { name: "PNPM", category: "Tools", icon: SiPnpm },
  { name: "Yarn", category: "Tools", icon: SiYarn },
  { name: "Webpack", category: "Tools", icon: SiWebpack },
  { name: "Esbuild", category: "Tools", icon: SiEsbuild },

  // Database & ORM
  { name: "MongoDB", category: "Database", icon: SiMongodb },
  { name: "MySQL", category: "Database", icon: SiMysql },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "Redis", category: "Database", icon: SiRedis },
  { name: "Prisma", category: "Database", icon: SiPrisma },
  { name: "Supabase", category: "Database", icon: SiSupabase },

  // Data Science & AI
  { name: "Pandas", category: "Data Science", icon: SiPandas },
  { name: "NumPy", category: "Data Science", icon: SiNumpy },
  { name: "PyTorch", category: "Data Science", icon: SiPytorch },
];
