function calcule(){
    var velocidade = document.getElementById("velocidadeInicial").value;
    var altura = (velocidade**2)/20;
    var tempo = velocidade/10;
    document.getElementById("alturaMaxima").innerHTML = altura;
    document.getElementById("tempoTotal").innerHTML = tempo;
}