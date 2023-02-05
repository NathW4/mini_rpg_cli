import { startFight } from "./fight.js"
import { Player } from "./player.js"
import { rl } from "./index.js"
import { gameMenu } from "./index.js"

export const checkStat = () => {
  console.clear()

  console.log("\n")
  console.log("+===========================+")
  console.log("|         NEW STATS         |")
  console.log("+===========================+")
  console.log("\n")
  let newPlayer = new Player()
  rl.question(
    `Is that stats are okay for you ? :\nStrength: ${newPlayer.strength}\nHealth: ${newPlayer.health}\n\n1. Yes, let's start !\n2. Nop, reroll !\n3. Back to game menu\n
Your choice (1-3) : `,
    (choice) => {
      switch (choice) {
        case "1":
          startFight(newPlayer)

          break

        case "2":
          newPlayer = new Player()
          checkStat()

          break

        case "3":
          gameMenu()

          break

        default:
          checkStat()

          break
      }
    }
  )
}