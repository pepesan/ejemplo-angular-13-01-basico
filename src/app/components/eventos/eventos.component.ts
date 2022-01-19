import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pulsado(event: MouseEvent) {
    event.preventDefault();
    console.log(event);
    console.log("pulsado");
  }
  // atributo de la clase de tipo cadena
  value = '';
  // método que maneja el evento
  onEnter(value: string) {
    this.value = value;
    console.log(this.value);
  }
}
