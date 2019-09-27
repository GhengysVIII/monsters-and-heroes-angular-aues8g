import { Type } from "class-transformer";

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
  @Type(() => WeaponsInHands) weapons: WeaponsInHands;

  constructor(chartype: CharacterType ){
    this.chartype = chartype; 
    this.id = 0;
    this.name = "";
    this.hp = 0;
    this.wears = new Wears();
    this.wears.arms = null;
    this.wears.body = new Armor();
    this.wears.foots = null;
    this.wears.hands = null;
    this.wears.head = null;
    this.wears.neck = null;
    this.wears.ringL = null;
    this.wears.ringR = null;
    this.inventory = new Inventory();
    this.inventory.maxHeight = 0;
    this.inventory.objects = new Array<BasicObject>();
    this.weapons = new WeaponsInHands();
    this.weapons.left = null;
    this.weapons.right = null;
  }
}

export class Wears {
  @Type(() => Helmet) head: Helmet = null;
  @Type(() => Armor) body: Armor = null;
  @Type(() => Gloves) hands: Gloves = null;
  @Type(() => Boots) foots: Boots = null;
  @Type(() => Bracelets) arms: Bracelets;
  @Type(() => Necklace) neck: Necklace;
  @Type(() => Ring) ringL: Ring;
  @Type(() => Ring) ringR: Ring;
}

export class Inventory {
    maxHeight : number;
    @Type(() => BasicObject) objects: BasicObject[];
}

export class WeaponsInHands{
    @Type(() => Weapon) right: Weapon;
    @Type(() => Weapon) left: Weapon;
}
