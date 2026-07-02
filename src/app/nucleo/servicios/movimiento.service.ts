import { Injectable, inject } from '@angular/core';
import { MovimientoInventario, TipoMovimiento } from '../modelos/movimiento.model';
import { ProductoService } from './producto.service';

@Injectable({ providedIn: 'root' })
export class MovimientoService {
  private productoService = inject(ProductoService);
  private siguienteId = 1;
  private movimientos: MovimientoInventario[] = [];

  obtenerMovimientos(): MovimientoInventario[] {
    return [...this.movimientos];
  }

  registrarMovimiento(productoId: number, tipo: TipoMovimiento, cantidad: number, observacion?: string): boolean {
    const producto = this.productoService.buscarPorId(productoId);
    if (!producto) return false;

    const actualizado = this.productoService.actualizarStock(productoId, cantidad, tipo);
    if (!actualizado) return false;

    this.movimientos.unshift({
      id: this.siguienteId++,
      productoId,
      productoNombre: producto.nombre,
      tipo,
      cantidad,
      fecha: new Date(),
      observacion
    });
    return true;
  }
}
