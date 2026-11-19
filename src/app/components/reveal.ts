import { Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

/** Aparición suave al entrar en pantalla. Respeta "reducir movimiento" vía CSS. */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal implements OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        this.el.classList.add('in');
        return;
      }
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.el.classList.add('in');
            this.observer?.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      this.observer.observe(this.el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
