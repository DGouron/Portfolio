import React from 'react';
import CallToAction from '../buttons/CallToAction';
import SocialBar from '../social/SocialBar';

function Header() {
  return (
    <header>
      <p lang='fr'>Damien Gouron</p>
      <h1 lang='fr'>Développeur front-end</h1>
      <h2 lang='fr'>
        « Spécialisé en javascript, je t'aide à concevoir ton application web ou ton site vitrine interactif. React, Nextjs, Typescript, j'utilise la techno qui fit avec ton projet.»
      </h2>
      {window.screen && window.screen.width > 768 ? (
        <>
          <CallToAction text={'Prendre contact'} action={'mail'} />
          <SocialBar />
        </>
      ) : null}
    </header>
  );
}

export default Header;
