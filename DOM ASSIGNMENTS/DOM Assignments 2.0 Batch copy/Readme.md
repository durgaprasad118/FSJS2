# DOM ASSIGNMENT
## Assignment 1 :
## Task 1
Change the navigation menu to "Projects" name then add new navigation menu after that add "Hire Me"

![Q-1-1](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

#### Solution
```javaScript
//changing Contacts to Projects
let lists= document.querySelectorAll("header nav ul li");
lists[2].innerHTML='<a>Projects</a>';

//adding hire me
let parent =document.querySelector("header nav ul");
let child= document.createELement("li");
child.innerHTML="<a>Hire Me </a>"
parent.appendChild(child);

//Removing social Media Icons
let footer = document.querySelector("footer ul");
footer.style.visibility = "hidden";
```

## Task 2
Change the input placeholder to "Search My Project"

![Q-1-2](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

#### Solution

```javaScript
document.querySelector("nav div.search-field  input").placeholder="Search My Project";
```
## Task 3
Change span text and display footer social icons

![Q-1-3](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

## Solution:-
```javaScript
document.querySelectorAll("section.hero-section div.hero-left-section p span")[1].innerHTML ="an Employee";
document.querySelectorAll("section.hero-section div.hero-left-section p span")[2].innerHTML ="iNeuron intelligence Pvt Ltd.";
//displaying social Media Icons
let footer = document.querySelector("footer ul");
footer.style.visibility = "visible";
```
## Task 4
Change the image

![Q-1-4](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

## Solution:-
```javaScript
document.querySelector("div.hero-right-section img").src="./Hitesh sir.jpg";
```
## Task 5
Add "Support Me" button after "Chat with Me"

![Q-1-5](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

```javascript
let parent =document.querySelector(".hero-right-section-btns");
let child = document.createElement("button");
child.innerHTML= "Support Me";
parent.appendChild(child);
```
***
## Assignment 2

## Task 1
Change the backgrounds of all the h3 tags
 and make the last two paragraphs visible


![Q-2-1](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

## Solution:-

```javascript
//changing background colors of the h3 tags using for Each
let divs = document.querySelectorAll(".accordian-wrapper .accordian");
divs.forEach((x)=>x.style.backgroundColor="#e6ccff");
//making pargraphs visible
let para = document.querySelectorAll("accordian-wrapper .accordian p");
for(let i=para.length-1; i>1 i--){
    para[i].style.display="inline";
}



//To make h3 tags clickable
let lastaccordian = document.querySelectorAll(".accordian:last-child h3"); lastaccordian.forEach((element) => { element.addEventListener("click", () => { let para = element.nextElementSibling;
 if (para.style.display === "block");
 else { para.style.display = "hidden"; } }); });
```
## Task 2
 Add a new h3 with title "Skills" and a paragraph to it  and make the paragraph visible

 ![Q-2-2](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

## Solution

```javascript
//adding a new h3 with skills
let parent = document.querySelector(".accordian-wrapper");
let child= document.createElement("div");
parent.appendChild(child);
let h= document.createElement("h3");
child.appendChild(h);
h.innerText="Skills";
child.setAttribute("class","accordian");
//adding para
let para = document.createElement("p")
child.appendChild(para);
para.innerHTML="I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";
para.style.display="inline";
let divs= document.querySelectorAll(".accordian-wrapper .accordian");
divs.forEach((x)=>{x.style.backgroundColor="#e6ccff"});
```

***
## Assignment 3

## Task 1
Change the placeholder Values

![Q-3-1](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

## Solution:-

```javascript
document.querySelector(".enterName").placeholder="FSJS 2.0";
document.querySelector(".enterMail").placeholder="fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder="Hello";
document.querySelector(".userName").placeholder="FSJS 2.0";
document.querySelector(".userMail").placeholder="fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder="Hello";
```

***
## Assignment 4

## Tasks

- Change the background color and
- text color of the bottom of the card and 
- the character Names 

![](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

## Solution

```js
let arr= document.querySelectorAll(".clash-card__unit-stats");
let colors= ["#ffb366","#ff4dd2","#ff8c1a","#5cd65c","#4da6ff"];
//colors of bg
for(let i=0;i<arr.length;i++){
    arr[i].style.backgroundColor=colors[i];
}
//making text color-white
document.querySelectorAll(".no-border").forEach((item)=>{item.style.color="white"});

document.querySelectorAll(".no-border").forEach((item)=>{item.style.color="white"});

//changing character names
let archer= document.querySelectorAll(".archer div");
archer[2].innerHTML="Archer";
let golbinn= document.querySelectorAll(".goblin div");
golbinn[2].innerHTML= "The Goblin";
```
***

## Assignment 5

## Tasks
- Add "Pro subscription" button in the navbar
-    add Chinese(7) in recipie section
-  and change the color of the text in the main section and
-   add new card

![](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

## Solution:-

```js
//Pro subscription
let parent = document.querySelector(".nav-center");
let child = document.createElement("div");
let anchor =document.createElement("a");
anchor.innerText = "Pro Subscription";
parent.appendChild(child);
child.appendChild(anchor);
anchor.setAttribute("class","btn");
let recepies= document.querySelector(".tags-container div");

//chinese(7)
let nr= document.createElement("a");
nr.innerHTML= "Chinese(7)";
recepies.appendChild(nr);
let card= document.querySelector(".recipe-gallery");

//new card
let newcard= document.createElement("div");
newcard.setAttribute("class","card");
card.appendChild(newcard);
let innertex= document.createElement("a");
innertex.innerText="add 6th card here";
innertex.setAttribute("class","recipe-text");
newcard.appendChild(innertex);
//changing color of the text
let text= document.querySelectorAll(".recipe-text");
text.forEach((x)=>{x.style.color="#4d4dff"});
//changing the color of the last card to black
let el =document.querySelectorAll(" .card .recipe-text");
el[el.length-1].style.color="black";
```

***
## Assignment 6

## Tasks
- Add iNeuron logo at the top
- Change the price from $4 to $10
- Add a linkedin icon in the footer
  
![](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)
  ## Solution:-
```js
let image= document.querySelector(".logo");
image.src="./assets/ineuron-logo.png";
image.style.height="120px";
```
![](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

```js
//changing to $10
document.querySelector(".app_price span").innerHTML ="$10";
let foot = document.querySelector(".footer_social");
let child = document.createElement("div");
foot.appendChild(child);
//adding linkedin
let hlo = document.createElement("i")
hlo.setAttribute("class","fa-brands fa-linkedin");
child.appendChild(hlo);
```

***
## Assignment 7
## Task 1
Remove the names that have 2.0 in their name
![7-1](./DOM%20P7/DOM%20P7/ass7.1-after.png)

```js
let courses = document.querySelectorAll(".main__languages a");
for(let i=0;i<courses.length;i++){
    if(i%2!=0){
        courses[i].style.display="none"};
    }
```
## Task 2
- Enable input buttons
- change input placeholder
- When submitted it should refresh the page and the names of 2.0 should reapper

![](./DOM%20P7/DOM%20P7/ass7.2-after.png)

## Solution:-

```js
//changing input placeholder
let courses = document.querySelectorAll(".main__languages a");
    let inpt =document.querySelector(".main__form-input");
    inpt.placeholder="iNeuron";
 let btn = document.querySelector(".main__form-btn");
 //enable input and button
document.querySelector(".main__form-input").disabled= false;
 document.querySelector(".main__form-btn").disabled=false;
//  submission enabling
btn.onclick= function refresh(){
    for(let i=0;i<courses.length;i++){
        if(i%2!=0){
            courses[i].style.display="inline";
        }
    }
}
```

***
## Assignment 8
## Task 1
- Add paragraph , heading and horizontal line
- Make the aside section scrollable 
- add red border color

![](./DOM%20P8/DOM%20P8/ass8.1-after.png)
## Solution:-
```js
//adding paragraph, heading and horizontal line
let aside = document.querySelector("aside");
let line = document.createElement("hr");
let heading = document.createElement("h2");
let parag = document.createElement("p");
heading.innerText ="This is my custom Heading";
heading.setAttribute("class","new-head");
parag.innerText="This is a custom paragraph";
parag.setAttribute("class","new-p");
line.setAttribute("class","hr-line");
let arr=[line ,heading, parag];
for(let i=0;i<3;i++){
aside.appendChild(arr[i]);
}
// making scrollable
aside.style.overflow="scroll";

//adding red border
document.querySelector(".col-lg-4").style.border = "3px solid red";
```

## Task 2
- Remove background image

![](DOM%20P8/DOM%20P8/ass8.2-after.png)
## Solution:-
```js
document.body.style.backgroundImage="none";
```
## Task 3
Make menu clickable
![8-3](./DOM%20P8/DOM%20P8/ass8.3-after.png)

```js
let btn= document.querySelector(".navbar-toggler");
let show =document.querySelector("#navbarTogglerDemo01");
btn.addEventListener("click",function(){
    if(show.style.display=="none"){
        show.style.display ="block"
    }else{
        show.style.display="none" 
    }
   
    })
```

***
## Assignment 9
## Task 1
- Add cart image to the add to cart Button
- Change the color of the h3 tag
  
![](./DOM%20P9/DOM%20P9/ass9.1-after.png)

## Solution:-
```js
document.querySelector(".add-to-cart img").src="./images/icon-cart.svg";
document.querySelector(".caption .title").style.color="red";
```

## Task 2
- Change the colour of the button when mouse hovers

![](./DOM%20P9/DOM%20P9/ass9.2-after.png)

```js
let ele = document.querySelector(".add-to-cart");
//on hover changes color
ele.addEventListener("mouseover",function(){
    document.querySelector(".add-to-cart").style.backgroundColor="red";
});
//on hovering out it comes back to its original color
ele.addEventListener("mouseout",function(){
    document.querySelector(".add-to-cart").style.backgroundColor="hsl(158, 36%, 37%)";
})
```