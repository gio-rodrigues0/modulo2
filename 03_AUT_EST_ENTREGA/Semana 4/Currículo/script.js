var listaInformations = [];
var newInformation = {
    information: ""
};

function addNewInformation(){
    var discription = document.getElementById("informartion").value;
    var informations = Object.create(newInformation);
    informations.information = discription;
    listaInformations.push(newInformation);
    }

function showInformation(){
    var lista = "<table>";
    for(var i=0 ; i<listaInformations.length ; i++) {
        lista += "<tr>";
        lista += "<td>" + listaInformations[i].information + "</td>";
        lista += "</tr>";
    }
    lista += "</table>"
    document.getElementById("lista").innerHTML = lista;
}