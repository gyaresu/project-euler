function sum(x, y) {
    return x + y;
}

var next = 1;
var last = 1;
var count = 0;

for (i=1; i<4e6; i+=last) {
    console.log("this is i:       " + i);
    next = sum(next, last);
    last = i - last;
    console.log("this is last: " + last);
    if (i % 2 === 0) {
        count+=i;
        //console.log(last);
    }

}

console.log(count);
