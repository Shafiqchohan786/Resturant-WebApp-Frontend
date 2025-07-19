import React from 'react';
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member5.jpg';
import member3 from '../assets/member6.jpg';

export default function Team() {
  const teamMembers = [
    { name: "Ali Raza", role: "Head Chef", image: member1 },
    { name: "Hira Khan", role: "Pastry Expert", image: member2 },
    { name: "Ahmed Malik", role: "Grill Specialist", image: member3 },
  ];

  return (
    <section id="team" className="team-section">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
