import React from 'react';
import SocialLink from './SocialLink';

function SocialBar() {
  return (
    <article className='socialbar__wrapper'>
      <ul className='socialbar__list'>
        <SocialLink
          link={'https://twitter.com/_Papa_Kilo_'}
          title={'Twitter'}
          iconCode={'fa-twitter'}
          brandColor={'#1da1f2'}
        />
        <SocialLink
          link={'https://www.linkedin.com/in/damien-gouron/'}
          title={'Linkedin'}
          iconCode={'fa-linkedin-in'}
          brandColor={'#1877f2'}
        />
        <SocialLink
          link={'https://github.com/DGouron'}
          title={'Github'}
          iconCode={'fa-github'}
          brandColor={'#fff'}
        />
      </ul>
    </article>
  );
}

export default SocialBar;
