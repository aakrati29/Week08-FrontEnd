let money = 100, bets = 0, wins = 0;
const GOAL = 200;

while (money > 0 && money < GOAL) {
    bets++;
    if (Math.random() < 0.5) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log("Total bets made:", bets);
console.log("Total wins:", wins);
console.log("Final amount:", money);