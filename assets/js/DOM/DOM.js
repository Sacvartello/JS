const menuContainer = document.querySelector('.menu-container')

function change(event){
    event.stopPropagation()
    event.currentTarget.classList.toggle('change')
    showMenu(event)
}
function showMenu(event){
    const sideMenu = document.querySelector('.side-menu')
    sideMenu.classList.toggle('show')
}
menuContainer.addEventListener('click', change, true)