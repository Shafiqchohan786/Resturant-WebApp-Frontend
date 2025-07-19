import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Dishes from './components/Dishes';
import Team from './components/Team';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Dishes />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
}
