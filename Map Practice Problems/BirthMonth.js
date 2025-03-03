function generateBirthMonths(numPeople) {
    let birthMonthMap = {}; 

    for (let i = 1; i <= 12; i++) {
        birthMonthMap[i] = [];
    }

    for (let person = 1; person <= numPeople; person++) {
        let month = Math.floor(Math.random() * 12) + 1; 
        let year = Math.random() < 0.5 ? 1992 : 1993; 
        birthMonthMap[month].push(`Person${person} (Year ${year})`);
    }

    return birthMonthMap;
}

let birthMonths = generateBirthMonths(50);

console.log("Individuals grouped by birth month:");
for (let month in birthMonths) {
    console.log(`Month ${month}:`, birthMonths[month].length > 0 ? birthMonths[month] : "No birthdays");
}
