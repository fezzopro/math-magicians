const Button = (props) => props.signs.map((sign) => <button type="button" className={`button button-${sign.toString()}`} key={sign.toString()}>{sign}</button>);

const Calculator = () => {
  const displayValue = 0;
  const signs = ['AC', '+/-', '%', '+', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calculator">
      <input className="display-value" type="text" value={displayValue} readOnly />
      <div className="buttons">
        <Button signs={signs} />
      </div>
    </div>
  );
};
export default Calculator;
