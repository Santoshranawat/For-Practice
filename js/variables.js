const id = 123; // value can not change and not use same variable
let nam = "Santosh"; // value can change and can not use same variable name
var email = "santosh@gmail.com"; // value can change and variable same name use not use morden javascript beacouse block scope and funcation scope both are use. 
address = "lucknow"; // hidden var
let undfn; // undefined variable its means not create space in memory and not assign value. its call undefined variable
let nll = null // its call null variable its means create space in  memory for value but current time value is not assign  

console.table(
    [
        {Id: id, Name: nam, Email: email, address: address, undefined: undfn, Null: nll}
    ]
);