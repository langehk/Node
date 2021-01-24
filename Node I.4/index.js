// on console: npm i readline-sync
const { Console } = require('console');
const fs = require('fs');
const readline = require('readline-sync');


class User{
    constructor(name, userId, email){
        this.name = name;
        this.userId = userId;
        this.email = email;
    }
}

var newUser = new User();

let name = readline.question("Enter name: ");
newUser.name = name;

console.log(`Hi ${name} please write your user ID:`);

let userId = readline.questionInt("Enter user Id: ");
newUser.userId = userId;

console.log(`You have entered ID: ${userId}. Now enter your Email:`);
let email = readline.questionEMail("Email: ");
newUser.email = email;

fs.readFile('../Node I.1 and I.2/user.json', 'utf-8', function(err, data) {
	if (err) throw err

    var objects = JSON.parse(data);

    var listOfIds = [];

    /*
    Adds Id to array, if exists.
    */
    objects.users.forEach(e => {
        if(e.userId == newUser.userId)
        {
            listOfIds.push(e.userId);
        }
    });

    /*
     * If Id doesn't exist in the list, create the new user. 
     */
    if(!listOfIds.includes(newUser.userId))
    {
        objects.users.push(newUser);
        fs.writeFile('../Node I.1 and I.2/user.json', JSON.stringify(objects), 'utf-8', function(err) {
            if (err) throw err
            console.log('Done!')
        })
    }
    else {
        console.log("Id already exists!");
    }
});