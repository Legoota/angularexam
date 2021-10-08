import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[evaluation]'
})
export class EvaluationDirective {

  private _note: number = 0;

  get colortext() { return this._note; }

  @Input("note")
  set note(v: number) { 
    this._note = v;
    if(this.note > 2) this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
    else if(this.note < 1) this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    
  }

}
