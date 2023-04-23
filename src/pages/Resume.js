import React from 'react';
import './index.css';

function Resume() {
  // List of developer's proficiencies
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    // Add more proficiencies as needed
  ];

  return (
    <div className="contactMe">
      <header className="resume-header">
        <h2>Resume</h2>
      </header>
      <section className="resume-content">
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <a href={require('./assets/DanielPrussiaResume.pdf')} download>
  Download Resume
</a>


      </section>
      <footer className="resume-footer">
        <p></p>
      </footer>
    </div>
  );
}

export default Resume;
