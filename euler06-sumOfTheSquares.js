// https://projecteuler.net/problem=6
// The sum of the squares of the first ten natural numbers is,
//
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
var squares = 0;
var sumTo = 0;
var sum = 0;

for (i=0; i<=100; i++) {
    squares = squares + Math.pow(i, 2);
}

for (i=0; i<=100; i++) {
    sum = sum + i;
}

sumTo = Math.pow(sum, 2);

console.log(sumTo - squares);
