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
        <p className="header-text">Hello there! My name is Daniel Prussia and I am a recent graduate from Ohio State University, where I earned a certificate in Full Stack Web Development. I am a 30-year-old web developer based in Ohio, and I am thrilled to share a bit about myself with you.</p>
        <p className="header-text">With eight months of professional experience as a full stack developer, I have had the opportunity to lead development projects for the past five months. During this time, I have honed my skills in both front-end and back-end technologies, constantly seeking out new challenges and opportunities for growth. My meticulous attention to detail drives me to create high-quality applications and websites that provide a seamless user experience.</p>
        <p className="header-text">In addition to my passion for coding, I have a strong interest in history, archaeology, and science. Ancient history and astronomy, in particular, captivate me as they offer deep insights into our past and the mysteries of the universe. I am also an avid gamer, with nearly 20 years of experience in PC gaming, and I aspire to create my own video game one day.</p>
        <p className="header-text">With my education, professional experience, and dedication to web development, I am committed to helping clients achieve their goals through innovative and effective digital solutions. I am always open to new opportunities to collaborate and make a meaningful impact in the field of web development.</p>
        <p className="header-text">Thank you for taking the time to get to know me! I look forward to connecting with you and discussing how I can contribute to your web development needs!</p>
      </div>
    </div>
  );
}

export default Header;
