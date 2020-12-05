import React from 'react';

const Project = ({ screenshot, title, description, skills, themeClassName, link }) => {
    return (
        <div
            className='ui raised card'
            style={{ backgroundColor: themeClassName('', '#282828'), boxShadow: themeClassName('', 'none') }}
        >
            <a className='image' href={link} target='_blank' rel='noopener noreferrer' >
                <img src={screenshot} alt='Project Screenshot'/>
            </a>
            <div className='content'>
                <a
                    className='header'
                    href={link}
                    target='_blank'
                    style={{ color: themeClassName('', 'white') }}
                    rel='noopener noreferrer'
                >
                    {title}
                </a>
                <div className='description' style={{ color: themeClassName('', 'white') }}>{description}</div>
            </div>
            <div className='extra content'>
                <div className='meta' style={{ color: themeClassName('', 'white') }}>{skills}</div>
            </div>
        </div>
    );
};

export default Project;