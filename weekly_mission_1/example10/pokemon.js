export default class Pokemon {
    constructor (name) {
        this.name = name
    }

    sayHello () {
        console.log(`Mi ${this.name} te saluda!!!`)
    }
    
    sayMessage (message){
        console.log(`Mi ${this.name} dice: ` + message)
    }
}