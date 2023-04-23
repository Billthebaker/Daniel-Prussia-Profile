import React from 'react';
import './index.css';
import image1 from '../images/phones.jpg';
import image2 from '../images/gmailicon.png';
import image3 from '../images/linkedin_logo.jpg';



function Portfolio() {
  const img1Url = `url(${image1})`;
  const img2Url = `url(${image2})`;
  const img3Url = `url(${image3})`;
  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <h2>Contact Me!</h2>
      </header>
      <section className="Portfolio-content">
        <div className="box-container">
          <a href="tel:234-926-6637" className="box" style={{ backgroundImage: img1Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{ }}>Phone Number</p>
            <p className='box-text fancy-font' style={{ }}>234-926-6637</p>
            <p className='box-subtext fancy-font' style={{ textDecoration:'none' }}></p>
          </a>
          
          <a href="mailto:danielprussia1@gmail.com" className="box" style={{ backgroundImage: img2Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{  }}>E-mail Address</p>
            <p className='box-text fancy-font' style={{  }}>danielprussia1@gmail.com</p>
            <p className='box-subtext fancy-font' style={{  }}></p>
          </a>
          <a href="https://www.linkedin.com/in/daniel-prussia-545b44268/ " className="box" style={{ backgroundImage: img3Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{ }}>Linkedin</p>
            <a href='https://www.google.com' className='repo-links fancy-font'> </a>
            <p className='box-subtext fancy-font' style={{textDecoration:'none', color:'white'   }}>Click Here!</p>
          </a>          
        </div>
      </section>
      <footer className="Portfolio-footer">
        <p></p>
      </footer>
    </div>
  );
}

export default Portfolio;
