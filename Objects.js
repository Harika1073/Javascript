//JSON :
//Data Types: Object , String , number, boolean,null,undefined
//1.objects: Json objects {key : Value Pair},
//2.Array Object [ ele1 , ele2 ,ele3...]
//3.functionc
const s1 = {
    Name : 'Harika',
    Age : 24,
    Fees_Paid: 3400.7,
    Work_experience: {
        ABC : '3 Months',
        XYZ: '2 months'
    },
    Marks : {
        Maths: 45,
        Science: 56,
    },
    percentage: ['Sem-1: 84','Sem-2: 86','Sem-3: 90'],
    performance : ()=>console.log('Good'),

}
console.log(s1, typeof s1)
console.log(s1.name);
console.log(s1.Age);
console.log(s1.Marks);
console.log(s1.Marks.Maths);
console.log(s1.percentage[2]);
