//Створення Елементів
// const elem = document.createElement('button')
// const section = document.querySelector('section')
// elem.textContent = 'text'
// section.append(elem)

//Task
const section = document.createElement('section')
const btn = document.createElement('button')
const p = document.createElement('p')
const body = document.body
p.textContent = 'text'
btn.textContent = 'click'
body.append(section)
section.append(p,btn)

//Події Task
const newP = document.querySelector('#p')
newP.addEventListener('click', click)
function click(){
    alert('ха-ха-ха, попався! На текст клікати не можна')
}