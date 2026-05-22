// CAJA - versión terminal con confirmación repetida
const prompt = require("prompt-sync")({ sigint: true });

const listaDePedidos = [];
let totalAcumulado = 0;

function agregarPedido(nombreProducto, precio, cantidad) {
    const subtotal = precio * cantidad;
    listaDePedidos.push({ producto: nombreProducto, cantidad, precioUnitario: precio, subtotal });
    totalAcumulado += subtotal;
    console.log(`Agregado: ${nombreProducto} x${cantidad} ($${precio} c/u)`);
}

function eliminarPedido(nombreProducto) {
    const index = listaDePedidos.findIndex(p => p.producto.toLowerCase() === nombreProducto.toLowerCase());
    if (index !== -1) {
        totalAcumulado -= listaDePedidos[index].subtotal;
        console.log(`Eliminado: ${listaDePedidos[index].producto}`);
        listaDePedidos.splice(index, 1);
    } else {
        console.log("Producto no encontrado en la lista.");
    }
}

function mostrarPedidos() {
    console.log("\nLista de pedidos:");
    console.table(listaDePedidos);

    const subtotal = listaDePedidos.reduce((acc, { subtotal }) => acc + subtotal, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    console.log("\nResumen final:");
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`IVA (16%): $${iva.toFixed(2)}`);
    console.log(`TOTAL FINAL: $${total.toFixed(2)}`);
}

// Flujo principal
while (true) {
    const producto = prompt("Producto: ");
    const precio = parseFloat(prompt("Precio unitario: "));
    const cantidad = parseInt(prompt("Cantidad: "));

    agregarPedido(producto, precio, cantidad);
    mostrarPedidos();

    // Confirmación repetida
    while (true) {
        const confirmacion = prompt("\nEstás de acuerdo con la compra? (si/no): ").toLowerCase();

        if (confirmacion === "si") {
            console.log("\nGracias por tu compra");
            process.exit(0); // termina el programa
        } else if (confirmacion === "no") {
            const opcion = prompt("Quieres agregar o eliminar producto? (agregar/eliminar): ").toLowerCase();

            if (opcion === "agregar") {
                const producto = prompt("Producto: ");
                const precio = parseFloat(prompt("Precio unitario: "));
                const cantidad = parseInt(prompt("Cantidad: "));
                agregarPedido(producto, precio, cantidad);
                mostrarPedidos();
            } else if (opcion === "eliminar") {
                const producto = prompt("Nombre del producto a eliminar: ");
                eliminarPedido(producto);
                mostrarPedidos();
            } else {
                console.log("Opción no válida.");
            }
        } else {
            console.log("Respuesta inválida, escriba 'si' o 'no'.");
        }
    }
}
