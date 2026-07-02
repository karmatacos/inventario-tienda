import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Producto } from '../../../nucleo/modelos/producto.model';
import { ProductoService } from '../../../nucleo/servicios/producto.service';
import { EstadoStockPipe } from '../../../compartido/pipes/estado-stock.pipe';
import { ResaltarStockDirective } from '../../../compartido/directivas/resaltar-stock.directive';
import { TarjetaProductoComponent } from '../../../compartido/componentes/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [NgFor, RouterLink, EstadoStockPipe, ResaltarStockDirective, TarjetaProductoComponent],
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent implements OnInit {
  private productoService = inject(ProductoService);
  private router = inject(Router);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = this.productoService.obtenerProductos();
  }

  eliminar(id: number): void {
    this.productoService.eliminar(id);
    this.cargarProductos();
  }

  irDetalle(id: number): void {
    void this.router.navigate(['/productos', id]);
  }
}
