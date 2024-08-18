class Stack{
    constructor(maxSize, ...arr) {
        this._maxSize = maxSize
        this._size = 0

        for (const item of arr) {
            this.push(item)
        }
    }
    get size(){
        return this._size
    }
    get isEmpty(){
        return this._size === 0
    }
    push(value){
        if(size >= maxSize){
            throw new RangeError('Stack is full')
        }
        this[`_${this._size}`] = value
        this._size++
        return this._size
    }
    pop(){
        if(this._size <= 0){
            return
        }
        const lastItem = this[`_${this._size - 1}`]
        delete this[`_${this._size - 1}`]
        this._size--
        return lastItem
    }
    pick(){
        return this[`_${this._size - 1}`]
    }
}