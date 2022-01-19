import { Component, OnInit } from '@angular/core';
import {PartidosService} from "../../services/partidos.service";
import {Partido} from "./partido";
import {Observable} from "rxjs";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos: Promise<Partido[]>;
  partidosVisibles: Partido[];
  partidosObservable: Observable<Partido[]>;
  constructor(private _partidosService: PartidosService) {
    // pido datos y paso a vista
    this.partidos = this._partidosService.getData().toPromise();
    // variable de vista "vacía"
    this.partidosVisibles = [];
    // LLamada a petición para devolver un observable
    this.partidosObservable = this._partidosService.getData();

  }

  ngOnInit(): void {
    // subscribiendome al observable para procesar los datos y pasarlos a la vista
    this.partidosObservable.subscribe((data) => {
      console.log(data);
      console.log(data.length);

      data.forEach( (value : Partido) => {
        //console.log(value);
        //let partido: Partido = new Partido(value.nombre, value.dipu, value.imagen);
        this.partidosVisibles.push(value);
      });

      console.log(this.partidosVisibles);
    });
  }

}
