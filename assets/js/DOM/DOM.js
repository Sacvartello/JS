const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', function ({target}) {
        target.classList.add(target.dataset.class)
    })
})