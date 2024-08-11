//Set
const set1 = new Set([1,2,3,4,5,6,7,8,9])
console.log(set1);
set1.add(0)
console.log(set1);
set1.delete(1)
console.log(set1);
set1.clear()
console.log(set1);

//Отримати масив унікальних значень
const arr1 = [6,6,4,1,6,3,8,9,6,0,2,6,4,5,7,8,9,0,1]
const set2 = new Set(arr1)
const arr2 = [...set2]
console.log(arr2);

