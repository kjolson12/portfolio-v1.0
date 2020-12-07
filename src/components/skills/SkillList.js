import React from 'react';

import Skill from './Skill';
import { data } from './SkillData';

const SkillList = ({ themeClassName }) => {
    const renderSkills = data.map(skill => {
        return  (
            <div className='column' key={skill.name}>
                <Skill skill={skill.name} imageSource={skill.imageSource} />
            </div>
        )
    });

    return (
        <div className={`ui raised padded container ${themeClassName('', 'inverted')} segment`}>
            <div className='ui vertically divided grid'>
                <div className='one column row'>
                    <div className='column'>
                        <h3>Skills I have:</h3>
                    </div>
                </div>
                <div className='doubling four column centered row'>
                    {renderSkills}
                </div>
            </div>
        </div>
    );
}

export default SkillList;