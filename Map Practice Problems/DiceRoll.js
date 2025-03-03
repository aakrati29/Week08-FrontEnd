function rollDie() {
    return Math.floor(Math.random() * 6) + 1; 
}

function rollUntilLimit(limit) {
    let dieRolls = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}; 

    let maxReached = false;
    while (!maxReached) {
        let roll = rollDie();
        dieRolls[roll]++; 

        if (dieRolls[roll] === limit) {
            maxReached = true;
        }
    }

    console.log("Final roll counts:", dieRolls);

    let maxNum = Object.keys(dieRolls)[0], minNum = Object.keys(dieRolls)[0];

    for (let num in dieRolls) {
        if (dieRolls[num] > dieRolls[maxNum]) {
            maxNum = num;
        }
        if (dieRolls[num] < dieRolls[minNum]) {
            minNum = num;
        }
    }

    console.log(`Number that appeared the most: ${maxNum} (${dieRolls[maxNum]} times)`);
    console.log(`Number that appeared the least: ${minNum} (${dieRolls[minNum]} times)`);
}

rollUntilLimit(10);
