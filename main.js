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
        alert("email inválido!")
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
// Dados fictícios para produtos com novas imagens de notebooks

// Seleciona o contêiner do carrossel
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Adiciona dinamicamente os produtos
produtos.forEach(produto => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `
    <img src="${produto.img}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>${produto.preco}</p>
  `;
  // Adiciona o evento de clique
  slide.addEventListener('click', () => {
    console.log(`ID: ${produto.id}, Nome: ${produto.nome}`);
  });
  swiperWrapper.appendChild(slide);
});

// Inicializa o Swiper.js
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
var carrinho = []
function adicionarCarrinho(id) {
    var produto = produtos.find(p => p.id === id)
    carrinho.push(produto);
    console.log(carrinho)
}