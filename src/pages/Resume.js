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
        <h2>Daniel Prussia Resume</h2>
      </header>
      <h3 className='h3 fancy-font' style={{color:'white'  }}> Proficiencies</h3>
      <section className="resume-content fancy-font">
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <button className='download-btn fancy-font'> 
        <a href={require('./assets/DanielPrussiaResume.pdf')} style={{textDecoration:'none'}}  download>
  Download Resume
</a>

</button>
      </section>
      <footer className="resume-footer">
        <p></p>
      </footer>
    </div>
  );
}

export default Resume;
