
let btn =document.querySelector("#button");

// getting hex value
let changeColor=()=>{
    let val ="0123456789ABCDEF";
    let POUND="#";
    // required 6 digits only
    for(let i=0;i<6;i++){
        POUND= POUND+ val[Math.floor(Math.random()*16)];
    }
    return POUND;
}
// function to change the background color of the whole body of the webpage
function changeBgc(){
    document.body.style.backgroundColor=changeColor();
}   

btn.addEventListener("click",changeBgc);
