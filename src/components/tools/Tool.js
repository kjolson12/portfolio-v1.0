import React from 'react';

const Tool = ({ imageSource, tool }) => {
    return (
        <div className='ui grid'>
            <img alt='logo' src={imageSource} className='ui centered tiny image' />
            <div className='centered row'>
                <h3>{tool}</h3>
            </div>
        </div>
    );
}

export default Tool;