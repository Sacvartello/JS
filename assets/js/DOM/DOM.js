//Task
const section = document.querySelector('section')
const article = document.querySelector('article')
function count(event){
    article.textContent = `X: ${event.x} Y: ${event.y}`
}
section.addEventListener('click', count)