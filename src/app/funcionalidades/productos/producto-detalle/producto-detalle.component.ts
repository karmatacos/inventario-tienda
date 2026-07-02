import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Producto } from '../../../nucleo/modelos/producto.model';
import { ProductoService } from '../../../nucleo/servicios/producto.service';
import { EstadoStockPipe } from '../../../compartido/pipes/estado-stock.pipe';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [NgIf, RouterLink, EstadoStockPipe],
  template: `
    <div class="card page-card p-4" *ngIf="producto; else sinProducto">
      <h2>{{ producto.nombre }}</h2>
      <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
      <p><strong>Precio:</strong> S/ {{ producto.precio }}</p>
      <p><strong>Stock:</strong> {{ producto.stock }}</p>
      <p><strong>Stock mínimo:</strong> {{ producto.stockMinimo }}</p>
      <p><strong>Estado:</strong> {{ producto.stock | estadoStock:producto.stockMinimo }}</p>
      <a class="btn btn-outline-secondary" routerLink="/productos">Volver</a>
    </div>

    <ng-template #sinProducto>
      <div class="alert alert-warning">No se encontró el producto.</div>
      <a class="btn btn-outline-secondary" routerLink="/productos">Volver</a>
    </ng-template>
  `
})
export class ProductoDetalleComponent implements OnInit {
  private rutaActiva = inject(ActivatedRoute);
  private productoService = inject(ProductoService);
  producto?: Producto;

  ngOnInit(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.producto = this.productoService.buscarPorId(id);
  }
}
