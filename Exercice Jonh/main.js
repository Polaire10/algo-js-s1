let name = "John"
let santeMentale = 10

let musics = ["VVS - Luther", "Topaz - Nes", "Kali Uchis - Yvniss", "Philly flingo - Alpha Wann", "Anissa - Wejdene"]

let feuxRouges = 30
let changementsDeTaxi = 0

function choisirMusique() {
  let musiqueAleatoire = Math.floor(Math.random() * musics.length)
  return musics[musiqueAleatoire]
}

for (let i = 0; i < feuxRouges; i++) {
  let music = choisirMusique()
  console.log("Au feu rouge " + (i + 1) + ", la musique est : " + music + ". Feux restants : " + (feuxRouges - i - 1))

  if (music === "Anissa - Wejdene") {
    santeMentale -= 1
    changementsDeTaxi += 1

    if (santeMentale <= 0) {
      console.log("Explosion")
      break
    }
  }
}

if (santeMentale > 0) {
  console.log("John est bien arrivé en " + changementsDeTaxi + " changements de taxi.")
} else {
  console.log("John a explosé en route !")
}