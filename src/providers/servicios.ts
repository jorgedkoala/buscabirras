import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the Servicios provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Servicios {
public misregalos;
public urls:String[]=[];
  constructor(public http: Http) {
    console.log('Hello Servicios Provider');
  }

getGifts(){
return this.http.get('http://web.ntskoala.com/buscabirras/getGifts.php')
.map (response => response.json());//.subscribe
//(data=> this.misregalos =data);
//console.log(this.misregalos);
//return this.misregalos;


}

getCode(code){
  return this.http.get('http://web.ntskoala.com/buscabirras/getGifts.php')
  .map((response)=> console.log(response))
}




}
