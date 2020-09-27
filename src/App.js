import React from 'react';
import NavBar from './components/navBar/NavBar';
import HomePage from './components/homepage/HomePage';
import './App.scss';
import Abilities from './components/abilities/Abilities';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <HomePage />
      </header>

      <main>
        <Abilities />
      </main>

      <Footer />
    </>
  );
}

export default App;
