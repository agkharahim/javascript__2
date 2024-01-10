
let sum = 0;


for (let i = 100; i <= 999; i++) {

  if (i % 7 === 0 && i % 8 === 0) {
    sum += i;
  }
}


console.log("Sum of 3-digit numbers divisible by 7 and 8:", sum);
