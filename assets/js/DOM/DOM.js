const section = document.querySelector('section')
const article = document.querySelector('article')
class Game {
    constructor(scoreElement) {
       this.count = 0;
        this.scoreElement = scoreElement
    }

    get count() {
        return this._count
    }

    set count(v) {
        this._count = v;
    }

    increment() {
        ++this.count;
        this.rerender();
        return this.count;
    }

    decrement() {
        --this.count;
        this.rerender();
        return this.count;
    }

    rerender(){
        this.scoreElement.textContent = `Score: ${this.count}`;
    }
}

//Task
const game = new Game(article)
function count(event){
    if(event.target === event.currentTarget) {
        game.decrement(); 
    } else {
        game.increment();
    }

        const div = event.currentTarget.children.box
        const w = getRandom(0, event.currentTarget.offsetWidth - (div.offsetWidth/2))
        const h = getRandom(0, event.currentTarget.offsetHeight - (div.offsetHeight/2))
        div.style.top = `${h}px`
        div.style.left = `${w}px`
}   
section.addEventListener('click', count)

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1))+ min
}