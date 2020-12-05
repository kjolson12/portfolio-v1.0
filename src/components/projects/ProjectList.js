import React from 'react';

import Project from './Project';
import { data } from './ProjectData';

const ProjectList = ({ themeClassName }) => {
    const renderProjects = data.map(project => {
        return (
            <Project 
                screenshot={project.screenshot}
                title={project.title}
                description={project.description}
                skills={project.skills} 
                key={project.title}
                themeClassName={themeClassName}
                link={project.link}
            />
        )
    });

    return (
        <div className='ui container'>
            <h1 className={`ui horizontal divider ${themeClassName('', 'inverted')} header`}>
                <i className='folder open icon'/>
                Projects
            </h1>
            <div className='ui hidden divider'></div>
            <div className='ui three special cards'>
                {renderProjects}
            </div>
        </div>
    );
};

export default ProjectList;