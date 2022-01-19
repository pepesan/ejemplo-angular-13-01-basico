import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  // variable usada en el select del formulario
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  // variable del model del formulario
  model = new Hero();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

  newHero() {
    this.model = new Hero();
  }
}
