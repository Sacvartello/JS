class User{
    constructor (name,surname,age,password,email,isAdult){
        this._name = name
        this._surname = surname
        this.age = age
        this._password = password
        this._email = email
        this._isAdult = isAdult
    }
    set age(value){
        if(typeof value !== 'number'){
            throw new TypeError('age must be a number!')
        } else if(value <0 || value > 150){
            throw new RangeError('age must be between 0 and 150')
        }else{
            this._age = value
        }
    }
    get age(){
         return this._age
     }
    getFullname(){
        return `${this._name} ${this._surname}`
    }
}
try{
    const user1 = new User(
        'Jack',
        'Horihovych',
        50,
        1234567890,
        'rewnw09@gmail.com',
        true
    )
    console.log(user1.getFullname());
    user1.age = 18
    console.log(user1);
    
} catch (err){
    console.log('err :>> ', err);
}
