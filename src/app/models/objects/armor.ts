import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Armor extends BasicObject{
  constructor(){
    super( ObjectType.armor );
  }
}