export type TipoMovimiento = 'Entrada' | 'Salida';

export interface MovimientoInventario {
  id: number;
  productoId: number;
  productoNombre: string;
  tipo: TipoMovimiento;
  cantidad: number;
  fecha: Date;
  observacion?: string;
}
