/*
  Clase Partido que permite guardar los datos de cada partido
 */
export class Partido {

  nombre: string;
  dipu: number;
  imagen:string;

  constructor(
    nombre: string = "",
    dipu: number = 0,
    imagen: string = "")  {
    this.nombre = nombre;
    this.dipu = dipu;
    this.imagen = imagen;
  }
}
