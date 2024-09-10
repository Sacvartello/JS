const promise = fetch('https://randomuser.me/api/')

promise
.then((value) =>{
     console.log(value);
     return value.json()
})
.then((json)=>{
    console.log(json);
})
.catch((err)=>{
    console.log(err);
})