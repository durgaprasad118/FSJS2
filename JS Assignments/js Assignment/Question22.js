
/*
 The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    -1. Sort the array and find the min and max age
    - 2.Find the median age(one middle item or two middle items divided by two)
    - 3.Find the average age(all items divided by number of items)
    - 4.Find the range of the ages(max minus min)
    - 5.Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//1
ages.sort();
// since array is sorted we can get from the first element and the last
console.log(`The min age is ${ages[0]} and the max age is ${ages[ages.length-1]}`);//max min
//Output => The min age is 19 and the max age is 26



// if the array is not sorted we can get using math.min or math.max using spread operator
console.log(Math.min(...ages));//19
console.log(Math.max(...ages));//26

// 2/

let lengthofArray= ages.length;
console.log(ages.length);//10

if(ages.length&1){
    let ans= ages.length/2;
    // Trunc gives the integral part of the answer
    console.log(ages[Math.trunc(ans)]);
}else{
    let ans= Math.trunc(ages.length/2);
    console.log(ans);//5
    let median = (ages[ans]+ages[ans-1])/2;
    console.log(median);//24
}
//Output => 5


//3/

let sum=0;
let average=0;
for(let i of ages){
    sum+=i;
}
average=sum/ages.length;
console.log(`The average of the ages is ${average}`) //The average of the ages is 22.8
//4/ range max-min
console.log(Math.max(...ages)-Math.min(...ages));//7

// - 5.Compare the value of (min - average) and (max - average), use abs() method

let a=Math.abs( Math.min(...ages)-average);
let b= Math.abs(Math.max(...ages)-average);
console.log(a,b)//3.8000000000000007 3.1999999999999993
