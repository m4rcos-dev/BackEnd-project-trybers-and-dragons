import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _rangerInstances = 0;
  private _rangerEnergy: EnergyType;

  constructor(name: string) {
    super(name);
    this._rangerEnergy = 'stamina';
    Ranger._rangerInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._rangerInstances;
  }

  public get energyType(): EnergyType {
    return this._rangerEnergy;
  }
}

export default Ranger;
