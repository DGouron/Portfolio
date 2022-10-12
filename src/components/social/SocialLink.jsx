import React from 'react';

function SocialLink({ link, title, iconCode }) {
  console.log(link, title, iconCode);
  return (
    <li>
      <a href={link} target='_blank' rel='noreferrer'>
        <i className={'fa-brands ' + iconCode}></i>
      </a>
    </li>
  );
}

export default SocialLink;
