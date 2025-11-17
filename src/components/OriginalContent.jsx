function OriginalContent() {
  return (
    <div className="original-content">
      {/* About Me Section */}
      {/* <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-card">
            <div className="profile-picture">
              <img 
                src="pics/profile.jpg" 
                alt="Amy Lin" 
                onError={(e) => e.target.parentElement.innerHTML='👨‍💻'}
              />
            </div>
            <div className="profile-details">
              <h3 className="name">Amy Lin</h3>
              <p className="role">Student | Designer & Developer</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon">📧</span>
                  <a href="mailto:wewe44445@gmail.com">wewe44445@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="icon">🔗</span>
                  <a href="https://github.com/shuuuuyu" target="_blank" rel="noopener noreferrer">github.com/shuuuuyu</a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="info-block">
              <h3 className="block-title">Education</h3>
              <div className="education-item">
                <span className="degree">Bachelor of Science</span>
                <span className="institution">National Taiwan Normal University</span>
                <span className="department">Department of Technology Application and Human Resource Development</span>
                <span className="period">2022 - Present</span>
              </div>
            </div>

            <div className="info-block">
              <h3 className="block-title">Skills</h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4 className="category-title">Programming</h4>
                  <div className="skills-list">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">C++</span>
                    <span className="skill-tag">Processing</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-title">Web Development</h4>
                  <div className="skills-list">
                    <span className="skill-tag">HTML/CSS</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-title">Design</h4>
                  <div className="skills-list">
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">UI/UX</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-block">
              <h3 className="block-title">Interests</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-icon">💻</span>
                  <span className="interest-label">Coding</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎨</span>
                  <span className="interest-label">Design</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎮</span>
                  <span className="interest-label">Gaming</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎸</span>
                  <span className="interest-label">Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="about" className="section">
  <h2 className="section-title">About Me</h2>
  
    <div className="about-content-new">
      {/* 左側:個人資訊 */}
      <div className="about-info-card">
        <div className="info-item">
          <span className="info-label">School:</span>
          <span className="info-value">National Taiwan Normal University</span>
        </div>
        <div className="info-item">
          <span className="info-label">City:</span>
          <span className="info-value">Taipei, Taiwan</span>
        </div>
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">sylam1046@gmail.com</span>
        </div>
        <div className="info-item">
          <span className="info-label">Major:</span>
          <span className="info-value">Technology Application and Human Resource Development</span>
        </div>
        
        <h3 className="skills-heading">Skills</h3>
        <div className="skills-list-new">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">C</span>
          <span className="skill-tag">Processing</span>
          <span className="skill-tag">Metal Processing</span>
          <span className="skill-tag">Electronics</span>
        </div>
      </div>
    
    {/* 右側:自我介紹 */}
    <div className="about-text-card">
      <p>I have a strong interest in both technology and design, and I enjoy hands-on experimentation with new things, such as writing small programs or creating interactive works.</p>
      <br />
      <p>This website is primarily a place for me to practice and share my work. In the future, I may also post some small projects, notes, or learning experiences.</p>
    </div>
  </div>
</section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <h2 className="section-title">Portfolio</h2>
        
        <a href="https://github.com/shuuuuyu" target="_blank" rel="noopener noreferrer" className="github-link">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Visit My GitHub
        </a>
        
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src="pics/project-journey.png" alt="Journey-of-Growth" onError={(e) => e.target.parentElement.innerHTML='🎮'} />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">Journey-of-Growth</h3>
              <p className="portfolio-description">A Processing-based educational game that allows users to defeat academic monsters and explore careers through a question-and-answer system for academic preference allocation.</p>
              <a href="https://github.com/jyx0615/Journey-of-Growth" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{marginRight: '10px'}}>GitHub</a>
              <a href="https://demox.tw/idea/detail/?id=1945" target="_blank" rel="noopener noreferrer" className="portfolio-link">Exhibition</a>
              <a href="https://youtu.be/yVHSTGoemms?si=SoAJlJ4lmOdSpGZT" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{marginRight: '10px'}}>Demo Video</a>
              <a href="https://youtu.be/EH2KnQA_Un0?si=DduWo02en8XXHt42" target="_blank" rel="noopener noreferrer" className="portfolio-link">Report</a>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src="pics/project-food-hunter.png" alt="Food Hunter" onError={(e) => e.target.parentElement.innerHTML='🎯'} />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">Food Hunter</h3>
              <p className="portfolio-description">A Scratch-based game where players catch falling food items to obtain daily nutritional requirements, combining entertainment with health education.</p>
              <a href="https://demox.tw/idea/detail/?id=1794" target="_blank" rel="noopener noreferrer" className="portfolio-link">Exhibition</a>
              <a href="https://youtu.be/ZiB0wO_nFQQ?si=zHZqvw3GpwV3Jpxb" target="_blank" rel="noopener noreferrer" className="portfolio-link">Demo Video</a>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src="pics/project-irrigation.png" alt="Smart Irrigation System" onError={(e) => e.target.parentElement.innerHTML='🌡️'} />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">Smart Irrigation System</h3>
              <p className="portfolio-description">An Arduino-based electronic circuit that automatically sprays water mist based on temperature readings and sends notifications to mobile devices via Telegram.</p>
              <a href="https://github.com/shuuuuyu/Electronic-and-Electric-Circuits" target="_blank" rel="noopener noreferrer" className="portfolio-link">GitHub</a>
              <a href="https://youtu.be/bj-kWn5fJlQ?si=O-_2KlW30SXza7ZP" target="_blank" rel="noopener noreferrer" className="portfolio-link">Demo Video</a>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src="pics/project-fridge.png" alt="Smart Fridge Manager" onError={(e) => e.target.parentElement.innerHTML='🥘'} />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">Smart Fridge Manager</h3>
              <p className="portfolio-description">A Gradio + Python application that helps manage refrigerator ingredients and suggests daily meal plans based on available food items.</p>
              <a href="https://github.com/shuuuuyu/113-3-DSCP" target="_blank" rel="noopener noreferrer" className="portfolio-link">GitHub</a>
              <a href="https://youtu.be/3NouwoXCoDE?si=CWS7cubMgvoM_Wa-" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{marginRight: '10px'}}>Demo Video</a>
              <a href="https://youtu.be/Mq7CRGaWaIg?si=VN47v1rcn33hHxjL" target="_blank" rel="noopener noreferrer" className="portfolio-link">Report</a>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src="pics/project-fortune.png" alt="AI Fortune Teller" onError={(e) => e.target.parentElement.innerHTML='🔮'} />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">AI Fortune Teller</h3>
              <p className="portfolio-description">A Gradio + Python application that integrates Groq API for fortune telling, featuring Chain of Thought (CoT) and RAG (Retrieval-Augmented Generation) technologies.</p>
              <a href="https://github.com/shuuuuyu/113-2-Generative-AI/blob/main/%E6%9C%9F%E6%9C%AB%E5%B0%88%E6%A1%88_%E9%8F%A1%E5%A1%94_%E5%A1%94%E7%BE%85%E5%8D%A0%E5%8D%9C%E4%BA%92%E5%8B%95%E7%A8%8B%E5%BC%8F.ipynb" target="_blank" rel="noopener noreferrer" className="portfolio-link">View Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section id="activities" className="section">
        <h2 className="section-title">Extracurricular Activities</h2>
        <div className="activities-gallery">
          <div className="activity-card">
            <div className="activity-image">
              <img src="pics/systex.jpg" alt="Systex Visit" onError={(e) => e.target.parentElement.innerHTML='🏢'} />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Corporate Visit - Systex</h3>
              <p style={{color: 'rgba(30, 41, 59, 0.7)', lineHeight: '1.6'}}>Participated in enterprise visits to gain insights into industry practices and career opportunities in technology companies.</p>
            </div>
          </div>
          
          <div className="activity-card">
            <div className="activity-image">
              <img src="pics/toyota.jpg" alt="Toyota Factory" onError={(e) => e.target.parentElement.innerHTML='🚗'} />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Toyota Factory Tour</h3>
              <p style={{color: 'rgba(30, 41, 59, 0.7)', lineHeight: '1.6'}}>Educational visit to Toyota manufacturing facilities to understand industrial engineering and production processes.</p>
            </div>
          </div>
          
          <div className="activity-card">
            <div className="activity-image">
              <img src="pics/design-works.jpg" alt="Design Works" onError={(e) => e.target.parentElement.innerHTML='📐'} />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">Basic Design Works</h3>
              <p style={{color: 'rgba(30, 41, 59, 0.7)', lineHeight: '1.6'}}>Created various fundamental design projects, exploring principles of design thinking and visual communication.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OriginalContent
