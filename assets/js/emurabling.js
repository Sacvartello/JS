// Перелічувані властивості
function User1(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}
  
  User1.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
  
const user1 = new User1('test', 'test2', 20, true, 't@g.com', true);
for (const key in user1){
    console.log('key :>> ', key);
}

const obj = {
    model: 'iphone',
    edition: 2
}
console.log(Object.keys(obj));
console.log(Object.values(obj));