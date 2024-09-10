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

//Task
const promise1 = new Promise(ex)

function ex (res){
    res('som')
}
promise1.then(function (data) {
    console.log(data);
}).then(function (secData){
    console.log(secData);
    throw new Error('No')
}).then(function(thirdData){
    console.log('ops..');
}).catch(function(err){
    console.log('err :>> ', err);
}).finally(()=>{
    console.log('all');
})