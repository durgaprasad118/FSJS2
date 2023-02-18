// Write a program to check that the number given by the user is a prime number or not.


let number=23;
let prime =true;

 if(number==1){
    console.log("1 is neither prime nor composite");
}else if(number>1){
    for(let i=2;i<number;i++){
        if(number%i==0){
            prime =false;
            break;
        }
    }
    
    if(prime){
        console.log("Prime Number")
    }else{
        console.log("Not a prime number")
    }
}else{
    //for numbers less than 1
console.log("The number is not a prime");
}