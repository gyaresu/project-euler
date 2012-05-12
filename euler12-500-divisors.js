// https://projecteuler.net/problem=12
// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
//
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//
// Let us list the factors of the first seven triangle numbers:
//
// 1: 1
// 3: 1,3
// 6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
//
// What is the value of the first triangle number to have over five hundred divisors?

function triangle(x) {
    var sum = 0;
    for (var i=1; i<=x; i++) {
        sum += i;
    }
    //console.log(sum);
    return sum;
}

function factors(x) {
    console.log(x[0]);
    var temp = [];
    for (var i=0;i<x.length;i++) {
        var current = Math.pow(x[0][i],2);
        console.log("Squared prime " + current);
        if (x[1] % current === 0) {
            temp.push(current);
            temp.push(x[0][i]);
            if (temp.length >= 500) {
                console.log("The triangle number is: " + x[1]);
            }
        }
    }
            console.log(temp + " " + x[1]);
}
var primeList = [];

function primes(x) {
    var z = x;
    for (var i=2; i<=x; i++) {
        if (x % i === 0) {
            primeList.push(i);
            x = x/i;
        }
    }
    return [primeList, z];
}
factors(primes(triangle(11)));
