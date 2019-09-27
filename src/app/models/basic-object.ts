import { ObjectType } from '../enums/object-type.enum';
import { Damage } from './others/damage';

export class BasicObject {
  name: string;
  objType : ObjectType;
  defense : number;
  rarity : number;
  damages: Damage[];
  constructor(objType: ObjectType, objData?: {}){
    this.objType = objType;
  }

  

}