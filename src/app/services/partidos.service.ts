import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Partido} from "../components/partidos/partido";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  url: string = 'https://cursosdedesarrollo.com/pactometro/resultados.json';
  private _result: any;

  constructor(private _httpClient: HttpClient) {
    console.log('PartidosService inicializado...');
  }
  getData(){
    return this._httpClient.get<Observable<Partido[]>>(this.url)
      .pipe(catchError(this.handleError('get', [])));
  }

  private handleError (operation = 'operation', result?: any[]) {
    this._result = result;
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }
}
