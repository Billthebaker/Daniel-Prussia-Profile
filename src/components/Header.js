import React, { useState, useEffect } from "react";
import mypicture from "../images/THATSME.jpg"

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: mypicture,
      alt: "Image 1",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Image+2",
      alt: "Image 2",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Image+3",
      alt: "Image 3",
    },
  ];
  // this is a slideshow function 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex(
  //       (currentImageIndex) => (currentImageIndex + 1) % images.length
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="header">
      <h2 className="description">WELCOME TO THE JUNGLE WE GOT FUN AND GAMES</h2>
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className="slideshow-image"
      />
    </div>
  );
}

export default Header;