import React from 'react';
import SocialLink from './SocialLink';

function SocialBar() {
  return (
    <ul>
      <SocialLink link={'Twitter'} title={'Twitter'} iconCode={'fa-twitter'} />
      <SocialLink link={'azeaz'} title={'Linkedin'} iconCode={'fa-linkedin-in'} />
      <SocialLink link={'azeaze'} title={'Github'} iconCode={'fa-github'} />
    </ul>
  );
}

export default SocialBar;
