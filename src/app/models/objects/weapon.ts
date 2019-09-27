import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

import { Damage } from '../others/damage';

export class Weapon extends BasicObject{
  

  constructor(objData?: {}){
    super( ObjectType.weapon, objData || null );
  }
}