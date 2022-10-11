import React from 'react';

function hardDSkillItem({ skillName, skillIcon, skillColor }) {
  return (
    <article>
      <h2 className='hardskill__item--title'>
        <img src={skillIcon} alt={skillName} className='hardskill__item--icon' /> {skillName}
      </h2>
    </article>
  );
}

export default hardDSkillItem;
