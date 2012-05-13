// https://projecteuler.net/problem=9
// A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,
//
// a2 + b2 = c2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

for (var i=0; i<1000; i++) {
    for (var j=0; j<1000; j++) {
        if (i !== 0 && j !== 0) {
            var temp = Math.pow(i, 2) + Math.pow(j, 2);
            if (Math.sqrt(temp) + i + j === 1000) {
                console.log("Woohoo answer is " + Math.sqrt(temp) + i + j + " Bits " + Math.sqrt(temp) + " " + i + " " + j);
                console.log(Math.sqrt(temp) * i * j);
            }
        }
    }
}


   
