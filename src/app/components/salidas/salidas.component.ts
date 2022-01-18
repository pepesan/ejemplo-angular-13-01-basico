import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {

  cadena: string;
  fecha: Date;
  amount: number;
  percentage: number;

  constructor() {
    this.cadena = "Holi uwu!!";
    this.fecha = new Date();
    this.amount = 2.3;
    this.percentage=20;
  }

  ngOnInit(): void {
  }

}
