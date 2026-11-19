import { Component, inject, input } from '@angular/core';
import { ProcessStep } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';
import { Reveal } from './reveal';

@Component({
  selector: 'app-process',
  imports: [Reveal],
  template: `
    <section class="section" id="proceso">
      <div class="section-head" appReveal>
        <span class="eyebrow">{{ t().eyebrows.process }}</span>
        <h2>{{ t().sections.process }}</h2>
        <p class="section-lead">{{ t().processLead }}</p>
      </div>
      <ol class="process">
        @for (step of steps(); track step.title; let i = $index) {
          <li class="process-step" appReveal [style.transition-delay]="i * 80 + 'ms'">
            <span class="process-num">0{{ i + 1 }}</span>
            <span class="process-icon"><i [class]="'icon-' + step.icon" aria-hidden="true"></i></span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </li>
        }
      </ol>
    </section>
  `,
})
export class Process {
  readonly steps = input.required<ProcessStep[]>();
  protected readonly t = inject(LangService).t;
}
