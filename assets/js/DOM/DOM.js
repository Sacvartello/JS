const form = document.querySelector('form')

function handler1(event){
    event.preventDefault()
    const form = event.target
    const inputUserName= form.user.value
    console.log(inputUserName);
}

form/addEventListener('submit', handler1)

