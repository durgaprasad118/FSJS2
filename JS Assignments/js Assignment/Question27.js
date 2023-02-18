//Printing prime numbers from 1 to 100;
function isPrime(num){
    let prime= true;
    if(num<=1){
        prime=false;
        return prime;
    }else{
        for(let i=2;i<num;i++){
            if(num%i==0){
               return prime==false;
            }
        }
    }
    return prime;
}
let answer=[];
for(let i=1;i<=100;i++){
    if(isPrime(i)){
        answer.push(i);
    }
}
console.log(answer);