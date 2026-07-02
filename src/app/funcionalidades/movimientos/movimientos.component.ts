import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../nucleo/modelos/producto.model';
import { MovimientoInventario, TipoMovimiento } from '../../nucleo/modelos/movimiento.model';
import { ProductoService } from '../../nucleo/servicios/producto.service';
import { MovimientoService } from '../../nucleo/servicios/movimiento.service';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './movimientos.component.html'
})
export class MovimientosComponent implements OnInit {
  private fb = inject(FormBuilder);
  private productoService = inject(ProductoService);
  private movimientoService = inject(MovimientoService);

  productos: Producto[] = [];
  movimientos: MovimientoInventario[] = [];
  mensaje = '';

  movimientoForm = this.fb.nonNullable.group({
    productoId: [1, Validators.required],
    tipo: ['Entrada' as TipoMovimiento, Validators.required],
    cantidad: [1, [Validators.required, Validators.min(1)]],
    observacion: ['']
  });

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.productos = this.productoService.obtenerProductos();
    this.movimientos = this.movimientoService.obtenerMovimientos();
  }

  registrar(): void {
    if (this.movimientoForm.invalid) return;

    const datos = this.movimientoForm.getRawValue();
    const correcto = this.movimientoService.registrarMovimiento(
      Number(datos.productoId),
      datos.tipo,
      Number(datos.cantidad),
      datos.observacion
    );

    this.mensaje = correcto ? 'Movimiento registrado correctamente.' : 'No se pudo registrar el movimiento.';
    this.cargarDatos();
  }
}
