import React from 'react';
import './App.css';
import CallToAction from './components/buttons/CallToAction';
import ContactView from './components/contact/ContactView';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Portrait from './components/portrait/Portrait';
import ProjectsView from './components/projects/ProjectsView';
import SkillsView from './components/skills/SkillsView';
import ThreeCanvas from './components/three/ThreeCanvas';

function App() {
  return (
    <div className='body__wrapper'>
      <div className='body__content--head'>
        <Header />
        {window.screen && window.screen.width > 768 ? (
          <ThreeCanvas />
        ) : (
          <div className='mobile__herobanner--container'>
            <Portrait />
            <CallToAction text={'Me contacter'} action={'mail'} />
          </div>
        )}
      </div>
      <main>
        <ProjectsView />
        <SkillsView />
        <ContactView />
      </main>
      <Footer />
    </div>
  );
}
export default App;
