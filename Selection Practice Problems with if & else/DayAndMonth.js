let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);
let isValid = false;

if ((month === 3 && day >= 20) || (month === 6 && day <= 20) || (month > 3 && month < 6)) {
    isValid = true;
}

console.log("Is in range:", isValid);