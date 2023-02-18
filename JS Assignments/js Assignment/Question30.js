//30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.
let a=8,b=4;

let symbol='*';

switch(symbol){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;
    case '/':
        console.log(a/b);
        break;
    case'%':
        console.log(a%b);
        break;
    default:
        console.log("Please enter a valid key!!");
}


//Output => 32