import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Gloves extends BasicObject{
  constructor(objData?: {}){
    super( ObjectType.gloves, objData || null );
  }
}