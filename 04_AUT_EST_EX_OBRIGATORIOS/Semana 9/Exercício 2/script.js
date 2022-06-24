function sum() {
    let number = document.getElementById("number").value;
    let digit = number.split('');
    let sumArray = 0;
    let numberArray = [];

    for (let i = 0; i < digit.length; i++) {
        numberArray.push(Number(digit[i]));
        sumArray += numberArray[i];
    }

    document.getElementById("result").innerHTML = sumArray;
}