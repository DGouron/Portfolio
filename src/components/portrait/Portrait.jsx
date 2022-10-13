import React from 'react';
import portraitImage from '../../img/Portrait_2.webp';

function Portrait() {
  return (
    <div>
      <img
        src={portraitImage}
        alt="Portrait de Damien Gouron, dev' web."
        className='portrait_image'
      />
    </div>
  );
}

export default Portrait;
