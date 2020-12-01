import React from 'react';

const Project = ({ screenshot, title, description, skills, themeClassName }) => {
    return (
        <div
            className='ui raised card'
            style={{ backgroundColor: themeClassName('', '#282828'), boxShadow: themeClassName('', 'none') }}
        >
            <a className='image' href='/'>
                <img src={screenshot} alt='Project Screenshot'/>
            </a>
            <div className='content'>
                <a className='header' href='/' style={{ color: themeClassName('', 'white') }}>{title}</a>
                <div className='description' style={{ color: themeClassName('', 'white') }}>{description}</div>
            </div>
            <div className='extra content'>
                <div className='meta' style={{ color: themeClassName('', 'white') }}>{skills}</div>
            </div>
        </div>
    );
};

export default Project;