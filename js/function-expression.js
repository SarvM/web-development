var square = function(number) { return number * number; };
var x = square(4);

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
console.log(factorial(3));


function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  var f = function(x) {
     return x * x * x; 
  }
  var numbers = [0, 1, 2, 5, 10];
  var cube = map(f,numbers);
  console.log(cube);