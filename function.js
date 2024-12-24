// 4 Types of Functions:

//1. function without input and without return
function add() {
    var a = 10;
    var b = 20;
    console.log("Addition is :",a+ b);
}
add ();
//2. functions with input and without return
function sub(x,y) {
    console.log("Subtraction is : ",x-y);
}
sub(200,100);
//3.functions without input and with return
function mul() {
    var p = 300;
    var q = 100;
    return p * q;
}
let result = mul();
console.log("Mul result:",result);

//4. functions with input and with return
function div(x,y) {
    return  x / y;
}
console.log("Division result is :",div(23,5));


