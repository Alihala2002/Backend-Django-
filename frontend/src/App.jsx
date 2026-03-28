import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaYoutube, FaGithub, FaLinkedin, FaGraduationCap, 
  FaMapMarkerAlt, FaCode, FaDatabase, 
  FaLayerGroup, FaBolt, FaBriefcase, FaEnvelope, FaRocket, FaTools, FaLaptopCode 
} from 'react-icons/fa';
import profileImg from './assets/ali_profile.jpeg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = "Ali Halayqa | Full Stack Developer";
    axios.get('https://backend-django-ovk4.vercel.app/api/profile/')
      .then(res => setData(res.data))
      .catch(err => console.log("Connection Error", err));
  }, []);

  if (!data) return <div className="loading">Initializing Ali's Environment...</div>;

  return (
    <div className="portfolio-container">
      
      {}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="hero"
      >
        <div className="profile-wrapper">
          <img src={profileImg} alt="Ali Halayqa" className="profile-pic" />
        </div>
        <div className="hero-typography">
          <h1 className="name">Ali Halayqa</h1>
          
          <div className="hero-info-container">
            <div className="info-line">
              <FaLaptopCode className="info-icon" /> FULL STACK DEVELOPER
            </div>
            <div className="info-line">
              <FaMapMarkerAlt className="info-icon" /> Palestine - Hebron
            </div>
          </div>

          <p className="subtitle">
            Building scalable backend systems & seamless user experiences with Django & React.
          </p>
        </div>
        
        <div className="hero-email-container">
          <FaEnvelope className="email-icon-large" />
          <a href="mailto:ali2002hala@gmail.com" className="email-link">
            ali2002hala@gmail.com
          </a>
        </div>

        <div className="social-links-container">
          <a href={data.links.github} target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
          <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href={data.links.youtube} target="_blank" rel="noreferrer" className="social-icon"><FaYoutube /></a>
        </div>
      </motion.section>

      {/* 2. PROFESSIONAL SUMMARY - تم تحسين الخط ووضوحه */}
      <section className="section-container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="glass-card summary-card">
          <p className="summary-text">
            Full Stack Developer with deep expertise in <strong>Django</strong> and <strong>Django REST Framework (DRF)</strong>. 
            Focused on building robust backend architectures and integrating them with modern <strong>React</strong> frontends. 
            Experienced in optimizing <strong>PostgreSQL</strong> databases and deploying scalable web applications using <strong>Docker</strong>.
          </p>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS - تم دمج مشروع اليوتيوب */}
      <section className="section-container projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="glass-card project-card">
            <div className="project-icon"><FaRocket /></div>
            <h3>Flowless Backend</h3>
            <p>Built scalable REST API using Django & DRF with optimized PostgreSQL queries for smart water management.</p>
          </div>
          
          {/* Project 2 (YouTube) */}
          <div className="glass-card project-card yt-project">
            <div className="project-icon"><FaYoutube /></div>
            <h3>YouTube Content Strategy</h3>
            <div className="yt-description">
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

          {/* Project 3 */}
          <div className="glass-card project-card">
            <div className="project-icon"><FaCode /></div>
            <h3>Full-Stack Portfolio</h3>
            <p>A dynamic application built with React and Django, featuring a custom API for content management and professional UI design.</p>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ARSENAL */}
      <section className="section-container">
        <h2 className="section-title"><FaBolt className="title-icon"/> Technical Arsenal</h2>
        <div className="skills-grid">
          <div className="glass-card skill-blockBackend">
            <h3><FaCode /> Backend</h3>
            <p>Django, DRF, Python</p>
          </div>
          <div className="glass-card skill-blockFrontend">
            <h3><FaLaptopCode /> Frontend</h3>
            <p>React, HTML5, CSS3, JS</p>
          </div>
          <div className="glass-card skill-blockDatabases">
            <h3><FaDatabase /> Databases</h3>
            <p>PostgreSQL, SQLite</p>
          </div>
          <div className="glass-card skill-blockTools">
            <h3><FaTools /> Tools</h3>
            <p>Docker, Git, Vercel</p>
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
        <p>© 2026 Ali Halayqa | Full Stack Developer • Contact: ali2002hala@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
