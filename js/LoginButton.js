function loginAdmin(){
    var login = document.getElementById('emailLogin').value;
    var password = document.getElementById('passwordLogin').value;

    if(login === "admin") {
        if(password === "admin"){
            redirectToAdminPage();
        } else {
            window.alert("Login ou senha incorreto");
        }
    } else {
        window.alert("Login ou senha incorreto");
    }
}

function redirectToAdminPage(){
    console.log("Cheguei");
    //Resolver o problema de encaminhamento para a página do administrador
    window.location.href = "../html/AdminPage.html";
    console.log("Saindo");
}