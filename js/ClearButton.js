function clearInputs() {
  document.getElementById("emailLogin").value = ""
  document.getElementById("passwordLogin").value = ""
}

function limparCampos(event) {
  event.preventDefault()
  document.getElementById("registrationName").value = ""
  document.getElementById("registrationCpf").value = ""
  document.getElementById("registrationAddress").value = ""
  document.querySelector('input[name="ticketClass"]:checked').checked = false
}
