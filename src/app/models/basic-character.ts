
import { Type, plainToClass } from "class-transformer";

import { BasicObject } from './basic-object';
import { CharacterType } from '../enums/character-type.enum';

import { Helmet } from './objects/helmet';
import { Armor } from './objects/armor';
import { Gloves } from './objects/gloves';
import { Boots } from './objects/boots';
import { Bracelets } from './objects/bracelets';
import { Necklace } from './objects/necklace';
import { Ring } from './objects/ring';
import { Weapon } from './objects/weapon';

//import { DummyTools as Tls } from '../tools/dummy-tools';

export class BasicCharacter {

  id : number;
  chartype: CharacterType; 
  name: string;
  hp: number | 0;
  @Type(() => Wears) wears: Wears ;
  @Type(() => Inventory) inventory: Inventory ;
  weapons: {
    right: Weapon;
    left: Weapon;
  };


  constructor(chartype: CharacterType ){
    this.chartype = chartype; 
  }
}

export class Wears {
  @Type(() => Helmet) head: Helmet = null;
  @Type(() => Armor) body: Armor;
  @Type(() => Gloves) hands: Gloves;
  @Type(() => Boots) foots: Boots;
  @Type(() => Bracelets) arms: Bracelets;
  @Type(() => Necklace) neck: Necklace;
  @Type(() => Ring) ringL: Ring;
  @Type(() => Ring) ringR: Ring;
}

export class Inventory {
    maxHeight : number;
    @Type(() => BasicObject) objects: BasicObject[];
}