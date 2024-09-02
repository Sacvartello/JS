const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', function ([target]) {
        target.style.backgroundColor = `${target.dataset.color}`
    })
})