import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../../nucleo/modelos/producto.model';
import { EstadoStockPipe } from '../../pipes/estado-stock.pipe';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [EstadoStockPipe],
  template: `
    <div class="card page-card h-100">
      <div class="card-body">
        <h5 class="card-title">{{ producto.nombre }}</h5>
        <p class="mb-1"><strong>Categoría:</strong> {{ producto.categoria }}</p>
        <p class="mb-1"><strong>Precio:</strong> S/ {{ producto.precio }}</p>
        <p class="mb-3"><strong>Estado:</strong> {{ producto.stock | estadoStock:producto.stockMinimo }}</p>
        <button class="btn btn-sm btn-outline-primary" (click)="verDetalle.emit(producto.id)">Ver detalle</button>
      </div>
    </div>
  `
})
export class TarjetaProductoComponent {
  @Input({ required: true }) producto!: Producto;
  @Output() verDetalle = new EventEmitter<number>();
}
