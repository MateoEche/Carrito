class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }

    toString() {
        return `${this.nombre} - $${this.precio.toFixed(2)}`;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`${producto.nombre} ha sido añadido al carrito.`);
        this.actualizarCarrito();
    }

    verCarrito() {
        return this.productos.map(producto => producto.toString()).join('\n');
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    actualizarCarrito() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';

        this.productos.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = producto.toString();
            cartItems.appendChild(li);
        });

        const totalPrice = document.getElementById('totalPrice');
        totalPrice.textContent = this.calcularTotal().toFixed(2);
    }
}

const carrito = new Carrito();

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName && productPrice) {
        const producto = new Producto(productName, productPrice);
        carrito.agregarProducto(producto);

        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
    } else {
        alert('Por favor, ingresa un nombre y un precio para el producto.');
    }
}
