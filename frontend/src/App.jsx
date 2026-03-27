import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaYoutube, FaGithub, FaLinkedin, FaGraduationCap, 
  FaMapMarkerAlt, FaCalendarAlt, FaCode, FaDatabase, 
  FaLayerGroup, FaBolt, FaBriefcase, FaEnvelope, FaExternalLinkAlt, FaRocket
} from 'react-icons/fa';
import profileImg from './assets/ali_profile.jpeg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // التأكد من جلب البيانات من الرابط الصحيح المنشور على Vercel
    axios.get('https://backend-django-ovk4.vercel.app/api/profile/')
      .then(res => setData(res.data))
      .catch(err => console.log("API Connection Error", err));
  }, []);

  if (!data) return <div className="loading">Initializing Ali's Environment...</div>;

  return (
    <div className="portfolio-container">
      
      {/* 1. HERO SECTION (Updated with CTA Buttons) */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="hero"
      >
        <div className="profile-wrapper">
          <img src={profileImg} alt="Ali Halayqa" className="profile-pic" />
        </div>
        <h1 className="name">{data.name}</h1>
        <p className="hero-tagline">I build scalable backend systems & APIs using Django.</p>
        
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="mailto:ali2002hala@gmail.com" className="btn btn-outline">Contact Me</a>
        </div>

        <div className="social-links">
          <a href={data.links.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={data.links.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={data.links.youtube} target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
      </motion.section>

      {/* 2. PROFESSIONAL SUMMARY (Refined) */}
      <section className="section-container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="glass-card summary-card">
          <p>
            Backend Engineer specializing in <strong>Django & DRF</strong>, focused on building scalable, 
            high-performance APIs. Passionate about clean architecture, system optimization, 
            and delivering production-ready backend solutions.
          </p>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION (New & Critical) */}
      <section className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="glass-card experience-card">
          <div className="exp-header">
            <h3>Backend Engineer Trainee</h3>
            <span className="exp-date">2024</span>
          </div>
          <p className="exp-company">Flowless | Ramallah</p>
          <ul className="exp-list">
            <li>Developed REST APIs using Django for water management systems.</li>
            <li>Built robust authentication systems and user role management.</li>
            <li>Optimized database queries and PostgreSQL performance.</li>
          </ul>
        </div>
      </section>

      {/* 4. PROJECTS SECTION (The "Star" of the Show) */}
      <section id="projects" className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="glass-card project-card">
            <div className="project-icon"><FaRocket /></div>
            <h3>Flowless Backend</h3>
            <p>Built scalable REST API using Django & DRF with optimized PostgreSQL queries.</p>
            <div className="project-links">
              <a href="#"><FaGithub /> Code</a>
              <a href="#"><FaExternalLinkAlt /> Demo</a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="glass-card project-card">
            <div className="project-icon"><FaCode /></div>
            <h3>Portfolio API</h3>
            <p>Created a dynamic API to manage portfolio content and integrated with React.</p>
            <div className="project-links">
              <a href="#"><FaGithub /> Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SKILLS SECTION (Organized) */}
      <section className="section-container">
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4><FaCode /> Backend</h4>
            <p>Django, DRF, Python</p>
          </div>
          <div className="skill-category">
            <h4><FaDatabase /> Databases</h4>
            <p>PostgreSQL, SQLite</p>
          </div>
          <div className="skill-category">
            <h4><FaLayerGroup /> Concepts</h4>
            <p>REST APIs, OOP, SOLID</p>
          </div>
        </div>
      </section>

      {/* 6. EDUCATION */}
      <section className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="glass-card education-card">
          <FaGraduationCap className="edu-icon" />
          <div className="edu-info">
            <h3>Computer Systems Engineering</h3>
            <p>Birzeit University | 2020 - 2025</p>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section className="section-container contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <p>Let's build something amazing together.</p>
          <a href="mailto:ali2002hala@gmail.com" className="contact-btn">
            <FaEnvelope /> Send Message
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;
