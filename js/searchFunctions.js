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
    }

    else if (selectSearch === "primeiraClasse") {
        console.log("primeira");
    }

    else if (selectSearch === "segundaClasse") {
        console.log("segunda");
    }

    else if (selectSearch === "terceiraClass") {
        console.log("terceira");
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


