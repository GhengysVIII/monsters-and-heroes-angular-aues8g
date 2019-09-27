export class DummyTools {
  static haveProperty(obj : {}, property: string){
    if(obj.hasOwnProperty(property)){
      return true;
    
    }else{
      return false; 
    }
  }
}