const rootEl = document.getElementById('root');
console.log('rootEl :>> ', rootEl);
console.dir(rootEl);

const divEls = document.getElementsByTagName('div');
console.log('divEls :>> ', divEls);

const divRoot2 = divEls[0];

const contentDivs = document.getElementsByClassName('content');
console.log('contentDivs :>> ', contentDivs);

const rootEl3 = document.querySelector('#root');
console.log('rootEl3 :>> ', rootEl3);

const divEls1 = document.querySelectorAll('div');
console.log('divEls1 :>> ', divEls1);

const classEl = document.querySelectorAll('.content')
console.log(classEl);