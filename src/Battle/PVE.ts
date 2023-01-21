// import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monster: SimpleFighter[];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        if (monster.lifePoints > 0) monster.attack(this.player);
      }
    });
    return super.fight();
  }
}

export default PVE;
