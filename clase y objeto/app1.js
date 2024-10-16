class producto{
    constructor(nombre, precio){
        this._nombre= nombre;
        this._precio= precio;
    }
    //metodo paara mostrar informacion del producto
    mostrarinfo(){
        console.log(`producto: ${this._nombre}, precio: ${this._precio}`);
    }
    

}
//creamos los objetos de la clase producto
let producto1 = new producto('laptop', 1200);
let producto2 = new producto('Telefono', 800);

console.log(producto1)
console.log(producto2)

producto1.mostrarinfo();
