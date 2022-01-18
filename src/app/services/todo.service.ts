import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public cadena: string;

  constructor() {
    console.log('TodoService inicializado...');
    this.cadena = "uWu";
  }

  public dameAlgo(): string{
    return "Algo";
  }
}
