import { player } from "./player.js"
import { checkStat } from "./checkStat.js"
import readline from "readline"
import { checkLoad } from "./checkLoad.js"

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export const welcomeMenu = () => {
  console.clear()
  console.log("\n")
  console.log("+=========================+")
  console.log("|         WELCOME         |")
  console.log("+=========================+")
  console.log("\n")

  rl.question("1. Start game\n2. Exit\n\nYour choice (1-2) : ", (choice) => {
    switch (choice) {
      case "1":
        gameMenu()

        break

      case "2":
        console.log("\n")
        console.log("+======================+")
        console.log("|         END!         |")
        console.log("+======================+")
        console.log("\n")
        console.log("Cya ! \u263A")
        process.exit(1)

        break

      default:
        welcomeMenu()

        break
    }
  })
}

export const gameMenu = () => {
  console.clear()

  console.log("\n")
  console.log("+===========================+")
  console.log("|         GAME MENU         |")
  console.log("+===========================+")
  console.log("\n")

  rl.question(
    `1. Start a new fight\n2. Load\n3. Back to menu

Your choice (1-3) : `,
    (choice) => {
      switch (choice) {
        case "1":
          checkStat()

          break

        case "2":
          checkLoad()

          break

        case "3":
          welcomeMenu()

          break

        default:
          gameMenu()

          break
      }
    }
  )
}

export { player }

welcomeMenu()