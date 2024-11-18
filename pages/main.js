var email = ""
var password = ""
var resultadoSenha = ""
var resultadoEmail = ""

function verificar() {;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    validarSenha()
    validarEmail()
    login(

    )
}
function validarSenha() {
    senhaValidada = password.length;
    console.log(senhaValidada)
    if (senhaValidada > 3 && senhaValidada < 5) {
        resultadoSenha = "fraca"
        console.log(resultadoSenha)
    }
    else if (senhaValidada >= 6 && senhaValidada <= 7) {
        resultadoSenha = "média"
        console.log(resultadoSenha)
    }
    else if (senhaValidada >= 8 && senhaValidada <= 12){
        resultadoSenha = "forte"
        console.log(resultadoSenha)
    }
    else{
        resultadoSenha = "muito curta ou longa"
        console.log(resultadoSenha)
    }
}
function validarEmail() {
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        resultadoEmail = "válido"
        console.log(resultadoEmail)
    }
    else{
        alert("email invalido!")
    }
}
function login() {
    if (resultadoSenha === "fraca") {
        alert("login inválido, senha fraca")
    }
    else if (resultadoSenha === "muito curta ou longa"){
        alert("login inválido, senha muito curta ou longa")
    }
    else if (resultadoSenha === "forte" && resultadoEmail === "válido"){
        window.location.href = "tela2.html"
    }
    else if (resultadoSenha === "média" && resultadoEmail === "válido"){
        window.location.href = "tela2.html"
    }
}