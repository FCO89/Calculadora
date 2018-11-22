const screen = document.getElementById('calculator-screen'),
      keys = document.getElementById('calculator-keys');
      
let operationStatus = false,
    number1, typeOperation;

screen.textContent = '0';



const calculator = () => {
    if (!keys) return;

    keys.addEventListener('click', e => {
        const t = e.target,
              d = t.dataset;
        
        // detectar si se pulso un número
        if(d.number) writeScreen(d.number);
        // detectar si se pulso una operación matemática
        if(d.math) getOperation(t, d.math);
        //detectar si se pulsó otra operación
        if(d.operation) runOperation(d.operation);
    });
};

const writeScreen = number => {
    screen.textContent === '0' || operationStatus === true
    ? screen.textContent = number
    : number === '.' && !screen.textContent.includes('.')
        ? screen.textContent += number
        : number !== '.'
            ? screen.textContent += number
            : null;

    operationStatus = false;
};

const getOperation = (element, operation) => {
    operationStatus = true;
    number1 = Number(screen.textContent);
    typeOperation = operation;
    screen.textContent = element.textContent;
};

const runOperation = operation => {

    const getResult = (number1, typeOperation) => {
        const number2 = Number(screen.textContent);
        
        let result;

        switch (typeOperation) {
            case 'suma':
                result = number1 + number2;
                break;
            case 'resta':
                result = number1 - number2;
                break;
            case 'multiplicacion':
                result = number1 * number2;
                break;
            case 'division':
                result = number1 / number2;
                break;
        
            default:
                break;
        }

        result === Infinity || isNaN(result)
        ? screen.textContent = 'error'
        : screen.textContent = result;
    };

    operation === 'clear'
    ? screen.textContent = '0'
    :getResult(number1, typeOperation);

    operationStatus = true;
};

calculator();
