const myPromise = new Promise(executer)

function executer(good, bad) {
    let res
    if (Math.random() > 0.5) {
        res = ":)"
        good(res)
    } else {
        res = ':('
        bad(res)
    }
}
myPromise.then(function (data) {
    console.log('result:', data);
}, function (data) {
    console.log('error:', data);
})

console.log(myPromise);