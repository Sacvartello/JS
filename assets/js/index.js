//Рядки
function getInitials (name){
  const space = name.indexOf(' ')
  return (name[0] + name.slice(space + 1, space + 2)).toUpperCase()
}

const initial = getInitials('vova borovyk')
console.log(initial);
//Лексичне оточення. Замикання
function counter (){
  let i = 0;

  return function (){
    return ++i
  }
}
const counter1 = counter()
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
const counter2 = counter()
console.log('counter2() :>> ', counter2());