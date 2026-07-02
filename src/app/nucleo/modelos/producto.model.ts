export type CategoriaProducto = 'Abarrotes' | 'Bebidas' | 'Limpieza' | 'Otros';

export interface Producto {
  id: number;
  nombre: string;
  categoria: CategoriaProducto;
  precio: number;
  stock: number;
  stockMinimo: number;
  fechaRegistro: Date;
}
