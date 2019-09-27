import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Ring extends BasicObject{
  constructor(){
    super( ObjectType.ring );
  }
}