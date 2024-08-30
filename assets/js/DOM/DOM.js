const btn = document.querySelector('#btn')
function newElement() {
    const newEl = document.createElement('div')
    const body = document.body
    newEl.className = 'red-circle'
    body.append(newEl)
    // newEl.style.width = '80px'
    // newEl.style.height = '80px'
    // newEl.style.backgroundColor = 'red'
    // newEl.style.borderRadius = '50%'

    function makeGreen(event){
        const cl = event.target.classList
        cl.toggle('green-square')
        // newEl.style.backgroundColor='green'
        // newEl.style.borderRadius = '0'
    }

    newEl.addEventListener('click', makeGreen)
}
btn.addEventListener('click', newElement)