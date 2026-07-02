import { Routes } from '@angular/router';
import { InicioComponent } from './funcionalidades/inicio/inicio.component';
import { PanelComponent } from './funcionalidades/panel/panel.component';
import { ProductoListaComponent } from './funcionalidades/productos/producto-lista/producto-lista.component';
import { ProductoFormularioComponent } from './funcionalidades/productos/producto-formulario/producto-formulario.component';
import { ProductoDetalleComponent } from './funcionalidades/productos/producto-detalle/producto-detalle.component';
import { MovimientosComponent } from './funcionalidades/movimientos/movimientos.component';

export const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'productos', component: ProductoListaComponent },
  { path: 'productos/nuevo', component: ProductoFormularioComponent },
  { path: 'productos/editar/:id', component: ProductoFormularioComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: 'movimientos', component: MovimientosComponent },
  { path: '**', redirectTo: '' }
];
