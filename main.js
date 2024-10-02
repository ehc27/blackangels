var email = ""
var password = ""

function verificar() {
    alert("verificando");
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    validarSenha()
    validarEmail()
}
function validarSenha() {
    senhaValidada = password.length;
    console.log(senhaValidada)
    if (senhaValidada > 3 && senhaValidada < 5) {
        alert("senha fraca")
    }
    else if (senhaValidada >= 6 && senhaValidada <= 7) {
        alert("senha média")
    }
    else if (senhaValidada >= 8 && senhaValidada <= 12){
        alert("senha forte")
    }
    else{
        alert("senha muito curta ou muito longa")
    }
}
function validarEmail() {
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        alert("email valido")
    }
    else{
        alert("email invalido!")
    }
}