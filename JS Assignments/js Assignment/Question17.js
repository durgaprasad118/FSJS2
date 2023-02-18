//Write a program which tells the number of days in a month.

let month="February";
if(month=="January" || month=="March" || month=="May" || month=="July" || 
month=="August" || month=="October" || month=="December")
{
     console.log("31 days");
}
else if(month=="April" || month=="June" || month=="September" || month=="November")
{
    console.log("30 days");
}
else if(month=="February")
{
    console.log("28/29 days");
}

//Output=> 28/29 days