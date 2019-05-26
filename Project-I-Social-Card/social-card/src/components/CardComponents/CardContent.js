import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div>
            <div className='content-title'>
                <h3> Get started with React</h3>
            </div>
            <div className='content-body'>
                <p>React makes it painess to create interactive UIs. 
                   Design simple views for each state in your application</p>
            </div>
            <div className='content-link'>
                <p>reactjs.org</p>
            </div>
        </div>
    );
};

export default CardContent;