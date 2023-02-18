//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let x= "file.js";
let y= "index.html";
function fileNam(x){
 let extension= x.split(".").pop();
 return extension;
}
console.log(fileNam(x));// js
console.log(fileNam(y));// html