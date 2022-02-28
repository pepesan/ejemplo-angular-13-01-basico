import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  heroes: Hero[] = [];
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
    this.heroes.push(this.model);
    this.newHero();
  }

  newHero() {
    this.model = new Hero();
  }
}
