// What is the largest prime factor of the number 600851475143

var x = 600851475143;

function isLargest(y) {
    for (var i=2; i<=y; i++) {
        if (y % i === 0) {
            y = y/i;
            console.log(i);
        }
    }

}

isLargest(x);
