class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.random() < this.luck / 100;
  }

  attackPokemon(PokemonCible) {
    if (this.isLucky()) {
      const degats = this.attack - PokemonCible.defense;
      if (degats > 0) {
        PokemonCible.hp -= degats;
        console.log(`${this.name} attaque ${PokemonCible.name} et lui inflige ${degats} points de dégâts.`);
      } else {
        console.log(`${this.name} attaque ${PokemonCible.name}, mais les dégâts sont trop faibles.`);
      }
    } else {
      console.log(`${this.name} essaie d'attaquer ${PokemonCible.name}, mais rate son attaque.`);
    }
  }
}

const Lucario = new Pokemon("Lucario", 50, 20, 100, 70);
const Carchacrok = new Pokemon("Carchacrok", 40, 30, 120, 60);

while (Lucario.hp > 0 && Carchacrok.hp > 0) {
  console.log(`${Lucario.name} a ${Lucario.hp} HP`);
  console.log(`${Carchacrok.name} a ${Carchacrok.hp} HP`);
  
  Lucario.attackPokemon(Carchacrok);
  if (Carchacrok.hp <= 0) {
    console.log(`${Carchacrok.name} est K.O. ${Lucario.name} remporte le combat !`);
    break;
  }
  
  Carchacrok.attackPokemon(Lucario);
  if (Lucario.hp <= 0) {
    console.log(`${Lucario.name} est K.O. ${Carchacrok.name} remporte le combat !`);
    break;
  }
}

