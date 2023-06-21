/*He hecho de los clientes, estos se cargarán según se busque con el prompt, lo mismo será para los*/
/*class Producto{
  constructor(id, descripcion, precioUnitario, stock){
      this.id = id;
      this.descripcion =descripcion;
      this.precioUnitario=precioUnitario; 
      this.stock = stock;

  }*/

/* const producto={
    nombre: "Heladera Phillips",
    precio: 1500,
    stock: 12,
    descripcion: "Esta es una heladera",
    ubicacion: "Almacen 1"
  }*/

/*const nombreProducto=producto.nombre;
const precioProducto=producto.precio;*/

/*const{nombre, precio, stock, descripcion, ubicacion}=producto;
console.log(nombre);
*/
/*Desestructuracion*/
/*const mostrarProducto = ({nombre, precio, stock, descripcion, ubicacion})=>{
    const tarjeta=document.createElement("div");
    tarjeta.className = "tarjeta" ;
    tarjeta.innerHTML =`
        <h3>${nombre}</h3>
        <span>${precio}</span>
        <span>${stock}</span>
        <span>${descripcion}</span>
        <span>${ubicacion}</span>
        `
        const conteiner=document.querySelector("#conteiner");
        conteiner.append(tarjeta);
    
}

mostrarProducto(producto);
*/

const productos = [
  {
    id: 1,
    nombre: 'Cama colineal 1',
    precio: 1000,
    descripcion: 'producto descrito 1',
    stock: 25,
    urlImg: 'https://cdn.shopify.com/s/files/1/2098/0315/files/DormitorioCalabriahoneywashweb.jpg?v=1685549237',
  },
  {
    id: 2,
    nombre: 'Cama colineal 2',
    precio: 1230,
    descripcion: 'producto descrito 2',
    stock: 12,
    urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHcXEd0RsfgBCyeF6BiTYuyovhcDm6akreTZZyYI&s',
  },
  {
    id: 3,
    nombre: 'Cama colineal 3',
    precio: 1400,
    descripcion: 'producto descrito 3',
    stock: 3,
    urlImg: 'https://almacenesmorfeo.com/wp-content/uploads/2020/08/MODERNA-WENGUE.jpg',
  },
  {
    id: 4,  
    nombre: 'Cama colineal 4',
    precio: 2500,
    descripcion: 'producto descrito 4',
    stock: 12,
    urlImg: 'https://lacasadelmueblegt.com/wp-content/uploads/2019/09/CM0001B.jpg',
  },
  { id: 5,
    nombre: 'Cama colineal 5',
    precio: 3500,
    descripcion: 'producto descrito 5',
    stock: 10,
    urlImg: 'https://marcimex.vtexassets.com/arquivos/ids/159015/6062_cama-viviana2P_foto2.jpg?v=636821441437530000',
  },
  {
    id: 6,
    nombre: 'Cama colineal 6',
    precio: 1120,
    descripcion: 'producto descrito 6',
    stock: 12,
    urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuqEZIkfHxthFRbVOzxuOp9lTS1_u49fsLYkCj2UkKer0fM0_AUmOp7AISn6p0y2RnEk&usqp=CAU',
  },
];
const carrito=JSON.parse(localStorage.getItem("carrito")) ?? [];
const verProducto = ({id, nombre, precio, descripcion, stock, urlImg}) => {
  const contenedorTarjetas = document.querySelector ('#contenedorTarjetas');
  const tarjeta = document.createElement ('div');
  tarjeta.className = 'tarjeta';
  tarjeta.innerHTML = `
  <div>
      <img src="${urlImg}" alt="" width="100" height="100">
      <h3> Nombre: ${nombre} </h3>
      <p> Descripción: ${descripcion} </p>
      <span><b>Precio: </b> ${precio} </span>
      
      </div>  
      <form id="formCarrito${id}">
        <input name="id" type="hidden" value="${id}">
        <input name="cantidad" type="number" value="1" min=1 max="${stock}">
        <button type="submit">Agregar al carrito</button>
      </form>    
    
    
      `;
  contenedorTarjetas.append (tarjeta);
};

let numeroItems=0;

const verProductos = () => {
  productos.forEach (producto => {
    verProducto (producto);
    agregarCarrito(producto.id);
  });
  numeroItems=parseInt(localStorage.getItem("numeroItems"))??0;
  numeroItems=numeroItems+1;
  localStorage.setItem("numeroItems",numeroItems);
  document.getElementById("numeroItems").innerHTML=numeroItems;

};

const agregarCarrito=(id) => {
  const formCarrito=document.querySelector("#formCarrito"+id);
  formCarrito.addEventListener("submit", (e)=>{
    e.preventDefault();
    const cantidad=e.target.children["cantidad"].value;
    carrito.push({
      id,
      cantidad
    })
    localStorage.setItem("carrito",JSON.stringify(carrito));
    Swal.fire(
      'Producto agregado!',
      'Se ha agregado el producto al carrito de compra',
      'Exito'
    )
  })
}




verProductos ();
class Cliente {
  constructor (id, nombre, direccion, telefono, email) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
  }
}
let clientes = [];
function listaClientesDefault () {
  let id = '01';
  let nombre = 'Juan Perez';
  let direccion = 'Av. 25 de abril 333';
  let telefono = '099607238';
  let email = 'ajperez@xyz.com';
  const cliente1 = new Cliente (id, nombre, direccion, telefono, email);
  clientes.push (cliente1);

  id = '02';
  nombre = 'Pedro Pintado';
  direccion = 'Av. Argentina 283';
  telefono = '0123452';
  email = 'pepin.sdk@ksk.com';
  const cliente2 = new Cliente (id, nombre, direccion, telefono, email);
  clientes.push (cliente2);
}
function buscarPersona () {
  listaClientesDefault ();
  const porId = prompt ('Ingrese el id del Cliente (por ahora 01 o 02)');
  const resultadoCliente = searchClientes (porId);
  console.log (resultadoCliente.nombre);
}

function searchClientes (nameKey) {
  const found = clientes.find (element => element.id === nameKey);
  llenarCliente (found);
}

function llenarCliente (cliente) {
  document.getElementById ('nameClient').innerHTML = cliente.nombre;
  document.getElementById ('addressClient').innerHTML = cliente.direccion;
  document.getElementById ('phoneClient').innerHTML = cliente.telefono;
}



function ingresarProducto () {}

function incluirListaProductosDefault () {}

let totalElemento = 0;

function crearNewDiv () {
  let precio = parseFloat (document.getElementById ('precio').value);
  let unidades = parseInt (document.getElementById ('unidades').value);
  let descripcion = document.getElementById ('descripcion').value;
  let newDiv = document.createElement ('div');
  nombreFila = `nuevaFila${totalElemento}`;

  newDiv.id = nombreFila;

  let newNum = document.createElement ('div');
  newNum.id = `subNum${totalElemento}`;
  newNum.className = 'd-none d-sm-block col-1';
  let newDescripcion = document.createElement ('div');
  newDescripcion.id = `subDescripcion${totalElemento}`;
  newDescripcion.className = 'col-9 col-sm-5';
  let newCantidad = document.createElement ('div');
  newCantidad.id = `subCantidad${totalElemento}`;
  newCantidad.className = 'd-none d-sm-block col-2';
  let newUnitario = document.createElement ('div');
  newUnitario.id = `subUnitario${totalElemento}`;
  newUnitario.className = 'd-none d-sm-block col-2 text-95';
  let newTotal = document.createElement ('div');
  newTotal.id = `subTotal${totalElemento}`;
  newTotal.className = 'col-2 text-secondary-d2';

  if (totalElemento % 2 == 0) {
    newDiv.className = 'row mb-2 mb-sm-0 py-25';
  } else {
    newDiv.className = 'row mb-2 mb-sm-0 py-25 bgc-default-l4';
  }

  document.getElementById ('DetalleFactura').appendChild (newDiv);

  document.getElementById (nombreFila).appendChild (newNum);
  document.getElementById (nombreFila).appendChild (newDescripcion);
  document.getElementById (nombreFila).appendChild (newCantidad);
  document.getElementById (nombreFila).appendChild (newUnitario);
  document.getElementById (nombreFila).appendChild (newTotal);
  document.getElementById (newNum.id).innerHTML = totalElemento;
  document.getElementById (
    newDescripcion.id
  ).innerHTML = descripcion.toUpperCase ();
  document.getElementById (newCantidad.id).innerHTML = unidades;
  document.getElementById (newUnitario.id).innerHTML = precio;
  document.getElementById (newTotal.id).innerHTML = (unidades *
    precio).toFixed (2);

  totalElemento++;
}

function calcularTotal () {
  const IVA = 0.1; // 10% de impuestos
  let total = 0;
  let subtot = 0;
  for (let i = 0; i < totalElemento; i++) {
    const precio = parseFloat (
      document.getElementById (`subUnitario${i}`).innerHTML
    );
    const unidades = parseInt (
      document.getElementById (`subCantidad${i}`).innerHTML
    );

    if (!isNaN (precio) && !isNaN (unidades)) {
      subtot = subtot + precio * unidades;
    }
  }
  tax = subtot * IVA;
  total = subtot + tax;
  document.getElementById ('Subtotal').textContent = subtot.toFixed (2);
  document.getElementById ('Impuesto').textContent = tax.toFixed (2);
  document.getElementById ('Total').textContent = total.toFixed (2);
}

function arreglarVisualizacion () {
  let i = 0;
  while (i < totalElemento) {
    alert (i);
    let precio = parseFloat (
      document.getElementById (`subUnitario${i}`).innerHTML
    );
    let unidades = parseInt (
      document.getElementById (`subCantidad${i}`).innerHTML
    );
    let descripcionSubir = document.getElementById (`subDescripcion${i}`)
      .innerHTML;
    let totalRow = parseFloat (document.getElementById (`subTotal${i}`))
      .innerHTML;

    document.getElementById (
      `subDescripcion${i}`
    ).innerHTML = descripcionSubir.toUpperCase ();
    document.getElementById (`subCantidad${i}`).innerHTML = unidades.toFixed (
      2
    );
    document.getElementById (`subUnitario${i}`).innerHTML = precio.toFixed (2);
    document.getElementById (`subTotal${i}`).innerHTML = (unidades *
      precio).toFixed (2);

    i++;
  }
}

function mejoraryCalcular () {
  calcularTotal ();
  arreglarVisualizacion ();
}

function agregarArray () {}
