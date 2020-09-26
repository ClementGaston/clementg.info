import React from 'react';
import './Background.scss'

function Background() {
  return (
    <div className="waveWrapper">
      <div className="bgTop">
        <div className="waveTop" />
      </div>

      <div className="bgMiddle">
        <div className="waveMiddle" />
      </div>

      <div className="bgBottom">
        <div className="waveBottom" />
      </div>
    </div>
  );
}

export default Background;
