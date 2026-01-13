let str = "The HTML DOM (Document Object Model) is a structured representation of a web page that allows developers to access, modify, and control its content and structure using JavaScript.";
let str2 = "at";

// let arry = str.split(" "); // convert paragraph to array
// console.log(arry);
// let arry2 = str.includes("at");



function findword(mstr, substr){
    let findss = mstr.split(" ");
    let newlist = [];

    for(let i= 0; i<findss.length; i++){
        if(findss[i].includes(substr))
        newlist.push(findss[i]);
    }
    return newlist;
}

console.log(findword(str,str2));