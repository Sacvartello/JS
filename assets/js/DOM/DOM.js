//setTimeout
function tic() {
    console.log('tic');
}
setTimeout(tic,5000)

//setInterval
setInterval(tic, 2000);

//Рекурсивний варіант
const id = setTimeout(function tack() {
    tic()
    setTimeout(tack, 2000)
}, 2000);