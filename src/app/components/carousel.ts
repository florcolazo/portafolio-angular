import { Component, inject, input, output, signal } from '@angular/core';
import { LangService } from '../services/lang.service';

/** Carrusel de capturas: flechas, puntos, teclado (← →) y click para ampliar. */
@Component({
  selector: 'app-carousel',
  template: `
    <div class="carousel" tabindex="0" (keydown.arrowLeft)="prev()" (keydown.arrowRight)="next()"
         [attr.aria-label]="alt()" aria-roledescription="carrusel">
      <div class="carousel-track" [style.transform]="'translateX(-' + index() * 100 + '%)'">
        @for (image of images(); track image; let i = $index) {
          <button type="button" class="zoomable" (click)="zoom.emit(i)" [attr.tabindex]="i === index() ? null : -1"
                  [attr.aria-hidden]="i !== index() ? 'true' : null"
                  [attr.aria-label]="t().projects.zoom + ': ' + alt() + ' (' + (i + 1) + '/' + images().length + ')'">
            <img class="project-image" [src]="image" [alt]="alt() + ' (' + (i + 1) + '/' + images().length + ')'" loading="lazy" />
          </button>
        }
      </div>
      <span class="zoom-hint" aria-hidden="true"><i class="icon-maximize-2"></i></span>
      <button type="button" class="carousel-btn prev" (click)="prev()" [attr.aria-label]="t().actions.prev">
        <i class="icon-chevron-left" aria-hidden="true"></i>
      </button>
      <button type="button" class="carousel-btn next" (click)="next()" [attr.aria-label]="t().actions.next">
        <i class="icon-chevron-right" aria-hidden="true"></i>
      </button>
      <div class="carousel-dots">
        @for (image of images(); track image; let i = $index) {
          <button type="button" [class.active]="i === index()" (click)="index.set(i)"
                  [attr.aria-label]="(i + 1) + ' / ' + images().length"></button>
        }
      </div>
    </div>
  `,
})
export class Carousel {
  readonly images = input.required<string[]>();
  readonly alt = input('');
  readonly zoom = output<number>();
  protected readonly t = inject(LangService).t;
  protected readonly index = signal(0);

  protected prev() {
    const n = this.images().length;
    this.index.update((i) => (i - 1 + n) % n);
  }

  protected next() {
    this.index.update((i) => (i + 1) % this.images().length);
  }
}
