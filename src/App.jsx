import React from 'react';
import './App.css';
import ContactView from './components/contact/ContactView';
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
        {window.screen && window.screen.width > 768 ? <ThreeCanvas /> : <Portrait />}
      </div>
      <main>
        <ProjectsView />
        <SkillsView />
        <ContactView />
      </main>
    </div>
  );
}
export default App;
