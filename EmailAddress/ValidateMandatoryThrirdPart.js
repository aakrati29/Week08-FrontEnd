const emailPattern = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co/;

const testEmails = [
    "abc@bridgelabz.co",
    "abc.xyz@bridgelabz.co",
    "abc@bridgelabz.co.in",
    "abc.xyz@bridgelabz.co.in",
    "abc@bridgelabzcom",
    "abc@bridgelabzco",
    "abc@bridgelabz.in",
    "abc@xyz.co"
];

testEmails.forEach(email => {
    if (emailPattern.test(email)) {
        console.log(`\n${email} : Valid`);
    } 
    
    else {
        console.log(`\n${email} : Invalid`);
    }
});
