import React from 'react';
import aboutImage from '../assets/about.jpg';  // apne image path ke mutabiq adjust karen

export default function About() {
  return (
    <section id="about" className="about-section-container">
      <h2>About Zaika Restaurant</h2> {/* Page main heading, center aligned */}

      <div className="about-section">
        <div className="about-content">
          <p>
            Zaika Restaurant is dedicated to delivering the finest culinary experience with traditional flavors and modern touches. Our chefs use fresh, locally sourced ingredients to create dishes that delight the senses and warm the heart.
          </p>
          <p>
            We pride ourselves on exceptional service and a cozy atmosphere, making Zaika the perfect place for family dinners, romantic evenings, and celebrations.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Delicious food at Zaika" />
        </div>
      </div>
    </section>
  );
}
