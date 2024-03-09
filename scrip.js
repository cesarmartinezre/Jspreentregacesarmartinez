
/* function saludar() {
  alert("Bienvenido");
}
saludar();
 */

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

/* let productos = [
  {id : 1, nombre: "Honda Gold Wing Tour 2024", categoria: "tourer", cilindraje: "1.833 cc", precio: 29.999, Imagen: "Honda Gold Wing Tour 2024.jpg"  },
  {id : 2, nombre: "BMW M 1000 XR 2024", categoria: "tourer", cilindraje: "999 cc", precio: 24.200, Imagen: "BMW-M-1000-XR-2024.jpg" },
  {id : 3, nombre: "KTM 690 Enduro R 2023", categoria: "enduro", cilindraje: "690 cc", precio: 12.249, Imagen: "KTM 690 Enduro R 2023.jpg" },
  {id : 4, nombre: "GasGas EC 200 2019", categoria: "enduro", cilindraje: "199,40 cc", precio: 7.499, Imagen: "GasGas EC 200 2019.jpg" },
  {id : 5, nombre: "Yamaha TMAX 2024", categoria: "maxi-scooter", cilindraje: "562 cc", precio: 14.099, Imagen: "Yamaha TMAX 2024.jpg" },
  {id : 6, nombre: "Piaggio MP3 530 Exclusive 2023", categoria: "maxi-scooter", cilindraje: "530 cc", precio: 12.999, Imagen: "Piaggio MP3 530 Exclusive 2023.jpg" },
  {id : 7, nombre: "Honda X-ADV 2024", categoria: "maxi-scooter", cilindraje: "745 cc", precio: 13.050, Imagen: "Honda X-ADV 2024.jpg" },
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
} */

//TERCERA PRE ENTREGA
function obtenerProductos() {
  
  return [
    {id : 1, nombre: "Honda Gold Wing Tour 2024", categoria: "tourer", stock: 5, cilindraje: "1833 cc", precio: 29.999, Imagen: "Honda Gold Wing Tour 2024.webp"  },
    {id : 2, nombre: "BMW M 1000 XR 2024", categoria: "tourer", stock: 3,  cilindraje: "999 cc", precio: 24.200, Imagen: "BMW-M-1000-XR-2024.jpg" },
    {id : 3, nombre: "KTM 690 Enduro R 2023", categoria: "enduro", stock: 10,  cilindraje: "690 cc", precio: 12.249, Imagen: "KTM 690 Enduro R 2023.jpg" },
    {id : 4, nombre: "GasGas EC 200 2019", categoria: "enduro", stock: 6, cilindraje: "19940 cc", precio: 7.499, Imagen: "GasGas EC 200 2019.jpg" },
    {id : 5, nombre: "Yamaha TMAX 2024", categoria: "maxi scooter", stock: 5, cilindraje: "562 cc", precio: 14.099, Imagen: "Yamaha TMAX 2024.jpg" },
    {id : 6, nombre: "Piaggio MP3 530 Exclusive 2023", categoria: "maxi scooter", stock: 1, cilindraje: "530 cc", precio: 12.999, Imagen: "Piaggio MP3 530 Exclusive 2023.webp" },
    {id : 7, nombre: "Honda X-ADV 2024", categoria: "maxi scooter", stock: 4, cilindraje: "745 cc", precio: 13.050, Imagen: "Honda X-ADV 2024.jpg" },
    {id : 8, nombre: "Triumph Tiger 1200 GT Pro 2024", categoria: "deportivas", stock: 2, cilindraje: "1160 cc", precio: 22.845, Imagen: "Triumph Tiger 1200 GT Pro 2024.jpg" },
]
}

principal()

function principal() {
    let productos = obtenerProductos()
    renderizarProductos(productos)
    renderizarCarrito()

    let input = document.getElementById("input")
    let inputPrecioMenor = document.getElementById("precioMenor")
    let inputPrecioMayor = document.getElementById("precioMayor")

    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", () => filtrarTarjetas(input, inputPrecioMenor, inputPrecioMayor))

    let botonComprar = document.getElementById("comprar")
    botonComprar.addEventListener("click", finalizarCompra)

    let botonVerOcultar = document.getElementById("verOcultarInfo")
    botonVerOcultar.addEventListener("click", verOcultarProductosCarrito)

    let contenedorBotones = document.getElementById("categorias")
    let categorias = obtenerDiferentesCategorias(productos)
    crearBotonesFiltros(contenedorBotones, categorias)
}

function crearBotonesFiltros(contenedor, categorias) {
    categorias.forEach(categoria => {
        let boton = document.createElement("button")
        boton.innerText = categoria
        boton.id = categoria
        boton.addEventListener("click", filtrarPorCategoria)
        contenedor.append(boton)
    })
}

function obtenerDiferentesCategorias(productos) {
    let categorias = []
    productos.forEach(producto => {
        if (!categorias.includes(producto.categoria)) {
            categorias.push(producto.categoria)
        }
        
    })
    return categorias
}

function filtrarPorCategoria(e) {
    let categoria = e.target.id
    console.log(categoria)
    let productos = obtenerProductos()
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
    renderizarProductos(productosFiltrados)
}

function verOcultarProductosCarrito(e) {
    let seccionVenta = document.getElementById("seccionVenta")
    let seccionCarrito = document.getElementById("seccionCarrito")

    seccionVenta.classList.toggle("oculta")
    seccionCarrito.classList.toggle("oculta")

    e.target.innerText = e.target.innerText === "Ver carrito" ? "Ver productos" : "Ver carrito"
}

function finalizarCompra() {
    alert("Gracias por su compra")
    localStorage.removeItem("carrito")
    renderizarCarrito()
}

function renderizarProductos(productos) {
    let contenedor = document.getElementById("productos")
    contenedor.innerHTML = ""
    productos.forEach(({ Imagen, nombre, precio, stock, id }) => {

        let tarjetaProd = document.createElement("div")
        tarjetaProd.className = "producto"

        tarjetaProd.innerHTML = `
            <img src="./images/${Imagen}" />
            <h3>${nombre}</h3>
            <h4>${precio}</h4>
            <p>Quedan ${stock} unidades</p>
            <button id=${id}>Agregar al carrito</button>
        `

        contenedor.append(tarjetaProd)
        let botonAgregarAlCarrito = document.getElementById(id)
        botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito)
    })
}

function agregarAlCarrito(e) {
    let carrito = obtenerCarrito()
    let productos = obtenerProductos()

    let idBotonProducto = Number(e.target.id)
    let productoBuscado = productos.find(({ id }) => id === idBotonProducto)
    let { id, nombre, precio, stock } = productoBuscado
    let productoEnCarrito = carrito.find(({ id }) => id === idBotonProducto)

    if (stock > 0) {
        productoBuscado.stock--
        if (productoEnCarrito) {
            productoEnCarrito.unidades++
            productoEnCarrito.subtotal = productoEnCarrito.precioUnitario * productoEnCarrito.unidades
        } else {
            carrito.push({
                id, // es equivalente a decir id: id
                nombre,
                precioUnitario: precio,
                unidades: 1,
                subtotal: precio
            })
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
        renderizarCarrito()
    } else {
        alert("No queda más ")
    }
}

function modificarTotal() {
    let carrito = obtenerCarrito()
    let nodoTotal = document.getElementById("montoTotal")
    nodoTotal.innerText = carrito ? carrito.reduce((acum, prod) => acum + prod.subtotal, 0) : 0
}

function renderizarCarrito() {
    let carrito = obtenerCarrito()

    let contenedor = document.getElementById("carrito")
    contenedor.innerHTML = ""

    carrito.forEach(({ nombre, precioUnitario, unidades, subtotal }) => {
        let item = document.createElement("tr")

        item.innerHTML = `
            <td>${nombre}</td>
            <td>${precioUnitario}</td>
            <td>${unidades}</td>
            <td>${subtotal}</td>
        `
        contenedor.append(item)
    })

    modificarTotal()
}

function filtrarTarjetas(inputNombre, inputPrecioMenor, inputPrecioMayor) {
    let productosFiltrados
    let productos = obtenerProductos()
    if (inputNombre.value && (!inputPrecioMenor.value && !inputPrecioMayor.value)) {
        productosFiltrados = productos.filter(producto => producto.nombre.includes(inputNombre.value))
    } else if (!inputNombre.value && (inputPrecioMenor.value && inputPrecioMayor.value)) {
        productosFiltrados = productos.filter(producto => producto.precio >= Number(inputPrecioMenor.value) && producto.precio <= Number(inputPrecioMayor.value))
    } else if (inputNombre.value && inputPrecioMenor.value && inputPrecioMayor.value) {
        productosFiltrados = productos.filter(producto => producto.nombre.includes(inputNombre.value) && producto.precio >= Number(inputPrecioMenor.value) && producto.precio <= Number(inputPrecioMayor.value))
    }
    renderizarProductos(productosFiltrados)
}

function obtenerCarrito() {
    return localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
    
}
