import { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Agentsman",
    description:
      "AI-powered multi-agent system, enabling users to design, configure, and execute complex workflows with custom agents and tools",
    image: "/images/projects/agentsMan.png",
    tags: [
      "Vite",
      "Tailwind CSS", 
      "Shadcn UI",
      "Zustand",
      "React Hook Form",
      "Framer Motion",
      "React Query",
    ],
    demo: "https://agentsman.netlify.app/",
    github: "https://github.com/HUSS41N/agentsman-fe",
    category: ["All", "Collab", "Recent"],
  },
  {
    id: 2,
    title: "CanvasHub",
    description: 
      "Real-time collaborative whiteboard application with features like room management, live chat, drawing tools, and user presence tracking. Built with MERN stack and Socket.IO.",
    image: "/images/projects/canvasHub.png",
    tags: ["React", "Socket.IO", "Konva",  "Node.js", "Express", "MongoDB"],
    demo: "https://canvas-hub.netlify.app/",
    github: "https://github.com/gauravmehra13/Canvas-Hub",
    category: ["All", "Recent"],
  },
  {
    id: 3,
    title: "Tether Talk",
    description:
      "Real-time chat app with end-to-end encryption, message sync, and notifications. Features adaptive UI for secure, efficient cross-device communication.",
    image: "/images/projects/tetherTalk.png",
    tags: ["Vite", "Socket.io", "Node.js", "Express", "MongoDB", "Zustand"],
    demo: "https://tethertalk.netlify.app/",
    github: "https://github.com/gauravmehra13/TetherTalk",
    category: ["All", "MERN", "Recent"],
  },
  {
    id: 4,
    title: "Hotel Booking",
    description:
      "Comprehensive hotel booking platform with location/date search, detailed listings, and booking management.",
    image: "/images/projects/stayEase.png",
    tags: ["Vite", "Tailwind CSS", "Node.js", "MongoDB"],
    demo: "https://stayeasebooking.netlify.app/",
    github: "https://github.com/gauravmehra13/hotelbooking-frontend",
    category: ["All", "MERN", "React", "Full Stack"],
  },
  {
    id: 5,
    title: "BuyNest",
    description:
      "A comprehensive MERN stack e-commerce application, offering a seamless online shopping experience with all necessary features, including order email notifications.",
    image: "/images/projects/buyNest.png",
    tags: ["Vite", "Tailwind CSS", "Context API", "Express", "MongoDB"],
    demo: "https://buy-nest.netlify.app/",
    github: "https://github.com/gauravmehra13/BuyNest", 
    category: ["All", "MERN", "Recent"],
  },
  {
    id: 6,
    title: "Trading Dashboard",
    description:
      "Provides real-time trading data visualization, including price charts, moving averages, and trading signals.",
    image: "/images/projects/tradingDashboard.png",
    tags: ["TypeScript", "Tailwind CSS", "Lightweight Chart", "Vite"],
    demo: "https://binancetrading.netlify.app/",
    github: "https://github.com/gauravmehra13/tradingDashboard",
    category: ["All", "React", "Data Visualization"],
  },
  {
    id: 7,
    title: "Blog",
    description:
      "A MERN stack blog platform showcasing static blog posts with a clean, responsive interface and a share article feature.",
    image: "/images/projects/blogverse.png",
    tags: ["React", "Bootstrap", "MongoDB", "Node.js", "Express"],
    demo: "https://my-blog-verse.netlify.app/",
    github: "https://github.com/gauravmehra13/blog-verse",
    category: ["All", "MERN", "React", "Full Stack"],
  },
  {
    id: 8,
    title: "Taskmaster",
    description:
      "An intuitive project management tool featuring drag-and-drop task organization for enhanced productivity.",
    image: "/images/projects/taskmaster.png",
    tags: ["React", "Bootstrap"],
    demo: "https://taskmaster1000.netlify.app/",
    github: "https://github.com/gauravmehra13/TrelloClone",
    category: ["All", "React"],
  },
  // {
  //   id: 9,
  //   title: "Database Manager",
  //   description:
  //     "A simple and clean database management tool featuring CRUD operations, local storage persistence, and a simulated REST API for user data management.",
  //   image: "/images/projects/dbmanager.png",
  //   tags: ["React", "Bootstrap", "RestAPI"],
  //   demo: "https://mydbmanager.netlify.app/",
  //   github: "https://github.com/gauravmehra13/databaseManager",
  //   category: ["All", "React", "Full Stack"],
  // },
];

export default projects;
