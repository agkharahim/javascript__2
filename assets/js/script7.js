

for (i = 1; i < 100; i++) {
    let isPrime = true;
    if (i == 1){
        
        console.log("This number", i + " is not prime neither complex.");
    }

    for ( let j = 2; j <= i/2; j++) {
        if (i % j ==0){
            isPrime = false;

            // console.log(i);
            // break;
        }
    }

    if (isPrime){
        console.log("This number", i + " is prime.");
    }


    else {
        console.log("This number", i + " is complex.");
    }
}
