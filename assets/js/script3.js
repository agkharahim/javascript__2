let num = prompt("Please enter a number");

let sum = 0;


for (let i = 100; i <= 999; i++) {
    if (i % num ==0) {
        sum +=i; 
    }
}

console.log(sum);