var list = [];
var x = 28;
var y = 2;

while (x % y === 0) {
    console.log(x + " " + y);
    list.push(y);
    x = x/y;
}

