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
import { PartidosComponent } from './components/partidos/partidos.component';
import {HttpClientModule} from "@angular/common/http";
import {PartidosService} from "./services/partidos.service";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PersonasComponent,
    CondicionalesComponent,
    SalidasComponent,
    PartidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    PartidosService,
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
