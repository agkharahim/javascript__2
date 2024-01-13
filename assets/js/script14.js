let text = prompt("Please enter a random text.");

let hasDigit = false;

for (i = 0; i < text.length; i++) {
    if (text[i] >= "0" && text[i] <= "9" ) {
        hasDigit = true;
        break;
    }
}

if (hasDigit){
    console.log("There is a digit in that text.");
}

else {
    console.log("There is no digit in that text");
}




