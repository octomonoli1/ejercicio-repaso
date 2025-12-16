export class Alumno {

    private MAYOR_EDAD: number = 18;

    //Constructor
    constructor(
        private _dni: string,
        private _nombre: string,
        private _fecha_nacimiento: Date,
        private _telefonos: Map<String, String>
    ){};

    //Getters y setters
    get dni(): string { return this._dni; }
    set dni(value: string) { this._dni = value; }
    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }
    get fecha_nacimiento(): Date { return this._fecha_nacimiento; }
    set fecha_nacimiento(value: Date) { this._fecha_nacimiento = value; }
    get telefonos(): Map<String, String> { return this._telefonos; }
    set telefonos(value: Map<String, String>) { this._telefonos = value; }

    //Other methods
    public add_phone(desc: string, phone: string): void{
        this._telefonos.set(desc, phone);
    }
    
    public delete_phone(desc: string): boolean{
        return this._telefonos.delete(desc);
    }

    public print_phones(): void{
        this._telefonos.forEach(([k,v]) => console.log(k + ": " + v + "\n"));
    }

    public es_menor(): boolean{
        return (new Date().getFullYear() - this._fecha_nacimiento.getFullYear()) < this.MAYOR_EDAD;
    }
}
