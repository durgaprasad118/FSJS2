// Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.

// values that give falsy => 0,-0,0n,false,"",null,NaN,undefined

if(0){
    console.log("Hello");
};
if(-0){
    console.log("Hello");
};
if(""){
    console.log("Hello");
};
if(null){
    console.log("Hello");
};
if(NaN){
    console.log("Hello");
}
if(undefined){
    console.log("Hello");
};
if(false){
    console.log("Hello");
};
if(0n){
    console.log("Hello");
};

//Truthy => The values other than falsy are all truthy values

if(1){
    console.log("Namasthe");
}
if(true){
    console.log("Vanakkam");
}
if({}){
    console.log("Holaaaaa");
}

//Output=> only the turthy valued ones return the console
/*
Namasthe
Vanakkam
Holaaaaa

*/