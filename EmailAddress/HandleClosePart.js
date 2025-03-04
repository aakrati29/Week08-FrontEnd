const emailPattern = /^abc([._+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

const testEmails = [
    "abc-xyz@bridgelabz.co",
    "abc_xyz@bridgelabz.co",
    "abcxyz@bridgelabz.co",
    "abc*xyz@bridgelabz.co",
    "abc+xyz@bridgelabz.co",
    "abc.xyz@bridgelabz.co.in",
    "abc-xyz@bridgelabz.co.us",
    "abc_xyz@bridgelabz.co.uk",
    "abc+xyz@bridgelabz.co.au",
    "abc@bridgelabzcom",
    "abc@bridgelabz.co.",
    "abc@bridgelabz.in",
    "abc xyz@bridgelabz.co",
];

testEmails.forEach(email => {
    if (emailPattern.test(email)) {
        console.log(`\n${email} : Valid`);
    } 
    
    else {
        console.log(`\n${email} : Invalid`);
    }
});
