import React from 'react';

function CallToAction({ text, action }) {
  return (
    <>
      {action === 'mail' ? (
        <a href='mailto:damien.gouron@gmail.com'>
          <button className='button__cta'>{text}</button>
        </a>
      ) : (
        <button className='button__cta'>{text}</button>
      )}
    </>
  );
}

export default CallToAction;
