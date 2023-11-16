// Write a JavaScript program to list the properties
// of a JavaScript object.
// input object:
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };
// Output: name,sclass,rollno

function showProps(obj){

    let arr = [];

    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            arr.push(i);
        }
    }
    arr.join(',');
    return arr;
}

let o = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
}

console.log(showProps(o));