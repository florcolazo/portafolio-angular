import { Component, computed, inject, input } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';
import { LangService } from '../services/lang.service';
import { MediaLinks } from './media';

@Component({
  selector: 'app-header',
  imports: [MediaLinks],
  template: `
    <header class="hero" id="inicio">
      <div class="hero-grid" aria-hidden="true"></div>
      <svg class="hero-waves" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true">
        @for (i of waves; track i) {
          <path [attr.d]="'M0 ' + (120 + i * 6) + ' C 150 ' + (40 + i * 10) + ', 300 ' + (260 - i * 4) + ', 600 ' + (200 + i * 5)" />
        }
      </svg>

      <div class="hero-inner">
        <div class="hero-text">
          @if (data().available; as available) {
            <span class="available"><span class="pulse" aria-hidden="true"></span>{{ available }}</span>
          }
          <div class="hero-id">
            <p class="hero-name">{{ data().name }}</p>
            <p class="hero-role">{{ data().skill }}</p>
          </div>
          <h1 class="hero-title">
            {{ headline().main }}
            @if (headline().accent; as accent) {
              <span class="accent-word">{{ accent }}</span>
            }
          </h1>
          @if (data().tagline; as tagline) {
            <p class="tagline">{{ tagline }}</p>
          }
          <div class="hero-cta">
            <a class="button solid lg" href="#proyectos"><span>{{ t().actions.viewProjects }}</span><i class="icon-arrow-down" aria-hidden="true"></i></a>
            @if (data().media.cv; as cv) {
              <a class="button lg" [href]="cv" target="_blank" rel="noopener noreferrer"><i class="icon-download" aria-hidden="true"></i><span>{{ t().actions.downloadCv }}</span></a>
            }
          </div>
          <div class="hero-meta">
            <span class="location"><i class="icon-map-pin" aria-hidden="true"></i>{{ data().location }}</span>
            <app-media [data]="data().media" />
          </div>
        </div>

        <div class="hero-photo">
          <div class="hero-photo-ring">
            <img class="avatar" [src]="data().avatar" [alt]="data().name" fetchpriority="high" />
          </div>
          @for (badge of data().badges ?? []; track badge; let i = $index) {
            <span class="float-chip" [class]="'float-chip chip-' + (i + 1)">
              <i [class]="i === 0 ? 'icon-search-check' : 'icon-code-xml'" aria-hidden="true"></i>{{ badge }}
            </span>
          }
        </div>
      </div>
    </header>
  `,
})
export class Header {
  readonly data = input.required<Portfolio>();
  protected readonly t = inject(LangService).t;
  protected readonly waves = Array.from({ length: 14 }, (_, i) => i);

  /** "Convierto … *software que se usa*." → la parte entre asteriscos va resaltada. */
  protected readonly headline = computed(() => {
    const text = this.data().headline ?? this.data().skill;
    const [main, accent = ''] = text.split('*');
    return { main: main.trim(), accent: accent.trim() };
  });
}
