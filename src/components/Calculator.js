import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    let newData = calculate(calc, buttonName);
    if (buttonName === '=') {
      newData = { ...newData, operation: null };
    }
    setCalc(newData);
  };
  return (
    <div className="outer-container">
      <div className="header-calc">
        {calc.total}
        {calc.operation}
        {calc.next}
      </div>
      <div className="button-container">
        <div className="first-line">
          <Button onClick={() => handleClick('AC')} className="btn" label="AC" />
          <Button onClick={() => handleClick('+/-')} className="btn" label="+/-" />
          <Button onClick={() => handleClick('%')} className="btn" label="%" />
          <Button onClick={() => handleClick('÷')} className="orange" label="÷" />
        </div>
        <div className="first-line">
          <Button onClick={() => handleClick('7')} className="btn" label="7" />
          <Button onClick={() => handleClick('8')} className="btn" label="8" />
          <Button onClick={() => handleClick('9')} className="btn" label="9" />
          <Button onClick={() => handleClick('*')} className="orange" label="*" />
        </div>
        <div className="first-line">
          <Button onClick={() => handleClick('4')} className="btn" label="4" />
          <Button onClick={() => handleClick('5')} className="btn" label="5" />
          <Button onClick={() => handleClick('6')} className="btn" label="6" />
          <Button onClick={() => handleClick('-')} className="orange" label="-" />
        </div>
        <div className="first-line">
          <Button onClick={() => handleClick('1')} className="btn" label="1" />
          <Button onClick={() => handleClick('2')} className="btn" label="2" />
          <Button onClick={() => handleClick('3')} className="btn" label="3" />
          <Button onClick={() => handleClick('+')} className="orange" label="+" />
        </div>
        <div className="first-line button-zero">
          <Button onClick={() => handleClick('0')} className="zero-btn" label="0" />
          <Button onClick={() => handleClick('.')} className="btn" label="." />
          <Button onClick={() => handleClick('=')} className="orange" label="=" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
