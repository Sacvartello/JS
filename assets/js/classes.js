class User1{
    constructor (name,surname,age,password,email,isAdult){
        this._name = name
        this._surname = surname
        this.age = age
        this._password = password
        this._email = email
        this._isAdult = isAdult
    }
    set age(value){
        if(typeof value !== 'number'){
            throw new TypeError('age must be a number!')
        } else if(value <0 || value > 150){
            throw new RangeError('age must be between 0 and 150')
        }else{
            this._age = value
        }
    }
    get age(){
         return this._age
     }
    getFullname(){
        return `${this._name} ${this._surname}`
    }
}
try{
    const user1 = new User1(
        'Jack',
        'Horihovych',
        50,
        1234567890,
        'rewnw09@gmail.com',
        true
    )
    console.log(user1.getFullname());
    user1.age = 18
    console.log(user1);
    
} catch (err){
    console.log('err :>> ', err);
}
// class Phone{
//     constructor (brand, model, color, price, year){
//         this.brand = brand
//         this.model = model
//         this.color = color
//         this.price = price
//         this.year = year
//     }
//     get calcPhoneAge(){
//         return 2024 - this.year
//     }
// }
// const phone1 = ('Samsung','Model5','white',12000, 2021)
// console.log(phone1.calcPhoneAge());
class Phone {
    constructor(brand, model, color, price, year) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.price = price;
      this.year = year;
    }
    calcPhoneAge() {
      return new Date().getFullYear() - this.year;
    }
}
  
const phone1 = new Phone('Samsung', 'Model1', 'white', 12000, 2021);
console.log(phone1.calcPhoneAge());

//Інкансуляція
class User2{
    constructor(fullName){
        [this._firstName, this._lastName] = fullName.split(' ')
    }
    set fullName (v){
        [this._firstName, this._lastName] = v.split(' ')
    }
    get fullName (){
        return `${this._firstName} ${this._lastName}`
    }
}
const us1 = new User2('Grud Pasovych')
us1.fullName = 'Mukola Turtkovych'
console.log(us1.fullName);

//Спадкування
class User3 {
    constructor(fname, surname, age, isMale, email) {
      this._firstName = fname;
      this._lastName = surname;
      this._age = age;
      this._isMale = isMale;
      this._email = email;
      this._isBanned = false;
    }
    getFullName() {
      return `${this._firstName} ${this._lastName}`;
    }
}
  
const user1 = new User3('Test', 'Testovych', 15, true, 'test@mail.com');
const user2 = new User3('User', 'Userovych', 17, false, 'user@mail.com');
user1.getFullName()

class Moderator extends User3{
    constructor (fname,surname,age,isMale,email,permissions){
        super(fname, surname, age, isMale, email);
    this._permissions = permissions;
    }
    sendMessage(user, message) {
        console.log(
          `Moderator ${this._firstName} send message "${message}" to user ${user._firstName}`
        )
    }
}
const moderator = new Moderator('Mod', 'Modovych', 25, false, 'mod@mail.com', {
    bann: false,
    readPrivate: false,
    sendMessage: true,
});
  
console.log(moderator.getFullName());
moderator.sendMessage(user1, 'Hello');
//Практика
class Admin extends Moderator{
    constructor(fname,surname,age,isMale,email,permissions,category){
        super(fname,surname,age,isMale,email,permissions)
        this._category = category
    }
    ban(user){
        user._isBanned=true
        console.log(`Admin ${this._firstName} baned user ${user._firstName}`);
    }
    unban(user){
        user._isBanned=false
        console.log(`Admin ${this._firstName} unbaned user ${user._firstName}`);
    }
}
const admin = new Admin('Admin','Adminovych', 31, true, 'admin@mail.com', {
    bann: true,
    readPrivate: true,
    sendMessage: true,
},
1
)
console.log(admin.getFullName());
console.log(user1._isBanned);
admin.ban(user1)
console.log(user1._isBanned);
admin.unban(user1)
console.log(user1._isBanned);

//Перевизначення
class Squirrel{
    constructor(n,age){
        this._name = n
        this._age = age
    }
    eat(food){
        console.log(`Squirrel ${this._name} eats ${food}`);
    }
    run(){
        console.log(`Squirrel ${this._name} is runnig`);
    }
}
class FlyingSquirrel extends Squirrel{
    constructor (n,age,length){
        super(n,age)
        this._length = length
    }
    eat(){
        console.log(`Squirrel ${this._name} eats nuts`);
    }
    fly(){
        console.log(`Squirrel ${this._name} is flying on ${this._length}m`);
    }
}
const sq = new Squirrel('sq1', 4)
sq.eat('carrot')
sq.run()
const fSq = new FlyingSquirrel('sq2', 5, 6)
fSq.eat()
fSq.run()
fSq.fly()

//Поліморфізм
class Objects {
    constructor(n) {
        this.name = n
    }
    totalArea(){
        return null
    }
}
class Sqircle extends Objects{
    constructor(radius) {
        super('sqircle')
        this._r= radius
    }
    totalArea(){
        console.log(Math.PI*this._r**2);
    }
}
const sqircle1 = new Sqircle(3)
sqircle1.totalArea()