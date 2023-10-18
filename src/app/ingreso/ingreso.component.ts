import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})

export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  //Inyecto una instancia
  constructor(private ingresoServicio: IngresoServicio) {}

  //Aprovecho este metodo para inicializar el arreglo de ingresos.
  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  //Declaro la variable de tipo ingreso
  eliminarRegistro(ingreso: Ingreso) {
    //luego creo el metodo para eliminar en ingreso.servicio.ts y lo mando a llamar desde aca.
    this.ingresoServicio.eliminar(ingreso);
  }
}
