import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Bracelets extends BasicObject{
  constructor(objData?: {}){
    super( ObjectType.bracelets, objData || null );
  }
}