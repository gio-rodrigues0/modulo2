function check() {
  let n = Number(document.getElementById("number").value);

  let initialValue = 1;
  let currentValue = initialValue;

  let fibonacci = [1, 1]

  for(let i = 2; i < n; i++) {
      currentValue =  fibonacci[i - 1] + fibonacci[i - 2]
      fibonacci.push(currentValue)
  }
  
  document.getElementById("result").innerHTML = fibonacci.join(", ")
}