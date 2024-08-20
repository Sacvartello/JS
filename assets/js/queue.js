class Queue {
    constructor(...args) {
        this._head = 0
        this._tail = 0

        for (const item of args) {
            this.enqueue(item)
        }
    }
    get size(){
        return this._tail - this._head
    }
    enqueue(value){
        this[this._tail] = value
        this._tail ++
        return this.size
    }
    dequeue(){
        if(this.size !== 0){
            const firstElem= this[this._head]
            delete this[this._head]
            this._head++
            return firstElem
        } else {
            return
        }
    }
    front(){
        const firstElem= this[this._head]
        return firstElem
    }
    empty(){
        return this.size === 0
    }
}
const queue = new Queue(1,2,3)
console.log(queue);

const q1 = new Queue(4,5,6,7)
const q2 = new Queue(11,10,9,8)

function mergeQueue(q1,q2){
    const result = new Queue()
    while(q1.size || q2.size){
        if(q1.size){
            result.enqueue(q1.dequeue())
        }
        if(q2.size){
            result.enqueue(q2.dequeue())
        }
    }
    return result
}

const returnOfmergeQueue = mergeQueue(q1,q2)
console.log(returnOfmergeQueue);