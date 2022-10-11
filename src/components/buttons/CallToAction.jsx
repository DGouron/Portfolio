import React from 'react';

function CallToAction({ text, action, additionnalClass, args }) {
  return (
    <>
      {action === 'mail' ? (
        <a href='#contact'>
          <button className={'button__cta ' + additionnalClass}>
            {text}
            {args && args.icon ? (
              <img
                src={args.icon}
                alt={"Icone de l'action " + text}
                className='button__cta--icon'
              />
            ) : null}
          </button>
        </a>
      ) : (
        <button className={'button__cta ' + additionnalClass}>
          {text}
          {args && args.icon ? (
            <img src={args.icon} alt={"Icone de l'action " + text} className='button__cta--icon' />
          ) : null}
        </button>
      )}
    </>
  );
}

export default CallToAction;
