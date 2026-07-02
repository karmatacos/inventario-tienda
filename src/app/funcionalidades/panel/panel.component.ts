import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductoService } from '../../nucleo/servicios/producto.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <h2 class="mb-4">Panel de inventario</h2>
    <div class="row g-3">
      <div class="col-md-4">
        <div class="card page-card p-4">
          <h6>Total de productos</h6>
          <h2>{{ total }}</h2>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card page-card p-4">
          <h6>Productos con bajo stock</h6>
          <h2>{{ bajoStock }}</h2>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card page-card p-4">
          <h6>Valor del inventario</h6>
          <h2>{{ valor | currency:'PEN':'symbol':'1.2-2' }}</h2>
        </div>
      </div>
    </div>
  `
})
export class PanelComponent implements OnInit {
  private productoService = inject(ProductoService);
  total = 0;
  bajoStock = 0;
  valor = 0;

  ngOnInit(): void {
    this.total = this.productoService.totalProductos();
    this.bajoStock = this.productoService.productosBajoStock().length;
    this.valor = this.productoService.valorTotalInventario();
  }
}
