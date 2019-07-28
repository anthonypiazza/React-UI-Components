import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <div>
            <button className={`action-button ${props.buttonStyle}`}>{props.text}</button>
        </div>
    )
}

ActionButton.defaultProps = {
    buttonStyle: 'default',
}

export default ActionButton;