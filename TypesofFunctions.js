//function Declaration : hoisted
function greet (name) {
    return `Hello,${name}`
}
console.log(greet('Harika'));


//function Expression: not hoisted
let greet1 = function(name) {
    return `Hello,${name}`
}
console.log(greet1('ria'))


//Arrow functions : call backs
let greet2 = (name)=> {
    return `hello,${name}`
}
console.log(greet2('chinnu'))
