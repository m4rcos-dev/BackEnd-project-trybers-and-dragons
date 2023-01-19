import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _mageInstances = 0;
  private _mageEnergy: EnergyType;

  constructor(name: string) {
    super(name);
    this._mageEnergy = 'mana';
    Mage._mageInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._mageInstances;
  }

  public get energyType(): EnergyType {
    return this._mageEnergy;
  }
}

export default Mage;
