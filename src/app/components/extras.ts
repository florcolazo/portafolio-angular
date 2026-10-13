import { Component, inject, input } from '@angular/core';
import { Extra } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-extras',
  template: `
    <section class="stack">
      <h2>{{ t().sections.extras }}</h2>
      <div class="grid">
        @for (extra of extras(); track extra.title) {
          <a class="card" [href]="extra.url" target="_blank" rel="noopener noreferrer">
            <img [src]="extra.image" [alt]="extra.title" />
            <div class="card-body">
              <strong>{{ extra.title }}</strong>
              <span class="muted">{{ extra.description }}</span>
            </div>
          </a>
        }
      </div>
    </section>
  `,
})
export class Extras {
  readonly extras = input.required<Extra[]>();
  protected readonly t = inject(LangService).t;
}
