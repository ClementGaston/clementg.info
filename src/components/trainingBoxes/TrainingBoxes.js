import React from 'react';
import './TrainingBoxes.scss'
import trainingIcon from '../../images/trainingIcon.png'

function TrainingBoxes({content}) {
  return (
      <article className="boxes">
          <div className="training">
            {content && content.map(e => 
                <div className="container">
                    <div className="icon">
                        <img className="trainingIcon" src={trainingIcon} alt="trainingIcon"/>
                        <div className="timeLine" />
                    </div>
                    <div className="training">
                        <p className="date">{e.date}</p>
                        <p className="title">{e.title}</p>
                        <p className="description">{e.description}</p>
                    </div>
                </div>
            )}
          </div>
      </article>
  );
}

export default TrainingBoxes;
