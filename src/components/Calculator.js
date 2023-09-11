const Calculator = () => (
  <div className="outer-container">
    <div className="header-calc">
      <p>0</p>
    </div>
    <Button />
  </div>
);

const Button = () => (
  <div className="button-container">
    <button type="button" className="btn" name="AC">AC</button>
    <button type="button" className="btn" name="+/-">+/-</button>
    <button type="button" className="btn" name="%">%</button>
    <button type="button" className="orange" name="÷">÷</button>
    <br />
    <button type="button" className="btn" name="7">7</button>
    <button type="button" className="btn" name="8">8</button>
    <button type="button" className="btn" name="9">9</button>
    <button type="button" className="orange" name="*">*</button>
    <br />
    <button type="button" className="btn" name="4">4</button>
    <button type="button" className="btn" name="5">5</button>
    <button type="button" className="btn" name="6">6</button>
    <button type="button" className="orange" name="-">-</button>
    <br />
    <button type="button" className="btn" name="1">1</button>
    <button type="button" className="btn" name="2">2</button>
    <button type="button" className="btn" name="3">3</button>
    <button type="button" className="orange" name="+">+</button>
    <br />
    <button type="button" className="zero-btn" name="0">0</button>
    <button type="button" className="btn" name=".">.</button>
    <button type="button" className="orange" name="=">=</button>
  </div>
);

export default Calculator;
