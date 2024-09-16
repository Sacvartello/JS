//Async/await

const URL = 'https://fakestoreapi.com/users'

async function loadData(url){
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
loadData(URL)