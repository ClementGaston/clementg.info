import React from 'react';
import NavBar from './components/navBar/NavBar';
import HomePage from './components/homepage/HomePage';
import './App.scss';
import Abilities from './components/abilities/Abilities';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  
  return (
    <>
      <header>
        <NavBar />
        <HomePage />
      </header>

      <main>
        <Abilities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
