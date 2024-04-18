const typed = new Typed(".multiple-text", {
  strings: [
    "(quase) <span>Front-End Developer</span>",
    "<span>Content Marketing</span>",
    "<span>Growth Hacker</span>",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Função para alternar a visibilidade da barra de navegação
function toggleNavbar() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}

// Adicionando evento de clique ao ícone do menu
document.getElementById("menu-icon").addEventListener("click", toggleNavbar);
