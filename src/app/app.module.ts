import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import {FormsModule} from "@angular/forms";
import { PersonasComponent } from './components/personas/personas.component';
import { CondicionalesComponent } from './components/condicionales/condicionales.component';
import { SalidasComponent } from './components/salidas/salidas.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PersonasComponent,
    CondicionalesComponent,
    SalidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodoService,
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
