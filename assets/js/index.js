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

//Методи масивів
const num = [10, 20]
console.log(num);
num.pop()
console.log(num);
num.push(30)
console.log(num);
num.shift()
console.log(num);
num.unshift(5)
console.log(num);

const num2 = [100, 200, 300, 400, 500]
console.log(num2);
const num2Part1 = num2.slice(0, 3)
console.log(num2Part1);
const num2Part2 = num2.slice(3, 5)
console.log(num2Part2);
num2.splice(0, 2, 150, 250)
console.log(num2);

//Методи перебору масивів
const arrey1 = [1,2,3,4,5]
arrey1.forEach(function nFunc (item, index, arrey1){
  console.log(`item[${index}] = ${item}`);
  console.log(arrey1);
})

function xFunc(item){
  return item**2
}
const Fmap = arrey1.map(xFunc)
console.log(Fmap);

const numers = [52,69,1488,1161]
function isOdd (item){
  return item % 2 === 1
}
const arrOdd = numers.filter(isOdd)
console.log(arrOdd);

function find1488 (item){
  return item === 1488
}
const num1488 = numers.filter(find1488)
console.log(num1488);