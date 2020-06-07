import { Injectable } from '@angular/core';
// Importar El mòdulo HttpClient y Httpheader
import { HttpClient, HttpHeaders } from '@angular/common/http';
// importar el map 
import { map } from 'rxjs/operators'
//importar nuestro observable
import { Observable } from 'rxjs';



@Injectable()
export class UsuarioService {

  // declarar la varciable url de la api
  url = 'http://localhost:3000/api/';

  constructor(
    private _http : HttpClient
  ) { }
  //----------------------------------------- 
  // Declarar el mètodo del servicio registro
  registro(usuarioNuevo){
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    return this._http.post(
      this.url + 'registro',
      params,
      options
    ).pipe(map(res => res));
  }
  //------------------------------------------

  validacion(validacionUsuario){
    console.log(validacionUsuario)
    let params = JSON.stringify(validacionUsuario);
    let options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    return this._http.post(
      this.url + 'login',
      params,
      options
    ).pipe(map(res => res));
  }
}
