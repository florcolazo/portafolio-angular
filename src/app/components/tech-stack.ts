import { Component, inject, input } from '@angular/core';
import { Technology } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-tech-stack',
  template: `
    <section class="stack">
      <h2>{{ t().sections.tech }}</h2>
      <div class="wrap">
        @for (tech of technologies(); track tech.name) {
          <span class="badge big"><i [class]="tech.icon" aria-hidden="true"></i>{{ tech.name }}</span>
        }
      </div>
    </section>
  `,
})
export class TechStack {
  readonly technologies = input.required<Technology[]>();
  protected readonly t = inject(LangService).t;
}
