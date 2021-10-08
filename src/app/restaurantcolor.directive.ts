import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[restaurantname]'
})
// pour la forme, met le titre du restaurant en gras
export class RestaurantcolorDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-weight', '700')
  }
}
