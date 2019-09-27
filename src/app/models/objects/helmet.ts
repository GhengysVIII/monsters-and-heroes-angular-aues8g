import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Helmet extends BasicObject{
  constructor(objData?: {}){
    super( ObjectType.helmet, objData || null );
  }
}