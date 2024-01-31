var passengerReceived = sessionStorage.getItem("passengerData");
var passengers = JSON.parse(passengerReceived);
var passengerDataArray = []

for (var user of passengers) {
  passengerDataArray.push(user);
  console.log(user);
}

function salvarDados(event) {
  event.preventDefault()
  if (verificarPassageiroExistente()) {
    alert(
      "Esse passageiro já está cadastrado. Não é possível cadastrar novamente."
    )
    return
  }

  if (validarCampos()) {
    var nome = document.getElementById("registrationName").value
    var cpf = document.getElementById("registrationCpf").value
    var endereco = document.getElementById("registrationAddress").value
    var classe = document.querySelector(
      'input[name="ticketClass"]:checked'
    ).value

    var passageiro = {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
      classe: classe,
    }

    passengerDataArray.push(passageiro)

    limparCampos()

    alert("Passageiro cadastrado com sucesso!")
  } else {
    alert("Por favor, preencha todos os campos corretamente.")
  }
}

function verificarPassageiroExistente() {
  var nome = document.getElementById("registrationName").value
  var cpf = document.getElementById("registrationCpf").value

  var jsonData = sessionStorage.getItem("passengerData")
  if (jsonData) {
    var storedPassengers = JSON.parse(jsonData)
    if (
      storedPassengers.some(
        (passenger) => 
          (passenger.nome === nome && passenger.cpf === cpf) || 
          (passenger.nome !== nome && passenger.cpf === cpf)
      )
    ) {
      return true
    }
  }
  if (
    passengerDataArray.some(
      (passenger) => 
        (passenger.nome === nome && passenger.cpf === cpf) || 
        (passenger.nome !== nome && passenger.cpf === cpf)
    )
  ) {
    return true
  }

  return false
}

function enviarCadastro() {
  if (passengerDataArray.length > 0) {
    var jsonData = JSON.stringify(passengerDataArray)
    sessionStorage.setItem("passengerData", jsonData)
    passengerDataArray = []

    alert("Cadastros enviados com sucesso!")
  } else {
    alert(
      "Nenhum dado para enviar. Preencha o formulário e clique em 'SALVAR' primeiro."
    )
  }
}

function validarCampos() {
  var nome = document.getElementById("registrationName").value
  var cpf = document.getElementById("registrationCpf").value
  var endereco = document.getElementById("registrationAddress").value
  var classe = document.querySelector('input[name="ticketClass"]:checked')

  return (
    nome.trim() !== "" &&
    cpf.trim() !== "" &&
    endereco.trim() !== "" &&
    classe !== null
  )
}

function limparCampos() {
  document.getElementById("registrationName").value = ""
  document.getElementById("registrationCpf").value = ""
  document.getElementById("registrationAddress").value = ""
  document.querySelector('input[name="ticketClass"]:checked').checked = false
}
