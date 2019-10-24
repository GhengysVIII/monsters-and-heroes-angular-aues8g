import { Injectable } from '@angular/core';

import mExecParams from '../execParams.json'
import mParametersMock from '../mocks/parameters-mock.json'
import mMyCharactersMock from '../mocks/my-characters-mock.json'

@Injectable()
export class MocksService {
  
  get execParams() { return mExecParams ; } 
  get parameters() { return mParametersMock ; } 
  get myCharacters() { return mParametersMock ; }

  constructor() { }

}