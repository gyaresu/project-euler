var list = [];
var start = 100;

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
var counter = 1;
for (i=0; counter<=10000; i++) {
    list = list.filter(remove);
    if (counter > 9998) {
        console.log("This is counter " + counter + " and first number in the array is " + list[0]);
    }
    counter++;
}

console.log(" This is list[0]: " + list[0] + " This is the counter: " + counter);

