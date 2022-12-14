import React from 'react';

function hardDSkillItem({ skillName, skillIcon, skillIconAlt }) {
  return (
    <article className='hardskill__item--container'>
      <h2 className='hardskill__item--title'>
        <img src={skillIcon} alt={skillIconAlt} className='hardskill__item--icon' /> {skillName}
      </h2>
    </article>
  );
}

export default hardDSkillItem;
