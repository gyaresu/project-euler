function triangle(x) {
  var sum = 1;
  for (var i=1; i<x; i++) {
    sum += i;
    console.log("sum so far: ",sum);
  }
  return sum;
}

console.log(triangle(3));
