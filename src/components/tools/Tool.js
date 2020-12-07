import React from 'react';

const Tool = ({ imageSource, tool }) => {
    return (
        <div className='ui grid'>
            <div className='centered row'>
                <img
                    alt='logo'
                    src={imageSource}
                    className='ui centered tiny image'
                    style={{ maxHeight: '80px', maxWidth: '80px' }}
                />
            </div>
            <div className='centered row'>
                <h3>{tool}</h3>
            </div>
        </div>
    );
}

export default Tool;