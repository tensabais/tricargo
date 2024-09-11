export class Empleado {
  codigo: number;
  nombre: string;
  apellido: string;
  numeroCelular: number;
  salario: number;
  cargo: string;

  // Constructor con parámetros para inicializar las propiedades
  constructor(
    codigo: number = 0,
    nombre: string = '',
    apellido: string = '',
    numeroCelular: number = 0,
    salario: number = 0,
    cargo: string = ''
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroCelular = numeroCelular;
    this.salario = salario;
    this.cargo = cargo;
  }
}