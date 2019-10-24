import { Injectable } from '@angular/core';

import mExecParams from '../execParams.json'

import { ClassWrappersService } from './class-wrappers.service'
import { MocksService } from './mocks.service'

import { PlayableCharacter } from '../models/characters/playable-character';
import { Armor } from '../models/objects/armor';


@Injectable()
export class DataService {
 
 //---------------------------
 // Private Vars
  private _execParams : {} ;
 //---------------------------
 // Public Vars
  userParams : {} ;
  myCharacters : PlayableCharacter[];
  get execParams() { return mExecParams ; }
 //---------------------------
  

  constructor(private wrap : ClassWrappersService,
              private mocks: MocksService){

    // Initiate vars
    this.myCharacters = new Array<PlayableCharacter>();
    
    // get launch parameters; 
    this._execParams = mExecParams;
    
    // get data and user parameters from mocks or server
    if (this.execParams['demo'] === false){ //loading data from server.
      this.loadServers();
    } else { 
      // loading mocks if in demo
      this.loadMocks();
    }

  }

  loadMocks(){
    try{
      this.myCharacters = this.mocks.myCharacters;
    } catch(e){
      console.error(e);
    }

    finally{}
  }
  loadServers(){
    //todo
  }
}