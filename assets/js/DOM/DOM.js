//Task
const section = document.querySelector('section')
const div = document.querySelector('div')
const article = document.querySelector('article')
//V1
// function count(event){
//     if (event.target === section) {
//         article.textContent--
//     }
//     if (event.target === div && event.target === event.currentTarget) {
//         article.textContent++
//     }
// }
// div.addEventListener('click', count)
// section.addEventListener('click', count)

//V2
function handler(event){
    if (event.target === event.currentTarget) {
        dicrement()
    } else {
        increment()
    }
}
let count1 = 0
function increment(){
    count1++
    article.textContent = count1
}
function dicrement(){
    count1--
    article.textContent = count1
}
section.addEventListener('click', handler)

// function showModal(){
//     section.style.display = 'flex'
//     modal.style.display = 'block'
// }

// function closeModal(){
//     section.style.display = 'none'
//     modal.style.display = 'none'
// }
// showBtn.addEventListener('click',showModal)
// closeBtn.addEventListener('click',closeModal)
// section.addEventListener('click',closeHandler)
// function closeHandler(event){
//     if (event.target === event.currentTarget) {
//         closeModal()
//     }
// }