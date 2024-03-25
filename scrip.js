function pedirDatosAlBackend() {
    fetch("./datos.json")
        .then(resp => resp.json())
        .then(info => principal(info))
        .catch(error => lanzarAlerta(error))
}
pedirDatosAlBackend()
    
function principal(productos) {
    // let productos = obtenerProductos()
    renderizarProductos(productos)
    renderizarCarrito()

    let input = document.getElementById("input")
    let inputPrecioMenor = document.getElementById("precioMenor")
    let inputPrecioMayor = document.getElementById("precioMayor")

    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", () => filtrarTarjetas(input, inputPrecioMenor, inputPrecioMayor, productos))

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

        boton.addEventListener("click", (e) => filtrarPorCategoria (e, productos))
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

function filtrarPorCategoria(e, productos) {
    let categoria = e.target.id
    // let productos = obtenerProductos()
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

    lanzarAlerta("Gracias por su compra", "Te esperamos de nuevo", "success", 3000)
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
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito(e, productos))
    })
}

function agregarAlCarrito(e, productos) {
    let carrito = obtenerCarrito()
    // let productos = obtenerProductos()

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
                id, 
                nombre,
                precioUnitario: precio,
                unidades: 1,
                subtotal: precio
            })
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
        renderizarCarrito()

        lanzarTostada("Producto agregado", 2000, "bottom", "center", true)
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

function filtrarTarjetas(inputNombre, inputPrecioMenor, inputPrecioMayor, productos) {
    let productosFiltrados
    // let productos = obtenerProductos()
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

function lanzarAlerta(title, text, icon, timer) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        timer: timer,
        timerProgressBar: true,
        showConfirmButton: false
    })
}

function lanzarTostada(text, duration, gravity, position, close) {
    Toastify({
        text: text,
        duration: duration,
        gravity: gravity,
        position: position,
        close: close
    }).showToast();
}


