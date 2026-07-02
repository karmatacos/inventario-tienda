import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from './compartido/componentes/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraNavegacionComponent],
  template: `
    <app-barra-navegacion></app-barra-navegacion>
    <main class="container py-4">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
