const pinPattern = /^[1-9][0-9]{5}$/;

const testPins = ["400088", "A400088", "12345", "40008A", "400088!", "040088", "999999"];

testPins.forEach(pin => {
    if (pinPattern.test(pin)) {
        console.log(`\n${pin} : Valid PIN code`);
    } else {
        console.log(`\n${pin} : Invalid PIN code`);
    }
});
