import React from "react";
import './Project.scss'
import internship from '../../images/internship.png'
import contract from '../../images/contract.png'
import school from '../../images/school.png'
import website from '../../images/website.png'

function Project() {
    return (
        <div className="pastProjects">
            <div className="project">
                <img src={internship} alt="internship"/>
                <div className="description">
                    <h3>4 mois</h3>
                    <p>De stage</p>
                </div>
            </div>
            <div className="project">
                <img src={contract} alt="contract"/>
                <div className="description">
                    <h3>1 mois</h3>
                    <p>De CDD</p>
                </div>
            </div>
            <div className="project">
                <img src={school} alt="school"/>
                <div className="description">
                    <h3>11</h3>
                    <p>Projets scolaire</p>
                </div>
            </div>
            <div className="project">
                <img src={website} alt="website"/>
                <div className="description">
                    <h3>0</h3>
                    <p>Site client</p>
                </div>
            </div>
        </div>
    )
}

export default Project;