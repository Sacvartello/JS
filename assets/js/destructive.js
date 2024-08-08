//Деструктуруюче присвоювання

function f1 ({fistName,lastName,age}){
    console.log('fistName :>> ', fistName);
    console.log('lastName :>> ', lastName);
    console.log('age :>> ', age);
}
const user = {
    fistName : 'Wei',
    lastName : 'Ie',
    age: 22
}
f1(user)

const book = {
    author: {
      firstName: 'Test',
      lastName: 'Testovich',
    },
    price: 12,
};

const {
    author: { firstName, lastName },
    price: bookPrice,
  } = book;
  
console.log(bookPrice);
console.log(firstName);
console.log(lastName);
const arr = [1,2,3,4]
const [arrEl1, arrEl2] =arr
console.log(arrEl1,arrEl2)

const fbook = {

    title: 'The Churchill Factor',
  
    author: {
  
  firstName1: 'Boris',
  
  lastName1: 'Johnson',
  
    }
  
  }
  
  const {author: {firstName1, lastName1}} = fbook;
  
  console.log(author);