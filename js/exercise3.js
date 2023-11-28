let count = 0;
let number = 2;

while(count < 20) {
    let isPrime = true;
    for(let i = 2; i < Math.sqrt(number); i++){
        if (number % i === 0){
        isPrime = false;
        break;
        }
        if (isPrime === true) {
            console.log(number);
            count++;
        }
    }
    number++;
}