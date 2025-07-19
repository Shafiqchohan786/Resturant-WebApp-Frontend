import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <h3>Zaika Restaurant</h3>
      <p>Email: contact@zaika.com | Phone: 0343-5493880 | Location: Lahore, Pakistan</p>
      <p className="copyright">&copy; {new Date().getFullYear()} Zaika Restaurant. All rights reserved.</p>
    </footer>
  );
}
