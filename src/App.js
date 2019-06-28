import React from 'react';
import './styles.css'
import './layout/Calculator'
import Calculator from './layout/Calculator';
import Keypad from './layout/Keypad'




const app = () => (
  <div>
    <h1 className="header">React Calculator App</h1>
    <div className="app">
      <Calculator />
    </div>
  </div>
);


export default app;