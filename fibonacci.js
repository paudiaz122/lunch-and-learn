const fibonacci = (num) => {
    if (num <= 2) {
        return 1;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
}

console.error('Esto no debe salir en master')
console.log('Fibonacci: ', fibonacci(10));