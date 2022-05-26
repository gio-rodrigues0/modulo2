function soma(){
    var numeroUm = Number(document.getElementById("primeiroNumero").value);
    var numeroDois = Number(document.getElementById("segundoNumero").value);
    var resultado = numeroUm + numeroDois;
    document.getElementById("resultado").innerHTML = resultado;
}

function subtracao(){
    var numeroUm = Number(document.getElementById("primeiroNumero").value);
    var numeroDois = Number(document.getElementById("segundoNumero").value);
    var resultado = numeroUm - numeroDois;
    document.getElementById("resultado").innerHTML = resultado;
}

function multiplicacao(){
    var numeroUm = document.getElementById("primeiroNumero").value;
    var numeroDois = document.getElementById("segundoNumero").value;
    var resultado = numeroUm * numeroDois;
    document.getElementById("resultado").innerHTML = resultado;
}

function divisao(){
    var numeroUm = document.getElementById("primeiroNumero").value;
    var numeroDois = document.getElementById("segundoNumero").value;
    var resultado = numeroUm / numeroDois;
    document.getElementById("resultado").innerHTML = resultado;
}

function outraDivisao(){
    var numeroUm = document.getElementById("primeiroNumero").value;
    var numeroDois = document.getElementById("segundoNumero").value;
    var resultado = Math.floor(numeroUm / numeroDois);
    document.getElementById("resultado").innerHTML = resultado;
}

function porcentagem(){
    var numeroUm = document.getElementById("primeiroNumero").value;
    var numeroDois = document.getElementById("segundoNumero").value;
    var resultado = (numeroUm * numeroDois) / 100;
    document.getElementById("resultado").innerHTML = resultado;
}