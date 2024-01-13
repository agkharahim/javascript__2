let sum = 0;
let multiple = 1;

for (i = 1; i < 100; i++) {
    if ( i % 2 == 0){
        sum += i;
        multiple *= i;
        console.log(i);
    }
}
console.log(sum);
console.log(multiple);