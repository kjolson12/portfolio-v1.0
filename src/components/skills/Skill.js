import React from 'react';

const Skill = ({ imageSource, skill }) => {
    return (
        <div className='ui grid'>
            <div className='centered row'>
                <img
                    alt='logo'
                    src={imageSource}
                    className='ui centered tiny image'
                    //semantic ui image size on mobile bug fix
                    style={{ height: '80px !important' }}
                />
            </div>
            <div className='centered row'>
                <h3>{skill}</h3>
            </div>
        </div>
    );
}

export default Skill;