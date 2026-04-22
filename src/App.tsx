/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Smart Medication Reminder",
    category: "Health Tech",
    description: "A smart application that helps users remember their medicines using timely alerts and notifications.",
    tags: ["Python", "Alerts", "UI"]
  },
  {
    title: "Student Management System",
    category: "Management Tool",
    description: "A robust system designed to store, manage, and organize student records efficiently.",
    tags: ["C++", "Data Structures", "File I/O"]
  },
  {
    title: "Tip Calculator",
    category: "Utility App",
    description: "A simple and intuitive tool that calculates tips easily for users based on bill amounts.",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const skills = [
  { name: "Languages", icon: <Code2 className="w-5 h-5" />, items: ["Python", "C/C++"] },
  { name: "Web Tech", icon: <Palette className="w-5 h-5" />, items: ["HTML", "CSS"] },
  { name: "Core CS", icon: <Terminal className="w-5 h-5" />, items: ["Data Structures"] },
  { name: "Tools", icon: <Cpu className="w-5 h-5" />, items: ["GitHub"] },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-black selection:text-white bg-brand-bg text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-brand-bg/80 backdrop-blur-sm border-b border-brand-border">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          MAHESH<span className="text-black">.</span>
        </motion.div>
        <div className="flex gap-8 items-center">
          {["Work", "About", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-medium uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-20">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-muted uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">
              B.Tech CSE Student | Future Developer
            </span>
            <h1 className="text-[10vw] md:text-[6vw] leading-[0.95] font-display font-bold tracking-tighter mb-12">
              NUKALA <br />
              <span className="text-outline">MAHESH</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-12 items-start md:items-center justify-between"
          >
            <p className="max-w-sm text-brand-muted text-base leading-relaxed font-light">
              Passionate about programming and building real-world applications. I enjoy solving problems and learning new technologies.
            </p>
            <a href="#work" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-black pb-2 hover:opacity-50 transition-all">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-muted"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-40 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">PROJECTS</h2>
            <div className="w-12 h-1 bg-black" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-t border-brand-border pt-12"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold mb-4 block">
                    0{i + 1} / {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                  <p className="text-brand-muted text-base leading-relaxed mb-8 font-light max-w-md">{project.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1 border border-brand-border font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 px-6 md:px-20 border-t border-brand-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold tracking-tighter mb-24 text-center uppercase">Expertise</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-brand-bg p-10 hover:bg-white transition-colors"
              >
                <div className="text-black mb-8 opacity-50">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6">{skill.name}</h3>
                <ul className="space-y-3">
                  {skill.items.map(item => (
                    <li key={item} className="text-brand-muted text-xs font-medium uppercase tracking-wider">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold tracking-tighter mb-10 uppercase">
              About <br />
              <span className="text-brand-muted">Mahesh</span>
            </h2>
            <div className="space-y-8 text-brand-muted text-base font-light leading-relaxed">
              <p>
                I am a B.Tech Computer Science student passionate about programming and building real-world applications. I enjoy solving problems and learning new technologies.
              </p>
              <p>
                My journey in tech is driven by curiosity and a desire to create impactful solutions. Whether it's developing smart reminders or managing data systems, I strive for excellence in every line of code.
              </p>
            </div>
          </motion.div>
          <div className="relative max-w-sm mx-auto md:ml-auto">
            <img 
              src="https://res.cloudinary.com/dkogmdpwu/image/upload/v1776855948/M2_ntzfwb.jpg" 
              alt="Portrait" 
              className="w-full aspect-square object-cover border-brand-border p-2"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-black -z-10" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-20 border-t border-brand-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-16 uppercase">
            Contact
          </h2>
          <div className="space-y-6 mb-20">
            <a href="mailto:mnukala83@gmail.com" className="text-2xl md:text-3xl font-display font-bold hover:opacity-50 transition-opacity block">
              mnukala83@gmail.com
            </a>
            <p className="text-brand-muted uppercase tracking-widest text-sm font-bold">6304117852</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <button className="px-12 py-5 border border-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
              Download Resume
            </button>
            <div className="flex gap-8">
              <a href="https://github.com/nukalamahesh" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-20 border-t border-brand-border text-center bg-white">
        <p className="text-brand-muted text-[10px] uppercase tracking-[0.3em] font-bold">
          © 2024 NUKALA MAHESH — ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
