import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiCepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiCepProvider {

  private APIPath:string = "https://viacep.com.br/ws/"

  constructor(public http: Http) {
    console.log('Hello ApiCepProvider Provider');
  }

  public getCEP(cep:string){
   
    return this.http.get(this.APIPath + cep + "/json/");
    
  }

}
