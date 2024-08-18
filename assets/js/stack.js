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
        if(this._size >= this._maxSize){
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

function isRight (str){
    const stack = new Stack(str.length)
    for (const symb of str) {
        if(symb ==='('){
            stack.push(symb)
        } 
        if(stack.isEmpty){
            return false
        }
        if(symb === ')' && stack.pick() === '('){
            stack.pop()
        }
    }
    return stack.isEmpty
}

const brackets = {
    '(':')',
    '{':'}',
    '[':']',
    '<':'>'
}
function isR (str, brackets){
    const stack = new Stack(str.length)
    const closeBrackets = Object.values(brackets)
    for (const symb of str) {
        if(brackets[symb]){
            stack.push(symb)
            continue
        } 
        if(stack.isEmpty && closeBrackets.includes(symb)){
            return false
        }
        const lastItemFromStack = stack.pick()
        const correctCloseBracket = brackets[lastItemFromStack]
        if(symb === correctCloseBracket){
            stack.pop()
            continue
        } if(closeBrackets.includes(symb)){
            return false
        }
    }
    return stack.isEmpty
}