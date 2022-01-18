import { Component, OnInit } from '@angular/core';

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

  constructor() { }



  addTodo() {
    //console.log(this);
    let mitodo={text:this.todo.text};
    this.todos?.push(mitodo);
    this.todo= {text: ""};
  }

  ngOnInit(): void {
  }
}
