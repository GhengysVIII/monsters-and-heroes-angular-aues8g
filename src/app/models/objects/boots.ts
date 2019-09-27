import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Boots extends BasicObject{
  constructor(objData?: {}){
    super( ObjectType.boots, objData || null );
  }
}