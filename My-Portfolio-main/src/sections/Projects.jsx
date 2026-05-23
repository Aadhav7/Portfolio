// src/sections/Projects.jsx
import { motion } from "framer-motion";
import { MessageCircleCodeIcon, ScanFace, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Powered 3D Face Recognition Attendance System",
      desc: "Developed an AI-powered system for accurate 3D face recognition and automated attendance tracking for Online Classes.",
      icon: <ScanFace className="text-[#7B2CBF]" />,
      link: "https://scan-it-llm-powered-3-d-face-scan-s.vercel.app/"
    },
    {
      title: "LLM Powered AI ChatBox For SLIATE Academic Syllabus",
      desc: "Developed a language model-based chatbot for providing accurate information about academic syllabi at SLIATE.",
      icon: <MessageCircleCodeIcon className="text-[#7B2CBF]" />,
      link: "https://rook-ai-omega.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="relative bg-white dark:bg-black py-24 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center dark:text-white">
          Academic <span className="text-[#7B2CBF]">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg block overflow-hidden transition-all hover:shadow-2xl cursor-pointer"
            >
              {/* Bouncing Explore Button */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-6 right-6 flex items-center gap-1.5 bg-[#7B2CBF] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-10"
              >
                Explore <ArrowUpRight size={14} strokeWidth={3} />
              </motion.div>

              {/* Icon Container */}
              <div className="mb-4 p-3 bg-[#7B2CBF]/10 w-fit rounded-2xl group-hover:bg-[#7B2CBF]/20 transition-colors">
                {p.icon}
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-[#7B2CBF] transition-colors">
                {p.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.desc}
              </p>

              {/* Subtle hover overlay for better feedback */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7B2CBF]/20 rounded-3xl pointer-events-none transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
