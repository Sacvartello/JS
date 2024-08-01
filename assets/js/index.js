function Phone(id, brand, model, makeYear, color, isNfs, price) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfs = isNfs;
  this.price = price;
}

const phones = []

const PHONE_COUNT = 200

for(let i = 0; i < PHONE_COUNT; i++){
  const phone = new Phone(
    i+1,
    Math.random() > 0.5 ? 'Redmi' : 'Tecno',
    `Note ${Math.trunc(Math.random() * 15 + 1)}`,
    2010 + Math.trunc(Math.random()*15),
    Math.random() > 0.5 ? 'blue' : 'black',
    Math.random() > 0.5,
    6000 + Math.trunc(Math.random() *8000)
  );
  phones.push(phone)
}
console.log('Усі телефони');
console.table(phones);
//1 Телефони дорожче 8000
const isGreaterThen10000 = function (item) {
  return item.price >=10000
}
const phone10000 = phones.filter(isGreaterThen10000)
console.log('Телефони дорожче 10000');
console.table(phone10000);
//2 Телефони пізніші 2020
const isGreaterThen2020 = function (item) {
  return item.makeYear >=2020
}
const phone2020 = phones.filter(isGreaterThen2020)
console.log('Телефони пізніші 2020');
console.table(phone2020);
//5 Всі телефони зі знижкою 10%
const salesPhones = phones.map(p => {
  const phoneCopy = {...p };
  phoneCopy.price = Math.round(phoneCopy.price * 0.90)
  return phoneCopy
});

console.table(salesPhones);