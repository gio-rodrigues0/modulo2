var listaInformations = [];
var newInformation = {
    information: ""
};

function addNewInformation(){
    var discription = document.getElementById("informartion").value;
    var informations = Object.create(newInformation);
    informations.information = discription;
    listaInformations.push(newInformation);
    var lista = "<ul>";
    for(var i=0 ; i<listaInformations.length ; i++){
        lista=document.createElement("li");
        lista.innerHTML=listaInformations[i];
        listElement.appendChild(lista);

    }
    lista += "</ul>"
    document.getElementById("infoList").innerHTML = lista;
}