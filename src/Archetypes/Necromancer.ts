import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _necromancerInstances = 0;
  private _necromancerEnergy: EnergyType;

  constructor(name: string) {
    super(name);
    this._necromancerEnergy = 'mana';
    Necromancer._necromancerInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._necromancerInstances;
  }

  public get energyType(): EnergyType {
    return this._necromancerEnergy;
  }
}

export default Necromancer;
