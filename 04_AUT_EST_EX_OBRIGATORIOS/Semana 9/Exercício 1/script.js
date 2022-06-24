function check() {
    let number = document.getElementById("number").value;
    let digits = number.split('');
    let result = "";

    //verifica se o número é par
    if (digits[0] % 2 == 0) {
        result = "Número par";
    }

    //verifica se o número é ímpar
    else {
        result = "Número ímpar";
    }
    document.getElementById("result").innerHTML = result;
}