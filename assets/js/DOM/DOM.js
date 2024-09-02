const btns = document.querySelectorAll('button')

btns[0].addEventListener('click', function (event) {
    console.log(event.target.dataset.abraCadabra);
})