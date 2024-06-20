// src/app/directives/intersection.directive.ts
import { Directive, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionDirective implements OnInit {
  @Output() visible: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // 0.5 means when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.visible.emit(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }
}
