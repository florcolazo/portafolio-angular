import { Component, inject, input } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';
import { MediaLinks } from './media';

@Component({
  selector: 'app-header',
  imports: [MediaLinks],
  template: `
    <header class="header" id="inicio">
      <img class="avatar" [src]="data().avatar" [alt]="data().name" />
      <div class="stack small">
        <h1>{{ data().name }}</h1>
        <p class="skill">{{ data().skill }}</p>
        @if (data().tagline; as tagline) {
          <p class="tagline">{{ tagline }}</p>
        }
        <p class="location"><i class="icon-map-pin" aria-hidden="true"></i>{{ data().location }}</p>
        <div class="hero-cta">
          <a class="button solid" href="#proyectos"><i class="icon-folder" aria-hidden="true"></i><span>{{ t().actions.viewProjects }}</span></a>
          <a class="button" href="#contacto"><i class="icon-send" aria-hidden="true"></i><span>{{ t().actions.contact }}</span></a>
        </div>
        <app-media [data]="data().media" />
      </div>
    </header>
  `,
})
export class Header {
  readonly data = input.required<Portfolio>();
  protected readonly t = inject(LangService).t;
}
