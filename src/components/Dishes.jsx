import React from 'react';
import biryaniImg from '../assets/biryani.jpg';
import naanImg from '../assets/naan.jpg';
import paneerTikkaImg from '../assets/paneer.jpg';
import handiImg from '../assets/chicken.jpg';
import seekhKababImg from '../assets/kabab.jpg';
import gulabJamunImg from '../assets/jaman.jpg';

export default function Dishes() {
  const dishes = [
    { name: "Spicy Chicken Biryani", image: biryaniImg },
    { name: "Butter Garlic Naan", image: naanImg },
    { name: "Paneer Tikka", image: paneerTikkaImg },
    { name: "Chicken Handi", image: handiImg },
    { name: "Seekh Kabab", image: seekhKababImg },
    { name: "Gulab Jamun", image: gulabJamunImg },
  ];

  return (
    <section id="dishes" className="dishes-section">
      <h2 className="section-heading">Popular Dishes</h2>
      <div className="dishes-container">
        {dishes.map(({ name, image }, index) => (
          <div className="dish-card" key={index}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
