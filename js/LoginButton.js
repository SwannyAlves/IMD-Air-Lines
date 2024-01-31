function handleLogin(event) {
  var login = document.getElementById("emailLogin").value
  var password = document.getElementById("passwordLogin").value

  if (login === "admin" && password === "admin") {
    redirectToAdminPage()
  } else {
    window.alert("Login ou senha incorreto")
    event.preventDefault()
  }
}

function redirectToAdminPage() {
  window.location.href = "adminPage.html"
}
