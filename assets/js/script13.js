let text = prompt("Enter your text.");

for (i = 0; i < text.length; i++) {
    if( text[i] == "."){
        console.log(i);
        break;
    }
    
    else {
        console.log("There is not dot.");
        break;
    }
}


