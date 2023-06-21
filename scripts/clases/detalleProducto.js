class detalleProducto {
    constructor (idFactura, idProducto, cantidad, pUnitario, descuento, pTotal) {
      this.idFactura = idFactura;
      this.idProducto = idProducto;
      this.cantidad = cantidad;
      this.pUnitario = pUnitario;
      this.descuento=descuento;
      this.pTotal = pTotal;
    }
    calculaTotalDetalle(){
      this.pTotal=(this.cantidad*(this.pUnitario-this.descuento));
    }
  
  }