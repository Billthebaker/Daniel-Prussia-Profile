import React from "react";
import "../index.css"; // Import a CSS file to apply custom styles
import thatsMeImage from "../images/THATSME.jpg"; // Import the image file

function Header() {
  return (
    <div className="header">
      {/* Add the image to the left side */}
      <img className="header-image" src={thatsMeImage} alt="That's Me!" />

      <div className="header-content">
        <h2 className="description">Daniel Prussia - About Me!</h2>
        <p className="header-text"> Hello there! My name is Daniel Prussia and I am a recent graduate from Ohio State University, where I earned a certificate in Full Stack Web Development. I am a 29-year-old web developer based in Ohio, and I am thrilled to share a bit about myself with you.</p>
        <p className="header-text">With a keen eye for detail and a newfound understanding of front-end and back-end technologies, I am always eager to take on new challenges and expand my skillset. I have a meticulous attention to detail which drives me to constantly seek out new challenges and opportunities for skill growth.</p>
        <p className="header-text">Aside from coding, I have a strong interest in history, archaeology and science. I find ancient history and astronomy particularly fascinating, as they offer insights into our past and the mysteries of the universe. I am also a Huge gamer, i have been playing pc games for almost 20 years, and i hope one day to create a video game of my very own.

        With my education, skills, and dedication to web development, I am committed to creating high-quality applications and websites that deliver a seamless user experience and help clients achieve their goals. I am always looking for new opportunities to collaborate and make a meaningful impact in the world of web development. </p>
        <p className="header-text">Thank you for taking the time to get to know me! I look forward to connecting with you and discussing how I can contribute to your web development needs!</p>
      </div>
    </div>
  );
}

export default Header;
