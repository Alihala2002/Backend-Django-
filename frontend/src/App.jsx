import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaYoutube, FaGithub, FaLinkedin, FaGraduationCap, 
  FaMapMarkerAlt, FaCode, FaDatabase, 
  FaLayerGroup, FaBolt, FaBriefcase, FaEnvelope, FaRocket, FaTools 
} from 'react-icons/fa';
import profileImg from './assets/ali_profile.jpeg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://backend-django-ovk4.vercel.app/api/profile/')
      .then(res => setData(res.data))
      .catch(err => console.log("Connection Error", err));
  }, []);

  if (!data) return <div className="loading">Initializing Ali's Environment...</div>;

  return (
    <div className="portfolio-container">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="hero"
      >
        <div className="profile-wrapper">
          <img src={profileImg} alt="Ali Halayqa" className="profile-pic" />
        </div>
        <h1 className="name">{data.name}</h1>
        <div className="hero-info-line">
          <span><FaBriefcase className="info-icon" /> SOFTWARE ENGINEER</span>
          <span><FaMapMarkerAlt className="info-icon" /> HEBRON</span>
        </div>
        <p className="subtitle">Specializing in high-performance Backend Systems & RESTful APIs</p>
        
        {/* قسم الإيميل مع أيقونة مكبرة */}
        <div className="hero-email-container">
          <FaEnvelope className="email-icon-large" />
          <a href="mailto:ali2002hala@gmail.com" className="email-link">
            ali2002hala@gmail.com
          </a>
        </div>

        {/* أيقونات السوشيال ميديا مع مسافات مرتبة */}
        <div className="social-links-container">
          <a href={data.links.github} target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
          <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href={data.links.youtube} target="_blank" rel="noreferrer" className="social-icon"><FaYoutube /></a>
        </div>
      </motion.section>

      {/* 2. PROFESSIONAL SUMMARY */}
      <section className="section-container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="glass-card summary-card">
          <p>
            Backend Engineer with deep expertise in <strong>Django</strong> and <strong>Django REST Framework (DRF)</strong>. 
            Focused on building scalable server-side systems, optimizing API performance with <strong>PostgreSQL</strong>, 
            and delivering secure, production-ready full-stack solutions.
          </p>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="glass-card project-card">
            <div className="project-icon"><FaRocket /></div>
            <h3>Flowless Backend</h3>
            <p>Built scalable REST API using Django & DRF with optimized PostgreSQL queries for smart water management.</p>
          </div>
          
          <div className="glass-card project-card">
            <div className="project-icon"><FaYoutube /></div>
            <h3>YouTube Content Strategy</h3>
            <div className="project-yt-description">
              <p>Developed and grew a YouTube channel reaching over 85,000 subscribers.</p>
              <ul>
                <li>Created engaging comedy and reaction-based videos using advanced editing techniques.</li>
                <li>Applied transformative editing to ensure originality and added creative value to sourced content.</li>
                <li>Designed storytelling-driven content to increase audience retention and engagement.</li>
                <li>Managed content strategy, publishing schedule, and audience interaction.</li>
                <li>Analyzed video performance to optimize reach and improve future content.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SKILLS */}
      <section className="section-container">
        <h2 className="section-title"><FaBolt className="title-icon"/> Technical skills</h2>
        <div className="skills-grid">
          <div className="glass-card skill-block">
            <h3><FaCode /> Backend</h3>
            <p>Django, DRF, Python</p>
          </div>
          <div className="glass-card skill-block">
            <h3><FaDatabase /> Databases</h3>
            <p>PostgreSQL, SQLite</p>
          </div>
          <div className="glass-card skill-block">
            <h3><FaTools /> Tools</h3>
            <p>Docker, Git</p>
          </div>
          <div className="glass-card skill-block">
            <h3><FaLayerGroup /> Concepts</h3>
            <p>REST APIs, OOP, SOLID</p>
          </div>
        </div>
      </section>

      {/* 5. EDUCATION */}
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

      <footer className="minimal-footer">
        <p>© 2026 Ali Halayqa | Computer Engineer • Contact: ali2002hala@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
