import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'estadoStock', standalone: true })
export class EstadoStockPipe implements PipeTransform {
  transform(stock: number, stockMinimo: number): string {
    if (stock === 0) return 'Agotado';
    if (stock <= stockMinimo) return 'Bajo stock';
    return 'Disponible';
  }
}
