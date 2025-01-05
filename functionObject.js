function greet() {
    console.log('Hello');
}
console.log(greet);


//functions are objects in javascript


function  identifyDataType(value) {
    if (value === null) {
        return 'Null';
    }
    if (Array.isArray(value)) {
        return 'Array'
    }
    return typeof value;
}

res = identifyDataType([10,20,30]);
console.log(res);