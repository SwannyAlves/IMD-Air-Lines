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
        console.log("cpf");
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

function filterUsers(filter, arg){
    if (filter === "cpf") {
        console.log("filter = cpf")
    } else {
        var passengerFilter = arrayPassenger.filter(passenger => passenger.classe === arg);
        return passengerFilter;
    }
    
}

