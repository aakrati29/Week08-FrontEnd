const pinPattern = /^[1-9][0-9]{5}$/;

const testPins = ["400088", "400088B", "A400088", "400088!", "123456", "040088", "4000889"];

testPins.forEach(pin => {
    if (pinPattern.test(pin)) {
        console.log(`\n${pin}: Valid PIN code`);
    } else {
        console.log(`\n${pin}: Invalid PIN code`);
    }
});
