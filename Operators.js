// console.log(10+20);
// console.log(10-20);
// console.log(2 ** 2); //returns power
// var a = 30;
// console.log(a++);
// console.log(a);
// console.log(++a);


//== operator checks only value not data type
console.log(10 == 10); // true
console.log(10 == '10'); //true

//=== (strict equal to operator) checks value and data types
console.log(10 === '10');//false values are matching but not data type so gives false.


//!== (strict not equal to operator) checks value and data types
console.log(10 !== '10');//true values are matching but not data type so gives true.





//logical &&, || ,!
console.log(true && true); //true
console.log(true || false); //true
console.log(!true); //false

//ternary operator
console.log((10 == '10' ? 'equal by value': 'Not equal to value'));