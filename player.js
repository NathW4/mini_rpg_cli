import fs from "fs"

class Player {
  constructor() {
    this.strength = Math.floor(Math.random() * 150 + 10)
    this.health = Math.floor(Math.random() * 1000 + 100)
  }
}

// Vérifie si le fichier de statistiques du joueur existe
const playerStatPath = "./playerStat.json"
let player = null

if (!fs.existsSync(playerStatPath)) {
  // Crée le fichier s'il n'existe pas
  fs.writeFileSync(playerStatPath, JSON.stringify({ strength: 1, health: 1 }))
}

// Lit les données du fichier de statistiques du joueur
export let playerStat = () => {
  let ps = JSON.parse(fs.readFileSync(playerStatPath))

  return ps
}
playerStat()

if (playerStat.health > 0) {
  player = new Player(playerStat.strength, playerStat.health)
} else {
  player = new Player()
}

export { Player }
export { player }