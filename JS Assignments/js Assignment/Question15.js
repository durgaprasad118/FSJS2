/*
 Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

let marks= 100;
if(marks>=0 && marks<=49){
    console.log("The grade is F");
}else if(marks>=50 && marks<=59){
    console.log("The grade is D");
    
}else if(marks>=60 && marks<=69){
    console.log("The grade is C");
    

}else if(marks>=70 && marks<=89){
    console.log("The grade is B");
    
}else if(marks>=80 && marks<=100){
    console.log("The grade is A");
}

//Output => "The grade is A"
