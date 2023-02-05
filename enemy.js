export class Enemy {
  constructor() {
    this.strength = Math.floor(Math.random() * 100 + 10)
    this.health = Math.floor(Math.random() * 500 + 100)
    this.type = ""

    if (this.strength > 65) {
      this.type = "Assassin"
    } else if (this.health > 350) {
      this.type = "Tank"
    } else if (this.strength == this.health) {
      this.type = "Holy Equal"
    } else if (this.strength > 35 || this.health > 200) {
      this.type = "Archer"
    } else {
      this.type = "Slime"
    }
  }
}