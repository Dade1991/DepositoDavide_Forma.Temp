import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightsDirectives]',
})
export class HighlightsDirectives {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
  }
}
