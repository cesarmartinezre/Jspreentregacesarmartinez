function saludar() {
  alert("Bienvenido");
}
saludar();

// primero pre entrega

/* let opcion;
let total = 0;
let cantidad = 0;

do {
  opcion = Number(
    prompt(
      "Ingresar opcion\n1 suma de items\n2 calcular promedio a pagar\n3 para reiniciar"
    )
  );

  if (opcion === 1) {
    cantidad = Number(prompt("Ingrese monto disponible "));
    total = cargarCantidad(cantidad);
  } else if (opcion === 2) {
    let promedio = total / cantidad;
    alert("El promedio a pagar es " + promedio);
  } else if (opcion === 3) {
    total = 0;
  } else if (opcion === 0) {
    alert("no permitido");
  }
} while (opcion !== 0);

function cargarCantidad(cantidad) {
  let cantidadTotal = 0;
  for (let i = 0; i < cantidad; i++) {
    cantidadTotal =
      cantidadTotal + Number(prompt("Ingrese cantidad de items" + (i + i)));
  }
  return cantidadTotal;
} */

// segunda pre entrega

let productos = [
  {id : 1, nombre: "Honda Gold Wing Tour 2024", categoria: "tourer", cilindraje: "1.833 cc", precio: 29.999 },
  {id : 2, nombre: "BMW M 1000 XR 2024", categoria: "tourer", cilindraje: "999 cc", precio: 24.200 },
  {id : 3, nombre: "KTM 690 Enduro R 2023", categoria: "enduro", cilindraje: "690 cc", precio: 12.249 },
  {id : 4, nombre: "GasGas EC 200 2019", categoria: "enduro", cilindraje: "199,40 cc", precio: 7.499 },
  {id : 5, nombre: "Yamaha TMAX 2024", categoria: "maxi-scooter", cilindraje: "562 cc", precio: 14.099 },
  {id : 6, nombre: "Piaggio MP3 530 Exclusive 2023", categoria: "maxi-scooter", cilindraje: "530 cc", precio: 12.999 },
  {id : 7, nombre: "Honda X-ADV 2024", categoria: "maxi-scooter", cilindraje: "745 cc", precio: 13.050},
]

let carro = []
let opcion
let mensaje = "Ingresa\n1 - Buscar producto\n2 - Filtrar categoria\n3 - Agregar producto al carro\n4 - Finalizar compra\n0 - Salir "

do {
  opcion = Number(prompt(mensaje))
  if (opcion === 1){
       let id = Number(prompt("Ingrese ID de producto buscado\n" + listarProductos(productos)))
       let productobuscado = productos.find(producto => producto.id === id)
       if (productobuscado) {
          alert("El producto es " + productobuscado.nombre)
       } else {
          alert("Producto no encontrado")
       }
  } else  if (opcion === 2){
      let id = Number(prompt("Ingrese ID de la categoria buscada\n" + listarCategorias(productos)))
      let categoriaBuscada = productos.find(catalogo => catalogo.id === id)
      if (categoriaBuscada) {
          alert("La categoria es " + categoriaBuscada.categoria + " - " + categoriaBuscada.nombre)
       } else {
          alert("Categoria no encontrado")
       }

  } else  if (opcion === 3){
      let id = Number(prompt("Ingrese ID de producto para agregar\n" + listarProductos(productos)))
      let productoEscogido = productos.find(producto => producto.id === id)
      let productoExistente = carro.find(producto => producto.id ===productoEscogido.id)

      if (productoExistente) {
          productoExistente.unidades++
          productoExistente.subtotal = productoExistente.precio * productoExistente.unidades

      } else {
          carro.push({
              id: productoEscogido.id,
              nombre: productoEscogido.nombre,
              precio: productoEscogido.precio,
              unidades: 1,
              subtotal: productoEscogido.precio
          })
      }

  
  } else  if (opcion === 4){
      let total = carro.reduce((acum, prod) => acum + prod.subtotal, 0)
      alert("El total a pagar es " + total)
      carro = []
  
  }
} while (opcion !== 0)

function listarProductos(productos) {
  let salida = " ID - Nombre de producto\n"
  productos.forEach(producto => {
      salida = salida + producto.id + " - " + producto.nombre + "\n"
  })
  return salida 
}

function listarCategorias(productos) {
  let salida = " ID - Categoria\n"
  productos.forEach(catalogo => {
      salida = salida + catalogo.id + " - " + catalogo.categoria + "\n"
  })
  return salida 
}
