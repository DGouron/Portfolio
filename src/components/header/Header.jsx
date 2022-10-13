import React from 'react';
import CallToAction from '../buttons/CallToAction';

function Header() {
  return (
    <header>
      <p lang='fr'>Damien Gouron</p>
      <h1 lang='fr'>Développeur fullstack</h1>
      <h2 lang='fr'>
        « Après plusieurs années dans le développement de jeux vidéos, spécialisé dans les jeux de
        survie et de tir multijoueurs, je me suis tourné vers le développement web. Trentenaire
        autodidacte, j'ai pour passion de faire d’une vision projet une véritable application, avec
        comme valeur ajoutée l’interaction avec les utilisateurs.»
      </h2>
      {window.screen && window.screen.width > 768 ? (
        <CallToAction text={'Me contacter'} action={'mail'} />
      ) : null}
    </header>
  );
}

export default Header;
