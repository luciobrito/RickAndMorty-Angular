import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private _http:HttpClient) 
  { 

  }
  //Busca os dados da API
  getdata()
  {
    return this._http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5');
  }
}
