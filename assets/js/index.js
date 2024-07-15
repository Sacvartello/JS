function myFunction (userName){
  const greeting = `Hi, ${userName}`
  return greeting
}
myFunction("me")
myFunction('oooo')
const a = myFunction('Ivo');
console.log('a:', a)

function pow (a, b){
  return a**b
}
const result = pow(4, 5)
console.log(result)

function sumFromAToB (from, to){
  let sum = 0
  for(i=from; i<= to; i++){
    sum += i
  }
  return sum
}
console.log(sumFromAToB(1, 6))