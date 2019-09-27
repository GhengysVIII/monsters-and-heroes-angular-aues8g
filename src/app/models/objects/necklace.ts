import { BasicObject } from '../basic-object';
import { ObjectType } from '../../enums/object-type.enum';

export class Necklace extends BasicObject{
  constructor(){
    super( ObjectType.necklace );
  }
}