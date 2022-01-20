import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {TodosComponent} from "./components/todos/todos.component";
import {PersonasComponent} from "./components/personas/personas.component";
import {SalidasComponent} from "./components/salidas/salidas.component";
import {EventosComponent} from "./components/eventos/eventos.component";
import {PartidosComponent} from "./components/partidos/partidos.component";
import {FormularioComponent} from "./components/formulario/formulario.component";
import {FormReactivoComponent} from "./components/form-reactivo/form-reactivo.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'salidas', component: SalidasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'reactivos', component: FormReactivoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
