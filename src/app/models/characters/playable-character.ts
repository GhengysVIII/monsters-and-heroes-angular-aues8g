import { BasicCharacter } from '../basic-character';
import { CharacterType } from '../../enums/character-type.enum';

export class PlayableCharacter extends BasicCharacter {
  constructor(){
    super(CharacterType.playable);
  }
}