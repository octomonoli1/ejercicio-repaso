import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empresa } from './models/empresa';
import { Fct } from './models/fct';
import { Alumno } from './models/alumno';
import { DatePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  protected readonly title = signal('ejercicio-repaso');
  public empresa: Empresa | null = null;
  public nombre: string = "";
  public fecha_inicio: Date = new Date();
  public fecha_fin: Date = new Date();
  public apto: boolean = false;

  ngOnInit(): void {
    this.iniciar_app();
  }

  public iniciar_app(): void{
    
    let telefonos: Map<String, String > = new Map<String,String>();
    telefonos.set("Casa", "988777222");
    telefonos.set("Trabajo","778899110");

    let alumno1: Alumno = new Alumno("1111111L","Pepito perez", new Date(), telefonos);
    let alumno2: Alumno = new Alumno("2222222P","Juanita Sancho", new Date(), telefonos);
    let fct1: Fct = new Fct(false, new Date("2026/01/12"), new Date("2026/04/15"), [alumno1, alumno2]);
    let fct2: Fct = new Fct(true, new Date("2026/04/04"), new Date("2026/04/29"), [alumno1, alumno2]);

    this.empresa = new Empresa("B0000123", "C/ Benajete 12", "La Lola", [fct1, fct2]);

  }

  public nueva_practica(event: Event){

    event.preventDefault();

    let alumno_new: Alumno = new Alumno("", this.nombre, new Date(), new Map<String,String>());
    let fct: Fct = new Fct(this.apto, this.fecha_inicio, this.fecha_fin, [alumno_new]);
    this.empresa?.fcts.push(fct);

  }

  //Pulir este metodo
  public eliminar(alumnoABorrar: Alumno, event: Event){

    event?.preventDefault();
    if (!this.empresa || !this.empresa.fcts) return;

  for (const fct of this.empresa.fcts) {
    const index = fct.alumnos.findIndex(a => a.dni === alumnoABorrar.dni);
    if (index !== -1) {
      fct.alumnos.splice(index, 1); // Borra el alumno del array
    }
  }
  }
}
