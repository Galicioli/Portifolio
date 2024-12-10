///// Animações com GSAP (biblioteca externa)
gsap.from("h1", { duration: 1, y: -100, opacity: 0 });
gsap.from("img", { duration: 1, scale: 0, opacity: 0, stagger: 0.3 });

//// Carrossel de Imagens - Mudar imagens a cada 3 segundos
let index = 0;
const images = document.querySelectorAll('.carousel img');
function changeImage() {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
    index = (index + 1) % images.length;
}
setInterval(changeImage, 3000);
changeImage();

////// Validação de Formulário
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Todos os campos são obrigatórios!");
    } else {
        alert("Mensagem enviada com sucesso!");
        this.reset();
    }
});

/////// Menu Hambúrguer - Responsividade
const menuToggle = document.createElement("button");
menuToggle.innerHTML = "☰";
menuToggle.classList.add("menu-toggle");
document.querySelector("header").appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
});