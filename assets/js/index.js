//Рекурсія
function factorial(n){
  if (n===0){
    return 1
  }
  return n * factorial(n-1)
}
const f4 = factorial(4)
console.log(f4);
//Обробка помилoк

//try, catch
try {
  const a = 8
  console.log(a);
  const c = a + b
  console.log(b);
} catch (err){
  console.log('err :>> ', err);
}


console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
//Практика
function realAge (age){
  if(typeof age !== 'number'){
    throw new TypeError('age must be a number!')
  }
  if (age < 0){
    throw new RangeError('age must be a positive number!')
  }
  return age
}
try{
  console.log(realAge(7));
} catch (err){
  console.log(err);
}