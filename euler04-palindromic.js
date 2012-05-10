
String.prototype.reverse = function(){
     splitext = this.split("");
      revertext = splitext.reverse();
       reversed = revertext.join("");
       return reversed;
};

var big = 0;

for (i=1; i<1000; i++) {
    for(var j=i; j<1000; j++) {
        k = i*j;
        if (k>big && pal(k) == k){
            big = k;
            console.log(big);
        }
    }

}

function pal(x) {
    x = x.toString();
    x = x.reverse();
    return x;
}

console.log(big);
