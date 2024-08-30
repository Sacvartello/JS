const btn = document.querySelector('#btn')
function newElement() {
    const newEl = document.createElement('div')
    const body = document.body
    body.append(newEl)
    newEl.style.width = '80px'
    newEl.style.height = '80px'
    newEl.style.backgroundColor = 'red'
    newEl.style.borderRadius = '50%'

    function makeGreen(){
        newEl.style.backgroundColor='green'
        newEl.style.borderRadius = '0'
    }

    newEl.addEventListener('click', makeGreen)
}
btn.addEventListener('click', newElement)