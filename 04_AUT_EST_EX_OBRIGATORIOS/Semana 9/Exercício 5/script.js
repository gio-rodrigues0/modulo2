function check() {
    let firstNumber = document.getElementById("firstNumber").value;
    let lastNumber = document.getElementById("lastNumber").value;

    let primes = '';

    for(let number = firstNumber; number <= lastNumber; number++) {
        if(isPrime(number)) {
            primes += number + " ";
        }
    }
    
    document.getElementById("result").innerHTML = primes;
}

function isPrime(number) {
    for(let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}