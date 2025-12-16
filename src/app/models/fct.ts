import { Alumno } from "./alumno";

export class Fct {

    //Constructor
    constructor(
        private _apto: boolean,
        private _fecha_inicio: Date,
        private _fecha_fin: Date,
        private _alumnos: Alumno[]
    ){};

    //Getters y setters
    get apto(): boolean { return this._apto; }
    set apto(value: boolean) { this._apto = value; }
    get fecha_inicio(): Date { return this._fecha_inicio; }
    set fecha_inicio(value: Date) { this._fecha_inicio = value; }
    get fecha_fin(): Date { return this._fecha_fin; }
    set fecha_fin(value: Date) { this._fecha_fin = value; }
    get alumnos(): Alumno[] { return this._alumnos; }
    set alumnos(value: Alumno[]) { this._alumnos = value; }

    //Other methos
    public menores_edad(): Alumno[]{
        return this._alumnos.filter(a => a.es_menor());
    }
    
}
