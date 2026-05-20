// CAJA - versión genérica (Node.js y navegador)

const listaDePedidos = [];
let totalAcumulado = 0;

function agregarPedido(nombreProducto, precio, cantidad) {
    const subtotal = precio * cantidad;

    listaDePedidos.push({
        producto: nombreProducto,
        cantidad: cantidad,
        precioUnitario: precio,
        subtotal: subtotal
    });

    totalAcumulado += subtotal;

    console.log(`Agregado: ${nombreProducto} x${cantidad} ($${precio} c/u)`);
    console.log(`Total en caja: $${totalAcumulado}`);
}

function mostrarPedidos() {
    console.table(listaDePedidos);
    console.log(`TOTAL FINAL: $${totalAcumulado}`);

    // Mostrar también en navegador
    if (typeof document !== "undefined") {
        // limpiar antes de mostrar
        const oldTable = document.getElementById("tablaPedidos");
        if (oldTable) oldTable.remove();

        const tabla = document.createElement("table");
        tabla.id = "tablaPedidos";
        tabla.border = "1";
        tabla.innerHTML = `
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
            </tr>
        `;
        listaDePedidos.forEach(p => {
            tabla.innerHTML += `
                <tr>
                    <td>${p.producto}</td>
                    <td>${p.cantidad}</td>
                    <td>$${p.precioUnitario}</td>
                    <td>$${p.subtotal}</td>
                </tr>
            `;
        });
        document.body.appendChild(tabla);

        const total = document.createElement("h3");
        total.textContent = `TOTAL: $${totalAcumulado}`;
        document.body.appendChild(total);
    }
}

// -------------------------
// Ejemplo de uso en Node.js
if (typeof document === "undefined") {
    agregarPedido("Producto genérico", 10, 2);
    agregarPedido("Otro producto", 7, 5);
    mostrarPedidos();
}
