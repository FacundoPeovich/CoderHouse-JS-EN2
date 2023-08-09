// Array para almacenar los productos seleccionados

const carrito = [];

// Base de datos de productos con sus precios

const productos = {
    zapatilla: 1000,
    remera: 200,
    pantalon: 500,
    buzo: 800,
    campera: 1200,
};

// Función para generar un ID único al azar

const generarID = () => {
    const numericID = Math.floor(Math.random() * 1000000000);
    return numericID.toString();
};


// Función para agregar un producto al carrito con cantidad

function agregarAlCarrito(producto, cantidad) {
    const id = generarID();
    carrito.push({ id, producto, cantidad, precio: productos[producto] * cantidad });
}

// Función para mostrar el contenido del carrito

function obtenerResumenCarrito() {
    let resumen = "Productos en el carrito:\n";
    carrito.forEach(item => {
        resumen += `ID: ${item.id}, Producto: ${item.producto}, Cantidad: ${item.cantidad}, Precio Total: $${item.precio}\n`;
    });
    return resumen;
}

// Función para mostrar las opciones de productos disponibles

function mostrarOpcionesProductos() {
    const opciones = Object.keys(productos).join(", ");
    alert(`Productos disponibles: ${opciones}`);
}

// Función para obtener la selección del usuario

function obtenerSeleccionUsuario() {
    return prompt("Ingrese el nombre del producto que desea comprar, 'salir' para finalizar:").toLowerCase();
}

// Función para obtener confirmación del usuario

function obtenerConfirmacion() {
    return prompt("¿Desea comprar este producto? (si/no):").toLowerCase();
}

// Función para obtener la cantidad de productos deseada

function obtenerCantidadProductos() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingrese la cantidad de productos (1-99):"));
    } while (isNaN(cantidad) || cantidad < 1 || cantidad > 99);
    return cantidad;
}

// Función para mostrar resumen de la compra

function mostrarResumenCarrito() {
    if (carrito.length > 0) {
        alert("Resumen de la compra:\n" + obtenerResumenCarrito());
    } else {
        alert("El carrito está vacío. No se realizaron compras.");
    }
}

// Función principal para ejecutar el sistema

function ejecutarSistema() {
    alert("Bienvenido.");
    mostrarOpcionesProductos();

    let input = obtenerSeleccionUsuario();

    while (input !== "salir") {
        if (!productos[input]) {
            alert("Producto no válido. Opciones disponibles:");
            mostrarOpcionesProductos();
        } else {
            alert(`Producto seleccionado: ${input}\nPrecio: $${productos[input]}`);
            const confirmacion = obtenerConfirmacion();

            if (confirmacion === "si") {
                const cantidad = obtenerCantidadProductos();
                agregarAlCarrito(input, cantidad);
                alert(`"${input}" se ha agregado al carrito. Cantidad: ${cantidad}`);
            }
        }

        input = obtenerSeleccionUsuario();
    }

    mostrarResumenCarrito();
    alert("Gracias por tu compra. ¡Vuelve pronto!");
}

// Iniciar el sistema

ejecutarSistema();
