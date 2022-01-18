import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {FormsModule} from "@angular/forms";
import { PersonasComponent } from './personas/personas.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import { SalidasComponent } from './salidas/salidas.component';

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
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
