// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}
// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War{
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        // const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        // const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        // const message = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength)
        // if(this.saxonArmy[saxonIndex].health <= 0){
        //     this.saxonArmy.splice(saxonIndex, 1)
        // }
        // return message
        return this.attack(this.vikingArmy, this.saxonArmy)

    }
    saxonAttack(){
        // const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        // const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        // const message = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength)
        // if(this.vikingArmy[vikingIndex].health <= 0){
        //     this.vikingArmy.splice(vikingIndex, 1)
        // }
        // return message
        return this.attack(this.saxonArmy, this.vikingArmy)
    }

    // Refactor code
    attack(attackers, defenders){
        const attackerIndex = Math.floor(Math.random() * attackers.length)
        const defenderIndex = Math.floor(Math.random() * defenders.length)
        const message = defenders[defenderIndex].receiveDamage(attackers[attackerIndex].strength)
        console.log(message)
        if(defenders[defenderIndex].health <= 0){
            defenders.splice(defenderIndex, 1)
        }
        return message
    }

    showStatus(){
        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        } else if( !this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
