import React from 'react';
import Background from '../background/Background'
import { networks } from './Networks'
import ClementCartoon from '../../images/cartoon-clement.png'
import './HomePage.scss'
import DisplayLinks from '../displayLinks/DisplayLinks';

function HomePage() {
  return (
    <section id="homePage">
        <Background />

        <div className="description">
          <img className="profilePicture" src={ClementCartoon} alt="Cartoon Profile"/>
          <h1 className="name">Clément GASTON</h1>
          <DisplayLinks links={networks}/>
          <button>Contactez-moi</button>
        </div>

        <a href="#aboutMe" className="mouseContainer">
          <span>Scroll Down</span>
          <span className="mouse">
            <span className="wheel"/>
          </span>
        </a>
    </section>
  );
}

export default HomePage;
