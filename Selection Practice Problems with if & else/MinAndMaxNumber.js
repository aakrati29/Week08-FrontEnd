let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 900) + 100;
let num3 = Math.floor(Math.random() * 900) + 100;
let num4 = Math.floor(Math.random() * 900) + 100;
let num5 = Math.floor(Math.random() * 900) + 100;

let max = num1;
let min = num1;

if(num2<min){
    min = num2;
}
else if(num3<min){
    min = num3;
}
else{
    min = num4;
}
console.log("Minimum is : " + min);

if(num2> max){
    max = num2;
}
else if(num3>max){
    max = num3;
}
else{
    max = num4;
}
console.log("Maximum is : " + max);
