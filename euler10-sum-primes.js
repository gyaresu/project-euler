// https://projecteuler.net/problem=10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.
var list = [];
var primes = [];
var start = 2e6;
var total = 0;

function range(x) {
    for (i=2; i<=x; i++) {
        list.push(i);
    }
}

range(start);

function remove(x) {
    if (x % list[0] === 0) {
        return false;
    } else {
        return true;
    }
}
while (list.length !== 0) {
    //console.log(list);
    primes.push(list[0]);
    list = list.filter(remove);
}

for (i=0; i<primes.length; i++) {
    total += primes[i];
}

console.log("The sum of all primes is: " + total);
//console.log(primes);

