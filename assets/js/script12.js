let text = prompt("Enter a text to display in the console.");

let reversedText = "";

for (i = text.length - 1; i >= 0; i--){
    reversedText += text[i];
    // console.log(text[i]);
}

console.log(reversedText);    
