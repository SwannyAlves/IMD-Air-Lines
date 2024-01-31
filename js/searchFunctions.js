var arrayPassenger = [];

function passengerJSON(){
    var passengerReceived = sessionStorage.getItem("passengerData");
    var passengers = JSON.parse(passengerReceived);

    for (var user of passengers) {
        arrayPassenger.push(user);
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
        allPassenger();
    }

    arrayPassenger = [];
}

function allPassenger(){
    printPassengers(arrayPassenger);
}

function firstClass(){
    printPassengers(filterUsers("classe", "firstClass"));
    return;
}

function secondClass(){
    printPassengers(filterUsers("classe", "secondClass"));
    return;
}

function thirdClass(){
    printPassengers(filterUsers("classe", "thirdClass"));
    return;
}

function searchCpf() {
    var cpf = document.getElementById('searchCpf').value;

    if (cpf === ""){
        alert("Você precisa digitar o cpf para realizar a busca por cpf.");
        return;
    } else {
        printPassengers(filterUsers("cpf", cpf));  
        return;
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
    passengerDiv.innerHTML = "";

    for (var user of passengerFilter) {
        var newParagraph = document.createElement('p');

        var paragraphText = document.createTextNode(
            `Nome: ${user.nome} CPF: ${user.cpf} Endereço: ${user.endereco} Classe: ${user.classe}`
        );

        newParagraph.appendChild(paragraphText);
        passengerDiv.appendChild(newParagraph);
    }

    return;
}