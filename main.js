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
const produtos = [
    { nome: "Notebook Acer Aspire 5", preco: "R$ 3.699", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Dell Inspiron", preco: "R$ 4.488", img: "https://images.pexels.com/photos/411183/pexels-photo-411183.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Asus VivoBook", preco: "R$ 5.999", img: "https://images.pexels.com/photos/3560567/pexels-photo-3560567.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook HP Pavilion", preco: "R$ 6.199", img: "https://images.pexels.com/photos/12128117/pexels-photo-12128117.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Lenovo Ideapad", preco: "R$ 5.499", img: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Gamer MSI", preco: "R$ 8.799", img: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Samsung Galaxy Book", preco: "R$ 4.799", img: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Acer Aspire 5", preco: "R$ 3.699", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Dell Inspiron", preco: "R$ 4.488", img: "https://images.pexels.com/photos/411183/pexels-photo-411183.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Asus VivoBook", preco: "R$ 5.999", img: "https://images.pexels.com/photos/3560567/pexels-photo-3560567.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook HP Pavilion", preco: "R$ 6.199", img: "https://images.pexels.com/photos/12128117/pexels-photo-12128117.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Lenovo Ideapad", preco: "R$ 5.499", img: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Gamer MSI", preco: "R$ 8.799", img: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
    { nome: "Notebook Samsung Galaxy Book", preco: "R$ 4.799", img: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=300&h=200" },
  ];

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
      disableOnInteraction: false,
      },
    });