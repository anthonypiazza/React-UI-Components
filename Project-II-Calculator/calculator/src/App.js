import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className='app-container'>
      <CalculatorDisplay />
      <div className='calc-container'>
        <div className='input-row'>
          <div className='number-row'>
            <ActionButton buttonStyle='action-button' text='clear' />
          </div>
          <div className='number-row'>
            <NumberButton buttonStyle='number' text='7'/>
            <NumberButton buttonStyle='number' text='8'/>
            <NumberButton buttonStyle='number' text='9'/>
          </div>
          <div className='number-row'>
            <NumberButton buttonStyle='number' text='4'/>
            <NumberButton buttonStyle='number' text='5'/>
            <NumberButton buttonStyle='number' text='6'/>
          </div>
          <div className='number-row'>
            <NumberButton buttonStyle='number' text='1'/>
            <NumberButton buttonStyle='number' text='2'/>
            <NumberButton buttonStyle='number' text='3'/>
          </div>
          <div className='number-row'>
            <ActionButton text='0' />
          </div>
        </div>
        <div className='input-row'>
            <NumberButton buttonStyle='operator' text='÷'/>
            <NumberButton buttonStyle='operator' text='x' />
            <NumberButton buttonStyle='operator' text='−'/>
            <NumberButton buttonStyle='operator' text='+'/>
            <NumberButton buttonStyle='operator' text='='/>
        </div>  
      </div>
    </div>
  );
};

export default App;
