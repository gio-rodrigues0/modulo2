function putInOrder() {
let firstWord = document.getElementById("firstWord").value;
let secondWord = document.getElementById("secondWord").value;
let thirdWord = document.getElementById("thirdWord").value;
let words = [firstWord, secondWord, thirdWord];

words.sort();

document.getElementById("result").innerHTML = words
}