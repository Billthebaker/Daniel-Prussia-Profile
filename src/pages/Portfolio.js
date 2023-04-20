import React from 'react';
import './index.css';
import image1 from '../images/THATSME.jpg';
import image2 from '../images/cartoonify.png';
import image3 from '../images/lightbulbs.jpg';
import image4 from '../images/sky.jpg';
import image5 from '../images/spacebackground.jpg';
import image6 from '../images/forest.jpg';

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
          <div className="box" style={{ backgroundImage: img1Url }}>
            <p>Box 1</p>
          </div>
          <div className="box" style={{ backgroundImage: img2Url }}>
            <p>Box 2</p>
          </div>
          <div className="box" style={{ backgroundImage: img3Url }}>
            <p>Box 3</p>
          </div>
          <div className="box" style={{ backgroundImage: img4Url }}>
            <p>Box 4</p>
          </div>
          <div className="box" style={{ backgroundImage: img5Url }}>
            <p>Box 5</p>
          </div>
          <div className="box" style={{ backgroundImage: img6Url }}>
            <p>Box 6</p>
          </div>
        </div>
      </section>
      <footer className="Portfolio-footer">
        <p>Thanks for visiting my portfolio!</p>
      </footer>
    </div>
  );
}

export default Portfolio;
