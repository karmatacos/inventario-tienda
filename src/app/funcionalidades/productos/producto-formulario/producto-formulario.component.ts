import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../../nucleo/servicios/producto.service';
import { CategoriaProducto } from '../../../nucleo/modelos/producto.model';

@Component({
  selector: 'app-producto-formulario',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './producto-formulario.component.html'
})
export class ProductoFormularioComponent implements OnInit {
  private fb = inject(FormBuilder);
  private rutaActiva = inject(ActivatedRoute);
  private router = inject(Router);
  private productoService = inject(ProductoService);

  categorias: CategoriaProducto[] = ['Abarrotes', 'Bebidas', 'Limpieza', 'Otros'];
  productoId: number | null = null;

  productoForm = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    categoria: ['Abarrotes' as CategoriaProducto, Validators.required],
    precio: [1, [Validators.required, Validators.min(0.1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    stockMinimo: [1, [Validators.required, Validators.min(1)]]
  });

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.paramMap.get('id');
    if (id) {
      this.productoId = Number(id);
      const producto = this.productoService.buscarPorId(this.productoId);
      if (producto) {
        this.productoForm.patchValue({
          nombre: producto.nombre,
          categoria: producto.categoria,
          precio: producto.precio,
          stock: producto.stock,
          stockMinimo: producto.stockMinimo
        });
      }
    }
  }

  guardar(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    const datos = this.productoForm.getRawValue();
    if (this.productoId) {
      this.productoService.actualizar(this.productoId, datos);
    } else {
      this.productoService.agregar(datos);
    }

    void this.router.navigate(['/productos']);
  }
}
