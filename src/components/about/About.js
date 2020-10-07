import React from "react";
import Section from "../section/Section";
import './About.scss'
import cartoonClement from '../../images/cartoon-clement.png'
import Project from "../project/Project"
import CV from '../../CV/CV_GASTON_Clément.pdf'

function About() {
    return (
        <Section id="aboutMe" title="À propos de moi">
            <div className="myselfContainer">
                <img src={cartoonClement} alt="Cartoon"/>
                <div className="chatBox">
                    <p className="description">Étudiant en première année d’école d’ingénieur (BAC +3) et passionné par l’informatique, je cherche à accumuler un maximum de connaissance dans ce domaine. Apprenant sous une méthodologie par problèmes, l’autonomie, la recherche et le sérieux font partie de mon quotidien. Dynamique et n’aillant pas peur du risque, je me suis récemment lancé dans l’aventure de l’auto-entreprenariat. C’est pourquoi je souhaite relever de nouveaux défis dans le but d’apprendre et apporter mes compétences à autrui. </p>
                    <a href={CV} download="CV_GASTON_Clement">Télécharger mon CV</a>
                </div>
            </div>
            <Project />
        </Section>
    )
}

export default About;