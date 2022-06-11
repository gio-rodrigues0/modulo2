// JAVA SCRIPT
//var listaInformations = [];
//var newInformation = {
//    information: ""
//};


//function addNewInformation(){
//    var discription = document.getElementById("information").value;
//    var informations = Object.create(newInformation);
//    informations.information = discription;
//    listaInformations.push(informations);
//    console.log(listaInformations);
//};

//function showInformation(){
//    var lista = "<table>";
//    for(var i=0 ; i<listaInformations.length ; i++) {
//        lista += "<tr>";
//        lista += "<td>" + listaInformations[i].information + "</td>";
//        lista += "</tr>";
//    };
//    lista += "</table>";
//    document.getElementById("lista").innerHTML = lista;
//};

//function addAndShow(){
//    console.log(listaInformations);
//    addNewInformation();
//    showInformation();
//}

//JQUERY
var listaInformations = [];
var newInformation = {
    information: ""
};

function addNewInformation(){
    var discription = $("#information").val();
    var informations = Object.create(newInformation);
    informations.information = discription;
    listaInformations.push(informations);
};

function showInformation(){
    var lista = "<table>";
    for(var i=0 ; i<listaInformations.length ; i++) {
        lista += "<tr>";
        lista += "<td>" + listaInformations[i].information + "</td>";
        lista += "</tr>";
    };
    lista += "</table>";
    $("#lista").html(lista);
};

function addAndShow(){
    addNewInformation();
    showInformation();
}
