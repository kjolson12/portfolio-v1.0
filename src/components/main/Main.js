import React from 'react';
import './Main.css';
import bitmoji from '../../images/hello_bitmoji.png';

const Main = ({ toggleTheme, themeClassName}) => {
    return (
        <div>
            <div className='ui padded grid'>
                <div className='violet row'>
                    <div className='left aligned eight wide column'>
                        <i
                            className={themeClassName('huge toggle off icon', 'huge toggle on icon')}
                            onClick={toggleTheme}
                        />
                        <i className={themeClassName('big sun icon', 'big moon icon')} />
                    </div>
                    <div className='right aligned eight wide column'>
                        <a
                            href='https://docs.google.com/document/d/1hwFZ9iQUeT3MRrY428W56Vt7OMOV-UB-SPG-A_fPzOw/export?format=pdf'
                            className={themeClassName('ui huge button', 'ui inverted huge button')}
                        >
                            Resumé
                        </a>
                    </div>
                </div>
            </div>
            <div className='ui center aligned container'>
                <h1 className={themeClassName('light', 'dark')}>
                    Kyle Olson
                </h1>
                <p className={`${themeClassName('light', 'dark')} brief`}>
                    Front End Engineer
                </p>
                <div className='ui small image' id='bitmoji'>
                    <img alt='hello bitmoji' src={bitmoji}/>
                </div>
            </div>
            <div className='ui center aligned container'>
                <img alt='tech setup' id='computerImage' src='https://mattfarley.ca/img/hero.svg'/>
            </div>
        </div>
    );
}

export default Main;