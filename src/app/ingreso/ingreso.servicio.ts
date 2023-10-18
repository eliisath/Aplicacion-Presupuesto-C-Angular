import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 450000),
    new Ingreso('Venta de Auto', 3800000),
  ];

  //Creo el metodo para eliminar
  eliminar(ingreso: Ingreso) {
    //Defino la const para obtener el indice, es una const ya que esta variable una vez inicializada no voy a modificar.
    //El indexOf me regresa el indice del obj que estoy recibiendo
    const indice: number = this.ingresos.indexOf(ingreso);
    //Luego que me regrese el indice puedo eliminar este registro, uso el arreglo de ingreso, y el metodo splice
    //que me proporciona el indice y le digo que unicamente borre un elemento que proporcione en el indice respectivo.
    this.ingresos.splice(indice, 1);
  }
}
