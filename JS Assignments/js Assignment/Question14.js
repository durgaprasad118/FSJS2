//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number 
// is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let num=4;
// method 1
if(num%2==0){
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
  
}
// Method 2
if(num&1){
    console.log(`${num} is odd`);
}else{
    console.log(`${num} is even`);
}

/*
Output
4 is even
4 is even
*/