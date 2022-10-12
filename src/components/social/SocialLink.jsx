import React from 'react';

function SocialLink({ link, title, iconCode, brandColor }) {
  return (
    <li className='socialbar__element'>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='socialbar__element--link'
        style={{ color: brandColor }}
        aria-label={title}
      >
        <i className={'fa-brands ' + iconCode} aria-hidden='true'></i>
      </a>
    </li>
  );
}

export default SocialLink;
