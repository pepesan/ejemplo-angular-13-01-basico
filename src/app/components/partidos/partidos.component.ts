import { Component, OnInit } from '@angular/core';
import {PartidosService} from "../../services/partidos.service";
import {Partido} from "./partido";

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos: Promise<Partido[]>;

  constructor(private _partidosService: PartidosService) {
    this.partidos = this._partidosService.getData().toPromise();
  }

  ngOnInit(): void {
  }

}
