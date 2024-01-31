var passengerReceived = sessionStorage.getItem("passengerData");
var passengers = JSON.parse(passengerReceived);
var arrayPassenger = [];

function passengerJSON(){
    for (var user of passengers) {
        arrayPassenger.push(user);
        //console.log(user);
    }
}

function searchPassenger(event){
    event.preventDefault();
    passengerJSON();
    var selectSearch = document.getElementById('searchSelect').value;

    if (selectSearch === "cpf"){
        searchCpf();
    }

    else if (selectSearch === "primeiraClasse") {
        firstClass();
    }

    else if (selectSearch === "segundaClasse") {
        secondClass();
    }

    else if (selectSearch === "terceiraClass") {
        thirdClass();
    }

    else{
        console.log("todos");
        allPassenger();
    }
}

function allPassenger(){
    printPassengers(arrayPassenger);
}

function firstClass(){
    printPassengers(filterUsers("classe", "firstClass"));
}

function secondClass(){
    printPassengers(filterUsers("classe", "secondClass"));
}

function thirdClass(){
    printPassengers(filterUsers("classe", "thirdClass"));
}

function searchCpf() {
    var cpf = document.getElementById('searchCpf').value;

    if (cpf === ""){
        alert("Você precisa digitar o cpf para realizar a busca por cpf.");
        return;
    } else {
        printPassengers(filterUsers("cpf", cpf));  
    }
}

function filterUsers(filter, arg){
    var passengerFilter; 
    if (filter === "cpf") {
        passengerFilter = arrayPassenger.filter(passenger => passenger.cpf === arg);
    } 
    
    else {
        passengerFilter = arrayPassenger.filter(passenger => passenger.classe === arg);
    }
    return passengerFilter;
}

function printPassengers(passengerFilter){
    var passengerDiv = document.getElementById('search-container_search-passenger');
    while(passengerDiv.firstChild) {
        console.log("aqui")
        console.log(passengerDiv.firstChild);
    }

    for (var user of passengerFilter) {
        var newParagraph = document.createElement('p');

        var paragraphText = document.createTextNode(
            `Nome: ${user.nome} CPF: ${user.cpf} Endereço: ${user.endereco} Classe: ${user.classe}`
        );

        newParagraph.appendChild(paragraphText);
        passengerDiv.appendChild(newParagraph);
    }
}
