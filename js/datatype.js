/* two type datatype in javascripts primitive and non-primitive. 
Primitive datatype (immutable):- number, bigint, string, boolean, null, undefined, symbol. 
immutable means their are not value change after creation.
*/

let nmbr = 123 // number(bigint datatype is use huge number store)
let str = "santosh"; // string
let bool = true; //boolean
let nll = null; //null
let undfn; // undefined

console.log(typeof (nmbr));
console.log(typeof (str));
console.log(typeof (bool));
console.log(typeof (nll));
console.log(typeof (undfn));

/* non-primitive datatype is mutable 

mutable means content can change without new object create

object
array
function
*/

let obj = { idd: 12, name: "santosh", email: "santosh@gmail.com" };

console.log(obj); // object

let arry = [1, "santosh", "santosh@gmail.com", "lucknow"];
console.log(arry); // array

function fctn() {
    let a = 5;
    let b = 51;
    let c = a + b;
    return (c);
}

let totl = fctn();
console.log(totl); // function

