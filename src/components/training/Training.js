import React from 'react';
import './Training.scss'
import Section from '../section/Section'
import TrainingBoxes from '../trainingBoxes/TrainingBoxes';
import ExperiencesList from './Experiences.json'
import TrainingList from './Training.json'

function Training() {
  return (
    <div className="flexContainer">
      <Section id="experiences" title="Expériences">
        <TrainingBoxes content={ExperiencesList}/>
      </Section>
      <Section id="training" title="Formation">
        <TrainingBoxes content={TrainingList}/>
      </Section>
    </div>
  );
}

export default Training;
