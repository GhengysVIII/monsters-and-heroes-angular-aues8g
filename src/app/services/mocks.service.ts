import { Injectable } from '@angular/core';

import mParametersMock from '../mocks/parameters-mock.json'
import mMyCharactersMock from '../mocks/my-characters-mock.json'

@Injectable()
export class MocksService {

  get userParams() { return mParametersMock ; } 
  get myCharacters() { return mMyCharactersMock ; }

  constructor() { }

}