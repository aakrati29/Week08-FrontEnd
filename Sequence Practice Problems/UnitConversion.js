let inches = 42;
let feet = inches / 12;
console.log("42 inches in feet is : " + feet);

let lengthFeet  = 60;
let widthFeet = 40;
let feetToMeter = 0.3048;
let areaMeters = (lengthFeet + feetToMeter) * (widthFeet * feetToMeter);
console.log("Rectangular plot in meter is : " + areaMeters, "sq meters");

let oneAcerTSqMeters = 4046.86;
let totalArea = (areaMeters * 25) / oneAcerTSqMeters;
console.log("The total area of 25 plots in acers is : " + totalArea);
