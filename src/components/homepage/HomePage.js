import React from 'react';
import Background from '../background/Background'
import ClementCartoon from '../../images/cartoon-clement.png'
import GithubLogo from '../../images/github.svg'
import BornfordevLogo from '../../images/bornfordev-white.png'
import './HomePage.scss'

function HomePage() {
  return (
      <section id="homePage">
          <Background />
          {/**NavBar */}
          <div className="description">
            <img className="profilePicture" src={ClementCartoon} alt="Cartoon Profile"/>
            <h1 className="name">Clément GASTON</h1>
            <ul className="network">
              <li>
                <a href="https://github.com/ClementGaston">
                    <img id="github" src={GithubLogo} alt="Github Logo"/>
                </a>
              </li>
              <li>
                <a href="https://bornfordev.fr">
                    <img id="bornfordev" src={BornfordevLogo} alt="Bornfordev Logo"/>
                </a>
              </li>
            </ul>
          </div>
          <a href="#about" className="mouseContainer">
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"/>
            </span>
          </a>
      </section>
  );
}

export default HomePage;
