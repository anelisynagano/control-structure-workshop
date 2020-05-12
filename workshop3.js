const math = (num1, operator, num2) => {
    if (num2 === 0 && operator === '/') {
        console.log('can\'t divide by zero!')
    } else {
        switch (operator) {
            case '+':
                return num1 + num2;
                break;
            case '-':
                return num1 - num2;
                break;
            case '*':
                return num1 * num2;
                break;
            default:
                return num1 / num2;
        }
    }
}

console.log(math(2, '/', 4));