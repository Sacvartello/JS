const sym1 = Symbol(444) //symbol
console.log(sym1);
const obj = {
    jdi : 444,// звич змінна
    sym : Symbol(444) //symbol
}
const obj1 = {
    firstN: 'Test',
    lastN: 'Bobovych'
}
const obj2 = {
    age : 20,
    password: 'qwerty12345678'
}
let obj3 = {...obj1, ...obj2}
console.log(obj3);