import React from 'react';

import Tool from './Tool';
import { data } from './ToolData';

const ToolList = ({ themeClassName }) => {
    const renderTools = data.map(tool => {
        return (
            <div className='column' key={tool.id}>
                <Tool tool={tool.name} imageSource={tool.imageSource} />
            </div>
        )
    });

    return (
        <div className={`ui raised padded container ${themeClassName('', 'inverted')} segment`}>
            <div className='ui vertically divided grid'>
                <div className='one column row'>
                    <div className='column'>
                        <h3>Tools I use:</h3>
                    </div>
                </div>
                <div className='five column centered row'>
                    {renderTools}
                </div>
            </div>
        </div>
    );
}

export default ToolList;