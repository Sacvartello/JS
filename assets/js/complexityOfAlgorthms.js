// function getMullyTable(demesions){
//     let counter = 1
//     for(i = 1; i <= demesions; i++){
//         console.log(`${counter}*${i}= `, counter*i);
//         if(i===demesions && counter < demesions){
//             counter=counter+1
//             i=0
//         }

//     }
// }
// getMullyTable(8)
const arr1 = [1,2,3,4,5,6,7,8,9,10]
function recursiveBinary(arr, value) {
    let middle = Math.round((arr.length - 1) / 2);
    if (arr[middle] === value) {  // база рекурсії №1
        return middle;
    }
    if (arr.length <= 1 && arr[middle] !== value) {  // база рекурсії №2
        return null;
    }
    if (arr[middle] > value) {
        // відмести праву половину масива
        return recursiveBinary(arr.slice(0, middle), value);
    } else {
        // відмести ліву половину масива
        const resRight = recursiveBinary(arr.slice(middle), value);

        return resRight ? middle + resRight : null;
    }
}

const arr3 = [1,3,0,2,9,7,6,4]
function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let pivotIndex = Math.round((arr.length - 1) / 2);
    let pivot = arr[pivotIndex]
    const less = []
    const great = []
    for (let i = 0; i < arr.length; i++) {
        if(i === pivotIndex){
            continue
        }
        if (arr[i] < pivot){
            less.push(arr[i])
        } else {
            great.push(arr[i])
        }
    }
    let res = [...quickSort(less), pivot,...quickSort(great) ]
    return res
}