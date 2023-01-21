import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    let lifePlayer1 = this.player.lifePoints;
    let lifePlayer2 = this._player2.lifePoints;
    const lifeToKill = 0;

    while (lifePlayer1 > lifeToKill && lifePlayer2 > lifeToKill) {
      this.player.attack(this._player2);
      lifePlayer2 = this._player2.lifePoints;
      if (lifePlayer2 > 0) this._player2.attack(this.player);
      lifePlayer1 = this.player.lifePoints;
    }
    return super.fight();
  }
}

export default PVP;
