import React from 'react';

const Contact = () => {
    return (
        <div className='ui padded grid'>
            <div className='violet row'>
                <div className='ui center aligned container'>
                    <div className='ui hidden divider'></div>
                    <h2 className='ui inverted icon header'>
                        <i className='laptop icon'></i>
                        <div className='content'>
                            How to get in touch? You have options!
                        </div>
                    </h2>
                    <div className='ui hidden divider'></div>
                    <div className='ui center aligned grid'>
                        <div className='row'>
                            <div className='one wide column'>
                                <button className='huge circular inverted ui icon button'>
                                    <i className='github icon' />
                                </button>
                            </div>
                            <div className='one wide column'>
                                <button className='huge circular inverted ui icon button'>
                                    <i className='linkedin icon' />
                                </button>
                            </div>
                            <div className='one wide column'>
                                <button className='huge circular inverted ui icon button'>
                                    <i className='twitter icon' />
                                </button>
                            </div>
                            <div className='one wide column'>
                                <button className='huge circular inverted ui icon button'>
                                    <i className='google icon' />
                                </button>
                            </div>
                            <div className='one wide column'>
                                <button className='huge circular inverted ui icon button'>
                                    <i className='phone icon' />
                                </button>
                            </div>
                        </div>
                        <div className='ui hidden divider'></div>
                        <div className='row'>
                            <p>This web page is powered by React</p>
                            <i className='react icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;