import React from 'react';
import portrait from '../../Portrait_2.jpg';
import ContactButton from '../contact/ContactButton';

function Header() {
  return (
    <header>
      <div>
        <h1>Hi ! Je suis Damien Gouron, développeur fullstack.</h1>
        <h2>
          « Après plusieurs années dans le développement de jeux vidéos, spécialisé dans les jeux de
          survie et de tir multijoueurs, je me suis tourné vers le développement web. Trentenaire
          autodidacte, j'ai pour passion de faire d’une vision projet une véritable application avec
          comme valeur ajoutée l’interaction avec les utilisateurs.»
        </h2>
      </div>
      <div>
        <img src={portrait} alt='Damien Gouron, Developpeur fullstack' />
        <ContactButton />
      </div>
    </header>
  );
}

export default Header;
