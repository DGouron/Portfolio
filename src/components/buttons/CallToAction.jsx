import React from 'react';

function CallToAction({ text, action, additionnalClass, args }) {
  return (
    <>
      {action === 'mail' ? (
        <a href='mailto:damien.gouron@gmail.com'>
          <button className={'button__cta ' + additionnalClass}>
            {args && args.icon ? (
              <img
                src={args.icon}
                alt={"Icone de l'action " + text}
                className='button__cta--icon'
              />
            ) : null}
            {text}
          </button>
        </a>
      ) : (
        <button className={'button__cta ' + additionnalClass}>
          {args && args.icon ? (
            <img src={args.icon} alt={"Icone de l'action " + text} className='button__cta--icon' />
          ) : null}
          {text}
        </button>
      )}
    </>
  );
}

export default CallToAction;
