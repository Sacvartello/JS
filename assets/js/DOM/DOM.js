//JSON
const obj = {
    n:'g',
    g:111
}
const str = JSON.stringify(obj)
console.log(str);
console.log(JSON.parse(str));