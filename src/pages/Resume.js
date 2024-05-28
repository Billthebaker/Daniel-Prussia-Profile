import React from 'react';
import './index.css';

function Resume() {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'OOP',
    'MVC',
    'Node.js',
    'Express',
    'MongoDB',
    'MySql',
    'Third Party Api',
    'ORM'
    // Add more proficiencies as needed
  ];

  
    return (
      <div className="resume">
        <header className="resume-header">
          <h1>Daniel Prussia</h1>
          <h2>Resume</h2>
        </header>
  
        <section className="resume-section">
          <h3 className="section-title">Proficiencies</h3>
          <ul className="proficiency-list">
            {proficiencies.map((proficiency, index) => (
              <li key={index} className="proficiency-item">{proficiency}</li>
            ))}
          </ul>
        </section>
  
        <section className="resume-section">
          <button className="download-btn">
            <a href={require('./assets/DanielPrussiaResume.pdf')} download>
              Download Resume
            </a>
          </button>
        </section>
  
        <footer className="resume-footer">
          <p>© 2024 Daniel Prussia. All rights reserved.</p>
        </footer>
      </div>
    );
  };

  
  export default Resume;
