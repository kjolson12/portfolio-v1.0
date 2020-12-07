import React from 'react';

const Skill = ({ imageSource, skill }) => {
    return (
        <div className='ui grid'>
            <img
                alt='logo'
                src={imageSource}
                className='ui centered tiny fluid image'
                style={{ height: 'auto' }}
            />
            <div className='centered row'>
                <h3>{skill}</h3>
            </div>
        </div>
    );
}

export default Skill;