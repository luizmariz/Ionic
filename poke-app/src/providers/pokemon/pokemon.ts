import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PokemonProvider Provider');
  }

  pokeApiUrl = 'https://pokeapi.co/api/v2/';


  getPokemon(id):Observable<any>{
    return this.http.get(this.pokeApiUrl+'pokemon/'+id).map(res=> res);
  }

}
