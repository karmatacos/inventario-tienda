import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto.model';
import { InventarioBase } from '../modelos/inventario-base.model';

@Injectable({ providedIn: 'root' })
export class ProductoService extends InventarioBase {
  private siguienteId = 4;

  constructor() {
    super();
    this.productos = [
      { id: 1, nombre: 'Arroz Costeño 5kg', categoria: 'Abarrotes', precio: 18.5, stock: 20, stockMinimo: 5, fechaRegistro: new Date() },
      { id: 2, nombre: 'Gaseosa 1.5L', categoria: 'Bebidas', precio: 7.0, stock: 4, stockMinimo: 6, fechaRegistro: new Date() },
      { id: 3, nombre: 'Detergente 1kg', categoria: 'Limpieza', precio: 12.9, stock: 0, stockMinimo: 3, fechaRegistro: new Date() }
    ];
  }

  override obtenerProductos(): Producto[] {
    return [...this.productos];
  }

  buscarPorId(id: number): Producto | undefined {
    return this.productos.find((producto) => producto.id === id);
  }

  agregar(producto: Omit<Producto, 'id' | 'fechaRegistro'>): void {
    this.productos.push({ ...producto, id: this.siguienteId++, fechaRegistro: new Date() });
  }

  actualizar(id: number, cambios: Omit<Producto, 'id' | 'fechaRegistro'>): boolean {
    const indice = this.productos.findIndex((producto) => producto.id === id);
    if (indice === -1) return false;
    this.productos[indice] = { ...this.productos[indice], ...cambios };
    return true;
  }

  eliminar(id: number): void {
    this.productos = this.productos.filter((producto) => producto.id !== id);
  }

  actualizarStock(id: number, cantidad: number, tipo: 'Entrada' | 'Salida'): boolean {
    const producto = this.buscarPorId(id);
    if (!producto) return false;
    if (tipo === 'Salida' && producto.stock < cantidad) return false;
    producto.stock = tipo === 'Entrada' ? producto.stock + cantidad : producto.stock - cantidad;
    return true;
  }

  productosBajoStock(): Producto[] {
    return this.productos.filter((producto) => producto.stock > 0 && producto.stock <= producto.stockMinimo);
  }
}
