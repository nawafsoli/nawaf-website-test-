import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Download, Github, Linkedin, Twitter, Mail, Code, Cloud, Database, Server } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const roles = ['DevOps Engineer', 'Cloud Architect', 'Full Stack Developer', 'AWS Specialist'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'AWS', level: 90, icon: <Cloud style={{ width: '20px', height: '20px' }} /> },
    { name: 'React', level: 85, icon: <Code style={{ width: '20px', height: '20px' }} /> },
    { name: 'Python', level: 88, icon: <Server style={{ width: '20px', height: '20px' }} /> },
    { name: 'Node.js', level: 82, icon: <Database style={{ width: '20px', height: '20px' }} /> },
    { name: 'Docker', level: 85, icon: <Server style={{ width: '20px', height: '20px' }} /> },
    { name: 'JavaScript', level: 90, icon: <Code style={{ width: '20px', height: '20px' }} /> }
  ];

  const projects = [
    {
      title: 'WellWise',
      description: 'A Cloud Web Application that helps users calculate daily protein and calorie needs and order customized meals. Built with modern cloud architecture for scalability.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'AWS', 'Node.js', 'DynamoDB'],
      link: 'https://wellwise.info/',
      github: 'https://github.com/nawafsoli/well-wise-2'
    },
    {
      title: 'Hiragana101',
      description: 'Interactive game for learning Japanese Hiragana with AI-powered drawing recognition. Features real-time feedback and progress tracking.',
      image: '/api/placeholder/400/250',
      tech: ['TensorFlow.js', 'Canvas API', 'Machine Learning'],
      link: '#',
      github: '#'
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    // In a real implementation, this would scroll to the section
  };

  const styles = {
    container: {
      minHeight: '100vh',
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#111827'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    logoAccent: {
      color: '#f97316'
    },
    navDesktop: {
      display: 'flex',
      gap: '32px'
    },
    navDesktopHidden: {
      display: 'none'
    },
    navButton: {
      fontSize: '14px',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      color: 'inherit'
    },
    navButtonActive: {
      color: '#f97316'
    },
    navControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    themeButton: {
      padding: '8px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease',
      backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'
    },
    mobileMenuButton: {
      display: 'block',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      color: 'inherit'
    },
    mobileMenuButtonHidden: {
      display: 'none'
    },
    mobileMenu: {
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      borderTop: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
    },
    mobileMenuHidden: {
      display: 'none'
    },
    mobileMenuContent: {
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    mobileMenuButton: {
      display: 'block',
      padding: '8px 12px',
      fontSize: '16px',
      fontWeight: '500',
      width: '100%',
      textAlign: 'left',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      color: 'inherit'
    },
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      padding: '80px 16px 0'
    },
    heroContainer: {
      maxWidth: '1024px',
      margin: '0 auto',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
      '@media (min-width: 768px)': {
        fontSize: '72px'
      }
    },
    heroAccent: {
      color: '#f97316'
    },
    heroRoleContainer: {
      fontSize: '24px',
      marginBottom: '24px',
      height: '48px',
      '@media (min-width: 768px)': {
        fontSize: '30px'
      }
    },
    heroRolePrefix: {
      color: isDarkMode ? '#9ca3af' : '#6b7280'
    },
    heroRole: {
      color: '#f97316',
      fontWeight: '600',
      transition: 'all 0.5s ease'
    },
    heroDescription: {
      fontSize: '18px',
      marginBottom: '32px',
      maxWidth: '768px',
      margin: '0 auto 32px',
      lineHeight: '1.7',
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      '@media (min-width: 768px)': {
        fontSize: '20px'
      }
    },
    heroActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '48px',
      '@media (min-width: 640px)': {
        flexDirection: 'row'
      }
    },
    ctaButton: {
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '12px 32px',
      borderRadius: '9999px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      transform: 'scale(1)',
      cursor: 'pointer',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px'
    },
    socialLinks: {
      display: 'flex',
      gap: '16px'
    },
    socialLink: {
      padding: '12px',
      borderRadius: '9999px',
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollIndicator: {
      animation: 'bounce 2s infinite'
    },
    scrollIndicatorContainer: {
      width: '24px',
      height: '40px',
      border: `2px solid ${isDarkMode ? '#9ca3af' : '#6b7280'}`,
      borderRadius: '9999px',
      display: 'flex',
      justifyContent: 'center'
    },
    scrollIndicatorDot: {
      width: '4px',
      height: '12px',
      backgroundColor: isDarkMode ? '#9ca3af' : '#6b7280',
      borderRadius: '9999px',
      marginTop: '8px',
      animation: 'pulse 2s infinite'
    },
    section: {
      padding: '80px 16px',
      backgroundColor: isDarkMode ? '#374151' : '#f9fafb'
    },
    sectionDefault: {
      padding: '80px 16px'
    },
    sectionContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px',
      '@media (min-width: 768px)': {
        fontSize: '48px'
      }
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      maxWidth: '512px',
      margin: '0 auto'
    },
    aboutGrid: {
      display: 'grid',
      gap: '48px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    aboutTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px'
    },
    aboutText: {
      fontSize: '18px',
      lineHeight: '1.7',
      marginBottom: '16px',
      color: isDarkMode ? '#d1d5db' : '#6b7280'
    },
    skillsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    skillItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    skillHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    skillName: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: '500'
    },
    skillPercentage: {
      fontSize: '14px',
      color: '#f97316'
    },
    skillBar: {
      width: '100%',
      backgroundColor: isDarkMode ? '#4b5563' : '#e5e7eb',
      borderRadius: '9999px',
      height: '8px'
    },
    skillBarFill: {
      height: '8px',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #f97316, #ea580c)',
      transition: 'all 1s ease-out'
    },
    projectsGrid: {
      display: 'grid',
      gap: '32px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    projectCard: {
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      cursor: 'pointer'
    },
    projectImage: {
      aspectRatio: '16/9',
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(147, 51, 234, 0.2))',
      position: 'relative',
      overflow: 'hidden'
    },
    projectImageOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)'
    },
    projectImageContent: {
      position: 'absolute',
      bottom: '16px',
      left: '16px',
      right: '16px'
    },
    projectTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px'
    },
    projectContent: {
      padding: '24px'
    },
    projectDescription: {
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      marginBottom: '16px',
      lineHeight: '1.6'
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px'
    },
    techTag: {
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '14px',
      backgroundColor: isDarkMode ? '#4b5563' : '#f3f4f6',
      color: isDarkMode ? '#d1d5db' : '#4b5563'
    },
    projectLinks: {
      display: 'flex',
      gap: '12px'
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#f97316',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    contactCard: {
      borderRadius: '16px',
      padding: '32px',
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    contactRow: {
      display: 'grid',
      gap: '24px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '8px',
      border: `1px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`,
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
      color: isDarkMode ? '#ffffff' : '#111827',
      fontSize: '16px'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '8px',
      border: `1px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`,
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
      color: isDarkMode ? '#ffffff' : '#111827',
      resize: 'none',
      fontSize: '16px',
      minHeight: '150px'
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#f97316',
      color: '#ffffff',
      padding: '12px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '16px'
    },
    footer: {
      padding: '32px 16px',
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      borderTop: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
    },
    footerContent: {
      maxWidth: '1152px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        gap: 0
      }
    },
    footerText: {
      textAlign: 'center',
      color: isDarkMode ? '#9ca3af' : '#6b7280',
      '@media (min-width: 768px)': {
        textAlign: 'left'
      }
    },
    footerSocial: {
      display: 'flex',
      gap: '16px'
    },
    footerSocialLink: {
      padding: '8px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  // Add CSS keyframes for animations
  const keyframes = `
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0,0,0);
      }
      40%, 43% {
        transform: translate3d(0,-30px,0);
      }
      70% {
        transform: translate3d(0,-15px,0);
      }
      90% {
        transform: translate3d(0,-4px,0);
      }
    }
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.navContent}>
            <div style={styles.logo}>
              Nawaf<span style={styles.logoAccent}>S3</span>
            </div>
            
            {/* Desktop Navigation */}
            <div style={{...styles.navDesktop, display: window.innerWidth >= 768 ? 'flex' : 'none'}}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    ...styles.navButton,
                    ...(activeSection === item.toLowerCase() ? styles.navButtonActive : {})
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#f97316' : 'inherit'}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div style={styles.navControls}>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={styles.themeButton}
                onMouseEnter={(e) => e.target.style.backgroundColor = isDarkMode ? '#4b5563' : '#e5e7eb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'}
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
              
              <button
                onClick={toggleMenu}
                style={{...styles.mobileMenuButton, display: window.innerWidth >= 768 ? 'none' : 'block'}}
              >
                {isMenuOpen ? <X style={{width: '24px', height: '24px'}} /> : <Menu style={{width: '24px', height: '24px'}} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuContent}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  ...styles.mobileMenuButton,
                  ...(activeSection === item.toLowerCase() ? styles.navButtonActive : {})
                }}
                onMouseEnter={(e) => e.target.style.color = '#f97316'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#f97316' : 'inherit'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={{marginBottom: '32px'}}>
            <h1 style={styles.heroTitle}>
              Hi, I'm <span style={styles.heroAccent}>Nawaf</span>
            </h1>
            <div style={styles.heroRoleContainer}>
              <span style={styles.heroRolePrefix}>I'm a </span>
              <span style={styles.heroRole}>
                {roles[currentRole]}
              </span>
            </div>
          </div>
          
          <p style={styles.heroDescription}>
            From automating workflows to building scalable cloud infrastructures, 
            I believe DevOps and cloud engineering are the keys to efficiency and innovation, 
            transforming ideas into resilient and high-performing systems.
          </p>

          <div style={styles.heroActions}>
            <button 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ea580c';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f97316';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <Download style={{width: '20px', height: '20px'}} />
              Download CV
            </button>
            <div style={styles.socialLinks}>
              <a 
                href="https://www.linkedin.com/in/nawaf-alsoliae/" 
                style={styles.socialLink}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Linkedin style={{width: '24px', height: '24px'}} />
              </a>
              <a 
                href="https://github.com/nawafsoli" 
                style={styles.socialLink}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Github style={{width: '24px', height: '24px'}} />
              </a>
              <a 
                href="https://x.com/nawafsoliae" 
                style={styles.socialLink}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Twitter style={{width: '24px', height: '24px'}} />
              </a>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div style={styles.scrollIndicator}>
            <div style={styles.scrollIndicatorContainer}>
              <div style={styles.scrollIndicatorDot}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              About <span style={styles.heroAccent}>Me</span>
            </h2>
            <p style={styles.sectionSubtitle}>
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </p>
          </div>

          <div style={styles.aboutGrid}>
            <div>
              <h3 style={styles.aboutTitle}>Get to know <span style={styles.heroAccent}>about me!</span></h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <p style={styles.aboutText}>
                  I am a fresh graduate in Computer Science with a strong passion for <strong>AWS</strong> and cloud technologies. 
                  I love to build and design websites and web applications that solve real-world problems.
                </p>
                <p style={styles.aboutText}>
                  I believe cloud computing is the future, and I'm passionate about learning new technologies and tools 
                  that help create scalable, efficient systems. Check out some of my work in the <strong>Projects</strong> section.
                </p>
                <p style={styles.aboutText}>
                  I'm seeking new opportunities where I can contribute, learn and grow. If you have a good opportunity 
                  that matches my skills and experience, don't hesitate to contact me.
                </p>
              </div>
            </div>

            <div>
              <h3 style={styles.aboutTitle}>My <span style={styles.heroAccent}>Skills</span></h3>
              <div style={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <div key={skill.name} style={styles.skillItem}>
                    <div style={styles.skillHeader}>
                      <div style={styles.skillName}>
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                      <span style={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div style={styles.skillBar}>
                      <div 
                        style={{
                          ...styles.skillBarFill,
                          width: `${skill.level}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.sectionDefault}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Latest <span style={styles.heroAccent}>Projects</span>
            </h2>
          </div>

          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                style={styles.projectCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 32px 64px -12px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
              >
                <div style={styles.projectImage}>
                  <div style={styles.projectImageOverlay}></div>
                  <div style={styles.projectImageContent}>
                    <h3 style={styles.projectTitle}>{project.title}</h3>
                  </div>
                </div>
                
                <div style={styles.projectContent}>
                  <p style={styles.projectDescription}>
                    {project.description}
                  </p>
                  
                  <div style={styles.projectTech}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div style={styles.projectLinks}>
                    <a 
                      href={project.link} 
                      style={styles.projectLink}
                      onMouseEnter={(e) => e.target.style.color = '#ea580c'}
                      onMouseLeave={(e) => e.target.style.color = '#f97316'}
                    >
                      <ExternalLink style={{width: '16px', height: '16px'}} />
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      style={styles.projectLink}
                      onMouseEnter={(e) => e.target.style.color = '#ea580c'}
                      onMouseLeave={(e) => e.target.style.color = '#f97316'}
                    >
                      <Github style={{width: '16px', height: '16px'}} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <div style={{...styles.sectionContainer, maxWidth: '1024px'}}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              Contact <span style={styles.heroAccent}>Me</span>
            </h2>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.contactForm}>
              <div style={styles.contactRow}>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#f97316'}
                    onBlur={(e) => e.target.style.borderColor = isDarkMode ? '#4b5563' : '#d1d5db'}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#f97316'}
                    onBlur={(e) => e.target.style.borderColor = isDarkMode ? '#4b5563' : '#d1d5db'}
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  style={styles.textarea}
                  onFocus={(e) => e.target.style.borderColor = '#f97316'}
                  onBlur={(e) => e.target.style.borderColor = isDarkMode ? '#4b5563' : '#d1d5db'}
                />
              </div>
              
              <button
                onClick={() => {
                  // Handle contact form submission
                  alert('Thank you for your message! I will get back to you soon.');
                }}
                style={styles.submitButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ea580c';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <Mail style={{width: '20px', height: '20px'}} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerText}>
            <p>
              © 2025 Nawaf Alsoliae | All Rights Reserved
            </p>
          </div>
          
          <div style={styles.footerSocial}>
            <a 
              href="https://www.linkedin.com/in/nawaf-alsoliae/" 
              style={styles.footerSocialLink}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Linkedin style={{width: '20px', height: '20px'}} />
            </a>
            <a 
              href="https://github.com/nawafsoli" 
              style={styles.footerSocialLink}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Github style={{width: '20px', height: '20px'}} />
            </a>
            <a 
              href="https://x.com/nawafsoliae" 
              style={styles.footerSocialLink}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Twitter style={{width: '20px', height: '20px'}} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;