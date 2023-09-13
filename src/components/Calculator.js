import Button from './Button';

const Calculator = () => (
  <div className="outer-container">
    <Screen />
    <Button />
  </div>
);

const Screen = () => (
  <div className="header-calc">
    <p>0</p>
  </div>
);
export default Calculator;
