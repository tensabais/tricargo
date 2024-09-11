export class Pedido {
    codigo: number;
    fechaPedido: Date;
    fechaEntrega: Date;
    precio: number;
    cliente: string;
    trans: string;
  
    // Constructor con parámetros opcionales y valores predeterminados
    constructor(
      codigo: number = 0,
      fechaPedido: Date = new Date(),
      fechaEntrega: Date = new Date(),
      precio: number = 0,
      cliente: string = '',
      trans: string = ''
    ) {
      this.codigo = codigo;
      this.fechaPedido = fechaPedido;
      this.fechaEntrega = fechaEntrega;
      this.precio = precio;
      this.cliente = cliente;
      this.trans = trans;
    }
  }