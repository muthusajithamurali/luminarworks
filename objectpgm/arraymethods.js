let add=(num1,num2)=> num1+num2;
let sub=(num1,num2)=> num1-num2;
let cube=num=> num**3;
console.log(add(10,20));
console.log(sub(50,10));
console.log(cube(3));

var num_chk=num=>num%2==0?"even":"odd"
console.log(num_chk(7));


var arr=[1,5,6,7,3,4]
var squares=arr.map(num=>num**2)
console.log(squares);

var cubes=arr.map(num=>num**3)
console.log(cubes);

var evens=arr.filter(num=>num%2==0)
console.log(evens);