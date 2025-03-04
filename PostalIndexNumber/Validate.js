const pinPattern = /^[1-9][0-9]{2} ?[0-9]{3}$/;

const testPins = [
    "400088","400 088","400088B","A400088","40008A","400088!","040088","4000 88","400  088","4000889"
];

testPins.forEach(pin => {
    if (pinPattern.test(pin)) {
        console.log(`\n${pin} : Valid PIN code`);
    } else {
        console.log(`\n${pin} : Invalid PIN code`);
    }
});
