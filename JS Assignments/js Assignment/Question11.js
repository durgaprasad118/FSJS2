/* Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
let date = new Date();

console.log(date.getFullYear());// 2023
console.log(date.getMonth());//1 //feb
console.log(date.getDate());//12
console.log(date.getDay());//0 //sunday
console.log(date.getHours());//20
console.log(date.getMinutes());//20

let prev = new Date('1970-01-01');
let timeChange = date-prev;
console.log(timeChange);