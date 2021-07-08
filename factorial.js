const factorial = (n) => {
    if (n == 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}

console.log('Factorial 5: ', factorial(5));
console.log('Factorial 6: ', factorial(6));
console.log('Factorial 7: ', factorial(7));