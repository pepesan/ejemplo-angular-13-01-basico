import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[];
  persona: Persona;

  constructor() { 
    this.personas = [];
    this.persona = new Persona();
  }

  ngOnInit(): void {
  }
  public addPersona(){
    console.log("addPersona");
    let newPersona= new Persona(this.persona.nombre);
    this.personas.push(newPersona);
    this.persona= new Persona();
    
  }

}
