import React from 'react';
import './index.css';
import image1 from '../images/quizzinator.jpg';
import image2 from '../images/cartoonify.png';
import image3 from '../images/github.jpg';
import image4 from '../images/texteditor.png';
import image5 from '../images/socialmedia.jpg';
import image6 from '../images/lazydater.jpg';

function Portfolio() {
  // Define the image URLs for each box
  const img1Url = `url(${image1})`;
  const img2Url = `url(${image2})`;
  const img3Url = `url(${image3})`;
  const img4Url = `url(${image4})`;
  const img5Url = `url(${image5})`;
  const img6Url = `url(${image6})`;

  return (
    <div className="Portfolio">
      <header className="Portfolio-header">
        <h2>My Portfolio</h2>
      </header>
      <section className="Portfolio-content">
        <div className="box-container">
          <a href="https://quizzinator.herokuapp.com" className="box" style={{ backgroundImage: img1Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{ }}>The Quizzinator</p>
            <a href='https://github.com/danielprussia/Quizzinator' className='repo-links fancy-font'> Repo Link</a>
            <p className='box-subtext fancy-font' style={{  }}></p>
          </a>
          
          <a href="https://cartoonify-my-pic.herokuapp.com/" className="box" style={{ backgroundImage: img2Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{  }}>Cartoonify My Pic</p>
            <a href='https://github.com/danielprussia/cartoonify-my-pic' className='repo-links fancy-font'> Repo Link</a>
            <p className='box-subtext fancy-font' style={{  }}></p>
          </a>
          <a href="https://github.com/danielprussia/Ecommerce-Backend" className="box" style={{ backgroundImage: img3Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{ }}>E-Commerce Backend</p>
            <a href='https://www.google.com' className='repo-links fancy-font'> </a>
            <p className='box-subtext fancy-font' style={{  }}></p>
          </a>
          <a href="https://github.com/danielprussia/Text-Editor" className="box" style={{ backgroundImage: img4Url , textDecoration:'none'}}>
            <p className='box-text fancy-font' style={{  }}>Text Editor</p>
            <a href='https://www.google.com' className='repo-links fancy-font'> </a>
            <p className='box-subtext fancy-font' style={{  }}></p>
          </a>
          <a href="https://github.com/danielprussia/Social-Media-Api" className="box" style={{ backgroundImage: img5Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{  }}>Social Media Api</p>
            <a href='https://www.google.com' className='repo-links fancy-font'> </a>
            <p className='box-subtext fancy-font' style={{  }}></p>
          </a>
          <a href="https://danielprussia.github.io/The-Lazy-Dater/" className="box" style={{ backgroundImage: img6Url, textDecoration:'none' }}>
            <p className='box-text fancy-font' style={{  }}>The Lazy Dater</p>
            <a href='https://github.com/danielprussia/The-Lazy-Dater' className='repo-links fancy-font'>Repo Link</a>
            <p className='box-subtext fancy-font' style={{ }}></p>
          </a>
        </div>
      </section>
      <footer className="Portfolio-footer">
        <p>Thanks for visiting my portfolio!</p>
      </footer>
    </div>
  );
}

export default Portfolio;
