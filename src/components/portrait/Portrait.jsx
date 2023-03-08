import React from 'react';
import portraitImage from '../../img/dgouron_portrait.webp';

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
