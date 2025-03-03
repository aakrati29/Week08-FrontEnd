function celsiusToFahrenheit(degInCelsius) {
    if (degInCelsius< 0 || degInCelsius > 100) {
        return "Temperature out of range";
    }
    return (degInCelsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(degInFahrenheit) {
    if (degInFahrenheit < 32 || degInFahrenheit > 212) {
        return "Temperature out of range";
    }
    return (degInFahrenheit - 32) * 5 / 9;
}

let choice = parseInt(process.argv[2]);
let temp = parseFloat(process.argv[3]);

switch (choice) {
    case 1: 
        console.log(temp + "°C =", celsiusToFahrenheit(temp) + "°F"); 
        break;
    case 2: 
        console.log(temp + "°F =", fahrenheitToCelsius(temp) + "°C"); 
        break;
    default: 
        console.log("Invalid Choice");
}