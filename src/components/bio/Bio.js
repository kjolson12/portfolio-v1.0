import React from 'react';

import './Bio.css';

const Bio = () => {
    return (
        <div className='ui grid'>
            <div className='violet row' id='bio'>
                <div className='ui center aligned container'>
                    <h2>Hi, I'm Kyle. Nice to meet you.</h2>
                    <div className='ui centered grid'>
                        <p className='ten wide column'>
                            I have always had a passion for tech. However, I did not take
                            programming seriously until two years after graduating college. I 
                            recieved my degree in Biology from the University of Oregon where
                            the only code I wrote was in MATLAB. I only took 1 computer science
                            course but that was all that was needed to spark a continuing interest
                            in web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;