//Arguments
function res(operation){
  let oper
  if(operation=== '+'){
    oper = 0
    for(let i = 1; i < arguments.length; i++ ){
      oper += arguments[i]
    }
  } else if(operation === '*'){
    oper = 1
    for(let i = 1; i < arguments.length; i++ ){
      oper *= arguments[i]
    }
  } else {
    return undefined
  }
  return oper
}
const resOfOper = res('*',1,2,3,4,5,6)
console.log(resOfOper);
//Rest-параметри
function sum(...num) {
  function howToReduse(acum, item){
    return acum+item
  }
  const sum = num.reduce(howToReduse)
  return sum
}
const res1 = sum(1,2,3,4,5,6)
console.log('res1 :', res1);
//Arrow function

//Повний варіант
// const fullAge = (age)=>{
//   if (age >= 18){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(fullAge(18));

//Скорочений варіант
const fullAge = age=> age >= 18
console.log(fullAge(18));

//Привітання на різних мовах
const greetingOptions = {
  en: 'Hello',
  ua: 'Вітаю',
  fr: 'Bonjue'
}
const greeting = (lang, userName) => `${greetingOptions[lang]} ${userName}`

console.log(greeting('en', 'Test'));
console.log(greeting('ua', 'Vova'));
console.log(greeting('fr', 'Francisco'));