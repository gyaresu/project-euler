

function triangle(x) {
    var sum = 0;
    for (var i=1; i<=x; i++) {
        sum += i;
    }
    return sum;
}

//console.log("This is triangle(7) " + triangle(8));

function factors(x) {
    var list = [];
    for (var i=1;i<=x;i++) {
        if (x % i === 0) {
            list.push(i);
            if (list.length >= 500) {
                console.log("The triangle number is: " + x);
            }
        }
        //console.log(list);
    }
}

//console.log("This is factors(): " + factors(28));

for (var i=70001; i < 70002; i++) {
    num = triangle(i);
    //console.log(num + " " + i);
    factors(num);
    //console.log("end loop");
}




