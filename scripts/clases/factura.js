class Factura {
  constructor (idFactura, fecha, idCliente, subtotal, impuesto,descuento, total) {
    this.idFactura = idFactura;
    this.fecha = fecha;
    this.idCliente = idCliente;
    this.subtotal = subtotal;
    this.impuesto = impuesto;
    this.descuento=descuento;
    this.total = total;
  }
  calculaTotal(){
    this.total=this.subtotal-this.descuento+this.impuesto;
  }

}

