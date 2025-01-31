import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory and payment integration",
    image: "/project1.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://project1.com",
    github: "https://github.com/username/project1"
  },
  {
    id: 2,
    title: "3D Product Configurator",
    description: "Interactive 3D product visualization tool with customization options",
    image: "/project2.jpg",
    tech: ["Three.js", "React", "WebGL", "GSAP"],
    link: "https://project2.com",
    github: "https://github.com/username/project2"
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "/project3.jpg",
    tech: ["OpenAI", "Socket.io", "Express", "React"],
    link: "https://project3.com",
    github: "https://github.com/username/project3"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
