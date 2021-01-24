// on console: npm i readline-sync
const fs = require('fs');
const readline = require('readline-sync');

class User {
    constructor(name, userId, email) {
    this.name = name;
    this.userId = userId;
    this.email = email; 
    }
}

let newUser = new User(); 

let name = readline.question("Enter name: ");
newUser.name = name;

console.log(`Hi ${name} please write your user ID:`);

let userId = readline.questionInt("Enter user Id: ");
newUser.userId = userId;

console.log(`You have entered ID: ${userId}. Now enter your Email:`);
let email = readline.questionEMail("Email: ");
newUser.email = email;

console.log(`Thanks! Now there will be spam heading your way! ${email}`);


let data = JSON.stringify(newUser);
fs.writeFileSync('./user.json', data);

// Saving data to JSON format, to save as objects.
// Also be able to "GET" the JSON objects, and use them as JS objects.


