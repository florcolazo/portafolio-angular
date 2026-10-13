import { Component, input } from '@angular/core';
import { Info } from '../models/portfolio.model';
import { InfoDetail } from './info-detail';

@Component({
  selector: 'app-info-section',
  imports: [InfoDetail],
  template: `
    <section class="stack">
      <h2>{{ title() }}</h2>
      @for (item of items(); track item.title) {
        <app-info-detail [info]="item" />
      }
    </section>
  `,
})
export class InfoSection {
  readonly title = input.required<string>();
  readonly items = input.required<Info[]>();
}
