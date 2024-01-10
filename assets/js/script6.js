console.log("The first 3-digit number divisible by 7 and 8:");

for (let i = 100; i <= 999; i++) {

    if (i % 7 == 0 && i % 8 == 0) {
        console.log(i);
        break;
    }
    
  }