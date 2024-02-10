function saludar() {
  alert("Bienvenido");
}
saludar();

let opcion;
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
}
