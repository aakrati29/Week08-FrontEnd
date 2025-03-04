const emailPattern = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz/;

const testEmails = [
    "abc@bridgelabz",
    "abc.xyz@bridgelabz",
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co.in",
    "xyz@bridgelabz.co",
    "abc@xyz.co",
    "abc@bridgelabzcom",
    "abc.xyz@bridgelabz.in"
];

testEmails.forEach(email => {
    if (emailPattern.test(email)) {
        console.log(`\n${email} : Valid`);
    } 
    
    else {
        console.log(`\n${email} : Invalid`);
    }
});
