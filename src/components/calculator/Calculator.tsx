import { useState } from 'react';
import './Calculator.css'

const buttons = [
    ['mc', 'm+', 'm-', 'mr'],
    ['C', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];

export const Calculator = () => {
    const [input, setInput] = useState('0');
    const [operator, setOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);

    const handleButtonClick = (value: any) => {
        if (!isNaN(value) || value === '.') {
            setInput(input === '0' ? value : input + value);
        } else if (value === 'C') {
            setInput('0');
            setPreviousValue(null);
            setOperator(null);
        } else if (value === '+/-') {
            setInput((parseFloat(input) * -1).toString());
        } else if (value === '%') {
            setInput((parseFloat(input) / 100).toString());
        } else if (['+', '-', 'x', '÷'].includes(value)) {
            setOperator(value);
            setPreviousValue(input);
            setInput('0');
        } else if (value === '=') {
            if (operator && previousValue !== null) {
                const current = parseFloat(input);
                const prev = parseFloat(previousValue);
                let result;

                switch (operator) {
                    case '+':
                        result = prev + current;
                        break;
                    case '-':
                        result = prev - current;
                        break;
                    case 'x':
                        result = prev * current;
                        break;
                    case '÷':
                        result = current !== 0 ? prev / current : 'Error';
                        break;
                    default:
                        return;
                }

                setInput(result.toString());
                setOperator(null);
                setPreviousValue(null);
            }
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
                {buttons.flat().map((btn, index) => (
                    <div key={index}>
                        <button
                            className={`${
                                ['C', '+/-', '%'].includes(btn)
                                    ? 'clear'
                                    : ['÷', 'x', '-', '+', '='].includes(btn)
                                        ? 'operator'
                                        : 'number'
                            }`}
                            onClick={() => handleButtonClick(btn)}
                        >
                            {btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

