//Атрибути
const p1 = document.querySelector('#p1')
console.log(p1.title);

p1.hidden = true

const p2 = document.querySelector('#p2')
p2.style.color= 'red'
p2.setAttribute('style', 'background-color: yellow;')

const imgAttr = {
    src: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg',
    alt: 'cat',
};

const img1= document.querySelector('img')

img1.src = imgAttr.src
img1.alt = imgAttr.alt

img1.setAttribute('style', 'width: 400px;');