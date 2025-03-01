let sum = 0;
for(let i = 0; i < 5; i++){
    sum +=  Math.floor(Math.random() * 90) + 10;
}
let averge = sum / 5;
console.log("Sum is : " + sum + " Average is : " + averge);