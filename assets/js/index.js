//Об'єкти
const obj1 = {
  userName: 'Fred',
  phoneNumber: 9877772622,
  age: 18,
  password: 'qwerty'
}
console.log(obj1)

const see = obj1.age
console.log(obj1)

obj1.age = 26
console.log(obj1)

obj1.email= 'djjnco@gmail.com'
console.log(obj1)

delete obj1.password
console.log(obj1)


const car = {
  mark: 'Toyota',
  model: 'Stolen',
  ageOfCar: 2017,
  numbers: 'AI1764CS',
  color: 'red'
}
console.log(car)

car.color = 'white'
delete car.ageOfCar
car.manName = 'Fred'
console.log(car)

const obj2 = {
  firstName: 'Ted',
  lastName: 'Jonaphen',
  phoneNumber: 9877772622,
  age: 18,
  password: 'qwerty',
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  },
  changeAge(newAge){
    this.age = newAge
  }
}

const userFullName = obj2.getFullName();
console.log(userFullName)

obj2.changeAge('19')
console.log(obj2)

for(let prop in car){
  console.log(`car.${prop} = ${car[prop]}`)
}