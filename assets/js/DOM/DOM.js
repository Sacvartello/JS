//Task
const body = document.body

const section = document.querySelector('.sec1')
const article = document.querySelector('.art1')
const div = document.querySelector('.div1')
// //1
// function handler1 (event){
//     console.log(event.target.localName);
// }

// div.addEventListener('click', handler1)
// //2
// function handler2(event){
//     console.log('----------------------------');
//     console.log('target', event.target);
//     console.log('currentTarget', event.currentTarget);
// }

// body.addEventListener('click', handler2)
// section.addEventListener('click', handler2)
// article.addEventListener('click', handler2)
// div.addEventListener('click', handler2)
// //3
// function handler3(event){
//     console.log('----------------------------');
//     console.log('target', event.target);
//     console.log('currentTarget', event.currentTarget);
//     if (event.currentTarget===section) {
//         event.stopPropagation()
//     }
// }

// body.addEventListener('click', handler3, true)
// section.addEventListener('click', handler3, true)
// article.addEventListener('click', handler3, true)
// div.addEventListener('click', handler3, true)
//4
function handler4(event){
    if (event.currentTarget=== event.target) {
        event.stopPropagation()
    }
    console.log('----------------------------');
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
}

body.addEventListener('click', handler4)
section.addEventListener('click', handler4)
article.addEventListener('click', handler4)
div.addEventListener('click', handler4)