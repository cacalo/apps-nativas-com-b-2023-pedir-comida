import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://adrianacotte.com/wp-content/uploads/2021/05/hamburguesa01.jpeg",
        productos: [{
            nombre: 'Producto 1',
            precio: 2000,
            descripcion: 'Descripcion',
            imagen: ''
        },
        {
            nombre: 'Producto 2',
            precio: 3400,
            descripcion: 'Descripcion 2',
            imagen: ''
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://img-global.cpcdn.com/recipes/5422e9144d489156/1200x630cq70/photo.jpg",
        productos: []
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://i.blogs.es/d519e3/tarta-de-queso-y-cafe-sin-horno/840_560.jpeg",
        productos: []
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://pizzbur.com/wp-content/uploads/2016/05/20-datos-curiosos-sobre-bebidas-1920.jpg",
        productos: []
    }
]