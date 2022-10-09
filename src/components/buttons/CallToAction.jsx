import React from 'react';

function CallToAction({ text, action, additionnalClass }) {
  return (
    <>
      {action === 'mail' ? (
        <a href='mailto:damien.gouron@gmail.com'>
          <button className={'button__cta ' + additionnalClass}>{text}</button>
        </a>
      ) : (
        <button className={'button__cta ' + additionnalClass}>{text}</button>
      )}
    </>
  );
}

export default CallToAction;
