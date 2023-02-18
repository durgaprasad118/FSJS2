// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//  If it does not exist add to the countries list.

let countries =["India","USA","China","japan","Newzland","africa"];
if(countries.includes("Ethiopia")){
    console.log(countries);
}else{
    countries.push("Ethiopia");
    console.log("Added");
    console.log(countries);
}

/*Output=>
Added
[
  'India',    'USA',
  'China',    'japan',
  'Newzland', 'africa',
  'Ethiopia'
]
*/
