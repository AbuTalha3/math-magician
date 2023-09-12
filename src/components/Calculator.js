import React, { Component } from 'react';

const Button = (props) => (
  <button type="button" className={`btn ${props.className}`} name={props.name}>
    {props.label}
  </button>
);

class Calculator extends Component {
  render() {
    return (
      <div className="outer-container">
        <div className="header-calc">
          <p>0</p>
        </div>
        <div className="button-container">
          {/* Use the Button component for each button */}
          <Button className="" name="AC" label="AC" />
          <Button className="" name="+/-" label="+/-" />
          <Button className="" name="%" label="%" />
          <Button className="orange" name="÷" label="÷" />
          <br />
          <Button className="" name="7" label="7" />
          <Button className="" name="8" label="8" />
          <Button className="" name="9" label="9" />
          <Button className="orange" name="*" label="*" />
          <br />
          <Button className="" name="4" label="4" />
          <Button className="" name="5" label="5" />
          <Button className="" name="6" label="6" />
          <Button className="orange" name="-" label="-" />
          <br />
          <Button className="" name="1" label="1" />
          <Button className="" name="2" label="2" />
          <Button className="" name="3" label="3" />
          <Button className="orange" name="+" label="+" />
          <br />
          <Button className="zero-btn" name="0" label="0" />
          <Button className="" name="." label="." />
          <Button className="orange" name="=" label="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
