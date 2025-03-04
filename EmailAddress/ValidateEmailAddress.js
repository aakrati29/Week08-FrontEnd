const emailPattern = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

const testEmails = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc@bridgelabz.co.in",
    "abc.xyz@bridgelabz.co.in",
    "xyz@bridgelabz.co",
    "abc@xyz.co",
    "abc@bridgelabz.com",
    "abc.xyz@bridgelabz.in",
    "abc@bridgelabz.co.uk"
];

testEmails.forEach(email => {
    if (emailPattern.test(email)) {
        console.log(`\n${email} : Valid Email Address`);
    } 
    
    else {
        console.log(`\n${email} : Invalid Email Address`);
    }
});
