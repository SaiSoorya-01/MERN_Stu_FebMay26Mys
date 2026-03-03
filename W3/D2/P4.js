//Conditional Statements
let age = 19;
if(age < 13){
    console.log("child");
}
else if(age<18){
    console.log("Teenager");
}
else
{
    console.log("Adult");
}

//Switch Statements
console.log("Switch Statements");
let day = "Wednesday";
switch(day){
    case "Monday":
        console.log("Start of the week");
        break;
case "Wednesday":
    console.log("Mid of the week");
    break;
case "Friday":
    console.log("End of the week");
    break;
default:
    console.log("some day in the week");
    break;
}
//Type conversion
let n = Number("ABC");
console.log("n:",n,"type of n: ",typeof n,"isNaN",isNaN(n));