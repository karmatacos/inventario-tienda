import { Producto } from './producto.model';

export abstract class InventarioBase {
  protected productos: Producto[] = [];

  abstract obtenerProductos(): Producto[];

  totalProductos(): number {
    return this.productos.length;
  }

  valorTotalInventario(): number {
    return this.productos.reduce((total, producto) => total + producto.precio * producto.stock, 0);
  }
}
