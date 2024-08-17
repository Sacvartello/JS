//Linked List
class ListItem {
    constructor(value){
        this._data = value
        this.next = null
        this.prev = null
    }
    set (value){
        this.data = value
    }
    get(){
        return this.data
    }
}

class LinkedList {
    constructor(...args) {
        this.length = 0
        this.head = null
        this.tail= null
        for(const i of args){
            this.push(i)
        }
    }
    push(value){
        const newItem = new ListItem(value)
        if(this.length === 0 ){
            this.head = newItem
            this.tail = newItem
        } else {
            this.tail.next = newItem
            newItem.prev =this.tail
            this.tail = newItem
        }
        return ++this.length
    }
    pop(){
        const deleted = this.tail
        const preLast = this.tail.prev
        preLast.next = null
        this.tail = preLast
        this.length --
        return deleted
    }
    unshift(value){
        const newItem = new ListItem(value)
        if(this.length === 0 ){
            this.head = newItem
            this.tail = newItem
        } else {
            this.head.prev = newItem
            newItem.next =this.head
            this.head = newItem
        }
        return ++this.length
    }
    shift(){
        const deleted = this.head
        const nextElement = this.head.next
        nextElement.prev = null
        this.head = nextElement
        this.length --
        return deleted
    }
    find(value){
        let currentItem = this.head
        do {
            if (currentItem._data === value) {
                return currentItem
            } else {
                currentItem = currentItem.next
            }
        } while(currentItem !== null)
    return null
    }

    newFind(value){
        for (const item of this) {
            if(item._data === value){
                return item
            }
        }
        return null
    }
    static fromArrey (arr){
        return new LinkedList(...arr)
    }
    toArrey(){
        const newArr = []
        for(const item of this){
            newArr.push(item._data)
        }
        return newArr
    }
    deleteItem(value){
        if(this.head._data === value){
            return this.shift()
        }
        if(this.tail._data === value){
            return this.pop()
        }
        for (const item of this) {
           if (item._data === value){
                // const nextElement = item.next
                // const prevElement = item.prev
                // prevElement.next = nextElement
                // nextElement.prev = prevElement
                item.prev.next = item.next
                item.next.prev = item.prev
                this.length--
                return item
           }
        }
        return null
    }

    [Symbol.iterator](){
        return new LinkedListIterator(this)
    }
}

const ll = new LinkedList(5,8,10)
console.log(ll);

class LinkedListIterator{
    constructor(list) {
        this.list = list
        this.currentNode = null
    }

    next(){
        this.currentNode = this.currentNode ? this.currentNode.next : this.list.head
        return{
            value : this.currentNode,
            done: !this.currentNode
        }
        
    }
}
const iter = ll[Symbol.iterator]()
