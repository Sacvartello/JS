//Task
const section = document.querySelector('section')
const article = document.querySelector('article')
function count(event){
    if (event.target === event.currentTarget) {
        const div = event.target.children.box
        article.textContent = `X: ${event.x} Y: ${event.y}`
        const w = event.x - (div.offsetWidth/2)
        const h = event.y - (div.offsetHeight /2)
        div.style.top = `${h}px`
        div.style.left = `${w}px`
    }
}   
section.addEventListener('click', count)