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
          //let test = new PlayableCharacter();
          cha = wrap.playableCharacterToClass(c);
          //console.log(wrap.playableCharacterToJSON(test));
          //console.log(JSON.stringify(cha));
          //console.log(cha);
          this.addMyCharacters(cha);
        });
        console.log(this.myCharacters);
      }
      finally{}
      
      /*try(){
      // Code which can cause an exception.
      this.changeParam(parametersMock);
            let cha : PlayableCharacter;
            myCharactersMock.forEach((c)=> {
              cha = wrap.playableCharacterToClass(c);
              console.log(JSON.stringify(cha));
              console.log(cha);
              this.addMyCharacters(cha);
            });
      }
      catch (Exception ex)
      {
        console.log("import not work");
      // Code to handle exception
      }*/ 
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