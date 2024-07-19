//Arrey
const months = ['December', 'November', 'October'];
console.log(months)
for(i = 0; i < months.length; i++){
  console.log(months[i])
}

const numbers = [1, 3423, -523, -55.35509, 0]
for (i = 0; i < months.length; i++){
  if (numbers[i] > 0){
    console.log(numbers[i])
  }
}

const sumNum = [Math.random(), Math.random()]

console.log(sumNum)

const sum = calcSum(sumNum)
console.log(sum)
function calcSum(numbs){
  let sum = 0
  for(i = 0; i < sumNum.length; i++){
    sum += sumNum[i]
  }
  return sum
}