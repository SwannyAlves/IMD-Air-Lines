var arrayPassenger = []

function passengerJSON() {
  var passengerReceived = sessionStorage.getItem("passengerData")
  var passengers = JSON.parse(passengerReceived)

  for (var user of passengers) {
    arrayPassenger.push(user)
  }
}

function clearResults() {
  var passengerDiv = document.getElementById(
    "search-container_search-passenger"
  )
  passengerDiv.innerHTML = ""
}

function toggleCPFInput() {
  var select = document.getElementById("searchSelect")
  var cpfContainer = document.getElementById("cpfContainer")

  if (select.value === "cpf") {
    clearResults()
    cpfContainer.style.display = "block"
  } else {
    cpfContainer.style.display = "none"
  }
}
function loadAllPassengers() {
  passengerJSON()
  allPassenger()
  arrayPassenger = []
}

function searchPassengerCpf(event) {
  event.preventDefault()
  passengerJSON()
  var selectSearch = document.getElementById("searchSelect").value

  if (selectSearch === "cpf") {
    searchCpf()
  }
  arrayPassenger = []
}

function searchPassengerSelect(event) {
  event.preventDefault()
  passengerJSON()
  var selectSearch = document.getElementById("searchSelect").value

  toggleCPFInput()

  if (selectSearch === "primeiraClasse") {
    firstClass()
  } else if (selectSearch === "segundaClasse") {
    secondClass()
  } else if (selectSearch === "terceiraClass") {
    thirdClass()
  } else if (selectSearch === "cpf") {
    return
  } else {
    allPassenger()
  }

  arrayPassenger = []
}

function allPassenger() {
  printPassengers(arrayPassenger)
}

function firstClass() {
  printPassengers(filterUsers("classe", "firstClass"))
  return
}

function secondClass() {
  printPassengers(filterUsers("classe", "secondClass"))
  return
}

function thirdClass() {
  printPassengers(filterUsers("classe", "thirdClass"))
  return
}

function searchCpf() {
  var cpf = document.getElementById("searchCpf").value

  if (cpf === "") {
    alert("Você precisa digitar o cpf para realizar a busca por cpf.")
    return
  } else {
    printPassengers(filterUsers("cpf", cpf))
    return
  }
}

function filterUsers(filter, arg) {
  var passengerFilter
  if (filter === "cpf") {
    passengerFilter = arrayPassenger.filter(
      (passenger) => passenger.cpf === arg
    )
  } else {
    passengerFilter = arrayPassenger.filter(
      (passenger) => passenger.classe === arg
    )
  }
  return passengerFilter
}

function printPassengers(passengerFilter) {
  var passengerDiv = document.getElementById(
    "search-container_search-passenger"
  )
  passengerDiv.innerHTML = ""

  for (var user of passengerFilter) {
    var resultDiv = document.createElement("div")
    resultDiv.classList.add("result")

    for (var key in user) {
      var labelDiv = document.createElement("div")
      labelDiv.classList.add("result--passenger")

      var labelSpan = document.createElement("span")
      labelSpan.classList.add("label")
      var labelTextNode = document.createTextNode(`${key}:`)
      labelSpan.appendChild(labelTextNode)

      var valueSpan = document.createElement("span")
      valueSpan.classList.add("value")

      var classValue = key === "classe" ? getClasseLabel(user[key]) : user[key]

      var valueTextNode = document.createTextNode(` ${classValue}`)
      valueSpan.appendChild(valueTextNode)

      labelDiv.appendChild(labelSpan)
      labelDiv.appendChild(valueSpan)
      resultDiv.appendChild(labelDiv)
    }

    passengerDiv.appendChild(resultDiv)
  }

  return
}

function getClasseLabel(classValue) {
  switch (classValue) {
    case "firstClass":
      return "1ª Classe"
    case "secondClass":
      return "2ª Classe"
    case "thirdClass":
      return "3ª Classe"
    default:
      return classValue
  }
}

loadAllPassengers()
