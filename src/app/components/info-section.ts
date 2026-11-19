import { Component, input } from '@angular/core';
import { Info } from '../models/portfolio.model';
import { InfoDetail } from './info-detail';
import { Reveal } from './reveal';

@Component({
  selector: 'app-info-section',
  imports: [InfoDetail, Reveal],
  template: `
    <section class="section">
      <div class="section-head" appReveal>
        @if (eyebrow(); as eyebrow) {
          <span class="eyebrow">{{ eyebrow }}</span>
        }
        <h2>{{ title() }}</h2>
      </div>
      <div class="timeline">
        @for (item of items(); track item.title + item.subtitle) {
          <app-info-detail [info]="item" appReveal />
        }
      </div>
    </section>
  `,
})
export class InfoSection {
  readonly title = input.required<string>();
  readonly eyebrow = input('');
  readonly items = input.required<Info[]>();
}
