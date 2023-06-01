import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ next: null, operation: null, total: null });
  const Button = ({ signs }) => {
    const btns = signs.map((sign) => {
      const callCalculate = (value) => {
        const results = calculate(state, value);
        setState((prevState) => ({ ...prevState, ...results }));
      };
      return (
        <button
          onClick={(event) => callCalculate(event.target.value)}
          type="button"
          className={`button button-${sign.toString()}`}
          key={sign.toString()}
          value={sign.toString()}
        >
          {sign}
        </button>
      );
    });
    return btns;
  };
  const displayValue = `${state.total ?? ''} ${state.operation ?? ''} ${state.next ?? ''}`;

  const signs = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
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
