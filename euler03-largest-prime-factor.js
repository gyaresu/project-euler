// https://projecteuler.net/problem=3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143

var x = 600851475143;

function isLargest(y) {
    for (var i=2; i<=y; i++) {
        if (y % i === 0) {
            console.log(i);
            y = y/i;
        }
    }

}

isLargest(x);
