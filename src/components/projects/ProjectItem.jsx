import React from 'react';
import CallToAction from '../buttons/CallToAction';

function ProjectItem({ title, description, thumbnail, details, link }) {
  return (
    <article className='project__item--wrapper'>
      <img
        src={thumbnail}
        alt={'Image de présentation du site web ' + title}
        className='project__item--thumbnail'
      />
      <h2 className='project__item--title'>{title}</h2>
      <h3 className='project__item--description'>{description}</h3>
      <aside className='project__item--details'>
        {details.map((detail, index) => (
          <p key={detail + index}>{detail}</p>
        ))}
      </aside>
      <a
        href={link}
        className='project__item--link'
        title={'Lien vers le site internet ' + title}
        target='_blank'
        rel='noreferrer'
      >
        <CallToAction
          text={'Voir le projet'}
          action={'link'}
          additionnalClass={'button__cta--small'}
        />
      </a>
    </article>
  );
}

export default ProjectItem;
