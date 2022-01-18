import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {FormsModule} from "@angular/forms";
import { PersonasComponent } from './personas/personas.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PersonasComponent,
    CondicionalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
