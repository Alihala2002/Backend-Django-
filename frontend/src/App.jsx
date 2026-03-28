import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaYoutube, FaGithub, FaLinkedin, FaGraduationCap, 
  FaMapMarkerAlt, FaCode, FaDatabase, 
  FaLayerGroup, FaBolt, FaBriefcase, FaEnvelope, FaRocket, FaTools, FaLaptopCode 
} from 'react-icons/fa';
// استيراد صورة الخلفية الجديدة وصورة الملف الشخصي
import heroBgImg from './assets/laptop_code_bg.jpg'; 
import profileImg from './assets/ali_profile.jpeg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [typedText, setTypedText] = useState('');
  // قائمة النصوص الديناميكية التي طلبتها
  const roles = [
    "Full stack developer",
    "Django Specialist",
    "Content creator"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // تأثير الكتابة الديناميكي (Typing Effect Logic)
  useEffect(() => {
    if (!data) return; // انتظر حتى جلب البيانات الأساسية

    const currentRole = roles[roleIndex];
    let typingSpeed = 100; // سرعة الكتابة الافتراضية

    if (isDeleting) {
      typingSpeed /= 2; // سرعة الحذف أسرع
    }

    // إذا انتهى النص وكان ينتظر
    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // انتظر ثانيتين قبل البدء بالحذف
      setIsDeleting(true);
    } 
    // إذا انتهى الحذف وبدأ النص التالي
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // الانتقال للنص التالي ودورة لا نهائية
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer); // تنظيف المؤقت
  }, [charIndex, isDeleting, roleIndex, roles, data]);

  // جلب البيانات الأساسية وتحديث عنوان التبويب
  useEffect(() => {
    document.title = "Ali Halayqa | Full Stack Developer";
    
    axios.get('https://backend-django-ovk4.vercel.app/api/profile/')
      .then(res => setData(res.data))
      .catch(err => console.log("Connection Error", err));
  }, []);

  if (!data) return <div className="loading">Initializing Ali's Environment...</div>;

  return (
    <div className="portfolio-container">
      
      {/* 1. HERO SECTION - مع الخلفية الجديدة وتأثير الكتابة */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="hero"
        style={{ backgroundImage: `url(${heroBgImg})` }} // فرض الخلفية الجديدة
      >
        <div className="hero-overlay"></div> {/* طبقة داكنة فوق الصورة للوضوح */}
        
        <div className="hero-content-wrapper">
          <div className="profile-wrapper">
            <img src={profileImg} alt="Ali Halayqa" className="profile-pic" />
          </div>
          
          <div className="hero-typography">
            <h1 className="name">Hi, I'm Ali Halayqa</h1>
            
            {/* هنا يظهر تأثير الكتابة الديناميكي */}
            <div className="hero-typed-container">
              <span className="typed-text">{typedText}</span>
              <span className="typed-cursor">|</span> {/* مؤشر الكتابة الوامض */}
            </div>

            <div className="hero-description">
              <div className="info-line">
                <FaBriefcase className="info-icon" /> SOFTWARE ENGINEER
              </div>
              <div className="info-line">
                <FaMapMarkerAlt className="info-icon" /> Palestine - Hebron
              </div>
            </div>

            <p className="subtitle">
              Specialized in Django, REST APIs, and scalable backend architectures.
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
        </div>
      </motion.section>

      {/* 2. PROFESSIONAL SUMMARY - تم الإبقاء عليه كما هو */}
      <section className="section-container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="glass-card summary-card">
          <p>
            Full Stack Developer with deep expertise in <strong>Django</strong> and <strong>Django REST Framework (DRF)</strong>. 
            Focused on building robust backend architectures and integrating them with modern <strong>React</strong> frontends. 
            Experienced in optimizing <strong>PostgreSQL</strong> databases and deploying scalable web applications using <strong>Docker</strong>.
          </p>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS - تم الإبقاء عليه كما هو */}
      <section className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="glass-card project-card compact-card">
            <div className="project-icon"><FaRocket /></div>
            <h3>Flowless Backend</h3>
            <p>Built scalable REST API using Django & DRF with optimized PostgreSQL queries for smart water management.</p>
          </div>
          
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

          <div className="glass-card project-card compact-card">
            <div className="project-icon"><FaCode /></div>
            <h3>Full-Stack Portfolio</h3>
            <p>A dynamic application built with React and Django, featuring a custom API for content management and professional UI design.</p>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ARSENAL - تم الإبقاء عليه كما هو */}
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

      {/* 5. EDUCATION - تم الإبقاء عليه كما هو */}
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
