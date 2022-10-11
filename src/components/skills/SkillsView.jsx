import React from 'react';
import CallToAction from '../buttons/CallToAction';
import { SkillsData } from '../../data/skillsData';
import SoftSkillItem from './SoftSkillItem';
import HardSkillItem from './HardSkillItem';

function SkillsView() {
  return (
    <section id='skills'>
      <h2 className='skillsview__section--title'>Softskills</h2>
      <a
        href='/CV_DGouron_2022.pdf'
        className='skillsview__section--link'
        title='Téléchargement du CV'
        target='_blank'
        rel='noreferrer'
      >
        <CallToAction
          text={'Télécharger CV'}
          action={'link'}
          additionnalClass={'button__cta--small'}
          args={{ icon: 'assets/icons/download_icon.svg' }}
        />
      </a>
      <div className='skills__list'>
        {SkillsData[1].map((skill) => (
          <SoftSkillItem skillName={skill.skillName} skillIcon={skill.skillIcon} />
        ))}
      </div>
      <h2 className='skillsview__section--title'>Hardskills</h2>
      <div className='skills__list'>
        {SkillsData[0].map((skill) => (
          <HardSkillItem
            skillName={skill.skillName}
            skillIcon={skill.skillIcon}
            skillColor={skill.skillColor}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsView;
