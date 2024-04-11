class ProductManager {
    constructor() {
        this.products = [];
        this.lastId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        const productoExistente = this.products.find(product => product.code === code);
        if (productoExistente) {
            console.error("Ya existe un producto con el mismo código");
            return;
        }

        this.lastId++;

        const newProduct = {
            id: this.lastId,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };
        this.products.push(newProduct);

        console.log("Producto agregado correctamente:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
        }
    }
}

const manager = new ProductManager();
manager.addProduct("Producto 1", "Descripción del Producto 1", 12.00, "imagen1.jpg", "xxxfg5", 20);
manager.addProduct("Producto 2", "Descripción del Producto 2", 15.00, "imagen2.jpg", "rfgt67", 10);
console.log("Todos los productos:", manager.getProducts());
console.log("Producto con ID 1:", manager.getProductById(1));
console.log("Producto con ID 3:", manager.getProductById(3));
 export default ProductManager         