import React from 'react';
import Section from '../section/Section';
import './Abilities.scss'

function Abilities() {
  return (
      <Section id={"abilities"} title={"Compétences"}>
          <div className="abilitiesContainer">
          <article id="WEB">
              <h3>WEB</h3>
                <div className="cardContainer">
              <div className="card">
                  <svg children={<circle />} />
                  <p>90<span>%</span></p>
                  <h4>HTML</h4>
              </div>
              <div className="card">
                  <svg children={<circle />} />
                  <p>80<span>%</span></p>
                  <h4>CSS</h4>
              </div>
              <div className="card">
                  <svg children={<circle />} />
                  <p>70<span>%</span></p>
                  <h4>JS</h4>
              </div>
              <div className="card">
                  <svg children={<circle />} />
                  <p>60<span>%</span></p>
                  <h4>NodeJS</h4>
              </div>
              <div className="card">
                  <svg children={<circle />} />
                  <p>90<span>%</span></p>
                  <h4>ReactJS</h4>
              </div>
              </div>
          </article>

            <article id="IMPERATIVE">
                <h3>IMPERATIVE</h3>
                <div className="cardContainer">
                <div className="card">
                    <svg children={<circle />} />
                    <p>80<span>%</span></p>
                    <h4>C</h4>
                </div>
                <div className="card">
                    <svg children={<circle />} />
                    <p>75<span>%</span></p>
                    <h4>Java</h4>
                </div>
                <div className="card">
                    <svg children={<circle />} />
                    <p>85<span>%</span></p>
                    <h4>C#</h4>
                </div>
              </div>
            </article>

          <article id="GESTION">
              <h3>GESTION</h3>
                <div className="cardContainer">
              <div className="card">
                  <svg children={<circle />} />
                  <p>90<span>%</span></p>
                  <h4>Linux</h4>
              </div>
              <div className="card">
                  <svg children={<circle />} />
                  <p>95<span>%</span></p>
                  <h4>SQL</h4>
              </div>
              </div>
          </article>
          </div>
      </Section>
  );
}

export default Abilities;
