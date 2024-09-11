export class Cliente {
    codigo: number;
    nombre: string;
    apellido: string;
    direccion: string;
    numeroCelular: number;
    correoElectronico: string;
  
    // Constructor con parámetros opcionales y valores predeterminados
    constructor(
      codigo: number = 0,
      nombre: string = '',
      apellido: string = '',
      direccion: string = '',
      numeroCelular: number = 0,
      correoElectronico: string = ''
    ) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.numeroCelular = numeroCelular;
      this.correoElectronico = correoElectronico;
    }
  }