import { Injectable } from '@angular/core';

import { ClassWrappersService } from './class-wrappers.service'

import { PlayableCharacter } from '../models/characters/playable-character';
import { Armor } from '../models/objects/armor';

import { default as execParams } from '../execParams.json'
import { default as parametersMock } from '../mocks/parameters-mock.json'
import { default as myCharactersMock } from '../mocks/my-characters-mock.json'

@Injectable()
export class DataService {

  params : {};
  myCharacters : PlayableCharacter[];


  constructor(private wrap : ClassWrappersService){
    this.myCharacters = new Array<PlayableCharacter>();
    this.changeParam(execParams);
    if (this.params['demo'] === true){ // loading mocks if in demo
      try{
        this.changeParam(parametersMock);
        let cha : PlayableCharacter;
        myCharactersMock.forEach((c)=> {
          cha = wrap.ToClass(c);
          this.addMyCharacters(cha);
        });
        console.log(this.myCharacters);
      }
      finally{}
    } else { // not in demo mode

      //loading data from server.
    }

  }


  changeParam(parameters : {}){
    this.params = {...this.params,...parameters};
  }

  addMyCharacters(myChar : PlayableCharacter){
    this.myCharacters.push(myChar);
  }
  remMyCharacters(index : number){
    this.myCharacters.splice(index, 1);
  }



}