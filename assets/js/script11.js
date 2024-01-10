let gender = prompt("Enter your gender: (Note: M or F)")
let name = prompt("Enter your name:")

switch (gender) {
    case 'M':
    case 'm':
    case 'male':
        console.log("So you are a male.");    
        console.log("Welcome Mr." + name );
            break;

    case 'F':
    case 'f':
        console.log("So you are a female."); 
        console.log("Welcome Mrs." + name);
            break;

    default:
        console.log("Please enter valid gender and dont forget to enter only letters, M or F");
        break;

}