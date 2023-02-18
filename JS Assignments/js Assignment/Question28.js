/*
a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
*/

let n =4;
let str="";// string to store pattern
for(let i=0;i<=n;i++){
    for(let j=0;j<=i;j++){
      str+="*";
    }
    // adding new line
    str+="\n";
}
console.log(str);


/*
b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

*/
let given=4;
let answer="";
for(let i=0;i<given;i++){
    for(let j=0;j<given;j++){
        answer+="*";
    }
    answer+="\n";
}
console.log(answer);


/*
c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/
let num=5;
let ans="";
for(let i=0;i<num;i++){
    // spaces => (for i =0 => 2 , i=1=> 1 , and i=2=> 0 spaces so=> n-i)
    for(let j=0;j<=n-i;j++){
        ans+=" ";
    }
    // stars (for i=1, 1 star , i=2 3stars ,i=3 5 stars so => 2*i+1)
    for(let k=0;k<(2*i+1);k++){
        ans+="*";
    }
    ans+="\n";
}
console.log(ans);