import React from 'react';
import homeImage from '../assets/home.jpg'; // Use high-res image here (e.g., 1200x800)

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Welcome to Zaika Restaurant</h1>
       
      </div>

      <div className="home-image">
        <img src={homeImage} alt="Delicious food at Zaika" />
      </div>
    </section>
  );
}
