var passengerReceived = sessionStorage.getItem("passengerData");
var passengers = JSON.parse(passengerReceived);
var arrayPassenger = [];

function passengerJSON(){
    for (var user of passengers) {
        arrayPassenger.push(user);
        //console.log(user);
    }
}

function searchPassenger(){
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
    for (var user of arrayPassenger) {
        console.log(user.nome);
    }
}

function firstClass(){
    var passengerFilter = filterUsers("classe", "firstClass");
    for (var user of passengerFilter) {
        console.log(user);
    }
}

function secondClass(){
    var passengerFilter = filterUsers("classe", "secondClass");
    for (var user of passengerFilter) {
        console.log(user);
    }
}

function thirdClass(){
    var passengerFilter = filterUsers("classe", "thirdClass");
    for (var user of passengerFilter) {
        console.log(user);
    }
}

function searchCpf() {
    var cpf = document.getElementById('searchCpf').value;

    if (cpf === ""){
        alert("Você precisa digitar o cpf para realizar a busca por cpf.");
        return;
    } else {
        var passengerFilter = filterUsers("cpf", cpf);
        for (var user of passengerFilter) {
            console.log(user);
        }
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

