import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaYoutube, FaGithub, FaLinkedin, FaGraduationCap, 
  FaMapMarkerAlt, FaCalendarAlt, FaCode, FaTools, FaDatabase, 
  FaLayerGroup, FaVideo, FaChartLine, FaPaintBrush, FaComments, FaBolt, FaBriefcase 
} from 'react-icons/fa';
import profileImg from './assets/ali_profile.jpeg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
  // أضف /api/profile/ في نهاية الرابط
  axios.get('https://backend-django-ovk4.vercel.app/api/profile/') 
    .then(res => setData(res.data))
    .catch(err => console.log("Check if Django is running!", err));
}, []);

  if (!data) return <div className="loading">Loading Ali's Portfolio...</div>;

  return (
    <div className="portfolio-container">
      {/* 1. Hero Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hero">
        <div className="profile-wrapper">
          <img src={profileImg} alt="Ali Halayqa" className="profile-pic" />
        </div>
        <div className="hero-typography">
          <h1 className="name">{data.name}</h1>
          
          {/* السطر الجديد: المسمى الوظيفي والموقع الجغرافي باللون الفسفوري */}
          <div className="hero-info-line">
            <span><FaBriefcase className="info-icon" /> BACKEND ENGINEER</span>
            <span><FaMapMarkerAlt className="info-icon" /> HEBRON</span>
          </div>

          <p className="subtitle">{data.title}</p>
        </div>
        <div className="social-links">
          <a href={data.links.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={data.links.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={data.links.youtube} target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
      </motion.section>

      {/* 2. Professional Summary */}
      <section className="summary-section">
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-card">
          <p>
            Backend Engineer with hands-on experience in <strong>Django</strong> and <strong>Django REST Framework (DRF)</strong>, 
            specializing in building scalable RESTful APIs and efficient backend systems.
          </p>
        </div>
      </section>

      {/* 3. Overview Section */}
      <section className="overview-section">
        <h2 className="section-title">Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-value">1</span>
            <span className="stat-label">YEARS OF PROFESSIONAL EXPERIENCE</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">5</span>
            <span className="stat-label">YEARS OF POST-SECONDARY EDUCATION</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">2</span>
            <span className="stat-label">LANGUAGES</span>
          </div>
        </div>
      </section>

      {/* 4. Education Section */}
      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="edu-icon-box"><FaGraduationCap /></div>
          <div className="edu-info">
            <h3>Bachelor of Computer Systems Engineering</h3>
            <h4>Birzeit University</h4>
            <div className="edu-meta">
              <span><FaMapMarkerAlt /> Palestine, Ramallah</span>
              <span><FaCalendarAlt /> 09.2020 - 07.2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills Section */}
      <section className="skills-section">
        <h2 className="section-title"><FaBolt style={{marginRight: '10px'}}/> Skills</h2>
        <div className="skills-container">
          <div className="skills-block">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item"><FaCode className="s-icon"/> <strong>Programming:</strong> Python, Java, C</div>
              <div className="skill-item"><FaLayerGroup className="s-icon"/> <strong>Frameworks:</strong> Django, DRF</div>
              <div className="skill-item"><FaDatabase className="s-icon"/> <strong>Databases:</strong> PostgreSQL, SQLite</div>
            </div>
          </div>
          <div className="skills-block second-block">
            <h3>Other Skills</h3>
            <div className="skills-grid">
              <div className="skill-item"><FaVideo className="s-icon"/> Video Editing (Reels / Shorts)</div>
              <div className="skill-item"><FaChartLine className="s-icon"/> Content Strategy & Growth</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Ali Halayqa | Computer Engineer</p>
      </footer>
    </div>
  );
}

export default App;
