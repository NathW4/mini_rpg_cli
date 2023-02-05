import { Enemy } from "./enemy.js"
import { welcomeMenu } from "./index.js"
import { gameMenu } from "./index.js"
import { rl } from "./index.js"
import fs from "fs"

export const startFight = (player) => {
  console.clear()

  console.log("\n")
  console.log("+===========================+")
  console.log("|         Fighting !        |")
  console.log("+===========================+")
  console.log("\n")

  const enemy = new Enemy()

  console.log(`
  
  (==Reminder==)
    You have:
  Strength: ${player.strength}
  Health: ${player.health}\n`)

  console.log(`
    Enemy stats:
  Type: ${enemy.type}
  Strength: ${enemy.strength}
  Health: ${enemy.health}`)
  let i = 1

  while (player.health > 0 && enemy.health > 0) {
    console.log("\n")
    console.log(`+=========ROUND ${i}=========+`)
    console.log(
      `${enemy.type} lost ${player.strength}! (${enemy.type} ${
        enemy.health - player.strength
      }HP)`
    )
    enemy.health = enemy.health - player.strength

    console.log(
      `You lost ${enemy.strength}! (${player.health - enemy.strength}HP)`
    )
    player.health = player.health - enemy.strength
    i++

    if (player.health <= 0) {
      console.log(`\nYou have been slain by the ${enemy.type}
***Your progress is lost !***`)

      const backToWelcomeMenu = () => {
        rl.question("\nPress enter to continue...", () => {
          welcomeMenu()
        })
      }
      backToWelcomeMenu()
    }

    if (enemy.health <= 0) {
      let newPlayerStat = { strength: player.strength, health: player.health }
      fs.writeFileSync("./playerStat.json", JSON.stringify(newPlayerStat))

      console.log(`\nYou slain the ${enemy.type} ! Congrats !
***Your progress is saved !***`)

      const backToGameMenu = () => {
        rl.question("\nPress enter to continue...", () => {
          gameMenu()
        })
      }
      backToGameMenu()
    }
  }
}
