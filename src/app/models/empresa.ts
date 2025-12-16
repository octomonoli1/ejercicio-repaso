import { Alumno } from "./alumno";
import { Fct } from "./fct";

export class Empresa {
    
    //Constructor
    constructor(
        private _cif: string,
        private _direccion: string,
        private _nombre: string,
        private _fcts: Fct[]
    ){};

    //Getters y setters
    get cif(): string { return this._cif; }
    set cif(value: string) { this._cif = value; }
    get direccion(): string { return this._direccion; }
    set direccion(value: string) { this._direccion = value; }
    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }
    get fcts(): Fct[] { return this._fcts; }
    set fcts(value: Fct[]) { this._fcts = value; }

    //Other methods
    public alumnos_actuales(): Alumno[] {
        let alumnos_repetidos: Alumno[] = this._fcts.flatMap(f => f.alumnos);
        let alumnos_set: Set<Alumno> = new Set(alumnos_repetidos);
        let alumnos_sin_repetir: Alumno[] = [...alumnos_set];

        return alumnos_sin_repetir;

        //return [...new Set(this._fcts.flatMap(f => f.alumnos))]
    }

}

