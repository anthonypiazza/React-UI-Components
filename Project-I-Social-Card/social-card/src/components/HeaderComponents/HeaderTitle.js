import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return(
        <div className='header-title'>
            <div className='first-header'>
                <h1>Lambda School</h1>
            </div>
            <div className='second-header'>
                <h2>@LambdaSchool . 26 jan</h2>
            </div>
        </div>
    )
}

export default HeaderTitle;