import React from 'react';

import Tool from './Tool';
import { data } from './ToolData';

const ToolList = ({ themeClassName, themeState }) => {
    let filteredData;

    if (themeState === 'Light') {
        filteredData = data.filter(x => x.id !== 1.5);
    } else {
        filteredData = data.filter(x => x.id !== 1);
    }

    const renderTools = filteredData.map(tool => {
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
                <div className='four column centered row'>
                    {renderTools}
                </div>
            </div>
        </div>
    );
}

export default ToolList;