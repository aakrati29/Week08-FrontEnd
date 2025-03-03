let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;


let minimum = result1;
let maximum = result1;

if(result2<minimum){
    min = result1;
}
else if(result3<minimum){
    min = result3;
}
else if(result4<minimum){
    min = result4;
}

if(result2>maximum){
    min = result1;
}
else if(result3>maximum){
    min = result3;
}
else if(result4>maximum){
    min = result4;
}

console.log("Results:"+","+ result1+"," + result2+","+ result3+","+ result4);
console.log("Minimum is : " + minimum);
console.log("Maximum is : " + maximum);
