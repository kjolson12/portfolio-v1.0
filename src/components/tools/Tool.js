import React from 'react';

const Tool = ({ imageSource, tool }) => {
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
                <h3>{tool}</h3>
            </div>
        </div>
    );
}

export default Tool;