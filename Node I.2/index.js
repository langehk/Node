const fs = require('fs');
const readline = require('readline-sync');


fs.readFile('../Node I.1/user.json', 'utf-8', function(err, data){
    if (err) throw err

    var objects = JSON.parse(data);
    console.log(objects);

    let myUserId = readline.questionInt("Enter user Id: ");

    for (let i = 0; i < objects.users.length; i++) {
        if(objects.users[i].userId == myUserId){
            console.log("Your email is: " + objects.users[i].email);
        }
    }
});
