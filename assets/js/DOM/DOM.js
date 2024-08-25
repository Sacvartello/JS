//Події
// const nListBtn = document.querySelectorAll('button')
// for (const btn of nListBtn) {
//     btn.addEventListener('click', click)
// }
// function click(event){
//     console.log(event.target.textContent);
// }

//Task
// const nListBtn2 = document.querySelectorAll('button')
// for (const btn of nListBtn2) {
//     btn.addEventListener('click', color)
// }

// function color (event){
//     event.target.style.color = `${event.target.textContent}`
// }

//2
const nListBtn3 = document.querySelectorAll('button')
for (const btn of nListBtn3) {
    btn.addEventListener('click', text)
}
function text (event){
    console.log(event.target.textContent);
    event.target.removeEventListener('click', text)
}