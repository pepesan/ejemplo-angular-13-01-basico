import { Component, OnInit } from '@angular/core';
import {Persona} from "../personas/persona";

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {

  visible: boolean;
  persona: Persona;

  constructor() {
    this.visible = true;
    this.persona = new Persona("Pepe", "San");
  }

  ngOnInit(): void {

  }

  cambiaBoolean() {
    this.visible = !this.visible;
  }
}
