import React from 'react';

function SoftSkillItem({ skillName, skillIcon }) {
  return (
    <article>
      <h2 className='softskill__item--title'>
        <img src={skillIcon} alt={skillName} className='softskill__item--icon' /> {skillName}
      </h2>
    </article>
  );
}

export default SoftSkillItem;
