//Arrow Function
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