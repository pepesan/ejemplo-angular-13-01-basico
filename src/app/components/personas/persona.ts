export class Persona {
    public nombre: string;
    public direccion: string;

    constructor(nombre: string = "", direccion:string = ""){
        this.direccion = direccion;
        this.nombre= nombre;
    }
    /*
    public setNombre (nombre: string){
        this.nombre = nombre;
    }
    public setDireccion (direccion: string){
        this.direccion = direccion;
    }
    public getNombre (): string{
        return this.nombre;
    }
    public getDireccion (): string{
        return this.direccion;
    }
    public toString (){
        return "Persona ["+ "nombre:"+ this.nombre +", direccion: "+ this.direccion+"]";
    }*/
}
