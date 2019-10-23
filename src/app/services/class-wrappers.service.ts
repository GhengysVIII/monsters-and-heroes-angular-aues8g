import { Injectable } from '@angular/core';

import { plainToClass, classToPlain } from "class-transformer";

@Injectable()
export class ClassWrappersService {

  ToClass<T>(classType : any, obj : {}) : T{
    return plainToClass(classType,obj);
  }
  ToJSON<T>(obj : T) : {}{
    return JSON.stringify(classToPlain(obj));
  }

}