import React from 'react'
import './App.css'
import ContactView from './components/contact/ContactView'
import Header from './components/header/Header'
import ProjectsView from './components/projects/ProjectsView'
import SkillsView from './components/skills/SkillsView'
import ThreeCanvas from './components/three/ThreeCanvas'

function App() {

  return (
    <div className='body__wrapper'>
      <div className='body__content--head'>
        <Header />
        {window.screen && window.screen.width > 768 ? <ThreeCanvas /> : <h3>Pas de 3D sur mobile</h3>}
      </div>
      <main>
        <ProjectsView />
        <SkillsView />
        <ContactView />
      </main>
    </div>
  )
}
export default App
