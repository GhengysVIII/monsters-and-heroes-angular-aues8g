import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Armor extends BasicObject{
  constructor(objData?: {}){
    super( ObjectType.armor, objData || null );
    if (objData != null){
      
    }
  }
}