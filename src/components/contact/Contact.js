import React from 'react';
import Section from '../section/Section';
import './Contact.scss'

function Contact() {
  return (
    <Section id={"contact"} title={"Contact"}>
        <form>
            <div className="boxContainer">
              <input type="text" placeholder="Nom"></input>
              <input type="email" placeholder="Adresse email"></input>
            </div>
            <input type="text" placeholder="Sujet"></input>
            <input type="textarea" placeholder="Message"></input>
            <button type="submit">Envoyer</button>
        </form>
    </Section>
  );
}

export default Contact;
