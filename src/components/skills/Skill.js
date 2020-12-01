import React from 'react';

const Skill = ({ imageSource, skill }) => {
    return (
        <div className='ui grid'>
            <img alt='logo' src={imageSource} className='ui centered tiny image' />
            <div className='centered row'>
                <h3>{skill}</h3>
            </div>
        </div>
    );
}

export default Skill;