import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="card page-card p-5 text-center">
      <h1 class="mb-3">Sistema de Gestión de Inventario para una Tienda</h1>
      <p class="lead">Aplicación desarrollada con Angular, TypeScript y Bootstrap para controlar productos y stock.</p>
      <div class="d-flex gap-2 justify-content-center mt-3">
        <a class="btn btn-primary" routerLink="/productos">Ver productos</a>
        <a class="btn btn-outline-secondary" routerLink="/panel">Ver panel</a>
      </div>
    </section>
  `
})
export class InicioComponent {}
