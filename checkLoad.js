import { startFight } from "./fight.js"
import { gameMenu } from "./index.js"
import { rl } from "./index.js"
import { playerStat } from "./player.js"

export const checkLoad = () => {
  console.clear()

  console.log("\n")
  console.log("+==============================+")
  console.log("|         LOADED STATS         |")
  console.log("+==============================+")
  console.log("\n")

  let playerData = playerStat()

  rl.question(
    `These are your loaded stats :\nStrength: ${playerData.strength}\nHealth: ${playerData.health}\n\n1. Yes, let's start !\n2. Back to game menu\n
Your choice (1-2) : `,
    (choice) => {
      switch (choice) {
        case "1":
          if (playerData.health <= 0) {
            console.log("\n***No more life !***")

            const askAgain = () => {
              rl.question("\nStart a new game !", () => {
                gameMenu()
              })
            }
            askAgain()
          } else {
            startFight(playerData)
          }

          break

        case "2":
          gameMenu()

          break

        default:
          checkLoad()

          break
      }
    }
  )
}