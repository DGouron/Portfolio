import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectsData } from '../../data/ProjectsData';

function ProjectsView() {
  return (
    <section id='projects'>
      <h2>Mes projets</h2>
      <div className='projects__list'>
        {ProjectsData.map((project, index) => (
          <ProjectItem
            key={project.projectName + index}
            title={project.projectName}
            description={project.projectDescription}
            thumbnail={project.projectLargeImage}
            details={project.projectDetails}
            link={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsView;
