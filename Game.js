var secretNumber = 4;
var guess = Number(prompt("Guess a number : "));
if(guess===secretNumber)
{
	alert("You got it right !");
}
else if(guess>secretNumber) {
	alert("The no is higher");
}
else{
	alert("The no is lower");
}
