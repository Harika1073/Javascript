// var arr1 = [10,20,30,40,50,60,70]
// console.log(arr1.length);
// console.log('Element at 0th index:',arr1[0]);
// console.log('Element at 1st index:',arr1[1]);
// console.log('Element at 2nd index:',arr1[2]);
// console.log('Element at 3rd index:',arr1[3]);


// for (var i = 0; i<=arr1.length-1; i++) {
//     console.log(`Element at index ${i}`, arr1[i]);
// }

var arr1 = [10, 56.5, true, 'Kod',{name: 'Harika', age : 21},() =>{console.log('function')},[100,200]]
console.log('The length of arr1 array:', arr1.length);

for(var i = 0; i <=arr1.length-1; i++){
    console.log(`element at index ${i}`,arr1[i]);
}

// Array can store homogeneous(data with same datatype ) as well as heterogenous(data with different data type) data
