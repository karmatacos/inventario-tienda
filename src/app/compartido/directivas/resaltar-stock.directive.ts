import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({ selector: '[appResaltarStock]', standalone: true })
export class ResaltarStockDirective implements OnChanges {
  @Input({ required: true }) stock = 0;
  @Input({ required: true }) stockMinimo = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.renderer.removeClass(this.elementRef.nativeElement, 'stock-bajo');
    this.renderer.removeClass(this.elementRef.nativeElement, 'stock-agotado');

    if (this.stock === 0) {
      this.renderer.addClass(this.elementRef.nativeElement, 'stock-agotado');
    } else if (this.stock <= this.stockMinimo) {
      this.renderer.addClass(this.elementRef.nativeElement, 'stock-bajo');
    }
  }
}
