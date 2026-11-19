import { Component, OnDestroy, afterNextRender, computed, inject, input, signal } from '@angular/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav">
      <a class="nav-brand" href="#inicio">{{ name() }}</a>
      <div class="nav-right">
        <div class="nav-links">
          @for (link of links(); track link.id) {
            <a [href]="'#' + link.id" [class.active]="active() === link.id">{{ link.label }}</a>
          }
        </div>
        <button type="button" class="lang-toggle" (click)="lang.toggle()" aria-label="Switch language / Cambiar idioma">
          <i class="icon-languages" aria-hidden="true"></i>{{ lang.t().toggleLabel }}
        </button>
      </div>
    </nav>
  `,
})
export class Nav implements OnDestroy {
  readonly name = input.required<string>();
  protected readonly lang = inject(LangService);
  protected readonly active = signal('inicio');
  protected readonly links = computed(() => {
    const t = this.lang.t();
    return [
      { id: 'sobre-mi', label: t.nav.about },
      { id: 'proyectos', label: t.nav.projects },
      { id: 'proceso', label: t.nav.process },
      { id: 'contacto', label: t.nav.contact },
    ];
  });
  private observer?: IntersectionObserver;

  constructor() {
    // Las secciones viven fuera de este componente; observamos el DOM una vez renderizado.
    afterNextRender(() => this.setupObserver());
  }

  private setupObserver(): void {
    const ids = ['inicio', 'sobre-mi', 'proyectos', 'proceso', 'contacto'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Banda fina en el centro del viewport: la sección que la cruza queda activa.
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((section) => this.observer!.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
