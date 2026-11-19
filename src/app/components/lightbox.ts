import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { LangService } from '../services/lang.service';

/** Visor de capturas a pantalla completa (usa <dialog>: Esc cierra y el foco queda adentro). */
@Component({
  selector: 'app-lightbox',
  template: `
    <dialog #dialog class="lightbox" [attr.aria-label]="alt()" (click)="onBackdrop($event)"
            (keydown.arrowLeft)="prev()" (keydown.arrowRight)="next()">
      @if (images().length) {
        <figure class="lightbox-figure">
          <img [src]="images()[index()]" [alt]="alt() + ' (' + (index() + 1) + '/' + images().length + ')'" />
          <figcaption>{{ alt() }} · {{ index() + 1 }} / {{ images().length }}</figcaption>
        </figure>
      }
      <button type="button" class="lightbox-btn close" (click)="close()" [attr.aria-label]="t().actions.close">
        <i class="icon-x" aria-hidden="true"></i>
      </button>
      @if (images().length > 1) {
        <button type="button" class="lightbox-btn prev" (click)="prev()" [attr.aria-label]="t().actions.prev">
          <i class="icon-chevron-left" aria-hidden="true"></i>
        </button>
        <button type="button" class="lightbox-btn next" (click)="next()" [attr.aria-label]="t().actions.next">
          <i class="icon-chevron-right" aria-hidden="true"></i>
        </button>
      }
    </dialog>
  `,
})
export class Lightbox {
  protected readonly t = inject(LangService).t;
  protected readonly images = signal<string[]>([]);
  protected readonly alt = signal('');
  protected readonly index = signal(0);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  open(images: string[], alt: string, index = 0): void {
    this.images.set(images);
    this.alt.set(alt);
    this.index.set(index);
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  protected prev(): void {
    const n = this.images().length;
    this.index.update((i) => (i - 1 + n) % n);
  }

  protected next(): void {
    this.index.update((i) => (i + 1) % this.images().length);
  }

  /** Click en el fondo oscuro (fuera de la imagen y los botones) cierra. */
  protected onBackdrop(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
