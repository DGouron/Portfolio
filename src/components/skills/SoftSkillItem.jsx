import React from 'react';

function SoftSkillItem({ skillName, skillIcon, skillIconAlt }) {
  return (
    <article>
      <h2 className='softskill__item--title'>
        <img src={skillIcon} alt={skillIconAlt} className='softskill__item--icon' /> {skillName}
      </h2>
    </article>
  );
}

export default SoftSkillItem;
