const fibonacci = (num) => {
    if (num <= 2) {
        return 1;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log('Fibonacci 10: ', fibonacci(10));
console.log('Fibonacci 15: ', fibonacci(15));
console.log('Fibonacci 20: ', fibonacci(20));