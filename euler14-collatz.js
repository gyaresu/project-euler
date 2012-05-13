var lng = 0;
function chain(x) {
    var temp = x;
    var len = [];
    while (x !== 1) {
        if (x % 2 === 0) {
            x = x/2;
            len.push(x);
        } else {
            x = x*3+1;
            len.push(x);
        }
    }
    return [temp, len.length];
}

for (var i=2; i<=1e6; i++) {
    var ans = chain(i);
    if (ans[1] > lng) {
        num = ans[0];
        lng = ans[1];
    }
}

console.log("Integer " + num + " produces a chain " + lng + " long.");
