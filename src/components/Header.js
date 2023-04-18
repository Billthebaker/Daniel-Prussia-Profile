import React, { useState, useEffect } from "react";
import mypicture from "../images/THATSME.jpg"
import picture from "../images/cartoonify.png"
import picture2 from '../images/quizzinator.jpg'

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: mypicture,
      alt: "Image 1",
    },
    {
      src: picture,
      alt: "Image 2",
    },
    {
      src: picture2,
      alt: "Image 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <h2 className="description">WELCOME TO THE JUNGLE WE GOT FUN AND GAMES</h2>
      <li className="listText">Welcome to the profile this is where i put the about me stuff and all that
      </li>
      <li className="listText">i put my edumucationz here, and how i am a super fire shadowpriest, challenger season 1 wrath classic</li>
      <li className="listText">maybe something extra? make the page look more filled out, 3 bulletins on the list at least.</li>
      <li className="listText">one more why not right? NOTE: 16 words per line (we'll figure that one out)</li>

      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={currentImageIndex === index ? "myPicture" : "myPicture fade"}
        />
      ))}
      
    </div>
  );
}

export default Header;