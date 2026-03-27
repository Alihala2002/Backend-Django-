import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
// تم إضافة FaYoutube و FaTools هنا
import { 
  FaYoutube, FaGithub, FaLinkedin, FaGraduationCap, 
  FaMapMarkerAlt, FaCalendarAlt, FaCode, FaDatabase, 
  FaLayerGroup, FaBolt, FaBriefcase, FaEnvelope, FaRocket, FaTools 
} from 'react-icons/fa';
import profileImg from './assets/ali_profile.jpeg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://backend-django-ovk4.vercel.app/api/profile/')
      .then(res => setData(res.data))
      .catch(err => console.log("Check if Django is running!", err));
  }, []);

  if (!data) return <div className="loading">Initializing Ali's Environment...</div>;

  return (
    <div className="portfolio-container">
      {/* 1. Hero Section - تم تعديله لحذف الأزرار وإعادة الإيميل */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="hero"
      >
        <div className="profile-wrapper">
          <img src={profileImg} alt="Ali Halayqa" className="profile-pic" />
        </div>
        <div className="hero-typography">
          <h1 className="name">{data.name}</h1>
          <div className="hero-info-line">
            <span><FaBriefcase className="info-icon" /> SOFTWARE ENGINEER</span>
            <span><FaMapMarkerAlt className="info-icon" /> HEBRON</span>
          </div>
          <p className="subtitle">Specializing in high-performance Backend Systems & RESTful APIs</p>
          
          {/* تم إرجاع سطر الإيميل هنا */}
          <div className="hero-email-line">
            <FaEnvelope className="info-icon" />
            <a href="mailto:ali2002hala@gmail.com" className="email-link">
              ali2002hala@gmail.com
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href={data.links.github} target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
          <a href={data.links.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
          <a href={data.links.youtube} target="_blank" rel="noreferrer" title="YouTube"><FaYoutube /></a>
        </div>
      </motion.section>

      {/* 2. Professional Summary */}
      <section className="section-container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="glass-card summary-card">
          <p>
            Backend Engineer with deep expertise in **Django** and **Django REST Framework (DRF)**. 
            Focused on building scalable server-side systems, optimizing API performance with **PostgreSQL**, 
            and delivering secure, production-ready full-stack solutions.
          </p>
        </div>
      </section>

      {/* 3. Featured Projects - تم تعديله بالكامل */}
      <section className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 - Flowless (تم حذف الأيقونات) */}
          <div className="glass-card project-card">
            <div className="project-icon"><FaRocket /></div>
            <h3>Flowless Backend</h3>
            <p>Built scalable REST API using Django & DRF with optimized PostgreSQL queries for smart water management.</p>
            {/* تم حذف سطر Code و Demo من هنا */}
          </div>
          
          {/* Project 2 - تم استبدال Portfolio API بـ YouTube Analytics */}
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

      {/* 4. Skills Section - تم تعديل العنوان وإضافة قسم Tools */}
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
            <h3><FaTools /> Tools</h3> {/* قسم جديد للأدوات */}
            <p>Docker, Git</p>
          </div>
          <div className="glass-card skill-block">
            <h3><FaLayerGroup /> Concepts</h3>
            <p>REST APIs, OOP, SOLID</p>
          </div>
        </div>
      </section>

      {/* 5. Education */}
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

      {/* 6. Footer - تم إرجاعه وتعديله ليكون أبسط */}
      <footer className="minimal-footer">
        <p>© 2026 Ali Halayqa | Software Engineer • Contact: ali2002hala@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
