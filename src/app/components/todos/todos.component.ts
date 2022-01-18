import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any[]= [
    {text:"hacer la compra"},
    {text: "revisar el coche"}
  ];
  todo: any = {text: ""};
  cadena: string;

  // private miServicio:TodoService;

  constructor(private miServicio: TodoService) {
    // this.miServicio=new TodoService();
    this.cadena = this.miServicio.cadena;
    this.cadena = this.miServicio.dameAlgo();
  }



  addTodo() {
    //console.log(this);
    let mitodo={text:this.todo.text};
    this.todos?.push(mitodo);
    this.todo= {text: ""};
  }

  ngOnInit(): void {
  }
}
