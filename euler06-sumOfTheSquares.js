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
