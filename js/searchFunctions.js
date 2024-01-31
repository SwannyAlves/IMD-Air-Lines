var passengerReceived = sessionStorage.getItem("passengerData");
var passenger = JSON.parse(passengerReceived);
var arrayPassenger = [];

for (var user of passenger) {
    arrayPassenger.push(user);
    console.log(user);
}

function searchPassenger(){
    var selectSearch = document.getElementById('searchSelect').value;

    if (selectSearch === "cpf"){
        console.log("cpf");
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
    }
}

