import { Injectable } from '@angular/core';

import { plainToClass, classToPlain } from "class-transformer";

import { PlayableCharacter } from '../models/characters/playable-character';


@Injectable()
export class ClassWrappersService {

  playableCharacterToClass(obj : {}) : PlayableCharacter{
    return plainToClass(PlayableCharacter,obj);
  }
  playableCharacterToJSON(obj : PlayableCharacter) : {}{
    return JSON.stringify(classToPlain(obj));
  }

  constructor() { }

}