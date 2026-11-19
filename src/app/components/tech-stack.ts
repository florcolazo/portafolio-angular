import { Component, inject, input } from '@angular/core';
import { Technology } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-tech-stack',
  template: `
    <section class="section">
      <div class="section-head">
        <span class="eyebrow">{{ t().eyebrows.tech }}</span>
        <h2>{{ t().sections.tech }}</h2>
      </div>
      <div class="marquee">
        <div class="marquee-track">
          <!-- La lista va dos veces para que el desplazamiento sea continuo -->
          @for (copy of [0, 1]; track copy) {
            <div class="marquee-group" [attr.aria-hidden]="copy === 1 ? 'true' : null">
              @for (tech of technologies(); track tech.name) {
                <span class="badge big"><i [class]="tech.icon" aria-hidden="true"></i>{{ tech.name }}</span>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TechStack {
  readonly technologies = input.required<Technology[]>();
  protected readonly t = inject(LangService).t;
}
