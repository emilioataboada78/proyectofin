// Variables
const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const botonesComprar = document.querySelectorAll(".btn-comprar");
const formularioContacto = document.getElementById("form-contacto");

// Función para actualizar el carrito
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    });
    li.appendChild(btnEliminar);
    listaCarrito.appendChild(li);
    total += producto.precio;
  });

  totalCarrito.textContent = total;
}

// Agregar productos al carrito
botonesComprar.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const producto = e.target.parentElement;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    carrito.push({ nombre, precio });
    actualizarCarrito();
    alert(`${nombre} añadido al carrito.`);
  });
});

// Finalizar compra
document.getElementById("finalizar-compra").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    alert("¡Compra realizada con éxito!");
    carrito.length = 0; // Vaciar el carrito
    actualizarCarrito();
  }
});

// Validación del formulario de contacto
formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
  formularioContacto.reset();
});
