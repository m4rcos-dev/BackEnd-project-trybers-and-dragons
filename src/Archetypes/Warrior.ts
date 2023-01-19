import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _warriorInstances = 0;
  private _warriorEnergy: EnergyType;

  constructor(name: string) {
    super(name);
    this._warriorEnergy = 'stamina';
    Warrior._warriorInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._warriorInstances;
  }

  public get energyType(): EnergyType {
    return this._warriorEnergy;
  }
}

export default Warrior;
