let year = parseInt(process.argv[2]);
if((year%4 === 0 && year%100!=0) ||(year%400 === 0 && year%100 === 0)){
    console.log(year + " this Year is leap year");
}
else{
    console.log(year + " this Year is not leap year");
}