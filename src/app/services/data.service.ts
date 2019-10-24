import { Injectable } from '@angular/core';

import { ClassWrappersService } from './class-wrappers.service'
import { MocksService } from './mocks.service'

import { PlayableCharacter } from '../models/characters/playable-character';
import { Armor } from '../models/objects/armor';


@Injectable()
export class DataService {

  params : {};
  myCharacters : PlayableCharacter[];


  constructor(private wrap : ClassWrappersService,
              private mocks: MocksService){
    this.myCharacters = new Array<PlayableCharacter>();
    this.changeParam(this.mocks.execParams);
    if (this.params['demo'] === true){ // loading mocks if in demo
      try{
        this.changeParam(this.mocks.parameters);
        let cha : PlayableCharacter;
        this.myCharacters.forEach((c)=> {
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
    this.params = parameters;
  }

  addMyCharacters(myChar : PlayableCharacter){
    this.myCharacters.push(myChar);
  }
  remMyCharacters(index : number){
    this.myCharacters.splice(index, 1);
  }

  loadmocks(){

  }

}