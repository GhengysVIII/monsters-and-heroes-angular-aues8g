import { Type } from "class-transformer";

import { ObjectType } from '../enums/object-type.enum';
import { ObjectRarity } from '../enums/object-rarity.enum';
import { Damage } from './others/damage';

export class BasicObject {
  name: string;
  objType : ObjectType;
  defense : number;
  rarity : ObjectRarity;
  @Type(() => Damage) damages: Damage[];

  constructor(objType: ObjectType){
    this.objType = objType;
    this.name = "";
    this.defense = 0;
    this.rarity = ObjectRarity.unknown;
     this.damages = new Array<Damage>();
    
  }

}