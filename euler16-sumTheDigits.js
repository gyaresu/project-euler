/* http://projecteuler.net/problem=16
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 *
 * For Iris: Reduce the sum of the total to two digits to test her thory that the number will be 42
 *

a = Math.pow(2,15);
b = a.toString();
x = b.split("");
d = Math.
*/
x ="10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376";
//console.log(x);
//console.log(z);

sum = 0;

for (var i = 0; i < x.length; i++) {
    sum += Math.round(x[i]);
}
console.log("The final sum is: " + sum);


