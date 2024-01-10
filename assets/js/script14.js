let userInput = prompt("Enter some text:");

if (/\d/.test(userInput)) {
    console.log("There is number(s) in the input");
}

else {
    console.log("There is not number(s) entered in the input");
}




