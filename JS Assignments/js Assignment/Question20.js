/*
 In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
console.log(shoppingCart);//[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
shoppingCart.splice(4,1);
console.log(shoppingCart);//[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
shoppingCart[3]="Green Tea";
console.log(shoppingCart);//[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]