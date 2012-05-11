/*
function triple(x) {
    var a = 2 * x;
    var b = Math.pow(x,2) - 1;
    var c = Math.pow(x,2) + 1;
    var d = a+b+c;
    console.log(b);
    if (d === 1000) {
        console.log(a*b*c); 
    }
}

for (var i=0; i<10; i++) {
    triple(i);
}

function triple(x,y,z) {
    ab= Math.pow(x, 2) + Math.pow(y, 2); 
    c = Math.pow(z, 2);
    console.log(" " + ab);
    if (ab + c === 1000) {
        console.log(x*y*z);
    }
}

function triple(x) {
    y = Math.pow(x, 2);
    a = Math.floor(y/2);
    b = Math.ceil(y/2);
    console.log(x + " " + a + " " + b);
    if (x+a+b === 1000) {
        console.log(x*a*b + " Eureka!");
    }
}
   */ 

var divs = [];

var intRegex = /^\d+$/;
function triple(x) {
    if (intRegex.test(1000 / x)) {
        console.log("is an integer");
        divs.push[x];
    } else {
        console.log("nope");
    }
}


for (var i=1; i<1000;i+=2) {
    triple(i);
}
console.log(divs);
   
