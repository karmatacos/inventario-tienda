import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Inventario Tienda</a>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/panel" routerLinkActive="active">Panel</a>
          <a class="nav-link" routerLink="/productos" routerLinkActive="active">Productos</a>
          <a class="nav-link" routerLink="/movimientos" routerLinkActive="active">Movimientos</a>
        </div>
      </div>
    </nav>
  `
})
export class BarraNavegacionComponent {}
