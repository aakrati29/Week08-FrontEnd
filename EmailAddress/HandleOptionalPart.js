const emailPattern = /^abc([._+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

const testEmails = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc-xyz@bridgelabz.co",
    "abc_xyz@bridgelabz.co",
    "abc+xyz@bridgelabz.co",
    "abc.xyz@bridgelabz.co.in",
    "abc-xyz@bridgelabz.co.in",
    "abc_xyz@bridgelabz.co.in",
    "abc+xyz@bridgelabz.co.in",
    "abc@bridgelabzcom",
    "abc@bridgelabz.co.",
    "abc@bridgelabz.in",
    "abcxyz@bridgelabz.co",
    "abc*xyz@bridgelabz.co",
    "abc xyz@bridgelabz.co"
];

testEmails.forEach(email => {
    if (emailPattern.test(email)) {
        console.log(`\n${email} : Valid`);
    } else {
        console.log(`\n${email} : Invalid`);
    }
});
