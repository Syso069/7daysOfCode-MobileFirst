const botaoMenu = document.querySelector('.imagem__ponto-flutuante')
const menu = document.querySelector('.menuLateral')

botaoMenu.addEventListener('click',() => {
    menu.classList.toggle('menu__lateral-ativo')
})