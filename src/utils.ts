function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

// function validAttack PVE(currentMonster, currentPlayer) {
//     if (currentMonster.every((monster) => monster.lifePoints > 0)) {
//       currentMonster[i]
//         .attack(currentPlayer);
//     }
// }

export default getRandomInt;
